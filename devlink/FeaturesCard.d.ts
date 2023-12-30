import * as React from "react";
import * as Types from "./types";

declare function FeaturesCard(props: {
  as?: React.ElementType;
  featuresCardHeading?: React.ReactNode;
  featuresCardText?: React.ReactNode;
  featuresCardIcon?: Types.Asset.Image;
}): React.JSX.Element;
