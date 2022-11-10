function newYearIn() {
    var e = " дней ",
        t = new Date,
        i = new Date("Jan,01,2017,00:00:00"),
        n = i.getTime() - t.getTime();
    if (n > 1) {
        var r = parseInt(n / 1e3),
            o = parseInt(r / 86400);
        2 != o && 3 != o && 4 != o && 22 != o && 23 != o && 24 != o && 32 != o && 33 != o && 34 != o || (e = " дня "), 1 != o && 21 != o && 31 != o || (e = " день ");
        var a = r - 24 * o * 3600,
            s = parseInt(a / 3600);
        s < 10 && (s = "0" + s);
        var l = a - 3600 * s,
            c = parseInt(l / 60);
        c < 10 && (c = "0" + c);
        var u = l - 60 * c;
        u < 10 && (u = "0" + u), document.getElementById("newYearTimer").innerHTML = o + e
    } else document.getElementById("newYearDate").innerHTML = "C НОВЫМ ГОДОМ ДРУЗЬЯ"
}

function send(e) {
    return $.ajax({
        method: "post",
        url: "mail.php",
        data: e,
        error: function(e, t, i) {
            //alert(e.responseText + "|\n" + t + "|\n" + i)
        }
    }, "json"), $('[name="email"]').removeClass("error"), $('[name="phone"]').removeClass("error"), $(".clear").val(""), $(".b-modal").fadeOut(300), $("#thx").fadeIn(300), $("#bg-modal").fadeIn(300), $("body").css("overflow-y", "hidden"), $(".b-counter__counter").text(Number($(".b-counter__counter").text() - 1)), console.log("send"), location.href="thanks.html", !1
}

