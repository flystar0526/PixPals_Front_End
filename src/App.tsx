import { Routes, Route, Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Login from "./views/Login";
import Search from "./views/Search";
import Profile from "./views/Profile";
import ProfileEdit from "./views/ProfileEdit";
import NoMatch from "./views/NoMatch";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Layout: {
          headerBg: "#ffffff",
        },
      },
    }}
  >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Outlet />}>
          <Route index element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </ConfigProvider>
);

export default App;
