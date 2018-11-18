import * as React from "react";

export default class IntegerStepper extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <input
          type="range"
          imin={0}
          max={20}
          onChange={this.onChange}
          value={value}
        />
        <input
          type="number"
          min={0}
          max={20}
          value={value}
          onChange={this.onChange}
        />
        {this.props.children(value)}
      </React.Fragment>
    );
  }
}
