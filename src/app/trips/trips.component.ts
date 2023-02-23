import { Component } from '@angular/core';
import { trips } from '../trips';
import { Itrips } from '../Itrips'; 


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  trips: Array<Itrips> = trips;

}
