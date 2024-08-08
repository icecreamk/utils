!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], n)
      : n(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).ASFOR_utils = {}),
        );
})(this, function (e) {
  "use strict";
  var n = function () {
    return (
      (n =
        Object.assign ||
        function (e) {
          for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var o in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          return e;
        }),
      n.apply(this, arguments)
    );
  };
  "function" == typeof SuppressedError && SuppressedError;
  (e.convertListToTree = function (e, t) {
    var r = void 0 === t ? {} : t,
      o = r.id,
      i = void 0 === o ? "id" : o,
      f = r.parentId,
      s = void 0 === f ? "pid" : f,
      u = r.children,
      d = void 0 === u ? "children" : u,
      p = r.isParentValue,
      a = void 0 === p ? "0" : p,
      c = [],
      l = new Map();
    return (
      e.forEach(function (e) {
        var t;
        l.set(e[i], n(n({}, e), (((t = {})[d] = []), t)));
      }),
      e.forEach(function (e) {
        var n = l.get(e[i]);
        if (e[s] === a) c.push(n);
        else {
          var t = l.get(e[s]);
          t && t[d].push(n);
        }
      }),
      c
    );
  }),
    (e.sum = function (e, n) {
      return e + n;
    });
});
