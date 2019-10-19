import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
usuario = {
  email: '',
  password: ''
};
  constructor(private alerta: AlertController) { }

  ngOnInit() {
  }

  validaLogin(formLogin: NgForm) {
  console.log('valores del formulario' + formLogin.value);
  console.log(this.usuario.email);
  console.log(this.usuario.password);

  console.log(formLogin.valid);
  }

  async alertaConfirmacion() {
    const alert = await this.alerta.create({
      header: 'Confirmacion',
      message: '<strong>Seguro que deseas continuar</strong>!!!',
      buttons : [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmo cancelación: blah');
          }
        }, {
          text: 'Continuar',
          handler: () => {
            console.log('Confirmó continuar');
          }
        }
      ]
    });
    await alert.present();
  }

}
