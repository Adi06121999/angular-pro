import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo2Component } from './compo2/compo2.component';
import { NewcompComponent } from './newcomp/newcomp.component';
const routes: Routes = [
  {path: 'newcomp',component:NewcompComponent},
  {path: 'compo2',component:Compo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
