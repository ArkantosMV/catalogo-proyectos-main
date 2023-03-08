import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'

import Inactive from "./pages/Inactive";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";

import SignUp from "./pages/SignUp/SignUp";
import SignUpStudent from "./pages/SignUp/SignUpStudent";
import SignUpCompany from "./pages/SignUp/SignUpCompany";

import StudentLayout from "./pages/Student/Components/Layout";
import StudentHome from "./pages/Student/Home";
import StudentCatalog from "./pages/Student/Catalog";
import StudentProfile from "./pages/Student/Profile";
import StudentProject from "./pages/Student/Project";

import CompanyLayout from "./pages/Company/Components/Layout";
import CompanyHome from "./pages/Company/Home";
import CompanyRegister from "./pages/Company/Register";
import CompanyProfile from "./pages/Company/Profile";
import CompanyProject from "./pages/Company/Project";

import AdminLayout from "./pages/Admin/Components/Layout"
import AdminHome from "./pages/Admin/Home";
import AdminStudents from "./pages/Admin/Students";
import AdminCompanys from "./pages/Admin/Companys";
import AdminProjects from "./pages/Admin/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inactive" element={<Inactive />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpStudent" element={<SignUpStudent />} />
        <Route path="/SignUpCompany" element={<SignUpCompany />} />

        <Route element={<StudentLayout />}>
          <Route path="/StudentHome" element={<StudentHome />} />
          <Route path="/StudentCatalog" element={<StudentCatalog />} />
          <Route path="/StudentProject" element={<StudentProject />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
        </Route>

        <Route element={<CompanyLayout />}>
          <Route path="/CompanyHome" element={<CompanyHome />} />
          <Route path="/CompanyRegister" element={<CompanyRegister />} />
          <Route path="/CompanyProject" element={<CompanyProject />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
        </Route>

      <Route element={<AdminLayout />}>
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/AdminStudents" element={<AdminStudents />} />
        <Route path="/AdminProjects" element={<AdminProjects />} />
        <Route path="/AdminCompanys" element={<AdminCompanys />} />
      </Route>
    </Routes>
    </BrowserRouter >
  );
}

export default App;