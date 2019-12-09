import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { withStyles } from '@ui-kitten/components';

class ImageOverlay extends React.Component {
  constructor() {
    super(...arguments);
    this.getOverlayColor = source => {
      const { themedStyle } = this.props;
      return source || themedStyle.overlay.backgroundColor;
    };
  }

  render() {
    const {
      style, themedStyle, children, ...restProps
    } = this.props;
    const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);
    const overlayColor = this.getOverlayColor(derivedOverlayColor);
    return (
      <ImageBackground style={containerStyle} {...restProps}>
        <View
          style={[themedStyle.overlay, { backgroundColor: overlayColor }]}
        />
        {children}
      </ImageBackground>
    );
  }
}
export default withStyles(ImageOverlay, theme => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    ...StyleSheet.absoluteFillObject,
  },
}));
