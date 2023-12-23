import styles from "./Hero.module.scss";

export const Hero = () => (
  <section className={styles.section_bg}>
    <div className="ui-container">
      <div className="flex justify-end pb-6">
        <div className="flex-col items-center">
          <p className="text-37 leading-0.7 ">
            <span className="font-medium">7</span>
            <span className="font-thin tracking-[1.665px]">DAYS</span>
          </p>
          <p className="text-12 text-right font-light tracking-[9.48px]">
            JOURNEY
          </p>
        </div>
      </div>
      <h1 className="visually-hidden">CarpTravel</h1>
      <h2 className="ui-title">
        <span className="ui-title-accent block">Uncover&nbsp;</span>
        Carpathian&rsquo;s Secrets
      </h2>
      <ul className={styles.location_list}>
        <li>
          <p>Hoverla</p>
        </li>
        <li>
          <p>Yaremche</p>
        </li>
        <li>
          <p>Zakarpattia</p>
        </li>
        <li>
          <p>Vorokhta</p>
        </li>
        <li>
          <p>Synevyr Lake</p>
        </li>
        <li>
          <p>Bukovel</p>
        </li>
      </ul>

      <p className="text-justify text-14 font-extralight leading-1.43 pb-6">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <button className="flex justify-center items-center w-full bg-bgc-button px-16 py-[18px]">
        JOIN NOW
      </button>
    </div>
  </section>
);
