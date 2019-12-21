import PropTypes from 'prop-types'
import { Input, Text, withStyles } from '@ui-kitten/components';
import React from 'react';

import textStyle from 'textStyle';

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
      {props.errors.firstName && <Text>temp placeholder</Text>}
    </>
  );
}

BasicInput.propTypes = {
  errors: PropTypes.object,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  themedStyle: PropTypes.object,
};

export default withStyles(BasicInput, theme => ({
  container: {},
}));
