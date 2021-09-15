import React, { Component } from "react";

class TaskTool extends Component {
  render() {
    const {
      handleShowAll,
      handleShowActive,
      handleShowComplate,
      activeOption,
    } = this.props;
    return (
      <div className="d-flex justify-content-around ">
        <button
          onClick={handleShowAll}
          className={
            activeOption === undefined
              ? "btn lead btn-outline-primary mr-2 active"
              : "btn lead btn-outline-primary mr-2"
          }
        >
          Show all tasks
        </button>
        <button
          onClick={handleShowActive}
          className={
            activeOption === true
              ? "btn lead btn-outline-primary mr-2 active"
              : "btn lead btn-outline-primary mr-2"
          }
        >
          Show active tasks
        </button>
        <button
          onClick={handleShowComplate}
          className={
            activeOption === false
              ? "btn lead btn-outline-primary mr-2 active"
              : "btn lead btn-outline-primary mr-2"
          }
        >
          Show completed tasks
        </button>
      </div>
    );
  }
}

export default TaskTool;
