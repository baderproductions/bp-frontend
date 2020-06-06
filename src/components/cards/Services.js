import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Services extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div id="stack-card" className="card border-light m-0">
          <div className="card-header">{t("services.title")}</div>
          <div id="stack-body" className="card-body">
            <p id="stack">{t("services.sub1")}</p>
            <a href="https://cloud.google.com/" className="badge badge-danger">
              Google Cloud Computing
            </a>

            <a href="https://azure.microsoft.com/" className="badge badge-dark">
              Microsoft Azure
            </a>

            <a href="https://aws.amazon.com/" className="badge badge-warning">
              Amazon Web Services
            </a>
            <p id="stack2">{t("services.sub2")}</p>
            <a href="https://www.nginx.com/" className="badge badge-success">
              NGINX
            </a>

            <a
              href="https://www.apache.org/"
              style={{ backgroundColor: "#282661" }}
              className="badge badge-success"
            >
              Apache
            </a>

            <a href="http://supervisord.org/" className="badge badge-primary">
              Supervisor
            </a>

            <a
              href="https://gunicorn.org/"
              style={{ backgroundColor: "#1D692D" }}
              className="badge badge-success"
            >
              Gunicorn
            </a>
          </div>
        </div>
      </>
    );
  }
}

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Services);
