import {CalculTtcDirective} from './calcul-ttc.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {IProduct, Product} from "@models/product.model";
import {CategoryType} from "@enums/category-type.enum";
import {By} from "@angular/platform-browser";

describe('CalculTtcDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculTtcDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should find a value is number in ttc calcul directive equal to €45.00 ',() =>{
    let div = fixture.debugElement.query(By.css('div'))
    console.log("div",div)
    expect(div.nativeElement.outerText).toBe("€45.00")
  })


});


@Component({
  template: `
    <div [appCalculTtc]="{product,tax: 25}"></div>`
})
class TestComponent {
  product:IProduct = new Product('product 1', 12, CategoryType.AUTRE, 3, true )
}
