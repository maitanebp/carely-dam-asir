import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/core/cuidadores.service';

@Component({
  selector: 'diw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  id: any;

  constructor(private cuidador: CuidadoresService, private router: Router) {}

  ngOnInit() {}

  newCuidador() {
    // Get max product Id from the product list
    this.cuidador.getMaxCuidadorId().subscribe((data) => (this.id = data));
    // this.router.navigate(['/cuidadores', this.id, 'new']);
    this.router.navigate(['/cuidadores', 0, 'new']);
  }
  loginCliente(){
    this.router.navigate(['/clientes',0,'item']);
  }
  signinCliente(){
    this.router.navigate(['/clientes',0,'new']);
  }
    
  // signinCliente(){
  //   this.router.navigate(['/cliente',this.id,'new']);}
  // signinCuidador(){
  //   this.router.navigate(['/cuidador',this.id,'new']);}
}
