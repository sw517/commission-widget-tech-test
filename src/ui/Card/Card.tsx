import { ReactNode } from 'react';

export default function Card({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-white rounded-md shadow-sm shadow-slate-400 p-3 text-left max-w-64 sm:max-w-md min-h-80">
      {title && <div className="font-bold text-lg mb-3">{title}</div>}
      {children}
    </div>
  );
}
