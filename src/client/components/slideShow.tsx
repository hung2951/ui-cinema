import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const SlideShow = () => {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive); 
   };
  return (
    <div className='banner'>
      <Slide easing="ease">
          <div className="each-slide">
              <div style={{ 'backgroundImage': `url(https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/Minions_Slider.jpg)` }}>
                <button onClick={()=>ToggleClass()}><i className="fa-regular fa-circle-play fa-5x text-white"></i></button>
              </div>
          </div>
          <div className="each-slide">
              <div style={{ 'backgroundImage': `url(https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/DaoDocDac_Slider.jpg)` }}>
              <button onClick={()=>ToggleClass()}><i className="fa-regular fa-circle-play fa-5x text-white"></i></button>
              </div>
          </div>
          <div className="each-slide">
              <div style={{ 'backgroundImage': `url(https://cdn.galaxycine.vn/media/2022/8/30/1_1661866507121.jpg)` }}>
              <button onClick={()=>ToggleClass()}><i className="fa-regular fa-circle-play fa-5x text-white"></i></button>
              </div>
          </div>
      </Slide>
      <div className={isActive ? "video_active" : "video"}>
        <div className="">
          <iframe width="600" height="400" src="https://www.youtube.com/embed/UBgPypHGAqE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <button onClick={()=>ToggleClass()} className={isActive ? "exit_video" : "exit_video_hide"}><i className="fa-sharp fa-solid fa-xmark text-white fa-2x"></i></button>
      </div>
    </div>
    
  )
}

export default SlideShow