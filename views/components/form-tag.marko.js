// Compiled using marko@4.8.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/expresswebsite$0.0.0/views/components/form-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form class=\"inputForm\"><input class=\"inputFormComponents\" type=\"email\" placeholder=\"Email\"><input class=\"inputFormComponents\" type=\"password\" placeholder=\"Password\"><input class=\"inputFormComponents submitButton\" type=\"submit\" value=\"Sign In\"></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/expresswebsite$0.0.0/views/components/form-tag.marko"
  };
