import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import { useState } from "react";
import { deleteBookAPI, deleteUserAPI } from "../../services/api.services";

const BookTable = (props) => {
  const {
    dataBook,
    loadBook,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setDataDetail(record);
              setIsDetailOpen(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
    },
    {
      title: "giá tiền",
      dataIndex: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "tác giả",
      dataIndex: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <Popconfirm
            title="Delete User"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDeteleBook(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // setCurrent, setPageSize
    // neu thay doi trang : current
    // Meo: them dau "+" de convert kieu du lieu, VD: chuoi string "5" thi se thanh kieu number : 5
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }

    // neu thay doi tong so phan tu : pageSize
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };

  const handleDeteleBook = async (id) => {
    const res = await deleteBookAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "xoa user thanh cong",
      });
      await loadBook();
    } else {
      notification.error({
        message: "Erro Delete User",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <Table
      columns={columns}
      dataSource={dataBook}
      rowKey={"_id"}
      pagination={{
        current: current,
        pageSize: pageSize,
        showSizeChanger: true,
        total: total,
        showTotal: (total, range) => {
          return (
            <div>
              {" "}
              {range[0]}-{range[1]} trên {total} rows
            </div>
          );
        },
      }}
      onChange={onChange}
    />
  );
};

export default BookTable;
