// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/markojs-experiment$1.0.0/components/app-header/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  var brand = state.brand;

  out.w("<div class=\"navbar-fixed\"><nav class=\"white\"><div class=\"nav-wrapper\"><a href=\"#!\" class=\"brand-logo grey-text\">" +
    marko_escapeXml(brand) +
    "</a></div></nav></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/markojs-experiment$1.0.0/components/app-header/index.marko",
    component: "./"
  };
