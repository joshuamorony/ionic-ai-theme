import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-home-header',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar lines="none">
        <ion-searchbar
          animated="true"
          placeholder="Search our services..."
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>
  `,
  styles: [
    `
      ion-toolbar {
        --background: transparent;
      }

      ion-searchbar {
        --border-radius: 1rem;
        --background: var(--ion-color-light);
        filter: drop-shadow(2px 4px 6px var(--shadow));
      }
    `,
  ],
  imports: [IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeaderComponent {}
