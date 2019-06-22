import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/shared/authorize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  islogged = false;
  constructor(private authorize: AuthorizeService) { }

  ngOnInit() {
    this.authorize.loggedInSubject.subscribe(data => {
      this.islogged = data;
    });
  }

signout()
{
  this.authorize.logout();
}
}
