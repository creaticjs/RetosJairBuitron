import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { HomeComponent } from './home/home.component';
import { DetailPetComponent } from './detail-pet/detail-pet.component';
import {HttpClientModule} from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AuthenticationGuard} from './services/authentication.guard';
import { environment } from 'src/environments/environment';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-pets', component: ListPetsComponent},
  {path: 'detail-pet/:id', component: DetailPetComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ListPetsComponent,
    HomeComponent,
    DetailPetComponent,
    NavbarComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
