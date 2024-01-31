import { ChangeEvent } from 'react';

export default function CurrencyInput({
  onInput,
}: {
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      <span className="block text-left mb-2">Revenue</span>
      <div className="relative">
        <span className="absolute top-1/2 left-2 -translate-y-1/2">£</span>
        <input
          data-testid="revenue-input"
          type="number"
          min="0"
          className="pl-6 pr-2 py-2 block w-full"
          placeholder="0"
          onChange={onInput}
        />
      </div>
    </label>
  );
}
