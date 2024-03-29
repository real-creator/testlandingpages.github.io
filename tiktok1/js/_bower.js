if (function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t) {
            t = t || te;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function a(e) {
            var t = !!e && "length" in e && e.length,
                n = he.type(e);
            return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            return he.isFunction(t) ? he.grep(e, function(e, a) {
                return !!t.call(e, a, e) !== n
            }) : t.nodeType ? he.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? he.grep(e, function(e) {
                return oe.call(t, e) > -1 !== n
            }) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
                return oe.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return he.each(e.match(De) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s(e) {
            return e
        }

        function l(e) {
            throw e
        }

        function c(e, t, n) {
            var a;
            try {
                e && he.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && he.isFunction(a = e.then) ? a.call(e, t, n) : t.call(void 0, e)
            } catch (e) {
                n.call(void 0, e)
            }
        }

        function u() {
            te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
        }

        function d() {
            this.expando = he.expando + d.uid++
        }

        function f(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e)
        }

        function p(e, t, n) {
            var a;
            if (void 0 === n && 1 === e.nodeType)
                if (a = "data-" + t.replace(Oe, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
                    try {
                        n = f(n)
                    } catch (e) {}
                    $e.set(e, t, n)
                } else n = void 0;
            return n
        }

        function h(e, t, n, a) {
            var i, r = 1,
                o = 20,
                s = a ? function() {
                    return a.cur()
                } : function() {
                    return he.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
                u = (he.cssNumber[t] || "px" !== c && +l) && Ge.exec(he.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do r = r || ".5", u /= r, he.style(e, t, u + c); while (r !== (r = s() / l) && 1 !== r && --o)
            }
            return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], a && (a.unit = c, a.start = u, a.end = i)), i
        }

        function m(e) {
            var t, n = e.ownerDocument,
                a = e.nodeName,
                i = He[a];
            return i ? i : (t = n.body.appendChild(n.createElement(a)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), He[a] = i, i)
        }

        function v(e, t) {
            for (var n, a, i = [], r = 0, o = e.length; r < o; r++) a = e[r], a.style && (n = a.style.display, t ? ("none" === n && (i[r] = Re.get(a, "display") || null, i[r] || (a.style.display = "")), "" === a.style.display && ze(a) && (i[r] = m(a))) : "none" !== n && (i[r] = "none", Re.set(a, "display", n)));
            for (r = 0; r < o; r++) null != i[r] && (e[r].style.display = i[r]);
            return e
        }

        function g(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
        }

        function b(e, t) {
            for (var n = 0, a = e.length; n < a; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
        }

        function y(e, t, n, a, i) {
            for (var r, o, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if (r = e[p], r || 0 === r)
                    if ("object" === he.type(r)) he.merge(f, r.nodeType ? [r] : r);
                    else if (Je.test(r)) {
                for (o = o || d.appendChild(t.createElement("div")), s = (We.exec(r) || ["", ""])[1].toLowerCase(), l = qe[s] || qe._default, o.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) o = o.lastChild;
                he.merge(f, o.childNodes), o = d.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = f[p++];)
                if (a && he.inArray(r, a) > -1) i && i.push(r);
                else if (c = he.contains(r.ownerDocument, r), o = g(d.appendChild(r), "script"), c && b(o), n)
                for (u = 0; r = o[u++];) Ke.test(r.type || "") && n.push(r);
            return d
        }

        function C() {
            return !0
        }

        function A() {
            return !1
        }

        function T() {
            try {
                return te.activeElement
            } catch (e) {}
        }

        function x(e, t, n, a, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (a = a || n, n = void 0);
                for (s in t) x(e, s, n, a, t[s], r);
                return e
            }
            if (null == a && null == i ? (i = n, a = n = void 0) : null == i && ("string" == typeof n ? (i = a, a = void 0) : (i = a, a = n, n = void 0)), i === !1) i = A;
            else if (!i) return e;
            return 1 === r && (o = i, i = function(e) {
                return he().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = he.guid++)), e.each(function() {
                he.event.add(this, t, i, a, n)
            })
        }

        function S(e, t) {
            return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function w(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function M(e) {
            var t = at.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function k(e, t) {
            var n, a, i, r, o, s, l, c;
            if (1 === t.nodeType) {
                if (Re.hasData(e) && (r = Re.access(e), o = Re.set(t, r), c = r.events)) {
                    delete o.handle, o.events = {};
                    for (i in c)
                        for (n = 0, a = c[i].length; n < a; n++) he.event.add(t, i, c[i][n])
                }
                $e.hasData(e) && (s = $e.access(e), l = he.extend({}, s), $e.set(t, l))
            }
        }

        function _(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function E(e, t, a, i) {
            t = ie.apply([], t);
            var r, o, s, l, c, u, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = he.isFunction(h);
            if (m || f > 1 && "string" == typeof h && !fe.checkClone && nt.test(h)) return e.each(function(n) {
                var r = e.eq(n);
                m && (t[0] = h.call(this, n, r.html())), E(r, t, a, i)
            });
            if (f && (r = y(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (s = he.map(g(r, "script"), w), l = s.length; d < f; d++) c = r, d !== p && (c = he.clone(c, !0, !0), l && he.merge(s, g(c, "script"))), a.call(e[d], c, d);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, he.map(s, M), d = 0; d < l; d++) c = s[d], Ke.test(c.type || "") && !Re.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
            }
            return e
        }

        function D(e, t, n) {
            for (var a, i = t ? he.filter(t, e) : e, r = 0; null != (a = i[r]); r++) n || 1 !== a.nodeType || he.cleanData(g(a)), a.parentNode && (n && he.contains(a.ownerDocument, a) && b(g(a, "script")), a.parentNode.removeChild(a));
            return e
        }

        function P(e, t, n) {
            var a, i, r, o, s = e.style;
            return n = n || st(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || he.contains(e.ownerDocument, e) || (o = he.style(e, t)), !fe.pixelMarginRight() && ot.test(o) && rt.test(t) && (a = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = a, s.minWidth = i, s.maxWidth = r)), void 0 !== o ? o + "" : o
        }

        function B(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function N(e) {
            if (e in ft) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
                if (e = dt[n] + t, e in ft) return e
        }

        function L(e, t, n) {
            var a = Ge.exec(t);
            return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
        }

        function R(e, t, n, a, i) {
            var r, o = 0;
            for (r = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (o += he.css(e, n + je[r], !0, i)), a ? ("content" === n && (o -= he.css(e, "padding" + je[r], !0, i)), "margin" !== n && (o -= he.css(e, "border" + je[r] + "Width", !0, i))) : (o += he.css(e, "padding" + je[r], !0, i), "padding" !== n && (o += he.css(e, "border" + je[r] + "Width", !0, i)));
            return o
        }

        function $(e, t, n) {
            var a, i = !0,
                r = st(e),
                o = "border-box" === he.css(e, "boxSizing", !1, r);
            if (e.getClientRects().length && (a = e.getBoundingClientRect()[t]), a <= 0 || null == a) {
                if (a = P(e, t, r), (a < 0 || null == a) && (a = e.style[t]), ot.test(a)) return a;
                i = o && (fe.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + R(e, t, n || (o ? "border" : "content"), i, r) + "px"
        }

        function I(e, t, n, a, i) {
            return new I.prototype.init(e, t, n, a, i)
        }

        function O() {
            ht && (e.requestAnimationFrame(O), he.fx.tick())
        }

        function F() {
            return e.setTimeout(function() {
                pt = void 0
            }), pt = he.now()
        }

        function G(e, t) {
            var n, a = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; a < 4; a += 2 - t) n = je[a], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function j(e, t, n) {
            for (var a, i = (H.tweeners[t] || []).concat(H.tweeners["*"]), r = 0, o = i.length; r < o; r++)
                if (a = i[r].call(n, t, e)) return a
        }

        function z(e, t, n) {
            var a, i, r, o, s, l, c, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && ze(e),
                g = Re.get(e, "fxshow");
            n.queue || (o = he._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                o.unqueued || s()
            }), o.unqueued++, f.always(function() {
                f.always(function() {
                    o.unqueued--, he.queue(e, "fx").length || o.empty.fire()
                })
            }));
            for (a in t)
                if (i = t[a], mt.test(i)) {
                    if (delete t[a], r = r || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[a]) continue;
                        m = !0
                    }
                    p[a] = g && g[a] || he.style(e, a)
                }
            if (l = !he.isEmptyObject(t), l || !he.isEmptyObject(p)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = Re.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (v([e], !0), c = e.style.display || c, u = he.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (f.done(function() {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (a in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Re.access(e, "fxshow", {
                    display: c
                }), r && (g.hidden = !m), m && v([e], !0), f.done(function() {
                    m || v([e]), Re.remove(e, "fxshow");
                    for (a in p) he.style(e, a, p[a])
                })), l = j(m ? g[a] : 0, a, f), a in g || (g[a] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function U(e, t) {
            var n, a, i, r, o;
            for (n in e)
                if (a = he.camelCase(n), i = t[a], r = e[n], he.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== a && (e[a] = r, delete e[n]), o = he.cssHooks[a], o && "expand" in o) {
                    r = o.expand(r), delete e[a];
                    for (n in r) n in e || (e[n] = r[n], t[n] = i)
                } else t[a] = i
        }

        function H(e, t, n) {
            var a, i, r = 0,
                o = H.prefilters.length,
                s = he.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (i) return !1;
                    for (var t = pt || F(), n = Math.max(0, c.startTime + c.duration - t), a = n / c.duration || 0, r = 1 - a, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(r);
                    return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: he.extend({}, t),
                    opts: he.extend(!0, {
                        specialEasing: {},
                        easing: he.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: pt || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var a = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(a), a
                    },
                    stop: function(t) {
                        var n = 0,
                            a = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < a; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (U(u, c.opts.specialEasing); r < o; r++)
                if (a = H.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(a.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(a.stop, a)), a;
            return he.map(u, j, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function V(e) {
            var t = e.match(De) || [];
            return t.join(" ")
        }

        function W(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function K(e, t, n, a) {
            var i;
            if (he.isArray(t)) he.each(t, function(t, i) {
                n || Mt.test(e) ? a(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, a)
            });
            else if (n || "object" !== he.type(t)) a(e, t);
            else
                for (i in t) K(e + "[" + i + "]", t[i], n, a)
        }

        function q(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var a, i = 0,
                    r = t.toLowerCase().match(De) || [];
                if (he.isFunction(n))
                    for (; a = r[i++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
            }
        }

        function J(e, t, n, a) {
            function i(s) {
                var l;
                return r[s] = !0, he.each(e[s] || [], function(e, s) {
                    var c = s(t, n, a);
                    return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }), l
            }
            var r = {},
                o = e === Ot;
            return i(t.dataTypes[0]) || !r["*"] && i("*")
        }

        function Y(e, t) {
            var n, a, i = he.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : a || (a = {}))[n] = t[n]);
            return a && he.extend(!0, e, a), e
        }

        function Z(e, t, n) {
            for (var a, i, r, o, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
            if (a)
                for (i in s)
                    if (s[i] && s[i].test(a)) {
                        l.unshift(i);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                        r = i;
                        break
                    }
                    o || (o = i)
                }
                r = r || o
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function Q(e, t, n, a) {
            var i, r, o, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (o = c[l + " " + r] || c["* " + r], !o)
                    for (i in c)
                        if (s = i.split(" "), s[1] === r && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                            o === !0 ? o = c[i] : c[i] !== !0 && (r = s[0], u.unshift(s[1]));
                            break
                        }
                if (o !== !0)
                    if (o && e.throws) t = o(t);
                    else try {
                        t = o(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: o ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function X(e) {
            return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var ee = [],
            te = e.document,
            ne = Object.getPrototypeOf,
            ae = ee.slice,
            ie = ee.concat,
            re = ee.push,
            oe = ee.indexOf,
            se = {},
            le = se.toString,
            ce = se.hasOwnProperty,
            ue = ce.toString,
            de = ue.call(Object),
            fe = {},
            pe = "3.1.1",
            he = function(e, t) {
                return new he.fn.init(e, t)
            },
            me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ve = /^-ms-/,
            ge = /-([a-z])/g,
            be = function(e, t) {
                return t.toUpperCase()
            };
        he.fn = he.prototype = {
            jquery: pe,
            constructor: he,
            length: 0,
            toArray: function() {
                return ae.call(this)
            },
            get: function(e) {
                return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = he.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return he.each(this, e)
            },
            map: function(e) {
                return this.pushStack(he.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ae.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: re,
            sort: ee.sort,
            splice: ee.splice
        }, he.extend = he.fn.extend = function() {
            var e, t, n, a, i, r, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || he.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = o[t], a = e[t], o !== a && (c && a && (he.isPlainObject(a) || (i = he.isArray(a))) ? (i ? (i = !1, r = n && he.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, o[t] = he.extend(c, r, a)) : void 0 !== a && (o[t] = a));
            return o
        }, he.extend({
            expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === he.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = he.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && ue.call(n) === de))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(ge, be)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (a(e))
                    for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(me, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : oe.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, a = 0, i = e.length; a < n; a++) e[i++] = t[a];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var a, i = [], r = 0, o = e.length, s = !n; r < o; r++) a = !t(e[r], r), a !== s && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, o = 0,
                    s = [];
                if (a(e))
                    for (i = e.length; o < i; o++) r = t(e[o], o, n), null != r && s.push(r);
                else
                    for (o in e) r = t(e[o], o, n), null != r && s.push(r);
                return ie.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, a, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return a = ae.call(arguments, 2), i = function() {
                    return e.apply(t || this, a.concat(ae.call(arguments)))
                }, i.guid = e.guid = e.guid || he.guid++, i
            },
            now: Date.now,
            support: fe
        }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            se["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(e) {
            function t(e, t, n, a) {
                var i, r, o, s, l, c, u, f = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!a && ((t ? t.ownerDocument || t : j) !== N && B(t), t = t || N, R)) {
                    if (11 !== h && (l = ge.exec(e)))
                        if (i = l[1]) {
                            if (9 === h) {
                                if (!(o = t.getElementById(i))) return n;
                                if (o.id === i) return n.push(o), n
                            } else if (f && (o = f.getElementById(i)) && F(t, o) && o.id === i) return n.push(o), n
                        } else {
                            if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                        }
                    if (T.qsa && !W[e + " "] && (!$ || !$.test(e))) {
                        if (1 !== h) f = t, u = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(Ae, Te) : t.setAttribute("id", s = G), c = M(e), r = c.length; r--;) c[r] = "#" + s + " " + p(c[r]);
                            u = c.join(","), f = be.test(e) && d(t.parentNode) || t
                        }
                        if (u) try {
                            return Q.apply(n, f.querySelectorAll(u)), n
                        } catch (e) {} finally {
                            s === G && t.removeAttribute("id")
                        }
                    }
                }
                return _(e.replace(se, "$1"), t, n, a)
            }

            function n() {
                function e(n, a) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = a
                }
                var t = [];
                return e
            }

            function a(e) {
                return e[G] = !0, e
            }

            function i(e) {
                var t = N.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), a = n.length; a--;) x.attrHandle[n[a]] = t
            }

            function o(e, t) {
                var n = t && e,
                    a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (a) return a;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function u(e) {
                return a(function(t) {
                    return t = +t, a(function(n, a) {
                        for (var i, r = e([], n.length, t), o = r.length; o--;) n[i = r[o]] && (n[i] = !(a[i] = n[i]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function p(e) {
                for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
                return a
            }

            function h(e, t, n) {
                var a = t.dir,
                    i = t.next,
                    r = i || a,
                    o = n && "parentNode" === r,
                    s = U++;
                return t.first ? function(t, n, i) {
                    for (; t = t[a];)
                        if (1 === t.nodeType || o) return e(t, n, i);
                    return !1
                } : function(t, n, l) {
                    var c, u, d, f = [z, s];
                    if (l) {
                        for (; t = t[a];)
                            if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                    } else
                        for (; t = t[a];)
                            if (1 === t.nodeType || o)
                                if (d = t[G] || (t[G] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[a] || t;
                                else {
                                    if ((c = u[r]) && c[0] === z && c[1] === s) return f[2] = c[2];
                                    if (u[r] = f, f[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function m(e) {
                return e.length > 1 ? function(t, n, a) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, a)) return !1;
                    return !0
                } : e[0]
            }

            function v(e, n, a) {
                for (var i = 0, r = n.length; i < r; i++) t(e, n[i], a);
                return a
            }

            function g(e, t, n, a, i) {
                for (var r, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, a, i) || (o.push(r), c && t.push(s)));
                return o
            }

            function b(e, t, n, i, r, o) {
                return i && !i[G] && (i = b(i)), r && !r[G] && (r = b(r, o)), a(function(a, o, s, l) {
                    var c, u, d, f = [],
                        p = [],
                        h = o.length,
                        m = a || v(t || "*", s.nodeType ? [s] : s, []),
                        b = !e || !a && t ? m : g(m, f, e, s, l),
                        y = n ? r || (a ? e : h || i) ? [] : o : b;
                    if (n && n(b, y, s, l), i)
                        for (c = g(y, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(b[p[u]] = d));
                    if (a) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                                r(null, y = [], c, l)
                            }
                            for (u = y.length; u--;)(d = y[u]) && (c = r ? ee(a, d) : f[u]) > -1 && (a[c] = !(o[c] = d))
                        }
                    } else y = g(y === o ? y.splice(h, y.length) : y), r ? r(null, o, y, l) : Q.apply(o, y)
                })
            }

            function y(e) {
                for (var t, n, a, i = e.length, r = x.relative[e[0].type], o = r || x.relative[" "], s = r ? 1 : 0, l = h(function(e) {
                        return e === t
                    }, o, !0), c = h(function(e) {
                        return ee(t, e) > -1
                    }, o, !0), u = [function(e, n, a) {
                        var i = !r && (a || n !== E) || ((t = n).nodeType ? l(e, n, a) : c(e, n, a));
                        return t = null, i
                    }]; s < i; s++)
                    if (n = x.relative[e[s].type]) u = [h(m(u), n)];
                    else {
                        if (n = x.filter[e[s].type].apply(null, e[s].matches), n[G]) {
                            for (a = ++s; a < i && !x.relative[e[a].type]; a++);
                            return b(s > 1 && m(u), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, s < a && y(e.slice(s, a)), a < i && y(e = e.slice(a)), a < i && p(e))
                        }
                        u.push(n)
                    }
                return m(u)
            }

            function C(e, n) {
                var i = n.length > 0,
                    r = e.length > 0,
                    o = function(a, o, s, l, c) {
                        var u, d, f, p = 0,
                            h = "0",
                            m = a && [],
                            v = [],
                            b = E,
                            y = a || r && x.find.TAG("*", c),
                            C = z += null == b ? 1 : Math.random() || .1,
                            A = y.length;
                        for (c && (E = o === N || o || c); h !== A && null != (u = y[h]); h++) {
                            if (r && u) {
                                for (d = 0, o || u.ownerDocument === N || (B(u), s = !R); f = e[d++];)
                                    if (f(u, o || N, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (z = C)
                            }
                            i && ((u = !f && u) && p--, a && m.push(u))
                        }
                        if (p += h, i && h !== p) {
                            for (d = 0; f = n[d++];) f(m, v, o, s);
                            if (a) {
                                if (p > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = Y.call(l));
                                v = g(v)
                            }
                            Q.apply(l, v), c && !a && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (z = C, E = b), m
                    };
                return i ? a(o) : o
            }
            var A, T, x, S, w, M, k, _, E, D, P, B, N, L, R, $, I, O, F, G = "sizzle" + 1 * new Date,
                j = e.document,
                z = 0,
                U = 0,
                H = n(),
                V = n(),
                W = n(),
                K = function(e, t) {
                    return e === t && (P = !0), 0
                },
                q = {}.hasOwnProperty,
                J = [],
                Y = J.pop,
                Z = J.push,
                Q = J.push,
                X = J.slice,
                ee = function(e, t) {
                    for (var n = 0, a = e.length; n < a; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ae = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ie = "\\[" + ne + "*(" + ae + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]",
                re = ":(" + ae + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                oe = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(re),
                fe = new RegExp("^" + ae + "$"),
                pe = {
                    ID: new RegExp("^#(" + ae + ")"),
                    CLASS: new RegExp("^\\.(" + ae + ")"),
                    TAG: new RegExp("^(" + ae + "|[*])"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ce = function(e, t, n) {
                    var a = "0x" + t - 65536;
                    return a !== a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                },
                Ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Te = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                xe = function() {
                    B()
                },
                Se = h(function(e) {
                    return e.disabled === !0 && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Q.apply(J = X.call(j.childNodes), j.childNodes), J[j.childNodes.length].nodeType
            } catch (e) {
                Q = {
                    apply: J.length ? function(e, t) {
                        Z.apply(e, X.call(t))
                    } : function(e, t) {
                        for (var n = e.length, a = 0; e[n++] = t[a++];);
                        e.length = n - 1
                    }
                }
            }
            T = t.support = {}, w = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, B = t.setDocument = function(e) {
                var t, n, a = e ? e.ownerDocument || e : j;
                return a !== N && 9 === a.nodeType && a.documentElement ? (N = a, L = N.documentElement, R = !w(N), j !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), T.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), T.getElementsByTagName = i(function(e) {
                    return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                }), T.getElementsByClassName = ve.test(N.getElementsByClassName), T.getById = i(function(e) {
                    return L.appendChild(e).id = G, !N.getElementsByName || !N.getElementsByName(G).length
                }), T.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(ye, Ce);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && R) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var t = e.replace(ye, Ce);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && R) {
                        var n, a, i, r = t.getElementById(e);
                        if (r) {
                            if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
                            for (i = t.getElementsByName(e), a = 0; r = i[a++];)
                                if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
                        }
                        return []
                    }
                }), x.find.TAG = T.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, a = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[i++];) 1 === n.nodeType && a.push(n);
                        return a
                    }
                    return r
                }, x.find.CLASS = T.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && R) return t.getElementsByClassName(e)
                }, I = [], $ = [], (T.qsa = ve.test(N.querySelectorAll)) && (i(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + G + "'></a><select id='" + G + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + G + "-]").length || $.push("~="), e.querySelectorAll(":checked").length || $.push(":checked"), e.querySelectorAll("a#" + G + "+*").length || $.push(".#.+[+~]")
                }), i(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = N.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && $.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
                })), (T.matchesSelector = ve.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                    T.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), I.push("!=", re)
                }), $ = $.length && new RegExp($.join("|")), I = I.length && new RegExp(I.join("|")), t = ve.test(L.compareDocumentPosition), F = t || ve.test(L.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        a = t && t.parentNode;
                    return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, K = t ? function(e, t) {
                    if (e === t) return P = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === j && F(j, e) ? -1 : t === N || t.ownerDocument === j && F(j, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return P = !0, 0;
                    var n, a = 0,
                        i = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!i || !r) return e === N ? -1 : t === N ? 1 : i ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (i === r) return o(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[a] === l[a];) a++;
                    return a ? o(s[a], l[a]) : s[a] === j ? -1 : l[a] === j ? 1 : 0
                }, N) : N
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && B(e), n = n.replace(ue, "='$1']"), T.matchesSelector && R && !W[n + " "] && (!I || !I.test(n)) && (!$ || !$.test(n))) try {
                    var a = O.call(e, n);
                    if (a || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                } catch (e) {}
                return t(n, N, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && B(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && B(e);
                var n = x.attrHandle[t.toLowerCase()],
                    a = n && q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
                return void 0 !== a ? a : T.attributes || !R ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, t.escape = function(e) {
                return (e + "").replace(Ae, Te)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    a = 0,
                    i = 0;
                if (P = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(K), P) {
                    for (; t = e[i++];) t === e[i] && (a = n.push(i));
                    for (; a--;) e.splice(n[a], 1)
                }
                return D = null, e
            }, S = t.getText = function(e) {
                var t, n = "",
                    a = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[a++];) n += S(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: a,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ye, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = M(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ye, Ce).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = H[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, a) {
                        return function(i) {
                            var r = t.attr(i, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === a : "!=" === n ? r !== a : "^=" === n ? a && 0 === r.indexOf(a) : "*=" === n ? a && r.indexOf(a) > -1 : "$=" === n ? a && r.slice(-a.length) === a : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(a) > -1 : "|=" === n && (r === a || r.slice(0, a.length + 1) === a + "-"))
                        }
                    },
                    CHILD: function(e, t, n, a, i) {
                        var r = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === a && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, p, h, m = r !== o ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                b = !l && !s,
                                y = !1;
                            if (v) {
                                if (r) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? v.firstChild : v.lastChild], o && b) {
                                    for (f = v, d = f[G] || (f[G] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === z && c[1], y = p && c[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++y && f === t) {
                                            u[e] = [z, p, y];
                                            break
                                        }
                                } else if (b && (f = t, d = f[G] || (f[G] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === z && c[1], y = p), y === !1)
                                    for (;
                                        (f = ++p && f && f[m] || (y = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++y || (b && (d = f[G] || (f[G] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [z, y]), f !== t)););
                                return y -= i, y === a || y % a === 0 && y / a >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[G] ? r(n) : r.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                            for (var a, i = r(e, n), o = i.length; o--;) a = ee(e, i[o]), e[a] = !(t[a] = i[o])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: a(function(e) {
                        var t = [],
                            n = [],
                            i = k(e.replace(se, "$1"));
                        return i[G] ? a(function(e, t, n, a) {
                            for (var r, o = i(e, null, a, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, a, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: a(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: a(function(e) {
                        return e = e.replace(ye, Ce),
                            function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                    }),
                    lang: a(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, Ce).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (A in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[A] = s(A);
            for (A in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[A] = l(A);
            return f.prototype = x.filters = x.pseudos, x.setFilters = new f, M = t.tokenize = function(e, n) {
                var a, i, r, o, s, l, c, u = V[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = x.preFilter; s;) {
                    a && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(r = [])), a = !1, (i = ce.exec(s)) && (a = i.shift(), r.push({
                        value: a,
                        type: i[0].replace(se, " ")
                    }), s = s.slice(a.length));
                    for (o in x.filter) !(i = pe[o].exec(s)) || c[o] && !(i = c[o](i)) || (a = i.shift(), r.push({
                        value: a,
                        type: o,
                        matches: i
                    }), s = s.slice(a.length));
                    if (!a) break
                }
                return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
            }, k = t.compile = function(e, t) {
                var n, a = [],
                    i = [],
                    r = W[e + " "];
                if (!r) {
                    for (t || (t = M(e)), n = t.length; n--;) r = y(t[n]), r[G] ? a.push(r) : i.push(r);
                    r = W(e, C(i, a)), r.selector = e
                }
                return r
            }, _ = t.select = function(e, t, n, a) {
                var i, r, o, s, l, c = "function" == typeof e && e,
                    u = !a && M(e = c.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && 9 === t.nodeType && R && x.relative[r[1].type]) {
                        if (t = (x.find.ID(o.matches[0].replace(ye, Ce), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (i = pe.needsContext.test(e) ? 0 : r.length; i-- && (o = r[i], !x.relative[s = o.type]);)
                        if ((l = x.find[s]) && (a = l(o.matches[0].replace(ye, Ce), be.test(r[0].type) && d(t.parentNode) || t))) {
                            if (r.splice(i, 1), e = a.length && p(r), !e) return Q.apply(n, a), n;
                            break
                        }
                }
                return (c || k(e, u))(a, t, !R, n, !t || be.test(e) && d(t.parentNode) || t), n
            }, T.sortStable = G.split("").sort(K).join("") === G, T.detectDuplicates = !!P, B(), T.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), T.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var a;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }), t
        }(e);
        he.find = ye, he.expr = ye.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ye.uniqueSort, he.text = ye.getText, he.isXMLDoc = ye.isXML, he.contains = ye.contains, he.escapeSelector = ye.escape;
        var Ce = function(e, t, n) {
                for (var a = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && he(e).is(n)) break;
                        a.push(e)
                    }
                return a
            },
            Ae = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Te = he.expr.match.needsContext,
            xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Se = /^.[^:#\[\.,]*$/;
        he.filter = function(e, t, n) {
            var a = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? he.find.matchesSelector(a, e) ? [a] : [] : he.find.matches(e, he.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, he.fn.extend({
            find: function(e) {
                var t, n, a = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                    for (t = 0; t < a; t++)
                        if (he.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < a; t++) he.find(e, i[t], n);
                return a > 1 ? he.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
            }
        });
        var we, Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            ke = he.fn.init = function(e, t, n) {
                var a, i;
                if (!e) return this;
                if (n = n || we, "string" == typeof e) {
                    if (a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Me.exec(e), !a || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (a[1]) {
                        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), xe.test(a[1]) && he.isPlainObject(t))
                            for (a in t) he.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                        return this
                    }
                    return i = te.getElementById(a[2]), i && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
            };
        ke.prototype = he.fn, we = he(te);
        var _e = /^(?:parents|prev(?:Until|All))/,
            Ee = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        he.fn.extend({
            has: function(e) {
                var t = he(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (he.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, a = 0,
                    i = this.length,
                    r = [],
                    o = "string" != typeof e && he(e);
                if (!Te.test(e))
                    for (; a < i; a++)
                        for (n = this[a]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? oe.call(he(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), he.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ae((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ae(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || he.merge([], e.childNodes)
            }
        }, function(e, t) {
            he.fn[e] = function(n, a) {
                var i = he.map(this, t, n);
                return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (i = he.filter(a, i)), this.length > 1 && (Ee[e] || he.uniqueSort(i), _e.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var De = /[^\x20\t\r\n\f]+/g;
        he.Callbacks = function(e) {
            e = "string" == typeof e ? o(e) : he.extend({}, e);
            var t, n, a, i, r = [],
                s = [],
                l = -1,
                c = function() {
                    for (i = e.once, a = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                            he.each(n, function(n, a) {
                                he.isFunction(a) ? e.unique && u.has(a) || r.push(a) : a && a.length && "string" !== he.type(a) && t(a)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return he.each(arguments, function(e, t) {
                            for (var n;
                                (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? he.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return i = s = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return i = s = [], n || t || (r = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return u
        }, he.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                        ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                    ],
                    a = "pending",
                    i = {
                        state: function() {
                            return a
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return he.Deferred(function(t) {
                                he.each(n, function(n, a) {
                                    var i = he.isFunction(e[a[4]]) && e[a[4]];
                                    r[a[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, a, i) {
                            function r(t, n, a, i) {
                                return function() {
                                    var c = this,
                                        u = arguments,
                                        d = function() {
                                            var e, d;
                                            if (!(t < o)) {
                                                if (e = a.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? i ? d.call(e, r(o, n, s, i), r(o, n, l, i)) : (o++, d.call(e, r(o, n, s, i), r(o, n, l, i), r(o, n, s, n.notifyWith))) : (a !== s && (c = void 0, u = [e]), (i || n.resolveWith)(c, u))
                                            }
                                        },
                                        f = i ? d : function() {
                                            try {
                                                d()
                                            } catch (e) {
                                                he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= o && (a !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
                                            }
                                        };
                                    t ? f() : (he.Deferred.getStackHook && (f.stackTrace = he.Deferred.getStackHook()), e.setTimeout(f))
                                }
                            }
                            var o = 0;
                            return he.Deferred(function(e) {
                                n[0][3].add(r(0, e, he.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : s)), n[2][3].add(r(0, e, he.isFunction(a) ? a : l))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? he.extend(e, i) : i
                        }
                    },
                    r = {};
                return he.each(n, function(e, t) {
                    var o = t[2],
                        s = t[5];
                    i[t[1]] = o.add, s && o.add(function() {
                        a = s
                    }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[t[0] + "With"] = o.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    a = Array(n),
                    i = ae.call(arguments),
                    r = he.Deferred(),
                    o = function(e) {
                        return function(n) {
                            a[e] = this, i[e] = arguments.length > 1 ? ae.call(arguments) : n, --t || r.resolveWith(a, i)
                        }
                    };
                if (t <= 1 && (c(e, r.done(o(n)).resolve, r.reject), "pending" === r.state() || he.isFunction(i[n] && i[n].then))) return r.then();
                for (; n--;) c(i[n], o(n), r.reject);
                return r.promise()
            }
        });
        var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        he.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, he.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var Be = he.Deferred();
        he.fn.ready = function(e) {
            return Be.then(e).catch(function(e) {
                he.readyException(e)
            }), this
        }, he.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? he.readyWait++ : he.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Be.resolveWith(te, [he]))
            }
        }), he.ready.then = Be.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
        var Ne = function(e, t, n, a, i, r, o) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === he.type(n)) {
                    i = !0;
                    for (s in n) Ne(e, t, s, n[s], !0, r, o)
                } else if (void 0 !== a && (i = !0, he.isFunction(a) || (o = !0), c && (o ? (t.call(e, a), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(he(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, o ? a : a.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Le = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        d.uid = 1, d.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var a, i = this.cache(e);
                if ("string" == typeof t) i[he.camelCase(t)] = n;
                else
                    for (a in t) i[he.camelCase(a)] = t[a];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, a = e[this.expando];
                if (void 0 !== a) {
                    if (void 0 !== t) {
                        he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in a ? [t] : t.match(De) || []), n = t.length;
                        for (; n--;) delete a[t[n]]
                    }(void 0 === t || he.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !he.isEmptyObject(t)
            }
        };
        var Re = new d,
            $e = new d,
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Oe = /[A-Z]/g;
        he.extend({
            hasData: function(e) {
                return $e.hasData(e) || Re.hasData(e)
            },
            data: function(e, t, n) {
                return $e.access(e, t, n)
            },
            removeData: function(e, t) {
                $e.remove(e, t)
            },
            _data: function(e, t, n) {
                return Re.access(e, t, n)
            },
            _removeData: function(e, t) {
                Re.remove(e, t)
            }
        }), he.fn.extend({
            data: function(e, t) {
                var n, a, i, r = this[0],
                    o = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (i = $e.get(r), 1 === r.nodeType && !Re.get(r, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && (a = o[n].name, 0 === a.indexOf("data-") && (a = he.camelCase(a.slice(5)), p(r, a, i[a])));
                        Re.set(r, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    $e.set(this, e)
                }) : Ne(this, function(t) {
                    var n;
                    if (r && void 0 === t) {
                        if (n = $e.get(r, e), void 0 !== n) return n;
                        if (n = p(r, e), void 0 !== n) return n
                    } else this.each(function() {
                        $e.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    $e.remove(this, e)
                })
            }
        }), he.extend({
            queue: function(e, t, n) {
                var a;
                if (e) return t = (t || "fx") + "queue", a = Re.get(e, t), n && (!a || he.isArray(n) ? a = Re.access(e, t, he.makeArray(n)) : a.push(n)), a || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = he.queue(e, t),
                    a = n.length,
                    i = n.shift(),
                    r = he._queueHooks(e, t),
                    o = function() {
                        he.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), a--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, o, r)), !a && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Re.get(e, n) || Re.access(e, n, {
                    empty: he.Callbacks("once memory").add(function() {
                        Re.remove(e, [t + "queue", n])
                    })
                })
            }
        }), he.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = he.queue(this, e, t);
                    he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    he.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, a = 1,
                    i = he.Deferred(),
                    r = this,
                    o = this.length,
                    s = function() {
                        --a || i.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = Re.get(r[o], e + "queueHooks"), n && n.empty && (a++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ge = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
            je = ["Top", "Right", "Bottom", "Left"],
            ze = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
            },
            Ue = function(e, t, n, a) {
                var i, r, o = {};
                for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                i = n.apply(e, a || []);
                for (r in t) e.style[r] = o[r];
                return i
            },
            He = {};
        he.fn.extend({
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ze(this) ? he(this).show() : he(this).hide()
                })
            }
        });
        var Ve = /^(?:checkbox|radio)$/i,
            We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ke = /^$|\/(?:java|ecma)script/i,
            qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
        var Je = /<|&#?\w+;/;
        ! function() {
            var e = te.createDocumentFragment(),
                t = e.appendChild(te.createElement("div")),
                n = te.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ye = te.documentElement,
            Ze = /^key/,
            Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Xe = /^([^.]*)(?:\.(.+)|)/;
        he.event = {
            global: {},
            add: function(e, t, n, a, i) {
                var r, o, s, l, c, u, d, f, p, h, m, v = Re.get(e);
                if (v)
                    for (n.handler && (r = n, n = r.handler, i = r.selector), i && he.find.matchesSelector(Ye, i), n.guid || (n.guid = he.guid++), (l = v.events) || (l = v.events = {}), (o = v.handle) || (o = v.handle = function(t) {
                            return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(De) || [""], c = t.length; c--;) s = Xe.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = he.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = he.event.special[p] || {}, u = he.extend({
                        type: p,
                        origType: m,
                        data: a,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && he.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, a, h, o) !== !1 || e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), he.event.global[p] = !0)
            },
            remove: function(e, t, n, a, i) {
                var r, o, s, l, c, u, d, f, p, h, m, v = Re.hasData(e) && Re.get(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(De) || [""], c = t.length; c--;)
                        if (s = Xe.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = he.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = f.length; r--;) u = f[r], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || a && a !== u.selector && ("**" !== a || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            o && !f.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || he.removeEvent(e, p, v.handle), delete l[p])
                        } else
                            for (p in l) he.event.remove(e, p + t[c], n, a, !0);
                    he.isEmptyObject(l) && Re.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, a, i, r, o, s = he.event.fix(e),
                    l = new Array(arguments.length),
                    c = (Re.get(this, "events") || {})[s.type] || [],
                    u = he.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
                    for (o = he.event.handlers.call(this, s, c), t = 0;
                        (i = o[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0;
                            (r = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, a = ((he.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l), void 0 !== a && (s.result = a) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, a, i, r, o, s = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                            for (r = [], o = {}, n = 0; n < l; n++) a = t[n], i = a.selector + " ", void 0 === o[i] && (o[i] = a.needsContext ? he(i, this).index(c) > -1 : he.find(i, this, null, [c]).length), o[i] && r.push(a);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this, l < t.length && s.push({
                    elem: c,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(he.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: he.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[he.expando] ? e : new he.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== T() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === T() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return he.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, he.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, he.Event = function(e, t) {
            return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? C : A, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
        }, he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: A,
            isPropagationStopped: A,
            isImmediatePropagationStopped: A,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, he.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, he.event.addProp), he.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            he.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, a = this,
                        i = e.relatedTarget,
                        r = e.handleObj;
                    return i && (i === a || he.contains(a, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), he.fn.extend({
            on: function(e, t, n, a) {
                return x(this, e, t, n, a)
            },
            one: function(e, t, n, a) {
                return x(this, e, t, n, a, 1)
            },
            off: function(e, t, n) {
                var a, i;
                if (e && e.preventDefault && e.handleObj) return a = e.handleObj, he(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = A), this.each(function() {
                    he.event.remove(this, e, n, t)
                })
            }
        });
        var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            at = /^true\/(.*)/,
            it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        he.extend({
            htmlPrefilter: function(e) {
                return e.replace(et, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var a, i, r, o, s = e.cloneNode(!0),
                    l = he.contains(e.ownerDocument, e);
                if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                    for (o = g(s), r = g(e), a = 0, i = r.length; a < i; a++) _(r[a], o[a]);
                if (t)
                    if (n)
                        for (r = r || g(e), o = o || g(s), a = 0, i = r.length; a < i; a++) k(r[a], o[a]);
                    else k(e, s);
                return o = g(s, "script"), o.length > 0 && b(o, !l && g(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, a, i = he.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (Le(n)) {
                        if (t = n[Re.expando]) {
                            if (t.events)
                                for (a in t.events) i[a] ? he.event.remove(n, a) : he.removeEvent(n, a, t.handle);
                            n[Re.expando] = void 0
                        }
                        n[$e.expando] && (n[$e.expando] = void 0)
                    }
            }
        }), he.fn.extend({
            detach: function(e) {
                return D(this, e, !0)
            },
            remove: function(e) {
                return D(this, e)
            },
            text: function(e) {
                return Ne(this, function(e) {
                    return void 0 === e ? he.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return E(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return E(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return E(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return E(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(g(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return he.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ne(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        a = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !tt.test(e) && !qe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = he.htmlPrefilter(e);
                        try {
                            for (; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return E(this, arguments, function(t) {
                    var n = this.parentNode;
                    he.inArray(this, e) < 0 && (he.cleanData(g(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), he.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            he.fn[e] = function(e) {
                for (var n, a = [], i = he(e), r = i.length - 1, o = 0; o <= r; o++) n = o === r ? this : this.clone(!0), he(i[o])[t](n), re.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var rt = /^margin/,
            ot = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
            st = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(o);
                    var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, r = "2px" === t.marginLeft, a = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(o), s = null
                }
            }
            var n, a, i, r, o = te.createElement("div"),
                s = te.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), he.extend(fe, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return t(), a
                },
                pixelMarginRight: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), r
                }
            }))
        }();
        var lt = /^(none|table(?!-c[ea]).+)/,
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ut = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            dt = ["Webkit", "Moz", "ms"],
            ft = te.createElement("div").style;
        he.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = P(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, a) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, r, o, s = he.camelCase(t),
                        l = e.style;
                    return t = he.cssProps[s] || (he.cssProps[s] = N(s) || s), o = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, a)) ? i : l[t] : (r = typeof n, "string" === r && (i = Ge.exec(n)) && i[1] && (n = h(e, t, i), r = "number"), null != n && n === n && ("number" === r && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, a)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, a) {
                var i, r, o, s = he.camelCase(t);
                return t = he.cssProps[s] || (he.cssProps[s] = N(s) || s), o = he.cssHooks[t] || he.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = P(e, t, a)), "normal" === i && t in ut && (i = ut[t]), "" === n || n ? (r = parseFloat(i), n === !0 || isFinite(r) ? r || 0 : i) : i
            }
        }), he.each(["height", "width"], function(e, t) {
            he.cssHooks[t] = {
                get: function(e, n, a) {
                    if (n) return !lt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, a) : Ue(e, ct, function() {
                        return $(e, t, a)
                    })
                },
                set: function(e, n, a) {
                    var i, r = a && st(e),
                        o = a && R(e, t, a, "border-box" === he.css(e, "boxSizing", !1, r), r);
                    return o && (i = Ge.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), L(e, n, o)
                }
            }
        }), he.cssHooks.marginLeft = B(fe.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), he.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            he.cssHooks[e + t] = {
                expand: function(n) {
                    for (var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) i[e + je[a] + t] = r[a] || r[a - 2] || r[0];
                    return i
                }
            }, rt.test(e) || (he.cssHooks[e + t].set = L)
        }), he.fn.extend({
            css: function(e, t) {
                return Ne(this, function(e, t, n) {
                    var a, i, r = {},
                        o = 0;
                    if (he.isArray(t)) {
                        for (a = st(e), i = t.length; o < i; o++) r[t[o]] = he.css(e, t[o], !1, a);
                        return r
                    }
                    return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), he.Tween = I, I.prototype = {
            constructor: I,
            init: function(e, t, n, a, i, r) {
                this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = r || (he.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = I.propHooks[this.prop];
                return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, he.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, he.fx = I.prototype.init, he.fx.step = {};
        var pt, ht, mt = /^(?:toggle|show|hide)$/,
            vt = /queueHooks$/;
        he.Animation = he.extend(H, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return h(n.elem, e, Ge.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
                    for (var n, a = 0, i = e.length; a < i; a++) n = e[a], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
                },
                prefilters: [z],
                prefilter: function(e, t) {
                    t ? H.prefilters.unshift(e) : H.prefilters.push(e)
                }
            }), he.speed = function(e, t, n) {
                var a = e && "object" == typeof e ? he.extend({}, e) : {
                    complete: n || !n && t || he.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !he.isFunction(t) && t
                };
                return he.fx.off || te.hidden ? a.duration = 0 : "number" != typeof a.duration && (a.duration in he.fx.speeds ? a.duration = he.fx.speeds[a.duration] : a.duration = he.fx.speeds._default), null != a.queue && a.queue !== !0 || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                    he.isFunction(a.old) && a.old.call(this), a.queue && he.dequeue(this, a.queue)
                }, a
            }, he.fn.extend({
                fadeTo: function(e, t, n, a) {
                    return this.filter(ze).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, a)
                },
                animate: function(e, t, n, a) {
                    var i = he.isEmptyObject(e),
                        r = he.speed(t, n, a),
                        o = function() {
                            var t = H(this, he.extend({}, e), r);
                            (i || Re.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
                },
                stop: function(e, t, n) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            r = he.timers,
                            o = Re.get(this);
                        if (i) o[i] && o[i].stop && a(o[i]);
                        else
                            for (i in o) o[i] && o[i].stop && vt.test(i) && a(o[i]);
                        for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                        !t && n || he.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = Re.get(this),
                            a = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            r = he.timers,
                            o = a ? a.length : 0;
                        for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < o; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), he.each(["toggle", "show", "hide"], function(e, t) {
                var n = he.fn[t];
                he.fn[t] = function(e, a, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, a, i)
                }
            }), he.each({
                slideDown: G("show"),
                slideUp: G("hide"),
                slideToggle: G("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                he.fn[e] = function(e, n, a) {
                    return this.animate(t, e, n, a)
                }
            }), he.timers = [], he.fx.tick = function() {
                var e, t = 0,
                    n = he.timers;
                for (pt = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || he.fx.stop(), pt = void 0
            }, he.fx.timer = function(e) {
                he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
            }, he.fx.interval = 13, he.fx.start = function() {
                ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setInterval(he.fx.tick, he.fx.interval))
            }, he.fx.stop = function() {
                e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
            }, he.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, he.fn.delay = function(t, n) {
                return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, a) {
                    var i = e.setTimeout(n, t);
                    a.stop = function() {
                        e.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = te.createElement("input"),
                    t = te.createElement("select"),
                    n = t.appendChild(te.createElement("option"));
                e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
            }();
        var gt, bt = he.expr.attrHandle;
        he.fn.extend({
            attr: function(e, t) {
                return Ne(this, he.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    he.removeAttr(this, e)
                })
            }
        }), he.extend({
            attr: function(e, t, n) {
                var a, i, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (a = i.get(e, t)) ? a : (a = he.find.attr(e, t), null == a ? void 0 : a))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!fe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, a = 0,
                    i = t && t.match(De);
                if (i && 1 === e.nodeType)
                    for (; n = i[a++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function(e, t, n) {
                return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = bt[t] || he.find.attr;
            bt[t] = function(e, t, a) {
                var i, r, o = t.toLowerCase();
                return a || (r = bt[o], bt[o] = i, i = null != n(e, t, a) ? o : null, bt[o] = r), i
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i,
            Ct = /^(?:a|area)$/i;
        he.fn.extend({
            prop: function(e, t) {
                return Ne(this, he.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[he.propFix[e] || e]
                })
            }
        }), he.extend({
            prop: function(e, t, n) {
                var a, i, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : e[t] = n : i && "get" in i && null !== (a = i.get(e, t)) ? a : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = he.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), fe.optSelected || (he.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            he.propFix[this.toLowerCase()] = this
        }), he.fn.extend({
            addClass: function(e) {
                var t, n, a, i, r, o, s, l = 0;
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).addClass(e.call(this, t, W(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(De) || []; n = this[l++];)
                        if (i = W(n), a = 1 === n.nodeType && " " + V(i) + " ") {
                            for (o = 0; r = t[o++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                            s = V(a), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, a, i, r, o, s, l = 0;
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).removeClass(e.call(this, t, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(De) || []; n = this[l++];)
                        if (i = W(n), a = 1 === n.nodeType && " " + V(i) + " ") {
                            for (o = 0; r = t[o++];)
                                for (; a.indexOf(" " + r + " ") > -1;) a = a.replace(" " + r + " ", " ");
                            s = V(a), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                    he(this).toggleClass(e.call(this, n, W(this), t), t)
                }) : this.each(function() {
                    var t, a, i, r;
                    if ("string" === n)
                        for (a = 0, i = he(this), r = e.match(De) || []; t = r[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = W(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Re.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, a = 0;
                for (t = " " + e + " "; n = this[a++];)
                    if (1 === n.nodeType && (" " + V(W(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var At = /\r/g;
        he.fn.extend({
            val: function(e) {
                var t, n, a, i = this[0]; {
                    if (arguments.length) return a = he.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = a ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : he.isArray(i) && (i = he.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
                }
            }
        }), he.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = he.find.attr(e, "value");
                        return null != t ? t : V(he.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, a, i = e.options,
                            r = e.selectedIndex,
                            o = "select-one" === e.type,
                            s = o ? null : [],
                            l = o ? r + 1 : i.length;
                        for (a = r < 0 ? l : o ? r : 0; a < l; a++)
                            if (n = i[a], (n.selected || a === r) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                                if (t = he(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, a, i = e.options, r = he.makeArray(t), o = i.length; o--;) a = i[o], (a.selected = he.inArray(he.valHooks.option.get(a), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), he.each(["radio", "checkbox"], function() {
            he.valHooks[this] = {
                set: function(e, t) {
                    if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
                }
            }, fe.checkOn || (he.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Tt = /^(?:focusinfocus|focusoutblur)$/;
        he.extend(he.event, {
            trigger: function(t, n, a, i) {
                var r, o, s, l, c, u, d, f = [a || te],
                    p = ce.call(t, "type") ? t.type : t,
                    h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = s = a = a || te, 3 !== a.nodeType && 8 !== a.nodeType && !Tt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[p] || {}, i || !d.trigger || d.trigger.apply(a, n) !== !1)) {
                    if (!i && !d.noBubble && !he.isWindow(a)) {
                        for (l = d.delegateType || p, Tt.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                        s === (a.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for (r = 0;
                        (o = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || p, u = (Re.get(o, "events") || {})[t.type] && Re.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && Le(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
                    return t.type = p, i || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Le(a) || c && he.isFunction(a[p]) && !he.isWindow(a) && (s = a[c], s && (a[c] = null), he.event.triggered = p, a[p](), he.event.triggered = void 0, s && (a[c] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var a = he.extend(new he.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                he.event.trigger(a, null, t)
            }
        }), he.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    he.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return he.event.trigger(e, t, n, !0)
            }
        }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            he.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), he.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), fe.focusin = "onfocusin" in e, fe.focusin || he.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                he.event.simulate(t, e.target, he.event.fix(e))
            };
            he.event.special[t] = {
                setup: function() {
                    var a = this.ownerDocument || this,
                        i = Re.access(a, t);
                    i || a.addEventListener(e, n, !0), Re.access(a, t, (i || 0) + 1)
                },
                teardown: function() {
                    var a = this.ownerDocument || this,
                        i = Re.access(a, t) - 1;
                    i ? Re.access(a, t, i) : (a.removeEventListener(e, n, !0), Re.remove(a, t))
                }
            }
        });
        var xt = e.location,
            St = he.now(),
            wt = /\?/;
        he.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
        };
        var Mt = /\[\]$/,
            kt = /\r?\n/g,
            _t = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;
        he.param = function(e, t) {
            var n, a = [],
                i = function(e, t) {
                    var n = he.isFunction(t) ? t() : t;
                    a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) K(n, e[n], t, i);
            return a.join("&")
        }, he.fn.extend({
            serialize: function() {
                return he.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = he.prop(this, "elements");
                    return e ? he.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !he(this).is(":disabled") && Et.test(this.nodeName) && !_t.test(e) && (this.checked || !Ve.test(e))
                }).map(function(e, t) {
                    var n = he(this).val();
                    return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        });
        var Dt = /%20/g,
            Pt = /#.*$/,
            Bt = /([?&])_=[^&]*/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Rt = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            It = {},
            Ot = {},
            Ft = "*/".concat("*"),
            Gt = te.createElement("a");
        Gt.href = xt.href, he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: Lt.test(xt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": he.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Y(Y(e, he.ajaxSettings), t) : Y(he.ajaxSettings, e)
            },
            ajaxPrefilter: q(It),
            ajaxTransport: q(Ot),
            ajax: function(t, n) {
                function a(t, n, a, s) {
                    var c, f, p, C, A, T = n;
                    u || (u = !0, l && e.clearTimeout(l), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, a && (C = Z(h, x, a)), C = Q(h, C, x, c), c ? (h.ifModified && (A = x.getResponseHeader("Last-Modified"), A && (he.lastModified[r] = A), A = x.getResponseHeader("etag"), A && (he.etag[r] = A)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = C.state, f = C.data, p = C.error, c = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", c ? g.resolveWith(m, [f, T, x]) : g.rejectWith(m, [x, T, p]), x.statusCode(y), y = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? f : p]), b.fireWith(m, [x, T]), d && (v.trigger("ajaxComplete", [x, h]), --he.active || he.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var i, r, o, s, l, c, u, d, f, p, h = he.ajaxSetup({}, n),
                    m = h.context || h,
                    v = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                    g = he.Deferred(),
                    b = he.Callbacks("once memory"),
                    y = h.statusCode || {},
                    C = {},
                    A = {},
                    T = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = Nt.exec(o);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = A[e.toLowerCase()] = A[e.toLowerCase()] || e, C[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) x.always(e[x.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return i && i.abort(t), a(0, t), this
                        }
                    };
                if (g.promise(x), h.url = ((t || h.url || xt.href) + "").replace($t, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""], null == h.crossDomain) {
                    c = te.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = Gt.protocol + "//" + Gt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), J(It, h, n, x), u) return x;
                d = he.event && h.global, d && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Rt.test(h.type), r = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (p = h.url.slice(r.length), h.data && (r += (wt.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(Bt, "$1"), p = (wt.test(r) ? "&" : "?") + "_=" + St++ + p), h.url = r + p), h.ifModified && (he.lastModified[r] && x.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && x.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) x.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (h.beforeSend.call(m, x, h) === !1 || u)) return x.abort();
                if (T = "abort", b.add(h.complete), x.done(h.success), x.fail(h.error), i = J(Ot, h, n, x)) {
                    if (x.readyState = 1, d && v.trigger("ajaxSend", [x, h]), u) return x;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        x.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, i.send(C, a)
                    } catch (e) {
                        if (u) throw e;
                        a(-1, e)
                    }
                } else a(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return he.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return he.get(e, void 0, t, "script")
            }
        }), he.each(["get", "post"], function(e, t) {
            he[t] = function(e, n, a, i) {
                return he.isFunction(n) && (i = i || a, a = n, n = void 0), he.ajax(he.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: a
                }, he.isPlainObject(e) && e))
            }
        }), he._evalUrl = function(e) {
            return he.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, he.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return he.isFunction(e) ? this.each(function(t) {
                    he(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = he(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = he.isFunction(e);
                return this.each(function(n) {
                    he(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    he(this).replaceWith(this.childNodes)
                }), this
            }
        }), he.expr.pseudos.hidden = function(e) {
            return !he.expr.pseudos.visible(e)
        }, he.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, he.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var jt = {
                0: 200,
                1223: 204
            },
            zt = he.ajaxSettings.xhr();
        fe.cors = !!zt && "withCredentials" in zt, fe.ajax = zt = !!zt, he.ajaxTransport(function(t) {
            var n, a;
            if (fe.cors || zt && !t.crossDomain) return {
                send: function(i, r) {
                    var o, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) s.setRequestHeader(o, i[o]);
                    n = function(e) {
                        return function() {
                            n && (n = a = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(jt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), a = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = a : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && a()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), he.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), he.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return he.globalEval(e), e
                }
            }
        }), he.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), he.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(a, i) {
                        t = he("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ut = [],
            Ht = /(=)\?(?=&|$)|\?\?/;
        he.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || he.expando + "_" + St++;
                return this[e] = !0, e
            }
        }), he.ajaxPrefilter("json jsonp", function(t, n, a) {
            var i, r, o, s = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return o || he.error(i + " was not called"), o[0]
            }, t.dataTypes[0] = "json", r = e[i], e[i] = function() {
                o = arguments
            }, a.always(function() {
                void 0 === r ? he(e).removeProp(i) : e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, Ut.push(i)), o && he.isFunction(r) && r(o[0]), o = r = void 0
            }), "script"
        }), fe.createHTMLDocument = function() {
            var e = te.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), he.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var a, i, r;
            return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), a = t.createElement("base"), a.href = te.location.href, t.head.appendChild(a)) : t = te), i = xe.exec(e), r = !n && [], i ? [t.createElement(i[1])] : (i = y([e], t, r), r && r.length && he(r).remove(), he.merge([], i.childNodes))
        }, he.fn.load = function(e, t, n) {
            var a, i, r, o = this,
                s = e.indexOf(" ");
            return s > -1 && (a = V(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && he.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, o.html(a ? he("<div>").append(he.parseHTML(e)).find(a) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            he.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), he.expr.pseudos.animated = function(e) {
            return he.grep(he.timers, function(t) {
                return e === t.elem
            }).length
        }, he.offset = {
            setOffset: function(e, t, n) {
                var a, i, r, o, s, l, c, u = he.css(e, "position"),
                    d = he(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (a = d.position(), o = a.top, i = a.left) : (o = parseFloat(r) || 0, i = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, he.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    he.offset.setOffset(this, e, t)
                });
                var t, n, a, i, r = this[0];
                if (r) return r.getClientRects().length ? (a = r.getBoundingClientRect(), a.width || a.height ? (i = r.ownerDocument, n = X(i), t = i.documentElement, {
                    top: a.top + n.pageYOffset - t.clientTop,
                    left: a.left + n.pageXOffset - t.clientLeft
                }) : a) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        a = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (a = e.offset()), a = {
                        top: a.top + he.css(e[0], "borderTopWidth", !0),
                        left: a.left + he.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - a.top - he.css(n, "marginTop", !0),
                        left: t.left - a.left - he.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                    return e || Ye
                })
            }
        }), he.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            he.fn[e] = function(a) {
                return Ne(this, function(e, a, i) {
                    var r = X(e);
                    return void 0 === i ? r ? r[t] : e[a] : void(r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[a] = i)
                }, e, a, arguments.length)
            }
        }), he.each(["top", "left"], function(e, t) {
            he.cssHooks[t] = B(fe.pixelPosition, function(e, n) {
                if (n) return n = P(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
            })
        }), he.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            he.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, a) {
                he.fn[a] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ne(this, function(t, n, i) {
                        var r;
                        return he.isWindow(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                    }, t, o ? i : void 0, o)
                }
            })
        }), he.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, a) {
                return this.on(t, e, n, a)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
            return he
        });
        var Vt = e.jQuery,
            Wt = e.$;
        return he.noConflict = function(t) {
            return e.$ === he && (e.$ = Wt), t && e.jQuery === he && (e.jQuery = Vt), he
        }, t || (e.jQuery = e.$ = he), he
    }), function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
        }

        function t(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }

        function n(e, t) {
            for (var n = Object.create(null), a = e.split(","), i = 0; i < a.length; i++) n[a[i]] = !0;
            return t ? function(e) {
                return n[e.toLowerCase()]
            } : function(e) {
                return n[e]
            }
        }

        function a(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1) return e.splice(n, 1)
            }
        }

        function i(e, t) {
            return Ui.call(e, t)
        }

        function r(e) {
            return "string" == typeof e || "number" == typeof e
        }

        function o(e) {
            var t = Object.create(null);
            return function(n) {
                var a = t[n];
                return a || (t[n] = e(n))
            }
        }

        function s(e, t) {
            function n(n) {
                var a = arguments.length;
                return a ? a > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length, n
        }

        function l(e, t) {
            t = t || 0;
            for (var n = e.length - t, a = new Array(n); n--;) a[n] = e[n + t];
            return a
        }

        function c(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function u(e) {
            return null !== e && "object" == typeof e
        }

        function d(e) {
            return Ji.call(e) === Yi
        }

        function f(e) {
            for (var t = {}, n = 0; n < e.length; n++) e[n] && c(t, e[n]);
            return t
        }

        function p() {}

        function h(e) {
            return e.reduce(function(e, t) {
                return e.concat(t.staticKeys || [])
            }, []).join(",")
        }

        function m(e, t) {
            var n = u(e),
                a = u(t);
            if (!n || !a) return !n && !a && String(e) === String(t);
            try {
                return JSON.stringify(e) === JSON.stringify(t)
            } catch (n) {
                return e === t
            }
        }

        function v(e, t) {
            for (var n = 0; n < e.length; n++)
                if (m(e[n], t)) return n;
            return -1
        }

        function g(e) {
            var t = !1;
            return function() {
                t || (t = !0, e())
            }
        }

        function b(e) {
            return /native code/.test(e.toString())
        }

        function y(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }

        function C(e, t, n, a) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!a,
                writable: !0,
                configurable: !0
            })
        }

        function A(e) {
            if (!vr.test(e)) {
                var t = e.split(".");
                return function(e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }

        function T(e) {
            Sr.target && wr.push(Sr.target), Sr.target = e
        }

        function x() {
            Sr.target = wr.pop()
        }

        function S(e, t) {
            e.__proto__ = t
        }

        function w(e, t, n) {
            for (var a = 0, i = n.length; a < i; a++) {
                var r = n[a];
                C(e, r, t[r])
            }
        }

        function M(e, t) {
            if (u(e)) {
                var n;
                return i(e, "__ob__") && e.__ob__ instanceof Dr ? n = e.__ob__ : Er.shouldConvert && !cr() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new Dr(e)), t && n && n.vmCount++, n
            }
        }

        function k(e, t, n, a) {
            var i = new Sr,
                r = Object.getOwnPropertyDescriptor(e, t);
            if (!r || r.configurable !== !1) {
                var o = r && r.get,
                    s = r && r.set,
                    l = M(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = o ? o.call(e) : n;
                        return Sr.target && (i.depend(), l && l.dep.depend(), Array.isArray(t) && D(t)), t
                    },
                    set: function(t) {
                        var r = o ? o.call(e) : n;
                        t === r || t !== t && r !== r || (a && a(), s ? s.call(e, t) : n = t, l = M(t), i.notify())
                    }
                })
            }
        }

        function _(e, t, n) {
            if (Array.isArray(e)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
            if (i(e, t)) return e[t] = n, n;
            var a = e.__ob__;
            return e._isVue || a && a.vmCount ? (gr("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : a ? (k(a.value, t, n), a.dep.notify(), n) : (e[t] = n, n)
        }

        function E(e, t) {
            if (Array.isArray(e)) return void e.splice(t, 1);
            var n = e.__ob__;
            return e._isVue || n && n.vmCount ? void gr("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : void(i(e, t) && (delete e[t], n && n.dep.notify()))
        }

        function D(e) {
            for (var t = void 0, n = 0, a = e.length; n < a; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && D(t)
        }

        function P(e, t) {
            if (!t) return e;
            for (var n, a, r, o = Object.keys(t), s = 0; s < o.length; s++) n = o[s], a = e[n], r = t[n], i(e, n) ? d(a) && d(r) && P(a, r) : _(e, n, r);
            return e
        }

        function B(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
        }

        function N(e, t) {
            var n = Object.create(e || null);
            return t ? c(n, t) : n
        }

        function L(e) {
            for (var t in e.components) {
                var n = t.toLowerCase();
                (zi(n) || Xi.isReservedTag(n)) && gr("Do not use built-in or reserved HTML elements as component id: " + t)
            }
        }

        function R(e) {
            var t = e.props;
            if (t) {
                var n, a, i, r = {};
                if (Array.isArray(t))
                    for (n = t.length; n--;) a = t[n], "string" == typeof a ? (i = Vi(a), r[i] = {
                        type: null
                    }) : gr("props must be strings when using array syntax.");
                else if (d(t))
                    for (var o in t) a = t[o], i = Vi(o), r[i] = d(a) ? a : {
                        type: a
                    };
                e.props = r
            }
        }

        function $(e) {
            var t = e.directives;
            if (t)
                for (var n in t) {
                    var a = t[n];
                    "function" == typeof a && (t[n] = {
                        bind: a,
                        update: a
                    })
                }
        }

        function I(e, t, n) {
            function a(a) {
                var i = Pr[a] || Nr;
                u[a] = i(e[a], t[a], n, a)
            }
            L(t), R(t), $(t);
            var r = t.extends;
            if (r && (e = "function" == typeof r ? I(e, r.options, n) : I(e, r, n)), t.mixins)
                for (var o = 0, s = t.mixins.length; o < s; o++) {
                    var l = t.mixins[o];
                    l.prototype instanceof ht && (l = l.options), e = I(e, l, n)
                }
            var c, u = {};
            for (c in e) a(c);
            for (c in t) i(e, c) || a(c);
            return u
        }

        function O(e, t, n, a) {
            if ("string" == typeof n) {
                var r = e[t];
                if (i(r, n)) return r[n];
                var o = Vi(n);
                if (i(r, o)) return r[o];
                var s = Wi(o);
                if (i(r, s)) return r[s];
                var l = r[n] || r[o] || r[s];
                return a && !l && gr("Failed to resolve " + t.slice(0, -1) + ": " + n, e), l
            }
        }

        function F(e, t, n, a) {
            var r = t[e],
                o = !i(n, e),
                s = n[e];
            if (H(Boolean, r.type) && (o && !i(r, "default") ? s = !1 : H(String, r.type) || "" !== s && s !== qi(e) || (s = !0)), void 0 === s) {
                s = G(a, r, e);
                var l = Er.shouldConvert;
                Er.shouldConvert = !0, M(s), Er.shouldConvert = l
            }
            return j(r, e, s, a, o), s
        }

        function G(e, t, n) {
            if (i(t, "default")) {
                var a = t.default;
                return u(a) && gr('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', e), e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof a && "Function" !== U(t.type) ? a.call(e) : a
            }
        }

        function j(e, t, n, a, i) {
            if (e.required && i) return void gr('Missing required prop: "' + t + '"', a);
            if (null != n || e.required) {
                var r = e.type,
                    o = !r || r === !0,
                    s = [];
                if (r) {
                    Array.isArray(r) || (r = [r]);
                    for (var l = 0; l < r.length && !o; l++) {
                        var c = z(n, r[l]);
                        s.push(c.expectedType || ""), o = c.valid
                    }
                }
                if (!o) return void gr('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(Wi).join(", ") + ", got " + Object.prototype.toString.call(n).slice(8, -1) + ".", a);
                var u = e.validator;
                u && (u(n) || gr('Invalid prop: custom validator check failed for prop "' + t + '".', a))
            }
        }

        function z(e, t) {
            var n, a = U(t);
            return n = "String" === a ? typeof e == (a = "string") : "Number" === a ? typeof e == (a = "number") : "Boolean" === a ? typeof e == (a = "boolean") : "Function" === a ? typeof e == (a = "function") : "Object" === a ? d(e) : "Array" === a ? Array.isArray(e) : e instanceof t, {
                valid: n,
                expectedType: a
            }
        }

        function U(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t && t[1]
        }

        function H(e, t) {
            if (!Array.isArray(t)) return U(t) === U(e);
            for (var n = 0, a = t.length; n < a; n++)
                if (U(t[n]) === U(e)) return !0;
            return !1
        }

        function V(e, t, n) {
            if (Xi.errorHandler) Xi.errorHandler.call(null, e, t, n);
            else {
                if (gr("Error in " + n + ":", t), !tr || "undefined" == typeof console) throw e;
                console.error(e)
            }
        }

        function W(e) {
            return new Gr((void 0), (void 0), (void 0), String(e))
        }

        function K(e) {
            var t = new Gr(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);
            return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t
        }

        function q(e) {
            for (var t = e.length, n = new Array(t), a = 0; a < t; a++) n[a] = K(e[a]);
            return n
        }

        function J(e) {
            function t() {
                var e = arguments,
                    n = t.fns;
                if (!Array.isArray(n)) return n.apply(null, arguments);
                for (var a = 0; a < n.length; a++) n[a].apply(null, e)
            }
            return t.fns = e, t
        }

        function Y(e, t, n, a, i) {
            var r, o, s, l;
            for (r in e) o = e[r], s = t[r], l = Hr(r), o ? s ? o !== s && (s.fns = o, e[r] = s) : (o.fns || (o = e[r] = J(o)), n(l.name, o, l.once, l.capture)) : gr('Invalid handler for event "' + l.name + '": got ' + String(o), i);
            for (r in t) e[r] || (l = Hr(r), a(l.name, t[r], l.capture))
        }

        function Z(e, t, n) {
            function i() {
                n.apply(this, arguments), a(r.fns, i)
            }
            var r, o = e[t];
            o ? o.fns && o.merged ? (r = o, r.fns.push(i)) : r = J([o, i]) : r = J([i]), r.merged = !0, e[t] = r
        }

        function Q(e) {
            for (var t = 0; t < e.length; t++)
                if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e
        }

        function X(e) {
            return r(e) ? [W(e)] : Array.isArray(e) ? ee(e) : void 0
        }

        function ee(e, t) {
            var n, a, i, o = [];
            for (n = 0; n < e.length; n++) a = e[n], null != a && "boolean" != typeof a && (i = o[o.length - 1], Array.isArray(a) ? o.push.apply(o, ee(a, (t || "") + "_" + n)) : r(a) ? i && i.text ? i.text += String(a) : "" !== a && o.push(W(a)) : a.text && i && i.text ? o[o.length - 1] = W(i.text + a.text) : (a.tag && null == a.key && null != t && (a.key = "__vlist" + t + "_" + n + "__"), o.push(a)));
            return o
        }

        function te(e) {
            return e && e.filter(function(e) {
                return e && e.componentOptions
            })[0]
        }

        function ne(e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && re(e, t)
        }

        function ae(e, t, n) {
            n ? zr.$once(e, t) : zr.$on(e, t)
        }

        function ie(e, t) {
            zr.$off(e, t)
        }

        function re(e, t, n) {
            zr = e, Y(t, n || {}, ae, ie, e)
        }

        function oe(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, n) {
                var a = this,
                    i = this;
                if (Array.isArray(e))
                    for (var r = 0, o = e.length; r < o; r++) a.$on(e[r], n);
                else(i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
                return i
            }, e.prototype.$once = function(e, t) {
                function n() {
                    a.$off(e, n), t.apply(a, arguments)
                }
                var a = this;
                return n.fn = t, a.$on(e, n), a
            }, e.prototype.$off = function(e, t) {
                var n = this,
                    a = this;
                if (!arguments.length) return a._events = Object.create(null), a;
                if (Array.isArray(e)) {
                    for (var i = 0, r = e.length; i < r; i++) n.$off(e[i], t);
                    return a;
                }
                var o = a._events[e];
                if (!o) return a;
                if (1 === arguments.length) return a._events[e] = null, a;
                for (var s, l = o.length; l--;)
                    if (s = o[l], s === t || s.fn === t) {
                        o.splice(l, 1);
                        break
                    }
                return a
            }, e.prototype.$emit = function(e) {
                var t = this,
                    n = t._events[e];
                if (n) {
                    n = n.length > 1 ? l(n) : n;
                    for (var a = l(arguments, 1), i = 0, r = n.length; i < r; i++) n[i].apply(t, a)
                }
                return t
            }
        }

        function se(e, t) {
            var n = {};
            if (!e) return n;
            for (var a, i, r = [], o = 0, s = e.length; o < s; o++)
                if (i = e[o], (i.context === t || i.functionalContext === t) && i.data && (a = i.data.slot)) {
                    var l = n[a] || (n[a] = []);
                    "template" === i.tag ? l.push.apply(l, i.children) : l.push(i)
                } else r.push(i);
            return r.every(le) || (n.default = r), n
        }

        function le(e) {
            return e.isComment || " " === e.text
        }

        function ce(e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n][0]] = e[n][1];
            return t
        }

        function ue(e) {
            var t = e.$options,
                n = t.parent;
            if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                n.$children.push(e)
            }
            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
        }

        function de(e) {
            e.prototype._update = function(e, t) {
                var n = this;
                n._isMounted && ge(n, "beforeUpdate");
                var a = n.$el,
                    i = n._vnode,
                    r = Vr;
                Vr = n, n._vnode = e, i ? n.$el = n.__patch__(i, e) : n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), Vr = r, a && (a.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, e.prototype.$forceUpdate = function() {
                var e = this;
                e._watcher && e._watcher.update()
            }, e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    ge(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || a(t.$children, e), e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, ge(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.__patch__(e._vnode, null)
                }
            }
        }

        function fe(e, t, n) {
            e.$el = t, e.$options.render || (e.$options.render = Ur, e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || t ? gr("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : gr("Failed to mount component: template or render function not defined.", e)), ge(e, "beforeMount");
            var a;
            return a = Xi.performance && pr ? function() {
                var t = e._name,
                    a = "start " + t,
                    i = "end " + t;
                pr.mark(a);
                var r = e._render();
                pr.mark(i), pr.measure(t + " render", a, i), pr.mark(a), e._update(r, n), pr.mark(i), pr.measure(t + " patch", a, i)
            } : function() {
                e._update(e._render(), n)
            }, e._watcher = new Xr(e, a, p), n = !1, null == e.$vnode && (e._isMounted = !0, ge(e, "mounted")), e
        }

        function pe(e, t, n, a, i) {
            var r = !!(i || e.$options._renderChildren || a.data.scopedSlots || e.$scopedSlots !== mr);
            if (e.$options._parentVnode = a, e.$vnode = a, e._vnode && (e._vnode.parent = a), e.$options._renderChildren = i, t && e.$options.props) {
                Er.shouldConvert = !1, Er.isSettingProps = !0;
                for (var o = e._props, s = e.$options._propKeys || [], l = 0; l < s.length; l++) {
                    var c = s[l];
                    o[c] = F(c, e.$options.props, t, e)
                }
                Er.shouldConvert = !0, Er.isSettingProps = !1, e.$options.propsData = t
            }
            if (n) {
                var u = e.$options._parentListeners;
                e.$options._parentListeners = n, re(e, n, u)
            }
            r && (e.$slots = se(i, a.context), e.$forceUpdate())
        }

        function he(e) {
            for (; e && (e = e.$parent);)
                if (e._inactive) return !0;
            return !1
        }

        function me(e, t) {
            if (t) {
                if (e._directInactive = !1, he(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null == e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++) me(e.$children[n]);
                ge(e, "activated")
            }
        }

        function ve(e, t) {
            if (!(t && (e._directInactive = !0, he(e)) || e._inactive)) {
                e._inactive = !0;
                for (var n = 0; n < e.$children.length; n++) ve(e.$children[n]);
                ge(e, "deactivated")
            }
        }

        function ge(e, t) {
            var n = e.$options[t];
            if (n)
                for (var a = 0, i = n.length; a < i; a++) try {
                    n[a].call(e)
                } catch (n) {
                    V(n, e, t + " hook")
                }
            e._hasHookEvent && e.$emit("hook:" + t)
        }

        function be() {
            Wr.length = 0, Kr = {}, qr = {}, Jr = Yr = !1
        }

        function ye() {
            Yr = !0;
            var e, t, n;
            for (Wr.sort(function(e, t) {
                    return e.id - t.id
                }), Zr = 0; Zr < Wr.length; Zr++)
                if (e = Wr[Zr], t = e.id, Kr[t] = null, e.run(), null != Kr[t] && (qr[t] = (qr[t] || 0) + 1, qr[t] > Xi._maxUpdateCount)) {
                    gr("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
                    break
                }
            for (Zr = Wr.length; Zr--;) e = Wr[Zr], n = e.vm, n._watcher === e && n._isMounted && ge(n, "updated");
            ur && Xi.devtools && ur.emit("flush"), be()
        }

        function Ce(e) {
            var t = e.id;
            if (null == Kr[t]) {
                if (Kr[t] = !0, Yr) {
                    for (var n = Wr.length - 1; n >= 0 && Wr[n].id > e.id;) n--;
                    Wr.splice(Math.max(n, Zr) + 1, 0, e)
                } else Wr.push(e);
                Jr || (Jr = !0, fr(ye))
            }
        }

        function Ae(e) {
            eo.clear(), Te(e, eo)
        }

        function Te(e, t) {
            var n, a, i = Array.isArray(e);
            if ((i || u(e)) && Object.isExtensible(e)) {
                if (e.__ob__) {
                    var r = e.__ob__.dep.id;
                    if (t.has(r)) return;
                    t.add(r)
                }
                if (i)
                    for (n = e.length; n--;) Te(e[n], t);
                else
                    for (a = Object.keys(e), n = a.length; n--;) Te(e[a[n]], t)
            }
        }

        function xe(e, t, n) {
            to.get = function() {
                return this[t][n]
            }, to.set = function(e) {
                this[t][n] = e
            }, Object.defineProperty(e, n, to)
        }

        function Se(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && we(e, t.props), t.methods && De(e, t.methods), t.data ? Me(e) : M(e._data = {}, !0), t.computed && ke(e, t.computed), t.watch && Pe(e, t.watch)
        }

        function we(e, t) {
            var n = e.$options.propsData || {},
                a = e._props = {},
                i = e.$options._propKeys = [],
                r = !e.$parent;
            Er.shouldConvert = r;
            var o = function(r) {
                i.push(r);
                var o = F(r, t, n, e);
                no[r] && gr('"' + r + '" is a reserved attribute and cannot be used as component prop.', e), k(a, r, o, function() {
                    e.$parent && !Er.isSettingProps && gr("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + r + '"', e)
                }), r in e || xe(e, "_props", r)
            };
            for (var s in t) o(s);
            Er.shouldConvert = !0
        }

        function Me(e) {
            var t = e.$options.data;
            t = e._data = "function" == typeof t ? t.call(e) : t || {}, d(t) || (t = {}, gr("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e));
            for (var n = Object.keys(t), a = e.$options.props, r = n.length; r--;) a && i(a, n[r]) ? gr('The data property "' + n[r] + '" is already declared as a prop. Use prop default value instead.', e) : y(n[r]) || xe(e, "_data", n[r]);
            M(t, !0)
        }

        function ke(e, t) {
            var n = e._computedWatchers = Object.create(null);
            for (var a in t) {
                var i = t[a],
                    r = "function" == typeof i ? i : i.get;
                n[a] = new Xr(e, r, p, ao), a in e || _e(e, a, i)
            }
        }

        function _e(e, t, n) {
            "function" == typeof n ? (to.get = Ee(t), to.set = p) : (to.get = n.get ? n.cache !== !1 ? Ee(t) : n.get : p, to.set = n.set ? n.set : p), Object.defineProperty(e, t, to)
        }

        function Ee(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) return t.dirty && t.evaluate(), Sr.target && t.depend(), t.value
            }
        }

        function De(e, t) {
            var n = e.$options.props;
            for (var a in t) e[a] = null == t[a] ? p : s(t[a], e), null == t[a] && gr('method "' + a + '" has an undefined value in the component definition. Did you reference the function correctly?', e), n && i(n, a) && gr('method "' + a + '" has already been defined as a prop.', e)
        }

        function Pe(e, t) {
            for (var n in t) {
                var a = t[n];
                if (Array.isArray(a))
                    for (var i = 0; i < a.length; i++) Be(e, n, a[i]);
                else Be(e, n, a)
            }
        }

        function Be(e, t, n) {
            var a;
            d(n) && (a = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, a)
        }

        function Ne(e) {
            var t = {};
            t.get = function() {
                return this._data
            };
            var n = {};
            n.get = function() {
                return this._props
            }, t.set = function(e) {
                gr("Avoid replacing instance root $data. Use nested data properties instead.", this)
            }, n.set = function() {
                gr("$props is readonly.", this)
            }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = _, e.prototype.$delete = E, e.prototype.$watch = function(e, t, n) {
                var a = this;
                n = n || {}, n.user = !0;
                var i = new Xr(a, e, t, n);
                return n.immediate && t.call(a, i.value),
                    function() {
                        i.teardown()
                    }
            }
        }

        function Le(e, t, n, a, i) {
            if (e) {
                var r = n.$options._base;
                if (u(e) && (e = r.extend(e)), "function" != typeof e) return void gr("Invalid Component definition: " + String(e), n);
                if (!e.cid)
                    if (e.resolved) e = e.resolved;
                    else if (e = je(e, r, function() {
                        n.$forceUpdate()
                    }), !e) return;
                dt(e), t = t || {}, t.model && We(e.options, t);
                var o = ze(t, e);
                if (e.options.functional) return Re(e, o, t, n, a);
                var s = t.on;
                t.on = t.nativeOn, e.options.abstract && (t = {}), He(t);
                var l = e.options.name || i,
                    c = new Gr("vue-component-" + e.cid + (l ? "-" + l : ""), t, (void 0), (void 0), (void 0), n, {
                        Ctor: e,
                        propsData: o,
                        listeners: s,
                        tag: i,
                        children: a
                    });
                return c
            }
        }

        function Re(e, t, n, a, i) {
            var r = {},
                o = e.options.props;
            if (o)
                for (var s in o) r[s] = F(s, o, t);
            var l = Object.create(a),
                c = function(e, t, n, a) {
                    return Ke(l, e, t, n, a, !0)
                },
                u = e.options.render.call(null, c, {
                    props: r,
                    data: n,
                    parent: a,
                    children: i,
                    slots: function() {
                        return se(i, a)
                    }
                });
            return u instanceof Gr && (u.functionalContext = a, n.slot && ((u.data || (u.data = {})).slot = n.slot)), u
        }

        function $e(e, t, n, a) {
            var i = e.componentOptions,
                r = {
                    _isComponent: !0,
                    parent: t,
                    propsData: i.propsData,
                    _componentTag: i.tag,
                    _parentVnode: e,
                    _parentListeners: i.listeners,
                    _renderChildren: i.children,
                    _parentElm: n || null,
                    _refElm: a || null
                },
                o = e.data.inlineTemplate;
            return o && (r.render = o.render, r.staticRenderFns = o.staticRenderFns), new i.Ctor(r)
        }

        function Ie(e, t, n, a) {
            if (!e.componentInstance || e.componentInstance._isDestroyed) {
                var i = e.componentInstance = $e(e, Vr, n, a);
                i.$mount(t ? e.elm : void 0, t)
            } else if (e.data.keepAlive) {
                var r = e;
                Oe(r, r)
            }
        }

        function Oe(e, t) {
            var n = t.componentOptions,
                a = t.componentInstance = e.componentInstance;
            pe(a, n.propsData, n.listeners, t, n.children)
        }

        function Fe(e) {
            e.componentInstance._isMounted || (e.componentInstance._isMounted = !0, ge(e.componentInstance, "mounted")), e.data.keepAlive && me(e.componentInstance, !0)
        }

        function Ge(e) {
            e.componentInstance._isDestroyed || (e.data.keepAlive ? ve(e.componentInstance, !0) : e.componentInstance.$destroy())
        }

        function je(e, t, n) {
            if (!e.requested) {
                e.requested = !0;
                var a = e.pendingCallbacks = [n],
                    i = !0,
                    r = function(n) {
                        if (u(n) && (n = t.extend(n)), e.resolved = n, !i)
                            for (var r = 0, o = a.length; r < o; r++) a[r](n)
                    },
                    o = function(t) {
                        gr("Failed to resolve async component: " + String(e) + (t ? "\nReason: " + t : ""))
                    },
                    s = e(r, o);
                return s && "function" == typeof s.then && !e.resolved && s.then(r, o), i = !1, e.resolved
            }
            e.pendingCallbacks.push(n)
        }

        function ze(e, t) {
            var n = t.options.props;
            if (n) {
                var a = {},
                    i = e.attrs,
                    r = e.props,
                    o = e.domProps;
                if (i || r || o)
                    for (var s in n) {
                        var l = qi(s);
                        Ue(a, r, s, l, !0) || Ue(a, i, s, l) || Ue(a, o, s, l)
                    }
                return a
            }
        }

        function Ue(e, t, n, a, r) {
            if (t) {
                if (i(t, n)) return e[n] = t[n], r || delete t[n], !0;
                if (i(t, a)) return e[n] = t[a], r || delete t[a], !0
            }
            return !1
        }

        function He(e) {
            e.hook || (e.hook = {});
            for (var t = 0; t < ro.length; t++) {
                var n = ro[t],
                    a = e.hook[n],
                    i = io[n];
                e.hook[n] = a ? Ve(i, a) : i
            }
        }

        function Ve(e, t) {
            return function(n, a, i, r) {
                e(n, a, i, r), t(n, a, i, r)
            }
        }

        function We(e, t) {
            var n = e.model && e.model.prop || "value",
                a = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[n] = t.model.value;
            var i = t.on || (t.on = {});
            i[a] ? i[a] = [t.model.callback].concat(i[a]) : i[a] = t.model.callback
        }

        function Ke(e, t, n, a, i, o) {
            return (Array.isArray(n) || r(n)) && (i = a, a = n, n = void 0), o && (i = so), qe(e, t, n, a, i)
        }

        function qe(e, t, n, a, i) {
            if (n && n.__ob__) return gr("Avoid using observed data object as vnode data: " + JSON.stringify(n) + "\nAlways create fresh vnode data objects in each render!", e), Ur();
            if (!t) return Ur();
            Array.isArray(a) && "function" == typeof a[0] && (n = n || {}, n.scopedSlots = {
                default: a[0]
            }, a.length = 0), i === so ? a = X(a) : i === oo && (a = Q(a));
            var r, o;
            if ("string" == typeof t) {
                var s;
                o = Xi.getTagNamespace(t), r = Xi.isReservedTag(t) ? new Gr(Xi.parsePlatformTagName(t), n, a, (void 0), (void 0), e) : (s = O(e.$options, "components", t)) ? Le(s, n, e, a, t) : new Gr(t, n, a, (void 0), (void 0), e)
            } else r = Le(t, n, e, a);
            return r ? (o && Je(r, o), r) : Ur()
        }

        function Je(e, t) {
            if (e.ns = t, "foreignObject" !== e.tag && e.children)
                for (var n = 0, a = e.children.length; n < a; n++) {
                    var i = e.children[n];
                    i.tag && !i.ns && Je(i, t)
                }
        }

        function Ye(e, t) {
            var n, a, i, r, o;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length), a = 0, i = e.length; a < i; a++) n[a] = t(e[a], a);
            else if ("number" == typeof e)
                for (n = new Array(e), a = 0; a < e; a++) n[a] = t(a + 1, a);
            else if (u(e))
                for (r = Object.keys(e), n = new Array(r.length), a = 0, i = r.length; a < i; a++) o = r[a], n[a] = t(e[o], o, a);
            return n
        }

        function Ze(e, t, n, a) {
            var i = this.$scopedSlots[e];
            if (i) return n = n || {}, a && c(n, a), i(n) || t;
            var r = this.$slots[e];
            return r && (r._rendered && gr('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this), r._rendered = !0), r || t
        }

        function Qe(e) {
            return O(this.$options, "filters", e, !0) || Qi
        }

        function Xe(e, t, n) {
            var a = Xi.keyCodes[t] || n;
            return Array.isArray(a) ? a.indexOf(e) === -1 : a !== e
        }

        function et(e, t, n, a) {
            if (n)
                if (u(n)) {
                    Array.isArray(n) && (n = f(n));
                    for (var i in n)
                        if ("class" === i || "style" === i) e[i] = n[i];
                        else {
                            var r = e.attrs && e.attrs.type,
                                o = a || Xi.mustUseProp(t, r, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                            o[i] = n[i]
                        }
                } else gr("v-bind without argument expects an Object or Array value", this);
            return e
        }

        function tt(e, t) {
            var n = this._staticTrees[e];
            return n && !t ? Array.isArray(n) ? q(n) : K(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), at(n, "__static__" + e, !1), n)
        }

        function nt(e, t, n) {
            return at(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }

        function at(e, t, n) {
            if (Array.isArray(e))
                for (var a = 0; a < e.length; a++) e[a] && "string" != typeof e[a] && it(e[a], t + "_" + a, n);
            else it(e, t, n)
        }

        function it(e, t, n) {
            e.isStatic = !0, e.key = t, e.isOnce = n
        }

        function rt(e) {
            e.$vnode = null, e._vnode = null, e._staticTrees = null;
            var t = e.$options._parentVnode,
                n = t && t.context;
            e.$slots = se(e.$options._renderChildren, n), e.$scopedSlots = mr, e._c = function(t, n, a, i) {
                return Ke(e, t, n, a, i, !1)
            }, e.$createElement = function(t, n, a, i) {
                return Ke(e, t, n, a, i, !0)
            }
        }

        function ot(n) {
            n.prototype.$nextTick = function(e) {
                return fr(e, this)
            }, n.prototype._render = function() {
                var e = this,
                    t = e.$options,
                    n = t.render,
                    a = t.staticRenderFns,
                    i = t._parentVnode;
                if (e._isMounted)
                    for (var r in e.$slots) e.$slots[r] = q(e.$slots[r]);
                e.$scopedSlots = i && i.data.scopedSlots || mr, a && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;
                var o;
                try {
                    o = n.call(e._renderProxy, e.$createElement)
                } catch (t) {
                    V(t, e, "render function"), o = e.$options.renderError ? e.$options.renderError.call(e._renderProxy, e.$createElement, t) : e._vnode
                }
                return o instanceof Gr || (Array.isArray(o) && gr("Multiple root nodes returned from render function. Render function should return a single root node.", e), o = Ur()), o.parent = i, o
            }, n.prototype._o = nt, n.prototype._n = t, n.prototype._s = e, n.prototype._l = Ye, n.prototype._t = Ze, n.prototype._q = m, n.prototype._i = v, n.prototype._m = tt, n.prototype._f = Qe, n.prototype._k = Xe, n.prototype._b = et, n.prototype._v = W, n.prototype._e = Ur, n.prototype._u = ce
        }

        function st(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
        }

        function lt(e) {
            var t = e.$options.inject;
            if (t)
                for (var n = Array.isArray(t), a = n ? t : dr ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < a.length; i++)
                    for (var r = a[i], o = n ? r : t[r], s = e; s;) {
                        if (s._provided && o in s._provided) {
                            e[r] = s._provided[o];
                            break
                        }
                        s = s.$parent
                    }
        }

        function ct(e) {
            e.prototype._init = function(e) {
                Xi.performance && pr && pr.mark("init");
                var t = this;
                t._uid = lo++, t._isVue = !0, e && e._isComponent ? ut(t, e) : t.$options = I(dt(t.constructor), e || {}, t), Br(t), t._self = t, ue(t), ne(t), rt(t), ge(t, "beforeCreate"), lt(t), Se(t), st(t), ge(t, "created"), Xi.performance && pr && (t._name = hr(t, !1), pr.mark("init end"), pr.measure(t._name + " init", "init", "init end")), t.$options.el && t.$mount(t.$options.el)
            }
        }

        function ut(e, t) {
            var n = e.$options = Object.create(e.constructor.options);
            n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
        }

        function dt(e) {
            var t = e.options;
            if (e.super) {
                var n = dt(e.super),
                    a = e.superOptions;
                if (n !== a) {
                    e.superOptions = n;
                    var i = ft(e);
                    i && c(e.extendOptions, i), t = e.options = I(n, e.extendOptions), t.name && (t.components[t.name] = e)
                }
            }
            return t
        }

        function ft(e) {
            var t, n = e.options,
                a = e.sealedOptions;
            for (var i in n) n[i] !== a[i] && (t || (t = {}), t[i] = pt(n[i], a[i]));
            return t
        }

        function pt(e, t) {
            if (Array.isArray(e)) {
                var n = [];
                t = Array.isArray(t) ? t : [t];
                for (var a = 0; a < e.length; a++) t.indexOf(e[a]) < 0 && n.push(e[a]);
                return n
            }
            return e
        }

        function ht(e) {
            this instanceof ht || gr("Vue is a constructor and should be called with the `new` keyword"), this._init(e)
        }

        function mt(e) {
            e.use = function(e) {
                if (!e.installed) {
                    var t = l(arguments, 1);
                    return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t), e.installed = !0, this
                }
            }
        }

        function vt(e) {
            e.mixin = function(e) {
                this.options = I(this.options, e)
            }
        }

        function gt(e) {
            e.cid = 0;
            var t = 1;
            e.extend = function(e) {
                e = e || {};
                var n = this,
                    a = n.cid,
                    i = e._Ctor || (e._Ctor = {});
                if (i[a]) return i[a];
                var r = e.name || n.options.name;
                /^[a-zA-Z][\w-]*$/.test(r) || gr('Invalid component name: "' + r + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
                var o = function(e) {
                    this._init(e)
                };
                return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = I(n.options, e), o.super = n, o.options.props && bt(o), o.options.computed && yt(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, Xi._assetTypes.forEach(function(e) {
                    o[e] = n[e]
                }), r && (o.options.components[r] = o), o.superOptions = n.options, o.extendOptions = e, o.sealedOptions = c({}, o.options), i[a] = o, o
            }
        }

        function bt(e) {
            var t = e.options.props;
            for (var n in t) xe(e.prototype, "_props", n)
        }

        function yt(e) {
            var t = e.options.computed;
            for (var n in t) _e(e.prototype, n, t[n])
        }

        function Ct(e) {
            Xi._assetTypes.forEach(function(t) {
                e[t] = function(e, n) {
                    return n ? ("component" === t && Xi.isReservedTag(e) && gr("Do not use built-in or reserved HTML elements as component id: " + e), "component" === t && d(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                }
            })
        }

        function At(e) {
            return e && (e.Ctor.options.name || e.tag)
        }

        function Tt(e, t) {
            return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e instanceof RegExp && e.test(t)
        }

        function xt(e, t) {
            for (var n in e) {
                var a = e[n];
                if (a) {
                    var i = At(a.componentOptions);
                    i && !t(i) && (St(a), e[n] = null)
                }
            }
        }

        function St(e) {
            e && (e.componentInstance._inactive || ge(e.componentInstance, "deactivated"), e.componentInstance.$destroy())
        }

        function wt(e) {
            var t = {};
            t.get = function() {
                return Xi
            }, t.set = function() {
                gr("Do not replace the Vue.config object, set individual fields instead.")
            }, Object.defineProperty(e, "config", t), e.util = {
                warn: gr,
                extend: c,
                mergeOptions: I,
                defineReactive: k
            }, e.set = _, e.delete = E, e.nextTick = fr, e.options = Object.create(null), Xi._assetTypes.forEach(function(t) {
                e.options[t + "s"] = Object.create(null)
            }), e.options._base = e, c(e.options.components, fo), mt(e), vt(e), gt(e), Ct(e)
        }

        function Mt(e) {
            for (var t = e.data, n = e, a = e; a.componentInstance;) a = a.componentInstance._vnode, a.data && (t = kt(a.data, t));
            for (; n = n.parent;) n.data && (t = kt(t, n.data));
            return _t(t)
        }

        function kt(e, t) {
            return {
                staticClass: Et(e.staticClass, t.staticClass),
                class: e.class ? [e.class, t.class] : t.class
            }
        }

        function _t(e) {
            var t = e.class,
                n = e.staticClass;
            return n || t ? Et(n, Dt(t)) : ""
        }

        function Et(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }

        function Dt(e) {
            var t = "";
            if (!e) return t;
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) {
                for (var n, a = 0, i = e.length; a < i; a++) e[a] && (n = Dt(e[a])) && (t += n + " ");
                return t.slice(0, -1)
            }
            if (u(e)) {
                for (var r in e) e[r] && (t += r + " ");
                return t.slice(0, -1)
            }
            return t
        }

        function Pt(e) {
            return Bo(e) ? "svg" : "math" === e ? "math" : void 0
        }

        function Bt(e) {
            if (!tr) return !0;
            if (Lo(e)) return !1;
            if (e = e.toLowerCase(), null != Ro[e]) return Ro[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? Ro[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Ro[e] = /HTMLUnknownElement/.test(t.toString())
        }

        function Nt(e) {
            if ("string" == typeof e) {
                var t = document.querySelector(e);
                return t ? t : (gr("Cannot find element: " + e), document.createElement("div"))
            }
            return e
        }

        function Lt(e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        }

        function Rt(e, t) {
            return document.createElementNS(Do[e], t)
        }

        function $t(e) {
            return document.createTextNode(e)
        }

        function It(e) {
            return document.createComment(e)
        }

        function Ot(e, t, n) {
            e.insertBefore(t, n)
        }

        function Ft(e, t) {
            e.removeChild(t)
        }

        function Gt(e, t) {
            e.appendChild(t)
        }

        function jt(e) {
            return e.parentNode
        }

        function zt(e) {
            return e.nextSibling
        }

        function Ut(e) {
            return e.tagName
        }

        function Ht(e, t) {
            e.textContent = t
        }

        function Vt(e, t, n) {
            e.setAttribute(t, n)
        }

        function Wt(e, t) {
            var n = e.data.ref;
            if (n) {
                var i = e.context,
                    r = e.componentInstance || e.elm,
                    o = i.$refs;
                t ? Array.isArray(o[n]) ? a(o[n], r) : o[n] === r && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) && o[n].indexOf(r) < 0 ? o[n].push(r) : o[n] = [r] : o[n] = r
            }
        }

        function Kt(e) {
            return null == e
        }

        function qt(e) {
            return null != e
        }

        function Jt(e, t) {
            return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && !e.data == !t.data
        }

        function Yt(e, t, n) {
            var a, i, r = {};
            for (a = t; a <= n; ++a) i = e[a].key, qt(i) && (r[i] = a);
            return r
        }

        function Zt(e) {
            function t(e) {
                return new Gr(_.tagName(e).toLowerCase(), {}, [], (void 0), e)
            }

            function a(e, t) {
                function n() {
                    0 === --n.listeners && i(e)
                }
                return n.listeners = t, n
            }

            function i(e) {
                var t = _.parentNode(e);
                t && _.removeChild(t, e)
            }

            function o(e, t, n, a, i) {
                if (e.isRootInsert = !i, !s(e, t, n, a)) {
                    var r = e.data,
                        o = e.children,
                        l = e.tag;
                    qt(l) ? (r && r.pre && E++, E || e.ns || Xi.ignoredElements.length && Xi.ignoredElements.indexOf(l) > -1 || !Xi.isUnknownElement(l) || gr("Unknown custom element: <" + l + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context), e.elm = e.ns ? _.createElementNS(e.ns, l) : _.createElement(l, e), h(e), d(e, o, t), qt(r) && p(e, t), u(n, e.elm, a), r && r.pre && E--) : e.isComment ? (e.elm = _.createComment(e.text), u(n, e.elm, a)) : (e.elm = _.createTextNode(e.text), u(n, e.elm, a))
                }
            }

            function s(e, t, n, a) {
                var i = e.data;
                if (qt(i)) {
                    var r = qt(e.componentInstance) && i.keepAlive;
                    if (qt(i = i.hook) && qt(i = i.init) && i(e, !1, n, a), qt(e.componentInstance)) return l(e, t), r && c(e, t, n, a), !0
                }
            }

            function l(e, t) {
                e.data.pendingInsert && t.push.apply(t, e.data.pendingInsert), e.elm = e.componentInstance.$el, f(e) ? (p(e, t), h(e)) : (Wt(e), t.push(e))
            }

            function c(e, t, n, a) {
                for (var i, r = e; r.componentInstance;)
                    if (r = r.componentInstance._vnode, qt(i = r.data) && qt(i = i.transition)) {
                        for (i = 0; i < M.activate.length; ++i) M.activate[i](Oo, r);
                        t.push(r);
                        break
                    }
                u(n, e.elm, a)
            }

            function u(e, t, n) {
                e && (n ? _.insertBefore(e, t, n) : _.appendChild(e, t))
            }

            function d(e, t, n) {
                if (Array.isArray(t))
                    for (var a = 0; a < t.length; ++a) o(t[a], n, e.elm, null, !0);
                else r(e.text) && _.appendChild(e.elm, _.createTextNode(e.text))
            }

            function f(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return qt(e.tag)
            }

            function p(e, t) {
                for (var n = 0; n < M.create.length; ++n) M.create[n](Oo, e);
                S = e.data.hook, qt(S) && (S.create && S.create(Oo, e), S.insert && t.push(e))
            }

            function h(e) {
                for (var t, n = e; n;) qt(t = n.context) && qt(t = t.$options._scopeId) && _.setAttribute(e.elm, t, ""), n = n.parent;
                qt(t = Vr) && t !== e.context && qt(t = t.$options._scopeId) && _.setAttribute(e.elm, t, "")
            }

            function m(e, t, n, a, i, r) {
                for (; a <= i; ++a) o(n[a], r, e, t)
            }

            function v(e) {
                var t, n, a = e.data;
                if (qt(a))
                    for (qt(t = a.hook) && qt(t = t.destroy) && t(e), t = 0; t < M.destroy.length; ++t) M.destroy[t](e);
                if (qt(t = e.children))
                    for (n = 0; n < e.children.length; ++n) v(e.children[n])
            }

            function g(e, t, n, a) {
                for (; n <= a; ++n) {
                    var r = t[n];
                    qt(r) && (qt(r.tag) ? (b(r), v(r)) : i(r.elm))
                }
            }

            function b(e, t) {
                if (t || qt(e.data)) {
                    var n = M.remove.length + 1;
                    for (t ? t.listeners += n : t = a(e.elm, n), qt(S = e.componentInstance) && qt(S = S._vnode) && qt(S.data) && b(S, t), S = 0; S < M.remove.length; ++S) M.remove[S](e, t);
                    qt(S = e.data.hook) && qt(S = S.remove) ? S(e, t) : t()
                } else i(e.elm)
            }

            function y(e, t, n, a, i) {
                for (var r, s, l, c, u = 0, d = 0, f = t.length - 1, p = t[0], h = t[f], v = n.length - 1, b = n[0], y = n[v], A = !i; u <= f && d <= v;) Kt(p) ? p = t[++u] : Kt(h) ? h = t[--f] : Jt(p, b) ? (C(p, b, a), p = t[++u], b = n[++d]) : Jt(h, y) ? (C(h, y, a), h = t[--f], y = n[--v]) : Jt(p, y) ? (C(p, y, a), A && _.insertBefore(e, p.elm, _.nextSibling(h.elm)), p = t[++u], y = n[--v]) : Jt(h, b) ? (C(h, b, a), A && _.insertBefore(e, h.elm, p.elm), h = t[--f], b = n[++d]) : (Kt(r) && (r = Yt(t, u, f)), s = qt(b.key) ? r[b.key] : null, Kt(s) ? (o(b, a, e, p.elm), b = n[++d]) : (l = t[s], l || gr("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."), Jt(l, b) ? (C(l, b, a), t[s] = void 0, A && _.insertBefore(e, b.elm, p.elm), b = n[++d]) : (o(b, a, e, p.elm), b = n[++d])));
                u > f ? (c = Kt(n[v + 1]) ? null : n[v + 1].elm, m(e, c, n, d, v, a)) : d > v && g(e, t, u, f)
            }

            function C(e, t, n, a) {
                if (e !== t) {
                    if (t.isStatic && e.isStatic && t.key === e.key && (t.isCloned || t.isOnce)) return t.elm = e.elm, void(t.componentInstance = e.componentInstance);
                    var i, r = t.data,
                        o = qt(r);
                    o && qt(i = r.hook) && qt(i = i.prepatch) && i(e, t);
                    var s = t.elm = e.elm,
                        l = e.children,
                        c = t.children;
                    if (o && f(t)) {
                        for (i = 0; i < M.update.length; ++i) M.update[i](e, t);
                        qt(i = r.hook) && qt(i = i.update) && i(e, t)
                    }
                    Kt(t.text) ? qt(l) && qt(c) ? l !== c && y(s, l, c, n, a) : qt(c) ? (qt(e.text) && _.setTextContent(s, ""), m(s, null, c, 0, c.length - 1, n)) : qt(l) ? g(s, l, 0, l.length - 1) : qt(e.text) && _.setTextContent(s, "") : e.text !== t.text && _.setTextContent(s, t.text), o && qt(i = r.hook) && qt(i = i.postpatch) && i(e, t)
                }
            }

            function A(e, t, n) {
                if (n && e.parent) e.parent.data.pendingInsert = t;
                else
                    for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a])
            }

            function T(e, t, n) {
                if (!x(e, t)) return !1;
                t.elm = e;
                var a = t.tag,
                    i = t.data,
                    r = t.children;
                if (qt(i) && (qt(S = i.hook) && qt(S = S.init) && S(t, !0), qt(S = t.componentInstance))) return l(t, n), !0;
                if (qt(a)) {
                    if (qt(r))
                        if (e.hasChildNodes()) {
                            for (var o = !0, s = e.firstChild, c = 0; c < r.length; c++) {
                                if (!s || !T(s, r[c], n)) {
                                    o = !1;
                                    break
                                }
                                s = s.nextSibling
                            }
                            if (!o || s) return "undefined" == typeof console || D || (D = !0, console.warn("Parent: ", e), console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, r)), !1
                        } else d(t, r, n);
                    if (qt(i))
                        for (var u in i)
                            if (!P(u)) {
                                p(t, n);
                                break
                            }
                } else e.data !== t.text && (e.data = t.text);
                return !0
            }

            function x(e, t) {
                return t.tag ? 0 === t.tag.indexOf("vue-component") || t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()) : e.nodeType === (t.isComment ? 8 : 3)
            }
            var S, w, M = {},
                k = e.modules,
                _ = e.nodeOps;
            for (S = 0; S < Fo.length; ++S)
                for (M[Fo[S]] = [], w = 0; w < k.length; ++w) void 0 !== k[w][Fo[S]] && M[Fo[S]].push(k[w][Fo[S]]);
            var E = 0,
                D = !1,
                P = n("attrs,style,class,staticClass,staticStyle,key");
            return function(e, n, a, i, r, s) {
                if (!n) return void(e && v(e));
                var l = !1,
                    c = [];
                if (e) {
                    var u = qt(e.nodeType);
                    if (!u && Jt(e, n)) C(e, n, c, i);
                    else {
                        if (u) {
                            if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), a = !0), a) {
                                if (T(e, n, c)) return A(n, c, !0), e;
                                gr("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
                            }
                            e = t(e)
                        }
                        var d = e.elm,
                            p = _.parentNode(d);
                        if (o(n, c, d._leaveCb ? null : p, _.nextSibling(d)), n.parent) {
                            for (var h = n.parent; h;) h.elm = n.elm, h = h.parent;
                            if (f(n))
                                for (var m = 0; m < M.create.length; ++m) M.create[m](Oo, n.parent)
                        }
                        null !== p ? g(p, [e], 0, 0) : qt(e.tag) && v(e)
                    }
                } else l = !0, o(n, c, r, s);
                return A(n, c, l), n.elm
            }
        }

        function Qt(e, t) {
            (e.data.directives || t.data.directives) && Xt(e, t)
        }

        function Xt(e, t) {
            var n, a, i, r = e === Oo,
                o = t === Oo,
                s = en(e.data.directives, e.context),
                l = en(t.data.directives, t.context),
                c = [],
                u = [];
            for (n in l) a = s[n], i = l[n], a ? (i.oldValue = a.value, nn(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (nn(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
            if (c.length) {
                var d = function() {
                    for (var n = 0; n < c.length; n++) nn(c[n], "inserted", t, e)
                };
                r ? Z(t.data.hook || (t.data.hook = {}), "insert", d) : d()
            }
            if (u.length && Z(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                    for (var n = 0; n < u.length; n++) nn(u[n], "componentUpdated", t, e)
                }), !r)
                for (n in s) l[n] || nn(s[n], "unbind", e, e, o)
        }

        function en(e, t) {
            var n = Object.create(null);
            if (!e) return n;
            var a, i;
            for (a = 0; a < e.length; a++) i = e[a], i.modifiers || (i.modifiers = jo), n[tn(i)] = i, i.def = O(t.$options, "directives", i.name, !0);
            return n
        }

        function tn(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }

        function nn(e, t, n, a, i) {
            var r = e.def && e.def[t];
            r && r(n.elm, e, n, a, i)
        }

        function an(e, t) {
            if (e.data.attrs || t.data.attrs) {
                var n, a, i, r = t.elm,
                    o = e.data.attrs || {},
                    s = t.data.attrs || {};
                s.__ob__ && (s = t.data.attrs = c({}, s));
                for (n in s) a = s[n], i = o[n], i !== a && rn(r, n, a);
                ir && s.value !== o.value && rn(r, "value", s.value);
                for (n in o) null == s[n] && (ko(n) ? r.removeAttributeNS(Mo, _o(n)) : So(n) || r.removeAttribute(n))
            }
        }

        function rn(e, t, n) {
            wo(t) ? Eo(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : So(t) ? e.setAttribute(t, Eo(n) || "false" === n ? "false" : "true") : ko(t) ? Eo(n) ? e.removeAttributeNS(Mo, _o(t)) : e.setAttributeNS(Mo, t, n) : Eo(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function on(e, t) {
            var n = t.elm,
                a = t.data,
                i = e.data;
            if (a.staticClass || a.class || i && (i.staticClass || i.class)) {
                var r = Mt(t),
                    o = n._transitionClasses;
                o && (r = Et(r, Dt(o))), r !== n._prevClass && (n.setAttribute("class", r), n._prevClass = r)
            }
        }

        function sn(e) {
            function t() {
                (o || (o = [])).push(e.slice(h, i).trim()), h = i + 1
            }
            var n, a, i, r, o, s = !1,
                l = !1,
                c = !1,
                u = !1,
                d = 0,
                f = 0,
                p = 0,
                h = 0;
            for (i = 0; i < e.length; i++)
                if (a = n, n = e.charCodeAt(i), s) 39 === n && 92 !== a && (s = !1);
                else if (l) 34 === n && 92 !== a && (l = !1);
            else if (c) 96 === n && 92 !== a && (c = !1);
            else if (u) 47 === n && 92 !== a && (u = !1);
            else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || d || f || p) {
                switch (n) {
                    case 34:
                        l = !0;
                        break;
                    case 39:
                        s = !0;
                        break;
                    case 96:
                        c = !0;
                        break;
                    case 40:
                        p++;
                        break;
                    case 41:
                        p--;
                        break;
                    case 91:
                        f++;
                        break;
                    case 93:
                        f--;
                        break;
                    case 123:
                        d++;
                        break;
                    case 125:
                        d--
                }
                if (47 === n) {
                    for (var m = i - 1, v = void 0; m >= 0 && (v = e.charAt(m), " " === v); m--);
                    v && Vo.test(v) || (u = !0)
                }
            } else void 0 === r ? (h = i + 1, r = e.slice(0, i).trim()) : t();
            if (void 0 === r ? r = e.slice(0, i).trim() : 0 !== h && t(), o)
                for (i = 0; i < o.length; i++) r = ln(r, o[i]);
            return r
        }

        function ln(e, t) {
            var n = t.indexOf("(");
            if (n < 0) return '_f("' + t + '")(' + e + ")";
            var a = t.slice(0, n),
                i = t.slice(n + 1);
            return '_f("' + a + '")(' + e + "," + i
        }

        function cn(e) {
            console.error("[Vue compiler]: " + e)
        }

        function un(e, t) {
            return e ? e.map(function(e) {
                return e[t]
            }).filter(function(e) {
                return e
            }) : []
        }

        function dn(e, t, n) {
            (e.props || (e.props = [])).push({
                name: t,
                value: n
            })
        }

        function fn(e, t, n) {
            (e.attrs || (e.attrs = [])).push({
                name: t,
                value: n
            })
        }

        function pn(e, t, n, a, i, r) {
            (e.directives || (e.directives = [])).push({
                name: t,
                rawName: n,
                value: a,
                arg: i,
                modifiers: r
            })
        }

        function hn(e, t, n, a, i) {
            a && a.capture && (delete a.capture, t = "!" + t), a && a.once && (delete a.once, t = "~" + t);
            var r;
            a && a.native ? (delete a.native, r = e.nativeEvents || (e.nativeEvents = {})) : r = e.events || (e.events = {});
            var o = {
                    value: n,
                    modifiers: a
                },
                s = r[t];
            Array.isArray(s) ? i ? s.unshift(o) : s.push(o) : s ? r[t] = i ? [o, s] : [s, o] : r[t] = o
        }

        function mn(e, t, n) {
            var a = vn(e, ":" + t) || vn(e, "v-bind:" + t);
            if (null != a) return sn(a);
            if (n !== !1) {
                var i = vn(e, t);
                if (null != i) return JSON.stringify(i)
            }
        }

        function vn(e, t) {
            var n;
            if (null != (n = e.attrsMap[t]))
                for (var a = e.attrsList, i = 0, r = a.length; i < r; i++)
                    if (a[i].name === t) {
                        a.splice(i, 1);
                        break
                    }
            return n
        }

        function gn(e, t, n) {
            var a = n || {},
                i = a.number,
                r = a.trim,
                o = "$$v",
                s = o;
            r && (s = "(typeof " + o + " === 'string'? " + o + ".trim(): " + o + ")"), i && (s = "_n(" + s + ")");
            var l = bn(t, s);
            e.model = {
                value: "(" + t + ")",
                expression: '"' + t + '"',
                callback: "function (" + o + ") {" + l + "}"
            }
        }

        function bn(e, t) {
            var n = yn(e);
            return null === n.idx ? e + "=" + t : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}"
        }

        function yn(e) {
            if (ho = e, po = ho.length, vo = go = bo = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < po - 1) return {
                exp: e,
                idx: null
            };
            for (; !An();) mo = Cn(), Tn(mo) ? Sn(mo) : 91 === mo && xn(mo);
            return {
                exp: e.substring(0, go),
                idx: e.substring(go + 1, bo)
            }
        }

        function Cn() {
            return ho.charCodeAt(++vo)
        }

        function An() {
            return vo >= po
        }

        function Tn(e) {
            return 34 === e || 39 === e
        }

        function xn(e) {
            var t = 1;
            for (go = vo; !An();)
                if (e = Cn(), Tn(e)) Sn(e);
                else if (91 === e && t++, 93 === e && t--, 0 === t) {
                bo = vo;
                break
            }
        }

        function Sn(e) {
            for (var t = e; !An() && (e = Cn(), e !== t););
        }

        function wn(e, t, n) {
            yo = n;
            var a = t.value,
                i = t.modifiers,
                r = e.tag,
                o = e.attrsMap.type,
                s = e.attrsMap["v-bind:type"] || e.attrsMap[":type"];
            if ("input" === r && s && yo('<input :type="' + s + '" v-model="' + a + '">:\nv-model does not support dynamic input types. Use v-if branches instead.'), "input" === r && "file" === o && yo("<" + e.tag + ' v-model="' + a + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'), "select" === r) _n(e, a, i);
            else if ("input" === r && "checkbox" === o) Mn(e, a, i);
            else if ("input" === r && "radio" === o) kn(e, a, i);
            else if ("input" === r || "textarea" === r) En(e, a, i);
            else {
                if (!Xi.isReservedTag(r)) return gn(e, a, i), !1;
                yo("<" + e.tag + ' v-model="' + a + "\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.")
            }
            return !0
        }

        function Mn(e, t, n) {
            var a = n && n.number,
                i = mn(e, "value") || "null",
                r = mn(e, "true-value") || "true",
                o = mn(e, "false-value") || "false";
            dn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), hn(e, Ko, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (a ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0);
        }

        function kn(e, t, n) {
            var a = n && n.number,
                i = mn(e, "value") || "null";
            i = a ? "_n(" + i + ")" : i, dn(e, "checked", "_q(" + t + "," + i + ")"), hn(e, Ko, bn(t, i), null, !0)
        }

        function _n(e, t, n) {
            var a = n && n.number,
                i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (a ? "_n(val)" : "val") + "})",
                r = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]",
                o = "var $$selectedVal = " + i + ";";
            o = o + " " + bn(t, r), hn(e, "change", o, null, !0)
        }

        function En(e, t, n) {
            var a = e.attrsMap.type,
                i = n || {},
                r = i.lazy,
                o = i.number,
                s = i.trim,
                l = !r && "range" !== a,
                c = r ? "change" : "range" === a ? Wo : "input",
                u = "$event.target.value";
            s && (u = "$event.target.value.trim()"), o && (u = "_n(" + u + ")");
            var d = bn(t, u);
            l && (d = "if($event.target.composing)return;" + d), dn(e, "value", "(" + t + ")"), hn(e, c, d, null, !0), (s || o || "number" === a) && hn(e, "blur", "$forceUpdate()")
        }

        function Dn(e) {
            var t;
            e[Wo] && (t = ar ? "change" : "input", e[t] = [].concat(e[Wo], e[t] || []), delete e[Wo]), e[Ko] && (t = lr ? "click" : "change", e[t] = [].concat(e[Ko], e[t] || []), delete e[Ko])
        }

        function Pn(e, t, n, a) {
            if (n) {
                var i = t,
                    r = Co;
                t = function(n) {
                    var o = 1 === arguments.length ? i(n) : i.apply(null, arguments);
                    null !== o && Bn(e, t, a, r)
                }
            }
            Co.addEventListener(e, t, a)
        }

        function Bn(e, t, n, a) {
            (a || Co).removeEventListener(e, t, n)
        }

        function Nn(e, t) {
            if (e.data.on || t.data.on) {
                var n = t.data.on || {},
                    a = e.data.on || {};
                Co = t.elm, Dn(n), Y(n, a, Pn, Bn, t.context)
            }
        }

        function Ln(e, t) {
            if (e.data.domProps || t.data.domProps) {
                var n, a, i = t.elm,
                    r = e.data.domProps || {},
                    o = t.data.domProps || {};
                o.__ob__ && (o = t.data.domProps = c({}, o));
                for (n in r) null == o[n] && (i[n] = "");
                for (n in o)
                    if (a = o[n], "textContent" !== n && "innerHTML" !== n || (t.children && (t.children.length = 0), a !== r[n]))
                        if ("value" === n) {
                            i._value = a;
                            var s = null == a ? "" : String(a);
                            Rn(i, t, s) && (i.value = s)
                        } else i[n] = a
            }
        }

        function Rn(e, t, n) {
            return !e.composing && ("option" === t.tag || $n(e, n) || In(e, n))
        }

        function $n(e, t) {
            return document.activeElement !== e && e.value !== t
        }

        function In(e, n) {
            var a = e.value,
                i = e._vModifiers;
            return i && i.number || "number" === e.type ? t(a) !== t(n) : i && i.trim ? a.trim() !== n.trim() : a !== n
        }

        function On(e) {
            var t = Fn(e.style);
            return e.staticStyle ? c(e.staticStyle, t) : t
        }

        function Fn(e) {
            return Array.isArray(e) ? f(e) : "string" == typeof e ? Yo(e) : e
        }

        function Gn(e, t) {
            var n, a = {};
            if (t)
                for (var i = e; i.componentInstance;) i = i.componentInstance._vnode, i.data && (n = On(i.data)) && c(a, n);
            (n = On(e.data)) && c(a, n);
            for (var r = e; r = r.parent;) r.data && (n = On(r.data)) && c(a, n);
            return a
        }

        function jn(e, t) {
            var n = t.data,
                a = e.data;
            if (n.staticStyle || n.style || a.staticStyle || a.style) {
                var i, r, o = t.elm,
                    s = e.data.staticStyle,
                    l = e.data.style || {},
                    u = s || l,
                    d = Fn(t.data.style) || {};
                t.data.style = d.__ob__ ? c({}, d) : d;
                var f = Gn(t, !0);
                for (r in u) null == f[r] && Xo(o, r, "");
                for (r in f) i = f[r], i !== u[r] && Xo(o, r, null == i ? "" : i)
            }
        }

        function zn(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }

        function Un(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t);
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", a = " " + t + " "; n.indexOf(a) >= 0;) n = n.replace(a, " ");
                    e.setAttribute("class", n.trim())
                }
        }

        function Hn(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return e.css !== !1 && c(t, as(e.name || "v")), c(t, e), t
                }
                return "string" == typeof e ? as(e) : void 0
            }
        }

        function Vn(e) {
            ds(function() {
                ds(e)
            })
        }

        function Wn(e, t) {
            (e._transitionClasses || (e._transitionClasses = [])).push(t), zn(e, t)
        }

        function Kn(e, t) {
            e._transitionClasses && a(e._transitionClasses, t), Un(e, t)
        }

        function qn(e, t, n) {
            var a = Jn(e, t),
                i = a.type,
                r = a.timeout,
                o = a.propCount;
            if (!i) return n();
            var s = i === rs ? ls : us,
                l = 0,
                c = function() {
                    e.removeEventListener(s, u), n()
                },
                u = function(t) {
                    t.target === e && ++l >= o && c()
                };
            setTimeout(function() {
                l < o && c()
            }, r + 1), e.addEventListener(s, u)
        }

        function Jn(e, t) {
            var n, a = window.getComputedStyle(e),
                i = a[ss + "Delay"].split(", "),
                r = a[ss + "Duration"].split(", "),
                o = Yn(i, r),
                s = a[cs + "Delay"].split(", "),
                l = a[cs + "Duration"].split(", "),
                c = Yn(s, l),
                u = 0,
                d = 0;
            t === rs ? o > 0 && (n = rs, u = o, d = r.length) : t === os ? c > 0 && (n = os, u = c, d = l.length) : (u = Math.max(o, c), n = u > 0 ? o > c ? rs : os : null, d = n ? n === rs ? r.length : l.length : 0);
            var f = n === rs && fs.test(a[ss + "Property"]);
            return {
                type: n,
                timeout: u,
                propCount: d,
                hasTransform: f
            }
        }

        function Yn(e, t) {
            for (; e.length < t.length;) e = e.concat(e);
            return Math.max.apply(null, t.map(function(t, n) {
                return Zn(t) + Zn(e[n])
            }))
        }

        function Zn(e) {
            return 1e3 * Number(e.slice(0, -1))
        }

        function Qn(e, n) {
            var a = e.elm;
            a._leaveCb && (a._leaveCb.cancelled = !0, a._leaveCb());
            var i = Hn(e.data.transition);
            if (i && !a._enterCb && 1 === a.nodeType) {
                for (var r = i.css, o = i.type, s = i.enterClass, l = i.enterToClass, c = i.enterActiveClass, d = i.appearClass, f = i.appearToClass, p = i.appearActiveClass, h = i.beforeEnter, m = i.enter, v = i.afterEnter, b = i.enterCancelled, y = i.beforeAppear, C = i.appear, A = i.afterAppear, T = i.appearCancelled, x = i.duration, S = Vr, w = Vr.$vnode; w && w.parent;) w = w.parent, S = w.context;
                var M = !S._isMounted || !e.isRootInsert;
                if (!M || C || "" === C) {
                    var k = M && d ? d : s,
                        _ = M && p ? p : c,
                        E = M && f ? f : l,
                        D = M ? y || h : h,
                        P = M && "function" == typeof C ? C : m,
                        B = M ? A || v : v,
                        N = M ? T || b : b,
                        L = t(u(x) ? x.enter : x);
                    null != L && ea(L, "enter", e);
                    var R = r !== !1 && !ir,
                        $ = na(P),
                        I = a._enterCb = g(function() {
                            R && (Kn(a, E), Kn(a, _)), I.cancelled ? (R && Kn(a, k), N && N(a)) : B && B(a), a._enterCb = null
                        });
                    e.data.show || Z(e.data.hook || (e.data.hook = {}), "insert", function() {
                        var t = a.parentNode,
                            n = t && t._pending && t._pending[e.key];
                        n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), P && P(a, I)
                    }), D && D(a), R && (Wn(a, k), Wn(a, _), Vn(function() {
                        Wn(a, E), Kn(a, k), I.cancelled || $ || (ta(L) ? setTimeout(I, L) : qn(a, o, I))
                    })), e.data.show && (n && n(), P && P(a, I)), R || $ || I()
                }
            }
        }

        function Xn(e, n) {
            function a() {
                T.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), f && f(i), y && (Wn(i, l), Wn(i, d), Vn(function() {
                    Wn(i, c), Kn(i, l), T.cancelled || C || (ta(A) ? setTimeout(T, A) : qn(i, s, T))
                })), p && p(i, T), y || C || T())
            }
            var i = e.elm;
            i._enterCb && (i._enterCb.cancelled = !0, i._enterCb());
            var r = Hn(e.data.transition);
            if (!r) return n();
            if (!i._leaveCb && 1 === i.nodeType) {
                var o = r.css,
                    s = r.type,
                    l = r.leaveClass,
                    c = r.leaveToClass,
                    d = r.leaveActiveClass,
                    f = r.beforeLeave,
                    p = r.leave,
                    h = r.afterLeave,
                    m = r.leaveCancelled,
                    v = r.delayLeave,
                    b = r.duration,
                    y = o !== !1 && !ir,
                    C = na(p),
                    A = t(u(b) ? b.leave : b);
                null != A && ea(A, "leave", e);
                var T = i._leaveCb = g(function() {
                    i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), y && (Kn(i, c), Kn(i, d)), T.cancelled ? (y && Kn(i, l), m && m(i)) : (n(), h && h(i)), i._leaveCb = null
                });
                v ? v(a) : a()
            }
        }

        function ea(e, t, n) {
            "number" != typeof e ? gr("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && gr("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context)
        }

        function ta(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function na(e) {
            if (!e) return !1;
            var t = e.fns;
            return t ? na(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }

        function aa(e, t) {
            t.data.show || Qn(t)
        }

        function ia(e, t, n) {
            var a = t.value,
                i = e.multiple;
            if (i && !Array.isArray(a)) return void gr('<select multiple v-model="' + t.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(a).slice(8, -1), n);
            for (var r, o, s = 0, l = e.options.length; s < l; s++)
                if (o = e.options[s], i) r = v(a, oa(o)) > -1, o.selected !== r && (o.selected = r);
                else if (m(oa(o), a)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
            i || (e.selectedIndex = -1)
        }

        function ra(e, t) {
            for (var n = 0, a = t.length; n < a; n++)
                if (m(oa(t[n]), e)) return !1;
            return !0
        }

        function oa(e) {
            return "_value" in e ? e._value : e.value
        }

        function sa(e) {
            e.target.composing = !0
        }

        function la(e) {
            e.target.composing = !1, ca(e.target, "input")
        }

        function ca(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function ua(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : ua(e.componentInstance._vnode)
        }

        function da(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? da(te(t.children)) : e
        }

        function fa(e) {
            var t = {},
                n = e.$options;
            for (var a in n.propsData) t[a] = e[a];
            var i = n._parentListeners;
            for (var r in i) t[Vi(r)] = i[r];
            return t
        }

        function pa(e, t) {
            return /\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
        }

        function ha(e) {
            for (; e = e.parent;)
                if (e.data.transition) return !0
        }

        function ma(e, t) {
            return t.key === e.key && t.tag === e.tag
        }

        function va(e) {
            e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }

        function ga(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }

        function ba(e) {
            var t = e.data.pos,
                n = e.data.newPos,
                a = t.left - n.left,
                i = t.top - n.top;
            if (a || i) {
                e.data.moved = !0;
                var r = e.elm.style;
                r.transform = r.WebkitTransform = "translate(" + a + "px," + i + "px)", r.transitionDuration = "0s"
            }
        }

        function ya(e, t) {
            var n = document.createElement("div");
            return n.innerHTML = '<div a="' + e + '">', n.innerHTML.indexOf(t) > 0
        }

        function Ca(e) {
            return ws = ws || document.createElement("div"), ws.innerHTML = e, ws.textContent
        }

        function Aa(e, t) {
            var n = t ? dl : ul;
            return e.replace(n, function(e) {
                return cl[e]
            })
        }

        function Ta(e, t) {
            function n(t) {
                d += t, e = e.substring(t)
            }

            function a() {
                var t = e.match($s);
                if (t) {
                    var a = {
                        tagName: t[1],
                        attrs: [],
                        start: d
                    };
                    n(t[0].length);
                    for (var i, r; !(i = e.match(Is)) && (r = e.match(Ns));) n(r[0].length), a.attrs.push(r);
                    if (i) return a.unarySlash = i[1], n(i[0].length), a.end = d, a
                }
            }

            function i(e) {
                var n = e.tagName,
                    a = e.unarySlash;
                c && ("p" === s && Es(n) && r(s), _s(n) && s === n && r(n));
                for (var i = u(n) || "html" === n && "head" === s || !!a, o = e.attrs.length, d = new Array(o), f = 0; f < o; f++) {
                    var p = e.attrs[f];
                    zs && p[0].indexOf('""') === -1 && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);
                    var h = p[3] || p[4] || p[5] || "";
                    d[f] = {
                        name: p[1],
                        value: Aa(h, t.shouldDecodeNewlines)
                    }
                }
                i || (l.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: d
                }), s = n), t.start && t.start(n, d, i, e.start, e.end)
            }

            function r(e, n, a) {
                var i, r;
                if (null == n && (n = d), null == a && (a = d), e && (r = e.toLowerCase()), e)
                    for (i = l.length - 1; i >= 0 && l[i].lowerCasedTag !== r; i--);
                else i = 0;
                if (i >= 0) {
                    for (var o = l.length - 1; o >= i; o--)(o > i || !e) && t.warn && t.warn("tag <" + l[o].tag + "> has no matching end tag."), t.end && t.end(l[o].tag, n, a);
                    l.length = i, s = i && l[i - 1].tag
                } else "br" === r ? t.start && t.start(e, [], !0, n, a) : "p" === r && (t.start && t.start(e, [], !1, n, a), t.end && t.end(e, n, a))
            }
            for (var o, s, l = [], c = t.expectHTML, u = t.isUnaryTag || Zi, d = 0; e;) {
                if (o = e, s && sl(s)) {
                    var f = s.toLowerCase(),
                        p = ll[f] || (ll[f] = new RegExp("([\\s\\S]*?)(</" + f + "[^>]*>)", "i")),
                        h = 0,
                        m = e.replace(p, function(e, n, a) {
                            return h = a.length, "script" !== f && "style" !== f && "noscript" !== f && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), t.chars && t.chars(n), ""
                        });
                    d += e.length - m.length, e = m, r(f, d - h, d)
                } else {
                    var v = e.indexOf("<");
                    if (0 === v) {
                        if (Gs.test(e)) {
                            var g = e.indexOf("-->");
                            if (g >= 0) {
                                n(g + 3);
                                continue
                            }
                        }
                        if (js.test(e)) {
                            var b = e.indexOf("]>");
                            if (b >= 0) {
                                n(b + 2);
                                continue
                            }
                        }
                        var y = e.match(Fs);
                        if (y) {
                            n(y[0].length);
                            continue
                        }
                        var C = e.match(Os);
                        if (C) {
                            var A = d;
                            n(C[0].length), r(C[1], A, d);
                            continue
                        }
                        var T = a();
                        if (T) {
                            i(T);
                            continue
                        }
                    }
                    var x = void 0,
                        S = void 0,
                        w = void 0;
                    if (v >= 0) {
                        for (S = e.slice(v); !(Os.test(S) || $s.test(S) || Gs.test(S) || js.test(S) || (w = S.indexOf("<", 1), w < 0));) v += w, S = e.slice(v);
                        x = e.substring(0, v), n(v)
                    }
                    v < 0 && (x = e, e = ""), t.chars && x && t.chars(x)
                }
                if (e === o) {
                    t.chars && t.chars(e), !l.length && t.warn && t.warn('Mal-formatted tag at end of template: "' + e + '"');
                    break
                }
            }
            r()
        }

        function xa(e, t) {
            var n = t ? hl(t) : fl;
            if (n.test(e)) {
                for (var a, i, r = [], o = n.lastIndex = 0; a = n.exec(e);) {
                    i = a.index, i > o && r.push(JSON.stringify(e.slice(o, i)));
                    var s = sn(a[1].trim());
                    r.push("_s(" + s + ")"), o = i + a[0].length
                }
                return o < e.length && r.push(JSON.stringify(e.slice(o))), r.join("+")
            }
        }

        function Sa(e, t) {
            function n(e) {
                e.pre && (s = !1), Ws(e.tag) && (l = !1)
            }
            Us = t.warn || cn, Hs = t.getTagNamespace || Zi, Vs = t.mustUseProp || Zi, Ws = t.isPreTag || Zi, Ks = un(t.modules, "preTransformNode"), qs = un(t.modules, "transformNode"), Js = un(t.modules, "postTransformNode"), Ys = t.delimiters;
            var a, i, r = [],
                o = t.preserveWhitespace !== !1,
                s = !1,
                l = !1,
                c = !1;
            return Ta(e, {
                warn: Us,
                expectHTML: t.expectHTML,
                isUnaryTag: t.isUnaryTag,
                shouldDecodeNewlines: t.shouldDecodeNewlines,
                start: function(e, o, u) {
                    function d(e) {
                        c || ("slot" !== e.tag && "template" !== e.tag || (c = !0, Us("Cannot use <" + e.tag + "> as component root element because it may contain multiple nodes.")), e.attrsMap.hasOwnProperty("v-for") && (c = !0, Us("Cannot use v-for on stateful component root element because it renders multiple elements.")))
                    }
                    var f = i && i.ns || Hs(e);
                    ar && "svg" === f && (o = za(o));
                    var p = {
                        type: 1,
                        tag: e,
                        attrsList: o,
                        attrsMap: Ga(o),
                        parent: i,
                        children: []
                    };
                    f && (p.ns = f), ja(p) && !cr() && (p.forbidden = !0, Us("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + e + ">, as they will not be parsed."));
                    for (var h = 0; h < Ks.length; h++) Ks[h](p, t);
                    if (s || (wa(p), p.pre && (s = !0)), Ws(p.tag) && (l = !0), s) Ma(p);
                    else {
                        Ea(p), Da(p), La(p), ka(p), p.plain = !p.key && !o.length, _a(p), Ra(p), $a(p);
                        for (var m = 0; m < qs.length; m++) qs[m](p, t);
                        Ia(p)
                    }
                    if (a ? r.length || (a.if && (p.elseif || p.else) ? (d(p), Na(a, {
                            exp: p.elseif,
                            block: p
                        })) : c || (c = !0, Us("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead."))) : (a = p, d(a)), i && !p.forbidden)
                        if (p.elseif || p.else) Pa(p, i);
                        else if (p.slotScope) {
                        i.plain = !1;
                        var v = p.slotTarget || '"default"';
                        (i.scopedSlots || (i.scopedSlots = {}))[v] = p
                    } else i.children.push(p), p.parent = i;
                    u ? n(p) : (i = p, r.push(p));
                    for (var g = 0; g < Js.length; g++) Js[g](p, t)
                },
                end: function() {
                    var e = r[r.length - 1],
                        t = e.children[e.children.length - 1];
                    t && 3 === t.type && " " === t.text && !l && e.children.pop(), r.length -= 1, i = r[r.length - 1], n(e)
                },
                chars: function(t) {
                    if (!i) return void(c || t !== e || (c = !0, Us("Component template requires a root element, rather than just text.")));
                    if (!ar || "textarea" !== i.tag || i.attrsMap.placeholder !== t) {
                        var n = i.children;
                        if (t = l || t.trim() ? Tl(t) : o && n.length ? " " : "") {
                            var a;
                            !s && " " !== t && (a = xa(t, Ys)) ? n.push({
                                type: 2,
                                expression: a,
                                text: t
                            }) : " " === t && n.length && " " === n[n.length - 1].text || n.push({
                                type: 3,
                                text: t
                            })
                        }
                    }
                }
            }), a
        }

        function wa(e) {
            null != vn(e, "v-pre") && (e.pre = !0)
        }

        function Ma(e) {
            var t = e.attrsList.length;
            if (t)
                for (var n = e.attrs = new Array(t), a = 0; a < t; a++) n[a] = {
                    name: e.attrsList[a].name,
                    value: JSON.stringify(e.attrsList[a].value)
                };
            else e.pre || (e.plain = !0)
        }

        function ka(e) {
            var t = mn(e, "key");
            t && ("template" === e.tag && Us("<template> cannot be keyed. Place the key on real elements instead."), e.key = t)
        }

        function _a(e) {
            var t = mn(e, "ref");
            t && (e.ref = t, e.refInFor = Oa(e))
        }

        function Ea(e) {
            var t;
            if (t = vn(e, "v-for")) {
                var n = t.match(gl);
                if (!n) return void Us("Invalid v-for expression: " + t);
                e.for = n[2].trim();
                var a = n[1].trim(),
                    i = a.match(bl);
                i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = a
            }
        }

        function Da(e) {
            var t = vn(e, "v-if");
            if (t) e.if = t, Na(e, {
                exp: t,
                block: e
            });
            else {
                null != vn(e, "v-else") && (e.else = !0);
                var n = vn(e, "v-else-if");
                n && (e.elseif = n)
            }
        }

        function Pa(e, t) {
            var n = Ba(t.children);
            n && n.if ? Na(n, {
                exp: e.elseif,
                block: e
            }) : Us("v-" + (e.elseif ? 'else-if="' + e.elseif + '"' : "else") + " used on element <" + e.tag + "> without corresponding v-if.")
        }

        function Ba(e) {
            for (var t = e.length; t--;) {
                if (1 === e[t].type) return e[t];
                " " !== e[t].text && Us('text "' + e[t].text.trim() + '" between v-if and v-else(-if) will be ignored.'), e.pop()
            }
        }

        function Na(e, t) {
            e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
        }

        function La(e) {
            var t = vn(e, "v-once");
            null != t && (e.once = !0)
        }

        function Ra(e) {
            if ("slot" === e.tag) e.slotName = mn(e, "name"), e.key && Us("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.");
            else {
                var t = mn(e, "slot");
                t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = vn(e, "scope"))
            }
        }

        function $a(e) {
            var t;
            (t = mn(e, "is")) && (e.component = t), null != vn(e, "inline-template") && (e.inlineTemplate = !0)
        }

        function Ia(e) {
            var t, n, a, i, r, o, s, l, c = e.attrsList;
            for (t = 0, n = c.length; t < n; t++)
                if (a = i = c[t].name, r = c[t].value, ml.test(a))
                    if (e.hasBindings = !0, s = Fa(a), s && (a = a.replace(Al, "")), yl.test(a)) a = a.replace(yl, ""), r = sn(r), l = !1, s && (s.prop && (l = !0, a = Vi(a), "innerHtml" === a && (a = "innerHTML")), s.camel && (a = Vi(a))), l || Vs(e.tag, e.attrsMap.type, a) ? dn(e, a, r) : fn(e, a, r);
                    else if (vl.test(a)) a = a.replace(vl, ""), hn(e, a, r, s);
            else {
                a = a.replace(ml, "");
                var u = a.match(Cl);
                u && (o = u[1]) && (a = a.slice(0, -(o.length + 1))), pn(e, a, i, r, o, s), "model" === a && Ua(e, r)
            } else {
                var d = xa(r, Ys);
                d && Us(a + '="' + r + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'), fn(e, a, JSON.stringify(r))
            }
        }

        function Oa(e) {
            for (var t = e; t;) {
                if (void 0 !== t.for) return !0;
                t = t.parent
            }
            return !1
        }

        function Fa(e) {
            var t = e.match(Al);
            if (t) {
                var n = {};
                return t.forEach(function(e) {
                    n[e.slice(1)] = !0
                }), n
            }
        }

        function Ga(e) {
            for (var t = {}, n = 0, a = e.length; n < a; n++) t[e[n].name] && !ar && Us("duplicate attribute: " + e[n].name), t[e[n].name] = e[n].value;
            return t
        }

        function ja(e) {
            return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
        }

        function za(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var a = e[n];
                xl.test(a.name) || (a.name = a.name.replace(Sl, ""), t.push(a))
            }
            return t
        }

        function Ua(e, t) {
            for (var n = e; n;) n.for && n.alias === t && Us("<" + e.tag + ' v-model="' + t + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'), n = n.parent
        }

        function Ha(e, t) {
            e && (Zs = wl(t.staticKeys || ""), Qs = t.isReservedTag || Zi, Wa(e), Ka(e, !1))
        }

        function Va(e) {
            return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
        }

        function Wa(e) {
            if (e.static = Ja(e), 1 === e.type) {
                if (!Qs(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                for (var t = 0, n = e.children.length; t < n; t++) {
                    var a = e.children[t];
                    Wa(a), a.static || (e.static = !1)
                }
            }
        }

        function Ka(e, t) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                if (e.staticRoot = !1, e.children)
                    for (var n = 0, a = e.children.length; n < a; n++) Ka(e.children[n], t || !!e.for);
                e.ifConditions && qa(e.ifConditions, t)
            }
        }

        function qa(e, t) {
            for (var n = 1, a = e.length; n < a; n++) Ka(e[n].block, t)
        }

        function Ja(e) {
            return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || zi(e.tag) || !Qs(e.tag) || Ya(e) || !Object.keys(e).every(Zs))))
        }

        function Ya(e) {
            for (; e.parent;) {
                if (e = e.parent, "template" !== e.tag) return !1;
                if (e.for) return !0
            }
            return !1
        }

        function Za(e, t) {
            var n = t ? "nativeOn:{" : "on:{";
            for (var a in e) n += '"' + a + '":' + Qa(a, e[a]) + ",";
            return n.slice(0, -1) + "}"
        }

        function Qa(e, t) {
            if (!t) return "function(){}";
            if (Array.isArray(t)) return "[" + t.map(function(t) {
                return Qa(e, t)
            }).join(",") + "]";
            var n = kl.test(t.value),
                a = Ml.test(t.value);
            if (t.modifiers) {
                var i = "",
                    r = [];
                for (var o in t.modifiers) Dl[o] ? (i += Dl[o], _l[o] && r.push(o)) : r.push(o);
                r.length && (i += Xa(r));
                var s = n ? t.value + "($event)" : a ? "(" + t.value + ")($event)" : t.value;
                return "function($event){" + i + s + "}"
            }
            return n || a ? t.value : "function($event){" + t.value + "}"
        }

        function Xa(e) {
            return "if(!('button' in $event)&&" + e.map(ei).join("&&") + ")return null;"
        }

        function ei(e) {
            var t = parseInt(e, 10);
            if (t) return "$event.keyCode!==" + t;
            var n = _l[e];
            return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")"
        }

        function ti(e, t) {
            e.wrapData = function(n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")"
            }
        }

        function ni(e, t) {
            var n = il,
                a = il = [],
                i = rl;
            rl = 0, ol = t, Xs = t.warn || cn, el = un(t.modules, "transformCode"), tl = un(t.modules, "genData"), nl = t.directives || {}, al = t.isReservedTag || Zi;
            var r = e ? ai(e) : '_c("div")';
            return il = n, rl = i, {
                render: "with(this){return " + r + "}",
                staticRenderFns: a
            }
        }

        function ai(e) {
            if (e.staticRoot && !e.staticProcessed) return ii(e);
            if (e.once && !e.onceProcessed) return ri(e);
            if (e.for && !e.forProcessed) return li(e);
            if (e.if && !e.ifProcessed) return oi(e);
            if ("template" !== e.tag || e.slotTarget) {
                if ("slot" === e.tag) return Ci(e);
                var t;
                if (e.component) t = Ai(e.component, e);
                else {
                    var n = e.plain ? void 0 : ci(e),
                        a = e.inlineTemplate ? null : hi(e, !0);
                    t = "_c('" + e.tag + "'" + (n ? "," + n : "") + (a ? "," + a : "") + ")"
                }
                for (var i = 0; i < el.length; i++) t = el[i](e, t);
                return t
            }
            return hi(e) || "void 0"
        }

        function ii(e) {
            return e.staticProcessed = !0, il.push("with(this){return " + ai(e) + "}"), "_m(" + (il.length - 1) + (e.staticInFor ? ",true" : "") + ")"
        }

        function ri(e) {
            if (e.onceProcessed = !0, e.if && !e.ifProcessed) return oi(e);
            if (e.staticInFor) {
                for (var t = "", n = e.parent; n;) {
                    if (n.for) {
                        t = n.key;
                        break
                    }
                    n = n.parent
                }
                return t ? "_o(" + ai(e) + "," + rl++ + (t ? "," + t : "") + ")" : (Xs("v-once can only be used inside v-for that is keyed. "), ai(e))
            }
            return ii(e)
        }

        function oi(e) {
            return e.ifProcessed = !0, si(e.ifConditions.slice())
        }

        function si(e) {
            function t(e) {
                return e.once ? ri(e) : ai(e)
            }
            if (!e.length) return "_e()";
            var n = e.shift();
            return n.exp ? "(" + n.exp + ")?" + t(n.block) + ":" + si(e) : "" + t(n.block)
        }

        function li(e) {
            var t = e.for,
                n = e.alias,
                a = e.iterator1 ? "," + e.iterator1 : "",
                i = e.iterator2 ? "," + e.iterator2 : "";
            return gi(e) && "slot" !== e.tag && "template" !== e.tag && !e.key && Xs("<" + e.tag + ' v-for="' + n + " in " + t + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', !0), e.forProcessed = !0, "_l((" + t + "),function(" + n + a + i + "){return " + ai(e) + "})"
        }

        function ci(e) {
            var t = "{",
                n = ui(e);
            n && (t += n + ","), e.key && (t += "key:" + e.key + ","), e.ref && (t += "ref:" + e.ref + ","), e.refInFor && (t += "refInFor:true,"), e.pre && (t += "pre:true,"), e.component && (t += 'tag:"' + e.tag + '",');
            for (var a = 0; a < tl.length; a++) t += tl[a](e);
            if (e.attrs && (t += "attrs:{" + Ti(e.attrs) + "},"), e.props && (t += "domProps:{" + Ti(e.props) + "},"), e.events && (t += Za(e.events) + ","), e.nativeEvents && (t += Za(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += fi(e.scopedSlots) + ","), e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
                var i = di(e);
                i && (t += i + ",")
            }
            return t = t.replace(/,$/, "") + "}", e.wrapData && (t = e.wrapData(t)), t
        }

        function ui(e) {
            var t = e.directives;
            if (t) {
                var n, a, i, r, o = "directives:[",
                    s = !1;
                for (n = 0, a = t.length; n < a; n++) {
                    i = t[n], r = !0;
                    var l = nl[i.name] || Pl[i.name];
                    l && (r = !!l(e, i, Xs)), r && (s = !0, o += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                }
                return s ? o.slice(0, -1) + "]" : void 0
            }
        }

        function di(e) {
            var t = e.children[0];
            if ((e.children.length > 1 || 1 !== t.type) && Xs("Inline-template components must have exactly one child element."), 1 === t.type) {
                var n = ni(t, ol);
                return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function(e) {
                    return "function(){" + e + "}"
                }).join(",") + "]}"
            }
        }

        function fi(e) {
            return "scopedSlots:_u([" + Object.keys(e).map(function(t) {
                return pi(t, e[t])
            }).join(",") + "])"
        }

        function pi(e, t) {
            return "[" + e + ",function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? hi(t) || "void 0" : ai(t)) + "}]"
        }

        function hi(e, t) {
            var n = e.children;
            if (n.length) {
                var a = n[0];
                if (1 === n.length && a.for && "template" !== a.tag && "slot" !== a.tag) return ai(a);
                var i = t ? mi(n) : 0;
                return "[" + n.map(bi).join(",") + "]" + (i ? "," + i : "")
            }
        }

        function mi(e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                var a = e[n];
                if (1 === a.type) {
                    if (vi(a) || a.ifConditions && a.ifConditions.some(function(e) {
                            return vi(e.block)
                        })) {
                        t = 2;
                        break
                    }(gi(a) || a.ifConditions && a.ifConditions.some(function(e) {
                        return gi(e.block)
                    })) && (t = 1)
                }
            }
            return t
        }

        function vi(e) {
            return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
        }

        function gi(e) {
            return !al(e.tag)
        }

        function bi(e) {
            return 1 === e.type ? ai(e) : yi(e)
        }

        function yi(e) {
            return "_v(" + (2 === e.type ? e.expression : xi(JSON.stringify(e.text))) + ")"
        }

        function Ci(e) {
            var t = e.slotName || '"default"',
                n = hi(e),
                a = "_t(" + t + (n ? "," + n : ""),
                i = e.attrs && "{" + e.attrs.map(function(e) {
                    return Vi(e.name) + ":" + e.value
                }).join(",") + "}",
                r = e.attrsMap["v-bind"];
            return !i && !r || n || (a += ",null"), i && (a += "," + i), r && (a += (i ? "" : ",null") + "," + r), a + ")"
        }

        function Ai(e, t) {
            var n = t.inlineTemplate ? null : hi(t, !0);
            return "_c(" + e + "," + ci(t) + (n ? "," + n : "") + ")"
        }

        function Ti(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var a = e[n];
                t += '"' + a.name + '":' + xi(a.value) + ","
            }
            return t.slice(0, -1)
        }

        function xi(e) {
            return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }

        function Si(e) {
            var t = [];
            return e && wi(e, t), t
        }

        function wi(e, t) {
            if (1 === e.type) {
                for (var n in e.attrsMap)
                    if (ml.test(n)) {
                        var a = e.attrsMap[n];
                        a && ("v-for" === n ? ki(e, 'v-for="' + a + '"', t) : vl.test(n) ? Mi(a, n + '="' + a + '"', t) : Ei(a, n + '="' + a + '"', t))
                    }
                if (e.children)
                    for (var i = 0; i < e.children.length; i++) wi(e.children[i], t)
            } else 2 === e.type && Ei(e.expression, e.text, t)
        }

        function Mi(e, t, n) {
            var a = e.replace(Rl, "").match(Nl);
            a && n.push('avoid using JavaScript unary operator as property name: "' + a[0] + '" in expression ' + t.trim()), Ei(e, t, n)
        }

        function ki(e, t, n) {
            Ei(e.for || "", t, n), _i(e.alias, "v-for alias", t, n), _i(e.iterator1, "v-for iterator", t, n), _i(e.iterator2, "v-for iterator", t, n)
        }

        function _i(e, t, n, a) {
            "string" != typeof e || Ll.test(e) || a.push("invalid " + t + ' "' + e + '" in expression: ' + n.trim())
        }

        function Ei(e, t, n) {
            try {
                new Function("return " + e)
            } catch (i) {
                var a = e.replace(Rl, "").match(Bl);
                a ? n.push('avoid using JavaScript keyword as property name: "' + a[0] + '" in expression ' + t.trim()) : n.push("invalid expression: " + t.trim())
            }
        }

        function Di(e, t) {
            var n = Sa(e.trim(), t);
            Ha(n, t);
            var a = ni(n, t);
            return {
                ast: n,
                render: a.render,
                staticRenderFns: a.staticRenderFns
            }
        }

        function Pi(e, t) {
            try {
                return new Function(e)
            } catch (n) {
                return t.push({
                    err: n,
                    code: e
                }), p
            }
        }

        function Bi(e) {
            function t(t, n) {
                var a = Object.create(e),
                    i = [],
                    r = [];
                if (a.warn = function(e, t) {
                        (t ? r : i).push(e)
                    }, n) {
                    n.modules && (a.modules = (e.modules || []).concat(n.modules)), n.directives && (a.directives = c(Object.create(e.directives), n.directives));
                    for (var o in n) "modules" !== o && "directives" !== o && (a[o] = n[o])
                }
                var s = Di(t, a);
                return i.push.apply(i, Si(s.ast)), s.errors = i, s.tips = r, s
            }

            function n(e, n, i) {
                n = n || {};
                try {
                    new Function("return 1")
                } catch (e) {
                    e.toString().match(/unsafe-eval|CSP/) && gr("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")
                }
                var r = n.delimiters ? String(n.delimiters) + e : e;
                if (a[r]) return a[r];
                var o = t(e, n);
                o.errors && o.errors.length && gr("Error compiling template:\n\n" + e + "\n\n" + o.errors.map(function(e) {
                    return "- " + e
                }).join("\n") + "\n", i), o.tips && o.tips.length && o.tips.forEach(function(e) {
                    return br(e, i)
                });
                var s = {},
                    l = [];
                s.render = Pi(o.render, l);
                var c = o.staticRenderFns.length;
                s.staticRenderFns = new Array(c);
                for (var u = 0; u < c; u++) s.staticRenderFns[u] = Pi(o.staticRenderFns[u], l);
                return o.errors && o.errors.length || !l.length || gr("Failed to generate render function:\n\n" + l.map(function(e) {
                    var t = e.err,
                        n = e.code;
                    return t.toString() + " in\n\n" + n + "\n"
                }).join("\n"), i), a[r] = s
            }
            var a = Object.create(null);
            return {
                compile: t,
                compileToFunctions: n
            }
        }

        function Ni(e, t) {
            var n = t.warn || cn,
                a = vn(e, "class");
            if (a) {
                var i = xa(a, t.delimiters);
                i && n('class="' + a + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.')
            }
            a && (e.staticClass = JSON.stringify(a));
            var r = mn(e, "class", !1);
            r && (e.classBinding = r)
        }

        function Li(e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
        }

        function Ri(e, t) {
            var n = t.warn || cn,
                a = vn(e, "style");
            if (a) {
                var i = xa(a, t.delimiters);
                i && n('style="' + a + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'), e.staticStyle = JSON.stringify(Yo(a))
            }
            var r = mn(e, "style", !1);
            r && (e.styleBinding = r)
        }

        function $i(e) {
            var t = "";
            return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
        }

        function Ii(e, t) {
            t.value && dn(e, "textContent", "_s(" + t.value + ")")
        }

        function Oi(e, t) {
            t.value && dn(e, "innerHTML", "_s(" + t.value + ")")
        }

        function Fi(e) {
            if (e.outerHTML) return e.outerHTML;
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML
        }
        var Gi, ji, zi = n("slot,component", !0),
            Ui = Object.prototype.hasOwnProperty,
            Hi = /-(\w)/g,
            Vi = o(function(e) {
                return e.replace(Hi, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }),
            Wi = o(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }),
            Ki = /([^-])([A-Z])/g,
            qi = o(function(e) {
                return e.replace(Ki, "$1-$2").replace(Ki, "$1-$2").toLowerCase()
            }),
            Ji = Object.prototype.toString,
            Yi = "[object Object]",
            Zi = function() {
                return !1
            },
            Qi = function(e) {
                return e
            },
            Xi = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !0,
                devtools: !0,
                performance: !0,
                errorHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Zi,
                isUnknownElement: Zi,
                getTagNamespace: p,
                parsePlatformTagName: Qi,
                mustUseProp: Zi,
                _assetTypes: ["component", "directive", "filter"],
                _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
                _maxUpdateCount: 100
            },
            er = "__proto__" in {},
            tr = "undefined" != typeof window,
            nr = tr && window.navigator.userAgent.toLowerCase(),
            ar = nr && /msie|trident/.test(nr),
            ir = nr && nr.indexOf("msie 9.0") > 0,
            rr = nr && nr.indexOf("edge/") > 0,
            or = nr && nr.indexOf("android") > 0,
            sr = nr && /iphone|ipad|ipod|ios/.test(nr),
            lr = nr && /chrome\/\d+/.test(nr) && !rr,
            cr = function() {
                return void 0 === Gi && (Gi = !tr && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Gi
            },
            ur = tr && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            dr = "undefined" != typeof Symbol && b(Symbol) && "undefined" != typeof Reflect && b(Reflect.ownKeys),
            fr = function() {
                function e() {
                    a = !1;
                    var e = n.slice(0);
                    n.length = 0;
                    for (var t = 0; t < e.length; t++) e[t]()
                }
                var t, n = [],
                    a = !1;
                if ("undefined" != typeof Promise && b(Promise)) {
                    var i = Promise.resolve(),
                        r = function(e) {
                            console.error(e)
                        };
                    t = function() {
                        i.then(e).catch(r), sr && setTimeout(p)
                    }
                } else if ("undefined" == typeof MutationObserver || !b(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function() {
                    setTimeout(e, 0)
                };
                else {
                    var o = 1,
                        s = new MutationObserver(e),
                        l = document.createTextNode(String(o));
                    s.observe(l, {
                        characterData: !0
                    }), t = function() {
                        o = (o + 1) % 2, l.data = String(o)
                    }
                }
                return function(e, i) {
                    var r;
                    if (n.push(function() {
                            e && e.call(i), r && r(i)
                        }), a || (a = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                        r = e
                    })
                }
            }();
        ji = "undefined" != typeof Set && b(Set) ? Set : function() {
            function e() {
                this.set = Object.create(null)
            }
            return e.prototype.has = function(e) {
                return this.set[e] === !0
            }, e.prototype.add = function(e) {
                this.set[e] = !0
            }, e.prototype.clear = function() {
                this.set = Object.create(null)
            }, e
        }();
        var pr;
        pr = tr && window.performance, !pr || pr.mark && pr.measure || (pr = void 0);
        var hr, mr = Object.freeze({}),
            vr = /[^\w.$]/,
            gr = p,
            br = p,
            yr = "undefined" != typeof console,
            Cr = /(?:^|[-_])(\w)/g,
            Ar = function(e) {
                return e.replace(Cr, function(e) {
                    return e.toUpperCase()
                }).replace(/[-_]/g, "")
            };
        gr = function(e, t) {
            yr && !Xi.silent && console.error("[Vue warn]: " + e + " " + (t ? Tr(hr(t)) : ""))
        }, br = function(e, t) {
            yr && !Xi.silent && console.warn("[Vue tip]: " + e + " " + (t ? Tr(hr(t)) : ""))
        }, hr = function(e, t) {
            if (e.$root === e) return "<Root>";
            var n = e._isVue ? e.$options.name || e.$options._componentTag : e.name,
                a = e._isVue && e.$options.__file;
            if (!n && a) {
                var i = a.match(/([^\/\\]+)\.vue$/);
                n = i && i[1]
            }
            return (n ? "<" + Ar(n) + ">" : "<Anonymous>") + (a && t !== !1 ? " at " + a : "")
        };
        var Tr = function(e) {
                return "<Anonymous>" === e && (e += ' - use the "name" option for better debugging messages.'), "\n(found in " + e + ")"
            },
            xr = 0,
            Sr = function() {
                this.id = xr++, this.subs = []
            };
        Sr.prototype.addSub = function(e) {
            this.subs.push(e)
        }, Sr.prototype.removeSub = function(e) {
            a(this.subs, e)
        }, Sr.prototype.depend = function() {
            Sr.target && Sr.target.addDep(this)
        }, Sr.prototype.notify = function() {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
        }, Sr.target = null;
        var wr = [],
            Mr = Array.prototype,
            kr = Object.create(Mr);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
            var t = Mr[e];
            C(kr, e, function() {
                for (var n = arguments, a = arguments.length, i = new Array(a); a--;) i[a] = n[a];
                var r, o = t.apply(this, i),
                    s = this.__ob__;
                switch (e) {
                    case "push":
                        r = i;
                        break;
                    case "unshift":
                        r = i;
                        break;
                    case "splice":
                        r = i.slice(2)
                }
                return r && s.observeArray(r), s.dep.notify(), o
            })
        });
        var _r = Object.getOwnPropertyNames(kr),
            Er = {
                shouldConvert: !0,
                isSettingProps: !1
            },
            Dr = function(e) {
                if (this.value = e, this.dep = new Sr, this.vmCount = 0, C(e, "__ob__", this), Array.isArray(e)) {
                    var t = er ? S : w;
                    t(e, kr, _r), this.observeArray(e)
                } else this.walk(e)
            };
        Dr.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) k(e, t[n], e[t[n]])
        }, Dr.prototype.observeArray = function(e) {
            for (var t = 0, n = e.length; t < n; t++) M(e[t])
        };
        var Pr = Xi.optionMergeStrategies;
        Pr.el = Pr.propsData = function(e, t, n, a) {
            return n || gr('option "' + a + '" can only be used during instance creation with the `new` keyword.'), Nr(e, t)
        }, Pr.data = function(e, t, n) {
            return n ? e || t ? function() {
                var a = "function" == typeof t ? t.call(n) : t,
                    i = "function" == typeof e ? e.call(n) : void 0;
                return a ? P(a, i) : i
            } : void 0 : t ? "function" != typeof t ? (gr('The "data" option should be a function that returns a per-instance value in component definitions.', n), e) : e ? function() {
                return P(t.call(this), e.call(this))
            } : t : e
        }, Xi._lifecycleHooks.forEach(function(e) {
            Pr[e] = B
        }), Xi._assetTypes.forEach(function(e) {
            Pr[e + "s"] = N
        }), Pr.watch = function(e, t) {
            if (!t) return Object.create(e || null);
            if (!e) return t;
            var n = {};
            c(n, e);
            for (var a in t) {
                var i = n[a],
                    r = t[a];
                i && !Array.isArray(i) && (i = [i]), n[a] = i ? i.concat(r) : [r]
            }
            return n
        }, Pr.props = Pr.methods = Pr.computed = function(e, t) {
            if (!t) return Object.create(e || null);
            if (!e) return t;
            var n = Object.create(null);
            return c(n, e), c(n, t), n
        };
        var Br, Nr = function(e, t) {
                return void 0 === t ? e : t
            },
            Lr = n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),
            Rr = function(e, t) {
                gr('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.', e)
            },
            $r = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
        if ($r) {
            var Ir = n("stop,prevent,self,ctrl,shift,alt,meta");
            Xi.keyCodes = new Proxy(Xi.keyCodes, {
                set: function(e, t, n) {
                    return Ir(t) ? (gr("Avoid overwriting built-in modifier in config.keyCodes: ." + t), !1) : (e[t] = n, !0)
                }
            })
        }
        var Or = {
                has: function e(t, n) {
                    var e = n in t,
                        a = Lr(n) || "_" === n.charAt(0);
                    return e || a || Rr(t, n), e || !a
                }
            },
            Fr = {
                get: function(e, t) {
                    return "string" != typeof t || t in e || Rr(e, t), e[t]
                }
            };
        Br = function(e) {
            if ($r) {
                var t = e.$options,
                    n = t.render && t.render._withStripped ? Fr : Or;
                e._renderProxy = new Proxy(e, n)
            } else e._renderProxy = e
        };
        var Gr = function(e, t, n, a, i, r, o) {
                this.tag = e, this.data = t, this.children = n, this.text = a, this.elm = i, this.ns = void 0, this.context = r, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1
            },
            jr = {
                child: {}
            };
        jr.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(Gr.prototype, jr);
        var zr, Ur = function() {
                var e = new Gr;
                return e.text = "", e.isComment = !0, e
            },
            Hr = o(function(e) {
                var t = "~" === e.charAt(0);
                e = t ? e.slice(1) : e;
                var n = "!" === e.charAt(0);
                return e = n ? e.slice(1) : e, {
                    name: e,
                    once: t,
                    capture: n
                }
            }),
            Vr = null,
            Wr = [],
            Kr = {},
            qr = {},
            Jr = !1,
            Yr = !1,
            Zr = 0,
            Qr = 0,
            Xr = function(e, t, n, a) {
                this.vm = e, e._watchers.push(this), a ? (this.deep = !!a.deep, this.user = !!a.user, this.lazy = !!a.lazy, this.sync = !!a.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Qr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ji, this.newDepIds = new ji, this.expression = t.toString(), "function" == typeof t ? this.getter = t : (this.getter = A(t), this.getter || (this.getter = function() {}, gr('Failed watching path: "' + t + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e))), this.value = this.lazy ? void 0 : this.get()
            };
        Xr.prototype.get = function() {
            T(this);
            var e, t = this.vm;
            if (this.user) try {
                e = this.getter.call(t, t)
            } catch (e) {
                V(e, t, 'getter for watcher "' + this.expression + '"')
            } else e = this.getter.call(t, t);
            return this.deep && Ae(e), x(), this.cleanupDeps(), e
        }, Xr.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, Xr.prototype.cleanupDeps = function() {
            for (var e = this, t = this.deps.length; t--;) {
                var n = e.deps[t];
                e.newDepIds.has(n.id) || n.removeSub(e)
            }
            var a = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0
        }, Xr.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ce(this)
        }, Xr.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || u(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e, this.user) try {
                        this.cb.call(this.vm, e, t)
                    } catch (e) {
                        V(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, e, t)
                }
            }
        }, Xr.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, Xr.prototype.depend = function() {
            for (var e = this, t = this.deps.length; t--;) e.deps[t].depend()
        }, Xr.prototype.teardown = function() {
            var e = this;
            if (this.active) {
                this.vm._isBeingDestroyed || a(this.vm._watchers, this);
                for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);
                this.active = !1
            }
        };
        var eo = new ji,
            to = {
                enumerable: !0,
                configurable: !0,
                get: p,
                set: p
            },
            no = {
                key: 1,
                ref: 1,
                slot: 1
            },
            ao = {
                lazy: !0
            },
            io = {
                init: Ie,
                prepatch: Oe,
                insert: Fe,
                destroy: Ge
            },
            ro = Object.keys(io),
            oo = 1,
            so = 2,
            lo = 0;
        ct(ht), Ne(ht), oe(ht), de(ht), ot(ht);
        var co = [String, RegExp],
            uo = {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: co,
                    exclude: co
                },
                created: function() {
                    this.cache = Object.create(null)
                },
                destroyed: function() {
                    var e = this;
                    for (var t in e.cache) St(e.cache[t])
                },
                watch: {
                    include: function(e) {
                        xt(this.cache, function(t) {
                            return Tt(e, t)
                        })
                    },
                    exclude: function(e) {
                        xt(this.cache, function(t) {
                            return !Tt(e, t)
                        })
                    }
                },
                render: function() {
                    var e = te(this.$slots.default),
                        t = e && e.componentOptions;
                    if (t) {
                        var n = At(t);
                        if (n && (this.include && !Tt(this.include, n) || this.exclude && Tt(this.exclude, n))) return e;
                        var a = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                        this.cache[a] ? e.componentInstance = this.cache[a].componentInstance : this.cache[a] = e, e.data.keepAlive = !0
                    }
                    return e
                }
            },
            fo = {
                KeepAlive: uo
            };
        wt(ht), Object.defineProperty(ht.prototype, "$isServer", {
            get: cr
        }), ht.version = "2.2.2";
        var po, ho, mo, vo, go, bo, yo, Co, Ao, To = n("input,textarea,option,select"),
            xo = function(e, t, n) {
                return "value" === n && To(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
            },
            So = n("contenteditable,draggable,spellcheck"),
            wo = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Mo = "http://www.w3.org/1999/xlink",
            ko = function(e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            },
            _o = function(e) {
                return ko(e) ? e.slice(6, e.length) : ""
            },
            Eo = function(e) {
                return null == e || e === !1
            },
            Do = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            Po = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
            Bo = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            No = function(e) {
                return "pre" === e
            },
            Lo = function(e) {
                return Po(e) || Bo(e)
            },
            Ro = Object.create(null),
            $o = Object.freeze({
                createElement: Lt,
                createElementNS: Rt,
                createTextNode: $t,
                createComment: It,
                insertBefore: Ot,
                removeChild: Ft,
                appendChild: Gt,
                parentNode: jt,
                nextSibling: zt,
                tagName: Ut,
                setTextContent: Ht,
                setAttribute: Vt
            }),
            Io = {
                create: function(e, t) {
                    Wt(t)
                },
                update: function(e, t) {
                    e.data.ref !== t.data.ref && (Wt(e, !0), Wt(t))
                },
                destroy: function(e) {
                    Wt(e, !0)
                }
            },
            Oo = new Gr("", {}, []),
            Fo = ["create", "activate", "update", "remove", "destroy"],
            Go = {
                create: Qt,
                update: Qt,
                destroy: function(e) {
                    Qt(e, Oo)
                }
            },
            jo = Object.create(null),
            zo = [Io, Go],
            Uo = {
                create: an,
                update: an
            },
            Ho = {
                create: on,
                update: on
            },
            Vo = /[\w).+\-_$\]]/,
            Wo = "__r",
            Ko = "__c",
            qo = {
                create: Nn,
                update: Nn
            },
            Jo = {
                create: Ln,
                update: Ln
            },
            Yo = o(function(e) {
                var t = {},
                    n = /;(?![^(]*\))/g,
                    a = /:(.+)/;
                return e.split(n).forEach(function(e) {
                    if (e) {
                        var n = e.split(a);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim())
                    }
                }), t
            }),
            Zo = /^--/,
            Qo = /\s*!important$/,
            Xo = function(e, t, n) {
                Zo.test(t) ? e.style.setProperty(t, n) : Qo.test(n) ? e.style.setProperty(t, n.replace(Qo, ""), "important") : e.style[ts(t)] = n
            },
            es = ["Webkit", "Moz", "ms"],
            ts = o(function(e) {
                if (Ao = Ao || document.createElement("div"), e = Vi(e), "filter" !== e && e in Ao.style) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < es.length; n++) {
                    var a = es[n] + t;
                    if (a in Ao.style) return a
                }
            }),
            ns = {
                create: jn,
                update: jn
            },
            as = o(function(e) {
                return {
                    enterClass: e + "-enter",
                    enterToClass: e + "-enter-to",
                    enterActiveClass: e + "-enter-active",
                    leaveClass: e + "-leave",
                    leaveToClass: e + "-leave-to",
                    leaveActiveClass: e + "-leave-active"
                }
            }),
            is = tr && !ir,
            rs = "transition",
            os = "animation",
            ss = "transition",
            ls = "transitionend",
            cs = "animation",
            us = "animationend";
        is && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ss = "WebkitTransition", ls = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (cs = "WebkitAnimation", us = "webkitAnimationEnd"));
        var ds = tr && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
            fs = /\b(transform|all)(,|$)/,
            ps = tr ? {
                create: aa,
                activate: aa,
                remove: function(e, t) {
                    e.data.show ? t() : Xn(e, t)
                }
            } : {},
            hs = [Uo, Ho, qo, Jo, ns, ps],
            ms = hs.concat(zo),
            vs = Zt({
                nodeOps: $o,
                modules: ms
            });
        ir && document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            e && e.vmodel && ca(e, "input")
        });
        var gs = {
                inserted: function(e, t, n) {
                    if ("select" === n.tag) {
                        var a = function() {
                            ia(e, t, n.context)
                        };
                        a(), (ar || rr) && setTimeout(a, 0)
                    } else "textarea" !== n.tag && "text" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (or || (e.addEventListener("compositionstart", sa), e.addEventListener("compositionend", la)), ir && (e.vmodel = !0)))
                },
                componentUpdated: function(e, t, n) {
                    if ("select" === n.tag) {
                        ia(e, t, n.context);
                        var a = e.multiple ? t.value.some(function(t) {
                            return ra(t, e.options)
                        }) : t.value !== t.oldValue && ra(t.value, e.options);
                        a && ca(e, "change")
                    }
                }
            },
            bs = {
                bind: function(e, t, n) {
                    var a = t.value;
                    n = ua(n);
                    var i = n.data && n.data.transition,
                        r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    a && i && !ir ? (n.data.show = !0, Qn(n, function() {
                        e.style.display = r
                    })) : e.style.display = a ? r : "none"
                },
                update: function(e, t, n) {
                    var a = t.value,
                        i = t.oldValue;
                    if (a !== i) {
                        n = ua(n);
                        var r = n.data && n.data.transition;
                        r && !ir ? (n.data.show = !0, a ? Qn(n, function() {
                            e.style.display = e.__vOriginalDisplay
                        }) : Xn(n, function() {
                            e.style.display = "none"
                        })) : e.style.display = a ? e.__vOriginalDisplay : "none"
                    }
                },
                unbind: function(e, t, n, a, i) {
                    i || (e.style.display = e.__vOriginalDisplay)
                }
            },
            ys = {
                model: gs,
                show: bs
            },
            Cs = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            },
            As = {
                name: "transition",
                props: Cs,
                abstract: !0,
                render: function(e) {
                    var t = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(function(e) {
                            return e.tag
                        }), n.length)) {
                        n.length > 1 && gr("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                        var a = this.mode;
                        a && "in-out" !== a && "out-in" !== a && gr("invalid <transition> mode: " + a, this.$parent);
                        var i = n[0];
                        if (ha(this.$vnode)) return i;
                        var o = da(i);
                        if (!o) return i;
                        if (this._leaving) return pa(e, i);
                        var s = "__transition-" + this._uid + "-";
                        o.key = null == o.key ? s + o.tag : r(o.key) ? 0 === String(o.key).indexOf(s) ? o.key : s + o.key : o.key;
                        var l = (o.data || (o.data = {})).transition = fa(this),
                            u = this._vnode,
                            d = da(u);
                        if (o.data.directives && o.data.directives.some(function(e) {
                                return "show" === e.name
                            }) && (o.data.show = !0), d && d.data && !ma(o, d)) {
                            var f = d && (d.data.transition = c({}, l));
                            if ("out-in" === a) return this._leaving = !0, Z(f, "afterLeave", function() {
                                t._leaving = !1, t.$forceUpdate()
                            }), pa(e, i);
                            if ("in-out" === a) {
                                var p, h = function() {
                                    p()
                                };
                                Z(l, "afterEnter", h), Z(l, "enterCancelled", h), Z(f, "delayLeave", function(e) {
                                    p = e
                                })
                            }
                        }
                        return i
                    }
                }
            },
            Ts = c({
                tag: String,
                moveClass: String
            }, Cs);
        delete Ts.mode;
        var xs = {
                props: Ts,
                render: function(e) {
                    for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), a = this.prevChildren = this.children, i = this.$slots.default || [], r = this.children = [], o = fa(this), s = 0; s < i.length; s++) {
                        var l = i[s];
                        if (l.tag)
                            if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) r.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = o;
                            else {
                                var c = l.componentOptions,
                                    u = c ? c.Ctor.options.name || c.tag || "" : l.tag;
                                gr("<transition-group> children must be keyed: <" + u + ">")
                            }
                    }
                    if (a) {
                        for (var d = [], f = [], p = 0; p < a.length; p++) {
                            var h = a[p];
                            h.data.transition = o, h.data.pos = h.elm.getBoundingClientRect(), n[h.key] ? d.push(h) : f.push(h)
                        }
                        this.kept = e(t, null, d), this.removed = f
                    }
                    return e(t, null, r)
                },
                beforeUpdate: function() {
                    this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                },
                updated: function() {
                    var e = this.prevChildren,
                        t = this.moveClass || (this.name || "v") + "-move";
                    if (e.length && this.hasMove(e[0].elm, t)) {
                        e.forEach(va), e.forEach(ga), e.forEach(ba);
                        var n = document.body;
                        n.offsetHeight;
                        e.forEach(function(e) {
                            if (e.data.moved) {
                                var n = e.elm,
                                    a = n.style;
                                Wn(n, t), a.transform = a.WebkitTransform = a.transitionDuration = "", n.addEventListener(ls, n._moveCb = function e(a) {
                                    a && !/transform$/.test(a.propertyName) || (n.removeEventListener(ls, e), n._moveCb = null, Kn(n, t))
                                })
                            }
                        })
                    }
                },
                methods: {
                    hasMove: function(e, t) {
                        if (!is) return !1;
                        if (null != this._hasMove) return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach(function(e) {
                            Un(n, e)
                        }), zn(n, t), n.style.display = "none", this.$el.appendChild(n);
                        var a = Jn(n);
                        return this.$el.removeChild(n), this._hasMove = a.hasTransform
                    }
                }
            },
            Ss = {
                Transition: As,
                TransitionGroup: xs
            };
        ht.config.mustUseProp = xo, ht.config.isReservedTag = Lo, ht.config.getTagNamespace = Pt, ht.config.isUnknownElement = Bt, c(ht.options.directives, ys), c(ht.options.components, Ss), ht.prototype.__patch__ = tr ? vs : p, ht.prototype.$mount = function(e, t) {
            return e = e && tr ? Nt(e) : void 0, fe(this, e, t)
        }, setTimeout(function() {
            Xi.devtools && (ur ? ur.emit("init", ht) : lr && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), Xi.productionTip !== !1 && tr && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")
        }, 0);
        var ws, Ms = !!tr && ya("\n", "&#10;"),
            ks = n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
            _s = n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
            Es = n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
            Ds = /([^\s"'<>\/=]+)/,
            Ps = /(?:=)/,
            Bs = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
            Ns = new RegExp("^\\s*" + Ds.source + "(?:\\s*(" + Ps.source + ")\\s*(?:" + Bs.join("|") + "))?"),
            Ls = "[a-zA-Z_][\\w\\-\\.]*",
            Rs = "((?:" + Ls + "\\:)?" + Ls + ")",
            $s = new RegExp("^<" + Rs),
            Is = /^\s*(\/?)>/,
            Os = new RegExp("^<\\/" + Rs + "[^>]*>"),
            Fs = /^<!DOCTYPE [^>]+>/i,
            Gs = /^<!--/,
            js = /^<!\[/,
            zs = !1;
        "x".replace(/x(.)?/g, function(e, t) {
            zs = "" === t
        });
        var Us, Hs, Vs, Ws, Ks, qs, Js, Ys, Zs, Qs, Xs, el, tl, nl, al, il, rl, ol, sl = n("script,style", !0),
            ll = {},
            cl = {
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&amp;": "&",
                "&#10;": "\n"
            },
            ul = /&(?:lt|gt|quot|amp);/g,
            dl = /&(?:lt|gt|quot|amp|#10);/g,
            fl = /\{\{((?:.|\n)+?)\}\}/g,
            pl = /[-.*+?^${}()|[\]\/\\]/g,
            hl = o(function(e) {
                var t = e[0].replace(pl, "\\$&"),
                    n = e[1].replace(pl, "\\$&");
                return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
            }),
            ml = /^v-|^@|^:/,
            vl = /^@|^v-on:/,
            gl = /(.*?)\s+(?:in|of)\s+(.*)/,
            bl = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
            yl = /^:|^v-bind:/,
            Cl = /:(.*)$/,
            Al = /\.[^.]+/g,
            Tl = o(Ca),
            xl = /^xmlns:NS\d+/,
            Sl = /^NS\d+:/,
            wl = o(Va),
            Ml = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            kl = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
            _l = {
                esc: 27,
                tab: 9,
                enter: 13,
                space: 32,
                up: 38,
                left: 37,
                right: 39,
                down: 40,
                delete: [8, 46]
            },
            El = function(e) {
                return "if(" + e + ")return null;"
            },
            Dl = {
                stop: "$event.stopPropagation();",
                prevent: "$event.preventDefault();",
                self: El("$event.target !== $event.currentTarget"),
                ctrl: El("!$event.ctrlKey"),
                shift: El("!$event.shiftKey"),
                alt: El("!$event.altKey"),
                meta: El("!$event.metaKey"),
                left: El("'button' in $event && $event.button !== 0"),
                middle: El("'button' in $event && $event.button !== 1"),
                right: El("'button' in $event && $event.button !== 2")
            },
            Pl = {
                bind: ti,
                cloak: p
            },
            Bl = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"),
            Nl = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"),
            Ll = /[A-Za-z_$][\w$]*/,
            Rl = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g,
            $l = {
                staticKeys: ["staticClass"],
                transformNode: Ni,
                genData: Li
            },
            Il = {
                staticKeys: ["staticStyle"],
                transformNode: Ri,
                genData: $i
            },
            Ol = [$l, Il],
            Fl = {
                model: wn,
                text: Ii,
                html: Oi
            },
            Gl = {
                expectHTML: !0,
                modules: Ol,
                directives: Fl,
                isPreTag: No,
                isUnaryTag: ks,
                mustUseProp: xo,
                isReservedTag: Lo,
                getTagNamespace: Pt,
                staticKeys: h(Ol)
            },
            jl = Bi(Gl),
            zl = jl.compileToFunctions,
            Ul = o(function(e) {
                var t = Nt(e);
                return t && t.innerHTML
            }),
            Hl = ht.prototype.$mount;
        return ht.prototype.$mount = function(e, t) {
            if (e = e && Nt(e), e === document.body || e === document.documentElement) return gr("Do not mount Vue to <html> or <body> - mount to normal elements instead."), this;
            var n = this.$options;
            if (!n.render) {
                var a = n.template;
                if (a)
                    if ("string" == typeof a) "#" === a.charAt(0) && (a = Ul(a), a || gr("Template element not found or is empty: " + n.template, this));
                    else {
                        if (!a.nodeType) return gr("invalid template option:" + a, this), this;
                        a = a.innerHTML
                    }
                else e && (a = Fi(e));
                if (a) {
                    Xi.performance && pr && pr.mark("compile");
                    var i = zl(a, {
                            shouldDecodeNewlines: Ms,
                            delimiters: n.delimiters
                        }, this),
                        r = i.render,
                        o = i.staticRenderFns;
                    n.render = r, n.staticRenderFns = o, Xi.performance && pr && (pr.mark("compile end"), pr.measure(this._name + " compile", "compile", "compile end"))
                }
            }
            return Hl.call(this, e, t)
        }, ht.compile = zl, ht
    }), function() {
        function e(t) {
            if (!(this instanceof e)) return null == t ? new e : new e(t);
            if ("function" == typeof t) return this.random = t, this;
            arguments.length && (this.seed = 0);
            for (var n = 0; n < arguments.length; n++) {
                var a = 0;
                if ("[object String]" === Object.prototype.toString.call(arguments[n]))
                    for (var i = 0; i < arguments[n].length; i++) {
                        for (var r = 0, o = 0; o < arguments[n].length; o++) r = arguments[n].charCodeAt(o) + (r << 6) + (r << 16) - r;
                        a += r
                    } else a = arguments[n];
                this.seed += (arguments.length - n) * a
            }
            return this.mt = this.mersenne_twister(this.seed), this.bimd5 = this.blueimp_md5(), this.random = function() {
                return this.mt.random(this.seed)
            }, this
        }

        function t(e, t) {
            if (e || (e = {}), t)
                for (var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
            return e
        }

        function n(e, t) {
            if (e) throw new RangeError(t)
        }

        function a(e) {
            return function() {
                return this.natural(e)
            }
        }

        function i(e, t) {
            for (var n, a = g(e), i = 0, r = a.length; i < r; i++) n = a[i], t[n] = e[n] || t[n]
        }

        function r(e, t) {
            for (var n = 0, a = e.length; n < a; n++) t[n] = e[n]
        }

        function o(e, t) {
            var n = Array.isArray(e),
                a = t || (n ? new Array(e.length) : {});
            return n ? r(e, a) : i(e, a), a
        }
        var s = 9007199254740992,
            l = -s,
            c = "0123456789",
            u = "abcdefghijklmnopqrstuvwxyz",
            d = u.toUpperCase(),
            f = c + "abcdef",
            p = Array.prototype.slice;
        e.prototype.VERSION = "1.0.6";
        var h = function() {
            throw new Error("No Base64 encoder available.")
        };
        ! function() {
            "function" == typeof btoa ? h = btoa : "function" == typeof Buffer && (h = function(e) {
                return new Buffer(e).toString("base64")
            })
        }(), e.prototype.bool = function(e) {
            return e = t(e, {
                likelihood: 50
            }), n(e.likelihood < 0 || e.likelihood > 100, "Chance: Likelihood accepts values from 0 to 100."), 100 * this.random() < e.likelihood
        }, e.prototype.character = function(e) {
            e = t(e), n(e.alpha && e.symbols, "Chance: Cannot specify both alpha and symbols.");
            var a, i, r = "!@#$%^&*()[]";
            return a = "lower" === e.casing ? u : "upper" === e.casing ? d : u + d, i = e.pool ? e.pool : e.alpha ? a : e.symbols ? r : a + c + r, i.charAt(this.natural({
                max: i.length - 1
            }))
        }, e.prototype.floating = function(e) {
            e = t(e, {
                fixed: 4
            }), n(e.fixed && e.precision, "Chance: Cannot specify both fixed and precision.");
            var a, i = Math.pow(10, e.fixed),
                r = s / i,
                o = -r;
            n(e.min && e.fixed && e.min < o, "Chance: Min specified is out of range with fixed. Min should be, at least, " + o), n(e.max && e.fixed && e.max > r, "Chance: Max specified is out of range with fixed. Max should be, at most, " + r), e = t(e, {
                min: o,
                max: r
            }), a = this.integer({
                min: e.min * i,
                max: e.max * i
            });
            var l = (a / i).toFixed(e.fixed);
            return parseFloat(l)
        }, e.prototype.integer = function(e) {
            return e = t(e, {
                min: l,
                max: s
            }), n(e.min > e.max, "Chance: Min cannot be greater than Max."), Math.floor(this.random() * (e.max - e.min + 1) + e.min)
        }, e.prototype.natural = function(e) {
            return e = t(e, {
                min: 0,
                max: s
            }), n(e.min < 0, "Chance: Min cannot be less than zero."), this.integer(e)
        }, e.prototype.hex = function(e) {
            e = t(e, {
                min: 0,
                max: s,
                casing: "lower"
            }), n(e.min < 0, "Chance: Min cannot be less than zero.");
            var a = this.natural({
                min: e.min,
                max: e.max
            });
            return "upper" === e.casing ? a.toString(16).toUpperCase() : a.toString(16)
        }, e.prototype.string = function(e) {
            e = t(e, {
                length: this.natural({
                    min: 5,
                    max: 20
                })
            }), n(e.length < 0, "Chance: Length cannot be less than zero.");
            var a = e.length,
                i = this.n(this.character, a, e);
            return i.join("")
        }, e.prototype.capitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1)
        }, e.prototype.mixin = function(t) {
            for (var n in t) e.prototype[n] = t[n];
            return this
        }, e.prototype.unique = function(e, t, a) {
            n("function" != typeof e, "Chance: The first argument must be a function.");
            var i = function(e, t) {
                return e.indexOf(t) !== -1
            };
            a && (i = a.comparator || i);
            for (var r, o = [], s = 0, l = 50 * t, c = p.call(arguments, 2); o.length < t;) {
                var u = JSON.parse(JSON.stringify(c));
                if (r = e.apply(this, u), i(o, r) || (o.push(r), s = 0), ++s > l) throw new RangeError("Chance: num is likely too large for sample set")
            }
            return o
        }, e.prototype.n = function(e, t) {
            n("function" != typeof e, "Chance: The first argument must be a function."), "undefined" == typeof t && (t = 1);
            var a = t,
                i = [],
                r = p.call(arguments, 2);
            for (a = Math.max(0, a), null; a--; null) i.push(e.apply(this, r));
            return i
        }, e.prototype.pad = function(e, t, n) {
            return n = n || "0", e += "", e.length >= t ? e : new Array(t - e.length + 1).join(n) + e
        }, e.prototype.pick = function(e, t) {
            if (0 === e.length) throw new RangeError("Chance: Cannot pick() from an empty array");
            return t && 1 !== t ? this.shuffle(e).slice(0, t) : e[this.natural({
                max: e.length - 1
            })]
        }, e.prototype.pickone = function(e) {
            if (0 === e.length) throw new RangeError("Chance: Cannot pickone() from an empty array");
            return e[this.natural({
                max: e.length - 1
            })]
        }, e.prototype.pickset = function(e, t) {
            if (0 === t) return [];
            if (0 === e.length) throw new RangeError("Chance: Cannot pickset() from an empty array");
            if (t < 0) throw new RangeError("Chance: count must be positive number");
            return t && 1 !== t ? this.shuffle(e).slice(0, t) : [this.pickone(e)]
        }, e.prototype.shuffle = function(e) {
            for (var t = e.slice(0), n = [], a = 0, i = Number(t.length), r = 0; r < i; r++) a = this.natural({
                max: t.length - 1
            }), n[r] = t[a], t.splice(a, 1);
            return n
        }, e.prototype.weighted = function(e, t, n) {
            if (e.length !== t.length) throw new RangeError("Chance: length of array and weights must match");
            for (var a, i = 0, r = 0; r < t.length; ++r) {
                if (a = t[r], isNaN(a)) throw new RangeError("all weights must be numbers");
                a > 0 && (i += a)
            }
            if (0 === i) throw new RangeError("Chance: no valid entries in array weights");
            var o, s = this.random() * i,
                l = 0,
                c = -1;
            for (r = 0; r < t.length; ++r) {
                if (a = t[r], l += a, a > 0) {
                    if (s <= l) {
                        o = r;
                        break
                    }
                    c = r
                }
                r === t.length - 1 && (o = c)
            }
            var u = e[o];
            return n = "undefined" != typeof n && n, n && (e.splice(o, 1), t.splice(o, 1)), u
        }, e.prototype.paragraph = function(e) {
            e = t(e);
            var n = e.sentences || this.natural({
                    min: 3,
                    max: 7
                }),
                a = this.n(this.sentence, n);
            return a.join(" ")
        }, e.prototype.sentence = function(e) {
            e = t(e);
            var n, a = e.words || this.natural({
                    min: 12,
                    max: 18
                }),
                i = e.punctuation,
                r = this.n(this.word, a);
            return n = r.join(" "), n = this.capitalize(n), i === !1 || /^[\.\?;!:]$/.test(i) || (i = "."), i && (n += i), n
        }, e.prototype.syllable = function(e) {
            e = t(e);
            for (var n, a = e.length || this.natural({
                    min: 2,
                    max: 3
                }), i = "bcdfghjklmnprstvwz", r = "aeiou", o = i + r, s = "", l = 0; l < a; l++) n = 0 === l ? this.character({
                pool: o
            }) : i.indexOf(n) === -1 ? this.character({
                pool: i
            }) : this.character({
                pool: r
            }), s += n;
            return e.capitalize && (s = this.capitalize(s)), s
        }, e.prototype.word = function(e) {
            e = t(e), n(e.syllables && e.length, "Chance: Cannot specify both syllables AND length.");
            var a = e.syllables || this.natural({
                    min: 1,
                    max: 3
                }),
                i = "";
            if (e.length) {
                do i += this.syllable(); while (i.length < e.length);
                i = i.substring(0, e.length)
            } else
                for (var r = 0; r < a; r++) i += this.syllable();
            return e.capitalize && (i = this.capitalize(i)), i
        }, e.prototype.age = function(e) {
            e = t(e);
            var n;
            switch (e.type) {
                case "child":
                    n = {
                        min: 0,
                        max: 12
                    };
                    break;
                case "teen":
                    n = {
                        min: 13,
                        max: 19
                    };
                    break;
                case "adult":
                    n = {
                        min: 18,
                        max: 65
                    };
                    break;
                case "senior":
                    n = {
                        min: 65,
                        max: 100
                    };
                    break;
                case "all":
                    n = {
                        min: 0,
                        max: 100
                    };
                    break;
                default:
                    n = {
                        min: 18,
                        max: 65
                    }
            }
            return this.natural(n)
        }, e.prototype.birthday = function(e) {
            var n = this.age(e),
                a = (new Date).getFullYear();
            if (e && e.type) {
                var i = new Date,
                    r = new Date;
                i.setFullYear(a - n - 1), r.setFullYear(a - n), e = t(e, {
                    min: i,
                    max: r
                })
            } else e = t(e, {
                year: a - n
            });
            return this.date(e)
        }, e.prototype.cpf = function(e) {
            e = t(e, {
                formatted: !0
            });
            var n = this.n(this.natural, 9, {
                    max: 9
                }),
                a = 2 * n[8] + 3 * n[7] + 4 * n[6] + 5 * n[5] + 6 * n[4] + 7 * n[3] + 8 * n[2] + 9 * n[1] + 10 * n[0];
            a = 11 - a % 11, a >= 10 && (a = 0);
            var i = 2 * a + 3 * n[8] + 4 * n[7] + 5 * n[6] + 6 * n[5] + 7 * n[4] + 8 * n[3] + 9 * n[2] + 10 * n[1] + 11 * n[0];
            i = 11 - i % 11, i >= 10 && (i = 0);
            var r = "" + n[0] + n[1] + n[2] + "." + n[3] + n[4] + n[5] + "." + n[6] + n[7] + n[8] + "-" + a + i;
            return e.formatted ? r : r.replace(/\D/g, "")
        }, e.prototype.cnpj = function(e) {
            e = t(e, {
                formatted: !0
            });
            var n = this.n(this.natural, 12, {
                    max: 12
                }),
                a = 2 * n[11] + 3 * n[10] + 4 * n[9] + 5 * n[8] + 6 * n[7] + 7 * n[6] + 8 * n[5] + 9 * n[4] + 2 * n[3] + 3 * n[2] + 4 * n[1] + 5 * n[0];
            a = 11 - a % 11, a < 2 && (a = 0);
            var i = 2 * a + 3 * n[11] + 4 * n[10] + 5 * n[9] + 6 * n[8] + 7 * n[7] + 8 * n[6] + 9 * n[5] + 2 * n[4] + 3 * n[3] + 4 * n[2] + 5 * n[1] + 6 * n[0];
            i = 11 - i % 11, i < 2 && (i = 0);
            var r = "" + n[0] + n[1] + "." + n[2] + n[3] + n[4] + "." + n[5] + n[6] + n[7] + "/" + n[8] + n[9] + n[10] + n[11] + "-" + a + i;
            return e.formatted ? r : r.replace(/\D/g, "")
        }, e.prototype.first = function(e) {
            return e = t(e, {
                gender: this.gender(),
                nationality: "en"
            }), this.pick(this.get("firstNames")[e.gender.toLowerCase()][e.nationality.toLowerCase()])
        }, e.prototype.profession = function() {
            return this.pick(this.get("professions"))
        }, e.prototype.gender = function(e) {
            return e = t(e, {
                extraGenders: []
            }), this.pick(["Male", "Female"].concat(e.extraGenders))
        }, e.prototype.last = function(e) {
            return e = t(e, {
                nationality: "en"
            }), this.pick(this.get("lastNames")[e.nationality.toLowerCase()])
        }, e.prototype.israelId = function() {
            for (var e = this.string({
                    pool: "0123456789",
                    length: 8
                }), t = 0, n = 0; n < e.length; n++) {
                var a = e[n] * (n / 2 === parseInt(n / 2) ? 1 : 2);
                a = this.pad(a, 2).toString(), a = parseInt(a[0]) + parseInt(a[1]), t += a
            }
            return e += (10 - parseInt(t.toString().slice(-1))).toString().slice(-1)
        }, e.prototype.mrz = function(e) {
            var n = function(e) {
                    var t = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""),
                        n = [7, 3, 1],
                        a = 0;
                    return "string" != typeof e && (e = e.toString()), e.split("").forEach(function(e, i) {
                        var r = t.indexOf(e);
                        e = r !== -1 ? 0 === r ? 0 : r + 9 : parseInt(e, 10), e *= n[i % n.length], a += e
                    }), a % 10
                },
                a = function(e) {
                    var t = function(e) {
                            return new Array(e + 1).join("<")
                        },
                        a = ["P<", e.issuer, e.last.toUpperCase(), "<<", e.first.toUpperCase(), t(39 - (e.last.length + e.first.length + 2)), e.passportNumber, n(e.passportNumber), e.nationality, e.dob, n(e.dob), e.gender, e.expiry, n(e.expiry), t(14), n(t(14))].join("");
                    return a + n(a.substr(44, 10) + a.substr(57, 7) + a.substr(65, 7))
                },
                i = this;
            return e = t(e, {
                first: this.first(),
                last: this.last(),
                passportNumber: this.integer({
                    min: 1e8,
                    max: 999999999
                }),
                dob: function() {
                    var e = i.birthday({
                        type: "adult"
                    });
                    return [e.getFullYear().toString().substr(2), i.pad(e.getMonth() + 1, 2), i.pad(e.getDate(), 2)].join("")
                }(),
                expiry: function() {
                    var e = new Date;
                    return [(e.getFullYear() + 5).toString().substr(2), i.pad(e.getMonth() + 1, 2), i.pad(e.getDate(), 2)].join("")
                }(),
                gender: "Female" === this.gender() ? "F" : "M",
                issuer: "GBR",
                nationality: "GBR"
            }), a(e)
        }, e.prototype.name = function(e) {
            e = t(e);
            var n, a = this.first(e),
                i = this.last(e);
            return n = e.middle ? a + " " + this.first(e) + " " + i : e.middle_initial ? a + " " + this.character({
                alpha: !0,
                casing: "upper"
            }) + ". " + i : a + " " + i, e.prefix && (n = this.prefix(e) + " " + n), e.suffix && (n = n + " " + this.suffix(e)), n
        }, e.prototype.name_prefixes = function(e) {
            e = e || "all", e = e.toLowerCase();
            var t = [{
                name: "Doctor",
                abbreviation: "Dr."
            }];
            return "male" !== e && "all" !== e || t.push({
                name: "Mister",
                abbreviation: "Mr."
            }), "female" !== e && "all" !== e || (t.push({
                name: "Miss",
                abbreviation: "Miss"
            }), t.push({
                name: "Misses",
                abbreviation: "Mrs."
            })), t
        }, e.prototype.prefix = function(e) {
            return this.name_prefix(e)
        }, e.prototype.name_prefix = function(e) {
            return e = t(e, {
                gender: "all"
            }), e.full ? this.pick(this.name_prefixes(e.gender)).name : this.pick(this.name_prefixes(e.gender)).abbreviation
        }, e.prototype.HIDN = function() {
            var e = "0123456789",
                t = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ",
                n = "";
            return n += this.string({
                pool: e,
                length: 6
            }), n += this.string({
                pool: t,
                length: 2
            })
        }, e.prototype.ssn = function(e) {
            e = t(e, {
                ssnFour: !1,
                dashes: !0
            });
            var n, a = "1234567890",
                i = e.dashes ? "-" : "";
            return n = e.ssnFour ? this.string({
                pool: a,
                length: 4
            }) : this.string({
                pool: a,
                length: 3
            }) + i + this.string({
                pool: a,
                length: 2
            }) + i + this.string({
                pool: a,
                length: 4
            })
        }, e.prototype.name_suffixes = function() {
            var e = [{
                name: "Doctor of Osteopathic Medicine",
                abbreviation: "D.O."
            }, {
                name: "Doctor of Philosophy",
                abbreviation: "Ph.D."
            }, {
                name: "Esquire",
                abbreviation: "Esq."
            }, {
                name: "Junior",
                abbreviation: "Jr."
            }, {
                name: "Juris Doctor",
                abbreviation: "J.D."
            }, {
                name: "Master of Arts",
                abbreviation: "M.A."
            }, {
                name: "Master of Business Administration",
                abbreviation: "M.B.A."
            }, {
                name: "Master of Science",
                abbreviation: "M.S."
            }, {
                name: "Medical Doctor",
                abbreviation: "M.D."
            }, {
                name: "Senior",
                abbreviation: "Sr."
            }, {
                name: "The Third",
                abbreviation: "III"
            }, {
                name: "The Fourth",
                abbreviation: "IV"
            }, {
                name: "Bachelor of Engineering",
                abbreviation: "B.E"
            }, {
                name: "Bachelor of Technology",
                abbreviation: "B.TECH"
            }];
            return e
        }, e.prototype.suffix = function(e) {
            return this.name_suffix(e)
        }, e.prototype.name_suffix = function(e) {
            return e = t(e), e.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation
        }, e.prototype.nationalities = function() {
            return this.get("nationalities")
        }, e.prototype.nationality = function() {
            var e = this.pick(this.nationalities());
            return e.name
        }, e.prototype.android_id = function() {
            return "APA91" + this.string({
                pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
                length: 178
            })
        }, e.prototype.apple_token = function() {
            return this.string({
                pool: "abcdef1234567890",
                length: 64
            })
        }, e.prototype.wp8_anid2 = function() {
            return h(this.hash({
                length: 32
            }))
        }, e.prototype.wp7_anid = function() {
            return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({
                length: 3
            }) + "&W=" + this.integer({
                min: 0,
                max: 9
            })
        }, e.prototype.bb_pin = function() {
            return this.hash({
                length: 8
            })
        }, e.prototype.avatar = function(e) {
            var n = null,
                a = "//www.gravatar.com/avatar/",
                i = {
                    http: "http",
                    https: "https"
                },
                r = {
                    bmp: "bmp",
                    gif: "gif",
                    jpg: "jpg",
                    png: "png"
                },
                o = {
                    404: "404",
                    mm: "mm",
                    identicon: "identicon",
                    monsterid: "monsterid",
                    wavatar: "wavatar",
                    retro: "retro",
                    blank: "blank"
                },
                s = {
                    g: "g",
                    pg: "pg",
                    r: "r",
                    x: "x"
                },
                l = {
                    protocol: null,
                    email: null,
                    fileExtension: null,
                    size: null,
                    fallback: null,
                    rating: null
                };
            if (e)
                if ("string" == typeof e) l.email = e, e = {};
                else {
                    if ("object" != typeof e) return null;
                    if ("Array" === e.constructor) return null
                }
            else l.email = this.email(), e = {};
            return l = t(e, l), l.email || (l.email = this.email()), l.protocol = i[l.protocol] ? l.protocol + ":" : "", l.size = parseInt(l.size, 0) ? l.size : "", l.rating = s[l.rating] ? l.rating : "", l.fallback = o[l.fallback] ? l.fallback : "", l.fileExtension = r[l.fileExtension] ? l.fileExtension : "", n = l.protocol + a + this.bimd5.md5(l.email) + (l.fileExtension ? "." + l.fileExtension : "") + (l.size || l.rating || l.fallback ? "?" : "") + (l.size ? "&s=" + l.size.toString() : "") + (l.rating ? "&r=" + l.rating : "") + (l.fallback ? "&d=" + l.fallback : "")
        }, e.prototype.color = function(e) {
            function n(e, t, n) {
                return n = n || "0", e += "", e.length >= t ? e : new Array(t - e.length + 1).join(n) + e
            }

            function a(e, t) {
                return [e, e, e].join(t || "")
            }

            function i(e) {
                var t = e ? "rgba" : "rgb",
                    n = e ? "," + this.floating({
                        min: m,
                        max: v
                    }) : "",
                    i = o ? a(this.natural({
                        min: s,
                        max: l
                    }), ",") : this.natural({
                        min: d,
                        max: f
                    }) + "," + this.natural({
                        min: p,
                        max: h
                    }) + "," + this.natural({
                        max: 255
                    });
                return t + "(" + i + n + ")"
            }

            function r(t, i, r) {
                var m = r ? "#" : "",
                    v = "";
                return o ? (v = a(n(this.hex({
                    min: s,
                    max: l
                }), 2)), "shorthex" === e.format && (v = a(this.hex({
                        min: 0,
                        max: 15
                    })),
                    console.log("hex: " + v))) : v = "shorthex" === e.format ? n(this.hex({
                    min: Math.floor(c / 16),
                    max: Math.floor(u / 16)
                }), 1) + n(this.hex({
                    min: Math.floor(d / 16),
                    max: Math.floor(f / 16)
                }), 1) + n(this.hex({
                    min: Math.floor(p / 16),
                    max: Math.floor(h / 16)
                }), 1) : void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== p || void 0 !== h ? n(this.hex({
                    min: c,
                    max: u
                }), 2) + n(this.hex({
                    min: d,
                    max: f
                }), 2) + n(this.hex({
                    min: p,
                    max: h
                }), 2) : n(this.hex({
                    min: s,
                    max: l
                }), 2) + n(this.hex({
                    min: s,
                    max: l
                }), 2) + n(this.hex({
                    min: s,
                    max: l
                }), 2), m + v
            }
            e = t(e, {
                format: this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]),
                grayscale: !1,
                casing: "lower",
                min: 0,
                max: 255,
                min_red: void 0,
                max_red: void 0,
                min_green: void 0,
                max_green: void 0,
                min_blue: void 0,
                max_blue: void 0,
                min_alpha: 0,
                max_alpha: 1
            });
            var o = e.grayscale,
                s = e.min,
                l = e.max,
                c = e.min_red,
                u = e.max_red,
                d = e.min_green,
                f = e.max_green,
                p = e.min_blue,
                h = e.max_blue,
                m = e.min_alpha,
                v = e.max_alpha;
            void 0 === e.min_red && (c = s), void 0 === e.max_red && (u = l), void 0 === e.min_green && (d = s), void 0 === e.max_green && (f = l), void 0 === e.min_blue && (p = s), void 0 === e.max_blue && (h = l), void 0 === e.min_alpha && (m = 0), void 0 === e.max_alpha && (v = 1), o && 0 === s && 255 === l && void 0 !== c && void 0 !== u && (s = (c + d + p) / 3, l = (u + f + h) / 3);
            var g;
            if ("hex" === e.format) g = r.call(this, 2, 6, !0);
            else if ("shorthex" === e.format) g = r.call(this, 1, 3, !0);
            else if ("rgb" === e.format) g = i.call(this, !1);
            else if ("rgba" === e.format) g = i.call(this, !0);
            else {
                if ("0x" !== e.format) {
                    if ("name" === e.format) return this.pick(this.get("colorNames"));
                    throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".')
                }
                g = "0x" + r.call(this, 2, 6)
            }
            return "upper" === e.casing && (g = g.toUpperCase()), g
        }, e.prototype.domain = function(e) {
            return e = t(e), this.word() + "." + (e.tld || this.tld())
        }, e.prototype.email = function(e) {
            return e = t(e), this.word({
                length: e.length
            }) + "@" + (e.domain || this.domain())
        }, e.prototype.fbid = function() {
            return parseInt("10000" + this.natural({
                max: 1e11
            }), 10)
        }, e.prototype.google_analytics = function() {
            var e = this.pad(this.natural({
                    max: 999999
                }), 6),
                t = this.pad(this.natural({
                    max: 99
                }), 2);
            return "UA-" + e + "-" + t
        }, e.prototype.hashtag = function() {
            return "#" + this.word()
        }, e.prototype.ip = function() {
            return this.natural({
                min: 1,
                max: 254
            }) + "." + this.natural({
                max: 255
            }) + "." + this.natural({
                max: 255
            }) + "." + this.natural({
                min: 1,
                max: 254
            })
        }, e.prototype.ipv6 = function() {
            var e = this.n(this.hash, 8, {
                length: 4
            });
            return e.join(":")
        }, e.prototype.klout = function() {
            return this.natural({
                min: 1,
                max: 99
            })
        }, e.prototype.semver = function(e) {
            e = t(e, {
                include_prerelease: !0
            });
            var n = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
            e.range && (n = e.range);
            var a = "";
            return e.include_prerelease && (a = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1])), n + this.rpg("3d10").join(".") + a
        }, e.prototype.tlds = function() {
            return ["com", "org", "edu", "gov", "co.uk", "net", "io", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"]
        }, e.prototype.tld = function() {
            return this.pick(this.tlds())
        }, e.prototype.twitter = function() {
            return "@" + this.word()
        }, e.prototype.url = function(e) {
            e = t(e, {
                protocol: "http",
                domain: this.domain(e),
                domain_prefix: "",
                path: this.word(),
                extensions: []
            });
            var n = e.extensions.length > 0 ? "." + this.pick(e.extensions) : "",
                a = e.domain_prefix ? e.domain_prefix + "." + e.domain : e.domain;
            return e.protocol + "://" + a + "/" + e.path + n
        }, e.prototype.port = function() {
            return this.integer({
                min: 0,
                max: 65535
            })
        }, e.prototype.address = function(e) {
            return e = t(e), this.natural({
                min: 5,
                max: 2e3
            }) + " " + this.street(e)
        }, e.prototype.altitude = function(e) {
            return e = t(e, {
                fixed: 5,
                min: 0,
                max: 8848
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.areacode = function(e) {
            e = t(e, {
                parens: !0
            });
            var n = this.natural({
                min: 2,
                max: 9
            }).toString() + this.natural({
                min: 0,
                max: 8
            }).toString() + this.natural({
                min: 0,
                max: 9
            }).toString();
            return e.parens ? "(" + n + ")" : n
        }, e.prototype.city = function() {
            return this.capitalize(this.word({
                syllables: 3
            }))
        }, e.prototype.coordinates = function(e) {
            return this.latitude(e) + ", " + this.longitude(e)
        }, e.prototype.countries = function() {
            return this.get("countries")
        }, e.prototype.country = function(e) {
            e = t(e);
            var n = this.pick(this.countries());
            return e.full ? n.name : n.abbreviation
        }, e.prototype.depth = function(e) {
            return e = t(e, {
                fixed: 5,
                min: -10994,
                max: 0
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.geohash = function(e) {
            return e = t(e, {
                length: 7
            }), this.string({
                length: e.length,
                pool: "0123456789bcdefghjkmnpqrstuvwxyz"
            })
        }, e.prototype.geojson = function(e) {
            return this.latitude(e) + ", " + this.longitude(e) + ", " + this.altitude(e)
        }, e.prototype.latitude = function(e) {
            return e = t(e, {
                fixed: 5,
                min: -90,
                max: 90
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.longitude = function(e) {
            return e = t(e, {
                fixed: 5,
                min: -180,
                max: 180
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.phone = function(e) {
            var n, a = this,
                i = function(e) {
                    var t = [];
                    return e.sections.forEach(function(e) {
                        t.push(a.string({
                            pool: "0123456789",
                            length: e
                        }))
                    }), e.area + t.join(" ")
                };
            e = t(e, {
                formatted: !0,
                country: "us",
                mobile: !1
            }), e.formatted || (e.parens = !1);
            var r;
            switch (e.country) {
                case "fr":
                    e.mobile ? (n = this.pick(["06", "07"]) + a.string({
                        pool: "0123456789",
                        length: 8
                    }), r = e.formatted ? n.match(/../g).join(" ") : n) : (n = this.pick(["01" + this.pick(["30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "02" + this.pick(["14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "03" + this.pick(["10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "04" + this.pick(["11", "13", "15", "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "05" + this.pick(["08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "79", "81", "82", "86", "87", "90", "94"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "09" + a.string({
                        pool: "0123456789",
                        length: 8
                    })]), r = e.formatted ? n.match(/../g).join(" ") : n);
                    break;
                case "uk":
                    e.mobile ? (n = this.pick([{
                        area: "07" + this.pick(["4", "5", "7", "8", "9"]),
                        sections: [2, 6]
                    }, {
                        area: "07624 ",
                        sections: [6]
                    }]), r = e.formatted ? i(n) : i(n).replace(" ", "")) : (n = this.pick([{
                        area: "01" + this.character({
                            pool: "234569"
                        }) + "1 ",
                        sections: [3, 4]
                    }, {
                        area: "020 " + this.character({
                            pool: "378"
                        }),
                        sections: [3, 4]
                    }, {
                        area: "023 " + this.character({
                            pool: "89"
                        }),
                        sections: [3, 4]
                    }, {
                        area: "024 7",
                        sections: [3, 4]
                    }, {
                        area: "028 " + this.pick(["25", "28", "37", "71", "82", "90", "92", "95"]),
                        sections: [2, 4]
                    }, {
                        area: "012" + this.pick(["04", "08", "54", "76", "97", "98"]) + " ",
                        sections: [6]
                    }, {
                        area: "013" + this.pick(["63", "64", "84", "86"]) + " ",
                        sections: [6]
                    }, {
                        area: "014" + this.pick(["04", "20", "60", "61", "80", "88"]) + " ",
                        sections: [6]
                    }, {
                        area: "015" + this.pick(["24", "27", "62", "66"]) + " ",
                        sections: [6]
                    }, {
                        area: "016" + this.pick(["06", "29", "35", "47", "59", "95"]) + " ",
                        sections: [6]
                    }, {
                        area: "017" + this.pick(["26", "44", "50", "68"]) + " ",
                        sections: [6]
                    }, {
                        area: "018" + this.pick(["27", "37", "84", "97"]) + " ",
                        sections: [6]
                    }, {
                        area: "019" + this.pick(["00", "05", "35", "46", "49", "63", "95"]) + " ",
                        sections: [6]
                    }]), r = e.formatted ? i(n) : i(n).replace(" ", "", "g"));
                    break;
                case "za":
                    e.mobile ? (n = this.pick(["060" + this.pick(["3", "4", "5", "6", "7", "8", "9"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "061" + this.pick(["0", "1", "2", "3", "4", "5", "8"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "06" + a.string({
                        pool: "0123456789",
                        length: 7
                    }), "071" + this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "07" + this.pick(["2", "3", "4", "6", "7", "8", "9"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    }), "08" + this.pick(["0", "1", "2", "3", "4", "5"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    })]), r = e.formatted || n) : (n = this.pick(["01" + this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    }), "02" + this.pick(["1", "2", "3", "4", "7", "8"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    }), "03" + this.pick(["1", "2", "3", "5", "6", "9"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    }), "04" + this.pick(["1", "2", "3", "4", "5", "6", "7", "8", "9"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    }), "05" + this.pick(["1", "3", "4", "6", "7", "8"]) + a.string({
                        pool: "0123456789",
                        length: 7
                    })]), r = e.formatted || n);
                    break;
                case "us":
                    var o = this.areacode(e).toString(),
                        s = this.natural({
                            min: 2,
                            max: 9
                        }).toString() + this.natural({
                            min: 0,
                            max: 9
                        }).toString() + this.natural({
                            min: 0,
                            max: 9
                        }).toString(),
                        l = this.natural({
                            min: 1e3,
                            max: 9999
                        }).toString();
                    r = e.formatted ? o + " " + s + "-" + l : o + s + l
            }
            return r
        }, e.prototype.postal = function() {
            var e = this.character({
                    pool: "XVTSRPNKLMHJGECBA"
                }),
                t = e + this.natural({
                    max: 9
                }) + this.character({
                    alpha: !0,
                    casing: "upper"
                }),
                n = this.natural({
                    max: 9
                }) + this.character({
                    alpha: !0,
                    casing: "upper"
                }) + this.natural({
                    max: 9
                });
            return t + " " + n
        }, e.prototype.counties = function(e) {
            return e = t(e, {
                country: "uk"
            }), this.get("counties")[e.country.toLowerCase()]
        }, e.prototype.county = function(e) {
            return this.pick(this.counties(e)).name
        }, e.prototype.provinces = function(e) {
            return e = t(e, {
                country: "ca"
            }), this.get("provinces")[e.country.toLowerCase()]
        }, e.prototype.province = function(e) {
            return e && e.full ? this.pick(this.provinces(e)).name : this.pick(this.provinces(e)).abbreviation
        }, e.prototype.state = function(e) {
            return e && e.full ? this.pick(this.states(e)).name : this.pick(this.states(e)).abbreviation
        }, e.prototype.states = function(e) {
            e = t(e, {
                country: "us",
                us_states_and_dc: !0
            });
            var n;
            switch (e.country.toLowerCase()) {
                case "us":
                    var a = this.get("us_states_and_dc"),
                        i = this.get("territories"),
                        r = this.get("armed_forces");
                    n = [], e.us_states_and_dc && (n = n.concat(a)), e.territories && (n = n.concat(i)), e.armed_forces && (n = n.concat(r));
                    break;
                case "it":
                    n = this.get("country_regions")[e.country.toLowerCase()];
                    break;
                case "uk":
                    n = this.get("counties")[e.country.toLowerCase()]
            }
            return n
        }, e.prototype.street = function(e) {
            e = t(e, {
                country: "us",
                syllables: 2
            });
            var n;
            switch (e.country.toLowerCase()) {
                case "us":
                    n = this.word({
                        syllables: e.syllables
                    }), n = this.capitalize(n), n += " ", n += e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name;
                    break;
                case "it":
                    n = this.word({
                        syllables: e.syllables
                    }), n = this.capitalize(n), n = (e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name) + " " + n
            }
            return n
        }, e.prototype.street_suffix = function(e) {
            return e = t(e, {
                country: "us"
            }), this.pick(this.street_suffixes(e))
        }, e.prototype.street_suffixes = function(e) {
            return e = t(e, {
                country: "us"
            }), this.get("street_suffixes")[e.country.toLowerCase()]
        }, e.prototype.zip = function(e) {
            var t = this.n(this.natural, 5, {
                max: 9
            });
            return e && e.plusfour === !0 && (t.push("-"), t = t.concat(this.n(this.natural, 4, {
                max: 9
            }))), t.join("")
        }, e.prototype.ampm = function() {
            return this.bool() ? "am" : "pm"
        }, e.prototype.date = function(e) {
            var n, a;
            if (e && (e.min || e.max)) {
                e = t(e, {
                    american: !0,
                    string: !1
                });
                var i = "undefined" != typeof e.min ? e.min.getTime() : 1,
                    r = "undefined" != typeof e.max ? e.max.getTime() : 864e13;
                a = new Date(this.integer({
                    min: i,
                    max: r
                }))
            } else {
                var o = this.month({
                        raw: !0
                    }),
                    s = o.days;
                e && e.month && (s = this.get("months")[(e.month % 12 + 12) % 12].days), e = t(e, {
                    year: parseInt(this.year(), 10),
                    month: o.numeric - 1,
                    day: this.natural({
                        min: 1,
                        max: s
                    }),
                    hour: this.hour({
                        twentyfour: !0
                    }),
                    minute: this.minute(),
                    second: this.second(),
                    millisecond: this.millisecond(),
                    american: !0,
                    string: !1
                }), a = new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
            }
            return n = e.american ? a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear() : a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear(), e.string ? n : a
        }, e.prototype.hammertime = function(e) {
            return this.date(e).getTime()
        }, e.prototype.hour = function(e) {
            return e = t(e, {
                min: e && e.twentyfour ? 0 : 1,
                max: e && e.twentyfour ? 23 : 12
            }), n(e.min < 0, "Chance: Min cannot be less than 0."), n(e.twentyfour && e.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option."), n(!e.twentyfour && e.max > 12, "Chance: Max cannot be greater than 12."), n(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({
                min: e.min,
                max: e.max
            })
        }, e.prototype.millisecond = function() {
            return this.natural({
                max: 999
            })
        }, e.prototype.minute = e.prototype.second = function(e) {
            return e = t(e, {
                min: 0,
                max: 59
            }), n(e.min < 0, "Chance: Min cannot be less than 0."), n(e.max > 59, "Chance: Max cannot be greater than 59."), n(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({
                min: e.min,
                max: e.max
            })
        }, e.prototype.month = function(e) {
            e = t(e, {
                min: 1,
                max: 12
            }), n(e.min < 1, "Chance: Min cannot be less than 1."), n(e.max > 12, "Chance: Max cannot be greater than 12."), n(e.min > e.max, "Chance: Min cannot be greater than Max.");
            var a = this.pick(this.months().slice(e.min - 1, e.max));
            return e.raw ? a : a.name
        }, e.prototype.months = function() {
            return this.get("months")
        }, e.prototype.second = function() {
            return this.natural({
                max: 59
            })
        }, e.prototype.timestamp = function() {
            return this.natural({
                min: 1,
                max: parseInt((new Date).getTime() / 1e3, 10)
            })
        }, e.prototype.weekday = function(e) {
            e = t(e, {
                weekday_only: !1
            });
            var n = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            return e.weekday_only || (n.push("Saturday"), n.push("Sunday")), this.pickone(n)
        }, e.prototype.year = function(e) {
            return e = t(e, {
                min: (new Date).getFullYear()
            }), e.max = "undefined" != typeof e.max ? e.max : e.min + 100, this.natural(e).toString()
        }, e.prototype.cc = function(e) {
            e = t(e);
            var n, a, i;
            return n = e.type ? this.cc_type({
                name: e.type,
                raw: !0
            }) : this.cc_type({
                raw: !0
            }), a = n.prefix.split(""), i = n.length - n.prefix.length - 1, a = a.concat(this.n(this.integer, i, {
                min: 0,
                max: 9
            })), a.push(this.luhn_calculate(a.join(""))), a.join("")
        }, e.prototype.cc_types = function() {
            return this.get("cc_types")
        }, e.prototype.cc_type = function(e) {
            e = t(e);
            var n = this.cc_types(),
                a = null;
            if (e.name) {
                for (var i = 0; i < n.length; i++)
                    if (n[i].name === e.name || n[i].short_name === e.name) {
                        a = n[i];
                        break
                    }
                if (null === a) throw new RangeError("Credit card type '" + e.name + "'' is not supported")
            } else a = this.pick(n);
            return e.raw ? a : a.name
        }, e.prototype.currency_types = function() {
            return this.get("currency_types")
        }, e.prototype.currency = function() {
            return this.pick(this.currency_types())
        }, e.prototype.timezones = function() {
            return this.get("timezones")
        }, e.prototype.timezone = function() {
            return this.pick(this.timezones())
        }, e.prototype.currency_pair = function(e) {
            var t = this.unique(this.currency, 2, {
                comparator: function(e, t) {
                    return e.reduce(function(e, n) {
                        return e || n.code === t.code
                    }, !1)
                }
            });
            return e ? t[0].code + "/" + t[1].code : t
        }, e.prototype.dollar = function(e) {
            e = t(e, {
                max: 1e4,
                min: 0
            });
            var n = this.floating({
                    min: e.min,
                    max: e.max,
                    fixed: 2
                }).toString(),
                a = n.split(".")[1];
            return void 0 === a ? n += ".00" : a.length < 2 && (n += "0"), n < 0 ? "-$" + n.replace("-", "") : "$" + n
        }, e.prototype.euro = function(e) {
            return Number(this.dollar(e).replace("$", "")).toLocaleString() + "€"
        }, e.prototype.exp = function(e) {
            e = t(e);
            var n = {};
            return n.year = this.exp_year(), n.year === (new Date).getFullYear().toString() ? n.month = this.exp_month({
                future: !0
            }) : n.month = this.exp_month(), e.raw ? n : n.month + "/" + n.year
        }, e.prototype.exp_month = function(e) {
            e = t(e);
            var n, a, i = (new Date).getMonth() + 1;
            if (e.future && 12 !== i) {
                do n = this.month({
                    raw: !0
                }).numeric, a = parseInt(n, 10); while (a <= i)
            } else n = this.month({
                raw: !0
            }).numeric;
            return n
        }, e.prototype.exp_year = function() {
            var e = (new Date).getMonth() + 1,
                t = (new Date).getFullYear();
            return this.year({
                min: 12 === e ? t + 1 : t,
                max: t + 10
            })
        }, e.prototype.vat = function(e) {
            switch (e = t(e, {
                country: "it"
            }), e.country.toLowerCase()) {
                case "it":
                    return this.it_vat()
            }
        }, e.prototype.iban = function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                t = e + "0123456789",
                n = this.string({
                    length: 2,
                    pool: e
                }) + this.pad(this.integer({
                    min: 0,
                    max: 99
                }), 2) + this.string({
                    length: 4,
                    pool: t
                }) + this.pad(this.natural(), this.natural({
                    min: 6,
                    max: 26
                }));
            return n
        }, e.prototype.it_vat = function() {
            var e = this.natural({
                min: 1,
                max: 18e5
            });
            return e = this.pad(e, 7) + this.pad(this.pick(this.provinces({
                country: "it"
            })).code, 3), e + this.luhn_calculate(e)
        }, e.prototype.cf = function(e) {
            e = e || {};
            var t = e.gender ? e.gender : this.gender(),
                n = e.first ? e.first : this.first({
                    gender: t,
                    nationality: "it"
                }),
                a = e.last ? e.last : this.last({
                    nationality: "it"
                }),
                i = e.birthday ? e.birthday : this.birthday(),
                r = e.city ? e.city : this.pickone(["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "Z"]) + this.pad(this.natural({
                    max: 999
                }), 3),
                o = [],
                s = function(e, t) {
                    var n, a = [];
                    return e.length < 3 ? a = e.split("").concat("XXX".split("")).splice(0, 3) : (n = e.toUpperCase().split("").map(function(e) {
                        return "BCDFGHJKLMNPRSTVWZ".indexOf(e) !== -1 ? e : void 0
                    }).join(""), n.length > 3 && (n = t ? n.substr(0, 3) : n[0] + n.substr(2, 2)), n.length < 3 && (a = n, n = e.toUpperCase().split("").map(function(e) {
                        return "AEIOU".indexOf(e) !== -1 ? e : void 0
                    }).join("").substr(0, 3 - a.length)), a += n), a
                },
                l = function(e, t, n) {
                    var a = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
                    return e.getFullYear().toString().substr(2) + a[e.getMonth()] + n.pad(e.getDate() + ("female" === t.toLowerCase() ? 40 : 0), 2)
                },
                c = function(e) {
                    for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = "BAKPLCQDREVOSFTGUHMINJWZYX", r = 0, o = 0; o < 15; o++) r += o % 2 !== 0 ? a.indexOf(n[t.indexOf(e[o])]) : i.indexOf(n[t.indexOf(e[o])]);
                    return a[r % 26]
                };
            return o = o.concat(s(a, !0), s(n), l(i, t, this), r.toUpperCase().split("")).join(""), o += c(o.toUpperCase(), this), o.toUpperCase()
        }, e.prototype.pl_pesel = function() {
            for (var e = this.natural({
                    min: 1,
                    max: 9999999999
                }), t = this.pad(e, 10).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
            var a = (1 * t[0] + 3 * t[1] + 7 * t[2] + 9 * t[3] + 1 * t[4] + 3 * t[5] + 7 * t[6] + 9 * t[7] + 1 * t[8] + 3 * t[9]) % 10;
            return 0 !== a && (a = 10 - a), t.join("") + a
        }, e.prototype.pl_nip = function() {
            for (var e = this.natural({
                    min: 1,
                    max: 999999999
                }), t = this.pad(e, 9).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
            var a = (6 * t[0] + 5 * t[1] + 7 * t[2] + 2 * t[3] + 3 * t[4] + 4 * t[5] + 5 * t[6] + 6 * t[7] + 7 * t[8]) % 11;
            return 10 === a ? this.pl_nip() : t.join("") + a
        }, e.prototype.pl_regon = function() {
            for (var e = this.natural({
                    min: 1,
                    max: 99999999
                }), t = this.pad(e, 8).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
            var a = (8 * t[0] + 9 * t[1] + 2 * t[2] + 3 * t[3] + 4 * t[4] + 5 * t[5] + 6 * t[6] + 7 * t[7]) % 11;
            return 10 === a && (a = 0), t.join("") + a
        }, e.prototype.d4 = a({
            min: 1,
            max: 4
        }), e.prototype.d6 = a({
            min: 1,
            max: 6
        }), e.prototype.d8 = a({
            min: 1,
            max: 8
        }), e.prototype.d10 = a({
            min: 1,
            max: 10
        }), e.prototype.d12 = a({
            min: 1,
            max: 12
        }), e.prototype.d20 = a({
            min: 1,
            max: 20
        }), e.prototype.d30 = a({
            min: 1,
            max: 30
        }), e.prototype.d100 = a({
            min: 1,
            max: 100
        }), e.prototype.rpg = function(e, n) {
            if (n = t(n), e) {
                var a = e.toLowerCase().split("d"),
                    i = [];
                if (2 !== a.length || !parseInt(a[0], 10) || !parseInt(a[1], 10)) throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
                for (var r = a[0]; r > 0; r--) i[r - 1] = this.natural({
                    min: 1,
                    max: a[1]
                });
                return "undefined" != typeof n.sum && n.sum ? i.reduce(function(e, t) {
                    return e + t
                }) : i
            }
            throw new RangeError("A type of die roll must be included")
        }, e.prototype.guid = function(e) {
            e = t(e, {
                version: 5
            });
            var n = "abcdef1234567890",
                a = "ab89",
                i = this.string({
                    pool: n,
                    length: 8
                }) + "-" + this.string({
                    pool: n,
                    length: 4
                }) + "-" + e.version + this.string({
                    pool: n,
                    length: 3
                }) + "-" + this.string({
                    pool: a,
                    length: 1
                }) + this.string({
                    pool: n,
                    length: 3
                }) + "-" + this.string({
                    pool: n,
                    length: 12
                });
            return i
        }, e.prototype.hash = function(e) {
            e = t(e, {
                length: 40,
                casing: "lower"
            });
            var n = "upper" === e.casing ? f.toUpperCase() : f;
            return this.string({
                pool: n,
                length: e.length
            })
        }, e.prototype.luhn_check = function(e) {
            var t = e.toString(),
                n = +t.substring(t.length - 1);
            return n === this.luhn_calculate(+t.substring(0, t.length - 1))
        }, e.prototype.luhn_calculate = function(e) {
            for (var t, n = e.toString().split("").reverse(), a = 0, i = 0, r = n.length; r > i; ++i) t = +n[i], i % 2 === 0 && (t *= 2, t > 9 && (t -= 9)), a += t;
            return 9 * a % 10
        }, e.prototype.md5 = function(e) {
            var n = {
                str: "",
                key: null,
                raw: !1
            };
            if (e)
                if ("string" == typeof e) n.str = e, e = {};
                else {
                    if ("object" != typeof e) return null;
                    if ("Array" === e.constructor) return null
                }
            else n.str = this.string(), e = {};
            if (n = t(e, n), !n.str) throw new Error("A parameter is required to return an md5 hash.");
            return this.bimd5.md5(n.str, n.key, n.raw)
        }, e.prototype.file = function(e) {
            var t, n, a = e || {},
                i = "fileExtension",
                r = Object.keys(this.get("fileExtension"));
            if (t = this.word({
                    length: a.length
                }), a.extension) return n = a.extension, t + "." + n;
            if (a.extensions) {
                if (Array.isArray(a.extensions)) return n = this.pickone(a.extensions), t + "." + n;
                if (a.extensions.constructor === Object) {
                    var o = a.extensions,
                        s = Object.keys(o);
                    return n = this.pickone(o[this.pickone(s)]), t + "." + n
                }
                throw new Error("Expect collection of type Array or Object to be passed as an argument ")
            }
            if (a.fileType) {
                var l = a.fileType;
                if (r.indexOf(l) !== -1) return n = this.pickone(this.get(i)[l]), t + "." + n;
                throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ")
            }
            return n = this.pickone(this.get(i)[this.pickone(r)]), t + "." + n
        };
        var m = {
                firstNames: {
                    male: {
                        en: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
                        it: ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccolò", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"]
                    },
                    female: {
                        en: ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
                        it: ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Leda", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"]
                    }
                },
                lastNames: {
                    en: ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins"],
                    it: ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"]
                },
                countries: [{
                    name: "Afghanistan",
                    abbreviation: "AF"
                }, {
                    name: "Åland Islands",
                    abbreviation: "AX"
                }, {
                    name: "Albania",
                    abbreviation: "AL"
                }, {
                    name: "Algeria",
                    abbreviation: "DZ"
                }, {
                    name: "American Samoa",
                    abbreviation: "AS"
                }, {
                    name: "Andorra",
                    abbreviation: "AD"
                }, {
                    name: "Angola",
                    abbreviation: "AO"
                }, {
                    name: "Anguilla",
                    abbreviation: "AI"
                }, {
                    name: "Antarctica",
                    abbreviation: "AQ"
                }, {
                    name: "Antigua & Barbuda",
                    abbreviation: "AG"
                }, {
                    name: "Argentina",
                    abbreviation: "AR"
                }, {
                    name: "Armenia",
                    abbreviation: "AM"
                }, {
                    name: "Aruba",
                    abbreviation: "AW"
                }, {
                    name: "Ascension Island",
                    abbreviation: "AC"
                }, {
                    name: "Australia",
                    abbreviation: "AU"
                }, {
                    name: "Austria",
                    abbreviation: "AT"
                }, {
                    name: "Azerbaijan",
                    abbreviation: "AZ"
                }, {
                    name: "Bahamas",
                    abbreviation: "BS"
                }, {
                    name: "Bahrain",
                    abbreviation: "BH"
                }, {
                    name: "Bangladesh",
                    abbreviation: "BD"
                }, {
                    name: "Barbados",
                    abbreviation: "BB"
                }, {
                    name: "Belarus",
                    abbreviation: "BY"
                }, {
                    name: "Belgium",
                    abbreviation: "BE"
                }, {
                    name: "Belize",
                    abbreviation: "BZ"
                }, {
                    name: "Benin",
                    abbreviation: "BJ"
                }, {
                    name: "Bermuda",
                    abbreviation: "BM"
                }, {
                    name: "Bhutan",
                    abbreviation: "BT"
                }, {
                    name: "Bolivia",
                    abbreviation: "BO"
                }, {
                    name: "Bosnia & Herzegovina",
                    abbreviation: "BA"
                }, {
                    name: "Botswana",
                    abbreviation: "BW"
                }, {
                    name: "Brazil",
                    abbreviation: "BR"
                }, {
                    name: "British Indian Ocean Territory",
                    abbreviation: "IO"
                }, {
                    name: "British Virgin Islands",
                    abbreviation: "VG"
                }, {
                    name: "Brunei",
                    abbreviation: "BN"
                }, {
                    name: "Bulgaria",
                    abbreviation: "BG"
                }, {
                    name: "Burkina Faso",
                    abbreviation: "BF"
                }, {
                    name: "Burundi",
                    abbreviation: "BI"
                }, {
                    name: "Cambodia",
                    abbreviation: "KH"
                }, {
                    name: "Cameroon",
                    abbreviation: "CM"
                }, {
                    name: "Canada",
                    abbreviation: "CA"
                }, {
                    name: "Canary Islands",
                    abbreviation: "IC"
                }, {
                    name: "Cape Verde",
                    abbreviation: "CV"
                }, {
                    name: "Caribbean Netherlands",
                    abbreviation: "BQ"
                }, {
                    name: "Cayman Islands",
                    abbreviation: "KY"
                }, {
                    name: "Central African Republic",
                    abbreviation: "CF"
                }, {
                    name: "Ceuta & Melilla",
                    abbreviation: "EA"
                }, {
                    name: "Chad",
                    abbreviation: "TD"
                }, {
                    name: "Chile",
                    abbreviation: "CL"
                }, {
                    name: "China",
                    abbreviation: "CN"
                }, {
                    name: "Christmas Island",
                    abbreviation: "CX"
                }, {
                    name: "Cocos (Keeling) Islands",
                    abbreviation: "CC"
                }, {
                    name: "Colombia",
                    abbreviation: "CO"
                }, {
                    name: "Comoros",
                    abbreviation: "KM"
                }, {
                    name: "Congo - Brazzaville",
                    abbreviation: "CG"
                }, {
                    name: "Congo - Kinshasa",
                    abbreviation: "CD"
                }, {
                    name: "Cook Islands",
                    abbreviation: "CK"
                }, {
                    name: "Costa Rica",
                    abbreviation: "CR"
                }, {
                    name: "Côte d'Ivoire",
                    abbreviation: "CI"
                }, {
                    name: "Croatia",
                    abbreviation: "HR"
                }, {
                    name: "Cuba",
                    abbreviation: "CU"
                }, {
                    name: "Curaçao",
                    abbreviation: "CW"
                }, {
                    name: "Cyprus",
                    abbreviation: "CY"
                }, {
                    name: "Czech Republic",
                    abbreviation: "CZ"
                }, {
                    name: "Denmark",
                    abbreviation: "DK"
                }, {
                    name: "Diego Garcia",
                    abbreviation: "DG"
                }, {
                    name: "Djibouti",
                    abbreviation: "DJ"
                }, {
                    name: "Dominica",
                    abbreviation: "DM"
                }, {
                    name: "Dominican Republic",
                    abbreviation: "DO"
                }, {
                    name: "Ecuador",
                    abbreviation: "EC"
                }, {
                    name: "Egypt",
                    abbreviation: "EG"
                }, {
                    name: "El Salvador",
                    abbreviation: "SV"
                }, {
                    name: "Equatorial Guinea",
                    abbreviation: "GQ"
                }, {
                    name: "Eritrea",
                    abbreviation: "ER"
                }, {
                    name: "Estonia",
                    abbreviation: "EE"
                }, {
                    name: "Ethiopia",
                    abbreviation: "ET"
                }, {
                    name: "Falkland Islands",
                    abbreviation: "FK"
                }, {
                    name: "Faroe Islands",
                    abbreviation: "FO"
                }, {
                    name: "Fiji",
                    abbreviation: "FJ"
                }, {
                    name: "Finland",
                    abbreviation: "FI"
                }, {
                    name: "France",
                    abbreviation: "FR"
                }, {
                    name: "French Guiana",
                    abbreviation: "GF"
                }, {
                    name: "French Polynesia",
                    abbreviation: "PF"
                }, {
                    name: "French Southern Territories",
                    abbreviation: "TF"
                }, {
                    name: "Gabon",
                    abbreviation: "GA"
                }, {
                    name: "Gambia",
                    abbreviation: "GM"
                }, {
                    name: "Georgia",
                    abbreviation: "GE"
                }, {
                    name: "Germany",
                    abbreviation: "DE"
                }, {
                    name: "Ghana",
                    abbreviation: "GH"
                }, {
                    name: "Gibraltar",
                    abbreviation: "GI"
                }, {
                    name: "Greece",
                    abbreviation: "GR"
                }, {
                    name: "Greenland",
                    abbreviation: "GL"
                }, {
                    name: "Grenada",
                    abbreviation: "GD"
                }, {
                    name: "Guadeloupe",
                    abbreviation: "GP"
                }, {
                    name: "Guam",
                    abbreviation: "GU"
                }, {
                    name: "Guatemala",
                    abbreviation: "GT"
                }, {
                    name: "Guernsey",
                    abbreviation: "GG"
                }, {
                    name: "Guinea",
                    abbreviation: "GN"
                }, {
                    name: "Guinea-Bissau",
                    abbreviation: "GW"
                }, {
                    name: "Guyana",
                    abbreviation: "GY"
                }, {
                    name: "Haiti",
                    abbreviation: "HT"
                }, {
                    name: "Honduras",
                    abbreviation: "HN"
                }, {
                    name: "Hong Kong SAR China",
                    abbreviation: "HK"
                }, {
                    name: "Hungary",
                    abbreviation: "HU"
                }, {
                    name: "Iceland",
                    abbreviation: "IS"
                }, {
                    name: "India",
                    abbreviation: "IN"
                }, {
                    name: "Indonesia",
                    abbreviation: "ID"
                }, {
                    name: "Iran",
                    abbreviation: "IR"
                }, {
                    name: "Iraq",
                    abbreviation: "IQ"
                }, {
                    name: "Ireland",
                    abbreviation: "IE"
                }, {
                    name: "Isle of Man",
                    abbreviation: "IM"
                }, {
                    name: "Israel",
                    abbreviation: "IL"
                }, {
                    name: "Italy",
                    abbreviation: "IT"
                }, {
                    name: "Jamaica",
                    abbreviation: "JM"
                }, {
                    name: "Japan",
                    abbreviation: "JP"
                }, {
                    name: "Jersey",
                    abbreviation: "JE"
                }, {
                    name: "Jordan",
                    abbreviation: "JO"
                }, {
                    name: "Kazakhstan",
                    abbreviation: "KZ"
                }, {
                    name: "Kenya",
                    abbreviation: "KE"
                }, {
                    name: "Kiribati",
                    abbreviation: "KI"
                }, {
                    name: "Kosovo",
                    abbreviation: "XK"
                }, {
                    name: "Kuwait",
                    abbreviation: "KW"
                }, {
                    name: "Kyrgyzstan",
                    abbreviation: "KG"
                }, {
                    name: "Laos",
                    abbreviation: "LA"
                }, {
                    name: "Latvia",
                    abbreviation: "LV"
                }, {
                    name: "Lebanon",
                    abbreviation: "LB"
                }, {
                    name: "Lesotho",
                    abbreviation: "LS"
                }, {
                    name: "Liberia",
                    abbreviation: "LR"
                }, {
                    name: "Libya",
                    abbreviation: "LY"
                }, {
                    name: "Liechtenstein",
                    abbreviation: "LI"
                }, {
                    name: "Lithuania",
                    abbreviation: "LT"
                }, {
                    name: "Luxembourg",
                    abbreviation: "LU"
                }, {
                    name: "Macau SAR China",
                    abbreviation: "MO"
                }, {
                    name: "Macedonia",
                    abbreviation: "MK"
                }, {
                    name: "Madagascar",
                    abbreviation: "MG"
                }, {
                    name: "Malawi",
                    abbreviation: "MW"
                }, {
                    name: "Malaysia",
                    abbreviation: "MY"
                }, {
                    name: "Maldives",
                    abbreviation: "MV"
                }, {
                    name: "Mali",
                    abbreviation: "ML"
                }, {
                    name: "Malta",
                    abbreviation: "MT"
                }, {
                    name: "Marshall Islands",
                    abbreviation: "MH"
                }, {
                    name: "Martinique",
                    abbreviation: "MQ"
                }, {
                    name: "Mauritania",
                    abbreviation: "MR"
                }, {
                    name: "Mauritius",
                    abbreviation: "MU"
                }, {
                    name: "Mayotte",
                    abbreviation: "YT"
                }, {
                    name: "Mexico",
                    abbreviation: "MX"
                }, {
                    name: "Micronesia",
                    abbreviation: "FM"
                }, {
                    name: "Moldova",
                    abbreviation: "MD"
                }, {
                    name: "Monaco",
                    abbreviation: "MC"
                }, {
                    name: "Mongolia",
                    abbreviation: "MN"
                }, {
                    name: "Montenegro",
                    abbreviation: "ME"
                }, {
                    name: "Montserrat",
                    abbreviation: "MS"
                }, {
                    name: "Morocco",
                    abbreviation: "MA"
                }, {
                    name: "Mozambique",
                    abbreviation: "MZ"
                }, {
                    name: "Myanmar (Burma)",
                    abbreviation: "MM"
                }, {
                    name: "Namibia",
                    abbreviation: "NA"
                }, {
                    name: "Nauru",
                    abbreviation: "NR"
                }, {
                    name: "Nepal",
                    abbreviation: "NP"
                }, {
                    name: "Netherlands",
                    abbreviation: "NL"
                }, {
                    name: "New Caledonia",
                    abbreviation: "NC"
                }, {
                    name: "New Zealand",
                    abbreviation: "NZ"
                }, {
                    name: "Nicaragua",
                    abbreviation: "NI"
                }, {
                    name: "Niger",
                    abbreviation: "NE"
                }, {
                    name: "Nigeria",
                    abbreviation: "NG"
                }, {
                    name: "Niue",
                    abbreviation: "NU"
                }, {
                    name: "Norfolk Island",
                    abbreviation: "NF"
                }, {
                    name: "North Korea",
                    abbreviation: "KP"
                }, {
                    name: "Northern Mariana Islands",
                    abbreviation: "MP"
                }, {
                    name: "Norway",
                    abbreviation: "NO"
                }, {
                    name: "Oman",
                    abbreviation: "OM"
                }, {
                    name: "Pakistan",
                    abbreviation: "PK"
                }, {
                    name: "Palau",
                    abbreviation: "PW"
                }, {
                    name: "Palestinian Territories",
                    abbreviation: "PS"
                }, {
                    name: "Panama",
                    abbreviation: "PA"
                }, {
                    name: "Papua New Guinea",
                    abbreviation: "PG"
                }, {
                    name: "Paraguay",
                    abbreviation: "PY"
                }, {
                    name: "Peru",
                    abbreviation: "PE"
                }, {
                    name: "Philippines",
                    abbreviation: "PH"
                }, {
                    name: "Pitcairn Islands",
                    abbreviation: "PN"
                }, {
                    name: "Poland",
                    abbreviation: "PL"
                }, {
                    name: "Portugal",
                    abbreviation: "PT"
                }, {
                    name: "Puerto Rico",
                    abbreviation: "PR"
                }, {
                    name: "Qatar",
                    abbreviation: "QA"
                }, {
                    name: "Réunion",
                    abbreviation: "RE"
                }, {
                    name: "Romania",
                    abbreviation: "RO"
                }, {
                    name: "Russia",
                    abbreviation: "RU"
                }, {
                    name: "Rwanda",
                    abbreviation: "RW"
                }, {
                    name: "Samoa",
                    abbreviation: "WS"
                }, {
                    name: "San Marino",
                    abbreviation: "SM"
                }, {
                    name: "São Tomé and Príncipe",
                    abbreviation: "ST"
                }, {
                    name: "Saudi Arabia",
                    abbreviation: "SA"
                }, {
                    name: "Senegal",
                    abbreviation: "SN"
                }, {
                    name: "Serbia",
                    abbreviation: "RS"
                }, {
                    name: "Seychelles",
                    abbreviation: "SC"
                }, {
                    name: "Sierra Leone",
                    abbreviation: "SL"
                }, {
                    name: "Singapore",
                    abbreviation: "SG"
                }, {
                    name: "Sint Maarten",
                    abbreviation: "SX"
                }, {
                    name: "Slovakia",
                    abbreviation: "SK"
                }, {
                    name: "Slovenia",
                    abbreviation: "SI"
                }, {
                    name: "Solomon Islands",
                    abbreviation: "SB"
                }, {
                    name: "Somalia",
                    abbreviation: "SO"
                }, {
                    name: "South Africa",
                    abbreviation: "ZA"
                }, {
                    name: "South Georgia & South Sandwich Islands",
                    abbreviation: "GS"
                }, {
                    name: "South Korea",
                    abbreviation: "KR"
                }, {
                    name: "South Sudan",
                    abbreviation: "SS"
                }, {
                    name: "Spain",
                    abbreviation: "ES"
                }, {
                    name: "Sri Lanka",
                    abbreviation: "LK"
                }, {
                    name: "St. Barthélemy",
                    abbreviation: "BL"
                }, {
                    name: "St. Helena",
                    abbreviation: "SH"
                }, {
                    name: "St. Kitts & Nevis",
                    abbreviation: "KN"
                }, {
                    name: "St. Lucia",
                    abbreviation: "LC"
                }, {
                    name: "St. Martin",
                    abbreviation: "MF"
                }, {
                    name: "St. Pierre & Miquelon",
                    abbreviation: "PM"
                }, {
                    name: "St. Vincent & Grenadines",
                    abbreviation: "VC"
                }, {
                    name: "Sudan",
                    abbreviation: "SD"
                }, {
                    name: "Suriname",
                    abbreviation: "SR"
                }, {
                    name: "Svalbard & Jan Mayen",
                    abbreviation: "SJ"
                }, {
                    name: "Swaziland",
                    abbreviation: "SZ"
                }, {
                    name: "Sweden",
                    abbreviation: "SE"
                }, {
                    name: "Switzerland",
                    abbreviation: "CH"
                }, {
                    name: "Syria",
                    abbreviation: "SY"
                }, {
                    name: "Taiwan",
                    abbreviation: "TW"
                }, {
                    name: "Tajikistan",
                    abbreviation: "TJ"
                }, {
                    name: "Tanzania",
                    abbreviation: "TZ"
                }, {
                    name: "Thailand",
                    abbreviation: "TH"
                }, {
                    name: "Timor-Leste",
                    abbreviation: "TL"
                }, {
                    name: "Togo",
                    abbreviation: "TG"
                }, {
                    name: "Tokelau",
                    abbreviation: "TK"
                }, {
                    name: "Tonga",
                    abbreviation: "TO"
                }, {
                    name: "Trinidad & Tobago",
                    abbreviation: "TT"
                }, {
                    name: "Tristan da Cunha",
                    abbreviation: "TA"
                }, {
                    name: "Tunisia",
                    abbreviation: "TN"
                }, {
                    name: "Turkey",
                    abbreviation: "TR"
                }, {
                    name: "Turkmenistan",
                    abbreviation: "TM"
                }, {
                    name: "Turks & Caicos Islands",
                    abbreviation: "TC"
                }, {
                    name: "Tuvalu",
                    abbreviation: "TV"
                }, {
                    name: "U.S. Outlying Islands",
                    abbreviation: "UM"
                }, {
                    name: "U.S. Virgin Islands",
                    abbreviation: "VI"
                }, {
                    name: "Uganda",
                    abbreviation: "UG"
                }, {
                    name: "Ukraine",
                    abbreviation: "UA"
                }, {
                    name: "United Arab Emirates",
                    abbreviation: "AE"
                }, {
                    name: "United Kingdom",
                    abbreviation: "GB"
                }, {
                    name: "United States",
                    abbreviation: "US"
                }, {
                    name: "Uruguay",
                    abbreviation: "UY"
                }, {
                    name: "Uzbekistan",
                    abbreviation: "UZ"
                }, {
                    name: "Vanuatu",
                    abbreviation: "VU"
                }, {
                    name: "Vatican City",
                    abbreviation: "VA"
                }, {
                    name: "Venezuela",
                    abbreviation: "VE"
                }, {
                    name: "Vietnam",
                    abbreviation: "VN"
                }, {
                    name: "Wallis & Futuna",
                    abbreviation: "WF"
                }, {
                    name: "Western Sahara",
                    abbreviation: "EH"
                }, {
                    name: "Yemen",
                    abbreviation: "YE"
                }, {
                    name: "Zambia",
                    abbreviation: "ZM"
                }, {
                    name: "Zimbabwe",
                    abbreviation: "ZW"
                }],
                counties: {
                    uk: [{
                        name: "Bath and North East Somerset"
                    }, {
                        name: "Aberdeenshire"
                    }, {
                        name: "Anglesey"
                    }, {
                        name: "Angus"
                    }, {
                        name: "Bedford"
                    }, {
                        name: "Blackburn with Darwen"
                    }, {
                        name: "Blackpool"
                    }, {
                        name: "Bournemouth"
                    }, {
                        name: "Bracknell Forest"
                    }, {
                        name: "Brighton & Hove"
                    }, {
                        name: "Bristol"
                    }, {
                        name: "Buckinghamshire"
                    }, {
                        name: "Cambridgeshire"
                    }, {
                        name: "Carmarthenshire"
                    }, {
                        name: "Central Bedfordshire"
                    }, {
                        name: "Ceredigion"
                    }, {
                        name: "Cheshire East"
                    }, {
                        name: "Cheshire West and Chester"
                    }, {
                        name: "Clackmannanshire"
                    }, {
                        name: "Conwy"
                    }, {
                        name: "Cornwall"
                    }, {
                        name: "County Antrim"
                    }, {
                        name: "County Armagh"
                    }, {
                        name: "County Down"
                    }, {
                        name: "County Durham"
                    }, {
                        name: "County Fermanagh"
                    }, {
                        name: "County Londonderry"
                    }, {
                        name: "County Tyrone"
                    }, {
                        name: "Cumbria"
                    }, {
                        name: "Darlington"
                    }, {
                        name: "Denbighshire"
                    }, {
                        name: "Derby"
                    }, {
                        name: "Derbyshire"
                    }, {
                        name: "Devon"
                    }, {
                        name: "Dorset"
                    }, {
                        name: "Dumfries and Galloway"
                    }, {
                        name: "Dundee"
                    }, {
                        name: "East Lothian"
                    }, {
                        name: "East Riding of Yorkshire"
                    }, {
                        name: "East Sussex"
                    }, {
                        name: "Edinburgh?"
                    }, {
                        name: "Essex"
                    }, {
                        name: "Falkirk"
                    }, {
                        name: "Fife"
                    }, {
                        name: "Flintshire"
                    }, {
                        name: "Gloucestershire"
                    }, {
                        name: "Greater London"
                    }, {
                        name: "Greater Manchester"
                    }, {
                        name: "Gwent"
                    }, {
                        name: "Gwynedd"
                    }, {
                        name: "Halton"
                    }, {
                        name: "Hampshire"
                    }, {
                        name: "Hartlepool"
                    }, {
                        name: "Herefordshire"
                    }, {
                        name: "Hertfordshire"
                    }, {
                        name: "Highlands"
                    }, {
                        name: "Hull"
                    }, {
                        name: "Isle of Wight"
                    }, {
                        name: "Isles of Scilly"
                    }, {
                        name: "Kent"
                    }, {
                        name: "Lancashire"
                    }, {
                        name: "Leicester"
                    }, {
                        name: "Leicestershire"
                    }, {
                        name: "Lincolnshire"
                    }, {
                        name: "Lothian"
                    }, {
                        name: "Luton"
                    }, {
                        name: "Medway"
                    }, {
                        name: "Merseyside"
                    }, {
                        name: "Mid Glamorgan"
                    }, {
                        name: "Middlesbrough"
                    }, {
                        name: "Milton Keynes"
                    }, {
                        name: "Monmouthshire"
                    }, {
                        name: "Moray"
                    }, {
                        name: "Norfolk"
                    }, {
                        name: "North East Lincolnshire"
                    }, {
                        name: "North Lincolnshire"
                    }, {
                        name: "North Somerset"
                    }, {
                        name: "North Yorkshire"
                    }, {
                        name: "Northamptonshire"
                    }, {
                        name: "Northumberland"
                    }, {
                        name: "Nottingham"
                    }, {
                        name: "Nottinghamshire"
                    }, {
                        name: "Oxfordshire"
                    }, {
                        name: "Pembrokeshire"
                    }, {
                        name: "Perth and Kinross"
                    }, {
                        name: "Peterborough"
                    }, {
                        name: "Plymouth"
                    }, {
                        name: "Poole"
                    }, {
                        name: "Portsmouth"
                    }, {
                        name: "Powys"
                    }, {
                        name: "Reading"
                    }, {
                        name: "Redcar and Cleveland"
                    }, {
                        name: "Rutland"
                    }, {
                        name: "Scottish Borders"
                    }, {
                        name: "Shropshire"
                    }, {
                        name: "Slough"
                    }, {
                        name: "Somerset"
                    }, {
                        name: "South Glamorgan"
                    }, {
                        name: "South Gloucestershire"
                    }, {
                        name: "South Yorkshire"
                    }, {
                        name: "Southampton"
                    }, {
                        name: "Southend-on-Sea"
                    }, {
                        name: "Staffordshire"
                    }, {
                        name: "Stirlingshire"
                    }, {
                        name: "Stockton-on-Tees"
                    }, {
                        name: "Stoke-on-Trent"
                    }, {
                        name: "Strathclyde"
                    }, {
                        name: "Suffolk"
                    }, {
                        name: "Surrey"
                    }, {
                        name: "Swindon"
                    }, {
                        name: "Telford and Wrekin"
                    }, {
                        name: "Thurrock"
                    }, {
                        name: "Torbay"
                    }, {
                        name: "Tyne and Wear"
                    }, {
                        name: "Warrington"
                    }, {
                        name: "Warwickshire"
                    }, {
                        name: "West Berkshire"
                    }, {
                        name: "West Glamorgan"
                    }, {
                        name: "West Lothian"
                    }, {
                        name: "West Midlands"
                    }, {
                        name: "West Sussex"
                    }, {
                        name: "West Yorkshire"
                    }, {
                        name: "Western Isles"
                    }, {
                        name: "Wiltshire"
                    }, {
                        name: "Windsor and Maidenhead"
                    }, {
                        name: "Wokingham"
                    }, {
                        name: "Worcestershire"
                    }, {
                        name: "Wrexham"
                    }, {
                        name: "York"
                    }]
                },
                provinces: {
                    ca: [{
                        name: "Alberta",
                        abbreviation: "AB"
                    }, {
                        name: "British Columbia",
                        abbreviation: "BC"
                    }, {
                        name: "Manitoba",
                        abbreviation: "MB"
                    }, {
                        name: "New Brunswick",
                        abbreviation: "NB"
                    }, {
                        name: "Newfoundland and Labrador",
                        abbreviation: "NL"
                    }, {
                        name: "Nova Scotia",
                        abbreviation: "NS"
                    }, {
                        name: "Ontario",
                        abbreviation: "ON"
                    }, {
                        name: "Prince Edward Island",
                        abbreviation: "PE"
                    }, {
                        name: "Quebec",
                        abbreviation: "QC"
                    }, {
                        name: "Saskatchewan",
                        abbreviation: "SK"
                    }, {
                        name: "Northwest Territories",
                        abbreviation: "NT"
                    }, {
                        name: "Nunavut",
                        abbreviation: "NU"
                    }, {
                        name: "Yukon",
                        abbreviation: "YT"
                    }],
                    it: [{
                        name: "Agrigento",
                        abbreviation: "AG",
                        code: 84
                    }, {
                        name: "Alessandria",
                        abbreviation: "AL",
                        code: 6
                    }, {
                        name: "Ancona",
                        abbreviation: "AN",
                        code: 42
                    }, {
                        name: "Aosta",
                        abbreviation: "AO",
                        code: 7
                    }, {
                        name: "L'Aquila",
                        abbreviation: "AQ",
                        code: 66
                    }, {
                        name: "Arezzo",
                        abbreviation: "AR",
                        code: 51
                    }, {
                        name: "Ascoli-Piceno",
                        abbreviation: "AP",
                        code: 44
                    }, {
                        name: "Asti",
                        abbreviation: "AT",
                        code: 5
                    }, {
                        name: "Avellino",
                        abbreviation: "AV",
                        code: 64
                    }, {
                        name: "Bari",
                        abbreviation: "BA",
                        code: 72
                    }, {
                        name: "Barletta-Andria-Trani",
                        abbreviation: "BT",
                        code: 72
                    }, {
                        name: "Belluno",
                        abbreviation: "BL",
                        code: 25
                    }, {
                        name: "Benevento",
                        abbreviation: "BN",
                        code: 62
                    }, {
                        name: "Bergamo",
                        abbreviation: "BG",
                        code: 16
                    }, {
                        name: "Biella",
                        abbreviation: "BI",
                        code: 96
                    }, {
                        name: "Bologna",
                        abbreviation: "BO",
                        code: 37
                    }, {
                        name: "Bolzano",
                        abbreviation: "BZ",
                        code: 21
                    }, {
                        name: "Brescia",
                        abbreviation: "BS",
                        code: 17
                    }, {
                        name: "Brindisi",
                        abbreviation: "BR",
                        code: 74
                    }, {
                        name: "Cagliari",
                        abbreviation: "CA",
                        code: 92
                    }, {
                        name: "Caltanissetta",
                        abbreviation: "CL",
                        code: 85
                    }, {
                        name: "Campobasso",
                        abbreviation: "CB",
                        code: 70
                    }, {
                        name: "Carbonia Iglesias",
                        abbreviation: "CI",
                        code: 70
                    }, {
                        name: "Caserta",
                        abbreviation: "CE",
                        code: 61
                    }, {
                        name: "Catania",
                        abbreviation: "CT",
                        code: 87
                    }, {
                        name: "Catanzaro",
                        abbreviation: "CZ",
                        code: 79
                    }, {
                        name: "Chieti",
                        abbreviation: "CH",
                        code: 69
                    }, {
                        name: "Como",
                        abbreviation: "CO",
                        code: 13
                    }, {
                        name: "Cosenza",
                        abbreviation: "CS",
                        code: 78
                    }, {
                        name: "Cremona",
                        abbreviation: "CR",
                        code: 19
                    }, {
                        name: "Crotone",
                        abbreviation: "KR",
                        code: 101
                    }, {
                        name: "Cuneo",
                        abbreviation: "CN",
                        code: 4
                    }, {
                        name: "Enna",
                        abbreviation: "EN",
                        code: 86
                    }, {
                        name: "Fermo",
                        abbreviation: "FM",
                        code: 86
                    }, {
                        name: "Ferrara",
                        abbreviation: "FE",
                        code: 38
                    }, {
                        name: "Firenze",
                        abbreviation: "FI",
                        code: 48
                    }, {
                        name: "Foggia",
                        abbreviation: "FG",
                        code: 71
                    }, {
                        name: "Forli-Cesena",
                        abbreviation: "FC",
                        code: 71
                    }, {
                        name: "Frosinone",
                        abbreviation: "FR",
                        code: 60
                    }, {
                        name: "Genova",
                        abbreviation: "GE",
                        code: 10
                    }, {
                        name: "Gorizia",
                        abbreviation: "GO",
                        code: 31
                    }, {
                        name: "Grosseto",
                        abbreviation: "GR",
                        code: 53
                    }, {
                        name: "Imperia",
                        abbreviation: "IM",
                        code: 8
                    }, {
                        name: "Isernia",
                        abbreviation: "IS",
                        code: 94
                    }, {
                        name: "La-Spezia",
                        abbreviation: "SP",
                        code: 66
                    }, {
                        name: "Latina",
                        abbreviation: "LT",
                        code: 59
                    }, {
                        name: "Lecce",
                        abbreviation: "LE",
                        code: 75
                    }, {
                        name: "Lecco",
                        abbreviation: "LC",
                        code: 97
                    }, {
                        name: "Livorno",
                        abbreviation: "LI",
                        code: 49
                    }, {
                        name: "Lodi",
                        abbreviation: "LO",
                        code: 98
                    }, {
                        name: "Lucca",
                        abbreviation: "LU",
                        code: 46
                    }, {
                        name: "Macerata",
                        abbreviation: "MC",
                        code: 43
                    }, {
                        name: "Mantova",
                        abbreviation: "MN",
                        code: 20
                    }, {
                        name: "Massa-Carrara",
                        abbreviation: "MS",
                        code: 45
                    }, {
                        name: "Matera",
                        abbreviation: "MT",
                        code: 77
                    }, {
                        name: "Medio Campidano",
                        abbreviation: "VS",
                        code: 77
                    }, {
                        name: "Messina",
                        abbreviation: "ME",
                        code: 83
                    }, {
                        name: "Milano",
                        abbreviation: "MI",
                        code: 15
                    }, {
                        name: "Modena",
                        abbreviation: "MO",
                        code: 36
                    }, {
                        name: "Monza-Brianza",
                        abbreviation: "MB",
                        code: 36
                    }, {
                        name: "Napoli",
                        abbreviation: "NA",
                        code: 63
                    }, {
                        name: "Novara",
                        abbreviation: "NO",
                        code: 3
                    }, {
                        name: "Nuoro",
                        abbreviation: "NU",
                        code: 91
                    }, {
                        name: "Ogliastra",
                        abbreviation: "OG",
                        code: 91
                    }, {
                        name: "Olbia Tempio",
                        abbreviation: "OT",
                        code: 91
                    }, {
                        name: "Oristano",
                        abbreviation: "OR",
                        code: 95
                    }, {
                        name: "Padova",
                        abbreviation: "PD",
                        code: 28
                    }, {
                        name: "Palermo",
                        abbreviation: "PA",
                        code: 82
                    }, {
                        name: "Parma",
                        abbreviation: "PR",
                        code: 34
                    }, {
                        name: "Pavia",
                        abbreviation: "PV",
                        code: 18
                    }, {
                        name: "Perugia",
                        abbreviation: "PG",
                        code: 54
                    }, {
                        name: "Pesaro-Urbino",
                        abbreviation: "PU",
                        code: 41
                    }, {
                        name: "Pescara",
                        abbreviation: "PE",
                        code: 68
                    }, {
                        name: "Piacenza",
                        abbreviation: "PC",
                        code: 33
                    }, {
                        name: "Pisa",
                        abbreviation: "PI",
                        code: 50
                    }, {
                        name: "Pistoia",
                        abbreviation: "PT",
                        code: 47
                    }, {
                        name: "Pordenone",
                        abbreviation: "PN",
                        code: 93
                    }, {
                        name: "Potenza",
                        abbreviation: "PZ",
                        code: 76
                    }, {
                        name: "Prato",
                        abbreviation: "PO",
                        code: 100
                    }, {
                        name: "Ragusa",
                        abbreviation: "RG",
                        code: 88
                    }, {
                        name: "Ravenna",
                        abbreviation: "RA",
                        code: 39
                    }, {
                        name: "Reggio-Calabria",
                        abbreviation: "RC",
                        code: 35
                    }, {
                        name: "Reggio-Emilia",
                        abbreviation: "RE",
                        code: 35
                    }, {
                        name: "Rieti",
                        abbreviation: "RI",
                        code: 57
                    }, {
                        name: "Rimini",
                        abbreviation: "RN",
                        code: 99
                    }, {
                        name: "Roma",
                        abbreviation: "Roma",
                        code: 58
                    }, {
                        name: "Rovigo",
                        abbreviation: "RO",
                        code: 29
                    }, {
                        name: "Salerno",
                        abbreviation: "SA",
                        code: 65
                    }, {
                        name: "Sassari",
                        abbreviation: "SS",
                        code: 90
                    }, {
                        name: "Savona",
                        abbreviation: "SV",
                        code: 9
                    }, {
                        name: "Siena",
                        abbreviation: "SI",
                        code: 52
                    }, {
                        name: "Siracusa",
                        abbreviation: "SR",
                        code: 89
                    }, {
                        name: "Sondrio",
                        abbreviation: "SO",
                        code: 14
                    }, {
                        name: "Taranto",
                        abbreviation: "TA",
                        code: 73
                    }, {
                        name: "Teramo",
                        abbreviation: "TE",
                        code: 67
                    }, {
                        name: "Terni",
                        abbreviation: "TR",
                        code: 55
                    }, {
                        name: "Torino",
                        abbreviation: "TO",
                        code: 1
                    }, {
                        name: "Trapani",
                        abbreviation: "TP",
                        code: 81
                    }, {
                        name: "Trento",
                        abbreviation: "TN",
                        code: 22
                    }, {
                        name: "Treviso",
                        abbreviation: "TV",
                        code: 26
                    }, {
                        name: "Trieste",
                        abbreviation: "TS",
                        code: 32
                    }, {
                        name: "Udine",
                        abbreviation: "UD",
                        code: 30
                    }, {
                        name: "Varese",
                        abbreviation: "VA",
                        code: 12
                    }, {
                        name: "Venezia",
                        abbreviation: "VE",
                        code: 27
                    }, {
                        name: "Verbania",
                        abbreviation: "VB",
                        code: 27
                    }, {
                        name: "Vercelli",
                        abbreviation: "VC",
                        code: 2
                    }, {
                        name: "Verona",
                        abbreviation: "VR",
                        code: 23
                    }, {
                        name: "Vibo-Valentia",
                        abbreviation: "VV",
                        code: 102
                    }, {
                        name: "Vicenza",
                        abbreviation: "VI",
                        code: 24
                    }, {
                        name: "Viterbo",
                        abbreviation: "VT",
                        code: 56
                    }]
                },
                nationalities: [{
                    name: "Afghan"
                }, {
                    name: "Albanian"
                }, {
                    name: "Algerian"
                }, {
                    name: "American"
                }, {
                    name: "Andorran"
                }, {
                    name: "Angolan"
                }, {
                    name: "Antiguans"
                }, {
                    name: "Argentinean"
                }, {
                    name: "Armenian"
                }, {
                    name: "Australian"
                }, {
                    name: "Austrian"
                }, {
                    name: "Azerbaijani"
                }, {
                    name: "Bahami"
                }, {
                    name: "Bahraini"
                }, {
                    name: "Bangladeshi"
                }, {
                    name: "Barbadian"
                }, {
                    name: "Barbudans"
                }, {
                    name: "Batswana"
                }, {
                    name: "Belarusian"
                }, {
                    name: "Belgian"
                }, {
                    name: "Belizean"
                }, {
                    name: "Beninese"
                }, {
                    name: "Bhutanese"
                }, {
                    name: "Bolivian"
                }, {
                    name: "Bosnian"
                }, {
                    name: "Brazilian"
                }, {
                    name: "British"
                }, {
                    name: "Bruneian"
                }, {
                    name: "Bulgarian"
                }, {
                    name: "Burkinabe"
                }, {
                    name: "Burmese"
                }, {
                    name: "Burundian"
                }, {
                    name: "Cambodian"
                }, {
                    name: "Cameroonian"
                }, {
                    name: "Canadian"
                }, {
                    name: "Cape Verdean"
                }, {
                    name: "Central African"
                }, {
                    name: "Chadian"
                }, {
                    name: "Chilean"
                }, {
                    name: "Chinese"
                }, {
                    name: "Colombian"
                }, {
                    name: "Comoran"
                }, {
                    name: "Congolese"
                }, {
                    name: "Costa Rican"
                }, {
                    name: "Croatian"
                }, {
                    name: "Cuban"
                }, {
                    name: "Cypriot"
                }, {
                    name: "Czech"
                }, {
                    name: "Danish"
                }, {
                    name: "Djibouti"
                }, {
                    name: "Dominican"
                }, {
                    name: "Dutch"
                }, {
                    name: "East Timorese"
                }, {
                    name: "Ecuadorean"
                }, {
                    name: "Egyptian"
                }, {
                    name: "Emirian"
                }, {
                    name: "Equatorial Guinean"
                }, {
                    name: "Eritrean"
                }, {
                    name: "Estonian"
                }, {
                    name: "Ethiopian"
                }, {
                    name: "Fijian"
                }, {
                    name: "Filipino"
                }, {
                    name: "Finnish"
                }, {
                    name: "French"
                }, {
                    name: "Gabonese"
                }, {
                    name: "Gambian"
                }, {
                    name: "Georgian"
                }, {
                    name: "German"
                }, {
                    name: "Ghanaian"
                }, {
                    name: "Greek"
                }, {
                    name: "Grenadian"
                }, {
                    name: "Guatemalan"
                }, {
                    name: "Guinea-Bissauan"
                }, {
                    name: "Guinean"
                }, {
                    name: "Guyanese"
                }, {
                    name: "Haitian"
                }, {
                    name: "Herzegovinian"
                }, {
                    name: "Honduran"
                }, {
                    name: "Hungarian"
                }, {
                    name: "I-Kiribati"
                }, {
                    name: "Icelander"
                }, {
                    name: "Indian"
                }, {
                    name: "Indonesian"
                }, {
                    name: "Iranian"
                }, {
                    name: "Iraqi"
                }, {
                    name: "Irish"
                }, {
                    name: "Israeli"
                }, {
                    name: "Italian"
                }, {
                    name: "Ivorian"
                }, {
                    name: "Jamaican"
                }, {
                    name: "Japanese"
                }, {
                    name: "Jordanian"
                }, {
                    name: "Kazakhstani"
                }, {
                    name: "Kenyan"
                }, {
                    name: "Kittian and Nevisian"
                }, {
                    name: "Kuwaiti"
                }, {
                    name: "Kyrgyz"
                }, {
                    name: "Laotian"
                }, {
                    name: "Latvian"
                }, {
                    name: "Lebanese"
                }, {
                    name: "Liberian"
                }, {
                    name: "Libyan"
                }, {
                    name: "Liechtensteiner"
                }, {
                    name: "Lithuanian"
                }, {
                    name: "Luxembourger"
                }, {
                    name: "Macedonian"
                }, {
                    name: "Malagasy"
                }, {
                    name: "Malawian"
                }, {
                    name: "Malaysian"
                }, {
                    name: "Maldivan"
                }, {
                    name: "Malian"
                }, {
                    name: "Maltese"
                }, {
                    name: "Marshallese"
                }, {
                    name: "Mauritanian"
                }, {
                    name: "Mauritian"
                }, {
                    name: "Mexican"
                }, {
                    name: "Micronesian"
                }, {
                    name: "Moldovan"
                }, {
                    name: "Monacan"
                }, {
                    name: "Mongolian"
                }, {
                    name: "Moroccan"
                }, {
                    name: "Mosotho"
                }, {
                    name: "Motswana"
                }, {
                    name: "Mozambican"
                }, {
                    name: "Namibian"
                }, {
                    name: "Nauruan"
                }, {
                    name: "Nepalese"
                }, {
                    name: "New Zealander"
                }, {
                    name: "Nicaraguan"
                }, {
                    name: "Nigerian"
                }, {
                    name: "Nigerien"
                }, {
                    name: "North Korean"
                }, {
                    name: "Northern Irish"
                }, {
                    name: "Norwegian"
                }, {
                    name: "Omani"
                }, {
                    name: "Pakistani"
                }, {
                    name: "Palauan"
                }, {
                    name: "Panamanian"
                }, {
                    name: "Papua New Guinean"
                }, {
                    name: "Paraguayan"
                }, {
                    name: "Peruvian"
                }, {
                    name: "Polish"
                }, {
                    name: "Portuguese"
                }, {
                    name: "Qatari"
                }, {
                    name: "Romani"
                }, {
                    name: "Russian"
                }, {
                    name: "Rwandan"
                }, {
                    name: "Saint Lucian"
                }, {
                    name: "Salvadoran"
                }, {
                    name: "Samoan"
                }, {
                    name: "San Marinese"
                }, {
                    name: "Sao Tomean"
                }, {
                    name: "Saudi"
                }, {
                    name: "Scottish"
                }, {
                    name: "Senegalese"
                }, {
                    name: "Serbian"
                }, {
                    name: "Seychellois"
                }, {
                    name: "Sierra Leonean"
                }, {
                    name: "Singaporean"
                }, {
                    name: "Slovakian"
                }, {
                    name: "Slovenian"
                }, {
                    name: "Solomon Islander"
                }, {
                    name: "Somali"
                }, {
                    name: "South African"
                }, {
                    name: "South Korean"
                }, {
                    name: "Spanish"
                }, {
                    name: "Sri Lankan"
                }, {
                    name: "Sudanese"
                }, {
                    name: "Surinamer"
                }, {
                    name: "Swazi"
                }, {
                    name: "Swedish"
                }, {
                    name: "Swiss"
                }, {
                    name: "Syrian"
                }, {
                    name: "Taiwanese"
                }, {
                    name: "Tajik"
                }, {
                    name: "Tanzanian"
                }, {
                    name: "Thai"
                }, {
                    name: "Togolese"
                }, {
                    name: "Tongan"
                }, {
                    name: "Trinidadian or Tobagonian"
                }, {
                    name: "Tunisian"
                }, {
                    name: "Turkish"
                }, {
                    name: "Tuvaluan"
                }, {
                    name: "Ugandan"
                }, {
                    name: "Ukrainian"
                }, {
                    name: "Uruguaya"
                }, {
                    name: "Uzbekistani"
                }, {
                    name: "Venezuela"
                }, {
                    name: "Vietnamese"
                }, {
                    name: "Wels"
                }, {
                    name: "Yemenit"
                }, {
                    name: "Zambia"
                }, {
                    name: "Zimbabwe"
                }],
                us_states_and_dc: [{
                    name: "Alabama",
                    abbreviation: "AL"
                }, {
                    name: "Alaska",
                    abbreviation: "AK"
                }, {
                    name: "Arizona",
                    abbreviation: "AZ"
                }, {
                    name: "Arkansas",
                    abbreviation: "AR"
                }, {
                    name: "California",
                    abbreviation: "CA"
                }, {
                    name: "Colorado",
                    abbreviation: "CO"
                }, {
                    name: "Connecticut",
                    abbreviation: "CT"
                }, {
                    name: "Delaware",
                    abbreviation: "DE"
                }, {
                    name: "District of Columbia",
                    abbreviation: "DC"
                }, {
                    name: "Florida",
                    abbreviation: "FL"
                }, {
                    name: "Georgia",
                    abbreviation: "GA"
                }, {
                    name: "Hawaii",
                    abbreviation: "HI"
                }, {
                    name: "Idaho",
                    abbreviation: "ID"
                }, {
                    name: "Illinois",
                    abbreviation: "IL"
                }, {
                    name: "Indiana",
                    abbreviation: "IN"
                }, {
                    name: "Iowa",
                    abbreviation: "IA"
                }, {
                    name: "Kansas",
                    abbreviation: "KS"
                }, {
                    name: "Kentucky",
                    abbreviation: "KY"
                }, {
                    name: "Louisiana",
                    abbreviation: "LA"
                }, {
                    name: "Maine",
                    abbreviation: "ME"
                }, {
                    name: "Maryland",
                    abbreviation: "MD"
                }, {
                    name: "Massachusetts",
                    abbreviation: "MA"
                }, {
                    name: "Michigan",
                    abbreviation: "MI"
                }, {
                    name: "Minnesota",
                    abbreviation: "MN"
                }, {
                    name: "Mississippi",
                    abbreviation: "MS"
                }, {
                    name: "Missouri",
                    abbreviation: "MO"
                }, {
                    name: "Montana",
                    abbreviation: "MT"
                }, {
                    name: "Nebraska",
                    abbreviation: "NE"
                }, {
                    name: "Nevada",
                    abbreviation: "NV"
                }, {
                    name: "New Hampshire",
                    abbreviation: "NH"
                }, {
                    name: "New Jersey",
                    abbreviation: "NJ"
                }, {
                    name: "New Mexico",
                    abbreviation: "NM"
                }, {
                    name: "New York",
                    abbreviation: "NY"
                }, {
                    name: "North Carolina",
                    abbreviation: "NC"
                }, {
                    name: "North Dakota",
                    abbreviation: "ND"
                }, {
                    name: "Ohio",
                    abbreviation: "OH"
                }, {
                    name: "Oklahoma",
                    abbreviation: "OK"
                }, {
                    name: "Oregon",
                    abbreviation: "OR"
                }, {
                    name: "Pennsylvania",
                    abbreviation: "PA"
                }, {
                    name: "Rhode Island",
                    abbreviation: "RI"
                }, {
                    name: "South Carolina",
                    abbreviation: "SC"
                }, {
                    name: "South Dakota",
                    abbreviation: "SD"
                }, {
                    name: "Tennessee",
                    abbreviation: "TN"
                }, {
                    name: "Texas",
                    abbreviation: "TX"
                }, {
                    name: "Utah",
                    abbreviation: "UT"
                }, {
                    name: "Vermont",
                    abbreviation: "VT"
                }, {
                    name: "Virginia",
                    abbreviation: "VA"
                }, {
                    name: "Washington",
                    abbreviation: "WA"
                }, {
                    name: "West Virginia",
                    abbreviation: "WV"
                }, {
                    name: "Wisconsin",
                    abbreviation: "WI"
                }, {
                    name: "Wyoming",
                    abbreviation: "WY"
                }],
                territories: [{
                    name: "American Samoa",
                    abbreviation: "AS"
                }, {
                    name: "Federated States of Micronesia",
                    abbreviation: "FM"
                }, {
                    name: "Guam",
                    abbreviation: "GU"
                }, {
                    name: "Marshall Islands",
                    abbreviation: "MH"
                }, {
                    name: "Northern Mariana Islands",
                    abbreviation: "MP"
                }, {
                    name: "Puerto Rico",
                    abbreviation: "PR"
                }, {
                    name: "Virgin Islands, U.S.",
                    abbreviation: "VI"
                }],
                armed_forces: [{
                    name: "Armed Forces Europe",
                    abbreviation: "AE"
                }, {
                    name: "Armed Forces Pacific",
                    abbreviation: "AP"
                }, {
                    name: "Armed Forces the Americas",
                    abbreviation: "AA"
                }],
                country_regions: {
                    it: [{
                        name: "Valle d'Aosta",
                        abbreviation: "VDA"
                    }, {
                        name: "Piemonte",
                        abbreviation: "PIE"
                    }, {
                        name: "Lombardia",
                        abbreviation: "LOM"
                    }, {
                        name: "Veneto",
                        abbreviation: "VEN"
                    }, {
                        name: "Trentino Alto Adige",
                        abbreviation: "TAA"
                    }, {
                        name: "Friuli Venezia Giulia",
                        abbreviation: "FVG"
                    }, {
                        name: "Liguria",
                        abbreviation: "LIG"
                    }, {
                        name: "Emilia Romagna",
                        abbreviation: "EMR"
                    }, {
                        name: "Toscana",
                        abbreviation: "TOS"
                    }, {
                        name: "Umbria",
                        abbreviation: "UMB"
                    }, {
                        name: "Marche",
                        abbreviation: "MAR"
                    }, {
                        name: "Abruzzo",
                        abbreviation: "ABR"
                    }, {
                        name: "Lazio",
                        abbreviation: "LAZ"
                    }, {
                        name: "Campania",
                        abbreviation: "CAM"
                    }, {
                        name: "Puglia",
                        abbreviation: "PUG"
                    }, {
                        name: "Basilicata",
                        abbreviation: "BAS"
                    }, {
                        name: "Molise",
                        abbreviation: "MOL"
                    }, {
                        name: "Calabria",
                        abbreviation: "CAL"
                    }, {
                        name: "Sicilia",
                        abbreviation: "SIC"
                    }, {
                        name: "Sardegna",
                        abbreviation: "SAR"
                    }]
                },
                street_suffixes: {
                    us: [{
                        name: "Avenue",
                        abbreviation: "Ave"
                    }, {
                        name: "Boulevard",
                        abbreviation: "Blvd"
                    }, {
                        name: "Center",
                        abbreviation: "Ctr"
                    }, {
                        name: "Circle",
                        abbreviation: "Cir"
                    }, {
                        name: "Court",
                        abbreviation: "Ct"
                    }, {
                        name: "Drive",
                        abbreviation: "Dr"
                    }, {
                        name: "Extension",
                        abbreviation: "Ext"
                    }, {
                        name: "Glen",
                        abbreviation: "Gln"
                    }, {
                        name: "Grove",
                        abbreviation: "Grv"
                    }, {
                        name: "Heights",
                        abbreviation: "Hts"
                    }, {
                        name: "Highway",
                        abbreviation: "Hwy"
                    }, {
                        name: "Junction",
                        abbreviation: "Jct"
                    }, {
                        name: "Key",
                        abbreviation: "Key"
                    }, {
                        name: "Lane",
                        abbreviation: "Ln"
                    }, {
                        name: "Loop",
                        abbreviation: "Loop"
                    }, {
                        name: "Manor",
                        abbreviation: "Mnr"
                    }, {
                        name: "Mill",
                        abbreviation: "Mill"
                    }, {
                        name: "Park",
                        abbreviation: "Park"
                    }, {
                        name: "Parkway",
                        abbreviation: "Pkwy"
                    }, {
                        name: "Pass",
                        abbreviation: "Pass"
                    }, {
                        name: "Path",
                        abbreviation: "Path"
                    }, {
                        name: "Pike",
                        abbreviation: "Pike"
                    }, {
                        name: "Place",
                        abbreviation: "Pl"
                    }, {
                        name: "Plaza",
                        abbreviation: "Plz"
                    }, {
                        name: "Point",
                        abbreviation: "Pt"
                    }, {
                        name: "Ridge",
                        abbreviation: "Rdg"
                    }, {
                        name: "River",
                        abbreviation: "Riv"
                    }, {
                        name: "Road",
                        abbreviation: "Rd"
                    }, {
                        name: "Square",
                        abbreviation: "Sq"
                    }, {
                        name: "Street",
                        abbreviation: "St"
                    }, {
                        name: "Terrace",
                        abbreviation: "Ter"
                    }, {
                        name: "Trail",
                        abbreviation: "Trl"
                    }, {
                        name: "Turnpike",
                        abbreviation: "Tpke"
                    }, {
                        name: "View",
                        abbreviation: "Vw"
                    }, {
                        name: "Way",
                        abbreviation: "Way"
                    }],
                    it: [{
                        name: "Accesso",
                        abbreviation: "Acc."
                    }, {
                        name: "Alzaia",
                        abbreviation: "Alz."
                    }, {
                        name: "Arco",
                        abbreviation: "Arco"
                    }, {
                        name: "Archivolto",
                        abbreviation: "Acv."
                    }, {
                        name: "Arena",
                        abbreviation: "Arena"
                    }, {
                        name: "Argine",
                        abbreviation: "Argine"
                    }, {
                        name: "Bacino",
                        abbreviation: "Bacino"
                    }, {
                        name: "Banchi",
                        abbreviation: "Banchi"
                    }, {
                        name: "Banchina",
                        abbreviation: "Ban."
                    }, {
                        name: "Bastioni",
                        abbreviation: "Bas."
                    }, {
                        name: "Belvedere",
                        abbreviation: "Belv."
                    }, {
                        name: "Borgata",
                        abbreviation: "B.ta"
                    }, {
                        name: "Borgo",
                        abbreviation: "B.go"
                    }, {
                        name: "Calata",
                        abbreviation: "Cal."
                    }, {
                        name: "Calle",
                        abbreviation: "Calle"
                    }, {
                        name: "Campiello",
                        abbreviation: "Cam."
                    }, {
                        name: "Campo",
                        abbreviation: "Cam."
                    }, {
                        name: "Canale",
                        abbreviation: "Can."
                    }, {
                        name: "Carraia",
                        abbreviation: "Carr."
                    }, {
                        name: "Cascina",
                        abbreviation: "Cascina"
                    }, {
                        name: "Case sparse",
                        abbreviation: "c.s."
                    }, {
                        name: "Cavalcavia",
                        abbreviation: "Cv."
                    }, {
                        name: "Circonvallazione",
                        abbreviation: "Cv."
                    }, {
                        name: "Complanare",
                        abbreviation: "C.re"
                    }, {
                        name: "Contrada",
                        abbreviation: "C.da"
                    }, {
                        name: "Corso",
                        abbreviation: "C.so"
                    }, {
                        name: "Corte",
                        abbreviation: "C.te"
                    }, {
                        name: "Cortile",
                        abbreviation: "C.le"
                    }, {
                        name: "Diramazione",
                        abbreviation: "Dir."
                    }, {
                        name: "Fondaco",
                        abbreviation: "F.co"
                    }, {
                        name: "Fondamenta",
                        abbreviation: "F.ta"
                    }, {
                        name: "Fondo",
                        abbreviation: "F.do"
                    }, {
                        name: "Frazione",
                        abbreviation: "Fr."
                    }, {
                        name: "Isola",
                        abbreviation: "Is."
                    }, {
                        name: "Largo",
                        abbreviation: "L.go"
                    }, {
                        name: "Litoranea",
                        abbreviation: "Lit."
                    }, {
                        name: "Lungolago",
                        abbreviation: "L.go lago"
                    }, {
                        name: "Lungo Po",
                        abbreviation: "l.go Po"
                    }, {
                        name: "Molo",
                        abbreviation: "Molo"
                    }, {
                        name: "Mura",
                        abbreviation: "Mura"
                    }, {
                        name: "Passaggio privato",
                        abbreviation: "pass. priv."
                    }, {
                        name: "Passeggiata",
                        abbreviation: "Pass."
                    }, {
                        name: "Piazza",
                        abbreviation: "P.zza"
                    }, {
                        name: "Piazzale",
                        abbreviation: "P.le"
                    }, {
                        name: "Ponte",
                        abbreviation: "P.te"
                    }, {
                        name: "Portico",
                        abbreviation: "P.co"
                    }, {
                        name: "Rampa",
                        abbreviation: "Rampa"
                    }, {
                        name: "Regione",
                        abbreviation: "Reg."
                    }, {
                        name: "Rione",
                        abbreviation: "R.ne"
                    }, {
                        name: "Rio",
                        abbreviation: "Rio"
                    }, {
                        name: "Ripa",
                        abbreviation: "Ripa"
                    }, {
                        name: "Riva",
                        abbreviation: "Riva"
                    }, {
                        name: "Rondò",
                        abbreviation: "Rondò"
                    }, {
                        name: "Rotonda",
                        abbreviation: "Rot."
                    }, {
                        name: "Sagrato",
                        abbreviation: "Sagr."
                    }, {
                        name: "Salita",
                        abbreviation: "Sal."
                    }, {
                        name: "Scalinata",
                        abbreviation: "Scal."
                    }, {
                        name: "Scalone",
                        abbreviation: "Scal."
                    }, {
                        name: "Slargo",
                        abbreviation: "Sl."
                    }, {
                        name: "Sottoportico",
                        abbreviation: "Sott."
                    }, {
                        name: "Strada",
                        abbreviation: "Str."
                    }, {
                        name: "Stradale",
                        abbreviation: "Str.le"
                    }, {
                        name: "Strettoia",
                        abbreviation: "Strett."
                    }, {
                        name: "Traversa",
                        abbreviation: "Trav."
                    }, {
                        name: "Via",
                        abbreviation: "V."
                    }, {
                        name: "Viale",
                        abbreviation: "V.le"
                    }, {
                        name: "Vicinale",
                        abbreviation: "Vic.le"
                    }, {
                        name: "Vicolo",
                        abbreviation: "Vic."
                    }],
                    uk: [{
                        name: "Avenue",
                        abbreviation: "Ave"
                    }, {
                        name: "Close",
                        abbreviation: "Cl"
                    }, {
                        name: "Court",
                        abbreviation: "Ct"
                    }, {
                        name: "Crescent",
                        abbreviation: "Cr"
                    }, {
                        name: "Drive",
                        abbreviation: "Dr"
                    }, {
                        name: "Garden",
                        abbreviation: "Gdn"
                    }, {
                        name: "Gardens",
                        abbreviation: "Gdns"
                    }, {
                        name: "Green",
                        abbreviation: "Gn"
                    }, {
                        name: "Grove",
                        abbreviation: "Gr"
                    }, {
                        name: "Lane",
                        abbreviation: "Ln"
                    }, {
                        name: "Mount",
                        abbreviation: "Mt"
                    }, {
                        name: "Place",
                        abbreviation: "Pl"
                    }, {
                        name: "Park",
                        abbreviation: "Pk"
                    }, {
                        name: "Ridge",
                        abbreviation: "Rdg"
                    }, {
                        name: "Road",
                        abbreviation: "Rd"
                    }, {
                        name: "Square",
                        abbreviation: "Sq"
                    }, {
                        name: "Street",
                        abbreviation: "St"
                    }, {
                        name: "Terrace",
                        abbreviation: "Ter"
                    }, {
                        name: "Valley",
                        abbreviation: "Val"
                    }]
                },
                months: [{
                    name: "January",
                    short_name: "Jan",
                    numeric: "01",
                    days: 31
                }, {
                    name: "February",
                    short_name: "Feb",
                    numeric: "02",
                    days: 28
                }, {
                    name: "March",
                    short_name: "Mar",
                    numeric: "03",
                    days: 31
                }, {
                    name: "April",
                    short_name: "Apr",
                    numeric: "04",
                    days: 30
                }, {
                    name: "May",
                    short_name: "May",
                    numeric: "05",
                    days: 31
                }, {
                    name: "June",
                    short_name: "Jun",
                    numeric: "06",
                    days: 30
                }, {
                    name: "July",
                    short_name: "Jul",
                    numeric: "07",
                    days: 31
                }, {
                    name: "August",
                    short_name: "Aug",
                    numeric: "08",
                    days: 31
                }, {
                    name: "September",
                    short_name: "Sep",
                    numeric: "09",
                    days: 30
                }, {
                    name: "October",
                    short_name: "Oct",
                    numeric: "10",
                    days: 31
                }, {
                    name: "November",
                    short_name: "Nov",
                    numeric: "11",
                    days: 30
                }, {
                    name: "December",
                    short_name: "Dec",
                    numeric: "12",
                    days: 31
                }],
                cc_types: [{
                    name: "American Express",
                    short_name: "amex",
                    prefix: "34",
                    length: 15
                }, {
                    name: "Bankcard",
                    short_name: "bankcard",
                    prefix: "5610",
                    length: 16
                }, {
                    name: "China UnionPay",
                    short_name: "chinaunion",
                    prefix: "62",
                    length: 16
                }, {
                    name: "Diners Club Carte Blanche",
                    short_name: "dccarte",
                    prefix: "300",
                    length: 14
                }, {
                    name: "Diners Club enRoute",
                    short_name: "dcenroute",
                    prefix: "2014",
                    length: 15
                }, {
                    name: "Diners Club International",
                    short_name: "dcintl",
                    prefix: "36",
                    length: 14
                }, {
                    name: "Diners Club United States & Canada",
                    short_name: "dcusc",
                    prefix: "54",
                    length: 16
                }, {
                    name: "Discover Card",
                    short_name: "discover",
                    prefix: "6011",
                    length: 16
                }, {
                    name: "InstaPayment",
                    short_name: "instapay",
                    prefix: "637",
                    length: 16
                }, {
                    name: "JCB",
                    short_name: "jcb",
                    prefix: "3528",
                    length: 16
                }, {
                    name: "Laser",
                    short_name: "laser",
                    prefix: "6304",
                    length: 16
                }, {
                    name: "Maestro",
                    short_name: "maestro",
                    prefix: "5018",
                    length: 16
                }, {
                    name: "Mastercard",
                    short_name: "mc",
                    prefix: "51",
                    length: 16
                }, {
                    name: "Solo",
                    short_name: "solo",
                    prefix: "6334",
                    length: 16
                }, {
                    name: "Switch",
                    short_name: "switch",
                    prefix: "4903",
                    length: 16
                }, {
                    name: "Visa",
                    short_name: "visa",
                    prefix: "4",
                    length: 16
                }, {
                    name: "Visa Electron",
                    short_name: "electron",
                    prefix: "4026",
                    length: 16
                }],
                currency_types: [{
                    code: "AED",
                    name: "United Arab Emirates Dirham"
                }, {
                    code: "AFN",
                    name: "Afghanistan Afghani"
                }, {
                    code: "ALL",
                    name: "Albania Lek"
                }, {
                    code: "AMD",
                    name: "Armenia Dram"
                }, {
                    code: "ANG",
                    name: "Netherlands Antilles Guilder"
                }, {
                    code: "AOA",
                    name: "Angola Kwanza"
                }, {
                    code: "ARS",
                    name: "Argentina Peso"
                }, {
                    code: "AUD",
                    name: "Australia Dollar"
                }, {
                    code: "AWG",
                    name: "Aruba Guilder"
                }, {
                    code: "AZN",
                    name: "Azerbaijan New Manat"
                }, {
                    code: "BAM",
                    name: "Bosnia and Herzegovina Convertible Marka"
                }, {
                    code: "BBD",
                    name: "Barbados Dollar"
                }, {
                    code: "BDT",
                    name: "Bangladesh Taka"
                }, {
                    code: "BGN",
                    name: "Bulgaria Lev"
                }, {
                    code: "BHD",
                    name: "Bahrain Dinar"
                }, {
                    code: "BIF",
                    name: "Burundi Franc"
                }, {
                    code: "BMD",
                    name: "Bermuda Dollar"
                }, {
                    code: "BND",
                    name: "Brunei Darussalam Dollar"
                }, {
                    code: "BOB",
                    name: "Bolivia Boliviano"
                }, {
                    code: "BRL",
                    name: "Brazil Real"
                }, {
                    code: "BSD",
                    name: "Bahamas Dollar"
                }, {
                    code: "BTN",
                    name: "Bhutan Ngultrum"
                }, {
                    code: "BWP",
                    name: "Botswana Pula"
                }, {
                    code: "BYR",
                    name: "Belarus Ruble"
                }, {
                    code: "BZD",
                    name: "Belize Dollar"
                }, {
                    code: "CAD",
                    name: "Canada Dollar"
                }, {
                    code: "CDF",
                    name: "Congo/Kinshasa Franc"
                }, {
                    code: "CHF",
                    name: "Switzerland Franc"
                }, {
                    code: "CLP",
                    name: "Chile Peso"
                }, {
                    code: "CNY",
                    name: "China Yuan Renminbi"
                }, {
                    code: "COP",
                    name: "Colombia Peso"
                }, {
                    code: "CRC",
                    name: "Costa Rica Colon"
                }, {
                    code: "CUC",
                    name: "Cuba Convertible Peso"
                }, {
                    code: "CUP",
                    name: "Cuba Peso"
                }, {
                    code: "CVE",
                    name: "Cape Verde Escudo"
                }, {
                    code: "CZK",
                    name: "Czech Republic Koruna"
                }, {
                    code: "DJF",
                    name: "Djibouti Franc"
                }, {
                    code: "DKK",
                    name: "Denmark Krone"
                }, {
                    code: "DOP",
                    name: "Dominican Republic Peso"
                }, {
                    code: "DZD",
                    name: "Algeria Dinar"
                }, {
                    code: "EGP",
                    name: "Egypt Pound"
                }, {
                    code: "ERN",
                    name: "Eritrea Nakfa"
                }, {
                    code: "ETB",
                    name: "Ethiopia Birr"
                }, {
                    code: "EUR",
                    name: "Euro Member Countries"
                }, {
                    code: "FJD",
                    name: "Fiji Dollar"
                }, {
                    code: "FKP",
                    name: "Falkland Islands (Malvinas) Pound"
                }, {
                    code: "GBP",
                    name: "United Kingdom Pound"
                }, {
                    code: "GEL",
                    name: "Georgia Lari"
                }, {
                    code: "GGP",
                    name: "Guernsey Pound"
                }, {
                    code: "GHS",
                    name: "Ghana Cedi"
                }, {
                    code: "GIP",
                    name: "Gibraltar Pound"
                }, {
                    code: "GMD",
                    name: "Gambia Dalasi"
                }, {
                    code: "GNF",
                    name: "Guinea Franc"
                }, {
                    code: "GTQ",
                    name: "Guatemala Quetzal"
                }, {
                    code: "GYD",
                    name: "Guyana Dollar"
                }, {
                    code: "HKD",
                    name: "Hong Kong Dollar"
                }, {
                    code: "HNL",
                    name: "Honduras Lempira"
                }, {
                    code: "HRK",
                    name: "Croatia Kuna"
                }, {
                    code: "HTG",
                    name: "Haiti Gourde"
                }, {
                    code: "HUF",
                    name: "Hungary Forint"
                }, {
                    code: "IDR",
                    name: "Indonesia Rupiah"
                }, {
                    code: "ILS",
                    name: "Israel Shekel"
                }, {
                    code: "IMP",
                    name: "Isle of Man Pound"
                }, {
                    code: "INR",
                    name: "India Rupee"
                }, {
                    code: "IQD",
                    name: "Iraq Dinar"
                }, {
                    code: "IRR",
                    name: "Iran Rial"
                }, {
                    code: "ISK",
                    name: "Iceland Krona"
                }, {
                    code: "JEP",
                    name: "Jersey Pound"
                }, {
                    code: "JMD",
                    name: "Jamaica Dollar"
                }, {
                    code: "JOD",
                    name: "Jordan Dinar"
                }, {
                    code: "JPY",
                    name: "Japan Yen"
                }, {
                    code: "KES",
                    name: "Kenya Shilling"
                }, {
                    code: "KGS",
                    name: "Kyrgyzstan Som"
                }, {
                    code: "KHR",
                    name: "Cambodia Riel"
                }, {
                    code: "KMF",
                    name: "Comoros Franc"
                }, {
                    code: "KPW",
                    name: "Korea (North) Won"
                }, {
                    code: "KRW",
                    name: "Korea (South) Won"
                }, {
                    code: "KWD",
                    name: "Kuwait Dinar"
                }, {
                    code: "KYD",
                    name: "Cayman Islands Dollar"
                }, {
                    code: "KZT",
                    name: "Kazakhstan Tenge"
                }, {
                    code: "LAK",
                    name: "Laos Kip"
                }, {
                    code: "LBP",
                    name: "Lebanon Pound"
                }, {
                    code: "LKR",
                    name: "Sri Lanka Rupee"
                }, {
                    code: "LRD",
                    name: "Liberia Dollar"
                }, {
                    code: "LSL",
                    name: "Lesotho Loti"
                }, {
                    code: "LTL",
                    name: "Lithuania Litas"
                }, {
                    code: "LYD",
                    name: "Libya Dinar"
                }, {
                    code: "MAD",
                    name: "Morocco Dirham"
                }, {
                    code: "MDL",
                    name: "Moldova Leu"
                }, {
                    code: "MGA",
                    name: "Madagascar Ariary"
                }, {
                    code: "MKD",
                    name: "Macedonia Denar"
                }, {
                    code: "MMK",
                    name: "Myanmar (Burma) Kyat"
                }, {
                    code: "MNT",
                    name: "Mongolia Tughrik"
                }, {
                    code: "MOP",
                    name: "Macau Pataca"
                }, {
                    code: "MRO",
                    name: "Mauritania Ouguiya"
                }, {
                    code: "MUR",
                    name: "Mauritius Rupee"
                }, {
                    code: "MVR",
                    name: "Maldives (Maldive Islands) Rufiyaa"
                }, {
                    code: "MWK",
                    name: "Malawi Kwacha"
                }, {
                    code: "MXN",
                    name: "Mexico Peso"
                }, {
                    code: "MYR",
                    name: "Malaysia Ringgit"
                }, {
                    code: "MZN",
                    name: "Mozambique Metical"
                }, {
                    code: "NAD",
                    name: "Namibia Dollar"
                }, {
                    code: "NGN",
                    name: "Nigeria Naira"
                }, {
                    code: "NIO",
                    name: "Nicaragua Cordoba"
                }, {
                    code: "NOK",
                    name: "Norway Krone"
                }, {
                    code: "NPR",
                    name: "Nepal Rupee"
                }, {
                    code: "NZD",
                    name: "New Zealand Dollar"
                }, {
                    code: "OMR",
                    name: "Oman Rial"
                }, {
                    code: "PAB",
                    name: "Panama Balboa"
                }, {
                    code: "PEN",
                    name: "Peru Nuevo Sol"
                }, {
                    code: "PGK",
                    name: "Papua New Guinea Kina"
                }, {
                    code: "PHP",
                    name: "Philippines Peso"
                }, {
                    code: "PKR",
                    name: "Pakistan Rupee"
                }, {
                    code: "PLN",
                    name: "Poland Zloty"
                }, {
                    code: "PYG",
                    name: "Paraguay Guarani"
                }, {
                    code: "QAR",
                    name: "Qatar Riyal"
                }, {
                    code: "RON",
                    name: "Romania New Leu"
                }, {
                    code: "RSD",
                    name: "Serbia Dinar"
                }, {
                    code: "RUB",
                    name: "Russia Ruble"
                }, {
                    code: "RWF",
                    name: "Rwanda Franc"
                }, {
                    code: "SAR",
                    name: "Saudi Arabia Riyal"
                }, {
                    code: "SBD",
                    name: "Solomon Islands Dollar"
                }, {
                    code: "SCR",
                    name: "Seychelles Rupee"
                }, {
                    code: "SDG",
                    name: "Sudan Pound"
                }, {
                    code: "SEK",
                    name: "Sweden Krona"
                }, {
                    code: "SGD",
                    name: "Singapore Dollar"
                }, {
                    code: "SHP",
                    name: "Saint Helena Pound"
                }, {
                    code: "SLL",
                    name: "Sierra Leone Leone"
                }, {
                    code: "SOS",
                    name: "Somalia Shilling"
                }, {
                    code: "SPL",
                    name: "Seborga Luigino"
                }, {
                    code: "SRD",
                    name: "Suriname Dollar"
                }, {
                    code: "STD",
                    name: "São Tomé and Príncipe Dobra"
                }, {
                    code: "SVC",
                    name: "El Salvador Colon"
                }, {
                    code: "SYP",
                    name: "Syria Pound"
                }, {
                    code: "SZL",
                    name: "Swaziland Lilangeni"
                }, {
                    code: "THB",
                    name: "Thailand Baht"
                }, {
                    code: "TJS",
                    name: "Tajikistan Somoni"
                }, {
                    code: "TMT",
                    name: "Turkmenistan Manat"
                }, {
                    code: "TND",
                    name: "Tunisia Dinar"
                }, {
                    code: "TOP",
                    name: "Tonga Pa'anga"
                }, {
                    code: "TRY",
                    name: "Turkey Lira"
                }, {
                    code: "TTD",
                    name: "Trinidad and Tobago Dollar"
                }, {
                    code: "TVD",
                    name: "Tuvalu Dollar"
                }, {
                    code: "TWD",
                    name: "Taiwan New Dollar"
                }, {
                    code: "TZS",
                    name: "Tanzania Shilling"
                }, {
                    code: "UAH",
                    name: "Ukraine Hryvnia"
                }, {
                    code: "UGX",
                    name: "Uganda Shilling"
                }, {
                    code: "USD",
                    name: "United States Dollar"
                }, {
                    code: "UYU",
                    name: "Uruguay Peso"
                }, {
                    code: "UZS",
                    name: "Uzbekistan Som"
                }, {
                    code: "VEF",
                    name: "Venezuela Bolivar"
                }, {
                    code: "VND",
                    name: "Viet Nam Dong"
                }, {
                    code: "VUV",
                    name: "Vanuatu Vatu"
                }, {
                    code: "WST",
                    name: "Samoa Tala"
                }, {
                    code: "XAF",
                    name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC"
                }, {
                    code: "XCD",
                    name: "East Caribbean Dollar"
                }, {
                    code: "XDR",
                    name: "International Monetary Fund (IMF) Special Drawing Rights"
                }, {
                    code: "XOF",
                    name: "Communauté Financière Africaine (BCEAO) Franc"
                }, {
                    code: "XPF",
                    name: "Comptoirs Français du Pacifique (CFP) Franc"
                }, {
                    code: "YER",
                    name: "Yemen Rial"
                }, {
                    code: "ZAR",
                    name: "South Africa Rand"
                }, {
                    code: "ZMW",
                    name: "Zambia Kwacha"
                }, {
                    code: "ZWD",
                    name: "Zimbabwe Dollar"
                }],
                colorNames: ["AliceBlue", "Black", "Navy", "DarkBlue", "MediumBlue", "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen", "Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise", "Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "RebeccaPurple", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", "MediumSlateBlue", "LawnGreen", "Chartreuse", "Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "Ivory", "White", "DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue", "FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed", "Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke", "MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", "DarkOrange", "LightSalmon", "Orange", "LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow"],
                fileExtension: {
                    raster: ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
                    vector: ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
                    "3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
                    document: ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
                },
                timezones: [{
                    name: "Dateline Standard Time",
                    abbr: "DST",
                    offset: -12,
                    isdst: !1,
                    text: "(UTC-12:00) International Date Line West",
                    utc: ["Etc/GMT+12"]
                }, {
                    name: "UTC-11",
                    abbr: "U",
                    offset: -11,
                    isdst: !1,
                    text: "(UTC-11:00) Coordinated Universal Time-11",
                    utc: ["Etc/GMT+11", "Pacific/Midway", "Pacific/Niue", "Pacific/Pago_Pago"]
                }, {
                    name: "Hawaiian Standard Time",
                    abbr: "HST",
                    offset: -10,
                    isdst: !1,
                    text: "(UTC-10:00) Hawaii",
                    utc: ["Etc/GMT+10", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Rarotonga", "Pacific/Tahiti"]
                }, {
                    name: "Alaskan Standard Time",
                    abbr: "AKDT",
                    offset: -8,
                    isdst: !0,
                    text: "(UTC-09:00) Alaska",
                    utc: ["America/Anchorage", "America/Juneau", "America/Nome", "America/Sitka", "America/Yakutat"]
                }, {
                    name: "Pacific Standard Time (Mexico)",
                    abbr: "PDT",
                    offset: -7,
                    isdst: !0,
                    text: "(UTC-08:00) Baja California",
                    utc: ["America/Santa_Isabel"]
                }, {
                    name: "Pacific Standard Time",
                    abbr: "PDT",
                    offset: -7,
                    isdst: !0,
                    text: "(UTC-08:00) Pacific Time (US & Canada)",
                    utc: ["America/Dawson", "America/Los_Angeles", "America/Tijuana", "America/Vancouver", "America/Whitehorse", "PST8PDT"]
                }, {
                    name: "US Mountain Standard Time",
                    abbr: "UMST",
                    offset: -7,
                    isdst: !1,
                    text: "(UTC-07:00) Arizona",
                    utc: ["America/Creston", "America/Dawson_Creek", "America/Hermosillo", "America/Phoenix", "Etc/GMT+7"]
                }, {
                    name: "Mountain Standard Time (Mexico)",
                    abbr: "MDT",
                    offset: -6,
                    isdst: !0,
                    text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                    utc: ["America/Chihuahua", "America/Mazatlan"]
                }, {
                    name: "Mountain Standard Time",
                    abbr: "MDT",
                    offset: -6,
                    isdst: !0,
                    text: "(UTC-07:00) Mountain Time (US & Canada)",
                    utc: ["America/Boise", "America/Cambridge_Bay", "America/Denver", "America/Edmonton", "America/Inuvik", "America/Ojinaga", "America/Yellowknife", "MST7MDT"]
                }, {
                    name: "Central America Standard Time",
                    abbr: "CAST",
                    offset: -6,
                    isdst: !1,
                    text: "(UTC-06:00) Central America",
                    utc: ["America/Belize", "America/Costa_Rica", "America/El_Salvador", "America/Guatemala", "America/Managua", "America/Tegucigalpa", "Etc/GMT+6", "Pacific/Galapagos"]
                }, {
                    name: "Central Standard Time",
                    abbr: "CDT",
                    offset: -5,
                    isdst: !0,
                    text: "(UTC-06:00) Central Time (US & Canada)",
                    utc: ["America/Chicago", "America/Indiana/Knox", "America/Indiana/Tell_City", "America/Matamoros", "America/Menominee", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Rainy_River", "America/Rankin_Inlet", "America/Resolute", "America/Winnipeg", "CST6CDT"]
                }, {
                    name: "Central Standard Time (Mexico)",
                    abbr: "CDT",
                    offset: -5,
                    isdst: !0,
                    text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                    utc: ["America/Bahia_Banderas", "America/Cancun", "America/Merida", "America/Mexico_City", "America/Monterrey"]
                }, {
                    name: "Canada Central Standard Time",
                    abbr: "CCST",
                    offset: -6,
                    isdst: !1,
                    text: "(UTC-06:00) Saskatchewan",
                    utc: ["America/Regina", "America/Swift_Current"]
                }, {
                    name: "SA Pacific Standard Time",
                    abbr: "SPST",
                    offset: -5,
                    isdst: !1,
                    text: "(UTC-05:00) Bogota, Lima, Quito",
                    utc: ["America/Bogota", "America/Cayman", "America/Coral_Harbour", "America/Eirunepe", "America/Guayaquil", "America/Jamaica", "America/Lima", "America/Panama", "America/Rio_Branco", "Etc/GMT+5"]
                }, {
                    name: "Eastern Standard Time",
                    abbr: "EDT",
                    offset: -4,
                    isdst: !0,
                    text: "(UTC-05:00) Eastern Time (US & Canada)",
                    utc: ["America/Detroit", "America/Havana", "America/Indiana/Petersburg", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Iqaluit", "America/Kentucky/Monticello", "America/Louisville", "America/Montreal", "America/Nassau", "America/New_York", "America/Nipigon", "America/Pangnirtung", "America/Port-au-Prince", "America/Thunder_Bay", "America/Toronto", "EST5EDT"]
                }, {
                    name: "US Eastern Standard Time",
                    abbr: "UEDT",
                    offset: -4,
                    isdst: !0,
                    text: "(UTC-05:00) Indiana (East)",
                    utc: ["America/Indiana/Marengo", "America/Indiana/Vevay", "America/Indianapolis"]
                }, {
                    name: "Venezuela Standard Time",
                    abbr: "VST",
                    offset: -4.5,
                    isdst: !1,
                    text: "(UTC-04:30) Caracas",
                    utc: ["America/Caracas"]
                }, {
                    name: "Paraguay Standard Time",
                    abbr: "PST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Asuncion",
                    utc: ["America/Asuncion"]
                }, {
                    name: "Atlantic Standard Time",
                    abbr: "ADT",
                    offset: -3,
                    isdst: !0,
                    text: "(UTC-04:00) Atlantic Time (Canada)",
                    utc: ["America/Glace_Bay", "America/Goose_Bay", "America/Halifax", "America/Moncton", "America/Thule", "Atlantic/Bermuda"]
                }, {
                    name: "Central Brazilian Standard Time",
                    abbr: "CBST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Cuiaba",
                    utc: ["America/Campo_Grande", "America/Cuiaba"]
                }, {
                    name: "SA Western Standard Time",
                    abbr: "SWST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
                    utc: ["America/Anguilla", "America/Antigua", "America/Aruba", "America/Barbados", "America/Blanc-Sablon", "America/Boa_Vista", "America/Curacao", "America/Dominica", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guyana", "America/Kralendijk", "America/La_Paz", "America/Lower_Princes", "America/Manaus", "America/Marigot", "America/Martinique", "America/Montserrat", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Santo_Domingo", "America/St_Barthelemy", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Tortola", "Etc/GMT+4"]
                }, {
                    name: "Pacific SA Standard Time",
                    abbr: "PSST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Santiago",
                    utc: ["America/Santiago", "Antarctica/Palmer"]
                }, {
                    name: "Newfoundland Standard Time",
                    abbr: "NDT",
                    offset: -2.5,
                    isdst: !0,
                    text: "(UTC-03:30) Newfoundland",
                    utc: ["America/St_Johns"]
                }, {
                    name: "E. South America Standard Time",
                    abbr: "ESAST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Brasilia",
                    utc: ["America/Sao_Paulo"]
                }, {
                    name: "Argentina Standard Time",
                    abbr: "AST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Buenos Aires",
                    utc: ["America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Buenos_Aires", "America/Catamarca", "America/Cordoba", "America/Jujuy", "America/Mendoza"]
                }, {
                    name: "SA Eastern Standard Time",
                    abbr: "SEST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Cayenne, Fortaleza",
                    utc: ["America/Araguaina", "America/Belem", "America/Cayenne", "America/Fortaleza", "America/Maceio", "America/Paramaribo", "America/Recife", "America/Santarem", "Antarctica/Rothera", "Atlantic/Stanley", "Etc/GMT+3"]
                }, {
                    name: "Greenland Standard Time",
                    abbr: "GDT",
                    offset: -2,
                    isdst: !0,
                    text: "(UTC-03:00) Greenland",
                    utc: ["America/Godthab"]
                }, {
                    name: "Montevideo Standard Time",
                    abbr: "MST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Montevideo",
                    utc: ["America/Montevideo"]
                }, {
                    name: "Bahia Standard Time",
                    abbr: "BST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Salvador",
                    utc: ["America/Bahia"]
                }, {
                    name: "UTC-02",
                    abbr: "U",
                    offset: -2,
                    isdst: !1,
                    text: "(UTC-02:00) Coordinated Universal Time-02",
                    utc: ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"]
                }, {
                    name: "Mid-Atlantic Standard Time",
                    abbr: "MDT",
                    offset: -1,
                    isdst: !0,
                    text: "(UTC-02:00) Mid-Atlantic - Old"
                }, {
                    name: "Azores Standard Time",
                    abbr: "ADT",
                    offset: 0,
                    isdst: !0,
                    text: "(UTC-01:00) Azores",
                    utc: ["America/Scoresbysund", "Atlantic/Azores"]
                }, {
                    name: "Cape Verde Standard Time",
                    abbr: "CVST",
                    offset: -1,
                    isdst: !1,
                    text: "(UTC-01:00) Cape Verde Is.",
                    utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"]
                }, {
                    name: "Morocco Standard Time",
                    abbr: "MDT",
                    offset: 1,
                    isdst: !0,
                    text: "(UTC) Casablanca",
                    utc: ["Africa/Casablanca", "Africa/El_Aaiun"]
                }, {
                    name: "UTC",
                    abbr: "CUT",
                    offset: 0,
                    isdst: !1,
                    text: "(UTC) Coordinated Universal Time",
                    utc: ["America/Danmarkshavn", "Etc/GMT"]
                }, {
                    name: "GMT Standard Time",
                    abbr: "GDT",
                    offset: 1,
                    isdst: !0,
                    text: "(UTC) Dublin, Edinburgh, Lisbon, London",
                    utc: ["Atlantic/Canary", "Atlantic/Faeroe", "Atlantic/Madeira", "Europe/Dublin", "Europe/Guernsey", "Europe/Isle_of_Man", "Europe/Jersey", "Europe/Lisbon", "Europe/London"]
                }, {
                    name: "Greenwich Standard Time",
                    abbr: "GST",
                    offset: 0,
                    isdst: !1,
                    text: "(UTC) Monrovia, Reykjavik",
                    utc: ["Africa/Abidjan", "Africa/Accra", "Africa/Bamako", "Africa/Banjul", "Africa/Bissau", "Africa/Conakry", "Africa/Dakar", "Africa/Freetown", "Africa/Lome", "Africa/Monrovia", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Sao_Tome", "Atlantic/Reykjavik", "Atlantic/St_Helena"]
                }, {
                    name: "W. Europe Standard Time",
                    abbr: "WEDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
                    utc: ["Arctic/Longyearbyen", "Europe/Amsterdam", "Europe/Andorra", "Europe/Berlin", "Europe/Busingen", "Europe/Gibraltar", "Europe/Luxembourg", "Europe/Malta", "Europe/Monaco", "Europe/Oslo", "Europe/Rome", "Europe/San_Marino", "Europe/Stockholm", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Zurich"]
                }, {
                    name: "Central Europe Standard Time",
                    abbr: "CEDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
                    utc: ["Europe/Belgrade", "Europe/Bratislava", "Europe/Budapest", "Europe/Ljubljana", "Europe/Podgorica", "Europe/Prague", "Europe/Tirane"]
                }, {
                    name: "Romance Standard Time",
                    abbr: "RDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                    utc: ["Africa/Ceuta", "Europe/Brussels", "Europe/Copenhagen", "Europe/Madrid", "Europe/Paris"]
                }, {
                    name: "Central European Standard Time",
                    abbr: "CEDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                    utc: ["Europe/Sarajevo", "Europe/Skopje", "Europe/Warsaw", "Europe/Zagreb"]
                }, {
                    name: "W. Central Africa Standard Time",
                    abbr: "WCAST",
                    offset: 1,
                    isdst: !1,
                    text: "(UTC+01:00) West Central Africa",
                    utc: ["Africa/Algiers", "Africa/Bangui", "Africa/Brazzaville", "Africa/Douala", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Luanda", "Africa/Malabo", "Africa/Ndjamena", "Africa/Niamey", "Africa/Porto-Novo", "Africa/Tunis", "Etc/GMT-1"]
                }, {
                    name: "Namibia Standard Time",
                    abbr: "NST",
                    offset: 1,
                    isdst: !1,
                    text: "(UTC+01:00) Windhoek",
                    utc: ["Africa/Windhoek"]
                }, {
                    name: "GTB Standard Time",
                    abbr: "GDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Athens, Bucharest",
                    utc: ["Asia/Nicosia", "Europe/Athens", "Europe/Bucharest", "Europe/Chisinau"]
                }, {
                    name: "Middle East Standard Time",
                    abbr: "MEDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Beirut",
                    utc: ["Asia/Beirut"]
                }, {
                    name: "Egypt Standard Time",
                    abbr: "EST",
                    offset: 2,
                    isdst: !1,
                    text: "(UTC+02:00) Cairo",
                    utc: ["Africa/Cairo"]
                }, {
                    name: "Syria Standard Time",
                    abbr: "SDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Damascus",
                    utc: ["Asia/Damascus"]
                }, {
                    name: "E. Europe Standard Time",
                    abbr: "EEDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) E. Europe"
                }, {
                    name: "South Africa Standard Time",
                    abbr: "SAST",
                    offset: 2,
                    isdst: !1,
                    text: "(UTC+02:00) Harare, Pretoria",
                    utc: ["Africa/Blantyre", "Africa/Bujumbura", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Kigali", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Etc/GMT-2"]
                }, {
                    name: "FLE Standard Time",
                    abbr: "FDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
                    utc: ["Europe/Helsinki", "Europe/Kiev", "Europe/Mariehamn", "Europe/Riga", "Europe/Sofia", "Europe/Tallinn", "Europe/Uzhgorod", "Europe/Vilnius", "Europe/Zaporozhye"]
                }, {
                    name: "Turkey Standard Time",
                    abbr: "TDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Istanbul",
                    utc: ["Europe/Istanbul"]
                }, {
                    name: "Israel Standard Time",
                    abbr: "JDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Jerusalem",
                    utc: ["Asia/Jerusalem"]
                }, {
                    name: "Libya Standard Time",
                    abbr: "LST",
                    offset: 2,
                    isdst: !1,
                    text: "(UTC+02:00) Tripoli",
                    utc: ["Africa/Tripoli"]
                }, {
                    name: "Jordan Standard Time",
                    abbr: "JST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Amman",
                    utc: ["Asia/Amman"]
                }, {
                    name: "Arabic Standard Time",
                    abbr: "AST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Baghdad",
                    utc: ["Asia/Baghdad"]
                }, {
                    name: "Kaliningrad Standard Time",
                    abbr: "KST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Kaliningrad, Minsk",
                    utc: ["Europe/Kaliningrad", "Europe/Minsk"]
                }, {
                    name: "Arab Standard Time",
                    abbr: "AST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Kuwait, Riyadh",
                    utc: ["Asia/Aden", "Asia/Bahrain", "Asia/Kuwait", "Asia/Qatar", "Asia/Riyadh"]
                }, {
                    name: "E. Africa Standard Time",
                    abbr: "EAST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Nairobi",
                    utc: ["Africa/Addis_Ababa", "Africa/Asmera", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Mogadishu", "Africa/Nairobi", "Antarctica/Syowa", "Etc/GMT-3", "Indian/Antananarivo", "Indian/Comoro", "Indian/Mayotte"]
                }, {
                    name: "Iran Standard Time",
                    abbr: "IDT",
                    offset: 4.5,
                    isdst: !0,
                    text: "(UTC+03:30) Tehran",
                    utc: ["Asia/Tehran"]
                }, {
                    name: "Arabian Standard Time",
                    abbr: "AST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Abu Dhabi, Muscat",
                    utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"]
                }, {
                    name: "Azerbaijan Standard Time",
                    abbr: "ADT",
                    offset: 5,
                    isdst: !0,
                    text: "(UTC+04:00) Baku",
                    utc: ["Asia/Baku"]
                }, {
                    name: "Russian Standard Time",
                    abbr: "RST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
                    utc: ["Europe/Moscow", "Europe/Samara", "Europe/Simferopol", "Europe/Volgograd"]
                }, {
                    name: "Mauritius Standard Time",
                    abbr: "MST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Port Louis",
                    utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"]
                }, {
                    name: "Georgian Standard Time",
                    abbr: "GST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Tbilisi",
                    utc: ["Asia/Tbilisi"]
                }, {
                    name: "Caucasus Standard Time",
                    abbr: "CST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Yerevan",
                    utc: ["Asia/Yerevan"]
                }, {
                    name: "Afghanistan Standard Time",
                    abbr: "AST",
                    offset: 4.5,
                    isdst: !1,
                    text: "(UTC+04:30) Kabul",
                    utc: ["Asia/Kabul"]
                }, {
                    name: "West Asia Standard Time",
                    abbr: "WAST",
                    offset: 5,
                    isdst: !1,
                    text: "(UTC+05:00) Ashgabat, Tashkent",
                    utc: ["Antarctica/Mawson", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Dushanbe", "Asia/Oral", "Asia/Samarkand", "Asia/Tashkent", "Etc/GMT-5", "Indian/Kerguelen", "Indian/Maldives"]
                }, {
                    name: "Pakistan Standard Time",
                    abbr: "PST",
                    offset: 5,
                    isdst: !1,
                    text: "(UTC+05:00) Islamabad, Karachi",
                    utc: ["Asia/Karachi"]
                }, {
                    name: "India Standard Time",
                    abbr: "IST",
                    offset: 5.5,
                    isdst: !1,
                    text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                    utc: ["Asia/Calcutta"]
                }, {
                    name: "Sri Lanka Standard Time",
                    abbr: "SLST",
                    offset: 5.5,
                    isdst: !1,
                    text: "(UTC+05:30) Sri Jayawardenepura",
                    utc: ["Asia/Colombo"]
                }, {
                    name: "Nepal Standard Time",
                    abbr: "NST",
                    offset: 5.75,
                    isdst: !1,
                    text: "(UTC+05:45) Kathmandu",
                    utc: ["Asia/Katmandu"]
                }, {
                    name: "Central Asia Standard Time",
                    abbr: "CAST",
                    offset: 6,
                    isdst: !1,
                    text: "(UTC+06:00) Astana",
                    utc: ["Antarctica/Vostok", "Asia/Almaty", "Asia/Bishkek", "Asia/Qyzylorda", "Asia/Urumqi", "Etc/GMT-6", "Indian/Chagos"]
                }, {
                    name: "Bangladesh Standard Time",
                    abbr: "BST",
                    offset: 6,
                    isdst: !1,
                    text: "(UTC+06:00) Dhaka",
                    utc: ["Asia/Dhaka", "Asia/Thimphu"]
                }, {
                    name: "Ekaterinburg Standard Time",
                    abbr: "EST",
                    offset: 6,
                    isdst: !1,
                    text: "(UTC+06:00) Ekaterinburg",
                    utc: ["Asia/Yekaterinburg"]
                }, {
                    name: "Myanmar Standard Time",
                    abbr: "MST",
                    offset: 6.5,
                    isdst: !1,
                    text: "(UTC+06:30) Yangon (Rangoon)",
                    utc: ["Asia/Rangoon", "Indian/Cocos"]
                }, {
                    name: "SE Asia Standard Time",
                    abbr: "SAST",
                    offset: 7,
                    isdst: !1,
                    text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                    utc: ["Antarctica/Davis", "Asia/Bangkok", "Asia/Hovd", "Asia/Jakarta", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Saigon", "Asia/Vientiane", "Etc/GMT-7", "Indian/Christmas"]
                }, {
                    name: "N. Central Asia Standard Time",
                    abbr: "NCAST",
                    offset: 7,
                    isdst: !1,
                    text: "(UTC+07:00) Novosibirsk",
                    utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"]
                }, {
                    name: "China Standard Time",
                    abbr: "CST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
                    utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"]
                }, {
                    name: "North Asia Standard Time",
                    abbr: "NAST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Krasnoyarsk",
                    utc: ["Asia/Krasnoyarsk"]
                }, {
                    name: "Singapore Standard Time",
                    abbr: "MPST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Kuala Lumpur, Singapore",
                    utc: ["Asia/Brunei", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Makassar", "Asia/Manila", "Asia/Singapore", "Etc/GMT-8"]
                }, {
                    name: "W. Australia Standard Time",
                    abbr: "WAST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Perth",
                    utc: ["Antarctica/Casey", "Australia/Perth"]
                }, {
                    name: "Taipei Standard Time",
                    abbr: "TST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Taipei",
                    utc: ["Asia/Taipei"]
                }, {
                    name: "Ulaanbaatar Standard Time",
                    abbr: "UST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Ulaanbaatar",
                    utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"]
                }, {
                    name: "North Asia East Standard Time",
                    abbr: "NAEST",
                    offset: 9,
                    isdst: !1,
                    text: "(UTC+09:00) Irkutsk",
                    utc: ["Asia/Irkutsk"]
                }, {
                    name: "Tokyo Standard Time",
                    abbr: "TST",
                    offset: 9,
                    isdst: !1,
                    text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
                    utc: ["Asia/Dili", "Asia/Jayapura", "Asia/Tokyo", "Etc/GMT-9", "Pacific/Palau"]
                }, {
                    name: "Korea Standard Time",
                    abbr: "KST",
                    offset: 9,
                    isdst: !1,
                    text: "(UTC+09:00) Seoul",
                    utc: ["Asia/Pyongyang", "Asia/Seoul"]
                }, {
                    name: "Cen. Australia Standard Time",
                    abbr: "CAST",
                    offset: 9.5,
                    isdst: !1,
                    text: "(UTC+09:30) Adelaide",
                    utc: ["Australia/Adelaide", "Australia/Broken_Hill"]
                }, {
                    name: "AUS Central Standard Time",
                    abbr: "ACST",
                    offset: 9.5,
                    isdst: !1,
                    text: "(UTC+09:30) Darwin",
                    utc: ["Australia/Darwin"]
                }, {
                    name: "E. Australia Standard Time",
                    abbr: "EAST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Brisbane",
                    utc: ["Australia/Brisbane", "Australia/Lindeman"]
                }, {
                    name: "AUS Eastern Standard Time",
                    abbr: "AEST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Canberra, Melbourne, Sydney",
                    utc: ["Australia/Melbourne", "Australia/Sydney"]
                }, {
                    name: "West Pacific Standard Time",
                    abbr: "WPST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Guam, Port Moresby",
                    utc: ["Antarctica/DumontDUrville", "Etc/GMT-10", "Pacific/Guam", "Pacific/Port_Moresby", "Pacific/Saipan", "Pacific/Truk"]
                }, {
                    name: "Tasmania Standard Time",
                    abbr: "TST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Hobart",
                    utc: ["Australia/Currie", "Australia/Hobart"]
                }, {
                    name: "Yakutsk Standard Time",
                    abbr: "YST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Yakutsk",
                    utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"]
                }, {
                    name: "Central Pacific Standard Time",
                    abbr: "CPST",
                    offset: 11,
                    isdst: !1,
                    text: "(UTC+11:00) Solomon Is., New Caledonia",
                    utc: ["Antarctica/Macquarie", "Etc/GMT-11", "Pacific/Efate", "Pacific/Guadalcanal", "Pacific/Kosrae", "Pacific/Noumea", "Pacific/Ponape"]
                }, {
                    name: "Vladivostok Standard Time",
                    abbr: "VST",
                    offset: 11,
                    isdst: !1,
                    text: "(UTC+11:00) Vladivostok",
                    utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"]
                }, {
                    name: "New Zealand Standard Time",
                    abbr: "NZST",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Auckland, Wellington",
                    utc: ["Antarctica/McMurdo", "Pacific/Auckland"]
                }, {
                    name: "UTC+12",
                    abbr: "U",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Coordinated Universal Time+12",
                    utc: ["Etc/GMT-12", "Pacific/Funafuti", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Nauru", "Pacific/Tarawa", "Pacific/Wake", "Pacific/Wallis"]
                }, {
                    name: "Fiji Standard Time",
                    abbr: "FST",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Fiji",
                    utc: ["Pacific/Fiji"]
                }, {
                    name: "Magadan Standard Time",
                    abbr: "MST",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Magadan",
                    utc: ["Asia/Anadyr", "Asia/Kamchatka", "Asia/Magadan", "Asia/Srednekolymsk"]
                }, {
                    name: "Kamchatka Standard Time",
                    abbr: "KDT",
                    offset: 13,
                    isdst: !0,
                    text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
                }, {
                    name: "Tonga Standard Time",
                    abbr: "TST",
                    offset: 13,
                    isdst: !1,
                    text: "(UTC+13:00) Nuku'alofa",
                    utc: ["Etc/GMT-13", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Tongatapu"]
                }, {
                    name: "Samoa Standard Time",
                    abbr: "SST",
                    offset: 13,
                    isdst: !1,
                    text: "(UTC+13:00) Samoa",
                    utc: ["Pacific/Apia"]
                }],
                profession: ["Airline Pilot", "Academic Team", "Accountant", "Account Executive", "Actor", "Actuary", "Acquisition Analyst", "Administrative Asst.", "Administrative Analyst", "Administrator", "Advertising Director", "Aerospace Engineer", "Agent", "Agricultural Inspector", "Agricultural Scientist", "Air Traffic Controller", "Animal Trainer", "Anthropologist", "Appraiser", "Architect", "Art Director", "Artist", "Astronomer", "Athletic Coach", "Auditor", "Author", "Baker", "Banker", "Bankruptcy Attorney", "Benefits Manager", "Biologist", "Bio-feedback Specialist", "Biomedical Engineer", "Biotechnical Researcher", "Broadcaster", "Broker", "Building Manager", "Building Contractor", "Building Inspector", "Business Analyst", "Business Planner", "Business Manager", "Buyer", "Call Center Manager", "Career Counselor", "Cash Manager", "Ceramic Engineer", "Chief Executive Officer", "Chief Operation Officer", "Chef", "Chemical Engineer", "Chemist", "Child Care Manager", "Chief Medical Officer", "Chiropractor", "Cinematographer", "City Housing Manager", "City Manager", "Civil Engineer", "Claims Manager", "Clinical Research Assistant", "Collections Manager.", "Compliance Manager", "Comptroller", "Computer Manager", "Commercial Artist", "Communications Affairs Director", "Communications Director", "Communications Engineer", "Compensation Analyst", "Computer Programmer", "Computer Ops. Manager", "Computer Engineer", "Computer Operator", "Computer Graphics Specialist", "Construction Engineer", "Construction Manager", "Consultant", "Consumer Relations Manager", "Contract Administrator", "Copyright Attorney", "Copywriter", "Corporate Planner", "Corrections Officer", "Cosmetologist", "Credit Analyst", "Cruise Director", "Chief Information Officer", "Chief Technology Officer", "Customer Service Manager", "Cryptologist", "Dancer", "Data Security Manager", "Database Manager", "Day Care Instructor", "Dentist", "Designer", "Design Engineer", "Desktop Publisher", "Developer", "Development Officer", "Diamond Merchant", "Dietitian", "Direct Marketer", "Director", "Distribution Manager", "Diversity Manager", "Economist", "EEO Compliance Manager", "Editor", "Education Adminator", "Electrical Engineer", "Electro Optical Engineer", "Electronics Engineer", "Embassy Management", "Employment Agent", "Engineer Technician", "Entrepreneur", "Environmental Analyst", "Environmental Attorney", "Environmental Engineer", "Environmental Specialist", "Escrow Officer", "Estimator", "Executive Assistant", "Executive Director", "Executive Recruiter", "Facilities Manager", "Family Counselor", "Fashion Events Manager", "Fashion Merchandiser", "Fast Food Manager", "Film Producer", "Film Production Assistant", "Financial Analyst", "Financial Planner", "Financier", "Fine Artist", "Wildlife Specialist", "Fitness Consultant", "Flight Attendant", "Flight Engineer", "Floral Designer", "Food & Beverage Director", "Food Service Manager", "Forestry Technician", "Franchise Management", "Franchise Sales", "Fraud Investigator", "Freelance Writer", "Fund Raiser", "General Manager", "Geologist", "General Counsel", "Geriatric Specialist", "Gerontologist", "Glamour Photographer", "Golf Club Manager", "Gourmet Chef", "Graphic Designer", "Grounds Keeper", "Hazardous Waste Manager", "Health Care Manager", "Health Therapist", "Health Service Administrator", "Hearing Officer", "Home Economist", "Horticulturist", "Hospital Administrator", "Hotel Manager", "Human Resources Manager", "Importer", "Industrial Designer", "Industrial Engineer", "Information Director", "Inside Sales", "Insurance Adjuster", "Interior Decorator", "Internal Controls Director", "International Acct.", "International Courier", "International Lawyer", "Interpreter", "Investigator", "Investment Banker", "Investment Manager", "IT Architect", "IT Project Manager", "IT Systems Analyst", "Jeweler", "Joint Venture Manager", "Journalist", "Labor Negotiator", "Labor Organizer", "Labor Relations Manager", "Lab Services Director", "Lab Technician", "Land Developer", "Landscape Architect", "Law Enforcement Officer", "Lawyer", "Lead Software Engineer", "Lead Software Test Engineer", "Leasing Manager", "Legal Secretary", "Library Manager", "Litigation Attorney", "Loan Officer", "Lobbyist", "Logistics Manager", "Maintenance Manager", "Management Consultant", "Managed Care Director", "Managing Partner", "Manufacturing Director", "Manpower Planner", "Marine Biologist", "Market Res. Analyst", "Marketing Director", "Materials Manager", "Mathematician", "Membership Chairman", "Mechanic", "Mechanical Engineer", "Media Buyer", "Medical Investor", "Medical Secretary", "Medical Technician", "Mental Health Counselor", "Merchandiser", "Metallurgical Engineering", "Meteorologist", "Microbiologist", "MIS Manager", "Motion Picture Director", "Multimedia Director", "Musician", "Network Administrator", "Network Specialist", "Network Operator", "New Product Manager", "Novelist", "Nuclear Engineer", "Nuclear Specialist", "Nutritionist", "Nursing Administrator", "Occupational Therapist", "Oceanographer", "Office Manager", "Operations Manager", "Operations Research Director", "Optical Technician", "Optometrist", "Organizational Development Manager", "Outplacement Specialist", "Paralegal", "Park Ranger", "Patent Attorney", "Payroll Specialist", "Personnel Specialist", "Petroleum Engineer", "Pharmacist", "Photographer", "Physical Therapist", "Physician", "Physician Assistant", "Physicist", "Planning Director", "Podiatrist", "Political Analyst", "Political Scientist", "Politician", "Portfolio Manager", "Preschool Management", "Preschool Teacher", "Principal", "Private Banker", "Private Investigator", "Probation Officer", "Process Engineer", "Producer", "Product Manager", "Product Engineer", "Production Engineer", "Production Planner", "Professional Athlete", "Professional Coach", "Professor", "Project Engineer", "Project Manager", "Program Manager", "Property Manager", "Public Administrator", "Public Safety Director", "PR Specialist", "Publisher", "Purchasing Agent", "Publishing Director", "Quality Assurance Specialist", "Quality Control Engineer", "Quality Control Inspector", "Radiology Manager", "Railroad Engineer", "Real Estate Broker", "Recreational Director", "Recruiter", "Redevelopment Specialist", "Regulatory Affairs Manager", "Registered Nurse", "Rehabilitation Counselor", "Relocation Manager", "Reporter", "Research Specialist", "Restaurant Manager", "Retail Store Manager", "Risk Analyst", "Safety Engineer", "Sales Engineer", "Sales Trainer", "Sales Promotion Manager", "Sales Representative", "Sales Manager", "Service Manager", "Sanitation Engineer", "Scientific Programmer", "Scientific Writer", "Securities Analyst", "Security Consultant", "Security Director", "Seminar Presenter", "Ship's Officer", "Singer", "Social Director", "Social Program Planner", "Social Research", "Social Scientist", "Social Worker", "Sociologist", "Software Developer", "Software Engineer", "Software Test Engineer", "Soil Scientist", "Special Events Manager", "Special Education Teacher", "Special Projects Director", "Speech Pathologist", "Speech Writer", "Sports Event Manager", "Statistician", "Store Manager", "Strategic Alliance Director", "Strategic Planning Director", "Stress Reduction Specialist", "Stockbroker", "Surveyor", "Structural Engineer", "Superintendent", "Supply Chain Director", "System Engineer", "Systems Analyst", "Systems Programmer", "System Administrator", "Tax Specialist", "Teacher", "Technical Support Specialist", "Technical Illustrator", "Technical Writer", "Technology Director", "Telecom Analyst", "Telemarketer", "Theatrical Director", "Title Examiner", "Tour Escort", "Tour Guide Director", "Traffic Manager", "Trainer Translator", "Transportation Manager", "Travel Agent", "Treasurer", "TV Programmer", "Underwriter", "Union Representative", "University Administrator", "University Dean", "Urban Planner", "Veterinarian", "Vendor Relations Director", "Viticulturist", "Warehouse Manager"]
            },
            v = Object.prototype.hasOwnProperty,
            g = Object.keys || function(e) {
                var t = [];
                for (var n in e) v.call(e, n) && t.push(n);
                return t
            };
        e.prototype.get = function(e) {
            return o(m[e])
        }, e.prototype.mac_address = function(e) {
            e = t(e), e.separator || (e.separator = e.networkVersion ? "." : ":");
            var n = "ABCDEF1234567890",
                a = "";
            return a = e.networkVersion ? this.n(this.string, 3, {
                pool: n,
                length: 4
            }).join(e.separator) : this.n(this.string, 6, {
                pool: n,
                length: 2
            }).join(e.separator)
        }, e.prototype.normal = function(e) {
            if (e = t(e, {
                    mean: 0,
                    dev: 1,
                    pool: []
                }), n(e.pool.constructor !== Array, "Chance: The pool option must be a valid array."), e.pool.length > 0) return this.normal_pool(e);
            var a, i, r, o, s = e.mean,
                l = e.dev;
            do i = 2 * this.random() - 1, r = 2 * this.random() - 1, a = i * i + r * r; while (a >= 1);
            return o = i * Math.sqrt(-2 * Math.log(a) / a), l * o + s
        }, e.prototype.normal_pool = function(e) {
            var t = 0;
            do {
                var n = Math.round(this.normal({
                    mean: e.mean,
                    dev: e.dev
                }));
                if (n < e.pool.length && n >= 0) return e.pool[n];
                t++
            } while (t < 100);
            throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.")
        }, e.prototype.radio = function(e) {
            e = t(e, {
                side: "?"
            });
            var n = "";
            switch (e.side.toLowerCase()) {
                case "east":
                case "e":
                    n = "W";
                    break;
                case "west":
                case "w":
                    n = "K";
                    break;
                default:
                    n = this.character({
                        pool: "KW"
                    })
            }
            return n + this.character({
                alpha: !0,
                casing: "upper"
            }) + this.character({
                alpha: !0,
                casing: "upper"
            }) + this.character({
                alpha: !0,
                casing: "upper"
            })
        }, e.prototype.set = function(e, t) {
            "string" == typeof e ? m[e] = t : m = o(e, m)
        }, e.prototype.tv = function(e) {
            return this.radio(e)
        }, e.prototype.cnpj = function() {
            var e = this.n(this.natural, 8, {
                    max: 9
                }),
                t = 2 + 6 * e[7] + 7 * e[6] + 8 * e[5] + 9 * e[4] + 2 * e[3] + 3 * e[2] + 4 * e[1] + 5 * e[0];
            t = 11 - t % 11, t >= 10 && (t = 0);
            var n = 2 * t + 3 + 7 * e[7] + 8 * e[6] + 9 * e[5] + 2 * e[4] + 3 * e[3] + 4 * e[2] + 5 * e[1] + 6 * e[0];
            return n = 11 - n % 11, n >= 10 && (n = 0), "" + e[0] + e[1] + "." + e[2] + e[3] + e[4] + "." + e[5] + e[6] + e[7] + "/0001-" + t + n
        }, e.prototype.mersenne_twister = function(e) {
            return new b(e)
        }, e.prototype.blueimp_md5 = function() {
            return new y
        };
        var b = function(e) {
            void 0 === e && (e = Math.floor(Math.random() * Math.pow(10, 13))), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(e)
        };
        b.prototype.init_genrand = function(e) {
            for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (1812433253 * ((4294901760 & e) >>> 16) << 16) + 1812433253 * (65535 & e) + this.mti, this.mt[this.mti] >>>= 0
        }, b.prototype.init_by_array = function(e, t) {
            var n, a, i = 1,
                r = 0;
            for (this.init_genrand(19650218), n = this.N > t ? this.N : t; n; n--) a = this.mt[i - 1] ^ this.mt[i - 1] >>> 30, this.mt[i] = (this.mt[i] ^ (1664525 * ((4294901760 & a) >>> 16) << 16) + 1664525 * (65535 & a)) + e[r] + r, this.mt[i] >>>= 0, i++, r++, i >= this.N && (this.mt[0] = this.mt[this.N - 1], i = 1), r >= t && (r = 0);
            for (n = this.N - 1; n; n--) a = this.mt[i - 1] ^ this.mt[i - 1] >>> 30, this.mt[i] = (this.mt[i] ^ (1566083941 * ((4294901760 & a) >>> 16) << 16) + 1566083941 * (65535 & a)) - i, this.mt[i] >>>= 0, i++, i >= this.N && (this.mt[0] = this.mt[this.N - 1], i = 1);
            this.mt[0] = 2147483648
        }, b.prototype.genrand_int32 = function() {
            var e, t = new Array(0, this.MATRIX_A);
            if (this.mti >= this.N) {
                var n;
                for (this.mti === this.N + 1 && this.init_genrand(5489), n = 0; n < this.N - this.M; n++) e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + this.M] ^ e >>> 1 ^ t[1 & e];
                for (; n < this.N - 1; n++) e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + (this.M - this.N)] ^ e >>> 1 ^ t[1 & e];
                e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ t[1 & e], this.mti = 0
            }
            return e = this.mt[this.mti++], e ^= e >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, e >>> 0
        }, b.prototype.genrand_int31 = function() {
            return this.genrand_int32() >>> 1
        }, b.prototype.genrand_real1 = function() {
            return this.genrand_int32() * (1 / 4294967295)
        }, b.prototype.random = function() {
            return this.genrand_int32() * (1 / 4294967296)
        }, b.prototype.genrand_real3 = function() {
            return (this.genrand_int32() + .5) * (1 / 4294967296)
        }, b.prototype.genrand_res53 = function() {
            var e = this.genrand_int32() >>> 5,
                t = this.genrand_int32() >>> 6;
            return (67108864 * e + t) * (1 / 9007199254740992)
        };
        var y = function() {};
        y.prototype.VERSION = "1.0.1", y.prototype.safe_add = function(e, t) {
            var n = (65535 & e) + (65535 & t),
                a = (e >> 16) + (t >> 16) + (n >> 16);
            return a << 16 | 65535 & n
        }, y.prototype.bit_roll = function(e, t) {
            return e << t | e >>> 32 - t
        }, y.prototype.md5_cmn = function(e, t, n, a, i, r) {
            return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(t, e), this.safe_add(a, r)), i), n)
        }, y.prototype.md5_ff = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(t & n | ~t & a, e, t, i, r, o)
        }, y.prototype.md5_gg = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(t & a | n & ~a, e, t, i, r, o)
        }, y.prototype.md5_hh = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(t ^ n ^ a, e, t, i, r, o)
        }, y.prototype.md5_ii = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(n ^ (t | ~a), e, t, i, r, o)
        }, y.prototype.binl_md5 = function(e, t) {
            e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
            var n, a, i, r, o, s = 1732584193,
                l = -271733879,
                c = -1732584194,
                u = 271733878;
            for (n = 0; n < e.length; n += 16) a = s, i = l, r = c, o = u, s = this.md5_ff(s, l, c, u, e[n], 7, -680876936), u = this.md5_ff(u, s, l, c, e[n + 1], 12, -389564586), c = this.md5_ff(c, u, s, l, e[n + 2], 17, 606105819), l = this.md5_ff(l, c, u, s, e[n + 3], 22, -1044525330), s = this.md5_ff(s, l, c, u, e[n + 4], 7, -176418897), u = this.md5_ff(u, s, l, c, e[n + 5], 12, 1200080426), c = this.md5_ff(c, u, s, l, e[n + 6], 17, -1473231341), l = this.md5_ff(l, c, u, s, e[n + 7], 22, -45705983), s = this.md5_ff(s, l, c, u, e[n + 8], 7, 1770035416), u = this.md5_ff(u, s, l, c, e[n + 9], 12, -1958414417), c = this.md5_ff(c, u, s, l, e[n + 10], 17, -42063), l = this.md5_ff(l, c, u, s, e[n + 11], 22, -1990404162), s = this.md5_ff(s, l, c, u, e[n + 12], 7, 1804603682), u = this.md5_ff(u, s, l, c, e[n + 13], 12, -40341101), c = this.md5_ff(c, u, s, l, e[n + 14], 17, -1502002290), l = this.md5_ff(l, c, u, s, e[n + 15], 22, 1236535329), s = this.md5_gg(s, l, c, u, e[n + 1], 5, -165796510), u = this.md5_gg(u, s, l, c, e[n + 6], 9, -1069501632), c = this.md5_gg(c, u, s, l, e[n + 11], 14, 643717713), l = this.md5_gg(l, c, u, s, e[n], 20, -373897302), s = this.md5_gg(s, l, c, u, e[n + 5], 5, -701558691), u = this.md5_gg(u, s, l, c, e[n + 10], 9, 38016083), c = this.md5_gg(c, u, s, l, e[n + 15], 14, -660478335), l = this.md5_gg(l, c, u, s, e[n + 4], 20, -405537848), s = this.md5_gg(s, l, c, u, e[n + 9], 5, 568446438), u = this.md5_gg(u, s, l, c, e[n + 14], 9, -1019803690), c = this.md5_gg(c, u, s, l, e[n + 3], 14, -187363961), l = this.md5_gg(l, c, u, s, e[n + 8], 20, 1163531501), s = this.md5_gg(s, l, c, u, e[n + 13], 5, -1444681467), u = this.md5_gg(u, s, l, c, e[n + 2], 9, -51403784), c = this.md5_gg(c, u, s, l, e[n + 7], 14, 1735328473), l = this.md5_gg(l, c, u, s, e[n + 12], 20, -1926607734), s = this.md5_hh(s, l, c, u, e[n + 5], 4, -378558), u = this.md5_hh(u, s, l, c, e[n + 8], 11, -2022574463), c = this.md5_hh(c, u, s, l, e[n + 11], 16, 1839030562), l = this.md5_hh(l, c, u, s, e[n + 14], 23, -35309556), s = this.md5_hh(s, l, c, u, e[n + 1], 4, -1530992060), u = this.md5_hh(u, s, l, c, e[n + 4], 11, 1272893353), c = this.md5_hh(c, u, s, l, e[n + 7], 16, -155497632), l = this.md5_hh(l, c, u, s, e[n + 10], 23, -1094730640), s = this.md5_hh(s, l, c, u, e[n + 13], 4, 681279174), u = this.md5_hh(u, s, l, c, e[n], 11, -358537222), c = this.md5_hh(c, u, s, l, e[n + 3], 16, -722521979), l = this.md5_hh(l, c, u, s, e[n + 6], 23, 76029189), s = this.md5_hh(s, l, c, u, e[n + 9], 4, -640364487), u = this.md5_hh(u, s, l, c, e[n + 12], 11, -421815835), c = this.md5_hh(c, u, s, l, e[n + 15], 16, 530742520), l = this.md5_hh(l, c, u, s, e[n + 2], 23, -995338651), s = this.md5_ii(s, l, c, u, e[n], 6, -198630844), u = this.md5_ii(u, s, l, c, e[n + 7], 10, 1126891415), c = this.md5_ii(c, u, s, l, e[n + 14], 15, -1416354905), l = this.md5_ii(l, c, u, s, e[n + 5], 21, -57434055), s = this.md5_ii(s, l, c, u, e[n + 12], 6, 1700485571), u = this.md5_ii(u, s, l, c, e[n + 3], 10, -1894986606), c = this.md5_ii(c, u, s, l, e[n + 10], 15, -1051523), l = this.md5_ii(l, c, u, s, e[n + 1], 21, -2054922799), s = this.md5_ii(s, l, c, u, e[n + 8], 6, 1873313359), u = this.md5_ii(u, s, l, c, e[n + 15], 10, -30611744), c = this.md5_ii(c, u, s, l, e[n + 6], 15, -1560198380), l = this.md5_ii(l, c, u, s, e[n + 13], 21, 1309151649), s = this.md5_ii(s, l, c, u, e[n + 4], 6, -145523070), u = this.md5_ii(u, s, l, c, e[n + 11], 10, -1120210379), c = this.md5_ii(c, u, s, l, e[n + 2], 15, 718787259), l = this.md5_ii(l, c, u, s, e[n + 9], 21, -343485551), s = this.safe_add(s, a), l = this.safe_add(l, i), c = this.safe_add(c, r), u = this.safe_add(u, o);
            return [s, l, c, u]
        }, y.prototype.binl2rstr = function(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }, y.prototype.rstr2binl = function(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }, y.prototype.rstr_md5 = function(e) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
        }, y.prototype.rstr_hmac_md5 = function(e, t) {
            var n, a, i = this.rstr2binl(e),
                r = [],
                o = [];
            for (r[15] = o[15] = void 0, i.length > 16 && (i = this.binl_md5(i, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ i[n], o[n] = 1549556828 ^ i[n];
            return a = this.binl_md5(r.concat(this.rstr2binl(t)), 512 + 8 * t.length), this.binl2rstr(this.binl_md5(o.concat(a), 640))
        }, y.prototype.rstr2hex = function(e) {
            var t, n, a = "0123456789abcdef",
                i = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
            return i
        }, y.prototype.str2rstr_utf8 = function(e) {
            return unescape(encodeURIComponent(e))
        }, y.prototype.raw_md5 = function(e) {
            return this.rstr_md5(this.str2rstr_utf8(e))
        }, y.prototype.hex_md5 = function(e) {
            return this.rstr2hex(this.raw_md5(e))
        }, y.prototype.raw_hmac_md5 = function(e, t) {
            return this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t))
        }, y.prototype.hex_hmac_md5 = function(e, t) {
            return this.rstr2hex(this.raw_hmac_md5(e, t))
        }, y.prototype.md5 = function(e, t, n) {
            return t ? n ? this.raw_hmac_md5(t, e) : this.hex_hmac_md5(t, e) : n ? this.raw_md5(e) : this.hex_md5(e)
        }, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.Chance = e), "function" == typeof define && define.amd && define([], function() {
            return e
        }), "undefined" != typeof importScripts && (chance = new e), "object" == typeof window && "object" == typeof window.document && (window.Chance = e, window.chance = new e)
    }(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            a = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || e(a).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.alert");
            i || n.data("bs.alert", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        a = function(t) {
            e(t).on("click", n, this.close)
        };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this),
            r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e("#" === r ? [] : r);
        t && t.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = a, e.fn.alert.noConflict = function() {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", n, a.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.button"),
                r = "object" == typeof t && t;
            i || a.data("bs.button", i = new n(this, r)), "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }
    var n = function(t, a) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, a), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            a = this.$element,
            i = a.is("input") ? "val" : "html",
            r = a.data();
        t += "Text", null == r.resetText && a.data("resetText", a[i]()), setTimeout(e.proxy(function() {
            a[i](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, a.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, a.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var a = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = a, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var a = e(n.target).closest(".btn");
        t.call(a, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), a.is("input,button") ? a.trigger("focus") : a.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t),
                o = "string" == typeof t ? t : r.slide;
            i || a.data("bs.carousel", i = new n(this, r)), "number" == typeof t ? i.to(t) : o ? i[o]() : r.interval && i.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            a = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (a && !this.options.wrap) return t;
        var i = "prev" == e ? -1 : 1,
            r = (n + i) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(t, a) {
        var i = this.$element.find(".item.active"),
            r = a || this.getItemForDirection(t, i),
            o = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one("bsTransitionEnd", function() {
                r.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), o && this.cycle(), this
        }
    };
    var a = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = a, this
    };
    var i = function(n) {
        var a, i = e(this),
            r = e(i.attr("data-target") || (a = i.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var o = e.extend({}, r.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (o.interval = !1), t.call(r, o), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, a = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(a)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.collapse"),
                r = e.extend({}, a.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || n.data("bs.collapse", i = new a(this, r)), "string" == typeof t && i[t]()
        })
    }
    var a = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, a.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
        toggle: !0
    }, a.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, a.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, a.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, a.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, a) {
            var i = e(a);
            this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
    }, a.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = a, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
        var i = e(this);
        i.attr("data-target") || a.preventDefault();
        var r = t(i),
            o = r.data("bs.collapse"),
            s = o ? "toggle" : i.data();
        n.call(r, s)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = n && e(n);
        return a && a.length ? a : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(i).remove(), e(r).each(function() {
            var a = e(this),
                i = t(a),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", r)),
                n.isDefaultPrevented() || (a.attr("aria-expanded", "false"), i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function a(t) {
        return this.each(function() {
            var n = e(this),
                a = n.data("bs.dropdown");
            a || n.data("bs.dropdown", a = new o(this)), "string" == typeof t && a[t].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.7", o.prototype.toggle = function(a) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var r = t(i),
                o = r.hasClass("open");
            if (n(), !o) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(a = e.Event("show.bs.dropdown", s)), a.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, o.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var a = e(this);
            if (n.preventDefault(), n.stopPropagation(), !a.is(".disabled, :disabled")) {
                var i = t(a),
                    o = i.hasClass("open");
                if (!o && 27 != n.which || o && 27 == n.which) return 27 == n.which && i.find(r).trigger("focus"), a.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = i.find(".dropdown-menu" + s);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = a, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, a) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.modal"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            r || i.data("bs.modal", r = new n(this, o)), "string" == typeof t ? r[t](a) : o.show && r.show(a)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var a = this,
            i = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            a.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(a.$element) && (a.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = e.support.transition && a.$element.hasClass("fade");
            a.$element.parent().length || a.$element.appendTo(a.$body), a.$element.show().scrollTop(0), a.adjustDialog(), i && a.$element[0].offsetWidth, a.$element.addClass("in"), a.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? a.$dialog.one("bsTransitionEnd", function() {
                a.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : a.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var a = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && i;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                a.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var a = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = a, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var a = e(this),
            i = a.attr("href"),
            r = e(a.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, r.data(), a.data());
        a.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                a.is(":visible") && a.trigger("focus")
            })
        }), t.call(r, o, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.tooltip"),
                r = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || a.data("bs.tooltip", i = new n(this, r)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, a) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(a), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), r = i.length; r--;) {
            var o = i[r];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var s = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, a) {
            n[e] != a && (t[e] = a)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var a = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !a) return;
            var i = this,
                r = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if (c) {
                var p = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + f > h.bottom ? "top" : "top" == s && u.top - f < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s, r.removeClass(p).addClass(s)
            }
            var m = this.getCalculatedOffset(s, u, d, f);
            this.applyPlacement(m, s);
            var v = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == e && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var a = this.tip(),
            i = a[0].offsetWidth,
            r = a[0].offsetHeight,
            o = parseInt(a.css("margin-top"), 10),
            s = parseInt(a.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), t.top += o, t.left += s, e.offset.setOffset(a[0], e.extend({
            using: function(e) {
                a.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), a.addClass("in");
        var l = a[0].offsetWidth,
            c = a[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - i + l : 2 * u.top - r + c,
            p = d ? "offsetWidth" : "offsetHeight";
        a.offset(t), this.replaceArrow(f, a[0][p], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function a() {
            "in" != i.hoverState && r.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
        }
        var i = this,
            r = e(this.$tip),
            o = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            a = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            o = a ? {
                top: 0,
                left: 0
            } : r ? null : t.offset(),
            s = {
                scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = a ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, i, s, l, o)
    }, n.prototype.getCalculatedOffset = function(e, t, n, a) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - a,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - a / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - a / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, a) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - r - o.scroll,
                l = t.top + r - o.scroll + a;
            s < o.top ? i.top = o.top - s : l > o.top + o.height && (i.top = o.top + o.height - l)
        } else {
            var c = t.left - r,
                u = t.left + r + n;
            c < o.left ? i.left = o.left - c : u > o.right && (i.left = o.left + o.width - u)
        }
        return i
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var a = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = a, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.popover"),
                r = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || a.data("bs.popover", i = new n(this, r)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var a = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = a, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, a) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            i || a.data("bs.scrollspy", i = new t(this, r)), "string" == typeof n && i[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            a = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", a = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                i = t.data("target") || t.attr("href"),
                r = /^#./.test(i) && e(i);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + a, i]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            a = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            r = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= a) return o != (e = r[r.length - 1]) && this.activate(e);
        if (o && t < i[0]) return this.activeTarget = null, this.clear();
        for (e = i.length; e--;) o != r[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            a = e(n).parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var a = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = a, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.tab");
            i || a.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            a = t.data("target");
        if (a || (a = t.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = e.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(r), t.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = e(a);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, a, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var o = a.find("> .active"),
            s = i && e.support.transition && (o.length && o.hasClass("fade") || !!a.find("> .fade").length);
        o.length && s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), o.removeClass("in")
    };
    var a = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = a, this
    };
    var i = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.affix"),
                r = "object" == typeof t && t;
            i || a.data("bs.affix", i = new n(this, r)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t, a) {
        this.options = e.extend({}, n.DEFAULTS, a), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, a) {
        var i = this.$target.scrollTop(),
            r = this.$element.offset(),
            o = this.$target.height();
        if (null != n && "top" == this.affixed) return i < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= r.top) && "bottom" : !(i + o <= e - a) && "bottom";
        var s = null == this.affixed,
            l = s ? i : r.top,
            c = s ? o : t;
        return null != n && i <= n ? "top" : null != a && l + c >= e - a && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                a = this.options.offset,
                i = a.top,
                r = a.bottom,
                o = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof a && (r = i = a), "function" == typeof i && (i = a.top(this.$element)), "function" == typeof r && (r = a.bottom(this.$element));
            var s = this.getState(o, t, i, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: o - t - r
            })
        }
    };
    var a = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = a, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                a = n.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), t.call(n, a)
        })
    })
}(jQuery);