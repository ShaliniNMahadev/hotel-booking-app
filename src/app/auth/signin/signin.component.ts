import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signinForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required] 
  });
  }

  onSubmit() {
    this.submitted = true;

    if (this.signinForm.invalid) {
        return;
    }

    console.log(this.signinForm.value)
}

}
