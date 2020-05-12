!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("react"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react"], t)
    : t(((e = e || self).extension = {}), e.react);
})(this, function(e, t) {
  (t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t),
    (e.App = function() {
      return t.createElement("div", null, " Hello From React ");
    });
});
