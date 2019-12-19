import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DemoComponent } from './demo/demo.component';
// import { JsonDataShowingComponent } from './json-data-showing/json-data-showing.component';
// import { StyledDivShowingComponent } from './styled-div-showing/styled-div-showing.component';
// import { Ma } from '@angular/material'
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule }    from '@angular/common/http';
import { JSONService } from './Servivces/json.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { TextChangeDirective } from './text-change.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LandingPageComponent,
    DemoComponent,
    TextChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    GridModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [JSONService],
  bootstrap: [AppComponent]
})
export class AppModule { }