// Single source of truth for Thompson Residences pricing & naming.
export const THOMPSON_SLUG = 'thompson-residences-puerto-cancun';
export const THOMPSON_PRICE_MXN = 14606338;
export const THOMPSON_NAME = 'Thompson Residences';
export const THOMPSON_LONG_NAME = 'Thompson Private Residences Puerto Cancún';

type Lang = 'es' | 'en';

/** Short card price: "$14.6M MXN" */
export const THOMPSON_PRICE_SHORT = '$14.6M MXN';

/** "Desde $14.6M MXN" / "From $14.6M MXN" */
export const thompsonFrom = (lang: Lang) =>
  lang === 'en' ? `From ${THOMPSON_PRICE_SHORT}` : `Desde ${THOMPSON_PRICE_SHORT}`;

/** Card subtitle: "Residencias de 2 a 5 rec." */
export const thompsonBedsLabel = (lang: Lang) =>
  lang === 'en' ? '2 to 5-bed residences' : 'Residencias de 2 a 5 rec.';

export const thompsonUnitAdvisor = (lang: Lang) =>
  lang === 'en' ? 'Pricing and availability with your advisor' : 'Precio y disponibilidad con tu asesor';

export const thompsonUnitWaUrl = (lang: Lang, unitName: string) => {
  const text =
    lang === 'en'
      ? `THOMPSON — Hi, I'm interested in unit ${unitName} at Thompson Residences. Could you share pricing and availability?`
      : `THOMPSON — Hola, me interesa la unidad ${unitName} de Thompson Residences. ¿Me compartes precio y disponibilidad?`;
  return `https://wa.me/529988457224?text=${encodeURIComponent(text)}&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=thompson-unit`;
};
