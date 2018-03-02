// Compiled using marko@4.8.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/expresswebsite$0.0.0/views/pages/contact.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    footer_tag_template = marko_loadTemplate(require.resolve("../components/footer-tag.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    footer_tag_tag = marko_loadTag(footer_tag_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"container\"><h1> Contact Us </h1><form id=\"contact\" method=\"post\"><input id=\"name\" class=\"inputFormComponents\" name=\"name\" type=\"text\" placeholder=\"Name\"><input id=\"email\" class=\"inputFormComponents\" name=\"email\" type=\"email\" placeholder=\"Email\"><input id=\"message\" class=\"inputFormComponents \" name=\"message\" type=\"Message\" placeholder=\"Type your message here...\"><input class=\"inputFormComponents submitButton\" type=\"submit\" value=\"Submit\"></form></div>");

  footer_tag_tag({}, out, __component, "7");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/expresswebsite$0.0.0/views/pages/contact.marko",
    tags: [
      "../components/footer-tag.marko"
    ]
  };
