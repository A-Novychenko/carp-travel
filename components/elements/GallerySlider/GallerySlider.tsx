"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y} from "swiper/modules";

import {SlideNextButton} from "./SlideNextButton";
import {SlidePrevButton} from "./SlidePrevButton";
import {galleryData} from "@/data/galleryData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const GallerySlider = () => (
  <>
    <Swiper modules={[A11y]} slidesPerView={1} width={1000} loop>
      {galleryData &&
        galleryData.map(({path, title}, idx) => (
          <SwiperSlide key={idx}>
            <Image src={path} alt={title} width={683} height={437} />
            <SlidePrevButton />
            <SlideNextButton />
          </SwiperSlide>
        ))}
    </Swiper>
  </>
);
