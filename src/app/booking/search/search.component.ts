import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  myControl = new FormControl();
  options: string[] = ['Bangalore', 'Mysore', 'Chamarajanagar'];


  guest = 1
  date = new Date();
  loc = "Bangalore"
  getAdd() {
    this.guest++;
  }
 
}
