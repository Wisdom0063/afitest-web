import React, { useEffect, useState } from "react";
import {

  Timetable, AddSchedule, Modal, Logout
} from "./components";
import { axiosInstance } from "./utils";

export default function LawyerHome() {
  const [timetable, setTimetable] = useState([]);
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)



  const instance = axiosInstance()

  async function generateTimetable(employeeId) {
    try {
      const response = await instance.get(
        `/schedules/employees/timetable/${employeeId}`
      );
      setTimetable(response.data.payload);
      $("#exampleModal3").modal("toggle");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {

    let userdata = JSON.parse(localStorage.getItem("user"))
    setUser(userdata)
    generateTimetable(userdata.id)

  }, [])






  async function getProjects() {
    try {
      const response = await instance.get("/projects");
      setProjects(response.data.payload);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(()=> {
    getProjects()

  }, [])


    /**
   *
   */

  async function addSchedule(projectId, startTime, endTime) {
    console.log(projectId, startTime, endTime)
    try {
      const response = await instance.post("/schedules", {
        project_id: projectId,
        employee_id:user.id,
        start_time:startTime,
        end_time:endTime

      });

      generateTimetable(user.id)
     $("#addschedule").modal("toggle");
      console.log(response);
    } catch (error) {
      console.log(error.response)
      setError(error.response.data.error)
      setTimeout(()=>setError(null), 2000)    }
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

          {/* Lawyers */}
          <div
            className="d-flex justify-content-center align-items-center"
          >
            <div style={{ width: "60vw" }}>
              <Timetable data={timetable} isModal={false} lawyer_name={user && user.name} id="#addschedule" />
            </div>
          </div>
          {/* Lawyers end */}
        </div>
        <Modal id="addschedule" label="addschedule">
        <AddSchedule onSubmit={addSchedule} projects ={projects} error={error} />
      </Modal>
      </div>

  );
}
