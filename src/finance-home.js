import React, { useEffect, useState } from "react";
import {
  Modal,
  Projects,
  Lawyers,
  AddLawyer,
  AddProject,
  Timetable,
  Invoice,
  Logout
} from "./components";
import { axiosInstance } from "./utils";

export default function FinanceHome() {
  const [projects, setProjects] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [addLawyerError, setAddLawyerError] = useState()
  const [addProjectError, setAddProjectError] = useState()
  const [projectName, setProjectName ] = useState()
  const [lawyerName, setLawyerName ] = useState()



  const instance = axiosInstance()

  /**
   *
   */
  async function getProjects() {
    try {
      const response = await instance.get("/projects");
      setProjects(response.data.payload);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function getLawyers() {
    try {
      const response = await instance.get("/employees/law");
      setLawyers(response.data.payload);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  // get projects
  useEffect( () => {
     getProjects();
  }, []);

  useEffect( () => {
     getLawyers();
  }, []);

  // async generate invoice

  /**
   *
   */
  async function generateInvoice(projectId, project_name) {
    try {
      const response = await instance.get(
        `/schedules/projects/invoice/${projectId}`
      );
      setProjectName(project_name)
      setInvoice(response.data.payload);
      $("#invoice").modal("toggle");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   */

  async function addProject(project_name) {
    try {
      const response = await instance.post("/projects", {
        name: project_name,
      });
      let newProjects = [...projects, response.data.payload];
      setProjects(newProjects);
      $("#addproject").modal("toggle");
      console.log(response);
    } catch (error) {
      console.log(error.response)
      setAddProjectError(error.response.data.error)
      setTimeout(()=>setAddProjectError(null), 2000)      }
  }

  async function generateTimetable(employeeId, lawyer_name) {
    try {
      const response = await instance.get(
        `/schedules/employees/timetable/${employeeId}`
      );
      setLawyerName(lawyer_name)
      setTimetable(response.data.payload);
      $("#timetable").modal("toggle");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   */

  async function addLawyer(name, email, rate) {
    try {
      const response = await instance.post("/employees/law", {
        name,
        email,
        rate,
      });
      let newLawyers = [...lawyers, response.data.payload];
      setLawyers(newLawyers);
      $("#addlawyer").modal("toggle");
      console.log(response);
    } catch (error) {
      console.log(error.response)
      setAddLawyerError(error.response.data.error)
      setTimeout(()=>setAddLawyerError(null), 2000)  
      }    
  }

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Logout/>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <h4>Timetable And Invoice App</h4>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "45vh" }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ minWidth: "70vw" }}
        >
          {/* Project */}
          <div className="" style={{ minWidth: "17vw" }}>
            <div className="form-group col-md-12 d-flex justify-content-between">
              <h5>Projects</h5>
              <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#addproject"
              >
                Add Project
              </button>
            </div>
            <Projects projects={projects} onGenerate={generateInvoice} />
          </div>
          {/* Lawyers */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "50vw" }}
          >
            <div style={{ width: "60vw" }}>
              <div className="form-group col-md-12 d-flex justify-content-between">
                <h5>Employees</h5>
                <button
                  type="button"
                  className="btn btn-info"
                  data-toggle="modal"
                  data-target="#addlawyer"
                >
                  Add Lawyer
                </button>
              </div>
              <Lawyers lawyers={lawyers} onGenerate={generateTimetable} />
            </div>
          </div>
          {/* Lawyers end */}
        </div>
      </div>
      {/*  */}
      <Modal id="addlawyer" label="addlawyer">
        <AddLawyer onSubmit={addLawyer} error={addLawyerError}/>
      </Modal>

      <Modal id="addproject" label="addproject">
        <AddProject onSubmit={addProject} error={addProjectError}/>
      </Modal>

      <Modal id="timetable" label="timetable" modalWidth={800}>
        <Timetable data={timetable} lawyer_name={lawyerName} />
      </Modal>

      <Modal id="invoice" label="invoice" modalWidth={600}>
        <Invoice data={invoice} project_name = {projectName} />
      </Modal>

      {/*  */}
    </div>
  );
}
