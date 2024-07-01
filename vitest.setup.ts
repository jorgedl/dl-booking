import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

const fixedDate = new Date('2024-01-01T00:00:00');

vi.useFakeTimers({
  shouldAdvanceTime: true,
});
vi.setSystemTime(fixedDate);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
