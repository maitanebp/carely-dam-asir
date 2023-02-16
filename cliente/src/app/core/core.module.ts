import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CuidadorData } from './cuidadores-data';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
   // InMemoryWebApiModule.forRoot(CuidadorData),
  ]
})
export class CoreModule { }
