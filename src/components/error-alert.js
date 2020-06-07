import React from "react";

export default function ErrorAlert({ error }) {
  return (
    <span>
      {error ? error.subErrors ? (
        error.subErrors.map((value, i) => (
          <div
            key={1}
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {value.message}
          </div>
        ))
      ) : (
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {error.message}
        </div>
      ):null}
    </span>
  );
}
