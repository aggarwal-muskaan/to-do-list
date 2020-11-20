import React, { Component } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addItem(item) {
    this.setState({
      todolist: [...this.state.todolist, item],
    });
  }

  editItem(item, id) {
    const updatedTodolist = this.state.todolist.map((i) => {
      if (i.id === id) {
        return { ...i, item: item };
      } else return i;
    });
    this.setState({ todolist: updatedTodolist });
  }

  deleteItem(id) {
    return this.setState({
      todolist: this.state.todolist.filter((item) => item.id !== id),
    });
  }

  render() {
    const todolist = this.state.todolist.map((singleTodo) => (
      <Todos
        input={singleTodo.item}
        key={singleTodo.id}
        id={singleTodo.id}
        // cancel={() => this.strikeItem(singleTodo.item)}
        edit={this.editItem}
        delete={() => this.deleteItem(singleTodo.id)}
      />
    ));
    return (
      <div>
        <div>
          <h1>Todo List!</h1>
          <small>A Simple React Todo List App.</small>
          {/* <hr /> */}
        </div>
        <ul>{todolist}</ul>
        <NewTodo add={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
