"use client";

import { useEffect } from "react";
// import $ from "jquery";
export default function Hero() {
  // const cardCount = 8;
  const slideCount = 5;

  // useEffect(() => {
  //   // setFixedHeader(true);
  //   // $(".banner-slider").not(".slick-initialized").slick({
  //   //   slidesToShow: 1,
  //   //   slidesToScroll: 1,
  //   //   arrows: false,
  //   //   dots: true,
  //   //   fade: true,
  //   // });
  // }, []);
  return (
    <>
      <div className="banner-slider-sec">
        <div className="inner-wrap">
          <div className="banner-slider">
            {[...Array(slideCount)].map((_, index) => (
              <div className="single-item" key={index}>
                <img
                  src="/assets/images/banner-img.png"
                  className="slideImage"
                />
                <div className="container">
                  <div className="row content-row">
                    <div className="col-lg-8 content-col">
                      <span>20 de Agosto</span>
                      <h1 className="main-heading">Largada de 300 Patos</h1>
                      <div className="main-desc">
                        <p>
                          Largada de patos em Montermor-o-novo com cerca de 15
                          portas. Reserva já o teu lugar!
                        </p>
                        <p>
                          <span>300€</span> /cada porta (3 armas por porta)
                        </p>
                      </div>
                      <div className="btn-wrap">
                        <a href="/contactar">Reservar caçada</a>
                      </div>
                    </div>
                    <div className="col-lg-4 blank-col">.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="social-icons-wrap">
            <ul>
              <li>
                <a>
                  <img src="/assets/images/insta.png" />
                </a>
              </li>
              <li>
                <a>
                  <img src="/assets/images/youtube.png" />
                </a>
              </li>
              <li>
                <a>
                  <img src="/assets/images/twitter.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
