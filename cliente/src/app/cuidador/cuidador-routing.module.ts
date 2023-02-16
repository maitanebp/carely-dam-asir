import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuidadorDetailComponent } from './cuidador-detail/cuidador-detail.component';
import { CuidadorEditComponent } from './cuidador-edit/cuidador-edit.component';
import { CuidadorNewComponent } from './cuidador-new/cuidador-new.component';

const routes: Routes = [
  // { path: 'cuidadores/:id/new', component: CuidadorNewComponent },
  { path: 'cuidadores/:id/new', component: CuidadorNewComponent },
  { path: 'cuidadores/:id', component: CuidadorDetailComponent },
  { path: 'cuidadores/:id/edit', component: CuidadorEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuidadorRoutingModule { }
