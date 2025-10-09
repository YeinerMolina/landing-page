import { providePrimeNG } from 'primeng/config';

import {
    ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PRIMENG_THEME_CONFIG } from './core/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: PRIMENG_THEME_CONFIG,
    }),
  ],
};
