import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { HomeComponent } from './home/home.component';
import { DetailPetComponent } from './detail-pet/detail-pet.component';
import {HttpClientModule} from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-pets', component: ListPetsComponent},
  {path: 'detail-pet', component: DetailPetComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListPetsComponent,
    HomeComponent,
    DetailPetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
