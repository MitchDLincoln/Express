import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import Moment from "react-moment";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Query
const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query
          query={LAUNCH_QUERY}
          variables={{ flight_number }}
          className="text-center"
        >
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const {
              flight_number,
              mission_name,
              launch_year,
              launch_date_local,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;

            return (
              <Fragment>
                <div className="card text-white bg-dark m-3">
                  <div className={classNames('card-header', {'bg-danger': !launch_success})}>
                    Flight Number: {flight_number}
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Mission: {mission_name} </h4>
                    <p>Year: {launch_year} </p>
                    <p>
                      <Moment format="HH:mm YYYY/MM/DD">
                        {launch_date_local}
                      </Moment>
                    </p>
                  </div>
                  <div className="card-header">Rocket Id: {rocket_id}</div>
                  <div className="card-body">
                    <h4 className="card-title">Rocket: {rocket_name} </h4>
                    <p>Type: {rocket_type} </p>
                  </div>
                </div>
                <Link
                  to={`/`}
                  className="btn btn-secondary align-self-center"
                >
                  Go Home
                </Link>
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
