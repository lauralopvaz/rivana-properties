export function formatMXN(n: number): string {
  if (n >= 1_000_000) {
    const val = n / 1_000_000;
    const formatted = val % 1 === 0 ? val.toFixed(0) : val.toFixed(1);
    return `$${formatted}M MXN`;
  }
  if (n >= 1_000) {
    const val = n / 1_000;
    const formatted = val % 1 === 0 ? val.toFixed(0) : val.toFixed(0);
    return `$${formatted}K MXN`;
  }
  return `$${n.toLocaleString()} MXN`;
}

export function formatUSD(n: number): string {
  if (n >= 1_000_000) {
    const val = n / 1_000_000;
    const formatted = val % 1 === 0 ? val.toFixed(0) : val.toFixed(1);
    return `$${formatted}M USD`;
  }
  return `$${n.toLocaleString('en-US')} USD`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString('es-MX');
}
