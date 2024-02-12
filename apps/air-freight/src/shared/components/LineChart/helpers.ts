/**
 * Converts a date into its short string representation
 * e.g. 'Jan 02'
 * @param value numeric value of a date
 * @returns a short date string representation
 */
export const shortDateFormatter = (value: number) =>
  new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

/**
 * Generates the axis' min and max value by adding some empty space around the data
 * @param dataThresholds an array containing a min and max values of a dataset
 * @returns an array of axis' min and max value
 */
export const getAxisDomain = ([dataMin, dataMax]: number[]): [number, number] => {
  const diff = dataMax - dataMin;
  const min = dataMin - diff;
  const max = dataMax + diff;
  return [(min - (min % 20)) || 0, (max + 20 - (max % 20)) || 0];
};
