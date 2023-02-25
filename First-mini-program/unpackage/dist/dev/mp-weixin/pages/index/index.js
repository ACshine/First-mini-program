"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_Home_Nav2 = common_vendor.resolveComponent("Home-Nav");
  _easycom_Home_Nav2();
}
const _easycom_Home_Nav = () => "../../components/Home-Nav/Home-Nav.js";
if (!Math) {
  _easycom_Home_Nav();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("Hello!");
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/my_mini_program/First-mini-program/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
