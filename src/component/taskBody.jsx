import React, { Component } from "react";

class TaskBody extends Component {
  state = { data: { title: "", id: "", checked: Boolean } };

  handleEditDataLocal = (item) => {
    this.setState({ data: this.editTodo(item) });
  };

  editTodo = (item) => ({
    title: item.title,
    id: item.id,
    checked: item.checked,
  });

  handleEditChange = ({ currentTarget: editInput }) => {
    const data = { ...this.state.data };
    data.title = editInput.value;
    this.setState({ data });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.todo !== this.props.todo) {
      const data = { ...this.state.data };
      data.id = "";
      this.setState({ data });
    }
  }
  render() {
    const { todo, handleDelete, handleCheckbox, activeOption, handleEdit } =
      this.props;
    const { data } = this.state;

    return (
      <React.Fragment>
        <h1 className="badge badge-secondary m-3 p-2">
          <span className="badge badge-light task-remain">
            {todo.length > 0 ? todo.length : null}
          </span>{" "}
          {activeOption !== undefined
            ? activeOption === true
              ? "tasks remaining"
              : "tasks comoplate"
            : "All tasks"}
        </h1>

        <hr className="p-3" />
        <ul>
          {todo.map((item) => (
            <li key={item.id} className="card pl-4 p-4 mb-5">
              <div className="custom-control custom-checkbox ">
                <input
                  type="checkbox"
                  className="custom-control-input "
                  id={`${item.id}`}
                  checked={item.checked}
                  onChange={(e) =>
                    handleCheckbox(e.currentTarget.checked, item)
                  }
                />
                <label
                  className="custom-control-label display-4"
                  htmlFor={`${item.id}`}
                >
                  <span className=" checkbox-title">
                    {data.id === item.id ? (
                      <React.Fragment>
                        <input
                          className="form-control"
                          type="text"
                          value={data.title}
                          onChange={this.handleEditChange}
                        />
                      </React.Fragment>
                    ) : (
                      item.title
                    )}
                  </span>{" "}
                  {/* edit input tag */}
                </label>
              </div>
              <div id={`${item.id}`} className="card-body">
                <div
                  style={{
                    bottom: 4,
                    right: 45,
                    position: "absolute",
                    cursor: "pointer",
                  }}
                  className="editIcon"
                  onClick={() => handleEdit(data)}
                >
                  {data.id !== "" && data.id === item.id && (
                    <i className="fa fa-check fa-2x" aria-hidden="true"></i>
                  )}
                </div>
                <div
                  style={{
                    bottom: 4,
                    right: 45,
                    position: "absolute",
                    cursor: "pointer",
                  }}
                  className="editIcon"
                  onClick={() => this.handleEditDataLocal(item)}
                >
                  {data.id === "" && item && (
                    <i
                      className=" fa fa-pencil-square-o fa-2x"
                      aria-hidden="true"
                    ></i>
                  )}
                </div>

                <div
                  style={{
                    bottom: 4,
                    right: 8,
                    position: "absolute",
                    cursor: "pointer",
                  }}
                  className="deleteIcon"
                  onClick={() => handleDelete(item, todo)}
                >
                  <i className=" fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default TaskBody;
