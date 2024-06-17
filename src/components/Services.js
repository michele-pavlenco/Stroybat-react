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
            Nous proposons une large gamme de services spécialisés en façade,
            notamment le conseil, la conception, l'installation, la maintenance
            et les réparations. Nous nous engageons à garantir des solutions sur
            mesure et de haute qualité pour chaque projet.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            {" "}
           <GiModernCity/>
            <div className="service-desc">
              <h3>Facades Modernes</h3>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <GiBrickWall/>
            <div className="service-desc">
              <h3>Bardage</h3>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
			<BsBuildings/>
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
