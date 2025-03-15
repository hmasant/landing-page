import style from "./style.module.css";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSection() {
  return (
    <div className={style.add_margin}>
      <div className="top_heading" style={{ justifyContent: "center" }}>
        <hr />
        <h2>CLIENT TESTIMONIALS</h2>
        <hr />
      </div>
      <br />
      <br />
      <div className={style.testimonial_heading}>
        <h3>Success Stories That Speak For Themselves</h3>
      </div>
      <br />
      <br />
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        effect="coverflow"
        centeredSlides={false}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/swipe_start.svg"
            fetchPriority="low"
            alt="Swipe Image"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/testimonial.avif"
            fetchPriority="low"
            alt="Image Section"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/testimonial.avif"
            fetchPriority="low"
            alt="Image Section"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/testimonial.avif"
            fetchPriority="low"
            alt="Image Section"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/testimonial.avif"
            fetchPriority="low"
            alt="Image Section"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/testimonial.avif"
            fetchPriority="low"
            alt="Image Section"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            src="/swipe_end.svg"
            fetchPriority="low"
            alt="Swipe Image"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
