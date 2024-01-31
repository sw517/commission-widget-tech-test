import { ReactNode } from 'react';

export default function Card({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-white rounded-sm shadow-sm shadow-slate-400 p-3 text-left">
      {title && <div className="font-bold text-lg">{title}</div>}
      {children}
    </div>
  );
}
