import React from 'react';
import { View } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import { ValidationInput } from 'components/ValidationInput';
import textStyle from 'textStyle';
import { EmailIconFill } from 'assets/icons';
import { EmailValidator } from 'utils/validators';

class ForgotPasswordFormComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      email: undefined,
    };
    this.onEmailInputTextChange = email => {
      this.setState({ email });
    };
    this.isValid = value => {
      const { email } = value;
      return email !== undefined;
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
    const { style, themedStyle, ...restProps } = this.props;
    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <ValidationInput
          textStyle={textStyle.paragraph}
          placeholder="Email"
          icon={EmailIconFill}
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        />
      </View>
    );
  }
}
export default withStyles(
  ForgotPasswordFormComponent,
  theme => ({
    container: {},
  }),
);
