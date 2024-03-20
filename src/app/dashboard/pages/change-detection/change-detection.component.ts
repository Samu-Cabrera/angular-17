import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export default class ChangeDetectionComponent {

  public frameworkSignal = signal({
    name: 'Angular'
  });

  constructor(){
    setTimeout(() => {

      this.frameworkSignal.update(value => {
        value.name = 'React';
        return {...value};
      })

    }, 1000);
  }

}
