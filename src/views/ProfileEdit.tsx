import { Flex, Form, Input, Radio, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ProfileEdit: React.FC = () => {
  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      gap="large"
      vertical
      style={{
        padding: "50px 500px",
        width: "100%",
        height: "100%",
      }}
    >
      <Flex
        align="center"
        style={{
          width: "100%",
          height: "10%",
        }}
      >
        <h1>編輯個人資料</h1>
      </Flex>
      <Avatar size={80} icon={<UserOutlined />} />
      <Form
        name="profile_edit"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Form.Item label="名稱" name="username">
          <Input size="large" />
        </Form.Item>
        <Form.Item label="密碼" name="password">
          <Input size="large" />
        </Form.Item>
        <Form.Item label="簡介" name="self_introduction">
          <TextArea
            showCount
            maxLength={300}
            style={{
              height: 120,
              resize: "none",
            }}
          />
        </Form.Item>
        <Form.Item label="電話" name="phone_number">
          <Input size="large" />
        </Form.Item>
        <Form.Item label="性別" name="gender">
          <Radio.Group>
            <Radio value="man"> 男 </Radio>
            <Radio value="woman"> 女 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            儲存
          </Button>
          <Button htmlType="submit">取消</Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default ProfileEdit;
