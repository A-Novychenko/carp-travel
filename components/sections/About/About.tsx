import styles from "./About.module.scss";

export const About = () => (
  <section className={`${"ui-section"} ${styles.section_bg}`}>
    <div className="ui-container">
      <h2 className="ui-title pb-2">
        WHO <span className="ui-title-accent">WE ARE</span>
      </h2>
      <ul className={styles.list}>
        <li>
          <p>
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
        </li>
        <li>
          <p>
            <span className="font-normal">We believe</span> that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </li>
      </ul>
      <div className="w-180 ml-auto text-14 font-normal leading-1.43 pb-10">
        <p>
          <span className="block">From vacationers</span>
          <span className="block text-right">to active travelers</span>
        </p>
        <p className="font-extralight tracking-[-0.14px]">
          we have a tour for everyone.
        </p>
      </div>
      <p className="text-14 font-extralight leading-1.43">
        <span className="font-normal">We use methods</span> that are time-tested
        and proven. Our expert guides with in-depth knowledge of the Carpathian
        landscapes lead you safely through the mysteries of these mountains.
      </p>
    </div>
  </section>
);
