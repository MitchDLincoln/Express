import React from "react";
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
    if(launch_success){
        return (
            <div className="card text-white bg-success mb-3">
              <div class="card-header">Flight Number: {flight_number}</div>
              <div className="card-body">
                <h4 className="card-title">Mission: {mission_name} </h4>
                <p>Year: {launch_year} </p>
                <p>{launch_date_local}</p>
              </div>
            </div>
        );
    } else {
            return (
                <div className="card text-white bg-danger mb-3">
                  <div class="card-header">Flight Number: {flight_number}</div>
                  <div className="card-body">
                    <h4 className="card-title">Mission: {mission_name} </h4>
                    <p>Year: {launch_year} </p>
                    <p>{launch_date_local}</p>
                  </div>
                </div>
            );
    }
}
