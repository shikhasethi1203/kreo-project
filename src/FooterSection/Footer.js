/** @format */

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Footer = () => {
  return (
    <div className='footer-page'>
      <div className='image-section'>
        <div className='images'>
          <img
            src='image/logo.png'
            alt='logo1'
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: " transparent",
              marginBottom: "6vw",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "Be Vietnam Pro",
            fontStyle: "normal",
            fontweight: "300",
            fontSize: "1.2vw",
            lineHeight: "1.7vw",
            color: "#fff",
            listStyle: "none",
            textAlign: "left",
            marginBottom: "2vw",
          }}>
          © KREO Design and Innovation 2023.
          <br />
          All rights reserved.
        </p>
        <br />
        <p
          style={{
            fontFamily: "Be Vietnam Pro",
            fontStyle: "normal",
            fontweight: "300",
            fontSize: "1.2vw",
            lineHeight: "1.7vw",
            color: "#fff",
            listStyle: "none",
            textAlign: "left",
          }}>
          #3490, 14th main, 2nd cross, HAL 2nd Stage, Indiranagar, Bengaluru -
          560038.
        </p>
      </div>
      <div className='follow-us'>
        <h3
          style={{
            fontFamily: "Oswald",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "2.2vw",
            lineHeight: "2.8vw",
            color: "#fff",
            marginBottom: "3vw",
            textAlign: "left",
          }}>
          FOLLOW US
        </h3>
        <div
          className='icon-social'
          style={{
            margin: "1.4vw 0",
            display: "flex",
            gap: "2vw",
            cursor: "pointer",
            marginTop: "2vw",
          }}>
          <IconButton style={{ color: "white", fontSize: "2.8vw!important" }}>
            <FacebookOutlinedIcon />
          </IconButton>

          <IconButton style={{ color: "white", fontSize: "2.8vw!important" }}>
            {" "}
            <InstagramIcon />
          </IconButton>
          <IconButton style={{ color: "white", fontSize: "2.8vw!important" }}>
            <TwitterIcon />
          </IconButton>

          <IconButton style={{ color: "white", fontSize: "2.8vw!important" }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton style={{ color: "white", fontSize: "2.8vw!important" }}>
            <LinkedInIcon />
          </IconButton>
        </div>
      </div>
      <div className='quick-link'>
        <h3>QUICK LINKS</h3>
        <ul>
          <Link to='/'>
            <li>WORK</li>
          </Link>
          <Link to='/about'>
            <li>ABOUT US</li>
          </Link>
          <Link to='/career'>
            <li>CAREERS</li>
          </Link>
          <Link to='/insight'>
            <li>INSIGHTS</li>
          </Link>
        </ul>
      </div>
      <div className='phones-link'>
        <h3>FOR BUSINESS ENQUIRY</h3>
        <div className='phone-icon'>

          <div className="phone1" >
            <PhoneIcon /> <span>+917259037156</span>
          </div>
          <div className="phone2">
            <PhoneIcon /> <span>+919845202295</span>
          </div>
          <div className="phone3">
            <MailOutlineIcon /><span>info@kreo.in</span>
          </div>
          </div>
        </div>
        <div className="careers">
          <h3>FOR CAREERS</h3>
          <div className="careers-del">
          <div className="phone4">
            <PhoneIcon /> <span>+919999097058</span>
          </div>
          <div className="phone5">
            <MailOutlineIcon /><span>careers@kreo.in</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
