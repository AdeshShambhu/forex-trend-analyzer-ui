import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForexFormComponent } from './forex-form/forex-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForexTrendChartComponent } from './forex-trend-chart/forex-trend-chart.component';
import { ForexTrendAnalysisComponent } from './forex-trend-analysis/forex-trend-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    ForexFormComponent,
    HeaderComponent,
    FooterComponent,
    ForexTrendChartComponent,
    ForexTrendAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
