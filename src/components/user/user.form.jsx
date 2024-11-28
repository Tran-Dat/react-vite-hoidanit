import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [emai, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtn = () => {
    console.log(">> check state: ", { fullName, emai, password, phone });
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
              value={emai}
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
