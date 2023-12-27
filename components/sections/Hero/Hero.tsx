import styles from "./Hero.module.scss";

export const Hero = () => (
  <section className={styles.section_bg}>
    <div className="ui-container">
      <h1 className="visually-hidden">CarpTravel</h1>
      <div className="md:flex md:gap-12">
        <div className="hidden md:block">
          <h2 className="ui-title w-[426px] pb-[68px]">
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
        </div>

        <div className="md:flex md:flex-col">
          <div className="flex justify-end pb-6 md:pb-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-37 leading-0.7 md:text-67 md:leading-normal">
                <span className="font-medium">7</span>
                <span className="font-thin tracking-[1.665px] md:tracking-[6.71px]">
                  DAYS
                </span>
              </p>
              <p className={styles.sublabel}>JOURNEY</p>
            </div>
          </div>
          <div className="md:hidden">
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
          </div>

          <p className={styles.descr}>
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <button className={styles.btn}>JOIN NOW</button>
        </div>
      </div>
    </div>
  </section>
);
