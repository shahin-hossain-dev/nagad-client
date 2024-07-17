import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //   const user = null;
  const navigate = useNavigate();

  return children;
};

export default PrivateRoute;
