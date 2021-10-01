import React from "react";
import "./Skeleton.css";

/* const Skeleton = ({ type }) => { */
const Skeleton = () => {
  const counter = 1;
  const FeedSkeleton = () => (
    <div className="postSk">
      <div class="postKsImg"></div>
      <div class="postSkInfo">
        <div class="postSkAvatar"></div>
        <div class="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div>
      </div>
    </div>
  );
  //if (type === "feed") return Array(counter).fill(<FeedSkeleton />);
  return Array(counter).fill(<FeedSkeleton />);
};

export default Skeleton;
