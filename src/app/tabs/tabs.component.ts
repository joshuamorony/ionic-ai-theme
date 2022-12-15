import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="triangle"></ion-icon>
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="">
          <ion-icon name="ellipse"></ion-icon>
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="">
          <ion-icon name="square"></ion-icon>
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {}

@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabsComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('../home/home.component'),
          },
          {
            path: '',
            redirectTo: '/dashboard/home',
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
})
export default class TabsComponentModule {}
