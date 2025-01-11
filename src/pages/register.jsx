import { Button, Form, Input, notification } from "antd";
import { registerUserAPI } from "../services/api.services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);

    // Call API
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );

    if (res.data) {
      notification.success({
        message: "Register user",
        description: "dang ky user thanh cong",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Register user error",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <div
        style={{
          margin: "50px",
        }}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Vui long nhap Ho va Ten!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Vui long nhap Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui long nhap Password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            {
              // required: true,
              pattern: new RegExp(/\d+/g),
              message: "Wrong format!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div>
          <Button
            onClick={() => {
              form.submit();
            }}
            type="primary"
          >
            Register
          </Button>

          <Button
            onClick={() => {
              form.setFieldsValue({
                email: "hoi dan it@gmail.com",
                fullName: "eric",
              });
              console.log(">> check Form: ");
            }}
          >
            Test
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;
