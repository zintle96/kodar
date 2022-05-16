import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http:HttpClient){
    
  }

  title = 'Frontend';
  display:any ={};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.server();
  }

  // server(){
  //   this.http.get('http://0.0.0.0:4318/').subscribe((res) =>{
  //     console.log(res);
  //     this.display = res
  //   })
  // }
  

}
