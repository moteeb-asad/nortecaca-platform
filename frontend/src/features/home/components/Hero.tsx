"use client";

import Slider from "react-slick";
import Button from "@/src/components/ui/Button";
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
                className="block h-[500px] w-full object-cover min-[841px]:h-auto min-[841px]:object-fill max-[600px]:h-[480px]"
              />

              <div className="absolute top-0 h-full w-full">
                <div className="mx-auto grid h-full max-w-[1320px] grid-cols-12 items-center text-white px-4 py-[15px] sm:px-6 lg:px-8 xl:px-0">
                  <div className="col-span-12 md:col-span-8 max-[600px]:px-0 max-[600px]:text-center">
                    <span>20 August</span>
                    <h1 className="mb-[8px] max-w-[250px] text-[32px] font-semibold leading-[39px] max-[600px]:mx-auto sm:max-w-[360px] sm:text-[48px] sm:leading-[55px] lg:ml-[-5px] lg:max-w-[400px] lg:text-[64px] lg:leading-[70px]">
                      Release of 300 Ducks
                    </h1>

                    <div className="max-w-[500px] min-[601px]:max-[840px]:max-w-[400px] max-[600px]:mx-auto max-[600px]:mt-5 max-[600px]:max-w-[380px]">
                      <p>
                        5 Duck release in Montemor-o-Novo with around 15 spots.
                        Reserve your place now!
                      </p>
                      <p>
                        <span className="text-2xl font-semibold">300€</span>{" "}
                        /per spot (3 guns per spot)
                      </p>
                    </div>

                    <Button
                      href="/contact"
                      variant="overlay"
                      className="mt-8 max-[600px]:mx-auto"
                    >
                      Book hunt
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute inset-y-0 right-0 hidden w-[170px] bg-[rgba(206,206,206,0.67)] min-[601px]:flex min-[601px]:items-center min-[601px]:justify-center max-[840px]:w-[140px] max-[600px]:hidden">
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
