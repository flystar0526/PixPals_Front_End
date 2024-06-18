import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
// import PostDetail from "../components/PostDetail";
import PostPublish from "../components/PostPublish";
import { useEffect } from "react";
import { getJwtToken } from "../apis/auth";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getJwtToken()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <Fragment>
      <PostCard />
      {/* <PostDetail /> */}
      <PostPublish />
    </Fragment>
  );
};

export default Home;
