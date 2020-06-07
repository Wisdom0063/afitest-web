import React from "react";

export default function ErrorAlert({ error }) {
  return (
    <span>
      {error ? error.subErrors ? (
        error.subErrors.map((value, i) => (
          <div
            key={1}
            class="alert alert-danger"
            role="alert"
          >
  
            {value.message}
          </div>
        ))
      ) : (
        <div
          class="alert alert-danger"
          role="alert"
        >
          {error.message}
        </div>
      ):null}
    </span>
  );
}
