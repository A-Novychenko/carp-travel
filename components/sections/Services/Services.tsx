"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y} from "swiper/modules";

import {servicesData, servicesLinks} from "@/data/servicesData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const Services = () => (
  <section>
    <div>
      <h2>WE OFFER</h2>
      <p>01/05</p>
    </div>

    <Swiper modules={[A11y]} slidesPerView={1} width={1000} loop>
      {servicesData &&
        servicesData.map(({img, title, slogan, description}) => (
          <SwiperSlide key={title}>
            <div style={{width: 1000}}>
              {/* <Image src="#" alt="Test" /> */}
              <p>Image</p>
            </div>
            <ul>
              {servicesLinks &&
                servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <button type="button">{link}</button>
                  </li>
                ))}
            </ul>
            <div>
              <strong>{slogan}</strong>
              <p>{description}</p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  </section>
);
