import { useEffect, lazy, Suspense } from "react";
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

// Eagerly load the homepage so the initial paint is not delayed by a chunk fetch.
import Index from "./pages/Index";
// Lazy-load remaining routes to reduce initial JS payload.
const DestinationPage = lazy(() => import("./pages/DestinationPage"));
const PreSale = lazy(() => import("./pages/PreSale"));
const Listings = lazy(() => import("./pages/Listings"));
const Journal = lazy(() => import("./pages/Journal"));
const JournalPost = lazy(() => import("./pages/JournalPost"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PropertyDetailNew = lazy(() => import("./pages/PropertyDetailNew"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CancunCondos = lazy(() => import("./pages/CancunCondos"));
const BeachfrontCondos = lazy(() => import("./pages/BeachfrontCondos"));
const Advisory = lazy(() => import("./pages/Advisory"));
const LaAmada = lazy(() => import("./pages/LaAmada"));
const ImmediateDelivery = lazy(() => import("./pages/ImmediateDelivery"));
const SalviaBuilding = lazy(() => import("./pages/SalviaBuilding"));
const SalviaUnit = lazy(() => import("./pages/SalviaUnit"));
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
    <Route path="/costa-mujeres/la-amada" element={<LaAmada />} />

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
    <Route path="/cancun/departamentos-en-venta" element={<CancunCondos />} />
    <Route path="/entregas-inmediatas" element={<ImmediateDelivery />} />
    <Route path="/zona-hotelera/edificio-salvia" element={<SalviaBuilding />} />
    <Route path="/zona-hotelera/edificio-salvia/:slug" element={<SalviaUnit />} />

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
    <Route path="/en/cancun/costa-mujeres/penthouses" element={<Navigate to="/en/cancun/costa-mujeres" replace />} />
    <Route path="/en/costa-mujeres/la-amada" element={<LaAmada />} />

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
    <Route path="/en/cancun/condos-for-sale" element={<CancunCondos />} />
    <Route path="/en/cancun/beachfront-condos-for-sale" element={<BeachfrontCondos />} />
    <Route path="/en/advisory" element={<Advisory />} />
    <Route path="/en/immediate-delivery" element={<ImmediateDelivery />} />
    <Route path="/en/hotel-zone/salvia-building" element={<SalviaBuilding />} />
    <Route path="/en/hotel-zone/salvia-building/:slug" element={<SalviaUnit />} />

    {/* Redirects — consolidate all property routes to canonical paths */}
    <Route path="/property/:slug" element={<RedirectPropertyEN />} />
    <Route path="/en/propiedad/:slug" element={<RedirectToENProperty />} />
    <Route path="/propiedades" element={<Navigate to="/listings" replace />} />
    <Route path="/nosotros" element={<Navigate to="/about" replace />} />

    {/* Legacy WordPress / old-site catch-all redirects */}
    <Route path="/wp-admin/*" element={<Navigate to="/" replace />} />
    <Route path="/wp-content/*" element={<Navigate to="/" replace />} />
    <Route path="/wp-includes/*" element={<Navigate to="/" replace />} />
    <Route path="/feed/*" element={<Navigate to="/" replace />} />
    <Route path="/tag/*" element={<Navigate to="/listings" replace />} />
    <Route path="/category/*" element={<Navigate to="/listings" replace />} />
    <Route path="/features/*" element={<Navigate to="/our-properties/" replace />} />
    <Route path="/status/*" element={<Navigate to="/our-properties/" replace />} />
    <Route path="/compare-listings/*" element={<Navigate to="/our-properties/" replace />} />
    <Route path="/property-type/*" element={<Navigate to="/our-properties/" replace />} />

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

/** Sends a pageview to GA4 on every route change */
const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Suspense fallback={null}>
              <AppRoutes />
            </Suspense>
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
