import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-home-team',
  template: `
    <div class="icons">
      <div class="icon-container">
        <img src="assets/images/icon-one.png" />
        <ion-note style="font-weight: bold;">145</ion-note>
        <ion-note>label</ion-note>
      </div>
      <div class="icon-container">
        <img src="assets/images/icon-two.png" />
        <ion-note style="font-weight: bold;">28</ion-note>
        <ion-note>label</ion-note>
      </div>
      <div class="icon-container">
        <img src="assets/images/icon-three.png" />
        <ion-note style="font-weight: bold;">330</ion-note>
        <ion-note>label</ion-note>
      </div>
    </div>
    <ion-list>
      <ion-list-header>
        <ion-label>Choose a team member...</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-avatar slot="start">
          <div class="avatar-box">1</div>
        </ion-avatar>
        <ion-label>ChatGPT</ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <div class="avatar-box">2</div>
        </ion-avatar>
        <ion-label>Stable Diffusion</ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <div class="avatar-box">3</div>
        </ion-avatar>
        <ion-label>GPT-4</ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <div class="avatar-box">4</div>
        </ion-avatar>
        <ion-label>Midjourney</ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <div class="avatar-box">5</div>
        </ion-avatar>
        <ion-label>DALL-E</ion-label>
      </ion-item>
    </ion-list>
  `,
  styles: [
    `
      .icons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 3rem;

        .icon-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          filter: drop-shadow(2px 4px 6px var(--shadow));

          img {
            width: 75px;
            height: auto;
          }

          ion-note {
            --color: #000;
          }
        }
      }

      ion-list {
        --ion-item-background: transparent;

        .avatar-box {
          background: var(--ion-color-primary);
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: 0.5rem;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: var(--ion-color-light);
        }
      }
    `,
  ],
  imports: [IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamComponent {}
