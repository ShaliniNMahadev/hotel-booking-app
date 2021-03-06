import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './booking/search/search.component';
import { FilterComponent } from './booking/filter/filter.component';
import { BookinglistComponent } from './booking/bookinglist/bookinglist.component';
import { BookingviewComponent } from './booking/bookingview/bookingview.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { BookingItemComponent } from './booking/booking-item/booking-item.component';
import 'hammerjs';
import { StarRatingModule } from 'angular-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './booking/home/home.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MybookingComponent } from './booking/mybooking/mybooking.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SearchComponent,
    FilterComponent,
    BookinglistComponent,
    BookingviewComponent,
    BookingItemComponent,
    HomeComponent,
    HeaderComponent,
    MybookingComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSliderModule,
    StarRatingModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
