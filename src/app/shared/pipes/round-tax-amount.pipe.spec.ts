import { RoundTaxAmountPipe } from './round-tax-amount.pipe';

describe('RoundTaxAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundTaxAmountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display 0.99 in around 5 nearest', () => {
    const calculatedTax = 0.99;
    const pipe = new RoundTaxAmountPipe();
    const result = pipe.transform(calculatedTax);
    expect(result).toBe(1.00);
  });

  it('should display 1.00 in around 5 nearest', () => {
    const calculatedTax = 1.00;
    const pipe = new RoundTaxAmountPipe();
    const result = pipe.transform(calculatedTax);
    expect(result).toBe(1.00);
  });

  it('should display 1.01 in around 5 nearest', () => {
    const calculatedTax = 1.01;
    const pipe = new RoundTaxAmountPipe();
    const result = pipe.transform(calculatedTax);
    expect(result).toBe(1.05);
  });

  it('should display 1.02 in around 5 nearest', () => {
    const calculatedTax = 1.02;
    const pipe = new RoundTaxAmountPipe();
    const result = pipe.transform(calculatedTax);
    expect(result).toBe(1.05);
  });
});
