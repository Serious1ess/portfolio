import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id:0,
    avatar: AVTR1,
    name: "Ahmet Melki",
    review:
      "I would highly recommend Mahmut Internet Marketing. he's are great to work with. The traffic to our website has increased.",
  },
  {
    id:1,
    avatar: AVTR4,
    name: "Nader Aljarah",
    review:
      "I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation.",
  },
  {
    id:2,
    avatar: AVTR1,
    name: "Enes Muselleti",
    review:
      "With Mahmut’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain.",
  },
  {
    id:3,
    avatar: AVTR4,
    name: "Ayham Shami",
    review:
      "Since having our new website built by Mahmut, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for.",
  },
];
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2 >Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id,avatar, name, review }, index) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avater one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
