import { Component, Input,OnInit } from '@angular/core';
import { Cuidador } from '../../shared/cuidador';
import { ClientesService } from 'src/app/core/clientes.service';

@Component({
  selector: 'diw-cuidador-item',
  templateUrl: './cuidador-item.component.html',
  styleUrls: ['./cuidador-item.component.scss']
})
export class CuidadorItemComponent  implements OnInit{

  islogged=false;
  constructor(private clienteService :ClientesService) {
  }
  
  @Input() cuidador: Cuidador = {
    id: 0,
    nombre: '',
    apellido: '',
    imagen: '',
    descripcion: '',
    categorias: 0,
    precio:0,
  };
  ngOnInit(){
    this.clienteService.isLogged.subscribe((res)=>(this.islogged =res));
  }
}
