import { SetStateAction, useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./Slider.css";

export default function Slider() {
  const slides = [
    {
      url: "https://vestnikpfo.ru/upload/medialibrary/6e2/r1ctf8hs34mg1slj7rv1tkbmxjacspk1.jpg",
    },
    {
      url: "https://cdn.easyweek.io/stc-cgi/image/1000x400/f/86518/5341x3561/5d333eebd8/shutterstock_1917257933.jpg",
    },
    {
      url: "https://skoromed-klinika.ru/wp-content/uploads/2021/11/uzi-beremenn.jpg",
    },
    {
      url: "https://olimpiyamed.ru/images/dermatologiya.jpg",
    },
    {
      url: "https://www.secondwavemedia.com/midland/galleries/nurses-nosign-mymichiganhealth.jpg",
    },
    {
      url: "https://www.svsu.edu/media/00landingpages/mmh_banner_mobile_v2.jpg",
    },
    {
      url: "https://i0.wp.com/www.usa.edu/wp-content/uploads/2021/10/three-major-issues.gif?resize=1476%2C1170&ssl=1",
    },
    {
      url: "https://dent.spb.ru/upload/iblock/e1d/e1d21fc172839767e43c28a16705e4e8.jpg",
    },
    {
      url: "https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/what-is-health-insurance-and-how-can-it-help-you.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    const newIndex = current === slides.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
  };

  
  useEffect(() => {
    const slideInterval = setInterval(next, 3000);

   
    return () => clearInterval(slideInterval);
  }, [current]);

  const prev = () => {
    const isFirst = current === 0;
    const newIndex = isFirst ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const dotGo = (slideIndex: SetStateAction<number>) => {
    setCurrent(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-3 relative group">
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prev} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={next} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => dotGo(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              style={{ color: current === slideIndex ? "#164863" : "#ccc" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
