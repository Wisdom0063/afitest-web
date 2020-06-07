import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import ErrorAlert from "./error-alert"
export default function AddLawyer({onSubmit, error}){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [rate, setRate] = useState()

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleRateChange(e){
        setRate(parseFloat(e.target.value))
    }



    return (
        <div>
        <div className="form-group col-md-12 d-flex justify-content-center">
     <h4>Add New Lawyer</h4>
      </div>
      <ErrorAlert error={error} />
      <div className="d-flex justify-content-center mmodal">
        <div style={{width:"400px"}} >
        <div className="form-group col-md-12">
          <div className="input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}/></span>
              </div>
              <input  type="text"className="form-control" placeholder="Name" aria-label="Name" onChange={(e)=>handleNameChange(e)} aria-describedby="basic-addon1"/>
          </div>
      </div>
      <div className="form-group col-md-12">
          <div className="input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope}/></span>
              </div>
              <input  type="text"className="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>handleEmailChange(e)}  aria-describedby="basic-addon1"/>
          </div>
      </div>
      <div className="form-group col-md-12">
          <div className="input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faDollarSign}/></span>
              </div>
              <input  type="text"className="form-control" placeholder="Billable Rate" aria-label="Billable Rate" onChange={(e)=>handleRateChange(e)}  aria-describedby="basic-addon1"/>
          </div>
      </div>
  </div>
  </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-info" onClick={()=>onSubmit(name, email, rate)} >Submit</button>
        </div>
      </div>
    )
}