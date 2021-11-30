import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoModule } from './demo/demo.module';
import { ContactmanagerComponent } from './contactmanger/contactmanager.component';
import { ContactmanagerModule } from './contactmanger/contactmanager.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoModule,
    ContactmanagerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
