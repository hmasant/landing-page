import style from "./style.module.css";

export default function ServicesSection() {
  return (
    <div className={style.services_grid}>
      <div className={style.add_margin}>
        <div className="top_heading">
          <hr />
          <h2>OUR SERVICES</h2>
        </div>
        <br />
        <h3>Comprehensive Software Solutions For Your Business</h3>
        <br />
        <br />
        <img
          loading="lazy"
          alt="OVE Services"
          src="/services.svg"
          fetchPriority="low"
          className={style.services_img}
        />
      </div>
      <div className={style.services_sec_right}>
        <img
          style={{ height: "100vh" }}
          src="/people_collage.svg"
          alt="Modern Collage"
          fetchPriority="low"
          loading="lazy"
        />
      </div>
    </div>
  );
}
