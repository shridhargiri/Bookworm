import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VishalComponent } from './vishal/vishal.component';
import { ShwetaComponent } from './shweta/shweta.component';
import { RaviComponent } from './ravi/ravi.component';
import { YugandharComponent } from './yugandhar/yugandhar.component';


@NgModule({
  declarations: [
    AppComponent,
    VishalComponent
    ShwetaComponent,
    RaviComponent,
    YugandharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
