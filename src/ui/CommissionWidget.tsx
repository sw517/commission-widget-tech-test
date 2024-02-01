import { ChangeEvent, useEffect, useState, useCallback, useMemo } from 'react';
import CurrencyInput from '@/ui/CurrencyInput';
import Card from '@/ui/Card';
import CommissionBreakdown from '@/ui/CommissionBreakdown';
import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';
import debounce from 'lodash.debounce';
import mockFetch from '@/helpers/mockFetch';

export default function CommissionWidget() {
  const [breakdown, setBreakdown] = useState<number[]>([]);
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [revenue, setRevenue] = useState<number>();

  useEffect(() => {
    if (revenue === undefined) return;

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
      <CurrencyInput onChange={handleChange} />
      {loading && 'Loading'}
      {!!breakdown?.length && <CommissionBreakdown breakdown={breakdown} />}
      {!!total && total}
    </Card>
  );
}
