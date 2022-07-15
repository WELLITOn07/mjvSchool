import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(elementRef: ElementRef) {
    console.log(elementRef)
    elementRef.nativeElement.style.background = 'red',
    elementRef.nativeElement.style.color = 'white',
    elementRef.nativeElement.style.padding = '10px',
    elementRef.nativeElement.style.textAlign = 'center',
    elementRef.nativeElement.style.fontSize = '2em'
   }

}
