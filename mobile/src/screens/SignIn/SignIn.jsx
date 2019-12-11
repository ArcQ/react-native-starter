import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';
import { withStyles, Button, Text } from '@ui-kitten/components';

import textStyle from 'textStyle';
import ScrollableAvoidKeyboard from 'components/ScrollableAvoidKeyboard';
import ImageOverlay from 'components/ImageOverlay';
import { images } from 'assets';

import FormFields from './components/FormFields';

function SignIn({ themedStyle, ...props }) {
  const [formData, setFormData] = useState({});
  return (
    <ScrollableAvoidKeyboard>
      <ImageOverlay
        style={themedStyle.container}
        source={images.signInBg}
      >
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.helloLabel} category="h1">
            Hello
          </Text>
          <Text style={themedStyle.signInLabel} category="s1">
            Sign in to your account
          </Text>
        </View>
        <FormFields
          style={themedStyle.formContainer}
          onForgotPasswordPress={props.onForgotPasswordPress}
          onDataChange={setFormData}
        />
        <Button
          style={themedStyle.signInButton}
          textStyle={textStyle.button}
          size="giant"
          disabled={!formData}
          onPress={() => props.onSignInPress(formData)}
        >
          SIGN IN
        </Button>
        <Button
          style={themedStyle.signUpButton}
          textStyle={themedStyle.signUpText}
          appearance="ghost"
          activeOpacity={0.75}
          onPress={props.onSignUpPress}
        >
          Don't have an account? Sign Up
        </Button>
      </ImageOverlay>
    </ScrollableAvoidKeyboard>
  );
}

SignIn.propTypes = {
  onForgotPasswordPress: PropTypes.func.isRequired,
  onSignInPress: PropTypes.func.isRequired,
  onSignUpPress: PropTypes.func.isRequired,
  themedStyle: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(SignIn, theme => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  helloLabel: { color: 'white', ...textStyle.headline },
  signInLabel: {
    marginTop: 16,
    color: 'white',
    ...textStyle.subtitle,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: { marginBottom: 20, color: 'white', ...textStyle.subtitle },
}));
