import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRegisteredsComponent } from './components/list-registereds/list-registereds.component';
import { RegisteredsPageComponent } from './pages/registereds-page/registereds-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsAthletesComponent } from './pages/details-athletes/details-athletes.component';


@NgModule({
  declarations: [
    ListRegisteredsComponent,
    RegisteredsPageComponent,
    DetailsAthletesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ListRegisteredsComponent,
    RegisteredsPageComponent
  ]
})
export class RegisteredModule { }
