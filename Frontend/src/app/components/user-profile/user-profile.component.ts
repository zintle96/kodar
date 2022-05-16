import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  formValue !: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) { }
  userNumber: String
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      phone_number: ['', Validators.required],
      password: ['', Validators.required],
      update_number: ['', Validators.required],
      update_password: ['', Validators.required]
    });
    let user = JSON.parse(localStorage.getItem('user'))
    this.userNumber = user.phone_number
  }
  update() {
    const data: any = {
      phone_number: this.formValue.value.phone_number,
      password: this.formValue.value.password,
        update_number: this.formValue.value.update_number,
        update_password: this.formValue.value.update_password
    }
    Swal.fire({
      title: 'Are you sure want to save changes?',
      showCancelButton: true,
      confirmButtonText: 'Yes, save!',
      confirmButtonColor: "#24A0ED",
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/dashboard'])
        Swal.fire({ title: 'Updated successfully',
        showConfirmButton: false,
        icon:'success',
        position:'center',
        timer: 1500}); 
      } else {  
        result.dismiss
      }  
    })  
  }

}
