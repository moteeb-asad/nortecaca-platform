"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const slideCount = 5;
  const settings = {
    className: "hero-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="hero-slider-wrap relative overflow-x-hidden">
      <Slider {...settings}>
        {[...Array(slideCount)].map((_, index) => (
          <div key={index}>
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/banner-img.png"
                alt="Banner"
                className="block w-full"
              />

              <div className="absolute top-0 h-full w-full">
                <div className="mx-auto grid h-full max-w-7xl grid-cols-12 items-center px-4 text-white sm:px-6 lg:px-8">
                  <div className="col-span-12 md:col-span-8">
                    <span>20 August</span>
                    <h1 className="text-4xl font-semibold leading-tight md:text-[80px] md:leading-[95.52px] ml-[-5px] mb-[8px]">
                      Release of 300 Ducks
                    </h1>

                    <div className="max-w-[500px] ">
                      <p className="mb-[16px]">
                        Duck release in Montemor-o-Novo with around 15 spots.
                        Reserve your place now!
                      </p>
                      <p className="mb-[16px]">
                        <span className="text-2xl font-semibold">300€</span>{" "}
                        /per spot (3 guns per spot)
                      </p>
                    </div>

                    <div>
                      <a
                        href="/contact"
                        className="mt-8 block w-fit rounded-md bg-[#DF4921] px-[85px] py-[10px] font-semibold text-white no-underline transition-colors hover:bg-white hover:text-[#DF4921]"
                      >
                        Book hunt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute inset-y-0 right-0 hidden w-[170px] bg-[rgba(206,206,206,0.67)] md:flex md:items-center md:justify-center">
        <ul className="m-0 flex w-fit list-none flex-col items-center gap-[18px] p-0">
          <li className="text-center">
            <a href="#" aria-label="Instagram">
              <img src="/assets/images/insta.png" alt="Instagram" />
            </a>
          </li>
          <li className="text-center">
            <a href="#" aria-label="YouTube">
              <img src="/assets/images/youtube.png" alt="YouTube" />
            </a>
          </li>
          <li className="text-center">
            <a href="#" aria-label="Twitter">
              <img src="/assets/images/twitter.png" alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
