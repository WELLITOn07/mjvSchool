import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { ManagementModule } from './features/management/management.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    SharedModule,
    ManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
