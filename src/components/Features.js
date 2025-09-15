import React from "react";

const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>CARACTÉRISTIQUES</h2>
        </div>
        <div className="row">
          {/* {props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.title}-${i}`}
									className="col-xs-6 col-md-3">
									{" "}
									<i className={d.icon}></i>
									<h3>{d.title}</h3>
									<p>{d.text}</p>
								</div>
						  ))
						: "Loading..."} */}

          <p className="features-text">
            Ce qui distingue STROYBAT, c’est notre engagement inébranlable envers la qualité, le sérieux et l’innovation. Nous mettons notre passion au service de façades modernes réalisées avec tous types de matériaux, anticipons les défis, proposons des solutions efficaces et livrons des résultats exceptionnels — toujours dans le respect des délais et avec une exécution rigoureuse.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
