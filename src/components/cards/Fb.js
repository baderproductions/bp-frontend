import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Fb extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light ml-5 mr-5 mt-5 mb-0">
          <div className="card-header">
            {t("fb.title")}
            <p>{t("fb.subt")}</p>
          </div>

          <div className="card-body">
            <p className="card-text">
              {t("fb.p1")}
              <a
                id="x"
                href="https://www.youtube.com/channel/UC1UoY_OxSlPOoIhJA-YjLUQ"
              >
                {t("fb.a")}
              </a>
              {t("fb.p2")}
              <br />
              <br />
              {t("fb.p3")}
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Stack:
                <span
                  style={{
                    backgroundColor: "#FF4500	",
                  }}
                  className="badge badge-success"
                >
                  HTML
                </span>
                <span className="badge badge-primary">CSS</span>
                <span
                  style={{ backgroundColor: "#bf4080" }}
                  className="badge badge-dark"
                >
                  Sass
                </span>
                <span
                  style={{ backgroundColor: "gold" }}
                  className="badge badge-warning"
                >
                  Javascript
                </span>
                <span className="badge badge-dark">jQuery</span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://baderproductions.github.io/facebook-sign-up/"
                className="btn-7"
              >
                {t("fb.demo")}
              </a>
              <a
                href="https://github.com/baderproductions/facebook-sign-up"
                className="btn-8"
              >
                {t("fb.source")}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Fb.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Fb);
