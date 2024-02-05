import { type CommissionBreakdown as CommissionBreakdownType } from '@/types/commission';
import BandPill from '../BandPill/BandPill';
import displayCurrency from '@/helpers/displayCurrency';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

export default function CommissionBreakdown({
  data,
  revenue,
  loading,
}: {
  data: CommissionBreakdownType;
  revenue: number;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div data-testid="commission-breakdown-loading">
        {[...Array(5).keys()].map((i) => (
          <div key={i} className="flex mb-2 w-full justify-between">
            <SkeletonLoader className="mr-4 rounded-xl w-4/12" />
            <SkeletonLoader className="w-3/12 rounded-md" />
          </div>
        ))}
        <div className="flex items-center justify-between border-t-2 pt-1  max-w-full whitespace-nowrap overflow-auto">
          <span>Commission Total:</span>
          <SkeletonLoader className="w-3/12 rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div data-testid="commission-breakdown" className="break-all">
      {data.breakdown.map((amount, index) => (
        <div
          key={index}
          data-testid={`breakdown-bracket-${index}`}
          className="flex items-center justify-between mb-2"
        >
          <BandPill
            band={data.bands[index]}
            highlight={revenue > data.bands[index].range.min}
          />{' '}
          <span
            data-testid={`breakdown-value-${index}`}
            className="ml-6 max-w-48 whitespace-nowrap overflow-auto"
          >
            £{displayCurrency(amount)}
          </span>
        </div>
      ))}
      <div
        data-testid="commission-total"
        className="flex items-center justify-between border-t-2 pt-1  max-w-full whitespace-nowrap overflow-auto"
      >
        <span>Commission Total:</span>
        <span className="ml-5 font-bold">£{displayCurrency(data.total)}</span>
      </div>
    </div>
  );
}
