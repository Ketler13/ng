import { DatePrettifyPipe } from './date-prettify.pipe';

describe('DatePrettifyPipe', () => {
  it('create an instance', () => {
    const pipe = new DatePrettifyPipe();
    expect(pipe).toBeTruthy();
  });
});
