import React from "react";
import "./Share.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import ShareItem from "./shareItem";
function Share() {
  return (
    <>
      <div className="share">
        <ShareItem
          Icon={InstagramIcon}
          name="Instagram"
          link="https://instagram.com/therogersak"
        />
        <ShareItem
          Icon={TwitterIcon}
          name="Twitter"
          link="https://twitter.com/therogersak"
        />
        <ShareItem
          Icon={FacebookOutlinedIcon}
          name="Facebook"
          link="https://facebook.com/therogersak"
        />
        <ShareItem
          Icon={LinkedInIcon}
          name="LinkedIn"
          link="https://linkedin.com/in/therogersak"
        />
        <ShareItem
          Icon={YouTubeIcon}
          name="YouTube"
          link="https://youtube.com/therogersak"
        />
        <ShareItem
          Icon={TelegramIcon}
          name="Telegram"
          link="https://telegram.com/therogersak"
        />
      </div>
    </>
  );
}

export default Share;
