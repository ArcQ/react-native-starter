import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import { images, fonts } from './index';

export function getImageUri(k) {
  return Asset.fromModule(images[k]).uri;
}

export function getSvg(k) {
  return Asset.fromModule(images[k]).uri;
}

export async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync(Object.values(images)),
    Font.loadAsync({
      ...fonts,
      ...Ionicons.font,
    }),
  ]);
}
