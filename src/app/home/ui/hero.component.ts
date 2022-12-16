import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-home-hero',
  template: `
    <div class="top-buttons">
      <ion-button color="tertiary">One</ion-button>
      <ion-button color="tertiary">Two</ion-button>
      <ion-button color="tertiary">Three</ion-button>
      <ion-button color="secondary">
        <ion-icon name="notifications-outline"></ion-icon>
      </ion-button>
    </div>
    <div class="hero">
      <img src="assets/images/foliage.png" />
    </div>

    <h1><em>Sit back,relax, and let the AI take care of it...</em></h1>
  `,
  styles: [
    `
      .hero {
        img {
          transform: scale(1.4);
          filter: drop-shadow(0px 10px 4px var(--shadow));
        }
      }

      h1 {
        margin-top: 4rem;
        margin-bottom: 2rem;
        text-align: center;
      }

      .top-buttons {
        margin-bottom: 3rem;
        display: flex;
        justify-content: space-around;

        ion-button {
          margin: 0.5rem;
          --border-radius: 20px;
          --padding-start: 1.2rem;
          --padding-end: 1.2rem;
          font-weight: bold;
          filter: drop-shadow(2px 4px 6px var(--shadow));
        }
      }
    `,
  ],
  imports: [IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {}
