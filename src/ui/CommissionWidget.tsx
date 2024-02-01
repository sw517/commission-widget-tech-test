import {
  ChangeEvent,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import CurrencyInput from '@/ui/CurrencyInput';
import Card from '@/ui/Card';
import CommissionBreakdown from '@/ui/CommissionBreakdown';
import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';
import debounce from 'lodash.debounce';
import mockFetch from '@/helpers/mockFetch';
import { bracketRanges } from '@/helpers/getCommissionBreakdown';

export default function CommissionWidget() {
  const [breakdown, setBreakdown] = useState<number[]>(
    bracketRanges.map(() => 0)
  );
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [revenue, setRevenue] = useState(0);
  const prevRevenue = useRef(0);

  useEffect(() => {
    if (prevRevenue.current === revenue) return;

    let ignore = false;
    setLoading(true);
    mockFetch()
      .then(() => {
        if (ignore) return;

        const res = getCommissionBreakdown(revenue);
        setBreakdown(res.breakdown);
        setTotal(res.total);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
        prevRevenue.current = revenue;
      });

    return () => {
      ignore = true;
    };
  }, [revenue]);

  const debouncedHandleInput = useMemo(() => {
    return debounce((input: number) => {
      setRevenue(input);
    }, 400);
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debouncedHandleInput(Number(e.target.value));
    },
    [debouncedHandleInput]
  );

  return (
    <Card title="Commission Calculator">
      <div className="mb-3">
        <CurrencyInput onChange={handleChange} loading={loading} />
      </div>
      {!!breakdown?.length && <CommissionBreakdown breakdown={breakdown} />}
      <div
        data-testid="commission-total"
        className="text-right border-t-2 pt-1 font-bold max-w-full whitespace-nowrap overflow-auto"
      >
        £{total.toLocaleString()}
      </div>
    </Card>
  );
}
