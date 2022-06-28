import React, { Children } from "react";

const posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <img src={post.owner.avatar_url} alt="img" />
          <p>{post.id}</p>
        </li>
      ))}
    </ul>
  );
};

export default posts;
