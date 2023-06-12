import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/banner/pexels-photo-3808057.webp";
import img2 from "../../../assets/banner/pexels-photo-4778621.jpeg";
import img3 from "../../../assets/banner/pexels-photo-5212345.jpeg";
import img4 from "../../../assets/banner/pexels-photo-8364026.jpeg";
import img5 from "../../../assets/banner/pexels-photo-7516574.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="w-full h-[530px] opacity-100" />
          <div className="absolute space-y-7 top-52 left-1/3 text-black font-bold ">
            <p className="text-center  text-white">LANGUAGE SCHOOL</p>
            <h4 className="text-center text-4xl font-bold text-white">
              Every student matters, <br />
              every moment counts
            </h4>
            <div className="flex gap-5 justify-center">
              <button className="btn btn-secondary">Signup Now</button>
              <button className="btn btn-outline font-bold text-white">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="w-full h-[530px]" />
          <div className="absolute space-y-7 top-52 left-40  text-black font-bold ">
            <h4 className="text-4xl font-bold text-white">
              To have another
              <br /> language is to possess
              <br /> a second soul.
            </h4>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Signup Now</button>
              <button className="btn btn-outline font-bold text-white">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="w-full h-[530px]" />
          <div className="absolute space-y-7 top-52 left-40  text-black font-bold ">
            <h4 className="text-4xl font-bold text-white">
              Teaching Turning <br/>Today’s Learners Into<br/> Tomorrow’s Leaders
            </h4>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Signup Now</button>
              <button className="btn btn-outline font-bold text-white">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full h-[530px]" />
          <div className="absolute space-y-7 top-52 left-40  text-black font-bold ">
            <h4 className="text-4xl font-bold text-white">
              Putting Children First
              <br />
              Preparing Children For
              <br /> Success In Life
            </h4>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Signup Now</button>
              <button className="btn btn-outline font-bold text-white">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
