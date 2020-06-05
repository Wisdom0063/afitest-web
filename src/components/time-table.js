import React from "react";

export default function Timetable({ data, isModal = true }) {
  return (
    <div>
      <div className="form-group col-md-12 d-flex justify-content-between">
        <h4>Lawyer Wisdom Timetable</h4>
        {!isModal && (
          <button
            type="button"
            className="btn btn-info"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add New Schedule
          </button>
        )}
      </div>
      <div className="table-responsive-md" id="only">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">
                Billable Rate <br /> (Per Hour)
              </th>
              <th scope="col">Project</th>
              <th scope="col">Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((schedule, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{schedule.employeeId}</th>
                  <td>{schedule.rate}</td>
                  <td>{schedule.project}</td>
                  <td>{schedule.date}</td>
                  <td>{schedule.startTime}</td>
                  <td>{schedule.endTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="modal-footer">
        {isModal && (
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        )}
        <button
          type="button"
          className="btn btn-info"
          onClick={() =>
            $("#only").printThis({
              debug: false,
              importCSS: true,
              importStyle: true,
              printContainer: true,
              //   loadCSS: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
              pageTitle: "My Modal",
              removeInline: false,
              printDelay: 333,
              header: null,
              formValues: true,
            })
          }
        >
          Print
        </button>
      </div>
    </div>
  );
}
