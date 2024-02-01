export default function kFormat(num: number): string {
  if (Math.abs(num) <= 999) return num.toLocaleString();
  if (Math.abs(num) <= 999999) return `${num / 1000}k`;
  return num.toLocaleString();
}
