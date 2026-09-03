/**
 * Localized WhatsApp CTA labels.
 * The visible button text shown to users; the pre-filled wa.me message
 * is kept separately per context (unit / page / reference) and is NOT
 * changed here — only the front-facing CTA label.
 */
export type WaCtaVariant = 'conocer' | 'info' | 'recibir';

type Lang = 'es' | 'en';

const ES: Record<WaCtaVariant, string> = {
  conocer: 'Conocer Más',
  info: 'Más información',
  recibir: 'Recibir más información',
};

const EN: Record<WaCtaVariant, string> = {
  conocer: 'Get Details',
  info: 'Request Info',
  recibir: 'Get More Info',
};

export const waCta = (language: Lang, variant: WaCtaVariant = 'conocer'): string =>
  language === 'en' ? EN[variant] : ES[variant];
