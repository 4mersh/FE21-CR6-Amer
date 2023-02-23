import { Component, DoCheck } from '@angular/core';
import { CartServiceService } from '../cart-service.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
number: number = 0;

constructor (private CS: CartServiceService){

}

  ngDoCheck(): void {
    this.number = this.CS.getLengthOfCart();
  }
}
