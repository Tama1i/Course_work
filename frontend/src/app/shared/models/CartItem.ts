import { Appliances } from "./Appliances";

export class CartItem{
  constructor(public appliances:Appliances){ }
  quantity:number = 1 ;
  price: number = this.appliances.price;
}

