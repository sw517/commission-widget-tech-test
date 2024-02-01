import { type CommissionBreakdown as CommissionBreakdownType } from '@/types/commission';
import { bracketRanges } from '@/helpers/getCommissionBreakdown';

export default function CommissionBreakdown({
  breakdown,
}: {
  breakdown: CommissionBreakdownType['breakdown'];
}) {
  const getLabel = (index: number): string => {
    const { min, max } = bracketRanges[index];
    if (!max) return `£${min.toLocaleString()}+`;
    return `£${min.toLocaleString()} - £${max.toLocaleString()}`;
  };

  return (
    <div>
      {breakdown.map((amount, index) => (
        <div key={index}>
          <span className="text-neutral-500">{getLabel(index)}</span> -{' '}
          <span>£{amount.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
