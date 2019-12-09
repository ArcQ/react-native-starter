import React from 'react';
import { withStyles, List } from '@ui-kitten/components';

import { TrainingCard3 } from 'components/trainings/trainingCard3.component';

class Trainings2Component extends React.Component {
  constructor() {
    super(...arguments);
    this.onTrainingDetails = (index) => {
      this.props.onTrainingDetails(index);
    };
    this.onTrainingTiming = (index) => {
      this.props.onTrainingTiming(index);
    };
    this.onTrainingEnergy = (index) => {
      this.props.onTrainingEnergy(index);
    };
    this.renderCard = (info) => (<TrainingCard3 style={this.props.themedStyle.item} training={info.item} index={info.index} onDetails={this.onTrainingDetails} onTiming={this.onTrainingTiming} onEnergy={this.onTrainingEnergy} />);
  }

  render() {
    const { themedStyle, exercises } = this.props;
    return (<List contentContainerStyle={themedStyle.container} data={exercises} renderItem={this.renderCard} />);
  }
}
export const Trainings2 = withStyles(Trainings2Component, (theme) => ({
  container: {
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1'],
  },
}));
