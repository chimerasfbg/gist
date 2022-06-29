import React from "react";

const Posts = ({ posts, loading }) => {
  const boxClick = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("bb")) {
      e.target.classList.toggle("change");
    }
  };

  if (loading) {
    return (
      <h2 d-flex justify-content-start align-items-center>
        Loading...
      </h2>
    );
  }

  return (
    <ul className="list-group mb-4 ">
      {posts.map((post) => (
        <li
          key={post.id}
          className="list-group-item d-flex flex-row justify-content-start align-items-center bb "
          onClick={boxClick}
        >
          <img
            src={post.owner.avatar_url}
            alt="img"
            className="img-thumbnail img bb"
          />

          {Object.keys(post.files).map(function (keyName, keyIndex) {
            return <p className="ms-4">{post.files[keyName].filename}</p>;
          })}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
