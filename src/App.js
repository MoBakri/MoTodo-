import React, { Fragment } from "react";
import NavBar from "./component/interface";
import Todo from "./component/todo";
function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Todo />
      </div>
    </Fragment>
  );
}
export default App;
