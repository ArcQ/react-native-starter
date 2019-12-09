import React from 'react';
import { View } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import { EmailValidator, PasswordValidator } from 'utils/validators';
import textStyle from 'textStyle';
import { ValidationInput } from 'components/ValidationInput';

class FormFields extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      email: undefined,
      password: undefined,
    };
    this.onEmailInputTextChange = email => {
      this.setState({ email });
    };
    this.onPasswordInputTextChange = password => {
      this.setState({ password });
    };
    this.isValid = value => {
      const { email, password } = value;
      return email !== undefined && password !== undefined;
    };
  }

  componentDidUpdate(prevProps, prevState) {
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
    const { style, themedStyle, theme, ...restProps } = this.props;
    return (
      <View {...restProps} style={[themedStyle.container, style]}>
        <ValidationInput
          style={themedStyle.emailInput}
          textStyle={textStyle.paragraph}
          label="EMAIL"
          placeholder="Email"
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        />
        <ValidationInput
          style={themedStyle.passwordInput}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          secureTextEntry
          placeholder="Password"
          label="PASSWORD"
          validator={PasswordValidator}
          onChangeText={this.onPasswordInputTextChange}
        />
      </View>
    );
  }
}

export default withStyles(FormFields, theme => ({
  container: {},
  emailInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  passwordInput: {
    marginTop: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
}));
