import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const PrivateRoutes = (props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return <>{props.children}</>;
};

export default PrivateRoutes;
