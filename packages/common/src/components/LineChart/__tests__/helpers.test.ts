import { describe, expect, test } from 'vitest';

import { shortDateFormatter, getAxisDomain } from '../helpers';

describe('LineChart helpers', () => {
  describe('shortDateFormatter', () => {
    test('formats date correctly', () => {
      const date = new Date(2022, 0, 15).valueOf(); // January 15, 2022
      expect(shortDateFormatter(date)).toBe('Jan 15');
    });
  });

  describe('getAxisDomain', () => {
    test.each`
      dataMin | dataMax | expected
      ${0}    | ${100}  | ${[-100, 220]}
      ${-50}  | ${-10}  | ${[-80, 40]}
      ${50}   | ${50}   | ${[40, 60]}
    `(
      'returns the correct values for: [$dataMin, $dataMax]',
      ({ dataMin, dataMax, expected }) => {
        const data = [dataMin, dataMax];
        expect(getAxisDomain(data)).toEqual(expected);
      }
    );

    test('returns zeros if no data is provided', () => {
      expect(getAxisDomain([])).toEqual([0, 0]);
    });
  });
});
