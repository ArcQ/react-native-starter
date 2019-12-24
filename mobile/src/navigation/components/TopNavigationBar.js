import PropTypes from 'prop-types';
import React from 'react';
import {
  withStyles,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import CustomPropTypes from 'utils/customPropTypes';
import textStyle from 'textStyle';

import SafeAreaViewByPlatform from './SafeAreaViewByPlatform';

function TopNavigationBar(props) {
  return (
    <SafeAreaViewByPlatform style={props.themedStyle.safeArea}>
      <TopNavigation
        alignment="center"
        title={props.title}
        titleStyle={textStyle.subtitle}
        subtitleStyle={textStyle.caption1}
        leftControl={() => (
          <TopNavigationAction
            icon={props.backIcon}
            onPress={props.onBackPress}
          />
        )}
      />
    </SafeAreaViewByPlatform>
  );
}

TopNavigationBar.propTypes = {
  backIcon: PropTypes.func,
  onBackPress: PropTypes.func,
  title: PropTypes.string,
  themedStyle: CustomPropTypes.style,
};

export default withStyles(TopNavigationBar, theme => ({
  safeArea: {
    backgroundColor: theme['background-basic-color-1'],
  },
}));
