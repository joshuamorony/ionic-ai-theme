import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styles: [``],
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),

    RouterModule.forRoot(
      [
        {
          path: 'dashboard',
          loadChildren: () => import('./tabs/tabs.component'),
        },
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
        },
      ],
      { preloadingStrategy: PreloadAllModules }
    ),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
