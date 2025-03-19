import style from "./style.module.css";
import { useInView } from "react-intersection-observer";

export default function PortfolioSection() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`grid_two ${style.add_margin}`}>
      <div id={inView ? "show_left" : "hide_left"} className={style.img_sec}>
        <img
          style={{ height: "80vh" }}
          src="/character.svg"
          fetchPriority="low"
          loading="lazy"
          alt="Image"
        />
      </div>
      <div
        className={style.text_right}
        id={inView ? "show_right" : "hide_right"}
      >
        <div className="top_heading" style={{ justifyContent: "end" }}>
          <h2>OUR PORTFOLIO</h2>
          <hr />
        </div>
        <br />
        <br />
        <h3>Power Your Team With Top Tech Talent & Grow 10X</h3>
        <br />
        <br />
      </div>
    </div>
  );
}
