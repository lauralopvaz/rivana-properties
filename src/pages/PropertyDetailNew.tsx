import { useParams } from "react-router-dom";
import { PropertyPage } from "@/components/property/PropertyPage";
import { getPropertyBySlug } from "@/lib/properties";
import type { Locale } from "@/types/property";
import NotFound from "./NotFound";

interface PropertyDetailNewProps {
  locale?: Locale;
}

export default function PropertyDetailNew({ locale = "es" }: PropertyDetailNewProps) {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? getPropertyBySlug(slug) : undefined;

  if (!property) return <NotFound />;

  return <PropertyPage property={property} locale={locale} />;
}
