import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'https://reqres.in/api/users'

    //crear una propiedad privada
  #state = signal<any>({
    loading: true,
    users: []
  });

  // signal computada para que se tenga acceso de lectura a nivel global
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);


  constructor(){
    this.http.get<any>(this.apiUrl)
    .pipe(
      delay(1000)
    )
    .subscribe(res => {
      this.#state.set({
        loading: false,
        users: res.data
      })
    })
  }

  getUserById(id: string){
    return this.http.get<any>(`${ this.apiUrl }/${ id }`)
    .pipe(
      delay(1000),
      map(res => res.data)
    )
  }

}
