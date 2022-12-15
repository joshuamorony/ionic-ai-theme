import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `hi`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export default class HomeComponentModule {}
