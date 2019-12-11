import { Analytics, ScreenHit, Event } from 'expo-analytics';

const analytics = new Analytics('UA-61945105-8');
export function trackScreenTransition(routeName) {
  return analytics.hit(new ScreenHit(routeName));
}
export function fireAnalyticsEvent(config) {
  return analytics.event(
    new Event(config.category, config.action, config.label),
  );
}
