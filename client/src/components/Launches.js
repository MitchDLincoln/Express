import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";
import LaunchItem from "./launchItem.js";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY} className="text-center">
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                <div className="container d-flex flex-column text-center">
                  {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))}
                </div>
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
