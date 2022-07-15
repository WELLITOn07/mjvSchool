import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextBlueDirective } from './directives/text-blue.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TextBlueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
