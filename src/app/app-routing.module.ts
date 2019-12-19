import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonDataShowingComponent } from './json-data-showing/json-data-showing.component';
import { StyledDivShowingComponent } from './styled-div-showing/styled-div-showing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingPageComponent},
  {path: 'demo', component: DemoComponent, children: [
    { path: 'json-with-table', component: JsonDataShowingComponent },
    { path: 'styled-div', component: StyledDivShowingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [JsonDataShowingComponent, StyledDivShowingComponent]
