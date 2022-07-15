import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRegisteredsComponent } from './components/list-registereds/list-registereds.component';
import { RegisteredsPageComponent } from './pages/registereds-page/registereds-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListRegisteredsComponent,
    RegisteredsPageComponent
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
