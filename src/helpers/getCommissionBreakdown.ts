import { CommissionBreakdown, Range } from '@/types/commission';

export const bracketRanges: Range[] = [
  { min: 0, max: 5000 },
  { min: 5000, max: 10000 },
  { min: 10000, max: 15000 },
  { min: 15000, max: 20000 },
  { min: 20000, max: null },
] as const;

export const bracketPercentage = [0, 10, 15, 20, 25];

export default function getCommissionBreakdown(
  revenue: number
): CommissionBreakdown {
  const breakdown = bracketRanges.map(({ min, max }, index) => {
    if (revenue < min) return 0;
    const percentage = bracketPercentage[index];
    const bracketAmount = max && revenue >= max ? max - min : revenue - min;
    return (bracketAmount / 100) * percentage;
  });
  return {
    breakdown,
    total: breakdown.reduce((acc, n) => acc + n, 0),
  };
}
