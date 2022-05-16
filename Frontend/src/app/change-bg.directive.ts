import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect:Boolean = false;
  constructor(private elementRef : ElementRef, private render: Renderer2) { }

  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.elementRef.nativeElement,'background','green');
      this.render.setStyle(this.elementRef.nativeElement,'color','#fff');
      this.render.setStyle(this.elementRef.nativeElement,'border','2px solid grey');
    }else{
      this.render.setStyle(this.elementRef.nativeElement,'background','red');
      this.render.setStyle(this.elementRef.nativeElement,'color','#fff');
      this.render.setStyle(this.elementRef.nativeElement,'border','2px solid grey');

    }
  }
}
