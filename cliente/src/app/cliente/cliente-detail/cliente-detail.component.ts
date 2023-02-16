import { Component,OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/core/clientes.service';
@Component({
  selector: 'diw-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {
  public cliente: Cliente={
    id: 0,
    nombre: '',
    contra:''
  };
  clienteId: number = 0;
  isLoading:Boolean=true;
  
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private ClienteesService :ClientesService

  ) {}
  ngOnInit() {
    this.clienteId = parseInt(this.activatedroute.snapshot.params['id']);
    this.ClienteesService.getClienteById(this.clienteId)
      .subscribe((data: Cliente) => {
        this.cliente = data
        console.log(this.cliente)
        this.isLoading=false
      });
  }
  goEdit(): void {
    this.router.navigate(['/clientes', this.clienteId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
