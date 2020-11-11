import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EmployeeRows from "./EmployeeRows";
import SearchBar from "./SearchBar";
import "../styles/index.css";

class EmployeeTable extends Component {
  state = {
    employees: [],
    search: "",
  };

  // Calls the API and sets the state as soon as the component mounts
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us")
      .then((response) => {
        this.setState({ employees: response.data.results });
      })
      .catch((error) => console.log(error));
  };

  // Function to set the state based on the user's input
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Function to sort the table by employee name
  sortTableByName = () => {
    this.setState({
      employees: this.state.employees.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1;
        } else if (a.name.last > b.name.last) {
          return 1;
        } else {
          return 0;
        }
      }),
    });
  };

  
  // Renders this element to the page
  render() {
    return (
      <>
        <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table striped bordered hover className="text-center eTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                Name
                <Button variant="link" onClick={this.sortTableByName} size="sm">
                </Button>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>
                Date of Birth
                <Button variant="link" onClick={this.sortTableByName} size="sm">
                    </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <EmployeeRows state={this.state} />
          </tbody>
        </Table>
      </>
    );
  }
}
export default EmployeeTable;