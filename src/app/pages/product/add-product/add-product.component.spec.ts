import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProductComponent} from './add-product.component';
import {ProductsService} from "@services/product/products.service";
import {RoundTaxAmountPipe} from "@shared/pipes/round-tax-amount.pipe";
import {By} from "@angular/platform-browser";
import {CategoryType} from "@enums/category-type.enum";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IProduct} from "@models/product.model";

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      providers:[ProductsService, RoundTaxAmountPipe ],
      imports: [ReactiveFormsModule, FormsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button to add the product containing "Ajouter +" ', () => {
    let button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.textContent).toBe('Ajouter +');
  });

  it('form invalid when empty', () => {
    expect(component.addProductForm.valid).toBeFalsy();
  });

  it('product name field validity', () => {
    let errors: any = {};
    let email = component.addProductForm.controls['name'];
    errors = email.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('submitting the form with valid data', () => {
    expect(component.addProductForm.valid).toBeFalsy();
    component.addProductForm.controls['name'].setValue("product1");
    component.addProductForm.controls['price'].setValue(30);
    component.addProductForm.controls['category'].setValue(CategoryType.AUTRE);
    component.addProductForm.controls['quantity'].setValue(2);
    component.addProductForm.controls['imported'].setValue(true);
    expect(component.addProductForm.valid).toBeTruthy();
    component.addProduct()
    setTimeout(() => {
      component.categories$.subscribe(res => {
        expect(res.length).toBe(1)
      })
    },3000)
  });
});

