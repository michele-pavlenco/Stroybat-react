import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Testimonials = (props) => {
	return (
		<div id="testimonials">
			<div className="section-title text-center">
				<h2>NOS CLIENTS</h2>
			</div>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={20}
				slidesPerView={4}
				loop={true}
				freeMode={true}
				autoplay={{ delay: 0, disableOnInteraction: false }}
				speed={3000}
				allowTouchMove={false}
				style={{
					maxHeight: "200px",
				}}>
				{props.data
					? props.data.map((d, i) => (
							<SwiperSlide
								key={`${d.name}-${i}`}
								className="">
								<img
									src={d.img}
									alt=""
								/>
							</SwiperSlide>
					  ))
					: "loading"}
			</Swiper>
		</div>
	);
};

export default Testimonials;
