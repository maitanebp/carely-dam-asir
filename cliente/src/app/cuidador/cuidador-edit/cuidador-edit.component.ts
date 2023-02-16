import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CuidadoresService } from 'src/app/core/cuidadores.service';
import { Cuidador } from 'src/app/shared/cuidador';
@Component({
  selector: 'diw-cuidador-edit',
  templateUrl: './cuidador-edit.component.html',
  styleUrls: ['./cuidador-edit.component.scss']
})
export class CuidadorEditComponent implements OnInit {
  pageTitle = 'Cuidador Edit';
  errorMessage: string = '';
  cuidadorForm: any;

  cuidadorId: number = 0;
  cuidador: Cuidador = {
    id: 0,
    nombre: '',
    apellido: '',
    precio: 0,
    descripcion: '',
    categorias: 0,
    imagen: '',
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private cuidadoresService: CuidadoresService
  ) { }

  ngOnInit(): void {
    this.cuidadorForm = this.fb.group({
      // title: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(3),
      //     Validators.maxLength(50),
      //   ],
      // ],
      id: 0,
      nombre: '',
      apellido: '',
      precio: 0,
      descripcion: '',
      categorias: 0,
      imagen: '',
    });

    // Read the cuidador Id from the route parameter
    this.cuidadorId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getCuidador(this.cuidadorId);
    
  }

  getCuidador(id: number): void {
    this.cuidadoresService.getCuidadorById(id).subscribe(
      (cuidador: Cuidador) => this.displayCuidador(cuidador),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayCuidador(cuidador: Cuidador): void {
    if (this.cuidadorForm) {
      this.cuidadorForm.reset();
    }
    this.cuidador = cuidador;
    this.pageTitle = `Edit Cuidador: ${this.cuidador.nombre} ${this.cuidador.apellido}`;

    // Update the data on the form
    this.cuidadorForm.patchValue({
      nombre: this.cuidador.nombre,
      apellido: this.cuidador.apellido,
      precio: this.cuidador.precio,
      descripcion: this.cuidador.descripcion,
      categorias: this.cuidador.categorias,
      imagen: this.cuidador.imagen,
    });
  }

  deleteCuidador(): void {
    if (this.cuidador.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the cuidador: ${this.cuidador.nombre} ${this.cuidador.apellido}?`)) {
        this.cuidadoresService.deleteCuidador(this.cuidador.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }

  saveCuidador(): void {
    if (this.cuidadorForm.valid) {
      if (this.cuidadorForm.dirty) {
        this.cuidador = this.cuidadorForm.value;
        this.cuidador.id = this.cuidadorId;

        this.cuidadoresService.updateCuidador(this.cuidador).subscribe(
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
    this.cuidadorForm.reset();
    this.router.navigate(['']);
  }
}
