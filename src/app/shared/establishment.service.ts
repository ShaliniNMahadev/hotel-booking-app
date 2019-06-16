import { Injectable } from '@angular/core';
import { Establishment } from './establishment.model';
import { User } from './user.model';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  establishments: Establishment[] = [
    { id: 1, name: "Hotel Grand", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2, price: 5000, isBlock: false, averagerating: 4.2, reviews: [], bookingList: [], amenities: ["Car parking", "First Aid", "Wi-fi"], owner: new User() },
    { id: 2, name: "Hotel Taj", type: "hotel", location: "Guindy", city: "Chennai", capacity: 1, price: 6000, isBlock: false, averagerating: 4.4, reviews: [], bookingList: [], amenities: ["Car parking", "First Aid", "Air-conditioned"], owner: new User() },
    { id: 3, name: "Hotel Trident", type: "hotel", location: "Adayar", city: "Chennai", capacity: 3, price: 5500, isBlock: false, averagerating: 3.0, reviews: [], bookingList: [], amenities: ["Car parking", "First Aid", "Wi-fi"], owner: new User() },
    { id: 4, name: "Park Plaza", type: "hotel", location: "Adayar", city: "Chennai", capacity: 2, price: 4000, isBlock: false, averagerating: 2.5, reviews: [], bookingList: [], amenities: ["Air-conditioned", "First Aid", "Wi-fi"], owner: new User() },
    { id: 5, name: "Le Meridien", type: "hotel", location: "Mylapore", city: "Chennai", capacity: 1, price: 7500, isBlock: false, averagerating: 4.7, reviews: [], bookingList: [], amenities: ["Car parking", "Air-conditioned"], owner: new User() },
    { id: 6, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2, price: 7000, isBlock: false, averagerating: 4.8, reviews: [], bookingList: [], amenities: ["Car parking", "Air-conditioned", "Wi-fi"], owner: new User() },
    { id: 7, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Chennai", capacity: 1, price: 2500, isBlock: false, averagerating: 5.0, reviews: [], bookingList: [], amenities: ["Car parking", "Wi-fi"], owner: new User() },
    { id: 8, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Chennai", capacity: 2, price: 3000, isBlock: false, averagerating: 4.8, reviews: [], bookingList: [], amenities: ["Car parking", "First Aid", "Wi-fi"], owner: new User() },
    { id: 9, name: "Green city", type: "homestay", location: "Adayar", city: "Chennai", capacity: 2, price: 1500, isBlock: false, averagerating: 4.9, reviews: [], bookingList: [], amenities: ["Car parking"], owner: new User() }
  ]
  establishSubject = new Subject<Establishment[]>();
  filterData: Establishment[];

  getEstablishment(){
    this.establishSubject.next(this.establishments.slice());
  }

  getFilter(rgvalue) {
    console.log(rgvalue)
    let filterData = []
    filterData = this.establishments.filter(rangevalue => rangevalue.price >=rgvalue.PriceMin);
    console.log(filterData)
    if (rgvalue.search !== "")
      filterData = filterData.filter(searchdata => searchdata.name === rgvalue.search);
      console.log(filterData)
      filterData = filterData.filter(rating => rating.averagerating >= rgvalue.averagerating);
      console.log(filterData)
    if (!rgvalue.hotelstay)
      filterData = filterData.filter(word => word.type != "hotel");
    if (!rgvalue.homestay)
      filterData = filterData.filter(word => word.type != "homestay");
    console.log(filterData)
    this.establishSubject.next(filterData);
  }


}
