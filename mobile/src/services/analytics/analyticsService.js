import { Analytics, ScreenHit, Event } from 'expo-analytics';

import wrapServiceWithInit from 'utils/wrapServiceWithInit';
import envService from 'services/env/envService';

const analyticsService = {
  analytics: undefined,

  onTransitionTrackError(error) {
    console.warn('Analytics error: ', error.message);
  },
  trackScreenTransition(routeName) {
    return this.analytics
      .hit(new ScreenHit(routeName))
      .catch(this.onTransitionTrackError);
  },
  fireAnalyticsEvent(config) {
    return this.analytics.event(
      new Event(config.category, config.action, config.label),
    );
  },
};

export default wrapServiceWithInit(analyticsService, service => {
  if (envService.getConfig().gaKey) {
    service.analytics = new Analytics(envService.getConfig.gaKey);
  } else {
    throw new Error('Analytics not set up: no key');
  }
});
