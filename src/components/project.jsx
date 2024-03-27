import React from 'react';
import {useParams} from "react-router-dom";
import JsonData from "../data/data.json";
const Project = () => {
    let params = useParams()

    return (
        <div>

            {JsonData.Gallery.map((d, i) => (
                // d.title === params.projecId &&
                    <div key={d.title}>
                        {d.title}
                        {d.description}
                    </div>

            ))}

        </div>
    );
};

export default Project;