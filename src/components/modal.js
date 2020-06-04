import React from "react"
export default function Modal({children, id, label}){
    return (
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby= {label} aria-hidden="true" >
  <div className="modal-dialog" role="document" >
    <div className="modal-content" style={{width : "790px"}}>

      <div className="modal-body" >

{children}

      </div>
      </div>
      </div>
      </div>

    )

}