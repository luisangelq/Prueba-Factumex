const usePagination = (
  employees: string,
  page: number,
  employeesPerPage: number
) => {
  const indexOfLastEmployee = page * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(employees.length / 10); i++) {
    pageNumbers.push(i);
  }

  return {
    currentEmployees,
    pageNumbers,
  };
};

export default usePagination;
