import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.width = '500px',
    elementRef.nativeElement.style.margin = 'auto',
    elementRef.nativeElement.style.background = '#e5e5e5',
    elementRef.nativeElement.style.border = '2px solid #fca311'
   }

}
