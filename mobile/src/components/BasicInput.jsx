import { Input, withStyles } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';

import CustomPropTypes from 'utils/customPropTypes';
import textStyle from 'textStyle';

import BasicInputError from './BasicInputError';

function BasicInput(props) {
  const { style, themedStyle, ...restProps } = props;
  return (
    <>
      <Input
        autoCapitalize="none"
        status={() => ((props.errors) ? 'danger' : 'success')}
        textStyle={textStyle.paragraph}
        style={[themedStyle, style]}
        onChangeText={props.onChangeText}
        {...restProps}
      />
      <BasicInputError error={props.errors[props.name]} />
    </>
  );
}

BasicInput.propTypes = {
  errors: CustomPropTypes.errors,
  onChangeText: PropTypes.func,
  style: CustomPropTypes.style,
  themedStyle: CustomPropTypes.style,
  name: PropTypes.string,
};

export default withStyles(BasicInput, () => ({
  container: {},
}));
