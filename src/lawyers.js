import React, {useEffect, useState} from "react"
import {Modal, Projects, Lawyers, AddLawyer, AddProject, Timetable, Invoice} from "./components"
import {instance} from "./utils"


export default function Home(){


const [projects, setProjects] = useState([])
const [lawyers, setLawyers] = useState([])
const [invoice, setInvoice] = useState([])
const [timetable, setTimetable] = useState([])


/**
 * 
 */
async function getProjects() {
    try {
      const response = await instance.get('/projects');
      setProjects(response.data.payload)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function getLawyers() {
    try {
      const response = await instance.get('/employees/lawyers');
      setLawyers(response.data.payload)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  // get projects
useEffect( async ()=>{
   return  getProjects()
      }, [])


      useEffect( async ()=>{
        return  getLawyers()
           }, [])


      // async generate invoice

      /**
 * 
 */
async function generateInvoice(projectId) {
    try {
      const response = await instance.get(`/schedules/employees/timetable/${projectId}`);
      setInvoice(response.data.payload)
      $('#exampleModal3').modal('toggle')
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  /**
   * 
   */

   async function addProject(project_name){

    try {
        const response = await instance.post("/projects", {
            name: project_name,
          });
          let newProjects = [...projects, response.data.payload]
        setProjects(newProjects)
        $('#exampleModal2').modal('toggle')
        console.log(response);
      } catch (error) {
        console.error(error);
      }

   }


   async function generateTimetable(employeeId) {
    try {
      const response = await instance.get(`/schedules/employees/timetable/${employeeId}`);
      setTimetable(response.data.payload)
      $('#exampleModal3').modal('toggle')
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

    /**
   * 
   */

  async function addLawyer(name, email, rate){

    try {
        const response = await instance.post("/employees", {
            name,
            email,
            rate,
            role:"LAWYER"
          });
          let newLawyers = [...lawyers, response.data.payload]
        setLawyers(newLawyers)
        $('#exampleModalLabel').modal('toggle')
        console.log(response);
      } catch (error) {
        console.error(error);
      }

   }


      



    return (
        <div>
            <div className="d-flex justify-content-center" style={{marginTop:"100px"}}>
<h4>Timetable And Invoice App</h4>
            </div>
    <div className="d-flex justify-content-center align-items-center" style={{minHeight:"45vh"}}>
    <div className="d-flex justify-content-between" style={{ minWidth:"70vw"}}>
         {/* Project */}
    <div className="" style={{ minWidth:"17vw"}}>
    <div className="form-group col-md-12 d-flex justify-content-between">
    <h5>Projects</h5>
    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal2">Add Project</button>
    </div>
<Projects  projects={projects} onGenerate={generateInvoice}/>
</div>
{/* Lawyers */}
<div className="d-flex justify-content-center align-items-center"  style={{ width:"50vw"}}>
<div style={{width:"60vw"}}>
    <div className="form-group col-md-12 d-flex justify-content-between">
        <h5>Employees</h5>
    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Add Lawyer</button>
    </div>
<Lawyers lawyers={lawyers} onGenerate={generateTimetable}/>
</div>
</div>
{/* Lawyers end */}
</div>
</div>
{/*  */}
<Modal id="exampleModal" label="exampleModalLabel">
<AddLawyer onSubmit={addLawyer} />
</Modal>


<Modal id="exampleModal2" label="exampleModalLabel2">
<AddProject onSubmit={addProject}/>
</Modal>


<Modal id="exampleModal3" label="exampleModalLabel3">
<Timetable data={timetable} />
</Modal>


<Modal id="exampleModal4" label="exampleModalLabel5">
<Invoice data={invoice}/>
</Modal>






{/*  */}
</div>
    )
}