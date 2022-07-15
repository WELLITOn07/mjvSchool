import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SellModule } from './features/sell/sell.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    SellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
