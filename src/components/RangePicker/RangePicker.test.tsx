import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns';

import { RangePicker } from './RangePicker';

const DATE_FORMAT = 'MM-dd-yyyy';

const formatDate = (date: Date | undefined) => {
  if (date) {
    return format(date, DATE_FORMAT);
  }
};

describe('RangePicker', () => {
  it('should initialize with default values', () => {
    const defaultValue: [string, string] = ['01-01-2024', '01-10-2024'];
    const onChangeMock = vi.fn();

    render(
      <RangePicker
        onChange={onChangeMock}
        placeholder="Select date range"
        defaultValue={defaultValue}
      />,
    );

    expect(
      screen.getByPlaceholderText('Select date range'),
    ).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Select date range');
    expect(input).toBeInTheDocument();

    expect(input).toHaveValue('January 1, 2024 - January 10, 2024');
  });

  it('should update date range and call onChange', async () => {
    const onChangeMock = vi.fn();
    const user = userEvent.setup();

    render(
      <RangePicker onChange={onChangeMock} placeholder="Select date range" />,
    );

    const input = screen.getByPlaceholderText('Select date range');
    expect(input).toBeInTheDocument();

    // Open date picker
    await user.click(input);

    // Select start date
    const startDate = new Date('2024-01-01T00:00:00');
    const startDateString = formatDate(startDate);

    await user.click(screen.getByLabelText('Choose Monday, January 1st, 2024'));

    // Select end date
    const endDate = new Date('2024-01-10T00:00:00');
    const endDateString = formatDate(endDate);
    await user.click(
      screen.getByLabelText('Choose Wednesday, January 10th, 2024'),
    );

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith([
        startDateString,
        endDateString,
      ]);
    });
  });

  it('should clear the date range', async () => {
    const defaultValue: [string, string] = ['01-01-2024', '01-10-2024'];
    const onChangeMock = vi.fn();
    const user = userEvent.setup();

    render(
      <RangePicker
        onChange={onChangeMock}
        placeholder="Select date range"
        defaultValue={defaultValue}
      />,
    );

    const input = screen.getByPlaceholderText('Select date range');
    expect(input).toBeInTheDocument();

    // Clear the date range
    const clearButton = screen.getByLabelText('Close');
    await user.click(clearButton);

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith([undefined, undefined]);
    });
  });
});
