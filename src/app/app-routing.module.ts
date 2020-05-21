import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './containers/users/users.component';
import {FoodPlacesComponent} from './containers/food-places/food-places.component';
import {RegisterComponent} from './containers/register/register.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'foodplaces', component: FoodPlacesComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
