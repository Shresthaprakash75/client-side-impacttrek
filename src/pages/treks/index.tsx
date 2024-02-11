// src/pages/treks.js

import React from 'react';
import { graphql, Link, HeadFC } from 'gatsby';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function TrekCard({ trek }) {
  // Check if trek.frontmatter is defined
  if (!trek.frontmatter) {
    // Handle the case where frontmatter is not defined (return a placeholder, throw an error, etc.)
    return null;
  }

  // Check if hero_images is defined and not an empty array
  const heroImages = trek.frontmatter.hero_images;
  const firstImage = heroImages && heroImages.length > 0 ? heroImages[0] : null;

  // If firstImage is null, you might want to handle it appropriately

  const image = firstImage ? getImage(firstImage.path.childImageSharp.gatsbyImageData) : null;

  return (
    <div className="col mb-4">
      <div className="card shadow-sm">
        {image && <GatsbyImage image={image} alt={firstImage.alt} />}
        <div className="card-body">
          <Link to={`/treks/${trek.frontmatter.slug}`} key={trek.id}>
            <h5 className="card-title">{trek.frontmatter.title}</h5>
          </Link>
          <p className="card-text">{trek.frontmatter.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {/* Your buttons go here */}
            </div>
            <small className="text-muted">Max Altitude: {trek.frontmatter.max_elevation}</small>
          </div>
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
        }
        id
      }
    }
  }
`;

export default PlanTreks;
export const Head: HeadFC = () => <title>Impact trek | All treks</title>