import PropTypes from 'prop-types';
import { View } from 'react-native';
import React from 'react';
import { withStyles, Button } from '@ui-kitten/components';

import textStyle from 'textStyle';
import customPropTypes from 'utils/customPropTypes';
import { ProfilePhoto } from 'components/ProfilePhoto';
import ScrollableAvoidKeyboard from 'components/ScrollableAvoidKeyboard';
import ImageOverlay from 'components/ImageOverlay';
import { getImage } from 'assets/manager';
import { PlusIconFill } from 'assets/icons';

import SignupFormFields from './components/SignupFormFields';

function PhotoButton(props) {
  const { themedStyle } = props;
  return (
    <Button
      style={themedStyle.photoButton}
      icon={style => PlusIconFill({ ...style, ...themedStyle.photoButtonIcon })}
      onPress={() => {
        props.onPhotoPress();
      }}
    />
  );
}

PhotoButton.propTypes = {
  onPhotoPress: PropTypes.func,
  themedStyle: customPropTypes.themedStyle,
};

function SignUpComponent(props) {
  const { themedStyle } = props;

  return (
    <ScrollableAvoidKeyboard>
      <ImageOverlay style={themedStyle.container} source={getImage('signUpBg')}>
        <View style={themedStyle.headerContainer}>
          <ProfilePhoto
            style={themedStyle.photo}
            resizeMode="center"
            button={() => <PhotoButton
              onPhotoPress={props.onPhotoPress}
              themedStyle={props.themedStyle}
            />}
          />
        </View>
        <SignupFormFields
          style={themedStyle.formContainer}
          onSignUpButtonPress={props.onSignUpButtonPress}
        />
        <Button
          style={themedStyle.signUpButton}
          textStyle={themedStyle.signUpText}
          appearance="ghost"
          activeOpacity={0.75}
          onPress={props.onSignInPress}
        >
          Already have an account? Sign In
        </Button>
      </ImageOverlay>
    </ScrollableAvoidKeyboard>
  );
}

SignUpComponent.propTypes = {
  onPhotoPress: PropTypes.func.isRequired,
  onSignInPress: PropTypes.func.isRequired,
  onSignUpButtonPress: PropTypes.func.isRequired,
  themedStyle: customPropTypes.style,
};

export default withStyles(SignUpComponent, theme => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    marginTop: 50,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  photo: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: theme['background-basic-color-1'],
    tintColor: theme['text-hint-color'],
  },
  photoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{ translateY: 80 }],
  },
  photoButtonIcon: {
    width: 24,
    height: 24,
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
  },
  signUpText: { color: 'white', ...textStyle.subtitle },
}));
