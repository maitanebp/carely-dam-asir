import { Component, OnInit } from '@angular/core';
import { CuidadoresService } from '../core/cuidadores.service';
import { Cuidador } from '../shared/cuidador';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cuidadores: Cuidador[] = [];
  constructor(private cuidadorService: CuidadoresService) {

  }

  ngOnInit() {
    this.cuidadorService
      .getCuidador()
      .subscribe((data: any[]) => { 
        this.cuidadores = data[data.length-1]
      });
  }
}
