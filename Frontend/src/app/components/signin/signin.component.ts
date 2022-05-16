import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/signin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

formValue !: FormGroup;
error: string = '';
// amazonConnectionError : string = '';

password1Shown: boolean = false;
password2Shown: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private http: HttpClient,
    private router: Router,
    public ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      phone_number: ['', Validators.required],
      password: ['', Validators.required]
    });

   
  }

  

  signIn() {

    this.ngxLoader.start();
    const data: any ={
      phone_number: this.formValue.value.phone_number,
      password: this.formValue.value.password
    }

    console.log(data)

    this.signinService.signIn(data).subscribe(res => {
      console.log(res);

      
      if( res.success == false ){
        this.error = res.error
        this.ngxLoader.stop();
        Swal.fire({title:'Phone number or Password is incorrect',
        confirmButtonColor: "#24A0ED",
        icon:'error'});

      } else {
        Swal.fire({ title: 'Logged in successfully',
        showConfirmButton: false,
        icon:'success',
        position:'center',
        timer: 1500});


        this.error = '';
        localStorage.setItem('token', res.token)


        localStorage.setItem('user',JSON.stringify(res.user))

        // REDIRECT TO DASHBOARD
        this.ngxLoader.stop();
        this.router.navigate(['/dashboard']);
      }
    })

  }

  gotoSignup() {
    this.router.navigate(['/signup']);
  }

  gotoLandingPage() {
    this.router.navigate(['/landing']);
  }

  //show password

  togglePassword(num: any) {
    const icon = document.getElementById('icon');
    if (num == 1) {
      this.password1Shown = !this.password1Shown;
      if (this.password1Shown)
        if (num == 2) {
          this.password2Shown = !this.password2Shown;
        }
    }
  }

}
