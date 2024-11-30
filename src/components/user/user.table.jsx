import { Table } from "antd";
import { fetchAllUserAPI } from "../../services/api.services";
import { useEffect, useState } from "react";

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

  // empty array => run one
  useEffect(() => {
    console.log(">> run useEffect 111");
    loadUser();
  }, []);

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
    setDataUser(res.data);
  };

  return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
};

export default UserTable;
