import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/6842746/pexels-photo-6842746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <span className="postDuration">13:05</span>
      </div>
      <div className="postInfoContainer">
        <img
          className="postAvatar"
          src="https://images.pexels.com/photos/6842746/pexels-photo-6842746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="postInfo">
          <span className="postTitle">Hello first video</span>
          <span className="postChannel">Lama Dev</span>
          <span className="postDetail">14K view . 1 week ago</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
