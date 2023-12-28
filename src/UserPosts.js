import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <Switch>
          <Route path={`${url}/:postId`}>
            <UserPost />
          </Route>
          <Route>
            <p>No post selected...</p>
          </Route>
        </Switch>
    </div>
  );
};

export default UserPosts;
