import { renderHook, act } from '@testing-library/react';
import { format, isSameDay, toDate } from 'date-fns';

import { getLastAvailableDay } from '@/helpers/getLastAvailableDay';
import { overlapsRange } from '@/helpers/overlapsRange';
import { DateOrRange } from '@/types';

import { useRangePicker } from './useRangePicker';

const TO_STRING_FORMAT = 'MMMM d, yyyy';

describe('useRangePicker', () => {
  it('should initialize with default values', () => {
    const defaultValue: [string, string] = ['01-02-2024', '01-10-2024'];
    const { result } = renderHook(() => useRangePicker({ defaultValue }));

    const expectedStartDate = toDate(new Date('2024-01-02T00:00:00'));
    const expectedEndDate = toDate(new Date('2024-01-10T00:00:00'));

    expect(
      isSameDay(toDate(result.current.startDate!), expectedStartDate),
    ).toBe(true);
    expect(isSameDay(toDate(result.current.endDate!), expectedEndDate)).toBe(
      true,
    );
  });

  it('should unset start and end dates if they overlap with locked dates', () => {
    const excludeDates: DateOrRange[] = [['01-02-2024', '01-10-2024']];
    const defaultValue: [string, string] = ['01-05-2024', '01-06-2024'];
    const { result } = renderHook(() =>
      useRangePicker({ excludeDates, defaultValue }),
    );

    expect(result.current.startDate).toBeUndefined();
    expect(result.current.endDate).toBeUndefined();
  });

  it('should handle date range changes correctly', () => {
    const excludeDates: DateOrRange[] = [['01-05-2024', '01-10-2024']];
    const { result } = renderHook(() => useRangePicker({ excludeDates }));

    act(() => {
      result.current.onChange([
        new Date('2024-01-02T00:00:00'),
        new Date('2024-01-04T00:00:00'),
      ]);
    });

    console.log(result.current.startDate);

    expect(
      isSameDay(
        toDate(result.current.startDate!),
        toDate(new Date('2024-01-02T00:00:00')),
      ),
    ).toBe(true);
    expect(
      isSameDay(
        toDate(result.current.endDate!),
        toDate(new Date('2024-01-04T00:00:00')),
      ),
    ).toBe(true);

    act(() => {
      result.current.onChange([
        new Date('2024-01-02T00:00:00'),
        new Date('2024-01-06T00:00:00'),
      ]);
    });

    expect(
      isSameDay(
        toDate(result.current.startDate!),
        toDate(new Date('2024-01-02T00:00:00')),
      ),
    ).toBe(true);
    expect(
      isSameDay(
        toDate(result.current.endDate!),
        toDate(new Date('2024-01-04T00:00:00')),
      ),
    ).toBe(true); // Adjusted to avoid overlap
  });

  it('should handle onClose correctly', () => {
    const { result } = renderHook(() => useRangePicker({}));

    act(() => {
      result.current.onChange([new Date('2024-01-02T00:00:00'), null]);
    });

    console.log(
      isSameDay(
        toDate(result.current.startDate!),
        toDate(new Date('2024-01-02T00:00:00')),
      ),
    );

    expect(
      isSameDay(
        toDate(result.current.startDate!),
        toDate(new Date('2024-01-02T00:00:00')),
      ),
    ).toBe(true);
    expect(result.current.endDate).toBeUndefined();

    act(() => {
      result.current.onClose();
    });

    expect(
      isSameDay(
        toDate(result.current.endDate!),
        toDate(new Date('2024-01-03T00:00:00')),
      ),
    ).toBe(true); // Adjusted to the next day
  });

  it('should convert start and end dates to string format correctly', () => {
    const { result } = renderHook(() => useRangePicker({}));

    act(() => {
      result.current.onChange([
        new Date('2024-01-02T00:00:00'),
        new Date('2024-01-05T00:00:00'),
      ]);
    });

    const expectedString = `${format(toDate(new Date('2024-01-02T00:00:00')), TO_STRING_FORMAT)} - ${format(toDate(new Date('2024-01-05T00:00:00')), TO_STRING_FORMAT)}`;
    expect(result.current.toString()).toEqual(expectedString);

    act(() => {
      result.current.onChange([new Date('2024-01-02T00:00:00'), null]);
    });

    const expectedStringCheckOut = `${format(toDate(new Date('2024-01-02T00:00:00')), TO_STRING_FORMAT)} - Check-out`;
    expect(result.current.toString()).toEqual(expectedStringCheckOut);
  });
});

describe('getLastAvailableDay', () => {
  it('should return the last available day before a locked date', () => {
    const start = new Date('2024-01-02T00:00:00');
    const lockedDates = [
      new Date('2024-01-05T00:00:00'),
      new Date('2024-01-10T00:00:00'),
    ];

    const result = getLastAvailableDay(start, lockedDates) || undefined;
    const expectedDate = toDate(new Date('2024-01-04T00:00:00'));

    expect(isSameDay(toDate(result!), expectedDate)).toBe(true);
  });

  it('should return null if no valid date is found', () => {
    const start = new Date('2024-01-02T00:00:00');
    const lockedDates = [new Date('2024-01-02T00:00:00')];

    const result = getLastAvailableDay(start, lockedDates);

    expect(result).toBeNull();
  });
});

describe('overlapsRange', () => {
  it('should return true if the range overlaps with locked dates', () => {
    const start = new Date('2024-01-02T00:00:00');
    const end = new Date('2024-01-10T00:00:00');
    const lockedDates = [new Date('2024-01-05T00:00:00')];

    const result = overlapsRange(start, end, lockedDates);

    expect(result).toBe(true);
  });

  it('should return false if the range does not overlap with locked dates', () => {
    const start = new Date('2024-01-02T00:00:00');
    const end = new Date('2024-01-04T00:00:00');
    const lockedDates = [new Date('2024-01-05T00:00:00')];

    const result = overlapsRange(start, end, lockedDates);

    expect(result).toBe(false);
  });
});
