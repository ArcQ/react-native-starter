import React from 'react';
import { Image } from 'react-native';

export class RemoteIcon {
  constructor(source) {
    this.source = source;
  }

  get imageSource() {
    return { uri: this.source };
  }
}
export const AssetIcon = (source, style) => (<Image style={style} source={source.imageSource} />);
