import styled from "styled-components";
import Header from "../layout/Header";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";

const Employees = () => {
  return (
    <Container>
      <Header />

      <Content>
        <EmployeeForm />
        <EmployeeTable />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  background-color: var(--White);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 10rem;
    justify-content: center;
    align-items: center;
  }
`;

export default Employees;
