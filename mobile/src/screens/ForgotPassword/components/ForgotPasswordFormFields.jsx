import { Button, withStyles } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import useForm from 'react-hook-form';

import textStyle from 'textStyle';
import intlService from 'services/intl/intlService';
import CustomPropTypes from 'utils/customPropTypes';
import BasicInput from 'components/BasicInput';

const EMAIL = 'email';
const trans = intlService.translate('signIn');

function ForgotPasswordForm(props) {
  const { style, themedStyle, ...restProps } = props;
  const { register, setValue, handleSubmit, errors } = useForm();

  return (
    <View style={[themedStyle.container, style]} {...restProps}>
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
      <Button
        style={themedStyle.resetButton}
        textStyle={textStyle.button}
        size="giant"
        onPress={handleSubmit(props.onResetPress)}
      >
        {trans('resetPasswordButton')}
      </Button>
    </View>
  );
}

ForgotPasswordForm.propTypes = {
  themedStyle: CustomPropTypes.style,
  style: CustomPropTypes.style,
  onEmailInputTextChange: PropTypes.func,
  onResetPress: PropTypes.func,
};

export default withStyles(
  ForgotPasswordForm,
  theme => ({
    container: {},
  }),
);
