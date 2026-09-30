export function formatMXN(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M MXN`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K MXN`;
  return `$${n.toLocaleString('es-MX')} MXN`;
}

export function formatUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M USD`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K USD`;
  return `$${n.toLocaleString('en-US')} USD`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString('es-MX');
}

export function formatSavings(original: number, discount: number): string {
  const diff = original - discount;
  if (diff >= 1_000_000) return `-$${(diff / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (diff >= 1_000) return `-$${Math.round(diff / 1_000)}K`;
  return `-$${diff.toLocaleString('es-MX')}`;
}

/** Entry price for a property: USD when available, otherwise MXN (e.g. Thompson). */
export function formatPropertyFrom(p: { priceFromUSD: number; priceFromMXN: number }): string {
  if (p.priceFromUSD > 0) return formatUSD(p.priceFromUSD);
  if (p.priceFromMXN > 0) return formatMXN(p.priceFromMXN);
  return '';
}

/** Schema.org Offer price + currency matching the displayed entry price. */
export function offerPrice(p: { priceFromUSD: number; priceFromMXN: number }): { price?: string; priceCurrency: string } {
  if (p.priceFromUSD > 0) return { price: String(Math.round(p.priceFromUSD)), priceCurrency: 'USD' };
  if (p.priceFromMXN > 0) return { price: String(Math.round(p.priceFromMXN)), priceCurrency: 'MXN' };
  return { price: undefined, priceCurrency: 'USD' };
}
