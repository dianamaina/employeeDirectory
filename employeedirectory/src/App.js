  
import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <EmployeeTable />
        <EmployeeRow />
      </Container>
    </>
  );
}

export default App;