import { Component, OnInit } from '@angular/core';

import { trips } from '../trips';
import { Itrips } from '../Itrips'; 
import { CartServiceService } from '../cart-service.service'; 

import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-trips-details',
  templateUrl: './trips-details.component.html',
  styleUrls: ['./trips-details.component.css']
})
export class TripsDetailsComponent implements OnInit {

  trips: Itrips = {} as Itrips;
  id: number = 0;
  AddToCart(){
    alert ("Your trip has been added to the cart!")
    this.CS.AddToCart(this.trips);
  }

  constructor(private route: ActivatedRoute, private CS: CartServiceService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      this.id = params["index"];
      this.trips = trips[this.id];
    })
  }
}
