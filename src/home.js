
import React from "react"
import FinanceHome from "./finance-home"
import LawyerHome from "./lawyer-home"
export default function Home(){
  let user =JSON.parse(localStorage.getItem("user"))
  let role = user.role
  return (
    <div>
      {role=="FINANCE"?<FinanceHome/>:role=="LAWYER"?<LawyerHome/>:<div>error</div>}
    </div>
  )
}