import React, { useState } from "react";
import classes from "./OurWork.module.scss";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MarqueeRow from "./Marquee/MarqueeRow";
import { StrapyBaseUrl } from "../../../utils/Utility";

const OurWork = ({ subserviceData, projects }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.marquee_mobile_container}>
        <MarqueeRow tags={subserviceData.data} />
      </div>
      <div className={classes.card_container}>
        <Swiper
          spaceBetween={0}
          modules={[Autoplay]}
          allowTouchMove={false}
          onRealIndexChange={(a) => setIndex(a.realIndex)}
          slidesPerView={1}
          speed="1200"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          loop={true}
          className={classes.card_swipper}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                key={index}
                src={`${StrapyBaseUrl}${item?.attributes?.card_image?.data?.attributes.url}`}
                blurDataURL={`${StrapyBaseUrl}${item?.attributes?.card_image?.data?.attributes.url}`}
                width={item?.attributes?.card_image?.data?.attributes.width}
                height={item?.attributes?.card_image?.data?.attributes.height}
                alt={
                  item?.attributes?.card_image?.data?.attributes.alternativeText
                }
                className={classes.card_image}
                placeholder="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.right_container}>
        <div className={classes.marquee_container}>
          <MarqueeRow tags={subserviceData.data} />
        </div>
        <div className={classes.banner_container}>
          <Swiper
            spaceBetween={0}
            allowTouchMove={false}
            modules={[Autoplay]}
            slidesPerView={1}
            speed="1200"
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            className={classes.banner_swiper}
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index} className={classes.banner_details}>
                <h2
                  className={classes.banner_title}
                  style={{ color: item.attributes.title_color }}
                >
                  {item.attributes.title}
                </h2>
                <Image
                  src={`${StrapyBaseUrl}${item?.attributes?.banner_image?.data?.attributes?.url}`}
                  width={item.attributes.banner_image.data.attributes.width}
                  height={item.attributes.banner_image.data.attributes.height}
                  alt={
                    item?.attributes?.banner_image?.data?.attributes
                      ?.alternativeText
                  }
                  className={classes.banner_image}
                  // placeholder="blur"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={classes.mobile_banner_title}>
        <Animate on={index}>
          <h2>{projects[index].attributes?.title}</h2>
        </Animate>
      </div>
    </div>
  );
};

export default OurWork;

const Animate = ({ children, on }) => {
  return (
    <div className={classes.project_text} key={on}>
      {children}
    </div>
  );
};
