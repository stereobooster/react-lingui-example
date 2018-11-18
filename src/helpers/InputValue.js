import React from "react";

export default class InputValue extends React.Component {
  state = {
    value: ""
  };

  onChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <input
          placeholder={this.props.label}
          value={value}
          onChange={this.onChange}
        />
        {this.props.children(value || this.props.defaultValue)}
      </React.Fragment>
    );
  }
}
