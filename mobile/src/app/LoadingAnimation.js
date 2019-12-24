import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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

function LoadingAnimation(props) {
  const [animationValue] = useState(new Animated.Value(0));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const opacity = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const transform = [
    {
      scale: animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.5],
      }),
    },
  ];

  useEffect(
    () =>
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.in(Easing.exp),
      }).start(() => setAnimationCompleted(true)),
    [props.isLoaded],
  );

  return (
    <>
      {animationCompleted && (
        <Animated.View style={[styles.container, { opacity }]}>
          <Animated.Image
            source={images.splash.imageSource}
            style={[styles.image, { transform }]}
          />
        </Animated.View>
      )}
    </>
  );
}

LoadingAnimation.propTypes = {
  isLoaded: PropTypes.bool,
};
