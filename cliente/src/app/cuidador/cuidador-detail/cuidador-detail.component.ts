import { Component,OnInit } from '@angular/core';
import { CuidadoresService } from '../../core/cuidadores.service';
import { Cuidador } from '../../shared/cuidador';
import { ActivatedRoute, Router } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'diw-cuidador-detail',
  templateUrl: './cuidador-detail.component.html',
  styleUrls: ['./cuidador-detail.component.scss']
})
export class CuidadorDetailComponent implements OnInit {

  public cuidador: Cuidador={
    id: 0,
    nombre: '',
    apellido: '',
    precio: 0,
    imagen:'',
    descripcion: '',
    categorias: 0,

  };
  cuidadorId: number = 0;
  isLoading:Boolean=true;
  
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private CuidadoresService :CuidadoresService

  ) {}
  ngOnInit() {
    this.cuidadorId = parseInt(this.activatedroute.snapshot.params['id']);
    this.CuidadoresService.getCuidadorById(this.cuidadorId)
      .subscribe((data: Cuidador) => {
        this.cuidador = data
        console.log(this.cuidador)
        this.isLoading=false
      });
  }
  goEdit(): void {
    this.router.navigate(['/cuidadores', this.cuidadorId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
