import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-searchbar
        animated="true"
        placeholder="Search our services..."
      ></ion-searchbar>
    </ion-header>
    <ion-content>
      <div class="container">
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
          <h1><em>Sit back, relax, and let the AI take care of it...</em></h1>
        </div>
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
      ion-searchbar {
        --border-radius: 1rem;
        --background: var(--ion-color-light);
        filter: drop-shadow(2px 4px 6px var(--shadow));
      }

      .hero {
        h1 {
          text-align: center;
          padding: 3rem;
        }
        img {
          transform: scale(1.4);
          filter: drop-shadow(0px 10px 4px var(--shadow));
        }
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
  imports: [IonicModule],
})
export default class HomeComponent {}
