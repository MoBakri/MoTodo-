import React, { Component } from "react";

class InputField extends Component {
  state = { data: {}, errors: {} };
  validate(input) {
    const errors = [this.state.errors];
    if (input.value === "") {
      errors.empty = "this item can't be empty";
    }
    return errors;
  }
  handleChange = ({ currentTarget: input }) => {
    let data = this.state.data;
    const errMessage = this.validate(input);
    const errors = this.state.errors;
    if (errMessage) errors.empty = errMessage.empty;
    data.title = input.value.trim();
    data.id = Date.now().toString();
    data.checked = false;
    this.setState({ data, errors });
  };
  render() {
    const { handleClick } = this.props;
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <input
          className="form-control"
          type="text"
          placeholder="Add New todo"
          name={data.title}
          onChange={this.handleChange}
        />
        {errors.empty && (
          <div className="alert alert-danger">{errors.empty}</div>
        )}

        <button
          disabled={errors.empty}
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
