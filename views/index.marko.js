// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/markojs-experiment$1.0.0/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_main_template = marko_loadTemplate(require.resolve("../components/app-main")),
    app_main_tag = marko_loadTag(app_main_template);

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  app_main_tag({
      input: data
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "package: ./browser.json",
      "./style.css"
    ],
    id: "/markojs-experiment$1.0.0/views/index.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "../components/app-main"
    ]
  };
