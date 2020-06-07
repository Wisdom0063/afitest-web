import React from "react"

export default function Lawyers({lawyers, onGenerate}){
    return (
        <div className="table-responsive-md">
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Billable Rate</th>
      <th scope="col">Timetable</th>
    </tr>
  </thead>
  <tbody>
      {lawyers.map((lawyer, i)=>{
         return (    <tr key={i}>
              <th scope="row">{lawyer.id}</th>
         <td>{lawyer.name}</td>
         <td>{lawyer.email}</td>
         <td>{lawyer.rate}</td>
              <td>    <button type="button" className="btn btn-outline-secondary" data-toggle="modal"  onClick={()=>onGenerate(lawyer.id, lawyer.name)}>Generate</button>
        </td>
        </tr>
            )

      })}

  </tbody>
    </table>
</div>
    )
}