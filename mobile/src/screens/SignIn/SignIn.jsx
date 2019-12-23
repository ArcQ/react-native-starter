import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { withStyles, Button, Text } from '@ui-kitten/components';

import intlService from 'services/intl/intlService';
import customProptypes from 'utils/customPropTypes';
import textStyle from 'textStyle';
import ScrollableAvoidKeyboard from 'components/ScrollableAvoidKeyboard';
import ImageOverlay from 'components/ImageOverlay';
import { images } from 'assets';

import SignInFormFields from './components/SignInFormFields';

const trans = intlService.translate('signIn');

function SignIn({ themedStyle, ...props }) {
  return (
    <ScrollableAvoidKeyboard>
      <ImageOverlay
        style={themedStyle.container}
        source={images.signInBg}
      >
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.helloLabel} category="h1">
            {trans('helloLabel')}
          </Text>
          <Text style={themedStyle.signInLabel} category="s1">
            {trans('signInLabel')}
          </Text>
        </View>
        <SignInFormFields
          style={themedStyle.formContainer}
          onSignInPress={props.onSignInPress}
          onSignUpPress={props.onSignUpPress}
          onForgotPasswordPress={props.onForgotPasswordPress}
        />
        <Button
          style={themedStyle.signUpButton}
          textStyle={themedStyle.signUpText}
          appearance="ghost"
          activeOpacity={0.75}
          onPress={props.onSignUpPress}
        >
          {trans('signUpButton')}
        </Button>
      </ImageOverlay>
    </ScrollableAvoidKeyboard>
  );
}

SignIn.propTypes = {
  onForgotPasswordPress: PropTypes.func.isRequired,
  onSignInPress: PropTypes.func.isRequired,
  onSignUpPress: PropTypes.func.isRequired,
  themedStyle: customProptypes.style,
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
