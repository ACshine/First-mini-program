"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Home-Nav",
  setup(__props) {
    const NavOpts = common_vendor.ref([
      {
        name: "\u8BCA\u524D\u7EA6\u53F7",
        icon: "home-top-p1.png"
      },
      {
        name: "\u4EE3\u529E\u4E70\u836F",
        icon: "home-top-p1.png"
      },
      {
        name: "\u5168\u7A0B\u966A\u8BCA",
        icon: "home-top-p1.png"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(NavOpts.value, (row, index, i0) => {
          return {
            a: "../../static/images/" + row.icon,
            b: common_vendor.t(row.name),
            c: row.name
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f2e679f4"], ["__file", "E:/my_mini_program/First-mini-program/components/Home-Nav/Home-Nav.vue"]]);
wx.createComponent(Component);
