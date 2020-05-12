!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : ((e = e || self).reactAsyncPopup = t(e.react));
})(this, function (e) {
  var t = "default" in e ? e.default : e;
  return function () {
    var n = e.useState(0),
      u = n[0],
      r = n[1];
    return t.createElement(
      "div",
      null,
      t.createElement("h2", null, " ", u, " "),
      t.createElement(
        "button",
        {
          onClick: function () {
            return r(u + 1);
          },
        },
        " ++ count "
      ),
      t.createElement(
        "button",
        {
          onClick: function () {
            return r(u - 1);
          },
        },
        " -- count "
      )
    );
  };
});
