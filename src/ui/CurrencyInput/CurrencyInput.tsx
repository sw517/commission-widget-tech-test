import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import LoadingSpinner from '@/ui/LoadingSpinner/LoadingSpinner';
import ClearButton from '@/ui/ClearButton/ClearButton';

const CurrencyInput = forwardRef(function CurrencyInput(
  {
    onChange,
    onClear,
    value,
    loading,
  }: {
    value: number | '';
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    loading: boolean;
  },
  ref?: ForwardedRef<HTMLInputElement>
) {
  return (
    <label>
      <span className="block text-left mb-1">Revenue</span>
      <div className="relative">
        <span className="absolute top-1/2 left-2 -translate-y-1/2">£</span>
        <input
          ref={ref}
          data-testid="revenue-input"
          type="number"
          min="0"
          className="pl-6 pr-10 py-2 block w-full border-slate-500 border-2 rounded-md [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]"
          placeholder="0"
          value={value.toString()}
          onChange={onChange}
        />
        {loading && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <LoadingSpinner />
          </div>
        )}
        {!loading && !!value && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <ClearButton onClick={onClear} />
          </div>
        )}
      </div>
    </label>
  );
});

export default CurrencyInput;
