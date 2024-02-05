import clsx from 'clsx';

export default function SkeletonLoader({ className }: { className?: string }) {
  return <div className={clsx(['block bg-neutral-300 h-6', className])}></div>;
}
