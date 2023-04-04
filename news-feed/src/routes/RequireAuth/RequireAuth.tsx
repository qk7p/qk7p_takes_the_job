import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser } from "@/store/slices/userSlice";
import { Navigate } from "react-router-dom";

export interface IRequireAuthProps {
  outlet: React.ReactNode;
}

function RequireAuth({ outlet }: IRequireAuthProps) {
  const { isAuth } = useAppSelector(selectUser);

  return isAuth ? <>{outlet}</> : <Navigate to={"/login"} />;
}

export default RequireAuth;
