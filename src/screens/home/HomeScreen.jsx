import style from "./style.module.css";

export default function HomeScreen() {
  return (
    <section className={style.scroll_wrapper}>
      <section>
        <div className={style.grid_two}>
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
                Book a free consultation &nbsp;
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
        <div className={style.sec_two}>
          <div className={style.top_heading}>
            <hr />
            <h3>CLIENT TESTIMONIALS</h3>
            <hr />
          </div>
          <br />
          <br />
          <div className={style.sec_two_heading}>
            <h2>Success Stories That Speak For Themselves</h2>
          </div>
        </div>
      </section>
      <section>
        <div className={style.sec_three}>
          <div className={style.grid_two}>
            <div>
              <div className={style.top_heading}>
                <hr />
                <h3>CLIENT TESTIMONIALS</h3>
              </div>
              <br />
              <h2>Discover what our numbers reveal about us</h2>
              <br />
              <br />
              <br />
              <p>
                Save upto 50-70% cost compared to in-house hiring. Get matched
                with elite developers within 48 hours. We work with businesses
                to deliver reliable software solutions tailored to their
                requirements within agreed timelines.
              </p>
              <br />
              <br />
              <br />
              <br />
              <button>
                Book a free consultation &nbsp;
                <img
                  style={{ height: "1.25rem" }}
                  src="/arrow.svg"
                  alt="Arrow"
                />
              </button>
            </div>
            <div className={style.sec_three_right}>
              <img
                style={{ height: "80vh" }}
                src="/numbers.svg"
                alt="Our Story"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
