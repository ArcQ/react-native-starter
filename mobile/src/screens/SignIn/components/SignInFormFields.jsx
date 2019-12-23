import PropTypes from 'prop-types';
import { Button, withStyles } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import useForm from 'react-hook-form';

import CustomPropTypes from 'utils/customPropTypes';
import intlService from 'services/intl/intlService';
import FormFields from 'screens/ForgotPassword/components/FormFields';
import BasicInput from 'components/BasicInput';
import textStyle from 'textStyle';

const EMAIL = 'email';
const PASSWORD = 'password';
const trans = intlService.translate('signIn');

function SignInFormFields(props) {
  const { style, themedStyle, ...restProps } = props;

  const { register, setValue, handleSubmit, errors } = useForm();

  return (
    <View {...restProps} style={[themedStyle.container, style]}>
      <BasicInput
        placeholder={trans('emailPlaceholder')}
        label="EMAIL"
        style={themedStyle.usernameInput}
        inputRef={register(
          { name: EMAIL },
          { required: true, maxLength: 30, minLength: 3 },
        )}
        onChangeText={text => setValue(EMAIL, text, true)}
        error={errors?.[EMAIL]}
      />
      <BasicInput
        placeholder={trans('passwordPlaceholder')}
        label="PASSWORD"
        style={themedStyle.passwordInput}
        inputRef={register(
          { name: PASSWORD },
          { required: true },
        )}
        onChangeText={text => setValue(PASSWORD, text, true)}
        error={errors?.[PASSWORD]}
        secureTextEntry
      />
      <Button
        style={themedStyle.forgotPasswordButton}
        textStyle={themedStyle.forgotPasswordText}
        appearance="ghost"
        activeOpacity={0.75}
        onPress={props.onForgotPasswordPress}
      >
        {trans('forgotPasswordButton')}
      </Button>
      <Button
        style={themedStyle.signInButton}
        textStyle={textStyle.button}
        size="giant"
        onPress={handleSubmit(props.onSignInPress)}
      >
        {trans('signInButton')}
      </Button>
    </View>);
}

SignInFormFields.propTypes = {
  themedStyle: CustomPropTypes.style,
  onForgotPasswordPress: PropTypes.func,
  onSignInPress: PropTypes.func,
  style: CustomPropTypes.style,
};

export default withStyles(FormFields, theme => ({
  container: {},
  emailInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  passwordInput: {
    marginTop: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  forgotPasswordButton: {
    marginVertical: 12,
  },
  forgotPasswordText: {
    marginBottom: 20, color: 'white', ...textStyle.subtitle,
  },
}));
