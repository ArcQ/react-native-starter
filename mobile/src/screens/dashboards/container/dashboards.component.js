import React from 'react';
import { withStyles } from '@ui-kitten/components';
import { LayoutMenu } from 'components/common';

class DashboardsComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.onCategorySelect = (index) => {
      this.props.onLayoutSelect(index);
    };
    this.onItemPress = (index) => {
      this.props.onItemSelect(index);
    };
  }

  render() {
    const { themedStyle, data, selectedLayoutIndex } = this.props;
    return (<LayoutMenu style={themedStyle.container} data={data} selectedIndex={selectedLayoutIndex} onSelect={this.onCategorySelect} onItemPress={this.onItemPress} />);
  }
}
export const Dashboards = withStyles(DashboardsComponent, (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
}));
