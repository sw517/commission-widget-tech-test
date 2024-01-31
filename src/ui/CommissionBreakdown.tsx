import { type CommissionBreakdown as CommissionBreakdownType } from '@/types/commission';
import { bracketRanges } from '@/helpers/getCommissionBreakdown';

export default function CommissionBreakdown({
  breakdown,
}: {
  breakdown: CommissionBreakdownType['breakdown'];
}) {
  const getLabel = (index: number): string => {
    const { min, max } = bracketRanges[index];
    if (!max) return `£${min}+`;
    return `£${min} - £${max}`;
  };

  return (
    <div>
      {breakdown.map((amount, index) => (
        <div>
          <span>{getLabel(index)}</span> - <span>£{amount}</span>
        </div>
      ))}
    </div>
  );
}
