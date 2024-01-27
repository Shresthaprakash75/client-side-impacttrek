// src/pages/treks.js

import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../../components/header';
import Footer from '../../components/footer';

function TrekCard({ trek }) {
  return (
      <div className="card shadow-sm">
        {/* Uncomment when you have actual images for treks */}
        {/* <img
          src={trek.images_json[0]}
          className="bd-placeholder-img card-img-top"
          alt={`Image for ${trek.frontmatter.title}`}
        /> */}
        <div className="card-body">
          <h5 className="card-title">{trek.frontmatter.title}</h5>
          <p className="card-text">{trek.frontmatter.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Book Now
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link to={`/treks/${trek.frontmatter.slug}`} className="col" key={trek.id}>
              
                Learn More
                </Link>
              </button>
    
              
            </div>
            <small className="text-muted">Max Altitude: {trek.frontmatter.max_elevation}</small>
          </div>
        </div>
      </div>
  );
}

function PlanTreks({ data }) {
  return (
    <>
      <Header />
      <main className="container">
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {data.allMdx.nodes.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
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
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          date
          description
          max_elevation
        }
        id
      }
    }
  }
`;

export default PlanTreks;
