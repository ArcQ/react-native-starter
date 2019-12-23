import PropTypes from 'prop-types';
import { Button, CheckBox, withStyles } from '@ui-kitten/components';
import React, { useState } from 'react';
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

const trans = intlService.translate('signUp');

function SignUpFormFields(props) {
  const { themedStyle, style, ...restProps } = props;

  const [termsChecked, setTermsChecked] = useState(false);
  const { register, setValue, handleSubmit, errors } = useForm();

  return (
    <View style={[themedStyle.container, style]} {...restProps}>
      <View style={themedStyle.formContainer}>
        <BasicInput
          placeholder={trans('usernamePlaceholder')}
          icon={PersonIconFill}
          style={themedStyle.usernameInput}
          inputRef={register(
            { name: USERNAME },
            { required: true, maxLength: 30, minLength: 3 },
          )}
          onChangeText={text => setValue(USERNAME, text, true)}
          error={errors?.[USERNAME]}
        />
        <BasicInput
          placeholder={trans('emailPlaceholder')}
          icon={EmailIconFill}
          style={themedStyle.emailInput}
          inputRef={register(
            { name: EMAIL },
            { required: true, pattern: PATTERN_EMAIL },
          )}
          onChangeText={text => setValue(EMAIL, text, true)}
          error={errors?.[EMAIL]}
        />
        <BasicInput
          placeholder={trans('passwordPlaceholder')}
          icon={EyeOffIconFill}
          style={themedStyle.passwordInput}
          inputRef={register(
            { name: PASSWORD },
            { required: true, minLength: 8 },
          )}
          onChangeText={text => setValue(PASSWORD, text, true)}
          error={errors?.[PASSWORD]}
          secureTextEntry
        />
        <CheckBox
          style={themedStyle.termsCheckBox}
          textStyle={themedStyle.termsCheckBoxText}
          text={trans('termsConditions')}
          checked={termsChecked}
          onChange={() => setTermsChecked(!termsChecked)}
          error={errors?.[TERMS_CHECKBOX]}
        />
      </View>
      <Button
        style={themedStyle.signUpButton}
        textStyle={textStyle.button}
        size="giant"
        onPress={handleSubmit(props.onSignUpPress)}
      >
        {trans('signUp')}
      </Button>
    </View>
  );
}

SignUpFormFields.propTypes = {
  themedStyle: customPropTypes.style,
  style: customPropTypes.style,
  onSignUpPress: PropTypes.func,
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
