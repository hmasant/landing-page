import { lazy } from "react";
import style from "./style.module.css";

const NumbersSection = lazy(() => import("../../components/NumbersSection"));
const ProcessSection = lazy(() => import("../../components/ProcessSection"));
const ServicesSection = lazy(() => import("../../components/ServicesSection"));
const TestimonialSection = lazy(() =>
  import("../../components/TestimonialSection")
);
const DeveloperSection = lazy(() =>
  import("../../components/DeveloperSection")
);

export default function HomeScreen() {
  return (
    <section className={style.scroll_wrapper}>
      <section>
        <div className="grid_two">
          <div className={style.hero_left}>
            <img
              src="/logo.svg"
              alt="Optimal Virtual Employee"
              style={{ width: "12rem", margin: 0 }}
            />
            <div>
              <img
                style={{ height: "1.5rem", margin: 0 }}
                src="/google_review.svg"
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
                Book a free consultation
                <img
                  style={{ height: "1.25rem" }}
                  src="/arrow.svg"
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
      <section>
        <ServicesSection />
      </section>
      <section>
        <DeveloperSection />
      </section>
    </section>
  );
}
