import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      item: "",
      // id: uuid(),
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // this.props.add(this.state);
    this.props.add({ ...this.state, id: uuid() });
    this.setState({ item: " " });
  }

  handleChange(evt) {
    // this.state.item = evt.target.value;
    this.setState({ item: evt.target.value });
  }

  render() {
    return (
      <div>
        <h4>New Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="textbox"
            placeholder="Enter to-do item."
            onChange={this.handleChange}
            // name="this.state.item"
            value={this.state.item}
          />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
