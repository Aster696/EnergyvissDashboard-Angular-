import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { DetailsComponent } from './components/details/details.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { LineChart1Component } from './components/Charts/line-chart1/line-chart1.component';
import { LineChart2Component } from './components/Charts/line-chart2/line-chart2.component';
import { MaterialModule } from 'src/shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownsComponent,
    DetailsComponent,
    GaugeComponent,
    LineChart1Component,
    LineChart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
