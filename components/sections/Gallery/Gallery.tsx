import Image from 'next/image';

import { GallerySlider } from '@/components/elements/GallerySlider/GallerySlider';

import { galleryData } from '@/data/galleryData';

import styles from './Gallery.module.scss';

export const Gallery = () => (
  <section id="gallery" className={`${'ui-section'} ${styles.section_bg}`}>
    <div className="ui-container">
      <div className="lg:py-6">
        <h2 className="ui-title md:mb-[72px] md:text-center lg:mb-6 lg:text-left">
          OUR <span className="ui-title-accent">GALLERY</span>
        </h2>

        <ul className="flex flex-col gap-6 md:hidden">
          {galleryData &&
            galleryData.map(({ pathMob, title }, idx) => (
              <li key={idx}>
                <div className="w-full">
                  <Image
                    src={pathMob}
                    alt={title}
                    width={280}
                    height={187}
                    className="block w-full h-auto object-cover"
                  />
                </div>
              </li>
            ))}
        </ul>

        <div className="hidden md:block">
          <GallerySlider />
        </div>
      </div>
    </div>
  </section>
);
