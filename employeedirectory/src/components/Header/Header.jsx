  
import React from "react";
import "../style/header.css";

const Header = (props) => {
  return (
    <div className={"jumbotron"}>
      <h1>Employee Directory</h1>
      <h4>
       Enter first name to search.
      </h4>
      <input
        type="text"
        name="search"
        placeholder="Search by First Name"
        onChange={props.handleInput}
      />
    </div>
  );
};

export default Header;