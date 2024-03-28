import React from "react";
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";
const Project = () => {
	let params = useParams();

	return (
		<div>
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
					{/* <img
						className="project-hero-img"
						src={d.productImage}
						alt={d.title}
					/> */}
					<p>{d.description}</p>

					<div className="slideshowimages">
						{d.images &&
							d.images.map((image, index) => (
								<img
									key={index}
									src={image.url}
									alt={`${d.title} - ${index + 1}`}
								/>
							))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Project;
