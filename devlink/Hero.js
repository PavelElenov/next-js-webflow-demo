import React from "react";
import * as _Builtin from "./_Builtin";

export function Hero({
  as: _Component = _Builtin.Block,
  headingText = "Visual Development Job Board",
  heroText = "Welcome to the Visual Developers Job Board - your one-stop destination for discovering the most exciting opportunities in Webflow, no-code, and traditional development. Empower your career by connecting with innovative companies that value creativity and technical expertise in equal measure.",
  buttonText = "View open roles",

  buttonLink = {
    href: "#",
  },

  heroImage = "https://uploads-ssl.webflow.com/6586d2fcb789a3b518a77382/658fd1731c31c1ee9855245a_hero-image.png",
  buttonVisibility = true,
}) {
  return (
    <_Component className="section_header1" tag="header">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-medium" tag="div">
            <_Builtin.Grid className="header1_component" tag="div">
              <_Builtin.Block className="header1_content" tag="div">
                <_Builtin.Block
                  className="margin-bottom margin-small"
                  tag="div"
                >
                  <_Builtin.Heading
                    className="heading-style-h1 is-hero"
                    tag="h1"
                  >
                    {headingText}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph className="text-size-medium is-hero">
                  {heroText}
                </_Builtin.Paragraph>
                {buttonVisibility ? (
                  <_Builtin.Block
                    className="margin-top margin-medium"
                    tag="div"
                  >
                    <_Builtin.Block className="button-group" tag="div">
                      <_Builtin.Link
                        className="button is-hero"
                        button={true}
                        options={buttonLink}
                      >
                        {buttonText}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block className="header1_image-wrapper" tag="div">
                <_Builtin.Image
                  className="header1_image"
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={heroImage}
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
