import { Review } from './review.model';
import { Booking } from './booking.model';
import { User } from './user.model';

export class Establishment {
id: number;
name: string;
type: string;
price: number;
location: string;
city: string;
capacity: number;
isBlock: boolean;
averagerating: number;
reviews: Review[];
bookingList: Booking[];
amenities: string[];
owner: User;

constructor(name: string, averagerating: number, price: number, amenities: string[]) { 
    this.name = name;
    this.averagerating = averagerating;
    this.price = price;
    this.amenities = amenities;
 }

}