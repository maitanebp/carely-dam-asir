import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CuidadoresService } from 'src/app/core/cuidadores.service';
import { Cuidador } from 'src/app/shared/cuidador';

@Component({
  selector: 'diw-cuidador-new',
  templateUrl: './cuidador-new.component.html',
  styleUrls: ['./cuidador-new.component.scss']
})
export class CuidadorNewComponent implements OnInit {
  pageTitle = 'Cuidador New';
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

    // Read the product Id from the route parameter
    this.cuidadorId = parseInt(this.activatedroute.snapshot.params['id']);
  }

  saveCuidador(): void {
    if (this.cuidadorForm.valid) {
      if (this.cuidadorForm.dirty) {
        this.cuidador = this.cuidadorForm.value;
        this.cuidador.id = this.cuidadorId;

        this.cuidadoresService.createCuidador(this.cuidador).subscribe(
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
    //redirect to the webpage main
    this.router.navigate(['']);
  }
}
