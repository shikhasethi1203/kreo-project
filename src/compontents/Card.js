/** @format */

import React, { useState } from "react";

const Card = ({ item }) => {
  const [showImage, setshowImage] = useState(true);

  const MouseEnter = () => {
    setshowImage(true);
  };
  const MouseLeave = () => {
    setshowImage(false);
  };

  return (
    <>
      <div className='style-works'>
        <div className='style_single-card'>
          <div className='style_card-img-container'>
            <div className='style_award-icon-container'>
              <div className='style_award-icon'>
                <img src='image/award.webp' alt='icon' />
              </div>
            </div>

            <div className='style_card-img-1'>
              <div
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                style={{ cursor: showImage ? "pointer" : "default" }}>
                {showImage ? (
                  <img src={item.imgdata1} alt={`item ${""}`} />
                ) : (
                  <img src={item.imgdata} alt={`item ${""}`} />
                )}
              </div>
            </div>
            <div
              className='card-name'
              style={{
                fontFamily: "Be Vietnam Pro",
                fontStyle: "normal",
                fontSize: "1.2vw",
                lineHeight: "1.5vw",
                marginTop: "1rem",
              }}>
              <p
                style={{
                  fontWeight: "600",
                  color: "#000",
                  margintop: "2vw",
                  marginBottom: "0.2vw",
                }}>
                {item.name}
              </p>
              <p style={{ fontWeight: "300", color: "#767676" }}>
                {item.name1}
              </p>
            </div>
          </div>
        </div>
      </div>
</>
   )
  } 

export default Card;
