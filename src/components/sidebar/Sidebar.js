import React from "react";
import "./sidebar.css";
import {
  Twitter,
  Search,
  Home,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter />
      <SidebarOption active text="Home" Icon={Home} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Notifications" Icon={NotificationsNone} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PermIdentity} />
      <SidebarOption text="More" Icon={MoreHoriz} />
    </div>
  );
};

export default Sidebar;
