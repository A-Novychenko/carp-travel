import {GallerySlider} from "@/components/elements/GallerySlider/GallerySlider";

import {galleryData} from "@/data/galleryData";

import styles from "./Gallery.module.scss";
import Image from "next/image";

export const Gallery = () => (
  <section id="gallery" className={`${"ui-section"} ${styles.section_bg}`}>
    <div className="ui-container">
      <h2 className="ui-title">
        OUR <span className="ui-title-accent">GALLERY</span>
      </h2>
      <ul className="block md:hidden">
        {galleryData &&
          galleryData.map(({path, title}, idx) => (
            <li key={idx} className="pb-6 last:pb-0">
              <Image src={path} alt={title} width={280} height={187}></Image>
            </li>
          ))}
      </ul>
      <div className="hidden md:block">
        <GallerySlider />
      </div>
    </div>
  </section>
);
