import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BootComponent} from './boot/boot.component';
import {Sayfa1Component} from './sayfa1/sayfa1.component';
import {KullaniciListComponent} from './kullanici-list/kullanici-list.component';
import {MarkaComponent} from './marka/marka.component';
import {AracComponent} from './arac/arac.component';

const routes: Routes = [
  {path : 'utku', component : BootComponent},
  {path : 'syf2', component : Sayfa1Component},
  {path : 'kullanicilar', component : KullaniciListComponent},
  {path : 'markalar', component : MarkaComponent},
  {path : 'araclar', component : AracComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
