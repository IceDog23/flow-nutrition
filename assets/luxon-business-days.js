!(function (t, n) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd) define([], n);
  else {
    var e = n();
    for (var r in e) ("object" == typeof exports ? exports : t)[r] = e[r];
  }
})(this, function () {
  return (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function (n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 1))
    );
  })([
    function (t, n) {
      t.exports = require("luxon");
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "DateTime", function () {
          return O;
        });
      var r = {};
      e.r(r),
        e.d(r, "getEasterMonthAndDay", function () {
          return u;
        });
      var o = {};
      function u(t) {
        var n = Math.floor,
          e = t % 19,
          r = n(t / 100),
          o = (r - n(r / 4) - n((8 * r + 13) / 25) + 19 * e + 15) % 30,
          u = o - n(o / 28) * (1 - n(29 / (o + 1)) * n((21 - e) / 11)),
          i = u - ((t + n(t / 4) + u + 2 - r + n(r / 4)) % 7),
          a = 3 + n((i + 40) / 44);
        return [a, i + 28 - 31 * n(a / 4)];
      }
      e.r(o),
        e.d(o, "isNewYearsDay", function () {
          return m;
        }),
        e.d(o, "isMLKDay", function () {
          return h;
        }),
        e.d(o, "isEasterDay", function () {
          return b;
        }),
        e.d(o, "isMemorialDay", function () {
          return v;
        }),
        e.d(o, "isIndependanceDay", function () {
          return S;
        }),
        e.d(o, "isLaborDay", function () {
          return D;
        }),
        e.d(o, "isColumbusDay", function () {
          return j;
        }),
        e.d(o, "isThanksgivingDay", function () {
          return g;
        }),
        e.d(o, "isChristmasDay", function () {
          return x;
        });
      var i,
        a = 1,
        y = 5,
        f = 9,
        s = 10,
        d = 11;
      function c(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var e = [],
              r = !0,
              o = !1,
              u = void 0;
            try {
              for (
                var i, a = t[Symbol.iterator]();
                !(r = (i = a.next()).done) &&
                (e.push(i.value), !n || e.length !== n);
                r = !0
              );
            } catch (t) {
              (o = !0), (u = t);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw u;
              }
            }
            return e;
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return l(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return l(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      function p(t) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      i =
        "object" === ("undefined" == typeof luxon ? "undefined" : p(luxon)) &&
        "undefined" != typeof window
          ? luxon.DateTime
          : e(0).DateTime;
      var m = function (t) {
          var n = 1 === t.month,
            e = 1 === t.day;
          return n && e;
        },
        h = function (t) {
          if (!M(t.month, a)) return !1;
          var n = w({ n: 3, day: 1, month: a, year: t.year }),
            e = t.month === n.month,
            r = t.day === n.day;
          return e && r;
        },
        b = function (t) {
          var n = t.year,
            e = c(u(n), 2),
            r = e[0],
            o = e[1],
            a = i.fromObject({ year: n, month: r, day: o }),
            y = t.month === a.month,
            f = t.day === a.day;
          return y && f;
        },
        v = function (t) {
          if (!M(t.month, y)) return !1;
          var n = t.year,
            e = i.fromObject({ year: n, month: y, day: 31 }),
            r = e.weekday,
            o = e.minus({ days: r - 1 }),
            u = t.month === o.month,
            a = t.day === o.day;
          return u && a;
        },
        S = function (t) {
          var n = 7 === t.month,
            e = 4 === t.day;
          return n && e;
        },
        D = function (t) {
          if (!M(t.month, f)) return !1;
          var n = t.year,
            e = i.fromObject({ year: n, month: f, day: 1 }),
            r = e.weekday,
            o = 1 === r ? e : e.plus({ days: 8 - r }),
            u = t.month === o.month,
            a = t.day === o.day;
          return u && a;
        },
        j = function (t) {
          if (!M(t.month, s)) return !1;
          var n = w({ n: 2, day: 1, month: s, year: t.year }),
            e = t.month === n.month,
            r = t.day === n.day;
          return e && r;
        },
        g = function (t) {
          if (!M(t.month, d)) return !1;
          var n = w({ n: 4, day: 4, month: d, year: t.year }),
            e = t.month === n.month,
            r = t.day === n.day;
          return e && r;
        },
        x = function (t) {
          var n = 12 === t.month,
            e = 25 === t.day;
          return n && e;
        };
      function M(t, n) {
        return t === n;
      }
      function w(t) {
        var n = t.n,
          e = t.day,
          r = t.month,
          o = t.year,
          u = i.fromObject({ day: 1, month: r, year: o }),
          a = u.weekday - e,
          y = null;
        return (
          (y = a > 0 ? 7 - a : -1 * a),
          u.plus({ days: y }).plus({ days: 7 * (n - 1) })
        );
      }
      var O,
        T = [1, 2, 3, 4, 5],
        A = [].concat([m, b, v, S, D, g, x]);
      function B(t) {
        return (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      ((O =
        "object" === ("undefined" == typeof luxon ? "undefined" : B(luxon)) &&
        "undefined" != typeof window
          ? luxon.DateTime
          : e(0).DateTime).prototype.availableHolidayMatchers = o),
        (O.prototype.availableHolidayHelpers = r),
        (O.prototype.setupBusiness = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.businessDays,
            e = void 0 === n ? T : n,
            r = t.holidayMatchers,
            o = void 0 === r ? A : r;
          (O.prototype.businessDays = e), (O.prototype.holidayMatchers = o);
        }),
        (O.prototype.clearBusinessSetup = function () {
          delete O.prototype.businessDays, delete O.prototype.holidayMatchers;
        }),
        (O.prototype.isHoliday = function () {
          for (
            var t = this, n = arguments.length, e = new Array(n), r = 0;
            r < n;
            r++
          )
            e[r] = arguments[r];
          var o = this.holidayMatchers || A,
            u = o.some(function (n) {
              return n.apply(void 0, [t].concat(e));
            });
          return u;
        }),
        (O.prototype.isBusinessDay = function () {
          return (this.businessDays || T).includes(this.weekday);
        }),
        (O.prototype.plusBusiness = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.days,
            e = void 0 === n ? 1 : n,
            r = this;
          if (!r.isValid) return r;
          for (
            var o = e < 0, u = o ? Math.round(-1 * e) : Math.round(e);
            u > 0;

          ) {
            var i = o ? -1 : 1;
            (r = r.plus({ days: i })).isBusinessDay() && !r.isHoliday() && u--;
          }
          return r;
        }),
        (O.prototype.minusBusiness = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.days,
            e = void 0 === n ? 1 : n;
          return this.plusBusiness({ days: -e });
        });
    },
  ]);
});
