import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SellModule } from './features/sell/sell.module';
import { SheredModule } from './shered/shered.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SheredModule,
    FeaturesModule,
    SellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
