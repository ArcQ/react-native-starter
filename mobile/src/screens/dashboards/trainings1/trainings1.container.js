import React from 'react';
import { exercises1 } from 'core/data/exercise';
import { Trainings1 } from './trainings1.component';

export class Trainings1Container extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectedLevelIndex: 0,
      exercises: exercises1,
    };
    this.levels = ['EASY', 'MEDIUM', 'HARD'];
    this.onSelectLevel = (index) => {
      this.setState({ selectedLevelIndex: index });
    };
    this.onTrainingDetails = (index) => {
    };
  }

  render() {
    return (<Trainings1 levels={this.levels} exercises={this.state.exercises} selectedLevelIndex={this.state.selectedLevelIndex} onTrainingDetails={this.onTrainingDetails} onSelectLevel={this.onSelectLevel} />);
  }
}
