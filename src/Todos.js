import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      isEdit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.updateItem = this.updateItem.bind(this);
    // this.cancelItem = this.cancelItem.bind(this);
  }

  updateItem(event) {
    event.preventDefault();
    this.setState({ input: event.target.value, isEdit: false });
    this.props.edit(this.state.input, this.props.id);
  }

  toggleForm() {
    this.setState({ isEdit: !this.state.isEdit });
  }

  handleChange(evt) {
    // this.state.item = evt.target.value;
    this.setState({ input: evt.target.value });
  }

  render() {
    let show;
    if (this.state.isEdit) {
      show = (
        <form onSubmit={this.updateItem}>
          <input
            type="textbox"
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button>SAVE</button>
        </form>
      );
    } else {
      show = (
        <li>
          <div onClick={this.cancelItem}>{this.props.input}</div>
          <i onClick={this.toggleForm}>edit</i>
          <i onClick={this.props.delete}>X</i>
        </li>
      );
    }
    return show;
  }
}

export default Todos;
