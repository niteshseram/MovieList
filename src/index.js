import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <nav className="navbar expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand">movieList</a>
      </nav>
      <div className="container-fluid">
        <List />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
