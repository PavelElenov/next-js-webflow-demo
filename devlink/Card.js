import React from "react";
import * as _Builtin from "./_Builtin";

export function Card({
  as: _Component = _Builtin.Block,
  cardHeading = "Curated job listings",
  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  cardImage = "",
  cardsId,
}) {
  return (
    <_Component className="layout_cards-item c-class" tag="div" id={cardsId}>
      <_Builtin.Block className="layout_cards-content-wrapper" tag="div">
        <_Builtin.Block className="layout-cards_icon-wrapper" tag="div">
          <_Builtin.Image
            className="layout_cards-image"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={cardImage}
          />
        </_Builtin.Block>
        <_Builtin.Heading
          className="heading-style-h3 is-demo card---heading"
          tag="h3"
        >
          {cardHeading}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block className="text-wrapper" tag="div">
        <_Builtin.Paragraph className="demo">{cardText}</_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
