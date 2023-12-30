import * as React from "react";
import * as Types from "./types";

declare function Card(props: {
  as?: React.ElementType;
  cardHeading?: React.ReactNode;
  cardText?: React.ReactNode;
  cardImage?: Types.Asset.Image;
  cardsId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
