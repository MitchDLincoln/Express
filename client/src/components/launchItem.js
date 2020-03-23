import React from "react";
import Moment from "react-moment";
// import classNames from "classnames";
import "../App.css";


export default function launchItem({
  launch: {
    flight_number,
    mission_name,
    launch_year,
    launch_date_local,
    launch_success
  }
}) {
  if (launch_success) {
    return (
      <div className="card text-white bg-success mb-3">
        <div className="card-header">Flight Number: {flight_number}</div>
        <div className="card-body">
          <h4
            className="card-title"
            // className={classNames({
            //   "bg-danger": launch_success,
            // })}
          >
            Mission: {mission_name}{" "}
          </h4>
          <p>Year: {launch_year} </p>
          <p>
            <Moment format="HH:mm YYYY/MM/DD">{launch_date_local}</Moment>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card text-white bg-danger mb-3">
        <div class="card-header">Flight Number: {flight_number}</div>
        <div className="card-body d-flex flex-row justify-content-around align-items-center">
          <div>
            <h4 className="card-title">Mission: {mission_name} </h4>
            <p>Year: {launch_year} </p>
            <p>
              <Moment format="HH:mm YYYY/MM/DD">{launch_date_local}</Moment>
            </p>
          </div>
          <div>
            <button className="btn btn-secondary align-self-center">
              Launch Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}
