import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {BehaviorSubject, of} from "rxjs";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: ProductsService, useClass: ProductsServiceSpec}]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class ProductsServiceSpec {
  private _products = new BehaviorSubject([])
  get products(){return this._products.value}
}


