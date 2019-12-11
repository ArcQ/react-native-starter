import React from 'react';
import { ThemeProvider, withStyles, } from '@kitten/theme';

class LayoutMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldLoadTabContentElement = (index) => {
      return this.tabLoadingMap[`${index}`];
    };
    this.createTabLoadingMap = (selectedIndex) => {
      return { [`${selectedIndex}`]: true };
    };
    this.onItemPress = (index) => {
      this.props.onItemPress(index);
    };
    this.tabLoadingMap = this.createTabLoadingMap(props.selectedIndex);
  }
  componentWillUpdate(nextProps) {
    const nextLoadingMap = this.createTabLoadingMap(nextProps.selectedIndex);
    this.tabLoadingMap = Object.assign(Object.assign({}, this.tabLoadingMap), nextLoadingMap);
  }
  render() {
    const { themedStyle, data, ...restProps } = this.props;
    return (<ThemeProvider theme={Object.assign(Object.assign({}, this.props.theme), themes['App Theme'])}>
      <TabView shouldLoadComponent={this.shouldLoadTabContentElement} {...restProps}>
        <Tab icon={GridIconOutline}>
          <LayoutGridList contentContainerStyle={themedStyle.listContentContainer} data={data} onItemPress={this.onItemPress}/>
        </Tab>
        <Tab icon={ListIconFill}>
          <LayoutList contentContainerStyle={themedStyle.listContentContainer} data={data} onItemPress={this.onItemPress}/>
        </Tab>
      </TabView>
    </ThemeProvider>);
  }
}
export const LayoutMenu = withStyles(LayoutMenuComponent, (theme) => ({
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));
