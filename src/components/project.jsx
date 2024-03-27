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
                        <img
                            src={d.productImage}
                            alt={d.title}
                        />
                        <h1>{d.title}</h1>
                        <p>{d.description}</p>

                        {d.images && d.images.map((image, index) => (
                            <img key={index} src={image.url} alt={`${d.title} - ${index + 1}`}/>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default Project;
