import { CommissionBreakdown } from '@/types/commission';
import { bands } from '@/data/bands';

export default function getCommissionBreakdown(
  revenue: number
): CommissionBreakdown {
  const breakdown = bands.map(({ range: { min, max }, percentage }) => {
    if (revenue < min) return 0;
    const bracketAmount = max && revenue >= max ? max - min : revenue - min;
    return (bracketAmount / 100) * percentage;
  });
  return {
    bands,
    breakdown,
    total: breakdown.reduce((acc, n) => acc + n, 0),
  };
}
