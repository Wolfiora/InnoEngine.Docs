/** Keep short columns intrinsic; reduce the largest columns to a shared ceiling. */
export function tableWidths(preferred: number[], minimum: number[], available: number): number[] {
  if (!preferred.length) return [];
  const natural = preferred.map((width, index) => Math.max(width, minimum[index]));
  const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);
  const target = Math.max(available, sum(minimum));
  if (sum(natural) <= target) {
    natural[natural.length - 1] += target - sum(natural);
    return natural;
  }
  let low = 0, high = Math.max(...natural);
  for (let iteration = 0; iteration < 48; iteration++) {
    const ceiling = (low + high) / 2;
    const widths = natural.map((width, index) => Math.max(minimum[index], Math.min(width, ceiling)));
    if (sum(widths) > target) high = ceiling; else low = ceiling;
  }
  return natural.map((width, index) => Math.max(minimum[index], Math.min(width, low)));
}
