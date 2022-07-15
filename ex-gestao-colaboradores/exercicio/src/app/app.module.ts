import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColaboradoresModule } from './features/colaboradores/colaboradores.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    SharedModule,
    ColaboradoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
