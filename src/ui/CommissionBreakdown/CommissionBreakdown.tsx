import {
  type CommissionBreakdown as CommissionBreakdownType,
  bands,
} from '@/types/commission';
import BandPill from '../BandPill/BandPill';

export default function CommissionBreakdown({
  data,
  revenue,
}: {
  data: CommissionBreakdownType;
  revenue: number;
}) {
  return (
    <div className="break-all">
      {data.breakdown.map((amount, index) => (
        <div
          key={index}
          data-testid={`breakdown-bracket-${index}`}
          className="flex items-center justify-between mb-2"
        >
          <BandPill
            band={bands[index]}
            highlight={revenue > bands[index].range.min}
          />{' '}
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
