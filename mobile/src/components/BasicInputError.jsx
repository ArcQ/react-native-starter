import PropTypes from 'prop-types';
import { Text, withStyles } from '@ui-kitten/components';
import React from 'react';

import intlService from 'services/intl/intlService';
import CustomPropTypes from 'utils/customPropTypes';

const trans = intlService.translate('errors', true);

const getErrorMessage = (error) =>
  trans(`${error.ref.name}-${error.type}`)
  || trans(`field-${error.type}`) || `missing ${error.ref.name}-${error.type} translation`;

function BasicInputError(props) {
  return <>
    {
      props.error
        && <Text style={props.themedStyle.formErrorText}>
          {getErrorMessage(props.error)}
        </Text>
    }
  </>;
}

BasicInputError.propTypes = {
  themedStyle: CustomPropTypes.style,
  error: CustomPropTypes.errors,
};

export default withStyles(BasicInputError, () => ({
  formErrorText: {
    color: 'orange',
  },
}));
