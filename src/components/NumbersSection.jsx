import style from "./style.module.css";
import { useInView } from "react-intersection-observer";

export default function NumbersSection() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`grid_two ${style.add_margin}`}>
      <div id={inView ? "show_left" : "hide_left"}>
        <div className="top_heading">
          <hr />
          <h2>OUR STORY</h2>
        </div>
        <br />
        <br />
        <h3>Discover what our numbers reveal about us</h3>
        <br />
        <br />
        <br />
        <p>
          Save upto 50-70% cost compared to in-house hiring. Get matched with
          elite developers within 48 hours. We work with businesses to deliver
          reliable software solutions tailored to their requirements within
          agreed timelines.
        </p>
        <br />
        <br />
        <br />
        <br />
        <button className="main_btn">
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
      <div className={style.img_sec} id={inView ? "show_right" : "hide_right"}>
        <img
          style={{ height: "80vh" }}
          fetchPriority="low"
          src="/numbers.svg"
          alt="Our Story"
          loading="lazy"
        />
      </div>
    </div>
  );
}
