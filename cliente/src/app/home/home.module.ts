import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CuidadorModule } from '../cuidador/cuidador.module';
import { CuidadorItemComponent } from '../cuidador/cuidador-item/cuidador-item.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CuidadorModule
  ]
})
export class HomeModule { }
