import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import fakeAuth from "./auth/fake-auth"
import {
    useHistory,
    useLocation
  } from "react-router-dom";
  import { instance } from "./utils";
import { ErrorAlert } from "./components";

  


function Login() {

const [password, setPassword] = useState()
const [email, setEmail] = useState()
const [error, setError] = useState(null)


  let history = useHistory();
  let location = useLocation();

  let { from } = { from: { pathname: "/" } };
  let login = (email, password) => {
     return instance.post("/auth/login", {
          email,
          password
        }).then(response=>{
             localStorage.setItem("user", JSON.stringify(response.data.payload))
            setTimeout(()=>window.location.reload(), 300) 
        }    
        ).catch(error=>{
            console.log(error.response)
            setError(error.response.data.error)
            setTimeout(()=>setError(null), 2000)
        }
            )
  };

  useEffect(()=>{
      let user = JSON.parse(localStorage.getItem("user"))
      if(user){
          history.replace("/")
      }
  }, [])
  return (
    <div className="container">

      <div className="subContainer">
        <div className="subContainerInner">
          <div style={{ width: "400px" }}>
            <div className="form-group col-md-12 d-flex justify-content-center">
              <h4>Welcome! Login to continue</h4>
            </div>

            <ErrorAlert error={error}/>

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
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="form-group col-md-12 d-flex justify-content-center">
              <button type="button" className="btn btn-info" onClick={()=>login(email, password)}>
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
