import style from "./style.module.css";

export default function HomeScreen() {
  return (
    <section className={style.scroll_wrapper}>
      <section>
        <div className="grid_two">
          <div className={style.hero_left}>
            <img
              src="/logo.svg"
              alt="Optimal Virtual Employee"
              style={{ height: "4rem", margin: 0 }}
            />
            <div>
              <img
                style={{ height: "1.5rem", margin: 0 }}
                src="/google_review.svg"
                alt="Image"
              />
              <br />
              <h1>Hire Top Product & Engineering Talent</h1>
              <br />
              <p>
                Get pre-vetted IT specialists ready to start in just 48 hours
                for 999 AUD + salary.
              </p>
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
          </div>
          <div className={style.hero_right}></div>
        </div>
      </section>
      <section className={style.sec_two}>
        <div className={style.top_heading}>
          <hr />
          <p>
            <b>CLIENT TESTIMONIALS</b>
          </p>
          <hr />
        </div>
        <br />
        <h2>Success Stories That Speak For Themselves</h2>
      </section>
    </section>
  );
}
