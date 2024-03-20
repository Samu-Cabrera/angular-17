import { UserService } from './../../services/user.service';
import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  //injectar el servicio 
  public userService = inject(UserService);


}
