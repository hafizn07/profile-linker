import './styles/App.scss';
import { images } from "./constants"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper";



import { BsGlobe2, BsGithub, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs"
import { RiAmazonLine } from "react-icons/ri"


function App() {
  return (
    <>
      <div className="container">
        <div className="mob__screen">
          <div className="header">
            <h1>hafiz</h1>
          </div>


          <div className="curousel">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[Autoplay, EffectCards]}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
            className="mySwiper"
            >
            <SwiperSlide>
              <div className="curousel__one c-size">
                <div className="prof-img">
                  <img src={images.profileImg} alt="profile" />
                </div>
                <div className="prof-bio">
                  <h1>Hey,<br /> I'm Hafiz</h1>
                  <span>Front-end web developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="curousel__two c-size">
                <div className="work-bio">
                  <h1>Currently I'm in</h1>
                  <span>Dubai, United Arab Emirates</span>
                </div>
                <div className="work-img">
                  <img src={images.workImg} alt="work" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="curousel__three c-size">
                <div className="bg-img">
                  <img src={images.quoteImg} alt="quote" />
                  <span>"I bring websites to life with clean, modern designs and intuitive functionality."</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="profile-links">
          <a href='https://www.hafizmp.com/' target="_blank" rel="noreferrer" className="link-tab">
            <span><BsGlobe2 size={38} /></span>
            <h5>Visit Portfolio</h5>
          </a>
          <a href='https://github.com/hafizmp' target="_blank" rel="noreferrer" className="link-tab">
            <span><BsGithub size={38} /></span>
            <h5>View Github</h5>
          </a>
          <a href='https://twitter.com/Hafizmp_07' target="_blank" rel="noreferrer" className="link-tab">
            <span><BsTwitter size={38} /></span>
            <h5>View Twitter</h5>
          </a>
          <a href='https://www.linkedin.com/in/hafizmp/' target="_blank" rel="noreferrer" className="link-tab">
            <span><BsLinkedin size={38} /></span>
            <h5>View Linkedin</h5>
          </a>
          <div className="link-tab">
            <span><RiAmazonLine size={38} /></span>
            <h5>Visit Store</h5>
          </div>
          <a href='https://www.youtube.com/channel/UCF7OQFvNF-f6pYUna9nOsfw' target="_blank" rel="noreferrer" className="link-tab">
            <span><BsYoutube size={38} /></span>
            <h5>Youtube Channel</h5>
          </a>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
