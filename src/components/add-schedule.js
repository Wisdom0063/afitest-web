import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faUser,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from "react-datetime-picker";
import ErrorAlert from "./error-alert";
export default function AddSchedule({ onSubmit , projects=[], error}) {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [projectId, setProjectId] = useState()

  function handleStartChange(value) {
    console.log(value);
    setStartTime(value);
  }

  function handleEndChange(value) {
    console.log(value);
    setEndTime(value);
  }

  useEffect(()=>{
      console.log(projects)
      projects.length> 0 &&  setProjectId(projects[0].id)
  }, [projects])

  return (
    <div>
      <div className="form-group col-md-12 d-flex justify-content-center">
        <h4>Add New Lawyer</h4>
      </div>
      <ErrorAlert error={error} />
      <div className="d-flex justify-content-center mmodal">
        <div style={{ width: "400px" }}>
          <div className="form-group col-md-12">
            <div className="input-group">
              <select className="custom-select" onChange={(e)=>setProjectId(e.target.value)} >
                  {projects.map((value, i)=>{
               return <option selected={i==0} key={i} value={value.id}>{value.name}</option>

                  })}

              </select>
            </div>
          </div>
          <div className="form-group col-md-12">
            <div className="input-group">
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <span> Start time</span>
                <DateTimePicker
                  onChange={handleStartChange}
                  value={startTime}
                />
              </div>
            </div>
          </div>
          <div className="form-group col-md-12">
            <div className="input-group">
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <span> End time</span>
                <DateTimePicker onChange={handleEndChange} value={endTime} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => onSubmit(projectId, startTime, endTime)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
