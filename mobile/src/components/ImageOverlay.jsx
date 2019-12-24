import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import CustomPropTypes from 'utils/customPropTypes';

function ImageOverlay(props) {
  const {
    style, themedStyle, children, ...restProps
  } = props;

  const {
    overlayColor: derivedOverlayColor,
    ...containerStyle
  } = StyleSheet.flatten(style);
  const overlayColor = derivedOverlayColor
    || themedStyle.overlay.backgroundColor;

  return (
    <ImageBackground style={containerStyle} {...restProps}>
      <View
        style={[themedStyle.overlay, { backgroundColor: overlayColor }]}
      />
      {children}
    </ImageBackground>
  );
}

ImageOverlay.propTypes = {
  style: CustomPropTypes.style,
  themedStyle: CustomPropTypes.style,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default withStyles(ImageOverlay, () => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    ...StyleSheet.absoluteFillObject,
  },
}));
