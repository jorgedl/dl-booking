const fixedDate = new Date('2024-01-01T00:00:00').getTime();

/* eslint-disable */
const OriginalDate = Date;
globalThis.Date = class extends OriginalDate {
  constructor(...args) {
    if (args.length === 0) {
      return new OriginalDate(fixedDate);
    }
    return new OriginalDate(...args);
  }
};
globalThis.Date.now = () => fixedDate;

const originalSetTimeout = globalThis.setTimeout;
globalThis.setTimeout = (fn, delay) => originalSetTimeout(fn, 0);
/* eslint-enable */
