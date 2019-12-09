import React from 'react';
import { exercises2 } from 'core/data/exercise';
import { Trainings2 } from './trainings2.component';

export class Trainings2Container extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      exercises: exercises2,
    };
    this.onTrainingDetails = (index) => {
    };
    this.onTrainingTiming = (index) => {
    };
    this.onTrainingEnergy = (index) => {
    };
  }

  render() {
    return (<Trainings2 exercises={this.state.exercises} onTrainingDetails={this.onTrainingDetails} onTrainingTiming={this.onTrainingTiming} onTrainingEnergy={this.onTrainingEnergy} />);
  }
}
