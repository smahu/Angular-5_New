import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HereosComponent } from './hereos/hereos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HereosComponent,
    HeroDetailComponent
  ],
  imports: [

  BrowserModule,MatInputModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,MatFormFieldModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
