import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { EstablishmentService } from 'src/app/shared/establishment.service';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {

  @Input() hotelInstance;

  selectedId: number;

  constructor(private router: Router, private establishService: EstablishmentService) { }

  ngOnInit() {
    // this.heroes$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
    //     return this.service.getHeroes();
    //   })
    // );

  }



}
