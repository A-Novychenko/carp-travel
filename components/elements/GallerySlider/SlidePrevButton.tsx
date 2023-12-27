import {useSwiper} from "swiper/react";

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-[17px] left-[37px] z-50">
      <button
        className="text-33 font-thin leading-normal link-transition"
        onClick={() => swiper.slidePrev()}
      >
        BACK
      </button>
    </div>
  );
};
