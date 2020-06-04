import React, {useState} from "react"
export default function addProject({onSubmit}){
    const [name, setName] = useState()
    function handleChange(e){
        setName(e.target.value)

    }
    return (
        <div>
        <div className="form-group col-md-12 d-flex justify-content-center">
     <h4>Add New Project</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{width:"400px"}} >
        <div className="form-group col-md-12">
          <div className="input-group">
              {/* <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}/></span>
              </div> */}
              <input  type="text"className="form-control" placeholder="Name" value={name} aria-label="Name" aria-describedby="basic-addon1" onChange={(e)=>handleChange(e)}/>
          </div>
      </div>
  </div>
  </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-info" onClick={()=>onSubmit(name)}>Submit</button>
        </div>
      </div>
    )
}