// import React from "react";
//
// export const Testimonials = (props) => {
//   return (
//     <div id="testimonials">
//       <div className="container">
//         <div className="section-title text-center">
//           <h2>NOS CLIENTS</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   <div className="testimonial">
//                     <div className="testimonial-image">
//                       {" "}
//                       <img src={d.img} alt="" />{" "}
//                     </div>
//                     {/*<div className="testimonial-content">*/}
//                     {/*  <p>"{d.text}"</p>*/}
//                     {/*  <div className="testimonial-meta"> - {d.name} </div>*/}
//                     {/*</div>*/}
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

export const Testimonials = (props) => {
    return (
        <div id="testimonials">
                <div className="section-title text-center">
                    <h2>NOS CLIENTS</h2>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{ delay: 1000 }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {props.data
                        ? props.data.map((d, i) => (
                            <SwiperSlide key={`${d.name}-${i}`} className="">
                                <img src={d.img} alt="" />
                            </SwiperSlide>
                        ))
                        : "loading"}
                </Swiper>
        </div>
    );
};
