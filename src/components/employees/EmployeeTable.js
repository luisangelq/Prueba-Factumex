import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import usePagination from "../../hooks/usePagination";

import EmployeesContext from "../../context/employees/EmployeesContext";

const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);
  const { getEmployees, filteredEmployees, getFilterEmployees } =
    useContext(EmployeesContext);

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  const { currentEmployees, pageNumbers } = usePagination(
    filteredEmployees,
    currentPage,
    employeesPerPage
  );

  const handlePage = (pageNumber) => setCurrentPage(pageNumber);

  const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <Container>
      <SeachBar>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setCurrentPage(1);
            getFilterEmployees(e.target.value)
          }}
        />
      </SeachBar>
      <Table align="center">
        <thead>
          <tr>
            <th>Nombre/s</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody align="center">
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name.toUpperCase()}</td>
              <td>{employee.last_name.toUpperCase()}</td>
              <td>{convertDate(employee.birthday)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {pageNumbers.map((page, index) => (
          <li key={page}>
            <button
              onClick={() => handlePage(page)}
              className={currentPage - 1 == index ? "active" : null}
            >
              {page}
            </button>
          </li>
        ))}
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const SeachBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  width: 100%;
  input {
    width: 100%;
    height: 2rem;
    border: 1px solid var(--LightBlue);
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  border: 1px solid var(--LightBlue);
  margin: 0 auto;
  color: var(--DarkBlue);

  th,
  td {
    width: 100px;
    word-wrap: break-word;
  }

  thead {
    border: 1px solid var(--DarkBlue);
    background-color: var(--LightBlue);
  }
  tbody {
    background-color: var(--WhiteBlue);
  }
`;

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 1rem;

  li {
    margin: 0 0.5rem;
    button {
      padding: 0.5rem;
      border: 1px solid var(--LightBlue);
      border-radius: 0.5rem;
    }
    .active {
      background-color: var(--LightBlue);
    }
  }
`;

export default EmployeeTable;
