import { Typography, Flex } from "antd";

const { Title } = Typography;

const ProfileEdit: React.FC = () => {
  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      gap="small"
      vertical
      style={{
        padding: "50px 300px",
        width: "100%",
        height: "100%",
      }}
    >
      <Title level={2}>編輯個人資料</Title>
    </Flex>
  );
};

export default ProfileEdit;
