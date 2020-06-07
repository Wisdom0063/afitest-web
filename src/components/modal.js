import React from "react"
export default function Modal({children, id, label, modalWidth}){
  let width = modalWidth?modalWidth:null
  console.log(width)
    return (
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby= {label} aria-hidden="true" >
  <div className="modal-dialog" role="document" >
    <div className="modal-content" style={{width : `${width}px`}}>

      <div className="modal-body" >

{children}

      </div>
      </div>
      </div>
      </div>

    )

}