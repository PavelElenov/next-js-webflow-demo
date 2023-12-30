import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e6fac0c6-6e60-1257-da2a-f16bbe77366b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e6fac0c6-6e60-1257-da2a-f16bbe77366b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e6fac0c6-6e60-1257-da2a-f16bbe77366b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e6fac0c6-6e60-1257-da2a-f16bbe77366b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075}},"actionLists":{"a":{"id":"a","title":"Navbar 1 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182dd"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182d8"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182ce"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182ce"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182d8"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 1 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182d8"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182ce"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182d8"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182ce"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["6621a2fe-4d17-6b0c-5676-cde856b182dd"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="navbar1_component"
      data-w-id="e6fac0c6-6e60-1257-da2a-f16bbe77366b"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block className="navbar1_container" tag="div">
        <_Builtin.NavbarBrand
          className="navbar1_logo-link"
          options={{
            href: "/about",
          }}
        >
          <_Builtin.Image
            className="navbar1_logo"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6586d2fcb789a3b518a77382/658fc909e6a0f7d59f71aee0_Other21.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className="navbar1_menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className="navbar1_link"
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navbar1_link"
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navbar1_link is-last"
            options={{
              href: "#",
            }}
          >
            {"Jobs"}
          </_Builtin.NavbarLink>
          <_Builtin.Block className="navbar1_menu-buttons" tag="div">
            <_Builtin.Link
              className="button is-navbar1"
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Post a job"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="navbar1_menu-button" tag="div">
          <_Builtin.Block className="menu-icon1" tag="div">
            <_Builtin.Block className="menu-icon1_line-top" tag="div" />
            <_Builtin.Block className="menu-icon1_line-middle" tag="div">
              <_Builtin.Block
                className="menu-icon_line-middle-inner"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="menu-icon1_line-bottom" tag="div" />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
