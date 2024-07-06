import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Logo from "../img/onlyLogo.png";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    console.log(name, email, message);
    try {
      const result = await emailjs.sendForm(
        "service_qsa3swb",
        "template_3omzl34",
        e.target,
        "qrG-omw3Xyx432NGV"
      );
      console.log(result.text);
      clearState();
    } catch (error) {
      console.log(error.text);
    }
  };

  const handleRecaptcha = async () => {
    if (window.grecaptcha) {
      const token = await window.grecaptcha.enterprise.execute(
        "6LeA9QkqAAAAAGvFA2Pu2zvqnxXUWP_iDNr2FLH8",
        { action: "submit" }
      );
      setRecaptchaToken(token);
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <div className="myflex">
                  <img src={Logo} alt="Logo" className="" />
                  <h2> Entrer en contact</h2>
                </div>
                <p>
                  Veuillez remplir le formulaire ci-dessous pour nous envoyer un
                  e-mail et nous le ferons je vous répondrai dans les plus brefs
                  délais.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="reply_to"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="plicy-privacy">
                  <input required type="checkbox" />{" "}
                  <p>
                    J'ai lu la{" "}
                    <Link to="/policy/#policy">
                      politique de confidentialité
                    </Link>{" "}
                    et j'accepte le traitement de mes données personnelles
                  </p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  onClick={handleRecaptcha}
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informations de contact</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>
                <a
                  href="https://www.google.com/maps/dir/45.0151164,7.6501508/R%C3%A9sidence+Les+M%C3%BBriers,+90+Av.+de+Bonneuil,+94210+Saint-Maur-des-Foss%C3%A9s,+Francia/@46.777085,-0.3032372,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47e60c614a2109ff:0xd11aaca14fdfb383!2m2!1d2.5014569!2d48.7886968?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.data ? props.data.address : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Téléphone
                </span>{" "}
                <a href="tel:+4733378901" target="_blank" rel="noreferrer">
                  {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href="mailto:contact@stroybat.fr" target="_blank " rel="noreferrer">
                  {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
