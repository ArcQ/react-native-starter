import React from 'react';
import { View } from 'react-native';
import { withStyles, CheckBox } from '@ui-kitten/components';

import { textStyle, ValidationInput } from 'components/common';
import { EmailIconFill, EyeOffIconFill, PersonIconFill } from 'assets/icons';
import {
  EmailValidator,
  NameValidator,
  PasswordValidator,
} from 'core/validators';

class SignUpForm2Component extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
      termsAccepted: false,
    };
    this.onTermsValueChange = termsAccepted => {
      this.setState({ termsAccepted });
    };
    this.onUsernameInputTextChange = username => {
      this.setState({ username });
    };
    this.onEmailInputTextChange = email => {
      this.setState({ email });
    };
    this.onPasswordInputValidationResult = password => {
      this.setState({ password });
    };
    this.isValid = value => {
      const {
        username, password, email, termsAccepted,
      } = value;
      return (
        username !== undefined
        && password !== undefined
        && email !== undefined
        && termsAccepted
      );
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.onDataChange) {
      return;
    }
    const oldFormValid = this.isValid(prevState);
    const newFormValid = this.isValid(this.state);
    const isStateChanged = this.state !== prevState;
    const becomeValid = !oldFormValid && newFormValid;
    const becomeInvalid = oldFormValid && !newFormValid;
    const remainValid = oldFormValid && newFormValid;
    if (becomeValid) {
      this.props.onDataChange(this.state);
    } else if (becomeInvalid) {
      this.props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      this.props.onDataChange(this.state);
    }
  }

  render() {
    const { style, themedStyle, ...restProps } = this.props;
    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            style={themedStyle.usernameInput}
            textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder="User Name"
            icon={PersonIconFill}
            validator={NameValidator}
            onChangeText={this.onUsernameInputTextChange}
          />
          <ValidationInput
            style={themedStyle.emailInput}
            textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder="Email"
            icon={EmailIconFill}
            validator={EmailValidator}
            onChangeText={this.onEmailInputTextChange}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            autoCapitalize="none"
            secureTextEntry
            placeholder="Password"
            icon={EyeOffIconFill}
            validator={PasswordValidator}
            onChangeText={this.onPasswordInputValidationResult}
          />
          <CheckBox
            style={themedStyle.termsCheckBox}
            textStyle={themedStyle.termsCheckBoxText}
            checked={this.state.termsAccepted}
            onChange={this.onTermsValueChange}
            text="I read and agree to Terms & Conditions"
          />
        </View>
      </View>
    );
  }
}
export const SignUpForm2 = withStyles(SignUpForm2Component, theme => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  usernameInput: {},
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: { color: theme['text-hint-color'], ...textStyle.subtitle },
}));
