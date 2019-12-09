import React from 'react';
import { withStyles, Button, Text } from '@ui-kitten/components';

import { ForgotPasswordForm } from 'components/auth';
import { ScrollableAvoidKeyboard, ImageOverlay, textStyle } from 'components/common';
import { imageForgotPasswordBg } from 'assets/images';

class ForgotPasswordComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      formData: undefined,
    };
    this.backgroundImage = imageForgotPasswordBg;
    this.onFormDataChange = (formData) => {
      this.setState({ formData });
    };
    this.onResetPasswordButtonPress = () => {
      this.props.onResetPress(this.state.formData);
    };
  }

  render() {
    const { themedStyle } = this.props;
    return (<ScrollableAvoidKeyboard>
      <ImageOverlay style={themedStyle.container} source={this.backgroundImage.imageSource}>
        <Text style={themedStyle.forgotPasswordLabel} appearance="alternative" category="h4">
            Forgot Password
        </Text>
        <Text style={themedStyle.enterEmailLabel} appearance="alternative">
            Please enter your email address
        </Text>
        <ForgotPasswordForm style={themedStyle.formContainer} onDataChange={this.onFormDataChange} />
        <Button style={themedStyle.resetButton} textStyle={textStyle.button} size="giant" disabled={!this.state.formData} onPress={this.onResetPasswordButtonPress}>
            RESET PASSWORD
        </Button>
      </ImageOverlay>
    </ScrollableAvoidKeyboard>);
  }
}
export const ForgotPassword = withStyles(ForgotPasswordComponent, (theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    alignSelf: 'center', marginTop: 24, color: 'white', ...textStyle.headline,
  },
  enterEmailLabel: {
    alignSelf: 'center', marginTop: 64, color: 'white', ...textStyle.subtitle,
  },
  resetButton: {},
}));
