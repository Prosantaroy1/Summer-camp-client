import React, { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRouter = ({children}) => {
    //
  const { user, loading } = useContext(AuthContext);
  ///location
 /// const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <Navigate to="/login" replace>
      Login
    </Navigate>
  );
};

export default PrivateRouter;
