// src/pages/treks.js

import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import type { HeadFC, PageProps } from "gatsby"

function PlanTreks({ data }) {
  const treks = data.trek.treks || [];

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
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">{trek.trek_name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Book Now
                          </button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Learn More
                          </button>
                        </div>
                        <small className="text-body-secondary">max alt: {trek.max_elevation}</small>
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
export const Head: HeadFC = () => <title>Impacttrek | All Treks</title>