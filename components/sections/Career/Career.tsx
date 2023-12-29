import { ChooseUsForm } from '@/components/elements/ChooseUsForm/ChooseUsForm';

import whyUseData from '@/data/whyUsData.json';

import styles from './Career.module.scss';

export const Career = () => (
  <section id="career">
    <div className={`${'ui-section'} ${styles.section_bg}`}>
      <div className="ui-container">
        <div className="lg:p-6">
          <div className="md:flex md:mb-[5px] lg:mb-6 lg:items-center">
            <h2 className="ui-title md:mb-[7px] lg:mb-0">
              CHOOSE <span className="ui-title-accent">US</span>
            </h2>
            <p
              className="w-180 text-14 font-extralight leading-1.43 ml-auto mb-9 
            md:mb-0 md:w-[221px] md:text-justify md:text-13 md:leading-[1.54]
            lg:w-[293px] lg:text-18 lg:leading-[1.33]"
            >
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>

          <div className="md:flex md:gap-5 lg:gap-6">
            <div className="lg:w-[604px]">
              <h3
                className="text-30 font-extralight uppercase mb-9 w-[221px] 
          md:text-right md:mb-14 md:leading-normal lg:w-[290px] lg:mb-[45px]"
              >
                Why us ?
              </h3>

              <div className="md:flex md:gap-5">
                <ul className="w-180 md:w-[221px] lg:w-full">
                  {whyUseData &&
                    whyUseData.map(({ advantages, description }, idx) => (
                      <li
                        key={idx}
                        className={styles.advantages_item}
                        aria-labelledby={`advantage-heading-${idx}`}
                        aria-describedby={`advantage-description-${idx}`}
                      >
                        <p
                          id={`advantage-heading-${idx}`}
                          className="text-right text-14 font-normal leading-1.43 mb-2 
                    md:text-16 md:leading-1.25 lg:ml-auto lg:text-18 lg:leading-[1.33]"
                        >
                          {advantages}
                        </p>
                        <p
                          id={`advantage-description-${idx}`}
                          className="text-right text-12 font-extralight leading-1.6 mb-4 md:mb-6 
                        lg:w-[290px] lg:ml-6 lg:text-left lg:leading-2"
                        >
                          {description}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block md:pt-[92px] lg:pt-0 lg:w-[604px]">
              <p
                className="md:w-[221px] md:text-justify md:text-13 
              md:font-extralight md:leading-[1.54] md:mb-8 lg:w-[234px] lg:mb-[14px] lg:text-18 
              lg:leading-[1.33]"
              >
                Don&apos;t miss your opportunity! Fill out the form right now
                and join our team!
              </p>

              <ChooseUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={`${'ui-section'} ${styles.section_bg} md:hidden`}>
      <div className="ui-container">
        <p className="mb-6 w-180 text-14 font-extralight leading-1.43 ml-auto">
          Don&apos;t miss your opportunity! Fill out the form right now and join
          our team!
        </p>
        <ChooseUsForm />
      </div>
    </div>
  </section>
);
