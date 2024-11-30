import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.services";
import { useState } from "react";

const UserTable = () => {
  const [dataUser, setDataUser] = useState([
    {
      _id: "dat",
      fullName: 22,
      email: "HCM",
    },
    {
      _id: "ngoc",
      fullName: 20,
      email: "HCM",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
  };

  loadUser();
  console.log(">> run render");

  return <Table columns={columns} dataSource={dataUser} />;
};

export default UserTable;
