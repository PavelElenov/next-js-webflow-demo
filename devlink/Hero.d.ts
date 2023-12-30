import * as React from "react";
import * as Types from "./types";

declare function Hero(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  heroText?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  heroImage?: Types.Asset.Image;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
