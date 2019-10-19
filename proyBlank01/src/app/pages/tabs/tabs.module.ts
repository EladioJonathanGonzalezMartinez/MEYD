import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    //Arreglo
    children: [
      {
        path: 'cuenta',
      loadChildren: '../cuenta/cuenta.module#CuentaPageModule'
    },
    {
      path: 'contacto',
      loadChildren: '../contacto/contacto.module#ContactoPageModule'
    },
    {
      path: 'configuracion',
      loadChildren: '../configuracion/configuracion.module#ConfiguracionPageModule'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
