import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryType } from '@enums/category-type.enum';
import { IProduct } from '@models/product.model';
import { NotificationService } from '@services/notification/notification.service';
import { ProductsService } from '@services/product/products.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories$ = of(Object.entries(CategoryType).map((elem)=> elem[1]));
  addProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl(CategoryType.AUTRE, Validators.required),
    imported: new FormControl(false, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    quantity: new FormControl(null, [Validators.required, Validators.min(1)])
  });

  constructor(private productsService: ProductsService,
     private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  addProduct():void{
    if(this.addProductForm.invalid) return
    this.productsService
    .addProduct(this.addProductForm.value as unknown as IProduct).pipe(take(1))
    .subscribe({
      next: ()=> {this.addProductForm.reset(); this.addProductForm.controls['imported'].setValue(false)},
      error :(err)=> this.notificationService.fireErrorNotification(err)
    })
  }
}
