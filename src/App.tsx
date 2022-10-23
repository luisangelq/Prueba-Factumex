import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import Employees from "./components/employees/Employees";

import Upload from "./components/upload/Upload";
import PrivateRoutes from "./config/PrivateRoutes";

import AuthState from "./context/auth/AuthState";
import EmployeesState from "./context/employees/EmployeesState";
import UploadState from "./context/upload/UploadState";

function App() {
  return (
    <AuthState>
      <EmployeesState>
        <UploadState>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/employees"
                element={
                  <PrivateRoutes>
                    <Employees />
                  </PrivateRoutes>
                }
              />
              <Route
                path="/upload"
                element={
                  <PrivateRoutes>
                    <Upload />
                  </PrivateRoutes>
                }
              />
              <Route path="*" element={<Login />} />
            </Routes>
          </HashRouter>
        </UploadState>
      </EmployeesState>
    </AuthState>
  );
}

export default App;
