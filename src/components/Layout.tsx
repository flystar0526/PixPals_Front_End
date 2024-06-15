import { Outlet, Link, useNavigate } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import { Input, Button, Dropdown, Row, Col, Flex } from "antd";
import type { MenuProps } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  FileAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content } = AntdLayout;

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "info",
      icon: <UserOutlined />,
      label: "個人資料",
      onClick: () => navigate("/profile"),
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "登出",
      onClick: () => navigate("/signin"),
    },
  ];

  return (
    <AntdLayout
      style={{
        height: "100%",
      }}
    >
      <Header>
        <Row align="middle">
          <Col className="logo" span={8}>
            <Link
              to="/"
              style={{
                color: "black",
                fontSize: "30px",
              }}
            >
              PixPals
            </Link>
          </Col>
          <Col className="search_bar" span={8}>
            <Input size="large" prefix={<SearchOutlined />} />
          </Col>
          <Col className="menu" span={8}>
            <Flex justify="flex-end" align="center">
              <Button icon={<HomeOutlined />} type="text">
                主頁面
              </Button>
              <Button icon={<FileAddOutlined />} type="text">
                發佈
              </Button>
              <Dropdown menu={{ items }} placement="bottomRight">
                <Button
                  icon={<UserOutlined />}
                  shape="circle"
                  type="text"
                  size="large"
                />
              </Dropdown>
            </Flex>
          </Col>
        </Row>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>Copyright©2024 PixPals</Footer>
    </AntdLayout>
  );
};

export default Layout;
