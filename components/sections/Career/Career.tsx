import {ChooseUsForm} from "@/components/elements/ChooseUsForm/ChooseUsForm";
import whyUseData from "@/data/whyUsData.json";

import styles from "./Career.module.scss";

export const Career = () => (
  <section>
    <div className={`${"ui-section"} ${styles.section_bg}`}>
      <div className="ui-container">
        <h2 className="ui-title">
          CHOOSE <span className="ui-title-accent">US</span>
        </h2>
        <p className="w-180 text-14 font-extralight leading-1.43 ml-auto pb-9">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>

        <h3 className="text-30 font-extralight uppercase pb-9">Why us ?</h3>
        <ul className="w-180">
          {whyUseData &&
            whyUseData.map(({advantages, description}, idx) => (
              <li key={idx} className={styles.advantages_item}>
                <p className="text-right text-14 font-normal leading-1.43 pb-2">
                  {advantages}
                </p>
                <p className="text-right text-12 font-extralight leading-1.6 pb-4">
                  {description}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>

    <div className={`${"ui-section"} ${styles.section_bg}`}>
      <div className="ui-container">
        <p className="pb-6 w-180 text-14 font-extralight leading-1.43 ml-auto">
          Don&apos;t miss your opportunity! Fill out the form right now and join
          our team!
        </p>
        <ChooseUsForm />
      </div>
    </div>
  </section>
);
