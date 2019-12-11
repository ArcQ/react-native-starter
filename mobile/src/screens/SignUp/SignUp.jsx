import { View } from 'react-native';
import React from 'react';
import { withStyles, Button } from '@ui-kitten/components';

import { ProfilePhoto } from 'components/ProfilePhoto';
import textStyle from 'textStyle';
import ScrollableAvoidKeyboard from 'components/ScrollableAvoidKeyboard';
import ImageOverlay from 'components/ImageOverlay';
import { getImage } from 'assets/manager';
import { PlusIconFill } from 'assets/icons';

import FormFields from './components/FormFields';

export class SignUpComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.profileImage = {};
    this.state = {
      formData: undefined,
    };
    this.onFormDataChange = formData => {
      this.setState({ formData });
    };
    this.onPhotoButtonPress = () => {
      this.props.onPhotoPress();
    };
    this.onSignInButtonPress = () => {
      this.props.onSignInPress();
    };
    this.onSignUpButtonPress = () => {
      this.props.onSignUpPress(this.state.formData);
    };
    this.renderPhotoButtonIcon = style => {
      const { themedStyle } = this.props;
      return PlusIconFill({ ...style, ...themedStyle.photoButtonIcon });
    };
    this.renderPhotoButton = () => {
      const { themedStyle } = this.props;
      return (
        <Button
          style={themedStyle.photoButton}
          icon={this.renderPhotoButtonIcon}
          onPress={this.onPhotoButtonPress}
        />
      );
    };
  }

  render() {
    const { themedStyle } = this.props;
    return (
      <ScrollableAvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={getImage('signUpBg')}
        >
          <View style={themedStyle.headerContainer}>
            <ProfilePhoto style={themedStyle.photo} resizeMode="center" source={this.profileImage.imageSource} button={this.renderPhotoButton} />
          </View>
          <FormFields
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.signUpButton}
            textStyle={textStyle.button}
            size="giant"
            disabled={!this.state.formData}
            onPress={this.onSignUpButtonPress}
          >
            SIGN UP
          </Button>
          <Button
            style={themedStyle.signInButton}
            textStyle={themedStyle.signUpText}
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}
          >
            Already have an account? Sign In
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>
    );
  }
}

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
