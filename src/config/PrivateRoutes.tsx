import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import { Props } from "../interfaces/Context";

const PrivateRoutes = (props: Props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return <>{props.children}</>;
};

export default PrivateRoutes;
