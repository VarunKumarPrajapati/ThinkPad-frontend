import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Loader } from "./ui";
import { useFetchUserQuery, setUser } from "../store";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  let { isLoading, isSuccess, data } = useFetchUserQuery();
  useEffect(() => {
    if (isSuccess) dispatch(setUser({ user: data, isAuthenticated: true }));
  }, [isSuccess, data, dispatch]);

  if (isLoading) return <Loader loading={isLoading} />;
  return isSuccess ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
