import { Injectable } from '@angular/core';
import { CategoryType } from '@enums/category-type.enum';
import { UpdateQtyType } from '@enums/update-qty-type.enum';
import { ITotalAmount, TotalAmount } from '@models/total-amount.model';
import { RoundTaxAmountPipe } from '@shared/pipes/round-tax-amount.pipe';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProduct} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products = new BehaviorSubject<IProduct[]>([])
  readonly products$: Observable<IProduct[]> = this._products.asObservable();

  private _totalAmount = new BehaviorSubject<ITotalAmount>({totalHT:0,totalTax:0,totalTTC:0})
  readonly totalAmount$: Observable<ITotalAmount> = this._totalAmount.asObservable();


  constructor(private roundTaxPipe: RoundTaxAmountPipe) {
  }

  get products(){
    return this._products.value;
  }

  set products(products: IProduct[]){
    this._products.next(products);
  }

  get totalAmount(){
    return this._totalAmount.value;
  }

  set totalAmount(value: ITotalAmount){
    this._totalAmount.next(value);
  }

  // add a new product to the list of products

  addProduct(product: IProduct){
    return new Observable((observer) => {
          if(!this.products.find(elem => elem.name === product.name
            && elem.category === product.category)){
            this.products = [...this.products, product];
            this.computeTotal()
          observer.next(this.products)
          }else{
             observer.error('Produit existe déjà!');
          } ;
        }

    );
  }

    // updates the quantity of product given in parameter (increment and decrement)


  updateQty(product: IProduct, updateQtyTypee: UpdateQtyType) {
    this._products.next(this.products.map((elem)=>{
      if( elem.name === product.name
        && elem.category === product.category){
         return  updateQtyTypee === UpdateQtyType.INCREMENT && {...elem, quantity: product.quantity+1}
         || {...elem, quantity: product.quantity>1 ? product.quantity - 1 : product.quantity }
        }
        return elem

    }))
    this.computeTotal()
  }

    //  delete a product from the list of products


    deleteProduct(product: IProduct) {
      this._products.next(this.products.filter((elem)=> elem.name !== product.name
          || elem.category !== product.category))
      this.computeTotal()
    }


  // returns the percentage of tax for the product given in parameter

  getProductTaxRate(product: IProduct){
    let rate = 0;
    switch (product.category){
      case CategoryType.NOURRITURE_MEDICAMENT: {
        rate = 0;
        break;
      }
      case CategoryType.LIVRE: {
        rate = 10;
        break;
      }
      case CategoryType.AUTRE: {
        rate = 20;
        break;
      }
      default: break;
    }
    if(product.imported) rate+=5;
    return rate;
  }

  // That function calculate the total taxes, totals amount TTC , total amount HT of all products

  computeTotal(){
    let totalAmount = new TotalAmount(
      this.roundTaxPipe.transform(this.products.reduce((sum, product)=>{
         return (product.price * product.quantity + sum) }, 0)),
      this.roundTaxPipe.transform(this.products.reduce((sum, product)=>{
         return this.roundTaxPipe.transform(product.quantity*(product.price *
          this.getProductTaxRate(product))/100) + sum }, 0)),
      this.roundTaxPipe.transform(this.products.reduce((sum, product)=>{
        return product.quantity * (product.price + this.roundTaxPipe
          .transform((product.price * this.getProductTaxRate(product))/100)) + sum }, 0))
      )
     this._totalAmount.next(totalAmount)
  }
















}
