import { j as jsx, F as Fragment, a as jsxs } from "../chunks/chunk-ac9dafa4.js";
import PropTypes from "prop-types";
import { Flex, Stack, Heading, Text, Button } from "@chakra-ui/react";
import "react/jsx-runtime";
Page.propTypes = {
  is404: PropTypes.bool
};
function Page({ is404 }) {
  if (is404) {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Flex, { mt: 20, justifyContent: "center", textAlign: "center", children: /* @__PURE__ */ jsxs(Stack, { children: [
      /* @__PURE__ */ jsx(Heading, { children: "Error 404" }),
      /* @__PURE__ */ jsx(Text, { children: "This page could not be found." }),
      /* @__PURE__ */ jsx(Button, { colorScheme: "messenger", as: "a", href: "https://renzo.events", children: "Return to Renzo Events" })
    ] }) }) });
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Flex, { mt: 20, justifyContent: "center", textAlign: "center", children: /* @__PURE__ */ jsxs(Stack, { children: [
      /* @__PURE__ */ jsx(Heading, { children: "Internal Error 500" }),
      /* @__PURE__ */ jsx(Text, { children: "Something went wrong." })
    ] }) }) });
  }
}
export {
  Page
};
