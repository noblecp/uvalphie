import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

// Template variable that helps for organization
// export const IndexPageTemplate = ({
//   image,
//   title,
//   description,
// }) => (
//   <div>
//     <div
//       className="full-width-image margin-top-0"
//       style={{
//         backgroundImage: `url(${
//           !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//         })`,
//         backgroundPosition: `top left`,
//         backgroundAttachment: `fixed`,
//       }}
//     ></div>
//   </div>
// );

// ***WHAT ACTUALLY GETS RENDERED
const IndexPage = ({ data }) => {
  const { landing } = useStaticQuery(
    graphql`
      query IndexPageTemplate {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/landing/.*\\.md$/"}}) {
        nodes {
          frontmatter {
            title
            description
            header
          }
        }
      }
    }
    `
  )
  return (
    <Layout>
      <h1>{landing.allMarkdownRemark.nodes}</h1>
    </Layout>
  );
};

// Always good to define your props
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

// Here's where we fetch the data from our admin page
// export const pageQuery = graphql`
//   query IndexPageTemplate {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/landing/.*\\.md$/"}}) {
//     nodes {
//       frontmatter {
//         title
//         description
//         header
//       }
//     }
//   }
// }

// `;
