import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService,private router: Router) { }
  userNumber: String

  ngOnInit(): void {
    //check if there is data in the localStorage.
    if(localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'))
      this.userNumber = user.phone_number
    }
  }

  logOutUser(){

    this.authService.logout()
    Swal.fire({
      title: 'Are you sure want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Log out!',
      confirmButtonColor: "#24A0ED",
      cancelButtonText: 'No, Stay Signed In'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/landing'])
        Swal.fire({ title: 'Logged out successfully',
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
