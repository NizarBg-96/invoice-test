import { Component, OnInit } from '@angular/core';
import { UpdateQtyType } from '@enums/update-qty-type.enum';
import { IProduct } from '@models/product.model';
import { ProductsService } from '@services/product/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  updateQtyType= UpdateQtyType
  products$ = this.productsService.products$
  totalAmount$ = this.productsService.totalAmount$


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {}


  updateQty(product: IProduct, updateQtyType: UpdateQtyType){
    this.productsService.updateQty(product, updateQtyType )
  }

  deleteProduct(product: IProduct){
    this.productsService.deleteProduct(product)
  }


  getTax(product: IProduct){
    return this.productsService.getProductTaxRate(product)
  }

}
