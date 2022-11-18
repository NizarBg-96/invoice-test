import { CategoryType } from "@enums/category-type.enum";

export interface IProduct {
  name: string;
  price: number;
  category: CategoryType;
  quantity: number;
  imported: boolean;
}

export class Product implements IProduct {
  constructor(
    private _name: string,
    private _price: number,
    private _category: CategoryType,
    private _quantity: number,
    private _imported: boolean
) {
}
get name(): string{
  return this._name;
}
set name(value: string){
   this._name= value;
}
get price(): number{
  return this._price;
}
set price(value: number){
   this._price= value;
}
get category(): CategoryType{
  return this._category;
}
set category(value: CategoryType){
   this._category= value;
}
get quantity(): number{
  return this._quantity;
}
set quantity(value: number){
   this._quantity= value;
}

get imported(): boolean{
  return this._imported;
}
set imported(value: boolean){
   this._imported= value;
}

}
