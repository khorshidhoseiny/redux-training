import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchPostsRequest } from "../../redux/post/PostActions";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { error, loading, data } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux-Saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostsRequest(postId))}>
        get post
      </button>
      { error ? (
        <h2>{error}</h2>
      ) : data.title ? (
        <section>
          <h3>title : {data.title}</h3>
          <div>body : {data.body}</div>
        </section>
      ) : (
        <p>set fetch posts</p>
      )}
    </>
  );
};
export default PostSaga;
