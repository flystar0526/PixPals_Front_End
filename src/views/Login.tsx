import { Row, Col, Form, Flex, Input, Button, Checkbox, message } from "antd";
import type { FormProps } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getJwtToken,
  login,
  register,
  saveUser,
  setJwtToken,
} from "../apis/auth";
import { User, setUser } from "../store/slices/userSlice";

const Login: React.FC = () => {
  type FieldType = {
    email?: string;
    name?: string;
    password?: string;
    remember?: string;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  useEffect(() => {
    if (getJwtToken()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const checkAgreement = (_: unknown, value: boolean) => {
    if (value) {
      return Promise.resolve();
    }
    return Promise.reject();
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const result = isLogin
        ? await login({
            email: values.email as string,
            password: values.password as string,
          })
        : await register({
            name: values.name as string,
            email: values.email as string,
            password: values.password as string,
          });
      const user: User = result.data;
      setJwtToken(result.token);
      dispatch(setUser(user));
      saveUser(user);
      navigate("/", { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        messageApi.open({
          type: "error",
          content: error.message,
        });
      }
    }
  };

  return (
    <Fragment>
      {contextHolder}
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
              gap="small"
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
                <p
                  style={{
                    fontSize: "48px",
                  }}
                >
                  PixPals
                </p>
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
                  variant="filled"
                  form={form}
                  initialValues={{ remember: false }}
                  onFinish={onFinish}
                  style={{
                    width: "100%",
                  }}
                >
                  <Form.Item<FieldType>
                    name="email"
                    validateTrigger="onBlur"
                    rules={[
                      { required: true, message: "電子信箱不能為空" },
                      { type: "email", message: "請輸入正確的電子信箱格式" },
                    ]}
                    style={{
                      marginBottom: "12px",
                    }}
                  >
                    <Input
                      size="large"
                      prefix={<MailOutlined />}
                      placeholder="電子郵件"
                    />
                  </Form.Item>
                  {!isLogin && (
                    <Form.Item<FieldType>
                      name="name"
                      validateTrigger="onBlur"
                      rules={[
                        { required: true, message: "使用者名稱不能為空" },
                      ]}
                      style={{
                        marginBottom: "12px",
                      }}
                    >
                      <Input
                        size="large"
                        prefix={<UserOutlined />}
                        placeholder="使用者名稱"
                      />
                    </Form.Item>
                  )}
                  <Form.Item<FieldType>
                    name="password"
                    validateTrigger="onBlur"
                    rules={[{ required: true, message: "密碼不能為空" }]}
                    style={{
                      marginBottom: "12px",
                    }}
                  >
                    <Input
                      size="large"
                      prefix={<LockOutlined />}
                      placeholder="密碼"
                    />
                  </Form.Item>
                  <Form.Item
                    style={{
                      marginBottom: "12px",
                    }}
                  >
                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      noStyle
                      validateTrigger="onSubmit"
                      rules={[{ validator: checkAgreement, message: "請勾選" }]}
                    >
                      <Checkbox>我已同意隱私協議與服務條款</Checkbox>
                    </Form.Item>
                  </Form.Item>
                  <Form.Item
                    style={{
                      marginBottom: "0px",
                    }}
                  >
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
                <p
                  onClick={() => {
                    setIsLogin(!isLogin);
                    form.resetFields();
                  }}
                >
                  {isLogin === true
                    ? "還沒有帳號？點擊註冊"
                    : "已經有帳號？點擊登錄"}
                </p>
              </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
