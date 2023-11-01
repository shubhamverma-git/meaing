import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import swiperData from "../../../data/heroData.js";
import styles from "../HeroSwiper/HeroSwiper.module.scss";
import { Autoplay } from "swiper";
const HeroSwiper = () => {
  return (
    <>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Autoplay]}
          style={{ height: "100vh" }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
        >
          {swiperData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="slide"
                style={{
                  margin: "auto",
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#0D0D0D",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <video
                  muted
                  loop
                  src={item.video_url}
                  autoPlay
                  className="video"
                  type="video/mp4"
                  style={{
                    objectFit: item.id === 1 ? "cover" : "none",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
              {
                <div className={styles.slide_titles}>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div
                        style={{ color: item.id === 1 ? "#232323" : "#fff" }}
                        className={styles.slide_title_text}
                      >
                        <h2>{item.label}</h2>
                        <div data-animate="active">
                          <span
                            style={{
                              fontWeight: "bolder",
                            }}
                            data-splitting=""
                          >
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSwiper;
