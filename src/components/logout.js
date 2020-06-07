import React from "react"
import {
    useHistory  } from "react-router-dom";

export default function Logout(){
    const history = useHistory()
    return <div>
                        <button type="button" className="btn btn-outline-secondary btn-sm"    onClick={()=>{
                            localStorage.removeItem("user")
                            setTimeout(()=> history.push("/login"), 300)
                        }}>Log Out</button>

    </div>
}