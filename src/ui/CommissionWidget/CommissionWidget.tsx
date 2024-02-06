import { ChangeEvent, useEffect, useState, useCallback, useRef } from 'react';
import CurrencyInput from '@/ui/CurrencyInput/CurrencyInput';
import Card from '@/ui/Card/Card';
import CommissionBreakdown from '@/ui/CommissionBreakdown/CommissionBreakdown';
import mockFetch from '@/helpers/mockFetch';
import { useDebounce } from '@/hooks/useDebounce';
import EmptyState from '@/ui/EmptyState/EmptyState';
import { Band } from '@/types/commission';

export default function CommissionWidget() {
  const [breakdown, setBreakdown] = useState<number[]>([]);
  const [total, setTotal] = useState(0);
  const [bands, setBands] = useState<Band[]>([]);
  const [loading, setLoading] = useState(false);
  const [revenue, setRevenue] = useState<number | ''>('');
  const [error, setError] = useState('');
  const [isApiBad, setIsApiBad] = useState(false);
  const prevRevenue = useRef(0);
  const debouncedRevenue = useDebounce<number | ''>(revenue);

  useEffect(() => {
    if (!debouncedRevenue || prevRevenue.current === debouncedRevenue) return;

    let ignore = false;
    setLoading(true);
    mockFetch('fake-api-url', debouncedRevenue, isApiBad)
      .then((res) => res.json())
      .then((data) => {
        if (ignore) return;
        setBreakdown(data.breakdown);
        setTotal(data.total);
        setBands(data.bands);
        setError('');
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        if (ignore) return;
        setLoading(false);
        prevRevenue.current = debouncedRevenue;
      });

    return () => {
      ignore = true;
      setLoading(false);
    };
  }, [debouncedRevenue, isApiBad]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value?.length > 1 && e.target.value[0] === '0') {
      const trimmedInput = Number(e.target.value.slice(0));
      setRevenue(trimmedInput);
    } else {
      setRevenue(Number(e.target.value));
    }
  }, []);

  const handleClear = useCallback(() => {
    setRevenue(0);
  }, []);

  const handleApiErrorInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsApiBad(e.target.checked);
    },
    []
  );

  return (
    <>
      <Card title="Commission Calculator">
        <div className="mb-3">
          <CurrencyInput
            onChange={handleChange}
            onClear={handleClear}
            loading={loading}
            value={revenue}
          />
        </div>

        {!debouncedRevenue && <EmptyState />}
        {!loading && !!debouncedRevenue && error}
        {!!debouncedRevenue && !error && (loading || !!breakdown?.length) && (
          <CommissionBreakdown
            revenue={debouncedRevenue}
            loading={loading}
            data={{ breakdown, total, bands }}
          />
        )}
      </Card>
      <label className="mt-6 flex items-center">
        <input
          type="checkbox"
          value="true"
          checked={isApiBad}
          onChange={handleApiErrorInput}
        />
        <span className="ml-1">Simulate Bad Response</span>
      </label>
    </>
  );
}
