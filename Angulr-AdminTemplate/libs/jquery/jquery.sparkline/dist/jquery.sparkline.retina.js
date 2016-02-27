﻿! function (a, b, c) {
    ! function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.sparkline && a(jQuery)
    }(function (d) {
        "use strict";
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K = {},
            L = 0;
        e = function () {
            return {
                common: {
                    type: "line",
                    lineColor: "#00f",
                    fillColor: "#cdf",
                    defaultPixelsPerValue: 3,
                    width: "auto",
                    height: "auto",
                    composite: !1,
                    tagValuesAttribute: "values",
                    tagOptionsPrefix: "spark",
                    enableTagOptions: !1,
                    enableHighlight: !0,
                    highlightLighten: 1.4,
                    tooltipSkipNull: !0,
                    tooltipPrefix: "",
                    tooltipSuffix: "",
                    disableHiddenCheck: !1,
                    numberFormatter: !1,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ",",
                    numberDecimalMark: ".",
                    disableTooltips: !1,
                    disableInteraction: !1
                },
                line: {
                    spotColor: "#f80",
                    highlightSpotColor: "#5f5",
                    highlightLineColor: "#f22",
                    spotRadius: 1.5,
                    minSpotColor: "#f80",
                    maxSpotColor: "#f80",
                    lineWidth: 1,
                    normalRangeMin: c,
                    normalRangeMax: c,
                    normalRangeColor: "#ccc",
                    drawNormalOnTop: !1,
                    chartRangeMin: c,
                    chartRangeMax: c,
                    chartRangeMinX: c,
                    chartRangeMaxX: c,
                    tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                bar: {
                    barColor: "#3366cc",
                    negBarColor: "#f44",
                    stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    zeroColor: c,
                    nullColor: c,
                    zeroAxis: !0,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: c,
                    chartRangeMin: c,
                    chartRangeClip: !1,
                    colorMap: c,
                    tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: "#6f6",
                    negBarColor: "#f44",
                    zeroBarColor: "#999",
                    colorMap: {},
                    tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: {
                        map: {
                            "-1": "Loss",
                            0: "Draw",
                            1: "Win"
                        }
                    }
                },
                discrete: {
                    lineHeight: "auto",
                    thresholdColor: c,
                    thresholdValue: 0,
                    chartRangeMax: c,
                    chartRangeMin: c,
                    chartRangeClip: !1,
                    tooltipFormat: new g("{{prefix}}{{value}}{{suffix}}")
                },
                bullet: {
                    targetColor: "#f33",
                    targetWidth: 3,
                    performanceColor: "#33f",
                    rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                    base: c,
                    tooltipFormat: new g("{{fieldkey:fields}} - {{value}}"),
                    tooltipValueLookups: {
                        fields: {
                            r: "Range",
                            p: "Performance",
                            t: "Target"
                        }
                    }
                },
                pie: {
                    offset: 0,
                    sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    borderWidth: 0,
                    borderColor: "#000",
                    tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                box: {
                    raw: !1,
                    boxLineColor: "#000",
                    boxFillColor: "#cdf",
                    whiskerColor: "#000",
                    outlierLineColor: "#333",
                    outlierFillColor: "#fff",
                    medianColor: "#f00",
                    showOutliers: !0,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: c,
                    targetColor: "#4a2",
                    chartRangeMax: c,
                    chartRangeMin: c,
                    tooltipFormat: new g("{{field:fields}}: {{value}}"),
                    tooltipFormatFieldlistKey: "field",
                    tooltipValueLookups: {
                        fields: {
                            lq: "Lower Quartile",
                            med: "Median",
                            uq: "Upper Quartile",
                            lo: "Left Outlier",
                            ro: "Right Outlier",
                            lw: "Left Whisker",
                            rw: "Right Whisker"
                        }
                    }
                }
            }
        }, D = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', f = function () {
            var a, b;
            return a = function () {
                this.init.apply(this, arguments)
            }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0], arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a
        }, d.SPFormatClass = g = f({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
            precre: /(\w+)\.(\d+)/,
            init: function (a, b) {
                this.format = a, this.fclass = b
            },
            render: function (a, b, d) {
                var e, f, g, h, i, j = this,
                    k = a;
                return this.format.replace(this.fre, function () {
                    var a;
                    return f = arguments[1], g = arguments[3], e = j.precre.exec(f), e ? (i = e[2], f = e[1]) : i = !1, h = k[f], h === c ? "" : g && b && b[g] ? (a = b[g], a.get ? b[g].get(h) || h : b[g][h] || h) : (m(h) && (h = d.get("numberFormatter") ? d.get("numberFormatter")(h) : r(h, i, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), h)
                })
            }
        }), d.spformat = function (a, b) {
            return new g(a, b)
        }, h = function (a, b, c) {
            return b > a ? b : a > c ? c : a
        }, i = function (a, c) {
            var d;
            return 2 === c ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1])
        }, j = function (a) {
            var b;
            switch (a) {
                case "undefined":
                    a = c;
                    break;
                case "null":
                    a = null;
                    break;
                case "true":
                    a = !0;
                    break;
                case "false":
                    a = !1;
                    break;
                default:
                    b = parseFloat(a), a == b && (a = b)
            }
            return a
        }, k = function (a) {
            var b, c = [];
            for (b = a.length; b--;) c[b] = j(a[b]);
            return c
        }, l = function (a, b) {
            var c, d, e = [];
            for (c = 0, d = a.length; d > c; c++) a[c] !== b && e.push(a[c]);
            return e
        }, m = function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, r = function (a, b, c, e, f) {
            var g, h;
            for (a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f), h = g - c; h > 0; h -= c) a.splice(h, 0, e);
            return a.join("")
        }, n = function (a, b, c) {
            var d;
            for (d = b.length; d--;)
                if ((!c || null !== b[d]) && b[d] !== a) return !1;
            return !0
        }, o = function (a) {
            var b, c = 0;
            for (b = a.length; b--;) c += "number" == typeof a[b] ? a[b] : 0;
            return c
        }, q = function (a) {
            return d.isArray(a) ? a : [a]
        }, p = function (b) {
            var c;
            a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c["string" == typeof a.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = b)
        }, d.fn.simpledraw = function (b, e, f, g) {
            var h, i;
            if (f && (h = this.data("_jqs_vcanvas"))) return h;
            if (d.fn.sparkline.canvas === !1) return !1;
            if (d.fn.sparkline.canvas === c) {
                var j = a.createElement("canvas");
                if (j.getContext && j.getContext("2d")) d.fn.sparkline.canvas = function (a, b, c, d) {
                    return new H(a, b, c, d)
                };
                else {
                    if (!a.namespaces || a.namespaces.v) return d.fn.sparkline.canvas = !1, !1;
                    a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function (a, b, c) {
                        return new I(a, b, c)
                    }
                }
            }
            return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h
        }, d.fn.cleardraw = function () {
            var a = this.data("_jqs_vcanvas");
            a && a.reset()
        }, d.RangeMapClass = s = f({
            init: function (a) {
                var b, c, d = [];
                for (b in a) a.hasOwnProperty(b) && "string" == typeof b && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = 0 === c[0].length ? -1 / 0 : parseFloat(c[0]), c[1] = 0 === c[1].length ? 1 / 0 : parseFloat(c[1]), c[2] = a[b], d.push(c));
                this.map = a, this.rangelist = d || !1
            },
            get: function (a) {
                var b, d, e, f = this.rangelist;
                if ((e = this.map[a]) !== c) return e;
                if (f)
                    for (b = f.length; b--;)
                        if (d = f[b], d[0] <= a && d[1] >= a) return d[2];
                return c
            }
        }), d.range_map = function (a) {
            return new s(a)
        }, t = f({
            init: function (a, b) {
                var c = d(a);
                this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight")
            },
            registerSparkline: function (a) {
                this.splist.push(a), this.over && this.updateDisplay()
            },
            registerCanvas: function (a) {
                var b = d(a.canvas);
                this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this))
            },
            reset: function (a) {
                this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c)
            },
            mouseclick: function (a) {
                var b = d.Event("sparklineClick");
                b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b)
            },
            mouseenter: function (b) {
                d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new u(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay()
            },
            mouseleave: function () {
                d(a.body).unbind("mousemove.jqs");
                var b, c, e = this.splist,
                    f = e.length,
                    g = !1;
                for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), c = 0; f > c; c++) b = e[c], b.clearRegionHighlight() && (g = !0);
                g && this.canvas.render()
            },
            mousemove: function (a) {
                this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay()
            },
            updateDisplay: function () {
                var a, b, c, e, f, g = this.splist,
                    h = g.length,
                    i = !1,
                    j = this.$canvas.offset(),
                    k = this.currentPageX - j.left,
                    l = this.currentPageY - j.top;
                if (this.over) {
                    for (c = 0; h > c; c++) b = g[c], e = b.setRegionHighlight(this.currentEl, k, l), e && (i = !0);
                    if (i) {
                        if (f = d.Event("sparklineRegionChange"), f.sparklines = this.splist, this.$el.trigger(f), this.tooltip) {
                            for (a = "", c = 0; h > c; c++) b = g[c], a += b.getCurrentRegionTooltip();
                            this.tooltip.setContent(a)
                        }
                        this.disableHighlight || this.canvas.render()
                    }
                    null === e && this.mouseleave()
                }
            }
        }), u = f({
            sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
            init: function (b) {
                var c, e = b.get("tooltipClassname", "jqstooltip"),
                    f = this.sizeStyle;
                this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", {
                    id: "jqssizetip",
                    style: f,
                    "class": e
                }), this.tooltip = d("<div/>", {
                    id: "jqstooltip",
                    "class": e
                }).appendTo(this.container), c = this.tooltip.offset(), this.offsetLeft = c.left, this.offsetTop = c.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims()
            },
            updateWindowDims: function () {
                this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition()
            },
            getSize: function (a) {
                this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
            },
            setContent: function (a) {
                return a ? (this.getSize(a), this.tooltip.html(a).css({
                    width: this.width,
                    height: this.height,
                    visibility: "visible"
                }), void (this.hidden && (this.hidden = !1, this.updatePosition()))) : (this.tooltip.css("visibility", "hidden"), void (this.hidden = !0))
            },
            updatePosition: function (a, b) {
                if (a === c) {
                    if (this.mousex === c) return;
                    a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop
                } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;
                this.height && this.width && !this.hidden && (b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({
                    left: a,
                    top: b
                }))
            },
            remove: function () {
                this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs")
            }
        }), E = function () {
            p(D)
        }, d(E), J = [], d.fn.sparkline = function (b, e) {
            return this.each(function () {
                var f, g, h = new d.fn.sparkline.options(this, e),
                    i = d(this);
                if (f = function () {
                        var e, f, g, j, k, l, m;
                        return "html" === b || b === c ? (m = this.getAttribute(h.get("tagValuesAttribute")), (m === c || null === m) && (m = i.html()), e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : e = b, f = "auto" === h.get("width") ? e.length * h.get("defaultPixelsPerValue") : h.get("width"), "auto" === h.get("height") ? h.get("composite") && d.data(this, "_jqs_vcanvas") || (j = a.createElement("span"), j.innerHTML = "a", i.html(j), g = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null) : g = h.get("height"), h.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? h.get("composite") || k.reset() : (k = new t(this, h), d.data(this, "_jqs_mhandler", k))), h.get("composite") && !d.data(this, "_jqs_vcanvas") ? void (d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0))) : (l = new (d.fn.sparkline[h.get("type")])(this, e, h, f, g), l.render(), void (k && k.registerSparkline(l)))
                }, d(this).html() && !h.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
                    if (!h.get("composite") && d.data(this, "_jqs_pending"))
                        for (g = J.length; g; g--) J[g - 1][0] == this && J.splice(g - 1, 1);
                    J.push([this, f]), d.data(this, "_jqs_pending", !0)
                } else f.call(this)
            })
        }, d.fn.sparkline.defaults = e(), d.sparkline_display_visible = function () {
            var a, b, c, e = [];
            for (b = 0, c = J.length; c > b; b++) a = J[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (J[b][1].call(a), d.data(J[b][0], "_jqs_pending", !1), e.push(b)) : d(a).closest("html").length || d.data(a, "_jqs_pending") || (d.data(J[b][0], "_jqs_pending", !1), e.push(b));
            for (b = e.length; b; b--) J.splice(e[b - 1], 1)
        }, d.fn.sparkline.options = f({
            init: function (a, b) {
                var c, e, f, g;
                this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, e = d.fn.sparkline.defaults, f = e.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || f.tagOptionsPrefix), g = this.getTagSetting("type"), c = g === K ? e[b.type || f.type] : e[g], this.mergedOptions = d.extend({}, f, c, b)
            },
            getTagSetting: function (a) {
                var b, d, e, f, g = this.tagOptionsPrefix;
                if (g === !1 || g === c) return K;
                if (this.tagValCache.hasOwnProperty(a)) b = this.tagValCache.key;
                else {
                    if (b = this.tag.getAttribute(g + a), b === c || null === b) b = K;
                    else if ("[" === b.substr(0, 1))
                        for (b = b.substr(1, b.length - 2).split(","), d = b.length; d--;) b[d] = j(b[d].replace(/(^\s*)|(\s*$)/g, ""));
                    else if ("{" === b.substr(0, 1))
                        for (e = b.substr(1, b.length - 2).split(","), b = {}, d = e.length; d--;) f = e[d].split(":", 2), b[f[0].replace(/(^\s*)|(\s*$)/g, "")] = j(f[1].replace(/(^\s*)|(\s*$)/g, ""));
                    else b = j(b);
                    this.tagValCache.key = b
                }
                return b
            },
            get: function (a, b) {
                var d, e = this.getTagSetting(a);
                return e !== K ? e : (d = this.mergedOptions[a]) === c ? b : d
            }
        }), d.fn.sparkline._base = f({
            disabled: !1,
            init: function (a, b, e, f, g) {
                this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c
            },
            initTarget: function () {
                var a = !this.options.get("disableInteraction");
                (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
            },
            render: function () {
                return this.disabled ? (this.el.innerHTML = "", !1) : !0
            },
            getRegion: function () { },
            setRegionHighlight: function (a, b, d) {
                var e, f = this.currentRegion,
                    g = !this.options.get("disableHighlight");
                return b > this.canvasWidth || d > this.canvasHeight || 0 > b || 0 > d ? null : (e = this.getRegion(a, b, d), f !== e ? (f !== c && g && this.removeHighlight(), this.currentRegion = e, e !== c && g && this.renderHighlight(), !0) : !1)
            },
            clearRegionHighlight: function () {
                return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1
            },
            renderHighlight: function () {
                this.changeHighlight(!0)
            },
            removeHighlight: function () {
                this.changeHighlight(!1)
            },
            changeHighlight: function () { },
            getCurrentRegionTooltip: function () {
                var a, b, e, f, h, i, j, k, l, m, n, o, p, q, r = this.options,
                    s = "",
                    t = [];
                if (this.currentRegion === c) return "";
                if (a = this.getCurrentRegionFields(), n = r.get("tooltipFormatter")) return n(this, r, a);
                if (r.get("tooltipChartTitle") && (s += '<div class="jqs jqstitle">' + r.get("tooltipChartTitle") + "</div>\n"), b = this.options.get("tooltipFormat"), !b) return "";
                if (d.isArray(b) || (b = [b]), d.isArray(a) || (a = [a]), j = this.options.get("tooltipFormatFieldlist"), k = this.options.get("tooltipFormatFieldlistKey"), j && k) {
                    for (l = [], i = a.length; i--;) m = a[i][k], -1 != (q = d.inArray(m, j)) && (l[q] = a[i]);
                    a = l
                }
                for (e = b.length, p = a.length, i = 0; e > i; i++)
                    for (o = b[i], "string" == typeof o && (o = new g(o)), f = o.fclass || "jqsfield", q = 0; p > q; q++) a[q].isNull && r.get("tooltipSkipNull") || (d.extend(a[q], {
                        prefix: r.get("tooltipPrefix"),
                        suffix: r.get("tooltipSuffix")
                    }), h = o.render(a[q], r.get("tooltipValueLookups"), r), t.push('<div class="' + f + '">' + h + "</div>"));
                return t.length ? s + t.join("\n") : ""
            },
            getCurrentRegionFields: function () { },
            calcHighlightColor: function (a, c) {
                var d, e, f, g, i = c.get("highlightColor"),
                    j = c.get("highlightLighten");
                if (i) return i;
                if (j && (d = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))) {
                    for (f = [], e = 4 === a.length ? 16 : 1, g = 0; 3 > g; g++) f[g] = h(b.round(parseInt(d[g + 1], 16) * e * j), 0, 255);
                    return "rgb(" + f.join(",") + ")"
                }
                return a
            }
        }), v = {
            changeHighlight: function (a) {
                var b, c = this.currentRegion,
                    e = this.target,
                    f = this.regionShapes[c];
                f && (b = this.renderRegion(c, a), d.isArray(b) || d.isArray(f) ? (e.replaceWithShapes(f, b), this.regionShapes[c] = d.map(b, function (a) {
                    return a.id
                })) : (e.replaceWithShape(f, b), this.regionShapes[c] = b.id))
            },
            render: function () {
                var a, b, c, e, f = this.values,
                    g = this.target,
                    h = this.regionShapes;
                if (this.cls._super.render.call(this)) {
                    for (c = f.length; c--;)
                        if (a = this.renderRegion(c))
                            if (d.isArray(a)) {
                                for (b = [], e = a.length; e--;) a[e].append(), b.push(a[e].id);
                                h[c] = b
                            } else a.append(), h[c] = a.id;
                        else h[c] = null;
                    g.render()
                }
            }
        }, d.fn.sparkline.line = w = f(d.fn.sparkline._base, {
            type: "line",
            init: function (a, b, c, d, e) {
                w._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
            },
            getRegion: function (a, b) {
                var d, e = this.regionMap;
                for (d = e.length; d--;)
                    if (null !== e[d] && b >= e[d][0] && b <= e[d][1]) return e[d][2];
                return c
            },
            getCurrentRegionFields: function () {
                var a = this.currentRegion;
                return {
                    isNull: null === this.yvalues[a],
                    x: this.xvalues[a],
                    y: this.yvalues[a],
                    color: this.options.get("lineColor"),
                    fillColor: this.options.get("fillColor"),
                    offset: a
                }
            },
            renderHighlight: function () {
                var a, b, d = this.currentRegion,
                    e = this.target,
                    f = this.vertices[d],
                    g = this.options,
                    h = g.get("spotRadius"),
                    i = g.get("highlightSpotColor"),
                    j = g.get("highlightLineColor");
                f && (h && i && (a = e.drawCircle(f[0], f[1], h, c, i), this.highlightSpotId = a.id, e.insertAfterShape(this.lastShapeId, a)), j && (b = e.drawLine(f[0], this.canvasTop, f[0], this.canvasTop + this.canvasHeight, j), this.highlightLineId = b.id, e.insertAfterShape(this.lastShapeId, b)))
            },
            removeHighlight: function () {
                var a = this.target;
                this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null)
            },
            scanValues: function () {
                var a, c, d, e, f, g = this.values,
                    h = g.length,
                    i = this.xvalues,
                    j = this.yvalues,
                    k = this.yminmax;
                for (a = 0; h > a; a++) c = g[a], d = "string" == typeof g[a], e = "object" == typeof g[a] && g[a] instanceof Array, f = d && g[a].split(":"), d && 2 === f.length ? (i.push(Number(f[0])), j.push(Number(f[1])), k.push(Number(f[1]))) : e ? (i.push(c[0]), j.push(c[1]), k.push(c[1])) : (i.push(a), null === g[a] || "null" === g[a] ? j.push(null) : (j.push(Number(c)), k.push(Number(c))));
                this.options.get("xvalues") && (i = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, k), this.miny = this.minyorg = b.min.apply(b, k), this.maxx = b.max.apply(b, i), this.minx = b.min.apply(b, i), this.xvalues = i, this.yvalues = j, this.yminmax = k
            },
            processRangeOptions: function () {
                var a = this.options,
                    b = a.get("normalRangeMin"),
                    d = a.get("normalRangeMax");
                b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"))
            },
            drawNormalRange: function (a, d, e, f, g) {
                var h = this.options.get("normalRangeMin"),
                    i = this.options.get("normalRangeMax"),
                    j = d + b.round(e - e * ((i - this.miny) / g)),
                    k = b.round(e * (i - h) / g);
                this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append()
            },
            render: function () {
                var a, e, f, g, h, i, j, k, l, m, n, o, p, q, r, t, u, v, x, y, z, A, B, C, D, E = this.options,
                    F = this.target,
                    G = this.canvasWidth,
                    H = this.canvasHeight,
                    I = this.vertices,
                    J = E.get("spotRadius"),
                    K = this.regionMap;
                if (w._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), B = this.xvalues, C = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                    for (g = h = 0, a = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, e = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, f = this.yvalues.length - 1, J && (4 * J > G || 4 * J > H) && (J = 0), J && (z = E.get("highlightSpotColor") && !E.get("disableInteraction"), (z || E.get("minSpotColor") || E.get("spotColor") && C[f] === this.miny) && (H -= b.ceil(J)), (z || E.get("maxSpotColor") || E.get("spotColor") && C[f] === this.maxy) && (H -= b.ceil(J), g += b.ceil(J)), (z || (E.get("minSpotColor") || E.get("maxSpotColor")) && (C[0] === this.miny || C[0] === this.maxy)) && (h += b.ceil(J), G -= b.ceil(J)), (z || E.get("spotColor") || E.get("minSpotColor") || E.get("maxSpotColor") && (C[f] === this.miny || C[f] === this.maxy)) && (G -= b.ceil(J))), H--, E.get("normalRangeMin") === c || E.get("drawNormalOnTop") || this.drawNormalRange(h, g, H, G, e), j = [], k = [j], q = r = null, t = C.length, D = 0; t > D; D++) l = B[D], n = B[D + 1], m = C[D], o = h + b.round((l - this.minx) * (G / a)), p = t - 1 > D ? h + b.round((n - this.minx) * (G / a)) : G, r = o + (p - o) / 2, K[D] = [q || 0, r, D], q = r, null === m ? D && (null !== C[D - 1] && (j = [], k.push(j)), I.push(null)) : (m < this.miny && (m = this.miny), m > this.maxy && (m = this.maxy), j.length || j.push([o, g + H]), i = [o, g + b.round(H - H * ((m - this.miny) / e))], j.push(i), I.push(i));
                    for (u = [], v = [], x = k.length, D = 0; x > D; D++) j = k[D], j.length && (E.get("fillColor") && (j.push([j[j.length - 1][0], g + H]), v.push(j.slice(0)), j.pop()), j.length > 2 && (j[0] = [j[0][0], j[1][1]]), u.push(j));
                    for (x = v.length, D = 0; x > D; D++) F.drawShape(v[D], E.get("fillColor"), E.get("fillColor")).append();
                    for (E.get("normalRangeMin") !== c && E.get("drawNormalOnTop") && this.drawNormalRange(h, g, H, G, e), x = u.length, D = 0; x > D; D++) F.drawShape(u[D], E.get("lineColor"), c, E.get("lineWidth")).append();
                    if (J && E.get("valueSpots"))
                        for (y = E.get("valueSpots"), y.get === c && (y = new s(y)), D = 0; t > D; D++) A = y.get(C[D]), A && F.drawCircle(h + b.round((B[D] - this.minx) * (G / a)), g + b.round(H - H * ((C[D] - this.miny) / e)), J, c, A).append();
                    J && E.get("spotColor") && null !== C[f] && F.drawCircle(h + b.round((B[B.length - 1] - this.minx) * (G / a)), g + b.round(H - H * ((C[f] - this.miny) / e)), J, c, E.get("spotColor")).append(), this.maxy !== this.minyorg && (J && E.get("minSpotColor") && (l = B[d.inArray(this.minyorg, C)], F.drawCircle(h + b.round((l - this.minx) * (G / a)), g + b.round(H - H * ((this.minyorg - this.miny) / e)), J, c, E.get("minSpotColor")).append()), J && E.get("maxSpotColor") && (l = B[d.inArray(this.maxyorg, C)], F.drawCircle(h + b.round((l - this.minx) * (G / a)), g + b.round(H - H * ((this.maxyorg - this.miny) / e)), J, c, E.get("maxSpotColor")).append())), this.lastShapeId = F.getLastShapeId(), this.canvasTop = g, F.render()
                }
            }
        }), d.fn.sparkline.bar = x = f(d.fn.sparkline._base, v, {
            type: "bar",
            init: function (a, e, f, g, i) {
                var m, n, o, p, q, r, t, u, v, w, y, z, A, B, C, D, E, F, G, H, I, J, K = parseInt(f.get("barWidth"), 10),
                    L = parseInt(f.get("barSpacing"), 10),
                    M = f.get("chartRangeMin"),
                    N = f.get("chartRangeMax"),
                    O = f.get("chartRangeClip"),
                    P = 1 / 0,
                    Q = -1 / 0;
                for (x._super.init.call(this, a, e, f, g, i), r = 0, t = e.length; t > r; r++) H = e[r], m = "string" == typeof H && H.indexOf(":") > -1, (m || d.isArray(H)) && (C = !0, m && (H = e[r] = k(H.split(":"))), H = l(H, null), n = b.min.apply(b, H), o = b.max.apply(b, H), P > n && (P = n), o > Q && (Q = o));
                this.stacked = C, this.regionShapes = {}, this.barWidth = K, this.barSpacing = L, this.totalBarWidth = K + L, this.width = g = e.length * K + (e.length - 1) * L, this.initTarget(), O && (A = M === c ? -1 / 0 : M, B = N === c ? 1 / 0 : N), q = [], p = C ? [] : q;
                var R = [],
                    S = [];
                for (r = 0, t = e.length; t > r; r++)
                    if (C)
                        for (D = e[r], e[r] = G = [], R[r] = 0, p[r] = S[r] = 0, E = 0, F = D.length; F > E; E++) H = G[E] = O ? h(D[E], A, B) : D[E], null !== H && (H > 0 && (R[r] += H), 0 > P && Q > 0 ? 0 > H ? S[r] += b.abs(H) : p[r] += H : p[r] += b.abs(H - (0 > H ? Q : P)), q.push(H));
                    else H = O ? h(e[r], A, B) : e[r], H = e[r] = j(H), null !== H && q.push(H);
                this.max = z = b.max.apply(b, q), this.min = y = b.min.apply(b, q), this.stackMax = Q = C ? b.max.apply(b, R) : z, this.stackMin = P = C ? b.min.apply(b, q) : y, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < y) && (y = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > z) && (z = f.get("chartRangeMax")), this.zeroAxis = v = f.get("zeroAxis", !0), w = 0 >= y && z >= 0 && v ? 0 : 0 == v ? y : y > 0 ? y : z, this.xaxisOffset = w, u = C ? b.max.apply(b, p) + b.max.apply(b, S) : z - y, this.canvasHeightEf = v && 0 > y ? this.canvasHeight - 2 : this.canvasHeight - 1, w > y ? (J = C && z >= 0 ? Q : z, I = (J - w) / u * this.canvasHeight, I !== b.ceil(I) && (this.canvasHeightEf -= 2, I = b.ceil(I))) : I = this.canvasHeight, this.yoffset = I, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new s(this.colorMapByValue))), this.range = u
            },
            getRegion: function (a, d) {
                var e = b.floor(d / this.totalBarWidth);
                return 0 > e || e >= this.values.length ? c : e
            },
            getCurrentRegionFields: function () {
                var a, b, c = this.currentRegion,
                    d = q(this.values[c]),
                    e = [];
                for (b = d.length; b--;) a = d[b], e.push({
                    isNull: null === a,
                    value: a,
                    color: this.calcColor(b, a, c),
                    offset: c
                });
                return e
            },
            calcColor: function (a, b, e) {
                var f, g, h = this.colorMapByIndex,
                    i = this.colorMapByValue,
                    j = this.options;
                return f = j.get(this.stacked ? "stackedBarColor" : 0 > b ? "negBarColor" : "barColor"), 0 === b && j.get("zeroColor") !== c && (f = j.get("zeroColor")), i && (g = i.get(b)) ? f = g : h && h.length > e && (f = h[e]), d.isArray(f) ? f[a % f.length] : f
            },
            renderRegion: function (a, e) {
                var f, g, h, i, j, k, l, m, o, p, q = this.values[a],
                    r = this.options,
                    s = this.xaxisOffset,
                    t = [],
                    u = this.range,
                    v = this.stacked,
                    w = this.target,
                    x = a * this.totalBarWidth,
                    y = this.canvasHeightEf,
                    z = this.yoffset;
                if (q = d.isArray(q) ? q : [q], l = q.length, m = q[0], i = n(null, q), p = n(s, q, !0), i) return r.get("nullColor") ? (h = e ? r.get("nullColor") : this.calcHighlightColor(r.get("nullColor"), r), f = z > 0 ? z - 1 : z, w.drawRect(x, f, this.barWidth - 1, 0, h, h)) : c;
                for (j = z, k = 0; l > k; k++) {
                    if (m = q[k], v && m === s) {
                        if (!p || o) continue;
                        o = !0
                    }
                    g = u > 0 ? b.floor(y * (b.abs(m - s) / u)) + 1 : 1, s > m || m === s && 0 === z ? (f = j, j += g) : (f = z - g, z -= g), h = this.calcColor(k, m, a), e && (h = this.calcHighlightColor(h, r)), t.push(w.drawRect(x, f, this.barWidth - 1, g - 1, h, h))
                }
                return 1 === t.length ? t[0] : t
            }
        }), d.fn.sparkline.tristate = y = f(d.fn.sparkline._base, v, {
            type: "tristate",
            init: function (a, b, e, f, g) {
                var h = parseInt(e.get("barWidth"), 10),
                    i = parseInt(e.get("barSpacing"), 10);
                y._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new s(this.colorMapByValue))), this.initTarget()
            },
            getRegion: function (a, c) {
                return b.floor(c / this.totalBarWidth)
            },
            getCurrentRegionFields: function () {
                var a = this.currentRegion;
                return {
                    isNull: this.values[a] === c,
                    value: this.values[a],
                    color: this.calcColor(this.values[a], a),
                    offset: a
                }
            },
            calcColor: function (a, b) {
                var c, d, e = this.values,
                    f = this.options,
                    g = this.colorMapByIndex,
                    h = this.colorMapByValue;
                return c = h && (d = h.get(a)) ? d : g && g.length > b ? g[b] : f.get(e[b] < 0 ? "negBarColor" : e[b] > 0 ? "posBarColor" : "zeroBarColor")
            },
            renderRegion: function (a, c) {
                var d, e, f, g, h, i, j = this.values,
                    k = this.options,
                    l = this.target;
                return d = l.pixelHeight, f = b.round(d / 2), g = a * this.totalBarWidth, j[a] < 0 ? (h = f, e = f - 1) : j[a] > 0 ? (h = 0, e = f - 1) : (h = f - 1, e = 2), i = this.calcColor(j[a], a), null !== i ? (c && (i = this.calcHighlightColor(i, k)), l.drawRect(g, h, this.barWidth - 1, e - 1, i, i)) : void 0
            }
        }), d.fn.sparkline.discrete = z = f(d.fn.sparkline._base, v, {
            type: "discrete",
            init: function (a, e, f, g, h) {
                z._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = "auto" === f.get("width") ? 2 * e.length : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === f.get("lineHeight") ? b.round(.3 * this.canvasHeight) : f.get("lineHeight"))
            },
            getRegion: function (a, c) {
                return b.floor(c / this.itemWidth)
            },
            getCurrentRegionFields: function () {
                var a = this.currentRegion;
                return {
                    isNull: this.values[a] === c,
                    value: this.values[a],
                    offset: a
                }
            },
            renderRegion: function (a, c) {
                var d, e, f, g, i = this.values,
                    j = this.options,
                    k = this.min,
                    l = this.max,
                    m = this.range,
                    n = this.interval,
                    o = this.target,
                    p = this.canvasHeight,
                    q = this.lineHeight,
                    r = p - q;
                return e = h(i[a], k, l), g = a * n, d = b.round(r - r * ((e - k) / m)), f = j.get(j.get("thresholdColor") && e < j.get("thresholdValue") ? "thresholdColor" : "lineColor"), c && (f = this.calcHighlightColor(f, j)), o.drawLine(g, d, g, d + q, f)
            }
        }), d.fn.sparkline.bullet = A = f(d.fn.sparkline._base, {
            type: "bullet",
            init: function (a, d, e, f, g) {
                var h, i, j;
                A._super.init.call(this, a, d, e, f, g), this.values = d = k(d), j = d.slice(), j[0] = null === j[0] ? j[2] : j[0], j[1] = null === d[1] ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), h = e.get("base") === c ? 0 > h ? h : 0 : e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = "auto" === e.get("width") ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget()
            },
            getRegion: function (a, b, d) {
                var e = this.target.getShapeAt(a, b, d);
                return e !== c && this.shapes[e] !== c ? this.shapes[e] : c
            },
            getCurrentRegionFields: function () {
                var a = this.currentRegion;
                return {
                    fieldkey: a.substr(0, 1),
                    value: this.values[a.substr(1)],
                    region: a
                }
            },
            changeHighlight: function (a) {
                var b, c = this.currentRegion,
                    d = this.valueShapes[c];
                switch (delete this.shapes[d], c.substr(0, 1)) {
                    case "r":
                        b = this.renderRange(c.substr(1), a);
                        break;
                    case "p":
                        b = this.renderPerformance(a);
                        break;
                    case "t":
                        b = this.renderTarget(a)
                }
                this.valueShapes[c] = b.id, this.shapes[b.id] = c, this.target.replaceWithShape(d, b)
            },
            renderRange: function (a, c) {
                var d = this.values[a],
                    e = b.round(this.canvasWidth * ((d - this.min) / this.range)),
                    f = this.options.get("rangeColors")[a - 2];
                return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f)
            },
            renderPerformance: function (a) {
                var c = this.values[1],
                    d = b.round(this.canvasWidth * ((c - this.min) / this.range)),
                    e = this.options.get("performanceColor");
                return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(.3 * this.canvasHeight), d - 1, b.round(.4 * this.canvasHeight) - 1, e, e)
            },
            renderTarget: function (a) {
                var c = this.values[0],
                    d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2),
                    e = b.round(.1 * this.canvasHeight),
                    f = this.canvasHeight - 2 * e,
                    g = this.options.get("targetColor");
                return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g)
            },
            render: function () {
                var a, b, c = this.values.length,
                    d = this.target;
                if (A._super.render.call(this)) {
                    for (a = 2; c > a; a++) b = this.renderRange(a).append(), this.shapes[b.id] = "r" + a, this.valueShapes["r" + a] = b.id;
                    null !== this.values[1] && (b = this.renderPerformance().append(), this.shapes[b.id] = "p1", this.valueShapes.p1 = b.id), null !== this.values[0] && (b = this.renderTarget().append(), this.shapes[b.id] = "t0", this.valueShapes.t0 = b.id), d.render()
                }
            }
        }), d.fn.sparkline.pie = B = f(d.fn.sparkline._base, {
            type: "pie",
            init: function (a, c, e, f, g) {
                var h, i = 0;
                if (B._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), "auto" === e.get("width") && (this.width = this.height), c.length > 0)
                    for (h = c.length; h--;) i += c[h];
                this.total = i, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2)
            },
            getRegion: function (a, b, d) {
                var e = this.target.getShapeAt(a, b, d);
                return e !== c && this.shapes[e] !== c ? this.shapes[e] : c
            },
            getCurrentRegionFields: function () {
                var a = this.currentRegion;
                return {
                    isNull: this.values[a] === c,
                    value: this.values[a],
                    percent: this.values[a] / this.total * 100,
                    color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
                    offset: a
                }
            },
            changeHighlight: function (a) {
                var b = this.currentRegion,
                    c = this.renderSlice(b, a),
                    d = this.valueShapes[b];
                delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b
            },
            renderSlice: function (a, d) {
                var e, f, g, h, i, j = this.target,
                    k = this.options,
                    l = this.radius,
                    m = k.get("borderWidth"),
                    n = k.get("offset"),
                    o = 2 * b.PI,
                    p = this.values,
                    q = this.total,
                    r = n ? 2 * b.PI * (n / 360) : 0;
                for (h = p.length, g = 0; h > g; g++) {
                    if (e = r, f = r, q > 0 && (f = r + o * (p[g] / q)), a === g) return i = k.get("sliceColors")[g % k.get("sliceColors").length], d && (i = this.calcHighlightColor(i, k)), j.drawPieSlice(l, l, l - m, e, f, c, i);
                    r = f
                }
            },
            render: function () {
                var a, d, e = this.target,
                    f = this.values,
                    g = this.options,
                    h = this.radius,
                    i = g.get("borderWidth");
                if (B._super.render.call(this)) {
                    for (i && e.drawCircle(h, h, b.floor(h - i / 2), g.get("borderColor"), c, i).append(), d = f.length; d--;) f[d] && (a = this.renderSlice(d).append(), this.valueShapes[d] = a.id, this.shapes[a.id] = d);
                    e.render()
                }
            }
        }), d.fn.sparkline.box = C = f(d.fn.sparkline._base, {
            type: "box",
            init: function (a, b, c, e, f) {
                C._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = "auto" === c.get("width") ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1)
            },
            getRegion: function () {
                return 1
            },
            getCurrentRegionFields: function () {
                var a = [{
                    field: "lq",
                    value: this.quartiles[0]
                }, {
                    field: "med",
                    value: this.quartiles[1]
                }, {
                    field: "uq",
                    value: this.quartiles[2]
                }];
                return this.loutlier !== c && a.push({
                    field: "lo",
                    value: this.loutlier
                }), this.routlier !== c && a.push({
                    field: "ro",
                    value: this.routlier
                }), this.lwhisker !== c && a.push({
                    field: "lw",
                    value: this.lwhisker
                }), this.rwhisker !== c && a.push({
                    field: "rw",
                    value: this.rwhisker
                }), a
            },
            render: function () {
                var a, d, e, f, g, h, j, k, l, m, n, o = this.target,
                    p = this.values,
                    q = p.length,
                    r = this.options,
                    s = this.canvasWidth,
                    t = this.canvasHeight,
                    u = r.get("chartRangeMin") === c ? b.min.apply(b, p) : r.get("chartRangeMin"),
                    v = r.get("chartRangeMax") === c ? b.max.apply(b, p) : r.get("chartRangeMax"),
                    w = 0;
                if (C._super.render.call(this)) {
                    if (r.get("raw")) r.get("showOutliers") && p.length > 5 ? (d = p[0], a = p[1], f = p[2], g = p[3], h = p[4], j = p[5], k = p[6]) : (a = p[0], f = p[1], g = p[2], h = p[3], j = p[4]);
                    else if (p.sort(function (a, b) {
                            return a - b
                    }), f = i(p, 1), g = i(p, 2), h = i(p, 3), e = h - f, r.get("showOutliers")) {
                        for (a = j = c, l = 0; q > l; l++) a === c && p[l] > f - e * r.get("outlierIQR") && (a = p[l]), p[l] < h + e * r.get("outlierIQR") && (j = p[l]);
                        d = p[0], k = p[q - 1]
                    } else a = p[0], j = p[q - 1];
                    this.quartiles = [f, g, h], this.lwhisker = a, this.rwhisker = j, this.loutlier = d, this.routlier = k, n = s / (v - u + 1), r.get("showOutliers") && (w = b.ceil(r.get("spotRadius")), s -= 2 * b.ceil(r.get("spotRadius")), n = s / (v - u + 1), a > d && o.drawCircle((d - u) * n + w, t / 2, r.get("spotRadius"), r.get("outlierLineColor"), r.get("outlierFillColor")).append(), k > j && o.drawCircle((k - u) * n + w, t / 2, r.get("spotRadius"), r.get("outlierLineColor"), r.get("outlierFillColor")).append()), o.drawRect(b.round((f - u) * n + w), b.round(.1 * t), b.round((h - f) * n), b.round(.8 * t), r.get("boxLineColor"), r.get("boxFillColor")).append(), o.drawLine(b.round((a - u) * n + w), b.round(t / 2), b.round((f - u) * n + w), b.round(t / 2), r.get("lineColor")).append(), o.drawLine(b.round((a - u) * n + w), b.round(t / 4), b.round((a - u) * n + w), b.round(t - t / 4), r.get("whiskerColor")).append(), o.drawLine(b.round((j - u) * n + w), b.round(t / 2), b.round((h - u) * n + w), b.round(t / 2), r.get("lineColor")).append(), o.drawLine(b.round((j - u) * n + w), b.round(t / 4), b.round((j - u) * n + w), b.round(t - t / 4), r.get("whiskerColor")).append(), o.drawLine(b.round((g - u) * n + w), b.round(.1 * t), b.round((g - u) * n + w), b.round(.9 * t), r.get("medianColor")).append(), r.get("target") && (m = b.ceil(r.get("spotRadius")), o.drawLine(b.round((r.get("target") - u) * n + w), b.round(t / 2 - m), b.round((r.get("target") - u) * n + w), b.round(t / 2 + m), r.get("targetColor")).append(), o.drawLine(b.round((r.get("target") - u) * n + w - m), b.round(t / 2), b.round((r.get("target") - u) * n + w + m), b.round(t / 2), r.get("targetColor")).append()), o.render()
                }
            }
        }), F = f({
            init: function (a, b, c, d) {
                this.target = a, this.id = b, this.type = c, this.args = d
            },
            append: function () {
                return this.target.appendShape(this), this
            }
        }), G = f({
            _pxregex: /(\d+)(px)?\s*$/i,
            init: function (a, b, c) {
                a && (this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this))
            },
            drawLine: function (a, b, c, d, e, f) {
                return this.drawShape([
                    [a, b],
                    [c, d]
                ], e, f)
            },
            drawShape: function (a, b, c, d) {
                return this._genShape("Shape", [a, b, c, d])
            },
            drawCircle: function (a, b, c, d, e, f) {
                return this._genShape("Circle", [a, b, c, d, e, f])
            },
            drawPieSlice: function (a, b, c, d, e, f, g) {
                return this._genShape("PieSlice", [a, b, c, d, e, f, g])
            },
            drawRect: function (a, b, c, d, e, f) {
                return this._genShape("Rect", [a, b, c, d, e, f])
            },
            getElement: function () {
                return this.canvas
            },
            getLastShapeId: function () {
                return this.lastShapeId
            },
            reset: function () {
                alert("reset not implemented")
            },
            _insert: function (a, b) {
                d(b).html(a)
            },
            _calculatePixelDims: function (a, b, c) {
                var e;
                e = this._pxregex.exec(b), this.pixelHeight = e ? e[1] : d(c).height(), e = this._pxregex.exec(a), this.pixelWidth = e ? e[1] : d(c).width()
            },
            _genShape: function (a, b) {
                var c = L++;
                return b.unshift(c), new F(this, c, a, b)
            },
            appendShape: function () {
                alert("appendShape not implemented")
            },
            replaceWithShape: function () {
                alert("replaceWithShape not implemented")
            },
            insertAfterShape: function () {
                alert("insertAfterShape not implemented")
            },
            removeShapeId: function () {
                alert("removeShapeId not implemented")
            },
            getShapeAt: function () {
                alert("getShapeAt not implemented")
            },
            render: function () {
                alert("render not implemented")
            }
        }), H = f(G, {
            init: function (b, e, f, g) {
                H._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), this.context = this.canvas.getContext("2d");
                var h = window.devicePixelRatio || 1,
                    i = this.context.webkitBackingStorePixelRatio || this.context.mozBackingStorePixelRatio || this.context.msBackingStorePixelRatio || this.context.oBackingStorePixelRatio || this.context.backingStorePixelRatio || 1,
                    j = h / i;
                d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({
                    display: "inline-block",
                    width: b,
                    height: e,
                    verticalAlign: "top"
                }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth * j, this.canvas.height = this.pixelHeight * j, this.context.scale(j, j), this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({
                    width: this.pixelWidth,
                    height: this.pixelHeight
                })
            },
            _getContext: function (a, b, d) {
                var e = this.canvas.getContext("2d");
                return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e
            },
            reset: function () {
                var a = this._getContext();
                a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c
            },
            _drawShape: function (a, b, d, e, f) {
                var g, h, i = this._getContext(d, e, f);
                for (i.beginPath(), i.moveTo(b[0][0] + .5, b[0][1] + .5), g = 1, h = b.length; h > g; g++) i.lineTo(b[g][0] + .5, b[g][1] + .5);
                d !== c && i.stroke(), e !== c && i.fill(), this.targetX !== c && this.targetY !== c && i.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
            },
            _drawCircle: function (a, d, e, f, g, h, i) {
                var j = this._getContext(g, h, i);
                j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill()
            },
            _drawPieSlice: function (a, b, d, e, f, g, h, i) {
                var j = this._getContext(h, i);
                j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
            },
            _drawRect: function (a, b, c, d, e, f, g) {
                return this._drawShape(a, [
                    [b, c],
                    [b + d, c],
                    [b + d, c + e],
                    [b, c + e],
                    [b, c]
                ], f, g)
            },
            appendShape: function (a) {
                return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id
            },
            replaceWithShape: function (a, b) {
                var c, d = this.shapeseq;
                for (this.shapes[b.id] = b, c = d.length; c--;) d[c] == a && (d[c] = b.id);
                delete this.shapes[a]
            },
            replaceWithShapes: function (a, b) {
                var c, d, e, f = this.shapeseq,
                    g = {};
                for (d = a.length; d--;) g[a[d]] = !0;
                for (d = f.length; d--;) c = f[d], g[c] && (f.splice(d, 1), delete this.shapes[c], e = d);
                for (d = b.length; d--;) f.splice(e, 0, b[d].id), this.shapes[b[d].id] = b[d]
            },
            insertAfterShape: function (a, b) {
                var c, d = this.shapeseq;
                for (c = d.length; c--;)
                    if (d[c] === a) return d.splice(c + 1, 0, b.id), void (this.shapes[b.id] = b)
            },
            removeShapeId: function (a) {
                var b, c = this.shapeseq;
                for (b = c.length; b--;)
                    if (c[b] === a) {
                        c.splice(b, 1);
                        break
                    }
                delete this.shapes[a]
            },
            getShapeAt: function (a, b, c) {
                return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId
            },
            render: function () {
                var a, b, c, d = this.shapeseq,
                    e = this.shapes,
                    f = d.length,
                    g = this._getContext();
                for (g.clearRect(0, 0, this.pixelWidth, this.pixelHeight), c = 0; f > c; c++) a = d[c], b = e[a], this["_draw" + b.type].apply(this, b.args);
                this.interact || (this.shapes = {}, this.shapeseq = [])
            }
        }), I = f(G, {
            init: function (b, c, e) {
                var f;
                I._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                    width: b,
                    height: c,
                    margin: "0px",
                    padding: "0px",
                    verticalAlign: "top"
                }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
            },
            _drawShape: function (a, b, d, e, f) {
                var g, h, i, j, k, l, m, n = [];
                for (m = 0, l = b.length; l > m; m++) n[m] = "" + b[m][0] + "," + b[m][1];
                return g = n.splice(0, 1), f = f === c ? 1 : f, h = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', i = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', j = n[0] === n[n.length - 1] ? "x " : "", k = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + a + '" ' + h + i + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + g + " l " + n.join(", ") + " " + j + 'e"> </v:shape>'
            },
            _drawCircle: function (a, b, d, e, f, g, h) {
                var i, j, k;
                return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + 2 * e + "px; height:" + 2 * e + 'px"></v:oval>'
            },
            _drawPieSlice: function (a, d, e, f, g, h, i, j) {
                var k, l, m, n, o, p, q, r;
                if (g === h) return "";
                if (h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f), l === n && m === o) {
                    if (h - g < b.PI) return "";
                    l = n = d + f, m = o = e
                }
                return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e"> </v:shape>')
            },
            _drawRect: function (a, b, c, d, e, f, g) {
                return this._drawShape(a, [
                    [b, c],
                    [b, c + e],
                    [b + d, c + e],
                    [b + d, c],
                    [b, c]
                ], f, g)
            },
            reset: function () {
                this.group.innerHTML = ""
            },
            appendShape: function (a) {
                var b = this["_draw" + a.type].apply(this, a.args);
                return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id
            },
            replaceWithShape: function (a, b) {
                var c = d("#jqsshape" + a),
                    e = this["_draw" + b.type].apply(this, b.args);
                c[0].outerHTML = e
            },
            replaceWithShapes: function (a, b) {
                var c, e = d("#jqsshape" + a[0]),
                    f = "",
                    g = b.length;
                for (c = 0; g > c; c++) f += this["_draw" + b[c].type].apply(this, b[c].args);
                for (e[0].outerHTML = f, c = 1; c < a.length; c++) d("#jqsshape" + a[c]).remove()
            },
            insertAfterShape: function (a, b) {
                var c = d("#jqsshape" + a),
                    e = this["_draw" + b.type].apply(this, b.args);
                c[0].insertAdjacentHTML("afterEnd", e)
            },
            removeShapeId: function (a) {
                var b = d("#jqsshape" + a);
                this.group.removeChild(b[0])
            },
            getShapeAt: function (a) {
                var b = a.id.substr(8);
                return b
            },
            render: function () {
                this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
            }
        })
    })
}(document, Math);