import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { EstablishmentService } from 'src/app/shared/establishment.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private establishService: EstablishmentService) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      PriceMin: ['1000'],
      PriceMax: ['10000'],
      averagerating: [1],
      search: [''],
      homestay: [true],
      hotelstay: [true]
    });

    this.filterForm.valueChanges.subscribe(price => {
      this.establishService.getFilter(price);
    });

  }
  setStar(n: Number) {
    this.filterForm.get('averagerating').setValue(n);
  }
}