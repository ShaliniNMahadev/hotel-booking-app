import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../shared/booking.service';
import { Booking } from 'src/app/shared/booking.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  constructor(private bookinService: BookingService,
     private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }
  history: Booking[];
  checkin = [];
  checkout = [];

  ngOnInit() {
    this.bookinService.getHistory().subscribe(data => {
      this.history = data;
      console.log(this.history[0]);
      const date = new Date();
      for (const s of this.history) {
        if (s.Checkin_date < date && s.checkout_date < date) {
          this.checkin.push(s);
        } else {
          this.checkout.push(s);
        }
      }
    });
  }
  booknow() {
    alert(' Thank you for booking again!');
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(MybookingComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  getValue() {
    const retVal = prompt('Enter your Review : ', 'Enter Reviews about the Hotel');  
     console.log(retVal);
  }
  getComplaint() {
    const complaint = prompt('Raise your complaint : ', 'Enter your complaint');  
     console.log(complaint);
  }
}
