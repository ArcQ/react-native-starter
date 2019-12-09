import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import { images } from 'assets';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: undefined,
    height: undefined,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});

export default class LoadingAnimationComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      animationValue: new Animated.Value(0),
      animationCompleted: false,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.isLoaded && nextProps.isLoaded !== this.props.isLoaded) {
      this.triggerAnimation();
    }
  }

  triggerAnimation() {
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.in(Easing.exp),
    }).start(() => this.onAnimationCompleted());
  }

  onAnimationCompleted() {
    this.setState({ animationCompleted: true });
  }

  renderAnimatedComponent() {
    const opacity = this.state.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    const transform = [
      {
        scale: this.state.animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ];
    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Animated.Image
          source={images.splash.imageSource}
          style={[styles.image, { transform }]}
       />
      </Animated.View>
    );
  }

  render() {
    const { animationCompleted } = this.state;
    return animationCompleted ? null : this.renderAnimatedComponent();
  }
}
