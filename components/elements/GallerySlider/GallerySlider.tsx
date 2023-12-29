'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCreative } from 'swiper/modules';

import { SlideNextButton } from './SlideNextButton';
import { SlidePrevButton } from './SlidePrevButton';

import { galleryData } from '@/data/galleryData';

import 'swiper/css';
import 'swiper/css/effect-creative';

export const GallerySlider = () => (
  <Swiper
    modules={[A11y, EffectCreative]}
    slidesPerView={1.5}
    loop
    centeredSlides
    speed={600}
    effect={'creative'}
    a11y={{ enabled: true }}
    style={{ position: 'relative' }}
    grabCursor
    breakpoints={{
      0: {
        enabled: false,
        slidesPerView: -1,
      },
      768: {
        enabled: true,
        spaceBetween: 146,
        width: 703,
        height: 294,
        creativeEffect: {
          limitProgress: 1,
          prev: {
            scale: 0.29,
            translate: ['-69.3%', 0, 0],
          },
          next: {
            scale: 0.29,
            translate: ['69.3%', 0, 0],
          },
        },
      },
      1440: {
        spaceBetween: 650,
        width: 1280,
        height: 450,
        creativeEffect: {
          limitProgress: 1,
          prev: {
            scale: 0.52,
            translate: ['-76%', 0, 0],
          },
          next: {
            scale: 0.52,
            translate: ['76%', 0, 0],
          },
        },
      },
    }}
  >
    {galleryData &&
      [...galleryData, ...galleryData].map(({ path, title }, idx) => (
        <SwiperSlide key={idx}>
          {({ isActive }) => (
            <div
              className={`w-[415px] h-[294px] md:mx-auto lg:w-[606px] lg:h-[432px] ${
                !isActive
                  ? 'md:relative md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-full md:after:bg-bgc75 md:shadow-img-gallery'
                  : ''
              }`}
            >
              <Image
                src={path}
                alt={title}
                width={280}
                height={187}
                className="block w-full h-full object-cover"
              />
            </div>
          )}
        </SwiperSlide>
      ))}

    <SlidePrevButton />
    <SlideNextButton />
  </Swiper>
);
