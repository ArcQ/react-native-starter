import { Input, withStyles } from '@ui-kitten/components';
import React from 'react';

/**
 * You probably don't need to pass `value` prop into this component
 */
class ValidationInputComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.value,
    };
    this.onChangeText = text => {
      const { formatter } = this.props;
      const value = formatter ? formatter(text, this.state.value) : text;
      this.setState({ value }, this.onValueChange);
    };
    this.onValueChange = () => {
      const { value } = this.state;
      if (this.isValid(value) && this.props.onChangeText) {
        this.props.onChangeText(value);
      }
    };
    this.isValid = value => {
      const { validator } = this.props;
      return validator(value);
    };
    this.getStatus = () => {
      const { value } = this.state;
      if (value && value.length) {
        return this.isValid(value) ? 'success' : 'danger';
      }
      return undefined;
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { value: oldValue } = prevState;
    const { value: newValue } = this.state;
    const becomeValid = !this.isValid(oldValue) && this.isValid(newValue);
    const becomeInvalid = !this.isValid(newValue) && this.isValid(oldValue);
    if (becomeValid && this.props.onChangeText) {
      this.props.onChangeText(newValue);
    } else if (becomeInvalid && this.props.onChangeText) {
      this.props.onChangeText(undefined);
    }
  }

  render() {
    const { style, themedStyle, ...restProps } = this.props;
    return (
      <Input
        autoCapitalize="none"
        status={this.getStatus()}
        {...restProps}
        value={this.state.value}
        style={[themedStyle.container, style]}
        onChangeText={this.onChangeText}
      />
    );
  }
}
export const ValidationInput = withStyles(ValidationInputComponent, theme => ({
  container: {},
}));
