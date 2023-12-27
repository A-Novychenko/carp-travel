"use client";

import Image from "next/image";
import {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, A11y} from "swiper/modules";

import {servicesData, servicesLinks} from "@/data/servicesData";

import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./Services.module.scss";

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
        effect={"fade"}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {servicesData &&
          servicesData.map(({img, bgImg, title, slogan, description}, idx) => {
            return (
              <SwiperSlide key={title}>
                <div
                  className="w-full h-full bg-cover bg-bottom -z-10"
                  style={{
                    backgroundImage: `linear-gradient( rgba(2, 15, 8, 0.50) 0%, rgba(2, 15, 8, 0.50) 100%), url(${bgImg})`,
                    backgroundPositionX: "80%",
                  }}
                >
                  <div className="ui-container">
                    <div className="py-14 md:py-16">
                      <div className="md:flex md:pb-9">
                        <h2 className="ui-title md:mr-[170px] md:pb-0">
                          WE <span className="ui-title-accent">OFFER</span>
                        </h2>
                        <p className="text-43 font-thin text-right pb-5 md:text-justify md:text-67 md:leading-[1.16] md:pb-0">
                          {`0${activeSlide + 1}/`}
                          <span className="text-count-slide-dark text-left">
                            05
                          </span>
                        </p>
                      </div>

                      <div className="md:flex md:gap-5 md:items-center">
                        <div className="w-280 h-[200px] pb-4 mx-auto sm:w-[440px] sm:h-[380px] md:w-[464px] md:h-[404px] md:pb-0">
                          <Image
                            src={img}
                            alt={title}
                            width={280}
                            height={200}
                            className="block w-full h-full object-cover"
                          />
                        </div>

                        <div className="md:w-[220px]">
                          <strong className={styles.slogan_mob}>
                            {slogan}
                          </strong>

                          <div className="flex flex-col justify-between h-[320px] md:h-full md:min-h-[420px]">
                            <ul className="flex flex-col gap-4 pb-8">
                              {servicesLinks &&
                                servicesLinks.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <button
                                      className={
                                        activeSlide === linkIdx
                                          ? styles.active_btn
                                          : styles.btn
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleLinkClick(linkIdx);
                                      }}
                                    >
                                      {link}
                                    </button>
                                  </li>
                                ))}
                            </ul>
                            <strong className={styles.slogan}>{slogan}</strong>
                            <p className="text-14 font-extralight leading-1.43 md:text-justify md:text-13 md:leading-[1.54]">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
