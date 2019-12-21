import { Input } from '@ui-kitten/components';

import React from 'react';
import { View } from 'react-native';
import { withStyles, CheckBox } from '@ui-kitten/components';
import useForm from 'react-hook-form'

import textStyle from 'textStyle';
import { ValidationInput } from 'components/ValidationInput';
import { EmailIconFill, EyeOffIconFill, PersonIconFill } from 'assets/icons';
import validate, {
  EmailValidator,
  NameValidator,
  PasswordValidator,
} from 'utils/validators';



function SignUpFormFields() {
  const { style, themedStyle, ...restProps } = this.props;

  const { register, setValue, handleSubmit, errors } = useForm()

  useEffect(

  const oldFormValid = validate(prevState);
  const newFormValid = validate(this.state);
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

  );
  return (
    <View style={[themedStyle.container, style]} {...restProps}>
      <View style={themedStyle.formContainer}>
        <BasicInput
          ref={register({ name: 'userName'}, { required: true })}
          onChangeText={text => setValue('userName', text, true)}
          placeholder="User Name"
          icon={PersonIconFill}
          validator={NameValidator}
          style={themedStyle.usernameInput}
        />
        <ValidationInput
          style={themedStyle.usernameInput}
          textStyle={textStyle.paragraph}
          placeholder="User Name"
          icon={PersonIconFill}
          onChangeText={setUsername}
        />
        <ValidationInput
          style={themedStyle.emailInput}
          textStyle={textStyle.paragraph}
          placeholder="Email"
          icon={EmailIconFill}
          validator={EmailValidator}
          onChangeText={setEmail}
        />
        <ValidationInput
          style={themedStyle.passwordInput}
          textStyle={textStyle.paragraph}
          secureTextEntry
          placeholder="Password"
          icon={EyeOffIconFill}
          validator={PasswordValidator}
          onChangeText={setPassword}
        />
        <CheckBox
          style={themedStyle.termsCheckBox}
          textStyle={themedStyle.termsCheckBoxText}
          checked={this.state.termsAccepted}
          onChange={setTermsAccepted}
          text="I read and agree to Terms & Conditions"
        />
      </View>
      <Button
        style={themedStyle.signUpButton}
        textStyle={textStyle.button}
        size="giant"
        disabled={!formData}
        onPress={() => props.onSignUpButtonPress(formData)}
      >
        SIGN UP
      </Button>
    </View>
  );

}

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
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

  }
}


export default withStyles(SignUpForm2Component, theme => ({
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
