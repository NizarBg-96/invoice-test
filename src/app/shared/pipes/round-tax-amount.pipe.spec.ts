import { RoundTaxAmountPipe } from './round-tax-amount.pipe';

describe('RoundTaxAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundTaxAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
