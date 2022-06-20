import React from "react";
import "./share.css";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaOutlinedIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <LabelOutlinedIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <LocationOnOutlinedIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <SentimentSatisfiedOutlinedIcon
                htmlColor="goldenrod"
                className="shareIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
