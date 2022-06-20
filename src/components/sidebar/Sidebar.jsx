import React from "react";
import "./sidebar.css";
import { Users } from "../../dummyData";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Chats</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListItem">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Group</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkBorderOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItem">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
