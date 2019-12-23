import { Input, withStyles } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';

import CustomPropTypes from 'utils/customPropTypes';
import textStyle from 'textStyle';

import BasicInputError from './BasicInputError';

function BasicInput(props) {
  const { name, error, style, themedStyle, inputRef, ...restProps } = props;
  return (
    <>
      <Input
        autoCapitalize="none"
        textStyle={textStyle.paragraph}
        style={[themedStyle, style]}
        onChangeText={props.onChangeText}
        ref={inputRef}
        {...restProps}
      />
      <BasicInputError error={error} />
    </>
  );
}

BasicInput.propTypes = {
  error: CustomPropTypes.errors,
  onChangeText: PropTypes.func,
  inputRef: PropTypes.func,
  style: CustomPropTypes.style,
  themedStyle: CustomPropTypes.style,
  name: PropTypes.string,
};

export default withStyles(BasicInput, () => ({
  container: {},
}));
