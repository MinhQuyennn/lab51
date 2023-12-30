import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/405308691_3492221227775223_5410689100886905515_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHtScb6Spi-zxkVH9xrWvAZEgUcK_Ahg3kSBRwr8CGDeeD-yqvuErgSlw2mC3vWfOa1hxWwn7fXQ3c_siRPR8PH&_nc_ohc=pQJivxO-sbsAX9KR7gX&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBiaQ0nFWbKL-AVURrGXWDQlTgLsOGvExUUUjnYtgj8ow&oe=659186CC" />
      <div className="sidebarChat__info">
        <h2>Random person</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  );
}
export default SidebarChat;
