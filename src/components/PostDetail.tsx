import { Modal, Row, Col, Flex, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PostComment from "./PostComment";
import PostAction from "./PostAction";

const PostDetail: React.FC = () => {
  return (
    <Modal
      open={true}
      centered
      width={800}
      styles={{
        body: {
          width: 800,
          height: 600,
        },
      }}
      footer={[]}
    >
      <Row
        style={{
          width: 800,
          height: 600,
        }}
      >
        <Col
          span={16}
          style={{
            borderRight: "1px solid #d9d9d9",
          }}
        >
          <img
            alt="post_image"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            width="100%"
            height="100%"
            style={{
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
        </Col>
        <Col
          span={8}
          style={{
            padding: 12,
          }}
        >
          <Flex
            gap="small"
            vertical
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Flex
              className="post_user"
              gap="middle"
              vertical={false}
              align="center"
              style={{
                width: "100%",
                height: "10%",
              }}
            >
              <Avatar size={40} icon={<UserOutlined />}></Avatar>
              <h3>flystar</h3>
            </Flex>
            <Flex
              className="post_info"
              gap="middle"
              vertical={false}
              style={{
                width: "100%",
                height: "10%",
              }}
            >
              This is the description This is the description
            </Flex>
            <Flex
              className="post_comment"
              gap="large"
              vertical
              style={{
                width: "100%",
                height: "65%",
              }}
            >
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
            </Flex>
            <Flex
              className="post_action"
              vertical
              gap="small"
              align="center"
              style={{
                width: "100%",
                height: "15%",
              }}
            >
              <PostAction />
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Modal>
  );
};

export default PostDetail;
