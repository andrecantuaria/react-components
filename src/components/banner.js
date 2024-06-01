import Button from './button.js';
import React from 'react';
function Banner() {
    const videoUrl = "https://videos.pexels.com/video-files/3015528/3015528-hd_1280_720_24fps.mp4"; // URL do vídeo

    return (
        <div className="hero">
        <video autoPlay muted loop id="background-video">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="center">
          <div className="form-container">
            <h2>Connect with artists worldwide</h2>
            <div className="button-container">
              <Button type="primary" text="Get Started" />
              <Button type="secondary" text="Know More" />
            </div>
          </div>      
        </div>  
      </div>
    );
}

export default Banner;