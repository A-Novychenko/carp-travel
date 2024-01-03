'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, A11y } from 'swiper/modules';

import { servicesData, servicesLinks } from '@/data/servicesData';

import 'swiper/css';
import 'swiper/css/effect-fade';

import styles from './Services.module.scss';

export const Services = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  const handleLinkClick = (idx: number): void => {
    setActiveSlide(idx);

    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(idx);
    }
  };

  return (
    <section id="services" className="ui-section py-0">
      <Swiper
        modules={[EffectFade, A11y]}
        slidesPerView={1}
        initialSlide={0}
        effect={'fade'}
        onSlideChange={swiper => {
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {servicesData &&
          servicesData.map(
            ({ img, bgImg, title, slogan, description }, idx) => {
              return (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <div
                      className="w-full h-full bg-cover bg-bottom -z-10"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${idx + 1} of ${servicesData.length}`}
                      style={{
                        backgroundImage: `linear-gradient( rgba(2, 15, 8, 0.50) 0%,
                     rgba(2, 15, 8, 0.50) 100%), url(${bgImg})`,
                        backgroundPositionX: '80%',
                      }}
                    >
                      <div className="ui-container">
                        <div className="py-14 md:py-16 lg:py-20">
                          <div className="lg:p-6">
                            <div className="mb-4 md:flex md:mb-9 lg:mb-5">
                              <h2 className="ui-title leading-[1.4] md:leading-[1.2] mb-6 md:mb-0 md:mr-[170px]">
                                WE&nbsp;
                                <span className="ui-title-accent inline-block leading-[1.4] md:leading-[1.2]">
                                  OFFER
                                </span>
                              </h2>
                              <p
                                className="h-min text-43 font-thin text-right leading-[1.2] md:text-justify
                         md:text-67 md:leading-[1.16] lg:text-98 lg:leading-normal"
                              >
                                {`0${activeSlide + 1}/`}
                                <span className="inline-block text-count-slide-dark text-left">
                                  {servicesData
                                    ? `${servicesData.length > 9 ? '' : 0}${
                                        servicesData.length
                                      }`
                                    : 'XX'}
                                </span>
                              </p>
                            </div>

                            <div className="md:flex md:gap-5 md:items-center lg:items-stretch">
                              <div
                                className="h-[213px] mb-[12px] sm:w-[440px] sm:h-[311px]
                               md:w-[463px] md:h-[370px] md:mb-0 lg:w-[607px] lg:h-[429px] lg:m-0"
                              >
                                <Image
                                  src={img}
                                  alt={title}
                                  width={607}
                                  height={429}
                                  className="block w-full h-full sm:w-full sm:h-full object-cover"
                                  sizes="(min-width: 1440px)607px, (min-width: 768px) 463px, 100vw"
                                />
                              </div>

                              <div className="md:w-[221px] lg:w-[605px]">
                                <strong className={styles.slogan_mob}>
                                  {slogan}
                                </strong>

                                <div className="flex flex-col justify-between h-[320px] md:h-[376px] md:justify-start lg:h-[429px] lg:flex-row lg:justify-normal">
                                  <ul className="flex flex-col gap-4 md:mb-[25px] lg:w-[252px] lg:gap-6">
                                    {servicesLinks &&
                                      servicesLinks.map((link, linkIdx) => (
                                        <li
                                          key={linkIdx}
                                          className="lg:relative leading-0.85 md:leading-[0.82] lg:leading-[0.86]"
                                        >
                                          <button
                                            className={
                                              activeSlide === linkIdx
                                                ? styles.active_btn
                                                : styles.btn
                                            }
                                            type="button"
                                            tabIndex={isActive ? 0 : -1}
                                            onClick={() => {
                                              handleLinkClick(linkIdx);
                                            }}
                                          >
                                            {link.length > 15 ? (
                                              <span className="inline-block w-min text-left max-w-[185px] md:max-w-none">
                                                {link}
                                              </span>
                                            ) : (
                                              <span>{link}</span>
                                            )}
                                          </button>

                                          <strong
                                            className={styles.slogan_desktop}
                                          >
                                            {activeSlide === linkIdx
                                              ? slogan
                                              : ''}
                                          </strong>
                                        </li>
                                      ))}
                                  </ul>

                                  <div className="md:flex md:flex-col md:justify-between md:h-full lg:w-[293px] lg:ml-[60px] lg:justify-end">
                                    <strong className={styles.slogan_tab}>
                                      {slogan}
                                    </strong>
                                    <p
                                      className="text-14 font-extralight leading-1.43 md:text-justify
                             md:text-13 md:leading-[1.54] lg:text-18 lg:leading-[1.33]"
                                    >
                                      {description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            }
          )}
      </Swiper>
    </section>
  );
};
