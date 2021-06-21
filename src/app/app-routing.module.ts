import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BootComponent} from './boot/boot.component';
import {Sayfa1Component} from './sayfa1/sayfa1.component';

const routes: Routes = [
  {path : 'utku', component : BootComponent},
  {path : 'syf2', component : Sayfa1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
