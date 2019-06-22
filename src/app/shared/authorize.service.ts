import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Establishment } from './establishment.model';
import { Review } from './review.model';
import { Booking } from './booking.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  users: User[] = [
    { id: 1, name: 'admin', email: 'admin@admin.com', phoneNumber: '9900000000', password: 'abc12@Abc', isBlock: false, role: '1', establishment: [], reviews: [], bookingList: [] },
    { id: 2, name: 'shalu', email: 'shalu@123.com', phoneNumber: '9900000000', password: 'abc12@Abc', isBlock: false, role: '2', establishment: [], reviews: [], bookingList: [] },
    { id: 3, name: 'test', email: 'test@test.com', phoneNumber: '9900000000', password: 'Test@1234', isBlock: false, role: '3', establishment: [], reviews: [], bookingList: [] },
    { id: 4, name: 'test1', email: 'test1@test.com', phoneNumber: '9900000000', password: 'abc12@Abc', isBlock: false, role: '3', establishment: [], reviews: [], bookingList: []}
  ];

  loggedInSubject = new Subject<boolean>();
  isLoggedIn = false;
  obj = {};

  constructor ( private router: Router ) {}

  userSignin (signin) {

    if (signin !== '') {
      const user = this.users.find(x => x.email === signin.email && x.password === signin.password);
      if (!user) {
        this.isLoggedIn = false;
        this.loggedInSubject.next(false);
        return false;
      } else {
        this.obj = user;
        this.getprofile();
        this.isLoggedIn = true;
        this.loggedInSubject.next(true);
        return true;
      }
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedInSubject.next(this.isLoggedIn);
    this.router.navigate(['/signin']);
    console.log(this.users);
  }


  userSignUp (signupdata)
  {
    this.users.push(signupdata);
  }

  getprofile(){
    console.log(this.obj);
  return this.obj;
  }
  profileData(edit) {
    for (let i in this.users) {
      if (this.users[i].id === edit.id) {
        this.users[i] = edit;
     }
    }
    this.obj = edit;
    console.log(this.obj);
   this.getprofile();
  }
}
