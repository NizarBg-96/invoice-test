export interface ITotalAmount{
  totalHT: number;
  totalTax: number;
  totalTTC: number;
}
export class TotalAmount implements ITotalAmount {
  constructor(
    private _totalHT: number,
    private _totalTax: number,
    private _totalTTC: number
  ){}
  get totalHT(): number{
    return this._totalHT;
  }
  set totalHT(value: number){
     this._totalHT= value;
  }
  get totalTax(): number{
    return this._totalTax;
  }
  set totalTax(value: number){
     this._totalTax= value;
  }
  get totalTTC(): number{
    return this._totalTTC;
  }
  set totalTTC(value: number){
     this._totalTTC= value;
  }
}
