import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  splashBienvenida: string;


  constructor() {
    this.splashBienvenida = "¡Bienvenida Natalia!"
   
  }

  ngOnInit() {
  }

  cerrarSesion(){
  }
}
