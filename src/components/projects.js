/*
 * @Author: Wisdom Kwarteng 
 * @Date: 2020-06-04 16:14:52 
 * @Last Modified by: Wisdom Kwarteng
 * @Last Modified time: 2020-06-07 13:52:14
 */
import React from "react"

export default function Projects({projects, onGenerate}){
    return (
        <ul className="list-group list-group-flush">
            {        projects.map((project, i)=>{
                return (    <li className="list-group-item d-flex justify-content-between" key={i}>
                <span>{project.name}</span>
                <button type="button" className="btn btn-outline-secondary btn-sm"  data-toggle="modal"  onClick={()=>onGenerate(project.id, project.name)}>Invoice</button>
        
            </li>)

}) }
  </ul>  

    )
}