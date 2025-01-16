import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoutes = (props) => {
  const { user } = useContext(AuthContext);

  if (user && user.id) {
    return <>{props.childrent}</>;
  }

  //   return <Navigate to="/login" replace />;

  return (
    <Result
      status="403"
      title="Unauthorize!"
      subTitle={"Bạn cần đăng nhập để truy cập dữ liệu này."}
      extra={
        <Button type="primary">
          <Link to="/login">
            <span>Login Now</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoutes;
