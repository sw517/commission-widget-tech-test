import { ChangeEvent, useEffect, useState, useCallback, useRef } from 'react';
import CurrencyInput from '@/ui/CurrencyInput/CurrencyInput';
import Card from '@/ui/Card/Card';
import CommissionBreakdown from '@/ui/CommissionBreakdown/CommissionBreakdown';
import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';
import mockFetch from '@/helpers/mockFetch';
import { bands } from '@/types/commission';
import { useDebounce } from '@/hooks/useDebounce';

export default function CommissionWidget() {
  const [breakdown, setBreakdown] = useState<number[]>(bands.map(() => 0));
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [revenue, setRevenue] = useState(0);
  const prevRevenue = useRef(0);
  const debouncedRevenue = useDebounce<number>(revenue);

  useEffect(() => {
    if (prevRevenue.current === debouncedRevenue) return;

    let ignore = false;
    setLoading(true);
    mockFetch()
      .then(() => {
        if (ignore) return;

        const res = getCommissionBreakdown(debouncedRevenue);
        setBreakdown(res.breakdown);
        setTotal(res.total);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
        prevRevenue.current = debouncedRevenue;
      });

    return () => {
      ignore = true;
    };
  }, [debouncedRevenue]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRevenue(Number(e.target.value));
  }, []);

  return (
    <Card title="Commission Calculator">
      <div className="mb-3">
        <CurrencyInput onChange={handleChange} loading={loading} />
      </div>
      {!!breakdown?.length && (
        <CommissionBreakdown
          revenue={debouncedRevenue}
          data={{ breakdown, total }}
        />
      )}
      <div
        data-testid="commission-total"
        className="text-right border-t-2 pt-1 font-bold max-w-full whitespace-nowrap overflow-auto"
      >
        £{total.toLocaleString()}
      </div>
    </Card>
  );
}
