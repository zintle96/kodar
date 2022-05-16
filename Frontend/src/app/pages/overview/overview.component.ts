import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  urls: any;

  ngOnInit(): void {
    const overViewUrl = `/overview/${this.route.snapshot.paramMap.get('courseName')}`
    const syllabusUrl = `/syllabus/${this.route.snapshot.paramMap.get('courseName')}`

    this.urls = { overViewUrl, syllabusUrl }
    console.log(this.urls);
    
  }

}
