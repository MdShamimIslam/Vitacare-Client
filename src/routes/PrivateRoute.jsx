import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BsCheckLg } from "react-icons/bs";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { token, role } = useAuth();

  const isAllowed = allowedRoles.includes(role);
  
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
};

export default PrivateRoute;
