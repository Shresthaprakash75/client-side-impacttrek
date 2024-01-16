// src/pages/treks.js

import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

function PlanTreks({ data }) {
  // Destructure the treks array directly from the GraphQL query result
  const { treks } = data.trek;

  return (
    <>
      <Header />
      <main className="container">
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {treks.map((trek) => (
                <div className="col" key={trek.trek_id}>
                  <div className="card shadow-sm">
                    {/* Assuming you have actual images for treks, use them here */}
                    <img src={trek.images_json[0]} className="bd-placeholder-img card-img-top" alt={trek.trek_name} />

                    <div className="card-body">
                      <h5 className="card-title">{trek.trek_name}</h5>
                      <p className="card-text">{trek.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Book Now
                          </button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Learn More
                          </button>
                        </div>
                        <small className="text-muted">Max Altitude: {trek.max_elevation}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    trek {
      treks {
        trek_id
        trek_name
        location
        difficulty_level
        distance
        duration
        elevation_gain
        max_elevation
        description
        route_map_url
        trail_type
        best_time_to_visit
        required_permits
        accommodation
        camping_facilities
        tips_and_recommendations
        images_json
        reviews_json
        featured_tags
      }
    }
  }
`;

export default PlanTreks;
