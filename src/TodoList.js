import React, { Component } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.completedItem = this.completedItem.bind(this);
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

  completedItem(status, id) {
    const updatedTodolist = this.state.todolist.map((i) => {
      if (i.id === id) {
        return { ...i, completed: status };
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
        completed={singleTodo.completed}
        // cancel={() => this.strikeItem(singleTodo.item)}
        edit={this.editItem}
        done={this.completedItem}
        delete={() => this.deleteItem(singleTodo.id)}
      />
    ));
    // console.log(todolist.length);
    const empty = <p className="TodoList-empty">Your todo list is empty.</p>;
    const print = todolist.length ? todolist : empty;
    return (
      <div className="TodoList">
        <div className="title">
          <h1>
            Todo List!
            <small>A Simple React Todo List App.</small>
          </h1>
          {/* <hr /> */}
        </div>
        {print}
        <NewTodo add={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
