import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import JsonData from "../data/data.json";
// import "swiper/css";
// import "swiper/css/pagination";

const Project = () => {
	let { projectId } = useParams();
	return (
		<div>
			{JsonData.Gallery.filter((project) => project.title === projectId).map(
				(project) => (
					<div
						className="project"
						key={project.title}>
						<header
							id="project-header"
							style={{ width: "100%" }}>
							<div
								className="intro"
								style={{
									backgroundImage: `url(${project.productImage})`,
									backgroundPosition: "center center",
									backgroundRepeat: "no-repeat",
								}}>
								<div className="overlay">
									<div className="col-md-8 col-md-offset-2 intro-text">
										<h1>{project.title}</h1>
									</div>
								</div>
							</div>
						</header>

						<div className="project-description">
							<div className="container">
								<p>{project.description}</p>
							</div>
						</div>
						<Swiper
							pagination={true}
							modules={[Pagination]}
							className="mySwiper"
							style={{
								"--swiper-pagination-color": "#B50D04",
								width: "100vw",
								height: "70vh",
							}}>
							{project.images.map((image, index) => (
								<SwiperSlide key={`${project.title}-${index}`}>
									<img
										src={image.url}
										style={{
											minHeight: "70vh",
											width: "100%",
											objectFit: "contain",
										}}
										alt={`${project.title} - ${index + 1}`}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)
			)}
		</div>
	);
};

export default Project;
