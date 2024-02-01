import { type CommissionBreakdown as CommissionBreakdownType } from '@/types/commission';
import {
  bracketRanges,
  bracketPercentage,
} from '@/helpers/getCommissionBreakdown';
import kFormat from '@/helpers/kFormat';

export default function CommissionBreakdown({
  breakdown,
}: {
  breakdown: CommissionBreakdownType['breakdown'];
}) {
  const getLabel = (index: number): string => {
    const { min, max } = bracketRanges[index];
    if (!max) return `£${kFormat(min)}+`;
    return `£${kFormat(min)} - £${kFormat(max)}`;
  };

  return (
    <div className="break-all">
      {breakdown.map((amount, index) => (
        <div
          key={index}
          data-testid={`breakdown-bracket-${index}`}
          className="flex items-center justify-between mb-2"
        >
          <span className="shrink-0 bg-neutral-400 text-white rounded-xl pl-2 pr-1 flex justify-between items-center">
            {getLabel(index)}
            <span className="border-l-2 border-white text-xs ml-2 p-1">
              {bracketPercentage[index]}%
            </span>
          </span>{' '}
          <span
            data-testid={`breakdown-value-${index}`}
            className="ml-6 max-w-48 whitespace-nowrap overflow-auto"
          >
            £{amount.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
