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
            La particularité de notre entreprise de construction dans la
            fourniture de services de construction de façades modernes à partir
            de tous les types de matériaux est notre engagement profond envers
            le sérieux, notre passion pour le travail que nous faisons et notre
            ferme dévouement à la qualité. Nous nous distinguons par notre
            capacité à anticiper les défis potentiels, à identifier des
            solutions efficaces et à fournir des résultats exceptionnels, en
            respectant toujours les délais et en garantissant une exécution
            précise et minutieuse.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
