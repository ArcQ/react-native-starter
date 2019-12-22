import { withStyles } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import customPropTypes from 'utils/customPropTypes';

function ScrollableAvoidKeyboard({
  style,
  contentContainerStyle,
  themedStyle,
  ...restProps
}) {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      style={[themedStyle.container, style]}
      contentContainerStyle={[
        themedStyle.contentContainer,
        contentContainerStyle,
      ]}
      enableOnAndroid
      {...restProps}
    />
  );
}

ScrollableAvoidKeyboard.propTypes = {
  contentContainerStyle: customPropTypes.style,
  style: customPropTypes.style,
  themedStyle: customPropTypes.style,
};

export default withStyles(ScrollableAvoidKeyboard, theme => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
}));
