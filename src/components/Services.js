import React from "react";
import { GiModernCity } from "react-icons/gi";
import { GiBrickWall } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";

const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>NOS SERVICES</h2>
          <p>
            Nous offrons une gamme complète de services pour façades, incluant : conseil personnalisé, conception sur mesure, installation professionnelle, entretien et réparation. Tous nos projets bénéficient d’une attention particulière à la durabilité, à l’esthétique et à la performance — afin de garantir un résultat au-delà des attentes de nos clients.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            {" "}
            <GiModernCity />
            <div className="service-desc">
              <h3>Facades Modernes</h3>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <GiBrickWall />
            <div className="service-desc">
              <h3>Bardage</h3>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <BsBuildings />
            <div className="service-desc">
              <h3>Vitrage</h3>
            </div>
          </div>
        </div>
        {/* <div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									className="col-md-4">
									{" "}
									<i className={d.icon}></i>
									<div className="service-desc">
										<h3>{d.name}</h3>

									</div>
								</div>
						  ))
						: "loading"}
				</div> */}
      </div>
    </div>
  );
};

export default Services;
