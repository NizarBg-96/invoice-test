import { Component, OnInit } from '@angular/core';
import { UpdateQtyType } from '@enums/update-qty-type.enum';
import { IProduct } from '@models/product.model';
import { ProductsService } from '@services/product/products.service';
import {PrintService} from "@services/print/print.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  updateQtyType= UpdateQtyType
  products$ = this.productsService.products$
  totalAmount$ = this.productsService.totalAmount$


  constructor(private productsService: ProductsService, private printService: PrintService) { }

  ngOnInit(): void {}


  updateQty(product: IProduct, updateQtyType: UpdateQtyType): void{
    this.productsService.updateQty(product, updateQtyType )
  }

  deleteProduct(product: IProduct): void{
    this.productsService.deleteProduct(product)
  }


  getTax(product: IProduct): number{
    return this.productsService.getProductTaxRate(product)
  }

  printInvoice(invoice: HTMLDivElement) {
    this.printService.printInvoice(invoice)
  }






  }
