import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import LogRocket from 'logrocket';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  LogRocket.init('9ijdbr/feed-me-dev');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
