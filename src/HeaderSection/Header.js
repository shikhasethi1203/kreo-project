/** @format */

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header>
        <div className='main-container'>
          <div className='main-container-heading'>
            <div className='link-container'>
              <div className='link-div'>
                <Link
                  to='/'
                  style={{
                    color: "#e86026",

                    fontFamily: "Oswald",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "1.8vw",
                    textDecoration: "none",
                  }}>
                  WORK
                </Link>

                <Link
                  to='/about'
                  style={{
                    color: "white",
                    fontFamily: "Oswald",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "1.8vw",
                    textDecoration: "none",
                  }}>
                  ABOUTUS
                </Link>

                <Link to='/'></Link>

                <img src='image/download.webp' alt='logo' />

                <Link
                  to='/career'
                  style={{
                    color: "white",
                    fontFamily: "Oswald",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "1.8vw",
                    textDecoration: "none",
                  }}>
                  CARRER
                </Link>

                <Link
                  to='/insight'
                  style={{
                    color: "white",
                    fontFamily: "Oswald",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "1.8vw",
                    textDecoration: "none",
                  }}>
                  INSIGHT
                </Link>
                <IconButton>
                  <AiOutlineSearch />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
