import { withStyles } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';
import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

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
  contentContainerStyle: PropTypes.objectOf(PropTypes.String),
  style: PropTypes.objectOf(PropTypes.String),
  themedStyle: PropTypes.objectOf(PropTypes.String),
};

export default withStyles(
  ScrollableAvoidKeyboard,
  theme => ({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
    },
  }),
);
