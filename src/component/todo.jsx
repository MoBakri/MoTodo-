import React, { Component } from "react";
import InputField from "./inputField";
import TaskTool from "./taskTool";
import TaskBody from "./taskBody";

class Todo extends Component {
  state = { todo: [] };

  handleClick = (newTodo) => {
    if (newTodo.id !== undefined)
      this.setState((prevState) => {
        if (prevState.todo.map((i) => i.id).indexOf(newTodo.id))
          return { todo: [...prevState.todo, { ...newTodo }] };
      });
  };
  handleEdit = (item) => {
    const todo = [...this.state.todo];
    const editItem = { ...item };
    const finded = todo.find((selectedId) => selectedId.id === editItem.id);
    const index = todo.indexOf(finded);
    todo[index].title = item.title;
    this.setState({ todo });
  };

  handleDelete = (item) => {
    const allTodo = [...this.state.todo];
    const todo = allTodo.filter((i) => i.id !== item.id);
    this.setState({ todo });
  };

  handleCheckbox = (check, item) => {
    const todo = [...this.state.todo];
    const index = todo.indexOf(item);
    todo[index].checked = check;
    this.setState({ todo });
  };

  handleShowAll = () => {
    const todo = [...this.state.todo];
    delete todo.active;
    this.setState({ todo });
  };

  handleShowActive = () => {
    const todo = [...this.state.todo];
    todo.active = true;
    this.setState({ todo });
  };

  handleShowComplate = () => {
    const todo = [...this.state.todo];
    todo.active = false;
    this.setState({ todo });
  };

  render() {
    const { todo } = this.state;
    const acitveTodo =
      todo.active !== undefined
        ? todo.active === true
          ? todo.filter((items) => items.checked !== true)
          : todo.filter((items) => items.checked !== false)
        : todo;
    console.log(todo);
    return (
      <div className="row">
        <div className="col-lg-7">
          <h3 className="my-3 display-4">What needs to be done ?</h3>

          <InputField handleClick={this.handleClick} />

          <TaskTool
            activeOption={todo.active}
            handleShowAll={this.handleShowAll}
            handleShowActive={this.handleShowActive}
            handleShowComplate={this.handleShowComplate}
          />

          <TaskBody
            todo={acitveTodo}
            activeOption={todo.active}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleCheckbox={this.handleCheckbox}
          />
        </div>
      </div>
    );
  }
}
export default Todo;
