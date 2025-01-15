import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  BookOutlined,
  HomeTwoTone,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context.jsx";

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);

  console.log(">>> check data: ", user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeTwoTone />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    {
      label: "Setting",
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key: "login",
        },
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
