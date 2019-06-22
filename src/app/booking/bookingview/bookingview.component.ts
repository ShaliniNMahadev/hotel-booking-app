import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/shared/establishment.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Establishment } from 'src/app/shared/establishment.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrls: ['./bookingview.component.css']
})
export class BookingviewComponent implements OnInit {

  hotel: Establishment;
  dateForm: FormGroup;
  count = 1;

  constructor(private establishService: EstablishmentService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // One way -> Observable
    // this.route.paramMap.pipe(
    //   switchMap( (params: ParamMap) => {
    //      this.hotel = this.establishService.getEstablishmentById(params.get('id'));
    //   }));
    this.route.paramMap.subscribe((params: Params) => {
      this.hotel = this.establishService.getEstablishmentById(+params.get('id'));

    });

    this.dateForm = this.formBuilder.group({
      searchdate: [''],
      toDate: ['']
    });
    this.dateForm.patchValue(this.establishService.getSelectedValue());

    // let newdate = new Date();
    // let nextdate = new Date(newdate.setDate(newdate.getDate() + 1));
    // this.dateForm.get('toDate').setValue(nextdate);
  }

  calculateDays() {
    const fromDate = new Date(this.dateForm.value.searchdate);
    const toDate = new Date(this.dateForm.value.toDate);
    const starDate = fromDate.getDate();
    const lastDate = toDate.getDate();
    const diff = lastDate - starDate;
    this.count = diff;
  }

  bookNow() {
    const retVal = confirm('Do you want to Book ?');
    if (retVal === true) {
      alert('Congratulations!!! Thank You for Booking');
      return true;
    } else {
      return false;
    }
  }

}
