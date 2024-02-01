import { Band } from '@/helpers/getCommissionBreakdown';

export default function BandPill({ band }: { band: Band }) {
  return (
    <span className="shrink-0 bg-neutral-400 text-white rounded-xl pl-2 pr-1 flex justify-between items-center">
      {band.label}
      <span className="border-l-2 border-white text-xs ml-2 p-1">
        {band.percentage}%
      </span>
    </span>
  );
}
