import { PictureOutlined } from "@ant-design/icons";
import { Modal, Flex, Upload, Input } from "antd";

const { Dragger } = Upload;
const { TextArea } = Input;

const PostPublish: React.FC = () => {
  return (
    <Modal
      className="post_publich"
      open={true}
      centered
      width={800}
      styles={{
        header: {
          padding: "20px 24px 0px 24px",
          height: 50,
        },
        body: {
          padding: "0px 24px",
          height: 480,
        },
        footer: {
          padding: "0px 24px 20px 24px",
          height: 50,
        },
      }}
      title={<h2>上傳照片</h2>}
    >
      <Flex
        style={{
          width: "100%",
          height: "100%",
        }}
        justify="center"
        align="center"
        gap="small"
        vertical
      >
        <Dragger multiple={false}>
          <p className="upload-icon">
            <PictureOutlined />
          </p>
          <p className="upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
        <TextArea
          showCount
          maxLength={300}
          placeholder="disable resize"
          style={{ height: "20%", resize: "none" }}
        />
      </Flex>
    </Modal>
  );
};

export default PostPublish;
