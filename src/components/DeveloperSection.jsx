import style from "./style.module.css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DeveloperSection() {
  return (
    <div className={`grid_two ${style.add_margin}`}>
      <div>
        <div className="top_heading">
          <hr />
          <h2>OUR DEVELOPERS</h2>
        </div>
        <br />
        <br />
        <h3>Skilled IT Engineers Ready to Join Your Project</h3>
        <br />
        <br />
        <br />
        <p>
          Our talent pool is well-versed every technology, enabling seamless
          collaboration with you to deliver optimal results. Handpicked
          developers with proven expertise in AI, Full-Stack, DevOps, Mobile,
          Cloud, and many more.
        </p>
        <br />
        <br />
        <br />
        <br />
        <button>
          Book a free consultation
          <img
            style={{ height: "1.25rem" }}
            fetchPriority="low"
            src="/arrow.svg"
            loading="lazy"
            alt="Arrow"
          />
        </button>
      </div>
      <div className={style.dev_right}>
        <div className={style.dev_video_sec}>
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
            <SwiperSlide>
              <img
                style={{ width: "100%" }}
                src="/portfolio.avif"
                fetchPriority="low"
                alt="Developer"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "100%" }}
                src="/portfolio.avif"
                fetchPriority="low"
                alt="Developer"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "100%" }}
                src="/portfolio.avif"
                fetchPriority="low"
                alt="Developer"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "100%" }}
                src="/portfolio.avif"
                fetchPriority="low"
                alt="Developer"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "100%" }}
                src="/portfolio.avif"
                fetchPriority="low"
                alt="Developer"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
