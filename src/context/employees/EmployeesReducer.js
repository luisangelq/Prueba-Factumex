const EmployeesReducer = (state, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
        filteredEmployees: action.payload,
      };
    case "FILTER_EMPLOYEES":
      return {
        ...state,
        filteredEmployees: state.employees.filter((employee) => {
          const regex = new RegExp(`${action.payload}`, "gi");

          //filter birthdate
          const date = new Date(employee.birthday);
          const birthday = date.toLocaleDateString();

          return (
            employee.name.match(regex) ||
            employee.last_name.match(regex) ||
            birthday.match(regex)
          );
        }),
      };

    default:
      return state;
  }
};

export default EmployeesReducer;
