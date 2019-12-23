import { withStyles, Text } from '@ui-kitten/components';
import React from 'react';

import intlService from 'services/intl/intlService';
import customPropTypes from 'utils/customPropTypes';
import textStyle from 'textStyle';
import ScrollableAvoidKeyboard from 'components/ScrollableAvoidKeyboard';
import ImageOverlay from 'components/ImageOverlay';
import { getImage } from 'assets/manager';

import ForgotPasswordFormFields from './components/ForgotPasswordFormFields';

const trans = intlService.translate('forgotPassword');

function ForgotPassword(props) {
  const { themedStyle } = props;

  return (
    <ScrollableAvoidKeyboard>
      <ImageOverlay
        style={themedStyle.container}
        source={getImage('forgotPasswordBg')}
      >
        <Text
          style={themedStyle.forgotPasswordLabel}
          appearance="alternative"
          category="h4"
        >
          {trans('forgotPasswordLabel')}
        </Text>
        <Text style={themedStyle.enterEmailLabel} appearance="alternative">
          {trans('enterEmailLabel')}
        </Text>
        <ForgotPasswordFormFields
          style={themedStyle.formContainer}
        />
      </ImageOverlay>
    </ScrollableAvoidKeyboard>
  );
}

ForgotPassword.propTypes = {
  themedStyle: customPropTypes.style,
};

export default withStyles(ForgotPassword, theme => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    alignSelf: 'center',
    marginTop: 50,
    color: 'white',
    ...textStyle.headline,
  },
  enterEmailLabel: {
    alignSelf: 'center',
    marginTop: 64,
    color: 'white',
    ...textStyle.subtitle,
  },
  resetButton: {},
}));
