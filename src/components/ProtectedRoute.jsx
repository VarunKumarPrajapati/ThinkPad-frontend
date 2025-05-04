import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loader } from "./ui";
import { useFetchUserQuery } from "../store";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isError } = useFetchUserQuery();

  useEffect(() => {
    if (isError) navigate("/login");
  }, [isError, navigate]);

  if (isLoading) return <Loader loading={isLoading} />;
  return children;
}
