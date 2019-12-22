import { Analytics, ScreenHit, Event } from 'expo-analytics';

import wrapServiceWithInit from 'utils/wrapServiceWithInit';
import envService from 'services/env/envService';

const analyticsService = {
  analytics: undefined,
  trackScreenTransition(routeName) {
    return this.analytics.hit(new ScreenHit(routeName));
  },
  fireAnalyticsEvent(config) {
    return this.analytics.event(
      new Event(config.category, config.action, config.label),
    );
  },
};

export default wrapServiceWithInit(analyticsService, (service) => {
  if (envService.getConfig().gaKey) {
    service.analytics = new Analytics(envService.getConfig.gaKey);
  }
});
