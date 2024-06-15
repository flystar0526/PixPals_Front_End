import { Flex, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const PostComment: React.FC = () => {
  return (
    <Flex
      className="comment_info"
      gap="small"
      vertical
      style={{
        width: "100%",
        height: "50px",
      }}
    >
      <Flex
        className="comment_user"
        gap="small"
        vertical={false}
        align="center"
      >
        <Avatar size={32} icon={<UserOutlined />}></Avatar>
        <h4>jack521</h4>
      </Flex>
      <p>description</p>
    </Flex>
  );
};

export default PostComment;
