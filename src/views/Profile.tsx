import { Avatar, Flex, Row, Col, Button } from "antd";
import {
  LikeOutlined,
  ProductOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Profile: React.FC = () => {
  return (
    <Flex
      className="profile"
      vertical
      gap="large"
      align="center"
      style={{
        padding: "50px 150px",
        width: "100%",
        height: "100%",
      }}
    >
      <Flex
        className="profile_user"
        vertical={false}
        style={{
          width: "100%",
          height: "20%",
        }}
      >
        <Row
          gutter={64}
          style={{
            width: "100%",
            height: "100%",
          }}
          justify="center"
          align="middle"
        >
          <Col span={12}>
            <Flex justify="flex-end">
              <Avatar size={128} icon={<UserOutlined />}></Avatar>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex
              className="profile_user_info"
              vertical
              gap="middle"
              justify="flex-start"
            >
              <Flex
                className="profile_user_name"
                vertical={false}
                gap="middle"
                align="center"
              >
                <h2>flystar</h2>
                <Button type="primary">編輯個人資料</Button>
              </Flex>
              <p>@flystar0526</p>
              <p>一顆喜歡玩遊戲的星星</p>
            </Flex>
          </Col>
        </Row>
      </Flex>
      <Flex
        className="profile_action"
        vertical={false}
        style={{
          width: "100%",
          height: "10%",
        }}
      >
        <Row
          style={{
            width: "100%",
            height: "100%",
          }}
          justify="center"
          align="middle"
        >
          <Col span={6}>
            <Flex justify="flex-end">
              <Button icon={<ProductOutlined />} type="text" size="large">
                我的
              </Button>
            </Flex>
          </Col>
          <Col span={6}>
            <Flex justify="center">
              <Button icon={<LikeOutlined />} type="text" size="large">
                讚過
              </Button>
            </Flex>
          </Col>
          <Col span={6}>
            <Flex justify="flex-start">
              <Button icon={<StarOutlined />} type="text" size="large">
                收藏
              </Button>
            </Flex>
          </Col>
        </Row>
      </Flex>
      <Row
        gutter={12}
        style={{
          width: "100%",
          height: "70%",
        }}
        justify="center"
      >
        <Col span={6}>
          <Flex justify="center">
            <img
              alt="post_image"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="100%"
              height="300px"
            />
          </Flex>
        </Col>
        <Col span={6}>
          <Flex justify="center">
            <img
              alt="post_image"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="100%"
              height="300px"
            />
          </Flex>
        </Col>
        <Col span={6}>
          <Flex justify="center">
            <img
              alt="post_image"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="100%"
              height="300px"
            />
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default Profile;
