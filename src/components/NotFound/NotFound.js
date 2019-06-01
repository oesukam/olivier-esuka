import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <section id="not-found">
    <div className="hero is-fullheight is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            4 <i className="fa fa-ban" /> 4
          </h1>

          <h4 className="title is-4">
            The page you are looking for was not found
          </h4>
        </div>
      </div>
    </div>
  </section>
);

export default NotFound;
