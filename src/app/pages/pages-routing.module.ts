import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from '@enums/route.enum';
import { NotFoundComponent } from '@shared/component/not-found/not-found.component';
import { ProductOverviewComponent } from './product/product-overview/product-overview.component';

const routes: Routes = [
  {path: RoutePath.PRODUCTS,component:ProductOverviewComponent },
  {path:'', redirectTo:RoutePath.PRODUCTS,pathMatch:'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
