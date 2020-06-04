import React from "react"
export default function Invoice({data}){
    return (
        <div >
        <div className="form-group col-md-12 d-flex justify-content-center">
     <h4>Add New Project</h4>
      </div>
      <div className="table-responsive-md" id="invoice">
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Employee ID</th>
        <th scope="col">Number of  <br/> Hours</th>
        <th scope="col">Unit Price</th>
        <th scope="col">Cost</th>
  
      </tr>
    </thead>
    <tbody>
        {data.map((value, i)=>{
return (      <tr key={i}>
    <th scope="row">1</th>
    <td>20</td>
    <td>300</td>
    <td>60000</td>

  </tr>)

        })}
  
    </tbody>
      </table>
  </div>
  <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-info" onClick={()=>$("#invoice").printThis({ 
      debug: false,              
      importCSS: true,             
      importStyle: true,         
      printContainer: true,       
      loadCSS: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", 
      pageTitle: "My Modal",             
      removeInline: false,        
      printDelay: 333,            
      header: null,             
      formValues: true          
  })} >Print</button>
        </div>
      </div> 
    )
}