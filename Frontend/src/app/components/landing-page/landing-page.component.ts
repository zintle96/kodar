import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAyoba } from '../../../lib/microapp.js'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  myMsisdn !:any;
  ayoba :any = getAyoba();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getMsisdn()
  }

  redirect(){
    this.router.navigateByUrl('dashboard')
  }

  getMsisdn():any {
    this.myMsisdn = this.ayoba.getMsisdn()
    console.log('phone number:',this.myMsisdn)
    return this.myMsisdn;
  }


}
