import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const providers = [
  provideRouter(routes, withPreloading(PreloadAllModules)),
  importProvidersFrom(IonicModule.forRoot({})),
];

bootstrapApplication(AppComponent, { providers });
