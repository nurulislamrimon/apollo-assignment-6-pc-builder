import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./Carousel.module.css";

const CarouselComponent = () => (
  <Carousel autoPlay={true} infiniteLoop={true}>
    <div className={style.container}>
      <Image
        src="/carousel/carousel2.jpg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className={style.container}>
      <Image
        src="/carousel/carousel1.jpg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className={style.container}>
      <Image
        src="/carousel/carousel3.jpg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  </Carousel>
);
export default CarouselComponent;
