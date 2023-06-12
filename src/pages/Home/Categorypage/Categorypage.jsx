import React from "react";
import { FaLanguage, FaAmericanSignLanguageInterpreting } from "react-icons/Fa";
///
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Categorypage = () => {
  return (
    <div className="mt-6">
      <h4 className="text-center font-bold text-3xl">Category Menu</h4>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[1120px] mx-auto"
      >
        <SwiperSlide>
          <div className="flex gap-6 mt-5 w-[1000px] mx-auto">
            <div className="border border-black border-5 bg-[#f5a4e3] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaLanguage className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Bacis English</h3>
            </div>
            <div className="border border-black border-5 bg-[#f5a4f1] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaAmericanSignLanguageInterpreting className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Advaced English</h3>
            </div>
            <div className="border border-black border-5 bg-[#f5a4ee] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaLanguage className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Hindi Language</h3>
            </div>
            <div className="border border-black border-5 bg-[#f5a4f1] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaAmericanSignLanguageInterpreting className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Spance Language</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-7 mt-5 w-[1000px] mx-auto">
            <div className="border  border-black border-5 bg-[#eea4f5] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaLanguage className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Japans Language</h3>
            </div>
            <div className="border border-black border-5 bg-[#eca4f5] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaAmericanSignLanguageInterpreting className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Bangla Language</h3>
            </div>
            <div className="border border-black border-5 bg-[#f5a4ee] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaLanguage className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">Chinas Language</h3>
            </div>
            <div className="border border-black border-5 bg-[#f5a4f5] hover:bg-red-200 shadow-2xl rounded px-16 py-10">
              <FaLanguage className="text-4xl" />
              <h3 className="font-bold text-[#1a1818]">US English</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorypage;
