import { SetStateAction, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import './Slider.css';

export default function Slider() {
  const slides = [
    {
      url: "https://www.funnyart.club/uploads/posts/2022-05/1654008355_12-www-funnyart-club-p-kartinki-vrachi-meditsina-krasivo-12.jpg",
    },
    {
      url: "https://www.medisite.fr/files/images/article/9/2/6/5488629/6750759-inline.jpg",
    },
    {
      url: "https://kartinki.pics/uploads/posts/2022-03/1646704830_75-kartinkin-net-p-krasivie-kartinki-stomatologiya-80.jpg",
    },
    {
      url: "https://invaworld.ru/wp-content/uploads/2019/03/43.jpg",
    },
    {
      url: "https://www.shkolazhizni.ru/img/content/i243/243416_or.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () => {
    const isFirst = current === 0;
    const newIndex = isFirst ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const next = () => {
    const isLast = current === slides.length - 1;
    const newIndex = isLast ? 0 : current + 1;
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
            <RxDotFilled style={{color: "#164863"}} />
          </div>
        ))}
      </div>
    </div>
  );
}
