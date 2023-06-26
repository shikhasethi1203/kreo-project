/** @format */

import React from "react";
import Card from "../compontents/Card";
import "./View.css";
import { Link } from "react-router-dom";
import {ImagesData,ImageSection} from ".././compontents/ImageData";

const View = () => {
  return (
    <div className='view-container'>
      <div className='view-link'>
        <Link to='/works'>for works</Link>
      </div>
      <div className='containers'>
        <div className='container-title'>
          <h2>OUR WORK </h2>
        </div>
        <div className='container-paragraph'>
          <p>
            We bring a broad spectrum of integrated brand design solutions to
            the table. At KREO Design, we offer a full range of design services,
            including graphics and identity, strategy and positioning, products
            and packaging, exhibitions and installations, websites and digital
            experiences, advertising and communications, store design and retail
            experience, and video and animation. As a full-service brand
            experience design firm, we offer this full spectrum of expertise
            through our in-house multi-disciplinary teams.
          </p>
          <button>DOWNLOAD KREO BROCHURE</button>
        </div>
      </div>
      <div className='ourwork'>
        <div className='ourwork-main-container'>
          <div className='ourwork-button'>
            <button
              style={{
                color: "black",
                fontWeight: "700",
                borderBottom: "6px solid #e86026",
              }}>
              Service Type
            </button>
            <button>Client Type</button>
            <button>All Projects</button>
          </div>
        </div>
      </div>
      <div className='slider-div'>
        <div className='carousel-root'>
          <div className='carosusel slider'>
            <div className='carosusel-style'>
              <div className='style_head-and-icon'>
                <h3>360° Integrated Brand Experience Design</h3>
                <img
                  src='image/right_arrow.png'
                  alt='icon'
                  style={{ height: "1.3vw", width: "5vw" }}
                />
              </div>
              <div className='cards'>
                {ImagesData.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"6vw"}}>
      <div className='slider-div'>
        <div className='carousel-root'>
          <div className='carosusel slider'>
            <div className='carosusel-style'>
              <div className='style_head-and-icon'>
                <h3> Design &amp; Brand Manual</h3>
                <img
                  src='image/right_arrow.png'
                  alt='icon'
                  style={{ height: "1.3vw", width: "5vw" }}
                />
              </div>
              <div className='cards'>
                {ImageSection.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default View;
