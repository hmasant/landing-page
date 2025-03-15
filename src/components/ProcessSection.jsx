import style from "./style.module.css";
import { useInView } from "react-intersection-observer";

export default function ProcessSection() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={style.add_margin}>
      <div className="grid_two">
        <div id={inView ? "show_left" : "hide_left"} className={style.img_sec}>
          <img
            style={{ height: "80vh" }}
            fetchPriority="low"
            src="/steps.svg"
            alt="Image"
          />
        </div>
        <div
          className={style.text_right}
          id={inView ? "show_right" : "hide_right"}
        >
          <div className="top_heading" style={{ justifyContent: "end" }}>
            <h2>HOW IT WORKS</h2>
            <hr />
          </div>
          <br />
          <br />
          <h3>Power Your Team With Top Tech Talent & Grow 10X</h3>
          <br />
          <br />
          <br />
          <p>
            Strategic Tech Talent Partner : We Recruit, Vet, and Empower Your
            Ideal Team. Our AI-driven selection process ensures you get the best
            match for your business needs fast, efficient, and hassle-free.
          </p>
          <br />
          <br />
          <br />
          <br />
          <div className={style.right_btn}>
            <button>
              Book a free consultation &nbsp;
              <img
                style={{ height: "1.25rem" }}
                fetchPriority="low"
                src="/arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
