import React from "react";
import * as _Builtin from "./_Builtin";

export function FeaturesCard({
  as: _Component = _Builtin.Block,
  featuresCardHeading = "Curated Job Listings",
  featuresCardText = "Access a diverse range of high-quality job opportunities in Webflow, no-code, and traditional development, hand-picked by our expert team.",
  featuresCardIcon = "https://uploads-ssl.webflow.com/6586d2fcb789a3b518a77382/658fdc8b3fcec216489da9dc_list-icon.png",
}) {
  return (
    <_Component className="feature-card" tag="div">
      <_Builtin.Block className="feature-title-wrapper" tag="div">
        <_Builtin.Image
          className="feature-image"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={featuresCardIcon}
        />
        <_Builtin.Block className="text-size-medium" tag="div">
          {featuresCardHeading}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Paragraph className="text-size-medium is-small">
        {featuresCardText}
      </_Builtin.Paragraph>
    </_Component>
  );
}
