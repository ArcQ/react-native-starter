import { registerRootComponent } from 'expo';

import envService from 'services/env/envService';
import App from 'app/app';

envService.init();

registerRootComponent(App);
