import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthContext from "../../context/auth/AuthContext";

const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Container>
      <PharmacyLink to={"/employees"}>Empleados</PharmacyLink>

      <PharmacyLink to={"/upload"}>Subir Imagenes</PharmacyLink>

      <SignOut onClick={() => logout()}>Cerrar Sesion</SignOut>
    </Container>
  );
};

const Container = styled.div`
  height: 45px;
  background-color: var(--WhiteBlue);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const PharmacyLink = styled(Link)`
  color: var(--MediumBlue);
  font-weight: bold;
  font-size: 18px;
  padding: 0.5rem;
  border: 1px solid var(--MediumBlue);
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--White);
    background-color: var(--MediumBlue);
  }
`;

const SignOut = styled.button`
  color: var(--Red);
  font-weight: bold;
  border: 1px solid var(--Red);
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--White);
    background-color: var(--Red);
  }
`;

export default Header;
