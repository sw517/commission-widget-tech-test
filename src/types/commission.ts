export type Band = {
  label: string;
  percentage: number;
  range: Range;
};

export type Range = {
  min: number;
  max: number | null;
};

export type CommissionBreakdown = {
  breakdown: number[];
  total: number;
};

export const bands: Band[] = [
  { label: '£0 - £5k', percentage: 0, range: { min: 0, max: 5000 } },
  { label: '£5k - £10k', percentage: 10, range: { min: 5000, max: 10000 } },
  { label: '£10k - £15k', percentage: 15, range: { min: 10000, max: 15000 } },
  { label: '£15k - £20k', percentage: 20, range: { min: 15000, max: 20000 } },
  { label: '£20k+', percentage: 25, range: { min: 20000, max: null } },
] as const;
