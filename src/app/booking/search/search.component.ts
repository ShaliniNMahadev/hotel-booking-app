import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstablishmentService } from '../../shared/establishment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchform: FormGroup;
  today: Date = new Date();
  constructor(private formBuilder: FormBuilder, private establishService: EstablishmentService, private router: Router) { }

  ngOnInit() {
    this.searchform = this.formBuilder.group({
      searchcity: ['', [Validators.required]],
      searchcapacity: ['1', [Validators.required]],
      searchdate: ['']
    });
    this.searchform.patchValue(this.establishService.getSelectedValue());
  }

  searchdata() {
      this.establishService.getsearch(this.searchform.value);
      this.router.navigate(['/booking']);
  }

  getAdd() {
    let guest = this.searchform.get('searchcapacity').value;
    guest++;
    this.searchform.get('searchcapacity').setValue(guest);
    }

}


