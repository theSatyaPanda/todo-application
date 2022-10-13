import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavigationComponent,
    AddComponent,
    ShowComponent,

    
     
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

   
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
