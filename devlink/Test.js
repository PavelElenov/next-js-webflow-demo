import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FLIP_EFFECT","instant":false,"config":{"actionListId":"flipInLeft","autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b9616f81-085c-704d-290d-239527ba6bba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b9616f81-085c-704d-290d-239527ba6bba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1703496548805}},"actionLists":{"flipInLeft":{"id":"flipInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"duration":0,"delay":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":-90,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Test({
  as: _Component = _Builtin.Block,
  headingStyleH1Text = "Ei ne moesh da go svurjish ei",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="test-component"
      data-w-id="b9616f81-085c-704d-290d-239527ba6bba"
      tag="div"
    >
      <_Builtin.Heading tag="h1">{"Opaa"}</_Builtin.Heading>
      <_Builtin.Heading className="heading-style-h1 is-red" tag="h1">
        {headingStyleH1Text}
      </_Builtin.Heading>
    </_Component>
  );
}
