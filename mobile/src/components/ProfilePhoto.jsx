import PropTypes from 'prop-types';
import { Avatar, withStyles } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

import customPropTypes from 'utils/customPropTypes';

const renderEditElement = (props) => {
  const buttonElement = props.button();
  return React.cloneElement(buttonElement, {
    style: [buttonElement.props.style, props.themedStyle.editButton],
  });
};

function ProfilePhoto(props) {
  const { style, themedStyle, ...restProps } = props;
  return (
    <View style={style}>
      <Avatar style={[style, themedStyle.avatar]} {...restProps} />
      {props.button && renderEditElement(props)}
    </View>
  );
}

ProfilePhoto.propTypes = {
  style: customPropTypes.style,
  themedStyle: customPropTypes.style,
  button: PropTypes.func,
};

export default withStyles(ProfilePhoto, () => ({
  avatar: {
    position: 'absolute',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
}));
