import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './components/text/text.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TextComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
