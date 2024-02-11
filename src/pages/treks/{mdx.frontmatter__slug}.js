// src/pages/{mdx.frontmatter__slug}.js

import * as React from 'react';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TrekDetail = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_images[0].path);

  return (
<div className="container mt-5">
  <Seo title={data.mdx.frontmatter.title} />

  <div className="row justify-content-center">
    <div className="col-md-8 position-relative text-center">
      <GatsbyImage image={heroImage} alt={data.mdx.frontmatter.hero_images[0].alt} className="img-fluid rounded mb-3" />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-white display-4" style={{ background: 'rgba(0,0,0,0.5)' }}>{data.mdx.frontmatter.title} - {data.mdx.frontmatter.duration}</h1>
      </div>
    </div>
  </div>

  {/* Highlights */}
  <section className="mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Highlights</h2>
        <ul className="list-group">
          {data.mdx.frontmatter.highlights.map((highlight, index) => (
            <li key={index} className="list-group-item">{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  {/* Trek Summary & Fast Facts */}
  <section className="mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Trek Summary</h2>
        <p>{data.mdx.frontmatter.summary}</p>
      </div>
      <div className="col-md-8">
        <h4>Fast Facts</h4>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>Max Altitude</td>
                <td>{data.mdx.frontmatter.max_elevation}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>{data.mdx.frontmatter.duration}</td>
              </tr>
              <tr>
                <td>Difficulty</td>
                <td>{data.mdx.frontmatter.difficulty}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  {/* Itinerary */}
  <section className="mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Brief Itinerary</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="border-top">Day</th>
                <th className="border-top">Highlight</th>
                <th className="border-top">Overnight</th>
              </tr>
            </thead>
            <tbody>
              {data.mdx.frontmatter.itineraries.map((day, index) => (
                <tr key={index}>
                  <td>Day {day.day}</td>
                  <td>{day.title}</td>
                  <td>{day.overnight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  {/* Request a Custom Itinerary */}
  <section className="mt-4 bg-light">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <h2>Request a Custom Itinerary</h2> 
      <p>Do you have any questions about this trek or would you like to see how it can be customized to your needs?</p>
      <button className="btn btn-primary">Get in touch here</button>
    </div>
  </div>
</section>

  {/* Upcoming Departure */}
  <section className="mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Upcoming Departure</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="border-top">Date</th>
                <th className="border-top">Duration</th>
                <th className="border-top">Availability</th>
                <th className="border-top">Cost per person</th>
                <th className="border-top"></th>
              </tr>
            </thead>
            <tbody>
              {data.mdx.frontmatter.upcoming_departures.map((upcm_dpt, index) => (
                <tr key={index}>
                  <td>{upcm_dpt.date}</td>
                  <td>{upcm_dpt.duration}</td>
                  <td style={{ color: "#008450" }}>{upcm_dpt.availability}</td>
                  <td>{upcm_dpt.cost_per_person}</td>
                  <td><button className="btn btn-primary">Inquire</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  {/* Reviews */}
<section className="mt-4">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <h2>Reviews</h2>
      <p>{data.mdx.body}</p>
    </div>
  </div>
</section>

{/* About the Trek */}
<section className="mt-4">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <h2>About the Trek</h2>
      <p>{data.mdx.body}</p>
    </div>
  </div>
</section>

{/* {children} */}
</div>


  );
};


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        summary
        max_elevation
        duration
        difficulty
        highlights
        hero_images {
          path {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          credit_text
          credit_link
        }
        itineraries {
          day
          title
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          overnight
        }
        upcoming_departures {
          date
          duration
          availability
          cost_per_person
        }
      }
      body
    }
  }
`;

export default TrekDetail;
