import { useSelector } from "react-redux";
import Alert from "./components/Alert";
import FetchedPosts from "./components/FetchedPosts";
import PostFrom from "./components/PostFrom";
import Posts from "./components/Posts";

function App() {
  const text = useSelector((state) => state.app.alert);
  return (
    <div className="container pt-3">
      {text && <Alert text={text} />}
      <div className="row">
        <div className="col">
          <PostFrom />
        </div>
        <div className="col">
          <h2>Sync posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async post</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
