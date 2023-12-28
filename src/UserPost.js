import React from "react";
import { useParams, Route,  } from "react-router-dom";

export const UserPost = ({ posts = [] }) => {
  const { postId } = useParams();

  if (!postId) {
    throw new Error("No URL parameter for postId");
  }

  const post = posts.find((post) => `${post.id}` === postId);

  return (
    <div>
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
    <Route to={post.id}>
      
    </Route>
    </div>
  );
};

export default UserPost;
