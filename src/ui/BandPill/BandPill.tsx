import { Band } from '@/types/commission';
import clsx from 'clsx';

export default function BandPill({
  band,
  highlight,
}: {
  band: Band;
  highlight: boolean;
}) {
  return (
    <span
      className={clsx([
        'shrink-0  text-white rounded-xl pl-2 pr-1 flex justify-between items-center',
        highlight ? 'bg-blue-700' : 'bg-neutral-500',
      ])}
    >
      {band.label}
      <span className="border-l-2 border-white text-xs ml-2 p-1">
        {band.percentage}%
      </span>
    </span>
  );
}
