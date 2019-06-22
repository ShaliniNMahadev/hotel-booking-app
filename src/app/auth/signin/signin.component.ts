import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizeService } from 'src/app/shared/authorize.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errroMsg;
  signinForm: FormGroup;
  submitted = false;
  user: User;
  flag;
  constructor(private formBuilder: FormBuilder, private authorizeService: AuthorizeService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    this.authorizeService.loggedInSubject.subscribe(data => this.flag = data);
  }

  onSubmit() {
    const login = this.authorizeService.userSignin(this.signinForm.value);
    if (!login) {
      this.errroMsg = 'Invalid Email or Password';
    } else {
      this.router.navigate(['/home']);
    }
    console.log(this.signinForm.value);
  }
}