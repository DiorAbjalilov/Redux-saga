import FetchedPosts from "./components/FetchedPosts";
import PostFrom from "./components/PostFrom";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostFrom />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync post</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Async post</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
