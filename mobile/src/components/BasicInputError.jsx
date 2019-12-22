import PropTypes from 'prop-types';
import { Text, withStyles } from '@ui-kitten/components';
import React from 'react';

import CustomPropTypes from 'utils/customPropTypes';

function BasicInputError(props) {
  return <>
    {
      props.error
        && <Text style={props.themedStyle.formErrorText}>{props.error}</Text>
    }
  </>;
}

BasicInputError.propTypes = {
  themedStyle: CustomPropTypes.style,
  error: PropTypes.string,
};

export default withStyles(BasicInputError, () => ({
  formErrorText: {},
}));
