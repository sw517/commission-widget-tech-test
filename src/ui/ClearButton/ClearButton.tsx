import { MouseEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

export default function ClearButton({
  onClick,
  disabled,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx([
        'appearance-none h-11 border-none px-3 py-2 flex items-center justify-center',
        disabled
          ? 'bg-gray-300 text-gray-800 pointer-events-none'
          : 'bg-red-200 text-red-900 hover:bg-red-300',
      ])}
      disabled={disabled}
    >
      <XMarkIcon className="w-6" />
    </button>
  );
}
