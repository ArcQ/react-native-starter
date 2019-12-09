import React from 'react';
import { Dashboards } from './dashboards.component';
import { routes } from './routes';

export class DashboardsContainer extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectedLayoutIndex: 0,
    };
    this.data = routes;
    this.navigationKey = 'DashboardsContainer';
    this.onCategorySelect = (selectedLayoutIndex) => {
      this.setState({ selectedLayoutIndex });
    };
    this.onItemSelect = (index) => {
      const { [index]: selectedItem } = this.data;
      this.props.navigation.navigate({
        key: this.navigationKey,
        routeName: selectedItem.route,
      });
    };
  }

  render() {
    return (<Dashboards data={this.data} selectedLayoutIndex={this.state.selectedLayoutIndex} onItemSelect={this.onItemSelect} onLayoutSelect={this.onCategorySelect} />);
  }
}
