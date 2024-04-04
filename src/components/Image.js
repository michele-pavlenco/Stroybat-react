import React from "react";

const Image = ({ title, largeImage, smallImage }) => {
	return (
		<div className="portfolio-item">
			<div className="hover-bg">
				{" "}
				<a
					href={`/project/${title}`}
					title={title}
					data-lightbox-gallery="gallery1">
					<div className="hover-text">
						<h4>{title}</h4>
					</div>
					<img
						src={smallImage}
						className="img-responsive"
						alt={title}
					/>{" "}
				</a>{" "}
			</div>
		</div>
	);
};

export default Image;