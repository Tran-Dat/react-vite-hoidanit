import { Button, Input } from "antd";
import { useState } from "react";
import axios, { Axios } from "axios";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = { fullName, email, password, phone };

    axios.post(URL_BACKEND, data);
    console.log(">> check state: ", { fullName, email, password, phone });
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
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
        <div>
          <Button type="primary" onClick={handleClickBtn}>
            Creat User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
