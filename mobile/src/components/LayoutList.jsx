import { List, withStyles } from '@ui-kitten/components';
import React from 'react';

import { LayoutListItem } from 'components/LayoutListItem';

class LayoutListComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.onItemPress = (index) => {
      this.props.onItemPress(index);
    };
    this.renderItem = (info) => (<LayoutListItem style={this.props.themedStyle.item} data={info.item} onPress={this.onItemPress} />);
  }

  render() {
    const { style, themedStyle, restProps } = this.props;
    return (<List style={[themedStyle.container, style]} {...restProps} renderItem={this.renderItem} />);
  }
}
export const LayoutList = withStyles(LayoutListComponent, (theme) => ({
  item: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
}));
