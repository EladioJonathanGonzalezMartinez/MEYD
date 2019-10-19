import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

      registro = {
      nombre: '',
      email: '',
      telefono: '',
      password: '',
      fechaN: '',
      sexo: '',
      direccion: ''
    };
  constructor() { }

  ngOnInit() {
  }
  validaLogin(formLogin: NgForm) {
    console.log('valores del formulario' + formLogin.value);
    console.log(this.registro.nombre);
    console.log(this.registro.email);
    console.log(this.registro.telefono);
    console.log(this.registro.password);
    console.log(this.registro.fechaN);
    console.log(this.registro.sexo);
    console.log(this.registro.direccion);
    console.log(formLogin.valid);

}}
