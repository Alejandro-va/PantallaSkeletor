import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../post/Post";
import Skeleton from "../skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  /*  Esta funciona por tiempo q yo le pongo*/
  useEffect(() => {
    setIsLoading(true);
    const timing = setTimeout(() => {
      setVideos(<Post />);
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timing);
  }, []);

  /*   Creo q esta es
useEffect(() => {
    setIsLoading(true);
    const timig = window.addEventListener("DOMContentLoaded", () => {
      setVideos(<Post />);
      setIsLoading(false);
    });
  }, []); */

  /*  kiero ver este
 useEffect(() => {
    setIsLoading(true);
    const timig = window.addEventListener("DOMContentLoaded", () => {
      setVideos(<Post />);
      setIsLoading(false);
    });
  }, []); */

  //https: //www.youtube.com/watch?v=PNQGbczXkMI

  //https: //www.youtube.com/watch?v=2DHer5AtyiU

  return (
    <div className="feed">
      {isLoading && <Skeleton />}
      {!isLoading && videos}

      {/* <Skeleton type="feed" /> */}
    </div>
  );
};

export default Feed;
