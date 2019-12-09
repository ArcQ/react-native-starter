import React from 'react';
import { SignUp3 } from './signUp3.component';

export class SignUp3Container extends React.Component {
  constructor() {
    super(...arguments);
    this.navigationKey = 'SignUp3Container';
    this.onSignUpPress = (data) => {
      this.props.navigation.goBack();
    };
    this.onSignInPress = () => {
      this.props.navigation.navigate({
        key: this.navigationKey,
        routeName: 'Sign In 3',
      });
    };
    this.onPhotoPress = () => {
    };
  }

  render() {
    return (<SignUp3 onSignUpPress={this.onSignUpPress} onSignInPress={this.onSignInPress} onPhotoPress={this.onPhotoPress} />);
  }
}
