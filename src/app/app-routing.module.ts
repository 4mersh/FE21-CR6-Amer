import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TripsDetailsComponent } from './trips-details/trips-details.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},
{
  path: "trips", component: TripsComponent
},
{
  path: "cart", component: CartComponent
},

{
  path: "trips/:index", component: TripsDetailsComponent
},
{
  path: "**" ,redirectTo: ""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
