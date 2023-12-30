import React from "react";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/405308691_3492221227775223_5410689100886905515_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHtScb6Spi-zxkVH9xrWvAZEgUcK_Ahg3kSBRwr8CGDeeD-yqvuErgSlw2mC3vWfOa1hxWwn7fXQ3c_siRPR8PH&_nc_ohc=pQJivxO-sbsAX9KR7gX&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBiaQ0nFWbKL-AVURrGXWDQlTgLsOGvExUUUjnYtgj8ow&oe=659186CC" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
