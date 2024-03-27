import React from "react";
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";
const Project = () => {
	let params = useParams();

	return (
		<div>
			{JsonData.Gallery.filter((d) => d.title === params.projectId).map(
				(d, i) => (
					<div key={d.title}>
						<h1>{d.title}</h1>
						<p>{d.description}</p>
						<img
							src={d.largeImage}
							alt=""
						/>
					</div>
				)
			)}
		</div>
	);
};

export default Project;
