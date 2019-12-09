import React from 'react';
import { withStyles, List } from '@ui-kitten/components';

import { TrainingCard2 } from 'components/trainings/trainingCard2.component';

class Hard1Component extends React.Component {
  constructor() {
    super(...arguments);
    this.onTrainingDetails = (index) => {
      this.props.onTrainingDetails(index);
    };
    this.renderCard = (info) => (<TrainingCard2 style={this.props.themedStyle.card} training={info.item} index={info.index} onDetails={this.onTrainingDetails} />);
  }

  render() {
    const { themedStyle, exercises } = this.props;
    return (<List contentContainerStyle={themedStyle.container} data={exercises} renderItem={this.renderCard} />);
  }
}
export const Hard1 = withStyles(Hard1Component, (theme) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
}));
