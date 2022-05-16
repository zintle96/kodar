import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { Users } from 'src/app/models/users/users.model';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';
import { getAyoba } from '../../../lib/microapp'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  msg: any;
  signUpForm!: FormGroup;
  errors: any = [];
  errorMsg: string = '';

  password1Shown: boolean = false;
  password2Shown: boolean = false;

  ayoba :any = getAyoba();
  myMsisdn !:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signupService: SignupService,
    public ngxLoader: NgxUiLoaderService,
    private http: HttpClient
  ) {}

  get phone() {
    return this.signUpForm.get('phone');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        phone_number: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      },

      {
        validator: [this.confirmPasswordMatch('password', 'confirm_password')],
      }
    );

    let original_number = this.getMsisdn()
    let split_number = original_number.split('')
  
    let removeFirstThree = split_number.splice(0, 3, '0')
   
    let new_number = split_number.join('')

    this.signUpForm.patchValue({
      phone_number: new_number
    })
  }

  //Ayoba get phone number
  getMsisdn():any {
    this.myMsisdn = this.ayoba.getMsisdn()
    console.log('phone number:',this.myMsisdn)
    return this.myMsisdn;
  }

  // CONFIRM PASSWORD VALIDATOR
  confirmPasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // SET AN ERROR ON macthingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  //show password
  togglePassword(num: any) {
    const icon = document.getElementById('icon');
    if (num == 1) {
      this.password1Shown = !this.password1Shown;
      if (this.password1Shown) {
      }
    } else if (num == 2) {
      this.password2Shown = !this.password2Shown;
    }
  }



  onSubmit() {
    const formData = this.signUpForm.value;
    this.ngxLoader.start();

    //Regular expression
    const reg = new RegExp('^[0-9]*$');
    const isNumbersOnly = reg.test(formData.phone_number);

    // IF THERE ARE NO ERRORS
    if (this.signUpForm.valid) {
      this.signupService.signUp(formData).subscribe((res) => {
        this.msg = res;

        console.log('response:', res);

        //Swal.fire("User "+this.msg.phone+" created.")

        this.ngxLoader.stop();
        if (res.success) {
          localStorage.setItem('token', res.token);

          //redirect to dashboard
          this.router.navigateByUrl('signin');

          Swal.fire({
            titleText: 'Successfully Registered ' + formData.phone_number,
            confirmButtonColor: '#24A0ED',
          });
        } else {
          this.ngxLoader.stop();
          this.errorMsg = res.error;
          Swal.fire({ title: this.errorMsg, confirmButtonColor: '#24A0ED' });
        }
      });
    }
  }

  gotoSignin() {
    this.router.navigate(['/signin']);
  }

  gotoLandingpage() {
    this.router.navigate(['/landing']);
  }
}
