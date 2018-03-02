// Compiled using marko@4.8.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/expresswebsite$0.0.0/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    header_tag_template = marko_loadTemplate(require.resolve("./components/header-tag.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    header_tag_tag = marko_loadTag(header_tag_template),
    footer_tag_template = marko_loadTemplate(require.resolve("./components/footer-tag.marko")),
    footer_tag_tag = marko_loadTag(footer_tag_template);

function render(input, out, __component, component, state) {
  var data = input;

  header_tag_tag({
      headerData: input.headerData
    }, out, __component, "0");

  out.w("<div class=\"container\"><h1>How May I Help You</h1><p>jumbotron and three supporting pieces of content.Use it as starting point to create something more unique.</p><button class=\"button\" type=\"button\">Learn More</button></div>");

  footer_tag_tag({}, out, __component, "5");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/expresswebsite$0.0.0/views/index.marko",
    tags: [
      "./components/header-tag.marko",
      "./components/footer-tag.marko"
    ]
  };
