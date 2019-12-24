import { Image } from 'react-native';
import React from 'react';
import { Icon } from '@ui-kitten/components';

export const PersonIconFill = style => <Icon {...style} name="person" />;
export const EmailIconFill = style => <Icon {...style} name="email" />;
export const EyeOffIconFill = style => <Icon {...style} name="eye-off" />;
export const PlusIconFill = style => <Icon {...style} name="plus" />;

export default {
  AssetIcon: (source, style) => (
    <Image style={style} source={source.imageSource} />
  ),
};
