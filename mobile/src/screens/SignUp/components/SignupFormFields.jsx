import { Button, CheckBox, withStyles } from '@ui-kitten/components';
import { props } from 'ramda';
import React from 'react';
import { View } from 'react-native';
import useForm from 'react-hook-form';

import { PATTERN_EMAIL } from 'utils/validators';
import customPropTypes from 'utils/customPropTypes';
import intlService from 'services/intl/intlService';
import BasicInput from 'components/BasicInput';
import textStyle from 'textStyle';
import { EmailIconFill, EyeOffIconFill, PersonIconFill } from 'assets/icons';

const USERNAME = 'userName';
const EMAIL = 'email';
const PASSWORD = 'password';
const TERMS_CHECKBOX = 'termsCheckBox';

const trans = intlService.translate('signup');

function SignUpFormFields(props) {
  const { themedStyle, style, ...restProps } = props;
  console.log('themed', themedStyle);

  const { register, setValue, handleSubmit, formState, errors } = useForm();

  return (
    <View style={[themedStyle.container, style]} {...restProps}>
      <View style={themedStyle.formContainer}>
        <BasicInput
          placeholder={trans('usernamePlaceholder')}
          icon={PersonIconFill}
          style={themedStyle.usernameInput}
          name={USERNAME}
          ref={register({ required: true, max: 30, min: 3 })}
          onChangeText={text => setValue(USERNAME, text, true)}
          errors={errors}
        />
        <BasicInput
          placeholder={trans('emailPlaceholder')}
          icon={EmailIconFill}
          style={themedStyle.emailInput}
          name={EMAIL}
          ref={register({ required: true, pattern: PATTERN_EMAIL })}
          onChangeText={text => setValue(EMAIL, text, true)}
          errors={errors}
        />
        <BasicInput
          ref={register({ name: PASSWORD }, { required: true, min: 8 })}
          onChangeText={text => setValue(PASSWORD, text, true)}
          placeholder={trans('passwordPlaceholder')}
          icon={EyeOffIconFill}
          style={themedStyle.passwordInput}
          errors={errors}
          secureTextEntry
        />
        <CheckBox
          style={themedStyle.termsCheckBox}
          textStyle={themedStyle.termsCheckBoxText}
          text={trans('termsConditions')}
          name={TERMS_CHECKBOX}
          checked={register({ required: true })}
          onChange={value => setValue(TERMS_CHECKBOX, value, true)}
          errors={errors}
        />
      </View>
      <Button
        style={themedStyle.signUpButton}
        textStyle={textStyle.button}
        size="giant"
        disabled={!formState.isValid}
        onPress={handleSubmit(props.onSignUpButtonPress)}
      >
        {trans('signUp')}
      </Button>
    </View>
  );
}

SignUpFormFields.propTypes = {
  themedStyle: customPropTypes.style,
  style: customPropTypes.style,
  onSignUpButtonPress: customPropTypes.func,
};

export default withStyles(SignUpFormFields, theme => ({
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
