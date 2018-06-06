$_mod.def("/markojs-experiment$1.0.0/components/app-header/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.10.0/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.10.0/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/markojs-experiment$1.0.0/components/app-header/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/markojs-experiment$1.0.0/components/app-header/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "navbar-fixed"
      },
    marko_attrs1 = {
        "class": "white"
      },
    marko_attrs2 = {
        "class": "nav-wrapper"
      },
    marko_attrs3 = {
        href: "#!",
        "class": "brand-logo grey-text"
      },
    marko_helpers = require('/marko$4.10.0/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("92f243"),
    marko_node0 = marko_createElement("UL", {
        "class": "right hide-on-med-and-down"
      }, "4", null, 2, 0, {
        i: marko_const_nextId()
      })
      .e("LI", null, "5", null, 1)
        .e("A", {
            href: "sass.html",
            "class": "grey-text"
          }, "6", null, 1)
          .t("Sass")
      .e("LI", null, "7", null, 1)
        .e("A", {
            href: "badges.html",
            "class": "grey-text"
          }, "8", null, 1)
          .t("Components");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", marko_attrs0, "0", component, 1)
    .e("NAV", marko_attrs1, "1", component, 1)
      .e("DIV", marko_attrs2, "2", component, 2)
        .e("A", marko_attrs3, "3", component, 1)
          .t(input.input.name)
        .n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});