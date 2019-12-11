import { Avatar, withStyles } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

class ProfilePhotoComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.renderEditElement = () => {
      const buttonElement = this.props.button();
      return React.cloneElement(buttonElement, {
        style: [buttonElement.props.style, this.props.themedStyle.editButton],
      });
    };
  }

  render() {
    const { style, themedStyle, button, ...restProps } = this.props;
    return (
      <View style={style}>
        <Avatar style={[style, themedStyle.avatar]} {...restProps} />
        {button ? this.renderEditElement() : null}
      </View>
    );
  }
}
export const ProfilePhoto = withStyles(ProfilePhotoComponent, theme => ({
  avatar: {
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
}));
