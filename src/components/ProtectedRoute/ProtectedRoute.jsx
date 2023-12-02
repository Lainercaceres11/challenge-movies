import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuhtProvider";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  if (!isAuth) {
    navigate("/login");
  }

  return <Outlet />;
}
