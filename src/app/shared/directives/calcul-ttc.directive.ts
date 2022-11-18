import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { IProduct } from '@models/product.model';
import { ProductsService } from '@services/product/products.service';
import { RoundTaxAmountPipe } from '@shared/pipes/round-tax-amount.pipe';

@Directive({
  selector: '[appCalculTtc]',
  providers:[RoundTaxAmountPipe, CurrencyPipe]
})
export class CalculTtcDirective implements OnChanges {
  @Input() appCalculTtc!: {product:IProduct, tax: number}
  constructor(private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe,
    private roundTaxPipe: RoundTaxAmountPipe,
) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.textContent =
    this.currencyPipe.transform(
      this.appCalculTtc.product.quantity * (this.appCalculTtc.product.price + this.roundTaxPipe
        .transform(this.appCalculTtc.product.price * this.appCalculTtc.tax
         / 100 ))
      ,'EUR','symbol', '.2-2')

  }

}
