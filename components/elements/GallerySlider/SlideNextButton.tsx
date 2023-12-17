import {useSwiper} from "swiper/react";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
};
