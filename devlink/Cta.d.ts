import * as React from "react";
import * as Types from "./types";

declare function Cta(props: {
  as?: React.ElementType;
  ctaHeading?: React.ReactNode;
  ctaText?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
