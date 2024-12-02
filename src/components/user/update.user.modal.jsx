import { useState } from "react";
import { Input, Modal, notification } from "antd";
import { createUserAPI } from "../../services/api.services";

const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "tao user thanh cong",
      });
      resetAndCloseModal();
      //   await loadUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <Modal
      title="Update User"
      open={isModalOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText="Save"
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>
            Full Name
            <Input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </span>
        </div>
        <div>
          <span>
            Email
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </span>
        </div>
        <div>
          <span>
            Password
            <Input.Password
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </span>
        </div>
        <div>
          <span>
            Phone Number
            <Input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
