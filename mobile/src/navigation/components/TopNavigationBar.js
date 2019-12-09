import React from 'react';
import { withStyles, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import textStyle from 'textStyle';
import SafeAreaViewByPlatform from './SafeAreaViewByPlatform';

class TopNavigationBarComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.onBackButtonPress = () => {
      if (this.props.onBackPress) {
        this.props.onBackPress();
      }
    };
    this.renderBackButton = source => (
      <TopNavigationAction icon={source} onPress={this.onBackButtonPress} />
    );
  }

  render() {
    const { themedStyle, title, backIcon } = this.props;
    const leftControlElement = backIcon
      ? this.renderBackButton(backIcon)
      : null;
    return (
      <SafeAreaViewByPlatform style={themedStyle.safeArea}>
        <TopNavigation
          alignment="center"
          title={title}
          titleStyle={textStyle.subtitle}
          subtitleStyle={textStyle.caption1}
          leftControl={leftControlElement}
        />
      </SafeAreaViewByPlatform>
    );
  }
}
export const TopNavigationBar = withStyles(
  TopNavigationBarComponent,
  theme => ({
    safeArea: {
      backgroundColor: theme['background-basic-color-1'],
    },
  }),
);
