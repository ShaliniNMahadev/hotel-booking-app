import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizeService } from 'src/app/shared/authorize.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;
  obj: User;
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private authorizeService: AuthorizeService) { }

  ngOnInit() {
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        phoneNumber: ['', [Validators.required, Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
        role: ['', Validators.required],
        id: []
      });
      this.profileForm.patchValue(this.authorizeService.getprofile());
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

    onSubmit() {
    console.log(this.profileForm);
      this.submitted = true;
      this.obj = this.profileForm.value;
      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }
     this.authorizeService.profileData(this.profileForm.value);
      this.router.navigate(['/home']);
  }
}

