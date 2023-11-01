import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import styles from "./Blogcard.module.scss";
const BlogcardCarousel = ({ data, RenderComponent }) => {
  return (
    <Swiper
      spaceBetween={30}
      // modules={[Pagination, Autoplay]}    // ! use pagination to show dots under the swiper
      modules={[Autoplay]}
      breakpoints={{
        // when window width is >= 300px
        370: {
          width: 370,
          slidesPerView: 1.2,
          spaceBetween: 10,
          height: 390,
        },

        576: {
          width: 576,
          slidesPerView: 1.5,
          spaceBetween: 20,
          height: 500,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 1.8,
          spaceBetween: 20,
          height: 500,
        },
        // when window width is >= 992px
        992: {
          width: 992,
          slidesPerView: 2.3,
          spaceBetween: 30,
          height: 500,
        },
      }}
      speed="1200"
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      className={styles.mySwiper}
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-inactive-color": "#999999",
      }}
    >
      {data.map(({ attributes }, index) => (
        <SwiperSlide key={index}>
          <RenderComponent card={attributes} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogcardCarousel;
