import { Injectable } from '@angular/core';
import { Establishment } from '../shared/establishment.model';
import { User } from '../shared/user.model';
import { Booking } from '../shared/booking.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor() { }

  bookHistory: Booking [] = [
    {Booked_by: new User('Shalu'), establishment: new Establishment('Leela palace', 4, 5000, ['Car Parking, Free Wifi']), Checkin_date: new Date('6/19/2019'),
    checkout_date: new Date('6/21/2019'), no_of_person: 2, booking_cost: 200 },
    {Booked_by: new User('Mahadev'), establishment: new Establishment('Hotel Taj', 3, 1500, ['Car Parking, Free Wifi, North-Indian Food Available']), Checkin_date: new Date('6/21/2019'),
    checkout_date: new Date('6/22/2019'), no_of_person: 2, booking_cost: 200},
    {Booked_by: new User('Kavana'), establishment: new Establishment('Hotel Ashoka', 5, 5000, ['Car Parking, Free Wifi']), Checkin_date: new Date('7/22/2019'),
    checkout_date: new Date('7/26/2019'), no_of_person: 2, booking_cost: 200}
];
    getHistory() {
      return of(this.bookHistory);}
}