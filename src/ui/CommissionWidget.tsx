import { ChangeEvent, useState } from 'react';
import CurrencyInput from '@/ui/CurrencyInput';
import Card from '@/ui/Card';
import CommissionBreakdown from '@/ui/CommissionBreakdown';
import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';

export default function CommissionWidget() {
  const [revenue, setRevenue] = useState<number>();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRevenue(Number(e.target.value));
  };

  return (
    <Card title="Commission Calculator">
      <CurrencyInput onInput={handleInput} />
      {!!revenue && (
        <CommissionBreakdown
          breakdown={getCommissionBreakdown(revenue).breakdown}
        />
      )}
    </Card>
  );
}
