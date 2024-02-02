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

      <section className="mt-4">
        <h2>Highlights</h2>
        <ul className="list-group">
          {data.mdx.frontmatter.highlights.map((highlight, index) => (
            <li key={index} className="list-group-item">{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2>Itinerary</h2>
        <ul className="list-group">
          {data.mdx.frontmatter.itineraries.map((day, index) => (
            <li key={index} className="list-group-item">
              <strong>Day {day.day}:</strong> {day.description}
            </li>
          ))}
        </ul>
      </section>

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
          description
        }
      }
      body
    }
  }
`;

export default TrekDetail;
