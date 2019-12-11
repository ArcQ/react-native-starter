import React from 'react';
import SignUp from './SignUp';

export default class SignUpContainer extends React.Component {
  constructor() {
    super(...arguments);
    this.navigationKey = 'SignUpContainer';
    this.onSignUpPress = (data) => {
      this.props.navigation.navigate('Home');
    };
    this.onSignInPress = () => {
      this.props.navigation.navigate('SignIn');
    };
    this.onPhotoPress = () => {
    };
  }

  render() {
    return (<SignUp onSignUpPress={this.onSignUpPress} onSignInPress={this.onSignInPress} onPhotoPress={this.onPhotoPress} />);
  }
}
