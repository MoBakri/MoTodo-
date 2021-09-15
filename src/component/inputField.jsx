import React, { Component } from "react";

class InputField extends Component {
  state = { data: {} };

  handleChange = (value) => {
    let data = this.state.data;
    data.title = value;
    data.id = Date.now().toString();
    data.checked = false;
    this.setState({ data });
  };
  render() {
    const { handleClick } = this.props;
    const { data } = this.state;
    return (
      <React.Fragment>
        <input
          className="form-control"
          type="text"
          placeholder="Add New todo"
          name="text"
          onChange={(e) => this.handleChange(e.currentTarget.value)}
        />

        <button
          onClick={() => handleClick(data)}
          className="btn lead btn-block btn-primary btn-sm mt-2 mb-3"
        >
          Add
        </button>
      </React.Fragment>
    );
  }
}

export default InputField;
