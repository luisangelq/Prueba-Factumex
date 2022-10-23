import React, { useState, useContext } from "react";
import styled from "styled-components";
import { errorAlert } from "../../hooks/useAlert";

import AuthContext from "../../context/auth/AuthContext";
import EmployeesContext from "../../context/employees/EmployeesContext";

const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeesContext);
  const { logout } = useContext(AuthContext);
  const [employee, setEmployee] = useState({
    name: "",
    last_name: "",
    birthday: "",
  });
  const { name, last_name, birthday } = employee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");

    if(!storageUser){
      console.log('Vuelve a iniciar sesión');
      logout();
      return;
    }

    if (
      name.trim() === "" ||
      last_name.trim() === "" ||
      birthday.trim() === ""
    ) {
      errorAlert("Llena todos los campos");
      return;
    }

    addEmployee(employee);

    //clean form
    setEmployee({
      name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <Container>
      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Registro de empleados</h2>

          <Fields>
            <span>Nombre/s</span>
            <input
              type="text"
              placeholder="Ricardo"
              maxLength={30}
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </Fields>

          <Fields>
            <span>Apellidos</span>
            <input
              type="text"
              placeholder="Perez"
              maxLength={30}
              name="last_name"
              value={last_name}
              onChange={(e) => handleChange(e)}
            />
          </Fields>

          <Fields>
            <span>Fecha de Nacimiento</span>
            <input
              type="date"
              placeholder=""
              name="birthday"
              value={birthday}
              onChange={(e) => handleChange(e)}
            />
          </Fields>
          <button type="submit">Registrar</button>
        </form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  color: var(--DarkBlue);
  width: 100%;
  form {
    background-color: var(--LightBlue);
    border-radius: 2.5rem;
    text-align: center;

    h2 {
      font-size: 35px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    button {
      background-color: var(--Green);
      color: var(--White);
      font-weight: bold;
      margin: 2rem 0;
      padding: 0.8rem 4rem;
      border-radius: 2rem;
      cursor: pointer;
      font-size: medium;
    }

    p {
      color: rgba(247, 247, 247, 0.7);
      font-style: italic;
      text-decoration: underline;
    }
  }
`;

const Fields = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 1rem auto;
  color: var(--DarkBlue);
  font-weight: bold;

  span {
    margin: 0.5rem 1rem;
  }

  input {
    background-color: rgba(247, 247, 247, 0.7);
    padding: 1rem;
    border-radius: 2rem;
  }
`;

export default EmployeeForm;
