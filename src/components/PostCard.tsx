import { Avatar, Card } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

const { Meta } = Card;

const PostCard: React.FC = () => {
  return (
    <Card
      style={{
        width: 400,
        height: 370,
      }}
      cover={
        <img
          alt="post_image"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          width="400"
          height="250"
        />
      }
      actions={[
        <LikeOutlined key="like" />,
        <MessageOutlined key="message" />,
        <StarOutlined key="collect" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        description="This is the description This is the description"
      />
    </Card>
  );
};

export default PostCard;
