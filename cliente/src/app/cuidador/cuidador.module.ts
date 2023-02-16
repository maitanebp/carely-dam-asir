import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuidadorDetailComponent } from './cuidador-detail/cuidador-detail.component';
import { CuidadorEditComponent } from './cuidador-edit/cuidador-edit.component';
import { CuidadorNewComponent } from './cuidador-new/cuidador-new.component';
import { CuidadorItemComponent } from './cuidador-item/cuidador-item.component';
import { SharedModule } from '../shared/shared.module';
import { CuidadorRoutingModule } from './cuidador-routing.module';



@NgModule({
  declarations: [
    CuidadorDetailComponent,
    CuidadorEditComponent,
    CuidadorNewComponent,
    CuidadorItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CuidadorRoutingModule
  ],
  exports: [CuidadorItemComponent]
})
export class CuidadorModule { }

