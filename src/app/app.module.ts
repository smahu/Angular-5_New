import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppCommonModule } from "./app-common.module";
import { AppRoutingModule } from "./app-routing.module";

import { HeaderComponent } from './shared-contents/components/app-header/header.component';
import { FooterComponent } from './shared-contents/components/app-footer/footer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppCommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [AppCommonModule],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
