import { Injectable } from '@angular/core';
import { Establishment } from './establishment.model';
import { User } from './user.model';
import { Observable, of, Subject } from 'rxjs';
import { Review } from './review.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  reviews: Review[] =[];

  constructor ( private http: HttpClient ) {

  }

  establishmentUrl = 'https://api.myjson.com/bins/vm401';
  establishments: Establishment[] = [];
  establishSubject = new Subject<Establishment[]>();
  filterData: Establishment[];
  searcheddata = [];
  searchFormData = {};

  getEstablishment() {
    this.establishSubject.next(this.searcheddata.slice());
  }

  getFilter(rgvalue) {

    let filterData = [];
    filterData = this.searcheddata.filter(rangevalue => rangevalue.price >= rgvalue.PriceMin);
    if (rgvalue.search !== '') {
      filterData = filterData.filter(searchdata => searchdata.name.toLowerCase() === rgvalue.search.toLowerCase());
    }
    filterData = filterData.filter(rating => rating.averagerating >= rgvalue.averagerating);

    if (!rgvalue.hotelstay) {
      filterData = filterData.filter(word => word.type !== 'hotel');
    }
    if (!rgvalue.homestay) {
      filterData = filterData.filter(word => word.type !== 'homestay');
    }
    this.establishSubject.next(filterData);
  }

  getsearch(searchingdata) {
    this.searchFormData = searchingdata;
  this.http.get(this.establishmentUrl).subscribe((x: Establishment[]) =>{

  this.establishments = x;
 console.log(this.searchFormData);

  this.searcheddata = this.establishments.filter(data => data.capacity >= searchingdata.searchcapacity);
  if (searchingdata.searchcity !== '') {
    this.searcheddata = this.searcheddata.filter(citydata => citydata.city.toLowerCase() === searchingdata.searchcity.toLowerCase());
  }

  this.establishSubject.next(this.searcheddata);
  }); 
  }

  getSelectedValue() {
    return this.searchFormData;
  }

  getEstablishmentById(id: number): Establishment {
    return this.establishments.find(establish => establish.id === id);
  }
}