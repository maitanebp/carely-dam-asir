import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CuidadorModule } from './cuidador/cuidador.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from "./shared/shared.module";
import {ClienteModule} from './cliente/cliente.module';




@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        CuidadorModule,
        HomeModule,
        SharedModule,
        ClienteModule
    ]
})
export class AppModule { }
