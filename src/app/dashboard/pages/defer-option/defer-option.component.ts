import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { LoadersFastComponent } from '../../../shared/loaders/loaders-fast.component copy';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [TitleComponent, LoadersFastComponent],
  templateUrl: './defer-option.component.html',
  styleUrl: './defer-option.component.css'
})
export default class DeferOptionComponent {

}
