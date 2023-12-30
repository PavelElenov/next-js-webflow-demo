import React from "react";
import * as _Builtin from "./_Builtin";

export function Cta({
  as: _Component = _Builtin.Block,
  ctaHeading = "Find your next job, today",
  ctaText = (
    <>
      {
        "Welcome to the Visual Developers Job Board - your one-stop destination for discovering the most exciting opportunities in Webflow, no-code, and traditional development. Empower your career by connecting with innovative companies that value creativity and technical expertise in equal measure."
      }
      <br />
    </>
  ),
  buttonText = "Get started",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component className="section_cta" tag="section">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-small" tag="div">
          <_Builtin.Block className="padding-section-medium" tag="div">
            <_Builtin.Block className="text-align-center" tag="div">
              <_Builtin.Block className="margin-bottom margin-small" tag="div">
                <_Builtin.Heading className="heading-style-h2 is-cta" tag="h2">
                  {ctaHeading}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph className="text-size-medium is-smaller">
                {ctaText}
              </_Builtin.Paragraph>
              <_Builtin.Block className="margin-top margin-medium" tag="div">
                <_Builtin.Block className="button-group is-center" tag="div">
                  <_Builtin.Link
                    className="button is-primary"
                    button={true}
                    options={buttonLink}
                  >
                    {buttonText}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
