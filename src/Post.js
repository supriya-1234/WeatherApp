import React from "react";
const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        return (
          <ul>
            <li key={index}>
              Temp : <span> {post.temp}° </span>
            </li>
            <li key={index}>
              Temp_min :<span> {post.temp_min}°</span>
            </li>
            <li key={index}>
              Temp_max :<span> {post.temp_max}°</span>
            </li>
            <li key={index}>
              Humidity : <span>{post.humidity}%</span>
            </li>
            <li key={index}>
              Wind : <span>{post.wind}km/s</span>
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default Post;
