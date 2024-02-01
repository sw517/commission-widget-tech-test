export default function displayCurrency(
  value: number,
  decimalPlaces: number = 2
) {
  return value.toLocaleString('en-GB', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}
