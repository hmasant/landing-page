import { lazy } from "react";
import style from "./style.module.css";

const NumbersSection = lazy(() => import("../../components/NumbersSection"));
const ProcessSection = lazy(() => import("../../components/ProcessSection"));
const TestimonialSection = lazy(() =>
  import("../../components/TestimonialSection")
);

export default function HomeScreen() {
  return (
    <section className={style.scroll_wrapper}>
      <section>
        <div className="grid_two">
          <div className={style.hero_left}>
            <img
              src="/logo.svg"
              loading="eager"
              fetchPriority="high"
              alt="Optimal Virtual Employee"
              style={{ width: "12rem", margin: 0 }}
            />
            <div>
              <img
                style={{ height: "1.5rem", margin: 0 }}
                src="/google_review.svg"
                fetchPriority="high"
                loading="eager"
                alt="Image"
              />
              <br />
              <br />
              <h1>Hire Top Product & Engineering Talent</h1>
              <br />
              <br />
              <p>
                Get pre-vetted IT specialists ready to start in just 48 hours
                for 999 AUD + salary.
              </p>
              <br />
              <br />
              <button>
                Book a free consultation &nbsp;
                <img
                  style={{ height: "1.25rem" }}
                  fetchPriority="high"
                  src="/arrow.svg"
                  loading="eager"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
          <div className={style.hero_right}></div>
        </div>
      </section>
      <section>
        <TestimonialSection />
      </section>
      <section>
        <NumbersSection />
      </section>
      <section>
        <ProcessSection />
      </section>
    </section>
  );
}
