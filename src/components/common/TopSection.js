import React from "react";
import Img from "gatsby-image";
import "./css/topsection.scss";

const TopSection = ({ queryResults, circle, rectangle, triangle }) => {
  let leftImage,
    rightImage,
    centerImage = null;

  console.log(queryResults.markdownRemark.frontmatter);
  try {
    leftImage =
      queryResults.markdownRemark.frontmatter.left_image.childImageSharp.fluid;
  } catch (err) {}

  try {
    rightImage =
      queryResults.markdownRemark.frontmatter.right_image.childImageSharp.fluid;
  } catch (err) {}

  try {
    centerImage =
      queryResults.markdownRemark.frontmatter.center_image.childImageSharp
        .fluid;
  } catch (err) {}

  return (
    <div className="top-section">
      <div className="main-image">
        <Img className="left-img" fluid={leftImage} alt="TopSection Image" />
        <Img className="right-img" fluid={rightImage} alt="TopSection Image" />
        <Img
          className="center-img"
          fluid={centerImage}
          alt="TopSection Image"
        />

        {circle ? (
          <div class="circle-decorators">
            <div class="decorator" id="circle1" />
            <div class="decorator" id="circle2" />
            <div class="decorator" id="circle3" />
            <div class="decorator" id="circle4" />
          </div>
        ) : (
          <div />
        )}

        {rectangle ? (
          <div class="rectangles-decorators">
            <div class="decorator" id="rectangle1" />
            <div class="decorator" id="rectangle2" />
            <div class="decorator" id="rectangle3" />
            <div class="decorator" id="rectangle4" />
          </div>
        ) : (
          <div />
        )}

        {triangle ? (
          <div class="triangle-decorators">
            <div class="decorator" id="triangle1" />
            <div class="decorator" id="triangle2" />
            <div class="decorator" id="circle3" />
            <div class="decorator" id="triangle4" />
          </div>
        ) : (
          <div />
        )}

        <h3>{queryResults.markdownRemark.frontmatter.title}</h3>
      </div>
    </div>
  );
};

export default TopSection;
