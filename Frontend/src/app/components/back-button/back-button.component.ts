import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  private urlHistory: string[] = []

  ngOnInit(): void {}

  constructor(private location: Location) {}

  back(){
    this.location.back();
  }

}
