import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import fakeAuth from "./auth/fake-auth"
import {
    useHistory,
    useLocation
  } from "react-router-dom";

function Login() {

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div className="container">
      <div className="subContainer">
        <div className="subContainerInner">
          <div style={{ width: "400px" }}>
            <div className="form-group col-md-12 d-flex justify-content-center">
              <h4>Welcome! Login to continue</h4>
            </div>
            <div className="form-group col-md-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="form-group col-md-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="form-group col-md-12 d-flex justify-content-center">
              <button type="button" className="btn btn-info" onClick={login}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
