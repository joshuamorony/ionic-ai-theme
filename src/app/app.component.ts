import { Component, EnvironmentInjector } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet
        [environmentInjector]="environmentInjector"
      ></ion-router-outlet>
    </ion-app>
  `,
  styles: [``],
  imports: [IonicModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  standalone: true,
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