function metrica(e) {
    
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = !!e && "length" in e && e.length,
            i = oe.type(e);
        return "function" !== i && !oe.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function n(e, t, i) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (ve.test(t)) return oe.filter(t, e, i);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return J.call(t, e) > -1 !== i
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(be) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function a() {
        K.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), oe.ready()
    }

    function s() {
        this.expando = oe.expando + s.uid++
    }

    function l(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace($e, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Pe.test(i) ? oe.parseJSON(i) : i)
                } catch (e) {}
                Ae.set(e, t, i)
            } else i = void 0;
        return i
    }

    function c(e, t, i, n) {
        var r, o = 1,
            a = 20,
            s = n ? function() {
                return n.cur()
            } : function() {
                return oe.css(e, t, "")
            },
            l = s(),
            c = i && i[3] || (oe.cssNumber[t] ? "" : "px"),
            u = (oe.cssNumber[t] || "px" !== c && +l) && je.exec(oe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], i = i || [], u = +l || 1;
            do o = o || ".5", u /= o, oe.style(e, t, u + c); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
    }

    function u(e, t) {
        var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], i) : i
    }

    function d(e, t) {
        for (var i = 0, n = e.length; n > i; i++) Ce.set(e[i], "globalEval", !t || Ce.get(t[i], "globalEval"))
    }

    function p(e, t, i, n, r) {
        for (var o, a, s, l, c, p, f = t.createDocumentFragment(), h = [], v = 0, m = e.length; m > v; v++)
            if (o = e[v], o || 0 === o)
                if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (Le.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Me.exec(o) || ["", ""])[1].toLowerCase(), l = Re[s] || Re._default, a.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], p = l[0]; p--;) a = a.lastChild;
            oe.merge(h, a.childNodes), a = f.firstChild, a.textContent = ""
        } else h.push(t.createTextNode(o));
        for (f.textContent = "", v = 0; o = h[v++];)
            if (n && oe.inArray(o, n) > -1) r && r.push(o);
            else if (c = oe.contains(o.ownerDocument, o), a = u(f.appendChild(o), "script"), c && d(a), i)
            for (p = 0; o = a[p++];) Ie.test(o.type || "") && i.push(o);
        return f
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function v() {
        try {
            return K.activeElement
        } catch (e) {}
    }

    function m(e, t, i, n, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (s in t) m(e, s, i, n, t[s], o);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = h;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return oe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = oe.guid++)), e.each(function() {
            oe.event.add(this, t, r, n, i)
        })
    }

    function g(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
        var t = We.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        var i, n, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (o = Ce.access(e), a = Ce.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (r in c)
                    for (i = 0, n = c[r].length; n > i; i++) oe.event.add(t, r, c[r][i])
            }
            Ae.hasData(e) && (s = Ae.access(e), l = oe.extend({}, s), Ae.set(t, l))
        }
    }

    function b(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Ne.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function w(e, t, i, n) {
        t = Q.apply([], t);
        var r, o, a, s, l, c, d = 0,
            f = e.length,
            h = f - 1,
            v = t[0],
            m = oe.isFunction(v);
        if (m || f > 1 && "string" == typeof v && !ne.checkClone && ze.test(v)) return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = v.call(this, r, o.html())), w(o, t, i, n)
        });
        if (f && (r = p(t, e[0].ownerDocument, !1, e, n), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
            for (a = oe.map(u(r, "script"), y), s = a.length; f > d; d++) l = r, d !== h && (l = oe.clone(l, !0, !0), s && oe.merge(a, u(l, "script"))), i.call(e[d], l, d);
            if (s)
                for (c = a[a.length - 1].ownerDocument, oe.map(a, k), d = 0; s > d; d++) l = a[d], Ie.test(l.type || "") && !Ce.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(Ge, "")))
        }
        return e
    }

    function S(e, t, i) {
        for (var n, r = t ? oe.filter(t, e) : e, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || oe.cleanData(u(n)), n.parentNode && (i && oe.contains(n.ownerDocument, n) && d(u(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function T(e, t) {
        var i = oe(t.createElement(e)).appendTo(t.body),
            n = oe.css(i[0], "display");
        return i.detach(), n
    }

    function C(e) {
        var t = K,
            i = Xe[e];
        return i || (i = T(e, t), "none" !== i && i || (Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), i = T(e, t), Ue.detach()), Xe[e] = i), i
    }

    function A(e, t, i) {
        var n, r, o, a, s = e.style;
        return i = i || Ve(e), a = i ? i.getPropertyValue(t) || i[t] : void 0, "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), i && !ne.pixelMarginRight() && Ke.test(a) && Ye.test(t) && (n = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = i.width, s.width = n, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
    }

    function P(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $(e) {
        if (e in nt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--;)
            if (e = it[i] + t, e in nt) return e
    }

    function E(e, t, i) {
        var n = je.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function j(e, t, i, n, r) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += oe.css(e, i + Oe[o], !0, r)), n ? ("content" === i && (a -= oe.css(e, "padding" + Oe[o], !0, r)), "margin" !== i && (a -= oe.css(e, "border" + Oe[o] + "Width", !0, r))) : (a += oe.css(e, "padding" + Oe[o], !0, r), "padding" !== i && (a += oe.css(e, "border" + Oe[o] + "Width", !0, r)));
        return a
    }

    function O(e, t, i) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ve(e),
            a = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = A(e, t, o), (0 > r || null == r) && (r = e.style[t]), Ke.test(r)) return r;
            n = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + j(e, t, i || (a ? "border" : "content"), n, o) + "px"
    }

    function D(e, t) {
        for (var i, n, r, o = [], a = 0, s = e.length; s > a; a++) n = e[a], n.style && (o[a] = Ce.get(n, "olddisplay"), i = n.style.display, t ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && De(n) && (o[a] = Ce.access(n, "olddisplay", C(n.nodeName)))) : (r = De(n), "none" === i && r || Ce.set(n, "olddisplay", r ? i : oe.css(n, "display"))));
        for (a = 0; s > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function N(e, t, i, n, r) {
        return new N.prototype.init(e, t, i, n, r)
    }

    function M() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = oe.now()
    }

    function I(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Oe[n], r["margin" + i] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function R(e, t, i) {
        for (var n, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, a = r.length; a > o; o++)
            if (n = r[o].call(i, t, e)) return n
    }

    function L(e, t, i) {
        var n, r, o, a, s, l, c, u, d = this,
            p = {},
            f = e.style,
            h = e.nodeType && De(e),
            v = Ce.get(e, "fxshow");
        i.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), u = "none" === c ? Ce.get(e, "olddisplay") || C(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n], at.exec(r)) {
                if (delete t[n], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[n]) continue;
                    h = !0
                }
                p[n] = v && v[n] || oe.style(e, n)
            } else c = void 0;
        if (oe.isEmptyObject(p)) "inline" === ("none" === c ? C(e.nodeName) : c) && (f.display = c);
        else {
            v ? "hidden" in v && (h = v.hidden) : v = Ce.access(e, "fxshow", {}), o && (v.hidden = !h), h ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }), d.done(function() {
                var t;
                Ce.remove(e, "fxshow");
                for (t in p) oe.style(e, t, p[t])
            });
            for (n in p) a = R(h ? v[n] : 0, n, d), n in v || (v[n] = a.start, h && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function H(e, t) {
        var i, n, r, o, a;
        for (i in e)
            if (n = oe.camelCase(i), r = t[n], o = e[i], oe.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), a = oe.cssHooks[n], a && "expand" in a) {
                o = a.expand(o), delete e[n];
                for (i in o) i in e || (e[i] = o[i], t[i] = r)
            } else t[n] = r
    }

    function F(e, t, i) {
        var n, r, o = 0,
            a = F.prefilters.length,
            s = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = rt || M(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, o = 1 - n, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, i]), 1 > o && l ? i : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: rt || M(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = oe.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); a > o; o++)
            if (n = F.prefilters[o].call(c, e, u, c.opts)) return oe.isFunction(n.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(n.stop, n)), n;
        return oe.map(u, R, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function _(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function q(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                o = t.toLowerCase().match(be) || [];
            if (oe.isFunction(i))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function B(e, t, i, n) {
        function r(s) {
            var l;
            return o[s] = !0, oe.each(e[s] || [], function(e, s) {
                var c = s(t, i, n);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = e === At;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function z(e, t) {
        var i, n, r = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function W(e, t, i) {
        for (var n, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (r in s)
                if (s[r] && s[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function G(e, t, i, n) {
        var r, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, i, n) {
        var r;
        if (oe.isArray(t)) oe.each(t, function(t, r) {
            i || jt.test(e) ? n(e, r) : U(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== oe.type(t)) n(e, t);
        else
            for (r in t) U(e + "[" + r + "]", t[r], i, n)
    }

    function X(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        K = e.document,
        V = Y.slice,
        Q = Y.concat,
        Z = Y.push,
        J = Y.indexOf,
        ee = {},
        te = ee.toString,
        ie = ee.hasOwnProperty,
        ne = {},
        re = "2.2.4",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Z,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, i, n, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = a[t], n = e[t], a !== n && (c && n && (oe.isPlainObject(n) || (r = oe.isArray(n))) ? (r ? (r = !1, o = i && oe.isArray(i) ? i : []) : o = i && oe.isPlainObject(i) ? i : {}, a[t] = oe.extend(c, o, n)) : void 0 !== n && (a[t] = n));
        return a
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ie.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(le, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : Z.call(n, e)), n
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : J.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; i > n; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n, r = [], o = 0, a = e.length, s = !i; a > o; o++) n = !t(e[o], o), n !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0,
                s = [];
            if (i(e))
                for (r = e.length; r > a; a++) o = t(e[a], a, n), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, n), null != o && s.push(o);
            return Q.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, r;
            return "string" == typeof t && (i = e[t], t = e, e = i), oe.isFunction(e) ? (n = V.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(V.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
        },
        now: Date.now,
        support: ne
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, i, n) {
            var r, o, a, s, l, c, d, f, h = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return i;
            if (!n && ((t ? t.ownerDocument || t : _) !== D && O(t), t = t || D, M)) {
                if (11 !== v && (c = ge.exec(e)))
                    if (r = c[1]) {
                        if (9 === v) {
                            if (!(a = t.getElementById(r))) return i;
                            if (a.id === r) return i.push(a), i
                        } else if (h && (a = h.getElementById(r)) && H(t, a) && a.id === r) return i.push(a), i
                    } else {
                        if (c[2]) return Z.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = c[3]) && b.getElementsByClassName && t.getElementsByClassName) return Z.apply(i, t.getElementsByClassName(r)), i
                    }
                if (b.qsa && !G[e + " "] && (!I || !I.test(e))) {
                    if (1 !== v) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ke, "\\$&") : t.setAttribute("id", s = F), d = C(e), o = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + p(d[o]);
                        f = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (f) try {
                        return Z.apply(i, h.querySelectorAll(f)), i
                    } catch (e) {} finally {
                        s === F && t.removeAttribute("id")
                    }
                }
            }
            return P(e.replace(se, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > w.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[F] = !0, e
        }

        function r(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function a(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var r, o = e([], i.length, t), a = o.length; a--;) i[r = o[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function f(e, t, i) {
            var n = t.dir,
                r = i && "parentNode" === n,
                o = B++;
            return t.first ? function(t, i, o) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, o)
            } : function(t, i, a) {
                var s, l, c, u = [q, o];
                if (a) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, a)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r) {
                            if (c = t[F] || (t[F] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[n]) && s[0] === q && s[1] === o) return u[2] = s[2];
                            if (l[n] = u, u[2] = e(t, i, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function v(e, i, n) {
            for (var r = 0, o = i.length; o > r; r++) t(e, i[r], n);
            return n
        }

        function m(e, t, i, n, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (i && !i(o, n, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function g(e, t, i, r, o, a) {
            return r && !r[F] && (r = g(r)), o && !o[F] && (o = g(o, a)), n(function(n, a, s, l) {
                var c, u, d, p = [],
                    f = [],
                    h = a.length,
                    g = n || v(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !n && t ? g : m(g, p, e, s, l),
                    k = i ? o || (n ? e : h || r) ? [] : a : y;
                if (i && i(y, k, s, l), r)
                    for (c = m(k, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (k[f[u]] = !(y[f[u]] = d));
                if (n) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = k.length; u--;)(d = k[u]) && c.push(y[u] = d);
                            o(null, k = [], c, l)
                        }
                        for (u = k.length; u--;)(d = k[u]) && (c = o ? ee(n, d) : p[u]) > -1 && (n[c] = !(a[c] = d))
                    }
                } else k = m(k === a ? k.splice(h, k.length) : k), o ? o(null, a, k, l) : Z.apply(a, k)
            })
        }

        function y(e) {
            for (var t, i, n, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), c = f(function(e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function(e, i, n) {
                    var r = !o && (n || i !== $) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                    return t = null, r
                }]; r > s; s++)
                if (i = w.relative[e[s].type]) u = [f(h(u), i)];
                else {
                    if (i = w.filter[e[s].type].apply(null, e[s].matches), i[F]) {
                        for (n = ++s; r > n && !w.relative[e[n].type]; n++);
                        return g(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), i, n > s && y(e.slice(s, n)), r > n && y(e = e.slice(n)), r > n && p(e))
                    }
                    u.push(i)
                }
            return h(u)
        }

        function k(e, i) {
            var r = i.length > 0,
                o = e.length > 0,
                a = function(n, a, s, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        v = n && [],
                        g = [],
                        y = $,
                        k = n || o && w.find.TAG("*", c),
                        x = q += null == y ? 1 : Math.random() || .1,
                        b = k.length;
                    for (c && ($ = a === D || a || c); h !== b && null != (u = k[h]); h++) {
                        if (o && u) {
                            for (d = 0, a || u.ownerDocument === D || (O(u), s = !M); p = e[d++];)
                                if (p(u, a || D, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (q = x)
                        }
                        r && ((u = !p && u) && f--, n && v.push(u))
                    }
                    if (f += h, r && h !== f) {
                        for (d = 0; p = i[d++];) p(v, g, a, s);
                        if (n) {
                            if (f > 0)
                                for (; h--;) v[h] || g[h] || (g[h] = V.call(l));
                            g = m(g)
                        }
                        Z.apply(l, g), c && !n && g.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (q = x, $ = y), v
                };
            return r ? n(a) : a
        }
        var x, b, w, S, T, C, A, P, $, E, j, O, D, N, M, I, R, L, H, F = "sizzle" + 1 * new Date,
            _ = e.document,
            q = 0,
            B = 0,
            z = i(),
            W = i(),
            G = i(),
            U = function(e, t) {
                return e === t && (j = !0), 0
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            K = [],
            V = K.pop,
            Q = K.push,
            Z = K.push,
            J = K.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
            oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            se = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            le = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(oe),
            pe = new RegExp("^" + ne + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            ke = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            be = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            we = function() {
                O()
            };
        try {
            Z.apply(K = J.call(_.childNodes), _.childNodes), K[_.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: K.length ? function(e, t) {
                    Q.apply(e, J.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        b = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : _;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, N = D.documentElement, M = !T(D), (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", we, !1) : i.attachEvent && i.attachEvent("onunload", we)), b.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = r(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = me.test(D.getElementsByClassName), b.getById = r(function(e) {
                return N.appendChild(e).id = F, !D.getElementsByName || !D.getElementsByName(F).length
            }), b.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0
            }, R = [], I = [], (b.qsa = me.test(D.querySelectorAll)) && (r(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || I.push(".#.+[+~]")
            }), r(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (b.matchesSelector = me.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                b.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), R.push("!=", oe)
            }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), t = me.test(N.compareDocumentPosition), H = t || me.test(N.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === D || e.ownerDocument === _ && H(_, e) ? -1 : t === D || t.ownerDocument === _ && H(_, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var i, n = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (r === o) return a(e, t);
                for (i = e; i = i.parentNode;) s.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; s[n] === l[n];) n++;
                return n ? a(s[n], l[n]) : s[n] === _ ? -1 : l[n] === _ ? 1 : 0
            }, D) : D
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== D && O(e), i = i.replace(ue, "='$1']"), b.matchesSelector && M && !G[i + " "] && (!R || !R.test(i)) && (!I || !I.test(i))) try {
                var n = L.call(e, i);
                if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return t(i, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && O(e), H(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && O(e);
            var i = w.attrHandle[t.toLowerCase()],
                n = i && Y.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !M) : void 0;
            return void 0 !== n ? n : b.attributes || !M ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                r = 0;
            if (j = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[r++];) t === e[r] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1)
            }
            return E = null, e
        }, S = t.getText = function(e) {
            var t, i = "",
                n = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += S(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[n++];) i += S(t);
            return i
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
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
                    return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && de.test(i) && (t = C(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === n && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, u, d, p, f, h, v = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            k = !1;
                        if (m) {
                            if (o) {
                                for (; v;) {
                                    for (p = t; p = p[v];)
                                        if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (p = m, d = p[F] || (p[F] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], k = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[v] || (k = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++k && p === t) {
                                        u[e] = [q, f, k];
                                        break
                                    }
                            } else if (y && (p = t, d = p[F] || (p[F] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], k = f), k === !1)
                                for (;
                                    (p = ++f && p && p[v] || (k = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++k || (y && (d = p[F] || (p[F] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [q, k]), p !== t)););
                            return k -= r, k === n || k % n === 0 && k / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(i) : o.length > 1 ? (r = [e, e, "", i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, r = o(e, i), a = r.length; a--;) n = ee(e, r[a]), e[n] = !(t[n] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        r = A(e.replace(se, "$1"));
                    return r[F] ? n(function(e, t, i, n) {
                        for (var o, a = r(e, null, n, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, n, o) {
                        return t[0] = e, r(t, null, o, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(xe, be),
                        function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
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
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
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
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = l(x);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, C = t.tokenize = function(e, i) {
            var n, r, o, a, s, l, c, u = W[e + " "];
            if (u) return i ? 0 : u.slice(0);
            for (s = e, l = [], c = w.preFilter; s;) {
                n && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = ce.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(se, " ")
                }), s = s.slice(n.length));
                for (a in w.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return i ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, A = t.compile = function(e, t) {
            var i, n = [],
                r = [],
                o = G[e + " "];
            if (!o) {
                for (t || (t = C(e)), i = t.length; i--;) o = y(t[i]), o[F] ? n.push(o) : r.push(o);
                o = G(e, k(r, n)), o.selector = e
            }
            return o
        }, P = t.select = function(e, t, i, n) {
            var r, o, a, s, l, c = "function" == typeof e && e,
                d = !n && C(e = c.selector || e);
            if (i = i || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && M && w.relative[o[1].type]) {
                    if (t = (w.find.ID(a.matches[0].replace(xe, be), t) || [])[0], !t) return i;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (n = l(a.matches[0].replace(xe, be), ye.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = n.length && p(o), !e) return Z.apply(i, n), i;
                        break
                    }
            }
            return (c || A(e, d))(n, t, !M, i, !t || ye.test(e) && u(t.parentNode) || t), i
        }, b.sortStable = F.split("").sort(U).join("") === F, b.detectDuplicates = !!j, O(), b.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var de = function(e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && oe(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        pe = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        fe = oe.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ve = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? oe.find.matchesSelector(n, e) ? [n] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, i = this.length,
                n = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) oe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var me, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function(e, t, i) {
            var n, r;
            if (!e) return this;
            if (i = i || me, "string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), he.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ye.prototype = oe.fn, me = oe(K);
    var ke = /^(?:parents|prev(?:Until|All))/,
        xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; i > e; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, r = this.length, o = [], a = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, e))) {
                        o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.call(oe(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return de(e, "parentNode", i)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return de(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return de(e, "previousSibling", i)
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(i, n) {
            var r = oe.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = oe.filter(n, r)), this.length > 1 && (xe[e] || oe.uniqueSort(r), ke.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var be = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, i, n, r, a = [],
            s = [],
            l = -1,
            c = function() {
                for (r = e.once, n = t = !0; s.length; l = -1)
                    for (i = s.shift(); ++l < a.length;) a[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = a.length, i = !1);
                e.memory || (i = !1), t = !1, r && (a = i ? [] : "")
            },
            u = {
                add: function() {
                    return a && (i && !t && (l = a.length - 1, s.push(i)), function t(i) {
                        oe.each(i, function(i, n) {
                            oe.isFunction(n) ? e.unique && u.has(n) || a.push(n) : n && n.length && "string" !== oe.type(n) && t(n)
                        })
                    }(arguments), i && !t && c()), this
                },
                remove: function() {
                    return oe.each(arguments, function(e, t) {
                        for (var i;
                            (i = oe.inArray(t, a, i)) > -1;) a.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = i = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = s = [], i || (a = i = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, i) {
                    return r || (i = i || [], i = [e, i.slice ? i.slice() : i], s.push(i), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(i) {
                            oe.each(t, function(t, o) {
                                var a = oe.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, oe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                n[o[1]] = a.add, s && a.add(function() {
                    i = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? n : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, i, n, r = 0,
                o = V.call(arguments),
                a = o.length,
                s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : oe.Deferred(),
                c = function(e, i, n) {
                    return function(r) {
                        i[e] = this, n[e] = arguments.length > 1 ? V.call(arguments) : r, n === t ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (t = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, i, t)).done(c(r, n, o)).fail(l.reject) : --s;
            return s || l.resolveWith(n, o), l.promise()
        }
    });
    var we;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(K, [oe]), oe.fn.triggerHandler && (oe(K).triggerHandler("ready"), oe(K).off("ready"))))
        }
    }), oe.ready.promise = function(t) {
        return we || (we = oe.Deferred(), "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? e.setTimeout(oe.ready) : (K.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), we.promise(t)
    }, oe.ready.promise();
    var Se = function(e, t, i, n, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == i;
            if ("object" === oe.type(i)) {
                r = !0;
                for (s in i) Se(e, t, s, i[s], !0, o, a)
            } else if (void 0 !== n && (r = !0, oe.isFunction(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(oe(e), i)
                })), t))
                for (; l > s; s++) t(e[s], i, a ? n : n.call(e[s], s, t(e[s], i)));
            return r ? e : c ? t.call(e) : l ? t(e[0], i) : o
        },
        Te = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function(e, t) {
            var i = t || {};
            return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Te(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[t] = i;
            else
                for (n in t) r[n] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, oe.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? n = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? n = [t, r] : (n = r, n = n in o ? [n] : n.match(be) || [])), i = n.length;
                    for (; i--;) delete o[n[i]]
                }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ce = new s,
        Ae = new s,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $e = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Ae.hasData(e) || Ce.hasData(e)
        },
        data: function(e, t, i) {
            return Ae.access(e, t, i)
        },
        removeData: function(e, t) {
            Ae.remove(e, t)
        },
        _data: function(e, t, i) {
            return Ce.access(e, t, i)
        },
        _removeData: function(e, t) {
            Ce.remove(e, t)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var i, n, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ae.get(o), 1 === o.nodeType && !Ce.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(o, n, r[n])));
                    Ce.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Ae.set(this, e)
            }) : Se(this, function(t) {
                var i, n;
                if (o && void 0 === t) {
                    if (i = Ae.get(o, e) || Ae.get(o, e.replace($e, "-$&").toLowerCase()), void 0 !== i) return i;
                    if (n = oe.camelCase(e), i = Ae.get(o, n), void 0 !== i) return i;
                    if (i = l(o, n, void 0), void 0 !== i) return i
                } else n = oe.camelCase(e), this.each(function() {
                    var i = Ae.get(this, n);
                    Ae.set(this, n, t), e.indexOf("-") > -1 && void 0 !== i && Ae.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ae.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = Ce.get(e, t), i && (!n || oe.isArray(i) ? n = Ce.access(e, t, oe.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = oe.queue(e, t),
                n = i.length,
                r = i.shift(),
                o = oe._queueHooks(e, t),
                a = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Ce.get(e, i) || Ce.access(e, i, {
                empty: oe.Callbacks("once memory").add(function() {
                    Ce.remove(e, [t + "queue", i])
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = oe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) i = Ce.get(o[a], e + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        De = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i,
        Me = /<([\w:-]+)/,
        Ie = /^$|\/(?:java|ecma)script/i,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td;
    var Le = /<|&#?\w+;/;
    ! function() {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div")),
            i = K.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var He = /^key/,
        Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var o, a, s, l, c, u, d, p, f, h, v, m = Ce.get(e);
            if (m)
                for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = oe.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(be) || [""], c = t.length; c--;) s = _e.exec(t[c]) || [], f = v = s[1], h = (s[2] || "").split(".").sort(), f && (d = oe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = oe.event.special[f] || {}, u = oe.extend({
                    type: f,
                    origType: v,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && oe.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, n, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[f] = !0)
        },
        remove: function(e, t, i, n, r) {
            var o, a, s, l, c, u, d, p, f, h, v, m = Ce.hasData(e) && Ce.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(be) || [""], c = t.length; c--;)
                    if (s = _e.exec(t[c]) || [], f = v = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = oe.event.special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) u = p[o], !r && v !== u.origType || i && i.guid !== u.guid || s && !s.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) oe.event.remove(e, f + t[c], i, n, !0);
                oe.isEmptyObject(l) && Ce.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, i, n, r, o, a = [],
                s = V.call(arguments),
                l = (Ce.get(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, i = 0;
                        (o = r.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, n = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [], i = 0; s > i; i++) o = t[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), n[r] && n.push(o);
                        n.length && a.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, r, o = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || K, n = i.documentElement, r = i.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, i, n, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Fe.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = n.length; t--;) i = n[t], e[i] = o[i];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== v() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === v() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === n || oe.contains(n, r)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), oe.fn.extend({
        on: function(e, t, i, n) {
            return m(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return m(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, oe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = h), this.each(function() {
                oe.event.remove(this, e, i, t)
            })
        }
    });
    var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Be = /<script|<style|<link/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        We = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(qe, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, o, a, s = e.cloneNode(!0),
                l = oe.contains(e.ownerDocument, e);
            if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (a = u(s), o = u(e), n = 0, r = o.length; r > n; n++) b(o[n], a[n]);
            if (t)
                if (i)
                    for (o = o || u(e), a = a || u(s), n = 0, r = o.length; r > n; n++) x(o[n], a[n]);
                else x(e, s);
            return a = u(s, "script"), a.length > 0 && d(a, !l && u(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, i, n, r = oe.event.special, o = 0; void 0 !== (i = e[o]); o++)
                if (Te(i)) {
                    if (t = i[Ce.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, t.handle);
                        i[Ce.expando] = void 0
                    }
                    i[Ae.expando] && (i[Ae.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: w,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Se(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Se(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Be.test(e) && !Re[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return w(this, arguments, function(t) {
                var i = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(u(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var i, n = [], r = oe(e), o = r.length - 1, a = 0; o >= a; a++) i = a === o ? this : this.clone(!0), oe(r[a])[t](i), Z.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ue, Xe = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Ke = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        Ve = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        Qe = function(e, t, i, n) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = i.apply(e, n || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        Ze = K.documentElement;
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ze.appendChild(a);
            var t = e.getComputedStyle(s);
            i = "1%" !== t.top, o = "2px" === t.marginLeft, n = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ze.removeChild(a)
        }
        var i, n, r, o, a = K.createElement("div"),
            s = K.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), oe.extend(ne, {
            pixelPosition: function() {
                return t(), i
            },
            boxSizingReliable: function() {
                return null == n && t(), n
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            reliableMarginLeft: function() {
                return null == n && t(), o
            },
            reliableMarginRight: function() {
                var t, i = s.appendChild(K.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", Ze.appendChild(a), t = !parseFloat(e.getComputedStyle(i).marginRight), Ze.removeChild(a), s.removeChild(i), t
            }
        }))
    }();
    var Je = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        it = ["Webkit", "O", "Moz", "ms"],
        nt = K.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = A(e, "opacity");
                        return "" === i ? "1" : i
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
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = oe.camelCase(t),
                    l = e.style;
                return t = oe.cssProps[s] || (oe.cssProps[s] = $(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === i ? a && "get" in a && void 0 !== (r = a.get(e, !1, n)) ? r : l[t] : (o = typeof i, "string" === o && (r = je.exec(i)) && r[1] && (i = c(e, t, r), o = "number"), void(null != i && i === i && ("number" === o && (i += r && r[3] || (oe.cssNumber[s] ? "" : "px")), ne.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var r, o, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = $(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, i)), void 0 === r && (r = A(e, t, n)), "normal" === r && t in tt && (r = tt[t]), "" === i || i ? (o = parseFloat(r), i === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Je.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function() {
                    return O(e, t, n)
                }) : O(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var r, o = n && Ve(e),
                    a = n && j(e, t, n, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return a && (r = je.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = oe.css(e, t)), E(e, i, a)
            }
        }
    }), oe.cssHooks.marginLeft = P(ne.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = P(ne.reliableMarginRight, function(e, t) {
        return t ? Qe(e, {
            display: "inline-block"
        }, A, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + Oe[n] + t] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = E)
    }), oe.fn.extend({
        css: function(e, t) {
            return Se(this, function(e, t, i) {
                var n, r, o = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (n = Ve(e), r = t.length; r > a; a++) o[t[a]] = oe.css(e, t[a], !1, n);
                    return o
                }
                return void 0 !== i ? oe.style(e, t, i) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = N, N.prototype = {
        constructor: N,
        init: function(e, t, i, n, r, o) {
            this.elem = e, this.prop = i, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (oe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = N.prototype.init, oe.fx.step = {};
    var rt, ot, at = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    oe.Animation = oe.extend(F, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return c(i.elem, e, je.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(be);
                for (var i, n = 0, r = e.length; r > n; n++) i = e[n], F.tweeners[i] = F.tweeners[i] || [], F.tweeners[i].unshift(t)
            },
            prefilters: [L],
            prefilter: function(e, t) {
                t ? F.prefilters.unshift(e) : F.prefilters.push(e)
            }
        }), oe.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: i || !i && t || oe.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !oe.isFunction(t) && t
            };
            return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
            }, n
        }, oe.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(De).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var r = oe.isEmptyObject(e),
                    o = oe.speed(t, i, n),
                    a = function() {
                        var t = F(this, oe.extend({}, e), o);
                        (r || Ce.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = oe.timers,
                        a = Ce.get(this);
                    if (r) a[r] && a[r].stop && n(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && st.test(r) && n(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
                    !t && i || oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = Ce.get(this),
                        n = i[e + "queue"],
                        r = i[e + "queueHooks"],
                        o = oe.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var i = oe.fn[t];
            oe.fn[t] = function(e, n, r) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(I(t, !0), e, n, r)
            }
        }), oe.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
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
            oe.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = 0,
                i = oe.timers;
            for (rt = oe.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
            i.length || oe.fx.stop(), rt = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            e.clearInterval(ot), ot = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(t, i) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                var r = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = K.createElement("input"),
                t = K.createElement("select"),
                i = t.appendChild(K.createElement("option"));
            e.type = "checkbox", ne.checkOn = "" !== e.value, ne.optSelected = i.selected, t.disabled = !0, ne.optDisabled = !i.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", ne.radioValue = "t" === e.value
        }();
    var lt, ct = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Se(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, i) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? lt : void 0)), void 0 !== i ? null === i ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : (n = oe.find.attr(e, t), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, r = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; i = o[r++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        }
    }), lt = {
        set: function(e, t, i) {
            return t === !1 ? oe.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = ct[t] || oe.find.attr;
        ct[t] = function(e, t, n) {
            var r, o;
            return n || (o = ct[t], ct[t] = r, r = null != i(e, t, n) ? t.toLowerCase() : null, ct[t] = o), r
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Se(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, i, n, r, o, a, s, l = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, _(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(be) || []; i = this[l++];)
                    if (r = _(i), n = 1 === i.nodeType && (" " + r + " ").replace(pt, " ")) {
                        for (a = 0; o = t[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s = oe.trim(n), r !== s && i.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, o, a, s, l = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, _(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(be) || []; i = this[l++];)
                    if (r = _(i), n = 1 === i.nodeType && (" " + r + " ").replace(pt, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        s = oe.trim(n), r !== s && i.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(i) {
                oe(this).toggleClass(e.call(this, i, _(this), t), t)
            }) : this.each(function() {
                var t, n, r, o;
                if ("string" === i)
                    for (n = 0, r = oe(this), o = e.match(be) || []; t = o[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== i || (t = _(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + _(i) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = oe.isFunction(e), this.each(function(i) {
                var r;
                1 === this.nodeType && (r = n ? e.call(this, i, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(ft, "") : null == i ? "" : i)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : n.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (i = n[l], (i.selected || l === r) && (ne.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !oe.nodeName(i.parentNode, "optgroup"))) {
                            if (t = oe(i).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, o = oe.makeArray(t), a = r.length; a--;) n = r[a], (n.selected = oe.inArray(oe.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var vt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, i, n, r) {
            var o, a, s, l, c, u, d, p = [n || K],
                f = ie.call(t, "type") ? t.type : t,
                h = ie.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = n = n || K, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : oe.makeArray(i, [t]), d = oe.event.special[f] || {}, r || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!r && !d.noBubble && !oe.isWindow(n)) {
                    for (l = d.delegateType || f, vt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (n.ownerDocument || K) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, u = (Ce.get(a, "events") || {})[t.type] && Ce.get(a, "handle"), u && u.apply(a, i), u = c && a[c], u && u.apply && Te(a) && (t.result = u.apply(a, i), t.result === !1 && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), i) !== !1 || !Te(n) || c && oe.isFunction(n[f]) && !oe.isWindow(n) && (s = n[c], s && (n[c] = null), oe.event.triggered = f, n[f](), oe.event.triggered = void 0, s && (n[c] = s)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = oe.extend(new oe.Event, i, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(n, null, t)
        }
    }), oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? oe.event.trigger(e, t, i, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ne.focusin = "onfocusin" in e, ne.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = Ce.access(n, t);
                r || n.addEventListener(e, i, !0), Ce.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = Ce.access(n, t) - 1;
                r ? Ce.access(n, t, r) : (n.removeEventListener(e, i, !0), Ce.remove(n, t))
            }
        }
    });
    var mt = e.location,
        gt = oe.now(),
        yt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), i
    };
    var kt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        St = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        Ct = {},
        At = {},
        Pt = "*/".concat("*"),
        $t = K.createElement("a");
    $t.href = mt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: wt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
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
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? z(z(e, oe.ajaxSettings), t) : z(oe.ajaxSettings, e)
        },
        ajaxPrefilter: q(Ct),
        ajaxTransport: q(At),
        ajax: function(t, i) {
            function n(t, i, n, s) {
                var c, d, y, k, b, S = i;
                2 !== x && (x = 2, l && e.clearTimeout(l), r = void 0, a = s || "", w.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, n && (k = W(p, w, n)), k = G(p, k, w, c), c ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (oe.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (oe.etag[o] = b)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = k.state, d = k.data, y = k.error, c = !y)) : (y = S, !t && S || (S = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (i || S) + "", c ? v.resolveWith(f, [d, S, w]) : v.rejectWith(f, [w, S, y]), w.statusCode(g), g = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? d : y]), m.fireWith(f, [w, S]), u && (h.trigger("ajaxComplete", [w, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, o, a, s, l, c, u, d, p = oe.ajaxSetup({}, i),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                v = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = p.statusCode || {},
                y = {},
                k = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = bt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return x || (e = k[i] = k[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (v.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || mt.href) + "").replace(kt, "").replace(Tt, mt.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(be) || [""], null == p.crossDomain) {
                c = K.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = $t.protocol + "//" + $t.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), B(Ct, p, i, w), 2 === x) return w;
            u = oe.event && p.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !St.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (yt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = xt.test(o) ? o.replace(xt, "$1_=" + gt++) : o + (yt.test(o) ? "&" : "?") + "_=" + gt++)), p.ifModified && (oe.lastModified[o] && w.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && w.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[d](p[d]);
            if (r = B(At, p, i, w)) {
                if (w.readyState = 1, u && h.trigger("ajaxSend", [w, p]), 2 === x) return w;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, r.send(y, n)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, i) {
            return oe.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, i, n, r) {
            return oe.isFunction(i) && (r = r || n, n = i, i = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(i) {
                oe(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Et = /%20/g,
        jt = /\[\]$/,
        Ot = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) U(i, e[i], t, r);
        return n.join("&").replace(Et, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Nt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ot, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Mt = {
            0: 200,
            1223: 204
        },
        It = oe.ajaxSettings.xhr();
    ne.cors = !!It && "withCredentials" in It, ne.ajax = It = !!It, oe.ajaxTransport(function(t) {
        var i, n;
        return ne.cors || It && !t.crossDomain ? {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                i = function(e) {
                    return function() {
                        i && (i = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Mt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = i(), n = s.onerror = i("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(), i = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Rt = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || oe.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, o, a, s = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || oe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, Rt.push(r)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || K;
        var n = he.exec(e),
            r = !i && [];
        return n ? [t.createElement(n[1])] : (n = p([e], t, r), r && r.length && oe(r).remove(), oe.merge([], n.childNodes))
    };
    var Ht = oe.fn.load;
    oe.fn.load = function(e, t, i) {
        if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
        var n, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (n = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(n ? oe("<div>").append(oe.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            a.each(function() {
                i.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function(e, t, i) {
            var n, r, o, a, s, l, c, u = oe.css(e, "position"),
                d = oe(e),
                p = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = d.position(), a = n.top, r = n.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, i, oe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            return o ? (t = o.documentElement, oe.contains(t, n) ? (r = n.getBoundingClientRect(), i = X(o), {
                top: r.top + i.pageYOffset - t.clientTop,
                left: r.left + i.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Ze
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        oe.fn[e] = function(n) {
            return Se(this, function(e, n, r) {
                var o = X(e);
                return void 0 === r ? o ? o[t] : e[n] : void(o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : e[n] = r)
            }, e, n, arguments.length)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = P(ne.pixelPosition, function(e, i) {
            return i ? (i = A(e, t), Ke.test(i) ? oe(e).position()[t] + "px" : i) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            oe.fn[n] = function(n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || r === !0 ? "margin" : "border");
                return Se(this, function(t, i, n) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? oe.css(t, i, a) : oe.style(t, i, n, a)
                }, t, o ? n : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var Ft = e.jQuery,
        _t = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = _t), t && e.jQuery === oe && (e.jQuery = Ft), oe
    }, t || (e.jQuery = e.$ = oe), oe
}), ! function(e) {
    function t(i, n) {
        return this instanceof t ? (e.isPlainObject(i) ? n = i : (n = n || {}, n.alias = i), this.el = void 0, this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && void 0 !== n.definitions, this.userOptions = n || {}, this.events = {}, void r(this.opts.alias, n, this.opts)) : new t(i, n)
    }

    function i(e) {
        var t = document.createElement("input"),
            i = "on" + e,
            n = i in t;
        return n || (t.setAttribute(i, "return;"), n = "function" == typeof t[i]), t = null, n
    }

    function n(t, i) {
        var n = t.getAttribute("type"),
            r = "INPUT" === t.tagName && e.inArray(n, i.supportsInputType) !== -1 || t.isContentEditable || "TEXTAREA" === t.tagName;
        if (!r && "INPUT" === t.tagName) {
            var o = document.createElement("input");
            o.setAttribute("type", n), r = "text" === o.type, o = null
        }
        return r
    }

    function r(t, i, n) {
        var o = n.aliases[t];
        return o ? (o.alias && r(o.alias, void 0, n), e.extend(!0, n, o), e.extend(!0, n, i), !0) : (null === n.mask && (n.mask = t), !1)
    }

    function o(t, i, n) {
        function o(e, i) {
            i = void 0 !== i ? i : t.getAttribute("data-inputmask-" + e), null !== i && ("string" == typeof i && (0 === e.indexOf("on") ? i = window[i] : "false" === i ? i = !1 : "true" === i && (i = !0)), n[e] = i)
        }
        var a, s, l, c, u = t.getAttribute("data-inputmask");
        if (u && "" !== u && (u = u.replace(new RegExp("'", "g"), '"'), s = JSON.parse("{" + u + "}")), s) {
            l = void 0;
            for (c in s)
                if ("alias" === c.toLowerCase()) {
                    l = s[c];
                    break
                }
        }
        o("alias", l), n.alias && r(n.alias, n, i);
        for (a in i) {
            if (s) {
                l = void 0;
                for (c in s)
                    if (c.toLowerCase() === a.toLowerCase()) {
                        l = s[c];
                        break
                    }
            }
            o(a, l)
        }
        return e.extend(!0, i, n), i
    }

    function a(i, n) {
        function r(t) {
            function n(e, t, i, n) {
                this.matches = [], this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function r(t, n, r) {
                var o = i.definitions[n];
                r = void 0 !== r ? r : t.matches.length;
                var a = t.matches[r - 1];
                if (o && !g) {
                    o.placeholder = e.isFunction(o.placeholder) ? o.placeholder(i) : o.placeholder;
                    for (var s = o.prevalidator, l = s ? s.length : 0, c = 1; c < o.cardinality; c++) {
                        var u = l >= c ? s[c - 1] : [],
                            d = u.validator,
                            p = u.cardinality;
                        t.matches.splice(r++, 0, {
                            fn: d ? "string" == typeof d ? new RegExp(d) : new function() {
                                this.test = d
                            } : new RegExp("."),
                            cardinality: p ? p : 1,
                            optionality: t.isOptional,
                            newBlockMarker: void 0 === a || a.def !== (o.definitionSymbol || n),
                            casing: o.casing,
                            def: o.definitionSymbol || n,
                            placeholder: o.placeholder,
                            mask: n
                        }), a = t.matches[r - 1]
                    }
                    t.matches.splice(r++, 0, {
                        fn: o.validator ? "string" == typeof o.validator ? new RegExp(o.validator) : new function() {
                            this.test = o.validator
                        } : new RegExp("."),
                        cardinality: o.cardinality,
                        optionality: t.isOptional,
                        newBlockMarker: void 0 === a || a.def !== (o.definitionSymbol || n),
                        casing: o.casing,
                        def: o.definitionSymbol || n,
                        placeholder: o.placeholder,
                        mask: n
                    })
                } else t.matches.splice(r++, 0, {
                    fn: null,
                    cardinality: 0,
                    optionality: t.isOptional,
                    newBlockMarker: void 0 === a || a.def !== n,
                    casing: null,
                    def: i.staticDefinitionSymbol || n,
                    placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                    mask: n
                }), g = !1
            }

            function o(e, t) {
                e.isGroup && (e.isGroup = !1, r(e, i.groupmarker.start, 0), t !== !0 && r(e, i.groupmarker.end))
            }

            function a(e, t, i, n) {
                t.matches.length > 0 && (void 0 === n || n) && (i = t.matches[t.matches.length - 1], o(i)), r(t, e)
            }

            function s() {
                if (k.length > 0) {
                    if (p = k[k.length - 1], a(u, p, h, !p.isAlternator), p.isAlternator) {
                        f = k.pop();
                        for (var e = 0; e < f.matches.length; e++) f.matches[e].isGroup = !1;
                        k.length > 0 ? (p = k[k.length - 1], p.matches.push(f)) : y.matches.push(f)
                    }
                } else a(u, y, h)
            }

            function l(e) {
                function t(e) {
                    return e === i.optionalmarker.start ? e = i.optionalmarker.end : e === i.optionalmarker.end ? e = i.optionalmarker.start : e === i.groupmarker.start ? e = i.groupmarker.end : e === i.groupmarker.end && (e = i.groupmarker.start), e
                }
                e.matches = e.matches.reverse();
                for (var n in e.matches) {
                    var r = parseInt(n);
                    if (e.matches[n].isQuantifier && e.matches[r + 1] && e.matches[r + 1].isGroup) {
                        var o = e.matches[n];
                        e.matches.splice(n, 1), e.matches.splice(r + 1, 0, o)
                    }
                    void 0 !== e.matches[n].matches ? e.matches[n] = l(e.matches[n]) : e.matches[n] = t(e.matches[n])
                }
                return e
            }
            for (var c, u, d, p, f, h, v, m = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, g = !1, y = new n, k = [], x = []; c = m.exec(t);)
                if (u = c[0], g) s();
                else switch (u.charAt(0)) {
                    case i.escapeChar:
                        g = !0;
                        break;
                    case i.optionalmarker.end:
                    case i.groupmarker.end:
                        if (d = k.pop(), void 0 !== d)
                            if (k.length > 0) {
                                if (p = k[k.length - 1], p.matches.push(d), p.isAlternator) {
                                    f = k.pop();
                                    for (var b = 0; b < f.matches.length; b++) f.matches[b].isGroup = !1;
                                    k.length > 0 ? (p = k[k.length - 1], p.matches.push(f)) : y.matches.push(f)
                                }
                            } else y.matches.push(d);
                        else s();
                        break;
                    case i.optionalmarker.start:
                        k.push(new n((!1), (!0)));
                        break;
                    case i.groupmarker.start:
                        k.push(new n((!0)));
                        break;
                    case i.quantifiermarker.start:
                        var w = new n((!1), (!1), (!0));
                        u = u.replace(/[{}]/g, "");
                        var S = u.split(","),
                            T = isNaN(S[0]) ? S[0] : parseInt(S[0]),
                            C = 1 === S.length ? T : isNaN(S[1]) ? S[1] : parseInt(S[1]);
                        if ("*" !== C && "+" !== C || (T = "*" === C ? 0 : 1), w.quantifier = {
                                min: T,
                                max: C
                            }, k.length > 0) {
                            var A = k[k.length - 1].matches;
                            c = A.pop(), c.isGroup || (v = new n((!0)), v.matches.push(c), c = v), A.push(c), A.push(w)
                        } else c = y.matches.pop(), c.isGroup || (v = new n((!0)), v.matches.push(c), c = v), y.matches.push(c), y.matches.push(w);
                        break;
                    case i.alternatormarker:
                        k.length > 0 ? (p = k[k.length - 1], h = p.matches.pop()) : h = y.matches.pop(), h.isAlternator ? k.push(h) : (f = new n((!1), (!1), (!1), (!0)), f.matches.push(h), k.push(f));
                        break;
                    default:
                        s()
                }
                for (; k.length > 0;) d = k.pop(), o(d, !0), y.matches.push(d);
            return y.matches.length > 0 && (h = y.matches[y.matches.length - 1], o(h), x.push(y)), i.numericInput && l(x[0]), x
        }

        function o(o, a) {
            if (null !== o && "" !== o) {
                if (1 === o.length && i.greedy === !1 && 0 !== i.repeat && (i.placeholder = ""), i.repeat > 0 || "*" === i.repeat || "+" === i.repeat) {
                    var s = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
                    o = i.groupmarker.start + o + i.groupmarker.end + i.quantifiermarker.start + s + "," + i.repeat + i.quantifiermarker.end
                }
                var l;
                return void 0 === t.prototype.masksCache[o] || n === !0 ? (l = {
                    mask: o,
                    maskToken: r(o),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    metadata: a,
                    maskLength: void 0
                }, n !== !0 && (t.prototype.masksCache[i.numericInput ? o.split("").reverse().join("") : o] = l, l = e.extend(!0, {}, t.prototype.masksCache[i.numericInput ? o.split("").reverse().join("") : o]))) : l = e.extend(!0, {}, t.prototype.masksCache[i.numericInput ? o.split("").reverse().join("") : o]), l
            }
        }

        function a(e) {
            return e = e.toString()
        }
        var s;
        if (e.isFunction(i.mask) && (i.mask = i.mask(i)), e.isArray(i.mask)) {
            if (i.mask.length > 1) {
                i.keepStatic = null === i.keepStatic || i.keepStatic;
                var l = "(";
                return e.each(i.numericInput ? i.mask.reverse() : i.mask, function(t, i) {
                    l.length > 1 && (l += ")|("), l += a(void 0 === i.mask || e.isFunction(i.mask) ? i : i.mask)
                }), l += ")", o(l, i.mask)
            }
            i.mask = i.mask.pop()
        }
        return i.mask && (s = void 0 === i.mask.mask || e.isFunction(i.mask.mask) ? o(a(i.mask), i.mask) : o(a(i.mask.mask), i.mask)), s
    }

    function s(r, o, a) {
        function l(e, t, i) {
            t = t || 0;
            var n, r, o, s = [],
                l = 0,
                c = h();
            se = void 0 !== oe ? oe.maxLength : void 0, se === -1 && (se = void 0);
            do {
                if (e === !0 && p().validPositions[l]) {
                    var u = p().validPositions[l];
                    r = u.match, n = u.locator.slice(), s.push(i === !0 ? u.input : M(l, r))
                } else o = y(l, n, l - 1), r = o.match, n = o.locator.slice(), (a.jitMasking === !1 || l < c || isFinite(a.jitMasking) && a.jitMasking > l) && s.push(M(l, r));
                l++
            } while ((void 0 === se || l < se) && (null !== r.fn || "" !== r.def) || t > l);
            return "" === s[s.length - 1] && s.pop(), p().maskLength = l + 1, s
        }

        function p() {
            return o
        }

        function f(e) {
            var t = p();
            t.buffer = void 0, e !== !0 && (t._buffer = void 0, t.validPositions = {}, t.p = 0)
        }

        function h(e, t, i) {
            var n = -1,
                r = -1,
                o = i || p().validPositions;
            void 0 === e && (e = -1);
            for (var a in o) {
                var s = parseInt(a);
                o[s] && (t || null !== o[s].match.fn) && (s <= e && (n = s), s >= e && (r = s))
            }
            return n !== -1 && e - n > 1 || r < e ? n : r
        }

        function v(t, i, n, r) {
            if (r || a.insertMode && void 0 !== p().validPositions[t] && void 0 === n) {
                var o, s = e.extend(!0, {}, p().validPositions),
                    l = h();
                for (o = t; o <= l; o++) delete p().validPositions[o];
                p().validPositions[t] = e.extend(!0, {}, i);
                var c, u = !0,
                    d = p().validPositions,
                    v = !1;
                for (o = c = t; o <= l; o++) {
                    var m = s[o];
                    if (void 0 !== m)
                        for (var g = c, y = -1; g < p().maskLength && (null == m.match.fn && d[o] && (d[o].match.optionalQuantifier === !0 || d[o].match.optionality === !0) || null != m.match.fn);) {
                            if (g++, v === !1 && s[g] && s[g].match.def === m.match.def) {
                                p().validPositions[g] = e.extend(!0, {}, s[g]), p().validPositions[g].input = m.input, c = g, u = !0;
                                break
                            }
                            if (x(g, m.match.def)) {
                                var k = $(g, m.input, !0, !0);
                                if (u = k !== !1, c = k.caret || k.insert ? h() : g, v = !0, u) break
                            } else {
                                if (u = null == m.match.fn, y === g) break;
                                y = g
                            }
                        }
                    if (!u) break
                }
                if (!u) return p().validPositions = e.extend(!0, {}, s), f(!0), !1
            } else p().validPositions[t] = e.extend(!0, {}, i);
            return f(!0), !0
        }

        function m(t, i, n, r) {
            function o(e) {
                var t = p().validPositions[e];
                if (void 0 !== t && null === t.match.fn) {
                    var i = p().validPositions[e - 1],
                        n = p().validPositions[e + 1];
                    return void 0 !== i && void 0 !== n
                }
                return !1
            }
            var s, l = t,
                c = e.extend(!0, {}, p().validPositions),
                u = !1;
            for (p().p = t, s = i - 1; s >= l; s--) void 0 !== p().validPositions[s] && (n === !0 || !o(s) && a.canClearPosition(p(), s, h(), r, a) !== !1) && delete p().validPositions[s];
            for (f(!0), s = l + 1; s <= h();) {
                for (; void 0 !== p().validPositions[l];) l++;
                var d = p().validPositions[l];
                if (s < l && (s = l + 1), void 0 === p().validPositions[s] && E(s) || void 0 !== d) s++;
                else {
                    var v = y(s);
                    u === !1 && c[l] && c[l].match.def === v.match.def ? (p().validPositions[l] = e.extend(!0, {}, c[l]), p().validPositions[l].input = v.input, delete p().validPositions[s], s++) : x(l, v.match.def) ? $(l, v.input || M(s), !0) !== !1 && (delete p().validPositions[s],
                        s++, u = !0) : E(s) || (s++, l--), l++
                }
            }
            f(!0)
        }

        function g(e, t) {
            for (var i, n = e, r = h(), o = p().validPositions[r] || w(0)[0], s = void 0 !== o.alternation ? o.locator[o.alternation].toString().split(",") : [], l = 0; l < n.length && (i = n[l], !i.match || (!a.greedy && !t || i.match.optionalQuantifier === !0) && (i.match.optionality !== !1 && i.match.newBlockMarker !== !1 || i.match.optionalQuantifier === !0) || !(void 0 === o.alternation || o.alternation !== i.alternation || void 0 !== i.locator[o.alternation] && P(i.locator[o.alternation].toString().split(","), s))); l++);
            return i
        }

        function y(e, t, i) {
            return p().validPositions[e] || g(w(e, t ? t.slice() : t, i))
        }

        function k(e) {
            return p().validPositions[e] ? p().validPositions[e] : w(e)[0]
        }

        function x(e, t) {
            for (var i = !1, n = w(e), r = 0; r < n.length; r++)
                if (n[r].match && n[r].match.def === t) {
                    i = !0;
                    break
                }
            return i
        }

        function b(t, i) {
            var n, r;
            return (p().tests[t] || p().validPositions[t]) && e.each(p().tests[t] || [p().validPositions[t]], function(e, t) {
                var o = t.alternation ? t.locator[t.alternation].toString().indexOf(i) : -1;
                (void 0 === r || o < r) && o !== -1 && (n = t, r = o)
            }), n
        }

        function w(t, i, n) {
            function r(i, n, o, s) {
                function c(o, s, d) {
                    function m(t, i) {
                        var n = 0 === e.inArray(t, i.matches);
                        return n || e.each(i.matches, function(e, r) {
                            if (r.isQuantifier === !0 && (n = m(t, i.matches[e - 1]))) return !1
                        }), n
                    }

                    function g(e, t) {
                        var i = b(e, t);
                        return i ? i.locator.slice(i.alternation + 1) : void 0
                    }

                    function y(e, i) {
                        return null === e.match.fn && null !== i.match.fn && i.match.fn.test(e.match.def, p(), t, !1, a, !1)
                    }
                    if (u > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + p().mask;
                    if (u === t && void 0 === o.matches) return f.push({
                        match: o,
                        locator: s.reverse(),
                        cd: v
                    }), !0;
                    if (void 0 !== o.matches) {
                        if (o.isGroup && d !== o) {
                            if (o = c(i.matches[e.inArray(o, i.matches) + 1], s)) return !0
                        } else if (o.isOptional) {
                            var k = o;
                            if (o = r(o, n, s, d)) {
                                if (l = f[f.length - 1].match, !m(l, k)) return !0;
                                h = !0, u = t
                            }
                        } else if (o.isAlternator) {
                            var x, w = o,
                                S = [],
                                T = f.slice(),
                                C = s.length,
                                A = n.length > 0 ? n.shift() : -1;
                            if (A === -1 || "string" == typeof A) {
                                var P, $ = u,
                                    E = n.slice(),
                                    j = [];
                                if ("string" == typeof A) j = A.split(",");
                                else
                                    for (P = 0; P < w.matches.length; P++) j.push(P);
                                for (var O = 0; O < j.length; O++) {
                                    if (P = parseInt(j[O]), f = [], n = g(u, P) || E.slice(), o = c(w.matches[P] || i.matches[P], [P].concat(s), d) || o, o !== !0 && void 0 !== o && j[j.length - 1] < w.matches.length) {
                                        var D = e.inArray(o, i.matches) + 1;
                                        i.matches.length > D && (o = c(i.matches[D], [D].concat(s.slice(1, s.length)), d), o && (j.push(D.toString()), e.each(f, function(e, t) {
                                            t.alternation = s.length - 1
                                        })))
                                    }
                                    x = f.slice(), u = $, f = [];
                                    for (var N = 0; N < x.length; N++) {
                                        var M = x[N],
                                            I = !1;
                                        M.alternation = M.alternation || C;
                                        for (var R = 0; R < S.length; R++) {
                                            var L = S[R];
                                            if (("string" != typeof A || e.inArray(M.locator[M.alternation].toString(), j) !== -1) && (M.match.def === L.match.def || y(M, L))) {
                                                I = M.match.mask === L.match.mask, L.locator[M.alternation].toString().indexOf(M.locator[M.alternation]) === -1 && (L.locator[M.alternation] = L.locator[M.alternation] + "," + M.locator[M.alternation], L.alternation = M.alternation, null == M.match.fn && (L.na = L.na || M.locator[M.alternation].toString(), L.na.indexOf(M.locator[M.alternation]) === -1 && (L.na = L.na + "," + M.locator[M.alternation])));
                                                break
                                            }
                                        }
                                        I || S.push(M)
                                    }
                                }
                                "string" == typeof A && (S = e.map(S, function(t, i) {
                                    if (isFinite(i)) {
                                        var n, r = t.alternation,
                                            o = t.locator[r].toString().split(",");
                                        t.locator[r] = void 0, t.alternation = void 0;
                                        for (var a = 0; a < o.length; a++) n = e.inArray(o[a], j) !== -1, n && (void 0 !== t.locator[r] ? (t.locator[r] += ",", t.locator[r] += o[a]) : t.locator[r] = parseInt(o[a]), t.alternation = r);
                                        if (void 0 !== t.locator[r]) return t
                                    }
                                })), f = T.concat(S), u = t, h = f.length > 0, n = E.slice()
                            } else o = c(w.matches[A] || i.matches[A], [A].concat(s), d);
                            if (o) return !0
                        } else if (o.isQuantifier && d !== i.matches[e.inArray(o, i.matches) - 1])
                            for (var H = o, F = n.length > 0 ? n.shift() : 0; F < (isNaN(H.quantifier.max) ? F + 1 : H.quantifier.max) && u <= t; F++) {
                                var _ = i.matches[e.inArray(H, i.matches) - 1];
                                if (o = c(_, [F].concat(s), _)) {
                                    if (l = f[f.length - 1].match, l.optionalQuantifier = F > H.quantifier.min - 1, m(l, _)) {
                                        if (F > H.quantifier.min - 1) {
                                            h = !0, u = t;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (o = r(o, n, s, d)) return !0
                    } else u++
                }
                for (var d = n.length > 0 ? n.shift() : 0; d < i.matches.length; d++)
                    if (i.matches[d].isQuantifier !== !0) {
                        var m = c(i.matches[d], [d].concat(o), s);
                        if (m && u === t) return m;
                        if (u > t) break
                    }
            }

            function o(t) {
                var i = [];
                return e.isArray(t) || (t = [t]), t.length > 0 && (void 0 === t[0].alternation ? (i = g(t.slice()).locator.slice(), 0 === i.length && (i = t[0].locator.slice())) : e.each(t, function(e, t) {
                    if ("" !== t.def)
                        if (0 === i.length) i = t.locator.slice();
                        else
                            for (var n = 0; n < i.length; n++) t.locator[n] && i[n].toString().indexOf(t.locator[n]) === -1 && (i[n] += "," + t.locator[n])
                })), i
            }

            function s(e) {
                return a.keepStatic && t > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && e[0].match.optionality !== !0 && e[0].match.optionalQuantifier !== !0 && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def) ? [g(e)] : e
            }
            var l, c = p().maskToken,
                u = i ? n : 0,
                d = i ? i.slice() : [0],
                f = [],
                h = !1,
                v = i ? i.join("") : "";
            if (t > -1) {
                if (void 0 === i) {
                    for (var m, y = t - 1; void 0 === (m = p().validPositions[y] || p().tests[y]) && y > -1;) y--;
                    void 0 !== m && y > -1 && (d = o(m), v = d.join(""), u = y)
                }
                if (p().tests[t] && p().tests[t][0].cd === v) return s(p().tests[t]);
                for (var k = d.shift(); k < c.length; k++) {
                    var x = r(c[k], d, [k]);
                    if (x && u === t || u > t) break
                }
            }
            return (0 === f.length || h) && f.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: v
            }), void 0 !== i && p().tests[t] ? s(e.extend(!0, [], f)) : (p().tests[t] = e.extend(!0, [], f), s(p().tests[t]))
        }

        function S() {
            return void 0 === p()._buffer && (p()._buffer = l(!1, 1), void 0 === p().buffer && p()._buffer.slice()), p()._buffer
        }

        function T(e) {
            return void 0 !== p().buffer && e !== !0 || (p().buffer = l(!0, h(), !0)), p().buffer
        }

        function C(e, t, i) {
            var n;
            if (e === !0) f(), e = 0, t = i.length;
            else
                for (n = e; n < t; n++) delete p().validPositions[n];
            for (n = e; n < t; n++) f(!0), i[n] !== a.skipOptionalPartCharacter && $(n, i[n], !0, !0)
        }

        function A(e, i, n) {
            switch (i.casing) {
                case "upper":
                    e = e.toUpperCase();
                    break;
                case "lower":
                    e = e.toLowerCase();
                    break;
                case "title":
                    var r = p().validPositions[n - 1];
                    e = 0 === n || r && r.input === String.fromCharCode(t.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase()
            }
            return e
        }

        function P(t, i) {
            for (var n = a.greedy ? i : i.slice(0, 1), r = !1, o = 0; o < t.length; o++)
                if (e.inArray(t[o], n) !== -1) {
                    r = !0;
                    break
                }
            return r
        }

        function $(i, n, r, o, s) {
            function l(e) {
                return ce ? e.begin - e.end > 1 || e.begin - e.end === 1 && a.insertMode : e.end - e.begin > 1 || e.end - e.begin === 1 && a.insertMode
            }

            function c(t, n, r) {
                var s = !1;
                return e.each(w(t), function(c, u) {
                    for (var d = u.match, g = n ? 1 : 0, y = "", k = d.cardinality; k > g; k--) y += D(t - (k - 1));
                    if (n && (y += n), T(!0), s = null != d.fn ? d.fn.test(y, p(), t, r, a, l(i)) : (n === d.def || n === a.skipOptionalPartCharacter) && "" !== d.def && {
                            c: d.placeholder || d.def,
                            pos: t
                        }, s !== !1) {
                        var x = void 0 !== s.c ? s.c : n;
                        x = x === a.skipOptionalPartCharacter && null === d.fn ? d.placeholder || d.def : x;
                        var b = t,
                            w = T();
                        if (void 0 !== s.remove && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort(function(e, t) {
                                return t - e
                            }), function(e, t) {
                                m(t, t + 1, !0)
                            })), void 0 !== s.insert && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort(function(e, t) {
                                return e - t
                            }), function(e, t) {
                                $(t.pos, t.c, !1, o)
                            })), s.refreshFromBuffer) {
                            var S = s.refreshFromBuffer;
                            if (r = !0, C(S === !0 ? S : S.start, S.end, w), void 0 === s.pos && void 0 === s.c) return s.pos = h(), !1;
                            if (b = void 0 !== s.pos ? s.pos : t, b !== t) return s = e.extend(s, $(b, x, !0, o)), !1
                        } else if (s !== !0 && void 0 !== s.pos && s.pos !== t && (b = s.pos, C(t, b, T().slice()), b !== t)) return s = e.extend(s, $(b, x, !0)), !1;
                        return (s === !0 || void 0 !== s.pos || void 0 !== s.c) && (c > 0 && f(!0), v(b, e.extend({}, u, {
                            input: A(x, d, b)
                        }), o, l(i)) || (s = !1), !1)
                    }
                }), s
            }

            function u(t, i, n) {
                var r, s, l, c, u, d, v, m, g = e.extend(!0, {}, p().validPositions),
                    y = !1,
                    k = h();
                for (c = p().validPositions[k]; k >= 0; k--)
                    if (l = p().validPositions[k], l && void 0 !== l.alternation) {
                        if (r = k, s = p().validPositions[r].alternation, c.locator[l.alternation] !== l.locator[l.alternation]) break;
                        c = l
                    }
                if (void 0 !== s) {
                    m = parseInt(r);
                    var x = void 0 !== c.locator[c.alternation || s] ? c.locator[c.alternation || s] : v[0];
                    x.length > 0 && (x = x.split(",")[0]);
                    var b = p().validPositions[m],
                        S = p().validPositions[m - 1];
                    e.each(w(m, S ? S.locator : void 0, m - 1), function(r, l) {
                        v = l.locator[s] ? l.locator[s].toString().split(",") : [];
                        for (var c = 0; c < v.length; c++) {
                            var k = [],
                                w = 0,
                                S = 0,
                                T = !1;
                            if (x < v[c] && (void 0 === l.na || e.inArray(v[c], l.na.split(",")) === -1)) {
                                p().validPositions[m] = e.extend(!0, {}, l);
                                var C = p().validPositions[m].locator;
                                for (p().validPositions[m].locator[s] = parseInt(v[c]), null == l.match.fn ? (b.input !== l.match.def && (T = !0, b.generatedInput !== !0 && k.push(b.input)), S++, p().validPositions[m].generatedInput = !/[0-9a-bA-Z]/.test(l.match.def), p().validPositions[m].input = l.match.def) : p().validPositions[m].input = b.input, u = m + 1; u < h(void 0, !0) + 1; u++) d = p().validPositions[u], d && d.generatedInput !== !0 && /[0-9a-bA-Z]/.test(d.input) ? k.push(d.input) : u < t && w++, delete p().validPositions[u];
                                for (T && k[0] === l.match.def && k.shift(), f(!0), y = !0; k.length > 0;) {
                                    var A = k.shift();
                                    if (A !== a.skipOptionalPartCharacter && !(y = $(h(void 0, !0) + 1, A, !1, o, !0))) break
                                }
                                if (y) {
                                    p().validPositions[m].locator = C;
                                    var P = h(t) + 1;
                                    for (u = m + 1; u < h() + 1; u++) d = p().validPositions[u], (void 0 === d || null == d.match.fn) && u < t + (S - w) && S++;
                                    t += S - w, y = $(t > P ? P : t, i, n, o, !0)
                                }
                                if (y) return !1;
                                f(), p().validPositions = e.extend(!0, {}, g)
                            }
                        }
                    })
                }
                return y
            }

            function d(t, i) {
                for (var n = p().validPositions[i], r = n.locator, o = r.length, a = t; a < i; a++)
                    if (void 0 === p().validPositions[a] && !E(a, !0)) {
                        var s = w(a),
                            l = s[0],
                            c = -1;
                        e.each(s, function(e, t) {
                            for (var i = 0; i < o && void 0 !== t.locator[i] && P(t.locator[i].toString().split(","), r[i].toString().split(",")); i++) c < i && (c = i, l = t)
                        }), v(a, e.extend({}, l, {
                            input: l.match.placeholder || l.match.def
                        }), !0)
                    }
            }
            r = r === !0;
            var k = i;
            void 0 !== i.begin && (k = ce && !l(i) ? i.end : i.begin);
            for (var x = !1, b = e.extend(!0, {}, p().validPositions), S = k - 1; S > -1 && !p().validPositions[S]; S--);
            var O;
            for (S++; S < k; S++) void 0 === p().validPositions[S] && (a.jitMasking === !1 || a.jitMasking > S) && ((O = y(S, y(S - 1).locator, S - 1)).match.def === a.radixPointDefinitionSymbol || !E(S, !0) || e.inArray(a.radixPoint, T()) < S && O.match.fn && O.match.fn.test(M(S), p(), S, !1, a)) && (x = c(S, O.match.placeholder || (null == O.match.fn ? O.match.def : "" !== M(S) ? M(S) : T()[S]), !0), x !== !1 && (p().validPositions[x.pos || S].generatedInput = !0));
            if (l(i) && (B(void 0, t.keyCode.DELETE, i), k = p().p), k < p().maskLength && (x = c(k, n, r), (!r || o === !0) && x === !1)) {
                var N = p().validPositions[k];
                if (!N || null !== N.match.fn || N.match.def !== n && n !== a.skipOptionalPartCharacter) {
                    if ((a.insertMode || void 0 === p().validPositions[j(k)]) && !E(k, !0)) {
                        var I = w(k).slice();
                        "" === I[I.length - 1].match.def && I.pop();
                        var R = g(I, !0);
                        R && (R = R.match.placeholder || R.match.def, c(k, R, r));
                        for (var L = k + 1, H = j(k); L <= H; L++)
                            if (x = c(L, n, r), x !== !1) {
                                d(k, L), k = L;
                                break
                            }
                    }
                } else x = {
                    caret: j(k)
                }
            }
            return x === !1 && a.keepStatic && !r && s !== !0 && (x = u(k, n, r)), x === !0 && (x = {
                pos: k
            }), e.isFunction(a.postValidation) && x !== !1 && !r && o !== !0 && (x = !!a.postValidation(T(!0), x, a) && x), void 0 === x.pos && (x.pos = k), x === !1 && (f(!0), p().validPositions = e.extend(!0, {}, b)), x
        }

        function E(e, t) {
            var i;
            if (t ? (i = y(e).match, "" === i.def && (i = k(e).match)) : i = k(e).match, null != i.fn) return i.fn;
            if (t !== !0 && e > -1) {
                var n = w(e);
                return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)
            }
            return !1
        }

        function j(e, t) {
            var i = p().maskLength;
            if (e >= i) return i;
            for (var n = e; ++n < i && (t === !0 && (k(n).match.newBlockMarker !== !0 || !E(n)) || t !== !0 && !E(n)););
            return n
        }

        function O(e, t) {
            var i, n = e;
            if (n <= 0) return 0;
            for (; --n > 0 && (t === !0 && k(n).match.newBlockMarker !== !0 || t !== !0 && !E(n) && (i = w(n), i.length < 2 || 2 === i.length && "" === i[1].match.def)););
            return n
        }

        function D(e) {
            return void 0 === p().validPositions[e] ? M(e) : p().validPositions[e].input
        }

        function N(t, i, n, r, o) {
            if (r && e.isFunction(a.onBeforeWrite)) {
                var s = a.onBeforeWrite(r, i, n, a);
                if (s) {
                    if (s.refreshFromBuffer) {
                        var l = s.refreshFromBuffer;
                        C(l === !0 ? l : l.start, l.end, s.buffer || i), i = T(!0)
                    }
                    void 0 !== n && (n = void 0 !== s.caret ? s.caret : n)
                }
            }
            t.inputmask._valueSet(i.join("")), void 0 === n || void 0 !== r && "blur" === r.type || L(t, n), o === !0 && (de = !0, e(t).trigger("input"))
        }

        function M(e, t) {
            if (t = t || k(e).match, void 0 !== t.placeholder) return t.placeholder;
            if (null === t.fn) {
                if (e > -1 && void 0 === p().validPositions[e]) {
                    var i, n = w(e),
                        r = [];
                    if (n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0))
                        for (var o = 0; o < n.length; o++)
                            if (n[o].match.optionality !== !0 && n[o].match.optionalQuantifier !== !0 && (null === n[o].match.fn || void 0 === i || n[o].match.fn.test(i.match.def, p(), e, !0, a) !== !1) && (r.push(n[o]), null === n[o].match.fn && (i = n[o]), r.length > 1 && /[0-9a-bA-Z]/.test(r[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length)
                }
                return t.def
            }
            return a.placeholder.charAt(e % a.placeholder.length)
        }

        function I(i, n, r, o, s) {
            function l() {
                var e = !1,
                    t = S().slice(d, j(d)).join("").indexOf(u);
                if (t !== -1 && !E(d)) {
                    e = !0;
                    for (var i = S().slice(d, d + t), n = 0; n < i.length; n++)
                        if (" " !== i[n]) {
                            e = !1;
                            break
                        }
                }
                return e
            }
            var c = o.slice(),
                u = "",
                d = 0,
                v = void 0;
            if (f(), p().p = j(-1), !r)
                if (a.autoUnmask !== !0) {
                    var m = S().slice(0, j(-1)).join(""),
                        g = c.join("").match(new RegExp("^" + t.escapeRegex(m), "g"));
                    g && g.length > 0 && (c.splice(0, g.length * m.length), d = j(d))
                } else d = j(d);
            if (e.each(c, function(t, n) {
                    if (void 0 !== n) {
                        var o = new e.Event("keypress");
                        o.which = n.charCodeAt(0), u += n;
                        var s = h(void 0, !0),
                            c = p().validPositions[s],
                            m = y(s + 1, c ? c.locator.slice() : void 0, s);
                        if (!l() || r || a.autoUnmask) {
                            var g = r ? t : null == m.match.fn && m.match.optionality && s + 1 < p().p ? s + 1 : p().p;
                            v = W.call(i, o, !0, !1, r, g), d = g + 1, u = ""
                        } else v = W.call(i, o, !0, !1, !0, s + 1);
                        if (!r && e.isFunction(a.onBeforeWrite) && (v = a.onBeforeWrite(o, T(), v.forwardPosition, a), v && v.refreshFromBuffer)) {
                            var k = v.refreshFromBuffer;
                            C(k === !0 ? k : k.start, k.end, v.buffer), f(!0), v.caret && (p().p = v.caret)
                        }
                    }
                }), n) {
                var k = document.activeElement === i && (s || v) ? s ? L(i).begin : v.forwardPosition : void 0,
                    x = T().length - i.inputmask._valueGet().length;
                N(i, T(), k + x, s || new e.Event("checkval"))
            }
        }

        function R(t) {
            if (t && void 0 === t.inputmask) return t.value;
            var i = [],
                n = p().validPositions;
            for (var r in n) n[r].match && null != n[r].match.fn && i.push(n[r].input);
            var o = 0 === i.length ? "" : (ce ? i.reverse() : i).join("");
            if (e.isFunction(a.onUnMask)) {
                var s = (ce ? T().slice().reverse() : T()).join("");
                o = a.onUnMask(s, o, a) || o
            }
            return o
        }

        function L(e, t, i, n) {
            function r(e) {
                if (n !== !0 && ce && "number" == typeof e && (!a.greedy || "" !== a.placeholder)) {
                    var t = T().join("").length;
                    e = t - e
                }
                return e
            }
            var o;
            if ("number" != typeof t) return e.setSelectionRange ? (t = e.selectionStart, i = e.selectionEnd) : window.getSelection ? (o = window.getSelection().getRangeAt(0), o.commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, i = o.endOffset)) : document.selection && document.selection.createRange && (o = document.selection.createRange(), t = 0 - o.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + o.text.length), {
                begin: r(t),
                end: r(i)
            };
            t = r(t), i = r(i), i = "number" == typeof i ? i : t;
            var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
            if (e.scrollLeft = s > e.scrollWidth ? s : 0, c || a.insertMode !== !1 || t !== i || i++, e.setSelectionRange) e.selectionStart = t, e.selectionEnd = i;
            else if (window.getSelection) {
                if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                    var l = document.createTextNode("");
                    e.appendChild(l)
                }
                o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), o.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), o.collapse(!0);
                var u = window.getSelection();
                u.removeAllRanges(), u.addRange(o)
            } else e.createTextRange && (o = e.createTextRange(), o.collapse(!0), o.moveEnd("character", i), o.moveStart("character", t), o.select())
        }

        function H(t) {
            var i, n, r = T(),
                o = r.length,
                a = h(),
                s = {},
                l = p().validPositions[a],
                c = void 0 !== l ? l.locator.slice() : void 0;
            for (i = a + 1; i < r.length; i++) n = y(i, c, i - 1), c = n.locator.slice(), s[i] = e.extend(!0, {}, n);
            var u = l && void 0 !== l.alternation ? l.locator[l.alternation] : void 0;
            for (i = o - 1; i > a && (n = s[i], (n.match.optionality || n.match.optionalQuantifier || u && (u !== s[i].locator[l.alternation] && null != n.match.fn || null === n.match.fn && n.locator[l.alternation] && P(n.locator[l.alternation].toString().split(","), u.toString().split(",")) && "" !== w(i)[0].def)) && r[i] === M(i, n.match)); i--) o--;
            return t ? {
                l: o,
                def: s[o] ? s[o].match : void 0
            } : o
        }

        function F(e) {
            for (var t = H(), i = e.length - 1; i > t && !E(i); i--);
            return e.splice(t, i + 1 - t), e
        }

        function _(t) {
            if (e.isFunction(a.isComplete)) return a.isComplete(t, a);
            if ("*" !== a.repeat) {
                var i = !1,
                    n = H(!0),
                    r = O(n.l);
                if (void 0 === n.def || n.def.newBlockMarker || n.def.optionality || n.def.optionalQuantifier) {
                    i = !0;
                    for (var o = 0; o <= r; o++) {
                        var s = y(o).match;
                        if (null !== s.fn && void 0 === p().validPositions[o] && s.optionality !== !0 && s.optionalQuantifier !== !0 || null === s.fn && t[o] !== M(o, s)) {
                            i = !1;
                            break
                        }
                    }
                }
                return i
            }
        }

        function q(t) {
            function i(t) {
                if (e.valHooks && (void 0 === e.valHooks[t] || e.valHooks[t].inputmaskpatch !== !0)) {
                    var i = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function(e) {
                            return e.value
                        },
                        n = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function(e, t) {
                            return e.value = t, e
                        };
                    e.valHooks[t] = {
                        get: function(e) {
                            if (e.inputmask) {
                                if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                var t = i(e);
                                return h(void 0, void 0, e.inputmask.maskset.validPositions) !== -1 || a.nullable !== !0 ? t : ""
                            }
                            return i(e)
                        },
                        set: function(t, i) {
                            var r, o = e(t);
                            return r = n(t, i), t.inputmask && o.trigger("setvalue"), r
                        },
                        inputmaskpatch: !0
                    }
                }
            }

            function n() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : h() !== -1 || a.nullable !== !0 ? document.activeElement === this && a.clearMaskOnLostFocus ? (ce ? F(T().slice()).reverse() : F(T().slice())).join("") : s.call(this) : "" : s.call(this)
            }

            function r(t) {
                l.call(this, t), this.inputmask && e(this).trigger("setvalue")
            }

            function o(t) {
                he.on(t, "mouseenter", function(t) {
                    var i = e(this),
                        n = this,
                        r = n.inputmask._valueGet();
                    r !== T().join("") && i.trigger("setvalue")
                })
            }
            var s, l;
            if (!t.inputmask.__valueGet) {
                if (Object.getOwnPropertyDescriptor) {
                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(e) {
                        return e.__proto__
                    } : function(e) {
                        return e.constructor.prototype
                    });
                    var c = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                    c && c.get && c.set ? (s = c.get, l = c.set, Object.defineProperty(t, "value", {
                        get: n,
                        set: r,
                        configurable: !0
                    })) : "INPUT" !== t.tagName && (s = function() {
                        return this.textContent
                    }, l = function(e) {
                        this.textContent = e
                    }, Object.defineProperty(t, "value", {
                        get: n,
                        set: r,
                        configurable: !0
                    }))
                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (s = t.__lookupGetter__("value"), l = t.__lookupSetter__("value"), t.__defineGetter__("value", n), t.__defineSetter__("value", r));
                t.inputmask.__valueGet = s, t.inputmask._valueGet = function(e) {
                    return ce && e !== !0 ? s.call(this.el).split("").reverse().join("") : s.call(this.el)
                }, t.inputmask.__valueSet = l, t.inputmask._valueSet = function(e, t) {
                    l.call(this.el, null === e || void 0 === e ? "" : t !== !0 && ce ? e.split("").reverse().join("") : e)
                }, void 0 === s && (s = function() {
                    return this.value
                }, l = function(e) {
                    this.value = e
                }, i(t.type), o(t))
            }
        }

        function B(i, n, r, o) {
            function s() {
                if (a.keepStatic) {
                    for (var t = [], n = h(-1, !0), r = e.extend(!0, {}, p().validPositions), o = p().validPositions[n]; n >= 0; n--) {
                        var s = p().validPositions[n];
                        if (s) {
                            if (/[0-9a-bA-Z]/.test(s.input) && t.push(s.input), delete p().validPositions[n], void 0 !== s.alternation && s.locator[s.alternation] !== o.locator[s.alternation]) break;
                            o = s
                        }
                    }
                    if (n > -1)
                        for (p().p = j(h(-1, !0)); t.length > 0;) {
                            var l = new e.Event("keypress");
                            l.which = t.pop().charCodeAt(0), W.call(i, l, !0, !1, !1, p().p)
                        } else p().validPositions = e.extend(!0, {}, r)
                }
            }
            if ((a.numericInput || ce) && (n === t.keyCode.BACKSPACE ? n = t.keyCode.DELETE : n === t.keyCode.DELETE && (n = t.keyCode.BACKSPACE), ce)) {
                var l = r.end;
                r.end = r.begin, r.begin = l
            }
            n === t.keyCode.BACKSPACE && (r.end - r.begin < 1 || a.insertMode === !1) ? (r.begin = O(r.begin), void 0 === p().validPositions[r.begin] || p().validPositions[r.begin].input !== a.groupSeparator && p().validPositions[r.begin].input !== a.radixPoint || r.begin--) : n === t.keyCode.DELETE && r.begin === r.end && (r.end = E(r.end, !0) ? r.end + 1 : j(r.end) + 1, void 0 === p().validPositions[r.begin] || p().validPositions[r.begin].input !== a.groupSeparator && p().validPositions[r.begin].input !== a.radixPoint || r.end++), m(r.begin, r.end, !1, o), o !== !0 && s();
            var c = h(r.begin, !0);
            c < r.begin ? p().p = j(c) : o !== !0 && (p().p = r.begin)
        }

        function z(n) {
            var r = this,
                o = e(r),
                s = n.keyCode,
                l = L(r);
            if (s === t.keyCode.BACKSPACE || s === t.keyCode.DELETE || d && s === t.keyCode.BACKSPACE_SAFARI || n.ctrlKey && s === t.keyCode.X && !i("cut")) n.preventDefault(), B(r, s, l), N(r, T(!0), p().p, n, r.inputmask._valueGet() !== T().join("")), r.inputmask._valueGet() === S().join("") ? o.trigger("cleared") : _(T()) === !0 && o.trigger("complete"), a.showTooltip && (r.title = a.tooltip || p().mask);
            else if (s === t.keyCode.END || s === t.keyCode.PAGE_DOWN) {
                n.preventDefault();
                var c = j(h());
                a.insertMode || c !== p().maskLength || n.shiftKey || c--, L(r, n.shiftKey ? l.begin : c, c, !0)
            } else s === t.keyCode.HOME && !n.shiftKey || s === t.keyCode.PAGE_UP ? (n.preventDefault(), L(r, 0, n.shiftKey ? l.begin : 0, !0)) : (a.undoOnEscape && s === t.keyCode.ESCAPE || 90 === s && n.ctrlKey) && n.altKey !== !0 ? (I(r, !0, !1, re.split("")), o.trigger("click")) : s !== t.keyCode.INSERT || n.shiftKey || n.ctrlKey ? a.tabThrough === !0 && s === t.keyCode.TAB ? (n.shiftKey === !0 ? (null === k(l.begin).match.fn && (l.begin = j(l.begin)), l.end = O(l.begin, !0), l.begin = O(l.end, !0)) : (l.begin = j(l.begin, !0), l.end = j(l.begin, !0), l.end < p().maskLength && l.end--), l.begin < p().maskLength && (n.preventDefault(), L(r, l.begin, l.end))) : a.insertMode !== !1 || n.shiftKey || (s === t.keyCode.RIGHT ? setTimeout(function() {
                var e = L(r);
                L(r, e.begin)
            }, 0) : s === t.keyCode.LEFT && setTimeout(function() {
                var e = L(r);
                L(r, ce ? e.begin + 1 : e.begin - 1)
            }, 0)) : (a.insertMode = !a.insertMode, L(r, a.insertMode || l.begin !== p().maskLength ? l.begin : l.begin - 1));
            a.onKeyDown.call(this, n, T(), L(r).begin, a), pe = e.inArray(s, a.ignorables) !== -1
        }

        function W(i, n, r, o, s) {
            var l = this,
                c = e(l),
                u = i.which || i.charCode || i.keyCode;
            if (!(n === !0 || i.ctrlKey && i.altKey) && (i.ctrlKey || i.metaKey || pe)) return u === t.keyCode.ENTER && re !== T().join("") && (re = T().join(""), setTimeout(function() {
                c.trigger("change")
            }, 0)), !0;
            if (u) {
                46 === u && i.shiftKey === !1 && "," === a.radixPoint && (u = 44);
                var d, h = n ? {
                        begin: s,
                        end: s
                    } : L(l),
                    v = String.fromCharCode(u);
                p().writeOutBuffer = !0;
                var m = $(h, v, o);
                if (m !== !1 && (f(!0), d = void 0 !== m.caret ? m.caret : n ? m.pos + 1 : j(m.pos), p().p = d), r !== !1) {
                    var g = this;
                    if (setTimeout(function() {
                            a.onKeyValidation.call(g, u, m, a)
                        }, 0), p().writeOutBuffer && m !== !1) {
                        var y = T();
                        N(l, y, a.numericInput && void 0 === m.caret ? O(d) : d, i, n !== !0), n !== !0 && setTimeout(function() {
                            _(y) === !0 && c.trigger("complete")
                        }, 0)
                    }
                }
                if (a.showTooltip && (l.title = a.tooltip || p().mask), i.preventDefault(), n) return m.forwardPosition = d, m
            }
        }

        function G(t) {
            var i, n = this,
                r = t.originalEvent || t,
                o = e(n),
                s = n.inputmask._valueGet(!0),
                l = L(n);
            ce && (i = l.end, l.end = l.begin, l.begin = i);
            var c = s.substr(0, l.begin),
                u = s.substr(l.end, s.length);
            c === (ce ? S().reverse() : S()).slice(0, l.begin).join("") && (c = ""), u === (ce ? S().reverse() : S()).slice(l.end).join("") && (u = ""), ce && (i = c, c = u, u = i), window.clipboardData && window.clipboardData.getData ? s = c + window.clipboardData.getData("Text") + u : r.clipboardData && r.clipboardData.getData && (s = c + r.clipboardData.getData("text/plain") + u);
            var d = s;
            if (e.isFunction(a.onBeforePaste)) {
                if (d = a.onBeforePaste(s, a), d === !1) return t.preventDefault();
                d || (d = s)
            }
            return I(n, !1, !1, ce ? d.split("").reverse() : d.toString().split("")), N(n, T(), j(h()), t, re !== T().join("")), _(T()) === !0 && o.trigger("complete"), t.preventDefault()
        }

        function U(i) {
            var n = this,
                r = n.inputmask._valueGet();
            if (T().join("") !== r) {
                var o = L(n);
                if (r = r.replace(new RegExp("(" + t.escapeRegex(S().join("")) + ")*"), ""), u) {
                    var a = r.replace(T().join(""), "");
                    if (1 === a.length) {
                        var s = new e.Event("keypress");
                        return s.which = a.charCodeAt(0), W.call(n, s, !0, !0, !1, p().validPositions[o.begin - 1] ? o.begin : o.begin - 1), !1
                    }
                }
                if (o.begin > r.length && (L(n, r.length), o = L(n)), T().length - r.length !== 1 || r.charAt(o.begin) === T()[o.begin] || r.charAt(o.begin + 1) === T()[o.begin] || E(o.begin)) {
                    for (var l = h() + 1, c = T().slice(l).join(""); null === r.match(t.escapeRegex(c) + "$");) c = c.slice(1);
                    r = r.replace(c, ""), r = r.split(""), I(n, !0, !1, r, i), _(T()) === !0 && e(n).trigger("complete")
                } else i.keyCode = t.keyCode.BACKSPACE, z.call(n, i);
                i.preventDefault()
            }
        }

        function X(t) {
            var i = this,
                n = i.inputmask._valueGet();
            I(i, !0, !1, (e.isFunction(a.onBeforeMask) ? a.onBeforeMask(n, a) || n : n).split("")), re = T().join(""), (a.clearMaskOnLostFocus || a.clearIncomplete) && i.inputmask._valueGet() === S().join("") && i.inputmask._valueSet("")
        }

        function Y(e) {
            var t = this,
                i = t.inputmask._valueGet();
            a.showMaskOnFocus && (!a.showMaskOnHover || a.showMaskOnHover && "" === i) ? t.inputmask._valueGet() !== T().join("") && N(t, T(), j(h())) : fe === !1 && L(t, j(h())), a.positionCaretOnTab === !0 && setTimeout(function() {
                V.apply(this, [e])
            }, 0), re = T().join("")
        }

        function K(e) {
            var t = this;
            if (fe = !1, a.clearMaskOnLostFocus && document.activeElement !== t) {
                var i = T().slice(),
                    n = t.inputmask._valueGet();
                n !== t.getAttribute("placeholder") && "" !== n && (h() === -1 && n === S().join("") ? i = [] : F(i), N(t, i))
            }
        }

        function V(t) {
            function i(t) {
                if ("" !== a.radixPoint) {
                    var i = p().validPositions;
                    if (void 0 === i[t] || i[t].input === M(t)) {
                        if (t < j(-1)) return !0;
                        var n = e.inArray(a.radixPoint, T());
                        if (n !== -1) {
                            for (var r in i)
                                if (n < r && i[r].input !== M(r)) return !1;
                            return !0
                        }
                    }
                }
                return !1
            }
            var n = this;
            setTimeout(function() {
                if (document.activeElement === n) {
                    var t = L(n);
                    if (t.begin === t.end) switch (a.positionCaretOnClick) {
                        case "none":
                            break;
                        case "radixFocus":
                            if (i(t.begin)) {
                                L(n, a.numericInput ? j(e.inArray(a.radixPoint, T())) : e.inArray(a.radixPoint, T()));
                                break
                            }
                        default:
                            var r = t.begin,
                                o = h(r, !0),
                                s = j(o);
                            if (r < s) L(n, E(r) || E(r - 1) ? r : j(r));
                            else {
                                var l = M(s);
                                ("" !== l && T()[s] !== l && k(s).match.optionalQuantifier !== !0 || !E(s, !0) && k(s).match.def === l) && (s = j(s)), L(n, s)
                            }
                    }
                }
            }, 0)
        }

        function Q(e) {
            var t = this;
            setTimeout(function() {
                L(t, 0, j(h()))
            }, 0)
        }

        function Z(i) {
            var n = this,
                r = e(n),
                o = L(n),
                s = i.originalEvent || i,
                l = window.clipboardData || s.clipboardData,
                c = ce ? T().slice(o.end, o.begin) : T().slice(o.begin, o.end);
            l.setData("text", ce ? c.reverse().join("") : c.join("")), document.execCommand && document.execCommand("copy"), B(n, t.keyCode.DELETE, o), N(n, T(), p().p, i, re !== T().join("")), n.inputmask._valueGet() === S().join("") && r.trigger("cleared"), a.showTooltip && (n.title = a.tooltip || p().mask)
        }

        function J(t) {
            var i = e(this),
                n = this;
            if (n.inputmask) {
                var r = n.inputmask._valueGet(),
                    o = T().slice();
                re !== o.join("") && setTimeout(function() {
                    i.trigger("change"), re = o.join("")
                }, 0), "" !== r && (a.clearMaskOnLostFocus && (h() === -1 && r === S().join("") ? o = [] : F(o)), _(o) === !1 && (setTimeout(function() {
                    i.trigger("incomplete")
                }, 0), a.clearIncomplete && (f(), o = a.clearMaskOnLostFocus ? [] : S().slice())), N(n, o, void 0, t))
            }
        }

        function ee(e) {
            var t = this;
            fe = !0, document.activeElement !== t && a.showMaskOnHover && t.inputmask._valueGet() !== T().join("") && N(t, T())
        }

        function te(e) {
            re !== T().join("") && ae.trigger("change"), a.clearMaskOnLostFocus && h() === -1 && oe.inputmask._valueGet && oe.inputmask._valueGet() === S().join("") && oe.inputmask._valueSet(""), a.removeMaskOnSubmit && (oe.inputmask._valueSet(oe.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                N(oe, T())
            }, 0))
        }

        function ie(e) {
            setTimeout(function() {
                ae.trigger("setvalue")
            }, 0)
        }

        function ne(t) {
            if (oe = t, ae = e(oe), a.showTooltip && (oe.title = a.tooltip || p().mask), ("rtl" === oe.dir || a.rightAlign) && (oe.style.textAlign = "right"), ("rtl" === oe.dir || a.numericInput) && (oe.dir = "ltr", oe.removeAttribute("dir"), oe.inputmask.isRTL = !0, ce = !0), he.off(oe), q(oe), n(oe, a) && (he.on(oe, "submit", te), he.on(oe, "reset", ie), he.on(oe, "mouseenter", ee), he.on(oe, "blur", J), he.on(oe, "focus", Y), he.on(oe, "mouseleave", K), he.on(oe, "click", V), he.on(oe, "dblclick", Q), he.on(oe, "paste", G), he.on(oe, "dragdrop", G), he.on(oe, "drop", G), he.on(oe, "cut", Z), he.on(oe, "complete", a.oncomplete), he.on(oe, "incomplete", a.onincomplete), he.on(oe, "cleared", a.oncleared), a.inputEventOnly !== !0 && (he.on(oe, "keydown", z), he.on(oe, "keypress", W)), he.on(oe, "input", U)), he.on(oe, "setvalue", X), S(), "" !== oe.inputmask._valueGet() || a.clearMaskOnLostFocus === !1 || document.activeElement === oe) {
                var i = e.isFunction(a.onBeforeMask) ? a.onBeforeMask(oe.inputmask._valueGet(), a) || oe.inputmask._valueGet() : oe.inputmask._valueGet();
                I(oe, !0, !1, i.split(""));
                var r = T().slice();
                re = r.join(""), _(r) === !1 && a.clearIncomplete && f(), a.clearMaskOnLostFocus && document.activeElement !== oe && (h() === -1 ? r = [] : F(r)), N(oe, r), document.activeElement === oe && L(oe, j(h()))
            }
        }
        var re, oe, ae, se, le, ce = !1,
            ue = !1,
            de = !1,
            pe = !1,
            fe = !0,
            he = {
                on: function(i, n, r) {
                    var o = function(i) {
                        if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                            var n = e.data(this, "_inputmask_opts");
                            n ? new t(n).mask(this) : he.off(this)
                        } else {
                            if ("setvalue" === i.type || !(this.disabled || this.readOnly && !("keydown" === i.type && i.ctrlKey && 67 === i.keyCode || a.tabThrough === !1 && i.keyCode === t.keyCode.TAB))) {
                                switch (i.type) {
                                    case "input":
                                        if (de === !0) return de = !1, i.preventDefault();
                                        break;
                                    case "keydown":
                                        ue = !1, de = !1;
                                        break;
                                    case "keypress":
                                        if (ue === !0) return i.preventDefault();
                                        ue = !0;
                                        break;
                                    case "click":
                                        if (u) {
                                            var o = this;
                                            return setTimeout(function() {
                                                r.apply(o, arguments)
                                            }, 0), !1
                                        }
                                }
                                var s = r.apply(this, arguments);
                                return s === !1 && (i.preventDefault(), i.stopPropagation()), s
                            }
                            i.preventDefault()
                        }
                    };
                    i.inputmask.events[n] = i.inputmask.events[n] || [], i.inputmask.events[n].push(o), e.inArray(n, ["submit", "reset"]) !== -1 ? null != i.form && e(i.form).on(n, o) : e(i).on(n, o)
                },
                off: function(t, i) {
                    if (t.inputmask && t.inputmask.events) {
                        var n;
                        i ? (n = [], n[i] = t.inputmask.events[i]) : n = t.inputmask.events, e.each(n, function(i, n) {
                            for (; n.length > 0;) {
                                var r = n.pop();
                                e.inArray(i, ["submit", "reset"]) !== -1 ? null != t.form && e(t.form).off(i, r) : e(t).off(i, r)
                            }
                            delete t.inputmask.events[i]
                        })
                    }
                }
            };
        if (void 0 !== r) switch (r.action) {
            case "isComplete":
                return oe = r.el, _(T());
            case "unmaskedvalue":
                return oe = r.el, void 0 !== oe && void 0 !== oe.inputmask ? (o = oe.inputmask.maskset, a = oe.inputmask.opts, ce = oe.inputmask.isRTL) : (le = r.value, a.numericInput && (ce = !0), le = (e.isFunction(a.onBeforeMask) ? a.onBeforeMask(le, a) || le : le).split(""), I(void 0, !1, !1, ce ? le.reverse() : le), e.isFunction(a.onBeforeWrite) && a.onBeforeWrite(void 0, T(), 0, a)), R(oe);
            case "mask":
                oe = r.el, o = oe.inputmask.maskset, a = oe.inputmask.opts, ce = oe.inputmask.isRTL, ne(oe);
                break;
            case "format":
                return a.numericInput && (ce = !0), le = (e.isFunction(a.onBeforeMask) ? a.onBeforeMask(r.value, a) || r.value : r.value).split(""), I(void 0, !1, !1, ce ? le.reverse() : le), e.isFunction(a.onBeforeWrite) && a.onBeforeWrite(void 0, T(), 0, a), r.metadata ? {
                    value: ce ? T().slice().reverse().join("") : T().join(""),
                    metadata: s({
                        action: "getmetadata"
                    }, o, a)
                } : ce ? T().slice().reverse().join("") : T().join("");
            case "isValid":
                a.numericInput && (ce = !0), r.value ? (le = r.value.split(""), I(void 0, !1, !0, ce ? le.reverse() : le)) : r.value = T().join("");
                for (var ve = T(), me = H(), ge = ve.length - 1; ge > me && !E(ge); ge--);
                return ve.splice(me, ge + 1 - me), _(ve) && r.value === T().join("");
            case "getemptymask":
                return S().join("");
            case "remove":
                oe = r.el, ae = e(oe), o = oe.inputmask.maskset, a = oe.inputmask.opts, oe.inputmask._valueSet(R(oe)), he.off(oe);
                var ye;
                Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (ye = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(oe), "value"), ye && oe.inputmask.__valueGet && Object.defineProperty(oe, "value", {
                    get: oe.inputmask.__valueGet,
                    set: oe.inputmask.__valueSet,
                    configurable: !0
                })) : document.__lookupGetter__ && oe.__lookupGetter__("value") && oe.inputmask.__valueGet && (oe.__defineGetter__("value", oe.inputmask.__valueGet), oe.__defineSetter__("value", oe.inputmask.__valueSet)), oe.inputmask = void 0;
                break;
            case "getmetadata":
                if (e.isArray(o.metadata)) {
                    for (var ke, xe = h(void 0, !0), be = xe; be >= 0; be--)
                        if (p().validPositions[be] && void 0 !== p().validPositions[be].alternation) {
                            ke = p().validPositions[be].alternation;
                            break
                        }
                    return void 0 !== ke ? o.metadata[p().validPositions[be].locator[ke]] : []
                }
                return o.metadata
        }
    }
    t.prototype = {
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            oncomplete: e.noop,
            onincomplete: e.noop,
            oncleared: e.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            aliases: {},
            alias: null,
            onKeyDown: e.noop,
            onBeforeMask: null,
            onBeforePaste: function(t, i) {
                return e.isFunction(i.onBeforeMask) ? i.onBeforeMask(t, i) : t
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: e.noop,
            skipOptionalPartCharacter: " ",
            showTooltip: !1,
            tooltip: void 0,
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: void 0,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password"],
            definitions: {
                9: {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1
                }
            },
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
            isComplete: null,
            canClearPosition: e.noop,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            positionCaretOnClick: "lvp"
        },
        masksCache: {},
        mask: function(i) {
            var n = this;
            return "string" == typeof i && (i = document.getElementById(i) || document.querySelectorAll(i)),
                i = i.nodeName ? [i] : i, e.each(i, function(i, r) {
                    var l = e.extend(!0, {}, n.opts);
                    o(r, l, e.extend(!0, {}, n.userOptions));
                    var c = a(l, n.noMasksCache);
                    void 0 !== c && (void 0 !== r.inputmask && r.inputmask.remove(), r.inputmask = new t, r.inputmask.opts = l, r.inputmask.noMasksCache = n.noMasksCache, r.inputmask.userOptions = e.extend(!0, {}, n.userOptions), r.inputmask.el = r, r.inputmask.maskset = c, r.inputmask.isRTL = !1, e.data(r, "_inputmask_opts", l), s({
                        action: "mask",
                        el: r
                    }))
                }), i && i[0] ? i[0].inputmask || this : this
        },
        option: function(t, i) {
            return "string" == typeof t ? this.opts[t] : "object" == typeof t ? (e.extend(this.userOptions, t), this.el && i !== !0 && this.mask(this.el), this) : void 0
        },
        unmaskedvalue: function(e) {
            return s({
                action: "unmaskedvalue",
                el: this.el,
                value: e
            }, this.el && this.el.inputmask ? this.el.inputmask.maskset : a(this.opts, this.noMasksCache), this.opts)
        },
        remove: function() {
            if (this.el) return s({
                action: "remove",
                el: this.el
            }), this.el.inputmask = void 0, this.el
        },
        getemptymask: function() {
            return s({
                action: "getemptymask"
            }, this.maskset || a(this.opts, this.noMasksCache), this.opts)
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask
        },
        isComplete: function() {
            return s({
                action: "isComplete",
                el: this.el
            }, this.maskset || a(this.opts, this.noMasksCache), this.opts)
        },
        getmetadata: function() {
            return s({
                action: "getmetadata"
            }, this.maskset || a(this.opts, this.noMasksCache), this.opts)
        },
        isValid: function(e) {
            return s({
                action: "isValid",
                value: e
            }, this.maskset || a(this.opts, this.noMasksCache), this.opts)
        },
        format: function(e, t) {
            return s({
                action: "format",
                value: e,
                metadata: t
            }, this.maskset || a(this.opts, this.noMasksCache), this.opts)
        }
    }, t.extendDefaults = function(i) {
        e.extend(!0, t.prototype.defaults, i)
    }, t.extendDefinitions = function(i) {
        e.extend(!0, t.prototype.defaults.definitions, i)
    }, t.extendAliases = function(i) {
        e.extend(!0, t.prototype.defaults.aliases, i)
    }, t.format = function(e, i, n) {
        return t(i).format(e, n)
    }, t.unmask = function(e, i) {
        return t(i).unmaskedvalue(e)
    }, t.isValid = function(e, i) {
        return t(i).isValid(e)
    }, t.remove = function(t) {
        e.each(t, function(e, t) {
            t.inputmask && t.inputmask.remove()
        })
    }, t.escapeRegex = function(e) {
        var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
        return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1")
    }, t.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    };
    var l = navigator.userAgent,
        c = /mobile/i.test(l),
        u = /iemobile/i.test(l),
        d = /iphone/i.test(l) && !u;
    return window.Inputmask = t, t
}(jQuery),
function(e, t) {
    return void 0 === e.fn.inputmask && (e.fn.inputmask = function(i, n) {
        var r, o = this[0];
        if (void 0 === n && (n = {}), "string" == typeof i) switch (i) {
            case "unmaskedvalue":
                return o && o.inputmask ? o.inputmask.unmaskedvalue() : e(o).val();
            case "remove":
                return this.each(function() {
                    this.inputmask && this.inputmask.remove()
                });
            case "getemptymask":
                return o && o.inputmask ? o.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                return !(!o || !o.inputmask) && o.inputmask.hasMaskedValue();
            case "isComplete":
                return !o || !o.inputmask || o.inputmask.isComplete();
            case "getmetadata":
                return o && o.inputmask ? o.inputmask.getmetadata() : void 0;
            case "setvalue":
                e(o).val(n), o && void 0 === o.inputmask && e(o).triggerHandler("setvalue");
                break;
            case "option":
                if ("string" != typeof n) return this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(n)
                });
                if (o && void 0 !== o.inputmask) return o.inputmask.option(n);
                break;
            default:
                return n.alias = i, r = new t(n), this.each(function() {
                    r.mask(this)
                })
        } else {
            if ("object" == typeof i) return r = new t(i), void 0 === i.mask && void 0 === i.alias ? this.each(function() {
                return void 0 !== this.inputmask ? this.inputmask.option(i) : void r.mask(this)
            }) : this.each(function() {
                r.mask(this)
            });
            if (void 0 === i) return this.each(function() {
                r = new t(n), r.mask(this)
            })
        }
    }), e.fn.inputmask
}(jQuery, Inputmask),
function(e, t) {
    return t.extendDefinitions({
        h: {
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [{
                validator: "[0-2]",
                cardinality: 1
            }]
        },
        s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{
                validator: "[0-5]",
                cardinality: 1
            }]
        },
        d: {
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [{
                validator: "[0-3]",
                cardinality: 1
            }]
        },
        m: {
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [{
                validator: "[01]",
                cardinality: 1
            }]
        },
        y: {
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [{
                validator: "[12]",
                cardinality: 1
            }, {
                validator: "(19|20)",
                cardinality: 2
            }, {
                validator: "(19|20)\\d",
                cardinality: 3
            }]
        }
    }), t.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + i + "[01])")
                },
                val2: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[1-9]|[12][0-9])" + i + "(0[1-9]|1[012]))|(30" + i + "(0[13-9]|1[012]))|(31" + i + "(0[13578]|1[02]))")
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function(e, t, i) {
                if (isNaN(e)) return !1;
                var n = parseInt(e.concat(t.toString().slice(e.length))),
                    r = parseInt(e.concat(i.toString().slice(e.length)));
                return !isNaN(n) && t <= n && n <= i || !isNaN(r) && t <= r && r <= i
            },
            determinebaseyear: function(e, t, i) {
                var n = (new Date).getFullYear();
                if (e > n) return e;
                if (t < n) {
                    for (var r = t.toString().slice(0, 2), o = t.toString().slice(2, 4); t < r + i;) r--;
                    var a = r + o;
                    return e > a ? e : a
                }
                if (e <= n && n <= t) {
                    for (var s = n.toString().slice(0, 2); t < s + i;) s--;
                    var l = s + i;
                    return l < e ? e : l
                }
                return n
            },
            onKeyDown: function(i, n, r, o) {
                var a = e(this);
                if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
                    var s = new Date;
                    a.val(s.getDate().toString() + (s.getMonth() + 1).toString() + s.getFullYear().toString()), a.trigger("setvalue")
                }
            },
            getFrontValue: function(e, t, i) {
                for (var n = 0, r = 0, o = 0; o < e.length && "2" !== e.charAt(o); o++) {
                    var a = i.definitions[e.charAt(o)];
                    a ? (n += r, r = a.cardinality) : r++
                }
                return t.join("").substr(n, r)
            },
            definitions: {
                1: {
                    validator: function(e, t, i, n, r) {
                        var o = r.regex.val1.test(e);
                        return n || o || e.charAt(1) !== r.separator && "-./".indexOf(e.charAt(1)) === -1 || !(o = r.regex.val1.test("0" + e.charAt(0))) ? o : (t.buffer[i - 1] = "0", {
                            refreshFromBuffer: {
                                start: i - 1,
                                end: i
                            },
                            pos: i,
                            c: e.charAt(0)
                        })
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(e, t, i, n, r) {
                            var o = e;
                            isNaN(t.buffer[i + 1]) || (o += t.buffer[i + 1]);
                            var a = 1 === o.length ? r.regex.val1pre.test(o) : r.regex.val1.test(o);
                            if (!n && !a) {
                                if (a = r.regex.val1.test(e + "0")) return t.buffer[i] = e, t.buffer[++i] = "0", {
                                    pos: i,
                                    c: "0"
                                };
                                if (a = r.regex.val1.test("0" + e)) return t.buffer[i] = "0", i++, {
                                    pos: i
                                }
                            }
                            return a
                        },
                        cardinality: 1
                    }]
                },
                2: {
                    validator: function(e, t, i, n, r) {
                        var o = r.getFrontValue(t.mask, t.buffer, r);
                        o.indexOf(r.placeholder[0]) !== -1 && (o = "01" + r.separator);
                        var a = r.regex.val2(r.separator).test(o + e);
                        if (!n && !a && (e.charAt(1) === r.separator || "-./".indexOf(e.charAt(1)) !== -1) && (a = r.regex.val2(r.separator).test(o + "0" + e.charAt(0)))) return t.buffer[i - 1] = "0", {
                            refreshFromBuffer: {
                                start: i - 1,
                                end: i
                            },
                            pos: i,
                            c: e.charAt(0)
                        };
                        if (r.mask.indexOf("2") === r.mask.length - 1 && a) {
                            var s = t.buffer.join("").substr(4, 4) + e;
                            if (s !== r.leapday) return !0;
                            var l = parseInt(t.buffer.join("").substr(0, 4), 10);
                            return l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0)
                        }
                        return a
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(e, t, i, n, r) {
                            isNaN(t.buffer[i + 1]) || (e += t.buffer[i + 1]);
                            var o = r.getFrontValue(t.mask, t.buffer, r);
                            o.indexOf(r.placeholder[0]) !== -1 && (o = "01" + r.separator);
                            var a = 1 === e.length ? r.regex.val2pre(r.separator).test(o + e) : r.regex.val2(r.separator).test(o + e);
                            return n || a || !(a = r.regex.val2(r.separator).test(o + "0" + e)) ? a : (t.buffer[i] = "0", i++, {
                                pos: i
                            })
                        },
                        cardinality: 1
                    }]
                },
                y: {
                    validator: function(e, t, i, n, r) {
                        if (r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear)) {
                            var o = t.buffer.join("").substr(0, 6);
                            if (o !== r.leapday) return !0;
                            var a = parseInt(e, 10);
                            return a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)
                        }
                        return !1
                    },
                    cardinality: 4,
                    prevalidator: [{
                        validator: function(e, t, i, n, r) {
                            var o = r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear);
                            if (!n && !o) {
                                var a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e + "0").toString().slice(0, 1);
                                if (o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i++] = a.charAt(0), {
                                    pos: i
                                };
                                if (a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e + "0").toString().slice(0, 2), o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i++] = a.charAt(0), t.buffer[i++] = a.charAt(1), {
                                    pos: i
                                }
                            }
                            return o
                        },
                        cardinality: 1
                    }, {
                        validator: function(e, t, i, n, r) {
                            var o = r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear);
                            if (!n && !o) {
                                var a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e).toString().slice(0, 2);
                                if (o = r.isInYearRange(e[0] + a[1] + e[1], r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i++] = a.charAt(1), {
                                    pos: i
                                };
                                if (a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e).toString().slice(0, 2), r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) {
                                    var s = t.buffer.join("").substr(0, 6);
                                    if (s !== r.leapday) o = !0;
                                    else {
                                        var l = parseInt(e, 10);
                                        o = l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0)
                                    }
                                } else o = !1;
                                if (o) return t.buffer[i - 1] = a.charAt(0), t.buffer[i++] = a.charAt(1), t.buffer[i++] = e.charAt(0), {
                                    refreshFromBuffer: {
                                        start: i - 3,
                                        end: i
                                    },
                                    pos: i
                                }
                            }
                            return o
                        },
                        cardinality: 2
                    }, {
                        validator: function(e, t, i, n, r) {
                            return r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear)
                        },
                        cardinality: 3
                    }]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])")
                },
                val2: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + i + "30)|((0[13578]|1[02])" + i + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(i, n, r, o) {
                var a = e(this);
                if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
                    var s = new Date;
                    a.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), a.trigger("setvalue")
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function(i, n, r, o) {
                var a = e(this);
                if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
                    var s = new Date;
                    a.val(s.getFullYear().toString() + (s.getMonth() + 1).toString() + s.getDate().toString()), a.trigger("setvalue")
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function(e, t, i, n, r) {
                        if ("24" === r.hourFormat && 24 === parseInt(e, 10)) return t.buffer[i - 1] = "0", t.buffer[i] = "0", {
                            refreshFromBuffer: {
                                start: i - 1,
                                end: i
                            },
                            c: "0"
                        };
                        var o = r.regex.hrs.test(e);
                        if (!n && !o && (e.charAt(1) === r.timeseparator || "-.:".indexOf(e.charAt(1)) !== -1) && (o = r.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[i - 1] = "0", t.buffer[i] = e.charAt(0), i++, {
                            refreshFromBuffer: {
                                start: i - 2,
                                end: i
                            },
                            pos: i,
                            c: r.timeseparator
                        };
                        if (o && "24" !== r.hourFormat && r.regex.hrs24.test(e)) {
                            var a = parseInt(e, 10);
                            return 24 === a ? (t.buffer[i + 5] = "a", t.buffer[i + 6] = "m") : (t.buffer[i + 5] = "p", t.buffer[i + 6] = "m"), a -= 12, a < 10 ? (t.buffer[i] = a.toString(), t.buffer[i - 1] = "0") : (t.buffer[i] = a.toString().charAt(1), t.buffer[i - 1] = a.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i + 6
                                },
                                c: t.buffer[i]
                            }
                        }
                        return o
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(e, t, i, n, r) {
                            var o = r.regex.hrspre.test(e);
                            return n || o || !(o = r.regex.hrs.test("0" + e)) ? o : (t.buffer[i] = "0", i++, {
                                pos: i
                            })
                        },
                        cardinality: 1
                    }]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(e, t, i, n, r) {
                            var o = r.regex.mspre.test(e);
                            return n || o || !(o = r.regex.ms.test("0" + e)) ? o : (t.buffer[i] = "0", i++, {
                                pos: i
                            })
                        },
                        cardinality: 1
                    }]
                },
                t: {
                    validator: function(e, t, i, n, r) {
                        return r.regex.ampm.test(e + "m")
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])")
                },
                val2: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + i + "30)|((0[13578]|1[02])" + i + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(i, n, r, o) {
                var a = e(this);
                if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
                    var s = new Date;
                    a.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), a.trigger("setvalue")
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[1-9]|1[012])" + i + "[0-3])")
                },
                val2: function(e) {
                    var i = t.escapeRegex.call(this, e);
                    return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + i + "30)|((0[1-6])" + i + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        }
    }), t
}(jQuery, Inputmask),
function(e, t) {
    return t.extendDefinitions({
        A: {
            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), t.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function(e, t, i, n, r) {
                        return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                    },
                    cardinality: 1
                }
            },
            onUnMask: function(e, t, i) {
                return e
            }
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function(e, t) {
                return e = e.toLowerCase(), e.replace("mailto:", "")
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function(e, t, i) {
                return e
            }
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), t
}(jQuery, Inputmask),
function(e, t) {
    return t.extendAliases({
        numeric: {
            mask: function(e) {
                function i(t) {
                    for (var i = "", n = 0; n < t.length; n++) i += e.definitions[t.charAt(n)] || e.optionalmarker.start === t.charAt(n) || e.optionalmarker.end === t.charAt(n) || e.quantifiermarker.start === t.charAt(n) || e.quantifiermarker.end === t.charAt(n) || e.groupmarker.start === t.charAt(n) || e.groupmarker.end === t.charAt(n) || e.alternatormarker === t.charAt(n) ? "\\" + t.charAt(n) : t.charAt(n);
                    return i
                }
                if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                    var n = Math.floor(e.integerDigits / e.groupSize),
                        r = e.integerDigits % e.groupSize;
                    e.integerDigits = parseInt(e.integerDigits) + (0 === r ? n - 1 : n), e.integerDigits < 1 && (e.integerDigits = "*")
                }
                e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && e.integerOptional === !1 && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", e.numericInput === !0 && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                var o = i(e.prefix);
                return o += "[+]", o += e.integerOptional === !0 ? "~{1," + e.integerDigits + "}" : "~{" + e.integerDigits + "}", void 0 !== e.digits && (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.decimalProtect && (e.radixPointDefinitionSymbol = ":"), o += e.digitsOptional ? "[" + (e.decimalProtect ? ":" : e.radixPoint) + ";{1," + e.digits + "}]" : (e.decimalProtect ? ":" : e.radixPoint) + ";{" + e.digits + "}"), o += "[-]", o += i(e.suffix), e.greedy = !1, null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, "."))), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, "."))), o
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowPlus: !0,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            postFormat: function(i, n, r) {
                r.numericInput === !0 && (i = i.reverse(), isFinite(n) && (n = i.join("").length - n - 1));
                var o, a;
                n = n >= i.length ? i.length - 1 : n < r.prefix.length ? r.prefix.length : n;
                var s = i[n],
                    l = i.slice();
                s === r.groupSeparator && (l.splice(n--, 1), s = l[n]), l[n] = "!";
                var c = l.join(""),
                    u = c;
                if (c = c.replace(new RegExp(t.escapeRegex(r.suffix) + "$"), ""), c = c.replace(new RegExp("^" + t.escapeRegex(r.prefix)), ""), c.length > 0 && r.autoGroup || c.indexOf(r.groupSeparator) !== -1) {
                    var d = t.escapeRegex(r.groupSeparator);
                    c = c.replace(new RegExp(d, "g"), "");
                    var p = c.split(s === r.radixPoint ? "!" : r.radixPoint);
                    if (c = "" === r.radixPoint ? c : p[0], s !== r.negationSymbol.front && (c = c.replace("!", "?")), c.length > r.groupSize)
                        for (var f = new RegExp("([-+]?[\\d?]+)([\\d?]{" + r.groupSize + "})"); f.test(c) && "" !== r.groupSeparator;) c = c.replace(f, "$1" + r.groupSeparator + "$2"), c = c.replace(r.groupSeparator + r.groupSeparator, r.groupSeparator);
                    c = c.replace("?", "!"), "" !== r.radixPoint && p.length > 1 && (c += (s === r.radixPoint ? "!" : r.radixPoint) + p[1])
                }
                c = r.prefix + c + r.suffix;
                var h = u !== c;
                if (h)
                    for (i.length = c.length, o = 0, a = c.length; o < a; o++) i[o] = c.charAt(o);
                var v = e.inArray("!", c);
                return i[v] = s, v = r.numericInput && isFinite(n) ? i.join("").length - v - 1 : v, r.numericInput && (i = i.reverse(), e.inArray(r.radixPoint, i) < v && i.join("").length - r.suffix.length !== v && (v -= 1)), {
                    pos: v,
                    refreshFromBuffer: h,
                    buffer: i
                }
            },
            onBeforeWrite: function(i, n, r, o) {
                var a;
                if (i && ("blur" === i.type || "checkval" === i.type || "keydown" === i.type)) {
                    var s = o.numericInput ? n.slice().reverse().join("") : n.join(""),
                        l = s.replace(o.prefix, "");
                    l = l.replace(o.suffix, ""), l = l.replace(new RegExp(t.escapeRegex(o.groupSeparator), "g"), ""), "," === o.radixPoint && (l = l.replace(o.radixPoint, "."));
                    var c = l.match(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"));
                    if (c = null !== c && 1 === c.length, l = l.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), ""), l = l.replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), ""), isNaN(o.placeholder) && (l = l.replace(new RegExp(t.escapeRegex(o.placeholder), "g"), "")), l = l === o.negationSymbol.front ? l + "0" : l, "" !== l && isFinite(l)) {
                        var u = parseFloat(l),
                            d = c ? u * -1 : u;
                        if (null !== o.min && isFinite(o.min) && d < parseFloat(o.min) ? (u = Math.abs(o.min), c = o.min < 0, s = void 0) : null !== o.max && isFinite(o.max) && d > parseFloat(o.max) && (u = Math.abs(o.max), c = o.max < 0, s = void 0), l = u.toString().replace(".", o.radixPoint).split(""), isFinite(o.digits)) {
                            var p = e.inArray(o.radixPoint, l),
                                f = e.inArray(o.radixPoint, s);
                            p === -1 && (l.push(o.radixPoint), p = l.length - 1);
                            for (var h = 1; h <= o.digits; h++) o.digitsOptional || void 0 !== l[p + h] && l[p + h] !== o.placeholder.charAt(0) ? f !== -1 && void 0 !== s[f + h] && (l[p + h] = l[p + h] || s[f + h]) : l[p + h] = "0";
                            l[l.length - 1] === o.radixPoint && delete l[l.length - 1]
                        }
                        if (u.toString() !== l && u.toString() + "." !== l || c) return !c || 0 === u && "blur" === i.type || (l.unshift(o.negationSymbol.front), l.push(o.negationSymbol.back)), l = (o.prefix + l.join("")).split(""), o.numericInput && (l = l.reverse()), a = o.postFormat(l, o.numericInput ? r : r - 1, o), a.buffer && (a.refreshFromBuffer = a.buffer.join("") !== n.join("")), a
                    }
                }
                if (o.autoGroup) return a = o.postFormat(n, o.numericInput ? r : r - 1, o), a.caret = r <= o.prefix.length ? a.pos : a.pos + 1, a
            },
            regex: {
                integerPart: function(e) {
                    return new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                },
                integerNPart: function(e) {
                    return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+")
                }
            },
            signHandler: function(e, t, i, n, r) {
                if (!n && r.allowMinus && "-" === e || r.allowPlus && "+" === e) {
                    var o = t.buffer.join("").match(r.regex.integerPart(r));
                    if (o && o[0].length > 0) return t.buffer[o.index] === ("-" === e ? "+" : r.negationSymbol.front) ? "-" === e ? "" !== r.negationSymbol.back ? {
                        pos: o.index,
                        c: r.negationSymbol.front,
                        remove: o.index,
                        caret: i,
                        insert: {
                            pos: t.buffer.length - r.suffix.length - 1,
                            c: r.negationSymbol.back
                        }
                    } : {
                        pos: o.index,
                        c: r.negationSymbol.front,
                        remove: o.index,
                        caret: i
                    } : "" !== r.negationSymbol.back ? {
                        pos: o.index,
                        c: "+",
                        remove: [o.index, t.buffer.length - r.suffix.length - 1],
                        caret: i
                    } : {
                        pos: o.index,
                        c: "+",
                        remove: o.index,
                        caret: i
                    } : t.buffer[o.index] === ("-" === e ? r.negationSymbol.front : "+") ? "-" === e && "" !== r.negationSymbol.back ? {
                        remove: [o.index, t.buffer.length - r.suffix.length - 1],
                        caret: i - 1
                    } : {
                        remove: o.index,
                        caret: i - 1
                    } : "-" === e ? "" !== r.negationSymbol.back ? {
                        pos: o.index,
                        c: r.negationSymbol.front,
                        caret: i + 1,
                        insert: {
                            pos: t.buffer.length - r.suffix.length,
                            c: r.negationSymbol.back
                        }
                    } : {
                        pos: o.index,
                        c: r.negationSymbol.front,
                        caret: i + 1
                    } : {
                        pos: o.index,
                        c: e,
                        caret: i + 1
                    }
                }
                return !1
            },
            radixHandler: function(t, i, n, r, o) {
                if (!r && o.numericInput !== !0 && t === o.radixPoint && void 0 !== o.digits && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
                    var a = e.inArray(o.radixPoint, i.buffer),
                        s = i.buffer.join("").match(o.regex.integerPart(o));
                    if (a !== -1 && i.validPositions[a]) return i.validPositions[a - 1] ? {
                        caret: a + 1
                    } : {
                        pos: s.index,
                        c: s[0],
                        caret: a + 1
                    };
                    if (!s || "0" === s[0] && s.index + 1 !== n) return i.buffer[s ? s.index : n] = "0", {
                        pos: (s ? s.index : n) + 1,
                        c: o.radixPoint
                    }
                }
                return !1
            },
            leadingZeroHandler: function(t, i, n, r, o, a) {
                if (!r) {
                    var s = i.buffer.slice("");
                    if (s.splice(0, o.prefix.length), s.splice(s.length - o.suffix.length, o.suffix.length), o.numericInput === !0) {
                        var s = s.reverse(),
                            l = s[0];
                        if ("0" === l && void 0 === i.validPositions[n - 1]) return {
                            pos: n,
                            remove: s.length - 1
                        }
                    } else {
                        n -= o.prefix.length;
                        var c = e.inArray(o.radixPoint, s),
                            u = s.slice(0, c !== -1 ? c : void 0).join("").match(o.regex.integerNPart(o));
                        if (u && (c === -1 || n <= c)) {
                            var d = c === -1 ? 0 : parseInt(s.slice(c + 1).join(""));
                            if (0 === u[0].indexOf("" !== o.placeholder ? o.placeholder.charAt(0) : "0") && (u.index + 1 === n || a !== !0 && 0 === d)) return i.buffer.splice(u.index + o.prefix.length, 1), {
                                pos: u.index + o.prefix.length,
                                remove: u.index + o.prefix.length
                            };
                            if ("0" === t && n <= u.index && u[0] !== o.groupSeparator) return !1
                        }
                    }
                }
                return !0
            },
            definitions: {
                "~": {
                    validator: function(i, n, r, o, a, s) {
                        var l = a.signHandler(i, n, r, o, a);
                        if (!l && (l = a.radixHandler(i, n, r, o, a), !l && (l = o ? new RegExp("[0-9" + t.escapeRegex(a.groupSeparator) + "]").test(i) : new RegExp("[0-9]").test(i), l === !0 && (l = a.leadingZeroHandler(i, n, r, o, a, s), l === !0)))) {
                            var c = e.inArray(a.radixPoint, n.buffer);
                            l = c !== -1 && (a.digitsOptional === !1 || n.validPositions[r]) && a.numericInput !== !0 && r > c && !o ? {
                                pos: r,
                                remove: r
                            } : {
                                pos: r
                            }
                        }
                        return l
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function(e, t, i, n, r) {
                        var o = r.signHandler(e, t, i, n, r);
                        return !o && (n && r.allowMinus && e === r.negationSymbol.front || r.allowMinus && "-" === e || r.allowPlus && "+" === e) && (o = !(!n && "-" === e) || ("" !== r.negationSymbol.back ? {
                            pos: i,
                            c: "-" === e ? r.negationSymbol.front : "+",
                            caret: i + 1,
                            insert: {
                                pos: t.buffer.length,
                                c: r.negationSymbol.back
                            }
                        } : {
                            pos: i,
                            c: "-" === e ? r.negationSymbol.front : "+",
                            caret: i + 1
                        })), o
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function(e, t, i, n, r) {
                        var o = r.signHandler(e, t, i, n, r);
                        return !o && n && r.allowMinus && e === r.negationSymbol.back && (o = !0), o
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function(e, i, n, r, o) {
                        var a = o.signHandler(e, i, n, r, o);
                        if (!a) {
                            var s = "[" + t.escapeRegex(o.radixPoint) + "]";
                            a = new RegExp(s).test(e), a && i.validPositions[n] && i.validPositions[n].match.placeholder === o.radixPoint && (a = {
                                caret: n + 1
                            })
                        }
                        return a ? {
                            c: o.radixPoint
                        } : a
                    },
                    cardinality: 1,
                    placeholder: function(e) {
                        return e.radixPoint
                    }
                }
            },
            onUnMask: function(e, i, n) {
                if ("" === i && n.nullable === !0) return i;
                var r = e.replace(n.prefix, "");
                return r = r.replace(n.suffix, ""), r = r.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), n.unmaskAsNumber ? ("" !== n.radixPoint && r.indexOf(n.radixPoint) !== -1 && (r = r.replace(t.escapeRegex.call(this, n.radixPoint), ".")), Number(r)) : r
            },
            isComplete: function(e, i) {
                var n = e.join(""),
                    r = e.slice();
                if (i.postFormat(r, 0, i), r.join("") !== n) return !1;
                var o = n.replace(i.prefix, "");
                return o = o.replace(i.suffix, ""), o = o.replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), ""), "," === i.radixPoint && (o = o.replace(t.escapeRegex(i.radixPoint), ".")), isFinite(o)
            },
            onBeforeMask: function(e, i) {
                if ("" !== i.radixPoint && isFinite(e)) e = e.toString().replace(".", i.radixPoint);
                else {
                    var n = e.match(/,/g),
                        r = e.match(/\./g);
                    r && n ? r.length > n.length ? (e = e.replace(/\./g, ""), e = e.replace(",", i.radixPoint)) : n.length > r.length ? (e = e.replace(/,/g, ""), e = e.replace(".", i.radixPoint)) : e = e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e = e.replace(/,/g, "") : e = e.replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), "")
                }
                if (0 === i.digits && (e.indexOf(".") !== -1 ? e = e.substring(0, e.indexOf(".")) : e.indexOf(",") !== -1 && (e = e.substring(0, e.indexOf(",")))), "" !== i.radixPoint && isFinite(i.digits) && e.indexOf(i.radixPoint) !== -1) {
                    var o = e.split(i.radixPoint),
                        a = o[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(i.digits) < a.toString().length) {
                        var s = Math.pow(10, parseInt(i.digits));
                        e = e.replace(t.escapeRegex(i.radixPoint), "."), e = Math.round(parseFloat(e) * s) / s, e = e.toString().replace(".", i.radixPoint)
                    }
                }
                return e.toString()
            },
            canClearPosition: function(e, t, i, n, r) {
                var o = e.validPositions[t].input,
                    a = o !== r.radixPoint || null !== e.validPositions[t].match.fn && r.decimalProtect === !1 || isFinite(o) || t === i || o === r.groupSeparator || o === r.negationSymbol.front || o === r.negationSymbol.back;
                return a
            },
            onKeyDown: function(i, n, r, o) {
                var a = e(this);
                if (i.ctrlKey) switch (i.keyCode) {
                    case t.keyCode.UP:
                        a.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(o.step)), a.trigger("setvalue");
                        break;
                    case t.keyCode.DOWN:
                        a.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(o.step)), a.trigger("setvalue")
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowPlus: !1,
            allowMinus: !1
        }
    }), t
}(jQuery, Inputmask),
function(e, t) {
    return t.extendAliases({
        abstractphone: {
            countrycode: "",
            phoneCodes: [],
            mask: function(e) {
                e.definitions = {
                    "#": e.definitions[9]
                };
                var t = e.phoneCodes.sort(function(e, t) {
                    var i = (e.mask || e).replace(/#/g, "9").replace(/[\+\(\)#-]/g, ""),
                        n = (t.mask || t).replace(/#/g, "9").replace(/[\+\(\)#-]/g, "");
                    return i < n ? -1 : 1
                });
                return t
            },
            keepStatic: !0,
            onBeforeMask: function(e, t) {
                var i = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (i.indexOf(t.countrycode) > 1 || i.indexOf(t.countrycode) === -1) && (i = "+" + t.countrycode + i), i
            },
            onUnMask: function(e, t, i) {
                return t
            }
        }
    }), t
}(jQuery, Inputmask),
function(e, t) {
    return t.extendAliases({
        Regex: {
            mask: "r",
            greedy: !1,
            repeat: "*",
            regex: null,
            regexTokens: null,
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function(e, t) {
                return new RegExp(t.regex).test(e.join(""))
            },
            definitions: {
                r: {
                    validator: function(t, i, n, r, o) {
                        function a(e, t) {
                            this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                                min: 1,
                                max: 1
                            }, this.repeaterPart = void 0
                        }

                        function s() {
                            var e, t, i = new a,
                                n = [];
                            for (o.regexTokens = []; e = o.tokenizer.exec(o.regex);) switch (t = e[0], t.charAt(0)) {
                                case "(":
                                    n.push(new a((!0)));
                                    break;
                                case ")":
                                    u = n.pop(), n.length > 0 ? n[n.length - 1].matches.push(u) : i.matches.push(u);
                                    break;
                                case "{":
                                case "+":
                                case "*":
                                    var r = new a((!1), (!0));
                                    t = t.replace(/[{}]/g, "");
                                    var s = t.split(","),
                                        l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                                        c = 1 === s.length ? l : isNaN(s[1]) ? s[1] : parseInt(s[1]);
                                    if (r.quantifier = {
                                            min: l,
                                            max: c
                                        }, n.length > 0) {
                                        var d = n[n.length - 1].matches;
                                        e = d.pop(), e.isGroup || (u = new a((!0)), u.matches.push(e), e = u), d.push(e), d.push(r)
                                    } else e = i.matches.pop(), e.isGroup || (u = new a((!0)), u.matches.push(e), e = u), i.matches.push(e), i.matches.push(r);
                                    break;
                                default:
                                    n.length > 0 ? n[n.length - 1].matches.push(t) : i.matches.push(t)
                            }
                            i.matches.length > 0 && o.regexTokens.push(i)
                        }

                        function l(t, i) {
                            var n = !1;
                            i && (p += "(", h++);
                            for (var r = 0; r < t.matches.length; r++) {
                                var o = t.matches[r];
                                if (o.isGroup === !0) n = l(o, !0);
                                else if (o.isQuantifier === !0) {
                                    var a = e.inArray(o, t.matches),
                                        s = t.matches[a - 1],
                                        u = p;
                                    if (isNaN(o.quantifier.max)) {
                                        for (; o.repeaterPart && o.repeaterPart !== p && o.repeaterPart.length > p.length && !(n = l(s, !0)););
                                        n = n || l(s, !0), n && (o.repeaterPart = p), p = u + o.quantifier.max
                                    } else {
                                        for (var d = 0, f = o.quantifier.max - 1; d < f && !(n = l(s, !0)); d++);
                                        p = u + "{" + o.quantifier.min + "," + o.quantifier.max + "}"
                                    }
                                } else if (void 0 !== o.matches)
                                    for (var v = 0; v < o.length && !(n = l(o[v], i)); v++);
                                else {
                                    var m;
                                    if ("[" == o.charAt(0)) {
                                        m = p, m += o;
                                        for (var g = 0; g < h; g++) m += ")";
                                        var y = new RegExp("^(" + m + ")$");
                                        n = y.test(c)
                                    } else
                                        for (var k = 0, x = o.length; k < x; k++)
                                            if ("\\" !== o.charAt(k)) {
                                                m = p, m += o.substr(0, k + 1), m = m.replace(/\|$/, "");
                                                for (var g = 0; g < h; g++) m += ")";
                                                var y = new RegExp("^(" + m + ")$");
                                                if (n = y.test(c)) break
                                            }
                                    p += o
                                }
                                if (n) break
                            }
                            return i && (p += ")", h--), n
                        }
                        var c, u, d = i.buffer.slice(),
                            p = "",
                            f = !1,
                            h = 0;
                        null === o.regexTokens && s(), d.splice(n, 0, t), c = d.join("");
                        for (var v = 0; v < o.regexTokens.length; v++) {
                            var m = o.regexTokens[v];
                            if (f = l(m, m.isGroup)) break
                        }
                        return f
                    },
                    cardinality: 1
                }
            }
        }
    }), t
}(jQuery, Inputmask),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, n) {
            var r, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(t), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = e(t).data("slick") || {}, o.options = e.extend({}, o.defaults, n, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
        var i = 0;
        return t
    }(), t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
        var r = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= r.slideCount) return !1;
        r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : n === !0 ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }), r.$slidesCache = r.$slides, r.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, i) {
        var n = {},
            r = this;
        r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), e({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(e) {
                e = Math.ceil(e), r.options.vertical === !1 ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), r.options.vertical === !1 ? n[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
            r.disableTransition(), i.call()
        }, r.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            i = t.options.asNavFor;
        return i && null !== i && (i = e(i).not(t.$slider)), i
    }, t.prototype.asNavFor = function(t) {
        var i = this,
            n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, i, n, r, o, a, s = this;
        if (n = document.createDocumentFragment(), o = s.$slider.children(), s.options.rows > 1) {
            for (a = s.options.slidesPerRow * s.options.rows, r = Math.ceil(o.length / a), e = 0; e < r; e++) {
                var l = document.createElement("div");
                for (t = 0; t < s.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < s.options.slidesPerRow; i++) {
                        var u = e * a + (t * s.options.slidesPerRow + i);
                        o.get(u) && c.appendChild(o.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            s.$slider.empty().append(n), s.$slider.children().children().children().css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, i) {
        var n, r, o, a = this,
            s = !1,
            l = a.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === a.respondTo ? o = c : "slider" === a.respondTo ? o = l : "min" === a.respondTo && (o = Math.min(c, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            r = null;
            for (n in a.breakpoints) a.breakpoints.hasOwnProperty(n) && (a.originalSettings.mobileFirst === !1 ? o < a.breakpoints[n] && (r = a.breakpoints[n]) : o > a.breakpoints[n] && (r = a.breakpoints[n]));
            null !== r ? null !== a.activeBreakpoint ? (r !== a.activeBreakpoint || i) && (a.activeBreakpoint = r, "unslick" === a.breakpointSettings[r] ? a.unslick(r) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[r]), t === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(t)), s = r) : (a.activeBreakpoint = r, "unslick" === a.breakpointSettings[r] ? a.unslick(r) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[r]), t === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(t)), s = r) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, t === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(t), s = r), t || s === !1 || a.$slider.trigger("breakpoint", [a, s])
        }
    }, t.prototype.changeSlide = function(t, i) {
        var n, r, o, a = this,
            s = e(t.currentTarget);
        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), o = a.slideCount % a.options.slidesToScroll !== 0, n = o ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
            case "previous":
                r = 0 === n ? a.options.slidesToScroll : a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - r, !1, i);
                break;
            case "next":
                r = 0 === n ? a.options.slidesToScroll : n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + r, !1, i);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || s.index() * a.options.slidesToScroll;
                a.slideHandler(a.checkNavigable(l), !1, i), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, i, n = this;
        if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var r in t) {
                if (e < t[r]) {
                    e = i;
                    break
                }
                i = t[r]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, t.prototype.getLeft = function(e) {
        var t, i, n, r = this,
            o = 0;
        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + o, r.options.variableWidth === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = r.options.rtl === !0 ? n[0] ? (r.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = r.options.rtl === !0 ? n[0] ? (r.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            n = 0,
            r = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (i = t.options.slidesToScroll * -1, n = t.options.slidesToScroll * -1, e = 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return r
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, i, n, r = this;
        return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(t, o) {
            if (o.offsetLeft - n + e(o).outerWidth() / 2 > r.swipeLeft * -1) return i = o, !1
        }), t = Math.abs(e(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }), a.$slider.trigger("lazyLoaded", [a, t, i])
                    })
                }, n.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, t, i])
                }, n.src = i
            })
        }
        var i, n, r, o, a = this;
        a.options.centerMode === !0 ? a.options.infinite === !0 ? (r = a.currentSlide + (a.options.slidesToShow / 2 + 1), o = r + a.options.slidesToShow + 2) : (r = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), o = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide) : (r = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, o = Math.ceil(r + a.options.slidesToShow), a.options.fade === !0 && (r > 0 && r--, o <= a.slideCount && o++)), i = a.$slider.find(".slick-slide").slice(r, o), t(i), a.slideCount <= a.options.slidesToShow ? (n = a.$slider.find(".slick-slide"), t(n)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (n = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow), t(n)) : 0 === a.currentSlide && (n = a.$slider.find(".slick-cloned").slice(a.options.slidesToShow * -1), t(n))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, r, o = this,
            a = e("img[data-lazy]", o.$slider);
        a.length ? (i = a.first(), n = i.attr("data-lazy"), r = document.createElement("img"), r.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout(function() {
                o.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad())
        }, r.src = n) : o.$slider.trigger("allImagesLoaded", [o])
    }, t.prototype.refresh = function(t) {
        var i, n, r = this;
        n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
            currentSlide: i
        }), r.init(), t || r.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, i, n, r = this,
            o = r.options.responsive || null;
        if ("array" === e.type(o) && o.length) {
            r.respondTo = r.options.respondTo || "window";
            for (t in o)
                if (n = r.breakpoints.length - 1, i = o[t].breakpoint, o.hasOwnProperty(t)) {
                    for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                    r.breakpoints.push(i), r.breakpointSettings[i] = o[t].settings
                }
            r.breakpoints.sort(function(e, t) {
                return r.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var n = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, i, n = this,
            r = {};
        n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(n, r) {
            t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(r).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(r).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, n, r, o, a = this,
            s = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], r = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) a.options[n] = r;
        else if ("multiple" === o) e.each(n, function(e, t) {
            a.options[e] = t
        });
        else if ("responsive" === o)
            for (i in r)
                if ("array" !== e.type(a.options.responsive)) a.options.responsive = [r[i]];
                else {
                    for (t = a.options.responsive.length - 1; t >= 0;) a.options.responsive[t].breakpoint === r[i].breakpoint && a.options.responsive.splice(t, 1), t--;
                    a.options.responsive.push(r[i])
                }
        s && (a.unload(), a.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, i, n, r, o = this;
        i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), o.options.centerMode === !0 ? (t = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = o.options.infinite === !0 ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, i, n, r = this;
        if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
            for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < n; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var i = this,
            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            r = parseInt(n.attr("data-slick-index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
    }, t.prototype.slideHandler = function(e, t, i) {
        var n, r, o, a, s, l = null,
            c = this;
        if (t = t || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === e || c.slideCount <= c.options.slidesToShow)) return t === !1 && c.asNavFor(e), n = e, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(a, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(a, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (s = c.getNavTarget(), s = s.slick("getSlick"), s.slideCount <= s.options.slidesToShow && s.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
            c.postSlide(r)
        })) : c.postSlide(r), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
            c.postSlide(r)
        }) : c.postSlide(r)))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, i, n, r = this;
        return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, i, n, r, o, a = this;
        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), i = a.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), r = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + n * r : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * r, a.options.verticalSwiping === !0 && (a.swipeLeft = t + n * r), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, i, n = this,
            r = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            a = n.length;
        for (e = 0; e < a; e++)
            if ("object" == typeof r || "undefined" == typeof r ? n[e].slick = new t(n[e], r) : i = n[e].slick[r].apply(n[e].slick, o), "undefined" != typeof i) return i;
        return n
    }
}), newYearIn(), $(".js-phone").inputmask({
    mask: "+7 (999)-999-99-99",
    showMaskOnHover: !1,
    showMaskOnFocus: !0,
    clearIncomplete: !0
}), $("form").submit(function(e) {
    for (e.preventDefault(), dataarray = $(this).serializeArray(), len = dataarray.length, dataobj = {}, i = 0; i < len; i++) dataobj[dataarray[i].name] = dataarray[i].value;
    "" == dataobj.phone || null == dataobj.phone ? $('[name="phone"]').addClass("error") : (send(dataarray), $('[name="phone"]').removeClass("error"))
}), $(".js-clients").slick({}), $(".b-select__item").on("click", function() {
    var e = $(this).find(".b-select__height p").text().trim(),
        t = $(this).find(".b-select__before p").text().trim(),
        i = $(this).parent().parent().parent();
    i.find(".b-select__cost--input").val(t), i.find(".b-select__height--input").val(e), i.find(".b-select__item").removeClass("js-active"), $(this).addClass("js-active")
}), $(document).click(function(e) {
    var t = e.target;
    $(t).is(".b-select") || $(t).parents().is(".b-select") || $(".b-select__items").removeClass("js-open")
}), $("#bg-modal").click(function() {
    $(".b-modal").fadeOut(300), $("#bg-modal").fadeOut(300), $("body").css("overflow-y", "visible")
}), $(".js-modal").on("click", function() {
    $("#" + $(this).attr("data-modal")).fadeIn(300), $("#bg-modal").fadeIn(300), $("body").css("overflow-y", "hidden")
}), $(".b-menu").on("click", function() {
    $("#menu").fadeIn(300), $("body").css("overflow-y", "hidden")
}), $("#menu a").on("click", function() {
    $(window).width() <= 901 && ($("#menu").fadeOut(300), $("body").css("overflow-y", "visible"))
}), $(".b-modal__close, .b-nav__close").on("click", function() {
    $("#" + $(this).attr("data-modal")).fadeOut(300), $("#bg-modal").fadeOut(300), $("body").css("overflow-y", "visible")
}), $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                scrollTop: e.offset().top - 100
            }, 1e3), !1
        }
    })
});