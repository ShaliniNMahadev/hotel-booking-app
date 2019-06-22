import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthorizeService } from 'src/app/shared/authorize.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    regiForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private authorizeService: AuthorizeService,
        private router: Router) { }

    ngOnInit() {
        this.regiForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phonenumber: ['', [Validators.required, Validators.pattern('([0-9]{10})')]],
            password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
            role: ['user']
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.regiForm.invalid) {
            return;
        }
        this.authorizeService.userSignUp(this.regiForm.value);
        this.router.navigate(['/signin']);
    }
}
