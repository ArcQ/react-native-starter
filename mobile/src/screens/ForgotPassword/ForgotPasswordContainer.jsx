import React from 'react';
import { ForgotPassword } from './forgotPassword.component';

export class ForgotPasswordContainer extends React.Component {
  constructor() {
    super(...arguments);
    this.onResetPress = (data) => {
      this.props.navigation.goBack();
    };
  }

  render() {
    return (<ForgotPassword onResetPress={this.onResetPress} />);
  }
}
