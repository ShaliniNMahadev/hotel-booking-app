import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookinglistComponent } from './booking/bookinglist/bookinglist.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './booking/home/home.component';
import { BookingviewComponent } from './booking/bookingview/bookingview.component';
import { MybookingComponent } from './booking/mybooking/mybooking.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: BookinglistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mybooking', component: MybookingComponent },
  { path: 'bookingview/:id', component: BookingviewComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
