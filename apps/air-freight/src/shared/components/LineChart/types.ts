import {
  CartesianGridProps,
  LineProps,
  TooltipProps,
  XAxisProps,
  YAxisProps,
} from 'recharts';

export interface LineItem {
  id: string;
  color: string;
  label?: string;
}

export interface LineChartData {
  day: number;
  low: number;
  mean: number;
  high: number;
}

export interface CommonChartProps {
  lines: LineItem[];
  data?: LineChartData[];
  gridProps?: CartesianGridProps;
  xAxisPpops?: XAxisProps;
  yAxisProps?: YAxisProps;
  tooltipProps?: TooltipProps<number, string>;
  lineProps?: Omit<LineProps, 'ref'>;
}
