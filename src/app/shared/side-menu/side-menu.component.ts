import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  //vamos a utilizar directamente el objeto de las rutas
 /*  public menuItems = routes
  .map(route => route.children)
  .flat() //convierte en un arreglo plano
  .filter(route => route && route?.path)
  .filter(route => !route?.path?.includes(':')); */

  public menuItems = [
    {
      title: 'User',
      path: 'user/:id'
    },
    {
      title: 'Lista de usuarios',
      path: 'users'
    }
  ]


}
