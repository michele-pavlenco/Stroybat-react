import Image from "./Image";
import React from "react";

const Gallery = (props) => {
	return (
		<div
			id="portfolio"
			className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Gallery</h2>
					<p>
						Projets récents : façades en bardage bois, vitrages modernes, etc. <br /> Voir les réalisations pour juger de la qualité de notre travail.
					</p>
				</div>
				<div className="row">
					<div className="portfolio-items">
						{props.data
							? props.data.map((d, i) => (
								<div
									key={`${d.title}-${i}`}
									className="col-sm-6 col-md-4 col-lg-4">
									<Image
										title={d.title}
										largeImage={d.largeImage}
										smallImage={d.productImage}
									/>
								</div>
							))
							: "Loading..."}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
