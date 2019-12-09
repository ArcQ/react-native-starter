import { NavigationActions } from 'react-navigation';

export default {
  navigator: undefined,
  setNavigator(nav) {
    if (nav) {
      this.navigator = nav;
    }
  },
  navigate(routeName, params) {
    if (this.navigator && routeName) {
      const action = NavigationActions.navigate({ routeName, params });
      this.navigator.dispatch(action);
    }
  },
  goBack() {
    if (this.navigator) {
      const action = NavigationActions.back({});
      this.navigator.dispatch(action);
    }
  },
};
