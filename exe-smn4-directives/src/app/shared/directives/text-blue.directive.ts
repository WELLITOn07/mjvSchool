import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextBlue]'
})
export class TextBlueDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = '#fca311'
    elementRef.nativeElement.style.color = '#1d3557',
    elementRef.nativeElement.style.width = '500px',
    elementRef.nativeElement.style.margin = 'auto'
    ,
    elementRef.nativeElement.style.padding = '15px',
    elementRef.nativeElement.style.fontSize = '2em',
    elementRef.nativeElement.style.textAlign = 'center',
    elementRef.nativeElement.style.borderRadius = '5px'
   }

}
