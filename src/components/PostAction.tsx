import { Button, Flex, Input } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Fragment } from "react/jsx-runtime";

const PostAction: React.FC = () => {
  return (
    <Fragment>
      <Flex
        className="action"
        vertical={false}
        gap="large"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LikeOutlined
          key="like"
          style={{
            fontSize: "20px",
          }}
        />
        <MessageOutlined
          key="message"
          style={{
            fontSize: "20px",
          }}
        />
        <StarOutlined
          key="collect"
          style={{
            fontSize: "20px",
          }}
        />
      </Flex>
      <Flex
        className="comment"
        vertical={false}
        gap="small"
        align="center"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Input placeholder="寫一則評論吧!" variant="filled" />
        <Button type="primary">提交</Button>
      </Flex>
    </Fragment>
  );
};

export default PostAction;
