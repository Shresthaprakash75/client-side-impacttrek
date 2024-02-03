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

      <div className="row">
        <div className="col-md-8">
          <GatsbyImage image={heroImage} alt={data.mdx.frontmatter.hero_images[0].alt} className="img-fluid rounded mb-3" />
        </div>

        <div className="col-md-4">
          <h1 className="mb-4">{data.mdx.frontmatter.title}</h1>
          <p className="lead">{data.mdx.frontmatter.description}</p>
          <ul className="list-unstyled">
            <li><strong>Max Altitude:</strong> {data.mdx.frontmatter.max_elevation}</li>
            <li><strong>Duration:</strong> {data.mdx.frontmatter.duration}</li>
            <li><strong>Difficulty:</strong> {data.mdx.frontmatter.difficulty}</li>
          </ul>
        </div>
      </div>

      {/* highlight */}
      <section className="mt-4">
        <h2>Highlights</h2>
        <ul className="list-group">
          {data.mdx.frontmatter.highlights.map((highlight, index) => (
            <li key={index} className="list-group-item">{highlight}</li>
          ))}
        </ul>
      </section>
      {/* trek summary */}
      {/* fast fact */}

      {/* itinerary */}
      <section className="mt-4">
        <h2>Brief Itinerary</h2>
        <div className="table-responsive">
          <table className="table">
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
                  <td>{day.day}</td>
                  <td>
                    {/* <strong>{day.title}</strong> */}
                    {/* <br /> */}
                    {day.title}
                    {/* {day.description} */}
                  </td>
                  <td>
                    {/* <GatsbyImage image={getImage(day.image)} alt={`Day ${day.day}`} className="img-fluid rounded mb-3" /> */}
                    {day.overnight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* request : custom itinerary */}
      {/* request : detailed itinerary */}

      {/* upcoming departure */}
      <section className="mt-4">
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
                  <td>
                    {upcm_dpt.duration}
                  </td>
                  <td style={{ color: "#008450" }}>
                    {upcm_dpt.availability}
                  </td>
                  <td>
                    {upcm_dpt.cost_per_person}
                  </td>
                  <td>
                    <button>inquire</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* map */}
      <section className="mt-4">
        <h2>About the Trek</h2>
        <p>{data.mdx.body}</p>
      </section>

      {children}
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
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
