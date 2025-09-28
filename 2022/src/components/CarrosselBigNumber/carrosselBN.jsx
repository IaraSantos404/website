import Styles from './carrosselBN.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import { SlRocket } from "react-icons/sl";
import { FaAsterisk } from "react-icons/fa";
import Trav from "./../../assets/-.svg"
import Icon from "./icon.png"
import { Autoplay, FreeMode } from "swiper/modules";

export default function CarrosselBN() {
  const icons = [
    { comp: <img src={Icon} alt="Icon" style={{ width: "40px", height: "40px" }} />, bg: "#4828AB" },
    { comp: <SlRocket size={40} color="#fff" />, bg: "#68a063" },
    { comp: <span>20</span>, bg: "#17BFD3" },
    { comp: <FaAsterisk size={40} color="#fff" />, bg: "#F14D7C" },
    { comp: <img src={Icon} alt="Icon" style={{ width: "40px", height: "40px" }} />, bg: "#4828AB" },
    { comp: <SlRocket size={40} color="#fff" />, bg: "#68a063" },
    { comp: <img src={Trav} alt="Trav" style={{ width: "40px", height: "40px" }} />, bg: "#17BFD3" },
    { comp: <FaAsterisk size={40} color="#fff" />, bg: "#F14D7C" },
    { comp: <img src={Icon} alt="Icon" style={{ width: "40px", height: "40px" }} />, bg: "#4828AB" },
    { comp: <SlRocket size={40} color="#fff" />, bg: "#68a063" },
    { comp: <span>23</span>, bg: "#17BFD3" },
    { comp: <FaAsterisk size={40} color="#fff" />, bg: "#F14D7C" },
  ];

  return (
    <div className={Styles.carrossel} style={{ width: "100%", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={"auto"}
        spaceBetween={0}   
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2500}
        freeMode={true}
      >
        {Array(10) 
          .fill(null)
          .map((_, idx) =>
            icons.map((icon, i) => (
              <SwiperSlide key={`${idx}-${i}`} style={{ width: "70px" }}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: icon.bg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {icon.comp}
                </div>
              </SwiperSlide>
            ))
          )}
      </Swiper>
    </div>
  );
}
