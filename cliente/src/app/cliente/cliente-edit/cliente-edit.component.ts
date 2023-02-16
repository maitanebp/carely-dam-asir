import { Component , OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/core/clientes.service';
import { Cliente } from 'src/app/shared/cliente';
@Component({
  selector: 'diw-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {
  pageTitle = 'Cliente Edit';
  errorMessage: string = '';
  clienteForm: any;

  clienteId: number = 0;
  cliente: Cliente = {
    id: 0,
    nombre: '',
    contra: '',
  };
  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private clienteesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      id: 0,
      nombre: '',
      contra: '',
    });
    // Read the cliente Id from the route parameter
    this.clienteId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getCliente(this.clienteId);
    
  }

  getCliente(id: number): void {
    this.clienteesService.getClienteById(id).subscribe(
      (cliente: Cliente) => this.displayCliente(cliente),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayCliente(cliente: Cliente): void {
    if (this.clienteForm) {
      this.clienteForm.reset();
    }
    this.cliente = cliente;
    this.pageTitle = `Edit Cliente: ${this.cliente.nombre}`;

    // Update the data on the form
    this.clienteForm.patchValue({
      nombre: this.cliente.nombre,
    });
  }

  deleteCliente(): void {
    if (this.cliente.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the cliente: ${this.cliente.nombre}}?`)) {
        this.clienteesService.deleteCliente(this.cliente.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }
  saveCliente(): void {
    if (this.clienteForm.valid) {
      if (this.clienteForm.dirty) {
        this.cliente = this.clienteForm.value;
        this.cliente.id = this.clienteId;
        this.clienteesService.updateCliente(this.cliente).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
 onSaveComplete(): void {
    // Reset the form to clear the flags
    this.clienteForm.reset();
    this.router.navigate(['']);
  }  
}
