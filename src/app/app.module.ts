import { AppLoaderService } from './shared-contents/services/app-loader.service';
import { AppLoaderComponent } from './shared-contents/components/app-loader/app-loader.component';
import { MatSpinner } from '@angular/material';
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
import {MatProgressSpinnerModule, MatDialogModule, MatDialog} from '@angular/material';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { CustomLoaderComponent } from './shared-contents/components/custom-css-loader/custom-loader.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppCommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    OverlayModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppLoaderComponent,
    CustomLoaderComponent
  ],
  exports: [AppCommonModule],
  providers: [
    AppLoaderService
  ],
  entryComponents: [
    AppLoaderComponent,
    CustomLoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
