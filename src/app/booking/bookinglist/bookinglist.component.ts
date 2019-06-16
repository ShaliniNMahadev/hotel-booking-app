import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstablishmentService } from '../../shared/establishment.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  sortForm: FormGroup;
  establishmentlist = [];
  averageRating = 0;
  price = 0;

  constructor(private formBuilder: FormBuilder, private establishService: EstablishmentService) { }

  ngOnInit() {
    this.sortForm = this.formBuilder.group({

    });

  this.establishService.establishSubject.subscribe(filterdata=>{
    this.establishmentlist=filterdata;
    this.getSort();
  })
  this.establishService.getEstablishment();
  }

  ratingFiter(){
    if(this.averageRating == 1)
    {
      this.averageRating=2;
    }
    else
    {
      this.averageRating=1;
    }
    this.price=0;
    this.getSort();
  }

  priceFilter()
  {
    if(this.price == 1)
      {
        this.price=2;
      }
      else 
      {
        this.price=1;
      }
      this.averageRating=0;
      this.getSort();
  }


  getSort(){
    if(this.averageRating == 1)
    {
    this.establishmentlist.sort((a, b) => a.averagerating - b.averagerating);
    }
    else if(this.averageRating == 2)
    {
    this.establishmentlist.sort((a, b) => b.averagerating - a.averagerating);
    }

    if(this.price == 1)
    {
    this.establishmentlist.sort((a, b) => a.price - b.price);
    }
    else if(this.price == 2)
    {
    this.establishmentlist.sort((a, b) => b.price - a.price);
    }

    }

    

    
    
}
