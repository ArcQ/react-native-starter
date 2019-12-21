import { List, withStyles } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, } from 'react-native';

import { LayoutGridListItem } from 'components/LayoutGridListItem';

const { width } = Dimensions.get('window');

const itemWidth = width / 2 - 32;

class LayoutGridListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderItem = (info) => {
            return (<LayoutGridListItem style={this.props.themedStyle.item} data={info.item} onPress={this.onItemPress}/>);
        };
    }
    render() {
        return (<List numColumns={2} renderItem={this.renderItem} {...this.props}/>);
    }
}
export const LayoutGridList = withStyles(LayoutGridListComponent, (theme) => ({
    item: {
        flex: 1,
        maxWidth: itemWidth,
        marginVertical: 8,
        marginHorizontal: 8,
    },
}));
