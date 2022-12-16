import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeHeaderComponent } from './ui/header.component';
import { HomeHeroComponent } from './ui/hero.component';
import { HomeTeamComponent } from './ui/team.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-home-header></app-home-header>
    <ion-content>
      <div class="container">
        <app-home-hero></app-home-hero>
        <app-home-team></app-home-team>
      </div>
      <div class="footer">
        <img src="assets/images/footer-foliage.png" />
      </div>
    </ion-content>
  `,
  styles: [
    `
      .container {
        padding: 1rem;
      }

      .footer {
        display: flex;
        justify-content: center;

        img {
          transform: translateY(15px);
          filter: drop-shadow(0px 10px 4px var(--shadow));
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonicModule,
    HomeHeaderComponent,
    HomeHeroComponent,
    HomeTeamComponent,
  ],
})
export default class HomeComponent {}
