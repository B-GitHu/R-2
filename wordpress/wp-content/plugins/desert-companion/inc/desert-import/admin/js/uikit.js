/*! UIkit 3.20.8 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(xe, $e) {
    typeof exports == "object" && typeof module < "u" ? module.exports = $e() : typeof define == "function" && define.amd ? define("uikit", $e) : (xe = typeof globalThis < "u" ? globalThis : xe || self, xe.UIkit = $e())
})(this, function() {
    "use strict";
    const {
        hasOwnProperty: xe,
        toString: $e
    } = Object.prototype;

    function vt(t, e) {
        return xe.call(t, e)
    }
    const Zo = /\B([A-Z])/g,
        Ot = ut(t => t.replace(Zo, "-$1").toLowerCase()),
        Qo = /-(\w)/g,
        ye = ut(t => (t.charAt(0).toLowerCase() + t.slice(1)).replace(Qo, (e, i) => i.toUpperCase())),
        It = ut(t => t.charAt(0).toUpperCase() + t.slice(1));

    function ft(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e)
    }

    function te(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e)
    }

    function m(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e)
    }

    function xt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e)
    }
    const {
        isArray: K,
        from: Dt
    } = Array, {
        assign: pt
    } = Object;

    function et(t) {
        return typeof t == "function"
    }

    function Ct(t) {
        return t !== null && typeof t == "object"
    }

    function ee(t) {
        return $e.call(t) === "[object Object]"
    }

    function ie(t) {
        return Ct(t) && t === t.window
    }

    function ke(t) {
        return Ni(t) === 9
    }

    function Ke(t) {
        return Ni(t) >= 1
    }

    function Se(t) {
        return Ni(t) === 1
    }

    function Ni(t) {
        return !ie(t) && Ct(t) && t.nodeType
    }

    function se(t) {
        return typeof t == "boolean"
    }

    function N(t) {
        return typeof t == "string"
    }

    function Ie(t) {
        return typeof t == "number"
    }

    function bt(t) {
        return Ie(t) || N(t) && !isNaN(t - parseFloat(t))
    }

    function Ze(t) {
        return !(K(t) ? t.length : Ct(t) && Object.keys(t).length)
    }

    function G(t) {
        return t === void 0
    }

    function zi(t) {
        return se(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
    }

    function $t(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e
    }

    function S(t) {
        return parseFloat(t) || 0
    }

    function j(t) {
        return t && C(t)[0]
    }

    function C(t) {
        return Ke(t) ? [t] : Array.from(t || []).filter(Ke)
    }

    function ne(t) {
        if (ie(t)) return t;
        t = j(t);
        const e = ke(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window
    }

    function Qe(t, e) {
        return t === e || Ct(t) && Ct(e) && Object.keys(t).length === Object.keys(e).length && Bt(t, (i, s) => i === e[s])
    }

    function Fi(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), s => s === e ? i : e)
    }

    function Mt(t) {
        return t[t.length - 1]
    }

    function Bt(t, e) {
        for (const i in t)
            if (e(t[i], i) === !1) return !1;
        return !0
    }

    function Hs(t, e) {
        return t.slice().sort(({
            [e]: i = 0
        }, {
            [e]: s = 0
        }) => i > s ? 1 : s > i ? -1 : 0)
    }

    function Nt(t, e) {
        return t.reduce((i, s) => i + S(et(e) ? e(s) : s[e]), 0)
    }

    function Ls(t, e) {
        const i = new Set;
        return t.filter(({
            [e]: s
        }) => i.has(s) ? !1 : i.add(s))
    }

    function Hi(t, e) {
        return e.reduce((i, s) => ({ ...i,
            [s]: t[s]
        }), {})
    }

    function Z(t, e = 0, i = 1) {
        return Math.min(Math.max($t(t) || 0, e), i)
    }

    function _() {}

    function Li(...t) {
        return [
            ["bottom", "top"],
            ["right", "left"]
        ].every(([e, i]) => Math.min(...t.map(({
            [e]: s
        }) => s)) - Math.max(...t.map(({
            [i]: s
        }) => s)) > 0)
    }

    function ti(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }

    function Wi(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        }
    }

    function Ws(t, e) {
        t = { ...t
        };
        for (const i in t) t = t[i] > e[i] ? Wi(t, i, e[i]) : t;
        return t
    }

    function tr(t, e) {
        t = Ws(t, e);
        for (const i in t) t = t[i] < e[i] ? Wi(t, i, e[i]) : t;
        return t
    }
    const ji = {
        ratio: Wi,
        contain: Ws,
        cover: tr
    };

    function ot(t, e, i = 0, s = !1) {
        e = C(e);
        const {
            length: n
        } = e;
        return n ? (t = bt(t) ? $t(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(j(t)), s ? Z(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1
    }

    function ut(t) {
        const e = Object.create(null);
        return (i, ...s) => e[i] || (e[i] = t(i, ...s))
    }

    function f(t, e, i) {
        var s;
        if (Ct(e)) {
            for (const n in e) f(t, n, e[n]);
            return
        }
        if (G(i)) return (s = j(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of C(t)) et(i) && (i = i.call(n, f(n, e))), i === null ? Ce(n, e) : n.setAttribute(e, i)
    }

    function Et(t, e) {
        return C(t).some(i => i.hasAttribute(e))
    }

    function Ce(t, e) {
        C(t).forEach(i => i.removeAttribute(e))
    }

    function X(t, e) {
        for (const i of [e, `data-${e}`])
            if (Et(t, i)) return f(t, i)
    }

    function y(t, ...e) {
        for (const i of C(t)) {
            const s = zt(e).filter(n => !k(i, n));
            s.length && i.classList.add(...s)
        }
    }

    function A(t, ...e) {
        for (const i of C(t)) {
            const s = zt(e).filter(n => k(i, n));
            s.length && i.classList.remove(...s)
        }
    }

    function Ri(t, e) {
        e = new RegExp(e);
        for (const i of C(t)) i.classList.remove(...Dt(i.classList).filter(s => s.match(e)))
    }

    function ei(t, e, i) {
        i = zt(i), e = zt(e).filter(s => !m(i, s)), A(t, e), y(t, i)
    }

    function k(t, e) {
        return [e] = zt(e), C(t).some(i => i.classList.contains(e))
    }

    function R(t, e, i) {
        const s = zt(e);
        G(i) || (i = !!i);
        for (const n of C(t))
            for (const o of s) n.classList.toggle(o, i)
    }

    function zt(t) {
        return t ? K(t) ? t.map(zt).flat() : String(t).split(" ").filter(Boolean) : []
    }
    const Ft = typeof window < "u",
        U = Ft && document.dir === "rtl",
        oe = Ft && "ontouchstart" in window,
        re = Ft && window.PointerEvent,
        dt = re ? "pointerdown" : oe ? "touchstart" : "mousedown",
        ii = re ? "pointermove" : oe ? "touchmove" : "mousemove",
        Tt = re ? "pointerup" : oe ? "touchend" : "mouseup",
        Ht = re ? "pointerenter" : oe ? "" : "mouseenter",
        ae = re ? "pointerleave" : oe ? "" : "mouseleave",
        si = re ? "pointercancel" : "touchcancel",
        er = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };

    function qi(t) {
        return C(t).some(e => er[e.tagName.toLowerCase()])
    }
    const ir = Ft && Element.prototype.checkVisibility || function() {
        return this.offsetWidth || this.offsetHeight || this.getClientRects().length
    };

    function q(t) {
        return C(t).some(e => ir.call(e))
    }
    const Ee = "input,select,textarea,button";

    function Ui(t) {
        return C(t).some(e => T(e, Ee))
    }
    const Te = `${Ee},a[href],[tabindex]`;

    function ni(t) {
        return T(t, Te)
    }

    function O(t) {
        var e;
        return (e = j(t)) == null ? void 0 : e.parentElement
    }

    function Pe(t, e) {
        return C(t).filter(i => T(i, e))
    }

    function T(t, e) {
        return C(t).some(i => i.matches(e))
    }

    function _e(t, e) {
        const i = [];
        for (; t = O(t);)(!e || T(t, e)) && i.push(t);
        return i
    }

    function D(t, e) {
        t = j(t);
        const i = t ? Dt(t.children) : [];
        return e ? Pe(i, e) : i
    }

    function yt(t, e) {
        return e ? C(t).indexOf(j(e)) : D(O(t)).indexOf(t)
    }

    function le(t) {
        return t = j(t), t && ["origin", "pathname", "search"].every(e => t[e] === location[e])
    }

    function Vi(t) {
        if (le(t)) {
            t = j(t);
            const e = decodeURIComponent(t.hash).substring(1);
            return document.getElementById(e) || document.getElementsByName(e)[0]
        }
    }

    function Q(t, e) {
        return Yi(t, js(t, e))
    }

    function Ae(t, e) {
        return he(t, js(t, e))
    }

    function Yi(t, e) {
        return j(Us(t, j(e), "querySelector"))
    }

    function he(t, e) {
        return C(Us(t, j(e), "querySelectorAll"))
    }

    function js(t, e = document) {
        return N(t) && Rs(t).isContextSelector || ke(e) ? e : e.ownerDocument
    }
    const sr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        nr = /.*?[^\\](?![^(]*\))(?:,|$)/g,
        or = /\s*,$/,
        Rs = ut(t => {
            var e;
            t = t.replace(sr, "$1 *");
            let i = !1;
            const s = [];
            for (let n of (e = t.match(nr)) != null ? e : []) n = n.replace(or, "").trim(), i || (i = ["!", "+", "~", "-", ">"].includes(n[0])), s.push(n);
            return {
                selector: s.join(","),
                selectors: s,
                isContextSelector: i
            }
        }),
        qs = ut(t => {
            t = t.substr(1).trim();
            const e = t.indexOf(" ");
            return ~e ? [t.substring(0, e), t.substring(e + 1)] : [t, ""]
        });

    function Us(t, e = document, i) {
        if (!t || !N(t)) return t;
        const s = Rs(t);
        if (!s.isContextSelector) return Gi(e, i, s.selector);
        t = "";
        const n = s.selectors.length === 1;
        for (let o of s.selectors) {
            let r, a = e;
            if (o[0] === "!" && ([r, o] = qs(o), a = e.parentElement.closest(r), !o && n) || a && o[0] === "-" && ([r, o] = qs(o), a = a.previousElementSibling, a = T(a, r) ? a : null, !o && n)) return a;
            if (a) {
                if (n) return o[0] === "~" || o[0] === "+" ? (o = `:scope > :nth-child(${yt(a)+1}) ${o}`, a = a.parentElement) : o[0] === ">" && (o = `:scope ${o}`), Gi(a, i, o);
                t += `${t?",":""}${rr(a)} ${o}`
            }
        }
        return ke(e) || (e = e.ownerDocument), Gi(e, i, t)
    }

    function Gi(t, e, i) {
        try {
            return t[e](i)
        } catch {
            return null
        }
    }

    function rr(t) {
        const e = [];
        for (; t.parentNode;) {
            const i = f(t, "id");
            if (i) {
                e.unshift(`#${Xi(i)}`);
                break
            } else {
                let {
                    tagName: s
                } = t;
                s !== "HTML" && (s += `:nth-child(${yt(t)+1})`), e.unshift(s), t = t.parentNode
            }
        }
        return e.join(" > ")
    }

    function Xi(t) {
        return N(t) ? CSS.escape(t) : ""
    }

    function x(...t) {
        let [e, i, s, n, o = !1] = Ji(t);
        n.length > 1 && (n = lr(n)), o != null && o.self && (n = hr(n)), s && (n = ar(s, n));
        for (const r of i)
            for (const a of e) a.addEventListener(r, n, o);
        return () => Pt(e, i, n, o)
    }

    function Pt(...t) {
        let [e, i, , s, n = !1] = Ji(t);
        for (const o of i)
            for (const r of e) r.removeEventListener(o, s, n)
    }

    function F(...t) {
        const [e, i, s, n, o = !1, r] = Ji(t), a = x(e, i, s, l => {
            const h = !r || r(l);
            h && (a(), n(l, h))
        }, o);
        return a
    }

    function v(t, e, i) {
        return Ki(t).every(s => s.dispatchEvent(Lt(e, !0, !0, i)))
    }

    function Lt(t, e = !0, i = !1, s) {
        return N(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t
    }

    function Ji(t) {
        return t[0] = Ki(t[0]), N(t[1]) && (t[1] = t[1].split(" ")), et(t[2]) && t.splice(2, 0, !1), t
    }

    function ar(t, e) {
        return i => {
            const s = t[0] === ">" ? he(t, i.currentTarget).reverse().find(n => n.contains(i.target)) : i.target.closest(t);
            s && (i.current = s, e.call(this, i), delete i.current)
        }
    }

    function lr(t) {
        return e => K(e.detail) ? t(e, ...e.detail) : t(e)
    }

    function hr(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e)
        }
    }

    function Vs(t) {
        return t && "addEventListener" in t
    }

    function cr(t) {
        return Vs(t) ? t : j(t)
    }

    function Ki(t) {
        return K(t) ? t.map(cr).filter(Boolean) : N(t) ? he(t) : Vs(t) ? [t] : C(t)
    }

    function gt(t) {
        return t.pointerType === "touch" || !!t.touches
    }

    function kt(t) {
        var e, i;
        const {
            clientX: s,
            clientY: n
        } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        }
    }
    const ur = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function c(t, e, i, s) {
        const n = C(t);
        for (const o of n)
            if (N(e)) {
                if (e = oi(e), G(i)) return getComputedStyle(o).getPropertyValue(e);
                o.style.setProperty(e, bt(i) && !ur[e] ? `${i}px` : i || Ie(i) ? i : "", s)
            } else if (K(e)) {
            const r = {};
            for (const a of e) r[a] = c(o, a);
            return r
        } else if (Ct(e))
            for (const r in e) c(o, r, e[r], i);
        return n[0]
    }
    const oi = ut(t => {
            if (ft(t, "--")) return t;
            t = Ot(t);
            const {
                style: e
            } = document.documentElement;
            if (t in e) return t;
            for (const i of ["webkit", "moz"]) {
                const s = `-${i}-${t}`;
                if (s in e) return s
            }
        }),
        Zi = "uk-transition",
        Qi = "transitionend",
        ts = "transitioncanceled";

    function dr(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(C(t).map(n => new Promise((o, r) => {
            for (const l in e) {
                const h = c(n, l);
                h === "" && c(n, l, h)
            }
            const a = setTimeout(() => v(n, Qi), i);
            F(n, [Qi, ts], ({
                type: l
            }) => {
                clearTimeout(a), A(n, Zi), c(n, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: ""
                }), l === ts ? r() : o(n)
            }, {
                self: !0
            }), y(n, Zi), c(n, {
                transitionProperty: Object.keys(e).map(oi).join(","),
                transitionDuration: `${i}ms`,
                transitionTimingFunction: s,
                ...e
            })
        })))
    }
    const M = {
            start: dr,
            async stop(t) {
                v(t, Qi), await Promise.resolve()
            },
            async cancel(t) {
                v(t, ts), await Promise.resolve()
            },
            inProgress(t) {
                return k(t, Zi)
            }
        },
        Oe = "uk-animation-",
        Ys = "animationend",
        ri = "animationcanceled";

    function Gs(t, e, i = 200, s, n) {
        return Promise.all(C(t).map(o => new Promise((r, a) => {
            v(o, ri);
            const l = setTimeout(() => v(o, Ys), i);
            F(o, [Ys, ri], ({
                type: h
            }) => {
                clearTimeout(l), h === ri ? a() : r(o), c(o, "animationDuration", ""), Ri(o, `${Oe}\\S*`)
            }, {
                self: !0
            }), c(o, "animationDuration", `${i}ms`), y(o, e, Oe + (n ? "leave" : "enter")), ft(e, Oe) && (s && y(o, `uk-transform-origin-${s}`), n && y(o, `${Oe}reverse`))
        })))
    }
    const fr = new RegExp(`${Oe}(enter|leave)`),
        _t = { in: Gs,
            out(t, e, i, s) {
                return Gs(t, e, i, s, !0)
            },
            inProgress(t) {
                return fr.test(f(t, "class"))
            },
            cancel(t) {
                v(t, ri)
            }
        };

    function pr(t) {
        if (document.readyState !== "loading") {
            t();
            return
        }
        F(document, "DOMContentLoaded", t)
    }

    function H(t, ...e) {
        return e.some(i => {
            var s;
            return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase()
        })
    }

    function es(t) {
        return t = $(t), t.innerHTML = "", t
    }

    function Wt(t, e) {
        return G(e) ? $(t).innerHTML : L(es(t), e)
    }
    const gr = hi("prepend"),
        L = hi("append"),
        ai = hi("before"),
        li = hi("after");

    function hi(t) {
        return function(e, i) {
            var s;
            const n = C(N(i) ? jt(i) : i);
            return (s = $(e)) == null || s[t](...n), Xs(n)
        }
    }

    function rt(t) {
        C(t).forEach(e => e.remove())
    }

    function ci(t, e) {
        for (e = j(ai(t, e)); e.firstElementChild;) e = e.firstElementChild;
        return L(e, t), e
    }

    function is(t, e) {
        return C(C(t).map(i => i.hasChildNodes() ? ci(Dt(i.childNodes), e) : L(i, e)))
    }

    function De(t) {
        C(t).map(O).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
    }
    const mr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function jt(t) {
        const e = mr.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(), Xs(i.content.childNodes)
    }

    function Xs(t) {
        return t.length > 1 ? t : t[0]
    }

    function St(t, e) {
        if (Se(t))
            for (e(t), t = t.firstElementChild; t;) {
                const i = t.nextElementSibling;
                St(t, e), t = i
            }
    }

    function $(t, e) {
        return Js(t) ? j(jt(t)) : Yi(t, e)
    }

    function z(t, e) {
        return Js(t) ? C(jt(t)) : he(t, e)
    }

    function Js(t) {
        return N(t) && ft(t.trim(), "<")
    }
    const Rt = {
        width: ["left", "right"],
        height: ["top", "bottom"]
    };

    function b(t) {
        const e = Se(t) ? j(t).getBoundingClientRect() : {
            height: it(t),
            width: ui(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        }
    }

    function I(t, e) {
        e && c(t, {
            left: 0,
            top: 0
        });
        const i = b(t);
        if (t) {
            const {
                scrollY: s,
                scrollX: n
            } = ne(t), o = {
                height: s,
                width: n
            };
            for (const r in Rt)
                for (const a of Rt[r]) i[a] += o[r]
        }
        if (!e) return i;
        for (const s of ["left", "top"]) c(t, s, e[s] - i[s])
    }

    function ss(t) {
        let {
            top: e,
            left: i
        } = I(t);
        const {
            ownerDocument: {
                body: s,
                documentElement: n
            },
            offsetParent: o
        } = j(t);
        let r = o || n;
        for (; r && (r === s || r === n) && c(r, "position") === "static";) r = r.parentNode;
        if (Se(r)) {
            const a = I(r);
            e -= a.top + S(c(r, "borderTopWidth")), i -= a.left + S(c(r, "borderLeftWidth"))
        }
        return {
            top: e - S(c(t, "marginTop")),
            left: i - S(c(t, "marginLeft"))
        }
    }

    function qt(t) {
        t = j(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (; t = t.offsetParent;)
            if (e[0] += t.offsetTop + S(c(t, "borderTopWidth")), e[1] += t.offsetLeft + S(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
                const i = ne(t);
                return e[0] += i.scrollY, e[1] += i.scrollX, e
            }
        return e
    }
    const it = Ks("height"),
        ui = Ks("width");

    function Ks(t) {
        const e = It(t);
        return (i, s) => {
            if (G(s)) {
                if (ie(i)) return i[`inner${e}`];
                if (ke(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`])
                }
                return i = j(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : S(s) || 0, s - ce(i, t)
            } else return c(i, t, !s && s !== 0 ? "" : +s + ce(i, t) + "px")
        }
    }

    function ce(t, e, i = "border-box") {
        return c(t, "boxSizing") === i ? Nt(Rt[e].map(It), s => S(c(t, `padding${s}`)) + S(c(t, `border${s}Width`))) : 0
    }

    function di(t) {
        for (const e in Rt)
            for (const i in Rt[e])
                if (Rt[e][i] === t) return Rt[e][1 - i];
        return t
    }

    function V(t, e = "width", i = window, s = !1) {
        return N(t) ? Nt(br(t), n => {
            const o = xr(n);
            return o ? $r(o === "vh" ? yr() : o === "vw" ? ui(ne(i)) : s ? i[`offset${It(e)}`] : b(i)[e], n) : n
        }) : S(t)
    }
    const vr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
        br = ut(t => t.toString().replace(/\s/g, "").match(vr) || []),
        wr = /(?:v[hw]|%)$/,
        xr = ut(t => (t.match(wr) || [])[0]);

    function $r(t, e) {
        return t * S(e) / 100
    }
    let Me, ue;

    function yr() {
        return Me || (ue || (ue = $("<div>"), c(ue, {
            height: "100vh",
            position: "fixed"
        }), x(window, "resize", () => Me = null)), L(document.body, ue), Me = ue.clientHeight, rt(ue), Me)
    }
    const tt = {
        reads: [],
        writes: [],
        read(t) {
            return this.reads.push(t), ns(), t
        },
        write(t) {
            return this.writes.push(t), ns(), t
        },
        clear(t) {
            tn(this.reads, t), tn(this.writes, t)
        },
        flush: Zs
    };

    function Zs() {
        Qs(tt.reads), Qs(tt.writes.splice(0)), tt.scheduled = !1, (tt.reads.length || tt.writes.length) && ns()
    }

    function ns() {
        tt.scheduled || (tt.scheduled = !0, queueMicrotask(Zs))
    }

    function Qs(t) {
        let e;
        for (; e = t.shift();) try {
            e()
        } catch (i) {
            console.error(i)
        }
    }

    function tn(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1)
    }
    class en {
        init() {
            this.positions = [];
            let e;
            this.unbind = x(document, "mousemove", i => e = kt(i)), this.interval = setInterval(() => {
                e && (this.positions.push(e), this.positions.length > 5 && this.positions.shift())
            }, 50)
        }
        cancel() {
            var e;
            (e = this.unbind) == null || e.call(this), clearInterval(this.interval)
        }
        movesTo(e) {
            if (!this.positions || this.positions.length < 2) return !1;
            const i = b(e),
                {
                    left: s,
                    right: n,
                    top: o,
                    bottom: r
                } = i,
                [a] = this.positions,
                l = Mt(this.positions),
                h = [a, l];
            return ti(l, i) ? !1 : [
                [{
                    x: s,
                    y: o
                }, {
                    x: n,
                    y: r
                }],
                [{
                    x: s,
                    y: r
                }, {
                    x: n,
                    y: o
                }]
            ].some(d => {
                const p = kr(h, d);
                return p && ti(p, i)
            })
        }
    }

    function kr([{
        x: t,
        y: e
    }, {
        x: i,
        y: s
    }], [{
        x: n,
        y: o
    }, {
        x: r,
        y: a
    }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0) return !1;
        const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return h < 0 ? !1 : {
            x: t + h * (i - t),
            y: e + h * (s - e)
        }
    }

    function sn(t, e, i = {}, {
        intersecting: s = !0
    } = {}) {
        const n = new IntersectionObserver(s ? (o, r) => {
            o.some(a => a.isIntersecting) && e(o, r)
        } : e, i);
        for (const o of C(t)) n.observe(o);
        return n
    }
    const Sr = Ft && window.ResizeObserver;

    function Be(t, e, i = {
        box: "border-box"
    }) {
        if (Sr) return nn(ResizeObserver, t, e, i);
        const s = [x(window, "load resize", e), x(document, "loadedmetadata load", e, !0)];
        return {
            disconnect: () => s.map(n => n())
        }
    }

    function os(t) {
        return {
            disconnect: x([window, window.visualViewport], "resize", t)
        }
    }

    function rs(t, e, i) {
        return nn(MutationObserver, t, e, i)
    }

    function nn(t, e, i, s) {
        const n = new t(i);
        for (const o of C(e)) n.observe(o, s);
        return n
    }

    function as(t) {
        gi(t) && ls(t, {
            func: "playVideo",
            method: "play"
        }), pi(t) && t.play()
    }

    function fi(t) {
        gi(t) && ls(t, {
            func: "pauseVideo",
            method: "pause"
        }), pi(t) && t.pause()
    }

    function on(t) {
        gi(t) && ls(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), pi(t) && (t.muted = !0)
    }

    function rn(t) {
        return pi(t) || gi(t)
    }

    function pi(t) {
        return H(t, "video")
    }

    function gi(t) {
        return H(t, "iframe") && (an(t) || ln(t))
    }

    function an(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }

    function ln(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }
    async function ls(t, e) {
        await Cr(t), hn(t, e)
    }

    function hn(t, e) {
        t.contentWindow.postMessage(JSON.stringify({
            event: "command",
            ...e
        }), "*")
    }
    const hs = "_ukPlayer";
    let Ir = 0;

    function Cr(t) {
        if (t[hs]) return t[hs];
        const e = an(t),
            i = ln(t),
            s = ++Ir;
        let n;
        return t[hs] = new Promise(o => {
            e && F(t, "load", () => {
                const r = () => hn(t, {
                    event: "listening",
                    id: s
                });
                n = setInterval(r, 100), r()
            }), F(window, "message", o, !1, ({
                data: r
            }) => {
                try {
                    return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s
                } catch {}
            }), t.src = `${t.src}${m(t.src,"?")?"&":"?"}${e?"enablejsapi=1":`api=1&player_id=${s}`}`
        }).then(() => clearInterval(n))
    }

    function Er(t, e = 0, i = 0) {
        return q(t) ? Li(...Vt(t).map(s => {
            const {
                top: n,
                left: o,
                bottom: r,
                right: a
            } = at(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            }
        }).concat(I(t))) : !1
    }

    function cn(t, {
        offset: e = 0
    } = {}) {
        const i = q(t) ? Ut(t, !1, ["hidden"]) : [];
        return i.reduce((r, a, l) => {
            const {
                scrollTop: h,
                scrollHeight: u,
                offsetHeight: d
            } = a, p = at(a), g = u - p.height, {
                height: w,
                top: E
            } = i[l - 1] ? at(i[l - 1]) : I(t);
            let B = Math.ceil(E - p.top - e + h);
            return e > 0 && d < w + e ? B += e : e = 0, B > g ? (e -= B - g, B = g) : B < 0 && (e -= B, B = 0), () => s(a, B - h, t, g).then(r)
        }, () => Promise.resolve())();

        function s(r, a, l, h) {
            return new Promise(u => {
                const d = r.scrollTop,
                    p = n(Math.abs(a)),
                    g = Date.now(),
                    w = ds(r) === r,
                    E = I(l).top + (w ? 0 : d);
                let B = 0,
                    wt = 15;
                (function Je() {
                    const Mi = o(Z((Date.now() - g) / p));
                    let mt = 0;
                    if (i[0] === r && d + a < h) {
                        mt = I(l).top + (w ? 0 : r.scrollTop) - E;
                        const we = cs(l);
                        mt -= we ? I(we).height : 0
                    }
                    r.scrollTop = d + (a + mt) * Mi, Mi === 1 && (B === mt || !wt--) ? u() : (B = mt, requestAnimationFrame(Je))
                })()
            })
        }

        function n(r) {
            return 40 * Math.pow(r, .375)
        }

        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r))
        }
    }

    function mi(t, e = 0, i = 0) {
        if (!q(t)) return 0;
        const s = At(t, !0),
            {
                scrollHeight: n,
                scrollTop: o
            } = s,
            {
                height: r
            } = at(s),
            a = n - r,
            l = qt(t)[0] - qt(s)[0],
            h = Math.max(0, l - r + e),
            u = Math.min(a, l + t.offsetHeight - i);
        return h < u ? Z((o - h) / (u - h)) : 1
    }

    function Ut(t, e = !1, i = []) {
        const s = ds(t);
        let n = _e(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = xt(n, r => c(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [s].concat(n.filter(r => c(r, "overflow").split(" ").some(a => m(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > at(r).height))).reverse()
    }

    function At(...t) {
        return Ut(...t)[0]
    }

    function Vt(t) {
        return Ut(t, !1, ["hidden", "clip"])
    }

    function at(t) {
        const e = ne(t);
        let i = t === ds(t) ? e : t;
        if (ie(i) && e.visualViewport) {
            let {
                height: n,
                width: o,
                scale: r,
                pageTop: a,
                pageLeft: l
            } = e.visualViewport;
            return n = Math.round(n * r), o = Math.round(o * r), {
                height: n,
                width: o,
                top: a,
                left: l,
                bottom: a + n,
                right: l + o
            }
        }
        let s = I(i);
        if (c(i, "display") === "inline") return s;
        for (let [n, o, r, a] of [
                ["width", "x", "left", "right"],
                ["height", "y", "top", "bottom"]
            ]) {
            ie(i) ? i = t.ownerDocument : s[r] += S(c(i, `border-${r}-width`));
            const l = s[n] % 1;
            s[n] = s[o] = i[`client${It(n)}`] - (l ? l < .5 ? -l : 1 - l : 0), s[a] = s[n] + s[r]
        }
        return s
    }

    function cs(t) {
        const {
            left: e,
            width: i,
            top: s
        } = b(t);
        for (const n of [0, s]) {
            const o = t.ownerDocument.elementsFromPoint(e + i / 2, n).find(r => !r.contains(t) && !k(r, "uk-togglable-leave") && (us(r, "fixed") && un(_e(t).reverse().find(a => !a.contains(r) && !us(a, "static"))) < un(r) || us(r, "sticky") && O(r).contains(t)));
            if (o) return o
        }
    }

    function un(t) {
        return S(c(t, "zIndex"))
    }

    function us(t, e) {
        return c(t, "position") === e
    }

    function ds(t) {
        return ne(t).document.scrollingElement
    }
    const lt = [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
    ];

    function dn(t, e, i) {
        i = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            placement: [],
            ...i
        }, K(e) || (e = [e, e]), I(t, fn(t, e, i))
    }

    function fn(t, e, i) {
        const s = pn(t, e, i),
            {
                boundary: n,
                viewportOffset: o = 0,
                placement: r
            } = i;
        let a = s;
        for (const [l, [h, , u, d]] of Object.entries(lt)) {
            const p = Tr(t, e[l], o, n, l);
            if (vi(s, p, l)) continue;
            let g = 0;
            if (r[l] === "flip") {
                const w = i.attach.target[l];
                if (w === d && s[d] <= p[d] || w === u && s[u] >= p[u]) continue;
                g = _r(t, e, i, l)[u] - s[u];
                const E = Pr(t, e[l], o, l);
                if (!vi(fs(s, g, l), E, l)) {
                    if (vi(s, E, l)) continue;
                    if (i.recursion) return !1;
                    const B = Ar(t, e, i);
                    if (B && vi(B, E, 1 - l)) return B;
                    continue
                }
            } else if (r[l] === "shift") {
                const w = I(e[l]),
                    {
                        offset: E
                    } = i;
                g = Z(Z(s[u], p[u], p[d] - s[h]), w[u] - s[h] + E[l], w[d] - E[l]) - s[u]
            }
            a = fs(a, g, l)
        }
        return a
    }

    function pn(t, e, i) {
        let {
            attach: s,
            offset: n
        } = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            ...i
        }, o = I(t);
        for (const [r, [a, , l, h]] of Object.entries(lt)) {
            const u = s.target[r] === s.element[r] ? at(e[r]) : I(e[r]);
            o = fs(o, u[l] - o[l] + gn(s.target[r], h, u[a]) - gn(s.element[r], h, o[a]) + +n[r], r)
        }
        return o
    }

    function fs(t, e, i) {
        const [, s, n, o] = lt[i], r = { ...t
        };
        return r[n] = t[s] = t[n] + e, r[o] += e, r
    }

    function gn(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0
    }

    function Tr(t, e, i, s, n) {
        let o = vn(...mn(t, e).map(at));
        return i && (o[lt[n][2]] += i, o[lt[n][3]] -= i), s && (o = vn(o, I(K(s) ? s[n] : s))), o
    }

    function Pr(t, e, i, s) {
        const [n, o, r, a] = lt[s], [l] = mn(t, e), h = at(l);
        return ["auto", "scroll"].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${It(r)}`], h[a] = h[r] + l[`scroll${It(n)}`]), h[r] += i, h[a] -= i, h
    }

    function mn(t, e) {
        return Vt(e).filter(i => i.contains(t))
    }

    function vn(...t) {
        let e = {};
        for (const i of t)
            for (const [, , s, n] of lt) e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
        return e
    }

    function vi(t, e, i) {
        const [, , s, n] = lt[i];
        return t[s] >= e[s] && t[n] <= e[n]
    }

    function _r(t, e, {
        offset: i,
        attach: s
    }, n) {
        return pn(t, e, {
            attach: {
                element: bn(s.element, n),
                target: bn(s.target, n)
            },
            offset: Or(i, n)
        })
    }

    function Ar(t, e, i) {
        return fn(t, e, { ...i,
            attach: {
                element: i.attach.element.map(wn).reverse(),
                target: i.attach.target.map(wn).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        })
    }

    function bn(t, e) {
        const i = [...t],
            s = lt[e].indexOf(t[e]);
        return ~s && (i[e] = lt[e][1 - s % 2 + 2]), i
    }

    function wn(t) {
        for (let e = 0; e < lt.length; e++) {
            const i = lt[e].indexOf(t);
            if (~i) return lt[1 - e][i % 2 + 2]
        }
    }

    function Or(t, e) {
        return t = [...t], t[e] *= -1, t
    }
    var Dr = Object.freeze({
            __proto__: null,
            $,
            $$: z,
            Animation: _t,
            Dimensions: ji,
            MouseTracker: en,
            Transition: M,
            addClass: y,
            after: li,
            append: L,
            apply: St,
            assign: pt,
            attr: f,
            before: ai,
            boxModelAdjust: ce,
            camelize: ye,
            children: D,
            clamp: Z,
            createEvent: Lt,
            css: c,
            data: X,
            dimensions: b,
            each: Bt,
            empty: es,
            endsWith: te,
            escape: Xi,
            fastdom: tt,
            filter: Pe,
            find: Yi,
            findAll: he,
            findIndex: xt,
            flipPosition: di,
            fragment: jt,
            getCoveringElement: cs,
            getEventPos: kt,
            getIndex: ot,
            getTargetedElement: Vi,
            hasAttr: Et,
            hasClass: k,
            hasOwn: vt,
            hasTouch: oe,
            height: it,
            html: Wt,
            hyphenate: Ot,
            inBrowser: Ft,
            includes: m,
            index: yt,
            intersectRect: Li,
            isArray: K,
            isBoolean: se,
            isDocument: ke,
            isElement: Se,
            isEmpty: Ze,
            isEqual: Qe,
            isFocusable: ni,
            isFunction: et,
            isInView: Er,
            isInput: Ui,
            isNode: Ke,
            isNumber: Ie,
            isNumeric: bt,
            isObject: Ct,
            isPlainObject: ee,
            isRtl: U,
            isSameSiteAnchor: le,
            isString: N,
            isTag: H,
            isTouch: gt,
            isUndefined: G,
            isVideo: rn,
            isVisible: q,
            isVoidElement: qi,
            isWindow: ie,
            last: Mt,
            matches: T,
            memoize: ut,
            mute: on,
            noop: _,
            observeIntersection: sn,
            observeMutation: rs,
            observeResize: Be,
            observeViewportResize: os,
            off: Pt,
            offset: I,
            offsetPosition: qt,
            offsetViewport: at,
            on: x,
            once: F,
            overflowParents: Vt,
            parent: O,
            parents: _e,
            pause: fi,
            pick: Hi,
            play: as,
            pointInRect: ti,
            pointerCancel: si,
            pointerDown: dt,
            pointerEnter: Ht,
            pointerLeave: ae,
            pointerMove: ii,
            pointerUp: Tt,
            position: ss,
            positionAt: dn,
            prepend: gr,
            propName: oi,
            query: Q,
            queryAll: Ae,
            ready: pr,
            remove: rt,
            removeAttr: Ce,
            removeClass: A,
            removeClasses: Ri,
            replaceClass: ei,
            scrollIntoView: cn,
            scrollParent: At,
            scrollParents: Ut,
            scrolledOver: mi,
            selFocusable: Te,
            selInput: Ee,
            sortBy: Hs,
            startsWith: ft,
            sumBy: Nt,
            swap: Fi,
            toArray: Dt,
            toBoolean: zi,
            toEventTargets: Ki,
            toFloat: S,
            toNode: j,
            toNodes: C,
            toNumber: $t,
            toPx: V,
            toWindow: ne,
            toggleClass: R,
            trigger: v,
            ucfirst: It,
            uniqueBy: Ls,
            unwrap: De,
            width: ui,
            wrapAll: ci,
            wrapInner: is
        }),
        st = {
            connected() {
                y(this.$el, this.$options.id)
            }
        };
    const Mr = ["days", "hours", "minutes", "seconds"];
    var Br = {
        mixins: [st],
        props: {
            date: String,
            clsWrapper: String,
            role: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%",
            role: "timer"
        },
        connected() {
            f(this.$el, "role", this.role), this.date = S(Date.parse(this.$props.date)), this.end = !1, this.start()
        },
        disconnected() {
            this.stop()
        },
        events: {
            name: "visibilitychange",
            el: () => document,
            handler() {
                document.hidden ? this.stop() : this.start()
            }
        },
        methods: {
            start() {
                this.stop(), this.update(), this.timer || (v(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3))
            },
            stop() {
                this.timer && (clearInterval(this.timer), v(this.$el, "countdownstop"), this.timer = null)
            },
            update() {
                const t = Nr(this.date);
                t.total || (this.stop(), this.end || (v(this.$el, "countdownend"), this.end = !0));
                for (const e of Mr) {
                    const i = $(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i) continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Wt(i, s.map(() => "<span></span>").join("")), s.forEach((n, o) => i.children[o].textContent = n))
                }
            }
        }
    };

    function Nr(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return {
            total: e,
            seconds: e % 60,
            minutes: e / 60 % 60,
            hours: e / 60 / 60 % 24,
            days: e / 60 / 60 / 24
        }
    }
    const Y = {};
    Y.events = Y.watch = Y.observe = Y.created = Y.beforeConnect = Y.connected = Y.beforeDisconnect = Y.disconnected = Y.destroy = ps, Y.args = function(t, e) {
        return e !== !1 && ps(e || t)
    }, Y.update = function(t, e) {
        return Hs(ps(t, et(e) ? {
            read: e
        } : e), "order")
    }, Y.props = function(t, e) {
        if (K(e)) {
            const i = {};
            for (const s of e) i[s] = String;
            e = i
        }
        return Y.methods(t, e)
    }, Y.computed = Y.methods = function(t, e) {
        return e ? t ? { ...t,
            ...e
        } : e : t
    }, Y.i18n = Y.data = function(t, e, i) {
        return i ? xn(t, e, i) : e ? t ? function(s) {
            return xn(t, e, s)
        } : e : t
    };

    function xn(t, e, i) {
        return Y.computed(et(t) ? t.call(i, i) : t, et(e) ? e.call(i, i) : e)
    }

    function ps(t, e) {
        return t = t && !K(t) ? [t] : t, e ? t ? t.concat(e) : K(e) ? e : [e] : t
    }

    function zr(t, e) {
        return G(e) ? t : e
    }

    function Ne(t, e, i) {
        const s = {};
        if (et(e) && (e = e.options), e.extends && (t = Ne(t, e.extends, i)), e.mixins)
            for (const o of e.mixins) t = Ne(t, o, i);
        for (const o in t) n(o);
        for (const o in e) vt(t, o) || n(o);

        function n(o) {
            s[o] = (Y[o] || zr)(t[o], e[o], i)
        }
        return s
    }

    function de(t, e = []) {
        try {
            return t ? ft(t, "{") ? JSON.parse(t) : e.length && !m(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s) => {
                const [n, o] = s.split(/:(.*)/);
                return n && !G(o) && (i[n.trim()] = o.trim()), i
            }, {}) : {}
        } catch {
            return {}
        }
    }

    function gs(t, e) {
        return t === Boolean ? zi(e) : t === Number ? $t(e) : t === "list" ? Hr(e) : t === Object && N(e) ? de(e) : t ? t(e) : e
    }
    const Fr = /,(?![^(]*\))/;

    function Hr(t) {
        return K(t) ? t : N(t) ? t.split(Fr).map(e => bt(e) ? $t(e) : zi(e.trim())) : [t]
    }

    function Lr(t) {
        t._data = {}, t._updates = [...t.$options.update || []]
    }

    function Wr(t, e) {
        t._updates.unshift(e)
    }

    function jr(t) {
        delete t._data
    }

    function ze(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set, tt.read(() => {
            t._connected && Rr(t, t._queued), delete t._queued
        })), t._queued.add(e.type || e))
    }

    function Rr(t, e) {
        for (const {
                read: i,
                write: s,
                events: n = []
            } of t._updates) {
            if (!e.has("update") && !n.some(r => e.has(r))) continue;
            let o;
            i && (o = i.call(t, t._data, e), o && ee(o) && pt(t._data, o)), s && o !== !1 && tt.write(() => {
                t._connected && s.call(t, t._data, e)
            })
        }
    }

    function ht(t) {
        return He(Be, t, "resize")
    }

    function fe(t) {
        return He(sn, t)
    }

    function bi(t) {
        return He(rs, t)
    }

    function wi(t = {}) {
        return fe({
            handler: function(e, i) {
                const {
                    targets: s = this.$el,
                    preload: n = 5
                } = t;
                for (const o of C(et(s) ? s(this) : s)) z('[loading="lazy"]', o).slice(0, n - 1).forEach(r => Ce(r, "loading"));
                for (const o of e.filter(({
                        isIntersecting: r
                    }) => r).map(({
                        target: r
                    }) => r)) i.unobserve(o)
            },
            ...t
        })
    }

    function ms(t) {
        return He((e, i) => os(i), t, "resize")
    }

    function Fe(t) {
        return He((e, i) => ({
            disconnect: x(Ur(e), "scroll", i, {
                passive: !0
            })
        }), t, "scroll")
    }

    function $n(t) {
        return {
            observe(e, i) {
                return {
                    observe: _,
                    unobserve: _,
                    disconnect: x(e, dt, i, {
                        passive: !0
                    })
                }
            },
            handler(e) {
                if (!gt(e)) return;
                const i = kt(e),
                    s = "tagName" in e.target ? e.target : O(e.target);
                F(document, `${Tt} ${si} scroll`, n => {
                    const {
                        x: o,
                        y: r
                    } = kt(n);
                    (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(() => {
                        v(s, "swipe"), v(s, `swipe${qr(i.x,i.y,o,r)}`)
                    })
                })
            },
            ...t
        }
    }

    function He(t, e, i) {
        return {
            observe: t,
            handler() {
                ze(this, i)
            },
            ...e
        }
    }

    function qr(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
    }

    function Ur(t) {
        return C(t).map(e => {
            const {
                ownerDocument: i
            } = e, s = At(e, !0);
            return s === i.scrollingElement ? i : s
        })
    }
    var yn = {
        props: {
            margin: String,
            firstColumn: Boolean
        },
        data: {
            margin: "uk-margin-small-top",
            firstColumn: "uk-first-column"
        },
        observe: [bi({
            options: {
                childList: !0
            }
        }), bi({
            options: {
                attributes: !0,
                attributeFilter: ["style"]
            },
            target: ({
                $el: t
            }) => [t, ...D(t)]
        }), ht({
            target: ({
                $el: t
            }) => [t, ...D(t)]
        })],
        update: {
            read() {
                return {
                    rows: vs(D(this.$el))
                }
            },
            write({
                rows: t
            }) {
                for (const e of t)
                    for (const i of e) R(i, this.margin, t[0] !== e), R(i, this.firstColumn, e[U ? e.length - 1 : 0] === i)
            },
            events: ["resize"]
        }
    };

    function vs(t) {
        const e = [
                []
            ],
            i = t.some((s, n) => n && t[n - 1].offsetParent !== s.offsetParent);
        for (const s of t) {
            if (!q(s)) continue;
            const n = bs(s, i);
            for (let o = e.length - 1; o >= 0; o--) {
                const r = e[o];
                if (!r[0]) {
                    r.push(s);
                    break
                }
                const a = bs(r[0], i);
                if (n.top >= a.bottom - 1 && n.top !== a.top) {
                    e.push([s]);
                    break
                }
                if (n.bottom - 1 > a.top || n.top === a.top) {
                    let l = r.length - 1;
                    for (; l >= 0; l--) {
                        const h = bs(r[l], i);
                        if (n.left >= h.left) break
                    }
                    r.splice(l + 1, 0, s);
                    break
                }
                if (o === 0) {
                    e.unshift([s]);
                    break
                }
            }
        }
        return e
    }

    function bs(t, e = !1) {
        let {
            offsetTop: i,
            offsetLeft: s,
            offsetHeight: n,
            offsetWidth: o
        } = t;
        return e && ([i, s] = qt(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        }
    }
    async function Vr(t, e, i) {
        await ws();
        let s = D(e);
        const n = s.map(g => kn(g, !0)),
            o = { ...c(e, ["height", "padding"]),
                display: "block"
            },
            r = s.concat(e);
        await Promise.all(r.map(M.cancel)), c(r, "transitionProperty", "none"), await t(), s = s.concat(D(e).filter(g => !m(s, g))), await Promise.resolve(), c(r, "transitionProperty", "");
        const a = f(e, "style"),
            l = c(e, ["height", "padding"]),
            [h, u] = Yr(e, s, n),
            d = s.map(g => ({
                style: f(g, "style")
            }));
        s.forEach((g, w) => u[w] && c(g, u[w])), c(e, o), v(e, "scroll"), await ws();
        const p = s.map((g, w) => O(g) === e && M.start(g, h[w], i, "ease")).concat(M.start(e, l, i, "ease"));
        try {
            await Promise.all(p), s.forEach((g, w) => {
                f(g, d[w]), O(g) === e && c(g, "display", h[w].opacity === 0 ? "none" : "")
            }), f(e, "style", a)
        } catch {
            f(s, "style", ""), Gr(e, o)
        }
    }

    function kn(t, e) {
        const i = c(t, "zIndex");
        return q(t) ? {
            display: "",
            opacity: e ? c(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? yt(t) : i,
            ...Sn(t)
        } : !1
    }

    function Yr(t, e, i) {
        const s = e.map((o, r) => O(o) && r in i ? i[r] ? q(o) ? Sn(o) : {
                opacity: 0
            } : {
                opacity: q(o) ? 1 : 0
            } : !1),
            n = s.map((o, r) => {
                const a = O(e[r]) === t && (i[r] || kn(e[r]));
                if (!a) return !1;
                if (!o) delete a.opacity;
                else if (!("opacity" in o)) {
                    const {
                        opacity: l
                    } = a;
                    l % 1 ? o.opacity = 1 : delete a.opacity
                }
                return a
            });
        return [s, n]
    }

    function Gr(t, e) {
        for (const i in e) c(t, i, "")
    }

    function Sn(t) {
        const {
            height: e,
            width: i
        } = I(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...ss(t),
            ...c(t, ["marginTop", "marginLeft"])
        }
    }

    function ws() {
        return new Promise(t => requestAnimationFrame(t))
    }
    const xs = "uk-transition-leave",
        $s = "uk-transition-enter";

    function In(t, e, i, s = 0) {
        const n = xi(e, !0),
            o = {
                opacity: 1
            },
            r = {
                opacity: 0
            },
            a = u => () => n === xi(e) ? u() : Promise.reject(),
            l = a(async () => {
                y(e, xs), await Promise.all(En(e).map((u, d) => new Promise(p => setTimeout(() => M.start(u, r, i / 2, "ease").then(p), d * s)))), A(e, xs)
            }),
            h = a(async () => {
                const u = it(e);
                y(e, $s), t(), c(D(e), {
                    opacity: 0
                }), await ws();
                const d = D(e),
                    p = it(e);
                c(e, "alignContent", "flex-start"), it(e, u);
                const g = En(e);
                c(d, r);
                const w = g.map(async (E, B) => {
                    await Xr(B * s), await M.start(E, o, i / 2, "ease")
                });
                u !== p && w.push(M.start(e, {
                    height: p
                }, i / 2 + g.length * s, "ease")), await Promise.all(w).then(() => {
                    A(e, $s), n === xi(e) && (c(e, {
                        height: "",
                        alignContent: ""
                    }), c(d, {
                        opacity: ""
                    }), delete e.dataset.transition)
                })
            });
        return k(e, xs) ? Cn(e).then(h) : k(e, $s) ? Cn(e).then(l).then(h) : l().then(h)
    }

    function xi(t, e) {
        return e && (t.dataset.transition = 1 + xi(t)), $t(t.dataset.transition) || 0
    }

    function Cn(t) {
        return Promise.all(D(t).filter(M.inProgress).map(e => new Promise(i => F(e, "transitionend transitioncanceled", i))))
    }

    function En(t) {
        return vs(D(t)).flat().filter(q)
    }

    function Xr(t) {
        return new Promise(e => setTimeout(e, t))
    }
    var Tn = {
        props: {
            duration: Number,
            animation: Boolean
        },
        data: {
            duration: 150,
            animation: "slide"
        },
        methods: {
            animate(t, e = this.$el) {
                const i = this.animation;
                return (i === "fade" ? In : i === "delayed-fade" ? (...n) => In(...n, 40) : i ? Vr : () => (t(), Promise.resolve()))(t, e, this.duration).catch(_)
            }
        }
    };
    const P = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var Jr = {
        mixins: [Tn],
        args: "target",
        props: {
            target: String,
            selActive: Boolean
        },
        data: {
            target: "",
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
        },
        computed: {
            children: ({
                target: t
            }, e) => z(`${t} > *`, e),
            toggles: ({
                attrItem: t
            }, e) => z(`[${t}],[data-${t}]`, e)
        },
        watch: {
            toggles(t) {
                this.updateState();
                const e = z(this.selActive, this.$el);
                for (const i of t) {
                    this.selActive !== !1 && R(i, this.cls, m(e, i));
                    const s = ia(i);
                    H(s, "a") && f(s, "role", "button")
                }
            },
            children(t, e) {
                e && this.updateState()
            }
        },
        events: {
            name: "click keydown",
            delegate() {
                return `[${this.attrItem}],[data-${this.attrItem}]`
            },
            handler(t) {
                t.type === "keydown" && t.keyCode !== P.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current))
            }
        },
        methods: {
            apply(t) {
                const e = this.getState(),
                    i = _n(t, this.attrItem, this.getState());
                Kr(e, i) || this.setState(i)
            },
            getState() {
                return this.toggles.filter(t => k(t, this.cls)).reduce((t, e) => _n(e, this.attrItem, t), {
                    filter: {
                        "": ""
                    },
                    sort: []
                })
            },
            async setState(t, e = !0) {
                t = {
                    filter: {
                        "": ""
                    },
                    sort: [],
                    ...t
                }, v(this.$el, "beforeFilter", [this, t]);
                for (const i of this.toggles) R(i, this.cls, Qr(i, this.attrItem, t));
                await Promise.all(z(this.target, this.$el).map(i => {
                    const s = () => Zr(t, i, D(i));
                    return e ? this.animate(s, i) : s()
                })), v(this.$el, "afterFilter", [this])
            },
            updateState() {
                tt.write(() => this.setState(this.getState(), !1))
            }
        }
    };

    function Pn(t, e) {
        return de(X(t, e), ["filter"])
    }

    function Kr(t, e) {
        return ["filter", "sort"].every(i => Qe(t[i], e[i]))
    }

    function Zr(t, e, i) {
        const s = ta(t);
        for (const r of i) c(r, "display", s && !T(r, s) ? "none" : "");
        const [n, o] = t.sort;
        if (n) {
            const r = ea(i, n, o);
            Qe(r, i) || L(e, r)
        }
    }

    function _n(t, e, i) {
        const {
            filter: s,
            group: n,
            sort: o,
            order: r = "asc"
        } = Pn(t, e);
        return (s || G(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (Ze(i.filter) || "" in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }), G(o) || (i.sort = [o, r]), i
    }

    function Qr(t, e, {
        filter: i = {
            "": ""
        },
        sort: [s, n]
    }) {
        const {
            filter: o = "",
            group: r = "",
            sort: a,
            order: l = "asc"
        } = Pn(t, e);
        return G(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l
    }

    function ta({
        filter: t
    }) {
        let e = "";
        return Bt(t, i => e += i || ""), e
    }

    function ea(t, e, i) {
        return [...t].sort((s, n) => X(s, e).localeCompare(X(n, e), void 0, {
            numeric: !0
        }) * (i === "asc" || -1))
    }

    function ia(t) {
        return $("a,button", t) || t
    }
    let ys;

    function An(t) {
        const e = x(t, "touchstart", s => {
            if (s.targetTouches.length !== 1 || T(s.target, 'input[type="range"')) return;
            let n = kt(s).y;
            const o = x(t, "touchmove", r => {
                const a = kt(r).y;
                a !== n && (n = a, Ut(r.target).some(l => {
                    if (!t.contains(l)) return !1;
                    let {
                        scrollHeight: h,
                        clientHeight: u
                    } = l;
                    return u < h
                }) || r.preventDefault())
            }, {
                passive: !1
            });
            F(t, "scroll touchend touchcanel", o, {
                capture: !0
            })
        });
        if (ys) return e;
        ys = !0;
        const {
            scrollingElement: i
        } = document;
        return c(i, {
            overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
            touchAction: "none",
            paddingRight: ui(window) - i.clientWidth || ""
        }), () => {
            ys = !1, e(), c(i, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            })
        }
    }
    var Le = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container({
                    container: t
                }) {
                    return t === !0 && this.$container || t && $(t)
                }
            }
        },
        Yt = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                velocity: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                velocity: .2,
                origin: !1,
                transition: "ease",
                clsEnter: "uk-togglable-enter",
                clsLeave: "uk-togglable-leave"
            },
            computed: {
                hasAnimation: ({
                    animation: t
                }) => !!t[0],
                hasTransition: ({
                    animation: t
                }) => ["slide", "reveal"].some(e => ft(t[0], e))
            },
            methods: {
                async toggleElement(t, e, i) {
                    try {
                        return await Promise.all(C(t).map(s => {
                            const n = se(e) ? e : !this.isToggled(s);
                            if (!v(s, `before${n?"show":"hide"}`, [this])) return Promise.reject();
                            const o = (et(i) ? i : i === !1 || !this.hasAnimation ? sa : this.hasTransition ? na : oa)(s, n, this),
                                r = n ? this.clsEnter : this.clsLeave;
                            y(s, r), v(s, n ? "show" : "hide", [this]);
                            const a = () => {
                                A(s, r), v(s, n ? "shown" : "hidden", [this])
                            };
                            return o ? o.then(a, () => (A(s, r), Promise.reject())) : a()
                        })), !0
                    } catch {
                        return !1
                    }
                },
                isToggled(t = this.$el) {
                    return t = j(t), k(t, this.clsEnter) ? !0 : k(t, this.clsLeave) ? !1 : this.cls ? k(t, this.cls.split(" ")[0]) : q(t)
                },
                _toggle(t, e) {
                    if (!t) return;
                    e = !!e;
                    let i;
                    this.cls ? (i = m(this.cls, " ") || e !== k(t, this.cls), i && R(t, this.cls, m(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), z("[autofocus]", t).some(s => q(s) ? s.focus() || !0 : s.blur()), i && v(t, "toggled", [e, this])
                }
            }
        };

    function sa(t, e, {
        _toggle: i
    }) {
        return _t.cancel(t), M.cancel(t), i(t, e)
    }
    async function na(t, e, {
        animation: i,
        duration: s,
        velocity: n,
        transition: o,
        _toggle: r
    }) {
        var a;
        const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
            ["left", "right"],
            ["top", "bottom"]
        ], d = u[m(u[0], h) ? 0 : 1], p = d[1] === h, w = ["width", "height"][u.indexOf(d)], E = `margin-${d[0]}`, B = `margin-${h}`;
        let wt = b(t)[w];
        const Je = M.inProgress(t);
        await M.cancel(t), e && r(t, !0);
        const Mi = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", E, B].map(Ko => [Ko, t.style[Ko]])),
            mt = b(t),
            we = S(c(t, E)),
            Go = S(c(t, B)),
            Qt = mt[w] + Go;
        !Je && !e && (wt += Go);
        const [Bi] = is(t, "<div>");
        c(Bi, {
            boxSizing: "border-box",
            height: mt.height,
            width: mt.width,
            ...c(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", B])
        }), c(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [B]: 0,
            width: mt.width,
            height: mt.height,
            overflow: "hidden",
            [w]: wt
        });
        const Xo = wt / Qt;
        s = (n * Qt + s) * (e ? 1 - Xo : Xo);
        const Jo = {
            [w]: e ? Qt : 0
        };
        p && (c(t, E, Qt - wt + we), Jo[E] = e ? we : Qt + we), !p ^ l === "reveal" && (c(Bi, E, -Qt + wt), M.start(Bi, {
            [E]: e ? 0 : -Qt
        }, s, o));
        try {
            await M.start(t, Jo, s, o)
        } finally {
            c(t, Mi), De(Bi.firstChild), e || r(t, !1)
        }
    }

    function oa(t, e, i) {
        const {
            animation: s,
            duration: n,
            _toggle: o
        } = i;
        return e ? (o(t, !0), _t.in(t, s[0], n, i.origin)) : _t.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1))
    }
    const nt = [];
    var ks = {
        mixins: [st, Le, Yt],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
        },
        data: {
            cls: "uk-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
            role: "dialog"
        },
        computed: {
            panel: ({
                selPanel: t
            }, e) => $(t, e),
            transitionElement() {
                return this.panel
            },
            bgClose({
                bgClose: t
            }) {
                return t && this.panel
            }
        },
        connected() {
            f(this.panel || this.$el, "role", this.role), this.overlay && f(this.panel || this.$el, "aria-modal", !0)
        },
        beforeDisconnect() {
            m(nt, this) && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click",
            delegate() {
                return `${this.selClose},a[href*="#"]`
            },
            handler(t) {
                const {
                    current: e,
                    defaultPrevented: i
                } = t, {
                    hash: s
                } = e;
                !i && s && le(e) && !this.$el.contains($(s)) ? this.hide() : T(e, this.selClose) && (t.preventDefault(), this.hide())
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(), this.isToggled() === m(nt, this) && this.toggle())
            }
        }, {
            name: "beforeshow",
            self: !0,
            handler(t) {
                if (m(nt, this)) return !1;
                !this.stack && nt.length ? (Promise.all(nt.map(e => e.hide())).then(this.show), t.preventDefault()) : nt.push(this)
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.stack && c(this.$el, "zIndex", S(c(this.$el, "zIndex")) + nt.length);
                const t = [this.overlay && aa(this), this.overlay && An(this.$el), this.bgClose && la(this), this.escClose && ha(this)];
                F(this.$el, "hidden", () => t.forEach(e => e && e()), {
                    self: !0
                }), y(document.documentElement, this.clsPage)
            }
        }, {
            name: "shown",
            self: !0,
            handler() {
                ni(this.$el) || f(this.$el, "tabindex", "-1"), T(this.$el, ":focus-within") || this.$el.focus()
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                m(nt, this) && nt.splice(nt.indexOf(this), 1), c(this.$el, "zIndex", ""), nt.some(t => t.clsPage === this.clsPage) || A(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle() {
                return this.isToggled() ? this.hide() : this.show()
            },
            show() {
                return this.container && O(this.$el) !== this.container ? (L(this.container, this.$el), new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, On)
            },
            hide() {
                return this.toggleElement(this.$el, !1, On)
            }
        }
    };

    function On(t, e, {
        transitionElement: i,
        _toggle: s
    }) {
        return new Promise((n, o) => F(t, "show hide", () => {
            var r;
            (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
            const a = F(i, "transitionstart", () => {
                    F(i, "transitionend transitioncancel", n, {
                        self: !0
                    }), clearTimeout(l)
                }, {
                    self: !0
                }),
                l = setTimeout(() => {
                    a(), n()
                }, ra(c(i, "transitionDuration")))
        })).then(() => delete t._reject)
    }

    function ra(t) {
        return t ? te(t, "ms") ? S(t) : S(t) * 1e3 : 0
    }

    function aa(t) {
        return x(document, "focusin", e => {
            Mt(nt) === t && !t.$el.contains(e.target) && t.$el.focus()
        })
    }

    function la(t) {
        return x(document, dt, ({
            target: e
        }) => {
            Mt(nt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || F(document, `${Tt} ${si} scroll`, ({
                defaultPrevented: i,
                type: s,
                target: n
            }) => {
                !i && s === Tt && e === n && t.hide()
            }, !0)
        })
    }

    function ha(t) {
        return x(document, "keydown", e => {
            e.keyCode === 27 && Mt(nt) === t && t.hide()
        })
    }
    var Ss = {
        slide: {
            show(t) {
                return [{
                    transform: W(t * -100)
                }, {
                    transform: W()
                }]
            },
            percent(t) {
                return We(t)
            },
            translate(t, e) {
                return [{
                    transform: W(e * -100 * t)
                }, {
                    transform: W(e * 100 * (1 - t))
                }]
            }
        }
    };

    function We(t) {
        return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth)
    }

    function W(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`
    }

    function pe(t) {
        return `scale3d(${t}, ${t}, 1)`
    }

    function ca(t, e, i, {
        animation: s,
        easing: n
    }) {
        const {
            percent: o,
            translate: r,
            show: a = _
        } = s, l = a(i);
        let h;
        return {
            dir: i,
            show(u, d = 0, p) {
                const g = p ? "linear" : n;
                return u -= Math.round(u * Z(d, -1, 1)), this.translate(d), $i(e, "itemin", {
                    percent: d,
                    duration: u,
                    timing: g,
                    dir: i
                }), $i(t, "itemout", {
                    percent: 1 - d,
                    duration: u,
                    timing: g,
                    dir: i
                }), new Promise(w => {
                    h || (h = w), Promise.all([M.start(e, l[1], u, g), M.start(t, l[0], u, g)]).then(() => {
                        this.reset(), h()
                    }, _)
                })
            },
            cancel() {
                return M.cancel([e, t])
            },
            reset() {
                for (const u in l[0]) c([e, t], u, "")
            },
            async forward(u, d = this.percent()) {
                return await this.cancel(), this.show(u, d, !0)
            },
            translate(u) {
                this.reset();
                const d = r(u, i);
                c(e, d[1]), c(t, d[0]), $i(e, "itemtranslatein", {
                    percent: u,
                    dir: i
                }), $i(t, "itemtranslateout", {
                    percent: 1 - u,
                    dir: i
                })
            },
            percent() {
                return o(t || e, e, i)
            },
            getDistance() {
                return t == null ? void 0 : t.offsetWidth
            }
        }
    }

    function $i(t, e, i) {
        v(t, Lt(e, !1, !1, i))
    }
    var yi = {
            props: {
                i18n: Object
            },
            data: {
                i18n: null
            },
            methods: {
                t(t, ...e) {
                    var i, s, n;
                    let o = 0;
                    return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, () => e[o++] || "")) || ""
                }
            }
        },
        ua = {
            props: {
                autoplay: Boolean,
                autoplayInterval: Number,
                pauseOnHover: Boolean
            },
            data: {
                autoplay: !1,
                autoplayInterval: 7e3,
                pauseOnHover: !0
            },
            connected() {
                f(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay()
            },
            disconnected() {
                this.stopAutoplay()
            },
            update() {
                f(this.slides, "tabindex", "-1")
            },
            events: [{
                name: "visibilitychange",
                el: () => document,
                filter() {
                    return this.autoplay
                },
                handler() {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay()
                }
            }],
            methods: {
                startAutoplay() {
                    this.stopAutoplay(), this.interval = setInterval(() => {
                        this.stack.length || this.draggable && T(this.$el, ":focus-within") && !T(this.$el, ":focus") || this.pauseOnHover && T(this.$el, ":hover") || this.show("next")
                    }, this.autoplayInterval)
                },
                stopAutoplay() {
                    clearInterval(this.interval)
                }
            }
        };
    const je = {
            passive: !1,
            capture: !0
        },
        Dn = {
            passive: !0,
            capture: !0
        },
        da = "touchstart mousedown",
        Is = "touchmove mousemove",
        Mn = "touchend touchcancel mouseup click input scroll",
        Bn = t => t.preventDefault();
    var fa = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created() {
            for (const t of ["start", "move", "end"]) {
                const e = this[t];
                this[t] = i => {
                    const s = kt(i).x * (U ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i)
                }
            }
        },
        events: [{
            name: da,
            passive: !0,
            delegate() {
                return `${this.selList} > *`
            },
            handler(t) {
                !this.draggable || this.parallax || !gt(t) && pa(t.target) || t.target.closest(Ee) || t.button > 0 || this.length < 2 || this.start(t)
            }
        }, {
            name: "dragstart",
            handler(t) {
                t.preventDefault()
            }
        }, {
            name: Is,
            el() {
                return this.list
            },
            handler: _,
            ...je
        }],
        methods: {
            start() {
                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, x(document, Is, this.move, je), x(document, Mn, this.end, Dn), c(this.list, "userSelect", "none")
            },
            move(t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                this.dragging || x(this.list, "click", Bn, je), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                let {
                    slides: i,
                    prevIndex: s
                } = this, n = Math.abs(e), o = this.getIndex(s + this.dir), r = Nn.call(this, s, o);
                for (; o !== s && n > r;) this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir), r = Nn.call(this, s, o);
                this.percent = n / r;
                const a = i[s],
                    l = i[o],
                    h = this.index !== o,
                    u = s === o;
                let d;
                for (const p of [this.index, this.prevIndex]) m([o, s], p) || (v(i[p], "itemhidden", [this]), u && (d = !0, this.prevIndex = s));
                (this.index === s && this.prevIndex !== s || d) && v(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = o, u || (v(a, "beforeitemhide", [this]), v(a, "itemhide", [this])), v(l, "beforeitemshow", [this]), v(l, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l)
            },
            end() {
                if (Pt(document, Is, this.move, je), Pt(document, Mn, this.end, Dn), this.dragging)
                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                    else {
                        const t = (U ? this.dir * (U ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                    }
                setTimeout(() => Pt(this.list, "click", Bn, je)), c(this.list, {
                    userSelect: ""
                }), this.drag = this.percent = null
            }
        }
    };

    function Nn(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth
    }

    function pa(t) {
        return c(t, "userSelect") !== "none" && Dt(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim())
    }

    function ga(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])
            for (const [i, s] of Object.entries(e)) zn(t, s, i);
        t._initial = !0
    }

    function zn(t, e, i) {
        t._watches.push({
            name: i,
            ...ee(e) ? e : {
                handler: e
            }
        })
    }

    function ma(t, e) {
        for (const {
                name: i,
                handler: s,
                immediate: n = !0
            } of t._watches)(t._initial && n || vt(e, i) && !Qe(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = !1
    }

    function va(t) {
        const {
            computed: e
        } = t.$options;
        if (t._computed = {}, e)
            for (const i in e) Hn(t, i, e[i])
    }
    const Fn = {
        subtree: !0,
        childList: !0
    };

    function Hn(t, e, i) {
        t._hasComputed = !0, Object.defineProperty(t, e, {
            enumerable: !0,
            get() {
                const {
                    _computed: s,
                    $props: n,
                    $el: o
                } = t;
                if (!vt(s, e) && (s[e] = (i.get || i).call(t, n, o), i.observe && t._computedObserver)) {
                    const r = i.observe.call(t, n);
                    t._computedObserver.observe(["~", "+", "-"].includes(r[0]) ? o.parentElement : o.getRootNode(), Fn)
                }
                return s[e]
            },
            set(s) {
                const {
                    _computed: n
                } = t;
                n[e] = i.set ? i.set.call(t, s) : s, G(n[e]) && delete n[e]
            }
        })
    }

    function ba(t) {
        t._hasComputed && (Wr(t, {
            read: () => ma(t, Ln(t)),
            events: ["resize", "computed"]
        }), t._computedObserver = rs(t.$el, () => ze(t, "computed"), Fn))
    }

    function wa(t) {
        var e;
        (e = t._computedObserver) == null || e.disconnect(), delete t._computedObserver, Ln(t)
    }

    function Ln(t) {
        const e = { ...t._computed
        };
        return t._computed = {}, e
    }

    function xa(t) {
        t._events = [];
        for (const e of t.$options.events || [])
            if (vt(e, "handler")) Wn(t, e);
            else
                for (const i in e) Wn(t, e[i], i)
    }

    function $a(t) {
        t._events.forEach(e => e()), delete t._events
    }

    function Wn(t, e, i) {
        let {
            name: s,
            el: n,
            handler: o,
            capture: r,
            passive: a,
            delegate: l,
            filter: h,
            self: u
        } = ee(e) ? e : {
            name: i,
            handler: e
        };
        n = et(n) ? n.call(t, t) : n || t.$el, !(!n || K(n) && !n.length || h && !h.call(t)) && t._events.push(x(n, s, l ? N(l) ? l : l.call(t, t) : null, N(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }))
    }

    function ya(t) {
        t._observers = [];
        for (const e of t.$options.observe || []) Sa(t, e)
    }

    function jn(t, ...e) {
        t._observers.push(...e)
    }

    function ka(t) {
        for (const e of t._observers) e.disconnect()
    }

    function Sa(t, e) {
        let {
            observe: i,
            target: s = t.$el,
            handler: n,
            options: o,
            filter: r,
            args: a
        } = e;
        if (r && !r.call(t, t)) return;
        const l = `_observe${t._observers.length}`;
        et(s) && !vt(t, l) && Hn(t, l, () => s.call(t, t)), n = N(n) ? t[n] : n.bind(t), et(o) && (o = o.call(t, t));
        const h = vt(t, l) ? t[l] : s,
            u = i(h, n, o, a);
        et(s) && K(t[l]) && zn(t, {
            handler: Ia(u, o),
            immediate: !1
        }, l), jn(t, u)
    }

    function Ia(t, e) {
        return (i, s) => {
            for (const n of s) m(i, n) || (t.unobserve ? t.unobserve(n) : t.observe && t.disconnect());
            for (const n of i)(!m(s, n) || !t.unobserve) && t.observe(n, e)
        }
    }

    function Ca(t) {
        const {
            $options: e,
            $props: i
        } = t, s = Rn(e);
        pt(i, s);
        const {
            computed: n,
            methods: o
        } = e;
        for (let r in i) r in s && (!n || !vt(n, r)) && (!o || !vt(o, r)) && (t[r] = i[r])
    }

    function Rn(t) {
        const e = {},
            {
                args: i = [],
                props: s = {},
                el: n,
                id: o
            } = t;
        if (!s) return e;
        for (const a in s) {
            const l = Ot(a);
            let h = X(n, l);
            G(h) || (h = s[a] === Boolean && h === "" ? !0 : gs(s[a], h), !(l === "target" && ft(h, "_")) && (e[a] = h))
        }
        const r = de(X(n, o), i);
        for (const a in r) {
            const l = ye(a);
            G(s[l]) || (e[l] = gs(s[l], r[a]))
        }
        return e
    }
    const Ea = ut((t, e) => {
        const i = Object.keys(e),
            s = i.concat(t).map(n => [Ot(n), `data-${Ot(n)}`]).flat();
        return {
            attributes: i,
            filter: s
        }
    });

    function Ta(t) {
        const {
            $options: e,
            $props: i
        } = t, {
            id: s,
            props: n,
            el: o
        } = e;
        if (!n) return;
        const {
            attributes: r,
            filter: a
        } = Ea(s, n), l = new MutationObserver(h => {
            const u = Rn(e);
            h.some(({
                attributeName: d
            }) => {
                const p = d.replace("data-", "");
                return (p === s ? r : [ye(p), ye(d)]).some(g => !G(u[g]) && u[g] !== i[g])
            }) && t.$reset()
        });
        l.observe(o, {
            attributes: !0,
            attributeFilter: a
        }), jn(t, l)
    }

    function ge(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach(s => s.call(t))
    }

    function Cs(t) {
        t._connected || (Ca(t), ge(t, "beforeConnect"), t._connected = !0, xa(t), Lr(t), ga(t), ya(t), Ta(t), ba(t), ge(t, "connected"), ze(t))
    }

    function Es(t) {
        t._connected && (ge(t, "beforeDisconnect"), $a(t), jr(t), ka(t), wa(t), ge(t, "disconnected"), t._connected = !1)
    }
    let Pa = 0;

    function qn(t, e = {}) {
        e.data = Oa(e, t.constructor.options), t.$options = Ne(t.constructor.options, e, t), t.$props = {}, t._uid = Pa++, _a(t), Aa(t), va(t), ge(t, "created"), e.el && t.$mount(e.el)
    }

    function _a(t) {
        const {
            data: e = {}
        } = t.$options;
        for (const i in e) t.$props[i] = t[i] = e[i]
    }

    function Aa(t) {
        const {
            methods: e
        } = t.$options;
        if (e)
            for (const i in e) t[i] = e[i].bind(t)
    }

    function Oa({
        data: t = {}
    }, {
        args: e = [],
        props: i = {}
    }) {
        K(t) && (t = t.slice(0, e.length).reduce((s, n, o) => (ee(n) ? pt(s, n) : s[e[o]] = n, s), {}));
        for (const s in t) G(t[s]) ? delete t[s] : i[s] && (t[s] = gs(i[s], t[s]));
        return t
    }
    const ct = function(t) {
        qn(this, t)
    };
    ct.util = Dr, ct.options = {}, ct.version = "3.20.8";
    const Da = "uk-",
        Gt = "__uikit__",
        me = {};

    function Un(t, e) {
        var i, s;
        const n = Da + Ot(t);
        if (!e) return me[n].options || (me[n] = ct.extend(me[n])), me[n];
        t = ye(t), ct[t] = (r, a) => Re(t, r, a);
        const o = (i = e.options) != null ? i : { ...e
        };
        return o.id = n, o.name = t, (s = o.install) == null || s.call(o, ct, o, t), ct._initialized && !o.functional && requestAnimationFrame(() => Re(t, `[${n}],[data-${n}]`)), me[n] = o
    }

    function Re(t, e, i, ...s) {
        const n = Un(t);
        return n.options.functional ? new n({
            data: ee(e) ? e : [e, i, ...s]
        }) : e ? he(e).map(o)[0] : o();

        function o(r) {
            const a = ki(r, t);
            if (a)
                if (i) a.$destroy();
                else return a;
            return new n({
                el: r,
                data: i
            })
        }
    }

    function qe(t) {
        return (t == null ? void 0 : t[Gt]) || {}
    }

    function ki(t, e) {
        return qe(t)[e]
    }

    function Ma(t, e) {
        t[Gt] || (t[Gt] = {}), t[Gt][e.$options.name] = e
    }

    function Ba(t, e) {
        var i;
        (i = t[Gt]) == null || delete i[e.$options.name], Ze(t[Gt]) || delete t[Gt]
    }

    function Na(t) {
        t.component = Un, t.getComponents = qe, t.getComponent = ki, t.update = Vn, t.use = function(i) {
            if (!i.installed) return i.call(null, this), i.installed = !0, this
        }, t.mixin = function(i, s) {
            s = (N(s) ? this.component(s) : s) || this, s.options = Ne(s.options, i)
        }, t.extend = function(i) {
            i || (i = {});
            const s = this,
                n = function(r) {
                    qn(this, r)
                };
            return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = Ne(s.options, i), n.super = s, n.extend = s.extend, n
        };
        let e;
        Object.defineProperty(t, "container", {
            get() {
                return e || document.body
            },
            set(i) {
                e = $(i)
            }
        })
    }

    function Vn(t, e) {
        t = t ? j(t) : document.body;
        for (const i of _e(t).reverse()) Yn(i, e);
        St(t, i => Yn(i, e))
    }

    function Yn(t, e) {
        const i = qe(t);
        for (const s in i) ze(i[s], e)
    }

    function za(t) {
        t.prototype.$mount = function(e) {
            const i = this;
            Ma(e, i), i.$options.el = e, document.contains(e) && Cs(i)
        }, t.prototype.$destroy = function(e = !1) {
            const i = this,
                {
                    el: s
                } = i.$options;
            s && Es(i), ge(i, "destroy"), Ba(s, i), e && rt(i.$el)
        }, t.prototype.$create = Re, t.prototype.$emit = function(e) {
            ze(this, e)
        }, t.prototype.$update = function(e = this.$el, i) {
            Vn(e, i)
        }, t.prototype.$reset = function() {
            Es(this), Cs(this)
        }, t.prototype.$getComponent = ki, Object.defineProperties(t.prototype, {
            $el: {
                get() {
                    return this.$options.el
                }
            },
            $container: Object.getOwnPropertyDescriptor(t, "container")
        })
    }
    let Fa = 1;

    function Xt(t, e = null) {
        return (e == null ? void 0 : e.id) || `${t.$options.id}-${Fa++}`
    }
    var Ha = {
            i18n: {
                next: "Next slide",
                previous: "Previous slide",
                slideX: "Slide %s",
                slideLabel: "%s of %s",
                role: "String"
            },
            data: {
                selNav: !1,
                role: "region"
            },
            computed: {
                nav: ({
                    selNav: t
                }, e) => $(t, e),
                navChildren() {
                    return D(this.nav)
                },
                selNavItem: ({
                    attrItem: t
                }) => `[${t}],[data-${t}]`,
                navItems(t, e) {
                    return z(this.selNavItem, e)
                }
            },
            watch: {
                nav(t, e) {
                    f(t, "role", "tablist"), e && this.$emit()
                },
                list(t) {
                    H(t, "ul") && f(t, "role", "presentation")
                },
                navChildren(t) {
                    f(t, "role", "presentation")
                },
                navItems(t) {
                    for (const e of t) {
                        const i = X(e, this.attrItem),
                            s = $("a,button", e) || e;
                        let n, o = null;
                        if (bt(i)) {
                            const r = $t(i),
                                a = this.slides[r];
                            a && (a.id || (a.id = Xt(this, a)), o = a.id), n = this.t("slideX", S(i) + 1), f(s, "role", "tab")
                        } else this.list && (this.list.id || (this.list.id = Xt(this, this.list)), o = this.list.id), n = this.t(i);
                        f(s, {
                            "aria-controls": o,
                            "aria-label": f(s, "aria-label") || n
                        })
                    }
                },
                slides(t) {
                    t.forEach((e, i) => f(e, {
                        role: this.nav ? "tabpanel" : "group",
                        "aria-label": this.t("slideLabel", i + 1, this.length),
                        "aria-roledescription": this.nav ? null : "slide"
                    }))
                },
                length(t) {
                    const e = this.navChildren.length;
                    if (this.nav && t !== e) {
                        es(this.nav);
                        for (let i = 0; i < t; i++) L(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`)
                    }
                }
            },
            connected() {
                f(this.$el, {
                    role: this.role,
                    "aria-roledescription": "carousel"
                })
            },
            update: [{
                write() {
                    this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)), this.updateNav()
                },
                events: ["resize"]
            }],
            events: [{
                name: "click keydown",
                delegate() {
                    return this.selNavItem
                },
                filter() {
                    return !this.parallax
                },
                handler(t) {
                    t.target.closest("a,button") && (t.type === "click" || t.keyCode === P.SPACE) && (t.preventDefault(), this.show(X(t.current, this.attrItem)))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }, {
                name: "keydown",
                delegate() {
                    return this.selNavItem
                },
                filter() {
                    return !this.parallax
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t, s = X(e, this.attrItem);
                    if (!bt(s)) return;
                    let n = i === P.HOME ? 0 : i === P.END ? "last" : i === P.LEFT ? "previous" : i === P.RIGHT ? "next" : -1;
                    ~n && (t.preventDefault(), this.show(n))
                }
            }],
            methods: {
                updateNav() {
                    const t = this.getValidIndex();
                    for (const e of this.navItems) {
                        const i = X(e, this.attrItem),
                            s = $("a,button", e) || e;
                        if (bt(i)) {
                            const o = $t(i) === t;
                            R(e, this.clsActive, o), R(s, "uk-disabled", this.parallax), f(s, {
                                "aria-selected": o,
                                tabindex: o && !this.parallax ? null : -1
                            }), o && s && T(O(e), ":focus-within") && s.focus()
                        } else R(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex))
                    }
                }
            }
        },
        Gn = {
            mixins: [ua, fa, Ha, yi],
            props: {
                clsActivated: String,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number
            },
            data: () => ({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: "",
                clsEnter: "uk-slide-enter",
                clsLeave: "uk-slide-leave",
                clsSlideActive: "uk-slide-active",
                Transitioner: !1,
                transitionOptions: {}
            }),
            connected() {
                this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = []
            },
            disconnected() {
                A(this.slides, this.clsActive)
            },
            computed: {
                duration: ({
                    velocity: t
                }, e) => Xn(e.offsetWidth / t),
                list: ({
                    selList: t
                }, e) => $(t, e),
                maxIndex() {
                    return this.length - 1
                },
                slides() {
                    return D(this.list)
                },
                length() {
                    return this.slides.length
                }
            },
            watch: {
                slides(t, e) {
                    e && this.$emit()
                }
            },
            events: {
                itemshow({
                    target: t
                }) {
                    y(t, this.clsEnter, this.clsSlideActive)
                },
                itemshown({
                    target: t
                }) {
                    A(t, this.clsEnter)
                },
                itemhide({
                    target: t
                }) {
                    y(t, this.clsLeave)
                },
                itemhidden({
                    target: t
                }) {
                    A(t, this.clsLeave, this.clsSlideActive)
                }
            },
            methods: {
                show(t, e = !1) {
                    var i;
                    if (this.dragging || !this.length || this.parallax) return;
                    const {
                        stack: s
                    } = this, n = e ? 0 : s.length, o = () => {
                        s.splice(n, 1), s.length && this.show(s.shift(), !0)
                    };
                    if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
                        s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                        return
                    }
                    const r = this.getIndex(this.index),
                        a = k(this.slides, this.clsActive) && this.slides[r],
                        l = this.getIndex(t, this.index),
                        h = this.slides[l];
                    if (a === h) {
                        o();
                        return
                    }
                    if (this.dir = La(t, r), this.prevIndex = r, this.index = l, a && !v(a, "beforeitemhide", [this]) || !v(h, "beforeitemshow", [this, a])) {
                        this.index = this.prevIndex, o();
                        return
                    }
                    const u = this._show(a, h, e).then(() => {
                        a && v(a, "itemhidden", [this]), v(h, "itemshown", [this]), s.shift(), this._transitioner = null, requestAnimationFrame(() => s.length && this.show(s.shift(), !0))
                    });
                    return a && v(a, "itemhide", [this]), v(h, "itemshow", [this]), u
                },
                getIndex(t = this.index, e = this.index) {
                    return Z(ot(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex))
                },
                getValidIndex(t = this.index, e = this.prevIndex) {
                    return this.getIndex(t, e)
                },
                _show(t, e, i) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                            ...this.transitionOptions
                        }), !i && !t) return this._translate(1), Promise.resolve();
                    const {
                        length: s
                    } = this.stack;
                    return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
                },
                _translate(t, e = this.prevIndex, i = this.index) {
                    const s = this._getTransitioner(e === i ? !1 : e, i);
                    return s.translate(t), s
                },
                _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
                    return new this.Transitioner(Ie(t) ? this.slides[t] : t, Ie(e) ? this.slides[e] : e, i * (U ? -1 : 1), s)
                }
            }
        };

    function La(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
    }

    function Xn(t) {
        return .5 * t + 300
    }
    var Jn = {
            mixins: [Gn],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: Ss,
                Transitioner: ca
            },
            computed: {
                animation({
                    animation: t,
                    Animations: e
                }) {
                    return { ...e[t] || e.slide,
                        name: t
                    }
                },
                transitionOptions() {
                    return {
                        animation: this.animation
                    }
                }
            },
            observe: ht(),
            events: {
                beforeitemshow({
                    target: t
                }) {
                    y(t, this.clsActive)
                },
                itemshown({
                    target: t
                }) {
                    y(t, this.clsActivated)
                },
                itemhidden({
                    target: t
                }) {
                    A(t, this.clsActive, this.clsActivated)
                }
            }
        },
        Kn = { ...Ss,
            fade: {
                show() {
                    return [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t
                    }, {
                        opacity: t
                    }]
                }
            },
            scale: {
                show() {
                    return [{
                        opacity: 0,
                        transform: pe(1 - .2)
                    }, {
                        opacity: 1,
                        transform: pe(1)
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        transform: pe(1 - .2 * t)
                    }, {
                        opacity: t,
                        transform: pe(1 - .2 + .2 * t)
                    }]
                }
            }
        },
        Zn = {
            mixins: [ks, Jn],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: () => ({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "uk-open",
                clsPage: "uk-lightbox-page",
                selList: ".uk-lightbox-items",
                attrItem: "uk-lightbox-item",
                selClose: ".uk-close-large",
                selCaption: ".uk-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: Kn,
                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            }),
            created() {
                const t = $(this.template),
                    e = $(this.selList, t);
                this.items.forEach(() => L(e, "<li>"));
                const i = $("[uk-close]", t),
                    s = this.t("close");
                i && s && (i.dataset.i18n = JSON.stringify({
                    label: s
                })), this.$mount(L(this.container, t))
            },
            computed: {
                caption: ({
                    selCaption: t
                }, e) => $(t, e)
            },
            events: [{
                name: `${ii} ${dt} keydown`,
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate() {
                    return `${this.selList} > *`
                },
                handler(t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler: "showControls"
            }, {
                name: "hide",
                self: !0,
                handler() {
                    this.hideControls(), A(this.slides, this.clsActive), M.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el: () => document,
                handler({
                    keyCode: t
                }) {
                    if (!this.isToggled(this.$el) || !this.draggable) return;
                    let e = -1;
                    t === P.LEFT ? e = "previous" : t === P.RIGHT ? e = "next" : t === P.HOME ? e = 0 : t === P.END && (e = "last"), ~e && this.show(e)
                }
            }, {
                name: "beforeitemshow",
                handler(t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Kn.scale, A(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler() {
                    Wt(this.caption, this.getItem().caption || "");
                    for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                async handler(t, e) {
                    const {
                        source: i,
                        type: s,
                        alt: n = "",
                        poster: o,
                        attrs: r = {}
                    } = e;
                    if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": `${this.videoAutoplay}`
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                        const h = Ue("img", {
                            src: i,
                            alt: n,
                            ...r
                        });
                        x(h, "load", () => this.setItem(e, h)), x(h, "error", () => this.setError(e))
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const h = Ue("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "uk-video": `${this.videoAutoplay}`,
                            ...r
                        });
                        x(h, "loadedmetadata", () => this.setItem(e, h)), x(h, "error", () => this.setError(e))
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, Ue("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe",
                        ...r
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, Ue("iframe", {
                        src: `https://www.youtube${a[1]||""}.com/embed/${a[2]}${a[3]?`?${a[3]}`:""}`,
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const {
                            height: h,
                            width: u
                        } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, Ue("iframe", {
                            src: `https://player.vimeo.com/video/${a[1]}${a[2]?`?${a[2]}`:""}`,
                            width: u,
                            height: h,
                            ...l,
                            ...r
                        }))
                    } catch {
                        this.setError(e)
                    }
                }
            }],
            methods: {
                loadItem(t = this.index) {
                    const e = this.getItem(t);
                    this.getSlide(e).childElementCount || v(this.$el, "itemload", [e])
                },
                getItem(t = this.index) {
                    return this.items[ot(t, this.slides)]
                },
                setItem(t, e) {
                    v(this.$el, "itemloaded", [this, Wt(this.getSlide(t), e)])
                },
                getSlide(t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError(t) {
                    this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls() {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), y(this.$el, "uk-active", "uk-transition-active")
                },
                hideControls() {
                    A(this.$el, "uk-active", "uk-transition-active")
                }
            }
        };

    function Ue(t, e) {
        const i = jt(`<${t}>`);
        return f(i, e), i
    }
    var Wa = {
        install: ja,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: ({
                toggle: t
            }, e) => z(t, e)
        },
        watch: {
            toggles(t) {
                this.hide();
                for (const e of t) H(e, "a") && f(e, "role", "button")
            }
        },
        disconnected() {
            this.hide()
        },
        events: {
            name: "click",
            delegate() {
                return `${this.toggle}:not(.uk-disabled)`
            },
            handler(t) {
                t.preventDefault(), this.show(t.current)
            }
        },
        methods: {
            show(t) {
                const e = Ls(this.toggles.map(Qn), "source");
                if (Se(t)) {
                    const {
                        source: i
                    } = Qn(t);
                    t = xt(e, ({
                        source: s
                    }) => i === s)
                }
                return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props,
                    items: e
                }), x(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t)
            },
            hide() {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide()
            }
        }
    };

    function ja(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Zn), pt(e.props, t.component("lightboxPanel").options.props)
    }

    function Qn(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e[i === "href" ? "source" : i] = X(t, i);
        return e.attrs = de(e.attrs), e
    }
    var Ra = {
        mixins: [Le],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: "",
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
        },
        install: qa,
        computed: {
            marginProp: ({
                pos: t
            }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
            startProps() {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                }
            }
        },
        created() {
            const t = `${this.clsContainer}-${this.pos}`,
                e = `data-${this.clsContainer}-container`,
                i = $(`.${t}[${e}]`, this.container) || L(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
            this.$mount(L(i, `<div class="${this.clsMsg}${this.status?` ${this.clsMsg}-${this.status}`:""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`))
        },
        async connected() {
            const t = S(c(this.$el, this.marginProp));
            await M.start(c(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        },
        events: {
            click(t) {
                t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close()
            },
            [Ht]() {
                this.timer && clearTimeout(this.timer)
            },
            [ae]() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }
        },
        methods: {
            async close(t) {
                const e = i => {
                    const s = O(i);
                    v(i, "close", [this]), rt(i), s != null && s.hasChildNodes() || rt(s)
                };
                this.timer && clearTimeout(this.timer), t || await M.start(this.$el, this.startProps), e(this.$el)
            }
        }
    };

    function qa(t) {
        t.notification.closeAll = function(e, i) {
            St(document.body, s => {
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i)
            })
        }
    }
    var Si = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected() {
            const t = Ua(this.media, this.$el);
            if (this.matchMedia = !0, t) {
                this.mediaObj = window.matchMedia(t);
                const e = () => {
                    this.matchMedia = this.mediaObj.matches, v(this.$el, Lt("mediachange", !1, !0, [this.mediaObj]))
                };
                this.offMediaObj = x(this.mediaObj, "change", () => {
                    e(), this.$emit("resize")
                }), e()
            }
        },
        disconnected() {
            var t;
            (t = this.offMediaObj) == null || t.call(this)
        }
    };

    function Ua(t, e) {
        if (N(t)) {
            if (ft(t, "@")) t = S(c(e, `--uk-breakpoint-${t.substr(1)}`));
            else if (isNaN(t)) return t
        }
        return t && bt(t) ? `(min-width: ${t}px)` : ""
    }

    function to(t) {
        return q(t) ? Math.ceil(Math.max(0, ...z("[stroke]", t).map(e => e.getTotalLength()))) : 0
    }
    const Ii = {
            x: Ci,
            y: Ci,
            rotate: Ci,
            scale: Ci,
            color: Ts,
            backgroundColor: Ts,
            borderColor: Ts,
            blur: Jt,
            hue: Jt,
            fopacity: Jt,
            grayscale: Jt,
            invert: Jt,
            saturate: Jt,
            sepia: Jt,
            opacity: Ya,
            stroke: Ga,
            bgx: so,
            bgy: so
        },
        {
            keys: eo
        } = Object;
    var io = {
        mixins: [Si],
        props: lo(eo(Ii), "list"),
        data: lo(eo(Ii), void 0),
        computed: {
            props(t, e) {
                const i = {};
                for (const n in t) n in Ii && !G(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for (const n in i) s[n] = Ii[n](n, e, i[n], i);
                return s
            }
        },
        events: {
            load() {
                this.$emit()
            }
        },
        methods: {
            reset() {
                for (const t in this.getCss(0)) c(this.$el, t, "")
            },
            getCss(t) {
                const e = {};
                for (const i in this.props) this.props[i](e, Z(t));
                return e.willChange = Object.keys(e).map(oi).join(","), e
            }
        }
    };

    function Ci(t, e, i) {
        let s = Ti(i) || {
                x: "px",
                y: "px",
                rotate: "deg"
            }[t] || "",
            n;
        return t === "x" || t === "y" ? (t = `translate${It(t)}`, n = o => S(S(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = o => {
            var r;
            return Ti([o]) ? V(o, "width", e, !0) / e[`offset${(r=o.endsWith)!=null&&r.call(o,"vh")?"Height":"Width"}`] : S(o)
        }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ve(i, n), (o, r) => {
            o.transform = `${o.transform||""} ${t}(${Ve(i,r)}${s})`
        }
    }

    function Ts(t, e, i) {
        return i.length === 1 && i.unshift(Ye(e, t, "")), i = ve(i, s => Va(e, s)), (s, n) => {
            const [o, r, a] = ao(i, n), l = o.map((h, u) => (h += a * (r[u] - h), u === 3 ? S(h) : parseInt(h, 10))).join(",");
            s[t] = `rgba(${l})`
        }
    }

    function Va(t, e) {
        return Ye(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(S)
    }

    function Jt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ti(i) || {
            blur: "px",
            hue: "deg"
        }[t] || "%";
        return t = {
            fopacity: "opacity",
            hue: "hue-rotate"
        }[t] || t, i = ve(i), (n, o) => {
            const r = Ve(i, o);
            n.filter = `${n.filter||""} ${t}(${r+s})`
        }
    }

    function Ya(t, e, i) {
        return i.length === 1 && i.unshift(Ye(e, t, "")), i = ve(i), (s, n) => {
            s[t] = Ve(i, n)
        }
    }

    function Ga(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ti(i),
            n = to(e);
        return i = ve(i.reverse(), o => (o = S(o), s === "%" ? o * n / 100 : o)), i.some(([o]) => o) ? (c(e, "strokeDasharray", n), (o, r) => {
            o.strokeDashoffset = Ve(i, r)
        }) : _
    }

    function so(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = ve(i, a => V(a, n, e));
        const o = ["bgx", "bgy"].filter(a => a in s);
        if (o.length === 2 && t === "bgx") return _;
        if (Ye(e, "backgroundSize", "") === "cover") return Xa(t, e, i, s);
        const r = {};
        for (const a of o) r[a] = no(e, a);
        return oo(o, r, s)
    }

    function Xa(t, e, i, s) {
        const n = Ja(e);
        if (!n.width) return _;
        const o = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            r = ["bgx", "bgy"].filter(u => u in s),
            a = {};
        for (const u of r) {
            const d = s[u].map(([B]) => B),
                p = Math.min(...d),
                g = Math.max(...d),
                w = d.indexOf(p) < d.indexOf(g),
                E = g - p;
            a[u] = `${(w?-E:0)-(w?p:g)}px`, o[u === "bgy" ? "height" : "width"] += E
        }
        const l = ji.cover(n, o);
        for (const u of r) {
            const d = u === "bgy" ? "height" : "width",
                p = l[d] - o[d];
            a[u] = `max(${no(e,u)},-${p}px) + ${a[u]}`
        }
        const h = oo(r, a, s);
        return (u, d) => {
            h(u, d), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat"
        }
    }

    function no(t, e) {
        return Ye(t, `background-position-${e.substr(-1)}`, "")
    }

    function oo(t, e, i) {
        return function(s, n) {
            for (const o of t) {
                const r = Ve(i[o], n);
                s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`
            }
        }
    }
    const ro = {},
        Ei = {};

    function Ja(t) {
        const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Ei[e]) return Ei[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth && !ro[e]) ? (F(i, "error load", () => {
            Ei[e] = Ps(i), v(t, Lt("load", !1))
        }), ro[e] = !0, Ps(i)) : Ei[e] = Ps(i)
    }

    function Ps(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        }
    }

    function ve(t, e = S) {
        const i = [],
            {
                length: s
            } = t;
        let n = 0;
        for (let o = 0; o < s; o++) {
            let [r, a] = N(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
            if (r = e(r), a = a ? S(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]), a = 1)), i.push([r, a]), a === null) n++;
            else if (n) {
                const l = i[o - n - 1][1],
                    h = (a - l) / (n + 1);
                for (let u = n; u > 0; u--) i[o - u][1] = l + h * (n - u + 1);
                n = 0
            }
        }
        return i
    }

    function ao(t, e) {
        const i = xt(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
    }

    function Ve(t, e) {
        const [i, s, n] = ao(t, e);
        return i + Math.abs(i - s) * n * (i < s ? 1 : -1)
    }
    const Ka = /^-?\d+(?:\.\d+)?(\S+)?/;

    function Ti(t, e) {
        var i;
        for (const s of t) {
            const n = (i = s.match) == null ? void 0 : i.call(s, Ka);
            if (n) return n[1]
        }
        return e
    }

    function Ye(t, e, i) {
        const s = t.style[e],
            n = c(c(t, e, i), e);
        return t.style[e] = s, n
    }

    function lo(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {})
    }

    function ho(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
    }
    var Za = {
        mixins: [io],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target: ({
                target: t
            }, e) => co(t && Q(t, e) || e),
            start({
                start: t
            }) {
                return V(t, "height", this.target, !0)
            },
            end({
                end: t,
                viewport: e
            }) {
                return V(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0)
            }
        },
        observe: [ms(), Fe({
            target: ({
                target: t
            }) => t
        }), ht({
            target: ({
                $el: t,
                target: e
            }) => [t, e, At(e, !0)]
        })],
        update: {
            read({
                percent: t
            }, e) {
                if (e.has("scroll") || (t = !1), !q(this.$el)) return !1;
                if (!this.matchMedia) return;
                const i = t;
                return t = ho(mi(this.target, this.start, this.end), this.easing), {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                }
            },
            write({
                style: t
            }) {
                if (!this.matchMedia) {
                    this.reset();
                    return
                }
                t && c(this.$el, t)
            },
            events: ["scroll", "resize"]
        }
    };

    function co(t) {
        return t ? "offsetTop" in t ? t : co(O(t)) : document.documentElement
    }
    var uo = {
        props: {
            parallax: Boolean,
            parallaxTarget: Boolean,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxEasing: Number
        },
        data: {
            parallax: !1,
            parallaxTarget: !1,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxEasing: 0
        },
        observe: [ht({
            target: ({
                $el: t,
                parallaxTarget: e
            }) => [t, e],
            filter: ({
                parallax: t
            }) => t
        }), Fe({
            filter: ({
                parallax: t
            }) => t
        })],
        computed: {
            parallaxTarget({
                parallaxTarget: t
            }, e) {
                return t && Q(t, e) || this.list
            }
        },
        update: {
            write() {
                if (!this.parallax) return;
                const t = this.parallaxTarget,
                    e = V(this.parallaxStart, "height", t, !0),
                    i = V(this.parallaxEnd, "height", t, !0),
                    s = ho(mi(t, e, i), this.parallaxEasing),
                    [n, o] = this.getIndexAt(s),
                    r = this.getValidIndex(n + Math.ceil(o)),
                    a = this.slides[n],
                    l = this.slides[r],
                    {
                        triggerShow: h,
                        triggerShown: u,
                        triggerHide: d,
                        triggerHidden: p
                    } = Qa(this);
                if (~this.prevIndex)
                    for (const w of new Set([this.index, this.prevIndex])) m([r, n], w) || (d(this.slides[w]), p(this.slides[w]));
                const g = this.prevIndex !== n || this.index !== r;
                this.dir = 1, this.prevIndex = n, this.index = r, a !== l && d(a), h(l), g && u(a), this._translate(a === l ? 1 : o, a, l)
            },
            events: ["scroll", "resize"]
        },
        methods: {
            getIndexAt(t) {
                const e = t * (this.length - 1);
                return [Math.floor(e), e % 1]
            }
        }
    };

    function Qa(t) {
        const {
            clsSlideActive: e,
            clsEnter: i,
            clsLeave: s
        } = t;
        return {
            triggerShow: n,
            triggerShown: o,
            triggerHide: r,
            triggerHidden: a
        };

        function n(l) {
            k(l, s) && (r(l), a(l)), k(l, e) || (v(l, "beforeitemshow", [t]), v(l, "itemshow", [t]))
        }

        function o(l) {
            k(l, i) && v(l, "itemshown", [t])
        }

        function r(l) {
            k(l, e) || n(l), k(l, i) && o(l), k(l, s) || (v(l, "beforeitemhide", [t]), v(l, "itemhide", [t]))
        }

        function a(l) {
            k(l, s) && v(l, "itemhidden", [t])
        }
    }
    var fo = {
            update: {
                write() {
                    if (this.stack.length || this.dragging || this.parallax) return;
                    const t = this.getValidIndex();
                    !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index)
                },
                events: ["resize"]
            }
        },
        po = {
            observe: wi({
                target: ({
                    slides: t
                }) => t,
                targets: t => t.getAdjacentSlides()
            }),
            methods: {
                getAdjacentSlides() {
                    return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                }
            }
        };

    function tl(t, e, i, {
        center: s,
        easing: n,
        list: o
    }) {
        const r = t ? Ge(t, o, s) : Ge(e, o, s) + b(e).width * i,
            a = e ? Ge(e, o, s) : r + b(t).width * i * (U ? -1 : 1);
        let l;
        return {
            dir: i,
            show(h, u = 0, d) {
                const p = d ? "linear" : n;
                return h -= Math.round(h * Z(u, -1, 1)), this.translate(u), u = t ? u : Z(u, 0, 1), _s(this.getItemIn(), "itemin", {
                    percent: u,
                    duration: h,
                    timing: p,
                    dir: i
                }), t && _s(this.getItemIn(!0), "itemout", {
                    percent: 1 - u,
                    duration: h,
                    timing: p,
                    dir: i
                }), new Promise(g => {
                    l || (l = g), M.start(o, {
                        transform: W(-a * (U ? -1 : 1), "px")
                    }, h, p).then(l, _)
                })
            },
            cancel() {
                return M.cancel(o)
            },
            reset() {
                c(o, "transform", "")
            },
            async forward(h, u = this.percent()) {
                return await this.cancel(), this.show(h, u, !0)
            },
            translate(h) {
                const u = this.getDistance() * i * (U ? -1 : 1);
                c(o, "transform", W(Z(-a + (u - u * h), -be(o), b(o).width) * (U ? -1 : 1), "px"));
                const d = this.getActives(),
                    p = this.getItemIn(),
                    g = this.getItemIn(!0);
                h = t ? Z(h, -1, 1) : 0;
                for (const w of D(o)) {
                    const E = m(d, w),
                        B = w === p,
                        wt = w === g,
                        Je = B || !wt && (E || i * (U ? -1 : 1) === -1 ^ Pi(w, o) > Pi(t || e));
                    _s(w, `itemtranslate${Je?"in":"out"}`, {
                        dir: i,
                        percent: wt ? 1 - h : B ? h : E ? 1 : 0
                    })
                }
            },
            percent() {
                return Math.abs((c(o, "transform").split(",")[4] * (U ? -1 : 1) + r) / (a - r))
            },
            getDistance() {
                return Math.abs(a - r)
            },
            getItemIn(h = !1) {
                let u = this.getActives(),
                    d = mo(o, Ge(e || t, o, s));
                if (h) {
                    const p = u;
                    u = d, d = p
                }
                return d[xt(d, p => !m(u, p))]
            },
            getActives() {
                return mo(o, Ge(t || e, o, s))
            }
        }
    }

    function Ge(t, e, i) {
        const s = Pi(t, e);
        return i ? s - el(t, e) : Math.min(s, go(e))
    }

    function go(t) {
        return Math.max(0, be(t) - b(t).width)
    }

    function be(t, e) {
        return Nt(D(t).slice(0, e), i => b(i).width)
    }

    function el(t, e) {
        return b(e).width / 2 - b(t).width / 2
    }

    function Pi(t, e) {
        return t && (ss(t).left + (U ? b(t).width - b(e).width : 0)) * (U ? -1 : 1) || 0
    }

    function mo(t, e) {
        e -= 1;
        const i = b(t).width,
            s = e + i + 2;
        return D(t).filter(n => {
            const o = Pi(n, t),
                r = o + Math.min(b(n).width, i);
            return o >= e && r <= s
        })
    }

    function _s(t, e, i) {
        v(t, Lt(e, !1, !1, i))
    }
    var il = {
        mixins: [st, Gn, fo, uo, po],
        props: {
            center: Boolean,
            sets: Boolean,
            active: String
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            active: "all",
            Transitioner: tl
        },
        computed: {
            finite({
                finite: t
            }) {
                return t || sl(this.list, this.center)
            },
            maxIndex() {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return Mt(this.sets);
                let t = 0;
                const e = go(this.list),
                    i = xt(this.slides, s => {
                        if (t >= e) return !0;
                        t += b(s).width
                    });
                return ~i ? i : this.length - 1
            },
            sets({
                sets: t
            }) {
                if (!t || this.parallax) return;
                let e = 0;
                const i = [],
                    s = b(this.list).width;
                for (let n = 0; n < this.length; n++) {
                    const o = b(this.slides[n]).width;
                    e + o > s && (e = 0), this.center ? e < s / 2 && e + o + b(this.slides[ot(+n + 1, this.slides)]).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o
                }
                if (i.length) return i
            },
            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                }
            },
            slides() {
                return D(this.list).filter(q)
            }
        },
        connected() {
            R(this.$el, this.clsContainer, !$(`.${this.clsContainer}`, this.$el))
        },
        observe: ht({
            target: ({
                slides: t,
                $el: e
            }) => [e, ...t]
        }),
        update: {
            write() {
                for (const t of this.navItems) {
                    const e = $t(X(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !m(this.sets, e))
                }
                this.reorder(), this.updateActiveClasses()
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow(t) {
                !this.dragging && this.sets && this.stack.length < 2 && !m(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for (let n = 0; n < e; n++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex,
                    s = be(this.list) / this.length;
                this.duration = Xn(s / this.velocity) * (b(this.slides[i]).width / s), this.reorder()
            },
            itemshow() {
                ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex)
            },
            itemshown() {
                this.updateActiveClasses()
            }
        },
        methods: {
            reorder() {
                if (this.finite) {
                    c(this.slides, "order", "");
                    return
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o) => c(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = b(this.list).width / 2 - b(e).width / 2,
                    s = 0;
                for (; i > 0;) {
                    const n = this.getIndex(--s + t, t),
                        o = this.slides[n];
                    c(o, "order", n > t ? -2 : -1), i -= b(o).width
                }
            },
            updateActiveClasses(t = this.index) {
                let e = this._getTransitioner(t).getActives();
                this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
                const i = [this.clsActive, !this.sets || m(this.sets, S(this.index)) ? this.clsActivated : ""];
                for (const s of this.slides) {
                    const n = m(e, s);
                    R(s, i, n), f(s, "aria-hidden", !n);
                    for (const o of z(Te, s)) vt(o, "_tabindex") || (o._tabindex = f(o, "tabindex")), f(o, "tabindex", n ? o._tabindex : -1)
                }
            },
            getValidIndex(t = this.index, e = this.prevIndex) {
                if (t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (m(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e)
                } while (t !== i);
                return t
            },
            getAdjacentSlides() {
                const {
                    width: t
                } = b(this.list), e = -t, i = t * 2, s = b(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [-1, 1]) {
                    let a = n + (r > 0 ? s : 0),
                        l = 0;
                    do {
                        const h = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += b(h).width * r, o.add(h)
                    } while (this.length > l && a > e && a < i)
                }
                return Array.from(o)
            },
            getIndexAt(t) {
                let e = -1;
                const i = this.center ? be(this.list) - (b(this.slides[0]).width / 2 + b(Mt(this.slides)).width / 2) : be(this.list, this.maxIndex);
                let s = t * i,
                    n = 0;
                do {
                    const o = b(this.slides[++e]).width,
                        r = this.center ? o / 2 + b(this.slides[e + 1]).width / 2 : o;
                    n = s / r % 1, s -= r
                } while (s >= 0 && e < this.maxIndex);
                return [e, n]
            }
        }
    };

    function sl(t, e) {
        if (!t || t.length < 2) return !0;
        const {
            width: i
        } = b(t);
        if (!e) return Math.ceil(be(t)) < Math.trunc(i + nl(t));
        const s = D(t),
            n = Math.trunc(i / 2);
        for (const o in s) {
            const r = s[o],
                a = b(r).width,
                l = new Set([r]);
            let h = 0;
            for (const u of [-1, 1]) {
                let d = a / 2,
                    p = 0;
                for (; d < n;) {
                    const g = s[ot(+o + u + p++ * u, s)];
                    if (l.has(g)) return !0;
                    d += b(g).width, l.add(g)
                }
                h = Math.max(h, a / 2 + b(s[ot(+o + u, s)]).width / 2 - (d - n))
            }
            if (Math.trunc(h) > Nt(s.filter(u => !l.has(u)), u => b(u).width)) return !0
        }
        return !1
    }

    function nl(t) {
        return Math.max(0, ...D(t).map(e => b(e).width))
    }
    var vo = {
        mixins: [io],
        beforeConnect() {
            this.item = this.$el.closest(`.${this.$options.id.replace("parallax","items")} > *`)
        },
        disconnected() {
            this.item = null
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el() {
                return this.item
            },
            handler({
                type: t,
                detail: {
                    percent: e,
                    duration: i,
                    timing: s,
                    dir: n
                }
            }) {
                tt.read(() => {
                    if (!this.matchMedia) return;
                    const o = this.getCss(wo(t, n, e)),
                        r = this.getCss(bo(t) ? .5 : n > 0 ? 1 : 0);
                    tt.write(() => {
                        c(this.$el, o), M.start(this.$el, r, i, s).catch(_)
                    })
                })
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el() {
                return this.item
            },
            handler() {
                M.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el() {
                return this.item
            },
            handler({
                type: t,
                detail: {
                    percent: e,
                    dir: i
                }
            }) {
                tt.read(() => {
                    if (!this.matchMedia) {
                        this.reset();
                        return
                    }
                    const s = this.getCss(wo(t, i, e));
                    tt.write(() => c(this.$el, s))
                })
            }
        }]
    };

    function bo(t) {
        return te(t, "in")
    }

    function wo(t, e, i) {
        return i /= 2, bo(t) ^ e < 0 ? i : 1 - i
    }
    var ol = { ...Ss,
            fade: {
                show() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show() {
                    return [{
                        opacity: 0,
                        transform: pe(1 + .5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        transform: pe(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show(t) {
                    return t < 0 ? [{
                        transform: W(30),
                        zIndex: -1
                    }, {
                        transform: W(),
                        zIndex: 0
                    }] : [{
                        transform: W(-100),
                        zIndex: 0
                    }, {
                        transform: W(),
                        zIndex: -1
                    }]
                },
                percent(t, e, i) {
                    return i < 0 ? 1 - We(e) : We(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: W(30 * t),
                        zIndex: -1
                    }, {
                        transform: W(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: W(-t * 100),
                        zIndex: 0
                    }, {
                        transform: W(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show(t) {
                    return t < 0 ? [{
                        transform: W(100),
                        zIndex: 0
                    }, {
                        transform: W(),
                        zIndex: -1
                    }] : [{
                        transform: W(-30),
                        zIndex: -1
                    }, {
                        transform: W(),
                        zIndex: 0
                    }]
                },
                percent(t, e, i) {
                    return i > 0 ? 1 - We(e) : We(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: W(t * 100),
                        zIndex: 0
                    }, {
                        transform: W(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: W(-30 * t),
                        zIndex: -1
                    }, {
                        transform: W(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        },
        rl = {
            mixins: [st, Jn, fo, uo, po],
            props: {
                ratio: String,
                minHeight: String,
                maxHeight: String
            },
            data: {
                ratio: "16:9",
                minHeight: void 0,
                maxHeight: void 0,
                selList: ".uk-slideshow-items",
                attrItem: "uk-slideshow-item",
                selNav: ".uk-slideshow-nav",
                Animations: ol
            },
            watch: {
                list(t) {
                    c(t, {
                        aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
                        minHeight: this.minHeight,
                        maxHeight: this.maxHeight,
                        minWidth: "100%",
                        maxWidth: "100%"
                    })
                }
            },
            methods: {
                getAdjacentSlides() {
                    return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                }
            }
        },
        al = {
            mixins: [st, Tn],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            events: {
                name: dt,
                passive: !1,
                handler: "init"
            },
            computed: {
                target: (t, e) => (e.tBodies || [e])[0],
                items() {
                    return D(this.target)
                },
                isEmpty() {
                    return !this.items.length
                },
                handles({
                    handle: t
                }, e) {
                    return t ? z(t, e) : this.items
                }
            },
            watch: {
                isEmpty(t) {
                    R(this.target, this.clsEmpty, t)
                },
                handles(t, e) {
                    c(e, {
                        touchAction: "",
                        userSelect: ""
                    }), c(t, {
                        touchAction: "none",
                        userSelect: "none"
                    })
                }
            },
            update: {
                write(t) {
                    if (!this.drag || !O(this.placeholder)) return;
                    const {
                        pos: {
                            x: e,
                            y: i
                        },
                        origin: {
                            offsetTop: s,
                            offsetLeft: n
                        },
                        placeholder: o
                    } = this;
                    c(this.drag, {
                        top: i - s,
                        left: e - n
                    });
                    const r = this.getSortable(document.elementFromPoint(e, i));
                    if (!r) return;
                    const {
                        items: a
                    } = r;
                    if (a.some(M.inProgress)) return;
                    const l = ul(a, {
                        x: e,
                        y: i
                    });
                    if (a.length && (!l || l === o)) return;
                    const h = this.getSortable(o),
                        u = dl(r.target, l, o, e, i, r === h && t.moved !== l);
                    u !== !1 && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)))
                },
                events: ["move"]
            },
            methods: {
                init(t) {
                    const {
                        target: e,
                        button: i,
                        defaultPrevented: s
                    } = t, [n] = this.items.filter(o => o.contains(e));
                    !n || s || i > 0 || Ui(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = kt(t), this.touched = new Set([this]), this.placeholder = n, this.origin = {
                        target: e,
                        index: yt(n),
                        ...this.pos
                    }, x(document, ii, this.move), x(document, Tt, this.end), this.threshold || this.start(t))
                },
                start(t) {
                    this.drag = cl(this.$container, this.placeholder);
                    const {
                        left: e,
                        top: i
                    } = b(this.placeholder);
                    pt(this.origin, {
                        offsetLeft: this.pos.x - e,
                        offsetTop: this.pos.y - i
                    }), y(this.drag, this.clsDrag, this.clsCustom), y(this.placeholder, this.clsPlaceholder), y(this.items, this.clsItem), y(document.documentElement, this.clsDragState), v(this.$el, "start", [this, this.placeholder]), ll(this.pos), this.move(t)
                },
                move: pl(function(t) {
                    pt(this.pos, kt(t)), this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                }),
                end() {
                    if (Pt(document, ii, this.move), Pt(document, Tt, this.end), !this.drag) return;
                    hl();
                    const t = this.getSortable(this.placeholder);
                    this === t ? this.origin.index !== yt(this.placeholder) && v(this.$el, "moved", [this, this.placeholder]) : (v(t.$el, "added", [t, this.placeholder]), v(this.$el, "removed", [this, this.placeholder])), v(this.$el, "stop", [this, this.placeholder]), rt(this.drag), this.drag = null;
                    for (const {
                            clsPlaceholder: e,
                            clsItem: i
                        } of this.touched)
                        for (const s of this.touched) A(s.items, e, i);
                    this.touched = null, A(document.documentElement, this.clsDragState)
                },
                insert(t, e) {
                    y(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => ai(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => L(this.target, t))
                },
                remove(t) {
                    this.target.contains(t) && this.animate(() => rt(t))
                },
                getSortable(t) {
                    do {
                        const e = this.$getComponent(t, "sortable");
                        if (e && (e === this || this.group !== !1 && e.group === this.group)) return e
                    } while (t = O(t))
                }
            }
        };
    let xo;

    function ll(t) {
        let e = Date.now();
        xo = setInterval(() => {
            let {
                x: i,
                y: s
            } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(), Ut(document.elementFromPoint(i, t.y)).reverse().some(o => {
                let {
                    scrollTop: r,
                    scrollHeight: a
                } = o;
                const {
                    top: l,
                    bottom: h,
                    height: u
                } = at(o);
                if (l < s && l + 35 > s) r -= n;
                else if (h > s && h - 35 < s) r += n;
                else return;
                if (r > 0 && r < a - u) return o.scrollTop = r, !0
            })
        }, 15)
    }

    function hl() {
        clearInterval(xo)
    }

    function cl(t, e) {
        let i;
        if (H(e, "li", "tr")) {
            i = $("<div>"), L(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames()) f(i, s, e.getAttribute(s))
        } else i = e.cloneNode(!0);
        return L(t, i), c(i, "margin", "0", "important"), c(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: c(e, "padding")
        }), it(i.firstElementChild, it(e.firstElementChild)), i
    }

    function ul(t, e) {
        return t[xt(t, i => ti(e, b(i)))]
    }

    function dl(t, e, i, s, n, o) {
        if (!D(t).length) return;
        const r = b(e);
        if (!o) return fl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = b(i),
            l = $o([r.top, r.bottom], [a.top, a.bottom]),
            [h, u, d, p] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"],
            g = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[d] < r[d] ? g && h < r[d] + g ? !1 : e.nextElementSibling : g && h > r[p] - g ? !1 : e
    }

    function fl(t, e) {
        const i = D(t).length === 1;
        i && L(t, e);
        const s = D(t),
            n = s.some((o, r) => {
                const a = b(o);
                return s.slice(r + 1).some(l => {
                    const h = b(l);
                    return !$o([a.left, a.right], [h.left, h.right])
                })
            });
        return i && rt(e), n
    }

    function $o(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }

    function pl(t) {
        let e;
        return function(...i) {
            e || (e = !0, requestAnimationFrame(() => {
                e = !1, t.call(this, ...i)
            }))
        }
    }
    var yo = {
        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            shift: Boolean,
            inset: Boolean
        },
        data: {
            pos: `bottom-${U?"right":"left"}`,
            offset: !1,
            flip: !0,
            shift: !0,
            inset: !1
        },
        connected() {
            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = m(["top", "bottom"], this.dir) ? "y" : "x"
        },
        methods: {
            positionAt(t, e, i) {
                let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
                const n = [this.flip && "flip", this.shift && "shift"],
                    o = {
                        element: [this.inset ? this.dir : di(this.dir), this.align],
                        target: [this.dir, this.align]
                    };
                if (this.axis === "y") {
                    for (const l in o) o[l].reverse();
                    s.reverse(), n.reverse()
                }
                const r = gl(t),
                    a = b(t);
                c(t, {
                    top: -a.height,
                    left: -a.width
                }), dn(t, e, {
                    attach: o,
                    offset: s,
                    boundary: i,
                    placement: n,
                    viewportOffset: this.getViewportOffset(t)
                }), r()
            },
            getPositionOffset(t = this.$el) {
                return V(this.offset === !1 ? c(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (m(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
            },
            getShiftOffset(t = this.$el) {
                return this.align === "center" ? 0 : V(c(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (m(["left", "top"], this.align) ? 1 : -1)
            },
            getViewportOffset(t) {
                return V(c(t, "--uk-position-viewport-offset"))
            }
        }
    };

    function gl(t) {
        const e = At(t),
            {
                scrollTop: i
            } = e;
        return () => {
            i !== e.scrollTop && (e.scrollTop = i)
        }
    }
    var ml = {
        mixins: [Le, Yt, yo],
        data: {
            pos: "top",
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active"
        },
        connected() {
            vl(this.$el)
        },
        disconnected() {
            this.hide()
        },
        methods: {
            show() {
                if (this.isToggled(this.tooltip || null)) return;
                const {
                    delay: t = 0,
                    title: e
                } = wl(this.$options);
                if (!e) return;
                const i = f(this.$el, "title"),
                    s = x(this.$el, ["blur", ae], o => !gt(o) && this.hide());
                this.reset = () => {
                    f(this.$el, {
                        title: i,
                        "aria-describedby": null
                    }), s()
                };
                const n = Xt(this);
                f(this.$el, {
                    title: null,
                    "aria-describedby": n
                }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, n), t)
            },
            async hide() {
                var t;
                T(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), rt(this.tooltip), this.tooltip = null)
            },
            async _show(t, e) {
                this.tooltip = L(this.container, `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`), x(this.tooltip, "toggled", (i, s) => {
                    if (!s) return;
                    const n = () => this.positionAt(this.tooltip, this.$el);
                    n();
                    const [o, r] = bl(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? `${di(o)}-${r}` : `${r}-${di(o)}`;
                    const a = [F(document, `keydown ${dt}`, this.hide, !1, l => l.type === dt && !this.$el.contains(l.target) || l.type === "keydown" && l.keyCode === P.ESC), x([document, ...Vt(this.$el)], "scroll", n, {
                        passive: !0
                    })];
                    F(this.tooltip, "hide", () => a.forEach(l => l()), {
                        self: !0
                    })
                }), await this.toggleElement(this.tooltip, !0) || this.hide()
            }
        },
        events: {
            [`focus ${Ht} ${dt}`](t) {
                (!gt(t) || t.type === dt) && this.show()
            }
        }
    };

    function vl(t) {
        ni(t) || f(t, "tabindex", "0")
    }

    function bl(t, e, [i, s]) {
        const n = I(t),
            o = I(e),
            r = [
                ["left", "right"],
                ["top", "bottom"]
            ];
        for (const l of r) {
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break
            }
        }
        return s = (m(r[0], i) ? r[1] : r[0]).find(l => n[l] === o[l]) || "center", [i, s]
    }

    function wl(t) {
        const {
            el: e,
            id: i,
            data: s
        } = t;
        return ["delay", "title"].reduce((n, o) => ({
            [o]: X(e, o),
            ...n
        }), { ...de(X(e, i), ["title"]),
            ...s
        })
    }
    var xl = {
        mixins: [yi],
        i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
        },
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: _,
            beforeAll: _,
            beforeSend: _,
            complete: _,
            completeAll: _,
            error: _,
            fail: _,
            load: _,
            loadEnd: _,
            loadStart: _,
            progress: _
        },
        events: {
            change(t) {
                T(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
            },
            drop(t) {
                _i(t);
                const e = t.dataTransfer;
                e != null && e.files && (A(this.$el, this.clsDragover), this.upload(e.files))
            },
            dragenter(t) {
                _i(t)
            },
            dragover(t) {
                _i(t), y(this.$el, this.clsDragover)
            },
            dragleave(t) {
                _i(t), A(this.$el, this.clsDragover)
            }
        },
        methods: {
            async upload(t) {
                if (t = Dt(t), !t.length) return;
                v(this.$el, "upload", [t]);
                for (const s of t) {
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.t("invalidSize", this.maxSize));
                        return
                    }
                    if (this.allow && !ko(this.allow, s.name)) {
                        this.fail(this.t("invalidName", this.allow));
                        return
                    }
                    if (this.mime && !ko(this.mime, s.type)) {
                        this.fail(this.t("invalidMime", this.mime));
                        return
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = $l(t, this.concurrent),
                    i = async s => {
                        const n = new FormData;
                        s.forEach(o => n.append(this.name, o));
                        for (const o in this.params) n.append(o, this.params[o]);
                        try {
                            const o = await yl(this.url, {
                                data: n,
                                method: this.method,
                                responseType: this.type,
                                beforeSend: r => {
                                    const {
                                        xhr: a
                                    } = r;
                                    x(a.upload, "progress", this.progress);
                                    for (const l of ["loadStart", "load", "loadEnd", "abort"]) x(a, l.toLowerCase(), this[l]);
                                    return this.beforeSend(r)
                                }
                            });
                            this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o)
                        } catch (o) {
                            this.error(o)
                        }
                    };
                await i(e.shift())
            }
        }
    };

    function ko(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")}$`, "i"))
    }

    function $l(t, e) {
        const i = [];
        for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
        return i
    }

    function _i(t) {
        t.preventDefault(), t.stopPropagation()
    }

    function yl(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: _,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(() => i.beforeSend(i)).then(() => kl(t, i))
    }

    function kl(t, e) {
        return new Promise((i, s) => {
            const {
                xhr: n
            } = e;
            for (const o in e)
                if (o in n) try {
                    n[o] = e[o]
                } catch {}
            n.open(e.method.toUpperCase(), t);
            for (const o in e.headers) n.setRequestHeader(o, e.headers[o]);
            x(n, "load", () => {
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(pt(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }))
            }), x(n, "error", () => s(pt(Error("Network Error"), {
                xhr: n
            }))), x(n, "timeout", () => s(pt(Error("Network Timeout"), {
                xhr: n
            }))), n.send(e.data)
        })
    }
    var Sl = Object.freeze({
        __proto__: null,
        Countdown: Br,
        Filter: Jr,
        Lightbox: Wa,
        LightboxPanel: Zn,
        Notification: Ra,
        Parallax: Za,
        Slider: il,
        SliderParallax: vo,
        Slideshow: rl,
        SlideshowParallax: vo,
        Sortable: al,
        Tooltip: ml,
        Upload: xl
    });

    function Il(t) {
        Ft && window.MutationObserver && (document.body ? requestAnimationFrame(() => So(t)) : new MutationObserver((e, i) => {
            document.body && (So(t), i.disconnect())
        }).observe(document.documentElement, {
            childList: !0
        }))
    }

    function So(t) {
        v(document, "uikit:init", t), document.body && St(document.body, Io), new MutationObserver(e => e.forEach(Cl)).observe(document, {
            subtree: !0,
            childList: !0
        }), new MutationObserver(e => e.forEach(El)).observe(document, {
            subtree: !0,
            attributes: !0
        }), t._initialized = !0
    }

    function Cl({
        addedNodes: t,
        removedNodes: e
    }) {
        for (const i of t) St(i, Io);
        for (const i of e) St(i, Tl)
    }

    function El({
        target: t,
        attributeName: e
    }) {
        var i;
        const s = Co(e);
        s && (Et(t, e) ? Re(s, t) : (i = ki(t, s)) == null || i.$destroy())
    }

    function Io(t) {
        const e = qe(t);
        for (const i in e) Cs(e[i]);
        for (const i of t.getAttributeNames()) {
            const s = Co(i);
            s && Re(s, t)
        }
    }

    function Tl(t) {
        const e = qe(t);
        for (const i in e) Es(e[i])
    }

    function Co(t) {
        ft(t, "data-") && (t = t.slice(5));
        const e = me[t];
        return e && (e.options || e).name
    }
    Na(ct), za(ct);
    var Eo = {
        mixins: [st, Yt],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            offset: 0
        },
        computed: {
            items: ({
                targets: t
            }, e) => z(t, e),
            toggles({
                toggle: t
            }) {
                return this.items.map(e => $(t, e))
            },
            contents({
                content: t
            }) {
                return this.items.map(e => {
                    var i;
                    return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || $(t, e)
                })
            }
        },
        watch: {
            items(t, e) {
                if (e || k(t, this.clsOpen)) return;
                const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                i && this.toggle(i, !1)
            },
            toggles() {
                this.$emit()
            },
            contents(t) {
                for (const e of t) {
                    const i = k(this.items.find(s => s.contains(e)), this.clsOpen);
                    Ai(e, !i)
                }
                this.$emit()
            }
        },
        observe: wi(),
        events: [{
            name: "click keydown",
            delegate() {
                return `${this.targets} ${this.$props.toggle}`
            },
            async handler(t) {
                var e;
                t.type === "keydown" && t.keyCode !== P.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = _l(t.target), await this.toggle(yt(this.toggles, t.current)), this._off())
            }
        }, {
            name: "shown hidden",
            self: !0,
            delegate() {
                return this.targets
            },
            handler() {
                this.$emit()
            }
        }],
        update() {
            const t = Pe(this.items, `.${this.clsOpen}`);
            for (const e in this.items) {
                const i = this.toggles[e],
                    s = this.contents[e];
                if (!i || !s) continue;
                i.id = Xt(this, i), s.id = Xt(this, s);
                const n = m(t, this.items[e]);
                f(i, {
                    role: H(i, "a") ? "button" : null,
                    "aria-controls": s.id,
                    "aria-expanded": n,
                    "aria-disabled": !this.collapsible && t.length < 2 && n
                }), f(s, {
                    role: "region",
                    "aria-labelledby": i.id
                }), H(s, "ul") && f(D(s), "role", "presentation")
            }
        },
        methods: {
            toggle(t, e) {
                t = this.items[ot(t, this.items)];
                let i = [t];
                const s = Pe(this.items, `.${this.clsOpen}`);
                if (!this.multiple && !m(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && m(s, t))) return Promise.all(i.map(n => this.toggleElement(n, !m(s, n), (o, r) => {
                    if (R(o, this.clsOpen, r), e === !1 || !this.animation) {
                        Ai($(this.content, o), !r);
                        return
                    }
                    return Pl(o, r, this)
                })))
            }
        }
    };

    function Ai(t, e) {
        t && (t.hidden = e)
    }
    async function Pl(t, e, {
        content: i,
        duration: s,
        velocity: n,
        transition: o
    }) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || $(i, t), t._wrapper || (t._wrapper = ci(i, "<div>"));
        const a = t._wrapper;
        c(a, "overflow", "hidden");
        const l = S(c(a, "height"));
        await M.cancel(a), Ai(i, !1);
        const h = Nt(["marginTop", "marginBottom"], d => c(i, d)) + b(i).height,
            u = l / h;
        s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), await M.start(a, {
            height: e ? h : 0
        }, s, o), De(i), delete t._wrapper, e || Ai(i, !0)
    }

    function _l(t) {
        const e = At(t, !0);
        let i;
        return function s() {
            i = requestAnimationFrame(() => {
                const {
                    top: n
                } = b(t);
                n < 0 && (e.scrollTop += n), s()
            })
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i))
    }
    var Al = {
        mixins: [st, Yt],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".uk-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate() {
                return this.selClose
            },
            handler(t) {
                t.preventDefault(), this.close()
            }
        },
        methods: {
            async close() {
                await this.toggleElement(this.$el, !1, Ol), this.$destroy(!0)
            }
        }
    };

    function Ol(t, e, {
        duration: i,
        transition: s,
        velocity: n
    }) {
        const o = S(c(t, "height"));
        return c(t, "height", o), M.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, n * o + i, s)
    }
    var To = {
        args: "autoplay",
        props: {
            automute: Boolean,
            autoplay: Boolean
        },
        data: {
            automute: !1,
            autoplay: !0
        },
        beforeConnect() {
            this.autoplay === "inview" && !Et(this.$el, "preload") && (this.$el.preload = "none"), H(this.$el, "iframe") && !Et(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (H(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && on(this.$el)
        },
        events: [{
            name: `${Ht} focusin`,
            filter() {
                return m(this.autoplay, "hover")
            },
            handler(t) {
                !gt(t) || !Dl(this.$el) ? as(this.$el) : fi(this.$el)
            }
        }, {
            name: `${ae} focusout`,
            filter() {
                return m(this.autoplay, "hover")
            },
            handler(t) {
                gt(t) || fi(this.$el)
            }
        }],
        observe: [fe({
            filter: ({
                $el: t,
                autoplay: e
            }) => e && e !== "hover" && rn(t),
            handler([{
                isIntersecting: t
            }]) {
                document.fullscreenElement || (t ? as(this.$el) : fi(this.$el))
            },
            args: {
                intersecting: !1
            },
            options: ({
                $el: t,
                autoplay: e
            }) => ({
                root: e === "inview" ? null : O(t)
            })
        })]
    };

    function Dl(t) {
        return !t.paused && !t.ended
    }
    var Ml = {
        mixins: [To],
        props: {
            width: Number,
            height: Number
        },
        data: {
            automute: !0
        },
        events: {
            "load loadedmetadata" () {
                this.$emit("resize")
            }
        },
        observe: ht({
            target: ({
                $el: t
            }) => [Po(t) || O(t)],
            filter: ({
                $el: t
            }) => !_o(t)
        }),
        update: {
            read() {
                if (_o(this.$el)) return;
                const {
                    ratio: t,
                    cover: e
                } = ji, {
                    $el: i,
                    width: s,
                    height: n
                } = this;
                let o = {
                    width: s,
                    height: n
                };
                if (!s || !n) {
                    const h = {
                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                    };
                    s ? o = t(h, "width", s) : n ? o = t(h, "height", n) : o = h
                }
                const {
                    offsetHeight: r,
                    offsetWidth: a
                } = Po(i) || O(i), l = e(o, {
                    width: a + (a % 2 ? 1 : 0),
                    height: r + (r % 2 ? 1 : 0)
                });
                return !l.width || !l.height ? !1 : l
            },
            write({
                height: t,
                width: e
            }) {
                c(this.$el, {
                    height: t,
                    width: e
                })
            },
            events: ["resize"]
        }
    };

    function Po(t) {
        for (; t = O(t);)
            if (c(t, "position") !== "static") return t
    }

    function _o(t) {
        return H(t, "img", "video")
    }
    let J;
    var Ao = {
        mixins: [Le, yo, Yt],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean,
            closeOnScroll: Boolean
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: ["uk-animation-fade"],
            cls: "uk-open",
            container: !1,
            closeOnScroll: !1
        },
        computed: {
            boundary({
                boundary: t,
                boundaryX: e,
                boundaryY: i
            }, s) {
                return [Q(e || t, s) || window, Q(i || t, s) || window]
            },
            target({
                target: t,
                targetX: e,
                targetY: i
            }, s) {
                return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === !0 ? window : Q(e, s), i === !0 ? window : Q(i, s)]
            }
        },
        created() {
            this.tracker = new en
        },
        beforeConnect() {
            this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`
        },
        connected() {
            y(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = zl(this)), this._style = Hi(this.$el.style, ["width", "height"])
        },
        disconnected() {
            this.isActive() && (this.hide(!1), J = null), c(this.$el, this._style)
        },
        events: [{
            name: "click",
            delegate() {
                return ".uk-drop-close"
            },
            handler(t) {
                t.preventDefault(), this.hide(!1)
            }
        }, {
            name: "click",
            delegate() {
                return 'a[href*="#"]'
            },
            handler({
                defaultPrevented: t,
                current: e
            }) {
                const {
                    hash: i
                } = e;
                !t && i && le(e) && !this.$el.contains($(i)) && this.hide(!1)
            }
        }, {
            name: "beforescroll",
            handler() {
                this.hide(!1)
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
            }
        }, {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.show(e == null ? void 0 : e.$el)
            }
        }, {
            name: "togglehide",
            self: !0,
            handler(t) {
                t.preventDefault(), T(this.$el, ":focus,:hover") || this.hide()
            }
        }, {
            name: `${Ht} focusin`,
            filter() {
                return m(this.mode, "hover")
            },
            handler(t) {
                gt(t) || this.clearTimers()
            }
        }, {
            name: `${ae} focusout`,
            filter() {
                return m(this.mode, "hover")
            },
            handler(t) {
                !gt(t) && t.relatedTarget && this.hide()
            }
        }, {
            name: "toggled",
            self: !0,
            handler(t, e) {
                e && (this.clearTimers(), this.position())
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                J = this, this.tracker.init(), f(this.targetEl, "aria-expanded", !0);
                const t = [Fl(this), Hl(this), Wl(this), this.autoUpdate && Oo(this), this.closeOnScroll && Ll(this)];
                F(this.$el, "hide", () => t.forEach(e => e && e()), {
                    self: !0
                }), this.bgScroll || F(this.$el, "hidden", An(this.$el), {
                    self: !0
                })
            }
        }, {
            name: "beforehide",
            self: !0,
            handler: "clearTimers"
        }, {
            name: "hide",
            handler({
                target: t
            }) {
                if (this.$el !== t) {
                    J = J === null && this.$el.contains(t) && this.isToggled() ? this : J;
                    return
                }
                J = this.isActive() ? null : J, this.tracker.cancel(), f(this.targetEl, "aria-expanded", null)
            }
        }],
        update: {
            write() {
                this.isToggled() && !k(this.$el, this.clsEnter) && this.position()
            }
        },
        methods: {
            show(t = this.targetEl, e = !0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
                    if (J) {
                        if (e && J.isDelaying) {
                            this.showTimer = setTimeout(() => T(t, ":hover") && this.show(), 10);
                            return
                        }
                        let i;
                        for (; J && i !== J && !J.$el.contains(this.$el);) i = J, J.hide(!1, !1)
                    }
                    this.container && O(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                }
            },
            hide(t = !0, e = !0) {
                const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(), this.isDelayedHide = t, this.isDelaying = Bl(this.$el).some(s => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
            },
            clearTimers() {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
            },
            isActive() {
                return J === this
            },
            position() {
                A(this.$el, "uk-drop-stack"), c(this.$el, this._style), this.$el.hidden = !0;
                const t = this.target.map(n => Nl(this.$el, n)),
                    e = this.getViewportOffset(this.$el),
                    i = [
                        [0, ["x", "width", "left", "right"]],
                        [1, ["y", "height", "top", "bottom"]]
                    ];
                for (const [n, [o, r]] of i) this.axis !== o && m([o, !0], this.stretch) && c(this.$el, {
                    [r]: Math.min(I(this.boundary[n])[r], t[n][r] - 2 * e),
                    [`overflow-${o}`]: "auto"
                });
                const s = t[0].width - 2 * e;
                this.$el.hidden = !1, c(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && y(this.$el, "uk-drop-stack"), c(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)
                    if (this.axis === o && m([o, !0], this.stretch)) {
                        const h = Math.abs(this.getPositionOffset()),
                            u = I(this.target[n]),
                            d = I(this.$el);
                        c(this.$el, {
                            [r]: (u[a] > d[a] ? u[this.inset ? l : a] - Math.max(I(this.boundary[n])[a], t[n][a] + e) : Math.min(I(this.boundary[n])[l], t[n][l] - e) - u[this.inset ? a : l]) - h,
                            [`overflow-${o}`]: "auto"
                        }), this.positionAt(this.$el, this.target, this.boundary)
                    }
            }
        }
    };

    function Bl(t) {
        const e = [];
        return St(t, i => c(i, "position") !== "static" && e.push(i)), e
    }

    function Nl(t, e) {
        return at(Vt(e).find(i => i.contains(t)))
    }

    function zl(t) {
        const {
            $el: e
        } = t.$create("toggle", Q(t.toggle, t.$el), {
            target: t.$el,
            mode: t.mode
        });
        return f(e, "aria-haspopup", !0), e
    }

    function Fl(t) {
        const e = () => t.$emit(),
            i = [os(e), Be(Vt(t.$el).concat(t.target), e)];
        return () => i.map(s => s.disconnect())
    }

    function Oo(t, e = () => t.$emit()) {
        return x([document, ...Vt(t.$el)], "scroll", e, {
            passive: !0
        })
    }

    function Hl(t) {
        return x(document, "keydown", e => {
            e.keyCode === P.ESC && t.hide(!1)
        })
    }

    function Ll(t) {
        return Oo(t, () => t.hide(!1))
    }

    function Wl(t) {
        return x(document, dt, ({
            target: e
        }) => {
            t.$el.contains(e) || F(document, `${Tt} ${si} scroll`, ({
                defaultPrevented: i,
                type: s,
                target: n
            }) => {
                var o;
                !i && s === Tt && e === n && !((o = t.targetEl) != null && o.contains(e)) && t.hide(!1)
            }, !0)
        })
    }
    var Do = {
        mixins: [st, Le],
        props: {
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean,
            closeOnScroll: Boolean
        },
        data: {
            align: U ? "right" : "left",
            clsDrop: "uk-dropdown",
            clsDropbar: "uk-dropnav-dropbar",
            boundary: !0,
            dropbar: !1,
            dropbarAnchor: !1,
            duration: 200,
            container: !1,
            selNavItem: "> li > a, > ul > li > a"
        },
        computed: {
            dropbarAnchor: ({
                dropbarAnchor: t
            }, e) => Q(t, e) || e,
            dropbar({
                dropbar: t
            }) {
                return t ? (t = this._dropbar || Q(t, this.$el) || $(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = $("<div></div>"))) : null
            },
            dropContainer(t, e) {
                return this.container || e
            },
            dropdowns({
                clsDrop: t
            }, e) {
                var i;
                const s = z(`.${t}`, e);
                if (this.dropContainer !== e)
                    for (const n of z(`.${t}`, this.dropContainer)) {
                        const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                        !m(s, n) && o && this.$el.contains(o) && s.push(n)
                    }
                return s
            },
            items({
                selNavItem: t
            }, e) {
                return z(t, e)
            }
        },
        watch: {
            dropbar(t) {
                y(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`)
            },
            dropdowns() {
                this.initializeDropdowns()
            }
        },
        connected() {
            this.initializeDropdowns()
        },
        disconnected() {
            rt(this._dropbar), delete this._dropbar
        },
        events: [{
            name: "mouseover focusin",
            delegate() {
                return this.selNavItem
            },
            handler({
                current: t
            }) {
                const e = this.getActive();
                e && m(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying && e.hide(!1)
            }
        }, {
            name: "keydown",
            self: !0,
            delegate() {
                return this.selNavItem
            },
            handler(t) {
                var e;
                const {
                    current: i,
                    keyCode: s
                } = t, n = this.getActive();
                s === P.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(), (e = $(Te, n.$el)) == null || e.focus()), Mo(t, this.items, n)
            }
        }, {
            name: "keydown",
            el() {
                return this.dropContainer
            },
            delegate() {
                return `.${this.clsDrop}`
            },
            handler(t) {
                var e;
                const {
                    current: i,
                    keyCode: s
                } = t;
                if (!m(this.dropdowns, i)) return;
                const n = this.getActive();
                let o = -1;
                if (s === P.HOME ? o = 0 : s === P.END ? o = "last" : s === P.UP ? o = "previous" : s === P.DOWN ? o = "next" : s === P.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
                    t.preventDefault();
                    const r = z(Te, i);
                    r[ot(o, r, xt(r, a => T(a, ":focus")))].focus()
                }
                Mo(t, this.items, n)
            }
        }, {
            name: "mouseleave",
            el() {
                return this.dropbar
            },
            filter() {
                return this.dropbar
            },
            handler() {
                const t = this.getActive();
                t && m(t.mode, "hover") && !this.dropdowns.some(e => T(e, ":hover")) && t.hide()
            }
        }, {
            name: "beforeshow",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler({
                target: t
            }) {
                this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && li(this.dropbarAnchor, this.dropbar), y(t, `${this.clsDrop}-dropbar`))
            }
        }, {
            name: "show",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler({
                target: t
            }) {
                if (!this.isDropbarDrop(t)) return;
                const e = this.getDropdown(t),
                    i = () => {
                        const s = Math.max(..._e(t, `.${this.clsDrop}`).concat(t).map(n => I(n).bottom));
                        I(this.dropbar, {
                            left: I(this.dropbar).left,
                            top: this.getDropbarOffset(e.getPositionOffset())
                        }), this.transitionTo(s - I(this.dropbar).top + S(c(t, "marginBottom")), t)
                    };
                this._observer = Be([e.$el, ...e.target], i), i()
            }
        }, {
            name: "beforehide",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler(t) {
                const e = this.getActive();
                T(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && m(e.mode, "hover") && e.isDelayedHide && !this.items.some(i => e.targetEl !== i && T(i, ":focus")) && t.preventDefault()
            }
        }, {
            name: "hide",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler({
                target: t
            }) {
                var e;
                if (!this.isDropbarDrop(t)) return;
                (e = this._observer) == null || e.disconnect();
                const i = this.getActive();
                (!i || i.$el === t) && this.transitionTo(0)
            }
        }],
        methods: {
            getActive() {
                var t;
                return m(this.dropdowns, (t = J) == null ? void 0 : t.$el) && J
            },
            async transitionTo(t, e) {
                const {
                    dropbar: i
                } = this, s = it(i);
                if (e = s < t && e, await M.cancel([e, i]), e) {
                    const n = I(e).top - I(i).top - s;
                    n > 0 && c(e, "transitionDelay", `${n/t*this.duration}ms`)
                }
                c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), it(i, s), await Promise.all([M.start(i, {
                    height: t
                }, this.duration), M.start(e, {
                    clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                }, this.duration).finally(() => c(e, {
                    clipPath: "",
                    transitionDelay: ""
                }))]).catch(_)
            },
            getDropdown(t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
            },
            isDropbarDrop(t) {
                return m(this.dropdowns, t) && k(t, this.clsDrop)
            },
            getDropbarOffset(t) {
                const {
                    $el: e,
                    target: i,
                    targetY: s
                } = this, {
                    top: n,
                    height: o
                } = I(Q(s || i || e, e));
                return n + o + t
            },
            initializeDropdowns() {
                this.$create("drop", this.dropdowns.filter(t => !this.getDropdown(t)), { ...this.$props,
                    flip: !1,
                    shift: !0,
                    pos: `bottom-${this.align}`,
                    boundary: this.boundary === !0 ? this.$el : this.boundary
                })
            }
        }
    };

    function Mo(t, e, i) {
        var s, n, o;
        const {
            current: r,
            keyCode: a
        } = t;
        let l = -1;
        a === P.HOME ? l = 0 : a === P.END ? l = "last" : a === P.LEFT ? l = "previous" : a === P.RIGHT ? l = "next" : a === P.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, !1), e[ot(l, e, e.indexOf(i.targetEl || r))].focus())
    }
    var jl = {
            mixins: [st],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input: (t, e) => $(Ee, e),
                state() {
                    return this.input.nextElementSibling
                },
                target({
                    target: t
                }, e) {
                    return t && (t === !0 && O(this.input) === e && this.input.nextElementSibling || $(t, e))
                }
            },
            update() {
                var t;
                const {
                    target: e,
                    input: i
                } = this;
                if (!e) return;
                let s;
                const n = Ui(e) ? "value" : "textContent",
                    o = e[n],
                    r = (t = i.files) != null && t[0] ? i.files[0].name : T(i, "select") && (s = z("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
                o !== r && (e[n] = r)
            },
            events: [{
                name: "change",
                handler() {
                    this.$emit()
                }
            }, {
                name: "reset",
                el() {
                    return this.$el.closest("form")
                },
                handler() {
                    this.$emit()
                }
            }]
        },
        Rl = {
            extends: yn,
            mixins: [st],
            name: "grid",
            props: {
                masonry: Boolean,
                parallax: String,
                parallaxStart: String,
                parallaxEnd: String,
                parallaxJustify: Boolean
            },
            data: {
                margin: "uk-grid-margin",
                clsStack: "uk-grid-stack",
                masonry: !1,
                parallax: 0,
                parallaxStart: 0,
                parallaxEnd: 0,
                parallaxJustify: !1
            },
            connected() {
                this.masonry && y(this.$el, "uk-flex-top", "uk-flex-wrap-top")
            },
            observe: Fe({
                filter: ({
                    parallax: t,
                    parallaxJustify: e
                }) => t || e
            }),
            update: [{
                write({
                    rows: t
                }) {
                    R(this.$el, this.clsStack, !t.some(e => e.length > 1))
                },
                events: ["resize"]
            }, {
                read(t) {
                    const {
                        rows: e
                    } = t;
                    let {
                        masonry: i,
                        parallax: s,
                        parallaxJustify: n,
                        margin: o
                    } = this;
                    if (s = Math.max(0, V(s)), !(i || s || n) || Bo(e) || e[0].some((w, E) => e.some(B => B[E] && B[E].offsetWidth !== w.offsetWidth))) return t.translates = t.scrollColumns = !1;
                    let r = Ul(e, o),
                        a, l;
                    i ? [a, l] = ql(e, r, i === "next") : a = Vl(e);
                    const h = a.map(w => Nt(w, "offsetHeight") + r * (w.length - 1)),
                        u = Math.max(0, ...h);
                    let d, p, g;
                    return (s || n) && (d = h.map((w, E) => n ? u - w + s : s / (E % 2 || 8)), n || (s = Math.max(...h.map((w, E) => w + d[E] - u))), p = V(this.parallaxStart, "height", this.$el, !0), g = V(this.parallaxEnd, "height", this.$el, !0)), {
                        columns: a,
                        translates: l,
                        scrollColumns: d,
                        parallaxStart: p,
                        parallaxEnd: g,
                        padding: s,
                        height: l ? u : ""
                    }
                },
                write({
                    height: t,
                    padding: e
                }) {
                    c(this.$el, "paddingBottom", e || ""), t !== !1 && c(this.$el, "height", t)
                },
                events: ["resize"]
            }, {
                read({
                    rows: t,
                    scrollColumns: e,
                    parallaxStart: i,
                    parallaxEnd: s
                }) {
                    return e && Bo(t) ? !1 : {
                        scrolled: e ? mi(this.$el, i, s) : !1
                    }
                },
                write({
                    columns: t,
                    scrolled: e,
                    scrollColumns: i,
                    translates: s
                }) {
                    !e && !s || t.forEach((n, o) => n.forEach((r, a) => {
                        let [l, h] = s && s[o][a] || [0, 0];
                        e && (h += e * i[o]), c(r, "transform", `translate(${l}px, ${h}px)`)
                    }))
                },
                events: ["scroll", "resize"]
            }]
        };

    function Bo(t) {
        return t.flat().some(e => c(e, "position") === "absolute")
    }

    function ql(t, e, i) {
        const s = [],
            n = [],
            o = Array(t[0].length).fill(0);
        let r = 0;
        for (let a of t) {
            U && (a = a.reverse());
            let l = 0;
            for (const h in a) {
                const {
                    offsetWidth: u,
                    offsetHeight: d
                } = a[h], p = i ? h : o.indexOf(Math.min(...o));
                As(s, p, a[h]), As(n, p, [(p - h) * u * (U ? -1 : 1), o[p] - r]), o[p] += d + e, l = Math.max(l, d)
            }
            r += l + e
        }
        return [s, n]
    }

    function Ul(t, e) {
        const i = t.flat().find(s => k(s, e));
        return S(i ? c(i, "marginTop") : c(t[0][0], "paddingLeft"))
    }

    function Vl(t) {
        const e = [];
        for (const i of t)
            for (const s in i) As(e, s, i[s]);
        return e
    }

    function As(t, e, i) {
        t[e] || (t[e] = []), t[e].push(i)
    }
    var Yl = {
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: ({
                target: t
            }, e) => z(t, e)
        },
        observe: ht({
            target: ({
                $el: t,
                elements: e
            }) => e.reduce((i, s) => i.concat(s, ...s.children), [t])
        }),
        events: {
            name: "loadingdone",
            el() {
                return document.fonts
            },
            handler() {
                this.$emit("resize")
            }
        },
        update: {
            read() {
                return {
                    rows: (this.row ? vs(this.elements) : [this.elements]).map(Gl)
                }
            },
            write({
                rows: t
            }) {
                for (const {
                        heights: e,
                        elements: i
                    } of t) i.forEach((s, n) => c(s, "minHeight", e[n]))
            },
            events: ["resize"]
        }
    };

    function Gl(t) {
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        let e = t.map(Xl);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        }
    }

    function Xl(t) {
        const e = Hi(t.style, ["display", "minHeight"]);
        q(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
        const i = b(t).height - ce(t, "height", "content-box");
        return c(t, e), i
    }
    var Jl = {
            args: "target",
            props: {
                target: String
            },
            data: {
                target: ""
            },
            computed: {
                target: {
                    get: ({
                        target: t
                    }, e) => Q(t, e),
                    observe: ({
                        target: t
                    }) => t
                }
            },
            observe: ht({
                target: ({
                    target: t
                }) => t
            }),
            update: {
                read() {
                    return {
                        height: this.target.offsetHeight
                    }
                },
                write({
                    height: t
                }) {
                    c(this.$el, {
                        minHeight: t
                    })
                },
                events: ["resize"]
            }
        },
        Kl = {
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            observe: [ms({
                filter: ({
                    expand: t
                }) => t
            }), ht({
                target: ({
                    $el: t
                }) => Ut(t)
            })],
            update: {
                read() {
                    if (!q(this.$el)) return !1;
                    let t = "";
                    const e = ce(this.$el, "height", "content-box"),
                        {
                            body: i,
                            scrollingElement: s
                        } = document,
                        n = At(this.$el),
                        {
                            height: o
                        } = at(n === i ? s : n),
                        r = s === n || i === n;
                    if (t = `calc(${r?"100vh":`${o}px`}`, this.expand) {
                        const a = b(n).height - b(this.$el).height;
                        t += ` - ${a}px`
                    } else {
                        if (this.offsetTop)
                            if (r) {
                                const a = this.offsetTop === !0 ? this.$el : Q(this.offsetTop, this.$el),
                                    l = qt(a)[0] - qt(n)[0];
                                t += l > 0 && l < o / 2 ? ` - ${l}px` : ""
                            } else t += ` - ${ce(n,"height",c(n,"boxSizing"))}px`;
                        this.offsetBottom === !0 ? t += ` - ${b(this.$el.nextElementSibling).height}px` : bt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && te(this.offsetBottom, "px") ? t += ` - ${S(this.offsetBottom)}px` : N(this.offsetBottom) && (t += ` - ${b(Q(this.offsetBottom,this.$el)).height}px`)
                    }
                    return t += `${e?` - ${e}px`:""})`, {
                        minHeight: t
                    }
                },
                write({
                    minHeight: t
                }) {
                    c(this.$el, "minHeight", `max(${this.minHeight||0}px, ${t})`)
                },
                events: ["resize"]
            }
        },
        Zl = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        Ql = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        th = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        eh = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>',
        ih = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
        sh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        nh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        oh = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>',
        rh = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>',
        ah = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        lh = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        No = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        hh = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        ch = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        uh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',
        dh = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',
        fh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>',
        ph = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',
        gh = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        mh = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>',
        zo = {
            args: "src",
            props: {
                width: Number,
                height: Number,
                ratio: Number
            },
            data: {
                ratio: 1
            },
            connected() {
                this.svg = this.getSvg().then(t => {
                    if (!this._connected) return;
                    const e = vh(t, this.$el);
                    return this.svgEl && e !== this.svgEl && rt(this.svgEl), bh.call(this, e, t), this.svgEl = e
                }, _)
            },
            disconnected() {
                this.svg.then(t => {
                    this._connected || (qi(this.$el) && (this.$el.hidden = !1), rt(t), this.svgEl = null)
                }), this.svg = null
            },
            methods: {
                async getSvg() {}
            }
        };

    function vh(t, e) {
        if (qi(e) || H(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return Fo(t, s) ? s : li(e, t)
        }
        const i = e.lastElementChild;
        return Fo(t, i) ? i : L(e, t)
    }

    function Fo(t, e) {
        return H(t, "svg") && H(e, "svg") && t.innerHTML === e.innerHTML
    }

    function bh(t, e) {
        const i = ["width", "height"];
        let s = i.map(o => this[o]);
        s.some(o => o) || (s = i.map(o => f(e, o)));
        const n = f(e, "viewBox");
        n && !s.some(o => o) && (s = n.split(" ").slice(2)), s.forEach((o, r) => f(t, i[r], S(o) * this.ratio || null))
    }
    const Oi = {
            spinner: gh,
            totop: mh,
            marker: eh,
            "close-icon": Zl,
            "close-large": Ql,
            "drop-parent-icon": th,
            "nav-parent-icon": sh,
            "nav-parent-icon-large": ih,
            "navbar-parent-icon": nh,
            "navbar-toggle-icon": oh,
            "overlay-icon": rh,
            "pagination-next": ah,
            "pagination-previous": lh,
            "search-icon": No,
            "search-large": hh,
            "search-navbar": ch,
            "search-toggle-icon": No,
            "slidenav-next": dh,
            "slidenav-next-large": uh,
            "slidenav-previous": ph,
            "slidenav-previous-large": fh
        },
        Os = {
            install: Th,
            mixins: [zo],
            args: "icon",
            props: {
                icon: String
            },
            isIcon: !0,
            beforeConnect() {
                y(this.$el, "uk-icon")
            },
            methods: {
                async getSvg() {
                    const t = _h(this.icon);
                    if (!t) throw "Icon not found.";
                    return t
                }
            }
        },
        Kt = {
            args: !1,
            extends: Os,
            data: t => ({
                icon: Ot(t.constructor.options.name)
            }),
            beforeConnect() {
                y(this.$el, this.$options.id)
            }
        },
        wh = {
            extends: Kt,
            beforeConnect() {
                const t = this.$props.icon;
                this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t
            }
        },
        xh = {
            extends: Kt,
            mixins: [yi],
            i18n: {
                toggle: "Open Search",
                submit: "Submit Search"
            },
            beforeConnect() {
                const t = k(this.$el, "uk-search-toggle") || k(this.$el, "uk-navbar-toggle");
                if (this.icon = t ? "search-toggle-icon" : k(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-navbar") ? "search-navbar" : this.$props.icon, !Et(this.$el, "aria-label"))
                    if (t) {
                        const e = this.t("toggle");
                        f(this.$el, "aria-label", e)
                    } else {
                        const e = this.$el.closest("a,button");
                        if (e) {
                            const i = this.t("submit");
                            f(e, "aria-label", i)
                        }
                    }
            }
        },
        $h = {
            extends: Kt,
            beforeConnect() {
                f(this.$el, "role", "status")
            },
            methods: {
                async getSvg() {
                    const t = await Os.methods.getSvg.call(this);
                    return this.ratio !== 1 && c($("circle", t), "strokeWidth", 1 / this.ratio), t
                }
            }
        },
        Zt = {
            extends: Kt,
            mixins: [yi],
            beforeConnect() {
                const t = this.$el.closest("a,button");
                f(t, "role", this.role !== null && H(t, "a") ? "button" : this.role);
                const e = this.t("label");
                e && !Et(t, "aria-label") && f(t, "aria-label", e)
            }
        },
        Ho = {
            extends: Zt,
            beforeConnect() {
                y(this.$el, "uk-slidenav");
                const t = this.$props.icon;
                this.icon = k(this.$el, "uk-slidenav-large") ? `${t}-large` : t
            }
        },
        yh = {
            extends: Zt,
            i18n: {
                label: "Open menu"
            }
        },
        kh = {
            extends: Zt,
            i18n: {
                label: "Close"
            },
            beforeConnect() {
                this.icon = `close-${k(this.$el,"uk-close-large")?"large":"icon"}`
            }
        },
        Sh = {
            extends: Zt,
            i18n: {
                label: "Open"
            }
        },
        Ih = {
            extends: Zt,
            i18n: {
                label: "Back to top"
            }
        },
        Ch = {
            extends: Zt,
            i18n: {
                label: "Next page"
            },
            data: {
                role: null
            }
        },
        Eh = {
            extends: Zt,
            i18n: {
                label: "Previous page"
            },
            data: {
                role: null
            }
        },
        Di = {};

    function Th(t) {
        t.icon.add = (e, i) => {
            const s = N(e) ? {
                [e]: i
            } : e;
            Bt(s, (n, o) => {
                Oi[o] = n, delete Di[o]
            }), t._initialized && St(document.body, n => Bt(t.getComponents(n), o => {
                o.$options.isIcon && o.icon in s && o.$reset()
            }))
        }
    }
    const Ph = {
        twitter: "x"
    };

    function _h(t) {
        return t = Ph[t] || t, Oi[t] ? (Di[t] || (Di[t] = $((Oi[Ah(t)] || Oi[t]).trim())), Di[t].cloneNode(!0)) : null
    }

    function Ah(t) {
        return U ? Fi(Fi(t, "left", "right"), "previous", "next") : t
    }
    var Oh = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected() {
            this.loading !== "lazy" ? this.load() : Ms(this.$el) && (this.$el.loading = "lazy", Ds(this.$el))
        },
        disconnected() {
            this.img && (this.img.onload = ""), delete this.img
        },
        observe: fe({
            handler(t, e) {
                this.load(), e.disconnect()
            },
            options: ({
                margin: t
            }) => ({
                rootMargin: t
            }),
            filter: ({
                loading: t
            }) => t === "lazy",
            target: ({
                $el: t,
                $props: e
            }) => e.target ? [t, ...Ae(e.target, t)] : t
        }),
        methods: {
            load() {
                if (this.img) return this.img;
                const t = Ms(this.$el) ? this.$el : Mh(this.$el, this.dataSrc, this.sources);
                return Ce(t, "loading"), Ds(this.$el, t.currentSrc), this.img = t
            }
        }
    };

    function Ds(t, e) {
        if (Ms(t)) {
            const i = O(t);
            (H(i, "picture") ? D(i) : [t]).forEach(n => Lo(n, n))
        } else e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${Xi(e)})`), v(t, Lt("load", !1)))
    }
    const Dh = ["data-src", "data-srcset", "sizes"];

    function Lo(t, e) {
        for (const i of Dh) {
            const s = X(t, i);
            s && f(e, i.replace(/^(data-)+/, ""), s)
        }
    }

    function Mh(t, e, i) {
        const s = new Image;
        return Bh(s, i), Lo(t, s), s.onload = () => {
            Ds(t, s.currentSrc)
        }, f(s, "src", e), s
    }

    function Bh(t, e) {
        if (e = Nh(e), e.length) {
            const i = jt("<picture>");
            for (const s of e) {
                const n = jt("<source>");
                f(n, s), L(i, n)
            }
            L(i, t)
        }
    }

    function Nh(t) {
        if (!t) return [];
        if (ft(t, "[")) try {
            t = JSON.parse(t)
        } catch {
            t = []
        } else t = de(t);
        return K(t) || (t = [t]), t.filter(e => !Ze(e))
    }

    function Ms(t) {
        return H(t, "img")
    }
    var zh = {
        props: {
            target: String,
            selActive: String
        },
        data: {
            target: !1,
            selActive: !1
        },
        computed: {
            target: ({
                target: t
            }, e) => t ? z(t, e) : e
        },
        observe: [fe({
            handler(t) {
                this.isIntersecting = t.some(({
                    isIntersecting: e
                }) => e), this.$emit()
            },
            target: ({
                target: t
            }) => t,
            args: {
                intersecting: !1
            }
        }), bi({
            target: ({
                target: t
            }) => t,
            options: {
                attributes: !0,
                attributeFilter: ["class"],
                attributeOldValue: !0
            }
        }), {
            target: ({
                target: t
            }) => t,
            observe: (t, e) => {
                const i = Be([...C(t), document.documentElement], e),
                    s = [x(document, "scroll itemshown itemhidden", e, {
                        passive: !0,
                        capture: !0
                    }), x(document, "show hide transitionstart", n => (e(), i.observe(n.target))), x(document, "shown hidden transitionend transitioncancel", n => (e(), i.unobserve(n.target)))];
                return {
                    observe: i.observe.bind(i),
                    unobserve: i.unobserve.bind(i),
                    disconnect() {
                        i.disconnect(), s.map(n => n())
                    }
                }
            },
            handler() {
                this.$emit()
            }
        }],
        update: {
            read() {
                if (!this.isIntersecting) return !1;
                for (const t of C(this.target)) ei(t, "uk-light uk-dark", !this.selActive || T(t, this.selActive) ? Fh(t) : "")
            }
        }
    };

    function Fh(t) {
        const {
            left: e,
            top: i,
            height: s,
            width: n
        } = b(t);
        let o;
        for (const r of [.25, .5, .75]) {
            const a = t.ownerDocument.elementsFromPoint(Math.max(0, e) + n * r, Math.max(0, i) + s / 2);
            for (const l of a) {
                if (t.contains(l) || l.closest('[class*="-leave"]') && a.some(u => l !== u && T(u, '[class*="-enter"]'))) continue;
                const h = c(l, "--uk-inverse");
                if (h) {
                    if (h === o) return `uk-${h}`;
                    o = h;
                    break
                }
            }
        }
        return o ? `uk-${o}` : ""
    }
    var Hh = {
            mixins: [st, Si],
            props: {
                fill: String
            },
            data: {
                fill: "",
                clsWrapper: "uk-leader-fill",
                clsHide: "uk-leader-hide",
                attrFill: "data-fill"
            },
            computed: {
                fill: ({
                    fill: t
                }, e) => t || c(e, "--uk-leader-fill-content")
            },
            connected() {
                [this.wrapper] = is(this.$el, `<span class="${this.clsWrapper}">`)
            },
            disconnected() {
                De(this.wrapper.childNodes)
            },
            observe: ht(),
            update: {
                read() {
                    return {
                        width: Math.trunc(this.$el.offsetWidth / 2),
                        fill: this.fill,
                        hide: !this.matchMedia
                    }
                },
                write({
                    width: t,
                    fill: e,
                    hide: i
                }) {
                    R(this.wrapper, this.clsHide, i), f(this.wrapper, this.attrFill, new Array(t).join(e))
                },
                events: ["resize"]
            }
        },
        Lh = {
            install: Wh,
            mixins: [ks],
            data: {
                clsPage: "uk-modal-page",
                selPanel: ".uk-modal-dialog",
                selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
            },
            events: [{
                name: "fullscreenchange webkitendfullscreen",
                capture: !0,
                handler(t) {
                    H(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide()
                }
            }, {
                name: "show",
                self: !0,
                handler() {
                    k(this.panel, "uk-margin-auto-vertical") ? y(this.$el, "uk-flex") : c(this.$el, "display", "block"), it(this.$el)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    c(this.$el, "display", ""), A(this.$el, "uk-flex")
                }
            }]
        };

    function Wh({
        modal: t
    }) {
        t.dialog = function(i, s) {
            const n = t($(`<div><div class="uk-modal-dialog">${i}</div></div>`), {
                stack: !0,
                role: "alertdialog",
                ...s
            });
            return n.show(), x(n.$el, "hidden", async () => {
                await Promise.resolve(), n.$destroy(!0)
            }, {
                self: !0
            }), n
        }, t.alert = function(i, s) {
            return e(({
                i18n: n
            }) => `<div class="uk-modal-body">${N(i)?i:Wt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`, s)
        }, t.confirm = function(i, s) {
            return e(({
                i18n: n
            }) => `<form> <div class="uk-modal-body">${N(i)?i:Wt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, () => Promise.reject())
        }, t.prompt = function(i, s, n) {
            const o = e(({
                    i18n: l
                }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${N(i)?i:Wt(i)}</label> <input class="uk-input" value="${s||""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`, n, () => null, () => a.value),
                {
                    $el: r
                } = o.dialog,
                a = $("input", r);
            return x(r, "show", () => a.select()), o
        }, t.i18n = {
            ok: "Ok",
            cancel: "Cancel"
        };

        function e(i, s, n = _, o = _) {
            s = {
                bgClose: !1,
                escClose: !0,
                ...s,
                i18n: { ...t.i18n,
                    ...s == null ? void 0 : s.i18n
                }
            };
            const r = t.dialog(i(s), s);
            return pt(new Promise(a => {
                const l = x(r.$el, "hide", () => a(n()));
                x(r.$el, "submit", "form", h => {
                    h.preventDefault(), a(o(r)), l(), r.hide()
                })
            }), {
                dialog: r
            })
        }
    }
    var jh = {
        extends: Eo,
        data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
        }
    };
    const Bs = "uk-navbar-transparent";
    var Rh = {
        extends: Do,
        props: {
            dropbarTransparentMode: Boolean
        },
        data: {
            clsDrop: "uk-navbar-dropdown",
            selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",
            dropbarTransparentMode: !1
        },
        computed: {
            navbarContainer: (t, e) => e.closest(".uk-navbar-container")
        },
        watch: {
            items() {
                const t = k(this.$el, "uk-navbar-justify"),
                    e = z(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
                for (const i of e) {
                    const s = t ? z(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", i).length : "";
                    c(i, "flexGrow", s)
                }
            }
        },
        events: [{
            name: "show",
            el() {
                return this.dropContainer
            },
            handler({
                target: t
            }) {
                this.getTransparentMode(t) === "remove" && k(this.navbarContainer, Bs) && (A(this.navbarContainer, Bs), this._transparent = !0)
            }
        }, {
            name: "hide",
            el() {
                return this.dropContainer
            },
            async handler() {
                await qh(), !this.getActive() && this._transparent && (y(this.navbarContainer, Bs), this._transparent = null)
            }
        }],
        methods: {
            getTransparentMode(t) {
                if (!this.navbarContainer) return;
                if (this.dropbar && this.isDropbarDrop(t)) return this.dropbarTransparentMode;
                const e = this.getDropdown(t);
                if (e && k(t, "uk-dropbar")) return e.inset ? "behind" : "remove"
            },
            getDropbarOffset(t) {
                const {
                    top: e,
                    height: i
                } = I(this.navbarContainer);
                return e + (this.dropbarTransparentMode === "behind" ? 0 : i + t)
            }
        }
    };

    function qh() {
        return new Promise(t => setTimeout(t))
    }
    var Uh = {
        mixins: [ks],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean,
            swiping: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: !1,
            swiping: !0
        },
        computed: {
            clsFlip: ({
                flip: t,
                clsFlip: e
            }) => t ? e : "",
            clsOverlay: ({
                overlay: t,
                clsOverlay: e
            }) => t ? e : "",
            clsMode: ({
                mode: t,
                clsMode: e
            }) => `${e}-${t}`,
            clsSidebarAnimation: ({
                mode: t,
                clsSidebarAnimation: e
            }) => t === "none" || t === "reveal" ? "" : e,
            clsContainerAnimation: ({
                mode: t,
                clsContainerAnimation: e
            }) => t !== "push" && t !== "reveal" ? "" : e,
            transitionElement({
                mode: t
            }) {
                return t === "reveal" ? O(this.panel) : this.panel
            }
        },
        observe: $n({
            filter: ({
                swiping: t
            }) => t
        }),
        update: {
            read() {
                this.isToggled() && !q(this.$el) && this.hide()
            },
            events: ["resize"]
        },
        events: [{
            name: "touchmove",
            self: !0,
            passive: !1,
            filter() {
                return this.overlay
            },
            handler(t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.mode === "reveal" && !k(O(this.panel), this.clsMode) && (ci(this.panel, "<div>"), y(O(this.panel), this.clsMode));
                const {
                    body: t,
                    scrollingElement: e
                } = document;
                y(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), y(this.$el, this.clsOverlay), y(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), it(t), y(t, this.clsContainerAnimation), this.clsContainerAnimation && Vh()
            }
        }, {
            name: "hide",
            self: !0,
            handler() {
                A(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "")
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.clsContainerAnimation && Yh(), this.mode === "reveal" && De(this.panel), A(this.panel, this.clsSidebarAnimation, this.clsMode), A(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), A(document.body, this.clsContainer, this.clsFlip)
            }
        }, {
            name: "swipeLeft swipeRight",
            handler(t) {
                this.isToggled() && te(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };

    function Vh() {
        Wo().content += ",user-scalable=0"
    }

    function Yh() {
        const t = Wo();
        t.content = t.content.replace(/,user-scalable=0$/, "")
    }

    function Wo() {
        return $('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">')
    }
    var Gh = {
            mixins: [st],
            props: {
                selContainer: String,
                selContent: String,
                minHeight: Number
            },
            data: {
                selContainer: ".uk-modal",
                selContent: ".uk-modal-dialog",
                minHeight: 150
            },
            computed: {
                container: ({
                    selContainer: t
                }, e) => e.closest(t),
                content: ({
                    selContent: t
                }, e) => e.closest(t)
            },
            observe: ht({
                target: ({
                    container: t,
                    content: e
                }) => [t, e]
            }),
            update: {
                read() {
                    return !this.content || !this.container || !q(this.$el) ? !1 : {
                        max: Math.max(this.minHeight, it(this.container) - (b(this.content).height - it(this.$el)))
                    }
                },
                write({
                    max: t
                }) {
                    c(this.$el, {
                        minHeight: this.minHeight,
                        maxHeight: t
                    })
                },
                events: ["resize"]
            }
        },
        Xh = {
            props: ["width", "height"],
            connected() {
                y(this.$el, "uk-responsive-width"), c(this.$el, "aspectRatio", `${this.width}/${this.height}`)
            }
        },
        Jh = {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            connected() {
                Kh(this)
            },
            disconnected() {
                Zh(this)
            },
            methods: {
                async scrollTo(t) {
                    t = t && $(t) || document.body, v(this.$el, "beforescroll", [this, t]) && (await cn(t, {
                        offset: this.offset
                    }), v(this.$el, "scrolled", [this, t]))
                }
            }
        };
    const Xe = new Set;

    function Kh(t) {
        Xe.size || x(document, "click", jo), Xe.add(t)
    }

    function Zh(t) {
        Xe.delete(t), Xe.size || Pt(document, "click", jo)
    }

    function jo(t) {
        if (!t.defaultPrevented)
            for (const e of Xe) e.$el.contains(t.target) && le(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Vi(e.$el)))
    }
    var Qh = {
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                margin: String,
                repeat: Boolean,
                delay: Number
            },
            data: () => ({
                cls: "",
                target: !1,
                hidden: !0,
                margin: "-1px",
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            }),
            computed: {
                elements: ({
                    target: t
                }, e) => t ? z(t, e) : [e]
            },
            watch: {
                elements(t) {
                    this.hidden && c(Pe(t, `:not(.${this.inViewClass})`), "opacity", 0)
                }
            },
            connected() {
                this.elementData = new Map
            },
            disconnected() {
                for (const [t, e] of this.elementData.entries()) A(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
                delete this.elementData
            },
            observe: fe({
                target: ({
                    elements: t
                }) => t,
                handler(t) {
                    const e = this.elementData;
                    for (const {
                            target: i,
                            isIntersecting: s
                        } of t) {
                        e.has(i) || e.set(i, {
                            cls: X(i, "uk-scrollspy-class") || this.cls
                        });
                        const n = e.get(i);
                        !this.repeat && n.show || (n.show = s)
                    }
                    this.$emit()
                },
                options: ({
                    margin: t
                }) => ({
                    rootMargin: t
                }),
                args: {
                    intersecting: !1
                }
            }),
            update: [{
                write(t) {
                    for (const [e, i] of this.elementData.entries()) i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
                        this.toggle(e, !0), setTimeout(() => {
                            i.queued = !1, this.$emit()
                        }, 300)
                    })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                }
            }],
            methods: {
                toggle(t, e) {
                    var i;
                    const s = this.elementData.get(t);
                    if (s) {
                        if ((i = s.off) == null || i.call(s), c(t, "opacity", !e && this.hidden ? 0 : ""), R(t, this.inViewClass, e), R(t, s.cls), /\buk-animation-/.test(s.cls)) {
                            const n = () => Ri(t, "uk-animation-[\\w-]+");
                            e ? s.off = F(t, "animationcancel animationend", n, {
                                self: !0
                            }) : n()
                        }
                        v(t, e ? "inview" : "outview"), s.inview = e
                    }
                }
            }
        },
        tc = {
            props: {
                cls: String,
                closest: Boolean,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: (t, e) => z('a[href*="#"]', e).filter(i => i.hash && le(i)),
                elements({
                    closest: t
                }) {
                    return this.links.map(e => e.closest(t || "*"))
                }
            },
            watch: {
                links(t) {
                    this.scroll && this.$create("scroll", t, {
                        offset: this.offset
                    })
                }
            },
            observe: [fe(), Fe()],
            update: [{
                read() {
                    const t = this.links.map(Vi).filter(Boolean),
                        {
                            length: e
                        } = t;
                    if (!e || !q(this.$el)) return !1;
                    const i = At(t, !0),
                        {
                            scrollTop: s,
                            scrollHeight: n
                        } = i,
                        o = at(i),
                        r = n - o.height;
                    let a = !1;
                    if (s === r) a = e - 1;
                    else {
                        for (let l = 0; l < t.length; l++) {
                            const h = cs(t[l]),
                                u = this.offset + (h ? I(h).height : 0);
                            if (I(t[l]).top - o.top - u > 0) break;
                            a = +l
                        }
                        a === !1 && this.overflow && (a = 0)
                    }
                    return {
                        active: a
                    }
                },
                write({
                    active: t
                }) {
                    const e = t !== !1 && !k(this.elements[t], this.cls);
                    this.links.forEach(i => i.blur());
                    for (let i = 0; i < this.elements.length; i++) R(this.elements[i], this.cls, +i === t);
                    e && v(this.$el, "active", [t, this.elements[t]])
                },
                events: ["scroll", "resize"]
            }]
        },
        ec = {
            mixins: [st, Si],
            props: {
                position: String,
                top: null,
                bottom: null,
                start: null,
                end: null,
                offset: String,
                overflowFlip: Boolean,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                position: "top",
                top: !1,
                bottom: !1,
                start: !1,
                end: !1,
                offset: 0,
                overflowFlip: !1,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                target: ({
                    selTarget: t
                }, e) => t && $(t, e) || e
            },
            connected() {
                this.start = Ro(this.start || this.top), this.end = Ro(this.end || this.bottom), this.placeholder = $("+ .uk-sticky-placeholder", this.$el) || $('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1)
            },
            beforeDisconnect() {
                this.isFixed && (this.hide(), A(this.target, this.clsInactive)), qo(this.$el), rt(this.placeholder), this.placeholder = null
            },
            observe: [ms({
                handler() {
                    V("100vh", "height") !== this._data.viewport && this.$emit("resize")
                }
            }), Fe({
                target: () => document.scrollingElement
            }), ht({
                target: () => document.scrollingElement,
                options: {
                    box: "content-box"
                }
            }), ht()],
            events: [{
                name: "load hashchange popstate",
                el() {
                    return window
                },
                filter() {
                    return this.targetOffset !== !1
                },
                handler() {
                    const {
                        scrollingElement: t
                    } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(() => {
                        const e = I($(location.hash)),
                            i = I(this.$el);
                        this.isFixed && Li(e, i) && (t.scrollTop = Math.ceil(e.top - i.height - V(this.targetOffset, "height", this.placeholder) - V(this.offset, "height", this.placeholder)))
                    })
                }
            }, {
                name: "transitionstart",
                handler() {
                    this.transitionInProgress = F(this.$el, "transitionend transitioncancel", () => this.transitionInProgress = null)
                }
            }],
            update: [{
                read({
                    height: t,
                    width: e,
                    margin: i,
                    sticky: s
                }) {
                    if (this.inactive = !this.matchMedia || !q(this.$el), this.inactive) return;
                    const n = this.isFixed && !this.transitionInProgress;
                    n && (zs(this.target), this.hide()), this.active || ({
                        height: t,
                        width: e
                    } = I(this.$el), i = c(this.$el, "margin")), n && this.show();
                    const o = V("100vh", "height"),
                        r = it(window),
                        a = Math.max(0, document.scrollingElement.scrollHeight - o);
                    let l = this.position;
                    this.overflowFlip && t > o && (l = l === "top" ? "bottom" : "top");
                    const h = this.isFixed ? this.placeholder : this.$el;
                    let u = V(this.offset, "height", s ? this.$el : h);
                    l === "bottom" && (t < r || this.overflowFlip) && (u += r - t);
                    const d = this.overflowFlip ? 0 : Math.max(0, t + u - o),
                        p = I(h).top,
                        g = I(this.$el).height,
                        w = (this.start === !1 ? p : Ns(this.start, this.$el, p)) - u,
                        E = this.end === !1 ? a : Math.min(a, Ns(this.end, this.$el, p + t, !0) - g - u + d);
                    return s = a && !this.showOnUp && w + u === p && E === Math.min(a, Ns(!0, this.$el, 0, !0) - g - u + d) && c(O(this.$el), "overflowY") === "visible", {
                        start: w,
                        end: E,
                        offset: u,
                        overflow: d,
                        height: t,
                        elHeight: g,
                        width: e,
                        margin: i,
                        top: qt(h)[0],
                        sticky: s,
                        viewport: o
                    }
                },
                write({
                    height: t,
                    width: e,
                    margin: i,
                    offset: s,
                    sticky: n
                }) {
                    if ((this.inactive || n || !this.isFixed) && qo(this.$el), this.inactive) return;
                    n && (t = e = i = 0, c(this.$el, {
                        position: "sticky",
                        top: s
                    }));
                    const {
                        placeholder: o
                    } = this;
                    c(o, {
                        height: t,
                        width: e,
                        margin: i
                    }), (O(o) !== O(this.$el) || n ^ yt(o) < yt(this.$el)) && ((n ? ai : li)(this.$el, o), o.hidden = !0)
                },
                events: ["resize"]
            }, {
                read({
                    scroll: t = 0,
                    dir: e = "down",
                    overflow: i,
                    overflowScroll: s = 0,
                    start: n,
                    end: o,
                    elHeight: r,
                    height: a,
                    sticky: l
                }) {
                    const h = document.scrollingElement.scrollTop,
                        u = t <= h ? "down" : "up",
                        d = this.isFixed ? this.placeholder : this.$el;
                    return {
                        dir: u,
                        prevDir: e,
                        scroll: h,
                        prevScroll: t,
                        below: h > I(d).top + (l ? Math.min(a, r) : a),
                        offsetParentTop: I(d.offsetParent).top,
                        overflowScroll: Z(s + Z(h, n, o) - Z(t, n, o), 0, i)
                    }
                },
                write(t, e) {
                    const i = e.has("scroll"),
                        {
                            initTimestamp: s = 0,
                            dir: n,
                            prevDir: o,
                            scroll: r,
                            prevScroll: a = 0,
                            top: l,
                            start: h,
                            below: u
                        } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const d = Date.now();
                    if ((d - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = d), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
                        if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && !u)) {
                            if (!this.isFixed) {
                                _t.inProgress(this.$el) && l > r && (_t.cancel(this.$el), this.hide());
                                return
                            }
                            if (this.animation && u) {
                                if (k(this.$el, "uk-animation-leave")) return;
                                _t.out(this.$el, this.animation).then(() => this.hide(), _)
                            } else this.hide()
                        } else this.isFixed ? this.update() : this.animation && u ? (this.show(), _t.in(this.$el, this.animation).catch(_)) : (zs(this.target), this.show())
                },
                events: ["resize", "resizeViewport", "scroll"]
            }],
            methods: {
                show() {
                    this.isFixed = !0, this.update(), this.placeholder.hidden = !1
                },
                hide() {
                    const {
                        offset: t,
                        sticky: e
                    } = this._data;
                    this.setActive(!1), A(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, {
                        position: "",
                        top: "",
                        width: "",
                        marginTop: ""
                    }), this.placeholder.hidden = !0, this.isFixed = !1
                },
                update() {
                    let {
                        width: t,
                        scroll: e = 0,
                        overflow: i,
                        overflowScroll: s = 0,
                        start: n,
                        end: o,
                        offset: r,
                        offsetParentTop: a,
                        sticky: l,
                        below: h
                    } = this._data;
                    const u = n !== 0 || e > n;
                    if (!l) {
                        let d = "fixed";
                        e > o && (r += o - a + s - i, d = "absolute"), c(this.$el, {
                            position: d,
                            width: t,
                            marginTop: 0
                        }, "important")
                    }
                    c(this.$el, "top", r - s), this.setActive(u), R(this.$el, this.clsBelow, h), y(this.$el, this.clsFixed)
                },
                setActive(t) {
                    const e = this.active;
                    this.active = t, t ? (ei(this.target, this.clsInactive, this.clsActive), e !== t && v(this.$el, "active")) : (ei(this.target, this.clsActive, this.clsInactive), e !== t && (zs(this.target), v(this.$el, "inactive")))
                }
            }
        };

    function Ns(t, e, i, s) {
        if (!t) return 0;
        if (bt(t) || N(t) && t.match(/^-?\d/)) return i + V(t, "height", e, !0); {
            const n = t === !0 ? O(e) : Q(t, e);
            return I(n).bottom - (s && (n != null && n.contains(e)) ? S(c(n, "paddingBottom")) : 0)
        }
    }

    function Ro(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t
    }

    function qo(t) {
        c(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        })
    }

    function zs(t) {
        y(t, "uk-transition-disable"), requestAnimationFrame(() => A(t, "uk-transition-disable"))
    }
    var ic = {
        mixins: [zo],
        args: "src",
        props: {
            src: String,
            icon: String,
            attributes: "list",
            strokeAnimation: Boolean
        },
        data: {
            strokeAnimation: !1
        },
        observe: [bi({
            async handler() {
                const t = await this.svg;
                t && Uo.call(this, t)
            },
            options: {
                attributes: !0,
                attributeFilter: ["id", "class", "style"]
            }
        })],
        async connected() {
            m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
            const t = await this.svg;
            t && (Uo.call(this, t), this.strokeAnimation && rc(t))
        },
        methods: {
            async getSvg() {
                return H(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise(t => F(this.$el, "load", t)), nc(await sc(this.src), this.icon) || Promise.reject("SVG not found.")
            }
        }
    };

    function Uo(t) {
        const {
            $el: e
        } = this;
        y(t, f(e, "class"), "uk-svg");
        for (let i = 0; i < e.style.length; i++) {
            const s = e.style[i];
            c(t, s, c(e, s))
        }
        for (const i in this.attributes) {
            const [s, n] = this.attributes[i].split(":", 2);
            f(t, s, n)
        }
        this.$el.id || Ce(t, "id")
    }
    const sc = ut(async t => t ? ft(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());

    function nc(t, e) {
        return e && m(t, "<symbol") && (t = oc(t)[e] || t), t = $(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t
    }
    const Vo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        oc = ut(function(t) {
            const e = {};
            Vo.lastIndex = 0;
            let i;
            for (; i = Vo.exec(t);) e[i[3]] = `<svg ${i[1]}svg>`;
            return e
        });

    function rc(t) {
        const e = to(t);
        e && c(t, "--uk-animation-stroke", e)
    }
    const Fs = ".uk-disabled *, .uk-disabled, [disabled]";
    var Yo = {
            mixins: [Yt],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                itemNav: String,
                active: Number,
                followFocus: Boolean,
                swiping: Boolean
            },
            data: {
                connect: "~.uk-switcher",
                toggle: "> * > :first-child",
                itemNav: !1,
                active: 0,
                cls: "uk-active",
                attrItem: "uk-switcher-item",
                selVertical: ".uk-nav",
                followFocus: !1,
                swiping: !0
            },
            computed: {
                connects: {
                    get: ({
                        connect: t
                    }, e) => Ae(t, e),
                    observe: ({
                        connect: t
                    }) => t
                },
                connectChildren() {
                    return this.connects.map(t => D(t)).flat()
                },
                toggles: ({
                    toggle: t
                }, e) => z(t, e),
                children(t, e) {
                    return D(e).filter(i => this.toggles.some(s => i.contains(s)))
                }
            },
            watch: {
                connects(t) {
                    this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit()
                },
                connectChildren() {
                    let t = Math.max(0, this.index());
                    for (const e of this.connects) D(e).forEach((i, s) => R(i, this.cls, s === t));
                    this.$emit()
                },
                toggles(t) {
                    this.$emit();
                    const e = this.index();
                    this.show(~e ? e : t[this.active] || t[0])
                }
            },
            connected() {
                f(this.$el, "role", "tablist")
            },
            observe: [wi({
                targets: ({
                    connectChildren: t
                }) => t
            }), $n({
                target: ({
                    connects: t
                }) => t,
                filter: ({
                    swiping: t
                }) => t
            })],
            events: [{
                name: "click keydown",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    !T(t.current, Fs) && (t.type === "click" || t.keyCode === P.SPACE) && (t.preventDefault(), this.show(t.current))
                }
            }, {
                name: "keydown",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t, s = T(this.$el, this.selVertical);
                    let n = i === P.HOME ? 0 : i === P.END ? "last" : i === P.LEFT && !s || i === P.UP && s ? "previous" : i === P.RIGHT && !s || i === P.DOWN && s ? "next" : -1;
                    if (~n) {
                        t.preventDefault();
                        const o = this.toggles.filter(a => !T(a, Fs)),
                            r = o[ot(n, o, o.indexOf(e))];
                        r.focus(), this.followFocus && this.show(r)
                    }
                }
            }, {
                name: "click",
                el() {
                    return this.connects.concat(this.itemNav ? Ae(this.itemNav, this.$el) : [])
                },
                delegate() {
                    return `[${this.attrItem}],[data-${this.attrItem}]`
                },
                handler(t) {
                    t.target.closest("a,button") && (t.preventDefault(), this.show(X(t.current, this.attrItem)))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter() {
                    return this.swiping
                },
                el() {
                    return this.connects
                },
                handler({
                    type: t
                }) {
                    this.show(te(t, "Left") ? "next" : "previous")
                }
            }],
            update() {
                var t;
                for (const e of this.connects) H(e, "ul") && f(e, "role", "presentation");
                f(D(this.$el), "role", "presentation");
                for (const e in this.toggles) {
                    const i = this.toggles[e],
                        s = (t = this.connects[0]) == null ? void 0 : t.children[e];
                    f(i, "role", "tab"), s && (i.id = Xt(this, i), s.id = Xt(this, s), f(i, "aria-controls", s.id), f(s, {
                        role: "tabpanel",
                        "aria-labelledby": i.id
                    }))
                }
                f(this.$el, "aria-orientation", T(this.$el, this.selVertical) ? "vertical" : null)
            },
            methods: {
                index() {
                    return xt(this.children, t => k(t, this.cls))
                },
                show(t) {
                    const e = this.toggles.filter(r => !T(r, Fs)),
                        i = this.index(),
                        s = ot(!Ke(t) || m(e, t) ? t : 0, e, ot(this.toggles[i], e)),
                        n = ot(e[s], this.toggles);
                    this.children.forEach((r, a) => {
                        R(r, this.cls, n === a), f(this.toggles[a], {
                            "aria-selected": n === a,
                            tabindex: n === a ? null : -1
                        })
                    });
                    const o = i >= 0 && i !== s;
                    this.connects.forEach(async ({
                        children: r
                    }) => {
                        const a = Dt(r).filter((l, h) => h !== n && k(l, this.cls));
                        await this.toggleElement(a, !1, o) && await this.toggleElement(r[n], !0, o)
                    })
                }
            }
        },
        ac = {
            mixins: [st],
            extends: Yo,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "uk-tab-item",
                selVertical: ".uk-tab-left,.uk-tab-right"
            },
            connected() {
                const t = k(this.$el, "uk-tab-left") ? "uk-tab-left" : k(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        };
    const lc = 32;
    var hc = {
            mixins: [Si, Yt],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target: {
                    get: ({
                        target: t
                    }, e) => (t = Ae(t || e.hash, e), t.length ? t : [e]),
                    observe: ({
                        target: t
                    }) => t
                }
            },
            connected() {
                m(this.mode, "media") || (ni(this.$el) || f(this.$el, "tabindex", "0"), !this.cls && H(this.$el, "a") && f(this.$el, "role", "button"))
            },
            observe: wi({
                targets: ({
                    target: t
                }) => t
            }),
            events: [{
                name: dt,
                filter() {
                    return m(this.mode, "hover")
                },
                handler(t) {
                    this._preventClick = null, !(!gt(t) || se(this._showState) || this.$el.disabled) && (v(this.$el, "focus"), F(document, dt, () => v(this.$el, "blur"), !0, e => !this.$el.contains(e.target)), m(this.mode, "click") && (this._preventClick = !0))
                }
            }, {
                name: `mouseenter mouseleave ${Ht} ${ae} focus blur`,
                filter() {
                    return m(this.mode, "hover")
                },
                handler(t) {
                    if (gt(t) || this.$el.disabled) return;
                    const e = m(["mouseenter", Ht, "focus"], t.type),
                        i = this.isToggled(this.target);
                    if (!e && (!se(this._showState) || t.type !== "blur" && T(this.$el, ":focus") || t.type === "blur" && T(this.$el, ":hover"))) {
                        i === this._showState && (this._showState = null);
                        return
                    }
                    e && se(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e?"show":"hide"}`))
                }
            }, {
                name: "keydown",
                filter() {
                    return m(this.mode, "click") && !H(this.$el, "input")
                },
                handler(t) {
                    t.keyCode === lc && (t.preventDefault(), this.$el.click())
                }
            }, {
                name: "click",
                filter() {
                    return ["click", "hover"].some(t => m(this.mode, t))
                },
                handler(t) {
                    let e;
                    (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && T(this.target, e.hash))) && t.preventDefault(), !this._preventClick && m(this.mode, "click") && this.toggle()
                }
            }, {
                name: "mediachange",
                filter() {
                    return m(this.mode, "media")
                },
                el() {
                    return this.target
                },
                handler(t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle()
                }
            }],
            methods: {
                async toggle(t) {
                    if (!v(this.target, t || "toggle", [this])) return;
                    if (Et(this.$el, "aria-expanded") && f(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued) return this.toggleElement(this.target);
                    const e = this.target.filter(s => k(s, this.clsLeave));
                    if (e.length) {
                        for (const s of this.target) {
                            const n = m(e, s);
                            this.toggleElement(s, n, n)
                        }
                        return
                    }
                    const i = this.target.filter(this.isToggled);
                    await this.toggleElement(i, !1) && await this.toggleElement(this.target.filter(s => !m(i, s)), !0)
                }
            }
        },
        cc = Object.freeze({
            __proto__: null,
            Accordion: Eo,
            Alert: Al,
            Close: kh,
            Cover: Ml,
            Drop: Ao,
            DropParentIcon: Kt,
            Dropdown: Ao,
            Dropnav: Do,
            FormCustom: jl,
            Grid: Rl,
            HeightMatch: Yl,
            HeightPlaceholder: Jl,
            HeightViewport: Kl,
            Icon: Os,
            Img: Oh,
            Inverse: zh,
            Leader: Hh,
            Margin: yn,
            Marker: Sh,
            Modal: Lh,
            Nav: jh,
            NavParentIcon: wh,
            Navbar: Rh,
            NavbarParentIcon: Kt,
            NavbarToggleIcon: yh,
            Offcanvas: Uh,
            OverflowAuto: Gh,
            OverlayIcon: Kt,
            PaginationNext: Ch,
            PaginationPrevious: Eh,
            Responsive: Xh,
            Scroll: Jh,
            Scrollspy: Qh,
            ScrollspyNav: tc,
            SearchIcon: xh,
            SlidenavNext: Ho,
            SlidenavPrevious: Ho,
            Spinner: $h,
            Sticky: ec,
            Svg: ic,
            Switcher: Yo,
            Tab: ac,
            Toggle: hc,
            Totop: Ih,
            Video: To
        });
    return Bt(cc, (t, e) => ct.component(e, t)), Il(ct), Bt(Sl, (t, e) => ct.component(e, t)), ct
});