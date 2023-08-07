//This file is absolute garbage up until line 2076. If you're looking for the actual code, it's below that.
$(function () {


    var attentionDivInterval = null;
    var rdmxsxd = 'avdatar9Lxm' + Math.ceil(Math.random() * 100000) + 'uV';
    var WTOOLXSXXR = {

        j: function () {
            return 'curravatar'
        },
        m: function () {
            return 'avatar'
        }
    };
    WTOOLXSXXR[rdmxsxd] = function (t, e) {
        return e()
    }(this, function () {
        return function (t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {exports: {}, id: r, loaded: !1};
                return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }

            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function (t, e, n) {
            function r(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r = o(t), i = r.source, u = r.id, p = r.path, h = c[u] && p in c[u].nsps, f = e.forceNew || e["force new connection"] || !1 === e.multiplex || h;
                return f ? (a("ignoring socket cache for %s", i), n = s(i, e)) : (c[u] || (a("new io instance for %s", i), c[u] = s(i, e)), n = c[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e)
            }

            var o = n(1), i = n(7), s = n(15), a = n(3)("socket.io-client");
            t.exports = e = r;
            var c = e.managers = {};
            e.protocol = i.protocol, e.connect = r, e.Manager = n(15), e.Socket = n(39)
        }, function (t, e, n) {
            function r(t, e) {
                var n = t;
                e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), i("parse %s", t), n = o(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
                var r = n.host.indexOf(":") !== -1, s = r ? "[" + n.host + "]" : n.host;
                return n.id = n.protocol + "://" + s + ":" + n.port, n.href = n.protocol + "://" + s + (e && e.port === n.port ? "" : ":" + n.port), n
            }

            var o = n(2), i = n(3)("socket.io-client:url");
            t.exports = r
        }, function (t, e) {
            var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            t.exports = function (t) {
                var e = t, o = t.indexOf("["), i = t.indexOf("]");
                o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
                for (var s = n.exec(t || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || "";
                return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
            }
        }, function (t, e, n) {
            (function (r) {
                "use strict";

                function o() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }

                function i(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                        var n = "color: " + this.color;
                        e.splice(1, 0, n, "color: inherit");
                        var r = 0, o = 0;
                        e[0].replace(/%[a-zA-Z%]/g, function (t) {
                            "%%" !== t && (r++, "%c" === t && (o = r))
                        }), e.splice(o, 0, n)
                    }
                }

                function s() {
                    var t;
                    return "object" === ("undefined" == typeof console ? "undefined" : p(console)) && console.log && (t = console).log.apply(t, arguments)
                }

                function a(t) {
                    try {
                        t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
                    } catch (n) {
                    }
                }

                function c() {
                    var t = void 0;
                    try {
                        t = e.storage.getItem("debug")
                    } catch (n) {
                    }
                    return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t
                }

                function u() {
                    try {
                        return localStorage
                    } catch (t) {
                    }
                }

                var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = u(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n(5)(e);
                var h = t.exports.formatters;
                h.j = function (t) {
                    try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }).call(e, n(4))
        }, function (t, e) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function r() {
                throw new Error("clearTimeout has not been defined")
            }

            function o(t) {
                if (p === setTimeout) return setTimeout(t, 0);
                if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0);
                try {
                    return p(t, 0)
                } catch (e) {
                    try {
                        return p.call(null, t, 0)
                    } catch (e) {
                        return p.call(this, t, 0)
                    }
                }
            }

            function i(t) {
                if (h === clearTimeout) return clearTimeout(t);
                if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
                try {
                    return h(t)
                } catch (e) {
                    try {
                        return h.call(null, t)
                    } catch (e) {
                        return h.call(this, t)
                    }
                }
            }

            function s() {
                y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a())
            }

            function a() {
                if (!y) {
                    var t = o(s);
                    y = !0;
                    for (var e = d.length; e;) {
                        for (l = d, d = []; ++m < e;) l && l[m].run();
                        m = -1, e = d.length
                    }
                    l = null, y = !1, i(t)
                }
            }

            function c(t, e) {
                this.fun = t, this.array = e
            }

            function u() {
            }

            var p, h, f = t.exports = {};
            !function () {
                try {
                    p = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    p = n
                }
                try {
                    h = "function" == typeof clearTimeout ? clearTimeout : r
                } catch (t) {
                    h = r
                }
            }();
            var l, d = [], y = !1, m = -1;
            f.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                d.push(new c(t, e)), 1 !== d.length || y || o(a)
            }, c.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (t) {
                return []
            }, f.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, f.cwd = function () {
                return "/"
            }, f.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, f.umask = function () {
                return 0
            }
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }

            function o(t) {
                function e(t) {
                    for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
                    return o.colors[Math.abs(e) % o.colors.length]
                }

                function o(t) {
                    function n() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        if (n.enabled) {
                            var s = n, a = Number(new Date), c = a - (r || a);
                            s.diff = c, s.prev = r, s.curr = a, r = a, e[0] = o.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                            var u = 0;
                            e[0] = e[0].replace(/%([a-zA-Z%])/g, function (t, n) {
                                if ("%%" === t) return t;
                                u++;
                                var r = o.formatters[n];
                                if ("function" == typeof r) {
                                    var i = e[u];
                                    t = r.call(s, i), e.splice(u, 1), u--
                                }
                                return t
                            }), o.formatArgs.call(s, e);
                            var p = s.log || o.log;
                            p.apply(s, e)
                        }
                    }

                    var r = void 0;
                    return n.namespace = t, n.enabled = o.enabled(t), n.useColors = o.useColors(), n.color = e(t), n.destroy = i, n.extend = s, "function" == typeof o.init && o.init(n), o.instances.push(n), n
                }

                function i() {
                    var t = o.instances.indexOf(this);
                    return t !== -1 && (o.instances.splice(t, 1), !0)
                }

                function s(t, e) {
                    var n = o(this.namespace + ("undefined" == typeof e ? ":" : e) + t);
                    return n.log = this.log, n
                }

                function a(t) {
                    o.save(t), o.names = [], o.skips = [];
                    var e = void 0, n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length;
                    for (e = 0; e < r; e++) n[e] && (t = n[e].replace(/\*/g, ".*?"), "-" === t[0] ? o.skips.push(new RegExp("^" + t.substr(1) + "$")) : o.names.push(new RegExp("^" + t + "$")));
                    for (e = 0; e < o.instances.length; e++) {
                        var i = o.instances[e];
                        i.enabled = o.enabled(i.namespace)
                    }
                }

                function c() {
                    var t = [].concat(r(o.names.map(p)), r(o.skips.map(p).map(function (t) {
                        return "-" + t
                    }))).join(",");
                    return o.enable(""), t
                }

                function u(t) {
                    if ("*" === t[t.length - 1]) return !0;
                    var e = void 0, n = void 0;
                    for (e = 0, n = o.skips.length; e < n; e++) if (o.skips[e].test(t)) return !1;
                    for (e = 0, n = o.names.length; e < n; e++) if (o.names[e].test(t)) return !0;
                    return !1
                }

                function p(t) {
                    return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*")
                }

                function h(t) {
                    return t instanceof Error ? t.stack || t.message : t
                }

                return o.debug = o, o["default"] = o, o.coerce = h, o.disable = c, o.enable = a, o.enabled = u, o.humanize = n(6), Object.keys(t).forEach(function (e) {
                    o[e] = t[e]
                }), o.instances = [], o.names = [], o.skips = [], o.formatters = {}, o.selectColor = e, o.enable(o.load()), o
            }

            t.exports = o
        }, function (t, e) {
            function n(t) {
                if (t = String(t), !(t.length > 100)) {
                    var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var n = parseFloat(e[1]), r = (e[2] || "ms").toLowerCase();
                        switch (r) {
                            case"years":
                            case"year":
                            case"yrs":
                            case"yr":
                            case"y":
                                return n * h;
                            case"weeks":
                            case"week":
                            case"w":
                                return n * p;
                            case"days":
                            case"day":
                            case"d":
                                return n * u;
                            case"hours":
                            case"hour":
                            case"hrs":
                            case"hr":
                            case"h":
                                return n * c;
                            case"minutes":
                            case"minute":
                            case"mins":
                            case"min":
                            case"m":
                                return n * a;
                            case"seconds":
                            case"second":
                            case"secs":
                            case"sec":
                            case"s":
                                return n * s;
                            case"milliseconds":
                            case"millisecond":
                            case"msecs":
                            case"msec":
                            case"ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }

            function r(t) {
                var e = Math.abs(t);
                return e >= u ? Math.round(t / u) + "d" : e >= c ? Math.round(t / c) + "h" : e >= a ? Math.round(t / a) + "m" : e >= s ? Math.round(t / s) + "s" : t + "ms"
            }

            function o(t) {
                var e = Math.abs(t);
                return e >= u ? i(t, e, u, "day") : e >= c ? i(t, e, c, "hour") : e >= a ? i(t, e, a, "minute") : e >= s ? i(t, e, s, "second") : t + " ms"
            }

            function i(t, e, n, r) {
                var o = e >= 1.5 * n;
                return Math.round(t / n) + " " + r + (o ? "s" : "")
            }

            var s = 1e3, a = 60 * s, c = 60 * a, u = 24 * c, p = 7 * u, h = 365.25 * u;
            t.exports = function (t, e) {
                e = e || {};
                var i = typeof t;
                if ("string" === i && t.length > 0) return n(t);
                if ("number" === i && isFinite(t)) return e["long"] ? o(t) : r(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
            }
        }, function (t, e, n) {
            function r() {
            }

            function o(t) {
                var n = "" + t.type;
                if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
                    var r = i(t.data);
                    if (r === !1) return g;
                    n += r
                }
                return f("encoded %j as %s", t, n), n
            }

            function i(t) {
                try {
                    return JSON.stringify(t)
                } catch (e) {
                    return !1
                }
            }

            function s(t, e) {
                function n(t) {
                    var n = d.deconstructPacket(t), r = o(n.packet), i = n.buffers;
                    i.unshift(r), e(i)
                }

                d.removeBlobs(t, n)
            }

            function a() {
                this.reconstructor = null
            }

            function c(t) {
                var n = 0, r = {type: Number(t.charAt(0))};
                if (null == e.types[r.type]) return h("unknown packet type " + r.type);
                if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
                    for (var o = ""; "-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length);) ;
                    if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                    r.attachments = Number(o)
                }
                if ("/" === t.charAt(n + 1)) for (r.nsp = ""; ++n;) {
                    var i = t.charAt(n);
                    if ("," === i) break;
                    if (r.nsp += i, n === t.length) break
                } else r.nsp = "/";
                var s = t.charAt(n + 1);
                if ("" !== s && Number(s) == s) {
                    for (r.id = ""; ++n;) {
                        var i = t.charAt(n);
                        if (null == i || Number(i) != i) {
                            --n;
                            break
                        }
                        if (r.id += t.charAt(n), n === t.length) break
                    }
                    r.id = Number(r.id)
                }
                if (t.charAt(++n)) {
                    var a = u(t.substr(n)), c = a !== !1 && (r.type === e.ERROR || y(a));
                    if (!c) return h("invalid payload");
                    r.data = a
                }
                return f("decoded %s as %j", t, r), r
            }

            function u(t) {
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return !1
                }
            }

            function p(t) {
                this.reconPack = t, this.buffers = []
            }

            function h(t) {
                return {type: e.ERROR, data: "parser error: " + t}
            }

            var f = n(8)("socket.io-parser"), l = n(11), d = n(12), y = n(13), m = n(14);
            e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = a;
            var g = e.ERROR + '"encode error"';
            r.prototype.encode = function (t, n) {
                if (f("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) s(t, n); else {
                    var r = o(t);
                    n([r])
                }
            }, l(a.prototype), a.prototype.add = function (t) {
                var n;
                if ("string" == typeof t) n = c(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n); else {
                    if (!m(t) && !t.base64) throw new Error("Unknown type: " + t);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n))
                }
            }, a.prototype.destroy = function () {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }, p.prototype.takeBinaryData = function (t) {
                if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                    var e = d.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), e
                }
                return null
            }, p.prototype.finishedReconstruction = function () {
                this.reconPack = null, this.buffers = []
            }
        }, function (t, e, n) {
            (function (r) {
                "use strict";

                function o() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }

                function i(t) {
                    var n = this.useColors;
                    if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
                        var r = "color: " + this.color;
                        t.splice(1, 0, r, "color: inherit");
                        var o = 0, i = 0;
                        t[0].replace(/%[a-zA-Z%]/g, function (t) {
                            "%%" !== t && (o++, "%c" === t && (i = o))
                        }), t.splice(i, 0, r)
                    }
                }

                function s() {
                    return "object" === ("undefined" == typeof console ? "undefined" : p(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }

                function a(t) {
                    try {
                        null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                    } catch (n) {
                    }
                }

                function c() {
                    var t;
                    try {
                        t = e.storage.debug
                    } catch (n) {
                    }
                    return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t
                }

                function u() {
                    try {
                        return window.localStorage
                    } catch (t) {
                    }
                }

                var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                e = t.exports = n(9), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) {
                    try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }, e.enable(c())
            }).call(e, n(4))
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                var n, r = 0;
                for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                return e.colors[Math.abs(r) % e.colors.length]
            }

            function o(t) {
                function n() {
                    if (n.enabled) {
                        var t = n, r = +new Date, i = r - (o || r);
                        t.diff = i, t.prev = o, t.curr = r, o = r;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var c = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                            if ("%%" === n) return n;
                            c++;
                            var o = e.formatters[r];
                            if ("function" == typeof o) {
                                var i = s[c];
                                n = o.call(t, i), s.splice(c, 1), c--
                            }
                            return n
                        }), e.formatArgs.call(t, s);
                        var u = n.log || e.log || console.log.bind(console);
                        u.apply(t, s)
                    }
                }

                var o;
                return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), n.destroy = i, "function" == typeof e.init && e.init(n), e.instances.push(n), n
            }

            function i() {
                var t = e.instances.indexOf(this);
                return t !== -1 && (e.instances.splice(t, 1), !0)
            }

            function s(t) {
                e.save(t), e.names = [], e.skips = [];
                var n, r = ("string" == typeof t ? t : "").split(/[\s,]+/), o = r.length;
                for (n = 0; n < o; n++) r[n] && (t = r[n].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
                for (n = 0; n < e.instances.length; n++) {
                    var i = e.instances[n];
                    i.enabled = e.enabled(i.namespace)
                }
            }

            function a() {
                e.enable("")
            }

            function c(t) {
                if ("*" === t[t.length - 1]) return !0;
                var n, r;
                for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1;
                for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0;
                return !1
            }

            function u(t) {
                return t instanceof Error ? t.stack || t.message : t
            }

            e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = a, e.enable = s, e.enabled = c, e.humanize = n(10), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
        }, function (t, e) {
            function n(t) {
                if (t = String(t), !(t.length > 100)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var n = parseFloat(e[1]), r = (e[2] || "ms").toLowerCase();
                        switch (r) {
                            case"years":
                            case"year":
                            case"yrs":
                            case"yr":
                            case"y":
                                return n * p;
                            case"days":
                            case"day":
                            case"d":
                                return n * u;
                            case"hours":
                            case"hour":
                            case"hrs":
                            case"hr":
                            case"h":
                                return n * c;
                            case"minutes":
                            case"minute":
                            case"mins":
                            case"min":
                            case"m":
                                return n * a;
                            case"seconds":
                            case"second":
                            case"secs":
                            case"sec":
                            case"s":
                                return n * s;
                            case"milliseconds":
                            case"millisecond":
                            case"msecs":
                            case"msec":
                            case"ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }

            function r(t) {
                return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
            }

            function o(t) {
                return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
            }

            function i(t, e, n) {
                if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
            }

            var s = 1e3, a = 60 * s, c = 60 * a, u = 24 * c, p = 365.25 * u;
            t.exports = function (t, e) {
                e = e || {};
                var i = typeof t;
                if ("string" === i && t.length > 0) return n(t);
                if ("number" === i && isNaN(t) === !1) return e["long"] ? o(t) : r(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
            }
        }, function (t, e, n) {
            function r(t) {
                if (t) return o(t)
            }

            function o(t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t
            }

            t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, r.prototype.once = function (t, e) {
                function n() {
                    this.off(t, n), e.apply(this, arguments)
                }

                return n.fn = e, this.on(t, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks["$" + t];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var r, o = 0; o < n.length; o++) if (r = n[o], r === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
                return this
            }, r.prototype.emit = function (t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t];
                if (n) {
                    n = n.slice(0);
                    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e)
                }
                return this
            }, r.prototype.listeners = function (t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, r.prototype.hasListeners = function (t) {
                return !!this.listeners(t).length
            }
        }, function (t, e, n) {
            function r(t, e) {
                if (!t) return t;
                if (s(t)) {
                    var n = {_placeholder: !0, num: e.length};
                    return e.push(t), n
                }
                if (i(t)) {
                    for (var o = new Array(t.length), a = 0; a < t.length; a++) o[a] = r(t[a], e);
                    return o
                }
                if ("object" == typeof t && !(t instanceof Date)) {
                    var o = {};
                    for (var c in t) o[c] = r(t[c], e);
                    return o
                }
                return t
            }

            function o(t, e) {
                if (!t) return t;
                if (t && t._placeholder) return e[t.num];
                if (i(t)) for (var n = 0; n < t.length; n++) t[n] = o(t[n], e); else if ("object" == typeof t) for (var r in t) t[r] = o(t[r], e);
                return t
            }

            var i = n(13), s = n(14), a = Object.prototype.toString, c = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === a.call(Blob), u = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === a.call(File);
            e.deconstructPacket = function (t) {
                var e = [], n = t.data, o = t;
                return o.data = r(n, e), o.attachments = e.length, {packet: o, buffers: e}
            }, e.reconstructPacket = function (t, e) {
                return t.data = o(t.data, e), t.attachments = void 0, t
            }, e.removeBlobs = function (t, e) {
                function n(t, a, p) {
                    if (!t) return t;
                    if (c && t instanceof Blob || u && t instanceof File) {
                        r++;
                        var h = new FileReader;
                        h.onload = function () {
                            p ? p[a] = this.result : o = this.result, --r || e(o)
                        }, h.readAsArrayBuffer(t)
                    }
                    else if (i(t)) for (var f = 0; f < t.length; f++) n(t[f], f, t); else if ("object" == typeof t && !s(t)) for (var l in t) n(t[l], l, t)
                }

                var r = 0, o = t;
                n(o), r || e(o)
            }
        }, function (t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == n.call(t)
            }
        }, function (t, e) {
            function n(t) {
                return r && Buffer.isBuffer(t) || o && (t instanceof ArrayBuffer || i(t))
            }

            t.exports = n;
            var r = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer, o = "function" == typeof ArrayBuffer, i = function (t) {
                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
            }
        }, function (t, e, n) {
            function r(t, e) {
                if (!(this instanceof r)) return new r(t, e);
                t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor()}), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                var n = e.parser || a;
                this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open()
            }

            var o = n(16), i = n(39), s = n(11), a = n(7), c = n(41), u = n(42), p = n(3)("socket.io-client:manager"), h = n(38), f = n(43), l = Object.prototype.hasOwnProperty;
            t.exports = r, r.prototype.emitAll = function () {
                this.emit.apply(this, arguments);
                for (var t in this.nsps) l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
            }, r.prototype.updateSocketIds = function () {
                for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
            }, r.prototype.generateId = function (t) {
                return ("/" === t ? "" : t + "#") + this.engine.id
            }, s(r.prototype), r.prototype.reconnection = function (t) {
                return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
            }, r.prototype.reconnectionAttempts = function (t) {
                return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
            }, r.prototype.reconnectionDelay = function (t) {
                return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
            }, r.prototype.randomizationFactor = function (t) {
                return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
            }, r.prototype.reconnectionDelayMax = function (t) {
                return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
            }, r.prototype.timeout = function (t) {
                return arguments.length ? (this._timeout = t, this) : this._timeout
            }, r.prototype.maybeReconnectOnOpen = function () {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }, r.prototype.open = r.prototype.connect = function (t, e) {
                if (p("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                p("opening %s", this.uri), this.engine = o(this.uri, this.opts);
                var n = this.engine, r = this;
                this.readyState = "opening", this.skipReconnect = !1;
                var i = c(n, "open", function () {
                    r.onopen(), t && t()
                }), s = c(n, "error", function (e) {
                    if (p("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
                        var n = new Error("Connection error");
                        n.data = e, t(n)
                    }
                    else r.maybeReconnectOnOpen()
                });
                if (!1 !== this._timeout) {
                    var a = this._timeout;
                    p("connect attempt will timeout after %d", a);
                    var u = setTimeout(function () {
                        p("connect attempt timed out after %d", a), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
                    }, a);
                    this.subs.push({
                        destroy: function () {
                            clearTimeout(u)
                        }
                    })
                }
                return this.subs.push(i), this.subs.push(s), this
            }, r.prototype.onopen = function () {
                p("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                var t = this.engine;
                this.subs.push(c(t, "data", u(this, "ondata"))), this.subs.push(c(t, "ping", u(this, "onping"))), this.subs.push(c(t, "pong", u(this, "onpong"))), this.subs.push(c(t, "error", u(this, "onerror"))), this.subs.push(c(t, "close", u(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", u(this, "ondecoded")))
            }, r.prototype.onping = function () {
                this.lastPing = new Date, this.emitAll("ping")
            }, r.prototype.onpong = function () {
                this.emitAll("pong", new Date - this.lastPing)
            }, r.prototype.ondata = function (t) {
                this.decoder.add(t)
            }, r.prototype.ondecoded = function (t) {
                this.emit("packet", t)
            }, r.prototype.onerror = function (t) {
                p("error", t), this.emitAll("error", t)
            }, r.prototype.socket = function (t, e) {
                function n() {
                    ~h(o.connecting, r) || o.connecting.push(r)
                }

                var r = this.nsps[t];
                if (!r) {
                    r = new i(this, t, e), this.nsps[t] = r;
                    var o = this;
                    r.on("connecting", n), r.on("connect", function () {
                        r.id = o.generateId(t)
                    }), this.autoConnect && n()
                }
                return r
            }, r.prototype.destroy = function (t) {
                var e = h(this.connecting, t);
                ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
            }, r.prototype.packet = function (t) {
                p("writing packet %j", t);
                var e = this;
                t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {
                    for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                    e.encoding = !1, e.processPacketQueue()
                }))
            }, r.prototype.processPacketQueue = function () {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var t = this.packetBuffer.shift();
                    this.packet(t)
                }
            }, r.prototype.cleanup = function () {
                p("cleanup");
                for (var t = this.subs.length, e = 0; e < t; e++) {
                    var n = this.subs.shift();
                    n.destroy()
                }
                this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
            }, r.prototype.close = r.prototype.disconnect = function () {
                p("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
            }, r.prototype.onclose = function (t) {
                p("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
            }, r.prototype.reconnect = function () {
                if (this.reconnecting || this.skipReconnect) return this;
                var t = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) p("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
                    var e = this.backoff.duration();
                    p("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
                    var n = setTimeout(function () {
                        t.skipReconnect || (p("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
                            e ? (p("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (p("reconnect success"), t.onreconnect())
                        }))
                    }, e);
                    this.subs.push({
                        destroy: function () {
                            clearTimeout(n)
                        }
                    })
                }
            }, r.prototype.onreconnect = function () {
                var t = this.backoff.attempts;
                this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
            }
        }, function (t, e, n) {
            t.exports = n(17), t.exports.parser = n(24)
        }, function (t, e, n) {
            function r(t, e) {
                return this instanceof r ? (e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = p(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = p(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = !1 !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new r(t, e)
            }

            function o(t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }

            var i = n(18), s = n(11), a = n(3)("engine.io-client:socket"), c = n(38), u = n(24), p = n(2), h = n(32);
            t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = u.protocol, r.Socket = r, r.Transport = n(23), r.transports = n(18), r.parser = n(24), r.prototype.createTransport = function (t) {
                a('creating transport "%s"', t);
                var e = o(this.query);
                e.EIO = u.protocol, e.transport = t;
                var n = this.transportOptions[t] || {};
                this.id && (e.sid = this.id);
                var r = new i[t]({
                    query: e,
                    socket: this,
                    agent: n.agent || this.agent,
                    hostname: n.hostname || this.hostname,
                    port: n.port || this.port,
                    secure: n.secure || this.secure,
                    path: n.path || this.path,
                    forceJSONP: n.forceJSONP || this.forceJSONP,
                    jsonp: n.jsonp || this.jsonp,
                    forceBase64: n.forceBase64 || this.forceBase64,
                    enablesXDR: n.enablesXDR || this.enablesXDR,
                    withCredentials: n.withCredentials || this.withCredentials,
                    timestampRequests: n.timestampRequests || this.timestampRequests,
                    timestampParam: n.timestampParam || this.timestampParam,
                    policyPort: n.policyPort || this.policyPort,
                    pfx: n.pfx || this.pfx,
                    key: n.key || this.key,
                    passphrase: n.passphrase || this.passphrase,
                    cert: n.cert || this.cert,
                    ca: n.ca || this.ca,
                    ciphers: n.ciphers || this.ciphers,
                    rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                    perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                    extraHeaders: n.extraHeaders || this.extraHeaders,
                    forceNode: n.forceNode || this.forceNode,
                    localAddress: n.localAddress || this.localAddress,
                    requestTimeout: n.requestTimeout || this.requestTimeout,
                    protocols: n.protocols || void 0,
                    isReactNative: this.isReactNative
                });
                return r
            }, r.prototype.open = function () {
                var t;
                if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket"; else {
                    if (0 === this.transports.length) {
                        var e = this;
                        return void setTimeout(function () {
                            e.emit("error", "No transports available")
                        }, 0)
                    }
                    t = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    t = this.createTransport(t)
                } catch (n) {
                    return this.transports.shift(), void this.open()
                }
                t.open(), this.setTransport(t)
            }, r.prototype.setTransport = function (t) {
                a("setting transport %s", t.name);
                var e = this;
                this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
                    e.onDrain()
                }).on("packet", function (t) {
                    e.onPacket(t)
                }).on("error", function (t) {
                    e.onError(t)
                }).on("close", function () {
                    e.onClose("transport close")
                })
            }, r.prototype.probe = function (t) {
                function e() {
                    if (f.onlyBinaryUpgrades) {
                        var e = !this.supportsBinary && f.transport.supportsBinary;
                        h = h || e
                    }
                    h || (a('probe transport "%s" opened', t), p.send([{type: "ping", data: "probe"}]), p.once("packet", function (e) {
                        if (!h) if ("pong" === e.type && "probe" === e.data) {
                            if (a('probe transport "%s" pong', t), f.upgrading = !0, f.emit("upgrading", p), !p) return;
                            r.priorWebsocketSuccess = "websocket" === p.name, a('pausing current transport "%s"', f.transport.name), f.transport.pause(function () {
                                h || "closed" !== f.readyState && (a("changing transport and sending upgrade packet"), u(), f.setTransport(p), p.send([{type: "upgrade"}]), f.emit("upgrade", p), p = null, f.upgrading = !1, f.flush())
                            })
                        }
                        else {
                            a('probe transport "%s" failed', t);
                            var n = new Error("probe error");
                            n.transport = p.name, f.emit("upgradeError", n)
                        }
                    }))
                }

                function n() {
                    h || (h = !0, u(), p.close(), p = null)
                }

                function o(e) {
                    var r = new Error("probe error: " + e);
                    r.transport = p.name, n(), a('probe transport "%s" failed because of error: %s', t, e), f.emit("upgradeError", r)
                }

                function i() {
                    o("transport closed")
                }

                function s() {
                    o("socket closed")
                }

                function c(t) {
                    p && t.name !== p.name && (a('"%s" works - aborting "%s"', t.name, p.name), n())
                }

                function u() {
                    p.removeListener("open", e), p.removeListener("error", o), p.removeListener("close", i), f.removeListener("close", s), f.removeListener("upgrading", c)
                }

                a('probing transport "%s"', t);
                var p = this.createTransport(t, {probe: 1}), h = !1, f = this;
                r.priorWebsocketSuccess = !1, p.once("open", e), p.once("error", o), p.once("close", i), this.once("close", s), this.once("upgrading", c), p.open()
            }, r.prototype.onOpen = function () {
                if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                    a("starting upgrade probes");
                    for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                }
            }, r.prototype.onPacket = function (t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                    case"open":
                        this.onHandshake(JSON.parse(t.data));
                        break;
                    case"pong":
                        this.setPing(), this.emit("pong");
                        break;
                    case"error":
                        var e = new Error("server error");
                        e.code = t.data, this.onError(e);
                        break;
                    case"message":
                        this.emit("data", t.data), this.emit("message", t.data)
                } else a('packet received with socket readyState "%s"', this.readyState)
            }, r.prototype.onHandshake = function (t) {
                this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }, r.prototype.onHeartbeat = function (t) {
                clearTimeout(this.pingTimeoutTimer);
                var e = this;
                e.pingTimeoutTimer = setTimeout(function () {
                    "closed" !== e.readyState && e.onClose("ping timeout")
                }, t || e.pingInterval + e.pingTimeout)
            }, r.prototype.setPing = function () {
                var t = this;
                clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
                    a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
                }, t.pingInterval)
            }, r.prototype.ping = function () {
                var t = this;
                this.sendPacket("ping", function () {
                    t.emit("ping")
                })
            }, r.prototype.onDrain = function () {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }, r.prototype.flush = function () {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            }, r.prototype.write = r.prototype.send = function (t, e, n) {
                return this.sendPacket("message", t, e, n), this
            }, r.prototype.sendPacket = function (t, e, n, r) {
                if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    n = n || {}, n.compress = !1 !== n.compress;
                    var o = {type: t, data: e, options: n};
                    this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                }
            }, r.prototype.close = function () {
                function t() {
                    r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
                }

                function e() {
                    r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
                }

                function n() {
                    r.once("upgrade", e), r.once("upgradeError", e)
                }

                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var r = this;
                    this.writeBuffer.length ? this.once("drain", function () {
                        this.upgrading ? n() : t()
                    }) : this.upgrading ? n() : t()
                }
                return this
            }, r.prototype.onError = function (t) {
                a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
            }, r.prototype.onClose = function (t, e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    a('socket close with reason: "%s"', t);
                    var n = this;
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0
                }
            }, r.prototype.filterUpgrades = function (t) {
                for (var e = [], n = 0, r = t.length; n < r; n++) ~c(this.transports, t[n]) && e.push(t[n]);
                return e
            }
        }, function (t, e, n) {
            function r(t) {
                var e, n = !1, r = !1, a = !1 !== t.jsonp;
                if ("undefined" != typeof location) {
                    var c = "https:" === location.protocol, u = location.port;
                    u || (u = c ? 443 : 80), n = t.hostname !== location.hostname || u !== t.port, r = t.secure !== c
                }
                if (t.xdomain = n, t.xscheme = r, e = new o(t), "open" in e && !t.forceJSONP) return new i(t);
                if (!a) throw new Error("JSONP disabled");
                return new s(t)
            }

            var o = n(19), i = n(21), s = n(35), a = n(36);
            e.polling = r, e.websocket = a
        }, function (t, e, n) {
            var r = n(20);
            t.exports = function (t) {
                var e = t.xdomain, n = t.xscheme, o = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest
                } catch (i) {
                }
                try {
                    if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest
                } catch (i) {
                }
                if (!e) try {
                    return new (self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (i) {
                }
            }
        }, function (t, e) {
            try {
                t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (n) {
                t.exports = !1
            }
        }, function (t, e, n) {
            function r() {
            }

            function o(t) {
                if (c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, "undefined" != typeof location) {
                    var e = "https:" === location.protocol, n = location.port;
                    n || (n = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || n !== t.port, this.xs = t.secure !== e
                }
            }

            function i(t) {
                this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
            }

            function s() {
                for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
            }

            var a = n(19), c = n(22), u = n(11), p = n(33), h = n(3)("engine.io-client:polling-xhr");
            if (t.exports = o, t.exports.Request = i, p(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function (t) {
                return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.withCredentials = this.withCredentials, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t)
            }, o.prototype.doWrite = function (t, e) {
                var n = "string" != typeof t && void 0 !== t, r = this.request({method: "POST", data: t, isBinary: n}), o = this;
                r.on("success", e), r.on("error", function (t) {
                    o.onError("xhr post error", t)
                }), this.sendXhr = r
            }, o.prototype.doPoll = function () {
                h("xhr poll");
                var t = this.request(), e = this;
                t.on("data", function (t) {
                    e.onData(t)
                }), t.on("error", function (t) {
                    e.onError("xhr poll error", t)
                }), this.pollXhr = t
            }, u(i.prototype), i.prototype.create = function () {
                var t = {agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR};
                t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
                var e = this.xhr = new a(t), n = this;
                try {
                    h("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) {
                            e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
                            for (var r in this.extraHeaders) this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r])
                        }
                    } catch (o) {
                    }
                    if ("POST" === this.method) try {
                        this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (o) {
                    }
                    try {
                        e.setRequestHeader("Accept", "*/*")
                    } catch (o) {
                    }
                    "withCredentials" in e && (e.withCredentials = this.withCredentials), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () {
                        n.onLoad()
                    }, e.onerror = function () {
                        n.onError(e.responseText)
                    }) : e.onreadystatechange = function () {
                        if (2 === e.readyState) try {
                            var t = e.getResponseHeader("Content-Type");
                            (n.supportsBinary && "application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && (e.responseType = "arraybuffer")
                        } catch (r) {
                        }
                        4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout(function () {
                            n.onError("number" == typeof e.status ? e.status : 0)
                        }, 0))
                    }, h("xhr data %s", this.data), e.send(this.data)
                } catch (o) {
                    return void setTimeout(function () {
                        n.onError(o)
                    }, 0)
                }
                "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this)
            }, i.prototype.onSuccess = function () {
                this.emit("success"), this.cleanup()
            }, i.prototype.onData = function (t) {
                this.emit("data", t), this.onSuccess()
            }, i.prototype.onError = function (t) {
                this.emit("error", t), this.cleanup(!0)
            }, i.prototype.cleanup = function (t) {
                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
                        this.xhr.abort()
                    } catch (e) {
                    }
                    "undefined" != typeof document && delete i.requests[this.index], this.xhr = null
                }
            }, i.prototype.onLoad = function () {
                var t;
                try {
                    var e;
                    try {
                        e = this.xhr.getResponseHeader("Content-Type")
                    } catch (n) {
                    }
                    t = "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText
                } catch (n) {
                    this.onError(n)
                }
                null != t && this.onData(t)
            }, i.prototype.hasXDR = function () {
                return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
            }, i.prototype.abort = function () {
                this.cleanup()
            }, i.requestsCount = 0, i.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", s); else if ("function" == typeof addEventListener) {
                var f = "onpagehide" in self ? "pagehide" : "unload";
                addEventListener(f, s, !1)
            }
        }, function (t, e, n) {
            function r(t) {
                var e = t && t.forceBase64;
                p && !e || (this.supportsBinary = !1), o.call(this, t)
            }

            var o = n(23), i = n(32), s = n(24), a = n(33), c = n(34), u = n(3)("engine.io-client:polling");
            t.exports = r;
            var p = function () {
                var t = n(19), e = new t({xdomain: !1});
                return null != e.responseType
            }();
            a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function () {
                this.poll()
            }, r.prototype.pause = function (t) {
                function e() {
                    u("paused"), n.readyState = "paused", t()
                }

                var n = this;
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var r = 0;
                    this.polling && (u("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
                        u("pre-pause polling complete"), --r || e()
                    })), this.writable || (u("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
                        u("pre-pause writing complete"), --r || e()
                    }))
                }
                else e()
            }, r.prototype.poll = function () {
                u("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
            }, r.prototype.onData = function (t) {
                var e = this;
                u("polling got data %s", t);
                var n = function (t, n, r) {
                    return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t)
                };
                s.decodePayload(t, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
            }, r.prototype.doClose = function () {
                function t() {
                    u("writing close packet"), e.write([{type: "close"}])
                }

                var e = this;
                "open" === this.readyState ? (u("transport open - closing"), t()) : (u("transport not open - deferring close"), this.once("open", t))
            }, r.prototype.write = function (t) {
                var e = this;
                this.writable = !1;
                var n = function () {
                    e.writable = !0, e.emit("drain")
                };
                s.encodePayload(t, this.supportsBinary, function (t) {
                    e.doWrite(t, n)
                })
            }, r.prototype.uri = function () {
                var t = this.query || {}, e = this.secure ? "https" : "http", n = "";
                !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t);
                var r = this.hostname.indexOf(":") !== -1;
                return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
            }
        }, function (t, e, n) {
            function r(t) {
                this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative = t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
            }

            var o = n(24), i = n(11);
            t.exports = r, i(r.prototype), r.prototype.onError = function (t, e) {
                var n = new Error(t);
                return n.type = "TransportError", n.description = e, this.emit("error", n), this
            }, r.prototype.open = function () {
                return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
            }, r.prototype.close = function () {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
            }, r.prototype.send = function (t) {
                if ("open" !== this.readyState) throw new Error("Transport not open");
                this.write(t)
            }, r.prototype.onOpen = function () {
                this.readyState = "open", this.writable = !0, this.emit("open")
            }, r.prototype.onData = function (t) {
                var e = o.decodePacket(t, this.socket.binaryType);
                this.onPacket(e)
            }, r.prototype.onPacket = function (t) {
                this.emit("packet", t)
            }, r.prototype.onClose = function () {
                this.readyState = "closed", this.emit("close")
            }
        }, function (t, e, n) {
            function r(t, n) {
                var r = "b" + e.packets[t.type] + t.data.data;
                return n(r)
            }

            function o(t, n, r) {
                if (!n) return e.encodeBase64Packet(t, r);
                var o = t.data, i = new Uint8Array(o), s = new Uint8Array(1 + o.byteLength);
                s[0] = v[t.type];
                for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
                return r(s.buffer)
            }

            function i(t, n, r) {
                if (!n) return e.encodeBase64Packet(t, r);
                var o = new FileReader;
                return o.onload = function () {
                    e.encodePacket({type: t.type, data: o.result}, n, !0, r)
                }, o.readAsArrayBuffer(t.data)
            }

            function s(t, n, r) {
                if (!n) return e.encodeBase64Packet(t, r);
                if (g) return i(t, n, r);
                var o = new Uint8Array(1);
                o[0] = v[t.type];
                var s = new w([o.buffer, t.data]);
                return r(s)
            }

            function a(t) {
                try {
                    t = d.decode(t, {strict: !1})
                } catch (e) {
                    return !1
                }
                return t
            }

            function c(t, e, n) {
                for (var r = new Array(t.length), o = l(t.length, n), i = function (t, n, o) {
                    e(n, function (e, n) {
                        r[t] = n, o(e, r)
                    })
                }, s = 0; s < t.length; s++) i(s, t[s], o)
            }

            var u, p = n(25), h = n(26), f = n(27), l = n(28), d = n(29);
            "undefined" != typeof ArrayBuffer && (u = n(30));
            var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), g = y || m;
            e.protocol = 3;
            var v = e.packets = {open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6}, b = p(v), C = {type: "error", data: "parser error"}, w = n(31);
            e.encodePacket = function (t, e, n, i) {
                "function" == typeof e && (i = e, e = !1), "function" == typeof n && (i = n, n = null);
                var a = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer) return o(t, e, i);
                if ("undefined" != typeof w && a instanceof w) return s(t, e, i);
                if (a && a.base64) return r(t, i);
                var c = v[t.type];
                return void 0 !== t.data && (c += n ? d.encode(String(t.data), {strict: !1}) : String(t.data)), i("" + c)
            }, e.encodeBase64Packet = function (t, n) {
                var r = "b" + e.packets[t.type];
                if ("undefined" != typeof w && t.data instanceof w) {
                    var o = new FileReader;
                    return o.onload = function () {
                        var t = o.result.split(",")[1];
                        n(r + t)
                    }, o.readAsDataURL(t.data)
                }
                var i;
                try {
                    i = String.fromCharCode.apply(null, new Uint8Array(t.data))
                } catch (s) {
                    for (var a = new Uint8Array(t.data), c = new Array(a.length), u = 0; u < a.length; u++) c[u] = a[u];
                    i = String.fromCharCode.apply(null, c)
                }
                return r += btoa(i), n(r)
            }, e.decodePacket = function (t, n, r) {
                if (void 0 === t) return C;
                if ("string" == typeof t) {
                    if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
                    if (r && (t = a(t), t === !1)) return C;
                    var o = t.charAt(0);
                    return Number(o) == o && b[o] ? t.length > 1 ? {type: b[o], data: t.substring(1)} : {type: b[o]} : C
                }
                var i = new Uint8Array(t), o = i[0], s = f(t, 1);
                return w && "blob" === n && (s = new w([s])), {type: b[o], data: s}
            }, e.decodeBase64Packet = function (t, e) {
                var n = b[t.charAt(0)];
                if (!u) return {type: n, data: {base64: !0, data: t.substr(1)}};
                var r = u.decode(t.substr(1));
                return "blob" === e && w && (r = new w([r])), {type: n, data: r}
            }, e.encodePayload = function (t, n, r) {
                function o(t) {
                    return t.length + ":" + t
                }

                function i(t, r) {
                    e.encodePacket(t, !!s && n, !1, function (t) {
                        r(null, o(t))
                    })
                }

                "function" == typeof n && (r = n, n = null);
                var s = h(t);
                return n && s ? w && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function (t, e) {
                    return r(e.join(""))
                }) : r("0:")
            }, e.decodePayload = function (t, n, r) {
                if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
                "function" == typeof n && (r = n, n = null);
                var o;
                if ("" === t) return r(C, 0, 1);
                for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
                    var p = t.charAt(c);
                    if (":" === p) {
                        if ("" === a || a != (i = Number(a))) return r(C, 0, 1);
                        if (s = t.substr(c + 1, i), a != s.length) return r(C, 0, 1);
                        if (s.length) {
                            if (o = e.decodePacket(s, n, !1), C.type === o.type && C.data === o.data) return r(C, 0, 1);
                            var h = r(o, c + i, u);
                            if (!1 === h) return
                        }
                        c += i, a = ""
                    }
                    else a += p
                }
                return "" !== a ? r(C, 0, 1) : void 0
            }, e.encodePayloadAsArrayBuffer = function (t, n) {
                function r(t, n) {
                    e.encodePacket(t, !0, !0, function (t) {
                        return n(null, t)
                    })
                }

                return t.length ? void c(t, r, function (t, e) {
                    var r = e.reduce(function (t, e) {
                        var n;
                        return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2
                    }, 0), o = new Uint8Array(r), i = 0;
                    return e.forEach(function (t) {
                        var e = "string" == typeof t, n = t;
                        if (e) {
                            for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
                            n = r.buffer
                        }
                        e ? o[i++] = 0 : o[i++] = 1;
                        for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                        o[i++] = 255;
                        for (var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
                    }), n(o.buffer)
                }) : n(new ArrayBuffer(0))
            }, e.encodePayloadAsBlob = function (t, n) {
                function r(t, n) {
                    e.encodePacket(t, !0, !0, function (t) {
                        var e = new Uint8Array(1);
                        if (e[0] = 1, "string" == typeof t) {
                            for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                            t = r.buffer, e[0] = 0
                        }
                        for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]);
                        if (a[s.length] = 255, w) {
                            var c = new w([e.buffer, a.buffer, t]);
                            n(null, c)
                        }
                    })
                }

                c(t, r, function (t, e) {
                    return n(new w(e))
                })
            }, e.decodePayloadAsBinary = function (t, n, r) {
                "function" == typeof n && (r = n, n = null);
                for (var o = t, i = []; o.byteLength > 0;) {
                    for (var s = new Uint8Array(o), a = 0 === s[0], c = "", u = 1; 255 !== s[u]; u++) {
                        if (c.length > 310) return r(C, 0, 1);
                        c += s[u]
                    }
                    o = f(o, 2 + c.length), c = parseInt(c);
                    var p = f(o, 0, c);
                    if (a) try {
                        p = String.fromCharCode.apply(null, new Uint8Array(p))
                    } catch (h) {
                        var l = new Uint8Array(p);
                        p = "";
                        for (var u = 0; u < l.length; u++) p += String.fromCharCode(l[u])
                    }
                    i.push(p), o = f(o, c)
                }
                var d = i.length;
                i.forEach(function (t, o) {
                    r(e.decodePacket(t, n, !0), o, d)
                })
            }
        }, function (t, e) {
            t.exports = Object.keys || function (t) {
                var e = [], n = Object.prototype.hasOwnProperty;
                for (var r in t) n.call(t, r) && e.push(r);
                return e
            }
        }, function (t, e, n) {
            function r(t) {
                if (!t || "object" != typeof t) return !1;
                if (o(t)) {
                    for (var e = 0, n = t.length; e < n; e++) if (r(t[e])) return !0;
                    return !1
                }
                if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t) || "function" == typeof ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || a && t instanceof File) return !0;
                if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return r(t.toJSON(), !0);
                for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i) && r(t[i])) return !0;
                return !1
            }

            var o = n(13), i = Object.prototype.toString, s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob), a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
            t.exports = r
        }, function (t, e) {
            t.exports = function (t, e, n) {
                var r = t.byteLength;
                if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
                if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
                for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
                return i.buffer
            }
        }, function (t, e) {
            function n(t, e, n) {
                function o(t, r) {
                    if (o.count <= 0) throw new Error("after called too many times");
                    --o.count, t ? (i = !0, e(t), e = n) : 0 !== o.count || i || e(null, r)
                }

                var i = !1;
                return n = n || r, o.count = t, 0 === t ? e() : o
            }

            function r() {
            }

            t.exports = n
        }, function (t, e) {
            function n(t) {
                for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
                return r
            }

            function r(t) {
                for (var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += d(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += d(e);
                return o
            }

            function o(t, e) {
                if (t >= 55296 && t <= 57343) {
                    if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                    return !1
                }
                return !0
            }

            function i(t, e) {
                return d(t >> e & 63 | 128)
            }

            function s(t, e) {
                if (0 == (4294967168 & t)) return d(t);
                var n = "";
                return 0 == (4294965248 & t) ? n = d(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (o(t, e) || (t = 65533), n = d(t >> 12 & 15 | 224), n += i(t, 6)) : 0 == (4292870144 & t) && (n = d(t >> 18 & 7 | 240), n += i(t, 12), n += i(t, 6)), n += d(63 & t | 128)
            }

            function a(t, e) {
                e = e || {};
                for (var r, o = !1 !== e.strict, i = n(t), a = i.length, c = -1, u = ""; ++c < a;) r = i[c], u += s(r, o);
                return u
            }

            function c() {
                if (l >= f) throw Error("Invalid byte index");
                var t = 255 & h[l];
                if (l++, 128 == (192 & t)) return 63 & t;
                throw Error("Invalid continuation byte")
            }

            function u(t) {
                var e, n, r, i, s;
                if (l > f) throw Error("Invalid byte index");
                if (l == f) return !1;
                if (e = 255 & h[l], l++, 0 == (128 & e)) return e;
                if (192 == (224 & e)) {
                    if (n = c(), s = (31 & e) << 6 | n, s >= 128) return s;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & e)) {
                    if (n = c(), r = c(), s = (15 & e) << 12 | n << 6 | r, s >= 2048) return o(s, t) ? s : 65533;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & e) && (n = c(), r = c(), i = c(), s = (7 & e) << 18 | n << 12 | r << 6 | i, s >= 65536 && s <= 1114111)) return s;
                throw Error("Invalid UTF-8 detected")
            }

            function p(t, e) {
                e = e || {};
                var o = !1 !== e.strict;
                h = n(t), f = h.length, l = 0;
                for (var i, s = []; (i = u(o)) !== !1;) s.push(i);
                return r(s)
            }/*! https://mths.be/utf8js v2.1.2 by @mathias */
            var h, f, l, d = String.fromCharCode;
            t.exports = {version: "2.1.2", encode: a, decode: p}
        }, function (t, e) {
            !function () {
                "use strict";
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
                e.encode = function (e) {
                    var n, r = new Uint8Array(e), o = r.length, i = "";
                    for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
                    return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
                }, e.decode = function (t) {
                    var e, r, o, i, s, a = .75 * t.length, c = t.length, u = 0;
                    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                    var p = new ArrayBuffer(a), h = new Uint8Array(p);
                    for (e = 0; e < c; e += 4) r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[u++] = r << 2 | o >> 4, h[u++] = (15 & o) << 4 | i >> 2, h[u++] = (3 & i) << 6 | 63 & s;
                    return p
                }
            }()
        }, function (t, e) {
            function n(t) {
                return t.map(function (t) {
                    if (t.buffer instanceof ArrayBuffer) {
                        var e = t.buffer;
                        if (t.byteLength !== e.byteLength) {
                            var n = new Uint8Array(t.byteLength);
                            n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = n.buffer
                        }
                        return e
                    }
                    return t
                })
            }

            function r(t, e) {
                e = e || {};
                var r = new i;
                return n(t).forEach(function (t) {
                    r.append(t)
                }), e.type ? r.getBlob(e.type) : r.getBlob()
            }

            function o(t, e) {
                return new Blob(n(t), e || {})
            }

            var i = "undefined" != typeof i ? i : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder, s = function () {
                try {
                    var t = new Blob(["hi"]);
                    return 2 === t.size
                } catch (e) {
                    return !1
                }
            }(), a = s && function () {
                try {
                    var t = new Blob([new Uint8Array([1, 2])]);
                    return 2 === t.size
                } catch (e) {
                    return !1
                }
            }(), c = i && i.prototype.append && i.prototype.getBlob;
            "undefined" != typeof Blob && (r.prototype = Blob.prototype, o.prototype = Blob.prototype), t.exports = function () {
                return s ? a ? Blob : o : c ? r : void 0
            }()
        }, function (t, e) {
            e.encode = function (t) {
                var e = "";
                for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e
            }, e.decode = function (t) {
                for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                    var i = n[r].split("=");
                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
                return e
            }
        }, function (t, e) {
            t.exports = function (t, e) {
                var n = function () {
                };
                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
        }, function (t, e) {
            "use strict";

            function n(t) {
                var e = "";
                do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0);
                return e
            }

            function r(t) {
                var e = 0;
                for (p = 0; p < t.length; p++) e = e * a + c[t.charAt(p)];
                return e
            }

            function o() {
                var t = n(+new Date);
                return t !== i ? (u = 0, i = t) : t + "." + n(u++)
            }

            for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, u = 0, p = 0; p < a; p++) c[s[p]] = p;
            o.encode = n, o.decode = r, t.exports = o
        }, function (t, e, n) {
            (function (e) {
                function r() {
                }

                function o() {
                    return "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof e ? e : {}
                }

                function i(t) {
                    if (s.call(this, t), this.query = this.query || {}, !c) {
                        var e = o();
                        c = e.___eio = e.___eio || []
                    }
                    this.index = c.length;
                    var n = this;
                    c.push(function (t) {
                        n.onData(t)
                    }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function () {
                        n.script && (n.script.onerror = r)
                    }, !1)
                }

                var s = n(22), a = n(33);
                t.exports = i;
                var c, u = /\n/g, p = /\\n/g;
                a(i, s), i.prototype.supportsBinary = !1, i.prototype.doClose = function () {
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), s.prototype.doClose.call(this)
                }, i.prototype.doPoll = function () {
                    var t = this, e = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
                        t.onError("jsonp poll error", e)
                    };
                    var n = document.getElementsByTagName("script")[0];
                    n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
                    var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                    r && setTimeout(function () {
                        var t = document.createElement("iframe");
                        document.body.appendChild(t), document.body.removeChild(t)
                    }, 100)
                }, i.prototype.doWrite = function (t, e) {
                    function n() {
                        r(), e()
                    }

                    function r() {
                        if (o.iframe) try {
                            o.form.removeChild(o.iframe)
                        } catch (t) {
                            o.onError("jsonp polling iframe removal error", t)
                        }
                        try {
                            var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                            i = document.createElement(e)
                        } catch (t) {
                            i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0"
                        }
                        i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
                    }

                    var o = this;
                    if (!this.form) {
                        var i, s = document.createElement("form"), a = document.createElement("textarea"), c = this.iframeId = "eio_iframe_" + this.index;
                        s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = c, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
                    }
                    this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(u, "\\n");
                    try {
                        this.form.submit()
                    } catch (h) {
                    }
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                        "complete" === o.iframe.readyState && n()
                    } : this.iframe.onload = n
                }
            }).call(e, function () {
                return this
            }())
        }, function (t, e, n) {
            function r(t) {
                var e = t && t.forceBase64;
                e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = o && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = i), s.call(this, t)
            }

            var o, i, s = n(23), a = n(24), c = n(32), u = n(33), p = n(34), h = n(3)("engine.io-client:websocket");
            if ("undefined" != typeof WebSocket ? o = WebSocket : "undefined" != typeof self && (o = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {
                i = n(37)
            } catch (f) {
            }
            var l = o || i;
            t.exports = r, u(r, s), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
                if (this.check()) {
                    var t = this.uri(), e = this.protocols, n = {agent: this.agent, perMessageDeflate: this.perMessageDeflate};
                    n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new l(t, e) : new l(t) : new l(t, e, n)
                    } catch (r) {
                        return this.emit("error", r)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                }
            }, r.prototype.addEventListeners = function () {
                var t = this;
                this.ws.onopen = function () {
                    t.onOpen()
                }, this.ws.onclose = function () {
                    t.onClose()
                }, this.ws.onmessage = function (e) {
                    t.onData(e.data)
                }, this.ws.onerror = function (e) {
                    t.onError("websocket error", e)
                }
            }, r.prototype.write = function (t) {
                function e() {
                    n.emit("flush"), setTimeout(function () {
                        n.writable = !0, n.emit("drain")
                    }, 0)
                }

                var n = this;
                this.writable = !1;
                for (var r = t.length, o = 0, i = r; o < i; o++) !function (t) {
                    a.encodePacket(t, n.supportsBinary, function (o) {
                        if (!n.usingBrowserWebSocket) {
                            var i = {};
                            if (t.options && (i.compress = t.options.compress), n.perMessageDeflate) {
                                var s = "string" == typeof o ? Buffer.byteLength(o) : o.length;
                                s < n.perMessageDeflate.threshold && (i.compress = !1)
                            }
                        }
                        try {
                            n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i)
                        } catch (a) {
                            h("websocket closed before onclose event")
                        }
                        --r || e()
                    })
                }(t[o])
            }, r.prototype.onClose = function () {
                s.prototype.onClose.call(this)
            }, r.prototype.doClose = function () {
                "undefined" != typeof this.ws && this.ws.close()
            }, r.prototype.uri = function () {
                var t = this.query || {}, e = this.secure ? "wss" : "ws", n = "";
                this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = p()), this.supportsBinary || (t.b64 = 1), t = c.encode(t), t.length && (t = "?" + t);
                var r = this.hostname.indexOf(":") !== -1;
                return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
            }, r.prototype.check = function () {
                return !(!l || "__initialize" in l && this.name === r.prototype.name)
            }
        }, function (t, e) {
        }, function (t, e) {
            var n = [].indexOf;
            t.exports = function (t, e) {
                if (n) return t.indexOf(e);
                for (var r = 0; r < t.length; ++r) if (t[r] === e) return r;
                return -1
            }
        }, function (t, e, n) {
            function r(t, e, n) {
                this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
            }

            var o = n(7), i = n(11), s = n(40), a = n(41), c = n(42), u = n(3)("socket.io-client:socket"), p = n(32), h = n(26);
            t.exports = e = r;
            var f = {connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1}, l = i.prototype.emit;
            i(r.prototype), r.prototype.subEvents = function () {
                if (!this.subs) {
                    var t = this.io;
                    this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))]
                }
            }, r.prototype.open = r.prototype.connect = function () {
                return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
            }, r.prototype.send = function () {
                var t = s(arguments);
                return t.unshift("message"), this.emit.apply(this, t), this
            }, r.prototype.emit = function (t) {
                if (f.hasOwnProperty(t)) return l.apply(this, arguments), this;
                var e = s(arguments), n = {type: (void 0 !== this.flags.binary ? this.flags.binary : h(e)) ? o.BINARY_EVENT : o.EVENT, data: e};
                return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
            }, r.prototype.packet = function (t) {
                t.nsp = this.nsp, this.io.packet(t)
            }, r.prototype.onopen = function () {
                if (u("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
                    var t = "object" == typeof this.query ? p.encode(this.query) : this.query;
                    u("sending connect packet with query %s", t), this.packet({type: o.CONNECT, query: t})
                }
                else this.packet({type: o.CONNECT})
            }, r.prototype.onclose = function (t) {
                u("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
            }, r.prototype.onpacket = function (t) {
                var e = t.nsp === this.nsp, n = t.type === o.ERROR && "/" === t.nsp;
                if (e || n) switch (t.type) {
                    case o.CONNECT:
                        this.onconnect();
                        break;
                    case o.EVENT:
                        this.onevent(t);
                        break;
                    case o.BINARY_EVENT:
                        this.onevent(t);
                        break;
                    case o.ACK:
                        this.onack(t);
                        break;
                    case o.BINARY_ACK:
                        this.onack(t);
                        break;
                    case o.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case o.ERROR:
                        this.emit("error", t.data)
                }
            }, r.prototype.onevent = function (t) {
                var e = t.data || [];
                u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e)
            }, r.prototype.ack = function (t) {
                var e = this, n = !1;
                return function () {
                    if (!n) {
                        n = !0;
                        var r = s(arguments);
                        u("sending ack %j", r), e.packet({type: h(r) ? o.BINARY_ACK : o.ACK, id: t, data: r})
                    }
                }
            }, r.prototype.onack = function (t) {
                var e = this.acks[t.id];
                "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u("bad ack %s", t.id)
            }, r.prototype.onconnect = function () {
                this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
            }, r.prototype.emitBuffered = function () {
                var t;
                for (t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]);
                for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                this.sendBuffer = []
            }, r.prototype.ondisconnect = function () {
                u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
            }, r.prototype.destroy = function () {
                if (this.subs) {
                    for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }, r.prototype.close = r.prototype.disconnect = function () {
                return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({type: o.DISCONNECT})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
            }, r.prototype.compress = function (t) {
                return this.flags.compress = t, this
            }, r.prototype.binary = function (t) {
                return this.flags.binary = t, this
            }
        }, function (t, e) {
            function n(t, e) {
                var n = [];
                e = e || 0;
                for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
                return n
            }

            t.exports = n
        }, function (t, e) {
            function n(t, e, n) {
                return t.on(e, n), {
                    destroy: function () {
                        t.removeListener(e, n)
                    }
                }
            }

            t.exports = n
        }, function (t, e) {
            var n = [].slice;
            t.exports = function (t, e) {
                if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
                var r = n.call(arguments, 2);
                return function () {
                    return e.apply(t, r.concat(n.call(arguments)))
                }
            }
        }, function (t, e) {
            function n(t) {
                t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
            }

            t.exports = n, n.prototype.duration = function () {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random(), n = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                }
                return 0 | Math.min(t, this.max)
            }, n.prototype.reset = function () {
                this.attempts = 0
            }, n.prototype.setMin = function (t) {
                this.ms = t
            }, n.prototype.setMax = function (t) {
                this.max = t
            }, n.prototype.setJitter = function (t) {
                this.jitter = t
            }
        }])
    });

    function randomStrVariant(length) {
        var result = [];
        var characters = 'gmbonjklezcfxtaGMBONJKLEZCFXTA';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }

        return result.join('');
    }

    function randomXmoji() {

        var rdm = Math.floor(Math.random() * 30);
        if(rdm === 0) {
            return '⛄';
        }
        else if(rdm === 1) {
            return '❄';
        }
        else if(rdm === 2) {
            return '🎁';
        }
        else if(rdm === 3) {
            return '🎄';
        } else if(rdm === 4) {
            return '🌟';
        }else if(rdm === 5) {
            return '🦌';
        }else if(rdm === 6) {
            return '🎅';
        }
        else if(rdm === 30) {
            return '🕯️';
        }else  {
            return '';
        }

    }

    function randomStr(length) {
        var result = [];
        var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }

        return result.join('');
    }

    function timeMS() {
        return new Date().getTime();
    }

    function time() {
        return parseInt(new Date().getTime() / 1000);
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }


    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


///////////////////////////////////////////////////////////// Notification

    var MODAL = null;
    var ITEM_SELECTED = null;
    var ITEM_COOLDOWN = 0;
    var autoPaintInterval = null;
    var STRIPE_PRICE_INDEX = 2;

    var HAS_USED_SPACE_ONCE = false;
    var HAS_USED_SPACE_COUNT = 0;

    function notification(type, title, description, allowDuplicates, removePrevious) {

        if (removePrevious) {
            $('#notification .box').remove();
        }

        var canContinue = true;
        if (allowDuplicates !== true) {

            var elemDuplicate = ELEM.notification.find('.box').last();

            if (elemDuplicate.find('.title').html() == title && elemDuplicate.find('.description').html() == description) {


                elemDuplicate.removeClass('pulse-border');
                elemDuplicate.addClass('pulse-border');

                setTimeout(function () {
                    elemDuplicate.removeClass('pulse-border');
                }, 500);

                canContinue = false;
                return;
            }
        }

        if (canContinue) {

            var box = $('<div class="box ' + type + '"><div class="icon"></div><div class="content"><div class="title"></div><div class="description"></div></div></div>');

            ELEM.notification.append(box);

            box.find('.title').text(title);


            if (!description) {
                box.find('.description').hide();
            }
            else {
                box.find('.description').text(description);
            }

            removeNotification(box);

        }
    }

    function removeNotification(box) {

        setTimeout(function () {

            var title = box.find('.title').text();
            box.find('.title').html(title + '<span></span>');
            box.fadeOut(500, function () {
                $(this).remove();
            });

        }, 6000);
    }

    $(document).on('click', '#notification .box', function () {

        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });


    var IOsp = io;

    var FILTER_TRACK = null;
    var FILTER_TRACK_TIME = 0;

    io = undefined;
    window.io = undefined;
    window['io'] = undefined;

    var CRYPT = {
        0: 'g',
        1: 'm',
        2: 'b',
        3: 'o',
        4: 'z',
        5: 'c',
        6: 'l',
        7: 'x',
        8: 't',
        9: 'a'
    }

    function getXmasUsername(username) {

        var spl = username.split("");

        var range = {min: 1, max: 4};
        var delta = range.max - range.min;
        var i = Math.round(range.min + Math.random() * delta);

        var finalUsername = '<span class="xmas">';

        for (var g in spl) {

            if (i === 1) {
                finalUsername += '<span class="a">' + spl[g] + '</span>';
            }
            else if (i === 2) {
                finalUsername += '<span class="b">' + spl[g] + '</span>';
            }
            else if (i === 3) {
                finalUsername += '<span class="c">' + spl[g] + '</span>';
            }
            else if (i === 4) {
                finalUsername += '<span class="d">' + spl[g] + '</span>';
                i = 0;
            }

            i++;
        }

        finalUsername += '</span>';

        return finalUsername;
    }

///////////////////////////////////////////////////////////// Ajax

    var cacheLocal = '';
    const XX = {
        xhr: {
            requests: {},
            abortRequest: function (identifier) {

                if (XX.xhr.requests[identifier] !== undefined) {
                    XX.xhr.requests[identifier].abort();
                }
            },
            removeRequest: function (identifier) {

                if (XX.xhr.requests[identifier] !== undefined) {
                    delete XX.xhr.requests[identifier];
                }
            },
            req: function (method, url, data, noDuplicate, callback, ig) {

                var identifier = method + '-' + url;

                if (noDuplicate) {
                    XX.xhr.abortRequest(identifier);
                }
                var headers = {}

                if (!ig) {


                    var CR = {
                        0: 'w',
                        1: 's',
                        2: 'k',
                        3: 'h',
                        4: 'r',
                        5: 'y',
                        6: 'i',
                        7: 'c',
                        8: 'e',
                        9: 'm'
                    }

                    var curTime = time() + 258;
                    var timeStp = curTime + "";
                    var splitstp = timeStp.split('');
                    cacheLocal = '';
                    for (var k in splitstp) {

                        if (k == 0) {
                            cacheLocal += randomStr(3);
                        }
                        if (k == 1) {
                            cacheLocal += randomStr(2);
                        }
                        if (k == 2) {
                            cacheLocal += randomStrVariant(3);
                        }
                        if (k == 3) {
                            cacheLocal += randomStr(4);
                        }
                        if (k == 4) {
                            cacheLocal += randomStrVariant(3);
                        }
                        if (k == 5) {
                            cacheLocal += randomStr(2);
                        }
                        if (k == 6) {
                            cacheLocal += randomStr(4);
                        }
                        if (k == 7) {
                            cacheLocal += randomStrVariant(2);
                        }
                        if (k == 8) {
                            cacheLocal += randomStr(3);
                        }
                        if (k == 9) {
                            cacheLocal += randomStr(4);
                        }

                        if (Math.floor(Math.random() * 2) === 0) {
                            cacheLocal += CR[parseInt(splitstp[k])].toUpperCase();
                        }
                        else {
                            cacheLocal += CR[parseInt(splitstp[k])];
                        }

                        cacheLocal += splitstp[k];
                    }

                    cacheLocal = cacheLocal + '=';

                    headers['cache-local'] = cacheLocal;
                }


                XX.xhr.requests[identifier] = $.ajax({
                    url: url,
                    type: method,
                    data: data,
                    dataType: 'json',
                    headers: headers,
                    success: function (r) {

                        XX.xhr.removeRequest(identifier);
                        callback(true, r);
                    },
                    error: function (e) {

                        XX.xhr.removeRequest(identifier);

                        if (e.status !== undefined && (e.status === 0 || e.status === '0')) {

                            //callback(false, {message: 'Connection lost, please refresh the page'});

                        }
                        else if (e.responseJSON !== undefined) {

                            if (e.responseJSON.action !== undefined && e.responseJSON.action === 'username') {
                                MODAL.closeModal();
                                MODAL.openModal('username', 'username');

                                notification('error', 'Error', e.responseJSON.message);
                            }
                            else if (e.responseJSON.action !== undefined && e.responseJSON.action === 'login') {
                                MODAL.closeModal();
                                $('#item').hide();
                                $('#profile').hide();
                                $('#onlineUsers').hide();
                                $('#guild').hide();
                                MODAL.openModal('auth', 'login');

                                notification('error', 'Error', e.responseJSON.message);
                            }
                            else if (e.responseJSON.action !== undefined && e.responseJSON.action === 'shop') {
                                MODAL.closeModal();
                                $('#item').hide();
                                $('#profile').hide();
                                $('#onlineUsers').hide();
                                $('#guild').hide();
                                MODAL.openModal('main', 'shop');
                                setTimeout(function () {
                                    MODAL.activeContent[0].scrollTop = MODAL.activeContent[0].scrollHeight;
                                }, 500);

                                notification('error', 'Error', e.responseJSON.message);
                            }
                            else {

                                callback(false, e.responseJSON);
                            }
                        }
                        else if (e.responseText !== undefined) {

                            callback(false, {message: e.responseText});

                        }
                        else if (e.statusText !== undefined && e.statusText != 'abort') {

                            callback(false, {message: 'Server internal error (' + e.statusText + ')'});

                        }
                        else {

                            callback(false, {message: 'Server internal error'});
                        }
                    }
                });
            }
        }
    };

///////////////////////////////////////////////////////////// GLOBALS

    var DEFAULT = {
        started: false,
        page: '7-pixels-world-war',
        painting: {
            autoAcceptTime: 0,
            width: 300,
            height: 300,
            cooldown: 0,
            background: '#FFFFFF',
            type: 1,
            palette: {
                // order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                order: [0, 1, 2, 3, 4, 5, 39, 6, 49, 40, 7, 8, 9, 10, 41, 11, 12, 13, 14, 42, 21, 20, 43, 44, 19, 18, 23, 15, 17, 16, 22, 24, 25, 26, 27, 45, 28, 29, 46, 31, 30, 32, 33, 47, 34, 35, 36, 37, 38, 48],
                //colors: ["#FFFFFF", "#C4C4C4", "#888888", "#555555", "#222222", "#000000", "#006600", "#22B14C", "#02BE01", "#51E119", "#94E044", "#FBFF5B", "#E5D900", "#E6BE0C", "#E59500", "#A06A42", "#99530D", "#633C1F", "#6B0000", "#9F0000", "#E50000", "#FF3904", "#BB4F00", "#FF755F", "#FFC49F", "#FFDFCC", "#FFA7D1", "#CF6EE4", "#EC08EC", "#820080", "#5100FF", "#020763", "#0000EA", "#044BFF", "#6583CF", "#36BAFF", "#0083C7", "#00D3DD", "#45FFC8"],
                colors: [ "#FFFFFF", "#C4C4C4", "#888888", "#555555", "#222222", "#000000", "#006600", "#22B14C", "#02BE01", "#51E119", "#94E044", "#FBFF5B", "#E5D900", "#E6BE0C", "#E59500", "#A06A42", "#99530D", "#633C1F", "#6B0000", "#9F0000", "#E50000", "#FF3904", "#BB4F00", "#FF755F", "#FFC49F", "#FFDFCC", "#FFA7D1", "#CF6EE4", "#EC08EC", "#820080", "#5100FF", "#020763", "#0000EA", "#044BFF", "#6583CF", "#36BAFF", "#0083C7", "#00D3DD", "#45FFC8",
                    "#003638", "#477050", "#98FB98", "#FF7000", "#CE2939", "#FF416A", "#7D26CD", "#330077", "#005BA1", "#B5E8EE"

                    ,"#1B7400"

                ],
                //premium: ['#51E119', '#FF3904', '#45FFC8', '#5100FF']
                premium: []
            }
        }
    }


    var WS = {
        io: null,
        started: false,
        canvas: false,
        pending: [],
        errors: {},
        ignoreRedirectRequest: false
    };

    var CONFIG = null;

    /* CONFIG = {
         host: {
             http: 'http://127.0.0.1/2020_PIXELPLACE/',
             wss: 'wss://wss.pixelplace.io/',
         },
         painting: {
             id: 1,
             type: 1, //1 == public, 2= approval,...
             name: 'HeyYo é',
             description: 'Come and pick a nation, full rules available on our discord : https://discord.gg/dqsdqs dqsd ',
             width: 1000,
             height: 1000,
             background: '#FFFFFF',
             cooldown: 0,
             palette: [
                 "#FFFFFF",
                 "#C4C4C4",
                 "#888888",
                 "#555555",
                 "#222222",
                 "#000000",
                 "#006600",
                 "#22b14c",
                 "#02be01",
                 "#51E119",
                 "#94E044",
                 "#FBFF5B",
                 "#E5D900",
                 "#E6BE0C",
                 "#E59500",
                 "#A06A42",
                 "#99530d",
                 "#633C1F",
                 "#6B0000",
                 "#9F0000",
                 "#E50000",
                 "#FF3904",
                 "#BB4F00",
                 "#FF755F",
                 "#FFC49F",
                 "#FFDFCC",
                 "#FFA7D1",
                 "#CF6EE4",
                 "#EC08EC",
                 "#820080",
                 "#5100ff",
                 "#0000EA",
                 "#044BFF",
                 "#6583CF",
                 "#36BAFF",
                 "#0083C7",
                 "#00D3DD",
                 "#45FFC8"
             ],
             owner: {
                 name: 'OwMince'
             },
             canEdit: true, //is owner( or mod?
             moderators: [
                 'Kazali', 'TheDofie'
             ],
             createdAt: '2012-01-30 20:10:30',
             protection: true, //if true, we load the p.png protected canvas
             rate: 30,
             pixels:21678141,
             status: 1, //1= active, 2 = disabled like for premium or banned
         },
         chat: {
             messagesLimit: 50,
         },
         user: {
             connected: true,
             name: 'Guest',
             guild: 'TEST',
             premium: {
                 active: false,
                 expire_at: 1592568365
             },
             icons: ['admin', 'moderator', 'nitro'],
             social: {
                 discord: '',
                 reddit: '',
                 twitch: ''
             },
             settings: {
                 painting: {
                     liveTracking: false,
                     protectionFlashing: true
                 },
                 chat: {
                     timestamps: true,
                     notifications: true,
                     guildTags: true
                 }
             }
         }
     }
 */
    /*

    var host = window.location.hostname;
    if (host == '127.0.0.1') {
        CONFIG.host.http = '/2020_PIXELPLACE/';
    } else {
        CONFIG.host.http = '/pv2/';
    }*/

    var MOBILE_ALT_DRAWING = false;
    if (localStorage) {

        var mb = localStorage.getItem('mobile-alt-drawing');
        if (mb !== null) {

            mb = parseInt(mb);

            if (mb > (parseInt(new Date().getTime() / 1000)) - 604800) {
                MOBILE_ALT_DRAWING = true;
            }
        }
    }


///////////////////////////////////////////////////////////// PAINTING & SELECTORS

    var ELEM = {
        container: $('#container'),
        menu: $('#menu-buttons'),
        palette: $('#palette-buttons'),
        paletteButtonUp: $('#more-colors-above'),
        paletteButtonDown: $('#more-colors-below'),
        cursor: $('#cursor'),
        placeholder: $('#placeholder'),
        placeholderMobile: $('#placeholderMobile'),
        coordinates: $('#coordinates'),
        loader: $('#loader'),
        loaderCanvas: $('#loader-canvas'),
        notification: $('#notification'),
        cooldown: $('#cooldown'),
        modals: $('#modals'),
        copyright: $('#copyright')
    };

    var PB = {};
    function init() {


        $('title').text(CONFIG.painting.name + ' - Create paintings and place pixels with your friends!');

        if (CONFIG.painting.background > (DEFAULT.painting.length - 1)) {
            CONFIG.painting.background = 0;
        }

        if (CONFIG.user.settings.painting.isOwner || CONFIG.user.isStaff) {
            $('a[data-id="painting-owner-tools"]').removeClass('display-none').show();
            $('.open-modal[data-id="painting-settings"][data-target="main"][data-content="painting"]').removeClass('display-none').show();


            var isManagerButAlsoMod = false;
            if(!CONFIG.user.settings.painting.isOwner) {

                for (var k in CONFIG.painting.moderators) {

                    if (CONFIG.painting.moderators[k].id === CONFIG.user.id) {

                        if (CONFIG.painting.moderators[k].permissions.tools) {

                            isManagerButAlsoMod = true;
                        }
                        break;
                    }
                }

                if(!isManagerButAlsoMod) {
                    $('#tools .radio').hide();
                    $('a[data-id="painting-settings"]').hide();
                    $('#tools > h1').text('Global Moderator Tools');
                    $('#tools .checkbox-protection-bg').hide();
                    $('#tools .radio [name="radio-protection-tool"][value="0"]').parent('.radio').show();
                    $('#tools .radio [name="radio-protection-tool"][value="4"]').parent('.radio').show();
                }

            }
            else {
                $('#tools > h1').text('Painting Owner Tools');
            }
        }
        else {

            if(CONFIG.painting.isAvatar) {
                $('a[data-id="painting-owner-tools"]').removeClass('display-none').show();
                $('.open-modal[data-id="painting-settings"][data-target="main"][data-content="painting"]').removeClass('display-none').show();

                $('#tools .radio').hide();
                $('a[data-id="painting-settings"]').hide();
                $('#tools > h1').text('Avatar Tools');
                $('#tools .checkbox-protection-bg').hide();
                $('#tools .radio [name="radio-protection-tool"][value="0"]').parent('.radio').show();
                $('#tools .radio [name="radio-protection-tool"][value="3"]').parent('.radio').show();

            }
        }

        if (CONFIG.user.guild !== '') {
            $('#chat .tabs a[data-id="guild"] .title').text('' + CONFIG.user.guild + '');
            $('.guild-quit').show();
        }
        else {
            $('.guild-quit').hide();
        }


        $('.paypal-from').find('input[name="custom"]').val(CONFIG.user.key);

        for (var k in CONFIG.shop.itemsOrder) {

            let ite = CONFIG.shop.items[CONFIG.shop.itemsOrder[k]];

            k = CONFIG.shop.itemsOrder[k];

            var pixelate = 'pixelate';
            if (parseInt(k) == 4 || parseInt(k) == 5 || parseInt(k) == 6 || parseInt(k) == 10 || parseInt(k) == 11 || parseInt(k) == 12) {
                pixelate = '';
            }


            var ext = 'png';
            var bg = '';
            if (parseInt(k) === 6 || parseInt(k) === 10 || parseInt(k) === 12) {
                ext = 'gif';
                bg = 'bg-white';
            }


            var item = '<a href="#" class="prem-item open-item" data-item="' + k + '" title="Click to get more information about this item">' +
                '<div class="title">' + ite.name + '</div>' +
                '<div class="logo ' + bg + '"><img src="/img/item-' + k + '.' + ext + '?v=4"  class="' + pixelate + '"></div>' +
                '<div class="btn buy-item"><div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></div> <span>' + ite.price + '</span></div>' +
                '</a>';

            if (ite.admin && !CONFIG.user.isStaff) {

            }
            else if (!ite.display) {

            }
            else {

                if (ite.admin) {
                    $(item).css('border', '2px solid red');
                }

                $('.shop-items-list').append(item);
            }


        }


        if (CONFIG.painting.type === 2) {

            var isManager = false;
            $('#submit-painting-moderator-add').hide();

            if (CONFIG.user.settings.painting.isOwner) {
                isManager = true;
                $('#submit-painting-moderator-add').show();
            }
            else {

                for (var k in CONFIG.painting.moderators) {

                    if (CONFIG.painting.moderators[k].id === CONFIG.user.id) {

                        if (CONFIG.painting.moderators[k].permissions.tools) {

                            $('a[data-id="painting-owner-tools"]').removeClass('display-none').show();
                        }

                        isManager = true;
                        break;
                    }
                }
            }

            if (isManager) {

                $('.open-modal[data-target="painting"][data-content="pending"]').removeClass('display-none').show();

                XX.xhr.req('GET', '/api/get-painting-access.php?getPendingCount=true&id=' + CONFIG.painting.id, {}, true, function (success, data) {

                    if (success) {

                        var notificationBubble = $('.open-modal[data-target="painting"][data-content="pending"]').find('.notification-bubble');
                        var count = data.total;

                        if (count >= 99 || count == '99+') {
                            count = '99+';
                        }

                        notificationBubble.text(count);

                        if (count > 0 || count == '99+') {
                            notificationBubble.show();
                        }
                        else {
                            notificationBubble.hide();
                        }
                    }
                });
            }
            else {
                $('.open-modal[data-target="painting"][data-content="pending"]').removeClass('display-none').hide();
            }
        }

        var CURSOR = {
            x: 0, //canvas
            y: 0,
            window: {
                x: 0,
                y: 0
            },
            display: false,
            touchDevice: false,
            mobileBrushActivated: false,
            mobileFirstActivation: true,
            triggerCursor: function (display, colorId) {

                if (!CURSOR.display && display !== undefined && display === true) {

                    CURSOR.display = true;


                    if (CURSOR.touchDevice) {

                        if (!MOBILE_ALT_DRAWING) {

                            ELEM.placeholderMobile.show();
                        }

                    }
                    else {
                        ELEM.placeholder.show();
                        ELEM.cursor.show();
                    }

                    ELEM.coordinates.show();
                }
                else if (CURSOR.display && display !== undefined && display === false) {

                    CURSOR.display = false;
                    ELEM.cursor.hide();
                    ELEM.coordinates.hide();

                    if (CURSOR.touchDevice) {
                        // ELEM.placeholderMobile.hide();
                    }
                    else {
                        ELEM.placeholder.hide();
                    }

                }

                if (colorId !== undefined) {
                    ELEM.cursor.css('background-color', DEFAULT.painting.palette.colors[colorId]);
                }
            },
            screenToPaintingSpace: function (screenX, screenY) {


                var paintingBox = PAINTING.element.canvas.painting[0].getBoundingClientRect();

                var result = {
                    x: 0,
                    y: 0
                };


                var adjustX = 0;
                var adjustY = 0;
                /*if (PAINTING.scale < 0) {
                    adjustX = PAINTING.width;
                    adjustY = PAINTING.height;
                }*/


                if (PAINTING.haveZoomRendering) {

                    result.x = ((screenX / PAINTING.scale) - paintingBox.left + adjustX);
                    result.y = ((screenY / PAINTING.scale) - paintingBox.top + adjustY);
                }
                else {

                    result.x = ((screenX - paintingBox.left) / PAINTING.scale) + adjustX;
                    result.y = ((screenY - paintingBox.top) / PAINTING.scale) + adjustY;
                }

                // result.y += (result.y * 0.05)

                /* result.x >>= 0;
                result.y >>= 0;*/


                return result;
            },
            paintingToScreenSpace: function (paintingX, paintingY) {

                var paintingBox = PAINTING.element.canvas.painting[0].getBoundingClientRect();


                var result = {
                    x: paintingX * PAINTING.scale + paintingBox.left,
                    y: paintingY * PAINTING.scale + paintingBox.top
                };

                return result;
            },
            setCursorCoords: function (evt) {

                evt = setPageXY(evt);
                var paintingPos = CURSOR.screenToPaintingSpace(evt.pageX, evt.pageY);
                paintingPos.x |= 0;
                paintingPos.y |= 0;

                if (paintingPos.x < 0 || paintingPos.x > (PAINTING.width - 1) || paintingPos.y < 0 || paintingPos.y > (PAINTING.height - 1)) {

                    CURSOR.x = null;
                    CURSOR.y = null;
                }
                else {

                    CURSOR.x = paintingPos.x;
                    CURSOR.y = paintingPos.y;

                    ELEM.coordinates.text((CURSOR.x) + "," + (CURSOR.y));
                }
            },
            setCursorPosition: function (evt) {

                if (!PAINTING.loaded) {

                    return;

                }
                else {


                    if (!MOBILE_ALT_DRAWING && CURSOR.touchDevice) {

                        var middleW = Math.round(window.innerWidth / 2);
                        var middleH = Math.round(window.innerHeight / 2);


                        if (ITEM_SELECTED) {

                            var size = parseInt(CONFIG.shop.items[ITEM_SELECTED].radius);


                            var adjustedScaleX = parseInt(PAINTING.scale * (size )) + 1;
                            var adjustedScaleY = parseInt(PAINTING.scale * (size)) + 1;


                            //todo test drop bomb on mobile
                        }
                        else {


                            var adjustedScaleX = parseInt(PAINTING.scale * PAINTING.brush.size);
                            var adjustedScaleY = parseInt(PAINTING.scale * PAINTING.brush.size);
                        }


                        var screenPos = {};


                        var paintingBox = PAINTING.element.canvas.painting[0].getBoundingClientRect();

                        //  screenPos.x = Math.round((middleW / PAINTING.scale) - paintingBox.left)-1;
                        //    screenPos.y = Math.round((middleH / PAINTING.scale) - paintingBox.top)-1;

                        if (PAINTING.haveZoomRendering) {

                            //iphone recent

                            screenPos.x = Math.round(((middleW / PAINTING.scale) - paintingBox.left - 2));
                            screenPos.y = Math.round(((middleH / PAINTING.scale) - paintingBox.top - 1));
                        }
                        else {

                            //iphone SE for example of samsung

                            screenPos.x = Math.round(((middleW - paintingBox.left) / PAINTING.scale) - 1);
                            screenPos.y = Math.round(((middleH - paintingBox.top) / PAINTING.scale));
                        }

                        //   screenPos.x = Math.round((middleW / PAINTING.scale) - paintingBox.left)-1;
                        //    screenPos.y = Math.round((middleH / PAINTING.scale) - paintingBox.top)-1;


                        adjustedScaleX = 1;
                        adjustedScaleY = 1;

                        if (PAINTING.haveZoomRendering) {
                            ELEM.placeholderMobile.css('webkitTransform', 'translate(' + screenPos.x + 'px, ' + screenPos.y + 'px)');
                            ELEM.placeholderMobile.css("transform", 'translate(' + screenPos.x + 'px, ' + screenPos.y + 'px)');
                        }
                        else {
                            // ELEM.placeholderMobile.css('webkitTransform', 'translate(' + (screenPos.x - 0.30) + 'px, ' + (screenPos.y - 0.30)  + 'px) scale(0.62)');
                            // ELEM.placeholderMobile.css("transform", 'translate(' + (screenPos.x - 0.30)+ 'px, ' + (screenPos.y - 0.30)  + 'px) scale(0.62)');

                            ELEM.placeholderMobile.css('webkitTransform', 'translate(' + screenPos.x + 'px, ' + screenPos.y + 'px)');
                            ELEM.placeholderMobile.css("transform", 'translate(' + screenPos.x + 'px, ' + screenPos.y + 'px)');
                        }
                        ELEM.placeholderMobile.css("width", adjustedScaleX + "px");
                        ELEM.placeholderMobile.css("height", adjustedScaleY + "px");


                        CURSOR.x = screenPos.x;
                        CURSOR.y = screenPos.y;
                        /*
                                                var paintingPos = CURSOR.screenToPaintingSpace(screenPos.x, screenPos.y);
                                                paintingPos.x |= 0;
                                                paintingPos.y |= 0;

                                                CURSOR.x = paintingPos.x;
                                                CURSOR.y = paintingPos.y;
                                                console.log('d');*/

                        ELEM.coordinates.text((CURSOR.x) + "," + (CURSOR.y));

                        CURSOR.triggerCursor(true);
                        return;

                    }
                    else {

                        CURSOR.setCursorCoords(evt);

                        evt = setPageXY(evt);

                        //Move the color preview block under the cursor
                        ELEM.cursor.offset({
                            left: evt.pageX + 10,
                            top: evt.pageY + 10
                        });

                        if (CURSOR.x !== null && CURSOR.y !== null) {

                            if (ITEM_SELECTED) {
                                var size = parseInt(CONFIG.shop.items[ITEM_SELECTED].radius);

                                var screenPos = CURSOR.paintingToScreenSpace(CURSOR.x - (size / 2), CURSOR.y - (size / 2));

                                var middleX = parseInt(screenPos.x);
                                var middleY = parseInt(screenPos.y);



                                var adjustedScaleX = parseInt(PAINTING.scale * (size + 2)) + 1;
                                var adjustedScaleY = parseInt(PAINTING.scale * (size + 2)) + 1;


                                ELEM.placeholder.css('webkitTransform', 'translate(' + middleX + 'px, ' + middleY + 'px)');
                                ELEM.placeholder.css("transform", 'translate(' + middleX + 'px, ' + middleY + 'px)');
                                ELEM.placeholder.css("width", adjustedScaleX + "px");
                                ELEM.placeholder.css("height", adjustedScaleY + "px");

                            }
                            else {

                                var screenPos = CURSOR.paintingToScreenSpace(CURSOR.x, CURSOR.y);

                                ELEM.placeholder.css('webkitTransform', 'translate(' + parseInt(screenPos.x) + 'px, ' + parseInt(screenPos.y) + 'px)');
                                ELEM.placeholder.css("transform", "translate(" + parseInt(screenPos.x) + "px, " + parseInt(screenPos.y) + "px) ");
                                ELEM.placeholder.css("width", parseInt(PAINTING.scale * PAINTING.brush.size) + 1 + "px");
                                ELEM.placeholder.css("height", parseInt(PAINTING.scale * PAINTING.brush.size) + 1 + "px");


                            }

                            CURSOR.triggerCursor(true);
                        }
                        else {

                            CURSOR.triggerCursor(false);
                        }
                    }
                }
            }
        }


        if (CONFIG.lottery) {

            //$('.pixel-lottery-btn').hide();
            $('.pixel-lottery-btn').show();

            if (localStorage) {

                var lastLotteryOpen = localStorage.getItem('last-lottery-open', time());
                if (lastLotteryOpen && parseInt(lastLotteryOpen) > time() - (86400 * 2)) {

                    $('.pixel-lottery-btn').css('-webkit-animation', 'none');
                    $('.pixel-lottery-btn').css('bottom', '-28px');
                }
            }
        }
        else {
            $('.pixel-lottery-btn').hide();
        }

        $(document).on('click', '.open-pixel-lottery', function (evt) {

            evt.preventDefault();

            $('.px-lottery').css('display', 'block');
            $('.px-lottery .box-content-x > div').hide();
            $('.px-lottery .box-x').show();
            $('.px-lottery .box-content-x > div').show();
            $('.px-lottery .box-content-x > .loading').hide();


            $('.px-lottery .jackpot-time').text('Loading...');
            $('.px-lottery .jackpot-amount').text('Loading...');
            $('.px-lottery .jackpot-users').text('Loading...');
            $('.px-lottery .user-tickets').text('-');

            $('.px-lottery .no-jackpot').hide();
            $('.px-lottery .active-jackpot').show();


            XX.xhr.req('GET', '/api/get-jackpot-ticket.php', {}, true, function (success, data) {


                $('.px-lottery').css('display', 'block');
                $('.px-lottery .box-content-x > div').hide();
                $('.px-lottery .box-x').show();
                $('.px-lottery .box-content-x > div').show();
                $('.px-lottery .box-content-x > .loading').hide();


                if (success) {


                    if (data.lottery) {


                        $('.px-lottery .no-jackpot').hide();
                        $('.px-lottery .active-jackpot').show();
                    }
                    else {
                        $('.px-lottery .no-jackpot').show();
                        $('.px-lottery .active-jackpot').hide();
                    }


                    var leftTime = 0;
                    var leftTimeLabel = 'Selecting a winner... refresh the page in a few minutes';

                    if (data.endAt > time()) {

                        leftTime = data.endAt - time();
                        leftTimeLabel = '';
                        if (leftTime >= 86400) {

                            var days = Math.floor(leftTime / 86400);
                            leftTimeLabel += days + ' day' + (days === 1 ? '' : 's') + '';

                            leftTime -= days * 86400;
                        }

                        if (leftTime >= 3600) {

                            var hours = Math.floor(leftTime / 3600);

                            if (leftTimeLabel != '') {
                                leftTimeLabel += ', ';
                            }

                            leftTimeLabel += hours + ' hour' + (hours === 1 ? '' : 's') + '';
                        }
                        else {

                            if (leftTimeLabel != '') {
                            }
                            else {
                                leftTimeLabel = 'less than an hour';
                            }
                        }


                    }

                    $('.px-lottery .past-winners table').html('<tr><td>Player</td><td>Tickets bought</td><td>Jackpot</td><td>Date</td></tr>');

                    var strip = 'stripped';

                    for(var k in data.past){


                        var el = $('<tr class="'+strip+'"><td><a href="#" class="open-profile" data-profile="'+data.past[k].winner_username+'">'+data.past[k].winner_username+'</a></td><td>'+data.past[k].winner_tickets+'</td><td>'+data.past[k].jackpot+'</td><td>'+new Date(data.past[k].end_date).toLocaleDateString()+' </td></tr>');

                        $('.px-lottery .past-winners table').append(el);

                        if(strip ==='stripped') {
                            strip = '';
                        }
                        else {
                            strip = 'stripped';
                        }
                    }

                    $('.px-lottery .jackpot-time').text(leftTimeLabel);
                    $('.px-lottery .jackpot-users').text(data.users);
                    $('.px-lottery .jackpot-amount').text(data.jackpot);
                    $('.px-lottery .user-tickets').text(data.tickets);

                }
                else {

                    notification('error', 'Error', data.message);
                }
            });






            $('.pixel-lottery-btn').css('-webkit-animation', 'none');
            $('.pixel-lottery-btn').css('bottom', '-28px');

            if (localStorage) {
                localStorage.setItem('last-lottery-open', time());
            }

        });

        $('.px-lottery .close-modal').on('click', function (evt) {

            evt.preventDefault();

            $('.px-lottery').css('display', 'none');
        });

        $(document).on('click', '.btn-jackpot-buy', function (e) {

            e.preventDefault();

            var elem = $(this);


            if (elem.attr('disabled') != 'true') {

                elem.attr('disabled', 'true');

                var params = {
                    tickets: $(this).attr('data-id')
                }

                var alreadyConf = false;
                if (localStorage) {
                    alreadyConf = localStorage.getItem('know-about-spending-for-tickets');
                }

                if (alreadyConf || confirm('You are about to spend some PP coins to get tickets for the next lottery, would you like to continue? (this message won\'t show up next time)')) {

                    if (localStorage) {
                        localStorage.setItem('know-about-spending-for-tickets', 1);
                    }

                    XX.xhr.req('POST', '/api/post-jackpot-ticket.php', params, true, function (success, data) {


                        elem.removeAttr('disabled');

                        if (success) {

                            $('#pixel-lottery .user-tickets').text(data.tickets);

                            notification('success', 'Success', params.tickets+' ticket added');


                            CONFIG.user.ppcoins = parseInt(data.ppcoins);
                            $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));


                        }
                        else {

                            notification('error', 'Error', data.message);
                        }
                    });
                }
                else {

                    elem.removeAttr('disabled');
                }
            }
        });


        $(document).on('click', '#mobileplace a.mobile-place', function () {

            if (CURSOR.mobileBrushActivated) {

                CURSOR.mobileBrushActivated = false;
                $(this).find('span').text('Activate Brush?');
                $(this).find('div').show();
            }
            else {

                if (CONFIG.painting.cooldown > 0) {
                    PAINTING.drawPixelAt();
                }
                else {

                    if (CURSOR.mobileFirstActivation) {

                        CURSOR.mobileFirstActivation = false;
                        PAINTING.scale = 10;
                        zoomInOrOut(true);
                    }

                    CURSOR.mobileBrushActivated = true;


                    $(this).find('span').text('Disable Brush?');


                    $(this).find('div').hide();
                }
            }
        });

        var AREAS_UNDER_ATTACK = false;
        $(document).on('click', '#mobilebomb a', function () {

            if (CURSOR.touchDevice) {

                if (ITEM_SELECTED !== null) {

                    $('#mobilebomb').hide();
                    PAINTING.useWeapon();
                }
            }
        });

        var SAVE_TRACKING_ELEM = $('#save-tracking');
        var SAVE_TRACKING_DATA = {};
        var SAVE_TRACKING_DATA_NAMES = {};



        //SERVER SAVE TRACKING
        var SAVE_TRACKING_CACHE = 0;
        var SAVE_TRACKING_SERVER_ENABLED = false;
        var SAVE_TRACKING_PLAYING = false;
        var SAVE_TRACKING_SERVER_DATA = {};
        var SAVE_TRACKING_IMAGE = null;
        var SAVE_TRACKING_DISPLAY_NAMES = true;
        function getBoardTracking() {

            if(!SAVE_TRACKING_CACHE) {

                notification('error', 'Error', 'No recent tracking data available');
            }
            else if(SAVE_TRACKING_SERVER_ENABLED) {


                window.location.reload();
            }
            else {

                triggerGlobalLoaderCanvas(true);

                XX.xhr.req('GET', '/tracking/'+CONFIG.painting.id+'.json?t=' + SAVE_TRACKING_CACHE, {}, true, function (success, data) {

                    if (success) {

                        if (CONFIG.painting.protection) {

                            SAVE_TRACKING_SERVER_ENABLED = true;

                            CHAT.display(false);

                            SAVE_TRACKING_IMAGE = new Image();
                            SAVE_TRACKING_IMAGE.onload = function () {

                                PAINTING.element.ctx.painting.fillStyle = 'rgba(255, 255, 255, 0)';
                                PAINTING.element.ctx.painting.clearRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);
                                PAINTING.element.ctx.painting.drawImage(SAVE_TRACKING_IMAGE, 0, 0);

                                if(parseInt(CONFIG.user.premium.expire_at) < time() || !CONFIG.user.premium.active) {

                                    $('#timemachine').find('.inf').text('Pixels placed recently (delayed for non-premium users)');
                                }
                                else {

                                    $('#timemachine').find('.inf').text('Pixels placed recently');

                                }

                                $('#timemachine').show();

                                SAVE_TRACKING_SERVER_DATA = data;


                                if(parseInt(CONFIG.user.premium.expire_at) < time() || !CONFIG.user.premium.active) {

                                    triggerGlobalLoaderCanvas(false);
                                    startBoardTrackingPlayback();
                                }
                                else {

                                    WS.io.emit('save.tracking.pending', 1);
                                }

                            }

                            SAVE_TRACKING_IMAGE.src = CONFIG.host.http + 'tracking/' + CONFIG.painting.id + '.png?t=' + SAVE_TRACKING_CACHE;
                        }
                    }
                    else {

                        triggerGlobalLoaderCanvas(false);

                        notification('error', 'Error', data.message);
                    }
                });
            }
        }


        function startBoardTrackingPlayback() {

            SAVE_TRACKING_PLAYING = true;

            CONFIG.user.settings.painting.liveTracking = true;

            $('#timemachine').find('input[type="range"]').attr('min', 0);
            $('#timemachine').find('input[type="range"]').attr('max', SAVE_TRACKING_SERVER_DATA.pixels.length);


            window.requestAnimationFrame(playBoardTrackingPlayback);


        }


        //   var SAVE_TRACKING_PLAYING_LAST = 0;
        var SAVE_TRACKING_PLAYING_CURSOR = 0;
        function playBoardTrackingPlayback(time) {

            if(SAVE_TRACKING_PLAYING) {


                // if ((time - SAVE_TRACKING_PLAYING_LAST) >= 1) {

                var currentTime = timeMS();

                SAVE_TRACKING_PLAYING_CURSOR++;
                if(SAVE_TRACKING_SERVER_DATA.pixels[SAVE_TRACKING_PLAYING_CURSOR]) {

                    var dt = SAVE_TRACKING_SERVER_DATA.pixels[SAVE_TRACKING_PLAYING_CURSOR];

                    PAINTING.element.ctx.painting.fillStyle = DEFAULT.painting.palette.colors[dt[2]];
                    PAINTING.element.ctx.painting.fillRect(dt[0], dt[1], 1, 1);

                    if(SAVE_TRACKING_DISPLAY_NAMES) {

                        if(PAINTING.liveTrackingUsers[dt[3]] === undefined || PAINTING.liveTrackingUsers[dt[3]].r) {

                            PAINTING.liveTrackingUsers[dt[3]] = {
                                t: currentTime + 4000,
                                n: '',
                                c: dt[2],
                                r: false
                            };

                            if(SAVE_TRACKING_SERVER_DATA.names[dt[3]]) {
                                PAINTING.liveTrackingUsers[dt[3]].n = SAVE_TRACKING_SERVER_DATA.names[dt[3]];
                            }

                            PAINTING.element.move.append('<div class="track open-profile no-transition" style="display:none" data-profile="' + PAINTING.liveTrackingUsers[dt[3]].n.toLowerCase() + '" data-id="' + dt[3] + '" style="border-color:' + DEFAULT.painting.palette.colors[dt[2]] + '">' + PAINTING.liveTrackingUsers[dt[3]].n + '</div>');

                        }
                        else {
                            PAINTING.liveTrackingUsers[dt[3]].t = currentTime + 4000;
                            PAINTING.liveTrackingUsers[dt[3]].c = dt[2];
                        }


                        PAINTING.element.move.find('.track[data-id="' + dt[3] + '"]').css({top: (dt[1] + 1) + 'px', left: (dt[0] + 1) + 'px', 'border-color':DEFAULT.painting.palette.colors[dt[2]] }).show();
                    }

                    $('#timemachine').find('input[type="range"]').val(SAVE_TRACKING_PLAYING_CURSOR);
                    $('#timemachine').find('.timestamp').text( new Date(dt[4]).toLocaleTimeString());
                }

                //SAVE_TRACKING_PLAYING_LAST = time;


                // }
            }
            window.requestAnimationFrame(playBoardTrackingPlayback);
        }

        $(document).on('click', '#timemachine .pause', function(){

            if(SAVE_TRACKING_PLAYING) {
                SAVE_TRACKING_PLAYING = false;
            }
            else {
                SAVE_TRACKING_PLAYING = true;
                window.requestAnimationFrame(playBoardTrackingPlayback);
            }

        });

        $(document).on('click', '#timemachine .close', function(){

            SAVE_TRACKING_PLAYING = false;
            window.location.reload();
        });

        $(document).on('click', '#timemachine .restart', function(){

            SAVE_TRACKING_PLAYING = false;

            SAVE_TRACKING_PLAYING_CURSOR = 0;
            $('#timemachine').find('input[type="range"]').val(SAVE_TRACKING_PLAYING_CURSOR);


            PAINTING.element.ctx.painting.fillStyle = 'rgba(255, 255, 255, 0)';
            PAINTING.element.ctx.painting.clearRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);
            PAINTING.element.ctx.painting.drawImage(SAVE_TRACKING_IMAGE, 0, 0);

            SAVE_TRACKING_PLAYING = true;

        });

        $(document).on('input', '#timemachine [type="range"]', function(){

            SAVE_TRACKING_PLAYING = false;

            var data =  parseInt($(this).val());

            if(SAVE_TRACKING_SERVER_DATA.pixels[data]) {
                $('#timemachine').find('.timestamp').text( new Date(SAVE_TRACKING_SERVER_DATA.pixels[data][4]).toLocaleTimeString());
            }

        });

        $(document).on('change', '#timemachine [type="range"]', function(){

            SAVE_TRACKING_PLAYING = false;


            SAVE_TRACKING_PLAYING_CURSOR = parseInt($(this).val());

            PAINTING.element.ctx.painting.fillStyle = 'rgba(255, 255, 255, 0)';
            PAINTING.element.ctx.painting.clearRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);
            PAINTING.element.ctx.painting.drawImage(SAVE_TRACKING_IMAGE, 0, 0);

            var i = 0;
            while(i < SAVE_TRACKING_PLAYING_CURSOR) {

                PAINTING.element.ctx.painting.fillStyle = DEFAULT.painting.palette.colors[SAVE_TRACKING_SERVER_DATA.pixels[i][2]];
                PAINTING.element.ctx.painting.fillRect(SAVE_TRACKING_SERVER_DATA.pixels[i][0], SAVE_TRACKING_SERVER_DATA.pixels[i][1], 1, 1);

                i++;
            }

            SAVE_TRACKING_PLAYING = true;


        });


        var PAINTING = {
            currentImgDataProtection: null,
            x: 0,
            y: 0,
            width: CONFIG.painting.width,
            height: CONFIG.painting.height,
            scale: 1,
            color: 0,
            loaded: false,
            zoom: {
                min: 0.5,
                max: 400
            },
            mode: 0,
            protectionWithBG: false,
            brush: {
                size: CONFIG.painting.brush.size,
            },
            protectionRGB: 204,
            haveZoomRendering: false,
            paletteRGB: {},
            isFlashingProtection: 0,
            lastPixelPlaced: {
                index: '',
                time: 0,
            },
            element: {
                painting: $('#painting'),
                zoom: $('#painting-zoom'),
                move: $('#painting-move'),
                grid: $('#painting-grid'),
                infos: $('#painting-infos'),
                canvas: {
                    painting: null,
                    protect: null
                },
                ctx: {
                    painting: null,
                    protect: null
                }
            },
            liveTrackingUsers: {},
            lastStartAccessFetch: 0,
            paintingListCache: [],
            paintingListStart: 0,
            paintingListSearch: '',
            settingsLoaded: false,
            cooldown: 0,
            cooldownSetInterval: null,
            tryingToUseWeapon: false,
            saveTrackingEnabled: false,
            pRTime: 0,
            centerPositionTo: function (scale, x, y) {

                if (scale !== undefined) {
                    PAINTING.scale = PAINTING.formatScale(scale);
                }

                if (x !== undefined) {
                    PAINTING.x = (PAINTING.width / 2 - x);
                }

                if (y !== undefined) {
                    PAINTING.y = (PAINTING.height / 2 - y);
                }

                PAINTING.updateScaleAndPosition();
            },
            formatScale: function (scale) {

                if (scale < PAINTING.zoom.min) {
                    scale = PAINTING.zoom.min;
                }
                else if (scale > PAINTING.zoom.max) {
                    scale = PAINTING.zoom.max;
                }
                else {
                    scale = round(scale, 2);
                }

                return scale;
            },
            updateUrlHash: function () {

                window.location.replace('#x=' + Math.round((PAINTING.width / 2) - PAINTING.x) + '&y=' + Math.round((PAINTING.height / 2) - PAINTING.y) + '&s=' + PAINTING.scale);
                /*
                                if (history.pushState) {
                                    // IE10, Firefox, Chrome, etc.
                                    window.history.propertyIsEnumerable(null, null, '/' + CONFIG.painting.id + '-' + CONFIG.painting.slug + '#x=' + Math.round((PAINTING.width / 2) - PAINTING.x) + '&y=' + Math.round((PAINTING.height / 2) - PAINTING.y) + '&s=' + PAINTING.scale);
                                }
                                else {
                                    // IE9, IE8, etc
                                    window.location.hash = 'x=' + Math.round((PAINTING.width / 2) - PAINTING.x) + '&y=' + Math.round((PAINTING.height / 2) - PAINTING.y) + '&s=' + PAINTING.scale;
                                }
                */
                //window.location.hash = 'x=' + Math.round((PAINTING.width / 2) - PAINTING.x) + '&y=' + Math.round((PAINTING.height / 2) - PAINTING.y) + '&s=' + PAINTING.scale;
            },
            getUrlHash: function () {

                var result = {
                    x: PAINTING.x,
                    y: PAINTING.y,
                    s: PAINTING.scale
                };

                var hash = window.location.hash;
                if (hash != '') {

                    var hash = hash.split('=');

                    if (hash.length >= 4) {

                        result.x = parseInt(hash[1]);
                        result.y = parseInt(hash[2]);
                        result.s = parseFloat(hash[3]);


                        if (result.s > PAINTING.zoom.max) {
                            result.s = PAINTING.zoom.max;
                        }
                        else if (result.s < PAINTING.zoom.min) {
                            result.s = PAINTING.zoom.min;
                        }
                    }
                }

                return result;
            },
            updateScaleAndPosition: function () {

                PAINTING.x = Math.min(PAINTING.width / 2, Math.max(-PAINTING.width / 2, PAINTING.x));
                PAINTING.y = Math.min(PAINTING.height / 2, Math.max(-PAINTING.height / 2, PAINTING.y));

                if (Math.abs(PAINTING.scale) < 1) {
                    PAINTING.element.canvas.painting.removeClass("pixelate");
                }
                else {
                    PAINTING.element.canvas.painting.removeClass("pixelate");
                    PAINTING.element.canvas.painting.addClass("pixelate");
                }

                PAINTING.element.move.css('webkitTransform', 'translate(' + PAINTING.x + 'px, ' + PAINTING.y + 'px)');
                PAINTING.element.move.css('transform', 'translate(' + PAINTING.x + 'px, ' + PAINTING.y + 'px)');

                if (PAINTING.haveZoomRendering) {
                    PAINTING.element.zoom.css('zoom', (PAINTING.scale * 100).toString() + '%');
                }
                else {
                    PAINTING.element.zoom.css('webkitTransform', 'scale(' + PAINTING.scale + ')');
                    PAINTING.element.zoom.css('transform', 'scale(' + PAINTING.scale + ')');
                }


                var a = CURSOR.screenToPaintingSpace(0, 0);
                var scale = PAINTING.scale;
                const roundedScale = Math.max(1, Math.floor(scale));
                const scaleRoundingErrorMultiplier = scale / roundedScale;

                PAINTING.element.grid.css({
                    backgroundSize: roundedScale + 'px ' + roundedScale + 'px',
                    transform: 'translate(' + Math.floor(-a.x % 1 * roundedScale) + 'px,' + Math.floor(-a.y % 1 * roundedScale) + 'px) scale(' + scaleRoundingErrorMultiplier + ')',
                    opacity: (scale - 2) / 6
                });
            },
            getColorFromPainting: function (x, y, noselect) {

                var c = PAINTING.element.ctx.painting.getImageData(x, y, 1, 1).data;


                c = rgbToHex(c[0], c[1], c[2]);

                var colorId = $.inArray(c.toUpperCase(), DEFAULT.painting.palette.colors);

                if(colorId !== -1) {

                    if (noselect) {
                        return colorId;
                    }
                    else {
                        return PAINTING.selectPaletteColor(colorId);
                    }
                }

            },
            checkProtectionFromPainting: function (x, y) {

                if (PAINTING.currentImgDataProtection === null) {

                    PAINTING.currentImgDataProtection = PAINTING.element.ctx.protected.getImageData(0, 0, CONFIG.painting.width, CONFIG.painting.height).data;
                }

                var index = (x * 4) + (y * CONFIG.painting.width * 4);

                if (PAINTING.currentImgDataProtection[index] === PAINTING.protectionRGB && PAINTING.currentImgDataProtection[index + 1] === PAINTING.protectionRGB && PAINTING.currentImgDataProtection[index + 2] === PAINTING.protectionRGB) {

                    //in the future, could just check ALPHA (pos +3) when protected canvas will only contain protecteds art + alpha for allowed zones
                    //in the future, could just check ALPHA (pos +3) when protected canvas will only contain protecteds art + alpha for allowed zones
                    //in the future, could just check ALPHA (pos +3) when protected canvas will only contain protecteds art + alpha for allowed zones


                    return true
                }
                else {
                    return false;
                }

                /*               var c = PAINTING.element.ctx.protected.getImageData(x, y, 1, 1).data;

                if (c[0] === PAINTING.protectionRGB && c[1] === PAINTING.protectionRGB && c[2] === PAINTING.protectionRGB) {
                    return true
                }
                else {
                    return false;
                }*/
            },
            checkDuplicateFromPainting: function (x, y, colorId) {

                var c = PAINTING.element.ctx.painting.getImageData(x, y, 1, 1).data;

                if (PAINTING.paletteRGB[colorId][0] === c[0] && PAINTING.paletteRGB[colorId][1] === c[1] && PAINTING.paletteRGB[colorId][2] === c[2]) {
                    return true
                }
                else {
                    return false;
                }
            },
            checkSamePlaceThanLast: function (x, y, c, size) {

                if (PAINTING.lastPixelPlaced.index === x + '-' + y + '-' + c + '-' + size && PAINTING.lastPixelPlaced.time > timeMS()) {
                    return true;
                }
                else {
                    return false;
                }
            },
            triggerCooldownPanel: function (display, dotDetection) {

                if (PAINTING.cooldownSetInterval !== null) {
                    clearInterval(PAINTING.cooldownSetInterval);
                }

                if (display) {

                    PAINTING.cooldownSetInterval = setInterval(function () {

                        var cd = (PAINTING.cooldown + 1000) - timeMS();
                        if (cd < 0) {
                            cd = 0;
                            clearInterval(PAINTING.cooldownSetInterval);
                            ELEM.cooldown.hide();
                        }
                        else {
                            cd = parseInt(cd / 1000);
                        }


                        if (!dotDetection && cd > CONFIG.painting.cooldown) {
                            cd = CONFIG.painting.cooldown;
                        }

                        var minutes = 0;
                        var seconds = 0;
                        if (cd > 60) {
                            minutes = parseInt(cd / 60);
                            seconds = cd - (minutes * 60);
                        }
                        else {
                            seconds = cd;
                        }

                        if (minutes < 10) {
                            minutes = '0' + minutes;
                        }

                        if (seconds < 10) {
                            seconds = '0' + seconds;
                        }

                        ELEM.cooldown.find('.box .cd').text(minutes + ':' + seconds);

                    }, 10);

                    ELEM.cooldown.find('.head').hide();
                    ELEM.cooldown.find('.foot').hide();

                    if (dotDetection) {

                        ELEM.cooldown.find('.head[data-id="dotting"]').show();
                        ELEM.cooldown.find('.foot[data-id="dotting"]').show();
                    }
                    else {

                        ELEM.cooldown.find('.head[data-id="painting"]').show();
                        ELEM.cooldown.find('.foot[data-id="painting"]').show();
                    }

                    ELEM.cooldown.show();
                }
            },
            initPaletteRGB: function () {

                /*  for (var k in DEFAULT.painting.palette.colors) {

                      PAINTING.paletteRGB[k] = hexToRgb(DEFAULT.painting.palette.colors[k]);
                  }*/

                for (var k in DEFAULT.painting.palette.order) {

                    var index = DEFAULT.painting.palette.order[k];

                    if ($.inArray(index, CONFIG.painting.palette) !== -1) {

                        //if color present in allowed colors

                        var c = DEFAULT.painting.palette.colors[index];
                        PAINTING.paletteRGB[index] = hexToRgb(c);
                    }
                }

            },
            loadChat: function () {

                MODAL.onChangeTools('tools-display-tracking', !CONFIG.user.settings.painting.liveTracking, true);
                //MODAL.onChangeTools('tools-display-bot', !CONFIG.user.settings.painting.bot, true);
                MODAL.onChangeTools('tools-mobile-alt', !MOBILE_ALT_DRAWING, true);
                MODAL.onChangeTools('tools-display-grid', !CONFIG.user.settings.painting.gridDisplay, true);
                MODAL.onChangeTools('tools-lock-painting', !CONFIG.user.settings.painting.lockPainting, true);
                MODAL.onChangeTools('tools-display-save-tracking', !CONFIG.user.settings.painting.saveTracking, true);
                MODAL.onChangeTools('tools-display-protection-flashing', !CONFIG.user.settings.painting.protectionFlashing, true);
                MODAL.onChangeTools('tools-display-zoom', !CONFIG.user.settings.painting.zoomDisplay, true);
                MODAL.onChangeTools('tools-display-notifications', !CONFIG.user.settings.chat.notifications, true);
                MODAL.onChangeTools('tools-display-friends-notifications', !CONFIG.user.settings.chat.friendsNotifications, true);
                MODAL.onChangeTools('tools-display-guilds', !CONFIG.user.settings.chat.guildTags, true);
                MODAL.onChangeTools('tools-display-timestamp', !CONFIG.user.settings.chat.timestamps, true);
                MODAL.onChangeTools('tools-invisible-mode', !CONFIG.user.settings.chat.invisible, true);
                MODAL.onChangeTools('tools-display-social', !CONFIG.user.settings.displaySocial, true);

                PAINTING.settingsLoaded = true;
            },
            loadPainting: function () {

                if (!CONFIG) {
                    return;
                }
                else {

                    if (CONFIG.painting.nsfw && parseInt(CONFIG.painting.nsfw) === 1) {

                    }
                    else {
                        PAINTING.element.canvas.painting.removeClass('blur');
                    }


                    PAINTING.loadPalette();
                    PAINTING.initPaletteRGB(); //to speed up duplicate color check when placing

                    var paintingImg = new Image();
                    var protectedImg = new Image();

                    paintingImg.onload = function () {

                        PAINTING.element.ctx.painting.clearRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);

                        PAINTING.element.ctx.painting.fillStyle = DEFAULT.painting.palette.colors[CONFIG.painting.background];
                        PAINTING.element.ctx.painting.fillRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);

                        PAINTING.element.ctx.painting.drawImage(paintingImg, 0, 0);

                        protectedImg.onload = function () {

                            //Don't reuse  protectedImg var, user another when you need to reload, and if it does not work, to as we did in v1f (CONFIG.canvas.isLoaded)

                            PAINTING.element.ctx.protected.fillStyle = 'rgba(255, 255, 255, 0)';
                            PAINTING.element.ctx.protected.clearRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);
                            PAINTING.element.ctx.protected.drawImage(protectedImg, 0, 0);

                            PAINTING.element.move.append(PAINTING.element.canvas.painting);

                            /* PAINTING.element.move.append(PAINTING.element.canvas.protected);
                            PAINTING.element.canvas.protected.css({
                                "position": "absolute",
                                "top": "0px",
                                "left": "0px",
                                "display": "none"
                            });*/


                            //Setting the default scale according to canvas width/height
                            var incr = 1;

                            /* this cause infinite loop on some canvas, need to re-think this
                                                    while (PAINTING.height * incr < (window.innerHeight - 100) && PAINTING.width * incr < (window.innerWidth - 100)) {

                                                        PAINTING.scale = PAINTING.formatScale(incr);

                                                        if (incr < 1) {
                                                            incr += 0.05;
                                                        }
                                                    }*/

                            PAINTING.x = PAINTING.width / 2;
                            PAINTING.y = PAINTING.height / 2;

                            var hash = PAINTING.getUrlHash();

                            if (!isNaN(hash.s) && !isNaN(hash.x) && !isNaN(hash.y)) {
                                PAINTING.centerPositionTo(hash.s, hash.x, hash.y);
                            }


                            PAINTING.element.ctx.protected.fillStyle = 'rgba(255, 255, 255, 0)';

                            //Fixing chrome 78+ bug, if it break, add it to attemptPlacePixel isntead
                            PAINTING.element.ctx.painting.getImageData(CURSOR.x, CURSOR.y, 1, 1).data;

                            PAINTING.loaded = true;

                            var spaceCheck = localStorage.getItem('know-about-space-bar');
                            if (spaceCheck) {
                                HAS_USED_SPACE_ONCE = true;
                            }

                            var lastNews = localStorage.getItem('last-news-dismiss');

                            if (!lastNews || lastNews !== CONFIG.news.id) {


                                setTimeout(function () {

                                    $('#chat .snippet').attr('href', CONFIG.news.url);
                                    $('#chat .snippet').find('h1').html(CONFIG.news.title);
                                    $('#chat .snippet').find('.description').html(CONFIG.news.description);


                                    $('#chat .snippet').css('width', '0px').show();
                                    $('#chat .snippet').animate({
                                        width: $('#chat').width()
                                    });

                                }, 3000);
                            }


                            if (CONFIG.painting.nsfw && parseInt(CONFIG.painting.nsfw) === 1) {

                                MODAL.activeAlert = true;

                                setTimeout(function () {
                                    if (parseInt(CONFIG.painting.id) === 0 || parseInt(CONFIG.painting.id) === 13) {
                                        MODAL.openModal('alert', 'norules');
                                        $('.box[data-id="alert"] .box-header span').text('ANARCHY');
                                    }
                                    else {
                                        MODAL.openModal('alert', 'nsfw');
                                        $('.box[data-id="alert"] .box-header span').text('NSFW');
                                    }
                                }, 1);

                            }
                            else {

                                PAINTING.element.canvas.painting.removeClass('blur');

                                var forceSplash = true;
                                var lastvisit = localStorage.getItem('last-visit');
                                var welcomechoice = localStorage.getItem('welcome-choice');
                                if (lastvisit && parseInt(lastvisit) > time() - 345600) {
                                    forceSplash = false;
                                }

                                if (!welcomechoice) {
                                    forceSplash = true;
                                }



                                if (forceSplash) {

                                    if (!CURSOR.touchDevice) {
                                        $('.box-content[data-id="welcome"]').find('.desktop').show();
                                        $('.box-content[data-id="welcome"]').find('.mobile').hide();
                                    }
                                    else {
                                        $('.box-content[data-id="welcome"]').find('.desktop').hide();
                                        $('.box-content[data-id="welcome"]').find('.mobile').show();
                                    }


                                    setTimeout(function () {
                                        MODAL.openModal('welcome', 'welcome');
                                        $('.ytframe').html('<iframe width="290" height="163" src="https://www.youtube.com/embed/QkANwFWvubg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>');
                                    }, 1);
                                }
                            }


                            var darkCheck = localStorage.getItem('darkmode-enabled');
                            if (darkCheck && parseInt(darkCheck) === 1) {
                                $('body').removeClass('darkmode').addClass('darkmode');
                            }


                            if (localStorage.getItem('chat-size-w') && localStorage.getItem('chat-size-h')) {

                                var widthChat = parseInt(localStorage.getItem('chat-size-w'));
                                var heightChat = parseInt(localStorage.getItem('chat-size-h'));
                                var bodyWidth = 0;
                                var bodyHeight = 0;

                                if(window.innerWidth !== undefined && window.innerHeight !== undefined) {
                                     bodyWidth = window.innerWidth;
                                     bodyHeight = window.innerHeight;
                                } else {
                                     bodyWidth = document.documentElement.clientWidth;
                                     bodyHeight = document.documentElement.clientHeight;
                                }

                                if (widthChat > bodyWidth || heightChat > bodyHeight) {
                                    CHAT.resize(bodyWidth-28, 200);
                                }
                                else {
                                    CHAT.resize(widthChat, heightChat);
                                }
                            }
                            else {

                                if (window.innerWidth <= 600) {
                                    CHAT.display(false);
                                }
                                else {

                                    var bodyWidth = parseInt($('body').css('width'));
                                    var bodyHeight = parseInt($('body').css('height'));

                                    if (parseInt(CHAT.elem.container.css('width')) > (bodyWidth - 100) || parseInt(CHAT.elem.container.css('height')) > (bodyHeight - 100)) {

                                        CHAT.resize(280, 200);
                                    }
                                    else {
                                        CHAT.resize(parseInt(CHAT.elem.container.css('width')), parseInt(CHAT.elem.container.css('height')));
                                    }

                                }
                            }


                            if (!CONFIG.user.spinned) {
                                openSpinModal();
                            }


                            var hash = window.location.hash;
                            if (hash != '') {

                                var check = hash.split('=');
                                if(check[1] !== undefined) {


                                    if(check[0] === '#user') {

                                        MODAL.closeModal();
                                        var el = $('<span style="display:none"></span>');
                                        $('body').append(el);
                                        el.text(check[1]);
                                        openProfile(el.text());
                                        //el.remove();
                                    }
                                    else if(check[0] === '#auth') {

                                        MODAL.closeModal();
                                        MODAL.openModal('auth', 'login');
                                    }
                                }
                            }


                            loadSocket();

                            windowResize(true);

                            var firstv = localStorage.getItem('first-visit');
                            if(!firstv) {
                                localStorage.setItem('first-visit', time());
                                firstv =  time();
                            }

                            var adReq = 0;
                            if(CONFIG.user.connected && (parseInt(CONFIG.user.premium.expire_at) < time() || !CONFIG.user.premium.active)) {
                                adReq = 1;
                            }
                            else if(!CONFIG.user.connected && localStorage) {

                                if(firstv){

                                    if(parseInt(firstv) < (time()) - 120) {
                                        adReq = 1;
                                    }
                                    else {
                                        adReq = 2;
                                    }
                                }

                            }

                            adReq = 0; //ads disabled
                            if(adReq > 0 && CONFIG.painting.height >= 300) {

                                if(adReq === 1) {

                                    $('.imp').html('<div><script type="text/javascript" src="https://services.vlitag.com/adv1/?q=27546936fdc4110d04b58b19cd9d49f5" defer="" async=""></script><script> var vitag = vitag || {};</script><div class="ablock"></div></div>');


                                    if(CONFIG.painting.height >= 650) {

                                        setTimeout(function(){


                                            $('.imp .ablock').append('<div class="abs"><div class="title">Advertising</div><div class="adsbyvli" style="width:300px; height:250px" data-ad-slot="vi_23510102700"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102700") })</script></div>');

                                            if(CONFIG.painting.height >= 950) {

                                                setTimeout(function(){


                                                    $('.imp .ablock').append('<div class="abs"><div class="title">Advertising</div><div class="adsbyvli" style="width:300px; height:250px" data-ad-slot="vi_23510102700"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102700") })</script></div>');

                                                    if(CONFIG.painting.height >= 1250) {

                                                        setTimeout(function(){

                                                            $('.imp .ablock').append('<div class="abs"><div class="title">Advertising</div><div class="adsbyvli" style="width:300px; height:250px" data-ad-slot="vi_23510102700"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102700") })</script></div>');

                                                        },2000);
                                                    }
                                                },2000);
                                            }

                                        },1000);
                                    }


                                }
                                else if(adReq === 2) {

                                    setTimeout(function(){

                                        $('.imp').html('<div><script type="text/javascript" src="https://services.vlitag.com/adv1/?q=27546936fdc4110d04b58b19cd9d49f5" defer="" async=""></script><script> var vitag = vitag || {};</script><div class="ablock"></div></div>');


                                        if(CONFIG.painting.height >= 650) {

                                            setTimeout(function(){

                                                $('.imp .ablock').append('<div class="abs"><div class="title">Advertising</div><div class="adsbyvli" style="width:300px; height:250px" data-ad-slot="vi_23510102700"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102700") })</script></div>');

                                                if(CONFIG.painting.height >= 950) {

                                                    setTimeout(function(){

                                                        $('.imp .ablock').append('<div class="abs"><div class="title">Advertising</div><div class="adsbyvli" style="width:300px; height:250px" data-ad-slot="vi_23510102700"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102700") })</script></div>');

                                                        if(CONFIG.painting.height >= 1250) {


                                                            setTimeout(function(){
                                                                $('.imp .ablock').append('<div class=abs><div class="title">Advertising</div><div class="adsbyvli" style="width:300px; height:250px" data-ad-slot="vi_23510102700"></divdiv> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102700") })</script></div>');

                                                            },2000);
                                                        }

                                                    },2000);
                                                }
                                            },1000);
                                        }

                                    }, 80000);

                                }

                            }

                            localStorage.setItem('last-visit', time());


                            triggerGlobalLoader(false);

                        }

                        if (CONFIG.painting.protection) {
                            var cache = timeMS();
                            protectedImg.src = CONFIG.host.http + 'canvas/' + CONFIG.painting.id + 'p.png?t200000=' + cache;
                        }
                        else {
                            protectedImg.src = CONFIG.host.http + 'canvas/0p.png';
                        }
                    }

                    var cache = timeMS();
                    paintingImg.src = CONFIG.host.http + 'canvas/' + CONFIG.painting.id + '.png?t200000=' + cache;

                }

            },
            drawPixelAt: function (automated, x, y, c, size, u, bot) {  //silent should be false only for user actions

                var tMS = timeMS();

                if (x === undefined) {
                    x = CURSOR.x;
                }

                if (y === undefined) {
                    y = CURSOR.y;
                }

                if (size === undefined) {
                    size = PAINTING.brush.size;
                }


                if (c === undefined) {
                    c = PAINTING.color;
                }

                if (SAVE_TRACKING_SERVER_ENABLED) {
                    return;
                }
                else if (!automated && !CONFIG.user.connected) {
                    MODAL.openModal('auth', 'login');
                    return;
                }
                else if (!automated && PAINTING.cooldown > tMS) {
                    return;
                }
                else if (x < 0 || y < 0 || x > (CONFIG.painting.width - 1) || y > (CONFIG.painting.height - 1)) {
                    return;
                }
                else if (size <= 1 && !automated && PAINTING.checkDuplicateFromPainting(x, y, c)) {
                    return;
                }
                else if (!automated && PAINTING.checkSamePlaceThanLast(x, y, c, size)) {
                    return;
                }
                else if (c !== -100 && $.inArray(c, CONFIG.painting.palette) === -1) {
                    return;
                }
                else if (protectedBombArea && u !== 0 && tMS <= protectedBombArea.time  && x >= protectedBombArea.x && x <= protectedBombArea.xLimit && y >= protectedBombArea.y && y <= protectedBombArea.yLimit) {
                    return;
                }
                else {

                    var keepgoing = true;
                    if (CONFIG.painting.protection) {

                        if ((PAINTING.mode === 0 || PAINTING.mode === 4) && PAINTING.checkProtectionFromPainting(x, y)) {

                            /*
                            if (parseInt(CONFIG.painting.template) === 0 && CONFIG.user.settings.painting.protectionFlashing && !PAINTING.isFlashingProtection && !automated) {

                                PAINTING.isFlashingProtection = true;

                                PAINTING.element.canvas.protected.show();

                                setTimeout(function () {

                                    PAINTING.element.canvas.protected.fadeOut(400);

                                    setTimeout(function () {

                                        PAINTING.isFlashingProtection = false;

                                    }, 500);

                                }, 100);
                            }
*/
                            keepgoing = false; //fucking return that doesn't work
                            return;
                        }
                    }

                    if (!keepgoing) {
                        return;
                    }
                    else if (!automated) {


                        if (!bot && PAINTING.pRTime > tMS) {
                            // notification('error', 'Error', 'You are placing pixels too fast '+PAINTING.pRTime+' > '+ tMS);
                        }
                        else {

                            PAINTING.pRTime = tMS + CONFIG.painting.rate;

                            PAINTING.lastPixelPlaced.time = tMS + 100;
                            PAINTING.lastPixelPlaced.index = x + '-' + y + '-' + c + '-' + size;

                            if (PAINTING.mode === 1 || PAINTING.mode === 2 || PAINTING.mode === 3 || PAINTING.mode === 4) {

                                if (PAINTING.mode === 1 && PAINTING.protectionWithBG) {
                                    WS.io.emit('p', [x, y, -100, size, PAINTING.mode]);
                                }
                                else {
                                    WS.io.emit('p', [x, y, c, size, PAINTING.mode]);
                                }
                            }
                            else {
                                WS.io.emit('p', [x, y, c, size]);
                            }
                        }
                    }
                    else {

                        if (c === -100) {
                            PAINTING.element.ctx.painting.fillStyle = '#cccccc';
                        }
                        else {
                            PAINTING.element.ctx.painting.fillStyle = DEFAULT.painting.palette.colors[c];
                        }

                        PAINTING.element.ctx.painting.fillRect(x, y, size, size);

                        if (u !== undefined && u !== CONFIG.user.id && CONFIG.user.settings.painting.saveTracking) {

                            if (SAVE_TRACKING_DATA[x + '-' + y] === undefined) {
                                SAVE_TRACKING_DATA[x + '-' + y] = [];
                            }

                            SAVE_TRACKING_DATA[x + '-' + y].push([x, y, c, u, time()]);

                            if (SAVE_TRACKING_DATA_NAMES[u] === undefined) {
                                WS.io.emit('username', u);
                            }
                        }

                        if (u !== undefined && u !== CONFIG.user.id && CONFIG.user.settings.painting.liveTracking) {

                            if (PAINTING.liveTrackingUsers[u] === undefined) {

                                PAINTING.liveTrackingUsers[u] = {
                                    t: tMS + 4000,
                                    n: '',
                                    c: c,
                                    r: false
                                };

                                WS.io.emit('username', u);

                                PAINTING.element.move.append('<div class="track open-profile" style="display:none" data-profile="' + PAINTING.liveTrackingUsers[u].n.toLowerCase() + '" data-id="' + u + '" style="border-color:' + DEFAULT.painting.palette.colors[c] + '">' + PAINTING.liveTrackingUsers[u].n + '</div>');

                            }
                            else if (PAINTING.liveTrackingUsers[u].r) {


                                if(FILTER_TRACK && PAINTING.liveTrackingUsers[u].n.toLowerCase() !== FILTER_TRACK) {

                                    return;
                                }
                                else {

                                    PAINTING.liveTrackingUsers[u].t = tMS + 4000;
                                    PAINTING.liveTrackingUsers[u].c = c;
                                    PAINTING.element.move.append('<div class="track open-profile" data-profile="' + PAINTING.liveTrackingUsers[u].n.toLowerCase() + '"  data-id="' + u + '" style="border-color:' + DEFAULT.painting.palette.colors[c] + '">' + PAINTING.liveTrackingUsers[u].n + '</div>');
                                    PAINTING.liveTrackingUsers[u].r = false;
                                }

                            }
                            else {

                                if(FILTER_TRACK && PAINTING.liveTrackingUsers[u].n.toLowerCase() !== FILTER_TRACK) {

                                    return;
                                }
                                else {


                                    PAINTING.liveTrackingUsers[u].t = tMS + 4000;
                                    if (PAINTING.liveTrackingUsers[u].c != c) {

                                        $('.track[data-profile="' + PAINTING.liveTrackingUsers[u].n.toLowerCase() + '"]').css('border-color', DEFAULT.painting.palette.colors[c]);
                                    }
                                    PAINTING.liveTrackingUsers[u].c = c;
                                }
                            }

                            PAINTING.element.move.find('.track[data-id="' + u + '"]').css({top: (y + 1) + 'px', left: (x + 1) + 'px'}).show();
                        }
                    }
                }
            },
            loadPalette: function () {

                if (!CONFIG) {

                    return;

                }
                else {

                    var append = '';
                    for (var k in DEFAULT.painting.palette.order) {

                        //Order allow us to add more colors in the future without messing with the existing painting settings
                        var index = DEFAULT.painting.palette.order[k];

                        //CONFIG.painting.palette containg colors ID (offset of DEFAULT DEFAULT.painting.palette.colors)
                        if ($.inArray(index, CONFIG.painting.palette) !== -1) {

                            //if color present in allowed colors

                            var c = DEFAULT.painting.palette.colors[index];

                            if (!CONFIG.user.premium.active && $.inArray(c, DEFAULT.painting.palette.premium) !== -1) {

                                append += '<a href="#" title="' + c + '" data-id="' + index + '" style="background-color: ' + c + '" class="disabled"></a>';
                            }
                            else {
                                append += '<a href="#" title="' + c + '" data-id="' + index + '"  style="background-color: ' + c + '"></a>';
                            }
                        }
                    }

                    ELEM.palette.html(append);

                    var randomColorIndex = randomIntFromInterval(0, CONFIG.painting.palette.length - 1);

                    if (!CONFIG.user.premium.active) {

                        while ($.inArray(DEFAULT.painting.palette.colors[CONFIG.painting.palette[randomColorIndex]], DEFAULT.painting.palette.premium) !== -1) {
                            randomColorIndex = randomIntFromInterval(0, CONFIG.painting.palette.length - 1);
                        }
                    }


                    PAINTING.selectPaletteColor(CONFIG.painting.palette[randomColorIndex]);


                    ELEM.palette.find('a').on('click', function (e) {

                        e.preventDefault();

                        PAINTING.selectPaletteColor(parseInt($(this).attr('data-id')));
                    });

                }

            },
            selectPaletteColor: function (id) {

                if ($.inArray(id, CONFIG.painting.palette) !== -1) {

                    if (!CONFIG.user.premium.active && $.inArray(DEFAULT.painting.palette.colors[id], DEFAULT.painting.palette.premium) !== -1) {

                        MODAL.openModal('main', 'shop');
                        notification('warning', 'Premium Color', 'This color is available to Premium subscribers only');
                    }
                    else {

                        PAINTING.color = parseInt(id);

                        ELEM.palette.find('a').removeClass('selected');
                        ELEM.palette.find('a[data-id="' + PAINTING.color + '"]').addClass('selected');

                        CURSOR.triggerCursor(undefined, PAINTING.color);
                    }
                }

            },
            fetchPaintingAccess: function (type, start) {


                var block = MODAL.activeContent.find('.rows');


                var search = $('input[name="filter-request"][data-type="' + type + '"]').val();
                if (search === undefined || parseInt(type) === 0) {
                    search = '';
                }

                if (search.length > 0 && search.length <= 2) {
                    return;
                }

                if (start === 0) {
                    MODAL.triggerLoader(true);
                    block.html('');
                    PAINTING.lastStartAccessFetch = 0;
                }


                XX.xhr.req('GET', '/api/get-painting-access.php?getAccessRequests=true&id=' + CONFIG.painting.id + '&start=' + start + '&type=' + type + '&search=' + search, {}, true, function (success, data) {



                    if (start === 0) {
                        MODAL.triggerLoader(false);
                    }

                    if (success) {


                        var loadMore = MODAL.activeContent.find('.load-more');


                        if (data.more) {

                            loadMore.show();
                            loadMore.text(loadMore.attr('data-text'));
                            loadMore.removeAttr('disabled');
                            loadMore.removeClass('spin');
                        }
                        else {
                            loadMore.hide();
                        }

                        for (var k in data.requests) {

                            var req = data.requests[k];


                            var guild = '';
                            var bullet = '';
                            if (req.guild) {
                                guild = '' + req.guild + '';
                                bullet = ' &bull; ';
                            }


                            var elem = $('<div class="request-row">' +
                                '<a href="#" class="username open-profile" data-profile=""><span class="guild">' + guild + '</span>' + bullet + '<span class="name"></span></a>' +
                                '<div class="stats"></div>' +
                                '<div class="message"></div>' +
                                '<div class="reason"><span class="lastChangeBy"></span><span class="text"></span></div>' +
                                '<div class="reasonTmp"><span class="text c-orange"></span></div>' +
                                '<div class="actions"><a href="#" data-id="' + req.id + '" data-type="1"></a><a href="#" class="decline banTime"  data-id="' + req.id + '" data-type="2"></a><a href="#" class="decline permaBan"  data-id="' + req.id + '" data-type="2"></a></div></div>');

                            block.append(elem);


                            elem.find('.username .name').text(req.email);
                            elem.find('.username').attr('data-profile', req.email);


                            if (req.pixels >= 0 && req.joinDate) {

                                var joinedOn = new Date(req.joinDate).toLocaleDateString();
                                elem.find('.stats').text(parseInt(req.pixels).toLocaleString('ru-RU') + ' pixels, joined on ' + joinedOn);
                            }
                            else {
                                elem.find('.stats').hide();
                            }


                            if (req.message != '') {
                                elem.find('.message').text(req.message);
                            }
                            else {
                                elem.find('.message').hide();
                            }

                            if (type === 1) {
                                elem.find('a[data-type="2"].banTime').text('TEMP BAN');
                                elem.find('a[data-type="2"].permaBan').text('BAN');
                                elem.find('a[data-type="1"]').hide();
                                elem.find('.stats').hide();

                                if (req.lastChangeUsername) {
                                    elem.find('.reason .text').hide();
                                    elem.find('.reason .lastChangeBy').text(req.lastChangeUsername);
                                    elem.find('.reason').show();

                                    elem.find('.reason .lastChangeBy').removeClass('c-green').removeClass('c-red').addClass('c-green');
                                }

                            }
                            else if (type === 2) {

                                elem.find('a[data-type="2"]').hide();
                                elem.find('a[data-type="1"]').text('GIVE ACCESS');
                                elem.find('.stats').hide();


                                if (req.reason != '') {

                                    elem.find('.reason .text').text(req.reason);

                                    if (req.lastChangeUsername) {
                                        elem.find('.reason .lastChangeBy').text(req.lastChangeUsername + ': ');
                                    }

                                    elem.find('.reason .lastChangeBy').removeClass('c-green').removeClass('c-red').addClass('c-red');

                                    elem.find('.reason .text').show();
                                    elem.find('.reason').show();
                                }
                                else {
                                    elem.find('.reason').hide();
                                }


                                if (parseInt(req.daysLeft) > -1) {
                                    elem.find('.reasonTmp').show();
                                    elem.find('.reasonTmp .text').text('(Temp ban, ' + req.daysLeft + ' day' + (parseInt(req.daysLeft) != 1 ? 's' : '') + ' left)').show();
                                }
                                else {
                                    elem.find('.reasonTmp').hide();
                                }

                            }
                            else {
                                elem.find('a[data-type="2"].banTime').hide();
                                elem.find('a[data-type="2"].permaBan').text('DECLINE');
                                elem.find('a[data-type="1"]').text('ACCEPT');
                            }
                        }


                        if (data.requests.length <= 0 && type === 0) {
                            block.html('<p class="margin-top"><b>No pending requests.</b><br/><br/>When a user try to place a pixel on your painting, a form will appear to request access.<br/>You will then get a notification each time someone make a new request.</p>');
                            $('#form-painting-approve-all-requests').hide();
                        }
                        else {
                            $('#form-painting-approve-all-requests').show();
                        }

                    }
                    else {
                        notification('error', 'Error', data.message);

                        MODAL.closeModal();
                        window.location.reload();
                    }
                });
            },
            fetchPaintingModerators: function () {

                var block = MODAL.activeContent.find('.rows');
                MODAL.triggerLoader(true);
                block.html('');

                XX.xhr.req('GET', '/api/get-painting-access.php?getModerators=true&painting=' + CONFIG.painting.id, {}, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    if (success) {

                        for (var k in data) {

                            var req = data[k];

                            var permTools = parseInt(req.perm_paintingtools) >= 1 ? 'checked' : '';
                            var permBan = parseInt(req.perm_ban) >= 1 ? 'checked' : '';

                            var elem = $('<div class="request-row">' +
                                '<a href="#" class="username open-profile" data-profile=""><span class="name" ></span></a>' +
                                '<div class="perms">' +
                                '<div class="inline-checkbox modPermTools"><input type="checkbox" name="modPermTools" ' + permTools + ' data-username=""><label for="modPermTools">Painting Tools <span class="desc">Access to Protect, Replace & Fill tool</span></label></div>' +
                                '<div class="inline-checkbox modPermBan"><input type="checkbox" name="modPermBan" ' + permBan + ' data-username=""><label for="modPermBan">Ban Command <span class="desc">Access to the "/ban USERNAME" and "/unban USERNAME" chat command</span></label></div>' +
                                '</div>' +
                                '<div class="actions"><a href="#" class="remove"  data-id="' + req.username + '" data-type="10">REMOVE</a></div></div>');

                            block.append(elem);

                            if (!CONFIG.user.settings.painting.isOwner) {
                                elem.find('.actions .remove').hide();
                            }

                            elem.find('.username .name').text(req.username);
                            elem.find('[name="modPermTools"]').attr('data-username', req.username);
                            elem.find('[name="modPermBan"]').attr('data-username', req.username);
                            elem.find('.username').attr('data-profile', req.username);
                        }

                    }
                    else {
                        notification('error', 'Error', data.message);
                    }
                });
            },
            refreshPaintingList: function (startAt) {

                MODAL.triggerLoader(true);

                if (startAt === undefined) {
                    startAt = 0;
                }


                var filters = {}

                $('#painting-list .inline-checkbox input').each(function () {

                    filters[$(this).attr('id')] = false;
                });

                $('#painting-list .inline-checkbox input:checked').each(function () {

                    filters[$(this).attr('id')] = true;
                });


                var block1 = MODAL.activeContent.find('.paintings-list[data-id="pixelplace"]');
                var block2 = MODAL.activeContent.find('.paintings-list[data-id="users"]');

                var data = PAINTING.paintingListCache;

                if (startAt === 0) {

                    $('#form-painting-load-more-list').show();

                    block1.html('');
                    block2.html('');

                    for (var k in data.paintings.pixelplace) {

                        var req = data.paintings.pixelplace[k];

                        var elem = $('<a href="/' + req.id + '-' + req.slug + '" style="background-color:' + DEFAULT.painting.palette.colors[req.defaultColor] + '"><div class="name"></div></a>');


                        elem.css('background-image', 'url("canvas/' + req.id + '.png?t=' + data.last_update + '")');
                        elem.attr('title', req.pixelsPlaced + ' pixels placed');

                        block1.append(elem);

                        elem.find('.name').text(req.name);
                    }
                }

                var count = 0;
                var total = 0;
                var more = false;


                for (var k in data.paintings.users) {

                    var req = data.paintings.users[k];

                    if (PAINTING.paintingListSearch && PAINTING.paintingListSearch !== '' && req.name.toLowerCase().indexOf(PAINTING.paintingListSearch) === -1) {

                    }
                    else {

                        if (count >= CONFIG.user.settings.painting.listMaxPaintings) {

                            var nextK = parseInt(k) + 1;
                            if (data.paintings.users[nextK] !== undefined) {
                                more = true;
                            }

                            break;
                        }


                        var filter = '';

                        if (req.havePremiumSettings && req.premiumTime < time()) {
                            filter = 'bg-disabled';
                        }
                        else if (req.status != '1') {
                            filter = 'bg-disabled';
                        }
                        else if (req.visibility == '2' && parseInt(req.guildIntegration) === 1) {
                            filter = 'bg-guild';
                        }
                        else if (req.visibility == '2' && parseInt(req.twitchIntegration) === 1) {
                            filter = 'bg-twitch';
                        }
                        else if (req.visibility == '2') {
                            filter = 'bg-approval';
                        }
                        else if (req.visibility == '3') {
                            filter = 'bg-owner';
                        }

                        //be aware, theses are duplicated in my painting list
                        var ignore = false;

                        if (!filters['filter-1'] && req.visibility === '1') {
                            ignore = true;
                        }

                        if (!filters['filter-2'] && req.visibility === '2') {
                            ignore = true;
                        }

                        if (!filters['filter-3'] && req.visibility === '3') {
                            ignore = true;
                        }

                        if (!filters['filter-4'] && ((req.havePremiumSettings && req.premiumTime < time()) || req.status !== '1')) {
                            ignore = true;
                        }

                        if (!filters['filter-5'] && req.template === '1') {
                            ignore = true;
                        }

                        if (!filters['filter-6'] && req.cooldown !== '0') {
                            ignore = true;
                        }


                        if (!ignore) {

                            if (total >= startAt) {

                                var blur = '';
                                if (parseInt(req.id) === 13 || (req.nsfw && parseInt(req.nsfw) === 1)) {
                                    blur = 'blur';
                                }


                                var elem = $('<a href="/' + req.id + '-' + req.slug + '" class="' + filter + '" style="background-color:' + DEFAULT.painting.palette.colors[req.defaultColor] + '" title="' + req.pixelsPlaced + ' pixels placed"><div class="name"></div></a>');

                                elem.css('background-image', 'url("canvas/' + req.id + '.png?t=' + data.last_update + '")');

                                block2.append(elem);

                                elem.find('.name').text(req.name);


                                count++;
                            }

                            total++;
                        }

                    }

                }

                if (startAt > 0) {

                    var form = $('#form-painting-load-more-list');
                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');
                    PAINTING.paintingListStart = startAt;
                }

                if (!more) {

                    $('#form-painting-load-more-list').hide();
                }

                MODAL.triggerLoader(false);
            },
            loadPaintingList: function () {

                $('#painting-list .inline-checkbox input').prop('checked', true);

                MODAL.triggerLoader(true);

                var cache = time();

                WS.io.emit('hot.paintings');

                XX.xhr.req('GET', '/top-paintings.json?t' + cache, {}, true, function (success, data) {

                    if (success) {

                        PAINTING.paintingListCache = data;
                        PAINTING.paintingListStart = 0;
                        PAINTING.refreshPaintingList();

                    }
                    else {
                        MODAL.triggerLoader(false);
                        notification('error', 'Error', data.message);
                    }

                });
            },
            loadMyPaintings: function () {

                var block0 = MODAL.activeContent.find('.paintings-list[data-id="owned"]');

                var elem = $('<a href="#" class="display-my-painting-list btn">Display my paintings list</a><br/><a href="#" class="open-modal secondary new-painting create-new-painting-from-list btn" data-target="main" data-content="painting" data-extra="create">Create new Painting</a>');

                block0.html(elem);

                if (!CONFIG.user.connected) {

                    $('.display-my-painting-list').hide();
                    PAINTING.loadPaintingList();

                }
                else {

                    XX.xhr.req('GET', '/api/get-my-paintings.php', {}, true, function (success, data) {

                        if (success) {

                            if(!data.paintings.length) {
                                $('.display-my-painting-list').hide();
                            }
                            else {
                                $('.display-my-painting-list').show();
                            }
                            for (var k in data.paintings) {

                                var req = data.paintings[k];

                                var filter = '';

                                if (req.havePremiumSettings && req.premiumTime < time()) {
                                    filter = 'bg-disabled';
                                }
                                else if (req.status != '1') {
                                    filter = 'bg-disabled';
                                }
                                else if (req.visibility == '2' && parseInt(req.guildIntegration) === 1) {

                                    filter = 'bg-guild';
                                }
                                else if (req.visibility == '2' && parseInt(req.twitchIntegration) === 1) {

                                    filter = 'bg-twitch';
                                }
                                else if (req.visibility == '2') {
                                    filter = 'bg-approval';
                                }
                                else if (req.visibility == '3') {
                                    filter = 'bg-owner';
                                }
                                else if (req.visibility == '4') {
                                    filter = 'bg-guild';
                                }

                                var elem = $('<a href="/' + req.id + '-' + req.slug + '" class="' + filter + ' my-paintings-list" style="background-color:' + DEFAULT.painting.palette.colors[req.defaultColor] + '" title="' + req.pixelsPlaced + ' pixels placed"><div class="name"></div></a>');


                                elem.css('background-image', 'url("canvas/' + req.id + '.png?t=' + req.lastPixelPlaced + +'")');


                                block0.prepend(elem);

                                elem.find('.name').text(req.name);
                                if (parseInt(req.xMax) < 205) {
                                    elem.find('img').addClass('pixelate');
                                }
                            }

                        }
                        else {

                            notification('error', 'Error', data.message);
                        }

                        PAINTING.loadPaintingList();

                    });
                }
            },
            loadGuildMembers: function (refresh) {

                var block = $('#social').find('table');

                if (!CONFIG.user.connected) {

                    //todo not connected
                }
                else {

                    // $('#menu-buttons-right-bottom a[data-id="social"] .notification-bubble').text('0').hide();

                    block.html('<tr><td><div class="loading-table"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');

                    XX.xhr.req('GET', '/api/get-guild-members.php', {}, true, function (success, data) {

                        block.html('');

                        if (success) {

                            CONFIG.guildMembers = data.members;

                            var i = 0;
                            for (var k in data.members) {

                                var req = data.members[k];

                                var stripped = '';
                                if (i === 0) {
                                    i++;
                                }
                                else if (i === 1) {
                                    i = 0;
                                    // stripped = 'class="stripped"';
                                }

                                WS.io.emit('user.profile', req);

                                var elem = $('<tr data-online="0" data-username="" ' + stripped + '><td><a href="#" class="open-profile display-block" data-profile=""><div class="offline"></div><span></span></a></td><td class="current-painting">Offline</td><td class="action"><a href="#" class="btn-del-guild-member display-block" data-username=""><img src="/img/icons/i-close-grey.svg" width="10"></a></td></tr>');

                                block.prepend(elem);

                                elem.find('.open-profile span').text(req);
                                elem.find('.open-profile').attr('data-profile', req.toLowerCase());
                                elem.find('.btn-del-guild-member').attr('data-username', req);
                                elem.attr('data-username', req.toLowerCase());
                            }

                            if (block.html() === '') {

                                if (CONFIG.user.guild !== '') {
                                    block.prepend('<tr><td class="text-center hover-bg-white">No members yet :(</td></tr>');
                                }
                                else {
                                    block.prepend('<tr><td class="text-center ptb-2 hover-bg-white"><a href="#" class="open-modal" data-target="main" data-content="guilds">Join a guild</a></td></tr>');
                                }

                            }

                        }
                        else {

                            notification('error', 'Error', data.message);
                        }

                    });

                }
            },
            loadGuildMembersRequests: function (refresh) {

                var block = $('#social').find('table');

                if (!CONFIG.user.connected) {

                    //todo not connected
                }
                else {

                    // $('#menu-buttons-right-bottom a[data-id="social"] .notification-bubble').text('0').hide();

                    block.html('<tr><td><div class="loading-table"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');


                    XX.xhr.req('GET', '/api/get-guild-members.php', {requests: true}, true, function (success, data) {

                        block.html('');

                        if (success) {

                            CONFIG.guildMembers = data.members;

                            var i = 0;
                            for (var k in data.members) {

                                var req = data.members[k];

                                var stripped = '';
                                if (i === 0) {
                                    i++;
                                }
                                else if (i === 1) {
                                    i = 0;
                                    //stripped = 'class="stripped"';
                                }

                                WS.io.emit('user.profile', req);

                                var elem = $('<tr data-online="0" data-username="" ' + stripped + '><td><a href="#" class="open-profile display-block" data-profile=""><div class="offline"></div><span></span></a></td><td class="current-painting">Offline</td><td class="action"><a href="#" class="btn-add-guild-member" data-username=""><img src="/img/icons/i-check.svg" width="10"></a> <a href="#" class="btn-del-guild-member" data-username="" data-extra="denied"><img src="/img/icons/i-close-grey.svg" width="10"></a></td></tr>');

                                block.prepend(elem);

                                elem.find('.open-profile span').text(req);
                                elem.find('.open-profile').attr('data-profile', req.toLowerCase());
                                elem.find('.btn-del-guild-member').attr('data-username', req);
                                elem.find('.btn-add-guild-member').attr('data-username', req);
                                elem.attr('data-username', req.toLowerCase());
                            }

                            if (block.html() === '') {
                                block.prepend('<tr><td class="text-center">No requests pending</td></tr>');
                            }

                        }
                        else {

                            notification('error', 'Error', data.message);
                        }

                    });

                }
            },
            loadFriends: function (refresh) {

                var block = $('#social').find('table');

                if (!CONFIG.user.connected) {

                    //todo not connected
                }
                else {

                    $('#menu-buttons-right-bottom a[data-id="social"] .notification-bubble').text('0').hide();

                    block.html('<tr><td><div class="loading-table"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');

                    if (!refresh) {

                        block.html('');

                        var i = 0;
                        for (var k in CONFIG.user.friends) {

                            var req = CONFIG.user.friends[k];

                            var stripped = '';
                            if (i === 0) {
                                i++;
                            }
                            else if (i === 1) {
                                i = 0;
                                //stripped = 'class="stripped"';
                            }

                            WS.io.emit('user.profile', req);

                            var elem = $('<tr data-online="0" data-username="" ' + stripped + '><td><a href="#" class="open-profile display-block" data-profile=""><div class="offline"></div><span></span></a></td><td class="current-painting">Offline</td><td class="action"><a href="#" class="btn-del-friend display-block" data-username=""><img src="/img/icons/i-close-grey.svg" width="10"></a></td></tr>');

                            block.prepend(elem);

                            elem.find('.open-profile span').text(req);
                            elem.find('.open-profile').attr('data-profile', req.toLowerCase());
                            elem.find('.btn-del-friend').attr('data-username', req.toLowerCase());
                            elem.attr('data-username', req.toLowerCase());
                        }

                        if (block.html() === '') {
                            block.prepend('<tr><td class="text-center hover-bg-white">No player added yet :(</td></tr>');
                        }
                    }
                    else {
                        XX.xhr.req('GET', '/api/get-my-friends.php', {}, true, function (success, data) {

                            block.html('');

                            if (success) {

                                CONFIG.user.friends = data.users;

                                var i = 0;
                                for (var k in data.users) {

                                    var req = data.users[k];

                                    var stripped = '';
                                    if (i === 0) {
                                        i++;
                                    }
                                    else if (i === 1) {
                                        i = 0;
                                        // stripped = 'class="stripped"';
                                    }

                                    WS.io.emit('user.profile', req);

                                    var elem = $('<tr data-online="0" data-username="" ' + stripped + '><td><a href="#" class="open-profile display-block" data-profile=""><div class="offline"></div><span></span></a></td><td class="current-painting">Offline</td><td class="action"><a href="#" class="btn-del-friend display-block" data-username=""><img src="/img/icons/i-close-grey.svg" width="10"></a></td></tr>');

                                    block.prepend(elem);

                                    elem.find('.open-profile span').text(req);
                                    elem.find('.open-profile').attr('data-profile', req.toLowerCase());
                                    elem.find('.btn-del-friend').attr('data-username', req.toLowerCase());
                                    elem.attr('data-username', req.toLowerCase());
                                }

                                if (block.html() === '') {
                                    block.prepend('<tr><td class="text-center hover-bg-white">No player added yet :(</td></tr>');
                                }

                            }
                            else {

                                notification('error', 'Error', data.message);
                            }

                        });
                    }
                }
            },
            loadBlocked: function () {

                var block = $('#social').find('table');

                if (!CONFIG.user.connected) {

                    //todo not connected
                }
                else {

                    block.html('<tr><td><div class="loading-table"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');

                    XX.xhr.req('GET', '/api/get-my-friends.php', {type: 1}, true, function (success, data) {

                        block.html('');

                        if (success) {

                            CONFIG.user.blocked = data.users;


                            var i = 0;
                            for (var k in data.users) {

                                var req = data.users[k];

                                var stripped = '';
                                if (i === 0) {
                                    i++;
                                }
                                else if (i === 1) {
                                    i = 0;
                                    //  stripped = 'class="stripped"';
                                }

                                var elem = $('<tr><td><a href="#" class="open-profile display-block" data-profile=""><span></span></a></td><td class="action"><a href="#" class="btn-del-blocked display-block" data-username=""><img src="/img/icons/i-close-grey.svg" width="10"></a></td></tr>');

                                block.prepend(elem);

                                elem.find('.open-profile span').text(req);
                                elem.find('.open-profile').attr('data-profile', req.toLowerCase());
                                elem.find('.btn-del-blocked').attr('data-username', req.toLowerCase());
                                elem.attr('data-username', req.toLowerCase());
                            }

                            if (block.html() === '') {
                                block.prepend('<tr><td class="text-center hover-bg-white">No blocked users</td></tr>');
                            }

                        }
                        else {

                            notification('error', 'Error', data.message);
                        }

                    });
                }
            },
            loadUserItems: function () {

                var block = $('.user-items-list');

                ITEM_SELECTED = null;
                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');
                $('.select-item-to-use').removeClass('active');

                $('#items-list').html('<div class="loading-table display-block text-center"><span class="c-loader"><span class="c-loader-inner"></span></span></div>');


                block.html('<div class="loading-table display-block text-center"><span class="c-loader"><span class="c-loader-inner"></span></span></div>');

                XX.xhr.req('GET', '/api/get-my-items.php', {}, true, function (success, data) {


                    if (success) {


                        var items = '';
                        $('#items-list').html('');
                        for (var k in data.items) {

                            if (CONFIG.shop.items[k] !== undefined) {

                                var pixelate = 'pixelate';
                                if (parseInt(k) === 4 || parseInt(k) === 5 || parseInt(k) === 6 || parseInt(k) === 10 || parseInt(k) === 11 || parseInt(k) === 12) {
                                    pixelate = '';
                                }

                                var ext = 'png';
                                var bg = '';
                                if (parseInt(k) === 6 || parseInt(k) === 10|| parseInt(k) === 12) {
                                    ext = 'gif';
                                    bg = 'bg-white';
                                }

                                if (parseInt(data.items[k]) > 0) {

                                    items += '<div class="prem-item" data-item="' + k + '">' +
                                        '<div class="title">' + CONFIG.shop.items[k].name + '</div>' +
                                        '<div class="logo ' + bg + '"><img src="/img/item-' + k + '.' + ext + '?v=4"  class="' + pixelate + '"><div class="count">x' + data.items[k] + '</div></div>' +
                                        '<button class="how-to-item" data-item="' + k + '">USE</button><button class="gift-item" data-item="' + k + '">GIFT</button>' +
                                        '</div>';
                                }

                                if (CONFIG.shop.items[k].type === 1) {
                                    var classToAdd = 'select-item-to-use';
                                    if (parseInt(data.items[k]) <= 0) {
                                        classToAdd = 'open-item';
                                    }

                                    $('#items-list').append('<button class="' + classToAdd + '" data-item="' + k + '"><img src="/img/item-' + k + '.' + ext + '?v=4" class="' + pixelate + '"><div class="stack">' + data.items[k] + '</div></button>');
                                }


                            }

                        }

                        if (items === '') {
                            items = '<p>No items in your inventory.</p>';
                        }

                        block.html(items);

                    }
                    else {

                        block.html('');

                        notification('error', 'Error', data.message);
                    }

                });

            },
            loadFreeCoins: function () {

                $('.claim-coin').removeClass('disabled');
                $('.claim-coin span').text('');

                XX.xhr.req('GET', '/api/get-claims.php', {}, true, function (success, data) {

                    if (success) {

                        for (var k in data.claims) {

                            var claim = data.claims[k];

                            $('.claim-coins[data-id="' + claim.claim_id + '"]').addClass('disabled');
                            $('.claim-coins[data-id="' + claim.claim_id + '"] span').text('Already Claimed');
                        }
                    }
                    else {
                        notification('error', 'Error', data.message);
                    }
                });

            },
            useWeapon: function (itemId) {

                if (!CONFIG.user.connected) {

                    //todo not connected
                }
                else if (ITEM_COOLDOWN > (time() - 1)) {

                    //notification('error', 'Error', 'Please wait ' + (parseInt(ITEM_COOLDOWN - (time() - 5))) + 's before using another item');
                    notification('error', 'Error', 'Please wait 1 sec between each weapon use');

                }
                else if (PAINTING.tryingToUseWeapon) {


                }
                else if(AREAS_UNDER_ATTACK) {

                    notification('error', 'Cannot use weapons during a Guild/Player war');
                }
                else {


                    if (CONFIG.painting.protection && PAINTING.mode === 0 && PAINTING.checkProtectionFromPainting(CURSOR.x, CURSOR.y)) {
                    }
                    else {


                        PAINTING.tryingToUseWeapon = true;

                        var params = {
                            use: true,
                            x: CURSOR.x,
                            y: CURSOR.y,
                            painting: CONFIG.painting.id,
                            item: ITEM_SELECTED,
                            color: PAINTING.color,
                            zoom: PAINTING.scale
                        };

                        if (itemId !== undefined) {
                            params.item = itemId;
                        }


                        if (CURSOR.touchDevice) {

                            ITEM_SELECTED = null;
                        }

                        XX.xhr.req('POST', '/api/post-shop.php', params, true, function (success, data) {

                            setTimeout(function () {
                                PAINTING.tryingToUseWeapon = false;
                            }, 1000);

                            if (success) {


                                PAINTING.loadUserItems();
                            }
                            else {

                                notification('error', 'Error', data.message);
                            }

                        });
                    }
                }
            },
            useItem: function (itemId) {

                if (!CONFIG.user.connected) {

                    //todo not connected
                }
                else {

                    var params = {
                        use: true,
                        painting: CONFIG.painting.id,
                        item: ITEM_SELECTED,
                        color: 1
                    };


                    if (itemId !== undefined) {
                        params.item = itemId;
                    }

                    if (params.item === 9) {

                        var ptp = prompt('Enter a new username');

                        if (ptp) {
                            params.username = ptp;
                        }
                    }

                    XX.xhr.req('POST', '/api/post-shop.php', params, true, function (success, data) {

                        if (success) {

                            PAINTING.loadUserItems();

                            if (params.item === 9) {
                                notification('success', 'New username set. Reloading the page in a few seconds..');
                                setTimeout(function () {
                                    window.location.reload();
                                }, 4000);

                            }
                        }
                        else {

                            notification('error', 'Error', data.message);
                        }

                    });
                }
            },
            disconnectUser: function () {

                CONFIG.user.connected = false;
                CONFIG.user.name = 'Guest';
                CONFIG.user.guild = '';
                CONFIG.user.premium.active = false;
                CONFIG.user.premium.expire_at = 0;
                CONFIG.user.icons = [];
                CONFIG.user.social.discord.linked = false;
                CONFIG.user.social.discord.name = '';
                CONFIG.user.social.reddit.linked = false;
                CONFIG.user.social.reddit.name = '';
                CONFIG.user.social.twitch.linked = false;
                CONFIG.user.social.twitch.name = '';
                CONFIG.user.id = null;

                Cookies.remove('authId', {path: ''});
                Cookies.remove('authKey', {path: ''});
                Cookies.remove('authToken', {path: ''});
            }
        }

        $(document).on('click', '.display-my-painting-list', function(e){

            e.preventDefault();

            $('.my-paintings-list').removeClass('my-paintings-list');
            $('.display-my-painting-list').hide();

        });


        setInterval(function () {

            if (CONFIG.user.settings.painting.saveTracking) {
                var stTime = parseInt(SAVE_TRACKING_ELEM.attr('data-time'));
                if (stTime < time() - 5) {
                    SAVE_TRACKING_ELEM.hide();
                }
            }

            if (CONFIG.user.settings.painting.liveTracking) {

                var currentTimeMs = timeMS();
                var currentTimeMsRemove = currentTimeMs - 60000;

                for (var k in PAINTING.liveTrackingUsers) {

                    if (PAINTING.liveTrackingUsers[k].t < currentTimeMsRemove) {

                        PAINTING.element.move.find('.track[data-id="' + k + '"]').remove();
                        delete PAINTING.liveTrackingUsers[k];

                    }
                    else if (PAINTING.liveTrackingUsers[k].t < currentTimeMs) {

                        if (!PAINTING.liveTrackingUsers[k].r) {
                            PAINTING.liveTrackingUsers[k].r = true;
                            PAINTING.element.move.find('.track[data-id="' + k + '"]').remove();
                        }
                    }
                }
            }


            if(FILTER_TRACK_TIME > 0 && FILTER_TRACK_TIME < time()) {

                FILTER_TRACK_TIME= 0;
                FILTER_TRACK = null;

                CHAT.addMessageRow({
                    type: 'system',
                    message: 'Tracking filter expired'
                });
            }

        }, 1000);


        var protectedBombArea = null;
        function throwBomb(bomb, x, y, color) {
            var launch = false;
            var limit = 0;
            var timeAnim = 0;
            if (bomb === 1) {
                launch = true;
                limit = 35;//24
                //timeAnim =4000;
                timeAnim =6000;
            }
            else if (bomb === 2) {
                launch = true;
                limit = 75;//39
                //timeAnim =6000;
                timeAnim =6000;
            }
            else if (bomb === 3) {
                launch = true;
                limit = 125;//75
                //timeAnim = 8000;
                timeAnim = 6000;
            }

            var idTime = timeMS();

            protectedBombArea = {
                id:idTime,
                x:Math.round(x-(limit/2)),
                y:Math.round(y-(limit/2)),
                xLimit:Math.ceil(x+(limit/2)),
                yLimit:Math.ceil(y+(limit/2)),
                time:idTime + timeAnim
            }

            if(bomb !== 2) {
                protectedBombArea.xLimit++;
                protectedBombArea.yLimit++;
            }


            var firedAt = idTime;
            if (launch) {


                var elem = $('<div class="bomb"></div>');
                $('#painting-move').append(elem);


                var lAnim = Math.round(limit * 2.5);
                var xAnim = Math.round(x-(lAnim/2));
                var yAnim = Math.round(y-(lAnim/2));

                elem.css('top',yAnim+'px');
                elem.css('left', xAnim+'px');


                var image = new Image();
                image.onload = function() {
                    elem.html('<img src="/img/exp1.gif?v='+timeMS()+'" width="'+lAnim+'" class="pixelate">');

                    setTimeout(function(){
                        elem.remove();
                    },3000);
                }
                image.src = '/img/exp1.gif?v1';




                /*
                window.requestAnimationFrame(function () {

                    if (firedAt > idTime - 1000) {
                        animateBomb(0, 0, x, y, limit, 0, true, 1, color, idTime);
                    }
                });*/
            }
        }

        function animateBomb(frames, next, startX, startY, limit, color, round, status, startColor, id) {

            if(id < timeMS() - 10000) {
                return;
            }


            frames++;

            if (frames >= (next * 2)) {
                next += 2;
                dumpCircle(next, startX, startY, color, round);
            }


            if (next <= limit) {

                if (next > (limit - 5)) {
                    round = false;
                }

                window.requestAnimationFrame(function () {
                    animateBomb(frames, next, startX, startY, limit, color, round, status, startColor, id);
                });
            }
            else {

                if(status === 1) {


                    frames = 0;
                    next = 0;
                    color = 5;
                    status = 2;

                    window.requestAnimationFrame(function () {
                        animateBomb(frames, next, startX, startY, limit, color, round, status, startColor, id);
                    });
                }
                else if(status === 2) {

                    frames = 0;
                    next = 0;
                    color = startColor;
                    status = 3;

                    window.requestAnimationFrame(function () {
                        animateBomb(frames, next, startX, startY, limit, color, round, status, startColor, id);
                    });
                }
                else if(status === 3){

                    if(protectedBombArea && protectedBombArea.id === id) {

                        if(protectedBombArea.time + 100 > timeMS()) {

                            setTimeout(function(){

                                if(protectedBombArea && protectedBombArea.id === id) {

                                    protectedBombArea = null;
                                }


                            }, protectedBombArea.time - timeMS());

                        }
                        else {

                            protectedBombArea = null;
                        }
                    }
                }
            }
        }

        function dumpCircle(radius, startX, startY, color, round) {

            var y = 1;
            var startXRow = startX - (radius / 2);
            var startYRow = startY - (radius / 2);

            while (y <= radius) {

                var x = 1;
                var xRadius = radius;

                if (round && radius > 8) {

                    if (y === 1) {
                        x = 6;
                        xRadius = radius - 5;
                    }
                    else if (y === 2) {
                        x = 5;
                        xRadius = radius - 4;
                    }
                    else if (y === 3) {
                        x = 4;
                        xRadius = radius - 3;
                    }
                    else if (y === 4) {
                        x = 3;
                        xRadius = radius - 2;
                    }
                    else if (y === 5) {
                        x = 2;
                        xRadius = radius - 1;
                    }
                    else if (y === radius) {
                        x = 6;
                        xRadius = radius - 5;
                    }
                    else if (y === (radius - 1)) {
                        x = 5;
                        xRadius = radius - 4;
                    }
                    else if (y === (radius - 2)) {
                        x = 4;
                        xRadius = radius - 3;
                    }
                    else if (y === (radius - 3)) {
                        x = 3;
                        xRadius = radius - 2;
                    }
                    else if (y === (radius - 4)) {
                        x = 2;
                        xRadius = radius - 1;
                    }

                }
                else if (round && radius > 4) {

                    if (y === 1) {
                        x = 3;
                        xRadius = radius - 2;
                    }
                    else if (y === 2) {
                        x = 2;
                        xRadius = radius - 1;
                    }
                    else if (y === radius) {
                        x = 3;
                        xRadius = radius - 2;
                    }
                    else if (y === (radius - 1)) {
                        x = 2;
                        xRadius = radius - 1;
                    }
                }


                while (x <= xRadius) {

                    PAINTING.drawPixelAt(true, startXRow + x, startYRow + y, color, 1, 0);

                    x++;
                }
                y++;
            }
        }


//////////////////////// PAINTING: init canvas


        PAINTING.element.canvas.painting = $(document.createElement('canvas'));
        PAINTING.element.canvas.painting[0].width = CONFIG.painting.width;
        PAINTING.element.canvas.painting[0].height = CONFIG.painting.height;
        PAINTING.element.canvas.painting[0].style.width = CONFIG.painting.width + 'px';
        PAINTING.element.canvas.painting[0].style.height = CONFIG.painting.height + 'px';
        PAINTING.element.canvas.painting[0].setAttribute('id', 'canvas');
        PAINTING.element.canvas.painting[0].setAttribute('tabindex', '1');
        PAINTING.element.canvas.painting[0].setAttribute('class', 'pixelate no-select blur');
        PAINTING.element.ctx.painting = PAINTING.element.canvas.painting[0].getContext('2d');
        PAINTING.element.ctx.painting.fillStyle = '#FFFFFF';
        PAINTING.element.ctx.painting.fillRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);

        PAINTING.element.canvas.protected = $(document.createElement('canvas'));
        PAINTING.element.canvas.protected[0].width = CONFIG.painting.width;
        PAINTING.element.canvas.protected[0].height = CONFIG.painting.height;
        PAINTING.element.canvas.protected[0].style.width = CONFIG.painting.width + 'px';
        PAINTING.element.canvas.protected[0].style.height = CONFIG.painting.height + 'px';
        PAINTING.element.ctx.protected = PAINTING.element.canvas.protected[0].getContext('2d');
        PAINTING.element.ctx.protected.fillStyle = '#FFFFFF';
        PAINTING.element.ctx.protected.fillRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);


        //  $('.infoa').css('width', (CONFIG.painting.width - 10)+'px');
        //$('.infoa').css('height', (CONFIG.painting.height - 10)+'px');


//////////////////////// PAINTING: Gestures MOVE/ZOOM


        interact('#painting').styleCursor(false).draggable({
            inertia: true,

            onmove: function (evt) {

                if (PB.position.dragging) {
                    return;
                }
                else if (CONFIG.user.settings.painting.lockPainting) {
                    return;
                }
                else if (!PAINTING.loaded) {
                    return;
                }
                else if (MODAL.activeElement) {
                    return;
                }
                else if (MODAL.activeElement) {
                    return;
                }
                else {

                    if (!MOBILE_ALT_DRAWING && CURSOR.touchDevice) {

                        CURSOR.setCursorPosition();

                        if (CURSOR.mobileBrushActivated) {

                            /*if(PAINTING.mode === 4) {

                                if(fillingBot) {
                                    fillingBot = false;
                                }
                                else if(!fillingBot) {

                                    fillingBot = true;

                                    fillingBot_lastTime = 0;


                                    fillingposX =CURSOR.x;
                                    fillingpoxY = CURSOR.y;
                                    fillingx = 0;
                                    fillingy = 0;
                                    fillingdx = 1;
                                    fillingdy = 0;
                                    fillingx_limit =0;
                                    fillingy_limit = 0;


                                    fillingBotColor = PAINTING.getColorFromPainting(CURSOR.x, CURSOR.y, true);

                                    if(fillingBotColor !== null) {
                                        window.requestAnimationFrame(fillingBotInterval);
                                    }
                                }
                            }
                            else {*/
                                PAINTING.drawPixelAt();
                            //}

                        }
                    }

                    PAINTING.x += evt.dx / PAINTING.scale;
                    PAINTING.y += evt.dy / PAINTING.scale;

                    PAINTING.updateScaleAndPosition();
                }


            },
            onend: function (evt) {

                if (PB.position.dragging) {
                    return;
                }
                else if (CONFIG.user.settings.painting.lockPainting) {
                    return;
                }
                else if (!PAINTING.loaded) {
                    return;
                }
                else if (MODAL.activeElement) {
                    return;
                }
                else {
                    PAINTING.updateUrlHash();
                }
            }

        }).gesturable({
            onmove: function (evt) {

                if (CONFIG.user.settings.painting.lockPainting) {
                    return;
                }
                else if (!PAINTING.loaded) {
                    return;
                }
                else if (MODAL.activeElement) {
                    return;
                }
                else {

                    /*  if (evt.buttons !== 1 && !CURSOR.touchDevice) {
                          return;
                      }*/

                    PAINTING.scale = PAINTING.formatScale(PAINTING.scale * (1 + evt.ds));
                    PAINTING.updateScaleAndPosition();
                }

            },
            onend: function (evt) {

                if (CONFIG.user.settings.painting.lockPainting) {
                    return;
                }
                else if (!PAINTING.loaded) {
                    return;
                }
                else if (MODAL.activeElement) {
                    return;
                }
                else {
                    PAINTING.updateUrlHash();
                }
            }
        });


//////////////////////// PAINTING: zoom (mouse)

        PAINTING.element.painting[0].addEventListener("wheel", function (evt) {

            if (!PAINTING.loaded) {
                return;
            }
            else if (MODAL.activeElement) {
                return;
            }
            else {

                var oldScale = PAINTING.scale;

                PAINTING.scale = PAINTING.formatScale((evt.deltaY > 0) ? PAINTING.scale / 1.5 : PAINTING.scale * 1.5);

                var dx = evt.clientX - PAINTING.element.painting.width() / 2;
                var dy = evt.clientY - PAINTING.element.painting.height() / 2;

                PAINTING.x -= dx / oldScale;
                PAINTING.x += dx / PAINTING.scale;

                PAINTING.y -= dy / oldScale;
                PAINTING.y += dy / PAINTING.scale;

                PAINTING.updateScaleAndPosition();
                PAINTING.updateUrlHash();
                CURSOR.setCursorPosition(evt);
            }

        }, {passive: true});


        function zoomInOrOut(zoomIn) {

            var oldScale = PAINTING.scale;

            if (zoomIn) {

                PAINTING.scale = PAINTING.formatScale(PAINTING.scale * 1.5);
            }
            else {
                PAINTING.scale = PAINTING.formatScale(PAINTING.scale / 1.5);
            }

            var dx = ($(window).width() / 2) - PAINTING.element.painting.width() / 2;
            var dy = ($(window).height() / 2) - PAINTING.element.painting.height() / 2;

            PAINTING.x -= dx / oldScale;
            PAINTING.x += dx / PAINTING.scale;

            PAINTING.y -= dy / oldScale;
            PAINTING.y += dy / PAINTING.scale;

            PAINTING.updateScaleAndPosition();
            PAINTING.updateUrlHash();

            if (CURSOR.touchDevice) {
                CURSOR.setCursorPosition();
            }
        }

        $('#menu-buttons-right-top a[data-id="zoom-in"], #menu-buttons-right-top a[data-id="zoom-out"]').on('click', function (e) {

            e.preventDefault();

            if (!PAINTING.loaded) {
                return;
            }
            else if (MODAL.activeElement) {
                return;
            }
            else {

                zoomInOrOut($(this).attr('data-id') === 'zoom-in');
            }
        });


//////////////////////// PAINTING: Clicks


        /*$(document).on('pointerup', function (evt) {


            if (evt.which === 1 || evt.button === 0) {

                evt.preventDefault();
                if (autoPaintInterval !== null) {
                    clearInterval(autoPaintInterval);
                    autoPaintInterval = null;
                }
            }
        });*/

        $(document).on('contextmenu', function (evt) {

            if (!MODAL.activeElement && !CHAT.inputActive && $(evt.target).closest('#chat .messages').length <= 0) {
                evt.preventDefault();
            }
        });

        /* PAINTING.element.canvas.painting.add(PAINTING.element.canvas.protected).add($('#areas')).on('contextmenu', function (evt) {
             evt.preventDefault();
         });*/


        var downX, downY, downScale, pressedPaint;
        var downFn = function (evt) {
            pressedPaint = true;
            downX = evt.clientX;
            downY = evt.clientY;
            downScale = PAINTING.scale;
        };


        var fillingBot = false;
        var fillingBot_lastTime = 0;

        var fillingBotColor =  null;

        var fillingposX =0;
        var fillingpoxY = 0;
        var fillingx = 0;
        var fillingy = 0;
        var fillingdx = 1;
        var fillingdy = 0;
        var fillingx_limit =0;
        var fillingy_limit = 0;

        function fillingBotInterval(time) {

            if ((time - fillingBot_lastTime) >= (CONFIG.painting.rate*1.5)) {

                fillingBot_lastTime = time;

                botFillNextPixel();
            }

            if(fillingBot) {
                window.requestAnimationFrame(fillingBotInterval);
            }
        }

        function botFillNextPixel() {

            PAINTING.drawPixelAt(false, fillingposX + 1 + fillingx, fillingpoxY + 1 - fillingy, PAINTING.color, 1, undefined, true);

            if( fillingdx > 0 ){//Dir right
                if(fillingx > fillingx_limit){
                    fillingdx = 0;
                    fillingdy = 1;
                }
            }
            else if( fillingdy > 0 ){ //Dir up
                if(fillingy > fillingy_limit){
                    fillingdx = -1;
                    fillingdy = 0;
                }
            }
            else if(fillingdx < 0){ //Dir left
                if(fillingx < (-1 * fillingx_limit)){
                    fillingdx = 0;
                    fillingdy = -1;
                }
            }
            else if(fillingdy < 0) { //Dir down
                if(fillingy < (-1 * fillingy_limit)){
                    fillingdx = 1;
                    fillingdy = 0;
                    fillingx_limit += 1;
                    fillingy_limit += 1;
                }
            }

            //alert (counter);
            fillingx += fillingdx;
            fillingy += fillingdy;

        }




        var upFn = function (evt) {

            if (pressedPaint) {

                pressedPaint = false;

                var dx = Math.abs(downX - evt.clientX);
                var dy = Math.abs(downY - evt.clientY);

                if (dx < 5 && dy < 5 && downScale === PAINTING.scale) {

                    if (evt.originalEvent) {

                        /* if (ALT_pressed) {

                             setUserCoords(cursorPosOnClick);


                             var c = CTX.getImageData(CONFIG.user.cursor.x, CONFIG.user.cursor.y, 1, 1).data;

                             c = rgbToHex(c[0], c[1], c[2]);

                             var findColor = false;
                             for (var x in CONFIG.palette) {

                                 if (CONFIG.palette[x].toUpperCase() === c.toUpperCase()) {

                                     if ((x == 27 || x == 28) && !CONFIG.user.premium) {

                                     }
                                     else {
                                         findColor = CONFIG.palette[x];
                                         selectPaletteColor(x);
                                     }
                                     break;
                                 }
                             }
                         }else {*/

                        evt.preventDefault();

                        if (ITEM_SELECTED !== null) {
                            PAINTING.useWeapon();
                        }
                        else {

                            if (!HAS_USED_SPACE_ONCE) {

                                if (HAS_USED_SPACE_COUNT > 5) {

                                    HAS_USED_SPACE_ONCE = true;
                                    localStorage.setItem('know-about-space-bar', true);

                                    notification('info', 'Tip: Hold [SPACE BAR] to draw faster!');
                                }
                                else {
                                    HAS_USED_SPACE_COUNT++;
                                }
                            }


                            /*if(PAINTING.mode === 4) {

                                if(fillingBot) {
                                    fillingBot = false;
                                }
                                else if(!fillingBot) {

                                    fillingBot = true;

                                    fillingBot_lastTime = 0;


                                    fillingposX = CURSOR.x-1;
                                    fillingpoxY = CURSOR.y-1;
                                    fillingx = 0;
                                    fillingy = 0;
                                    fillingdx = 1;
                                    fillingdy = 0;
                                    fillingx_limit =0;
                                    fillingy_limit = 0;


                                    fillingBotColor = PAINTING.getColorFromPainting(CURSOR.x, CURSOR.y, true);

                                    if(fillingBotColor !== null) {
                                        window.requestAnimationFrame(fillingBotInterval);
                                    }
                                }
                            }
                            else {*/
                                PAINTING.drawPixelAt();
                            //}
                        }
                    }
                }
            }
        }


        PAINTING.element.canvas.painting.add(PAINTING.element.canvas.protected).add($('#areas')).on('pointerdown', function (evt) {

            if (!PAINTING.loaded) {
                return;
            }
            else if (MODAL.activeElement) {
                return;
            }
            else {

                if (!CURSOR.touchDevice) {

                    if (evt.which === 1 || evt.button === 0) { //left

                        //evt.preventDefault();

                        if (!CHAT.altActive && !CHAT.shiftActive) {
                            downFn(evt);
                        }
                    }
                    //PAINTING.element.canvas.painting.css('cursor', 'move');
                }
            }
        });


        //PAINTING.element.canvas.painting.add(PAINTING.element.canvas.protected).add($('#areas')).on('pointerup', function (evt) {
        PAINTING.element.painting.on('pointerup', function (evt) {


            if (!PAINTING.loaded) {
                return;
            }
            else if (MODAL.activeElement) {
                return;
            }
            else {

                if (!CURSOR.touchDevice) {

                    if (evt.which === 1 || evt.button === 0) {//left

                        if (CHAT.altActive) {

                            evt.preventDefault();
                            PAINTING.getColorFromPainting(CURSOR.x, CURSOR.y);

                            if (autoPaintInterval !== null) {
                                clearInterval(autoPaintInterval);
                                autoPaintInterval = null;
                            }
                        }
                        else if (CHAT.shiftActive) {

                            if (SAVE_TRACKING_DATA[CURSOR.x + '-' + CURSOR.y] !== undefined) {

                                var html = '';
                                for (var k in SAVE_TRACKING_DATA[CURSOR.x + '-' + CURSOR.y]) {

                                    var row = SAVE_TRACKING_DATA[CURSOR.x + '-' + CURSOR.y][k];

                                    var timeSince = parseInt(Math.ceil(time() - parseInt(row[4])) / 60);

                                    var name = 'Loading...';
                                    if (SAVE_TRACKING_DATA_NAMES[row[3]] !== undefined) {
                                        name = SAVE_TRACKING_DATA_NAMES[row[3]];
                                    }

                                    html += '<li data-id="' + row[3] + '"><a href="#" class="username open-profile" data-profile="' + name + '"  style="color:' + DEFAULT.painting.palette.colors[row[2]] + '!important;">' + name + '</a> ' + timeSince + 'm ago</li>';
                                }

                                if (html === '') {
                                    SAVE_TRACKING_ELEM.hide();
                                }
                                else {
                                    html = '<ul>' + html;
                                    html += '</ul>';
                                    SAVE_TRACKING_ELEM.attr('data-time', time());
                                    SAVE_TRACKING_ELEM.css({top: parseInt(CURSOR.y) + 'px', left: parseInt(CURSOR.x) + 'px'}).html(html).show();
                                }
                            }
                            else {
                                SAVE_TRACKING_ELEM.hide();
                            }
                        }
                        else {
                            upFn(evt);
                        }
                    }
                    else if (evt.which === 2 || evt.button === 1) { //middle

                        evt.preventDefault();
                        PAINTING.getColorFromPainting(CURSOR.x, CURSOR.y);
                    }
                }
            }
        });


        var pointerDownPosition = {};
        PAINTING.element.canvas.painting.add(PAINTING.element.canvas.protected).add($('#areas')).on('touchstart', function (evt) {

            if (!CURSOR.touchDevice) {
                return;
            }
            else if (!PAINTING.loaded) {
                return;
            }
            else if (MODAL.activeElement) {
                return;
            }
            else {

                if (MOBILE_ALT_DRAWING) {

                    if (evt.touches.length == 1) {

                        evt = setPageXY(evt);
                        pointerDownPosition = {x: evt.pageX, y: evt.pageY, s: PAINTING.scale};
                    }
                }
                else {

                    if (evt.touches.length == 1) {

                        evt = setPageXY(evt);
                        CURSOR.setCursorPosition(evt);
                    }
                }
            }
        });

        PAINTING.element.canvas.painting.add(PAINTING.element.canvas.protected).add($('#areas')).on('touchend', function (evt) {

            if (!MOBILE_ALT_DRAWING) {
                return;
            }
            else if (!PAINTING.loaded) {
                return;
            }
            else if (MODAL.activeElement) {
                return;
            }
            else {

                if (CURSOR.touchDevice) {

                    if (evt.touches.length <= 1) {

                        evt = setPageXY(evt);

                        //  $('#DEBUG').append('<div>' +pointerDownPosition.x+' / '+ evt.pageX + ' | ' + pointerDownPosition.y + '  / ' + evt.pageY + '</div>');

                        if (
                            (pointerDownPosition.x > (evt.pageX + 10) || pointerDownPosition.x < (evt.pageX - 10))
                            || (pointerDownPosition.y > (evt.pageY + 10) || pointerDownPosition.y < (evt.pageY - 10))
                            || pointerDownPosition.s != PAINTING.scale
                        ) {
                            return;
                        }
                        else {

                            CURSOR.setCursorPosition(evt);


                            //       $('#DEBUG').append('<div>c: ' + CURSOR.x + '  ' + CURSOR.y + '</div>');

                            if (ITEM_SELECTED !== null) {

                                if (confirm('Use ' + CONFIG.shop.items[ITEM_SELECTED].name + ' at this position?')) {
                                    PAINTING.useWeapon();
                                }
                            }
                            else {
                                PAINTING.drawPixelAt();
                            }
                        }
                    }
                }
            }

        });


        $('#painting-list .inline-checkbox input:checked').on('click', function (evt) {

            PAINTING.paintingListStart = 0;
            PAINTING.refreshPaintingList();
        });


///////////////////////////////////////////////////////////// CHAT

        var CHAT = {
            elem: {
                container: $('#chat'),
                online: $('#chat .online'),
                onlineValue: $('#chat .online .value'),
                onlineSubValue: $('#chat .online .sub-value'),
                input: $('#chat input[name="chat"]'),
                messages: {
                    global: $('#chat .messages[data-id="global"]'),
                    painting: $('#chat .messages[data-id="painting"]'),
                    nonenglish: $('#chat .messages[data-id="nonenglish"]'),
                    guild: $('#chat .messages[data-id="guild"]'),
                    whispers: $('#chat .messages[data-id="whispers"]')
                },
                button: {
                    collapsed: $('#menu-buttons-bottom a[data-id="chat"]'),
                    hide: $('#chat .buttons a[data-id="hide"]'),
                    resize: $('#chat .buttons a[data-id="resize"]'),
                    backToBottom: $('#chat .back-to-bottom'),

                    global: $('#chat .tabs a[data-id="global"]'),
                    painting: $('#chat .tabs a[data-id="painting"]'),
                    nonenglish: $('#chat .tabs a[data-id="nonenglish"]'),
                    guild: $('#chat .tabs a[data-id="guild"]'),
                    whispers: $('#chat .tabs a[data-id="whispers"]')
                }
            },
            shiftActive: false,
            ctrlActive: false,
            altActive: false,
            inputActive: false,
            isScrolling: false,
            selected: '',
            lastWhisper: '',
            isResizing: null,
            isDisplayed: true,
            previousMessages: [],
            previousMessagesPos: 0,
            blocked: [],
            display: function (display) {

                if (display) {

                    CHAT.isDisplayed = true;
                    CHAT.elem.container.show();
                    CHAT.elem.button.collapsed.hide();
                }
                else if (!display) {

                    CHAT.isDisplayed = false;
                    CHAT.elem.container.hide();
                    CHAT.elem.button.collapsed.show();
                    $('a[data-id="chat"]').find('.notification-bubble').text(0).hide();
                }
            },
            switchChannel: function (chat) {

                CHAT.elem.container.find('.tabs a').removeClass('selected');
                CHAT.elem.container.find('.messages').hide();

                CHAT.elem.messages[chat].show();
                CHAT.elem.button[chat].removeClass('flash');
                CHAT.elem.button[chat].addClass('selected');

                CHAT.updateNotificationCount(chat, true);

                CHAT.selected = chat;

                CHAT.updateScroll(CHAT.selected, true);

            },
            resize: function (width, height) {

                if (width === undefined) {
                    width = (CURSOR.window.x - 10);
                }

                if (height === undefined) {
                    height = (window.innerHeight - CURSOR.window.y - 15);
                }

                CHAT.elem.container.css('width', width + 'px');
                CHAT.elem.container.css('height', height + 'px');

                CHAT.checkOnlineDisplay();
            },
            checkOnlineDisplay: function () {

                var width = parseInt(CHAT.elem.container.css('width'));
                if (width < 400) {

                    if (parseInt(CHAT.elem.container.find('.tabs').css('width')) > width - 100) {

                        CHAT.elem.online.hide();
                    }
                    else {
                        CHAT.elem.online.show();
                    }
                }
                else {
                    CHAT.elem.online.show();
                }
            },
            updateScroll: function (chat, force) {

                if (!CHAT.isScrolling || force) {

                    var box = CHAT.elem.messages[chat][0];
                    box.scrollTop = box.scrollHeight;

                    if (force) {
                        CHAT.isScrolling = false;
                        CHAT.elem.button.backToBottom.hide();
                    }
                }
            },
            addMessageRow: function (data, channel) {

                if (channel === undefined) {
                    channel = CHAT.selected;
                }

                if (data.type === 'custom') {

                    var addElem = data.message;


                    var golden = '';
                    if(data.golden) {
                        golden = ' golden';
                    }

                    var html = $('<div class="row"><span class="text custom '+golden+'">' + addElem + '</span></div>');
                }
                else if (data.type === 'custom-tiny') {

                    var addElem = data.message;

                    var html = $('<div class="row"><span class="text custom tiny">' + addElem + '</span></div>');
                }
                else if (data.type === 'announce' || data.type === 'system' || data.type === 'warning') {

                    if (data.type === 'announce') {
                        data.message = data.message;
                    }

                    var html = $('<div class="row"><span class="text ' + data.type + '"></span></div>');
                }
                else if (CONFIG.user.blocked.indexOf(data.username) === -1) {


                    var snowballed = parseInt(data.snowballed) ;
                    var icons = '';
                    for (var k in data.icons) {

                        if (data.icons[k] && data.icons[k] !== '') {

                            var icn = data.icons[k].toUpperCase();
                            if (data.icons[k] === 'partner') {
                                icn = 'TWITCH PARTNER';
                            }

                            if (data.icons[k] === 'gifter') {
                                icn = 'TOP 3 GIFTER';
                            }

                            if (data.icons[k] === 'booster') {
                                icn = 'TOP DISCORD BOOSTER';
                            }

                            if(snowballed > 0) {
                                icons += '<img src="img/badges/snowball.png" alt="OH OH OH!" title="OH OH OH!" class="snowball-icn">';
                                snowballed--;
                            }
                            else {
                                icons += '<img src="/img/badges/' + data.icons[k] + '.png" alt="' + data.icons[k].toUpperCase() + '" title="' + icn + '" class="snowball-alt">';
                            }

                        }


                    }

                    if (data.username !== undefined && data.channel ==='painting') {

                        if (CONFIG.painting.owner.name.toLowerCase() === data.username.toLowerCase()) {

                            if(snowballed > 0) {
                                icons += '<img src="img/badges/snowball.png" alt="OH OH OH!" title="OH OH OH!" class="snowball-icn">';
                                snowballed--;
                            }
                            else {
                                icons += '<img src="img/badges/painting-owner.png" alt="Painting Moderator" title="Painting Owner" class="snowball-alt">';
                            }

                        }
                        else if (CONFIG.painting.moderators.length > 0) {

                            for (var k in CONFIG.painting.moderators) {

                                if (CONFIG.painting.moderators[k].name.toLowerCase() === data.username.toLowerCase()) {

                                    if(snowballed > 0) {
                                        icons += '<img src="img/badges/snowball.png" alt="OH OH OH!" title="OH OH OH!" class="snowball-icn">';
                                        snowballed--;
                                    }
                                    else {
                                        icons += '<img src="img/badges/painting-moderator.png" alt="Painting Moderator" title="Painting Moderator"  class="snowball-alt">';
                                    }

                                    break;
                                }
                            }
                        }
                    }


                    var guild = '';
                    if (data.guild !== '') {
                        guild = '<a href="#" class="guild open-guild" data-tag="' + data.guild + '">' + data.guild + '</a><span class="guild">&bull;</span>';
                    }

                    var color = 'style="color:' + DEFAULT.painting.palette.colors[data.color] + '"';

                    var mention = '';
                    if (data.mention != '' && channel !== 'whispers') {

                        if (data.mention.toLowerCase() === CONFIG.user.name.toLowerCase()) {

                            mention += '<span class="mention">@' + data.mention + '</span>';

                            if (!data.silent && channel !== CHAT.selected) {
                                CHAT.updateFlash(channel);
                            }

                            if (!data.silent && CONFIG.user.settings.chat.notifications) {
                                notification('warning', data.username + ' mentioned you in chat:', data.message);
                            }

                        }
                        else {
                            mention += '<span class="mention grey">@' + data.mention + '</span>';
                        }
                    }

                    var time = new Date(data.createdAt);

                    var minutes = time.getMinutes();
                    if (minutes < 10) {
                        minutes = 0 + '' + minutes;
                    }
                    var hours = time.getHours();
                    if (hours < 10) {
                        hours = 0 + '' + hours;
                    }

                    var createdAt = '<div class="time">' + hours + ':' + minutes + '</div>';

                    var from = data.username;
                    var to = '';
                    if (channel === 'whispers') {

                        guild = '';
                        icons = '';
                        color = 'style="color:#fa93f4"';

                        if (data.username.toLowerCase() === CONFIG.user.name.toLowerCase()) {
                            from = data.target;
                            to = 'to ';
                        }
                    }

                    var rainbow = '';
                    var username = from;
                    if (data.rainbow) {
                        rainbow = ' rainbowText';
                    }
                    if (data.xmas) {
                        rainbow = ' xmasText';
                        username = getXmasUsername(username);
                    }
                    if (data.halloween) {
                        rainbow = ' halloween';
                    }

                    var golden = '';
                    if(data.golden) {
                        golden = ' golden';
                    }


                    if(!icons && parseInt(data.snowballed) > 0) {
                        icons += '<img src="img/badges/snowball.png" alt="OH OH OH!" title="OH OH OH!" class="snowball-icn">';
                    }

                    var html = $('<div class="row">' + createdAt + to + icons + guild + '<a href="#" class="user open-profile' + rainbow + '" data-id="' + from.toLowerCase() + '"  data-profile="' + from.toLowerCase() + '" ' + color + ' title="View profile">' + username + '</a>: ' + mention + '<span class="text'+golden+'"></span></div>');


                    if (channel === 'whispers') {

                        if (data.username.toLowerCase() === CONFIG.user.name.toLowerCase()) {

                            CHAT.lastWhisper = data.target;

                        }
                        else {
                            CHAT.lastWhisper = data.username;

                            if (channel !== CHAT.selected) {

                                if (CONFIG.user.settings.chat.notifications && data.target.toLowerCase() !== CONFIG.user.name.toLowerCase()) {
                                    notification('whisper', data.username + ' sent you a whisper:', data.message);
                                }

                                CHAT.updateFlash(channel);
                            }
                        }
                    }


                }



                if (CONFIG.user.blocked.indexOf(data.username) !== -1) {
                    return;
                }
                else {

                    if (channel !== CHAT.selected) {


                        if (data.username.toLowerCase() !== CONFIG.user.name.toLowerCase()) {

                            if (!data.silent) {
                                CHAT.updateNotificationCount(channel);
                                CHAT.checkOnlineDisplay();
                            }
                        }
                    }


                    if (CHAT.elem.messages[channel].find('.row').length >= CONFIG.user.settings.chat.messagesLimit) {
                        CHAT.elem.messages[channel].find('.row').eq(0).remove();
                    }

                    CHAT.elem.messages[channel].append(html);

                    if (data.posX !== undefined && data.posY !== undefined && data.posS !== undefined) {

                        html.find('.text').html('<a href="#" class="go-to-coords" data-x="' + parseInt(data.posX) + '" data-y="' + parseInt(data.posY) + '"  data-s="' + parseFloat(data.posS).toFixed(2) + '" title="Click to view">[' + parseInt(data.posX) + ',' + parseInt(data.posY) + ']</a> <span class="here-text"></span>');

                        html.find('.text .here-text').text(data.message);

                    }
                    else if (data.type !== 'custom' && data.type !== 'custom-tiny') {


                        if(html.find('.snowball-alt').length <= 0 && html.find('.snowball-icn').length > 0) {

                            var textSpl = data.message.split(' ');

                            if(textSpl.length > 1) {
                                html.find('.text').html('');
                                for(var j in textSpl) {

                                    var xmoji = randomXmoji();

                                    html.find('.text').append('<div class="txt"></div><div class="xmoji">'+xmoji+'</div>');
                                }

                                for(var j in textSpl) {

                                    html.find('.text .txt').eq(j).text(textSpl[j]);
                                }
                            }
                            else {

                                var xmoji = randomXmoji();
                                html.find('.text').append('<div class="txt"></div><div class="xmoji">'+xmoji+'</div>');
                                html.find('.text .txt').text(data.message);
                            }
                        }
                        else {
                            html.find('.text').text(data.message);
                        }
                    }

                    if (data.type === 'custom-tiny') {
                        html.addClass('custom-tiny');
                    }

                    if(!CONFIG.user.settings.chat.timestamps) {
                        html.find('.time').hide();
                    }

                    if(!CONFIG.user.settings.chat.guildTags) {
                        html.find('.guild').hide();
                    }


                    CHAT.updateScroll(channel);


                    if (!CHAT.isDisplayed && !data.silent) {


                        var count = parseInt($('a[data-id="chat"]').find('.notification-bubble').text());
                        if (count >= 99 || count == '99+') {
                            count = '99+';
                        }
                        else {
                            count++;
                        }

                        $('a[data-id="chat"]').find('.notification-bubble').text(count).show();
                    }

                }


            },
            deleteMessagesByUsername(username, paintingOnly) {

                if (paintingOnly) {

                    CHAT.elem.container.find('.messages[data-id="painting"] .user[data-id="' + username.toLowerCase() + '"]').closest('.row').find('.text').text('<message deleted>').addClass('msg-deleted');
                }
                else {

                    CHAT.elem.container.find('.messages .user[data-id="' + username.toLowerCase() + '"]').closest('.row').find('.text').text('<message deleted>').addClass('msg-deleted');
                }
            },
            updateFlash(chat, reset) {

                if (reset) {
                    CHAT.elem.button[chat].removeClass('flash');
                }
                else {
                    CHAT.elem.button[chat].removeClass('flash');
                    CHAT.elem.button[chat].addClass('flash');
                }
            },
            updateNotificationCount(chat, reset) {

                if (chat === 'whispers') {
                    return;
                }
                else if (reset) {
                    CHAT.elem.button[chat].find('.unread-count').text(0);
                    CHAT.elem.button[chat].find('.unread-count').hide();

                }
                else {

                    var count = parseInt(CHAT.elem.button[chat].find('.unread-count').text());

                    if (count >= 99 || count == '99+') {
                        count = '99+';
                    }
                    else {
                        count++;
                    }

                    CHAT.elem.button[chat].find('.unread-count').text(count);

                    if (count > 0 || count == '99+') {
                        CHAT.elem.button[chat].find('.unread-count').show();
                    }
                    else {
                        CHAT.elem.button[chat].find('.unread-count').hide();
                    }
                }
            },
            sendMessage: function (text) {

                var data = {
                    text: '',
                    mention: '',
                    type: CHAT.selected,
                    target: '',
                    color: PAINTING.color
                }

                if (text === '!discord' || text === '/discord') {

                    setTimeout(function () {
                        CHAT.addMessageRow({
                            type: 'system',
                            message: 'https://discord.gg/xcFJ6nY'
                        });
                    }, 1000);


                    window.open('https://discord.gg/xcFJ6nY', '_blank');
                }
                else if (text[0] === '/') {

                    var exp = text.split(' ');

                    if (exp[0] === '/admin') {

                        if (exp[1] !== undefined) {
                            if (exp[1] === CONFIG.user.name) {

                                CHAT.addMessageRow({
                                    type: 'system',
                                    message: 'Bruh... You cannot give admin privileges to yourself!'
                                });
                                return;
                            }
                            else {

                                CHAT.addMessageRow({
                                    type: 'system',
                                    message: 'Pixelplace admin privileges successfully given to the user'
                                });
                                return;
                            }
                        }
                        else {

                            CHAT.addMessageRow({
                                type: 'system',
                                message: 'Please type the username of the user you want to give admin privileges. /admin USERNAME'
                            });
                            return;
                        }
                    }
                    else if (exp[0] === '/ban' && exp[1] !== undefined) {

                        WS.io.emit('painting.command', {cmd: '/ban', target: exp[1], boardId: CONFIG.painting.id});
                        return;
                    }
                    else if (exp[0] === '/unban' && exp[1] !== undefined) {

                        WS.io.emit('painting.command', {cmd: '/unban', target: exp[1], boardId: CONFIG.painting.id});
                        return;
                    }
                    else if (exp[0] === '/u' && exp[1] !== undefined) {

                        openProfile(exp[1]);
                        return;
                    }
                    else if (exp[0] === '/tm' && CONFIG.painting.id === 8) {

                        getBoardTracking();
                        return;
                    }
                    else if (exp[0] === '/c' && exp[1] !== undefined) {

                        window.location.replace('/' + parseInt(exp[1]));
                        return;
                    }
                    else if (exp[0] === '/snowball') {

                        if(exp[1] !== undefined && exp[1]) {
                            WS.io.emit('snowball', {cmd: '/snowball', target: exp[1]});
                        }
                        else {

                            CHAT.addMessageRow({
                                type: 'system',
                                message: 'Type: /snowball USERNAME to throw a snowball at a player. Each snowball will replace one player icon for 60 minutes. If all icons are replaced, the user next messages may be ...funny 🎄. To get snowballs, activate XMAS username from the shop inventory. NOTE: Snowball expire after 60 minutes, use it quick!'
                            });

                        }


                        return;
                    }
                    else if ((exp[0] === '/guild' || exp[0] === '/tag' || exp[0] === '/g') && exp[1] !== undefined) {

                        if (exp[1].length == 4) {
                            openGuild(exp[1]);
                        }
                        else {
                            MODAL.openModal('main', 'guilds');
                        }

                        return;
                    }
                    else if (exp[0] === '/untrack') {

                        FILTER_TRACK = null;
                        FILTER_TRACK_TIME = 0;


                        CHAT.addMessageRow({
                            type: 'system',
                            message: 'Tracking filter removed'
                        });

                        return;

                    }else if (exp[0] === '/track') {

                        if(exp[1] !== undefined) {
                            FILTER_TRACK = exp[1].toLowerCase();
                            FILTER_TRACK_TIME = time() + 180;

                            CHAT.addMessageRow({
                                type: 'system',
                                message: 'Now filtering live tracking to only show this user pixels for the next 3 minutes'
                            });

                        }
                        else {
                            FILTER_TRACK = null;

                            CHAT.addMessageRow({
                                type: 'system',
                                message: 'Tracking filter removed'
                            });
                        }


                        return;
                    }
                    else if (exp[0] === '/darkmode') {

                        var darkCheck = localStorage.getItem('darkmode-enabled');
                        if (darkCheck && parseInt(darkCheck) === 1) {
                            $('body').removeClass('darkmode');
                            localStorage.setItem('darkmode-enabled', 0)
                        }
                        else {
                            localStorage.setItem('darkmode-enabled', 1)
                            $('body').removeClass('darkmode').addClass('darkmode');
                        }
                        return;
                    }
                    else if (exp[0] === '/guild' || exp[0] === '/g' || exp[0] === '/tag') {

                        MODAL.openModal('main', 'guilds');
                        return;
                    }
                    else if (exp[0] === '/w' && exp[1] !== undefined) {

                        data.mention = '';
                        data.type = 'whispers';
                        data.target = exp[1];

                        exp.shift();
                        exp.shift();
                        text = exp.join(' ');


                        if (CONFIG.user.settings.chat.invisible) {


                            MODAL.openModal('main', 'tools');

                            CHAT.addMessageRow({
                                type: 'warning',
                                message: 'You cannot send whispers invisible mode. You can change this setting on Main Menu > Painting > Settings/Tools'
                            });
                            return;
                        }

                    }
                    else if (exp[0] === '/report' && exp[1] !== undefined) {

                        data.mention = '';
                        data.type = 'report';
                        data.target = exp[1];

                        exp.shift();
                        exp.shift();
                        text = exp.join(' ');

                    }
                    else if (exp[0] === '/help') {

                        CHAT.addMessageRow({
                            type: 'system',
                            message: 'Available commands:'
                        })

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/w USERNAME MESSAGE - Send a whisper to the user'
                        });

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/r - Answer to the last whisperer'
                        });



                        //lowtodo /G command
                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/report USERNAME MESSAGE - Report a user to PixelPlace moderation team'
                        });


                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/u USERNAME - Open user profile'
                        });


                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/c PAINTING_ID - Navigate to another painting'
                        });


                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/guild - Open the guild list'
                        });

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/guild TAG - Open the guild profile'
                        });

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/here - Share your position in the chat'
                        });

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/track USERNAME - Filter live tracking users (Premium command). Use /untrack to cancel)'
                        });

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/snowball - Special event'
                        });

                        CHAT.addMessageRow({
                            type: 'system',
                            message: '/darkmode - Switch to the darkside of Pixelplace'
                        });



                        CHAT.addMessageRow({
                            type: 'system',
                            message: 'More commands available on profiles (click on any username)'
                        });

                        return;

                    }
                    else if (text ==='/here' ||  text.split('/here').length >= 2) {
                        // /here from admin
                    }
                    else if (CONFIG.user.isStaff && text !== '/here') {

                        WS.io.emit('chat.command', {cmd: text, type: data.type});
                        return;
                    }
                    else if (CONFIG.user.isChatMod && text !== '/here') {

                        WS.io.emit('chat.command', {cmd: text, type: data.type});
                        return;
                    }

                }


                var exp = text.split('@');
                if (exp.length > 1) {

                    var exp1 = exp[exp.length - 1].split(' ');
                    data.mention = exp1[0].replace(' ', '');
                    text = text.replace('@' + exp1[0] + ' ', '');
                    text = text.replace('@' + exp1[0] + '', '');
                }

                data.text = text;

                if (CHAT.selected != data.type && data.type !== 'report') {
                    CHAT.switchChannel(data.type);
                }

                if (text ==='/here' ||  text.split('/here').length >= 2) {

                    data.posY = Math.round((PAINTING.height / 2) - PAINTING.y);
                    data.posX = Math.round((PAINTING.width / 2) - PAINTING.x);
                    data.posS = PAINTING.scale;
                }

                if (text != '') {

                    WS.io.emit('chat.message', data);

                }
                else {

                    CHAT.addMessageRow({
                        type: 'warning',
                        message: 'Please enter a message.'
                    });
                }
            }
        };


        // CURSOR
        $(document).on('pointermove', function (evt) {

            if (evt.target.id !== 'painting' && evt.target.id !== 'painting-zoom' && evt.target.tagName !== 'CANVAS' && evt.target.tagName !== 'canvas' && evt.target.getAttribute('area-block') === null) {

                CURSOR.triggerCursor(false);
            }

            evt = setPageXY(evt);
            CURSOR.window.x = evt.pageX;
            CURSOR.window.y = evt.pageY;

            if (CHAT.isResizing) {
                CHAT.resize();
            }
        });

        PAINTING.element.canvas.painting.add(PAINTING.element.canvas.protected).add($('#areas')).on('pointermove', function (evt) {

            if (!CURSOR.touchDevice) {
                CURSOR.setCursorPosition(evt);
            }
        });


        CHAT.elem.button.resize.on('pointerdown', function (evt) {

            if (CHAT.isResizing === null) {

                evt.preventDefault();

                CHAT.isResizing = true;
                /*  CHAT.isResizing = setInterval(function () {
                      CHAT.resize();
                  }, 20);*/
            }
        });

        $(document).on('pointerup', function (evt) {

            if (CHAT.isResizing) {

                evt.preventDefault();

                localStorage.setItem('chat-size-w', CHAT.elem.container.css('width'));
                localStorage.setItem('chat-size-h', CHAT.elem.container.css('height'));
                // clearInterval(CHAT.isResizing);

                CHAT.isResizing = null;
            }

        });


        function sendStartMessages() {

            if (CONFIG.painting.id === 7) {
                CHAT.elem.button.painting.hide();
                CHAT.elem.button.nonenglish.show();
                CHAT.switchChannel('global');

                var lang = window.navigator.languages ? window.navigator.languages[0] : null;
                lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
                var shortLang = lang;

                if (shortLang.indexOf('-') !== -1) {
                    shortLang = shortLang.split('-')[0];
                }

                if (shortLang.indexOf('_') !== -1) {
                    shortLang = shortLang.split('_')[0];
                }


                if(shortLang && (shortLang.toLowerCase() !== "en" || shortLang.toLowerCase() !== "us")) {


                    var image = new Image();

                    image.onload = function (imageEvent) {

                        CHAT.elem.button.nonenglish.find('.title').html('<img src="/img/flags/'+shortLang.toUpperCase()+'.svg" class="flag-chat"> '+shortLang.toUpperCase());

                    }
                    image.onerror = function () {
                        CHAT.elem.button.nonenglish.find('.title').html('Non-English');
                    };
                    image.src = "/img/flags/"+shortLang.toUpperCase()+".svg";

                }
                else {

                    CHAT.elem.button.nonenglish.find('.title').text('Non-English');
                }
            }
            else {
                CHAT.elem.button.nonenglish.hide();
                CHAT.switchChannel('painting');
                $('.gold-rush-island').hide();
            }

            setTimeout(function () {

                CHAT.addMessageRow({
                    type: 'system',
                    target: '',
                    color: 0,
                    mention: '',
                    username: '',
                    message: 'Type /w USERNAME MESSAGE to send a whisper to a specific player.',
                    icons: [],
                    createdAt: '',
                }, 'whispers');
                CHAT.addMessageRow({
                    type: 'system',
                    target: '',
                    color: 0,
                    mention: '',
                    username: '',
                    message: 'Type /r to answer the last whisperer.',
                    icons: [],
                    createdAt: '',
                }, 'whispers');


                CHAT.addMessageRow({
                    type: 'system',
                    target: '',
                    color: 0,
                    mention: '',
                    username: '',
                    message: 'Welcome to the global chat (shared across all paintings). English only! (use Non-English tab for other languages)',
                    icons: [],
                    createdAt: '',
                }, 'global');

                CHAT.addMessageRow({
                    type: 'system',
                    target: '',
                    color: 0,
                    mention: '',
                    username: '',
                    message: 'Type /help for a listing of a few commands',
                    icons: [],
                    createdAt: '',
                }, 'global');


                if (CONFIG.painting.id === 7) {
                }
                else {

                    CHAT.addMessageRow({
                        type: 'system',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: 'Welcome to « ' + CONFIG.painting.name + ' » created by ' + CONFIG.painting.owner.name + '',
                        icons: [],
                        createdAt: '',
                    }, 'painting');


                    if (CONFIG.painting.description) {
                        CHAT.addMessageRow({
                            type: 'system',
                            target: '',
                            color: 0,
                            mention: '',
                            username: '',
                            message: CONFIG.painting.description,
                            icons: [],
                            createdAt: '',
                        }, 'painting');
                    }


                    if (!CONFIG.painting.shopItems) {

                        CHAT.addMessageRow({
                            type: 'system',
                            target: '',
                            color: 0,
                            mention: '',
                            username: '',
                            message: '(Shop items are currently disabled on this painting)',
                            icons: [],
                            createdAt: '',
                        }, 'painting');
                    }
                }

            }, 1000);
        }

        //  sendStartMessages();

        CHAT.elem.button.collapsed.on('click', function (evt) {
            evt.preventDefault();
            CHAT.display(true);
        });

        CHAT.elem.button.hide.on('click', function (evt) {
            evt.preventDefault();
            CHAT.display(false);
        });
        /*
                CHAT.elem.button.resize.on('pointerdown', function (evt) {

                    evt.preventDefault();

                    if (CHAT.isResizing === null) {

                        CHAT.isResizing = setInterval(function () {
                            CHAT.resize();
                        }, 20);
                    }
                });

                CHAT.elem.button.resize.on('pointerup', function (evt) {

                    evt.preventDefault();

                    if (CHAT.isResizing !== null) {

                        localStorage.setItem('chat-size-w', CHAT.elem.container.css('width'));
                        localStorage.setItem('chat-size-h', CHAT.elem.container.css('height'));
                        clearInterval(CHAT.isResizing);

                        CHAT.isResizing = null;
                    }
                });*/

        CHAT.elem.container.find('.tabs a').on('click', function (evt) {



            var channel = $(this).attr('data-id');

            if(channel !=='forums') {

                evt.preventDefault();
                if (channel === 'guild' && CONFIG.user.guild == '') {
                    MODAL.openModal('main', 'guilds');
                }
                else {
                    CHAT.switchChannel(channel);
                }
            }
        });

        CHAT.elem.container.find('.messages').on('scroll', function (evt) {

            if ((parseInt($(this)[0].scrollTop) + parseInt($(this).css('height'))) >= (parseInt($(this)[0].scrollHeight) - 10)) {

                if (CHAT.isScrolling) {
                    CHAT.isScrolling = false;
                    CHAT.elem.button.backToBottom.hide();
                }
            }
            else {

                if (!CHAT.isScrolling) {
                    CHAT.isScrolling = true;
                    CHAT.elem.button.backToBottom.show();
                }

            }

        });

        CHAT.elem.button.backToBottom.on('click', function (evt) {

            evt.preventDefault();

            CHAT.updateScroll(CHAT.selected, true);
        });

        CHAT.elem.container.find('form').on('submit', function (evt) {

            evt.preventDefault();

            CHAT.inputActive = false;

            var input = CHAT.elem.input.val();
            if (input != '') {
                CHAT.sendMessage(input);

                CHAT.previousMessages.unshift(input);
                if (CHAT.previousMessages.length > 3) {
                    CHAT.previousMessages.pop();
                }
                CHAT.previousMessagesPos = 0;
            }
            CHAT.elem.input.val('');
            CHAT.elem.input.blur();
            CHAT.elem.input.removeClass('whisper');
            CHAT.elem.input.removeClass('mention');

        });


        CHAT.elem.input.on('focusout', function (evt) {

            evt.preventDefault();

            if (!CHAT.shiftActive) {

                CHAT.inputActive = false;
                CHAT.elem.input.val('');
                CHAT.elem.input.removeClass('whisper');
                CHAT.elem.input.removeClass('mention');
            }

        });


        var UI_DISPLAYED = true;
        $(document).on('keydown', function (evt) {

            if ((evt.which === 37 || evt.which === 38 || evt.which === 39 || evt.which === 40) && !CHAT.inputActive && !MODAL.activeElement) {

                var currentX = Math.round((PAINTING.width / 2) - PAINTING.x);
                var currentY = Math.round((PAINTING.height / 2) - PAINTING.y);


                if (evt.which === 37) {
                    currentX -= 10;
                }
                else if (evt.which === 38) {
                    currentY -= 10;
                }
                else if (evt.which === 39) {
                    currentX += 10;
                }
                else if (evt.which === 40) {
                    currentY += 10;
                }

                PAINTING.centerPositionTo(PAINTING.scale, currentX, currentY);

            }
            else if (evt.which === 32 && !CHAT.inputActive && !MODAL.activeElement) {

                evt.preventDefault();

                if (ITEM_SELECTED === null) {

                    if (autoPaintInterval === null) {

                        if (!HAS_USED_SPACE_ONCE) {
                            localStorage.setItem('know-about-space-bar', true);
                            HAS_USED_SPACE_ONCE = true;
                        }

                        /*if(PAINTING.mode === 4) {

                            if(fillingBot) {

                                fillingBot = false;
                            }
                            else if(!fillingBot) {

                                fillingBot = true;

                                fillingBot_lastTime = 0;


                                fillingposX =CURSOR.x;
                                fillingpoxY = CURSOR.y;
                                fillingx = 0;
                                fillingy = 0;
                                fillingdx = 1;
                                fillingdy = 0;
                                fillingx_limit =0;
                                fillingy_limit = 0;


                                fillingBotColor = PAINTING.getColorFromPainting(CURSOR.x, CURSOR.y, true);

                                if(fillingBotColor !== null) {
                                    window.requestAnimationFrame(fillingBotInterval);
                                }
                            }
                        }
                        else {
*/
                            PAINTING.drawPixelAt();

                            autoPaintInterval = setInterval(function () {
                                PAINTING.drawPixelAt();
                            }, CONFIG.painting.rate);
                        //}
                    }
                }
            }
            else if (evt.which === 13) {

                if (MODAL.activeElement) {

                    //cause we don't want to trigger theses on modals

                }
                else if (!CHAT.inputActive) {

                    evt.preventDefault();

                    CHAT.inputActive = true;
                    CHAT.elem.input.focus();

                    if (CHAT.selected === 'whispers') {

                        if (CHAT.lastWhisper !== '') {
                            CHAT.elem.input.val('/w ' + CHAT.lastWhisper + ' ');
                        }
                        else {
                            CHAT.elem.input.val('/w ');
                        }

                        CHAT.elem.input.trigger('input');
                    }
                }
            }
            else if (!CHAT.ctrlActive && evt.which === 67 && !CHAT.inputActive && !MODAL.activeElement) {

                if (CHAT.isDisplayed) {
                    CHAT.display(false);
                }
                else {
                    CHAT.display(true);
                }

            }
            else if (evt.which === 27) {

                if (MODAL.activeElement) {
                    MODAL.closeModal();
                }
                else if (CHAT.inputActive) {

                    CHAT.inputActive = false;
                    CHAT.elem.input.val('');
                    CHAT.elem.input.blur();
                    CHAT.elem.input.removeClass('whisper');
                    CHAT.elem.input.removeClass('mention');
                }
                else {
                    MODAL.openModal('main', 'tools');
                }

            }
            else if (CHAT.shiftActive && evt.which === 84 && !CHAT.inputActive && !MODAL.activeElement) {

                var active = CONFIG.user.settings.painting.liveTracking ? true : false;

                MODAL.onChangeTools('tools-display-tracking', active);

            }
            else if (CONFIG.painting.id === 8 && CHAT.shiftActive && evt.which === 69 && !CHAT.inputActive && !MODAL.activeElement) {

                getBoardTracking();

            }
            else if (CHAT.shiftActive && evt.which === 66 && !CHAT.inputActive && !MODAL.activeElement) {

                var active = CONFIG.user.settings.painting.bot ? true : false;

                MODAL.onChangeTools('tools-display-bot', active);

            }
            else if (CHAT.shiftActive && evt.which === 72 && !CHAT.inputActive && !MODAL.activeElement) {

                var active = CONFIG.user.settings.painting.gridDisplay ? true : false;

                MODAL.onChangeTools('tools-display-grid', active);

            }
            else if (CHAT.shiftActive && evt.which === 77 && !CHAT.inputActive && !MODAL.activeElement) {

                var active = CONFIG.user.settings.painting.lockPainting ? true : false;

                MODAL.onChangeTools('tools-lock-painting', active);

            }
            else if (CHAT.shiftActive && evt.which === 76 && !CHAT.inputActive && !MODAL.activeElement) {

                var active = CONFIG.user.settings.painting.saveTracking ? true : false;

                MODAL.onChangeTools('tools-display-save-tracking', active);

            }
            else if (evt.which === 38 && CHAT.inputActive) {

                if (CHAT.previousMessages.length > 0) {

                    if ((CHAT.previousMessages.length - 1) < CHAT.previousMessagesPos) {
                        CHAT.previousMessagesPos = 0;
                    }

                    CHAT.elem.input.val(CHAT.previousMessages[CHAT.previousMessagesPos]);
                    CHAT.previousMessagesPos++;
                }

            }
            else if (CHAT.shiftActive && evt.which === 71 && !CHAT.inputActive && !MODAL.activeElement) {
                /*
                                if (MODAL.activeElement && MODAL.selectors.modal === 'main' && MODAL.selectors.content === 'guild') {
                                    MODAL.closeModal();
                                }
                                else if (!MODAL.activeElement) {
                                    MODAL.openModal('main', 'guild');
                                }*/

                openSocial('guild');
            }
            else if (CHAT.shiftActive && evt.which === 70 && !CHAT.inputActive && !MODAL.activeElement) {

                openSocial('friends');
            }
            else if (CHAT.shiftActive && (evt.which === 106 || evt.which === 220) && !CHAT.inputActive && !MODAL.activeElement) {

                if (UI_DISPLAYED) {
                    UI_DISPLAYED = false;
                    $('#coordinates').addClass('display-none');
                    $('#copyright').hide();
                    $('#menu-buttons').hide();
                    $('#menu-buttons-bottom').hide();
                    $('#menu-buttons-right-top').hide();
                    $('#menu-buttons-right-bottom').hide();
                    $('#palette-buttons').hide();
                    $('#more-colors-below').hide();
                    CHAT.display(false);

                    notification('success', 'UI hidden', 'Hit * key to display the UI again');

                }
                else {
                    UI_DISPLAYED = true;
                    $('#coordinates').removeClass('display-none');
                    $('#copyright').show();
                    $('#menu-buttons').show();
                    $('#menu-buttons-bottom').show();
                    $('#menu-buttons-right-top').show();
                    $('#menu-buttons-right-bottom').show();
                    $('#palette-buttons').show();
                    $('#more-colors-below').show();
                    CHAT.display(true);
                }

            }
            else if (evt.which === 107 && !CHAT.inputActive && !MODAL.activeElement) {

                zoomInOrOut(true);
            }
            else if (evt.which === 109 && !CHAT.inputActive && !MODAL.activeElement) {

                zoomInOrOut(false);
            }
            else if (evt.which === 16) {

                CHAT.shiftActive = true;
            }
            else if (evt.which === 17) {

                CHAT.ctrlActive = true;
            }
            else if (evt.which === 18) {

                CHAT.altActive = true;
            }
        });

        window.onfocus = function () {

            CHAT.altActive = false;

            if (autoPaintInterval !== null) {

                clearInterval(autoPaintInterval);
                autoPaintInterval = null;
            }
        }


        $(document).on('keyup', function (evt) {

            if (evt.which === 16) {
                CHAT.shiftActive = false;
            }
            else if (evt.which === 17) {
                CHAT.ctrlActive = false;
            }
            else if (evt.which === 18) {
                CHAT.altActive = false;
            }
            else if (evt.which === 32) {

                if (autoPaintInterval !== null) {

                    clearInterval(autoPaintInterval);
                    autoPaintInterval = null;
                }
            }
        });



        $(document).on('click', '.open-profile', function (evt) {

            evt.preventDefault();

            openProfile($(this).attr('data-profile'));
        });

        function openProfile(username) {


            var profile = $('#profile');
            profile.find('.box-x').removeClass('rainbow-border');
            profile.find('.box-x').removeClass('golden-border');

            if (CHAT.shiftActive) {

                if (!CHAT.inputActive) {
                    CHAT.inputActive = true;
                    CHAT.elem.input.focus();
                    CHAT.elem.input.trigger('input');
                }

                if (CHAT.elem.input.val().length > 0) {

                    if (CHAT.elem.input.val() === '/disable') {
                        CHAT.elem.input.val(CHAT.elem.input.val() + " " + username + " ");
                    }
                    else if (CHAT.elem.input.val() === '/disable ') {
                        CHAT.elem.input.val(CHAT.elem.input.val() + "" + username + " ");
                    }
                    else if (CHAT.elem.input.val() === '/mute') {
                        CHAT.elem.input.val(CHAT.elem.input.val() + " " + username + " ");
                    }
                    else if (CHAT.elem.input.val() === '/mute ') {
                        CHAT.elem.input.val(CHAT.elem.input.val() + "" + username + " ");
                    }
                    else {
                        CHAT.elem.input.val(CHAT.elem.input.val() + "@" + username + " ");
                    }
                }
                else {
                    CHAT.elem.input.val("@" + username + " ");
                }
            }
            else {

                $('#guild').hide();
                $('#profile .box-x').show();
                $('#profile .box-content-x > div').hide();
                $('#profile .box-content-x > .loading').show();
                $('#profile').show();


                var params = {
                    username: username
                };

                if (!params.username) {
                    return;
                }
                else if (params.username.toLowerCase() === CONFIG.user.name.toLowerCase()) {
                    $('#profile a[data-id="bio-edit"]').show();
                    $('#profile .edit-user-avatar').css('display', 'block');
                }
                else {
                    $('#profile a[data-id="bio-edit"]').hide();
                    $('#profile .edit-user-avatar').css('display', 'none');
                }

                XX.xhr.req('GET', '/api/get-user.php', params, true, function (success, data) {



                    if (success) {

                        if (data.canvas && parseInt(data.canvas) > 0) {
                            $('#profile .user-avatar').html('<img src="/canvas/' + data.canvas + '.png?t=' + time() + '">');
                            $('#profile .user-avatar').show();
                        }
                        else {
                            $('#profile .user-avatar').html('<img src="/img/blank.png">');
                            $('#profile .user-avatar').show();
                        }

                        WS.io.emit('user.profile', data.username);
                        $('.followers-list').text('').hide();

                        profile.find('.chip').hide();
                        profile.find('.painting').hide();
                        profile.find('.profile-online').hide();
                        profile.find('.profile-offline').hide();
                        profile.find('.profile-away').hide();

                        if (data.admin) {
                            profile.find('.i-admin').show();
                        }
                        if (data.mod) {
                            profile.find('.i-moderator').show();
                        }
                        if (data.chatmod) {
                            profile.find('.i-chat-moderator').show();
                        }
                        if (data.vip) {
                            profile.find('.i-vip').show();
                        }

                        if (data.premiumIcon) {
                            profile.find('.i-premium-' + data.premiumIcon).show();
                        }

                        if (data.previousUsername && data.previousUsername !== '') {
                            profile.find('.previousUsername').show();
                            profile.find('.previousUsername span').text(data.previousUsername);
                        }
                        else {
                            profile.find('.previousUsername').hide();
                        }

                        if (data.othersIcons) {

                            var icons = data.othersIcons.split(',');

                            for (var k in icons) {
                                profile.find('.i-' + icons[k]).show();
                            }
                        }

                        if (data.guild) {
                            profile.find('.profile-name a span').html('' + data.guild + '');
                            profile.find('.profile-name a').attr('data-tag', data.guild);

                            if (data.guild === CONFIG.user.guild) {

                                profile.find('.profile-guild-rank select option').eq(0).text(data.guild_rank_1_title);
                                profile.find('.profile-guild-rank select option').eq(1).text(data.guild_rank_2_title);
                                profile.find('.profile-guild-rank select option').eq(2).text(data.guild_rank_3_title);
                                profile.find('.profile-guild-rank select').val(data.guild_rank).change();
                                profile.find('.profile-guild-rank select').attr('data-username', data.username);
                                profile.find('.profile-guild-rank select').attr('data-rank', data.guild_rank);

                                profile.find('.profile-guild-rank').show();
                            }
                            else {
                                profile.find('.profile-guild-rank').hide();
                            }
                        }
                        else {
                            profile.find('.profile-guild-rank').hide();
                            profile.find('.profile-name a span').text('');
                        }

                        if (data.bio) {
                            profile.find('.bio span').text(data.bio);
                            profile.find('.bio span').show();
                        }
                        else {
                            profile.find('.bio span').text('');
                            profile.find('.bio span').hide();
                        }


                        for (var k in data.social) {


                            if (k == 1) {
                                profile.find('.i-discord').show();
                                profile.find('.i-discord > div').text(data.social[k]);
                            }
                            else if (k == 2) {
                                profile.find('.i-reddit').show();
                                profile.find('.i-reddit > div').text(data.social[k]);
                            }
                            else if (k == 3) {
                                profile.find('.i-twitch').show();
                                profile.find('.i-twitch > div').text(data.social[k]);
                            }
                        }


                        if (data.guild) {
                            profile.find('.profile-name > span').html(' &bull; ' + data.username);
                        }
                        else {
                            profile.find('.profile-name > span').text(data.username);
                        }

                        profile.find('.profile-name-ban').hide();
                        if (parseInt(data.status) === 2) {
                            profile.find('.profile-name').attr('title', 'BANNED').removeClass('banned').addClass('banned');

                            if (data.banReason) {
                                profile.find('.profile-name-ban').text('Ban reason: ' + data.banReason).show();
                            }

                        }
                        else {
                            profile.find('.profile-name').attr('title', '').removeClass('banned');
                        }

                        var animChosen = Math.max(parseInt(data.rainbowTime),  parseInt(data.xmasTime),  parseInt(data.halloweenTime));



                        if (data.golden){
                            profile.find('.bio span').removeClass('golden').addClass('golden');
                            profile.find('.box-x').removeClass('golden-border').addClass('golden-border');
                        }
                        else {
                            profile.find('.bio span').removeClass('golden');

                            profile.find('.box-x').removeClass('golden-border');
                        }

                        profile.find('.gold-ore-img2-count').text(data.gold_ores);
                        profile.find('.gold-bar-img2-count').text(data.gold_bars);

                        if(animChosen === parseInt(data.rainbowTime) && parseInt(data.rainbowTime) > time()) {

                            profile.find('.profile-name > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween-fire');

                            profile.find('.profile-name > span').addClass('rainbowText');
                            profile.find('.box-x').removeClass('golden-border');
                            profile.find('.box-x').removeClass('rainbow-border').addClass('rainbow-border');

                        }
                        else if(animChosen === parseInt(data.xmasTime) && parseInt(data.xmasTime) > time()) {
                            profile.find('.profile-name > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween-fire');

                            profile.find('.profile-name > span').addClass('xmasText');
                            profile.find('.profile-name > span').html(getXmasUsername(data.username));
                        }
                        else if(animChosen === parseInt(data.halloweenTime) && parseInt(data.halloweenTime) > time()) {
                            profile.find('.profile-name > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween-fire');

                            profile.find('.profile-name > span').addClass('halloween-fire');
                        }
                        else {
                            profile.find('.profile-name > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween-fire');
                        }


                        profile.find('.createdAt').text('Joined ' + timeSince(new Date(data.createdAt), true) + ' ago');

                        if(data.lastLogin) {
                            profile.find('.lastOnline').text('Last login  ' + timeSince(new Date(data.lastLogin), true) + ' ago').show();
                        }
                        else {
                            profile.find('.lastOnline').hide();
                        }

                        profile.find('.pixels').text(parseInt(data.pixels).toLocaleString('ru-RU') + ' pixels placed');
                        profile.find('.battlePoints').text(parseInt(data.battlePoints).toLocaleString('ru-RU') + ' battle points');

                        if (data.followers !== undefined) {
                            profile.find('.followers').text(parseInt(data.followers) + ' followers');
                            profile.find('.followers').attr('data-username', data.username.toLowerCase());
                        }


                        profile.find('.painting span').hide();


                        if (CONFIG.user.friends.indexOf(data.username) !== -1) {
                            profile.find('.btn-add-friend-data').hide();
                            profile.find('.btn-remove-friend').show();
                            profile.find('.btn-remove-friend').attr('data-username', data.username.toLowerCase());
                        }
                        else {
                            profile.find('.btn-add-friend-data').show().attr('data-username', data.username.toLowerCase());
                            profile.find('.btn-remove-friend').hide();
                        }


                        if (CONFIG.user.blocked.indexOf(data.username) !== -1) {
                            profile.find('.btn-add-block-data').hide();
                            profile.find('.btn-unblock-user').show();
                            profile.find('.btn-unblock-user').attr('data-username', data.username.toLowerCase());

                        }
                        else {
                            profile.find('.btn-add-block-data').show().attr('data-username', data.username.toLowerCase());
                            profile.find('.btn-unblock-user').hide();
                        }


                        profile.find('.btn-report-user').show().attr('data-username', data.username);

                        profile.find('.btn-report-user').parent().find('.manage-buttons').remove();

                        var isMod8 = false;
                        if (parseInt(CONFIG.painting.id) === 8 && CONFIG.painting.moderators.length > 0) {

                            for (var k in CONFIG.painting.moderators) {

                                if (CONFIG.painting.moderators[k].name.toLowerCase() === CONFIG.user.name.toLowerCase()) {

                                    isMod8 = true;
                                    break;
                                }
                            }
                        }

                        if (CONFIG.user.isStaff || isMod8) {

                            profile.find('.btn-report-user').parent().append('<button class="manage-buttons" data-id="account" data-username="' + data.username + '">ACCOUNTS</button>');
                        }
                        if (CONFIG.user.isStaff) {

                            profile.find('.btn-report-user').parent().append('<button class="manage-buttons"  data-id="mute" data-username="' + data.username + '">MUTE</button>');
                            profile.find('.btn-report-user').parent().append('<button class="manage-buttons"  data-id="alert" data-username="' + data.username + '">ALERT</button>');
                            profile.find('.btn-report-user').parent().append('<button class="manage-buttons"  data-id="disable" data-username="' + data.username + '">DISABLE</button>');
                            profile.find('.btn-report-user').parent().append('<button class="manage-buttons"  data-id="coins" data-username="' + data.username + '">COINS</button>');
                        }


                        $('#profile .box-content-x > div').show();
                        $('#profile .box-content-x > .loading').hide();
                        $('#profile').show();
                    }
                    else {

                        notification('error', 'Error', data.message);
                        $('#profile').hide();
                    }
                });
            }

        }

        $(document).on('change', '.profile-guild-rank select[name="guild-rank"]', function (evt) {

            evt.preventDefault();

            if (evt.originalEvent) {

                var params = {
                    username: $(this).attr('data-username'),
                    rank: $(this).val()
                };

                XX.xhr.req('POST', '/api/post-guild-rank.php', params, true, function (success, data) {

                    if (success) {

                        notification('success', 'Success', 'Guild rank updated');
                    }
                    else {

                        $('.profile-guild-rank select[name="guild-rank"]').val($('.profile-guild-rank select[name="guild-rank"]').attr('data-rank')).change();

                        notification('error', 'Error', data.message);
                    }
                });
            }
        });

        $(document).on('click', '.open-onlineUsers', function (evt) {

            evt.preventDefault();

            $('#guild').hide();
            $('#profile').hide();
            $('#onlineUsers .box-x').show();
            $('#onlineUsers .box-content-x > div').hide();
            $('#onlineUsers .box-content-x > .loading').show();
            $('#onlineUsers').show();

            WS.io.emit('painting.players', CONFIG.painting.id);
        });

        $('#onlineUsers .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#onlineUsers').hide();
        });

        $('#onlineUsers').on('click', function (evt) {

            if ($(evt.target).attr('id') === 'onlineUsers') {
                evt.preventDefault();
                $('#onlineUsers').hide();
            }
        });


        $(document).on('click', '#profile .manage-buttons', function (evt) {

            evt.preventDefault();

            if ($(this).attr('data-id') === 'account') {
                var newwindow = window.open('/api/get-user-sessions.php?username=' + $(this).attr('data-username'), 'Moderator tool: User data', 'width=700,height=600,toolbar=0,menubar=0,location=0');
                newwindow.focus();
            }
            else if ($(this).attr('data-id') === 'mute') {

                CHAT.inputActive = true;
                CHAT.elem.input.focus();

                CHAT.elem.input.val('/mute ' + $(this).attr('data-username') + ' ');

                $('#profile').hide();
            }
            else if ($(this).attr('data-id') === 'alert') {

                CHAT.inputActive = true;
                CHAT.elem.input.focus();

                CHAT.elem.input.val('/alert ' + $(this).attr('data-username') + ' ');

                $('#profile').hide();
            }
            else if ($(this).attr('data-id') === 'disable') {

                CHAT.inputActive = true;
                CHAT.elem.input.focus();

                CHAT.elem.input.val('/disable ' + $(this).attr('data-username') + ' ');

                $('#profile').hide();
            }
            else if ($(this).attr('data-id') === 'coins') {

                var prom = prompt('Enter amount-p');

                if (prom !== null) {

                    MODAL.triggerLoader(true);
                    XX.xhr.req('POST', '/api/post-coins.php', {coins: prom, username: $(this).attr('data-username')}, true, function (success, data) {

                        MODAL.triggerLoader(false);

                        if (success) {

                            notification('success', 'Sent');

                        }
                        else {

                            notification('error', 'Error', data.message);


                        }
                    });
                }

                $('#profile').hide();
            }

        });

        $('#profile .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#profile').hide();
        });

        $('#profile').on('click', function (evt) {


            if ($(evt.target).attr('id') === 'profile') {
                evt.preventDefault();
                $('#profile').hide();
            }
        });


        function openGuild(tag) {

            $('#profile').hide();

            $('#guild .box-x').show();
            $('#guild .box-content-x > div').hide();
            $('#guild .box-content-x > .loading').show();
            $('#guild').show();


            var params = {
                tag: tag
            };

            if (!params.tag) {
                return;
            }

            XX.xhr.req('GET', '/api/get-guild.php', params, true, function (success, data) {


                if (success) {

                    $('#guild .guild-name .tag').html(data.tag);
                    $('#guild .edit-guild-emblem').attr('data-tag', data.tag);

                    if (CONFIG.user.guild.toUpperCase() === data.tag.toUpperCase()) {
                        $('#guild .edit-guild-emblem').show();
                    }
                    else {
                        $('#guild .edit-guild-emblem').hide();
                    }


                    if (data.canvas && parseInt(data.canvas) > 0) {
                        $('#guild .emblem').html('<img src="/canvas/' + data.canvas + '.png?t=' + time() + '">');
                        $('#guild .emblem').show();
                    }
                    else {
                        $('#guild .emblem').html('');
                        $('#guild .emblem').hide();
                    }


                    $('#guild .guild-name .name').text(data.name);
                    $('#guild .description').text(data.description);

                    $('#guild .createdAt a').text(data.owner_username);
                    $('#guild .createdAt a').text(data.owner_username).attr('data-profile', data.owner_username.toLowerCase());
                    $('#guild .createdAt span').text(timeSince(new Date(data.created_at), true) + ' ago');

                    $('#guild .points').text(parseInt(data.points).toLocaleString('ru-RU') + ' points (' + parseInt(data.battlePoints).toLocaleString('ru-RU') + ' battle points)');
                    $('#guild .position').text('#' + data.position);
                    if (data.position < 1) {
                        $('#guild .position').hide();
                    }
                    else {
                        $('#guild .position').show();
                    }
                    $('#guild .members').text(data.members_count + ' member' + (data.members_count != 1 ? 's' : ''));

                    $('#guild .guild-new-apply').attr('data-tag', data.tag);


                    if (parseInt(data.auto_accept)) {
                        $('#guild .guild-new-apply').text('JOIN').css('background-color', '#00b2e1');
                    }
                    else {
                        $('#guild .guild-new-apply').text('APPLY TO JOIN').css('background-color', '#ff9d50');
                    }


                    $('#guild .box-content-x > div').show();
                    $('#guild .box-content-x > .loading').hide();
                    $('#guild').show();
                }
                else {

                    notification('error', 'Error', data.message);
                    $('#guild').hide();
                }
            });
        }

        $(document).on('click', '.open-guild', function (evt) {

            evt.preventDefault();

            if ($(this).attr('data-from-area')) {

                var hintArea = localStorage.getItem('know-about-areas-wars');
                if (!hintArea) {
                    localStorage.setItem('know-about-areas-wars', 1);
                    alert('Countries can be occupied by guilds during wars. A message will be posted in the chat when the next war begin. This message won\'t show again.');
                }
            }


            if ($(evt.target).hasClass('guild-new-apply')) {
                return;
            }
            else {
                openGuild($(this).attr('data-tag'));
            }
        });


        $('#guild .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#guild').hide();
        });

        $('#guild').on('click', function (evt) {


            if ($(evt.target).attr('id') === 'guild') {
                evt.preventDefault();
                $('#guild').hide();
            }
        });


        CHAT.elem.input.on('click', function (evt) {

            if (!CHAT.inputActive) {

                evt.preventDefault();

                CHAT.inputActive = true;
                CHAT.elem.input.focus();

                if (CHAT.selected === 'whispers') {

                    if (CHAT.lastWhisper !== '') {
                        CHAT.elem.input.val('/w ' + CHAT.lastWhisper + ' ');
                    }
                    else {
                        CHAT.elem.input.val('/w ');
                    }

                    CHAT.elem.input.trigger('input');
                }
            }

        });

        CHAT.elem.input.on('input', function (evt) {

            if (CHAT.inputActive) {

                var input = $(this).val();

                if (input[0] === '/') {

                    var exp = input.split(' ');

                    if (exp[0] === '/r' && exp[1] !== undefined) {

                        input = input.replace('/r ', '/w ' + CHAT.lastWhisper + ' ');

                        if (input === '/w' || input === '/w  ') {
                            input = '/w ';
                        }

                        CHAT.elem.input.val(input);
                        CHAT.elem.input.addClass('whisper');
                    }
                    else if (exp[0] === '/w' && exp[1] !== undefined) {
                        CHAT.elem.input.addClass('whisper');
                    }
                    else {
                        $(this).removeClass('mention');
                        $(this).removeClass('whisper');
                    }
                }
                else {

                    var exp = input.split('@');
                    if (exp.length > 1) {

                        $(this).addClass('mention');
                    }
                    else {
                        $(this).removeClass('mention');
                        $(this).removeClass('whisper');
                    }
                }
            }
        });

        $('.btn-report-user').on('click', function (e) {

            e.preventDefault();

            var username = $(this).attr('data-username');

            CHAT.inputActive = true;
            CHAT.elem.input.focus();

            CHAT.elem.input.val('/report ' + username + ' ');

            $('#profile').hide();

        });

///////////////////////////////////////////////////////////// Modals


        MODAL = {
            selectors: {
                modal: '',
                content: '',
                extra: ''
            },
            previous: {
                modal: '',
                content: '',
                extra: ''
            },
            activeAlert: false,
            activeElement: null,
            activeContent: null,
            activeCaptcha: false,
            previousActiveElement: null,
            previousActiveContent: null,
            moreContentBelow: $('.more-content-below'),
            elem: {
                container: $('#modals'),
                settings: {
                    painting: $('#modals .box-content[data-id="painting"]'),
                    tools: $('#modals .box-content[data-id="tools"]'),
                    account: $('#modals .box-content[data-id="account"]')
                }
            },
            lastStartGuildFetch: 0,
            guildListSearch: '',
            guildListLimit: 100,
            guildListCache: null,
            guildListI: 1,
            triggerFormInputError: function (inputName, text) {

                if (MODAL.activeElement) {

                    var element = MODAL.activeElement.find('.box-content').find('.input-error[data-name="' + inputName + '"]');
                    var input = MODAL.activeElement.find('.box-content').find('[name="' + inputName + '"]');

                    if (text === '') {
                        element.text('');
                        element.css('visibility', 'hidden');
                        input.removeClass('error');
                    }
                    else {

                        element.text(text);
                        element.css('visibility', 'visible');
                        input.addClass('error');
                    }
                }
            },
            addLoaderToBox: function () {

                if (MODAL.activeElement && MODAL.activeContent) {

                    MODAL.activeElement.find('.loading').remove();
                    MODAL.activeContent.append('<div class="loading"><span class="c-loader"><span class="c-loader-inner"></span></span></div>');
                }

            },
            triggerLoader: function (display) {

                if (MODAL.activeElement && MODAL.activeContent) {

                    if (MODAL.selectors.modal === 'captcha') {
                        return;
                    }
                    else if (display) {

                        MODAL.activeContent.find('> form').hide();
                        MODAL.activeContent.find('> div').hide();
                        MODAL.activeContent.find('.loading').css('display', 'flex');
                    }
                    else {
                        MODAL.activeContent.find('> form').show();
                        MODAL.activeContent.find('> div').show();
                        MODAL.activeContent.find('.loading').css('display', 'none');
                    }
                }
            },
            updateActiveContent: function (modal, content, extra, noReset) {


                if (MODAL.activeElement) {

                    MODAL.previous.modal = MODAL.selectors.modal;
                    MODAL.previous.content = MODAL.selectors.content;
                    MODAL.previous.extra = MODAL.selectors.extra;

                    MODAL.selectors.modal = modal;
                    MODAL.selectors.content = content;
                    MODAL.selectors.extra = extra;


                    MODAL.activeContent = MODAL.activeElement.find('.box-content[data-id="' + content + '"]');


                    MODAL.addLoaderToBox();

                    //   MODAL.triggerLoader(true); //virer et trigger ajax request to get canvas data (if not create form), or we get it from config?

                    MODAL.activeElement.find('.box-menu li.selected').removeClass('selected');

                    var mainMenu = content;
                    if (content === 'tools' || content === 'painting' || content === 'top' || content === 'top-users') {
                        mainMenu = 'top';
                    }

                    MODAL.activeElement.find('.box-menu li a[data-content="' + mainMenu + '"]').closest('li').addClass('selected');
                    MODAL.activeElement.find('.box-content').hide();


                    MODAL.activeElement.find('.box-sub-menu').hide();
                    MODAL.activeElement.find('.box-sub-menu li.selected').removeClass('selected');

                    if (content === 'painting') {

                        if (extra === 'edit') {

                            MODAL.activeElement.find('.box-sub-menu li a[data-content="' + content + '"][data-extra="edit"]').closest('li').addClass('selected');
                        }
                        else {
                            MODAL.activeElement.find('.box-sub-menu li a[data-content="' + content + '"][data-extra="create"]').closest('li').addClass('selected');
                        }


                    }
                    else {

                        MODAL.activeElement.find('.box-sub-menu li a[data-content="' + content + '"]').closest('li').addClass('selected');

                    }


                    MODAL.activeElement.find('.box-sub-menu[data-id="' + mainMenu + '"').show();


                    if (CONFIG.user.settings.painting.isOwner) {
                        MODAL.activeElement.find('.box-sub-menu [data-content="painting"][data-extra="edit"]').show();
                    }
                    else {
                        MODAL.activeElement.find('.box-sub-menu [data-content="painting"][data-extra="edit"]').hide();
                    }


                    if (modal === 'main' && content === 'shop') {

                        PAINTING.loadUserItems();

                        for (var k in DEFAULT.painting.palette.premium) {
                            $('.prem-colors').find('span').eq((k)).css('background-color', DEFAULT.painting.palette.premium[k]);
                        }

                        if (CONFIG.user.premium.active && CONFIG.user.premium.expire_at > time()) {
                            $('.premium-subscribe').hide();
                            $('.premium-subscribe-alt').show();

                            var timeLabel = '';
                            var timeLeft = CONFIG.user.premium.expire_at - time();

                            if (timeLeft <= 86400) {
                                timeLabel = 'less than 1 day';
                            }
                            else {
                                timeLabel = Math.ceil(timeLeft / 86400) + ' days';
                            }

                            $('.premium-subscribed').html('' + timeLabel + ' left<span>Click to manage</span>');
                            $('.premium-subscribed').show();
                            $('.subscribed-off').show();
                        }
                        else {
                            $('.premium-subscribe-alt').hide();
                            $('.premium-subscribe').show();
                            $('.premium-subscribed').hide();
                            $('.subscribed-off').hide();
                        }

                    }
                    else if (modal === 'main' && content === 'freecoins') {
                        PAINTING.loadFreeCoins();
                    }
                    else if (modal === 'main' && content === 'terms') {


                        $.ajax({
                            url: '/legal.html?t=' + time(),
                            type: 'GET',
                            success: function (r) {

                                MODAL.activeElement.find('.box-content[data-id="terms"] > div').html(r);

                                MODAL.activeElement.find('.box-content[data-id="terms"]').css('scroll-behavior', 'unset');

                                MODAL.activeElement.find('.box-content[data-id="terms"]').scrollTop(0);
                                MODAL.activeElement.find('.box-content[data-id="terms"]').css('scroll-behavior', 'smooth');
                                setTimeout(function () {
                                    if (extra !== '') {

                                        var aTag = $("#" + extra);

                                        MODAL.activeElement.find('.box-content[data-id="terms"]').animate({scrollTop: (aTag.offset().top - 100)}, 'slow');
                                    }
                                }, 300);

                            },
                        });
                    }
                    else if (modal === 'main' && content === 'blog') {


                        $.ajax({
                            url: '/blog/index.php?iframe=1&t=' + time(),
                            type: 'GET',
                            success: function (r) {


                                var adReq = 0;
                                if(adReq && (!CONFIG.user.connected || (CONFIG.user.connected && (parseInt(CONFIG.user.premium.expire_at) < time() || !CONFIG.user.premium.active)))) {

                                    MODAL.activeElement.find('.box-content[data-id="blog"] > div').html('<div><script type="text/javascript" src="https://services.vlitag.com/adv1/?q=27546936fdc4110d04b58b19cd9d49f5" defer="" async=""></script><script> var vitag = vitag || {};</script></div><div class="absm"><div class="title">Advertising</div><div class="adsbyvli" style="width:320px; height:50px" data-ad-slot="vi_23510102705"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102705") })</script></div><div class="blog">' + r + '</div>');

                                }
                                else {
                                    MODAL.activeElement.find('.box-content[data-id="blog"] > div').html('<div class="blog">' + r + '</div>');
                                }



                            },
                        });
                    }
                    else if (modal === 'main' && content === 'painting') {

                        MODAL.loadPaintingCreateOrEdit(noReset);

                    }
                    else if (modal === 'main' && content === 'guilds') {

                        MODAL.triggerLoader(true);
                        XX.xhr.req('GET', '/api/get-user-guild.php', {}, true, function (success, data) {

                            if (success) {


                                if (data.isOwner) {
                                    MODAL.activeElement.find('.box-content[data-id="guilds"] .open-modal[data-content="guilds-store"][data-extra="create"]').hide();
                                    MODAL.activeElement.find('.box-content[data-id="guilds"] .open-modal[data-content="guilds-store"][data-extra="edit"]').show();
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="name"]').val(data.name);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="description"]').val(data.description);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_1"]').val(data.rank_1_title);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_2"]').val(data.rank_2_title);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_3"]').val(data.rank_3_title);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_1_emblem"]').prop('checked', parseInt(data.rank_1_emblem) ? true : false);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_2_emblem"]').prop('checked', parseInt(data.rank_2_emblem) ? true : false);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_3_emblem"]').prop('checked', parseInt(data.rank_3_emblem) ? true : false);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_1_members"]').prop('checked', parseInt(data.rank_1_members) ? true : false);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_2_members"]').prop('checked', parseInt(data.rank_2_members) ? true : false);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="rank_3_members"]').prop('checked', parseInt(data.rank_3_members) ? true : false);
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="id"]').val(data.tag);

                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="auto-accept"]').val(data.auto_accept);

                                    if (parseInt(data.auto_accept) === 1) {

                                        MODAL.activeElement.find('.box-content[data-id="guilds-store"] .input-checkbox[data-name="auto-accept"]').removeClass('selected');
                                        MODAL.activeElement.find('.box-content[data-id="guilds-store"] .input-checkbox[data-name="auto-accept"]').addClass('selected');
                                        MODAL.activeElement.find('.box-content[data-id="guilds-store"] .input-checkbox[data-name="auto-accept"]').parent().find('input[name="auto-accept"]').val(1);
                                    }
                                    else {

                                        MODAL.activeElement.find('.box-content[data-id="guilds-store"] .input-checkbox[data-name="auto-accept"]').removeClass('selected');
                                        MODAL.activeElement.find('.box-content[data-id="guilds-store"] .input-checkbox[data-name="auto-accept"]').parent().find('input[name="auto-accept"]').val(0);
                                    }
                                }
                                else {
                                    MODAL.activeElement.find('.box-content[data-id="guilds"] .open-modal[data-content="guilds-store"][data-extra="create"]').show();
                                    MODAL.activeElement.find('.box-content[data-id="guilds"] .open-modal[data-content="guilds-store"][data-extra="edit"]').hide();
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="name"]').val('');
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="description"]').val('');
                                    MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="id"]').val('');
                                }
                                MODAL.triggerLoader(false);
                                MODAL.loadGuilds(0);

                            }
                            else {

                                MODAL.activeElement.find('.box-content[data-id="guilds"] .open-modal[data-content="guilds-store"][data-extra="edit"]').hide();
                                MODAL.activeElement.find('.box-content[data-id="guilds"] .open-modal[data-content="guilds-store"][data-extra="create"]').show();

                                MODAL.triggerLoader(false);
                                MODAL.loadGuilds(0);
                            }
                        });
                    }
                    else if (modal === 'main' && content === 'guilds-store') {

                        if (extra === 'create') {
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] h1 span').text('New guild');
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] #submit-guild-store').text('CREATE GUILD').show();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] #submit-guild-delete').hide();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="tag"]').show();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] .tag').show();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"][name="id"]').val('');
                        }
                        else {


                            MODAL.activeElement.find('.box-content[data-id="guilds-store"][name="id"]').val(CONFIG.user.guild);
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] h1 span').text('Edit guild');
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] #submit-guild-store').text('SAVES CHANGES').show();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] #submit-guild-delete').show();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] .tag').hide();
                            MODAL.activeElement.find('.box-content[data-id="guilds-store"] [name="tag"]').hide();
                        }

                    }
                    else if (modal === 'main' && content === 'account') {

                        if (!CONFIG.user.hasEmail) {
                            MODAL.activeElement.find('.account-password').hide();
                        }
                        else {
                            MODAL.activeElement.find('.account-password').show();
                        }


                        if (CONFIG.user.social.discord.linked) {
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('span').text(CONFIG.user.social.discord.name);
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('span').show();
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('.link-remove').show();
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('.link-add').hide();

                        }
                        else {
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('span').hide();
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('.link-remove').hide();
                            MODAL.activeElement.find('.linked-account[data-id="1"]').find('.link-add').show();
                        }


                        if (CONFIG.user.social.reddit.linked) {
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('span').text(CONFIG.user.social.reddit.name);
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('span').show();
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('.link-remove').show();
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('.link-add').hide();

                        }
                        else {
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('span').hide();
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('.link-remove').hide();
                            MODAL.activeElement.find('.linked-account[data-id="2"]').find('.link-add').show();
                        }


                        if (CONFIG.user.social.twitch.linked) {
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('span').text(CONFIG.user.social.twitch.name);
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('span').show();
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('.link-remove').show();
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('.link-add').hide();

                        }
                        else {
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('span').hide();
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('.link-remove').hide();
                            MODAL.activeElement.find('.linked-account[data-id="3"]').find('.link-add').show();
                        }

                    }
                    else if (modal === 'main' && content === 'top') {

                        /*  if(CONFIG.user.settings.painting.isOwner) {
                            MODAL.activeElement.find('.open-modal[data-target="main"][data-content="painting"][data-extra="create"]').hide();
                            MODAL.activeElement.find('.open-modal[data-target="main"][data-content="painting"][data-extra="edit"]').show();
                        }else {
                            MODAL.activeElement.find('.open-modal[data-target="main"][data-content="painting"][data-extra="create"]').show();
                            MODAL.activeElement.find('.open-modal[data-target="main"][data-content="painting"][data-extra="edit"]').hide();
                        }
*/

                        PAINTING.loadMyPaintings();

                    }
                    else if (modal === 'main' && content === 'top-users') {

                        MODAL.loadTopUsers();

                    }
                    else if (modal === 'request-access') {

                        MODAL.triggerLoader(true);

                        if (autoPaintInterval) {
                            clearInterval(autoPaintInterval);
                        }

                        XX.xhr.req('GET', '/api/get-painting-access.php?getStatus=true&painting=' + CONFIG.painting.id, {}, true, function (success, data) {
                            MODAL.triggerLoader(false);

                            if (success) {

                                if (data.auto_accept !== undefined && parseInt(data.auto_accept) > 0) {
                                    $('#submit-painting-request-access').text('CLICK TO GET INSTANT ACCESS');
                                    $('#form-painting-request-access [name="message"]').hide();
                                }
                                else {
                                    $('#submit-painting-request-access').text('REQUEST ACCESS');
                                    $('#form-painting-request-access [name="message"]').show();
                                }


                                $('.block-request-access-other').find('p').find('.username').hide();
                                $('.block-request-access-other').find('.reason').hide();

                                if (data.status === -1) {
                                    $('.block-request-access-other').hide();
                                    $('.block-request-access').show();
                                    if (CONFIG.painting.guild.integration) {

                                        $('.block-request-access').find('.guild-form-info').hide();
                                        $('.block-request-access').find('.guild-form').show();
                                        $('.block-request-access').find('.guild-link').text(CONFIG.painting.guild.name);
                                        $('.block-request-access').find('.guild-link').attr('data-tag', CONFIG.painting.guild.name);

                                    }
                                    else {
                                        $('.block-request-access').find('.guild-form-info').show();
                                        $('.block-request-access').find('.guild-form').hide();
                                    }

                                    if (CONFIG.painting.twitch.integration) {

                                        $('.block-request-access').find('.twitch-form-info').hide();
                                        $('.block-request-access').find('.twitch-form').show();
                                        $('.block-request-access').find('.twitch-link').text('twitch.tv/' + CONFIG.painting.twitch.name);
                                        $('.block-request-access').find('.twitch-link').attr('href', 'https://twitch.tv/' + CONFIG.painting.twitch.name);

                                    }
                                    else {
                                        $('.block-request-access').find('.twitch-form-info').show();
                                        $('.block-request-access').find('.twitch-form').hide();
                                    }
                                }
                                else if (data.status === 1) {

                                    MODAL.closeModal();

                                }
                                else if (data.status === 2) {

                                    $('.block-request-access-other').show();
                                    $('.block-request-access').hide();

                                    $('.block-request-access-other').find('p').find('.message').removeClass('c-error').removeClass('c-warning');


                                    if (parseInt(data.daysLeft) > -1) {

                                        $('.block-request-access-other').find('p').find('.message').text('You have been suspended temporarily from this painting ' + (data.user ? ' by ' : ''));

                                        $('.block-request-access-other').find('.tmpban').show();
                                        $('.block-request-access-other').find('.tmpban .message').text('Your access to this painting will be restored in ' + data.daysLeft + ' day' + (parseInt(data.daysLeft) != 1 ? 's' : '')).show();

                                        notification('error', 'Access denied', 'You have been suspended temporarily from this painting');

                                    }
                                    else {


                                        notification('error', 'Access denied', 'Your previous request to access this painting has been declined');

                                        $('.block-request-access-other').find('p').find('.message').text('Your previous request to access this painting has been declined' + (data.user ? ' by ' : ''));

                                        $('.block-request-access-other').find('.tmpban').hide();
                                    }

                                    $('.block-request-access-other').find('p').find('.message').addClass('c-error');

                                    if (data.user) {
                                        $('.block-request-access-other').find('p').find('.username').text(data.user).show();
                                    }
                                    else {
                                        $('.block-request-access-other').find('p').find('.username').hide();
                                    }

                                    if (data.reason) {

                                        $('.block-request-access-other').find('.reason span').text(data.reason);
                                        $('.block-request-access-other').find('.reason').show();
                                    }
                                    else {
                                        $('.block-request-access-other').find('.reason').hide();
                                    }


                                    $('.block-request-access').find('.guild-form-info').hide();
                                    $('.block-request-access').find('.guild-form').hide();

                                    $('.block-request-access').find('.twitch-form-info').hide();
                                    $('.block-request-access').find('.twitch-form').hide();
                                }
                                else {

                                    $('.block-request-access-other').show();
                                    $('.block-request-access').show();


                                    $('.block-request-access-other').find('p').find('.message').removeClass('c-error').removeClass('c-warning');

                                    $('.block-request-access-other').find('p').find('.message').text('Your request to access this painting is still pending');
                                    $('.block-request-access-other').find('p').find('.message').addClass('c-warning');

                                    notification('warning', 'Access request pending', 'Your request to access this painting is still pending');

                                    if (CONFIG.painting.guild.integration) {

                                        $('.block-request-access').find('.guild-form-info').hide();
                                        $('.block-request-access').find('.guild-form').show();
                                        $('.block-request-access').find('.guild-link').text(CONFIG.painting.guild.name);
                                        $('.block-request-access').find('.guild-link').attr('data-tag', CONFIG.painting.guild.name);

                                    }
                                    else {
                                        $('.block-request-access').find('.guild-form-info').show();
                                        $('.block-request-access').find('.guild-form').hide();

                                    }

                                    if (CONFIG.painting.twitch.integration) {

                                        $('.block-request-access').find('.twitch-form-info').hide();
                                        $('.block-request-access').find('.twitch-form').show();
                                        $('.block-request-access').find('.twitch-link').text('twitch.tv/' + CONFIG.painting.twitch.name);
                                        $('.block-request-access').find('.twitch-link').attr('href', 'https://twitch.tv/' + CONFIG.painting.twitch.name);
                                    }
                                    else {
                                        $('.block-request-access').find('.twitch-form-info').show();
                                        $('.block-request-access').find('.twitch-form').hide();
                                    }
                                }


                                if (CONFIG.painting.isEmblem) {
                                    MODAL.activeElement.find('.block-request-access #form-painting-request-access').hide();
                                    MODAL.activeElement.find('.block-request-access > h1').hide();
                                    MODAL.activeElement.find('.h').hide();
                                    MODAL.activeElement.find('.twitch-form-info').hide();
                                    MODAL.activeElement.find('.guild-form-info').hide();
                                    MODAL.activeElement.find('.managers').hide();
                                }
                                else {

                                    MODAL.activeElement.find('.block-request-access #form-painting-request-access').show();
                                    MODAL.activeElement.find('.block-request-access > h1').show();
                                    MODAL.activeElement.find('.h').show();
                                    MODAL.activeElement.find('.managers').show();
                                }


                            }
                            else {

                                notification('error', 'Error', data.message);

                            }
                        });

                    }
                    else if (modal === 'painting') {

                        if (content === 'pending') {
                            PAINTING.fetchPaintingAccess(0, 0);
                        }
                        else if (content === 'accepted') {
                            PAINTING.fetchPaintingAccess(1, 0);
                        }
                        else if (content === 'declined') {
                            PAINTING.fetchPaintingAccess(2, 0);
                        }
                        else if (content === 'moderators') {
                            PAINTING.fetchPaintingModerators();
                        }

                    }
                    else if (modal === 'auth') {

                        if (content === 'login') {
                            MODAL.activeElement.find('.box-header > span').html('Log In');
                        }
                        else if (content === 'register') {
                            MODAL.activeElement.find('.box-header > span').html('Create Account');
                        }
                        else if (content === 'forgot') {
                            MODAL.activeElement.find('.box-header > span').html('Forgot Password');
                        }
                    }


                    MODAL.activeContent.show();

                    MODAL.moreContentBelow.hide();
                    setTimeout(function () {

                        var elem = MODAL.activeContent;

                        if (elem[0].scrollHeight - elem.scrollTop() <= parseInt(elem.outerHeight()) + 80) {

                        }
                        else {
                            MODAL.moreContentBelow.show();
                        }

                    }, 1000);
                }
            },
            openModal: function (modal, content, extra, noReset) {

                $('#profile').hide();

                if (modal === 'captcha') {
                    MODAL.activeCaptcha = true;
                }
                else {
                    MODAL.activeCaptcha = false;
                }

                if (MODAL.activeElement) {

                    MODAL.previousActiveElement = MODAL.activeElement;
                    MODAL.previousActiveContent = MODAL.activeContent;

                    MODAL.activeElement.css('display', 'none');
                    MODAL.elem.container.css('display', 'none');
                    MODAL.activeElement = null;
                    MODAL.activeContent = null;
                }

                MODAL.activeElement = MODAL.elem.container.find('.box[data-id="' + modal + '"]');
                MODAL.activeElement.css('display', 'flex');
                MODAL.activeElement.find('.box-content .input-error').css('visibility', 'hidden');
                MODAL.activeElement.find('.box-content input.error, .box-content textarea.error').removeClass('error');
                MODAL.activeElement.find('.box-content .input-error').text('');

                if (modal == 'main') {

                    if (content == 'top') {

                        if (localStorage) {

                            $('.attention').hide();
                            if (attentionDivInterval) {
                                clearInterval(attentionDivInterval);
                            }

                            localStorage.setItem('attention-notif', true);
                        }
                    }

                    if (CONFIG.user.connected) {

                        MODAL.activeElement.find('.box-header > div').show();

                        var icons = '';
                        for (var k in CONFIG.user.icons) {
                            icons += '<img src="/img/badges/' + CONFIG.user.icons[k] + '.png" class="badge">';
                        }

                        if (CONFIG.user.guild != '') {
                            MODAL.activeElement.find('.box-header > div > a[data-id="guild"]').html('' + CONFIG.user.guild + '');
                            MODAL.activeElement.find('.box-header > div > a[data-id="guild"]').attr('data-tag', CONFIG.user.guild);
                            MODAL.activeElement.find('.box-header > div > .bull').show();
                        }
                        else {
                            MODAL.activeElement.find('.box-header > div > a[data-id="guild"]').text('');
                            MODAL.activeElement.find('.box-header > div > .bull').hide();
                        }

                        MODAL.activeElement.find('.box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));


                        if (CONFIG.user.name === '') {

                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').text('Click to create your username');
                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').addClass('open-modal');
                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').attr('data-target', 'username');
                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').attr('data-content', 'username');
                        }
                        else {
                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').text(CONFIG.user.name);
                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').attr('data-profile', CONFIG.user.name.toLowerCase());
                            MODAL.activeElement.find('.box-header > div > a[data-id="username"]').removeClass('open-modal');


                            var animChosen = Math.max(parseInt(CONFIG.user.rainbowTime),  parseInt(CONFIG.user.xmasTime),  parseInt(CONFIG.user.halloweenTime));

                            if(animChosen === parseInt(CONFIG.user.rainbowTime) && parseInt(CONFIG.user.rainbowTime) > time()) {
                                MODAL.activeElement.find('.box-header > div > a[data-id="username"]').addClass('rainbowText');
                            }
                            else if(animChosen === parseInt(CONFIG.user.xmasTime) && parseInt(CONFIG.user.xmasTime) > time()) {
                                MODAL.activeElement.find('.box-header > div > a[data-id="username"]').addClass('xmasText');

                                MODAL.activeElement.find('.box-header > div > a[data-id="username"]').html(getXmasUsername(CONFIG.user.name));
                            }
                            else if(animChosen === parseInt(CONFIG.user.halloweenTime) && parseInt(CONFIG.user.halloweenTime) > time()) {
                                MODAL.activeElement.find('.box-header > div > a[data-id="username"]').addClass('halloween');
                            }
                            else {
                                MODAL.activeElement.find('.box-header > div > a[data-id="username"]').removeClass('xmasText').removeClass('halloween');
                            }

                        }


                        MODAL.activeElement.find('.box-header > div > span').html(icons);
                        MODAL.activeElement.find('.box-header > button').hide();
                        MODAL.activeElement.find('.box-header > div > a').show();
                        MODAL.activeElement.find('.box-header > div > span').show();
                    }
                    else {
                        MODAL.activeElement.find('.box-header > div').hide();
                        MODAL.activeElement.find('.box-header > button').show();
                    }
                }

                if (content) {

                    MODAL.updateActiveContent(modal, content, extra, noReset);
                }

                MODAL.elem.container.css('display', 'block');

                //MODAL.triggerFormInputError('title', 'test');
            },
            triggerChooseModal: function () {

                setTimeout(function () {

                    if (!MODAL.activeElement) {
                        MODAL.openModal('welcome-choose', 'welcome-choose');
                        localStorage.setItem('welcome-choice', true);
                    }
                    else {
                        MODAL.triggerChooseModal();
                    }

                }, 20000);
            },
            closeModal: function () {

                if (MODAL.activeElement) {

                    if (MODAL.selectors.modal === 'welcome') {

                        MODAL.triggerChooseModal();
                    }

                    MODAL.activeElement.css('display', 'none');
                    MODAL.elem.container.css('display', 'none');
                    MODAL.activeElement = null;


                    MODAL.previous.modal = MODAL.selectors.modal;
                    MODAL.previous.content = MODAL.selectors.content;
                    MODAL.previous.extra = MODAL.selectors.extra;

                    MODAL.selectors.modal = '';
                    MODAL.selectors.content = '';
                    MODAL.selectors.extra = '';
                }
            },
            goBackFromCaptcha: function () {

                if (MODAL.activeCaptcha) {

                    MODAL.openModal(MODAL.previous.modal, MODAL.previous.content, MODAL.previous.extra, true);
                }
            },
            loadPaintingCreateOrEdit: function (noReset) {

                if (noReset) {
                    return;
                }
                else if (CONFIG.user.settings.painting.isOwner && MODAL.selectors.extra !== 'create') {

                    MODAL.selectors.extra = 'edit';

                    MODAL.activeElement.find('h1 span').text('Edit Painting');
                    MODAL.activeElement.find('button.open-modal[data-target="main"][data-content="painting"][data-extra="create"]').show();
                    MODAL.activeElement.find('button.open-modal[data-target="main"][data-content="painting"][data-extra="edit"]').hide();
                    MODAL.elem.settings.painting.find('#submit-settings-painting').text('SAVE CHANGES');


                    MODAL.elem.settings.painting.find('input[name="id"]').val(CONFIG.painting.id);
                    MODAL.elem.settings.painting.find('input[name="title"]').val(CONFIG.painting.name);
                    MODAL.elem.settings.painting.find('textarea[name="description"]').val(CONFIG.painting.description);
                    MODAL.elem.settings.painting.find('textarea[name="rules"]').val(CONFIG.painting.rules);

                    MODAL.elem.settings.painting.find('.replacePainting').show();


                    MODAL.elem.settings.painting.find('#form-painting-delete').show();

                    if (CONFIG.user.premium.active) {

                        MODAL.elem.settings.painting.find('input[name="sizeX"]').val(CONFIG.painting.width);
                        MODAL.elem.settings.painting.find('input[name="sizeY"]').val(CONFIG.painting.height);

                        MODAL.elem.settings.painting.find('input[name="cooldown"]').val(CONFIG.painting.cooldown);

                        MODAL.elem.settings.painting.find('input[name="autoAcceptTime"]').val(CONFIG.painting.autoAcceptTime);

                    }
                    else {
                        MODAL.elem.settings.painting.find('input[name="sizeX"]').val(DEFAULT.painting.width);
                        MODAL.elem.settings.painting.find('input[name="sizeY"]').val(DEFAULT.painting.height);

                        MODAL.elem.settings.painting.find('input[name="cooldown"]').val(DEFAULT.painting.cooldown);
                        MODAL.elem.settings.painting.find('input[name="autoAcceptTime"]').val(DEFAULT.painting.autoAcceptTime);

                    }

                    MODAL.settingsPaintingSelectAccess(MODAL.elem.settings.painting.find('.input-radio[data-name="access"][data-value="' + CONFIG.painting.type + '"]'), true, 2);

                    MODAL.settingsPaintingSelectBackground(MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="background"] > div > a[data-value="' + CONFIG.painting.background + '"]'), true);

                    MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="allowedColors"] > div').removeClass('selected');

                    if (CONFIG.user.premium.active) {
                        for (var k in DEFAULT.painting.palette.colors) {

                            if ($.inArray(parseInt(k), CONFIG.painting.palette) !== -1) {

                                MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="allowedColors"] > div > a[data-value="' + k + '"]').parent().addClass('selected');
                            }
                        }


                    }
                    else {
                        MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="allowedColors"] > div').addClass('selected');
                    }

                    var list = [];
                    $(document).find('#form-settings-painting .settings-painting-palette[data-name="allowedColors"] > div.selected > a').each(function () {
                        list.push(parseInt($(this).attr('data-value')));
                    });
                    MODAL.elem.settings.painting.find('input[type="hidden"][name="allowedColors"]').val(list.join(','));


                    if (!CONFIG.painting.protection || !CONFIG.user.premium.active) {

                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').parent().find('input[name="protection"]').val(0);

                    }
                    else {

                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').addClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').parent().find('input[name="protection"]').val(1);
                    }

                    if (!CONFIG.painting.shopItems) {

                        MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').parent().find('input[name="shop-items"]').val(0);

                    }
                    else {

                        MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').addClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').parent().find('input[name="shop-items"]').val(1);
                    }

                    if (!CONFIG.painting.nsfw) {

                        MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').parent().find('input[name="nsfw"]').val(0);

                    }
                    else {

                        MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').addClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').parent().find('input[name="nsfw"]').val(1);
                    }

                    if (!CONFIG.painting.discordRequired || !CONFIG.user.premium.active) {

                        MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').parent().find('input[name="discord-required"]').val(0);
                    }
                    else {

                        MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').addClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').parent().find('input[name="discord-required"]').val(1);
                    }


                    MODAL.elem.settings.painting.find('a[data-name="template"]').removeClass('selected');
                    MODAL.elem.settings.painting.find('a[data-name="template"][data-id="' + CONFIG.painting.template + '"]').addClass('selected');

                    MODAL.elem.settings.painting.find('.brush-size').text(CONFIG.painting.brush.size + ' x ' + CONFIG.painting.brush.size);
                    MODAL.elem.settings.painting.find('input[type="range"][name="brush"]').val(CONFIG.painting.brush.size);

                }
                else {

                    if (!CONFIG.user.connected) {
                        alert('Note: You need to log in before creating your Painting');
                    }

                    MODAL.selectors.extra = 'create';

                    MODAL.elem.settings.painting.find('input[name="id"]').val('');

                    MODAL.activeElement.find('h1 span').text('New Painting');
                    MODAL.activeElement.find('button.open-modal[data-target="main"][data-content="painting"][data-extra="create"]').hide();
                    if (CONFIG.user.settings.painting.isOwner) {
                        MODAL.activeElement.find('button.open-modal[data-target="main"][data-content="painting"][data-extra="edit"]').show();
                    }
                    else {
                        MODAL.activeElement.find('button.open-modal[data-target="main"][data-content="painting"][data-extra="edit"]').hide();
                    }

                    MODAL.elem.settings.painting.find('.replacePainting').hide();

                    MODAL.elem.settings.painting.find('input[name="title"]').val('My Painting');
                    MODAL.elem.settings.painting.find('textarea[name="description"]').val('');
                    MODAL.elem.settings.painting.find('textarea[name="rules"]').val('');
                    MODAL.elem.settings.painting.find('input[name="sizeX"]').val(DEFAULT.painting.width);
                    MODAL.elem.settings.painting.find('input[name="sizeY"]').val(DEFAULT.painting.height);
                    MODAL.elem.settings.painting.find('input[name="cooldown"]').val(DEFAULT.painting.cooldown);
                    MODAL.elem.settings.painting.find('input[name="autoAcceptTime"]').val(DEFAULT.painting.autoAcceptTime);
                    if (CONFIG.user.premium.active) {
                        MODAL.elem.settings.painting.find('input[name="cooldown"]').val(0);
                    }
                    MODAL.settingsPaintingSelectAccess(MODAL.elem.settings.painting.find('.input-radio[data-name="access"][data-value="1"]'), true, 1);

                    MODAL.settingsPaintingSelectBackground(MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="background"] > div > a[data-value="' + $.inArray(DEFAULT.painting.background, DEFAULT.painting.palette.colors) + '"]'), true);

                    MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="allowedColors"] > div').removeClass('selected');
                    MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="allowedColors"] > div').addClass('selected');

                    MODAL.elem.settings.painting.find('input[name="allowedColors"]').val('');
                    var list = [];
                    $(document).find('#form-settings-painting .settings-painting-palette[data-name="allowedColors"] > div.selected > a').each(function () {
                        list.push(parseInt($(this).attr('data-value')));
                    });
                    MODAL.elem.settings.painting.find('input[type="hidden"][name="allowedColors"]').val(list.join(','));

                    MODAL.elem.settings.painting.find('#form-painting-delete').hide();

                    MODAL.elem.settings.painting.find('.brush-size').text('1 x 1');
                    MODAL.elem.settings.painting.find('input[type="range"][name="brush"]').val(1);

                    MODAL.elem.settings.painting.find('input[name="template"]').val(0);
                    MODAL.elem.settings.painting.find('a[data-name="template"]').removeClass('selected');
                    MODAL.elem.settings.painting.find('a[data-name="template"][data-id="0"]').addClass('selected');

                    MODAL.elem.settings.painting.find('#submit-settings-painting').text('CREATE NEW PAINTING');
                }

            },
            settingsPaintingSelectAccess: function (elem, silent, editOrCreate) {

                var input = 'access';
                var value = parseInt(elem.attr('data-value'));
                var reset = false;

                if (value === 5 && !CONFIG.user.social.twitch.linked) {

                    reset = true;
                    if (!silent) {

                        if (confirm('To use this option, Pixelplace needs to access your Twitch subscribers list. You are about to be redirected to Twitch to authorize this. This data will be private and used just for verifications purpose when someone access the painting. We won\'t disclose any of it. Would you like to continue?')) {

                            window.location.replace('/api/sso.php?type=3&action=login');
                            return;
                        }
                    }
                }
                else if (CONFIG.user.premium.active) {


                }
                else if (value !== DEFAULT.painting.type) {

                    reset = true;
                    if (!silent) {
                        notification('error', 'You need to be a Premium Subscriber to modify this setting');
                    }

                }

                else {
                    MODAL.triggerFormInputError('access', '');
                }

                if (reset) {
                    value = parseInt(DEFAULT.painting.type);
                }

                if (value === 2 && CONFIG.painting.guild.integration) {

                    if (editOrCreate === 2 && silent) {
                        value = 4;
                    }

                }
                if (value === 2 && CONFIG.painting.twitch.integration) {

                    if (editOrCreate === 2 && silent) {
                        value = 5;
                    }
                }


                elem.parent().find('input[type="hidden"][name="' + input + '"]').val(value);
                elem.parent().find('.input-radio[data-name="' + input + '"]').removeClass('selected');
                elem.parent().find('.input-radio[data-name="' + input + '"][data-value="' + value + '"]').addClass('selected');

                if (value == 2 || value == 4 || value == 5 || (editOrCreate === 2 && silent && value == 2 && (CONFIG.painting.guild.integration || CONFIG.painting.twitch.integration))) {

                    MODAL.elem.settings.painting.find('.rules').show();
                    MODAL.elem.settings.painting.find('input[name="autoAcceptTime"]').show();
                    MODAL.elem.settings.painting.find('.autoAcceptTime').show();

                    MODAL.elem.settings.painting.find('.discordRequired').show();
                    MODAL.elem.settings.painting.find('.input-checkbox[data-name="discord-required"]').show();
                }
                else {

                    MODAL.elem.settings.painting.find('.rules').hide();
                    MODAL.elem.settings.painting.find('input[name="autoAcceptTime"]').hide();
                    MODAL.elem.settings.painting.find('.autoAcceptTime').hide();
                    MODAL.elem.settings.painting.find('.input-checkbox[data-name="discord-required"]').hide();
                    MODAL.elem.settings.painting.find('.discordRequired').hide();
                }
            },
            settingsPaintingSelectBackground: function (elem, silent) {

                var value = elem.attr('data-value');

                if (CONFIG.user.premium.active) {

                    if (DEFAULT.painting.palette.colors[value] !== undefined) {

                        MODAL.elem.settings.painting.find('input[type="hidden"][name="background"]').val(value);
                        MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="background"] > div').removeClass('selected');
                        MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="background"] > div > a[data-value="' + value + '"]').parent().addClass('selected');
                    }
                    else {

                        if (!silent) {
                            notification('error', 'Color not found');
                        }

                    }

                }
                else {

                    if (!silent) {
                        notification('error', 'You need to be a Premium Subscriber to modify this setting');
                    }
                }
            },
            generateSettingsPaintingsPalettes: function () {

                var append = '';
                var colorIds = [];
                for (var k in DEFAULT.painting.palette.colors) {
                    append += '<div><a href="#" data-value="' + k + '" style="background-color: ' + DEFAULT.painting.palette.colors[k] + '"></a></div>';
                    colorIds.push(k);
                }

                MODAL.elem.container.find('.box[data-id="main"] .box-content[data-id="painting"] .settings-painting-palette').html(append);
                MODAL.elem.container.find('.box[data-id="main"] .box-content[data-id="painting"] .settings-painting-palette[data-name="background"] > div').eq(0).addClass('selected');
                MODAL.elem.container.find('.box[data-id="main"] .box-content[data-id="painting"] .settings-painting-palette[data-name="allowedColors"] > div').addClass('selected');
                MODAL.elem.container.find('.box[data-id="main"] .box-content[data-id="painting"] input[type="hidden"][data-name="background"]').val(0);
                MODAL.elem.container.find('.box[data-id="main"] .box-content[data-id="painting"] input[type="hidden"][data-name="allowedColors"]').val(colorIds.join(','));
            },
            saveUserSettings: function () {

                if (PAINTING.settingsLoaded) {

                    var params = {
                        displaySocial: CONFIG.user.settings.displaySocial ? true : false,
                        painting: {
                            protectionFlashing: CONFIG.user.settings.painting.protectionFlashing,
                            zoomDisplay: CONFIG.user.settings.painting.zoomDisplay
                        },
                        chat: {
                            invisible: CONFIG.user.settings.chat.invisible,
                            timestamps: CONFIG.user.settings.chat.timestamps,
                            notifications: CONFIG.user.settings.chat.notifications,
                            friendsNotifications: CONFIG.user.settings.chat.friendsNotifications,
                            guildTags: CONFIG.user.settings.chat.guildTags,
                        }
                    };
                    XX.xhr.req('POST', '/api/post-settings.php', params, true, function (success, data) {

                    });
                }
            },
            onChangeTools: function (name, param, silent) {

                if (name === 'tools-mobile-alt') {


                    if ((param !== undefined && param) || (param === undefined && MOBILE_ALT_DRAWING)) {


                        MOBILE_ALT_DRAWING = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');


                        if (CURSOR.touchDevice) {

                            $('#mobileplace').show();
                            ELEM.placeholderMobile.show();

                        }

                        if (localStorage) {
                            localStorage.setItem('mobile-alt-drawing', 0);
                        }

                        if (!silent) {
                            notification('warning', 'Tools', 'Alternate drawing disabled', false, true);
                        }

                    }
                    else {

                        MOBILE_ALT_DRAWING = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');


                        if (CURSOR.touchDevice) {
                            $('#mobileplace').hide();
                            ELEM.placeholderMobile.hide();
                        }


                        if (localStorage) {
                            localStorage.setItem('mobile-alt-drawing', time());
                        }

                        if (!silent) {
                            notification('success', 'Tools', 'Alternate drawing enabled', false, true);
                        }
                    }

                }
                else if (name === 'tools-display-tracking') {

                    if (!CONFIG.user.premium.active) {

                        if (!silent) {
                            MODAL.openModal('main', 'shop');
                            notification('warning', 'Warning', 'You need to be a premium subscriber to use the live users tracking feature');
                        }
                        return;
                    }
                    else if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.liveTracking)) {


                        CONFIG.user.settings.painting.liveTracking = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        setTimeout(function () {
                            for (var k in PAINTING.liveTrackingUsers) {

                                PAINTING.element.move.find('.track[data-id="' + k + '"]').remove();
                                delete PAINTING.liveTrackingUsers[k];
                            }
                        }, 500);


                        //$('#painting-move').removeClass('live-tracking-bg');


                        if (!silent) {
                            notification('warning', 'Tools', 'Live tracking disabled', false, true);
                        }

                    }
                    else {

                        CONFIG.user.settings.painting.liveTracking = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');

                        //$('#painting-move').removeClass('live-tracking-bg').addClass('live-tracking-bg');


                        if (!silent) {
                            notification('success', 'Tools', 'Live tracking enabled', false, true);
                        }
                    }

                }
                else if (name === 'tools-display-bot') {

                    if (!CONFIG.user.premium.active) {

                        if (!silent) {
                            MODAL.openModal('main', 'shop');
                            notification('warning', 'Warning', 'You need to be a premium subscriber to use the BOT feature');
                        }
                        return;
                    }
                    else if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.bot)) {


                        CONFIG.user.settings.painting.bot = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        toggleBot();

                        if (!silent) {
                            notification('warning', 'Tools', 'Bot disabled', false, true);
                        }

                    }
                    else {

                        if(parseInt(CONFIG.painting.id) === 8) {
                            notification('error', 'Tools', 'Bots forbidden on this painting', false, true);
                        }
                        else {


                            CONFIG.user.settings.painting.bot = true;
                            MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                            MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');

                            toggleBot();

                            if (!silent) {
                                notification('success', 'Tools', 'Bot enabled', false, true);
                            }
                        }
                    }

                }
                else if (name === 'tools-display-save-tracking') {

                    if (!CONFIG.user.premium.active) {

                        if (!silent) {
                            MODAL.openModal('main', 'shop');
                            notification('warning', 'Warning', 'You need to be a premium subscriber to use the save tracking feature');
                        }
                        return;
                    }
                    else if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.saveTracking)) {

                        var conf = null;
                        if (!silent) {
                            conf = confirm('Would you like to download the saved data (JSON)?');
                        }

                        if (conf) {


                            var data = {
                                names: SAVE_TRACKING_DATA_NAMES,
                                data: SAVE_TRACKING_DATA,
                            }

                            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
                            var downloadAnchorNode = document.createElement('a');
                            downloadAnchorNode.setAttribute("href", dataStr);
                            downloadAnchorNode.setAttribute("download", "save-tracking.json");
                            document.body.appendChild(downloadAnchorNode); // required for firefox
                            downloadAnchorNode.click();
                            downloadAnchorNode.remove();
                        }


                        var conf1 = null;
                        if (!silent) {
                            conf1 = confirm('Disable save tracking and reset data?');
                        }

                        if (silent || conf1) {

                            CONFIG.user.settings.painting.saveTracking = false;
                            MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                            SAVE_TRACKING_DATA = {};
                            SAVE_TRACKING_DATA_NAMES = {};

                            SAVE_TRACKING_ELEM.hide();

                            if (!silent) {
                                notification('warning', 'Tools', 'Save tracking disabled', false, true);
                            }
                        }
                    }
                    else {

                        CONFIG.user.settings.painting.saveTracking = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');


                        if (!silent) {
                            notification('success', 'Tools', 'Save tracking enabled', false, true);
                        }
                    }

                }
                else if (name === 'tools-display-grid') {

                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.gridDisplay)) {


                        CONFIG.user.settings.painting.gridDisplay = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');


                        PAINTING.element.grid.hide();

                        if (!silent) {
                            notification('warning', 'Tools', 'Grid hidden', false, true);
                        }

                    }
                    else {

                        CONFIG.user.settings.painting.gridDisplay = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');


                        PAINTING.element.grid.show();


                        if (!silent) {
                            notification('success', 'Tools', 'Grid displayed', false, true);
                        }
                    }
                }
                else if (name === 'tools-lock-painting') {

                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.lockPainting)) {


                        CONFIG.user.settings.painting.lockPainting = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');


                        // PAINTING.element.grid.hide();

                        if (!silent) {
                            notification('warning', 'Tools', 'Painting movement enabled', false, true);
                        }

                    }
                    else {

                        CONFIG.user.settings.painting.lockPainting = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');


                        // PAINTING.element.grid.show();


                        if (!silent) {
                            notification('success', 'Tools', 'Painting movement disabled', false, true);
                        }
                    }
                }
                else if (name === 'tools-display-notifications') {


                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.chat.notifications)) {

                        CONFIG.user.settings.chat.notifications = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        if (!silent) {
                            notification('warning', 'Tools', 'Chat notifications disabled', false, true);
                        }

                    }
                    else {
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');
                        CONFIG.user.settings.chat.notifications = true;

                        if (!silent) {
                            notification('success', 'Tools', 'Chat notifications enabled', false, true);
                        }
                    }

                    MODAL.saveUserSettings();

                }
                else if (name === 'tools-display-friends-notifications') {


                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.chat.friendsNotifications)) {

                        CONFIG.user.settings.chat.friendsNotifications = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        if (!silent) {
                            notification('warning', 'Tools', 'Friends notifications disabled', false, true);
                        }

                    }
                    else {
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');
                        CONFIG.user.settings.chat.friendsNotifications = true;

                        if (!silent) {
                            notification('success', 'Tools', 'Friends notifications enabled', false, true);
                        }
                    }

                    MODAL.saveUserSettings();

                }
                else if (name === 'tools-display-protection-flashing') {


                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.protectionFlashing)) {

                        CONFIG.user.settings.painting.protectionFlashing = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        if (!silent) {
                            notification('warning', 'Tools', 'Protection flashing disabled', false, true);
                        }

                    }
                    else {
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');
                        CONFIG.user.settings.painting.protectionFlashing = true;

                        if (!silent) {
                            notification('success', 'Tools', 'Protection flashing enabled', false, true);
                        }
                    }

                    MODAL.saveUserSettings();

                }
                else if (name === 'tools-display-zoom') {


                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.painting.zoomDisplay)) {

                        CONFIG.user.settings.painting.zoomDisplay = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        $('#coordinates').removeClass('zoom');

                        if (!silent) {
                            notification('warning', 'Tools', 'Zoom buttons disabled', false, true);
                        }

                        $('#menu-buttons-right-top a[data-id="zoom-in"]').hide();
                        $('#menu-buttons-right-top a[data-id="zoom-out"]').hide();

                    }
                    else {
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');
                        CONFIG.user.settings.painting.zoomDisplay = true;

                        $('#coordinates').removeClass('zoom').addClass('zoom');

                        $('#menu-buttons-right-top a[data-id="zoom-in"]').show();
                        $('#menu-buttons-right-top a[data-id="zoom-out"]').show();

                        if (!silent) {
                            notification('success', 'Tools', 'Zoom buttons enabled (top right)', false, true);
                        }
                    }

                    MODAL.saveUserSettings();

                }
                else if (name === 'tools-display-guilds') {

                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.chat.guildTags)) {

                        CONFIG.user.settings.chat.guildTags = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        CHAT.elem.container.find('.messages .row .guild').hide();

                        if (!silent) {
                            notification('warning', 'Tools', 'Guild tags are now hidden from chat', false, true);
                        }

                    }
                    else {
                        CONFIG.user.settings.chat.guildTags = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');
                        CHAT.elem.container.find('.messages .row .guild').show();

                        if (!silent) {
                            notification('success', 'Tools', 'Guild tags are now being displayed in chat', false, true);
                        }
                    }

                    MODAL.saveUserSettings();

                }
                else if (name === 'tools-display-timestamp') {

                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.chat.timestamps)) {

                        CONFIG.user.settings.chat.timestamps = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        CHAT.elem.container.find('.messages .row .time').hide();

                        if (!silent) {
                            notification('warning', 'Tools', 'Timestamps are now hidden from chat', false, true);
                        }

                    }
                    else {

                        CONFIG.user.settings.chat.timestamps = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');
                        CHAT.elem.container.find('.messages .row .time').show();

                        if (!silent) {
                            notification('success', 'Tools', 'Timestamps are now displayed in chat', false, true);
                        }
                    }

                    MODAL.saveUserSettings();
                }
                else if (name === 'tools-invisible-mode') {

                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.chat.invisible)) {

                        CONFIG.user.settings.chat.invisible = false;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');

                        if (!silent) {

                            notification('warning', 'Tools', 'Invisible mode disabled, reloading the page in a few seconds...', false, true);

                            setTimeout(function () {
                                window.location.reload();
                            }, 4000);
                        }

                    }
                    else {

                        CONFIG.user.settings.chat.invisible = true;
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.tools.find('a[data-name="' + name + '"]').addClass('selected');


                        if (!silent) {
                            notification('success', 'Tools', 'Invisible mode enabled, reloading the page in a few seconds...', false, true);

                            setTimeout(function () {
                                window.location.reload();
                            }, 4000);
                        }

                    }

                    MODAL.saveUserSettings();
                }
                else if (name === 'tools-display-social') {

                    if ((param !== undefined && param) || (param === undefined && CONFIG.user.settings.displaySocial)) {

                        CONFIG.user.settings.displaySocial = false;
                        MODAL.elem.settings.account.find('a[data-name="' + name + '"]').removeClass('selected');

                        if (!silent) {
                            notification('success', 'Account', 'Social accounts are now hidden from your profile', false, true);
                        }

                    }
                    else {

                        CONFIG.user.settings.displaySocial = true;
                        MODAL.elem.settings.account.find('a[data-name="' + name + '"]').removeClass('selected');
                        MODAL.elem.settings.account.find('a[data-name="' + name + '"]').addClass('selected');

                        if (!silent) {
                            notification('warning', 'Account', 'Social accounts are now displayed on your profile', false, true);
                        }

                    }

                    MODAL.saveUserSettings();
                }
            },
            loadTopUsers: function () {

                var block0 = $('.box-content[data-id="top-users"]');

                MODAL.triggerLoader(true);

                var cache = time();

                XX.xhr.req('GET', '/top-users.json?t' + cache, {}, true, function (success, data) {

                    if (success) {

                        var count = 1;
                        var followers = '';
                        var stripped = 'stripped-2';
                        for (var k in data.tops.followers) {


                            var row = data.tops.followers[k];

                            if (stripped === 'stripped-2') {
                                stripped = 'stripped';
                            }
                            else {
                                stripped = 'stripped-2';
                            }

                            var username = row.username;




                            var rainbow = '';


                            var animChosen = Math.max(parseInt(row.rainbowTime),  parseInt(row.xmasTime),  parseInt(row.halloweenTime));

                            if(animChosen === parseInt(row.rainbowTime) && parseInt(row.rainbowTime) > time()) {
                                rainbow = ' rainbowText';
                            }
                            else if(animChosen === parseInt(row.xmasTime) && parseInt(row.xmasTime) > time()) {
                                rainbow = ' xmasText';
                                username = getXmasUsername(username);
                            }
                            else if(animChosen === parseInt(row.halloweenTime) && parseInt(row.halloweenTime) > time()) {
                                rainbow = ' halloween';
                            }







                            var guild = '';
                            var icons = '';


                            followers += '<tr class="' + stripped + '"><td>' + count + '</td><td>' + icons + guild + '<a href="#" class="user open-profile' + rainbow + '"  data-profile="' + row.username.toLowerCase() + '" title="View profile">' + username + '</a></td><td>' + row.followers + '</td></tr>';

                            count++;
                        }

                        block0.find('.top table[data-id="followers"]').html(followers);


                        var count = 1;
                        var gifts = '';
                        var stripped = 'stripped-2';
                        for (var k in data.tops.gifts) {


                            var row = data.tops.gifts[k];

                            if (stripped === 'stripped-2') {
                                stripped = 'stripped';
                            }
                            else {
                                stripped = 'stripped-2';
                            }

                            var rainbow = '';
                            var username = row.username;


                            var animChosen = Math.max(parseInt(row.rainbowTime),  parseInt(row.xmasTime),  parseInt(row.halloweenTime));

                            if(animChosen === parseInt(row.rainbowTime) && parseInt(row.rainbowTime) > time()) {
                                rainbow = ' rainbowText';
                            }
                            else if(animChosen === parseInt(row.xmasTime) && parseInt(row.xmasTime) > time()) {
                                rainbow = ' xmasText';
                                username = getXmasUsername(username);
                            }
                            else if(animChosen === parseInt(row.halloweenTime) && parseInt(row.halloweenTime) > time()) {
                                rainbow = ' halloween';
                            }



                            var guild = '';
                            var icons = '';

                            if (count <= 3) {
                                icons += '<img src="img/badges/gifter.png" alt="TOP 3 GIFTER" title="TOP 3 GIFTER">';
                            }

                            gifts += '<tr class="' + stripped + '"><td>' + count + '</td><td>' + icons + guild + '<a href="#" class="user open-profile' + rainbow + '"  data-profile="' + row.username.toLowerCase() + '" title="View profile">' + username + '</a></td><td>' + row.ratio + '</td></tr>';

                            count++;
                        }

                        block0.find('.top table[data-id="gift"]').html(gifts);


                        var count = 1;
                        var joined = '';
                        var stripped = 'stripped-2';
                        for (var k in data.tops.joined) {


                            var row = data.tops.joined[k];

                            if (stripped === 'stripped-2') {
                                stripped = 'stripped';
                            }
                            else {
                                stripped = 'stripped-2';
                            }

                            var rainbow = '';
                            var username = row.username;

                            var animChosen = Math.max(parseInt(row.rainbowTime),  parseInt(row.xmasTime),  parseInt(row.halloweenTime));

                            if(animChosen === parseInt(row.rainbowTime) && parseInt(row.rainbowTime) > time()) {
                                rainbow = ' rainbowText';
                            }
                            else if(animChosen === parseInt(row.xmasTime) && parseInt(row.xmasTime) > time()) {
                                rainbow = ' xmasText';
                                username = getXmasUsername(username);
                            }
                            else if(animChosen === parseInt(row.halloweenTime) && parseInt(row.halloweenTime) > time()) {
                                rainbow = ' halloween';
                            }

                            var guild = '';
                            var icons = '';

                            var created = row.createdAt.split(' ');

                            joined += '<tr class="' + stripped + '"><td>' + count + '</td><td>' + icons + guild + '<a href="#" class="user open-profile' + rainbow + '"  data-profile="' + row.username.toLowerCase() + '" title="View profile">' + username + '</a></td><td>' + created[0] + '</td></tr>';

                            count++;
                        }

                        block0.find('.top table[data-id="joined"]').html(joined);


                        var count = 1;
                        var pixels = '';
                        var stripped = 'stripped-2';
                        for (var k in data.tops.pixels) {


                            var row = data.tops.pixels[k];

                            if (stripped === 'stripped-2') {
                                stripped = 'stripped';
                            }
                            else {
                                stripped = 'stripped-2';
                            }

                            var rainbow = '';
                            var username = row.username;

                            var animChosen = Math.max(parseInt(row.rainbowTime),  parseInt(row.xmasTime),  parseInt(row.halloweenTime));

                            if(animChosen === parseInt(row.rainbowTime) && parseInt(row.rainbowTime) > time()) {
                                rainbow = ' rainbowText';
                            }
                            else if(animChosen === parseInt(row.xmasTime) && parseInt(row.xmasTime) > time()) {
                                rainbow = ' xmasText';
                                username = getXmasUsername(username);
                            }
                            else if(animChosen === parseInt(row.halloweenTime) && parseInt(row.halloweenTime) > time()) {
                                rainbow = ' halloween';
                            }

                            var guild = '';
                            var icons = '';

                            pixels += '<tr class="' + stripped + '"><td>' + count + '</td><td>' + icons + guild + '<a href="#" class="user open-profile' + rainbow + '"  data-profile="' + row.username.toLowerCase() + '" title="View profile">' + username + '</a></td><td>' + parseInt(row.pixels).toLocaleString('ru-RU') + '</td></tr>';

                            count++;
                        }

                        block0.find('.top table[data-id="pixels"]').html(pixels);


                        MODAL.triggerLoader(false);

                    }
                    else {
                        MODAL.triggerLoader(false);
                        notification('error', 'Error', data.message);
                    }

                });
            },
            loadGuildData: function () {

                MODAL.triggerLoader(true);

                var cache = time();

                XX.xhr.req('GET', '/top-guilds.json?t' + cache, {}, true, function (success, data) {

                    if (success) {

                        MODAL.guildListCache = data;
                        MODAL.lastStartGuildFetch = 0;
                        MODAL.loadGuilds(0);
                        MODAL.guildListI = 1;

                    }
                    else {
                        MODAL.triggerLoader(false);
                        notification('error', 'Error', data.message);
                    }

                });
            },
            loadGuilds: function (start) {

                if (MODAL.guildListCache === null) {
                    MODAL.loadGuildData();
                }
                else {

                    var block = MODAL.activeContent.find('.rows');

                    if (start === 0) {

                        block.html('');
                        MODAL.lastStartGuildFetch = 0;
                        MODAL.triggerLoader(false);
                        MODAL.guildListI = 1;
                    }
                    else {
                        MODAL.lastStartGuildFetch = start;
                    }

                    var loadMore = MODAL.activeContent.find('.load-more');

                    var data = MODAL.guildListCache;


                    var stopAt = start + MODAL.guildListLimit;


                    var l = 1;
                    for (var k in data.guilds) {

                        if (k > stopAt) {
                            break;
                        }
                        else if (k >= start) {

                            var req = data.guilds[k];

                            if (MODAL.guildListSearch != '' && req.tag.toLowerCase().indexOf(MODAL.guildListSearch) === -1 && req.name.toLowerCase().indexOf(MODAL.guildListSearch) === -1 && req.name.toLowerCase().indexOf(MODAL.description) === -1) {


                            }
                            else {

                                var apply = 'APPLY';
                                var applyColor = '#ff9d50';
                                if (parseInt(req.auto_accept) === 1) {
                                    apply = 'JOIN';
                                    applyColor = '#00b2e1';
                                }

                                var img = '';
                                if (parseInt(req.canvas) > 0) {
                                    img = '<img src="/canvas/' + req.canvas + '.png?t=' + time() + '">';
                                }

                                var elem = $('<a href="#" class="open-guild" data-tag="' + req.tag + '">' +
                                    '<div>' +
                                    '    <h1>#' + req.position + '</h1>' +
                                    '    <p><img src="/img/icons/i-team-black.svg" width="16"><br/>' + req.members_count + '</p>' +
                                    '</div>' +
                                    '<div class="guild-info">' +
                                    '    <h1><span class="tag"></span> &bull; <span class="name"></span> <span class="points"></span></h1>' +
                                    '    <p></p>' +
                                    '</div>' +
                                    '<div class="emblem">' + img +
                                    '</div>' +
                                    '</a>');

                                /* <button class="guild-new-apply" data-tag="' + req.tag + '" style="background-color: '+applyColor+'">'+apply+'</button>' +
                                    '<button class="secondary guild-promote display-none">PROMOTE <div class="icon-align"><img src="img/pp-coin-still.gif" width="16"></div></button>*/

                                block.append(elem);

                                elem.find('.guild-info .tag').html('' + req.tag + '');
                                elem.find('.guild-info .name').text(req.name);

                                elem.find('.guild-info .points').text(parseInt(req.points).toLocaleString('ru-RU') + ' points (' + parseInt(req.battlePoints).toLocaleString('ru-RU') + ' battle points)');
                                elem.find('.guild-info p').text(req.description);



                                if(l === 5) {
                                    var adReq = 0;
                                    if(adReq && (!CONFIG.user.connected || (CONFIG.user.connected && (parseInt(CONFIG.user.premium.expire_at) < time() || !CONFIG.user.premium.active)))) {

                                        block.append('<div><script type="text/javascript" src="https://services.vlitag.com/adv1/?q=27546936fdc4110d04b58b19cd9d49f5" defer="" async=""></script><script> var vitag = vitag || {};</script></div><div class="absm"><div class="title">Advertising</div><div class="adsbyvli" style="width:320px; height:50px" data-ad-slot="vi_23510102705"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102705") })</script></div>');

                                    }

                                }
                                l++;
                                if(l > 5) {
                                    l = 1;
                                }



                                MODAL.guildListI++;
                            }
                        }
                    }


                    if (data.total > (MODAL.lastStartGuildFetch + 1)) {

                        loadMore.show();
                        loadMore.text(loadMore.attr('data-text'));
                        loadMore.removeAttr('disabled');
                        loadMore.removeClass('spin');
                    }
                    else {
                        loadMore.hide();
                        block.append('<div class="text-center">Can\'t find your guild? The TOP 100 Guild list is updated every 10 minutes<br/>Click on your profile and click your guild tag to find yours</div>');
                    }


                    if (data.total === 0) {
                        block.html('<p class="margin-top"><b>No guilds :(.</b></p>');
                    }
                }
            }
        }

        $(document).on('change', '.check [name="TM-display-live-tracking"]', function (e) {


            if(this.checked) {
                SAVE_TRACKING_DISPLAY_NAMES = true;
            }
            else {
                SAVE_TRACKING_DISPLAY_NAMES = false;
                PAINTING.element.move.find('.track').remove();
                PAINTING.liveTrackingUsers = {};
            }
        });
        $(document).on('click', '.perms [name="modPermBan"], .perms [name="modPermTools"]', function (e) {

            e.preventDefault();

            var elem = $(this);

            var params = {
                perm: $(this).attr('name') === 'modPermBan' ? 'ban' : 'tools',
                username: elem.attr('data-username'),
                painting: CONFIG.painting.id
            }

            elem.addClass('spin');
            elem.attr('data-text', elem.text());
            elem.html('<img src="/img/icons/spin.svg" width="14">');
            elem.attr('disabled', 'true');

            XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                if (success) {

                    MODAL.triggerLoader(false);

                    elem.text(elem.attr('data-text'));
                    elem.removeAttr('disabled');
                    elem.removeClass('spin');

                    PAINTING.fetchPaintingModerators();


                    notification('success', 'Permissions updated');
                }
                else {

                    MODAL.triggerLoader(false);

                    elem.text(elem.attr('data-text'));
                    elem.removeAttr('disabled');
                    elem.removeClass('spin');

                    notification('error', 'Error', data.message);
                }
            });
        });

        $(document).on('click', '.guild-new-apply', function (e) {

            e.preventDefault();

            var elem = $(this);

            var params = {
                id: elem.attr('data-tag'),
                apply: true
            }

            elem.addClass('spin');
            elem.attr('data-text', elem.text());
            elem.html('<img src="/img/icons/spin.svg" width="14">');
            elem.attr('disabled', 'true');

            XX.xhr.req('POST', '/api/post-guild-access.php', params, true, function (success, data) {


                if (success) {


                    if (parseInt(data.auto_accept) === 1) {

                        var params = {
                            username: CONFIG.user.name,
                            guildTag: elem.attr('data-tag'),
                            add: true
                        }

                        XX.xhr.req('POST', '/api/post-guild-access.php', params, true, function (success, data) {

                            MODAL.triggerLoader(false);

                            elem.text(elem.attr('data-text'));
                            elem.removeAttr('disabled');
                            elem.removeClass('spin');

                            if (success) {

                            }
                            else {

                                notification('error', 'Error', data.message);
                            }
                        });

                    }
                    else {
                        MODAL.triggerLoader(false);

                        elem.text(elem.attr('data-text'));
                        elem.removeAttr('disabled');
                        elem.removeClass('spin');

                        notification('success', 'Request sent', 'Please wait until the guild leader review your application');

                    }
                }
                else {
                    MODAL.triggerLoader(false);

                    elem.text(elem.attr('data-text'));
                    elem.removeAttr('disabled');
                    elem.removeClass('spin');

                    notification('error', 'Error', data.message);


                }
            });

        });

        $(document).on('click', '.go-to-coords', function (e) {

            e.preventDefault();

            var scale = PAINTING.scale;
            if ($(this).attr('data-s').length > 0) {
                scale = parseFloat($(this).attr('data-s'));
            }

            var x = parseInt($(this).attr('data-x'));
            var y = parseInt($(this).attr('data-y'));

            if (!isNaN(scale) && !isNaN(x) && !isNaN(y)) {
                PAINTING.centerPositionTo(scale, x, y);
            }
        });

        $(document).on('click', '.guild-quit', function (e) {

            e.preventDefault();

            var elem = $(this);

            var params = {
                leave: true
            }

            elem.addClass('spin');
            elem.attr('data-text', elem.text());
            elem.html('<img src="/img/icons/spin.svg" width="14">');
            elem.attr('disabled', 'true');

            XX.xhr.req('POST', '/api/post-guild-access.php', params, true, function (success, data) {

                MODAL.triggerLoader(false);

                elem.text(elem.attr('data-text'));
                elem.removeAttr('disabled');
                elem.removeClass('spin');

                if (success) {

                    notification('success', 'Success!', 'You left the guild');

                    $('.guild-quit').hide();

                    setTimeout(function () {
                        window.location.reload();
                    }, 4000);

                }
                else {
                    notification('error', 'Error', data.message);
                }
            });

        });

        $('#chat .tabs a[data-id="guild"]').on('click', function (e) {

            e.preventDefault();
            if (CONFIG.user.guild === '') {
                MODAL.openModal('main', 'guilds');
            }
        });


        $('.box-content').on('scroll', function (evt) {

            var elem = $(this);

            if (elem[0].scrollHeight - elem.scrollTop() <= parseInt(elem.outerHeight()) + 80) {
                MODAL.moreContentBelow.hide();
            }
            else {
                MODAL.moreContentBelow.show();
            }
        });

        MODAL.moreContentBelow.on('click', function (evt) {
            evt.preventDefault();
            MODAL.activeContent[0].scrollTop += 100;
        });

        $(document).on('click', '.open-modal', function (evt) {

            evt.preventDefault();

            if ($(evt.target).attr('id') !== undefined && $(evt.target).attr('id') === 'dismiss-news') {
                return;
            }
            else {

                var modal = $(this).attr('data-target');
                var content = $(this).attr('data-content');
                var extra = $(this).attr('data-extra');

                MODAL.openModal(modal, content, extra);
            }
        });


        MODAL.elem.container.find('.box-menu li a').on('click', function (evt) {


            var content = $(this).attr('data-content');

            if (content) {


                evt.preventDefault();
                MODAL.updateActiveContent(MODAL.selectors.modal, content);
            }
        });

        MODAL.elem.container.find('.box-sub-menu li a').on('click', function (evt) {


            evt.preventDefault();

            var content = $(this).attr('data-content');
            var extra = $(this).attr('data-extra');

            if (content) {

                evt.preventDefault();
                MODAL.updateActiveContent(MODAL.selectors.modal, content, extra);
            }
        });

        MODAL.elem.container.find('.close-modal').on('click', function (evt) {

            evt.preventDefault();
            MODAL.closeModal();

        });

        MODAL.elem.container.on('pointerdown', function (evt) {


            if (MODAL.activeElement && $(evt.target).attr('id') === 'modals') {


                if (!MODAL.activeCaptcha && !MODAL.activeAlert) {

                    MODAL.closeModal()
                }
            }
        });


//////////////////////////// Form


        /* Models
        MODAL.elem.container.find('.input-radio').on('click', function (evt) {

             var input = $(this).attr('data-name');

             $(this).parent().find('input[type="hidden"][name="' + input + '"]').val($(this).attr('data-value'));
             $(this).parent().find('a[data-name="' + input + '"]').removeClass('selected');
             $(this).addClass('selected');

         });



         MODAL.elem.container.find('.input-checkbox').on('click', function (evt) {

             var input = $(this).attr('data-name');

             if ($(this).hasClass('selected')) {
                 $(this).parent().find('input[type="hidden"][name="' + input + '"]').val(0);
                 $(this).removeClass('selected');
             }
             else {
                 $(this).parent().find('input[type="hidden"][name="' + input + '"]').val($(this).attr('data-value'));
                 $(this).parent().find('a[data-name="' + input + '"]').removeClass('selected');
                 $(this).addClass('selected');
             }


         });*/


        $(document).on('input', 'input[name="filter-request"][data-type="0"]', function () {
            PAINTING.fetchPaintingAccess(0, 0);
        });

        $(document).on('input', 'input[name="filter-request"][data-type="1"]', function () {
            PAINTING.fetchPaintingAccess(1, 0);
        });

        $(document).on('input', 'input[name="filter-request"][data-type="2"]', function () {
            PAINTING.fetchPaintingAccess(2, 0);
        });

        $(document).on('input', 'input[name="filter-guilds"]', function () {

            MODAL.guildListSearch = $(this).val().toLowerCase();
            MODAL.triggerLoader(false);
            MODAL.loadGuilds(0);
        });

        /*$(document).on('mouseenter', '.players-list .player', function () {

            if(CONFIG.user.isStaff){

                $(this).find('.mod-actions').remove();
                $(this).append('<div class="mod-actions"><a href="#" class="act-1" data-username="'+$(this).attr('data-profile')+'">X</a></div>');
            }
        });

        $(document).on('mouseleave', '.players-list .player', function () {

            if(CONFIG.user.isStaff){
                 $(this).find('.mod-actions').remove();
            }
        });

        $(document).on('click', '.mod-actions .act-1', function () {

            if(CONFIG.user.isStaff){

                $(this).attr('data-username')
            }
        });*/


        $(document).on('input', 'input[name="filter-paintings"]', function () {

            PAINTING.paintingListStart = 0;

            var search = $(this).val();
            if (search && search !== '') {
                search = search.toLowerCase();
            }
            else {
                search = '';
            }

            PAINTING.paintingListSearch = search;

            PAINTING.refreshPaintingList(0);
        });

//////////////////////////// Modals > Settings > Tools


        MODAL.elem.container.find('#form-tools a, .other-tools').on('click', function (evt) {
            evt.preventDefault();
            var name = $(this).attr('data-name');
            MODAL.onChangeTools(name);
        });


        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').on('click', function (evt) {

            evt.preventDefault();


            if (MODAL.selectors.extra !== 'create') {
                notification('error', 'This setting can only be set on painting creation');
            }
            else {


                if (CONFIG.user.premium.active) {
                    var current = parseInt(MODAL.elem.container.find('.input-checkbox[data-name="protection"]').parent().find('input[name="protection"]').val());

                    if (current) {

                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').parent().find('input[name="protection"]').val(0);

                    }
                    else {

                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').removeClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').addClass('selected');
                        MODAL.elem.container.find('.input-checkbox[data-name="protection"]').parent().find('input[name="protection"]').val(1);
                    }
                }
                else {
                    notification('error', 'You need to be a Premium Subscriber to modify this setting');
                }
            }
        });


        MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').on('click', function (evt) {

            evt.preventDefault();


            var current = parseInt(MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').parent().find('input[name="shop-items"]').val());

            if (current) {

                MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').parent().find('input[name="shop-items"]').val(0);

            }
            else {

                MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').addClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="shop-items"]').parent().find('input[name="shop-items"]').val(1);
            }

        });

        MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').on('click', function (evt) {

            evt.preventDefault();


            var current = parseInt(MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').parent().find('input[name="nsfw"]').val());

            if (current) {

                MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').parent().find('input[name="nsfw"]').val(0);

            }
            else {

                MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').addClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="nsfw"]').parent().find('input[name="nsfw"]').val(1);
            }

        });


        MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').on('click', function (evt) {

            evt.preventDefault();


            var current = parseInt(MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').parent().find('input[name="discord-required"]').val());

            if (CONFIG.user.premium.active) {
                if (current) {

                    MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').removeClass('selected');
                    MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').parent().find('input[name="discord-required"]').val(0);

                }
                else {

                    MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').removeClass('selected');
                    MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').addClass('selected');
                    MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').parent().find('input[name="discord-required"]').val(1);
                }
            }
            else {

                MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="discord-required"]').parent().find('input[name="discord-required"]').val(0);
                notification('error', 'You need to be a Premium Subscriber to modify this setting');
            }


        });

        MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').on('click', function (evt) {

            evt.preventDefault();


            var current = parseInt(MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').parent().find('input[name="auto-accept"]').val());

            if (current) {

                MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').parent().find('input[name="auto-accept"]').val(0);

            }
            else {

                MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').removeClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').addClass('selected');
                MODAL.elem.container.find('.input-checkbox[data-name="auto-accept"]').parent().find('input[name="auto-accept"]').val(1);
            }

        });

        MODAL.elem.container.find('input[type="range"][name="brush"]').on('input', function (evt) {

            evt.preventDefault();

            var current = parseInt(MODAL.elem.container.find('input[type="range"][name="brush"]').val());

            MODAL.elem.container.find('.brush-size').text(current + ' x ' + current);

        });

        $('#tools').find('input[type="range"][name="tool-brush"]').on('input', function (evt) {

            evt.preventDefault();

            var current = parseInt($('#tools').find('input[type="range"][name="tool-brush"]').val());


            if (PAINTING.mode === 0) {

                PAINTING.brush.size = CONFIG.painting.brush.size;
                $('#tools').find('input[type="range"][name="tool-brush"]').val(PAINTING.brush.size);
                $('#tools').find('.size-preview').text(PAINTING.brush.size);
                notification('error', 'You can\'t change the brush size in player mode, please use others modes for this', '');

            }
            else if (PAINTING.mode === 4 && current > 10 && !CONFIG.user.isStaff) {

                PAINTING.brush.size = 25;
                $('#tools').find('input[type="range"][name="tool-brush"]').val(PAINTING.brush.size);
                $('#tools').find('.size-preview').text(PAINTING.brush.size);
                notification('error', '25px is the max size for this mode', '');

            }
            else {

                PAINTING.brush.size = current;

                $('#tools').find('.size-preview').text(current);
            }

        });

        $('#tools').find('input[type="range"][name="tool-brush"]').val(PAINTING.brush.size);
        $('#tools').find('.size-preview').text(PAINTING.brush.size);


        $('#tools').find('input[type="checkbox"][name="checkbox-protection-bg"]').on('input', function (evt) {

            if ($('#tools').find('input[type="checkbox"][name="checkbox-protection-bg"]').prop("checked") == true) {
                PAINTING.protectionWithBG = true;
            }
            else {
                PAINTING.protectionWithBG = false;
            }
        });


        var alertDismissed1 = false;
        var alertDismissed2 = false;
        var alertDismissed3 = false;
        var alertDismissed4 = false;
        $('#tools').find('input[type="radio"][name="radio-protection-tool"]').on('input', function (evt) {

            evt.preventDefault();

            var current = parseInt($('#tools').find('input[type="radio"][name="radio-protection-tool"]:checked').val());

            if (current === 0) {
                fillingBot = false;

                PAINTING.mode = 0;
                PAINTING.brush.size = CONFIG.painting.brush.size;
                $('#tools').find('input[type="range"][name="tool-brush"]').val(PAINTING.brush.size);
                $('#tools').find('.size-preview').text(PAINTING.brush.size);

                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');

            }
            else if (current === 1) {

                fillingBot = false;
                PAINTING.mode = 1;
                ELEM.cursor.css('width', 'auto');
                ELEM.cursor.css('max-width', '200px');
                ELEM.cursor.css('height', 'auto');
                ELEM.cursor.css('padding', '10px');
                ELEM.cursor.text('PROTECTING');


                if (!alertDismissed1) {

                    alert('This tool allow you to protect pixels. Choose a color (doesn\'t matter which one) and start to paint over areas you want to protect.');
                    alert('IMPORTANT: Changes are NOT instant, this will take up to 5 min before they are applied by the server. You will get a notification when it\'s done.');
                    alertDismissed1 = true;

                }

            }
            else if (current === 2) {

                fillingBot = false;
                PAINTING.mode = 2;
                ELEM.cursor.css('width', 'auto');
                ELEM.cursor.css('max-width', '200px');
                ELEM.cursor.css('height', 'auto');
                ELEM.cursor.css('padding', '10px');
                ELEM.cursor.text('UN-PROTECTING');
                if (!alertDismissed2) {
                    alert('This tool allow you to un-protect pixels. Choose a color (doesn\'t matter which one) and start to paint over areas you want to un-protect.');
                    alert('IMPORTANT: Changes are NOT instant, this will take up to 5 min before they are applied by the server. You will get a notification when it\'s done.');
                    alertDismissed2 = true;
                }

            }
            else if (current === 3) {

                fillingBot = false;
                PAINTING.mode = 3;
                ELEM.cursor.css('width', 'auto');
                ELEM.cursor.css('max-width', '200px');
                ELEM.cursor.css('height', 'auto');
                ELEM.cursor.css('padding', '10px');
                ELEM.cursor.text('REPLACING');
                if (!alertDismissed3) {
                    alert('This tool allow you to replace any pixels (protected or not, be careful!) by the selected color.');
                    alert('IMPORTANT: Changes are applied instantly for this tool');
                    alertDismissed3 = true;
                }
            }
            else if (current === 4) {

                fillingBot = false;
                PAINTING.mode = 4;
                PAINTING.brush.size = CONFIG.painting.brush.size;
                $('#tools').find('input[type="range"][name="tool-brush"]').val(PAINTING.brush.size);
                $('#tools').find('.size-preview').text(PAINTING.brush.size);

                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');
            }
        });

        var protectionToolDisplayed = false;
        $('a[data-id="painting-owner-tools"]').on('click', function (e) {

            e.preventDefault();

            if (!protectionToolDisplayed) {
                protectionToolDisplayed = true;
                $('#tools').css('top', (parseInt($('[data-id="painting-owner-tools"]').offset().top)) + 'px');
                $('#tools').show();
            }
            else {
                protectionToolDisplayed = false;
                fillingBot = false;

                PAINTING.mode = 0;
                PAINTING.brush.size = CONFIG.painting.brush.size;
                $('#tools').find('input[type="range"][name="tool-brush"]').val(PAINTING.brush.size);
                $('#tools').find('.size-preview').text(PAINTING.brush.size);

                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');
                $('#tools').hide();
            }
        });

        var socialDisplayed = false;

        function openSocial(tab, open) {


            if (!socialDisplayed || open) {

                socialDisplayed = tab;

                if (!open && CONFIG.user.settings.chat.invisible && tab === 'friends') {

                    tab = 'guild';
                }


                if (tab === 'friends') {

                    if (open && CONFIG.user.settings.chat.invisible) {

                        notification('error', 'Social features', 'Please disable Invisible mode in Chat settings to access social features');
                        MODAL.openModal('main', 'tools');
                    }
                    else {
                        PAINTING.loadFriends();
                        $('#social').find('.tabs-list a').removeClass('active');
                        $('#social').find('.tabs-list a[data-id="' + tab + '"]').addClass('active');
                        $('#social').find('button.btn-guild-list').hide();
                        $('#social').find('button.btn-guild-requests').hide();
                        $('#social').find('button.btn-add-blocked').hide();
                        $('#social').find('button.btn-add-friend').show();

                        $('#social').show();
                    }
                }
                else if (tab === 'guild') {

                    PAINTING.loadGuildMembers(true);
                    $('#social').find('.tabs-list a').removeClass('active');
                    $('#social').find('.tabs-list a[data-id="' + tab + '"]').addClass('active');
                    $('#social').find('button.btn-guild-list').hide();

                    if (CONFIG.user.guild) {
                        $('#social').find('button.btn-guild-requests').show();
                    }
                    else {
                        $('#social').find('button.btn-guild-requests').hide();
                    }

                    $('#social').find('button.btn-add-friend').hide();
                    $('#social').find('button.btn-add-blocked').hide();

                    $('#social').show();


                }
                else if (tab === 'guild-requests') {

                    PAINTING.loadGuildMembersRequests(true);
                    $('#social').find('.tabs-list a').removeClass('active');
                    $('#social').find('.tabs-list a[data-id="' + tab + '"]').addClass('active');
                    $('#social').find('button.btn-guild-list').show();
                    $('#social').find('button.btn-guild-requests').hide();
                    $('#social').find('button.btn-add-friend').hide();
                    $('#social').find('button.btn-add-blocked').hide();

                    $('#social').show();


                }
                else if (tab === 'blocked') {

                    PAINTING.loadBlocked();
                    $('#social').find('.tabs-list a').removeClass('active');
                    $('#social').find('.tabs-list a[data-id="' + tab + '"]').addClass('active');
                    $('#social').find('button.btn-guild-list').hide();
                    $('#social').find('button.btn-guild-requests').hide();
                    $('#social').find('button.btn-add-friend').hide();
                    $('#social').find('button.btn-add-blocked').show();

                    $('#social').show();
                }

            }
            else {
                closeSocial();
            }


        }

        $('#social .tabs-list a').on('click', function (e) {

            e.preventDefault();
            openSocial($(this).attr('data-id'), true);
        });

        function closeSocial() {

            if (socialDisplayed) {
                socialDisplayed = false;
                $('#social').hide();
            }
        }

        $('a[data-id="social"]').on('click', function (e) {

            e.preventDefault();

            var tab = $(this).attr('data-tab');

            openSocial(tab);
        });

        $('a[data-id="bio-edit"]').on('click', function (e) {

            e.preventDefault();

            var params = {
                bio: ''
            }

            var bio = prompt('Enter a bio (max 255 characters)');

            if (bio !== null) {

                params.bio = bio;

                XX.xhr.req('POST', '/api/post-bio.php', params, true, function (success, data) {


                    if (success) {

                        if (data.bio) {
                            $('#profile .bio span').text(data.bio);
                            $('#profile .bio span').show();
                        }
                        else {
                            $('#profile .bio span').text('');
                            $('#profile .bio span').hide();
                        }

                        notification('success', 'Success', 'Bio saved!');

                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });
            }
        });


        $('.btn-add-friend-data').on('click', function (e) {

            e.preventDefault();

            if (CONFIG.user.settings.chat.invisible) {

                notification('error', 'Social features', 'Please disable Invisible mode in Chat settings to access social features');
                MODAL.openModal('main', 'tools');
            }
            else {
                var params = {
                    username: $(this).attr('data-username')
                }

                XX.xhr.req('POST', '/api/post-friend.php', params, true, function (success, data) {

                    if (success) {

                        $('#profile').hide();
                        PAINTING.loadFriends(true);
                        if (data.changed) {
                            notification('success', 'Player followed', 'Player added to your list');
                        }

                    }
                    else {

                        notification('error', 'Error', data.message);


                    }
                });
            }


        });


        $('.edit-user-avatar').on('click', function (e) {

            e.preventDefault();

            var params = {
                avatar: true
            }

            XX.xhr.req('POST', '/api/post-user-avatar.php', params, true, function (success, data) {

                if (success) {

                    window.location.replace('/' + data.id);
                }
                else {
                    notification('error', 'Error', data.message);
                }
            });
        });


        $('.edit-guild-emblem').on('click', function (e) {

            e.preventDefault();

            var params = {
                tag: $(this).attr('data-tag')
            }

            XX.xhr.req('POST', '/api/post-guild-avatar.php', params, true, function (success, data) {

                if (success) {

                    window.location.replace('/' + data.id);
                }
                else {
                    notification('error', 'Error', data.message);
                }
            });
        });


        $('.buy-coins-btn').on('click', function (e) {
            e.preventDefault();

            var dataPlan = $(this).attr('data-index');

            var buttonId = '8JAKBUZ7NHZ2E';
            if (dataPlan == 4) {
                STRIPE_PRICE_INDEX = 4;
                buttonId = '8JAKBUZ7NHZ2E';
            }
            else if (dataPlan == 5) {
                STRIPE_PRICE_INDEX = 5;
                buttonId = '5HM2P2XGFBGLE';
            }
            else if (dataPlan == 6) {
                STRIPE_PRICE_INDEX = 6;
                buttonId = 'CSGAAC69LNPJ4';
            }
            else if (dataPlan == 7) {
                STRIPE_PRICE_INDEX = 7;
                buttonId = 'DFFB52YXCB75N';
            }
            else if (dataPlan == 8) {
                STRIPE_PRICE_INDEX = 8;
                buttonId = 'C3DSZQXCF95UG';
            }

            $('#paypal input[name="hosted_button_id"]').val(buttonId);
        });

        $(document).on('click', '.premium-subscribed, .premium-subscribed-alt', function (e) {
            e.preventDefault();

            if ($(this).hasClass('premium-subscribed-alt')) {

            }
            else {

                XX.xhr.req('GET', '/api/manage-premium.php', {}, true, function (success, data) {

                    if (success) {


                        if (confirm(data.message)) {

                            if (data.url != '') {
                                window.location.replace(data.url);
                            }
                        }

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            }


        });

        $('.plan-block').on('click', function (e) {
            e.preventDefault();

            var dataPlan = $(this).attr('data-plan');

            var buttonId = 'BVM3SYUCYYNPY';
            if (dataPlan == 1) {
                buttonId = 'UA4Z3S492MDRA';
                STRIPE_PRICE_INDEX = 1;
            }
            else if (dataPlan == 2) {
                buttonId = 'BVM3SYUCYYNPY';
                STRIPE_PRICE_INDEX = 2;
            }
            else if (dataPlan == 3) {
                buttonId = 'H4JQFTZ3CTQEJ';
                STRIPE_PRICE_INDEX = 3;
            }

            $('#paypal input[name="hosted_button_id"]').val(buttonId);
            $('.plan-selected').removeClass('plan-selected');
            $(this).addClass('plan-selected');
        });

        $('.premium-subscribe, .premium-subscribe-alt').on('click', function (e) {
            e.preventDefault();

            $('.prem-box .prem-desc').hide();
            $('.prem-box .prem-checkout').show();
        });

        $('.cancel-premium-subscribe').on('click', function (e) {
            e.preventDefault();

            $('.prem-box .prem-desc').show();
            $('.prem-box .prem-checkout').hide();
        });


        $('.get-more-coins').on('click', function (e) {
            e.preventDefault();

            $('#item').hide();

            MODAL.closeModal();
            MODAL.openModal('main', 'shop');

            setTimeout(function () {
                MODAL.activeContent[0].scrollTop = MODAL.activeContent[0].scrollHeight;
            }, 500);
        });


        $(document).on('click', '#item .item-lower-quantity, #item .item-add-quantity', function (evt) {

            evt.preventDefault();
            var itemId = parseInt($('#item').attr('data-item'));
            var quantity = parseInt($('#item input[name="quantity"]').val());
            if (!isNaN(quantity)) {
                if ($(this).hasClass('item-lower-quantity')) {
                    quantity--;
                }
                else {
                    quantity++;
                }

                if (quantity < 1) {
                    quantity = 1;
                }
                $('#item input[name="quantity"]').val(quantity);
                $('#item .checkout-item span').text(quantity * CONFIG.shop.items[itemId].price);
            }
        });

        $(document).on('input', '#item input[name="quantity"]', function (evt) {

            evt.preventDefault();

            var itemId = parseInt($('#item').attr('data-item'));
            var quantity = parseInt($('#item input[name="quantity"]').val());
            if (!isNaN(quantity)) {
                $('#item .checkout-item span').text(quantity * CONFIG.shop.items[itemId].price);
            }
        });

        $(document).on('submit', '#paypal, .paypal-from', function (evt) {

            if (!CONFIG.user.connected) {
                evt.preventDefault();
                MODAL.openModal('auth', 'login');
            }
        });

        $(document).on('click', '#paypal input[type="submit"], .paypal-from input[type="submit"]', function (evt) {

            if (!CONFIG.user.connected) {
                evt.preventDefault();
                MODAL.openModal('auth', 'login');
            }
        });

        $(document).on('click', '.checkout-item', function (evt) {

            evt.preventDefault();

            var params = {
                buy: true,
                item: parseInt($('#item').attr('data-item')),
                quantity: parseInt($('#item input[name="quantity"]').val())
            };

            if (confirm('Buy ' + params.quantity + ' unit' + (params.quantity > 1 ? 's' : '') + ' of this item?')) {

                $('#item .box-content-x > div').hide();
                $('#item .box-content-x > .loading').show();


                XX.xhr.req('POST', '/api/post-shop.php', params, true, function (success, data) {

                    $('#item .box-content-x > div').show();
                    $('#item .box-content-x > .loading').hide();

                    if (success) {

                        CONFIG.user.ppcoins = parseInt(data.ppcoins);
                        $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));

                        //CONFIG.user.ppcoins -= params.quantity * CONFIG.shop.items[params.item].price;

                        //$('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));


                        PAINTING.loadUserItems();

                        notification('success', 'Success!', 'Item' + (params.quantity > 1 ? 's' : '') + ' added to your inventory');
                    }
                    else {
                        $('#item').hide();
                        notification('error', 'Error', data.message);
                    }
                });
            }
        });


        $(document).on('click', '.how-to-item', function (evt) {

            evt.preventDefault();

            var itemId = parseInt($(this).attr('data-item'));

            if (CONFIG.shop.items[itemId].type === 1) {
                MODAL.closeModal();
                setTimeout(function () {
                    loadWeapons();
                }, 500);
            }
            else {

                if (confirm('Would you like to apply [' + CONFIG.shop.items[itemId].name + '] on your account? This action can\'t be undone and the item will be consumed')) {


                    PAINTING.useItem(itemId);

                }
            }
        });

        $(document).on('click', '.gift-item', function (evt) {

            evt.preventDefault();

            var username = prompt('Please enter the username of the player you wish to gift 1 unit of this item. The player will receive a notification');
            if (username !== null) {

                var params = {
                    gift: true,
                    username: username,
                    item: parseInt($(this).attr('data-item'))
                };

                XX.xhr.req('POST', '/api/post-shop.php', params, true, function (success, data) {

                    if (success) {

                        CHAT.switchChannel('global');

                        setTimeout(function () {
                            PAINTING.loadUserItems();
                        }, 1500);


                        notification('success', 'Success!', 'Gift sent <3');

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            }
        });


        var DROPDOWN_OPENED = false;
        $(document).on('click', '.shop-dropdown', function (evt) {

            evt.preventDefault();
            loadWeapons();

        });

        function loadWeapons() {

            PAINTING.loadUserItems();

            if (DROPDOWN_OPENED) {
                DROPDOWN_OPENED = false;

                $('#items-list').hide();
                ITEM_SELECTED = null;
                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');
                $('.select-item-to-use').removeClass('active');

            }
            else {
                DROPDOWN_OPENED = true;
                $('#items-list').css('top', (parseInt($('.shop-dropdown').offset().top)) + 'px');
                $('#items-list').show();
            }
        }


        $(document).on('click', '.select-item-to-use', function (evt) {

            evt.preventDefault();

            var itemId = parseInt($(this).attr('data-item'));

            if (ITEM_SELECTED === itemId) {
                ITEM_SELECTED = null;
                $('.select-item-to-use').removeClass('active');
                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');
                PAINTING.brush.size = 1;
            }
            else {


                if (CURSOR.touchDevice) {

                    $('#mobilebomb').show();
                }
                else {

                    if (!localStorage.getItem('alert-item')) {

                        alert('You just selected an item. The next LEFT click you do on the painting will use 1 unit of this item. Be carefull we won\'t be able to refund any miss click. This message won\'t show again.');

                        localStorage.setItem('alert-item', true);
                    }
                }

                if (CURSOR.touchDevice) {
                    DROPDOWN_OPENED = false;
                    $('.select-item-to-use').removeClass('active');
                    $('#items-list').hide();
                }

                ITEM_SELECTED = itemId;
                $('.select-item-to-use').removeClass('active');
                $(this).addClass('active');
                ELEM.cursor.css('width', 'auto');
                ELEM.cursor.css('max-width', '200px');
                ELEM.cursor.css('height', 'auto');
                ELEM.cursor.css('padding', '10px');

                var ext = 'png';
                if (parseInt(itemId) === 6 || parseInt(itemId) === 10 || parseInt(itemId) === 12) {
                    ext = 'gif';
                }

                ELEM.cursor.html('<div class="text-center"><img src="/img/item-' + itemId + '.' + ext + '?v=4" class="pixelate cursor-item"><br/>' + CONFIG.shop.items[itemId].name + '</div>');
            }

        });


        $(document).on('click', '.open-item', function (evt) {

            evt.preventDefault();

            var itemId = parseInt($(this).attr('data-item'));
            $('#item').find('.text .stock').html('<b>Stock:</b> <i>Loading...</i>');
            XX.xhr.req('GET', '/api/get-item.php', {itemId: itemId}, true, function (success, data) {

                if (success) {

                    var stockLeft = data.stock;
                    if (parseInt(data.stock) >= 999) {
                        stockLeft = '+999'
                    }

                    if (parseInt(data.updated_price) > 0) {
                        $('#item').find('.checkout-item span').text(data.updated_price);
                    }



                    if (parseInt(data.stock) <= 0) {
                        $('#item').find('.text .stock').html('<b>Stock:</b> <b class="red">OUT OF STOCK</b>');
                    }
                    else {
                        $('#item').find('.text .stock').html('<b>Stock:</b> <b class="green">' + stockLeft + ' left</b>');
                    }
                }
            });

            $('#profile').hide();
            $('#guild').hide();

            $('#item .box-x').show();

            if (ITEM_SELECTED !== null) {
                ITEM_SELECTED = null;
                $('.select-item-to-use').removeClass('active');
                ELEM.cursor.css('width', '26px');
                ELEM.cursor.css('height', '26px');
                ELEM.cursor.css('padding', '0px');
                ELEM.cursor.text('');
            }


            $('#item').attr('data-item', itemId);

            var pixelate = 'pixelate';
            var demo = true;
            if (itemId === 4 || itemId === 5 || itemId === 6 || itemId === 11 || itemId === 10 || itemId === 12) {
                pixelate = '';
                demo = false;
            }

            if (itemId === 9) {
                demo = false;
            }

            var ext = 'png';
            var bg = '';
            if (parseInt(itemId) === 6 || parseInt(itemId) === 10 || parseInt(itemId) === 12) {
                ext = 'gif';
                bg = 'bg-white';
            }


            $('#item').find('.img').html('<img src="/img/item-' + itemId + '.' + ext + '?v=4" alt="icon" class="' + pixelate + '">');
            $('#item').find('.text h1').text(CONFIG.shop.items[itemId].name);
            $('#item').find('.text .description').text(CONFIG.shop.items[itemId].description);



            $('#item').find('.text .size').html('<b>Size:</b> ' + (CONFIG.shop.items[itemId].radius) + 'x' + (CONFIG.shop.items[itemId].radius) + ' pixels');


            if (itemId === 4 || itemId === 5 || itemId === 6 || itemId === 10 || itemId === 12 || itemId === 11 || itemId === 9) {
                $('#item').find('.text .size').hide();
            }
            else {
                $('#item').find('.text .size').show();
            }

            $('#item .checkout-item').html('<div class="buy">BUY NOW</div> <span>' + CONFIG.shop.items[itemId].price + '</span><div class="pp-coin-1"><img src="img/pp-coin-pause.gif" width="26"></div>');
            $('#item .checkout-item span').text(CONFIG.shop.items[itemId].price);
            $('#item input[name="quantity"]').val(1);

            if (demo) {
                $('#item .demo').show();
            }
            else {
                $('#item .demo').hide();
            }


            $('#item .box-content-x > div').show();
            $('#item .box-content-x > .loading').hide();
            $('#item').show();
        });


        $(document).on('click', '.followers', function (evt) {

            evt.preventDefault();

            $('.followers-list').text('Loading...').show();

            var params = {
                username:$(this).attr('data-username')
            }

            XX.xhr.req('GET', '/api/get-user-followers.php', params, true, function (success, data) {

                if (success) {

                    $('.followers-list').html('');

                    for(var k in data) {

                        $('.followers-list').append('<a href="#" class="open-profile" data-profile="'+data[k].username+'">'+data[k].username+'</a> ');
                    }

                }
            });


        });


        $('#item .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#item').hide();
        });

        $('#item').on('click', function (evt) {


            if ($(evt.target).attr('id') === 'item') {
                evt.preventDefault();
                $('#item').hide();
            }
        });


        $(document).on('click', '.open-checkout-method', function (evt) {

            evt.preventDefault();


            $('#checkout-method .box-x').show();
            $('#checkout-method .box-content-x > div').show();
            $('#checkout-method').show();

        });

        $('#checkout-method .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#checkout-method').hide();
        });

        $('#checkout-method').on('click', function (evt) {

            if ($(evt.target).attr('id') === 'checkout-method') {
                evt.preventDefault();
                $('#checkout-method').hide();
            }
        });


        var SLOT_SPINNING = false;
        $(document).on('click', '#slot .overlay', function (e) {

            e.preventDefault();

            if (!SLOT_SPINNING) {

                SLOT_SPINNING = true;

                $('#slot .overlay').removeClass('disabled').addClass('disabled').show();

                setTimeout(function () {
                    $('#slot .overlay').text('Loading..');
                }, 1000);


                setTimeout(function () {

                    XX.xhr.req('POST', '/api/post-dailylootv3.php', {spin: true}, true, function (success, data) {

                        if (success) {

                            $('#slot .overlay').hide();
                            $('#slot .overlay-bg').hide();

                            var reelWidth = parseInt($('#slot .reel img').length * $('#slot .reel img').width());
                            $('#slot .reel').css('width', reelWidth + 'px');

                            var stopOffset = (data.result + (reelWidth - ($('#slot .reel img').width() * 3))); //250 = milieu du 1 er item, 350 = 2 eme item, 450 = 3eme item, 50 = 4eme item

                            //data.result:
                            //0 = item1 (missile)
                            //100 = 100
                            //200 = item7 (guild bomb)
                            //300 = 1
                            //400 = item2 (bomb)
                            //500 = 10
                            //600 = item3 (atomic bomb)
                            //700 = 50
                            //800 = 3
                            //900 = 5



                            $("#slot .reel").animate({
                                left: '-=' + stopOffset,
                            }, {easing: 'easeOutCirc', duration: 3500}, function () {
                            });

                            setTimeout(function () {



                                CONFIG.user.ppcoins = parseInt(data.ppcoins);
                                $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));

                                if(parseInt(data.snowballs) > 0) {
                                    data.label +=  ' and '+data.snowballs+' snowballs';
                                }

                                notification('success', 'Daily Loot', data.label);

                                SLOT_SPINNING = false;

                            }, 3500);

                        }
                        else {

                            SLOT_SPINNING = false;
                            $('#slot .overlay').removeClass('disabled').text('OPEN').show();
                            $('#slot .overlay-bg').show();
                            notification('error', 'Error', data.message);
                        }
                    });


                }, 10);
            }
        });


        $('.odds').on('click', function(e){

            e.preventDefault();

            alert("Everyday, you have a chance to earn one of the following daily reward:" +
                "\n"+
                "3 coins - 26.82%"+
                "\n"+
                "5 coins - 25.17%"+
                "\n"+
                "10 coins - 22.12%"+
                "\n"+
                "Missile - 7.35%"+
                "\n"+
                "Gold ore (8 to 16) - 6.00%"+
                "\n"+
                "Bomb - 4.24%"+
                "\n"+
                "30 coins - 3.15%"+
                "\n"+
                "Atomic bomb - 2.61%"+
                "\n"+
                "50 coins - 1.56%"+
                "\n"+
                "100 coins - 0.98%"
            );
        });

        function openSpinModal() {
            $('#profile').hide();
            $('#guild').hide();
            $('#item').hide();
            $('#coin-island').hide();
            $('#daily-reward .box-content-x > div').hide();
            $('#daily-reward .box-x').show();
            $('#daily-reward').show();
            $('#daily-reward .box-content-x > div').show();
            $('#daily-reward .box-content-x > .loading').hide();

            if (CONFIG.user.event === 1) {
                $('#daily-reward .overlay').removeClass('backgroundRainbow').addClass('backgroundRainbow');
                $('#daily-reward .reel-container').removeClass('borderRainbow').addClass('borderRainbow');
                $('#daily-reward .line').removeClass('backgroundRainbow').addClass('backgroundRainbow');
                $('#daily-reward .reel img').attr('src', '/img/lootbox-event-1.png');
            }

            $('#slot .overlay').removeClass('disabled').text('OPEN').show();
            $('#slot .overlay-bg').show();

        }

        var WHEEL_SPINNING = false;
        $('.wheel-container .spin').on('click', function (e) {

            e.preventDefault();

            if (!WHEEL_SPINNING) {

                WHEEL_SPINNING = true;

                setTimeout(function () {

                    XX.xhr.req('POST', '/api/post-dailyreward.php', {spin: true}, true, function (success, data) {

                        if (success) {


                            $('.wheel-container .inner-wheel').addClass('no-transition');

                            $('.wheel-container .inner-wheel').css({
                                'transform': 'rotate(0deg)'
                            });

                            $('.wheel-container .spin').addClass('disabled');


                            var result = data.result;

                            $('.wheel-container .inner-wheel').removeClass('no-transition');
                            $('.wheel-container .inner-wheel').removeClass('no-transition');

                            var totalDegree = (result * 30) + (360 * 12);

                            $('.wheel-container .wheel .sec').each(function () {

                                $('.wheel-container .inner-wheel').css({
                                    'transform': 'rotate(' + totalDegree + 'deg)'
                                });
                            });


                            setTimeout(function () {

                                CONFIG.user.ppcoins = parseInt(data.ppcoins);
                                $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));

                                notification('success', 'Daily Spin', data.label);

                                /* setTimeout(function () {
                                    window.location.reload();
                                }, 4000);*/

                                WHEEL_SPINNING = false;
                            }, 5000);

                        }
                        else {

                            WHEEL_SPINNING = false;
                            $('.wheel-container .spin').removeClass('disabled');
                            notification('error', 'Error', data.message);
                        }
                    });


                }, 100);
            }
        });

        $('#daily-reward .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#daily-reward').hide();
        });

        $('#daily-reward').on('click', function (evt) {


            if ($(evt.target).attr('id') === 'daily-reward') {
                evt.preventDefault();
                $('#daily-reward').hide();
            }
        });


        var timeOutProtection = null;

        function openCoinIslandModal(islandId) {

            $('#profile').hide();
            $('#guild').hide();
            $('#item').hide();

            $('#coin-island .box-content-x > div').hide();
            $('#coin-island .box-x').show();
            $('#coin-island .box-content-x > .loading').show();
            $('#coin-island').show();

            XX.xhr.req('GET', '/api/get-coin-island.php', {island: islandId}, true, function (success, data) {

                if (success) {

                    if (data.currentOwner.isOwner) {

                    }
                    else {

                    }

                    $('#coin-island .head .owner a').attr('data-profile', data.currentOwner.username);
                    $('#coin-island .head .owner a').html('' + data.currentOwner.username);


                    $('#coin-island .current-coins > span').text(data.currentOwner.coinsToClaim);
                    $('#coin-island .current-coins .coins-rate span').text(data.currentOwner.coinsPerHour);
                    $('#coin-island .bonus > span').text(data.currentOwner.goalsList[data.currentOwner.currentGoalIdReached]);

                    if (data.currentOwner.nextGoalId) {
                        $('#coin-island .next-bonus .coins').text(data.currentOwner.goalsList[data.currentOwner.nextGoalId]);
                        $('#coin-island .next-bonus .next-bonus-time').text(data.currentOwner.nextBonusTimeLeft + ' hour' + (data.currentOwner.nextBonusTimeLeft != 1 ? 's' : ''));
                        $('#coin-island .next-bonus').css('display', 'block');

                    }
                    else {
                        $('#coin-island .next-bonus').css('display', 'none');

                    }

                    $('#submit-attack-coinisland').html('SEND TROOPS & GET OWNERSHIP<div class="coin-line"><div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="26"></div> <span class="price">' + data.price + '</span><div class="timeleft"></div></div>');

                    $('#submit-attack-coinisland').attr('data-island', islandId);
                    $('#submit-claim-coinisland-coins').attr('data-island', islandId);

                    for (var k in data.currentOwner.goalsList) {

                        $('#coin-island .goal-' + k).text(data.currentOwner.goalsList[k]);
                    }

                    $('#submit-attack-coinisland').attr('data-price', data.price);

                    if (islandId === 0) {
                        $('.coinisland-title').text('Welcome to Coin Island!');
                    }
                    else if (islandId === 1) {
                        $('.coinisland-title').text('Welcome to Tiny Coin Island #1');
                    }
                    else if (islandId === 2) {
                        $('.coinisland-title').text('Welcome to Tiny Coin Island #2');
                    }
                    else if (islandId === 3) {
                        $('.coinisland-title').text('Welcome to Tiny Coin Island #3');
                    }

                    if (parseInt(data.currentOwner.protection) > 0) {
                        $('#submit-attack-coinisland').attr('disabled');
                        $('#submit-attack-coinisland').addClass('disabled');
                        $('#submit-attack-coinisland .timeleft').text('' + data.currentOwner.protection + ' minute' + (data.currentOwner.protection != 1 ? 's' : '') + ' of island protection left').show();

                        clearTimeout(timeOutProtection);
                        timeOutProtection = setTimeout(function () {


                            if ($('#coin-island').css('display') !== 'none') {
                                openCoinIslandModal(0);
                            }

                        }, (data.currentOwner.protection * 60) + '000');
                    }
                    else {
                        $('#submit-attack-coinisland').removeAttr('disabled');
                        $('#submit-attack-coinisland').removeClass('disabled');
                        $('#submit-attack-coinisland .timeleft').hide();
                    }


                    /*   if(data.discount) {
                           $('#coin-island .coin-line .discount').html('Instead of<br/>'+data.discount).show();
                       }
                       else {
                           $('#coin-island .coin-line .discount').hide();
                       }
   */

                    var stripped = 'class=""';
                    var html = '<tr><td>Player</td><td>Owned on</td><td>Duration</td><td class="text-right">Price</td><td class="text-right">Claimed</td><td class="text-right">Lost</td></tr>';
                    for (var k in data.pastOwners) {

                        var lost = '' + data.pastOwners[k].unclaimed_coins;
                        if (parseInt(k) === 0) {
                            stripped = 'class="stripped-2"';
                            var hoursDuration = data.pastOwners[k].duration + ' hour' + (data.pastOwners[k].duration != 1 ? 's' : '');
                            lost = '';
                        }
                        else {
                            var hoursDuration = data.pastOwners[k].duration + ' hour' + (data.pastOwners[k].duration != 1 ? 's' : '');
                        }


                        html += '<tr ' + stripped + '><td><a href="#" class="open-profile" data-profile="' + data.pastOwners[k].username + '">' + data.pastOwners[k].username + '</a></td><td>' + new Date(parseInt(data.pastOwners[k].started_at) * 1000).toLocaleDateString([], {hour: '2-digit', minute: '2-digit'}) + '</td><td>' + hoursDuration + '</td><td class="text-right">' + data.pastOwners[k].price + '</td><td class="text-right">' + data.pastOwners[k].claimed_coins + '</td><td class="text-right">' + lost + '</td></tr>';

                        if (stripped === '') {
                            stripped = 'class="stripped"';
                        }
                        else {
                            stripped = '';
                        }


                    }
                    $('#coin-island .past-owners table').html(html);

                    $('#coin-island .box-content-x > div').show();
                    $('#coin-island .box-content-x > .loading').hide();


                }
            });

        }


        $(document).on('click', '.open-coin-island', function (evt) {

            evt.preventDefault();


            var islandId = 0;


            if ($(this).attr('id') === 'coin-island-owner-1') {
                islandId = 1;
            }
            else if ($(this).attr('id') === 'coin-island-owner-2') {
                islandId = 2;
            }
            else if ($(this).attr('id') === 'coin-island-owner-3') {
                islandId = 3;
            }

            openCoinIslandModal(islandId);
        });


        $('#coin-island .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#coin-island').hide();
        });

        /* $('#coin-island').on('pointerdown', function (evt) {


             if ($(evt.target).attr('id') === 'coin-island') {
                 evt.preventDefault();
                 $('#coin-island').hide();
             }
         });*/



        function updateItemsGoldUpgrade(currentLevel) {

            $('#gold-rush .gold-upgrade .gold-items img').attr('src', '/img/gold-tools-' + currentLevel + '.png');

            if (GOLD_ITEMS_UPGRADES_PRICES[parseInt(currentLevel) + 1] !== undefined) {

                var plur = (GOLD_ITEMS_UPGRADES_PRICES[parseInt(currentLevel) + 1] === 1 ? '' : 's');
                $('#gold-rush .gold-upgrade .bar-text').text('Upgrade to lvl. ' + (parseInt(currentLevel) + 1));
                $('#gold-rush .upgrade-gold').text(GOLD_ITEMS_UPGRADES_PRICES[parseInt(currentLevel) + 1] + ' x Gold Bar' + plur).removeClass('disabled');
            }
            else {
                $('#gold-rush .gold-upgrade .bar-text').text('Mining Tools');
                $('#gold-rush .upgrade-gold').text('Max level reached').removeClass('disabled').addClass('disabled');
            }
        }


        function updateDynamiteGoldUpgrade(currentLevel) {

            $('#gold-rush .gold-upgrade-dynamite .gold-dynamite img').attr('src', '/img/gold-bomb-' + currentLevel + '.png?v=1');

            if (GOLD_DYNAMITE_UPGRADES_PRICES[parseInt(currentLevel) + 1] !== undefined) {

                $('#gold-rush .gold-upgrade-dynamite .bar-text').text('Upgrade to lvl. ' + (parseInt(currentLevel) + 1));
                $('#gold-rush .upgrade-gold-dynamite').html(GOLD_DYNAMITE_UPGRADES_PRICES[parseInt(currentLevel) + 1] + '<span class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></span>' ).removeClass('disabled');
            }
            else {
                $('#gold-rush .gold-upgrade-dynamite .bar-text').text('Dynamite Power');
                $('#gold-rush .upgrade-gold-dynamite').text('Max level reached').removeClass('disabled').addClass('disabled');
            }
        }

        var GOLD_ITEMS_UPGRADES_PRICES = {}
        var GOLD_DYNAMITE_UPGRADES_PRICES = {}
        var GOLD_AH_FEE = 0;
        var GOLD_AH_MIN_PRICE = 0;

        var ah_tab = 'all';
        var ah_start = 0;
        function ahFetch(loadMore) {

            if(loadMore) {
                ah_start +=7;
            }
            else {
                ah_start = 0;
            }

            if(loadMore) {
                $('.ah_table tbody .ah-load-more').remove();
                $('.ah_table tbody').append('<tr class="ah-loading"><td colspan="4"><div class="loading-table tiny"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');
            }
            else {

                $('.ah_table tbody').html('<tr class="ah-loading"><td colspan="4"><div class="loading-table tiny"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');
            }

            XX.xhr.req('GET', '/api/get-gold-rush-island.php', {ah: true, tab:ah_tab, start:ah_start}, true, function (success, data) {

                $('.ah_table tbody .ah-loading').remove();

                if (success) {

                    if(ah_tab ==='my') {
                        $('.ah_table thead tr td').eq(2).text('Amount received (after AH cut)');
                    }
                    else {
                        $('.ah_table thead tr td').eq(2).text('Available at this price');
                    }

                    var html = '';
                    var stripped = 'stripped';
                    for(var k in data.auctions) {

                        var action = '<a href="#" class="btn ah-buy" data-price="'+data.auctions[k].price+'" data-total="'+(data.auctions[k].total?data.auctions[k].total:'0')+'">BUY</a>';
                        if(ah_tab ==='my') {

                            if(parseInt(data.auctions[k].status) === 2) {
                                stripped ='stripped2';
                                action = '<b>SOLD<b/>';
                                data.auctions[k].total = parseInt(data.auctions[k].price) - parseInt(data.auctions[k].sell_fee)+' <span class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></span>';
                            }
                            else {
                                action = '<a href="#" class="btn ah-cancel" data-id="'+data.auctions[k].id+'">CANCEL</a>';
                                data.auctions[k].total = '';
                            }
                        }


                        html += '<tr class="'+stripped+'"><td class="icn"><div class="g-tiny"><img src="img/gold-bar.png"></div></td><td class="text-right up">'+data.auctions[k].price+' <span class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></span></td><td>'+data.auctions[k].total+'</td><td>'+action+'</td></tr>';

                        if(stripped ==='') {
                            stripped = 'stripped';
                        }
                        else {
                            stripped = '';
                        }
                    }

                    if(data.more) {
                        html += '<tr class="ah-load-more"><td colspan="4"><a href="#" class="btn ah-more">Load more</a></td></tr>';
                    }

                    $('.ah_table tbody').append(html);
                }
                else {
                    notification('error', 'Error', data.message);
                }
            });

        }

        $(document).on('click', '.ah-more', function(e) {

            e.preventDefault();

            ahFetch(true);
        });

        $(document).on('click', '.ah-all', function(e) {

            e.preventDefault();

            ah_start = 0;
            ah_tab = 'all';

            $('.ah-all, .ah-my').removeClass('active');
            $('.ah-all').addClass('active');

            ahFetch();
        });

        $(document).on('click', '.ah-my', function(e) {

            e.preventDefault();

            ah_start = 0;
            ah_tab = 'my'

            $('.ah-all, .ah-my').removeClass('active');
            $('.ah-my').addClass('active');

            ahFetch();
        });

        function openGoldRushIslandModal() {

            $('#profile').hide();
            $('#guild').hide();
            $('#item').hide();
            $('#coin-island').hide();

            $('#gold-rush .box-content-x > div').hide();
            $('#gold-rush .box-x').show();
            $('#gold-rush .box-content-x > .loading').show();
            $('#gold-rush').show();


            $('.gold-prog .bar-progress .bar').removeClass('completed');
            $('.gold-prog .bar-progress .bar').css('width', '0%');

            XX.xhr.req('GET', '/api/get-gold-rush-island.php', {}, true, function (success, data) {

                if (success) {

                    GOLD_AH_FEE = parseInt(data.ah_fee);
                    GOLD_AH_MIN_PRICE = parseInt(data.ah_min_price);
                    GOLD_ITEMS_UPGRADES_PRICES = data.upgrades_price;
                    GOLD_DYNAMITE_UPGRADES_PRICES = data.dynamite_price;

                    $('[name="ah_sell"] [name="ah_sell_price"]').val(GOLD_AH_MIN_PRICE);
                    $('#gold-rush .ah_cut').text(data.ah_cut+'%');

                    var stripped = 'class="stripped"';
                    var i = 1;
                    var html = '<tr><td>#</td><td class="text-left">Player</td><td>Tools</td><td>Dynamite</td><td>Ores</td><td>Bars</td></tr>';
                    for (var k in data.top) {


                        var isgold = '';
                        if(i <= 5) {
                            isgold='bold';
                        }

                        html += '<tr ' + stripped + '><td class="'+isgold+'">' + i + '</td><td class="text-left '+isgold+'"><a href="#" class="open-profile" data-profile="' + data.top[k].username + '">' + data.top[k].username + '</a></td><td class="'+isgold+'">' + data.top[k].gold_mine_level + '</td><td class="'+isgold+'">' + data.top[k].gold_dynamite_level + '</td><td class="'+isgold+'">' + data.top[k].gold_ores + '</td><td class="'+isgold+'">' + data.top[k].gold_bars + '</td></tr>';



                        if (stripped === '') {
                            stripped = 'class="stripped"';
                        }
                        else {
                            stripped = '';
                        }
                        i++;

                    }


                    $('#gold-rush .top-gold table').html(html);

                    $('#gold-rush .box-content-x > div').show();
                    $('#gold-rush .box-content-x > .loading').hide();


                    $('#gold-rush .gold-bar-price').text(data.gold_bar_price);


                    if (data.user ) {
                        updateItemsGoldUpgrade(data.user.gold_mine_level);
                        updateDynamiteGoldUpgrade(data.user.gold_dynamite_level);
                    }


                    if (data.user && data.user.mineOnCD) {
                        $('#gold-rush .mine-gold').text('Come back tomorrow').removeClass('disabled').addClass('disabled');
                    }
                    else {
                        $('#gold-rush .mine-gold').text('Click to mine Gold ores').removeClass('disabled');
                    }

                    if (data.user && data.user.ppcoins) {

                        CONFIG.user.ppcoins = data.user.ppcoins;
                        $('.my-pp b').text(CONFIG.user.ppcoins);

                    }
                    else {
                        $('.my-pp b').text('');

                    }

                    if (data.user && data.user.gold_ores) {
                        $('#gold-rush .gold-ore-count').text(data.user.gold_ores);
                    }
                    else {
                        $('#gold-rush .gold-ore-count').text(0);
                    }

                    if (data.user && data.user.gold_mine_level) {
                        $('#gold-rush .gold-items-level').text(data.user.gold_mine_level);
                        $('#gold-rush .img-gold-tools-current').attr('src', '/img/gold-tools-'+ data.user.gold_mine_level+'.png');
                    }
                    else {
                        $('#gold-rush .gold-items-level').text(1);
                        $('#gold-rush .img-gold-tools-current').attr('src', 'img/gold-tools-1.png');
                    }

                    if (data.user && data.user.gold_dynamite_level) {
                        $('#gold-rush .gold-dynamite-level').text(data.user.gold_dynamite_level);
                        $('#gold-rush .img-gold-dynamite-current').attr('src', '/img/gold-bomb-'+ data.user.gold_dynamite_level+'.png?v=1');
                    }
                    else {
                        $('#gold-rush .gold-dynamite-level').text(1);
                        $('#gold-rush .img-gold-dynamite-current').attr('src', '/img/gold-bomb-1.png?v=1');
                    }

                    if (data.user && data.user.gold_bars) {
                        $('#gold-rush .gold-bar-count').text(data.user.gold_bars);
                    }
                    else {
                        $('#gold-rush .gold-bar-count').text(0);
                    }

                    ahFetch();
                    $('.ah-chart').html('<iframe src="/gold-chart.php"></iframe>');
                }
            });

        }
        //  openGoldRushIslandModal();

        var levelPerks = false;
        $(document).on('click', '.level-perks', function (evt) {

            evt.preventDefault();

            if(levelPerks) {
                levelPerks = false;
                $('.gold-odds').slideUp();
            }
            else {
                levelPerks = true;

                $('.gold-odds').slideDown();
            }

        });

        var levelPerksDynamite = false;
        $(document).on('click', '.level-perks-dynamite', function (evt) {

            evt.preventDefault();

            if(levelPerksDynamite) {
                levelPerksDynamite = false;
                $('.gold-odds-dynamite').slideUp();
            }
            else {
                levelPerksDynamite = true;

                $('.gold-odds-dynamite').slideDown();
            }

        });


        function AHUpdateFees() {

            var gbAmount = parseInt($('[name="ah_sell"] [name="ah_sell_amount"]').val());

            if(!isNaN(gbAmount)) {
                $('.ah_fee').text(gbAmount * GOLD_AH_FEE);
            }
            else {
                $('.ah_fee').text('-');
            }


        }

        $(document).on('click', '.ah-display-sell', function (evt) {

            evt.preventDefault();

            $('.ah-display-sell').hide();
            $('.ah-sell-form').slideDown();
            $('[name="ah_sell"] [name="ah_sell_amount"]').val(1);
            $('[name="ah_sell"] [name="ah_sell_price"]').val(GOLD_AH_MIN_PRICE);


            AHUpdateFees();
        });

        $(document).on('input', '[name="ah_sell"] [name="ah_sell_price"]', function (evt) {

            evt.preventDefault();

            AHUpdateFees();
        });

        $(document).on('input', '[name="ah_sell"] [name="ah_sell_amount"]', function (evt) {

            evt.preventDefault();

            AHUpdateFees();
        });



        $(document).on('click', '.ah-cancel', function (evt) {

            evt.preventDefault();

            if(confirm('Would you like to cancel this auction? Deposit fee will be lost')) {

                var id = $(this).attr('data-id');

                XX.xhr.req('POST', '/api/get-gold-rush-island.php', {cancel: true, id:id}, true, function (success, data) {


                    if (success) {

                        $('.gold-bar-count').text(data.gold_bars);

                        ah_start = 0;
                        ah_tab = 'my';

                        $('.ah-all, .ah-my').removeClass('active');
                        $('.ah-my').addClass('active');

                        ahFetch();

                        notification('success', 'Auction canceled', '');
                    }
                    else {
                        notification('error', 'Error', data.message);
                    }
                });


            }

        });

        $(document).on('click', '.ah-buy', function (evt) {

            evt.preventDefault();


            var price = $(this).attr('data-price');

            var amount = prompt('How many Gold bars do you want to buy at this price ? (max: '+ $(this).attr('data-total')+')');

            if(amount) {

                XX.xhr.req('POST', '/api/get-gold-rush-island.php', {buy: true, price:price, amount:amount}, true, function (success, data) {


                    if (success) {

                        CONFIG.user.ppcoins = parseInt(data.ppcoins);

                        $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));
                        $('.my-pp b').text(CONFIG.user.ppcoins);


                        $('.gold-bar-count').text(data.gold_bars);

                        notification('success', 'Gold bar(s) added to your inventory', '');
                    }
                    else {
                        notification('error', 'Error', data.message);
                    }


                    ah_start = 0;
                    ah_tab = 'all';

                    $('.ah-all, .ah-my').removeClass('active');
                    $('.ah-all').addClass('active');

                    ahFetch();

                    $('.ah-chart').html('<iframe src="/gold-chart.php"></iframe>');

                });
            }

        });

        var sellingInProgress = false;
        $(document).on('submit', '[name="ah_sell"]', function (evt) {

            evt.preventDefault();

            var gbAmount = parseInt($('[name="ah_sell"] [name="ah_sell_amount"]').val());
            var gbPrice = parseInt($('[name="ah_sell"] [name="ah_sell_price"]').val());

            if(!isNaN(gbAmount) && !isNaN(gbPrice)) {

                if(gbPrice < GOLD_AH_MIN_PRICE) {

                    alert('Minimum unit price allowed: '+GOLD_AH_MIN_PRICE+' PP coins');
                }
                else {


                    if(!sellingInProgress) {

                        sellingInProgress = true;

                        $('.ah_table tbody').html('<tr class="ah-loading"><td colspan="4"><div class="loading-table tiny"><span class="c-loader"><span class="c-loader-inner"></span></span></div></td></tr>');

                        XX.xhr.req('POST', '/api/get-gold-rush-island.php', {sell: true, amount:gbAmount, price:gbPrice}, true, function (success, data) {

                            sellingInProgress = false;

                            if (success) {

                                CONFIG.user.ppcoins = parseInt(data.ppcoins);

                                $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));
                                $('.my-pp b').text(CONFIG.user.ppcoins);

                                $('.gold-bar-count').text(data.gold_bars);

                                ah_start = 0;
                                ah_tab = 'my';

                                $('.ah-all, .ah-my').removeClass('active');
                                $('.ah-my').addClass('active');

                                ahFetch();

                                notification('success', 'Auction(s) created', '');
                            }
                            else {
                                notification('error', 'Error', data.message);
                                ahFetch();
                            }
                        });
                    }
                }
            }
            else {

                alert('Please enter only plain numbers');
            }

        });

        var winRewardMine = null;
        var miningInProgress = false;
        $(document).on('click', '.mine-gold', function (evt) {

            evt.preventDefault();

            var elem = $('.gold-mining');
            if (!miningInProgress) {

                miningInProgress = true;

                elem.find('.bar-text').text('Mining');

                elem.find('.bar-progress .bar').removeClass('completed');
                elem.find('.bar-progress .bar').css('width', '0%');

                var duration = 2000;
                var timeStart = timeMS();
                var timeEnd = timeStart + duration;

                if (mining) {
                    clearInterval(mining);
                }


                XX.xhr.req('POST', '/api/get-gold-rush-island.php', {mine: true}, true, function (success, data) {

                    if (success) {

                        winRewardMine = data;
                    }
                    else {

                        winRewardMine = -1;
                        notification('error', 'Error', data.message);
                        miningInProgress = false;
                    }
                });


                var mining = setInterval(function () {

                    var timeLeft = timeEnd - timeMS();

                    if (winRewardMine === -1) {

                        clearInterval(mining);
                        mining = null;

                        elem.find('.bar-text').text('Gold Mine');
                        elem.find('.bar-progress .bar').css('width', '0%');
                        elem.find('.bar-progress .bar').removeClass('completed');
                        elem.find('.notification').html('');
                        miningInProgress = false;

                    }
                    else if (timeLeft <= 0) {

                        elem.find('.bar-progress .bar').css('width', '110%');
                        elem.find('.bar-progress .bar').removeClass('completed').addClass('completed');
                        elem.find('.bar-text').text('Success!');


                        if (winRewardMine !== null) {

                            clearInterval(mining);
                            mining = null;

                            elem.find('.notification').html('<div class="reward winUp' + winRewardMine.big + '"><div>+' + winRewardMine.amount + '</div><div><img src="img/gold-ore.png"></div></div>');

                            $('.gold-ore-count').text(winRewardMine.total);

                            if(parseInt(winRewardMine.extra) === 1) {

                                var goldDy = winRewardMine.gold_dynamite_level;
                                setTimeout(function () {


                                    elem.find('.notificationDynamite').html('<div class="reward winUp0"><div>+1</div><div><img src="/img/gold-bomb-'+goldDy+'.png?v=1"></div></div>');



                                    setTimeout(function () {
                                        elem.find('.bar-text').text('Gold Mine');
                                        elem.find('.bar-progress .bar').css('width', '0%');
                                        elem.find('.bar-progress .bar').removeClass('completed');
                                        elem.find('.notification').html('');
                                        elem.find('.notificationDynamite').html('');

                                        $('#gold-rush .mine-gold').text('Click to mine Gold Ores').removeClass('disabled');

                                        miningInProgress = false;
                                    }, 2200);

                                }, 2200);
                            }
                            else {

                                setTimeout(function () {


                                    elem.find('.bar-text').text('Gold Mine');
                                    elem.find('.bar-progress .bar').css('width', '0%');
                                    elem.find('.bar-progress .bar').removeClass('completed');
                                    elem.find('.notification').html('');


                                    $('#gold-rush .mine-gold').text('Come back tomorrow').removeClass('disabled').addClass('disabled');

                                    miningInProgress = false;

                                }, 2000);



                            }


                            winRewardMine = null;

                        }
                    }
                    else {
                        var percent = 100 - ((timeLeft / duration) * 100);
                        elem.find('.bar-progress .bar').css('width', percent + '%');
                    }

                }, 10);
            }
        });


        var winRewardSmelt = null;
        var smeltingInProgress = false;
        $(document).on('click', '.smelt-gold', function (evt) {

            evt.preventDefault();

            var elem = $('.gold-smelting');
            if (!smeltingInProgress) {

                smeltingInProgress = true;

                elem.find('.bar-text').text('Smelting');

                elem.find('.bar-progress .bar').removeClass('completed');
                elem.find('.bar-progress .bar').css('width', '0%');

                var duration = 8000;
                var timeStart = timeMS();
                var timeEnd = timeStart + duration;

                if (smelting) {
                    clearInterval(smelting);
                }


                XX.xhr.req('POST', '/api/get-gold-rush-island.php', {smelt: true}, true, function (success, data) {

                    if (success) {

                        winRewardSmelt = data;
                    }
                    else {

                        winRewardSmelt = -1;
                        notification('error', 'Error', data.message);
                        smeltingInProgress = false;
                    }
                });


                var smelting = setInterval(function () {

                    var timeLeft = timeEnd - timeMS();

                    if (winRewardSmelt === -1) {

                        clearInterval(smelting);
                        smelting = null;

                        elem.find('.bar-text').text('Melting Furnace');
                        elem.find('.bar-progress .bar').css('width', '0%');
                        elem.find('.bar-progress .bar').removeClass('completed');
                        elem.find('.notification').html('');
                        smeltingInProgress = false;

                    }
                    else if (timeLeft <= 0) {

                        elem.find('.bar-progress .bar').css('width', '110%');
                        elem.find('.bar-progress .bar').removeClass('completed').addClass('completed');
                        elem.find('.bar-text').text('Success!');


                        if (winRewardSmelt !== null) {

                            clearInterval(smelting);
                            smelting = null;
                            smeltingInProgress = false;

                            elem.find('.notification').html('<div class="reward winUp' + winRewardSmelt.big + '"><div>+' + winRewardSmelt.amount + '</div><div><img src="img/gold-bar.png"></div></div>');


                            $('.gold-ore-count').text(winRewardSmelt.gold_ores);
                            $('.gold-bar-count').text(winRewardSmelt.gold_bars);

                            setTimeout(function () {
                                elem.find('.bar-text').text('Melting Furnace');
                                elem.find('.bar-progress .bar').css('width', '0%');
                                elem.find('.bar-progress .bar').removeClass('completed');
                                elem.find('.notification').html('');

                                $('#gold-rush .smelt-gold').removeClass('disabled');

                            }, 4000);

                            winRewardSmelt = null;

                        }
                    }
                    else {
                        var percent = 100 - ((timeLeft / duration) * 100);
                        elem.find('.bar-progress .bar').css('width', percent + '%');
                    }

                }, 10);
            }
        });

        var upgrading = null;
        var winRewardUpgrade = null;
        var upgradingInProgress = false;
        $(document).on('click', '.upgrade-gold', function (evt) {

            evt.preventDefault();

            var elem = $('.gold-upgrade');
            if (!upgradingInProgress) {

                if (confirm('You are about spend some Gold Bar to upgrade your mining items, would you like to continue?')) {

                    upgradingInProgress = true;

                    elem.find('.bar-text').text('Upgrading');

                    elem.find('.bar-progress .bar').removeClass('completed');
                    elem.find('.bar-progress .bar').css('width', '0%');

                    var duration = 8000;
                    var timeStart = timeMS();
                    var timeEnd = timeStart + duration;

                    if (upgrading) {
                        clearInterval(upgrading);
                    }


                    XX.xhr.req('POST', '/api/get-gold-rush-island.php', {upgrade: true}, true, function (success, data) {

                        if (success) {

                            winRewardUpgrade = data;
                        }
                        else {

                            winRewardUpgrade = -1;
                            notification('error', 'Error', data.message);
                            upgradingInProgress = false;
                        }
                    });


                    upgrading = setInterval(function () {

                        var timeLeft = timeEnd - timeMS();

                        if (winRewardUpgrade === -1) {

                            clearInterval(upgrading);
                            upgrading = null;

                            elem.find('.bar-text').text('Mining Tools');
                            elem.find('.bar-progress .bar').css('width', '0%');
                            elem.find('.bar-progress .bar').removeClass('completed');
                            elem.find('.notification').html('');
                            upgradingInProgress = false;

                        }
                        else if (timeLeft <= 0) {

                            elem.find('.bar-progress .bar').css('width', '110%');
                            elem.find('.bar-progress .bar').removeClass('completed').addClass('completed');
                            elem.find('.bar-text').text('Success!');


                            if (winRewardUpgrade !== null) {

                                clearInterval(upgrading);
                                upgrading = null;
                                upgradingInProgress = false;

                                elem.find('.notification').html('<div class="reward winUp' + winRewardUpgrade.big + '"><div>Lvl. ' + winRewardUpgrade.gold_mine_level + '</div><div><img src="/img/gold-tools-'+winRewardUpgrade.gold_mine_level+'.png"></div></div>');

                                updateItemsGoldUpgrade(winRewardUpgrade.gold_mine_level);
                                $('.gold-ore-count').text(winRewardUpgrade.gold_ores);
                                $('.gold-bar-count').text(winRewardUpgrade.gold_bars);


                                $('#gold-rush .gold-items-level').text(winRewardUpgrade.gold_mine_level);
                                $('#gold-rush .img-gold-tools-current').attr('src', '/img/gold-tools-'+ winRewardUpgrade.gold_mine_level+'.png');


                                setTimeout(function () {

                                    elem.find('.bar-progress .bar').css('width', '0%');
                                    elem.find('.bar-progress .bar').removeClass('completed');
                                    elem.find('.notification').html('');

                                }, 4000);

                                winRewardUpgrade = null;

                            }
                        }
                        else {
                            var percent = 100 - ((timeLeft / duration) * 100);
                            elem.find('.bar-progress .bar').css('width', percent + '%');
                        }

                    }, 10);

                }

            }
        });

        var winRewardUpgradeDynamite = null;
        var upgradingDynamiteInProgress = false;
        var upgradingDynamite = null;
        $(document).on('click', '.upgrade-gold-dynamite', function (evt) {

            evt.preventDefault();

            var elem = $('.gold-upgrade-dynamite');
            if (!upgradingInProgress) {

                if (confirm('You are about spend some PP coins to upgrade your Dynamite power, would you like to continue?')) {

                    upgradingDynamiteInProgress = true;

                    elem.find('.bar-text').text('Upgrading');

                    elem.find('.bar-progress .bar').removeClass('completed');
                    elem.find('.bar-progress .bar').css('width', '0%');

                    var duration = 8000;
                    var timeStart = timeMS();
                    var timeEnd = timeStart + duration;

                    if (upgradingDynamite) {
                        clearInterval(upgradingDynamite);
                    }


                    XX.xhr.req('POST', '/api/get-gold-rush-island.php', {upgradeDynamite: true}, true, function (success, data) {

                        if (success) {

                            winRewardUpgradeDynamite = data;
                        }
                        else {

                            winRewardUpgradeDynamite = -1;
                            notification('error', 'Error', data.message);
                            upgradingDynamiteInProgress = false;
                        }
                    });


                    upgradingDynamite = setInterval(function () {

                        var timeLeft = timeEnd - timeMS();

                        if (winRewardUpgradeDynamite === -1) {

                            clearInterval(upgradingDynamite);
                            upgradingDynamite = null;

                            elem.find('.bar-text').text('Mining Tools');
                            elem.find('.bar-progress .bar').css('width', '0%');
                            elem.find('.bar-progress .bar').removeClass('completed');
                            elem.find('.notification').html('');
                            upgradingDynamiteInProgress = false;

                        }
                        else if (timeLeft <= 0) {

                            elem.find('.bar-progress .bar').css('width', '110%');
                            elem.find('.bar-progress .bar').removeClass('completed').addClass('completed');
                            elem.find('.bar-text').text('Success!');


                            if (winRewardUpgradeDynamite !== null) {

                                clearInterval(upgradingDynamite);
                                upgradingDynamite = null;
                                upgradingDynamiteInProgress = false;

                                elem.find('.notification').html('<div class="reward winUp' + winRewardUpgradeDynamite.big + '"><div>Lvl. ' + winRewardUpgradeDynamite.gold_dynamite_level + '</div><div><img src="/img/gold-bomb-'+winRewardUpgradeDynamite.gold_dynamite_level+'.png?v=1"></div></div>');

                                updateDynamiteGoldUpgrade(winRewardUpgradeDynamite.gold_dynamite_level);
                                $('.gold-ore-count').text(winRewardUpgradeDynamite.gold_ores);
                                $('.gold-bar-count').text(winRewardUpgradeDynamite.gold_bars);


                                CONFIG.user.ppcoins = parseInt(winRewardUpgradeDynamite.ppcoins);
                                $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));
                                $('.my-pp b').text(CONFIG.user.ppcoins);


                                $('#gold-rush .gold-dynamite-level').text(winRewardUpgradeDynamite.gold_dynamite_level);
                                $('#gold-rush .img-gold-dynamite-current').attr('src', '/img/gold-bomb-'+ winRewardUpgradeDynamite.gold_dynamite_level+'.png?v=1');


                                setTimeout(function () {

                                    elem.find('.bar-progress .bar').css('width', '0%');
                                    elem.find('.bar-progress .bar').removeClass('completed');
                                    elem.find('.notification').html('');

                                }, 4000);

                                winRewardUpgradeDynamite = null;

                            }
                        }
                        else {
                            var percent = 100 - ((timeLeft / duration) * 100);
                            elem.find('.bar-progress .bar').css('width', percent + '%');
                        }

                    }, 10);

                }

            }
        });

        $(document).on('click', '.open-gold-rush-island, .open-gold-rush', function (evt) {

            evt.preventDefault();

            openGoldRushIslandModal();
        });


        $('#gold-rush .close-modal').on('click', function (evt) {

            evt.preventDefault();
            $('#gold-rush').hide();
        });

           $('#gold-rush').on('click', function (evt) {

               if ($(evt.target).attr('id') === 'gold-rush') {
                   evt.preventDefault();
                   $('#gold-rush').hide();
               }
           });


        $('#coin-island').on('click', function (evt) {

            if ($(evt.target).attr('id') === 'coin-island') {
                evt.preventDefault();
                $('#coin-island').hide();
            }
        });


        $(document).on('click', '.btn-guild-requests', function (e) {

            e.preventDefault();

            openSocial('guild-requests', true);
        });

        $('.btn-guild-list').on('click', function (e) {

            e.preventDefault();

            openSocial('guild', true);
        });

        $('.btn-add-friend').on('click', function (e) {

            e.preventDefault();

            var params = {
                username: ''
            }

            var username = prompt('Enter the username of the player you wish to follow');

            if (username !== null) {
                params.username = username;


                XX.xhr.req('POST', '/api/post-friend.php', params, true, function (success, data) {

                    if (success) {

                        $('#profile').hide();
                        PAINTING.loadFriends(true);
                        if (data.changed) {
                            notification('success', 'Player followed', 'Player added to your list');
                        }

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            }
        });
        var timeoutClaim = null;
        $('.claim-coins').on('click', function (e) {

            e.preventDefault();
            if (timeoutClaim !== null) {
                clearTimeout(timeoutClaim);
            }

            var params = {
                claim: $(this).attr('data-id')
            }

            XX.xhr.req('POST', '/api/post-claim.php', params, true, function (success, data) {


                if (success) {

                    PAINTING.loadFreeCoins();

                    CONFIG.user.ppcoins = parseInt(data.ppcoins);

                    $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));

                    notification('success', 'Success!', 'Coins claimed!');


                    timeoutClaim = setTimeout(function () {
                        window.location.replace('/' + DEFAULT.page);
                    }, 3000);

                }
                else {


                    if (data.action !== undefined) {

                        if (data.action === 'sso') {
                            MODAL.openModal('main', 'account');
                        }

                        if (timeoutClaim !== null) {
                            timeoutClaim = setTimeout(function () {
                                window.location.replace('/' + DEFAULT.page);
                            }, 30000);
                        }

                    }
                    else {

                        if (timeoutClaim !== null) {
                            timeoutClaim = setTimeout(function () {
                                window.location.replace('/' + DEFAULT.page);
                            }, 3000);
                        }
                    }

                    notification('error', 'Error', data.message);
                }
            });
        });


        $('.btn-add-block-data').on('click', function (e) {

            e.preventDefault();

            var params = {
                username: $(this).attr('data-username'),
                type: 1
            }

            XX.xhr.req('POST', '/api/post-friend.php', params, true, function (success, data) {

                if (success) {

                    $('#profile').hide();
                    PAINTING.loadBlocked();
                    notification('success', 'User blocked', 'You won\'t see new messages or notifications from this player and he won\'t know if you blocked them or not');
                }
                else {

                    notification('error', 'Error', data.message);
                }
            });

        });


        $('.btn-add-blocked').on('click', function (e) {

            e.preventDefault();

            var params = {
                username: '',
                type: 1
            }

            var username = prompt('Enter username');

            if (username !== null) {
                params.username = username;


                XX.xhr.req('POST', '/api/post-friend.php', params, true, function (success, data) {

                    if (success) {

                        $('#profile').hide();
                        PAINTING.loadBlocked();
                        notification('success', 'User blocked', 'You won\'t see new messages or notifications from this user and he won\'t know if you blocked them or not');

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            }
        });

        $(document).on('click', '.btn-del-guild-member', function (e) {

            e.preventDefault();

            var params = {
                username: $(this).attr('data-username'),
                delete: 1
            }

            var denied = $(this).attr('data-extra') === 'denied' ? true : false;

            var label = denied ? 'Decline this request to join the guild?' : 'Remove this user from the guild?';

            if (confirm(label)) {

                XX.xhr.req('POST', '/api/post-guild-access.php', params, true, function (success, data) {

                    if (success) {

                        $('#profile').hide();


                        if (denied) {
                            PAINTING.loadGuildMembersRequests(true);
                            notification('success', 'Success', 'Request declined');
                        }
                        else {
                            PAINTING.loadGuildMembers(true);
                            notification('success', 'Success', 'User removed from the guild');
                        }

                    }
                    else {

                        notification('error', 'Error', data.message);


                    }
                });
            }
        });

        $(document).on('click', '.btn-add-guild-member', function (e) {

            e.preventDefault();

            var params = {
                username: $(this).attr('data-username'),
                add: 1
            }

            if (confirm('Approve this user to join the guild?')) {

                XX.xhr.req('POST', '/api/post-guild-access.php', params, true, function (success, data) {

                    if (success) {

                        $('#profile').hide();

                        PAINTING.loadGuildMembersRequests(true);
                        notification('success', 'Success', 'User approved');

                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });
            }
        });

        $(document).on('click', '.btn-del-friend', function (e) {

            e.preventDefault();

            if (CONFIG.user.settings.chat.invisible) {

                notification('error', 'Social features', 'Please disable Invisible mode in Chat settings to access social features');
                MODAL.openModal('main', 'tools');
            }
            else {


                var params = {
                    username: $(this).attr('data-username'),
                    delete: 1
                }

                XX.xhr.req('POST', '/api/post-friend.php', params, true, function (success, data) {

                    if (success) {

                        $('#profile').hide();
                        PAINTING.loadFriends(true);
                        notification('success', 'Success', 'Player unfollowed');

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });

            }
        });

        $(document).on('click', '.btn-del-blocked', function (e) {

            e.preventDefault();

            var params = {
                username: $(this).attr('data-username'),
                delete: 1,
                type: 1
            }

            XX.xhr.req('POST', '/api/post-friend.php', params, true, function (success, data) {

                if (success) {

                    $('#profile').hide();
                    PAINTING.loadBlocked();
                    notification('success', 'Success', 'User Unblocked');

                }
                else {

                    notification('error', 'Error', data.message);
                }
            });
        });

        $(document).on('click', '#dismiss-news', function (e) {

            e.preventDefault();

            $('#chat .snippet').hide();
            localStorage.setItem('last-news-dismiss', CONFIG.news.id);
        });

        $(document).on('click', '#read-news', function (e) {

            e.preventDefault();

            $('#chat .snippet').hide();
            localStorage.setItem('last-news-dismiss', CONFIG.news.id);
        });

        $(document).on('click', '.nsfw-continue', function (e) {

            MODAL.activeAlert = false;
            $('canvas').removeClass('blur');

        });


//////////////////////////// Modals > Settings > Painting

        MODAL.generateSettingsPaintingsPalettes();

        MODAL.elem.settings.painting.find('[name="title"]').on('input', function (evt) {

            var value = $(this).val();

            if (value.length > 30) {
                MODAL.triggerFormInputError('title', 'Title too long (max 30 characters)');
            }
            else if (value.length < 5) {
                MODAL.triggerFormInputError('title', 'Title too short (min 5 characters)');
            }
            else {
                MODAL.triggerFormInputError('title', '');
            }
        });

        MODAL.elem.settings.painting.find('[name="description"]').on('input', function (evt) {

            var value = $(this).val();

            if (value.length > 250) {
                MODAL.triggerFormInputError('description', 'Description too long (max 250 characters)');
            }
            else {
                MODAL.triggerFormInputError('description', '');
            }
        });

        MODAL.elem.settings.painting.find('[name="rules"]').on('input', function (evt) {

            var value = $(this).val();

            if (value.length > 1000) {
                MODAL.triggerFormInputError('rules', 'Rules too long (max 1000 characters)');
            }
            else {
                MODAL.triggerFormInputError('rules', '');
            }
        });

        MODAL.elem.settings.painting.find('[name="sizeX"], [name="sizeY"]').on('input', function (evt) {

            var valueX = parseInt(MODAL.elem.settings.painting.find('[name="sizeX"]').val());
            var valueY = parseInt(MODAL.elem.settings.painting.find('[name="sizeY"]').val());

            if (valueX < 100 || valueY < 100) {
                MODAL.triggerFormInputError('size', 'Minimum size is 100 pixels');
            }
            else if (!CONFIG.user.premium.active && (valueX > DEFAULT.painting.width || valueY > DEFAULT.painting.height)) {
                MODAL.elem.settings.painting.find('[name="sizeX"]').val(DEFAULT.painting.width);
                MODAL.elem.settings.painting.find('[name="sizeY"]').val(DEFAULT.painting.height);
                notification('error', 'You need to be a Premium Subscriber to pout more than 300 pixels. (Maximum 3000 x 3000 pixels for Premium)');
            }
            else if (valueX > 3000 || valueY > 3000) {
                MODAL.triggerFormInputError('size', 'Maximum size is 3000 pixels');
            }
            else {
                MODAL.triggerFormInputError('size', '');
            }
        });

        MODAL.elem.settings.painting.find('[name="cooldown"]').on('input', function (evt) {

            var value = parseInt($(this).val());

            if (value > 3600) {
                MODAL.triggerFormInputError('cooldown', 'Maximum cooldown is 3600 (1 hour)');
            }
            else if (value < 0) {
                MODAL.triggerFormInputError('cooldown', 'Minimum cooldown is 0 (disabled)');
            }
            else {
                MODAL.triggerFormInputError('cooldown', '');
            }
        });

        MODAL.elem.settings.painting.find('[name="autoAcceptTime"]').on('input', function (evt) {

            var value = parseInt($(this).val());

            if (CONFIG.user.premium.active) {

                if (value > 60) {
                    MODAL.triggerFormInputError('autoAcceptTime', 'Maximum auto accept time is 60 minutes');
                }
                else if (value < 0) {
                    MODAL.triggerFormInputError('autoAcceptTime', 'Minimum auto accept time is 0 (disabled)');
                }
            }
            else if (value !== DEFAULT.painting.autoAcceptTime) {
                $(this).val(DEFAULT.painting.cooldown);
                notification('error', 'You need to be a Premium Subscriber to modify this setting.');

            }
            else {
                MODAL.triggerFormInputError('autoAcceptTime', '');
            }
        });

        MODAL.elem.settings.painting.find('a[data-name="template"]').on('click', function (evt) {
            evt.preventDefault();
            var value = parseInt($(this).attr('data-id'));

            if (MODAL.selectors.extra !== 'create') {
                notification('error', 'This setting can only be set on painting creation');

            }
            else {
                if (CONFIG.user.premium.active) {

                    if (parseInt($(this).attr('data-id')) > 0) {

                        MODAL.elem.settings.painting.find('input[name="sizeX"]').val($(this).attr('data-x'));
                        MODAL.elem.settings.painting.find('input[name="sizeY"]').val($(this).attr('data-y'));

                        alert('The recommended size for this template has been applied to your painting settings (' + $(this).attr('data-x') + ' x ' + $(this).attr('data-y') + ' pixels)');
                    }

                    MODAL.elem.settings.painting.find('a[data-name="template"]').removeClass('selected');
                    MODAL.elem.settings.painting.find('[name="template"]').val(value);
                    $(this).addClass('selected');

                }
                else if (value !== DEFAULT.painting.cooldown) {

                    notification('error', 'You need to be a Premium Subscriber to modify this setting.');


                }
                else {
                    MODAL.triggerFormInputError('cooldown', '');
                }
            }
        });


        MODAL.elem.settings.painting.find('.input-radio[data-name="access"]').on('click', function (evt) {

            evt.preventDefault();

            MODAL.settingsPaintingSelectAccess($(this), false, 1);
        });


        MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="background"] > div > a').on('click', function (evt) {

            evt.preventDefault();

            MODAL.settingsPaintingSelectBackground($(this));
        });

        MODAL.elem.settings.painting.find('.settings-painting-palette[data-name="allowedColors"] > div > a').on('click', function (evt) {

            evt.preventDefault();

            var elem = $(this);

            if (CONFIG.user.premium.active) {

                if (elem.parent().hasClass('selected')) {
                    elem.parent().removeClass('selected');
                }
                else {
                    elem.parent().addClass('selected');
                }

                var list = [];
                $(document).find('#form-settings-painting .settings-painting-palette[data-name="allowedColors"] > div.selected > a').each(function () {

                    list.push(parseInt($(this).attr('data-value')));
                });

                MODAL.elem.settings.painting.find('input[type="hidden"][name="allowedColors"]').val(list.join(','));


            }
            else {
                notification('error', 'You need to be a Premium Subscriber to modify this setting.');
            }
        });


///////////////////////////////////////////////////////////// Fixing iOS Safari behaviors. LMAO the things we have to do..


//Prevent pinch to zoom in Safari iOS
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
            document.body.style.zoom = 1;
        });

//Prevent pinch to zoom in Safari iOS
        document.addEventListener('gesturechange', function (e) {
            e.preventDefault();
            document.body.style.zoom = 1;
        });

//Prevent pinch to zoom in Safari iOS
        document.addEventListener('gestureend', function (e) {
            e.preventDefault();
            document.body.style.zoom = 1;
        });

//When window is resized or rotated we update the 100vh
        function windowResize(force) {

            //Fix iOS UI overlap...
            if (force || (parseInt(ELEM.container[0].style.height) != window.innerHeight || parseInt(ELEM.container[0].style.width) != window.innerWidth)) {

                ELEM.loader[0].style.height = window.innerHeight + 'px';
                ELEM.loader[0].style.width = window.innerWidth + 'px';

                ELEM.container[0].style.height = window.innerHeight + 'px';
                ELEM.container[0].style.width = window.innerWidth + 'px';

                ELEM.modals[0].style.height = window.innerHeight + 'px';
                ELEM.modals[0].style.width = window.innerWidth + 'px';

                PAINTING.element.painting[0].style.height = window.innerHeight + 'px';
                PAINTING.element.painting[0].style.width = window.innerWidth + 'px';

                ELEM.palette[0].style.height = window.innerHeight + 'px';


                document.body.style.height = window.innerHeight + 'px';

                if (parseInt(ELEM.container[0].style.width) <= 677) {
                    ELEM.copyright.hide();
                }
                else {
                    ELEM.copyright.show();
                }

                if (window.innerWidth <= 430) {
                    $('#painting-list').hide();
                }
                else {
                    $('#painting-list').show();
                }

                paletteScroll();
            }
        }




//Because on 'resize' in unreliable..
        setInterval(function () {
            windowResize();
        }, 500);


///////////////////////////////////////////////////////////// Palette scrolling (arrows)

        function paletteScroll() {


            if ((parseInt(ELEM.palette[0].scrollTop) + parseInt(ELEM.palette[0].style.height)) >= parseInt(ELEM.palette[0].scrollHeight)) {
                ELEM.paletteButtonUp[0].style.display = 'block';
                ELEM.paletteButtonDown[0].style.display = 'none';
            }
            else {
                ELEM.paletteButtonDown[0].style.display = 'block';
            }

            if (ELEM.palette[0].scrollTop < 0) {
                ELEM.paletteButtonDown[0].style.display = 'block';
                ELEM.paletteButtonUp[0].style.display = 'none';
            }
            else if (ELEM.palette[0].scrollTop > 0) {
                ELEM.paletteButtonUp[0].style.display = 'block';
            }
            else {
                ELEM.paletteButtonUp[0].style.display = 'none';
            }

        }

        paletteScroll();
        setTimeout(function () {

            ELEM.paletteButtonDown[0].style.display = 'block';
        }, 100);

        ELEM.palette[0].addEventListener('scroll', function () {
            paletteScroll();
        });

        ELEM.paletteButtonUp[0].addEventListener('click', function (e) {
            e.preventDefault();
            ELEM.palette[0].scrollTop -= 80;
        });

        ELEM.paletteButtonDown[0].addEventListener('click', function (e) {
            e.preventDefault();
            ELEM.palette[0].scrollTop += 80;
        });


///////////////////////////////////////////////////////////// Rendering check


        PAINTING.haveZoomRendering = false;

        var nua = navigator.userAgent;
        var ios_safari = (nua.match(/(iPod|iPhone|iPad)/i) && nua.match(/AppleWebKit/i));
        var desktop_safari = (nua.match(/safari/i) && !nua.match(/chrome/i));
        var ms_edge = $.inArray('Edge', nua) > -1;
        if (ios_safari) {

            var iOS = parseFloat(
                ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
                    .replace('undefined', '3_2').replace('_', '.').replace('_', '')
            ) || false;

            if (iOS >= 11) {
                PAINTING.haveZoomRendering = true;
            }
        }
        else if (desktop_safari) {
            PAINTING.haveZoomRendering = true;
        }


///////////////////////////////////////////////////////////// General function

        function timeSince(date, longText) {
            var seconds = null;
            var leadingText = null;

            if (date instanceof Date) {
                seconds = Math.floor((new Date() - date) / 1000);
                if (seconds < 0) {
                    leadingText = " "; //"from now"
                }
                else {
                    leadingText = " ";
                }
                seconds = Math.abs(seconds);
            }
            else {
                seconds = date;
                leadingText = "";
            }

            const intervals = [
                [31536000, "year"],
                [2592000, "month"],
                [86400, "day"],
                [3600, "hour"],
                [60, "minute"],
                [1, "second"],
            ];

            var interval = seconds;
            var intervalStrings = [];
            for (var i = 0; i < intervals.length; i++) {

                if (i === 3) {
                    break;
                }

                var divResult = Math.floor(interval / intervals[i][0]);
                if (divResult > 0) {
                    intervalStrings.push(divResult + " " + intervals[i][1] + ((divResult > 1) ? "s" : ""));
                    interval = interval % intervals[i][0];
                }
            }
            var intStr = intervalStrings.join(", ");

            var final = intStr + leadingText;

            if (final === '' || final === ' ') {
                final = 'less than a day';
            }

            return final;
        }

        function timeSinceRecent(date) {
            var seconds = null;
            var leadingText = null;

            if (date instanceof Date) {
                seconds = Math.floor((new Date() - date) / 1000);
                if (seconds < 0) {
                    leadingText = " "; //"from now"
                }
                else {
                    leadingText = " ";
                }
                seconds = Math.abs(seconds);
            }
            else {
                seconds = date;
                leadingText = "";
            }

            const intervals = [
                [31536000, "year"],
                [2592000, "month"],
                [86400, "day"],
                [3600, "hour"],
                [60, "minute"],
                [1, "second"],
            ];

            var interval = seconds;
            var intervalStrings = [];
            for (var i = 0; i < intervals.length; i++) {

                if(i > 4) {
                    break;
                }

                var divResult = Math.floor(interval / intervals[i][0]);
                if (divResult > 0) {
                    intervalStrings.push(divResult + " " + intervals[i][1] + ((divResult > 1) ? "s" : ""));
                    interval = interval % intervals[i][0];
                }
            }
            var intStr = intervalStrings.join(", ");

            var final = intStr + leadingText;

            if (final === '' || final === ' ') {
                final = 'less than a minute';
            }


            return final;
        }

        /*    function debug(data) {
           $('body').append('<div style="display:none" class="debug">'+ JSON.stringify(data)+'</div>');
        }
*/


        function isTouchDevice() {

            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function (query) {
                return window.matchMedia(query).matches;
            }

            if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                return true;
            }

            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        }

        if (isTouchDevice()) {
            CURSOR.touchDevice = true;

            if (!MOBILE_ALT_DRAWING) {


                if (CONFIG.painting.cooldown > 0) {

                    $('#mobileplace a.mobile-place').find('span').text('Place pixel?');
                    $('#mobileplace a.mobile-place').find('div').hide();
                }
                else {
                    $('#mobileplace a.mobile-place').find('span').text('Activate Brush?');
                    $('#mobileplace a.mobile-place').find('div').show();
                }

                $('#mobileplace').show();

            }

            //CHAT.elem.button.resize.hide();
        }
        else {
            $('.input-checkbox[data-name="tools-mobile-alt"]').hide();
        }


        $(document).on('click', '#mobileplace .mobile-alt', function () {

            MODAL.openModal('main', 'tools');
        });


        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function rgbToHex(r, g, b) {
            return "#" + (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
        }

        function hexToRgb(hex) {

            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)
            ] : null;
        }


        function setPageXY(evt) {

            if (evt.pageX === undefined || evt.pageY === undefined) {

                if (evt.clientX === undefined || evt.clientY === undefined) {

                    if (evt.originalEvent.changedTouches[0].clientX === undefined || evt.originalEvent.changedTouches[0].clientY === undefined) {
                        alert('Browser not supported, please use Chrome (recommended), Safari or Firefox');
                    }
                    else {
                        evt.pageX = evt.originalEvent.changedTouches[0].clientX;
                        evt.pageY = evt.originalEvent.changedTouches[0].clientY;
                    }
                }
                else {
                    evt.pageX = evt.clientX;
                    evt.pageY = evt.clientY;
                }
            }

            return evt;
        }

        PAINTING.loadPainting();
        PAINTING.loadChat();



        $(document).on('click', '.access-approve-player', function(){

            var username = prompt('Enter player username to pre-approve');

            if(username) {

                var params = {
                    requestId: -2,
                    username: username,
                    requestAnswer: 1,
                    painting: CONFIG.painting.id
                }

                if (params.requestAnswer === 2) {
                    var reason = prompt('Decline reason (optional)');
                    if (reason !== null) {
                        params.rejectReason = reason;
                    }
                }

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    if (success) {
                        PAINTING.fetchPaintingAccess(1, 0);
                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            }

        });

        $(document).on('click', '.access-decline-player', function(){

            var username = prompt('Enter player username to blacklist');

            if(username) {

                var params = {
                    requestId: -2,
                    username: username,
                    requestAnswer: 2,
                    painting: CONFIG.painting.id
                }

                if (params.requestAnswer === 2) {
                    var reason = prompt('Decline reason (optional)');
                    if (reason !== null) {
                        params.rejectReason = reason;
                    }
                }

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    if (success) {
                        PAINTING.fetchPaintingAccess(2, 0);
                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            }

        });




        $(document).on('click', '.request-row .actions a', function (evt) {

            evt.preventDefault();

            var elem = $(this).closest('.request-row');

            if (parseInt($(this).attr('data-type')) === 10) {

                var params = {
                    manageModerator: true,
                    username: $(this).attr('data-id'),
                    painting: CONFIG.painting.id,
                    way: 0
                }

                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    if (success) {

                        PAINTING.fetchPaintingModerators();

                        notification('success', 'Success', 'Moderator removed');

                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });

            }
            else {

                var params = {
                    requestId: parseInt($(this).attr('data-id')),
                    requestAnswer: parseInt($(this).attr('data-type')),
                    painting: CONFIG.painting.id
                }


                if (params.requestAnswer === 2) {
                    var reason = prompt('Decline reason (optional)');
                    if (reason !== null) {
                        params.rejectReason = reason;
                    }
                }

                if ($(this).hasClass('banTime')) {

                    var banTime = prompt('Enter the number of days the user should be banned from the painting');

                    if (banTime) {
                        params.banTime = banTime;
                    }
                }

                if ((params.requestAnswer === 2 && reason !== null) || params.requestAnswer !== 2 || ($(this).hasClass('banTime') && banTime !== null)) {

                    XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                        if (success) {

                            elem.remove();

                        }
                        else {


                            notification('error', 'Error', data.message);

                        }
                    });
                }
            }
        });

        $('.submit-button').on('click', function (evt) {

            evt.preventDefault();

            var id = $(this).attr('data-id');

            if (id === 'logout') {

                Cookies.remove('authId', {path: ''});
                Cookies.remove('authKey', {path: ''});
                Cookies.remove('authToken', {path: ''});

                window.location.reload();
                setTimeout(function () {
                    notification('success', 'Success!', 'You are now disconnected, please refresh the page');
                }, 5000);
            }
            else if (id === 'download-painting') {

                /* var date = new Date();
                 const a = document.createElement('a');

                 const bitmap = PAINTING.element.canvas.painting.toDataURL("image/png");
                 a.href = bitmap.replace("image/png", "image/octet-stream");
                 a.download = CONFIG.painting.id+'-'+CONFIG.painting.slug+'-'+ date.valueOf() + '.png';
                 a.click();*/
                const a = document.createElement('a');

                PAINTING.element.canvas.painting[0].toBlob(function (blob) {
                    a.href = URL.createObjectURL(blob);

                    var date = new Date();
                    a.download = CONFIG.painting.id + '-' + CONFIG.painting.slug + '-' + date.valueOf() + '.png';
                    a.click();
                }, 'image/png');

            }
        });

        $('.submit-form').on('click', function (evt) {

            evt.preventDefault();

            var form = $(this).closest('form').attr('id');


            var captcha = true;
            if (form === 'form-account-username' ||
                form === 'form-painting-load-more-requests-pending' ||
                form === 'form-painting-load-more-requests-accepted' ||
                form === 'form-painting-load-more-requests-declined' ||
                form === 'form-painting-approve-all-requests' ||
                form === 'form-painting-request-access' ||
                form === 'form-painting-moderator-add' ||
                form === 'form-painting-load-more-list' ||
                form === 'form-guilds-load-more' ||
                form === 'form-painting-delete' ||
                form === 'form-guild-delete' ||
                form === 'form-guild-transfer') {
                captcha = false;
            }

            $(this).addClass('spin');
            $(this).attr('data-text', $(this).text());
            $(this).html('<img src="/img/icons/spin.svg" width="14">');
            $(this).attr('disabled', 'true');

            submitForm(form, captcha);
        });

        function submitForm(form, captcha) {

            if (captcha) {

                triggerCaptcha(form);

            }
            else {

                FORMS[form]();
            }
        }

        var captchaForm = null;

        function triggerCaptcha(form) {

            if (captchaForm === null) {

                captchaForm = form;

                MODAL.openModal('captcha', 'captcha');
            }
        }

        VALIDATE_CAPTCHA = function (response) {

            if (captchaForm !== null) {
                FORMS[captchaForm](response);
                captchaForm = null;
            }
        }

        var FORMS = {
            'form-account-login': function (captcha) {

                var form = $('#form-account-login');

                var params = {
                    email: form.find('[name="email"]').val(),
                    password: form.find('[name="password"]').val()
                };

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);


                XX.xhr.req('POST', '/api/login.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {



                        var done  =false;
                        var hash = window.location.hash;
                        if (hash != '') {

                            var check = hash.split('=');
                            if(check[1] !== undefined) {

                                if(check[0] === '#auth') {

                                    window.location.replace('/forums/');
                                    done = true;
                                }
                            }
                        }

                        if(!done) {
                            window.location.reload();
                        }

                        setTimeout(function () {
                            notification('success', 'Success!', 'You are now connected, please refresh the page');
                        }, 5000);

                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });
            },
            'form-account-register': function (captcha) {

                var form = $('#form-account-register');

                var params = {
                    email: form.find('[name="email"]').val(),
                    password: form.find('[name="password"]').val(),
                    confirm: form.find('[name="password-confirm"]').val(),
                };

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);


                XX.xhr.req('POST', '/api/register.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        form.find('input').val('');

                        MODAL.openModal('auth', 'login');
                        $('#form-account-login').find('[name="email"]').val(params.email);
                        $('#form-account-login').find('[name="password"]').val(params.password);


                        alert('Account created, please check your e-mail and click on the activation link');

                        notification('success', 'Account created', 'Please check your e-mail and click on the activation link');

                    }
                    else {


                        notification('error', 'Error', data.message);

                    }
                });
            },
            'form-delete-account': function (captcha) {

                var form = $('#form-delete-account');

                var params = {
                    deleteAcc:1
                };

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);


                XX.xhr.req('POST', '/api/post-delete.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        form.find('input').val('');

                        Cookies.remove('authId', {path: ''});
                        Cookies.remove('authKey', {path: ''});
                        Cookies.remove('authToken', {path: ''});
                        MODAL.closeModal();

                        notification('success', 'Account data removal requested', 'Your account data will be removed in 14 days unless you login on it again');

                        setTimeout(function(){
                            window.location.reload();
                        }, 5000);
                    }
                    else {


                        notification('error', 'Error', data.message);

                    }
                });
            },
            'form-account-forgot': function (captcha) {

                var form = $('#form-account-forgot');

                var params = {
                    email: form.find('[name="email"]').val(),
                };

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);


                XX.xhr.req('POST', '/api/forgot.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        MODAL.openModal('auth', 'login');

                        alert('Request sent, please check your e-mail and click on the activation link');

                        notification('success', 'Request sent', 'Please check your e-mail and click on the activation link');

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            },
            'form-account-forgot-activation': function (captcha) {

                var form = $('#form-account-forgot-activation');

                var params = {
                    forgotKey: '',
                    password: form.find('[name="password"]').val(),
                    confirm: form.find('[name="password-confirm"]').val(),
                };

                var forgotKey = window.location.href.split('?forgotKey=');
                params.forgotKey = forgotKey[1];

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);


                XX.xhr.req('POST', '/api/forgot-activation.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        notification('success', 'Password set successfully! Please log in to your account');

                        setTimeout(function () {
                            window.location.replace('/' + DEFAULT.page);
                        }, 3000);

                    }
                    else {


                        notification('error', 'Error', data.message);
                    }
                });
            },
            'form-account-change-password': function (captcha) {

                var form = $('#form-account-change-password');

                var params = {
                    current: form.find('[name="password-current"]').val(),
                    password: form.find('[name="password"]').val(),
                    confirm: form.find('[name="password-confirm"]').val(),
                };

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();


                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }


                MODAL.triggerLoader(true);


                XX.xhr.req('POST', '/api/account-password.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        form.find('input').val('');
                        notification('success', 'Success', 'Password updated');

                    }
                    else {


                        notification('error', 'Error', data.message);
                    }
                });
            },
            'form-account-username': function (captcha) {

                var form = $('#form-account-username');

                var params = {
                    username: form.find('[name="username"]').val(),
                };


                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }


                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/account-username.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        window.location.reload();
                        setTimeout(function () {
                            notification('success', 'Success!', 'Username created, please refresh the page');
                        }, 5000);


                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });
            },
            'form-painting-load-more-requests-pending': function (captcha) {

                PAINTING.lastStartAccessFetch += 20;

                PAINTING.fetchPaintingAccess(0, PAINTING.lastStartAccessFetch);
            },
            'form-painting-load-more-requests-accepted': function (captcha) {

                PAINTING.lastStartAccessFetch += 20;

                PAINTING.fetchPaintingAccess(1, PAINTING.lastStartAccessFetch);
            },
            'form-painting-load-more-requests-declined': function (captcha) {

                PAINTING.lastStartAccessFetch += 20;

                PAINTING.fetchPaintingAccess(2, PAINTING.lastStartAccessFetch);
            },
            'form-painting-approve-all-requests': function (captcha) {

                var form = $('#form-painting-approve-all-requests');

                var params = {
                    requestId: -1,
                    requestAnswer: 1,
                    painting: CONFIG.painting.id
                }


                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);

                if (confirm('Approve all pending requests?')) {

                    XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                        MODAL.triggerLoader(false);

                        form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');

                        if (success) {

                            PAINTING.fetchPaintingAccess(0, 0);
                            notification('success', 'Success', 'Pending requests approved');

                        }
                        else {


                            notification('error', 'Error', data.message);

                        }
                    });
                }
                else {
                    MODAL.triggerLoader(false);
                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');
                }
            },
            'form-painting-request-access': function (captcha) {

                var form = $('#form-painting-request-access');


                var params = {
                    createRequest: true,
                    message: form.find('textarea[name="message"]').val(),
                    painting: CONFIG.painting.id
                }


                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        MODAL.closeModal();

                        if (data.auto_accepted !== undefined) {

                            notification('success', 'Success', 'Access Granted');
                        }
                        else {
                            notification('success', 'Success', 'Request sent, please wait until you get approved by the owner or the moderators');
                        }
                    }
                    else {

                        if (data.action !== undefined) {

                            if (data.action === 'sso') {
                                MODAL.openModal('main', 'account');
                            }
                        }

                        notification('error', 'Error', data.message);

                    }
                });

            },
            'form-painting-request-access-guild': function (captcha) {

                var form = $('#form-painting-request-access-guild');


                var params = {
                    createGuildRequest: true,
                    painting: CONFIG.painting.id
                }

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        MODAL.closeModal();
                        notification('success', 'Success', 'Access granted!');

                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });

            },
            'form-painting-request-access-twitch': function (captcha) {

                var form = $('#form-painting-request-access-twitch');


                var params = {
                    createTwitchRequest: true,
                    painting: CONFIG.painting.id
                }

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        MODAL.closeModal();
                        notification('success', 'Success', 'Access granted!');

                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });

            },
            'form-painting-moderator-add': function (captcha) {

                var form = $('#form-painting-moderator-add');

                var params = {
                    manageModerator: true,
                    username: '',
                    painting: CONFIG.painting.id,
                    way: 1
                }

                var str = prompt('Enter a username');
                if (str === null) {
                    str = '';
                }

                params.username = str;

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/get-painting-access.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        PAINTING.fetchPaintingModerators();

                        notification('success', 'Success', 'New moderator added');

                    }
                    else {


                        notification('error', 'Error', data.message);

                    }
                });

            },
            'form-guild-store': function (captcha) {

                var form = $('#form-guild-store');

                var params = {
                    storeGuild: true,
                    name: form.find('[name="name"]').val(),
                    description: form.find('[name="description"]').val(),
                    auto_accept: form.find('[name="auto-accept"]').val(),
                    rank_1_title: $('.guild-ranks').find('input[name="rank_1"]').val(),
                    rank_2_title: $('.guild-ranks').find('input[name="rank_2"]').val(),
                    rank_3_title: $('.guild-ranks').find('input[name="rank_3"]').val(),
                    rank_1_emblem: $('.guild-ranks').find('input[name="rank_1_emblem"]').prop("checked") ? true : false,
                    rank_1_members: $('.guild-ranks').find('input[name="rank_1_members"]').prop("checked") ? true : false,
                    rank_2_emblem: $('.guild-ranks').find('input[name="rank_2_emblem"]').prop("checked") ? true : false,
                    rank_2_members: $('.guild-ranks').find('input[name="rank_2_members"]').prop("checked") ? true : false,
                    rank_3_emblem: $('.guild-ranks').find('input[name="rank_3_emblem"]').prop("checked") ? true : false,
                    rank_3_members: $('.guild-ranks').find('input[name="rank_3_members"]').prop("checked") ? true : false
                }

                if (form.find('[name="id"]').val()) {
                    params.id = form.find('[name="id"]').val();
                }
                else {
                    params.tag = form.find('[name="tag"]').val();
                }

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                    MODAL.goBackFromCaptcha();
                    grecaptcha.reset();
                }


                MODAL.triggerLoader(true);

                XX.xhr.req('POST', '/api/post-guild.php', params, true, function (success, data) {

                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');

                    if (success) {

                        if (params.id) {

                            notification('success', 'Success', 'Changes saved');

                        }
                        else {
                            notification('success', 'Success', 'Guild created! Check the bottom right button to manage your guild members, reloading the page in a few seconds...');

                            setTimeout(function () {
                                window.location.reload();
                            }, 4000);


                            MODAL.closeModal();
                        }
                    }
                    else {


                        notification('error', 'Error', data.message);


                    }
                });

            },
            'form-guild-delete': function (captcha) {

                var form = $('#form-guild-delete');

                var params = {
                    storeGuild: true,
                    delete: true
                }

                if ($('#form-guild-store').find('[name="id"]').val()) {
                    params.id = $('#form-guild-store').find('[name="id"]').val();
                }


                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);


                if (confirm('You are about to remove your guild and all its guild members')) {

                    if (confirm('Are you sure? this action can\'t be undone')) {

                        XX.xhr.req('POST', '/api/post-guild.php', params, true, function (success, data) {

                            MODAL.triggerLoader(false);

                            form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                            form.find('.submit-form').removeAttr('disabled');
                            form.find('.submit-form').removeClass('spin');

                            if (success) {

                                notification('success', 'Success', 'Guild deleted, reloading the page in a few seconds...');
                                setTimeout(function () {
                                    window.location.reload();
                                }, 4000);

                                MODAL.closeModal();
                            }
                            else {


                                notification('error', 'Error', data.message);


                            }
                        });
                    }
                    else {
                        MODAL.triggerLoader(false);

                        form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');
                    }
                }
                else {
                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');
                }

            },
            'form-guild-transfer': function (captcha) {

                var form = $('#form-guild-transfer');

                var params = {
                    transfer: true,
                }

                MODAL.triggerLoader(true);


                if (confirm('You are about to transfer ownership of your guild. Are you sure? this action can\'t be undone and you will lose access to this guild.')) {

                    var targetUser = prompt('Enter new owner username');
                    if (targetUser) {

                        params.username = targetUser;

                        XX.xhr.req('POST', '/api/post-guild-transfer.php', params, true, function (success, data) {

                            MODAL.triggerLoader(false);

                            form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                            form.find('.submit-form').removeAttr('disabled');
                            form.find('.submit-form').removeClass('spin');

                            if (success) {

                                notification('success', 'Success', 'Guild ownership modified, reloading the page in a few seconds...');
                                setTimeout(function () {
                                    window.location.reload();
                                }, 4000);

                                MODAL.closeModal();
                            }
                            else {


                                notification('error', 'Error', data.message);


                            }
                        });
                    }
                    else {
                        MODAL.triggerLoader(false);

                        form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');
                    }
                }
                else {
                    MODAL.triggerLoader(false);

                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');
                }

            },
            'form-painting-delete': function (captcha) {

                var form = $('#form-painting-delete');

                var params = {
                    painting: CONFIG.painting.id,
                }

                if (captcha !== undefined) {
                    MODAL.goBackFromCaptcha();
                }

                MODAL.triggerLoader(true);

                if (confirm('Do you really want to delete this painting?')) {

                    XX.xhr.req('POST', '/api/delete-painting.php', params, true, function (success, data) {

                        MODAL.triggerLoader(false);

                        form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');

                        if (success) {

                            notification('success', 'Painting deleted');

                            setTimeout(function () {
                                window.location.replace('/' + DEFAULT.page);
                            }, 2000);

                        }
                        else {

                            notification('error', 'Error', data.message);
                        }
                    });

                }
                else {

                    MODAL.triggerLoader(false);
                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');
                }

            },
            'form-settings-painting': function (captcha) {

                var form = $('#form-settings-painting');


                var params = {
                    managePainting: true,
                    name: form.find('input[name="title"]').val(),
                    description: form.find('textarea[name="description"]').val(),
                    xMax: form.find('input[name="sizeX"]').val(),
                    yMax: form.find('input[name="sizeY"]').val(),
                    cooldown: form.find('input[name="cooldown"]').val(),
                    autoAcceptTime: form.find('input[name="autoAcceptTime"]').val(),
                    visibility: form.find('input[name="access"]').val(),
                    'default-color': form.find('input[name="background"]').val(),
                    'allowed-colors': form.find('input[name="allowedColors"]').val(),
                    template: form.find('input[name="template"]').val(),
                    protection: form.find('input[name="protection"]').val(),
                    shopItems: form.find('input[name="shop-items"]').val(),
                    nsfw: form.find('input[name="nsfw"]').val(),
                    discordRequired: form.find('input[name="discord-required"]').val(),
                    rules: form.find('textarea[name="rules"]').val(),
                    'brush-size': form.find('input[name="brush"]').val(),
                    replacePainting: ''
                }


                var colorsAllowed = params['allowed-colors'].split(',');

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }
                grecaptcha.reset();

                if (form.find('input[name="allowedColors"]').val() != '' && (colorsAllowed.length == 1 && colorsAllowed[0] === '')) {
                    form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');


                    notification('error', 'You must allow at least one color');
                    return;

                }
                else {

                    if (colorsAllowed.length >= DEFAULT.painting.palette.colors.length) {
                        params['allowed-colors'] = '';
                    }

                    if (form.find('input[name="id"]').val() != '') {
                        params['boardId'] = parseInt(form.find('input[name="id"]').val());

                        params['replacePainting'] = form.find('input[name="replacePainting"]').val();
                    }

                    if (captcha !== undefined) {
                        MODAL.goBackFromCaptcha();
                    }


                    if (params['replacePainting'] === '' || (params['replacePainting'] !== '' && confirm('You chose to copy another painting, this will replace your current painting with the one given. The width and height may also be modified. Would you like to continue?'))) {

                        MODAL.triggerLoader(true);

                        WS.ignoreRedirectRequest = true;

                        XX.xhr.req('POST', '/api/post-painting.php', params, true, function (success, data) {

                            MODAL.triggerLoader(false);

                            form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                            form.find('.submit-form').removeAttr('disabled');
                            form.find('.submit-form').removeClass('spin');

                            if (success) {

                                if (params['boardId'] !== undefined) {

                                    notification('success', 'Changes saved');

                                    setTimeout(function () {

                                        window.location.replace('/' + CONFIG.painting.id + '-' + CONFIG.painting.slug);

                                    }, 2000);


                                }
                                else {

                                    notification('success', 'Painting created');

                                    setTimeout(function () {

                                        window.location.replace('/' + data.id + '-' + data.slug);

                                    }, 2000);

                                }

                            }
                            else {

                                WS.ignoreRedirectRequest = false;


                                notification('error', 'Error', data.message);
                            }
                        });

                    }
                    else {
                        form.find('.submit-form').text(form.find('.submit-form').attr('data-text'));
                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');
                    }
                }
            },
            'form-attack-coinisland': function (captcha) {

                var form = $('#form-attack-coinisland');


                var params = {
                    attack: true
                }

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                params.island = $('#submit-attack-coinisland').attr('data-island');

                MODAL.closeModal();

                if ($(this).hasClass('disabled')) {

                    notification('error', 'Island still protected', 'You must wait until the end of the protection time to be able to attack the island. (10 minutes protection after every attack on the island)');

                    openCoinIslandModal(params.island);
                }
                else {

                    var amount = prompt('You are about to spend PP coins to attack this island. Enter how much you want to spend (or you can just keep the current price!). But if you enter a bigger value, you will raise the attack price to that value for the next attacker and decrease the chance someone can take over right away!', $('#submit-attack-coinisland').attr('data-price'));

                    if (!amount) {

                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');
                        openCoinIslandModal(params.island);


                    }
                    else if (parseInt(amount) < parseInt($('#submit-attack-coinisland').attr('data-price'))) {

                        form.find('.submit-form').removeAttr('disabled');
                        form.find('.submit-form').removeClass('spin');
                        openCoinIslandModal(params.island);

                        notification('error', 'Error', 'Custom attack price can\'t be lower than the current price');
                    }
                    else {

                        params.amount = amount;


                        XX.xhr.req('POST', '/api/post-coin-island.php', params, true, function (success, data) {


                            form.find('.submit-form').removeAttr('disabled');
                            form.find('.submit-form').removeClass('spin');


                            openCoinIslandModal(params.island);

                            if (success) {


                                CONFIG.user.ppcoins = parseInt(data.ppcoins);

                                $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));


                                notification('success', 'Success!', 'The island is yours! YARRRRRR!');

                                $('#coin-island').hide();

                                setTimeout(function () {
                                    window.location.reload();
                                }, 10000);

                            }
                            else {

                                notification('error', 'Error', data.message);
                            }
                        });
                    }
                }

            },
            'form-claim-coinisland-coins': function (captcha) {

                var form = $('#form-claim-coinisland-coins');


                var params = {
                    claim: true
                }

                if (captcha !== undefined) {
                    params['g-recaptcha-response'] = captcha;
                }

                grecaptcha.reset();

                MODAL.closeModal();

                params.island = $('#submit-claim-coinisland-coins').attr('data-island');


                XX.xhr.req('POST', '/api/post-coin-island.php', params, true, function (success, data) {


                    form.find('.submit-form').removeAttr('disabled');
                    form.find('.submit-form').removeClass('spin');


                    openCoinIslandModal(params.island);

                    if (success) {


                        CONFIG.user.ppcoins = parseInt(data.ppcoins);

                        $('#modals .box[data-id="main"] .box-header .coins-infos span').text(CONFIG.user.ppcoins + ' coin' + (CONFIG.user.ppcoins != 1 ? 's' : ''));


                        notification('success', 'Success!', 'Coins claimed!');

                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);

                    }
                    else {

                        notification('error', 'Error', data.message);
                    }
                });

            },
            'form-painting-load-more-list': function () {

                var startAt = PAINTING.paintingListStart + CONFIG.user.settings.painting.listMaxPaintings;
                PAINTING.refreshPaintingList(startAt);
            },
            'form-guilds-load-more': function () {

                var startAt = MODAL.lastStartGuildFetch + MODAL.guildListLimit + 1;
                MODAL.loadGuilds(startAt);
            }
        };






        if (window.location.href.indexOf('?forgotKey=') !== -1) {
            MODAL.openModal('auth', 'forgot-activation');
        }


        function loadSocket() {

            if (WS.started) {

                return;
            }
            else {


                WS.started = true;

                WS.io = WTOOLXSXXR[rdmxsxd](CONFIG.host.wss, {transports: ['websocket']});

                WS.errors = {
                    0: 'You need to login on pixelplace.io first. Create an account, it\'s free !',
                    1: 'Your session expired, please refresh the page',
                    2: 'You need to create a username first',
                    3: 'Color not found',
                    4: 'This color is only available to premium subscribers',
                    5: 'Wrong coordinates',
                    6: 'This canvas has been temporarily disabled because its owner used premium settings on it and his membership has expired. Please wait for the owner to renew his premium membership or to revert canvas settings to non premium ones',
                    7: 'Your premium membership has expired and this canvas is using premium settings. To continue, please renew your membership or revert canvas settings back to non premium ones',
                    8: 'Please wait until the end of your cooldown',
                    9: 'This canvas is private, you can\'t draw on it',
                    10: 'To be able to place pixels on this canvas, you have to request approval from the owner',
                    11: 'You are placing pixels too fast, please slow down',
                    12: 'This canvas is terminated',
                    13: 'Error while getting canvas data',
                    14: 'Error while getting canvas access data',
                    15: 'You have too many instances of pixelplace.io opened, please close some windows/tabs',
                    16: 'Too many users share your internet connection. If you are using a proxy or shared connection, you may need to switch to a private one or another proxy location',
                    17: 'Pixelplace.io has been disabled for your internet connection (are you  using a proxy ?)',
                    18: 'Server is full, please try again later',
                    19: 'Reloading..',
                    20: 'Your account has been temporarily disabled for placing pixels and/or sending messages too fast, try again in 5 minutes',
                    21: 'You need to be a Premium subscriber to draw on Prime Island',
                    22: 'User offline',
                    23: 'Servers full, please wait',
                    24: 'You need to be connected before sending messages',
                    25: 'You are sending messages too fast',
                    26: 'Your account is still suspended from the chat (temporarily)',
                    27: 'Your account is permanently banned from the chat, please contact moderators on discord or support@pixelplace.io if you need help',
                    28: 'You need to create a username before sending messages',
                    29: 'You are not allowed to send commands',
                    30: 'You need to join a Guild first',
                    31: 'You need to be a premium subscriber',
                    32: 'Painting archived',
                    33: 'Servers are full, we are limiting instances of pixelplace.io opened per user, please close some windows/tabs',
                    34: 'Servers are full, we are limiting instances of pixelplace.io opened per internet connections, please close some windows/tabs. If you are using a proxy or shared connection, you may need to switch to a private one or another proxy location',

                };


                WS.io.on('connect', function (data) {


                    WS.io.emit('init', {
                        authKey: Cookies.get('authKey'),
                        authToken: Cookies.get('authToken'),
                        authId: Cookies.get('authId'),
                        boardId: CONFIG.painting.id
                    });


                    setTimeout(function () {
                        PAINTING.loadFriends();
                        CHAT.updateScroll(CHAT.selected, true);
                    }, 1500);

                });

                WS.io.on('connect_error', function (err) {
                    triggerGlobalLoaderCanvas(true, 'Connection lost<br/>Trying to reconnect...<br/>Please wait<br/><a href="https://discord.gg/xcFJ6nY" target="_blank">Need help?</a>');
                });

                WS.io.on('rate_change', function (data) {

                    CONFIG.painting.rate = parseInt(data);

                    if(PB && PB.rate && CONFIG.painting.rate > PB.rate) {
                        PB.rate = CONFIG.painting.rate;
                    }

                });

                WS.io.on('ping.alive', function (data) {

                    var curTime = time() + 1678;
                    var timeStp = curTime + "";
                    var splitstp = timeStp.split('');
                    var finalencode = '';
                    for (var k in splitstp) {

                        if (k == 0) {
                            finalencode += randomStr(5);
                        }
                        if (k == 1) {
                            finalencode += randomStr(7);
                        }
                        if (k == 2) {
                            finalencode += randomStrVariant(3);
                        }
                        if (k == 3) {
                            finalencode += randomStr(8);
                        }
                        if (k == 4) {
                            finalencode += randomStrVariant(6);
                        }
                        if (k == 5) {
                            finalencode += randomStr(3);
                        }
                        if (k == 6) {
                            finalencode += randomStr(6);
                        }
                        if (k == 7) {
                            finalencode += randomStrVariant(4);
                        }
                        if (k == 8) {
                            finalencode += randomStr(7);
                        }
                        if (k == 9) {
                            finalencode += randomStr(6);
                        }

                        if (Math.floor(Math.random() * 2) === 0) {
                            finalencode += CRYPT[parseInt(splitstp[k])].toUpperCase();
                        }
                        else {
                            finalencode += CRYPT[parseInt(splitstp[k])];
                        }
                    }

                    finalencode = finalencode + '0=';

                    WS.io.emit('pong.alive', finalencode);
                });


                WS.io.on('coin_island_owner', function (data) {

                    if (parseInt(CONFIG.painting.id) === 7) {

                        if (parseInt(data.island) === 0) {
                            PAINTING.element.move.find('#coin-island-owner').text(data.from).css({top: '952px', left: '818px'}).show();
                        }
                        else if (parseInt(data.island) === 1) {
                            PAINTING.element.move.find('#coin-island-owner-1').text(data.from).css({top: '848px', left: '927px'}).show();
                        }
                        else if (parseInt(data.island) === 2) {
                            PAINTING.element.move.find('#coin-island-owner-2').text(data.from).css({top: '902px', left: '950px'}).show();
                        }
                        else if (parseInt(data.island) === 3) {
                            PAINTING.element.move.find('#coin-island-owner-3').text(data.from).css({top: '948px', left: '927px'}).show();
                        }

                    }
                    else {
                        PAINTING.element.move.find('#coin-island-owner').remove();
                    }
                });

                WS.io.on('coin_island_owner_change', function (data) {

                    if (parseInt(CONFIG.painting.id) === 7) {

                        if (parseInt(data.island) === 0) {
                            PAINTING.element.move.find('#coin-island-owner').text(data.from).css({top: '952px', left: '818px'}).show();

                            var text = '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> attacked Coin Island and took ownership. <div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></div>' + data.amount + ' unclaimed coins stolen!';
                        }
                        else if (parseInt(data.island) === 1) {

                            PAINTING.element.move.find('#coin-island-owner-1').text(data.from).css({top: '848px', left: '927px'}).show();

                            var text = '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> attacked Tiny Coin Island #1 and took ownership. <div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></div>' + data.amount + ' unclaimed coins stolen!';
                        }
                        else if (parseInt(data.island) === 2) {

                            PAINTING.element.move.find('#coin-island-owner-2').text(data.from).css({top: '902px', left: '950px'}).show();

                            var text = '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> attacked Tiny Coin Island #2 and took ownership. <div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></div>' + data.amount + ' unclaimed coins stolen!';
                        }
                        else if (parseInt(data.island) === 3) {

                            PAINTING.element.move.find('#coin-island-owner-3').text(data.from).css({top: '948px', left: '927px'}).show();

                            var text = '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> attacked Tiny Coin Island #3 and took ownership. <div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></div>' + data.amount + ' unclaimed coins stolen!';
                        }


                        CHAT.addMessageRow({
                            type: 'custom',
                            target: '',
                            color: 0,
                            mention: '',
                            username: '',
                            message: text,
                            icons: [],
                            createdAt: '',
                        }, CHAT.selected);

                    }
                    else {
                        PAINTING.element.move.find('#coin-island-owner').remove();
                    }
                });

                WS.io.on('username', function (data) {

                    if (PAINTING.liveTrackingUsers[data.id] !== undefined) {

                        PAINTING.liveTrackingUsers[data.id].n = data.name;

                        if(FILTER_TRACK && data.name.toLowerCase() !== FILTER_TRACK) {

                        }
                        else {
                            PAINTING.element.move.find('.track[data-id="' + data.id + '"]').attr('data-profile', data.name.toLowerCase()).text(data.name).show();
                        }

                    }

                    if (CONFIG.user.settings.painting.saveTracking) {
                        SAVE_TRACKING_DATA_NAMES[data.id] = data.name;
                        if (SAVE_TRACKING_ELEM.find('li[data-id="' + data.id + '"] .username').length) {
                            SAVE_TRACKING_ELEM.find('li[data-id="' + data.id + '"] .username').text(data.name).attr('data-profile', data.name);
                        }
                    }
                });

                WS.io.on('j', function (data) {

                    if (!CONFIG.user.settings.chat.invisible) {

                        if (CONFIG.user.name.toLowerCase() !== data.toLowerCase()) {


                            if (CONFIG.user.friends.indexOf(data) !== -1) {

                                //PAINTING.loadFriends(); //todo change only  the row of the disconnected users
                               var currentOnline = parseInt($('[data-id="social"][data-tab="friends"] .notification-bubble').text());

                                currentOnline++;
                                $('[data-id="social"][data-tab="friends"] .notification-bubble').text(currentOnline);

                                if (CONFIG.user.settings.chat.friendsNotifications) {
                                    notification('info', data + ' went online');
                                }
                            }
                        }
                    }
                });

                WS.io.on('l', function (data) {

                    if (!CONFIG.user.settings.chat.invisible) {

                        if (CONFIG.user.name.toLowerCase() !== data.toLowerCase()) {

                            if (CONFIG.user.friends.indexOf(data) !== -1) {

                                //  PAINTING.loadFriends(); //todo change only  the row of the disconnected users

                                var currentOnline = parseInt($('[data-id="social"][data-tab="friends"] .notification-bubble').text());

                                currentOnline--;
                                if(currentOnline < 0) {
                                    currentOnline = 0;
                                }
                                $('[data-id="social"][data-tab="friends"] .notification-bubble').text(currentOnline);

                                if (CONFIG.user.settings.chat.friendsNotifications) {
                                    notification('info', data + ' went offline');
                                }
                            }
                        }
                    }
                });


                var lastRulePop = 0;
                WS.io.on('chat.user.message', function (data) {

                    var silent = false;
                    if (data.silent) {
                        silent = true;
                    }


                    var message = {
                        type: data.type,
                        target: data.target,
                        color: data.color,
                        mention: data.mention,
                        username: data.username,
                        guild: data.guild,
                        message: data.message,
                        icons: data.icons,
                        createdAt: data.createdAt,
                        channel: data.channel,
                        silent: silent,
                        rainbow: data.rainbow !== undefined && data.rainbow ? true : false,
                        golden: data.golden !== undefined && data.golden ? true : false,
                        xmas: data.xmas !== undefined && data.xmas ? true : false,
                        halloween: data.halloween !== undefined && data.halloween ? true : false,
                        snowballed: data.snowballed
                    };

                    if (data.posX !== undefined && data.posY !== undefined && data.posS !== undefined) {

                        message.posY = data.posY;
                        message.posX = data.posX;
                        message.posS = data.posS;
                    }

                    CHAT.addMessageRow(message, data.channel);


                    if(lastRulePop < time() - 60) {

                        lastRulePop = time();
                        if(data.channel ==='painting' && data.type ==='chat') {

                            if(data.message === '/rules' || data.message === '!rules') {

                                CHAT.addMessageRow({
                                    type: 'system',
                                    message: 'Rules: '+CONFIG.painting.rules
                                });
                            }

                        }
                    }

                    if(data.channel === 'whispers' && data.target.toLowerCase() !== CONFIG.user.name.toLowerCase()) {



                        if (!("Notification" in window)) {
                            // Check if the browser supports notifications
                        } else if (Notification.permission === "granted") {
                            // Check whether notification permissions have already been granted;
                            // if so, create a notification
                            const notification = new Notification(message.username+" says: "+message.message);
                            // …
                        } else if (Notification.permission !== "denied") {
                            // We need to ask the user for permission
                            Notification.requestPermission().then((permission) => {
                                // If the user accepts, let's create a notification
                                if (permission === "granted") {
                                    const notification = new Notification(message.username+" says: "+message.message);
                                }
                            });
                        }
                    }
                });


                WS.io.on('chat.messages.loaded', function (data) {

                    if (CHAT.isDisplayed) {
                        CHAT.elem.container.show();
                        CHAT.elem.button.collapsed.hide();
                    }

                    sendStartMessages();
                });


                WS.io.on('chat.system.delete', function (data) {
                    CHAT.deleteMessagesByUsername(data);
                });

                WS.io.on('chat.painting.delete', function (data) {
                    CHAT.deleteMessagesByUsername(data, true);
                });

                WS.io.on('chat.system.announce', function (data) {

                    CHAT.addMessageRow({
                        type: 'announce',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: data,
                        icons: '',
                        guild: '',
                        createdAt: '',
                    }, CHAT.selected);
                });

                WS.io.on('chat.custom.message', function (data) {

                    CHAT.addMessageRow({
                        type: 'warning',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: data,
                        icons: [],
                        createdAt: '',
                    }, CHAT.selected);
                });


                WS.io.on('chat.stats', function (data) {

                    CHAT.elem.onlineValue.text(data[1]);

                    if(data[3] !== undefined && data[3][2] !== undefined) {

                        if(PB.rate) {

                            if(CONFIG.user.premium.active) {
                                PB.rate = parseInt(data[3][1]);
                            }
                            else {
                                PB.rate = parseInt(data[3][0]);
                            }

                            PB.status = parseInt(data[3][2]);

                        }


                    }

                    if (data[2] !== undefined && parseInt(data[2]) > 0) {

                        CHAT.elem.onlineValue.attr('title', data[0] + ' players connected & ' + data[2] + ' on this painting');

                    }
                    else {
                        CHAT.elem.onlineValue.attr('title', data[0] + ' players connected');
                    }

                    CHAT.elem.onlineSubValue.hide();
                });

                WS.io.on('canvas.alert', function (data) {

                    notification('warning', data, '');
                });

                WS.io.on('canvas.success', function (data) {

                    notification('success', data, '');
                });

                WS.io.on('chat.system.message', function (data) {
                    //same as throw error but for chat

                    CHAT.addMessageRow({
                        type: 'system',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: WS.errors[data],
                        icons: [],
                        createdAt: '',
                    }, CHAT.selected);
                });

                WS.io.on('item.notification.gift', function (data) {

                    CHAT.addMessageRow({
                        type: 'custom',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> sent a gift to <a href="#" class="open-profile" data-profile="' + data.to + '">' + data.to + '</a>: 1x<a href="#" class="open-item" data-item="' + data.item + '" style="color:' + CONFIG.shop.items[data.item].color + '">[' + CONFIG.shop.items[data.item].name + ']</a>',
                        icons: [],
                        createdAt: '',
                    }, 'global');
                });

                WS.io.on('item.notification.snowball', function (data) {

                    CHAT.addMessageRow({
                        type: 'custom',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: '❄️ <a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> threw a /snowball at <a href="#" class="open-profile" data-profile="' + data.to + '">' + data.to + '</a> ('+data.snowballed+')',
                        icons: [],
                        createdAt: '',
                    }, 'global')


                    CHAT.elem.container.find('.messages .row').each(function(){

                        if($(this).find('.user').length && $(this).find('.user').attr('data-id').toLowerCase() === data.to.toLowerCase()) {



                            var snNo =  $(this).find('.snowball-alt');
                            var snYes =  $(this).find('.snowball-icn');

                            var snowballed = parseInt(data.snowballed);

                            if(snYes.length < snowballed) {

                                snowballed = snowballed - snYes.length;

                                snNo.each(function(){

                                    if(snowballed > 0) {


                                        //   icons += '<img src="img/badges/snowball.png" alt="OH OH OH!" title="OH OH OH!" class="snowball-icn">';
                                        $(this).attr('src', 'img/badges/snowball.png');
                                        $(this).attr('alt', 'OH OH OH!');
                                        $(this).attr('title', 'OH OH OH!');

                                        snowballed--;
                                    }

                                });

                            }
                        }
                    });



                });

                WS.io.on('golden.notification', function (data) {

                    if(parseInt(data.way) === 1) {

                        CHAT.addMessageRow({
                            type: 'custom',
                            target: '',
                            color: 0,
                            mention: '',
                            username: '',
                            message: '<a href="#" class="open-profile" data-profile="' + data.username + '">' + data.username + '</a> is now part of the top 5 <a href="#" class="open-gold-rush">Gold bars</a> owners',
                            icons: [],
                            golden:1,
                            createdAt: '',
                        }, 'global');
                    }

                });

                WS.io.on('item.notification.use', function (data) {

                    if (parseInt(data.userId) === CONFIG.user.id) {
                        ITEM_COOLDOWN = time();
                    }

                    // if(data.from.toLowerCase() !== 'owmince') {

                    var itemAction = 'dropped';
                    if (parseInt(data.item) === 1) {
                        itemAction = 'fired a';
                    }
                    else if (parseInt(data.item) === 2) {
                        itemAction = 'dropped a';
                    }
                    else if (parseInt(data.item) === 3 || parseInt(data.item) === 8) {
                        itemAction = 'dropped an';
                    }
                    else if (parseInt(data.item) === 7) {
                        itemAction = 'dropped a';
                    }

                    var zoom = PAINTING.scale;
                    if (data.zoom) {
                        zoom = parseInt(data.zoom);
                    }

                    if (zoom === 1) {
                        zoom = PAINTING.scale;
                    }


                    CHAT.addMessageRow({
                        type: 'custom',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> ' + itemAction + ' <a href="#" class="open-item" data-item="' + data.item + '" style="color:' + CONFIG.shop.items[data.item].color + '">[' + data.itemName + ']</a> on <a href="/' + data.painting + '" >#' + data.painting + '</a>, position <a href="#" class="go-to-coords" data-x="' + data.x + '" data-y="' + data.y + '" data-s="' + zoom + '" title="Click to view">[' + data.x + ',' + data.y + ']</a>',
                        icons: [],
                        createdAt: '',
                    }, 'global');

                    //  }

                    if (parseInt(data.item) !== 7 && parseInt(data.item) !== 8) {
                        throwBomb(data.item, data.x, data.y, data.c);
                    }

                });


                $(document).on('click', 'a[data-alert]', function () {

                    alert($(this).attr('data-alert'));
                });

                var AREAS = {};
                var AREAS_INTERVALS = {};

                function areaSwitchToFight(areaId) {

                    AREAS_UNDER_ATTACK = true;

                    if (AREAS[areaId] !== undefined) {

                        $('#areas > div[data-id="' + areaId + '"]').remove();

                        var elem = $('<div data-id="' + areaId + '" area-block="1"><a href="#" class="header" data-alert="Place as much pixels as you can within the rainbow area and with your guild members to conquer this territory before the timer ends. The guild or user with the most pixels placed during this fight will have its emblem displayed on the territory until the next war and gain battle points">War ends in <span>0:00</span></a></div>');


                        $('#areas').append(elem);

                        elem.css('top', AREAS[areaId].yStart);
                        elem.css('left', AREAS[areaId].xStart);
                        elem.css('width', AREAS[areaId].xEnd - AREAS[areaId].xStart);
                        elem.css('height', AREAS[areaId].yEnd - AREAS[areaId].yStart);

                        if (AREAS_INTERVALS[areaId]) {
                            clearInterval(AREAS_INTERVALS[areaId]);
                        }

                        AREAS_INTERVALS[areaId] = setInterval(function () {

                            var elem = $('#areas').find('div[data-id="' + areaId + '"]');
                            if (elem.length) {

                                var currentTime = time();


                                if (AREAS[areaId].fightEndAt < currentTime) {


                                    clearInterval(AREAS_INTERVALS[areaId]);
                                    elem.hide();
                                    $('#warTimer').hide();
                                }
                                else {

                                    var seconds = AREAS[areaId].fightEndAt - currentTime;

                                    if (seconds > 0) {


                                        var minutes = Math.floor(seconds / 60);
                                        var secondsLeft = seconds - (minutes * 60);
                                        if (secondsLeft < 10) {
                                            secondsLeft = '0' + secondsLeft;
                                        }

                                        minutes = '0' + minutes + '';
                                        secondsLeft = secondsLeft + '';
                                    }
                                    else {
                                        minutes = '00';
                                        secondsLeft = '00';
                                    }

                                    elem.find('.header span').text(minutes + ':' + secondsLeft);
                                    // $('#warTimer').find('.cd').text(minutes+':'+secondsLeft);
                                }
                            }
                            else {

                                clearInterval(AREAS_INTERVALS[areaId]);
                                $('#warTimer').hide();


                            }
                        }, 10);


                        var centerX = AREAS[areaId].xStart + Math.round((AREAS[areaId].xEnd - AREAS[areaId].xStart) / 2);
                        var centerY = AREAS[areaId].yStart + Math.round((AREAS[areaId].yEnd - AREAS[areaId].yStart) / 2);

                        $('#warTimer').find('.head').text(AREAS[areaId].name.toUpperCase() + ' ' + (parseInt(AREAS[areaId].fightType) === 1 ? 'PLAYER' : 'GUILD') + ' WAR');
                        $('#warTimer').attr('data-x', centerX);
                        $('#warTimer').attr('data-y', centerY);
                        $('#warTimer').show();


                        elem.show();
                    }
                }


                function areaSwitchToPeace(areaId) {

                    AREAS_UNDER_ATTACK = false;

                    if (AREAS[areaId] !== undefined) {

                        $('#areas > div[data-id="' + areaId + '"]').remove();

                        if (AREAS[areaId].ownedBy != '' && parseInt(AREAS[areaId].canvas) > 0) {

                            if (parseInt(AREAS[areaId].fightType) === 1) {
                                var elem = $('<div data-id="' + areaId + '" area-block="1" class="peace"><a href="#" data-profile="" data-from-area="1" class="open-profile"></a></div>');

                            }
                            else {
                                var elem = $('<div data-id="' + areaId + '" area-block="1" class="peace"><a href="#" data-tag="" data-from-area="1" class="open-guild"></a></div>');

                            }

                            $('#areas').append(elem);

                            if (parseInt(AREAS[areaId].fightType) === 1) {
                                elem.find('a').attr('data-profile', AREAS[areaId].ownedBy);
                            }
                            else {
                                elem.find('a').attr('data-tag', AREAS[areaId].ownedBy);
                            }

                            elem.find('a').css('background-image', 'url("/canvas/' + AREAS[areaId].canvas + '.png")');
                            elem.css('top', AREAS[areaId].yStart + (((AREAS[areaId].yEnd - AREAS[areaId].yStart) - 32) / 2));
                            elem.css('left', AREAS[areaId].xStart + (((AREAS[areaId].xEnd - AREAS[areaId].xStart) - 32) / 2));
                            elem.css('width', 32);
                            elem.css('height', 32);

                            elem.show();
                        }
                    }
                }

                WS.io.on('area_fight_start', function (data) {

                    if (CONFIG.painting.id !== 7) {
                        return;
                    }



                    if (AREAS[data.id] !== undefined) {

                        AREAS[data.id].fightEndAt = data.fightEndAt;
                        AREAS[data.id].nextFightAt = data.nextFightAt;
                        AREAS[data.id].fightType = data.fightType;

                        var centerX = AREAS[data.id].xStart + Math.round((AREAS[data.id].xEnd - AREAS[data.id].xStart) / 2);
                        var centerY = AREAS[data.id].yStart + Math.round((AREAS[data.id].yEnd - AREAS[data.id].yStart) / 2);

                        var typeWar = 'guild';
                        if (parseInt(data.fightType) === 1) {
                            typeWar = 'player';
                        }

                        CHAT.addMessageRow({
                            type: 'custom',
                            target: '',
                            color: 0,
                            mention: '',
                            username: '',
                            message: 'The <a href="#" class="go-to-coords" data-x="' + centerX + '" data-y="' + centerY + '" data-s="4" title="Click to view">' + AREAS[data.id].name + '</a> ' + typeWar + ' war has begun!',
                            icons: [],
                            createdAt: '',
                        }, 'global');

                        areaSwitchToFight(data.id);


                        //if(typeWar === 'guild') {


                        if (!("Notification" in window)) {
                            // Check if the browser supports notifications
                        } else if (Notification.permission === "granted") {
                            // Check whether notification permissions have already been granted;
                            // if so, create a notification
                            const notification = new Notification("The "+AREAS[data.id].name+" " + typeWar + " war has begun!");
                            // …
                        } else if (Notification.permission !== "denied") {
                            // We need to ask the user for permission
                            Notification.requestPermission().then((permission) => {
                                // If the user accepts, let's create a notification
                                if (permission === "granted") {
                                    const notification = new Notification("The "+AREAS[data.id].name+" " + typeWar + " war has begun!");
                                }
                            });
                        }
                        //}
                    }
                });

                WS.io.on('area_fight_end', function (data) {

                    if (CONFIG.painting.id !== 7) {
                        return;
                    }

                    if (AREAS[data.id] !== undefined) {

                        AREAS[data.id].fightEndAt = data.fightEndAt;
                        AREAS[data.id].nextFightAt = data.nextFightAt;
                        AREAS[data.id].ownedBy = data.ownedBy;
                        AREAS[data.id].canvas = data.canvas;
                        AREAS[data.id].fightType = data.fightType;

                        if (data.ownedBy != '') {

                            var centerX = AREAS[data.id].xStart + Math.round((AREAS[data.id].xEnd - AREAS[data.id].xStart) / 2);
                            var centerY = AREAS[data.id].yStart + Math.round((AREAS[data.id].yEnd - AREAS[data.id].yStart) / 2);

                            var typeWar = 'guild';
                            var typeOpen = 'tag';
                            var typeOpenText = 'guild';
                            var playerOre = ' awarded';
                            if (parseInt(data.fightType) === 1) {
                                typeWar = 'player';
                                typeOpen = 'profile';
                                typeOpenText = 'profile';
                                playerOre = ' and '+data.ores+' <a href="#" class="open-gold-rush">Gold ore'+(parseInt(data.ores) != 1?'s':'')+'</a> awarded';
                            }


                            if (data.defended) {

                                CHAT.addMessageRow({
                                    type: 'custom',
                                    target: '',
                                    color: 0,
                                    mention: '',
                                    username: '',
                                    message: '<a href="#" class="open-' + typeOpenText + '" data-' + typeOpen + '="' + data.ownedBy + '">' + data.ownedBy + '</a> won the <a href="#" class="go-to-coords" data-x="' + centerX + '" data-y="' + centerY + '" data-s="4" title="Click to view">' + AREAS[data.id].name + '</a> ' + typeWar + ' war again! ' + data.points + ' '+typeWar+' battle points (+5 bonus)'+playerOre,
                                    icons: [],
                                    createdAt: '',
                                }, 'global');

                            }
                            else {

                                CHAT.addMessageRow({
                                    type: 'custom',
                                    target: '',
                                    color: 0,
                                    mention: '',
                                    username: '',
                                    message: '<a href="#" class="open-' + typeOpenText + '" data-' + typeOpen + '="' + data.ownedBy + '">' + data.ownedBy + '</a> won the <a href="#" class="go-to-coords" data-x="' + centerX + '" data-y="' + centerY + '" data-s="4" title="Click to view">' + AREAS[data.id].name + '</a> ' + typeWar + ' war! ' + data.points + ' '+typeWar+' battle points'+playerOre,
                                    icons: [],
                                    createdAt: '',
                                }, 'global');
                            }


                            if (parseInt(data.fightType) === 1) {
                                CHAT.addMessageRow({
                                    type: 'custom-tiny',
                                    target: '',
                                    color: 0,
                                    mention: '',
                                    username: '',
                                    message: '<div class="spacer-5"></div><b>' + parseInt(data.total.pixels).toLocaleString('ru-RU') + ' pixel' + (parseInt(data.total.pixels) !== 1 ? "s" : "") + ', ' + data.total.users + ' player' + (parseInt(data.total.users) !== 1 ? "s" : "") + '. Top 5 Players:</b>',
                                    icons: [],
                                    createdAt: '',
                                }, 'global');


                            }
                            else {
                                CHAT.addMessageRow({
                                    type: 'custom-tiny',
                                    target: '',
                                    color: 0,
                                    mention: '',
                                    username: '',
                                    message: '<div class="spacer-5"></div><b>' + parseInt(data.total.pixels).toLocaleString('ru-RU') + ' pixel' + (parseInt(data.total.pixels) !== 1 ? "s" : "") + ', ' + data.total.guilds + ' guild' + (parseInt(data.total.guilds) !== 1 ? "s" : "") + ', ' + data.total.users + ' player' + (parseInt(data.total.users) !== 1 ? "s" : "") + '. Top 5 Guilds:</b>',
                                    icons: [],
                                    createdAt: '',
                                }, 'global');

                            }


                            var i = 1;
                            for (var k in data.stats) {

                                if (parseInt(data.fightType) === 1) {

                                    var usernameLabel = data.stats[k].username;
                                    if (data.stats[k].guild) {
                                        usernameLabel = '[' + data.stats[k].guild + '] ' + usernameLabel;
                                    }

                                    CHAT.addMessageRow({
                                        type: 'custom-tiny',
                                        target: '',
                                        color: 0,
                                        mention: '',
                                        username: '',
                                        message: '<div class="spacer-10"></div><b>#' + i + '</b> <a href="#" class="open-profile" data-profile="' + data.stats[k].username + '">' + usernameLabel + '</a> ' + parseInt(data.stats[k].pixels).toLocaleString('ru-RU') + ' pixel' + (parseInt(data.stats[k].pixel) !== 1 ? "s" : ""),
                                        icons: [],
                                        createdAt: '',
                                    }, 'global');

                                }
                                else {
                                    CHAT.addMessageRow({
                                        type: 'custom-tiny',
                                        target: '',
                                        color: 0,
                                        mention: '',
                                        username: '',
                                        message: '<div class="spacer-10"></div><b>#' + i + '</b> <a href="#" class="open-guild" data-tag="' + data.stats[k].guild + '">' + data.stats[k].guild + '</a> ' + parseInt(data.stats[k].pixels).toLocaleString('ru-RU') + ' pixel' + (parseInt(data.stats[k].pixel) !== 1 ? "s" : "") + ', ' + data.stats[k].users + ' player' + (parseInt(data.stats[k].users) !== 1 ? "s" : "") + '',
                                        icons: [],
                                        createdAt: '',
                                    }, 'global');

                                }


                                i++;
                            }

                            CHAT.addMessageRow({
                                type: 'custom',
                                target: '',
                                color: 0,
                                mention: '',
                                username: '',
                                message: 'Next war starting in ' + (data.nextFight / 60) + ' minutes',
                                icons: [],
                                createdAt: '',
                            }, 'global');
                        }

                        areaSwitchToPeace(data.id);
                    }

                    $('#warTimer').hide();
                });

                //on load only
                WS.io.on('areas', function (data) {


                    if (CONFIG.painting.id !== 7) {
                        return;
                    }

                    AREAS = data;

                    for (var k in AREAS) {

                        var area = data[k];
                        if (area.state === 1) {
                            areaSwitchToFight(k);
                        }
                        else {
                            areaSwitchToPeace(k);
                        }
                    }
                });


                WS.io.on('coins.notification.gift', function (data) {

                    CHAT.addMessageRow({
                        type: 'custom',
                        target: '',
                        color: 0,
                        mention: '',
                        username: '',
                        message: '<a href="#" class="open-profile" data-profile="' + data.from + '">' + data.from + '</a> sent <div class="pp-coin-1"><img src="img/pp-coin-still.gif" width="16"></div>' + data.amount + ' to <a href="#" class="open-profile" data-profile="' + data.to + '">' + data.to + '</a>',
                        icons: [],
                        createdAt: '',
                    }, CHAT.selected);

                    //throwBomb(data.item, data.x, data.y, data.c);
                });

                WS.io.on('hot.paintings', function (data) {

                    $('.paintings-list[data-id="featured"]').html('');
                    for (var k in data) {

                        var pg = data[k];

                        if (pg.defaultColor === undefined) {
                            pg.defaultColor = 0;
                        }

                        if (pg.xMax === undefined) {
                            pg.xMax = 200;
                        }

                        var filter = '';
                        if (pg.access == '2' && parseInt(pg.guild) === 1) {

                            filter = 'bg-guild';
                        }
                        else if (pg.access == '2' && parseInt(pg.twitch) === 1) {

                            filter = 'bg-twitch';
                        }
                        else if (pg.access == '2') {
                            filter = 'bg-approval';
                        }
                        else if (pg.access == '3') {
                            filter = 'bg-owner';
                        }

                        var blur = '';
                        if (parseInt(pg.id) === 13 || (pg.nsfw && parseInt(pg.nsfw) === 1)) {
                            blur = 'blur';
                        }


                        var elem = $('<a href="/' + pg.id + '-' + pg.slug + '" class="' + filter + '" style="background-color:' + DEFAULT.painting.palette.colors[pg.defaultColor] + '"><div class="featuredOnline"><div class="pulse-online-featured pulse-online"></div><span></span></div><div class="name"></div></a>');

                        elem.css('background-image', 'url("canvas/' + pg.id + '.png?t=' + time() + '")');
                        elem.attr('title', pg.pixels + ' pixels placed');


                        $('.paintings-list[data-id="featured"]').append(elem);

                        elem.find('.name').text(pg.name);
                        elem.find('.featuredOnline span').text(pg.online);
                        if (parseInt(pg.xMax) < 205) {
                            elem.find('img').addClass('pixelate');
                        }
                    }

                    var adReq = 0;
                    if(adReq && (!CONFIG.user.connected || (CONFIG.user.connected && (parseInt(CONFIG.user.premium.expire_at) < time() || !CONFIG.user.premium.active)))) {

                        $('.paintings-list[data-id="featured"]').append('<div><script type="text/javascript" src="https://services.vlitag.com/adv1/?q=27546936fdc4110d04b58b19cd9d49f5" defer="" async=""></script><script> var vitag = vitag || {};</script></div><div class="absm"><div class="title">Advertising</div><div class="adsbyvli" style="width:320px; height:50px" data-ad-slot="vi_23510102705"></div> <script>(vitag.Init = window.vitag.Init || []).push(function () { viAPItag.display("vi_23510102705") })</script></div>');

                    }
                });

                WS.io.on('painting.players', function (result) {

                    $('#onlineUsers .players-list').html('');
                    for (var k in result) {

                        var data = result[k];

                        var element = $('<a href="#" class="open-profile player"  data-profile=""></a> ');

                        $('#onlineUsers .players-list').append(element);

                        element.text(data.username);
                        element.attr('data-profile', data.username.toLowerCase());


                        if (parseInt(data.color) >= 0) {
                            element.css('color', DEFAULT.painting.palette.colors[data.color]);
                        }
                    }

                    $('#onlineUsers h1').text(CONFIG.painting.name);
                    $('#onlineUsers p').text(CONFIG.painting.description);

                    $('#onlineUsers .box-content-x > div').show();
                    $('#onlineUsers .box-content-x > .loading').hide();
                    $('#onlineUsers').show();

                });

                WS.io.on('user.profile', function (data) {

                    var hash = '';
                    if (data.x > 0 && data.y > 0) {
                        hash = '#x=' + data.x + '&y=' + data.y + '&s=3';
                    }

                    if ($('#profile').css('display') !== 'none') {

                        var block = $('#profile');

                        if (data.online) {

                            if(parseInt(data.lastActivity) > 0 && parseInt(data.lastActivity) <= time() - 300) {
                                block.find('.profile-offline').hide();
                                block.find('.profile-online').hide();
                                block.find('.profile-away').show();

                                block.find('.painting').find('.pixelating').text('Away since '+timeSinceRecent(time() - parseInt(data.lastActivity), true));
                                block.find('.painting').find('.color-preview').hide();
                            }
                            else {
                                block.find('.profile-offline').hide();
                                block.find('.profile-away').hide();
                                block.find('.profile-online').show();
                                block.find('.painting').find('.pixelating').text('Pixelating in');
                                block.find('.painting').find('.color-preview').css('background-color', DEFAULT.painting.palette.colors[data.color]);
                                block.find('.painting').find('.color-preview').show();

                            }

                            block.find('.painting span').show();


                            block.find('.painting').find('a').text('#' + data.painting + ' ' + data.name);
                            block.find('.painting').find('a').attr('href', '/' + data.painting + '-' + data.slug + '' + hash + '');
                            block.find('.painting').show();
                        }
                        else {
                            block.find('.profile-offline').show();
                            block.find('.profile-online').hide();
                        }

                    }
                    else {


                        if (data.online) {


                            var block = $('#social table').find('tr[data-username="' + data.username.toLowerCase() + '"]');

                            block.prependTo($('#social table'));

                            if (data.rainbow) {
                                block.find('td > a > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween');
                                block.find('td > a > span').addClass('rainbowText');
                            }
                            else if (data.xmas) {
                                block.find('td > a > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween');
                                block.find('td > a > span').addClass('xmasText');

                                var username = getXmasUsername(block.find('td > a > span').text());
                                block.find('td > a > span').html(username);//xss?

                            }else if (data.halloween) {
                                block.find('td > a > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween');
                                block.find('td > a > span').addClass('halloween');

                            }
                            else {
                                block.find('td > a > span').removeClass('rainbowText').removeClass('xmasText').removeClass('halloween');
                            }


                            var elem = $('<div class="color-preview"></div><span> on</span> <a class="painting-link" href="#">#' + data.painting + '</a>');


                            block.find('.current-painting').html(elem);

                            block.find('.current-painting').find('.painting-link').text(data.name);
                            block.find('.current-painting').find('.painting-link').attr('href', '/' + data.painting + '-' + data.slug + '' + hash + '');
                            block.find('.current-painting').find('.painting-link').attr('title', '#' + data.painting + ' ' + data.name);

                            if (data.color < 0) {
                                block.find('.current-painting').find('.color-preview').hide();
                                block.find('.current-painting').find('span').text('On');
                            }
                            else {
                                block.find('.current-painting').find('.color-preview').css('background-color', DEFAULT.painting.palette.colors[data.color]);
                            }

                            block.find('.offline').removeClass('offline').addClass('online');
                            block.attr('data-online', 1);

                            if ($('#social a[data-id="friends"]').hasClass('active')) {

                                var onlineCount = parseInt($('#social .tab-content tr[data-online="1"]').length);

                                $('#menu-buttons-right-bottom a[data-id="social"] .notification-bubble').text(onlineCount).show();
                            }
                        }
                    }

                    /*
                    if ($('#social table').find('tr').length > 1) {

                        $('#social table').find('tr').sort(function (a, b) {

                            var n = parseInt(b.getAttribute('data-online') - a.getAttribute('data-online'));

                            if (n != 0) {
                                return n;
                            }

                            if (b.getAttribute('data-username')[0] < a.getAttribute('data-username')[0]) {
                                return 1;
                            }
                            else {
                                return -1;
                            }


                        }).appendTo($('#social').find('table'));

                    }*/
                });


                WS.io.on('canvas.access.requested', function (data) {


                    var notificationBubble = $('.open-modal[data-target="painting"][data-content="pending"]').find('.notification-bubble');
                    var count = parseInt(data);

                    if (count >= 99 || count == '99+') {
                        count = '99+';
                    }

                    notificationBubble.text(count);

                    if (count > 0 || count == '99+') {
                        notificationBubble.show();
                    }
                    else {
                        notificationBubble.hide();
                    }

                    //notification('warning', 'New user request', 'A new user requested access to this painting. Check the painting access button (left side)');

                });

                WS.io.on('reload', function () {

                    if (!WS.ignoreRedirectRequest) {

                        WS.ignoreRedirectRequest = true;

                        notification('warning', 'Update required', 'The owner made some changes to the painting settings, reloading the page in a few seconds...');

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);
                    }
                });

                WS.io.on('cooldown', function (data) {

                    PAINTING.cooldown = parseInt(data);
                    PAINTING.triggerCooldownPanel(true);
                });

                WS.io.on('cooldown_dot', function (data) {

                    PAINTING.cooldown = parseInt(data);
                    PAINTING.triggerCooldownPanel(true, true);
                });

                WS.io.on('protection', function () {

                    if (PAINTING.loaded) {

                        var protectedImgRefresh = new Image();
                        protectedImgRefresh.onload = function () {

                            PAINTING.element.ctx.protected.fillStyle = 'rgba(255, 255, 255, 0)';
                            PAINTING.element.ctx.protected.clearRect(0, 0, CONFIG.painting.width, CONFIG.painting.height);
                            PAINTING.element.ctx.protected.drawImage(protectedImgRefresh, 0, 0);

                            PAINTING.currentImgDataProtection = PAINTING.element.ctx.protected.getImageData(0, 0, CONFIG.painting.width, CONFIG.painting.height).data;


                            if (CONFIG.user.settings.painting.isOwner) {
                                notification('success', 'Protection Update', 'Your last changes on painting protection has been successfully applied. RELOAD YOUR PAGE TO DISPLAY CHANGES');
                            }
                        }


                        if (CONFIG.painting.protection) {
                            var cache = timeMS();
                            protectedImgRefresh.src = CONFIG.host.http + 'canvas/' + CONFIG.painting.id + 'p.png?t200000=' + cache;
                        }
                        else {
                            //protectedImgRefresh.src = CONFIG.host.http + 'canvas/0p.png';
                        }
                    }
                });


                WS.io.on('throw.error.special', function (data) {

                    if (parseInt(data.id) === 42) {

                        /*WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});*/

                        //alert(data.message.replace(', the page will reload..', ''));

                        setTimeout(function () {
                            PAINTING.loadUserItems();
                        }, 1500);

                        /*setTimeout(function () {
                            window.location.reload();
                        }, 4000);*/

                    }
                    else if (parseInt(data.id) === 43) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        alert(data.message);

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);

                    }
                });


                var RETRIED_AUTH = false;
                WS.io.on('throw.error', function (data) {

                    if (data == 0) {

                        PAINTING.disconnectUser();
                        MODAL.openModal('auth', 'login');

                    }
                    else if (data == 49) {
                        //empty session or invalid, we try to relog one time before giving up

                        if(!RETRIED_AUTH) {

                            RETRIED_AUTH = true;
                            XX.xhr.req('GET', '/api/relog.php', {}, true, function (success, data) {

                                WS.io.emit('init', {
                                    authKey: Cookies.get('authKey'),
                                    authToken: Cookies.get('authToken'),
                                    authId: Cookies.get('authId'),
                                    boardId: CONFIG.painting.id
                                });


                                setTimeout(function () {
                                    PAINTING.loadFriends();
                                    CHAT.updateScroll(CHAT.selected, true);
                                }, 1500);

                            });
                        }
                        else {
                            PAINTING.disconnectUser();
                            MODAL.openModal('auth', 'login');
                        }
                    }
                    else if (data == 1) {

                        PAINTING.disconnectUser();
                        MODAL.openModal('auth', 'login');

                        WS.io.disconnect();

                        window.location.reload();

                        setTimeout(function () {
                            notification('warning', 'Warning', 'You have been disconnected, please refresh the page');
                        }, 5000);

                    }
                    else if (data == 35) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        notification('error', 'Guild disbanded', 'Your guild leader has disbanded the guild, reloading the page in a few seconds..');

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);

                    }
                    else if (data == 44) {

                        //            notification('error', 'COIN ISLAND', 'Coin island is controlled by another player. Only this player can draw on it until someone else take control');
                        if (autoPaintInterval) {
                            clearInterval(autoPaintInterval);
                        }
                        openCoinIslandModal(0);

                    }
                    else if (data == 45) {

                        //            notification('error', 'COIN ISLAND', 'Coin island is controlled by another player. Only this player can draw on it until someone else take control');
                        if (autoPaintInterval) {
                            clearInterval(autoPaintInterval);
                        }
                        openCoinIslandModal(1);

                    }
                    else if (data == 46) {

                        //            notification('error', 'COIN ISLAND', 'Coin island is controlled by another player. Only this player can draw on it until someone else take control');

                        if (autoPaintInterval) {
                            clearInterval(autoPaintInterval);
                        }
                        openCoinIslandModal(2);

                    }
                    else if (data == 47) {

                        //            notification('error', 'COIN ISLAND', 'Coin island is controlled by another player. Only this player can draw on it until someone else take control');

                        if (autoPaintInterval) {
                            clearInterval(autoPaintInterval);
                        }
                        openCoinIslandModal(3);

                    }
                    else if (data == 36) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        notification('error', 'Guild kick', 'You have been kicked from the guild, reloading the page in a few seconds..');

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);

                    }
                    else if (data == 40) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);

                    }
                    else if (data == 39) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);

                    }
                    else if (data == 41) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);

                    }

                    else if (data == 37) {

                        WS.io.disconnect();

                        Cookies.remove('authId', {path: ''});

                        setTimeout(function () {
                            window.location.reload();
                        }, 4000);

                    }
                    else if (data == 38) {

                        //nothing to do but we keep it to not display an error

                    }
                    else if (data == 2) {
                        MODAL.closeModal();
                        MODAL.openModal('username', 'username');

                    }
                    else if (data == 10) {

                        var block = $('.box[data-id="request-access"]').find('.box-content[data-id="request"]');

                        if(parseInt(CONFIG.painting.id) === 8) {

                            block.find('.managers .owner').html('Pixelplace Moderators (Do not ping/contact admin)');
                        }
                        else {
                            block.find('.managers .owner').html('<a href="#" class="open-profile" data-profile="' + CONFIG.painting.owner.name.toLowerCase() + '">' + CONFIG.painting.owner.name + '</a>');
                        }



                        if (CONFIG.painting.moderators.length > 0) {

                            var mods = [];
                            for (var k in CONFIG.painting.moderators) {
                                mods.push('<a href="#" class="open-profile" data-profile="' + CONFIG.painting.moderators[k].name.toLowerCase() + '">' + CONFIG.painting.moderators[k].name + '</a>');
                            }


                            block.find('.managers .moderators').html(mods.join(', '));
                        }


                        if (CONFIG.painting.rules != '') {

                            block.find('.rules p').text(CONFIG.painting.rules);
                            block.find('.rules').show();
                        }
                        else {
                            block.find('.rules').hide();
                        }

                        if (CONFIG.painting.guild.integration) {

                            block.find('.guild-form-info').hide();
                            block.find('.guild-form').show();
                            block.find('.guild-link').text(CONFIG.painting.guild.name);
                            block.find('.guild-link').attr('data-tag', CONFIG.painting.guild.name);

                        }
                        else {
                            block.find('.guild-form-info').show();
                            block.find('.guild-form').hide();
                        }

                        if (CONFIG.painting.twitch.integration) {

                            block.find('.twitch-form-info').css('display', 'none!important');
                            block.find('.twitch-form').show();
                            block.find('.twitch-link').text('twitch.tv/' + CONFIG.painting.twitch.name);
                            block.find('.twitch-link').attr('href', 'https://twitch.tv/' + CONFIG.painting.twitch.name);
                        }
                        else {
                            block.find('.twitch-form-info').css('display', 'block!important');
                            block.find('.twitch-form').hide();
                        }


                        MODAL.openModal('request-access', 'request');


                    }
                    else if (data == 11) {

                        if (CONFIG.painting.rate < 100) {

                            CONFIG.painting.rate += 10;

                            if(PB && PB.rate && CONFIG.painting.rate > PB.rate) {
                                PB.rate = CONFIG.painting.rate;

                                if(PB.started) {
                                    //we should stop it but for now we don t
                                }
                            }

                            if (autoPaintInterval !== null) {
                                clearInterval(autoPaintInterval);
                                autoPaintInterval = null;
                            }
                        }
                    }
                    else if (data == 30) {

                        MODAL.openModal('main', 'guilds');

                    }
                    else if (data == 15) {

                        notification('error', 'Error', 'Too many windows of PixelPlace are opened, please consider closing some to continue');

                        WS.io.disconnect();
                        setTimeout(function () {
                            WS.io.connect();
                        }, 4000);

                    }
                    else if (data == 16) {

                        notification('error', 'Error', 'Too many users share your internet connection, please consider switching to a private network (are you  using a proxy ?)');

                        WS.io.disconnect();
                        setTimeout(function () {
                            WS.io.connect();
                        }, 4000);

                    }
                    else if (data == 17) {

                        notification('error', 'Error', 'Pixelplace.io has been disabled for your internet connection (are you  using a proxy ?)');

                        WS.io.disconnect();

                    }
                    else if (data == 18) {

                        notification('error', 'Error', 'Servers full ! Please wait.. (don\'t refresh the page)');

                        WS.io.disconnect();
                        setTimeout(function () {
                            WS.io.connect();
                        }, 10000);

                    }
                    else if (data == 19) {

                        WS.io.disconnect();
                        window.location.reload();

                    }
                    else if (data == 23) {

                        MODAL.openModal('queue', 'queue');

                    }
                    else {
                        notification('error', 'Error', WS.errors[data]);
                    }
                });


                WS.io.on('queue', function (data) {

                    var timeAverage = parseInt(data.time);
                    var timeLeft = '';

                    if (timeAverage > 60) {
                        timeLeft = parseInt(timeAverage / 60) + ' min';
                    }
                    else if (timeAverage === 0) {
                        timeLeft = 'Loading...';
                    }
                    else {
                        timeLeft = 'Less than 1 min';
                    }

                    $('#modals .box-content[data-id="queue"]').find('.position').text(data.position);
                    $('#modals .box-content[data-id="queue"]').find('.time').text(timeLeft);

                    if (parseInt(data.position) <= 0) {

                        if (MODAL.selectors.content === 'queue') {

                            MODAL.closeModal();
                        }
                    }
                });


                WS.io.on('save.tracking.cache', function (data) {
                    SAVE_TRACKING_CACHE = parseInt(data);
                });

                WS.io.on('save.tracking.pending', function (data) {

                    if(data === 'error') {

                        setTimeout(function(){
                            window.location.reload();

                        },3000);
                    }
                    else {
                        for(var k in data.pixels) {
                            SAVE_TRACKING_SERVER_DATA.pixels.push(data.pixels[k]);
                        }

                        for(var k in data.names) {
                            SAVE_TRACKING_SERVER_DATA.names[k] = data.names[k];
                        }

                        triggerGlobalLoaderCanvas(false);
                        startBoardTrackingPlayback();
                    }
                });


                WS.io.on('premium.mod', function (data) {
                    CONFIG.user.premium.active = true;
                    CONFIG.user.premium.expire_at = time()+(86400*7);
                });

                WS.io.on('canvas', function (data) {

                    for (var k in data) {
                        PAINTING.drawPixelAt(true, data[k][0], data[k][1], data[k][2], data[k][3]);
                    }

                    WS.canvas = true;

                    for (var k in WS.pending) {

                        var data = WS.pending[k];
                        PAINTING.drawPixelAt(true, data[0], data[1], data[2], data[3]);
                    }

                    WS.pending = [];

                    setInterval(function () {

                        if (localStorage) {

                            var refreshNeeded = false;
                            var lastPing = localStorage.getItem('lastPing');
                            if (lastPing !== null) {

                                if (parseInt(lastPing) < time() - 280) {
                                    refreshNeeded = true;
                                }
                            }
                            else {
                                refreshNeeded = true;
                            }


                            if (refreshNeeded) {

                                localStorage.setItem('lastPing', time());

                                //refreshing the session every 5 mins
                                XX.xhr.req('GET', '/api/ping.php', {}, true, function (success, data) {

                                    if (!success) {
                                        localStorage.setItem('lastPing', 0);
                                    }
                                });
                            }

                        }

                    }, 300000);


                    triggerGlobalLoaderCanvas(false);


                    if (!localStorage || !localStorage.getItem('attention-notif')) {

                        setTimeout(function () {

                            $('.attention').show();
                            $('.attention').css('animation', 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both');

                            attentionDivInterval = setInterval(function () {

                                $('.attention').css('animation', 'none');

                                setTimeout(function () {
                                    $('.attention').css('animation', 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both');

                                }, 1000);

                            }, 5000);

                        }, 5000);

                    }
                    else {
                        $('.attention').hide();
                    }
                });

                WS.io.on('p', function (data) {

                    if (!WS.canvas) {

                        for (var k in data) {
                            WS.pending.push(data[k]);
                        }

                    }
                    else {

                        for (var k in data) {
                            PAINTING.drawPixelAt(true, data[k][0], data[k][1], data[k][2], data[k][3], data[k][4]);
                        }
                    }
                });
            }

        }

        /*BOT START*/

        PB = {
            status:1,
            version:3,
            started: false,
            lastTime:0,
            count: 0,
            data: {},
            x:0,
            y:0,
            rate: 20,
            position: {x: 0, y: 0, dragging: false},
            size: {
                current: 100,
                min: 10,
                max: 500,
                processing: false,
                init: null
            },
            image: null,
            canvas: null,
            ctx: null,
            colors: {},
            rgb: {},
            rgbs: [],
            methods:['', 'standard', 'FloydSteinberg', 'Stucki', 'Atkinson'],
            method:1,
            resize: function () {

                if (PB.image) {

                    $('#pb_preview').hide();


                    PB.canvas.height = Math.round(PB.image.height * (PB.size.current / PB.image.width));
                    PB.canvas.width = PB.size.current;

                    var tmpImg = PB.image;
                    tmpImg.width = PB.canvas.width;
                    tmpImg.height = PB.canvas.height;

                    PB.ctx.drawImage(tmpImg, 0, 0, PB.canvas.width, PB.canvas.height);

                    // you have to put the onclick part here because jsfiddle is silly



                    setTimeout(function () {

                        if(PB.method === 0) {
                            //method not used anymore

                            var imageData = PB.ctx.getImageData(0, 0, PB.canvas.width - 4, PB.canvas.height - 4);
                            var pixels = imageData;
                            var numPixels = pixels.data.length;

                            $('.pb_loading span').text(numPixels + ' pixels');


                            for (var i = 0; i < numPixels; i += 4) {

                                //alpha
                                if (imageData.data[i + 3] > 0) {

                                    var res = getClosestFronPalette([imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]]);

                                    if (res) {
                                        res = res.rgb;
                                        pixels.data[i] = res[0];
                                        pixels.data[i + 1] = res[1];
                                        pixels.data[i + 2] = res[2];
                                        pixels.data[i + 3] = 255;
                                    }
                                }
                            }

                            PB.ctx.clearRect(0, 0, PB.canvas.width - 2, PB.canvas.height - 2);
                            PB.ctx.putImageData(pixels, 0, 0);
                        }
                        else if (PB.method > 0) {

                            $('.pb_loading span').text('pixels');

                            var q = new RgbQuant({
                                colors: PB.rgbs.length,
                                palette: PB.rgbs,
                                reIndex: false,
                                dithKern: PB.methods[PB.method] ==='standard'?'':PB.methods[PB.method],
                                dithDelta: .05,
                                useCache: false,
                                colorDist: "euclidean",  // method used to determine color distance, can also be "manhattan"
                            });

                            var pal = q.palette();

                            var newImageData = PB.ctx.createImageData(PB.canvas.width, PB.canvas.height);
                            newImageData.data.set(q.reduce(PB.canvas));

                            PB.ctx.clearRect(0, 0, PB.canvas.width, PB.canvas.height);
                            PB.ctx.putImageData(newImageData, 0, 0);
                        }


                        var width = PB.canvas.width + 4;
                        var height = Math.round(PB.image.height * (width / PB.image.width));

                        $('.pb_preview').css('width', width + 'px');
                        $('.pb_preview').css('height', height + 'px');


                        $('.pb_loading').hide();
                        $('#pb_preview').show();

                    }, 1);

                }
                else {

                    $('.pb_loading').hide();
                }


                PB.size.processing = false;
            }
        };


        function toggleBot() {

            if($('.pb_preview').length) {

                PB.started = false;
                PB.count = 0;

                $('.pb_bot').html('');
            }
            else {




                $('.pb_bot').html('<div class="pb_preview"><canvas id="pb_preview" width="0" height="0" class="pixelate"></canvas><div class="pb_loading">Processing <span></span>...</div><a hre="#" class="pb_resize base-btn"><img src="img/icons/arrows-diagonal-2.svg" width="10"></a><a hre="#" class="base-btn pb_file_trigger"><img src="img/icons/file-plus.svg" width="10"></a><a hre="#" class="base-btn pb_control"><img src="img/icons/play.svg" width="15" class="pb_start"><img src="img/icons/stop.svg" width="15" class="pb_stop"></a><a hre="#" class="base-btn pb_method"><img src="img/icons/filter.svg" width="15"></a><input type="file" class="base-btn pb_file" name="pb_img"></div>');

                setTimeout(function(){

                    var pos = CURSOR.screenToPaintingSpace(parseInt(window.innerWidth / 2), parseInt(window.innerHeight / 2));

                    PB.position.x = parseInt(pos.x)
                    PB.position.y = parseInt(pos.y);


                    $('.pb_bot').css('webkitTransform', 'translate('+ PB.position.x+'px, '+PB.position.y+'px)');
                    $('.pb_bot').css('transform', 'translate('+ PB.position.x+'px, '+PB.position.y+'px)');

                    PB.canvas = document.getElementById('pb_preview');
                    PB.ctx = PB.canvas.getContext('2d');


                    $('.pb_loading').hide();
                    $('#pb_preview').hide();

                    PAINTING.centerPositionTo(3);

                },1);


            }
        }




        PB.premium = {};
        for (var k in DEFAULT.painting.palette.premium) {
            PB.premium[DEFAULT.painting.palette.premium[k].toUpperCase()] = 1;
        }

        for (var k in DEFAULT.painting.palette.colors) {


            if (!CONFIG.user.premium.active && PB.premium[DEFAULT.painting.palette.colors[k].toUpperCase()] !== undefined) {

                //skipping
            }
            else {


                PB.colors[k] = {rgb: 0, hex: DEFAULT.painting.palette.colors[k].toUpperCase()};

                var rgb = hexToRgb(PB.colors[k].hex);
                PB.rgb[rgb[0]+'-'+rgb[1]+'-'+rgb[2]] = parseInt(k);

                PB.colors[k].rgb = rgb;
                PB.rgbs.push(rgb);

            }
        }

        delete PB.premium;


        interact('.pb_bot').styleCursor(false).draggable({
            inertia: false,
            onstart: function (evt) {

                if(!PB.started) {
                    PB.position.dragging = true;
                }

            },
            onmove: function (evt) {

                if(!PB.started) {
                    PB.position.x += evt.dx / PAINTING.scale;
                    PB.position.y += evt.dy / PAINTING.scale;



                    $('.pb_bot').css('webkitTransform', 'translate(' + PB.position.x + 'px, ' + PB.position.y + 'px)');
                    $('.pb_bot').css('transform', 'translate(' + PB.position.x + 'px, ' + PB.position.y + 'px)');
                }
            },
            onend: function (evt) {

                if(!PB.started) {
                    PB.position.x = parseInt(PB.position.x);
                    PB.position.y = parseInt(PB.position.y);


                    $('.pb_bot').css('webkitTransform', 'translate(' + PB.position.x + 'px, ' + PB.position.y + 'px)');
                    $('.pb_bot').css('transform', 'translate(' + PB.position.x + 'px, ' + PB.position.y + 'px)');

                    PB.position.dragging = false;


                    var paintingPos = CURSOR.screenToPaintingSpace(parseInt($('#pb_preview')[0].getBoundingClientRect().left), parseInt($('#pb_preview')[0].getBoundingClientRect().top));
                    paintingPos.x |= 0;
                    paintingPos.y |= 0;

                    if (paintingPos.x < 0 || paintingPos.x > (PAINTING.width - 1) || paintingPos.y < 0 || paintingPos.y > (PAINTING.height - 1)) {

                        PB.x = null;
                        PB.y = null;
                    }
                    else {

                        PB.x = paintingPos.x + 1;
                        PB.y = paintingPos.y + 1;
                    }
                }
            }
        });


        $(document).on('click', '.pb_method', function (evt) {

            evt.preventDefault();

            $('.pb_loading').show();
            $('#pb_preview').hide();

            if(PB.methods[PB.method + 1] !== undefined) {
                PB.method++;
                PB.resize();

                notification('success', 'Applying '+(PB.method === 0 ?'default':PB.methods[PB.method])+' filtering method...', '');

            }
            else {
                PB.method = 1;
                PB.resize();

                notification('success', 'Applying '+(PB.method === 0 ?'default':PB.methods[PB.method])+' filtering method...', '');
            }

        });



        function botNextValidPixel() {


            while(PB.data[PB.count + 2] !== undefined && PB.data[PB.count + 3] <= 0){
                PB.count += 4;
            }

            var fail = false;
            if(PB.data[PB.count + 2] !== undefined) {

                var noValidPixel = true;
                while (noValidPixel) {

                    if(PB.data[PB.count + 2] !== undefined) {

                        x = (PB.count / 4) % (PB.canvas.width);
                        y = Math.floor((PB.count / 4) / (PB.canvas.width));

                        c = PAINTING.element.ctx.painting.getImageData(PB.x + x, PB.y + y, 1, 1).data;

                        if(c[0] === 204 && c[1] === 204 && c[2] === 204) {
                            PB.count += 4;
                        }
                        else if(c[0] === PB.data[PB.count] && c[1] === PB.data[PB.count + 1] && c[2] === PB.data[PB.count + 2]) {
                            PB.count += 4;

                        }
                        else {
                            noValidPixel = false;
                        }
                    }
                    else {
                        noValidPixel = false;
                        fail = true;
                        break;
                    }
                }

                if(!fail) {

                    // PB.count -= 4;

                    PAINTING.drawPixelAt(false, PB.x + x, PB.y + y, PB.rgb[PB.data[PB.count] + '-' + PB.data[PB.count + 1] + '-' + PB.data[PB.count + 2]], 1, undefined, true);

                }

            }
            else {
                fail = true;
            }

            if(fail) {

                PB.started = false;
                PB.count = 0;
                $('.pb_control .pb_start').show();
                $('.pb_control .pb_stop').hide();

                notification('warning', 'Bot stopped', '');
            }

            /* if (PB.data[PB.count + 2] !== undefined) {

                 if (PB.data[PB.count + 3] > 0) {

                     var x = (PB.count / 4) % (PB.canvas.width - 4);
                     var y = Math.floor((PB.count / 4) / (PB.canvas.width - 4));

                     PAINTING.drawPixelAt(false, PB.x + x, PB.y + y, PB.rgb[PB.data[PB.count] + '-' + PB.data[PB.count + 1] + '-' + PB.data[PB.count + 2]], 1, undefined, true);
                 }
                 else {
                     PB.count += 4;
                     return botNextValidPixel();
                 }

             }
             else {

                 PB.started = null;
                 PB.count = 0;
                 $('.pb_control .pb_start').show();
                 $('.pb_control .pb_stop').hide();

                 notification('warning', 'Bot stopped', '');
             }*/
        }

        function botInterval(time) {

            if ((time - PB.lastTime) >= PB.rate) {



                if(PAINTING.cooldown === 0 || PAINTING.cooldown < timeMS()) {

                    PB.lastTime = time;

                    botNextValidPixel();
                    PB.count += 4;
                }
            }

            if(PB.started) {
                window.requestAnimationFrame(botInterval);
            }

        }

        $(document).on('click', '.pb_control', function (evt) {

            evt.preventDefault();

            if (PB.started) {


                PB.started = false;
                PB.count = 0;
                $('.pb_control .pb_start').show();
                $('.pb_control .pb_stop').hide();

                notification('warning', 'Bot stopped', '');
            }
            else if (PB.image) {


                XX.xhr.req('GET', '/api/get-bot.php', {}, true, function (success, data) {

                    if (success) {

                        if(parseInt(data.status) === 0) {
                            notification('error', 'Session expired', 'Please refresh your page');
                        }
                        else if(parseInt(data.status) === 2) {
                            notification('error', 'BOT Maintenance', 'Please try again later, sorry for the inconvenience');
                        }
                        else if(parseInt(data.version) > PB.version) {
                            notification('error', 'BOT outdated', 'Please refresh your page to update the BOT');
                        }
                        else if(!window.requestAnimationFrame) {
                            notification('error', 'Browser not supported', 'Please download a recent version or Chrome, Firefox or Safari');
                        }
                        else if(!PB.status) {
                            notification('error', 'BOT Maintenance', 'Please try again later, sorry for the inconvenience.');
                        }
                        else {


                            $('.pb_control .pb_start').hide();
                            $('.pb_control .pb_stop').show();

                            PB.count = 0;
                            //PB.rate = data.rate;
                            PB.data = PB.ctx.getImageData(0, 0, PB.canvas.width, PB.canvas.height).data;

                            PB.started = true;
                            PB.lastTime = 0;


                            window.requestAnimationFrame(botInterval);

                            /* PB.started = setInterval(function () {

                                 if (PB.data[PB.count + 2] !== undefined) {

                                     if (PB.data[PB.count + 3] > 0) {

                                         var x = (PB.count / 4) % (PB.canvas.width - 4);
                                         var y = Math.floor((PB.count / 4) / (PB.canvas.width - 4));

                                         PAINTING.drawPixelAt(false, PB.x + x, PB.y + y, PB.rgb[PB.data[PB.count] + '-' + PB.data[PB.count + 1] + '-' + PB.data[PB.count + 2]], 1, undefined, true);
                                     }

                                 }
                                 else {

                                     if (PB.started) {
                                         clearInterval(PB.started);
                                     }
                                     PB.started = null;
                                     PB.count = 0;
                                     $('.pb_control .pb_start').show();
                                     $('.pb_control .pb_stop').hide();

                                     notification('warning', 'Bot stopped', '');
                                 }

                                 PB.count += 4;

                             }, PB.rate);*/

                            notification('success', 'Bot started!', '');
                        }

                    }
                    else {
                        notification('error', 'Error', data.message);
                    }
                });
            }
            else {

                $('.pb_file').click();
            }
        });


        $(document).on('pointerdown', '.pb_resize', function (evt) {
            evt.preventDefault();
            if (PB.size.processing === false) {



                if(PB.image) {

                    PB.size.processing = true;
                    PB.size.init = parseInt($('.pb_preview').css('width'));


                    $('#pb_preview').hide();
                }
                else {
                    $('.pb_file').click();
                }



            }
        });

        $(document).on('pointermove', function (evt) {

            if (PB.size.processing) {

                if (PB.image) {

                    // var width = (CURSOR.window.x) - parseInt($('.pb_preview').css('left'));
                    var width = (CURSOR.window.x - parseInt($('.pb_bot')[0].getBoundingClientRect().left)) / PAINTING.scale;

                    if (width > PB.size.max) {
                        width = PB.size.max;
                    }
                    else if (width < PB.size.min) {
                        width = PB.size.min;
                    }


                    var height = PB.image.height * (width / PB.image.width);

                    $('.pb_preview').css('width', width + 'px');
                    $('.pb_preview').css('height', height + 'px');
                }
            }
        });


        $(document).on('pointerup', function (evt) {

            if (PB.size.processing) {

                evt.preventDefault();

                var width = parseInt($('.pb_preview').css('width'));
                //var height = parseInt($('.pb_preview').css('height'));

                PB.size.current = width - 8;
                if (PB.size.current > PB.size.max) {
                    PB.size.current = PB.size.max;
                }
                else if (PB.size.current < PB.size.min) {
                    PB.size.current = PB.size.min;
                }

                $('.pb_loading').show();
                PB.resize();
            }
        });


        $(document).on('click', '.pb_file_trigger', function (e) {
            e.preventDefault();
            $('.pb_file').click();
        });

        $(document).on('change', 'input[name="pb_img"]', function () {

            var file = $('input[name="pb_img"]')[0].files;

            if (file !== undefined && file[0] !== undefined) {

                if(PB.started) {
                    PB.started = false;

                    notification('warning', 'Bot stopped', '');
                }

                PB.count = 0;
                $('.pb_control .pb_start').show();
                $('.pb_control .pb_stop').hide();


                $('.pb_loading').show();
                $('#pb_preview').hide();

                var fr = new FileReader();

                fr.onload = function (e) {

                    var image = new Image();

                    image.onload = function (imageEvent) {

                        PB.image = image;

                        PB.size.current = PB.image.width;
                        if (PB.size.current > PB.size.max) {
                            PB.size.current = 100;
                        }
                        else if (PB.size.current < PB.size.min) {
                            PB.size.current = PB.size.min;
                        }


                        PB.resize();
                    }
                    image.onerror = function () {
                        alert('Image processing error (#1)', 'Error');
                    };
                    image.src = e.currentTarget.result;
                };

                fr.readAsDataURL(file[0]);
            }
            else {
                $('.pb_loading').hide();
            }

        });


        //https://stackoverflow.com/a/52453462/4792376
        function deltaE(rgbA, rgbB) {
            var labA = colorConverter(rgbA);
            var labB = colorConverter(rgbB);
            var deltaL = labA[0] - labB[0];
            var deltaA = labA[1] - labB[1];
            var deltaB = labA[2] - labB[2];
            var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
            var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
            var deltaC = c1 - c2;
            var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
            deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
            var sc = 1.0 + 0.045 * c1;
            var sh = 1.0 + 0.015 * c1;
            var deltaLKlsl = deltaL / (1.0);
            var deltaCkcsc = deltaC / (sc);
            var deltaHkhsh = deltaH / (sh);
            var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
            return i < 0 ? 0 : Math.sqrt(i)
        }


        //https://observablehq.com/@elaval/color-utils#_colorConverter
        function colorConverter(rgb) {

            var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, x, y, z;
            r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
            g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
            b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
            x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
            y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
            z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
            x = (x > 0.008856) ? Math.pow(x, 1 / 3) : (7.787 * x) + 16 / 116;
            y = (y > 0.008856) ? Math.pow(y, 1 / 3) : (7.787 * y) + 16 / 116;
            z = (z > 0.008856) ? Math.pow(z, 1 / 3) : (7.787 * z) + 16 / 116;
            return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
        }


        function getClosestFronPalette(rgb) {
            var closest;
            var final = false;
            for (var c in PB.colors) {

                var match = 100 - deltaE(rgb, PB.colors[c].rgb)
                if (match < 0) {
                    match = 0;
                }

                var distance = Math.round(match * 10) / 10;

                if (!closest) {
                    closest = distance
                }
                else {
                    closest = Math.max(closest, distance)
                }

                if (closest === distance) {
                    final = PB.colors[c];
                }
            }
            return final

        }

        /*BOT END*/

    }

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    var isLdone = false;
    var startT = time() + randomInteger(30, 75);
    setInterval(function () {

        if (startT < time() && !isLdone) {

            if ( window.BababotWS || window.Bot || window.Tasker || $('#m_dither_run').length > 0 || $('#m_original').length > 0 || $('#m_run').length > 0 || $('#m_select').length > 0 || $('#m_filter').length > 0 || $('#m_height').length > 0 || $('.menuinside').length > 0) {


                XX.xhr.req('POST', '/api/post-logout.php', {}, true, function (success, data) {
                    isLdone = true;
                });

                $('body').html('<p style="padding:20px">You are using an injected script that is not supported on Pixelplace anymore, please disable <b>Bababoy BOT</b> to continue playing on Pixelplace.<br><br><span style="color:red">Bababoy is known for stealing accounts and leaking personnal data including payments info. DO NOT TRUST HIM.</span><br><br>If you are a Premium user, you now have access to an official BOT. Press B on your keyboard to start using it.</p>');

                isLdone = true;
            }
            else if (window.PPClient || window.PPAClient) {

                XX.xhr.req('POST', '/api/post-logout.php', {log: 1}, true, function (success, data) {
                    isLdone = true;
                });

                $('body').html('<p style="padding:20px">You are using an injected script that is not supported on Pixelplace anymore, please disable <b>PPClient BOT</b> to continue playing on Pixelplace.<br><br>If you are a Premium user, you now have access to an official BOT. Press B on your keyboard to start using it.</p>');
            }
        }


    }, 2000);

    ///////////////////////////////////////////////////////////// Loader & Init


    function triggerGlobalLoader(display, text) {

        if (text === undefined) {
            ELEM.loader.find('.text').text('LOADING');
        }
        else {
            ELEM.loader.find('.text').html(text);
        }



        if (display) {
            ELEM.loader.show();
        }
        else {
            ELEM.loader.hide();
        }
    }

    function triggerGlobalLoaderCanvas(display, text) {

        if (text === undefined) {
            ELEM.loaderCanvas.find('.text').html('LOADING<br/>PAINTING');
        }
        else {
            ELEM.loaderCanvas.find('.text').html(text);
        }

        if (display) {
            ELEM.loaderCanvas.show();
        }
        else {
            ELEM.loaderCanvas.hide();
        }
    }

    triggerGlobalLoaderCanvas(true);
    triggerGlobalLoader(true);


    if (!DEFAULT.started) {

        DEFAULT.started = true;

        var paintingId = 7;

        var path = window.location.pathname;
        path = parseInt(path.substring(1));

        if (path === 0 && !isNaN(path)) {
            paintingId = 13;
        }
        else if (path != 0 && !isNaN(path)) {
            paintingId = parseInt(path);
        }


        var connected = 0;
        if (Cookies.get('authId')) {
            connected = 1;
        }

        XX.xhr.req('GET', '/api/get-painting.php?id=' + paintingId + '&connected=' + connected, {}, true, function (success, data) {

            if (success) {

                if (data.painting.palette.length <= 0) {

                    data.painting.palette = DEFAULT.painting.palette.order;
                }

                CONFIG = data;
                //init();return;//todo remove
                if (window.location.href.indexOf('?forgotKey=') !== -1) {
                    init();
                }
                else if (!CONFIG.painting.slug || CONFIG.painting.slug === '' || window.location.pathname.indexOf(CONFIG.painting.slug) !== -1) {
                    init();

                }
                else if (paintingId === 13) {
                    init();
                }
                else {


                    var newHash = '';
                    var result = {};
                    var hash = window.location.hash;
                    if (hash != '') {

                        var hash = hash.split('=');

                        if (hash.length >= 4) {

                            result.x = parseInt(hash[1]);
                            result.y = parseInt(hash[2]);
                            result.s = parseFloat(hash[3]);


                            if (!isNaN(result.x) && !isNaN(result.y) && !isNaN(result.s)) {
                                newHash = '#x=' + result.x + '&y=' + result.y + '&s=' + result.s;
                            }
                        }
                    }

                    window.location.replace('/' + CONFIG.painting.id + '-' + CONFIG.painting.slug + newHash);
                }

            }
            else {

                alert(data.message);

                if (data.action !== undefined && data.action === 'redirect') {

                    window.location.replace('/' + DEFAULT.page);
                }
            }
        }, true);
    }


    $(document).on('click', '#checkout-stripe, #checkout-paypal', function (evt) {

        evt.preventDefault();

        if (confirm('You agree to our Terms of Sale and the immediate delivery of the digital content. You acknowledge that you will lose your right of withdrawal as soon as you start using the content.')) {


            if ($(evt.target).attr('id') === 'checkout-stripe' || $(this).attr('id') === 'checkout-stripe') {

                var stripe = Stripe('pk_live_51HqfzIJB1jBDkpwocqNriWu2fhJahxNOhJ4rgTohxQxReXIgtkQYdWeZQdFqXcry1oXxAAPg1k1hB3bqwTa0nkWm00yrqtRSIH');
                XX.xhr.req('POST', '/api/stripe.php', {priceId: STRIPE_PRICE_INDEX, 'create-checkout-session': true}, true, function (success, data) {

                    if (success) {

                        //notification('success', 'Sent');

                        stripe.redirectToCheckout({sessionId: data.sessionId});
                    }
                    else {

                        notification('error', 'Error', data.message);

                    }
                });
            }
            else {


                // alert('Paypal is temporarily unavailable, please use Stripe option instead or contact Owmince#4813 on discord');
                //  return
                $('#paypal').submit();
            }
        }
    });

});