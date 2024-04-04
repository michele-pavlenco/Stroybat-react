import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Link } from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    
    emailjs
      .sendForm("service_qsa3swb", "template_3omzl34", e.target, "qrG-omw3Xyx432NGV")
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
                <h2>Entrer en contact</h2>
                <p>
                  Veuillez remplir le formulaire ci-dessous pour nous envoyer un e-mail et nous le ferons
                  je vous répondrai dans les plus brefs délais.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                          type="text"
                          id="name"
                          name="from_name" // Modificato da user_name a from_name
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
                          name="reply_to" // Modificato da user_email a reply_to
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
                <input required type="checkbox"/> <p>J'ai lu la <Link to="/policy">politique de confidentialité</Link> et j'accepte le traitement de mes données personnelles</p>

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
          {/*<div className="col-md-12">*/}
          {/*  <div className="row">*/}
          {/*    <div className="social">*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.facebook : "/"}>*/}
          {/*            <i className="fa fa-facebook"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.twitter : "/"}>*/}
          {/*            <i className="fa fa-twitter"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.youtube : "/"}>*/}
          {/*            <i className="fa fa-youtube"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      {/*<div id="footer">*/}
      {/*  <div className="container text-center">*/}
      {/*    <p>*/}
      {/*      &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}*/}
      {/*      <a href="http://www.templatewire.com" rel="nofollow">*/}
      {/*        TemplateWire*/}
      {/*      </a>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
