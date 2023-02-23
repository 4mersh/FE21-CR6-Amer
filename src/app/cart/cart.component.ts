import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Itrips } from '../Itrips';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<Itrips> = [];


  constructor (private CS : CartServiceService){
    

  };

  

  total: number = 0;

  ngOnInit(): void {
    this.cart = this.CS.getItems();

    if (this.CS.Total() >= 200 && this.CS.Total() < 500){
      this.total = this.CS.Total() * 0.9
    }else if (this.CS.Total() >= 500){
      this.total = this.CS.Total() * 0.8;
    }else 
    this.total = this.CS.Total();
  }

  order(){
    this.cart = this.CS.clearCart();
    this.total = this.CS.Total();

  }

}
