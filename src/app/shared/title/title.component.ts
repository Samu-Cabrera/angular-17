import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-3xl mb-5">
      {{ title }}
    </h2>
  `,
  styles: ''
})
export class TitleComponent {

  //recibir el title
  @Input({ required: true }) title!: string;

}
