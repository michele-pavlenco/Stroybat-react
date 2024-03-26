import React from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
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
				modules={[Navigation, Pagination, Autoplay, A11y]}
				spaceBetween={20}
				slidesPerView={4}
				loop={true}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
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
