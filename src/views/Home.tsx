import { Fragment } from "react/jsx-runtime";
import PostCard from "../components/PostCard";
// import PostDetail from "../components/PostDetail";
import PostPublish from "../components/PostPublish";

const Home: React.FC = () => {
  return (
    <Fragment>
      <PostCard />
      {/* <PostDetail /> */}
      <PostPublish />
    </Fragment>
  );
};

export default Home;
