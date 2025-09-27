export function parseCurrency(text: string): number {
  const cleaned = text
    .replace(/[^\d,.\s]/g, '')
    .replace(/\s+/g, '')
    .replace(/\.(?=\d{3}\b)/g, '')
    .replace(/,(?=\d{3}\b)/g, '');

  const lastComma = cleaned.lastIndexOf(',');
  const lastDot = cleaned.lastIndexOf('.');
  const normalized = lastComma > lastDot
    ? cleaned.replace(/\./g, '').replace(',', '.')
    : cleaned.replace(/,/g, '');

  const n = Number(normalized);
  return Number.isFinite(n) ? n : NaN;
}
