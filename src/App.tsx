import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SchedulingModalProvider } from "@/contexts/SchedulingModalContext";
import { SchedulingModal } from "@/components/SchedulingModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GrainOverlay } from "@/components/GrainOverlay";

import Index from "./pages/Index";
import DestinationPage from "./pages/DestinationPage";
import PropertyDetail from "./pages/PropertyDetail";
import PreSale from "./pages/PreSale";
import Listings from "./pages/Listings";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PropertyDetailNew from "./pages/PropertyDetailNew";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useParams } from "react-router-dom";

/** Redirect /property/:slug → /en/property/:slug */
const RedirectPropertyEN = () => {
  const { slug } = useParams();
  return <Navigate to={`/en/property/${slug}`} replace />;
};

/** Redirect /en/propiedad/:slug → /en/property/:slug */
const RedirectToENProperty = () => {
  const { slug } = useParams();
  return <Navigate to={`/en/property/${slug}`} replace />;
};

const queryClient = new QueryClient();

/**
 * Route definitions for both ES (default) and EN (/en prefix).
 * Geographic slugs are the same in both languages.
 */
const AppRoutes = () => (
  <Routes>
    {/* ── SPANISH (default) ── */}
    <Route path="/" element={<Index />} />

    {/* P1: Zona Hotelera */}
    <Route path="/cancun/zona-hotelera" element={<DestinationPage destinationKey="zona-hotelera" />} />
    <Route path="/cancun/zona-hotelera/condos" element={<DestinationPage destinationKey="zona-hotelera" subPage="condos" />} />
    <Route path="/cancun/zona-hotelera/penthouses" element={<DestinationPage destinationKey="zona-hotelera" subPage="penthouses" />} />
    <Route path="/cancun/zona-hotelera/preventa" element={<DestinationPage destinationKey="zona-hotelera" subPage="preventa" />} />

    {/* P1: Puerto Cancún */}
    <Route path="/cancun/puerto-cancun" element={<DestinationPage destinationKey="puerto-cancun" />} />
    <Route path="/cancun/puerto-cancun/marina" element={<DestinationPage destinationKey="puerto-cancun" subPage="marina" />} />
    <Route path="/cancun/puerto-cancun/preventa" element={<DestinationPage destinationKey="puerto-cancun" subPage="preventa" />} />
    <Route path="/cancun/puerto-cancun/condos" element={<DestinationPage destinationKey="puerto-cancun" subPage="condos" />} />

    {/* P1: Costa Mujeres */}
    <Route path="/cancun/costa-mujeres" element={<DestinationPage destinationKey="costa-mujeres" />} />
    <Route path="/cancun/costa-mujeres/preventa" element={<DestinationPage destinationKey="costa-mujeres" subPage="preventa" />} />
    <Route path="/cancun/costa-mujeres/penthouses" element={<DestinationPage destinationKey="costa-mujeres" subPage="penthouses" />} />

    {/* P2: Mayakoba, Puerto Morelos & Playa del Carmen */}
    <Route path="/mayakoba" element={<DestinationPage destinationKey="mayakoba" />} />
    <Route path="/puerto-morelos" element={<DestinationPage destinationKey="puerto-morelos" />} />
    <Route path="/playa-del-carmen" element={<DestinationPage destinationKey="playa-del-carmen" />} />
    <Route path="/playa-del-carmen/condos" element={<DestinationPage destinationKey="playa-del-carmen" subPage="condos" />} />
    <Route path="/playa-del-carmen/preventa" element={<DestinationPage destinationKey="playa-del-carmen" subPage="preventa" />} />

    {/* P3: Cancún Centro & Tulum */}
    <Route path="/cancun/centro" element={<DestinationPage destinationKey="cancun-centro" />} />
    <Route path="/cancun/centro/condos" element={<DestinationPage destinationKey="cancun-centro" subPage="condos" />} />
    <Route path="/tulum" element={<DestinationPage destinationKey="tulum" />} />

    {/* Journal */}
    <Route path="/journal" element={<Journal />} />
    <Route path="/journal/:slug" element={<JournalPost />} />

    {/* Other pages */}
    <Route path="/about" element={<About />} />
    <Route path="/listings" element={<Listings />} />
    <Route path="/presale" element={<PreSale />} />
    <Route path="/propiedad/:slug" element={<PropertyDetailNew locale="es" />} />
    <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />

    {/* ── ENGLISH (/en prefix) ── */}
    <Route path="/en" element={<Index />} />

    {/* P1: Zona Hotelera */}
    <Route path="/en/cancun/zona-hotelera" element={<DestinationPage destinationKey="zona-hotelera" />} />
    <Route path="/en/cancun/zona-hotelera/condos" element={<DestinationPage destinationKey="zona-hotelera" subPage="condos" />} />
    <Route path="/en/cancun/zona-hotelera/penthouses" element={<DestinationPage destinationKey="zona-hotelera" subPage="penthouses" />} />
    <Route path="/en/cancun/zona-hotelera/preventa" element={<DestinationPage destinationKey="zona-hotelera" subPage="preventa" />} />

    {/* P1: Puerto Cancún */}
    <Route path="/en/cancun/puerto-cancun" element={<DestinationPage destinationKey="puerto-cancun" />} />
    <Route path="/en/cancun/puerto-cancun/marina" element={<DestinationPage destinationKey="puerto-cancun" subPage="marina" />} />
    <Route path="/en/cancun/puerto-cancun/preventa" element={<DestinationPage destinationKey="puerto-cancun" subPage="preventa" />} />
    <Route path="/en/cancun/puerto-cancun/condos" element={<DestinationPage destinationKey="puerto-cancun" subPage="condos" />} />

    {/* P1: Costa Mujeres */}
    <Route path="/en/cancun/costa-mujeres" element={<DestinationPage destinationKey="costa-mujeres" />} />
    <Route path="/en/cancun/costa-mujeres/preventa" element={<DestinationPage destinationKey="costa-mujeres" subPage="preventa" />} />
    <Route path="/en/cancun/costa-mujeres/penthouses" element={<DestinationPage destinationKey="costa-mujeres" subPage="penthouses" />} />

    {/* P2 */}
    <Route path="/en/mayakoba" element={<DestinationPage destinationKey="mayakoba" />} />
    <Route path="/en/puerto-morelos" element={<DestinationPage destinationKey="puerto-morelos" />} />
    <Route path="/en/playa-del-carmen" element={<DestinationPage destinationKey="playa-del-carmen" />} />
    <Route path="/en/playa-del-carmen/condos" element={<DestinationPage destinationKey="playa-del-carmen" subPage="condos" />} />
    <Route path="/en/playa-del-carmen/preventa" element={<DestinationPage destinationKey="playa-del-carmen" subPage="preventa" />} />

    {/* P3 */}
    <Route path="/en/cancun/centro" element={<DestinationPage destinationKey="cancun-centro" />} />
    <Route path="/en/cancun/centro/condos" element={<DestinationPage destinationKey="cancun-centro" subPage="condos" />} />
    <Route path="/en/tulum" element={<DestinationPage destinationKey="tulum" />} />

    {/* Journal EN */}
    <Route path="/en/journal" element={<Journal />} />
    <Route path="/en/journal/:slug" element={<JournalPost />} />

    {/* Other pages EN */}
    <Route path="/en/about" element={<About />} />
    <Route path="/en/listings" element={<Listings />} />
    <Route path="/en/presale" element={<PreSale />} />
    <Route path="/en/property/:slug" element={<PropertyDetailNew locale="en" />} />
    <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />

    {/* Redirects — consolidate all property routes to canonical paths */}
    <Route path="/property/:slug" element={<RedirectPropertyEN />} />
    <Route path="/en/propiedad/:slug" element={<RedirectToENProperty />} />
    <Route path="/propiedades" element={<Navigate to="/listings" replace />} />

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

/** Sends a pageview to GA4 on every route change */
const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("config", "G-GF2HEGMYK1", { page_path: location.pathname + location.search });
    }
  }, [location]);
  return null;
};

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <RouteTracker />
        <LanguageProvider>
          <SchedulingModalProvider>
            <Toaster />
            <Sonner />
            
            <GrainOverlay />
            <Navbar />
            <AppRoutes />
            <Footer />
            <WhatsAppButton />
            <SchedulingModal />
          </SchedulingModalProvider>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
