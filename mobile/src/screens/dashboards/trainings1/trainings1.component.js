import React from 'react';
import { withStyles  TabView, Tab, } from '@ui-kitten/components';

import { Easy1 } from './easy1.component';
import { Medium1 } from './medium1.component';
import { Hard1 } from './hard1.component';

class Trainings1Component extends React.Component {
  constructor() {
    super(...arguments);
    this.onTrainingDetails = (index) => {
      this.props.onTrainingDetails(index);
    };
    this.onSelectLevel = (index) => {
      this.props.onSelectLevel(index);
    };
    this.shouldLoadComponent = (index) => index === this.props.selectedLevelIndex;
  }

  render() {
    const {
 themedStyle, selectedLevelIndex, levels, exercises
} = this.props;
    const { 0: easyLevel, 1: mediumLevel, 2: hardLevel } = levels;
    return (<TabView style={themedStyle.container} selectedIndex={selectedLevelIndex} onSelect={this.onSelectLevel} shouldLoadComponent={this.shouldLoadComponent}>
          <Tab title={easyLevel}>
          <Easy1 exercises={exercises} onTrainingDetails={this.onTrainingDetails} />
        </Tab>
          <Tab title={mediumLevel}>
          <Medium1 exercises={exercises} onTrainingDetails={this.onTrainingDetails} />
        </Tab>
          <Tab title={hardLevel}>
          <Hard1 exercises={exercises} onTrainingDetails={this.onTrainingDetails} />
        </Tab>
        </TabView>);
  }
}
export const Trainings1 = withStyles(Trainings1Component, (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
}));
