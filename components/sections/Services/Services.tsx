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
    <section className="ui-section py-0">
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
                <div className="ui-container">
                  <div className="py-14">
                    <h2 className="ui-title">
                      WE <span className="ui-title-accent">OFFER</span>
                    </h2>
                    <p className="text-43 font-thin text-right pb-5">
                      {`0${activeSlide + 1}/`}
                      <span className="text-count-slide-dark text-left">
                        05
                      </span>
                    </p>

                    <div
                      className="absolute top-0 left-0 w-full h-full bg-cover bg-bottom -z-10"
                      style={{
                        backgroundImage: `linear-gradient( rgba(2, 15, 8, 0.50) 0%, rgba(2, 15, 8, 0.50) 100%), url(${bgImg})`,
                        backgroundPositionX: "80%",
                      }}
                    ></div>
                    <div className="w-280 h-[200px] pb-4 mx-auto sm:w-[440px] sm:h-[380px]">
                      <Image
                        src={img}
                        alt={title}
                        width={280}
                        height={200}
                        className="block w-full h-full object-cover"
                      />
                    </div>

                    <strong className={styles.slogan}>{slogan}</strong>

                    <div className="flex flex-col justify-between h-[320px]">
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

                      <p className="text-14 font-extralight leading-1.43">
                        {description}
                      </p>
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
