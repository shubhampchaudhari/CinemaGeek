import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

 const routes : Routes = [
   {path:"", redirectTo :"cinemageek", pathMatch : "full"},
   {path:"cinemageek", component : HeaderComponent},
   {path:"cinemageek/login-page", component:LoginPageComponent},
   {path:"cinemageek/login-page/book_ticket", component: BookingPageComponent}
 ] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
