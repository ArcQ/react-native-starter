import React from 'react';
import { withStyles, Button, Text } from '@ui-kitten/components';

import textStyle from 'textStyle';
import ScrollableAvoidKeyboard from 'components/ScrollableAvoidKeyboard';
import ImageOverlay from 'components/ImageOverlay';
import { getImage } from 'assets/manager';

import FormFields from './components/FormFields';

class ForgotPasswordComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      formData: undefined,
    };
    this.onFormDataChange = formData => {
      this.setState({ formData });
    };
    this.onResetPasswordButtonPress = () => {
      this.props.onResetPress(this.state.formData);
    };
  }

  render() {
    const { themedStyle } = this.props;
    return (
      <ScrollableAvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={getImage('forgotPasswordBg')}
        >
          <Text
            style={themedStyle.forgotPasswordLabel}
            appearance="alternative"
            category="h4"
          >
            Forgot Password
          </Text>
          <Text style={themedStyle.enterEmailLabel} appearance="alternative">
            Please enter your email address
          </Text>
          <FormFields
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.resetButton}
            textStyle={textStyle.button}
            size="giant"
            disabled={!this.state.formData}
            onPress={this.onResetPasswordButtonPress}
          >
            RESET PASSWORD
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>
    );
  }
}
export default withStyles(ForgotPasswordComponent, theme => ({
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
    alignSelf: 'center',
    marginTop: 50,
    color: 'white',
    ...textStyle.headline,
  },
  enterEmailLabel: {
    alignSelf: 'center',
    marginTop: 64,
    color: 'white',
    ...textStyle.subtitle,
  },
  resetButton: {},
}));
