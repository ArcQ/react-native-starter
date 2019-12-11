import { Button } from '@ui-kitten/components';
import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import textStyle from 'textStyle';

export default function SettingsScreen(props) {
  return <>
    <Button
      textStyle={textStyle.button}
      size="medium"
      onPress={() => props.navigation.navigate('SignIn')}
    >
      Sign Out
    </Button>
    <ExpoConfigView />
  </>;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
