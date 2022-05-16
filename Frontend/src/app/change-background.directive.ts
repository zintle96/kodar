import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {

  @Input() isCorrect: boolean= false;
  constructor(private ef: ElementRef, private render:Renderer2) { }


  //use HostListener check for the click event
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.ef.nativeElement,'background','green');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'border','2px solid grey');
    }else{
      this.render.setStyle(this.ef.nativeElement,'background','red');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'border','2px solid grey');

    }
  }
}
