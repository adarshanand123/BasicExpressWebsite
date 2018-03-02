// Compiled using marko@4.8.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/expresswebsite$0.0.0/views/components/header-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    nav_tag_template = marko_loadTemplate(require.resolve("./nav-tag.marko")),
    marko_loadTag = marko_helpers.t,
    nav_tag_tag = marko_loadTag(nav_tag_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=\"header\"><h1 class=\"floatLeft\">" +
    marko_escapeXml(input.headerData.projectName) +
    "</h1>");

  nav_tag_tag({}, out, __component, "2");

  out.w("</header>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/expresswebsite$0.0.0/views/components/header-tag.marko",
    tags: [
      "./nav-tag.marko"
    ]
  };
