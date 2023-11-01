import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Pagination, Autoplay } from "swiper";
import styles from './Clientmessage.module.scss';
const ClientmessageCarousel = ({ data, RenderComponent }) => {
  return (
    <Swiper spaceBetween={50} 
    modules={[Autoplay, Pagination]}
  //   autoplay={{
  //     delay: 2500,
  //     disableOnInteraction: false,
  //  }}
    // loop={true}
    breakpoints={{
      300: {
        width: 333,
        slidesPerView: 1,
        spaceBetween:10 
      },

      576:{
        width: 270,
        slidesPerView: 1,
        spaceBetween:30 
      },
      768: {
        width: 768,
        slidesPerView: 2,
        spaceBetween:100
      },
      1200: {
        width: 1000,
        slidesPerView: 2,
        spaceBetween:130
      },
    }}
    pagination={{clickable:true, dynamicBullets:true}} className={styles.mySwiper}
    style={{
      "--swiper-pagination-color": "rgba(149, 149, 149, 1)",
    }}
    >
      {data.map((ele, index) => (
        <SwiperSlide key={index} style={{height:"auto"}}>
          <RenderComponent card={ele.attributes} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientmessageCarousel;
