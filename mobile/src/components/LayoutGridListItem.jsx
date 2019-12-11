import { ListItem, withStyles } from '@ui-kitten/components';
import React from 'react';
import { Image, View, } from 'react-native';

import textStyle from 'textStyle';

class LayoutGridListItemComponent extends React.Component {
  render() {
    const { themedStyle, style, data, ...restProps } = this.props;
    return (<ListItem style={[themedStyle.container, style]} {...restProps}>
      <View style={themedStyle.detailsContainer}>
        <Text style={textStyle.subtitle} category='s1'>
          {data.title}
        </Text>
        <Text appearance='hint' style={textStyle.paragraph} category='p2'>
          {data.description}
        </Text>
      </View>
      <Image style={themedStyle.image} source={data.image}/>
    </ListItem>);
  }
}
export const LayoutGridListItem = withStyles(LayoutGridListItemComponent, (theme) => ({
  container: {
    flexDirection: 'column',
    borderRadius: 12,
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  detailsContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    flex: 1,
    height: 276,
    resizeMode: 'contain',
  },
}));
