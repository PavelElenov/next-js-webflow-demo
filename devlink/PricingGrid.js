import React from "react";
import * as _Builtin from "./_Builtin";

export function PricingGrid({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="pricing-bottom-grid-wrapper" tag="div">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-small" tag="div">
            <_Builtin.Block className="pricing-bottom-grid" tag="div">
              <_Builtin.Block
                className="pricing_grid-content-wrapper"
                id="w-node-acc14165-2cd4-1f6c-ae50-7733df1d4be3-df1d4bde"
                tag="div"
              >
                <_Builtin.Heading
                  className="heading-style-h3 is-bigger"
                  tag="h3"
                >
                  {"Student plans"}
                </_Builtin.Heading>
                <_Builtin.Paragraph className="text-size-medium">
                  {
                    "Discover our Student Plan, specially designed to support the next generation of developers by providing exclusive resources, opportunities, and discounts tailored to your educational journey."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className="button-wrapper"
                id="w-node-acc14165-2cd4-1f6c-ae50-7733df1d4be8-df1d4bde"
                tag="div"
              >
                <_Builtin.Link
                  className="button is-pricing"
                  button={true}
                  options={{
                    href: "#",
                  }}
                >
                  {"Get started"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
