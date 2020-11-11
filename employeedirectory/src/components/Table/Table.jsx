import React from "react";
// a function that returns the table body on the page

const Table = (props) => {
  return (
    <tbody>
          <tr>
            <td>
              <img src={props.image} alt="" />
            </td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.email}</td>
            <td>{props.age}</td>
          </tr>
   </tbody>
  );
};

export default Table;