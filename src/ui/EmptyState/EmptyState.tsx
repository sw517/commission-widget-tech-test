import { CalculatorIcon } from '@heroicons/react/24/outline';

export default function EmptyState() {
  return (
    <div
      data-testid="empty-state"
      className="flex flex-col items-center text-center px-2 py-6"
    >
      <CalculatorIcon className="max-w-12 mb-4" />
      <div>Nothing to see yet.</div>
      <div>Start typing to calculate commission</div>
    </div>
  );
}
