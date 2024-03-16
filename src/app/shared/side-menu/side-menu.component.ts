import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  //vamos a utilizar directamente el objeto de las rutas

  public menuItems = routes
  .map(route => route.children || [])
    .flat()
    .filter(route => route && route.path)
    .filter(router => !router.path?.includes(':'));

  constructor(){
    /* const menuItems = routes
    .map(route => route.children || [])
    .flat() //convierte el arreglo en plano, es decir, que tenemos un array dentro de otra, esta funcion lo convierte en una sola
    .filter(route => route && route.path)
    .filter(router => !router.path?.includes(':'))

    console.log(menuItems); */
  }


}
