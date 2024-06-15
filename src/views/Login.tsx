import { Row, Col, Form, Flex, Input, Button, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Login: React.FC = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Col
        span={12}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Flex
          justify="flex-end"
          align="flex-end"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img src="src/assets/phone.png" alt="login.png"></img>
        </Flex>
      </Col>
      <Col
        span={12}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Flex
          justify="center"
          align="flex-start"
          vertical
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Flex
            vertical
            justify="center"
            style={{
              padding: "64px",
              width: "30%",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
            }}
          >
            <Flex
              justify="center"
              align="center"
              style={{
                width: "100%",
              }}
            >
              <Title>PixPals</Title>
            </Flex>
            <Flex
              justify="center"
              align="center"
              style={{
                width: "100%",
              }}
            >
              <Form
                name="login_form"
                style={{
                  width: "100%",
                }}
              >
                <Form.Item name="Email">
                  <Input
                    size="large"
                    prefix={<MailOutlined />}
                    placeholder="電子郵件"
                  />
                </Form.Item>
                <Form.Item name="Password">
                  <Input
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="密碼"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                    }}
                  >
                    登錄
                  </Button>
                </Form.Item>
              </Form>
            </Flex>
            <Flex
              justify="center"
              align="center"
              style={{
                width: "100%",
              }}
            >
              <p>還沒有帳號？點擊註冊</p>
            </Flex>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Login;
