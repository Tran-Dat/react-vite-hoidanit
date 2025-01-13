import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  BookOutlined,
  HomeTwoTone,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Children, useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState("");
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
      Children: [
        {
          label: <Link to={"/login"}>Sign In</Link>,
          key: "login",
        },
        {
          label: "Exit",
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
