import { useReducer } from "react";
import axiosClient from "../../config/axios";
import EmployeesContext from "./EmployeesContext";
import EmployeesReducer from "./EmployeesReducer";

import { successAlert, errorAlert } from "../../hooks/useAlert";

const EmployeesState = (props) => {
  const initialState = {
    employees: [],
    filteredEmployees: [],
  };

  const [state, dispatch] = useReducer(EmployeesReducer, initialState);

  const getEmployees = async () => {
    const res = await axiosClient.get(process.env.REACT_APP_API);

    dispatch({
      type: "GET_EMPLOYEES",
      payload: res.data.data.employees.reverse(),
    });
  };

  const getFilterEmployees = (search) => {
    dispatch({
      type: "FILTER_EMPLOYEES",
      payload: search,
    });
  };

  const addEmployee = async (employee) => {
    try {
      const res = await axiosClient.post(process.env.REACT_APP_API, employee);
      successAlert("Empleado registrado con éxito");

      getEmployees();
    } catch (error) {
      console.log(error);
      errorAlert(error.response.data.message)
    }
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees: state.employees,
        filteredEmployees: state.filteredEmployees,
        getEmployees,
        getFilterEmployees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesState;
