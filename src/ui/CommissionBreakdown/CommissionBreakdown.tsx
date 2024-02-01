import { type CommissionBreakdown as CommissionBreakdownType } from '@/types/commission';
import { bands } from '@/helpers/getCommissionBreakdown';
import BandPill from '../BandPill/BandPill';

export default function CommissionBreakdown({
  breakdown,
}: {
  breakdown: CommissionBreakdownType['breakdown'];
}) {
  return (
    <div className="break-all">
      {breakdown.map((amount, index) => (
        <div
          key={index}
          data-testid={`breakdown-bracket-${index}`}
          className="flex items-center justify-between mb-2"
        >
          <BandPill band={bands[index]} />{' '}
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
