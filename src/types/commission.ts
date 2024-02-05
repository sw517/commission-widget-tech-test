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
  bands: Band[];
  breakdown: number[];
  total: number;
};
