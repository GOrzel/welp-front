import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { UsersComponent } from './containers/users/users.component';
import { FoodPlacesComponent } from './containers/food-places/food-places.component';
import {FoodPlacesService} from './services/food-places.service';
import {HttpClientModule} from '@angular/common/http';
import { AddFoodplaceComponent } from './components/add-foodplace/add-foodplace.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './containers/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    UsersComponent,
    FoodPlacesComponent,
    AddFoodplaceComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FoodPlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
