import React from 'react'

const Insight = () => {
  return (
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
          <div className='style-works'>
            <div className='style_single-card'>
              <div className='style_card-img-container'>
                <div className='style_award-icon-container'>
                  <div className='style_award-icon'>
                    <img src='image/award.webp' alt='icon' />
                  </div>
                </div>
                <div className='main-container1 '>
                  <div className='style_card-img-1'>
                    <img src='image/NEW THUMB NAILS-65.webp' alt='icon1' />
                  </div>

                  <div className='style_card-img-2'>
                    <img src='image/gif.gif' alt='icon2' />
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontWeight: "600",
                  color: "#000",
                  margintop: "2vw",
                  marginBottom: "0.2vw",
                }}>
                Something's Brewing
              </p>
              <p style={{ fontWeight: "300", color: "#767676" }}>
                360° Integrated Brand Experience Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Insight