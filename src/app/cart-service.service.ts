import { Injectable } from '@angular/core';
import { Itrips } from './Itrips';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Array<Itrips> = [];
  constructor() { }


  AddToCart(val: Itrips) {
    this.cart.push(val);
  }

  getItems(){
    return this.cart;
  }

  clearCart(){
    this.cart = [];
    return this.cart;
  }

  getLengthOfCart(){
    return this.cart.length;
  }

  Total(){
    let total = 0;
    for (let val of this.cart){
      total = total + val.price;
    }
    return total;
  }
}
