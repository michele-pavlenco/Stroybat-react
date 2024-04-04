import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import JsonData from "../data/data.json";
import "../data/data.json";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
	let params = useParams();
	return (
		<div>
			{JsonData.Gallery.filter((d) => d.title === params.projectId).map((d) => (
				<div
					className="project"
					key={d.title}>
					<header
						id="project-header"
						style={{ width: "100%" }}>
						<div
							className="intro"
							style={{
								backgroundImage: `url(${d.productImage})`,
								backgroundPosition: "center center",
								backgroundRepeat: "no-repeat",
							}}>
							<div className="overlay">
								<div className="col-md-8 col-md-offset-2 intro-text">
									<h1>{d.title}</h1>
								</div>
							</div>
						</div>
					</header>

					<div className="project-description">
						<div className="container">
							<p>{d.description}</p>
						</div>
					</div>
					<Swiper
						pagination={true}
						modules={[Pagination]}
						className="mySwiper"
						style={{
							"--swiper-pagination-color": "#B50D04",
						}}>
						{d.images &&
							d.images.map((image, index) => (
								<SwiperSlide key={`image-${index}`}>
									<img
										key={index}
										src={image.url}
										alt={`${d.title} - ${index + 1}`}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			))}
		</div>
	);
};

export default Project;
