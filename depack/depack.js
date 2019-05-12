'use strict';
let DEPACK_EXPORT;
const path = require('path');'use strict';
const {extname:c} = path;
/*
 MIT
 Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
 Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 https://npmjs.com/package/mime-types
*/
const f = require("mime-db"), g = /^\s*([^;\s]*)(?:;|\s|$)/, h = /^text\//i, m = {lookup:l}, r = Object.create(null), t = Object.create(null);
u();
function l(a) {
  if (!a || "string" != typeof a) {
    return !1;
  }
  const b = (a = g.exec(a)) && f[a[1].toLowerCase()];
  return b && b.charset ? b.charset : a && h.test(a[1]) ? "UTF-8" : !1;
}
function v(a) {
  return a && "string" == typeof a ? (a = c("x." + a).toLowerCase().substr(1)) ? t[a] || !1 : !1 : !1;
}
function u() {
  const a = ["nginx", "apache", void 0, "iana"];
  Object.keys(f).forEach(b => {
    const n = f[b], d = n.extensions;
    if (d && d.length) {
      r[b] = d;
      for (let k = 0; k < d.length; k++) {
        const e = d[k];
        if (t[e]) {
          const p = a.indexOf(f[t[e]].source), q = a.indexOf(n.source);
          if ("application/octet-stream" != t[e] && (p > q || p == q && "application/" == t[e].substr(0, 12))) {
            continue;
          }
        }
        t[e] = b;
      }
    }
  });
}
;DEPACK_EXPORT = {extension:function(a) {
  return a && "string" == typeof a ? (a = (a = g.exec(a)) && r[a[1].toLowerCase()]) && a.length ? a[0] : !1 : !1;
}, charset:l, charsets:m, contentType:function(a) {
  if (!a || "string" != typeof a) {
    return !1;
  }
  a = -1 == a.indexOf("/") ? v(a) : a;
  if (!a) {
    return !1;
  }
  if (!a.includes("charset")) {
    const b = l(a);
    b && (a += "; charset=" + b.toLowerCase());
  }
  return a;
}, lookup:v, types:t, extensions:r};


module.exports = DEPACK_EXPORT