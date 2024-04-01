import React from "react";
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";
import {Navigation} from "./navigation";
import "../App";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Project = () => {
	let params = useParams();

	return (

		<div>
			<Navigation/>
			{JsonData.Gallery.filter((d) => d.title === params.projectId).map((d) => (
				<div
					className="project"
					key={d.title}>
					<header
						id="header"
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

					{/* 	<div className="slideshowimages">
						{d.images &&
							d.images.map((image, index) => (
								<div className="card">
								<img
									key={index}
									src={image.url}
									alt={`${d.title} - ${index + 1}`}
								/>
								</div>
							))}
					</div>
				*/}
					<div>
						<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
							{d.images &&
								d.images.map((image, index) => (
									<SwiperSlide>
										<img
											key={index}
											src={image.url}
											alt={`${d.title} - ${index + 1}`}
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			))}
		</div>
	);
};

export default Project;
