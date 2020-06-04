import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'


function Login(){
    const [time, setTime] = useState(null)
    const controlvalues = [1,1.5,2]
    return <div className="container">
<div className="subContainer" >
    <div className="subContainerInner">



    <div style={{width:"400px"}} >
    <div class="form-group col-md-12 d-flex justify-content-center">
   <h4>Welcome! Login to continue</h4>
    </div>
    <div class="form-group col-md-12">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope}/></span>
            </div>
            <input  type="text"class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
        </div>
    </div>
    <div class="form-group col-md-12">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faKey}/></span>
            </div>
            <input  type="password"class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
        </div>
    </div>
    <div class="form-group col-md-12 d-flex justify-content-center">
    <button type="button" class="btn btn-primary">Submit</button>
    </div>


</div>


    </div>
    </div>
  </div>
}

export default Login