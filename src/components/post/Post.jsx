import React, { useState } from "react";
import "./post.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Users } from "../../dummyData";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(isLiked ? false : true);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreHorizOutlinedIcon className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
              className="postIcon"
            />
            <img
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
              className="postIcon"
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
