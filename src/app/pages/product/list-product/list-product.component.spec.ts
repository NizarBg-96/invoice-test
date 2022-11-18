import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductComponent } from './list-product.component';
import {BehaviorSubject} from "rxjs";
import {ProductsService} from "@services/product/products.service";
import {By} from "@angular/platform-browser";

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductComponent ],
      providers:[{provide: ProductsService, useClass: ProductsServiceSpec}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a table to list products" ', () => {
    let button = fixture.debugElement.query(By.css('table'))
    expect(button.nativeElement.textContent).toBeTruthy()
  });
});

class ProductsServiceSpec {
  private _products = new BehaviorSubject([])
  get products(){return this._products.value}
}
