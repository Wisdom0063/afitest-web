import React, { useEffect, useState } from "react";
import {

  Timetable,
} from "./components";
import { instance } from "./utils";

export default function LawyerHome() {
  const [timetable, setTimetable] = useState([]);

  async function generateTimetable(employeeId) {
    try {
      const response = await instance.get(
        `/schedules/employees/timetable/${1}`
      );
      setTimetable(response.data.payload);
      $("#exampleModal3").modal("toggle");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    generateTimetable()

  }, [])

  return (
    <div>
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
              <Timetable data={timetable} isModal={false} />
            </div>
          </div>
          {/* Lawyers end */}
        </div>
      </div>

  );
}
