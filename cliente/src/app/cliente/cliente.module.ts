import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteNewComponent } from './cliente-new/cliente-new.component';
import { ClienteItemComponent } from './cliente-item/cliente-item.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';



@NgModule({
  declarations: [
    ClienteDetailComponent,
    ClienteEditComponent,
    ClienteNewComponent,
    ClienteItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ],
  exports: [ClienteItemComponent]
})
export class ClienteModule { }