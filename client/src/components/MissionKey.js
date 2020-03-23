import React from "react";
import "../App.css";

export default function MissionKey() {
  return (
    <div className="my-3 legend bg-secondary p-3 d-flex flex-column text-left rounded border border-light">
      <p className="m-0">
        <span className="px-3 mr-2 bg-success" /> = Success
      </p>
      <p className="m-0">
        <span className="px-3 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  );
}
