import React from "react";

const Spinner = () => {
  return (
    <div style={{opacity:"0.75"}} className="position-absolute top-0 left-0  fixed bg-secondary w-100 vh-100 d-flex justify-content-center align-items-center">
      <div style={{width: "15rem", height: "15rem"}} className="spinner-border text-warning " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
