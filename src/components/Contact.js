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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_qsa3swb",
        "template_3omzl34",
        e.target,
        "qrG-omw3Xyx432NGV"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
                <button type="submit" className="btn btn-custom btn-lg">
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
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Téléphone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
