import { useSwiper } from 'swiper/react';

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-[17px] right-[37px] z-50 lg:right-[231px] lg:-bottom-0">
      <button
        className="text-33 font-thin leading-normal link-transition"
        onClick={() => swiper.slideNext()}
      >
        NEXT
      </button>
    </div>
  );
};
