import { ChangeEvent } from 'react';
import LoadingSpinner from '@/ui/LoadingSpinner/LoadingSpinner';

export default function CurrencyInput({
  onChange,
  loading,
}: {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
}) {
  return (
    <label>
      <span className="block text-left mb-1">Revenue</span>
      <div className="relative">
        <span className="absolute top-1/2 left-2 -translate-y-1/2">£</span>
        <input
          data-testid="revenue-input"
          type="number"
          min="0"
          className="pl-6 pr-10 py-2 block w-full border-slate-500 border-2 rounded-md [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]"
          placeholder="0"
          onChange={onChange}
        />
        {loading && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </label>
  );
}
