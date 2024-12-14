import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CheckoutSuccess from "../pages/Doctors/CheckoutSuccess";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AdminDashboard from "../Dashboard/admin-account/AdminDashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />

      <Route
        path="/doctors/:id"
        element={
          <PrivateRoute allowedRoles={["doctor", "patient", "admin"]}>
            <DoctorDetails />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      {/* user account */}
      <Route
        path="/users/profile/me"
        element={
          <PrivateRoute allowedRoles={["patient"]}>
            <MyAccount />
          </PrivateRoute>
        }
      />
      {/* doctor account */}
      <Route
        path="/doctors/profile/me"
        element={
          <PrivateRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* admin account */}
      <Route
        path="/admin/profile/me"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <AdminDashboard/>
          </PrivateRoute>
        }
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routers;
