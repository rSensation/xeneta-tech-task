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

export interface CommonChartProps {
  lines: LineItem[];
  data?: Record<string, number>[];
  gridProps?: CartesianGridProps;
  xAxisPpops?: XAxisProps;
  yAxisProps?: YAxisProps;
  tooltipProps?: TooltipProps<number, string>;
  lineProps?: Omit<LineProps, 'ref'>;
}
