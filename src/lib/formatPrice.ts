export function formatMXN(n: number): string {
  if (n >= 1_000_000) {
    const val = (n / 1_000_000).toFixed(1).replace(/\.0$/, "");
    return `$${val}M MXN`;
  }
  if (n >= 1_000) {
    return `$${Math.round(n / 1_000)}K MXN`;
  }
  return `$${n.toLocaleString("es-MX")} MXN`;
}

export function formatUSD(n: number): string {
  if (n >= 1_000_000) {
    const val = (n / 1_000_000).toFixed(1).replace(/\.0$/, "");
    return `$${val}M USD`;
  }
  return `$${n.toLocaleString("en-US")} USD`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString("es-MX");
}
