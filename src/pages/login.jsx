import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(">> check values: ", values);
  };
  return (
    <Row justify={"center"} style={{ marginTop: "60px" }}>
      <Col xs={24} md={16} lg={6}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend style={{ fontWeight: "500" }}>Đăng nhập</legend>
          <Form
            layout="vertical"
            style={{ margin: "10px" }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui long nhap Email!",
                },
                {
                  type: "email",
                  message: "Email khong dung dinh dang",
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
                  message: "Password khong duoc de trong",
                },
                {
                  min: 6,
                  message: "Password phai tu 6 ky tu tro len",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  type="primary"
                  onClick={() => {
                    form.submit();
                  }}
                >
                  Login
                </Button>
                <Link to={"/"}>
                  Go to homepage <ArrowRightOutlined />
                </Link>
              </div>
            </Form.Item>
          </Form>

          <Divider />

          <div style={{ textAlign: "center" }}>
            Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
