import React, { Component } from "react";

class Todos extends Component {
  render() {
    return (
      <div>
        <div>{this.props.input}</div>
        <i onClick={this.props.edit}></i>
        <i onClick={this.props.delete}></i>
      </div>
    );
  }
}

export default Todos;
