
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
})
export class ImgBrokenDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('error')handleError(){
    const nativeElement: HTMLImageElement = this.elementRef.nativeElement;
    nativeElement.src='../assets/images/img-broken.png';
    console.log("esta imagen está rota", this.elementRef);
  }
}
