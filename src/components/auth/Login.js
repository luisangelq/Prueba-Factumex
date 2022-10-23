import { useState, useContext } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import {successAlert, errorAlert } from "../../hooks/useAlert";

import AuthContext from "../../context/auth/AuthContext";


const Login = () => {
  const InitialState = {
    userName: "luis_angel",
    password: "admin",
  };
  const navigate = useNavigate();
  const { isAuthenticated, loginUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const blockCopyAndPaste = (e) => {
    e.preventDefault();

    if (e.type === "copy" || e.type === "cut" || e.type === "paste") {
      errorAlert(`You Can't ${e.type}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.userName.trim() === "" || user.password.trim() === "") {
      errorAlert("Please fill all the fields");
      return;
    }

    if (user.userName === InitialState.userName && user.password === InitialState.password) {
      successAlert("Bienvenido");
      loginUser(user);
      navigate("/employees");
    } else {
      errorAlert("Credenciales Incorrectas");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/employees" />;
  }

  if (isAuthenticated) return <Navigate to="/employees" />;

  return (
    <Container>
      <LeftSide>
        <h2>Ingresa A Tu Cuenta</h2>
      </LeftSide>

      <RigthSide>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Iniciar Sesion</h2>

          <Fields>
            <span>Usuario</span>
            <input
              type="text"
              placeholder="Usuario"
              name="userName"
              value={user.userName}
              onChange={(e) => handleChange(e)}
              onCopy={(e) => blockCopyAndPaste(e)}
              onPaste={(e) => blockCopyAndPaste(e)}
              onCut={(e) => blockCopyAndPaste(e)}
            />
          </Fields>

          <Fields>
            <span>Contraseña</span>
            <input
              type="password"
              placeholder="********"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              onCopy={(e) => blockCopyAndPaste(e)}
              onPaste={(e) => blockCopyAndPaste(e)}
              onCut={(e) => blockCopyAndPaste(e)}
            />
          </Fields>

          <button type="submit">Ingresar</button>
        </form>
      </RigthSide>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  margin: 0 auto;
`;

const LeftSide = styled.div`
  color: var(--DarkBlue);
  margin-top: 2rem;
  text-align: center;
  h2 {
    font-size: 60px;
  }
`;

const RigthSide = styled.div`
  color: var(--DarkBlue);
  z-index: 1;
  width: 100%;
  margin: 1rem;
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

export default Login;
