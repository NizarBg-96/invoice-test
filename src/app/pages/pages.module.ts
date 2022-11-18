import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductOverviewComponent } from './product/product-overview/product-overview.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    ProductOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
