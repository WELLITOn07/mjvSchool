import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { ManagementModule } from './features/management/management.module';
import { SellModule } from './features/sell/sell.module';
import { SharedModule } from './shared/shared.module';
import { RedDirective } from './red.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedDirective
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    SharedModule,
    SellModule,
    ManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
