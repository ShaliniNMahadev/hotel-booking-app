import { User } from './user.model';
import { Establishment } from './establishment.model';

export class Booking {
    Booked_by: User;
    establishment: Establishment;
    Checkin_date: Date;
    checkout_date: Date;
    no_of_person: number;
    booking_cost: number;
}
