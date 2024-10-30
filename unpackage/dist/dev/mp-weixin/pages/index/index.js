"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const mpHtml = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
const _sfc_main = {
  components: {
    mpHtml
  },
  data() {
    return {
      html: `
				<div onmouseover="alert('XSS1')">Hello World!</div>
				<iframe src="javascript:alert('XSS2')"/>
				`
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  _easycom_mp_html2();
}
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  _easycom_mp_html();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.p({
      content: $data.html
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
