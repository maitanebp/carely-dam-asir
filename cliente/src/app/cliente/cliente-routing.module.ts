import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteNewComponent } from './cliente-new/cliente-new.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  // { path: 'clientes/:id/new', component: CuidadorNewComponent },
  { path: 'clientes/:id/new', component: ClienteNewComponent  },
  { path: 'clientes/:id', component:  ClienteDetailComponent},
  { path: 'clientes/:id/edit', component:  ClienteEditComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
