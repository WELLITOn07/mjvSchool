import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthletesComponent } from './components/athletes/athletes.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AthletesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AthletesComponent,
    HomeComponent
  ]
})
export class HomeModule { }
