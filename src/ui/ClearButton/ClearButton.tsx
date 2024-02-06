import { MouseEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function ClearButton({
  onClick,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      data-testid="clear-button"
      onClick={onClick}
      className={
        'appearance-none border-none rounded-full p-1 flex items-center justify-center bg-gray-300 text-gray-800 hover:bg-gray-400'
      }
      aria-label="Clear"
    >
      <XMarkIcon className="w-4" />
    </button>
  );
}
