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
const PortfolioSection = lazy(() =>
  import("../../components/PortfolioSection")
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
              <button className="main_btn">
                Book a free consultation
                <img
                  style={{ height: "1.25rem" }}
                  src="/arrow.svg"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
          <div className={style.hero_right}>
            <div className={style.hero_menu}>
              <a href="#">Contact Us</a>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button>Book a call</button>
            </div>
            <form action="#">
              <input type="text" placeholder="Full Name" required />
              <br />
              <br />
              <br />
              <div className="grid_two">
                <input type="email" placeholder="Email" required />
                <input type="number" placeholder="Phone" required />
              </div>
              <br />
              <br />
              <br />
              <textarea placeholder="Project Description"></textarea>
              <br />
              <br />
              <br />
              <div className={style.form_btn}>
                <button type="submit">Book a Free Consultation</button>
              </div>
            </form>
          </div>
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
      <section>
        <PortfolioSection />
      </section>
    </section>
  );
}
