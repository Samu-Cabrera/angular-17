import { TitleComponent } from './../../../shared/title/title.component';
import { Component, signal } from '@angular/core';

type Calificacion = 5|3|1;

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  //crear un signal
  public showContent = signal<boolean>(true);
  public calificacion = signal<Calificacion>(5);
  public stacks = signal([]);


  cambiarValor(): void {
    //cambiar el valor del signal
    this.showContent.update(value => !value);
  }

}
