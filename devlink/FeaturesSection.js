import React from "react";
import * as _Builtin from "./_Builtin";
import { Card } from "./Card";

export function FeaturesSection({
  as: _Component = _Builtin.Block,
  featuresHeading = "Fetures",
  featuresText = "Unlock the power of the Visual Developers Job Board - Your Ultimate Resource",
  featureSectionId,
}) {
  return (
    <_Component
      className="section_layout-cards"
      tag="section"
      id={featureSectionId}
    >
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-medium" tag="div">
            <_Builtin.Block className="text-align-center" tag="div">
              <_Builtin.Block
                className="max-width-large align-center"
                tag="div"
              >
                <_Builtin.Block
                  className="margin-bottom margin-small"
                  tag="div"
                >
                  <_Builtin.Heading className="heading-style-h2" tag="h2">
                    {featuresHeading}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className="margin-bottom margin-small"
                  tag="div"
                >
                  <_Builtin.Paragraph className="text-size-medium">
                    {featuresText}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="layout-cards_cards-wrapper" tag="div">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
