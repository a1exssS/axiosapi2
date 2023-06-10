;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i)
	new MutationObserver(i => {
		for (const a of i) if (a.type === 'childList') for (const r of a.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && s(r)
	}).observe(document, {childList: !0, subtree: !0})
	function n(i) {
		const a = {}
		return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === 'use-credentials' ? (a.credentials = 'include') : i.crossOrigin === 'anonymous' ? (a.credentials = 'omit') : (a.credentials = 'same-origin'), a
	}
	function s(i) {
		if (i.ep) return
		i.ep = !0
		const a = n(i)
		fetch(i.href, a)
	}
})()
function Yt(e, t) {
	return function () {
		return e.apply(t, arguments)
	}
}
const {toString: xn} = Object.prototype,
	{getPrototypeOf: vt} = Object,
	Ge = (e => t => {
		const n = xn.call(t)
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
	})(Object.create(null)),
	Q = e => ((e = e.toLowerCase()), t => Ge(t) === e),
	Xe = e => t => typeof t === e,
	{isArray: pe} = Array,
	Me = Xe('undefined')
function Mn(e) {
	return e !== null && !Me(e) && e.constructor !== null && !Me(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const jt = Q('ArrayBuffer')
function Cn(e) {
	let t
	return typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && jt(e.buffer)), t
}
const Pn = Xe('string'),
	U = Xe('function'),
	Wt = Xe('number'),
	qe = e => e !== null && typeof e == 'object',
	An = e => e === !0 || e === !1,
	ze = e => {
		if (Ge(e) !== 'object') return !1
		const t = vt(e)
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
	},
	Ln = Q('Date'),
	On = Q('File'),
	In = Q('Blob'),
	zn = Q('FileList'),
	Dn = e => qe(e) && U(e.pipe),
	kn = e => {
		let t
		return e && ((typeof FormData == 'function' && e instanceof FormData) || (U(e.append) && ((t = Ge(e)) === 'formdata' || (t === 'object' && U(e.toString) && e.toString() === '[object FormData]'))))
	},
	$n = Q('URLSearchParams'),
	Rn = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function Pe(e, t, {allOwnKeys: n = !1} = {}) {
	if (e === null || typeof e > 'u') return
	let s, i
	if ((typeof e != 'object' && (e = [e]), pe(e))) for (s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e)
	else {
		const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			r = a.length
		let o
		for (s = 0; s < r; s++) (o = a[s]), t.call(null, e[o], o, e)
	}
}
function Ut(e, t) {
	t = t.toLowerCase()
	const n = Object.keys(e)
	let s = n.length,
		i
	for (; s-- > 0; ) if (((i = n[s]), t === i.toLowerCase())) return i
	return null
}
const Kt = (() => (typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global))(),
	Jt = e => !Me(e) && e !== Kt
function ct() {
	const {caseless: e} = (Jt(this) && this) || {},
		t = {},
		n = (s, i) => {
			const a = (e && Ut(t, i)) || i
			ze(t[a]) && ze(s) ? (t[a] = ct(t[a], s)) : ze(s) ? (t[a] = ct({}, s)) : pe(s) ? (t[a] = s.slice()) : (t[a] = s)
		}
	for (let s = 0, i = arguments.length; s < i; s++) arguments[s] && Pe(arguments[s], n)
	return t
}
const Bn = (e, t, n, {allOwnKeys: s} = {}) => (
		Pe(
			t,
			(i, a) => {
				n && U(i) ? (e[a] = Yt(i, n)) : (e[a] = i)
			},
			{allOwnKeys: s}
		),
		e
	),
	_n = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	wn = (e, t, n, s) => {
		;(e.prototype = Object.create(t.prototype, s)), (e.prototype.constructor = e), Object.defineProperty(e, 'super', {value: t.prototype}), n && Object.assign(e.prototype, n)
	},
	Nn = (e, t, n, s) => {
		let i, a, r
		const o = {}
		if (((t = t || {}), e == null)) return t
		do {
			for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; ) (r = i[a]), (!s || s(r, e, t)) && !o[r] && ((t[r] = e[r]), (o[r] = !0))
			e = n !== !1 && vt(e)
		} while (e && (!n || n(e, t)) && e !== Object.prototype)
		return t
	},
	Hn = (e, t, n) => {
		;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
		const s = e.indexOf(t, n)
		return s !== -1 && s === n
	},
	Fn = e => {
		if (!e) return null
		if (pe(e)) return e
		let t = e.length
		if (!Wt(t)) return null
		const n = new Array(t)
		for (; t-- > 0; ) n[t] = e[t]
		return n
	},
	Gn = (
		e => t =>
			e && t instanceof e
	)(typeof Uint8Array < 'u' && vt(Uint8Array)),
	Xn = (e, t) => {
		const s = (e && e[Symbol.iterator]).call(e)
		let i
		for (; (i = s.next()) && !i.done; ) {
			const a = i.value
			t.call(e, a[0], a[1])
		}
	},
	qn = (e, t) => {
		let n
		const s = []
		for (; (n = e.exec(t)) !== null; ) s.push(n)
		return s
	},
	Vn = Q('HTMLFormElement'),
	Yn = e =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, i) {
			return s.toUpperCase() + i
		}),
	Ot = (
		({hasOwnProperty: e}) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	jn = Q('RegExp'),
	Zt = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			s = {}
		Pe(n, (i, a) => {
			t(i, a, e) !== !1 && (s[a] = i)
		}),
			Object.defineProperties(e, s)
	},
	Wn = e => {
		Zt(e, (t, n) => {
			if (U(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
			const s = e[n]
			if (U(s)) {
				if (((t.enumerable = !1), 'writable' in t)) {
					t.writable = !1
					return
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'")
					})
			}
		})
	},
	Un = (e, t) => {
		const n = {},
			s = i => {
				i.forEach(a => {
					n[a] = !0
				})
			}
		return pe(e) ? s(e) : s(String(e).split(t)), n
	},
	Kn = () => {},
	Jn = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	Qe = 'abcdefghijklmnopqrstuvwxyz',
	It = '0123456789',
	Qt = {DIGIT: It, ALPHA: Qe, ALPHA_DIGIT: Qe + Qe.toUpperCase() + It},
	Zn = (e = 16, t = Qt.ALPHA_DIGIT) => {
		let n = ''
		const {length: s} = t
		for (; e--; ) n += t[(Math.random() * s) | 0]
		return n
	}
function Qn(e) {
	return !!(e && U(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const es = e => {
		const t = new Array(10),
			n = (s, i) => {
				if (qe(s)) {
					if (t.indexOf(s) >= 0) return
					if (!('toJSON' in s)) {
						t[i] = s
						const a = pe(s) ? [] : {}
						return (
							Pe(s, (r, o) => {
								const l = n(r, i + 1)
								!Me(l) && (a[o] = l)
							}),
							(t[i] = void 0),
							a
						)
					}
				}
				return s
			}
		return n(e, 0)
	},
	ts = Q('AsyncFunction'),
	ns = e => e && (qe(e) || U(e)) && U(e.then) && U(e.catch),
	L = {isArray: pe, isArrayBuffer: jt, isBuffer: Mn, isFormData: kn, isArrayBufferView: Cn, isString: Pn, isNumber: Wt, isBoolean: An, isObject: qe, isPlainObject: ze, isUndefined: Me, isDate: Ln, isFile: On, isBlob: In, isRegExp: jn, isFunction: U, isStream: Dn, isURLSearchParams: $n, isTypedArray: Gn, isFileList: zn, forEach: Pe, merge: ct, extend: Bn, trim: Rn, stripBOM: _n, inherits: wn, toFlatObject: Nn, kindOf: Ge, kindOfTest: Q, endsWith: Hn, toArray: Fn, forEachEntry: Xn, matchAll: qn, isHTMLForm: Vn, hasOwnProperty: Ot, hasOwnProp: Ot, reduceDescriptors: Zt, freezeMethods: Wn, toObjectSet: Un, toCamelCase: Yn, noop: Kn, toFiniteNumber: Jn, findKey: Ut, global: Kt, isContextDefined: Jt, ALPHABET: Qt, generateString: Zn, isSpecCompliantForm: Qn, toJSONObject: es, isAsyncFn: ts, isThenable: ns}
function w(e, t, n, s, i) {
	Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack), (this.message = e), (this.name = 'AxiosError'), t && (this.code = t), n && (this.config = n), s && (this.request = s), i && (this.response = i)
}
L.inherits(w, Error, {
	toJSON: function () {
		return {message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: L.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null}
	},
})
const en = w.prototype,
	tn = {}
;['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'].forEach(e => {
	tn[e] = {value: e}
})
Object.defineProperties(w, tn)
Object.defineProperty(en, 'isAxiosError', {value: !0})
w.from = (e, t, n, s, i, a) => {
	const r = Object.create(en)
	return (
		L.toFlatObject(
			e,
			r,
			function (l) {
				return l !== Error.prototype
			},
			o => o !== 'isAxiosError'
		),
		w.call(r, e.message, t, n, s, i),
		(r.cause = e),
		(r.name = e.name),
		a && Object.assign(r, a),
		r
	)
}
const ss = null
function ut(e) {
	return L.isPlainObject(e) || L.isArray(e)
}
function nn(e) {
	return L.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function zt(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (i, a) {
					return (i = nn(i)), !n && a ? '[' + i + ']' : i
				})
				.join(n ? '.' : '')
		: t
}
function as(e) {
	return L.isArray(e) && !e.some(ut)
}
const is = L.toFlatObject(L, {}, null, function (t) {
	return /^is[A-Z]/.test(t)
})
function Ve(e, t, n) {
	if (!L.isObject(e)) throw new TypeError('target must be an object')
	;(t = t || new FormData()),
		(n = L.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (h, b) {
			return !L.isUndefined(b[h])
		}))
	const s = n.metaTokens,
		i = n.visitor || c,
		a = n.dots,
		r = n.indexes,
		l = (n.Blob || (typeof Blob < 'u' && Blob)) && L.isSpecCompliantForm(t)
	if (!L.isFunction(i)) throw new TypeError('visitor must be a function')
	function d(m) {
		if (m === null) return ''
		if (L.isDate(m)) return m.toISOString()
		if (!l && L.isBlob(m)) throw new w('Blob is not supported. Use a Buffer instead.')
		return L.isArrayBuffer(m) || L.isTypedArray(m) ? (l && typeof Blob == 'function' ? new Blob([m]) : Buffer.from(m)) : m
	}
	function c(m, h, b) {
		let f = m
		if (m && !b && typeof m == 'object') {
			if (L.endsWith(h, '{}')) (h = s ? h : h.slice(0, -2)), (m = JSON.stringify(m))
			else if ((L.isArray(m) && as(m)) || ((L.isFileList(m) || L.endsWith(h, '[]')) && (f = L.toArray(m))))
				return (
					(h = nn(h)),
					f.forEach(function (S, x) {
						!(L.isUndefined(S) || S === null) && t.append(r === !0 ? zt([h], x, a) : r === null ? h : h + '[]', d(S))
					}),
					!1
				)
		}
		return ut(m) ? !0 : (t.append(zt(b, h, a), d(m)), !1)
	}
	const u = [],
		p = Object.assign(is, {defaultVisitor: c, convertValue: d, isVisitable: ut})
	function g(m, h) {
		if (!L.isUndefined(m)) {
			if (u.indexOf(m) !== -1) throw Error('Circular reference detected in ' + h.join('.'))
			u.push(m),
				L.forEach(m, function (f, v) {
					;(!(L.isUndefined(f) || f === null) && i.call(t, f, L.isString(v) ? v.trim() : v, h, p)) === !0 && g(f, h ? h.concat(v) : [v])
				}),
				u.pop()
		}
	}
	if (!L.isObject(e)) throw new TypeError('data must be an object')
	return g(e), t
}
function Dt(e) {
	const t = {'!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0'}
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
		return t[s]
	})
}
function yt(e, t) {
	;(this._pairs = []), e && Ve(e, this, t)
}
const sn = yt.prototype
sn.append = function (t, n) {
	this._pairs.push([t, n])
}
sn.toString = function (t) {
	const n = t
		? function (s) {
				return t.call(this, s, Dt)
		  }
		: Dt
	return this._pairs
		.map(function (i) {
			return n(i[0]) + '=' + n(i[1])
		}, '')
		.join('&')
}
function rs(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']')
}
function an(e, t, n) {
	if (!t) return e
	const s = (n && n.encode) || rs,
		i = n && n.serialize
	let a
	if ((i ? (a = i(t, n)) : (a = L.isURLSearchParams(t) ? t.toString() : new yt(t, n).toString(s)), a)) {
		const r = e.indexOf('#')
		r !== -1 && (e = e.slice(0, r)), (e += (e.indexOf('?') === -1 ? '?' : '&') + a)
	}
	return e
}
class os {
	constructor() {
		this.handlers = []
	}
	use(t, n, s) {
		return this.handlers.push({fulfilled: t, rejected: n, synchronous: s ? s.synchronous : !1, runWhen: s ? s.runWhen : null}), this.handlers.length - 1
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null)
	}
	clear() {
		this.handlers && (this.handlers = [])
	}
	forEach(t) {
		L.forEach(this.handlers, function (s) {
			s !== null && t(s)
		})
	}
}
const kt = os,
	rn = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
	ls = typeof URLSearchParams < 'u' ? URLSearchParams : yt,
	ds = typeof FormData < 'u' ? FormData : null,
	cs = typeof Blob < 'u' ? Blob : null,
	us = (() => {
		let e
		return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS') ? !1 : typeof window < 'u' && typeof document < 'u'
	})(),
	fs = (() => typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
	Z = {isBrowser: !0, classes: {URLSearchParams: ls, FormData: ds, Blob: cs}, isStandardBrowserEnv: us, isStandardBrowserWebWorkerEnv: fs, protocols: ['http', 'https', 'file', 'blob', 'url', 'data']}
function ms(e, t) {
	return Ve(
		e,
		new Z.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, s, i, a) {
					return Z.isNode && L.isBuffer(n) ? (this.append(s, n.toString('base64')), !1) : a.defaultVisitor.apply(this, arguments)
				},
			},
			t
		)
	)
}
function ps(e) {
	return L.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function hs(e) {
	const t = {},
		n = Object.keys(e)
	let s
	const i = n.length
	let a
	for (s = 0; s < i; s++) (a = n[s]), (t[a] = e[a])
	return t
}
function on(e) {
	function t(n, s, i, a) {
		let r = n[a++]
		const o = Number.isFinite(+r),
			l = a >= n.length
		return (r = !r && L.isArray(i) ? i.length : r), l ? (L.hasOwnProp(i, r) ? (i[r] = [i[r], s]) : (i[r] = s), !o) : ((!i[r] || !L.isObject(i[r])) && (i[r] = []), t(n, s, i[r], a) && L.isArray(i[r]) && (i[r] = hs(i[r])), !o)
	}
	if (L.isFormData(e) && L.isFunction(e.entries)) {
		const n = {}
		return (
			L.forEachEntry(e, (s, i) => {
				t(ps(s), i, n, 0)
			}),
			n
		)
	}
	return null
}
const gs = {'Content-Type': void 0}
function vs(e, t, n) {
	if (L.isString(e))
		try {
			return (t || JSON.parse)(e), L.trim(e)
		} catch (s) {
			if (s.name !== 'SyntaxError') throw s
		}
	return (n || JSON.stringify)(e)
}
const Ye = {
	transitional: rn,
	adapter: ['xhr', 'http'],
	transformRequest: [
		function (t, n) {
			const s = n.getContentType() || '',
				i = s.indexOf('application/json') > -1,
				a = L.isObject(t)
			if ((a && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))) return i && i ? JSON.stringify(on(t)) : t
			if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t)) return t
			if (L.isArrayBufferView(t)) return t.buffer
			if (L.isURLSearchParams(t)) return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
			let o
			if (a) {
				if (s.indexOf('application/x-www-form-urlencoded') > -1) return ms(t, this.formSerializer).toString()
				if ((o = L.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
					const l = this.env && this.env.FormData
					return Ve(o ? {'files[]': t} : t, l && new l(), this.formSerializer)
				}
			}
			return a || i ? (n.setContentType('application/json', !1), vs(t)) : t
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || Ye.transitional,
				s = n && n.forcedJSONParsing,
				i = this.responseType === 'json'
			if (t && L.isString(t) && ((s && !this.responseType) || i)) {
				const r = !(n && n.silentJSONParsing) && i
				try {
					return JSON.parse(t)
				} catch (o) {
					if (r) throw o.name === 'SyntaxError' ? w.from(o, w.ERR_BAD_RESPONSE, this, null, this.response) : o
				}
			}
			return t
		},
	],
	timeout: 0,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {FormData: Z.classes.FormData, Blob: Z.classes.Blob},
	validateStatus: function (t) {
		return t >= 200 && t < 300
	},
	headers: {common: {Accept: 'application/json, text/plain, */*'}},
}
L.forEach(['delete', 'get', 'head'], function (t) {
	Ye.headers[t] = {}
})
L.forEach(['post', 'put', 'patch'], function (t) {
	Ye.headers[t] = L.merge(gs)
})
const bt = Ye,
	ys = L.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']),
	bs = e => {
		const t = {}
		let n, s, i
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (r) {
						;(i = r.indexOf(':')), (n = r.substring(0, i).trim().toLowerCase()), (s = r.substring(i + 1).trim()), !(!n || (t[n] && ys[n])) && (n === 'set-cookie' ? (t[n] ? t[n].push(s) : (t[n] = [s])) : (t[n] = t[n] ? t[n] + ', ' + s : s))
					}),
			t
		)
	},
	$t = Symbol('internals')
function ye(e) {
	return e && String(e).trim().toLowerCase()
}
function De(e) {
	return e === !1 || e == null ? e : L.isArray(e) ? e.map(De) : String(e)
}
function Ss(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
	let s
	for (; (s = n.exec(e)); ) t[s[1]] = s[2]
	return t
}
const Es = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function et(e, t, n, s, i) {
	if (L.isFunction(s)) return s.call(this, t, n)
	if ((i && (t = n), !!L.isString(t))) {
		if (L.isString(s)) return t.indexOf(s) !== -1
		if (L.isRegExp(s)) return s.test(t)
	}
}
function Ts(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function xs(e, t) {
	const n = L.toCamelCase(' ' + t)
	;['get', 'set', 'has'].forEach(s => {
		Object.defineProperty(e, s + n, {
			value: function (i, a, r) {
				return this[s].call(this, t, i, a, r)
			},
			configurable: !0,
		})
	})
}
class je {
	constructor(t) {
		t && this.set(t)
	}
	set(t, n, s) {
		const i = this
		function a(o, l, d) {
			const c = ye(l)
			if (!c) throw new Error('header name must be a non-empty string')
			const u = L.findKey(i, c)
			;(!u || i[u] === void 0 || d === !0 || (d === void 0 && i[u] !== !1)) && (i[u || l] = De(o))
		}
		const r = (o, l) => L.forEach(o, (d, c) => a(d, c, l))
		return L.isPlainObject(t) || t instanceof this.constructor ? r(t, n) : L.isString(t) && (t = t.trim()) && !Es(t) ? r(bs(t), n) : t != null && a(n, t, s), this
	}
	get(t, n) {
		if (((t = ye(t)), t)) {
			const s = L.findKey(this, t)
			if (s) {
				const i = this[s]
				if (!n) return i
				if (n === !0) return Ss(i)
				if (L.isFunction(n)) return n.call(this, i, s)
				if (L.isRegExp(n)) return n.exec(i)
				throw new TypeError('parser must be boolean|regexp|function')
			}
		}
	}
	has(t, n) {
		if (((t = ye(t)), t)) {
			const s = L.findKey(this, t)
			return !!(s && this[s] !== void 0 && (!n || et(this, this[s], s, n)))
		}
		return !1
	}
	delete(t, n) {
		const s = this
		let i = !1
		function a(r) {
			if (((r = ye(r)), r)) {
				const o = L.findKey(s, r)
				o && (!n || et(s, s[o], o, n)) && (delete s[o], (i = !0))
			}
		}
		return L.isArray(t) ? t.forEach(a) : a(t), i
	}
	clear(t) {
		const n = Object.keys(this)
		let s = n.length,
			i = !1
		for (; s--; ) {
			const a = n[s]
			;(!t || et(this, this[a], a, t, !0)) && (delete this[a], (i = !0))
		}
		return i
	}
	normalize(t) {
		const n = this,
			s = {}
		return (
			L.forEach(this, (i, a) => {
				const r = L.findKey(s, a)
				if (r) {
					;(n[r] = De(i)), delete n[a]
					return
				}
				const o = t ? Ts(a) : String(a).trim()
				o !== a && delete n[a], (n[o] = De(i)), (s[o] = !0)
			}),
			this
		)
	}
	concat(...t) {
		return this.constructor.concat(this, ...t)
	}
	toJSON(t) {
		const n = Object.create(null)
		return (
			L.forEach(this, (s, i) => {
				s != null && s !== !1 && (n[i] = t && L.isArray(s) ? s.join(', ') : s)
			}),
			n
		)
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]()
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
	}
	get [Symbol.toStringTag]() {
		return 'AxiosHeaders'
	}
	static from(t) {
		return t instanceof this ? t : new this(t)
	}
	static concat(t, ...n) {
		const s = new this(t)
		return n.forEach(i => s.set(i)), s
	}
	static accessor(t) {
		const s = (this[$t] = this[$t] = {accessors: {}}).accessors,
			i = this.prototype
		function a(r) {
			const o = ye(r)
			s[o] || (xs(i, r), (s[o] = !0))
		}
		return L.isArray(t) ? t.forEach(a) : a(t), this
	}
}
je.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization'])
L.freezeMethods(je.prototype)
L.freezeMethods(je)
const te = je
function tt(e, t) {
	const n = this || bt,
		s = t || n,
		i = te.from(s.headers)
	let a = s.data
	return (
		L.forEach(e, function (o) {
			a = o.call(n, a, i.normalize(), t ? t.status : void 0)
		}),
		i.normalize(),
		a
	)
}
function ln(e) {
	return !!(e && e.__CANCEL__)
}
function Ae(e, t, n) {
	w.call(this, e ?? 'canceled', w.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
L.inherits(Ae, w, {__CANCEL__: !0})
function Ms(e, t, n) {
	const s = n.config.validateStatus
	!n.status || !s || s(n.status) ? e(n) : t(new w('Request failed with status code ' + n.status, [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const Cs = Z.isStandardBrowserEnv
	? (function () {
			return {
				write: function (n, s, i, a, r, o) {
					const l = []
					l.push(n + '=' + encodeURIComponent(s)), L.isNumber(i) && l.push('expires=' + new Date(i).toGMTString()), L.isString(a) && l.push('path=' + a), L.isString(r) && l.push('domain=' + r), o === !0 && l.push('secure'), (document.cookie = l.join('; '))
				},
				read: function (n) {
					const s = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'))
					return s ? decodeURIComponent(s[3]) : null
				},
				remove: function (n) {
					this.write(n, '', Date.now() - 864e5)
				},
			}
	  })()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null
				},
				remove: function () {},
			}
	  })()
function Ps(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function As(e, t) {
	return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function dn(e, t) {
	return e && !Ps(t) ? As(e, t) : t
}
const Ls = Z.isStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement('a')
			let s
			function i(a) {
				let r = a
				return t && (n.setAttribute('href', r), (r = n.href)), n.setAttribute('href', r), {href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, '') : '', host: n.host, search: n.search ? n.search.replace(/^\?/, '') : '', hash: n.hash ? n.hash.replace(/^#/, '') : '', hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname}
			}
			return (
				(s = i(window.location.href)),
				function (r) {
					const o = L.isString(r) ? i(r) : r
					return o.protocol === s.protocol && o.host === s.host
				}
			)
	  })()
	: (function () {
			return function () {
				return !0
			}
	  })()
function Os(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
	return (t && t[1]) || ''
}
function Is(e, t) {
	e = e || 10
	const n = new Array(e),
		s = new Array(e)
	let i = 0,
		a = 0,
		r
	return (
		(t = t !== void 0 ? t : 1e3),
		function (l) {
			const d = Date.now(),
				c = s[a]
			r || (r = d), (n[i] = l), (s[i] = d)
			let u = a,
				p = 0
			for (; u !== i; ) (p += n[u++]), (u = u % e)
			if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), d - r < t)) return
			const g = c && d - c
			return g ? Math.round((p * 1e3) / g) : void 0
		}
	)
}
function Rt(e, t) {
	let n = 0
	const s = Is(50, 250)
	return i => {
		const a = i.loaded,
			r = i.lengthComputable ? i.total : void 0,
			o = a - n,
			l = s(o),
			d = a <= r
		n = a
		const c = {loaded: a, total: r, progress: r ? a / r : void 0, bytes: o, rate: l || void 0, estimated: l && r && d ? (r - a) / l : void 0, event: i}
		;(c[t ? 'download' : 'upload'] = !0), e(c)
	}
}
const zs = typeof XMLHttpRequest < 'u',
	Ds =
		zs &&
		function (e) {
			return new Promise(function (n, s) {
				let i = e.data
				const a = te.from(e.headers).normalize(),
					r = e.responseType
				let o
				function l() {
					e.cancelToken && e.cancelToken.unsubscribe(o), e.signal && e.signal.removeEventListener('abort', o)
				}
				L.isFormData(i) && (Z.isStandardBrowserEnv || Z.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType('multipart/form-data;', !1))
				let d = new XMLHttpRequest()
				if (e.auth) {
					const g = e.auth.username || '',
						m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
					a.set('Authorization', 'Basic ' + btoa(g + ':' + m))
				}
				const c = dn(e.baseURL, e.url)
				d.open(e.method.toUpperCase(), an(c, e.params, e.paramsSerializer), !0), (d.timeout = e.timeout)
				function u() {
					if (!d) return
					const g = te.from('getAllResponseHeaders' in d && d.getAllResponseHeaders()),
						h = {data: !r || r === 'text' || r === 'json' ? d.responseText : d.response, status: d.status, statusText: d.statusText, headers: g, config: e, request: d}
					Ms(
						function (f) {
							n(f), l()
						},
						function (f) {
							s(f), l()
						},
						h
					),
						(d = null)
				}
				if (
					('onloadend' in d
						? (d.onloadend = u)
						: (d.onreadystatechange = function () {
								!d || d.readyState !== 4 || (d.status === 0 && !(d.responseURL && d.responseURL.indexOf('file:') === 0)) || setTimeout(u)
						  }),
					(d.onabort = function () {
						d && (s(new w('Request aborted', w.ECONNABORTED, e, d)), (d = null))
					}),
					(d.onerror = function () {
						s(new w('Network Error', w.ERR_NETWORK, e, d)), (d = null)
					}),
					(d.ontimeout = function () {
						let m = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
						const h = e.transitional || rn
						e.timeoutErrorMessage && (m = e.timeoutErrorMessage), s(new w(m, h.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED, e, d)), (d = null)
					}),
					Z.isStandardBrowserEnv)
				) {
					const g = (e.withCredentials || Ls(c)) && e.xsrfCookieName && Cs.read(e.xsrfCookieName)
					g && a.set(e.xsrfHeaderName, g)
				}
				i === void 0 && a.setContentType(null),
					'setRequestHeader' in d &&
						L.forEach(a.toJSON(), function (m, h) {
							d.setRequestHeader(h, m)
						}),
					L.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
					r && r !== 'json' && (d.responseType = e.responseType),
					typeof e.onDownloadProgress == 'function' && d.addEventListener('progress', Rt(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == 'function' && d.upload && d.upload.addEventListener('progress', Rt(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((o = g => {
							d && (s(!g || g.type ? new Ae(null, e, d) : g), d.abort(), (d = null))
						}),
						e.cancelToken && e.cancelToken.subscribe(o),
						e.signal && (e.signal.aborted ? o() : e.signal.addEventListener('abort', o)))
				const p = Os(c)
				if (p && Z.protocols.indexOf(p) === -1) {
					s(new w('Unsupported protocol ' + p + ':', w.ERR_BAD_REQUEST, e))
					return
				}
				d.send(i || null)
			})
		},
	ke = {http: ss, xhr: Ds}
L.forEach(ke, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, 'name', {value: t})
		} catch {}
		Object.defineProperty(e, 'adapterName', {value: t})
	}
})
const ks = {
	getAdapter: e => {
		e = L.isArray(e) ? e : [e]
		const {length: t} = e
		let n, s
		for (let i = 0; i < t && ((n = e[i]), !(s = L.isString(n) ? ke[n.toLowerCase()] : n)); i++);
		if (!s) throw s === !1 ? new w(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT') : new Error(L.hasOwnProp(ke, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
		if (!L.isFunction(s)) throw new TypeError('adapter is not a function')
		return s
	},
	adapters: ke,
}
function nt(e) {
	if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Ae(null, e)
}
function Bt(e) {
	return (
		nt(e),
		(e.headers = te.from(e.headers)),
		(e.data = tt.call(e, e.transformRequest)),
		['post', 'put', 'patch'].indexOf(e.method) !== -1 && e.headers.setContentType('application/x-www-form-urlencoded', !1),
		ks
			.getAdapter(e.adapter || bt.adapter)(e)
			.then(
				function (s) {
					return nt(e), (s.data = tt.call(e, e.transformResponse, s)), (s.headers = te.from(s.headers)), s
				},
				function (s) {
					return ln(s) || (nt(e), s && s.response && ((s.response.data = tt.call(e, e.transformResponse, s.response)), (s.response.headers = te.from(s.response.headers)))), Promise.reject(s)
				}
			)
	)
}
const _t = e => (e instanceof te ? e.toJSON() : e)
function fe(e, t) {
	t = t || {}
	const n = {}
	function s(d, c, u) {
		return L.isPlainObject(d) && L.isPlainObject(c) ? L.merge.call({caseless: u}, d, c) : L.isPlainObject(c) ? L.merge({}, c) : L.isArray(c) ? c.slice() : c
	}
	function i(d, c, u) {
		if (L.isUndefined(c)) {
			if (!L.isUndefined(d)) return s(void 0, d, u)
		} else return s(d, c, u)
	}
	function a(d, c) {
		if (!L.isUndefined(c)) return s(void 0, c)
	}
	function r(d, c) {
		if (L.isUndefined(c)) {
			if (!L.isUndefined(d)) return s(void 0, d)
		} else return s(void 0, c)
	}
	function o(d, c, u) {
		if (u in t) return s(d, c)
		if (u in e) return s(void 0, d)
	}
	const l = {url: a, method: a, data: a, baseURL: r, transformRequest: r, transformResponse: r, paramsSerializer: r, timeout: r, timeoutMessage: r, withCredentials: r, adapter: r, responseType: r, xsrfCookieName: r, xsrfHeaderName: r, onUploadProgress: r, onDownloadProgress: r, decompress: r, maxContentLength: r, maxBodyLength: r, beforeRedirect: r, transport: r, httpAgent: r, httpsAgent: r, cancelToken: r, socketPath: r, responseEncoding: r, validateStatus: o, headers: (d, c) => i(_t(d), _t(c), !0)}
	return (
		L.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
			const u = l[c] || i,
				p = u(e[c], t[c], c)
			;(L.isUndefined(p) && u !== o) || (n[c] = p)
		}),
		n
	)
}
const cn = '1.4.0',
	St = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
	St[e] = function (s) {
		return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e
	}
})
const wt = {}
St.transitional = function (t, n, s) {
	function i(a, r) {
		return '[Axios v' + cn + "] Transitional option '" + a + "'" + r + (s ? '. ' + s : '')
	}
	return (a, r, o) => {
		if (t === !1) throw new w(i(r, ' has been removed' + (n ? ' in ' + n : '')), w.ERR_DEPRECATED)
		return n && !wt[r] && ((wt[r] = !0), console.warn(i(r, ' has been deprecated since v' + n + ' and will be removed in the near future'))), t ? t(a, r, o) : !0
	}
}
function $s(e, t, n) {
	if (typeof e != 'object') throw new w('options must be an object', w.ERR_BAD_OPTION_VALUE)
	const s = Object.keys(e)
	let i = s.length
	for (; i-- > 0; ) {
		const a = s[i],
			r = t[a]
		if (r) {
			const o = e[a],
				l = o === void 0 || r(o, a, e)
			if (l !== !0) throw new w('option ' + a + ' must be ' + l, w.ERR_BAD_OPTION_VALUE)
			continue
		}
		if (n !== !0) throw new w('Unknown option ' + a, w.ERR_BAD_OPTION)
	}
}
const ft = {assertOptions: $s, validators: St},
	ne = ft.validators
class Be {
	constructor(t) {
		;(this.defaults = t), (this.interceptors = {request: new kt(), response: new kt()})
	}
	request(t, n) {
		typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = fe(this.defaults, n))
		const {transitional: s, paramsSerializer: i, headers: a} = n
		s !== void 0 && ft.assertOptions(s, {silentJSONParsing: ne.transitional(ne.boolean), forcedJSONParsing: ne.transitional(ne.boolean), clarifyTimeoutError: ne.transitional(ne.boolean)}, !1), i != null && (L.isFunction(i) ? (n.paramsSerializer = {serialize: i}) : ft.assertOptions(i, {encode: ne.function, serialize: ne.function}, !0)), (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
		let r
		;(r = a && L.merge(a.common, a[n.method])),
			r &&
				L.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], m => {
					delete a[m]
				}),
			(n.headers = te.concat(r, a))
		const o = []
		let l = !0
		this.interceptors.request.forEach(function (h) {
			;(typeof h.runWhen == 'function' && h.runWhen(n) === !1) || ((l = l && h.synchronous), o.unshift(h.fulfilled, h.rejected))
		})
		const d = []
		this.interceptors.response.forEach(function (h) {
			d.push(h.fulfilled, h.rejected)
		})
		let c,
			u = 0,
			p
		if (!l) {
			const m = [Bt.bind(this), void 0]
			for (m.unshift.apply(m, o), m.push.apply(m, d), p = m.length, c = Promise.resolve(n); u < p; ) c = c.then(m[u++], m[u++])
			return c
		}
		p = o.length
		let g = n
		for (u = 0; u < p; ) {
			const m = o[u++],
				h = o[u++]
			try {
				g = m(g)
			} catch (b) {
				h.call(this, b)
				break
			}
		}
		try {
			c = Bt.call(this, g)
		} catch (m) {
			return Promise.reject(m)
		}
		for (u = 0, p = d.length; u < p; ) c = c.then(d[u++], d[u++])
		return c
	}
	getUri(t) {
		t = fe(this.defaults, t)
		const n = dn(t.baseURL, t.url)
		return an(n, t.params, t.paramsSerializer)
	}
}
L.forEach(['delete', 'get', 'head', 'options'], function (t) {
	Be.prototype[t] = function (n, s) {
		return this.request(fe(s || {}, {method: t, url: n, data: (s || {}).data}))
	}
})
L.forEach(['post', 'put', 'patch'], function (t) {
	function n(s) {
		return function (a, r, o) {
			return this.request(fe(o || {}, {method: t, headers: s ? {'Content-Type': 'multipart/form-data'} : {}, url: a, data: r}))
		}
	}
	;(Be.prototype[t] = n()), (Be.prototype[t + 'Form'] = n(!0))
})
const $e = Be
class Et {
	constructor(t) {
		if (typeof t != 'function') throw new TypeError('executor must be a function.')
		let n
		this.promise = new Promise(function (a) {
			n = a
		})
		const s = this
		this.promise.then(i => {
			if (!s._listeners) return
			let a = s._listeners.length
			for (; a-- > 0; ) s._listeners[a](i)
			s._listeners = null
		}),
			(this.promise.then = i => {
				let a
				const r = new Promise(o => {
					s.subscribe(o), (a = o)
				}).then(i)
				return (
					(r.cancel = function () {
						s.unsubscribe(a)
					}),
					r
				)
			}),
			t(function (a, r, o) {
				s.reason || ((s.reason = new Ae(a, r, o)), n(s.reason))
			})
	}
	throwIfRequested() {
		if (this.reason) throw this.reason
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason)
			return
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t])
	}
	unsubscribe(t) {
		if (!this._listeners) return
		const n = this._listeners.indexOf(t)
		n !== -1 && this._listeners.splice(n, 1)
	}
	static source() {
		let t
		return {
			token: new Et(function (i) {
				t = i
			}),
			cancel: t,
		}
	}
}
const Rs = Et
function Bs(e) {
	return function (n) {
		return e.apply(null, n)
	}
}
function _s(e) {
	return L.isObject(e) && e.isAxiosError === !0
}
const mt = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
}
Object.entries(mt).forEach(([e, t]) => {
	mt[t] = e
})
const ws = mt
function un(e) {
	const t = new $e(e),
		n = Yt($e.prototype.request, t)
	return (
		L.extend(n, $e.prototype, t, {allOwnKeys: !0}),
		L.extend(n, t, null, {allOwnKeys: !0}),
		(n.create = function (i) {
			return un(fe(e, i))
		}),
		n
	)
}
const G = un(bt)
G.Axios = $e
G.CanceledError = Ae
G.CancelToken = Rs
G.isCancel = ln
G.VERSION = cn
G.toFormData = Ve
G.AxiosError = w
G.Cancel = G.CanceledError
G.all = function (t) {
	return Promise.all(t)
}
G.spread = Bs
G.isAxiosError = _s
G.mergeConfig = fe
G.AxiosHeaders = te
G.formToJSON = e => on(L.isHTMLForm(e) ? new FormData(e) : e)
G.HttpStatusCode = ws
G.default = G
const Ns = G
async function Hs() {
	const e = {method: 'GET', url: 'https://api.jikan.moe/v4/anime'},
		t = await (await Ns.request(e)).data.data
	let n = '',
		s = 6
	for (let i = 0; i < 6; i++)
		(n = `

			<div class="topics__item">
				<a href="${t[i].url}" class="topics__video-link" aria-label="link to the site">
					<img loading="lazy" src="${t[i].images.jpg.image_url}" alt="" class="topics__video-image">
				</a>
				<span class="topics__video-subtitle">
					${t[i].status}
				</span>
				<span class="topics__video-title">
					${t[i].title}
				</span>
				<a href="${t[i].url}" class="topics__play-link" aria-label="link to the site">
					Play
					<svg class="topics__item-image">
						<use xlink:href="./assets/sprite.svg#play-btn" />
					</svg>
				</a>
			</div>
				`),
			document.querySelector('.topics__box').insertAdjacentHTML('beforeend', n)
	document.querySelector('.topics__button').addEventListener('click', () => {
		s += 6
		for (let i = s - 6; i < s; i++) {
			if (i >= t.length) {
				;(document.querySelector('.topics__button').textContent = 'The End'), (document.querySelector('.topics__button').style.pointerEvents = 'none')
				return
			}
			;(n = `

				<div class="topics__item">
					<a href="${t[i].url}" class="topics__video-link">
						<img loading="lazy" src="${t[i].images.jpg.image_url}" alt="" class="topics__video-image">
					</a>
					<span class="topics__video-subtitle">
						${t[i].status}
					</span>
					<span class="topics__video-title">
						${t[i].title}
					</span>
					<a href="${t[i].url}" class="topics__play-link">
						Play
						<svg class="topics__item-image">
							<use xlink:href="./assets/sprite.svg#play-btn" />
						</svg>
					</a>
				</div>
				`),
				document.querySelector('.topics__box').insertAdjacentHTML('beforeend', n)
		}
	})
}
Hs()
function Nt(e) {
	return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object
}
function Tt(e = {}, t = {}) {
	Object.keys(t).forEach(n => {
		typeof e[n] > 'u' ? (e[n] = t[n]) : Nt(t[n]) && Nt(e[n]) && Object.keys(t[n]).length > 0 && Tt(e[n], t[n])
	})
}
const fn = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: {blur() {}, nodeName: ''},
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return {initEvent() {}}
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			},
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: {hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: ''},
}
function q() {
	const e = typeof document < 'u' ? document : {}
	return Tt(e, fn), e
}
const Fs = {
	document: fn,
	navigator: {userAgent: ''},
	location: {hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: ''},
	history: {replaceState() {}, pushState() {}, go() {}, back() {}},
	CustomEvent: function () {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ''
			},
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(e) {
		return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
	},
	cancelAnimationFrame(e) {
		typeof setTimeout > 'u' || clearTimeout(e)
	},
}
function F() {
	const e = typeof window < 'u' ? window : {}
	return Tt(e, Fs), e
}
function Gs(e) {
	const t = e
	Object.keys(t).forEach(n => {
		try {
			t[n] = null
		} catch {}
		try {
			delete t[n]
		} catch {}
	})
}
function ce(e, t = 0) {
	return setTimeout(e, t)
}
function W() {
	return Date.now()
}
function Xs(e) {
	const t = F()
	let n
	return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
}
function pt(e, t = 'x') {
	const n = F()
	let s, i, a
	const r = Xs(e)
	return (
		n.WebKitCSSMatrix
			? ((i = r.transform || r.webkitTransform),
			  i.split(',').length > 6 &&
					(i = i
						.split(', ')
						.map(o => o.replace(',', '.'))
						.join(', ')),
			  (a = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
			: ((a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')), (s = a.toString().split(','))),
		t === 'x' && (n.WebKitCSSMatrix ? (i = a.m41) : s.length === 16 ? (i = parseFloat(s[12])) : (i = parseFloat(s[4]))),
		t === 'y' && (n.WebKitCSSMatrix ? (i = a.m42) : s.length === 16 ? (i = parseFloat(s[13])) : (i = parseFloat(s[5]))),
		i || 0
	)
}
function be(e) {
	return typeof e == 'object' && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === 'Object'
}
function qs(e) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u' ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function j(...e) {
	const t = Object(e[0]),
		n = ['__proto__', 'constructor', 'prototype']
	for (let s = 1; s < e.length; s += 1) {
		const i = e[s]
		if (i != null && !qs(i)) {
			const a = Object.keys(Object(i)).filter(r => n.indexOf(r) < 0)
			for (let r = 0, o = a.length; r < o; r += 1) {
				const l = a[r],
					d = Object.getOwnPropertyDescriptor(i, l)
				d !== void 0 && d.enumerable && (be(t[l]) && be(i[l]) ? (i[l].__swiper__ ? (t[l] = i[l]) : j(t[l], i[l])) : !be(t[l]) && be(i[l]) ? ((t[l] = {}), i[l].__swiper__ ? (t[l] = i[l]) : j(t[l], i[l])) : (t[l] = i[l]))
			}
		}
	}
	return t
}
function Se(e, t, n) {
	e.style.setProperty(t, n)
}
function mn({swiper: e, targetPosition: t, side: n}) {
	const s = F(),
		i = -e.translate
	let a = null,
		r
	const o = e.params.speed
	;(e.wrapperEl.style.scrollSnapType = 'none'), s.cancelAnimationFrame(e.cssModeFrameID)
	const l = t > i ? 'next' : 'prev',
		d = (u, p) => (l === 'next' && u >= p) || (l === 'prev' && u <= p),
		c = () => {
			;(r = new Date().getTime()), a === null && (a = r)
			const u = Math.max(Math.min((r - a) / o, 1), 0),
				p = 0.5 - Math.cos(u * Math.PI) / 2
			let g = i + p * (t - i)
			if ((d(g, t) && (g = t), e.wrapperEl.scrollTo({[n]: g}), d(g, t))) {
				;(e.wrapperEl.style.overflow = 'hidden'),
					(e.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({[n]: g})
					}),
					s.cancelAnimationFrame(e.cssModeFrameID)
				return
			}
			e.cssModeFrameID = s.requestAnimationFrame(c)
		}
	c()
}
function ue(e) {
	return e.querySelector('.swiper-slide-transform') || (e.shadowEl && e.shadowEl.querySelector('.swiper-slide-transform')) || e
}
function X(e, t = '') {
	return [...e.children].filter(n => n.matches(t))
}
function K(e, t = []) {
	const n = document.createElement(e)
	return n.classList.add(...(Array.isArray(t) ? t : [t])), n
}
function _e(e) {
	const t = F(),
		n = q(),
		s = e.getBoundingClientRect(),
		i = n.body,
		a = e.clientTop || i.clientTop || 0,
		r = e.clientLeft || i.clientLeft || 0,
		o = e === t ? t.scrollY : e.scrollTop,
		l = e === t ? t.scrollX : e.scrollLeft
	return {top: s.top + o - a, left: s.left + l - r}
}
function Vs(e, t) {
	const n = []
	for (; e.previousElementSibling; ) {
		const s = e.previousElementSibling
		t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
	}
	return n
}
function Ys(e, t) {
	const n = []
	for (; e.nextElementSibling; ) {
		const s = e.nextElementSibling
		t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
	}
	return n
}
function ae(e, t) {
	return F().getComputedStyle(e, null).getPropertyValue(t)
}
function Ce(e) {
	let t = e,
		n
	if (t) {
		for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
		return n
	}
}
function le(e, t) {
	const n = []
	let s = e.parentElement
	for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement)
	return n
}
function Ee(e, t) {
	function n(s) {
		s.target === e && (t.call(e, s), e.removeEventListener('transitionend', n))
	}
	t && e.addEventListener('transitionend', n)
}
function ht(e, t, n) {
	const s = F()
	return n ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(s.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(s.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom')) : e.offsetWidth
}
let st
function js() {
	const e = F(),
		t = q()
	return {smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style, touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch))}
}
function pn() {
	return st || (st = js()), st
}
let at
function Ws({userAgent: e} = {}) {
	const t = pn(),
		n = F(),
		s = n.navigator.platform,
		i = e || n.navigator.userAgent,
		a = {ios: !1, android: !1},
		r = n.screen.width,
		o = n.screen.height,
		l = i.match(/(Android);?[\s\/]+([\d.]+)?/)
	let d = i.match(/(iPad).*OS\s([\d_]+)/)
	const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
		u = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		p = s === 'Win32'
	let g = s === 'MacIntel'
	const m = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810']
	return !d && g && t.touch && m.indexOf(`${r}x${o}`) >= 0 && ((d = i.match(/(Version)\/([\d.]+)/)), d || (d = [0, 1, '13_0_0']), (g = !1)), l && !p && ((a.os = 'android'), (a.android = !0)), (d || u || c) && ((a.os = 'ios'), (a.ios = !0)), a
}
function Us(e = {}) {
	return at || (at = Ws(e)), at
}
let it
function Ks() {
	const e = F()
	let t = !1
	function n() {
		const s = e.navigator.userAgent.toLowerCase()
		return s.indexOf('safari') >= 0 && s.indexOf('chrome') < 0 && s.indexOf('android') < 0
	}
	if (n()) {
		const s = String(e.navigator.userAgent)
		if (s.includes('Version/')) {
			const [i, a] = s
				.split('Version/')[1]
				.split(' ')[0]
				.split('.')
				.map(r => Number(r))
			t = i < 16 || (i === 16 && a < 2)
		}
	}
	return {isSafari: t || n(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}
}
function Js() {
	return it || (it = Ks()), it
}
function Zs({swiper: e, on: t, emit: n}) {
	const s = F()
	let i = null,
		a = null
	const r = () => {
			!e || e.destroyed || !e.initialized || (n('beforeResize'), n('resize'))
		},
		o = () => {
			!e ||
				e.destroyed ||
				!e.initialized ||
				((i = new ResizeObserver(c => {
					a = s.requestAnimationFrame(() => {
						const {width: u, height: p} = e
						let g = u,
							m = p
						c.forEach(({contentBoxSize: h, contentRect: b, target: f}) => {
							;(f && f !== e.el) || ((g = b ? b.width : (h[0] || h).inlineSize), (m = b ? b.height : (h[0] || h).blockSize))
						}),
							(g !== u || m !== p) && r()
					})
				})),
				i.observe(e.el))
		},
		l = () => {
			a && s.cancelAnimationFrame(a), i && i.unobserve && e.el && (i.unobserve(e.el), (i = null))
		},
		d = () => {
			!e || e.destroyed || !e.initialized || n('orientationchange')
		}
	t('init', () => {
		if (e.params.resizeObserver && typeof s.ResizeObserver < 'u') {
			o()
			return
		}
		s.addEventListener('resize', r), s.addEventListener('orientationchange', d)
	}),
		t('destroy', () => {
			l(), s.removeEventListener('resize', r), s.removeEventListener('orientationchange', d)
		})
}
function Qs({swiper: e, extendParams: t, on: n, emit: s}) {
	const i = [],
		a = F(),
		r = (d, c = {}) => {
			const u = a.MutationObserver || a.WebkitMutationObserver,
				p = new u(g => {
					if (e.__preventObserver__) return
					if (g.length === 1) {
						s('observerUpdate', g[0])
						return
					}
					const m = function () {
						s('observerUpdate', g[0])
					}
					a.requestAnimationFrame ? a.requestAnimationFrame(m) : a.setTimeout(m, 0)
				})
			p.observe(d, {attributes: typeof c.attributes > 'u' ? !0 : c.attributes, childList: typeof c.childList > 'u' ? !0 : c.childList, characterData: typeof c.characterData > 'u' ? !0 : c.characterData}), i.push(p)
		},
		o = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const d = le(e.el)
					for (let c = 0; c < d.length; c += 1) r(d[c])
				}
				r(e.el, {childList: e.params.observeSlideChildren}), r(e.wrapperEl, {attributes: !1})
			}
		},
		l = () => {
			i.forEach(d => {
				d.disconnect()
			}),
				i.splice(0, i.length)
		}
	t({observer: !1, observeParents: !1, observeSlideChildren: !1}), n('init', o), n('destroy', l)
}
const ea = {
	on(e, t, n) {
		const s = this
		if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s
		const i = n ? 'unshift' : 'push'
		return (
			e.split(' ').forEach(a => {
				s.eventsListeners[a] || (s.eventsListeners[a] = []), s.eventsListeners[a][i](t)
			}),
			s
		)
	},
	once(e, t, n) {
		const s = this
		if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s
		function i(...a) {
			s.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(s, a)
		}
		return (i.__emitterProxy = t), s.on(e, i, n)
	},
	onAny(e, t) {
		const n = this
		if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
		const s = t ? 'unshift' : 'push'
		return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
	},
	offAny(e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
		const n = t.eventsAnyListeners.indexOf(e)
		return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
	},
	off(e, t) {
		const n = this
		return (
			!n.eventsListeners ||
				n.destroyed ||
				!n.eventsListeners ||
				e.split(' ').forEach(s => {
					typeof t > 'u'
						? (n.eventsListeners[s] = [])
						: n.eventsListeners[s] &&
						  n.eventsListeners[s].forEach((i, a) => {
								;(i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[s].splice(a, 1)
						  })
				}),
			n
		)
	},
	emit(...e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t
		let n, s, i
		return (
			typeof e[0] == 'string' || Array.isArray(e[0]) ? ((n = e[0]), (s = e.slice(1, e.length)), (i = t)) : ((n = e[0].events), (s = e[0].data), (i = e[0].context || t)),
			s.unshift(i),
			(Array.isArray(n) ? n : n.split(' ')).forEach(r => {
				t.eventsAnyListeners &&
					t.eventsAnyListeners.length &&
					t.eventsAnyListeners.forEach(o => {
						o.apply(i, [r, ...s])
					}),
					t.eventsListeners &&
						t.eventsListeners[r] &&
						t.eventsListeners[r].forEach(o => {
							o.apply(i, s)
						})
			}),
			t
		)
	},
}
function ta() {
	const e = this
	let t, n
	const s = e.el
	typeof e.params.width < 'u' && e.params.width !== null ? (t = e.params.width) : (t = s.clientWidth), typeof e.params.height < 'u' && e.params.height !== null ? (n = e.params.height) : (n = s.clientHeight), !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) && ((t = t - parseInt(ae(s, 'padding-left') || 0, 10) - parseInt(ae(s, 'padding-right') || 0, 10)), (n = n - parseInt(ae(s, 'padding-top') || 0, 10) - parseInt(ae(s, 'padding-bottom') || 0, 10)), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {width: t, height: n, size: e.isHorizontal() ? t : n}))
}
function na() {
	const e = this
	function t(M) {
		return e.isHorizontal() ? M : {width: 'height', 'margin-top': 'margin-left', 'margin-bottom ': 'margin-right', 'margin-left': 'margin-top', 'margin-right': 'margin-bottom', 'padding-left': 'padding-top', 'padding-right': 'padding-bottom', marginRight: 'marginBottom'}[M]
	}
	function n(M, E) {
		return parseFloat(M.getPropertyValue(t(E)) || 0)
	}
	const s = e.params,
		{wrapperEl: i, slidesEl: a, size: r, rtlTranslate: o, wrongRTL: l} = e,
		d = e.virtual && s.virtual.enabled,
		c = d ? e.virtual.slides.length : e.slides.length,
		u = X(a, `.${e.params.slideClass}, swiper-slide`),
		p = d ? e.virtual.slides.length : u.length
	let g = []
	const m = [],
		h = []
	let b = s.slidesOffsetBefore
	typeof b == 'function' && (b = s.slidesOffsetBefore.call(e))
	let f = s.slidesOffsetAfter
	typeof f == 'function' && (f = s.slidesOffsetAfter.call(e))
	const v = e.snapGrid.length,
		S = e.slidesGrid.length
	let x = s.spaceBetween,
		P = -b,
		A = 0,
		k = 0
	if (typeof r > 'u') return
	typeof x == 'string' && x.indexOf('%') >= 0 ? (x = (parseFloat(x.replace('%', '')) / 100) * r) : typeof x == 'string' && (x = parseFloat(x)),
		(e.virtualSize = -x),
		u.forEach(M => {
			o ? (M.style.marginLeft = '') : (M.style.marginRight = ''), (M.style.marginBottom = ''), (M.style.marginTop = '')
		}),
		s.centeredSlides && s.cssMode && (Se(i, '--swiper-centered-offset-before', ''), Se(i, '--swiper-centered-offset-after', ''))
	const I = s.grid && s.grid.rows > 1 && e.grid
	I && e.grid.initSlides(p)
	let $
	const R = s.slidesPerView === 'auto' && s.breakpoints && Object.keys(s.breakpoints).filter(M => typeof s.breakpoints[M].slidesPerView < 'u').length > 0
	for (let M = 0; M < p; M += 1) {
		$ = 0
		let E
		if ((u[M] && (E = u[M]), I && e.grid.updateSlide(M, E, p, t), !(u[M] && ae(E, 'display') === 'none'))) {
			if (s.slidesPerView === 'auto') {
				R && (u[M].style[t('width')] = '')
				const y = getComputedStyle(E),
					T = E.style.transform,
					D = E.style.webkitTransform
				if ((T && (E.style.transform = 'none'), D && (E.style.webkitTransform = 'none'), s.roundLengths)) $ = e.isHorizontal() ? ht(E, 'width', !0) : ht(E, 'height', !0)
				else {
					const C = n(y, 'width'),
						z = n(y, 'padding-left'),
						O = n(y, 'padding-right'),
						_ = n(y, 'margin-left'),
						H = n(y, 'margin-right'),
						V = y.getPropertyValue('box-sizing')
					if (V && V === 'border-box') $ = C + _ + H
					else {
						const {clientWidth: B, offsetWidth: N} = E
						$ = C + z + O + _ + H + (N - B)
					}
				}
				T && (E.style.transform = T), D && (E.style.webkitTransform = D), s.roundLengths && ($ = Math.floor($))
			} else ($ = (r - (s.slidesPerView - 1) * x) / s.slidesPerView), s.roundLengths && ($ = Math.floor($)), u[M] && (u[M].style[t('width')] = `${$}px`)
			u[M] && (u[M].swiperSlideSize = $), h.push($), s.centeredSlides ? ((P = P + $ / 2 + A / 2 + x), A === 0 && M !== 0 && (P = P - r / 2 - x), M === 0 && (P = P - r / 2 - x), Math.abs(P) < 1 / 1e3 && (P = 0), s.roundLengths && (P = Math.floor(P)), k % s.slidesPerGroup === 0 && g.push(P), m.push(P)) : (s.roundLengths && (P = Math.floor(P)), (k - Math.min(e.params.slidesPerGroupSkip, k)) % e.params.slidesPerGroup === 0 && g.push(P), m.push(P), (P = P + $ + x)), (e.virtualSize += $ + x), (A = $), (k += 1)
		}
	}
	if (((e.virtualSize = Math.max(e.virtualSize, r) + f), o && l && (s.effect === 'slide' || s.effect === 'coverflow') && (i.style.width = `${e.virtualSize + x}px`), s.setWrapperSize && (i.style[t('width')] = `${e.virtualSize + x}px`), I && e.grid.updateWrapperSize($, g, t), !s.centeredSlides)) {
		const M = []
		for (let E = 0; E < g.length; E += 1) {
			let y = g[E]
			s.roundLengths && (y = Math.floor(y)), g[E] <= e.virtualSize - r && M.push(y)
		}
		;(g = M), Math.floor(e.virtualSize - r) - Math.floor(g[g.length - 1]) > 1 && g.push(e.virtualSize - r)
	}
	if (d && s.loop) {
		const M = h[0] + x
		if (s.slidesPerGroup > 1) {
			const E = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
				y = M * s.slidesPerGroup
			for (let T = 0; T < E; T += 1) g.push(g[g.length - 1] + y)
		}
		for (let E = 0; E < e.virtual.slidesBefore + e.virtual.slidesAfter; E += 1) s.slidesPerGroup === 1 && g.push(g[g.length - 1] + M), m.push(m[m.length - 1] + M), (e.virtualSize += M)
	}
	if ((g.length === 0 && (g = [0]), x !== 0)) {
		const M = e.isHorizontal() && o ? 'marginLeft' : t('marginRight')
		u.filter((E, y) => (!s.cssMode || s.loop ? !0 : y !== u.length - 1)).forEach(E => {
			E.style[M] = `${x}px`
		})
	}
	if (s.centeredSlides && s.centeredSlidesBounds) {
		let M = 0
		h.forEach(y => {
			M += y + (x || 0)
		}),
			(M -= x)
		const E = M - r
		g = g.map(y => (y < 0 ? -b : y > E ? E + f : y))
	}
	if (s.centerInsufficientSlides) {
		let M = 0
		if (
			(h.forEach(E => {
				M += E + (x || 0)
			}),
			(M -= x),
			M < r)
		) {
			const E = (r - M) / 2
			g.forEach((y, T) => {
				g[T] = y - E
			}),
				m.forEach((y, T) => {
					m[T] = y + E
				})
		}
	}
	if ((Object.assign(e, {slides: u, snapGrid: g, slidesGrid: m, slidesSizesGrid: h}), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)) {
		Se(i, '--swiper-centered-offset-before', `${-g[0]}px`), Se(i, '--swiper-centered-offset-after', `${e.size / 2 - h[h.length - 1] / 2}px`)
		const M = -e.snapGrid[0],
			E = -e.slidesGrid[0]
		;(e.snapGrid = e.snapGrid.map(y => y + M)), (e.slidesGrid = e.slidesGrid.map(y => y + E))
	}
	if ((p !== c && e.emit('slidesLengthChange'), g.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')), m.length !== S && e.emit('slidesGridLengthChange'), s.watchSlidesProgress && e.updateSlidesOffset(), !d && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))) {
		const M = `${s.containerModifierClass}backface-hidden`,
			E = e.el.classList.contains(M)
		p <= s.maxBackfaceHiddenSlides ? E || e.el.classList.add(M) : E && e.el.classList.remove(M)
	}
}
function sa(e) {
	const t = this,
		n = [],
		s = t.virtual && t.params.virtual.enabled
	let i = 0,
		a
	typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed)
	const r = o => (s ? t.slides[t.getSlideIndexByData(o)] : t.slides[o])
	if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
		if (t.params.centeredSlides)
			(t.visibleSlides || []).forEach(o => {
				n.push(o)
			})
		else
			for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
				const o = t.activeIndex + a
				if (o > t.slides.length && !s) break
				n.push(r(o))
			}
	else n.push(r(t.activeIndex))
	for (a = 0; a < n.length; a += 1)
		if (typeof n[a] < 'u') {
			const o = n[a].offsetHeight
			i = o > i ? o : i
		}
	;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function aa() {
	const e = this,
		t = e.slides,
		n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0
	for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - n - e.cssOverflowAdjustment()
}
function ia(e = (this && this.translate) || 0) {
	const t = this,
		n = t.params,
		{slides: s, rtlTranslate: i, snapGrid: a} = t
	if (s.length === 0) return
	typeof s[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
	let r = -e
	i && (r = e),
		s.forEach(l => {
			l.classList.remove(n.slideVisibleClass)
		}),
		(t.visibleSlidesIndexes = []),
		(t.visibleSlides = [])
	let o = n.spaceBetween
	typeof o == 'string' && o.indexOf('%') >= 0 ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size) : typeof o == 'string' && (o = parseFloat(o))
	for (let l = 0; l < s.length; l += 1) {
		const d = s[l]
		let c = d.swiperSlideOffset
		n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset)
		const u = (r + (n.centeredSlides ? t.minTranslate() : 0) - c) / (d.swiperSlideSize + o),
			p = (r - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (d.swiperSlideSize + o),
			g = -(r - c),
			m = g + t.slidesSizesGrid[l]
		;((g >= 0 && g < t.size - 1) || (m > 1 && m <= t.size) || (g <= 0 && m >= t.size)) && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(l), s[l].classList.add(n.slideVisibleClass)), (d.progress = i ? -u : u), (d.originalProgress = i ? -p : p)
	}
}
function ra(e) {
	const t = this
	if (typeof e > 'u') {
		const c = t.rtlTranslate ? -1 : 1
		e = (t && t.translate && t.translate * c) || 0
	}
	const n = t.params,
		s = t.maxTranslate() - t.minTranslate()
	let {progress: i, isBeginning: a, isEnd: r, progressLoop: o} = t
	const l = a,
		d = r
	if (s === 0) (i = 0), (a = !0), (r = !0)
	else {
		i = (e - t.minTranslate()) / s
		const c = Math.abs(e - t.minTranslate()) < 1,
			u = Math.abs(e - t.maxTranslate()) < 1
		;(a = c || i <= 0), (r = u || i >= 1), c && (i = 0), u && (i = 1)
	}
	if (n.loop) {
		const c = t.getSlideIndexByData(0),
			u = t.getSlideIndexByData(t.slides.length - 1),
			p = t.slidesGrid[c],
			g = t.slidesGrid[u],
			m = t.slidesGrid[t.slidesGrid.length - 1],
			h = Math.abs(e)
		h >= p ? (o = (h - p) / m) : (o = (h + m - g) / m), o > 1 && (o -= 1)
	}
	Object.assign(t, {progress: i, progressLoop: o, isBeginning: a, isEnd: r}), (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e), a && !l && t.emit('reachBeginning toEdge'), r && !d && t.emit('reachEnd toEdge'), ((l && !a) || (d && !r)) && t.emit('fromEdge'), t.emit('progress', i)
}
function oa() {
	const e = this,
		{slides: t, params: n, slidesEl: s, activeIndex: i} = e,
		a = e.virtual && n.virtual.enabled,
		r = l => X(s, `.${n.slideClass}${l}, swiper-slide${l}`)[0]
	t.forEach(l => {
		l.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
	})
	let o
	if (a)
		if (n.loop) {
			let l = i - e.virtual.slidesBefore
			l < 0 && (l = e.virtual.slides.length + l), l >= e.virtual.slides.length && (l -= e.virtual.slides.length), (o = r(`[data-swiper-slide-index="${l}"]`))
		} else o = r(`[data-swiper-slide-index="${i}"]`)
	else o = t[i]
	if (o) {
		o.classList.add(n.slideActiveClass)
		let l = Ys(o, `.${n.slideClass}, swiper-slide`)[0]
		n.loop && !l && (l = t[0]), l && l.classList.add(n.slideNextClass)
		let d = Vs(o, `.${n.slideClass}, swiper-slide`)[0]
		n.loop && !d === 0 && (d = t[t.length - 1]), d && d.classList.add(n.slidePrevClass)
	}
	e.emitSlidesClasses()
}
const Re = (e, t) => {
		if (!e || e.destroyed || !e.params) return
		const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
			s = t.closest(n())
		if (s) {
			const i = s.querySelector(`.${e.params.lazyPreloaderClass}`)
			i && i.remove()
		}
	},
	Ht = (e, t) => {
		if (!e.slides[t]) return
		const n = e.slides[t].querySelector('[loading="lazy"]')
		n && n.removeAttribute('loading')
	},
	gt = e => {
		if (!e || e.destroyed || !e.params) return
		let t = e.params.lazyPreloadPrevNext
		const n = e.slides.length
		if (!n || !t || t < 0) return
		t = Math.min(t, n)
		const s = e.params.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
			i = e.activeIndex,
			a = i + s - 1
		if (e.params.rewind)
			for (let r = i - t; r <= a + t; r += 1) {
				const o = ((r % n) + n) % n
				o !== i && o > a && Ht(e, o)
			}
		else for (let r = Math.max(a - t, 0); r <= Math.min(a + t, n - 1); r += 1) r !== i && r > a && Ht(e, r)
	}
function la(e) {
	const {slidesGrid: t, params: n} = e,
		s = e.rtlTranslate ? e.translate : -e.translate
	let i
	for (let a = 0; a < t.length; a += 1) typeof t[a + 1] < 'u' ? (s >= t[a] && s < t[a + 1] - (t[a + 1] - t[a]) / 2 ? (i = a) : s >= t[a] && s < t[a + 1] && (i = a + 1)) : s >= t[a] && (i = a)
	return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i
}
function da(e) {
	const t = this,
		n = t.rtlTranslate ? t.translate : -t.translate,
		{snapGrid: s, params: i, activeIndex: a, realIndex: r, snapIndex: o} = t
	let l = e,
		d
	const c = p => {
		let g = p - t.virtual.slidesBefore
		return g < 0 && (g = t.virtual.slides.length + g), g >= t.virtual.slides.length && (g -= t.virtual.slides.length), g
	}
	if ((typeof l > 'u' && (l = la(t)), s.indexOf(n) >= 0)) d = s.indexOf(n)
	else {
		const p = Math.min(i.slidesPerGroupSkip, l)
		d = p + Math.floor((l - p) / i.slidesPerGroup)
	}
	if ((d >= s.length && (d = s.length - 1), l === a)) {
		d !== o && ((t.snapIndex = d), t.emit('snapIndexChange')), t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(l))
		return
	}
	let u
	t.virtual && i.virtual.enabled && i.loop ? (u = c(l)) : t.slides[l] ? (u = parseInt(t.slides[l].getAttribute('data-swiper-slide-index') || l, 10)) : (u = l), Object.assign(t, {previousSnapIndex: o, snapIndex: d, previousRealIndex: r, realIndex: u, previousIndex: a, activeIndex: l}), t.initialized && gt(t), t.emit('activeIndexChange'), t.emit('snapIndexChange'), r !== u && t.emit('realIndexChange'), (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange')
}
function ca(e) {
	const t = this,
		n = t.params,
		s = e.closest(`.${n.slideClass}, swiper-slide`)
	let i = !1,
		a
	if (s) {
		for (let r = 0; r < t.slides.length; r += 1)
			if (t.slides[r] === s) {
				;(i = !0), (a = r)
				break
			}
	}
	if (s && i) (t.clickedSlide = s), t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(s.getAttribute('data-swiper-slide-index'), 10)) : (t.clickedIndex = a)
	else {
		;(t.clickedSlide = void 0), (t.clickedIndex = void 0)
		return
	}
	n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const ua = {updateSize: ta, updateSlides: na, updateAutoHeight: sa, updateSlidesOffset: aa, updateSlidesProgress: ia, updateProgress: ra, updateSlidesClasses: oa, updateActiveIndex: da, updateClickedSlide: ca}
function fa(e = this.isHorizontal() ? 'x' : 'y') {
	const t = this,
		{params: n, rtlTranslate: s, translate: i, wrapperEl: a} = t
	if (n.virtualTranslate) return s ? -i : i
	if (n.cssMode) return i
	let r = pt(a, e)
	return (r += t.cssOverflowAdjustment()), s && (r = -r), r || 0
}
function ma(e, t) {
	const n = this,
		{rtlTranslate: s, params: i, wrapperEl: a, progress: r} = n
	let o = 0,
		l = 0
	const d = 0
	n.isHorizontal() ? (o = s ? -e : e) : (l = e), i.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))), (n.previousTranslate = n.translate), (n.translate = n.isHorizontal() ? o : l), i.cssMode ? (a[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -o : -l) : i.virtualTranslate || (n.isHorizontal() ? (o -= n.cssOverflowAdjustment()) : (l -= n.cssOverflowAdjustment()), (a.style.transform = `translate3d(${o}px, ${l}px, ${d}px)`))
	let c
	const u = n.maxTranslate() - n.minTranslate()
	u === 0 ? (c = 0) : (c = (e - n.minTranslate()) / u), c !== r && n.updateProgress(e), n.emit('setTranslate', n.translate, t)
}
function pa() {
	return -this.snapGrid[0]
}
function ha() {
	return -this.snapGrid[this.snapGrid.length - 1]
}
function ga(e = 0, t = this.params.speed, n = !0, s = !0, i) {
	const a = this,
		{params: r, wrapperEl: o} = a
	if (a.animating && r.preventInteractionOnTransition) return !1
	const l = a.minTranslate(),
		d = a.maxTranslate()
	let c
	if ((s && e > l ? (c = l) : s && e < d ? (c = d) : (c = e), a.updateProgress(c), r.cssMode)) {
		const u = a.isHorizontal()
		if (t === 0) o[u ? 'scrollLeft' : 'scrollTop'] = -c
		else {
			if (!a.support.smoothScroll) return mn({swiper: a, targetPosition: -c, side: u ? 'left' : 'top'}), !0
			o.scrollTo({[u ? 'left' : 'top']: -c, behavior: 'smooth'})
		}
		return !0
	}
	return (
		t === 0
			? (a.setTransition(0), a.setTranslate(c), n && (a.emit('beforeTransitionStart', t, i), a.emit('transitionEnd')))
			: (a.setTransition(t),
			  a.setTranslate(c),
			  n && (a.emit('beforeTransitionStart', t, i), a.emit('transitionStart')),
			  a.animating ||
					((a.animating = !0),
					a.onTranslateToWrapperTransitionEnd ||
						(a.onTranslateToWrapperTransitionEnd = function (p) {
							!a || a.destroyed || (p.target === this && (a.wrapperEl.removeEventListener('transitionend', a.onTranslateToWrapperTransitionEnd), (a.onTranslateToWrapperTransitionEnd = null), delete a.onTranslateToWrapperTransitionEnd, n && a.emit('transitionEnd')))
						}),
					a.wrapperEl.addEventListener('transitionend', a.onTranslateToWrapperTransitionEnd))),
		!0
	)
}
const va = {getTranslate: fa, setTranslate: ma, minTranslate: pa, maxTranslate: ha, translateTo: ga}
function ya(e, t) {
	const n = this
	n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`), n.emit('setTransition', e, t)
}
function hn({swiper: e, runCallbacks: t, direction: n, step: s}) {
	const {activeIndex: i, previousIndex: a} = e
	let r = n
	if ((r || (i > a ? (r = 'next') : i < a ? (r = 'prev') : (r = 'reset')), e.emit(`transition${s}`), t && i !== a)) {
		if (r === 'reset') {
			e.emit(`slideResetTransition${s}`)
			return
		}
		e.emit(`slideChangeTransition${s}`), r === 'next' ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
	}
}
function ba(e = !0, t) {
	const n = this,
		{params: s} = n
	s.cssMode || (s.autoHeight && n.updateAutoHeight(), hn({swiper: n, runCallbacks: e, direction: t, step: 'Start'}))
}
function Sa(e = !0, t) {
	const n = this,
		{params: s} = n
	;(n.animating = !1), !s.cssMode && (n.setTransition(0), hn({swiper: n, runCallbacks: e, direction: t, step: 'End'}))
}
const Ea = {setTransition: ya, transitionStart: ba, transitionEnd: Sa}
function Ta(e = 0, t = this.params.speed, n = !0, s, i) {
	typeof e == 'string' && (e = parseInt(e, 10))
	const a = this
	let r = e
	r < 0 && (r = 0)
	const {params: o, snapGrid: l, slidesGrid: d, previousIndex: c, activeIndex: u, rtlTranslate: p, wrapperEl: g, enabled: m} = a
	if ((a.animating && o.preventInteractionOnTransition) || (!m && !s && !i)) return !1
	const h = Math.min(a.params.slidesPerGroupSkip, r)
	let b = h + Math.floor((r - h) / a.params.slidesPerGroup)
	b >= l.length && (b = l.length - 1)
	const f = -l[b]
	if (o.normalizeSlideIndex)
		for (let S = 0; S < d.length; S += 1) {
			const x = -Math.floor(f * 100),
				P = Math.floor(d[S] * 100),
				A = Math.floor(d[S + 1] * 100)
			typeof d[S + 1] < 'u' ? (x >= P && x < A - (A - P) / 2 ? (r = S) : x >= P && x < A && (r = S + 1)) : x >= P && (r = S)
		}
	if (a.initialized && r !== u && ((!a.allowSlideNext && f < a.translate && f < a.minTranslate()) || (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (u || 0) !== r))) return !1
	r !== (c || 0) && n && a.emit('beforeSlideChangeStart'), a.updateProgress(f)
	let v
	if ((r > u ? (v = 'next') : r < u ? (v = 'prev') : (v = 'reset'), (p && -f === a.translate) || (!p && f === a.translate))) return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), o.effect !== 'slide' && a.setTranslate(f), v !== 'reset' && (a.transitionStart(n, v), a.transitionEnd(n, v)), !1
	if (o.cssMode) {
		const S = a.isHorizontal(),
			x = p ? f : -f
		if (t === 0) {
			const P = a.virtual && a.params.virtual.enabled
			P && ((a.wrapperEl.style.scrollSnapType = 'none'), (a._immediateVirtual = !0)),
				P && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
					? ((a._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							g[S ? 'scrollLeft' : 'scrollTop'] = x
					  }))
					: (g[S ? 'scrollLeft' : 'scrollTop'] = x),
				P &&
					requestAnimationFrame(() => {
						;(a.wrapperEl.style.scrollSnapType = ''), (a._immediateVirtual = !1)
					})
		} else {
			if (!a.support.smoothScroll) return mn({swiper: a, targetPosition: x, side: S ? 'left' : 'top'}), !0
			g.scrollTo({[S ? 'left' : 'top']: x, behavior: 'smooth'})
		}
		return !0
	}
	return (
		a.setTransition(t),
		a.setTranslate(f),
		a.updateActiveIndex(r),
		a.updateSlidesClasses(),
		a.emit('beforeTransitionStart', t, s),
		a.transitionStart(n, v),
		t === 0
			? a.transitionEnd(n, v)
			: a.animating ||
			  ((a.animating = !0),
			  a.onSlideToWrapperTransitionEnd ||
					(a.onSlideToWrapperTransitionEnd = function (x) {
						!a || a.destroyed || (x.target === this && (a.wrapperEl.removeEventListener('transitionend', a.onSlideToWrapperTransitionEnd), (a.onSlideToWrapperTransitionEnd = null), delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, v)))
					}),
			  a.wrapperEl.addEventListener('transitionend', a.onSlideToWrapperTransitionEnd)),
		!0
	)
}
function xa(e = 0, t = this.params.speed, n = !0, s) {
	typeof e == 'string' && (e = parseInt(e, 10))
	const i = this
	let a = e
	return i.params.loop && (i.virtual && i.params.virtual.enabled ? (a = a + i.virtual.slidesBefore) : (a = i.getSlideIndexByData(a))), i.slideTo(a, t, n, s)
}
function Ma(e = this.params.speed, t = !0, n) {
	const s = this,
		{enabled: i, params: a, animating: r} = s
	if (!i) return s
	let o = a.slidesPerGroup
	a.slidesPerView === 'auto' && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic('current', !0), 1))
	const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o,
		d = s.virtual && a.virtual.enabled
	if (a.loop) {
		if (r && !d && a.loopPreventsSliding) return !1
		s.loopFix({direction: 'next'}), (s._clientLeft = s.wrapperEl.clientLeft)
	}
	return a.rewind && s.isEnd ? s.slideTo(0, e, t, n) : s.slideTo(s.activeIndex + l, e, t, n)
}
function Ca(e = this.params.speed, t = !0, n) {
	const s = this,
		{params: i, snapGrid: a, slidesGrid: r, rtlTranslate: o, enabled: l, animating: d} = s
	if (!l) return s
	const c = s.virtual && i.virtual.enabled
	if (i.loop) {
		if (d && !c && i.loopPreventsSliding) return !1
		s.loopFix({direction: 'prev'}), (s._clientLeft = s.wrapperEl.clientLeft)
	}
	const u = o ? s.translate : -s.translate
	function p(f) {
		return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f)
	}
	const g = p(u),
		m = a.map(f => p(f))
	let h = a[m.indexOf(g) - 1]
	if (typeof h > 'u' && i.cssMode) {
		let f
		a.forEach((v, S) => {
			g >= v && (f = S)
		}),
			typeof f < 'u' && (h = a[f > 0 ? f - 1 : f])
	}
	let b = 0
	if ((typeof h < 'u' && ((b = r.indexOf(h)), b < 0 && (b = s.activeIndex - 1), i.slidesPerView === 'auto' && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && ((b = b - s.slidesPerViewDynamic('previous', !0) + 1), (b = Math.max(b, 0)))), i.rewind && s.isBeginning)) {
		const f = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1
		return s.slideTo(f, e, t, n)
	}
	return s.slideTo(b, e, t, n)
}
function Pa(e = this.params.speed, t = !0, n) {
	const s = this
	return s.slideTo(s.activeIndex, e, t, n)
}
function Aa(e = this.params.speed, t = !0, n, s = 0.5) {
	const i = this
	let a = i.activeIndex
	const r = Math.min(i.params.slidesPerGroupSkip, a),
		o = r + Math.floor((a - r) / i.params.slidesPerGroup),
		l = i.rtlTranslate ? i.translate : -i.translate
	if (l >= i.snapGrid[o]) {
		const d = i.snapGrid[o],
			c = i.snapGrid[o + 1]
		l - d > (c - d) * s && (a += i.params.slidesPerGroup)
	} else {
		const d = i.snapGrid[o - 1],
			c = i.snapGrid[o]
		l - d <= (c - d) * s && (a -= i.params.slidesPerGroup)
	}
	return (a = Math.max(a, 0)), (a = Math.min(a, i.slidesGrid.length - 1)), i.slideTo(a, e, t, n)
}
function La() {
	const e = this,
		{params: t, slidesEl: n} = e,
		s = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
	let i = e.clickedIndex,
		a
	const r = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
	if (t.loop) {
		if (e.animating) return
		;(a = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
			t.centeredSlides
				? i < e.loopedSlides - s / 2 || i > e.slides.length - e.loopedSlides + s / 2
					? (e.loopFix(),
					  (i = e.getSlideIndex(X(n, `${r}[data-swiper-slide-index="${a}"]`)[0])),
					  ce(() => {
							e.slideTo(i)
					  }))
					: e.slideTo(i)
				: i > e.slides.length - s
				? (e.loopFix(),
				  (i = e.getSlideIndex(X(n, `${r}[data-swiper-slide-index="${a}"]`)[0])),
				  ce(() => {
						e.slideTo(i)
				  }))
				: e.slideTo(i)
	} else e.slideTo(i)
}
const Oa = {slideTo: Ta, slideToLoop: xa, slideNext: Ma, slidePrev: Ca, slideReset: Pa, slideToClosest: Aa, slideToClickedSlide: La}
function Ia(e) {
	const t = this,
		{params: n, slidesEl: s} = t
	if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
	X(s, `.${n.slideClass}, swiper-slide`).forEach((a, r) => {
		a.setAttribute('data-swiper-slide-index', r)
	}),
		t.loopFix({slideRealIndex: e, direction: n.centeredSlides ? void 0 : 'next'})
}
function za({slideRealIndex: e, slideTo: t = !0, direction: n, setTranslate: s, activeSlideIndex: i, byController: a, byMousewheel: r} = {}) {
	const o = this
	if (!o.params.loop) return
	o.emit('beforeLoopFix')
	const {slides: l, allowSlidePrev: d, allowSlideNext: c, slidesEl: u, params: p} = o
	if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && p.virtual.enabled)) {
		t && (!p.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), (o.allowSlidePrev = d), (o.allowSlideNext = c), o.emit('loopFix')
		return
	}
	const g = p.slidesPerView === 'auto' ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10))
	let m = p.loopedSlides || g
	m % p.slidesPerGroup !== 0 && (m += p.slidesPerGroup - (m % p.slidesPerGroup)), (o.loopedSlides = m)
	const h = [],
		b = []
	let f = o.activeIndex
	typeof i > 'u' ? (i = o.getSlideIndex(o.slides.filter(A => A.classList.contains(p.slideActiveClass))[0])) : (f = i)
	const v = n === 'next' || !n,
		S = n === 'prev' || !n
	let x = 0,
		P = 0
	if (i < m) {
		x = Math.max(m - i, p.slidesPerGroup)
		for (let A = 0; A < m - i; A += 1) {
			const k = A - Math.floor(A / l.length) * l.length
			h.push(l.length - k - 1)
		}
	} else if (i > o.slides.length - m * 2) {
		P = Math.max(i - (o.slides.length - m * 2), p.slidesPerGroup)
		for (let A = 0; A < P; A += 1) {
			const k = A - Math.floor(A / l.length) * l.length
			b.push(k)
		}
	}
	if (
		(S &&
			h.forEach(A => {
				;(o.slides[A].swiperLoopMoveDOM = !0), u.prepend(o.slides[A]), (o.slides[A].swiperLoopMoveDOM = !1)
			}),
		v &&
			b.forEach(A => {
				;(o.slides[A].swiperLoopMoveDOM = !0), u.append(o.slides[A]), (o.slides[A].swiperLoopMoveDOM = !1)
			}),
		o.recalcSlides(),
		p.slidesPerView === 'auto' && o.updateSlides(),
		p.watchSlidesProgress && o.updateSlidesOffset(),
		t)
	) {
		if (h.length > 0 && S)
			if (typeof e > 'u') {
				const A = o.slidesGrid[f],
					I = o.slidesGrid[f + x] - A
				r ? o.setTranslate(o.translate - I) : (o.slideTo(f + x, 0, !1, !0), s && (o.touches[o.isHorizontal() ? 'startX' : 'startY'] += I))
			} else s && o.slideToLoop(e, 0, !1, !0)
		else if (b.length > 0 && v)
			if (typeof e > 'u') {
				const A = o.slidesGrid[f],
					I = o.slidesGrid[f - P] - A
				r ? o.setTranslate(o.translate - I) : (o.slideTo(f - P, 0, !1, !0), s && (o.touches[o.isHorizontal() ? 'startX' : 'startY'] += I))
			} else o.slideToLoop(e, 0, !1, !0)
	}
	if (((o.allowSlidePrev = d), (o.allowSlideNext = c), o.controller && o.controller.control && !a)) {
		const A = {slideRealIndex: e, slideTo: !1, direction: n, setTranslate: s, activeSlideIndex: i, byController: !0}
		Array.isArray(o.controller.control)
			? o.controller.control.forEach(k => {
					!k.destroyed && k.params.loop && k.loopFix(A)
			  })
			: o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(A)
	}
	o.emit('loopFix')
}
function Da() {
	const e = this,
		{params: t, slidesEl: n} = e
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
	e.recalcSlides()
	const s = []
	e.slides.forEach(i => {
		const a = typeof i.swiperSlideIndex > 'u' ? i.getAttribute('data-swiper-slide-index') * 1 : i.swiperSlideIndex
		s[a] = i
	}),
		e.slides.forEach(i => {
			i.removeAttribute('data-swiper-slide-index')
		}),
		s.forEach(i => {
			n.append(i)
		}),
		e.recalcSlides(),
		e.slideTo(e.realIndex, 0)
}
const ka = {loopCreate: Ia, loopFix: za, loopDestroy: Da}
function $a(e) {
	const t = this
	if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return
	const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
	t.isElement && (t.__preventObserver__ = !0),
		(n.style.cursor = 'move'),
		(n.style.cursor = e ? 'grabbing' : 'grab'),
		t.isElement &&
			requestAnimationFrame(() => {
				t.__preventObserver__ = !1
			})
}
function Ra() {
	const e = this
	;(e.params.watchOverflow && e.isLocked) ||
		e.params.cssMode ||
		(e.isElement && (e.__preventObserver__ = !0),
		(e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1
			}))
}
const Ba = {setGrabCursor: $a, unsetGrabCursor: Ra}
function _a(e, t = this) {
	function n(s) {
		if (!s || s === q() || s === F()) return null
		s.assignedSlot && (s = s.assignedSlot)
		const i = s.closest(e)
		return !i && !s.getRootNode ? null : i || n(s.getRootNode().host)
	}
	return n(t)
}
function wa(e) {
	const t = this,
		n = q(),
		s = F(),
		i = t.touchEventsData
	i.evCache.push(e)
	const {params: a, touches: r, enabled: o} = t
	if (!o || (!a.simulateTouch && e.pointerType === 'mouse') || (t.animating && a.preventInteractionOnTransition)) return
	!t.animating && a.cssMode && a.loop && t.loopFix()
	let l = e
	l.originalEvent && (l = l.originalEvent)
	let d = l.target
	if ((a.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(d)) || ('which' in l && l.which === 3) || ('button' in l && l.button > 0) || (i.isTouched && i.isMoved)) return
	const c = !!a.noSwipingClass && a.noSwipingClass !== '',
		u = e.composedPath ? e.composedPath() : e.path
	c && l.target && l.target.shadowRoot && u && (d = u[0])
	const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
		g = !!(l.target && l.target.shadowRoot)
	if (a.noSwiping && (g ? _a(p, d) : d.closest(p))) {
		t.allowClick = !0
		return
	}
	if (a.swipeHandler && !d.closest(a.swipeHandler)) return
	;(r.currentX = l.pageX), (r.currentY = l.pageY)
	const m = r.currentX,
		h = r.currentY,
		b = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
		f = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold
	if (b && (m <= f || m >= s.innerWidth - f))
		if (b === 'prevent') e.preventDefault()
		else return
	Object.assign(i, {isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0}), (r.startX = m), (r.startY = h), (i.touchStartTime = W()), (t.allowClick = !0), t.updateSize(), (t.swipeDirection = void 0), a.threshold > 0 && (i.allowThresholdMove = !1)
	let v = !0
	d.matches(i.focusableElements) && ((v = !1), d.nodeName === 'SELECT' && (i.isTouched = !1)), n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== d && n.activeElement.blur()
	const S = v && t.allowTouchMove && a.touchStartPreventDefault
	;(a.touchStartForcePreventDefault || S) && !d.isContentEditable && l.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit('touchStart', l)
}
function Na(e) {
	const t = q(),
		n = this,
		s = n.touchEventsData,
		{params: i, touches: a, rtlTranslate: r, enabled: o} = n
	if (!o || (!i.simulateTouch && e.pointerType === 'mouse')) return
	let l = e
	if ((l.originalEvent && (l = l.originalEvent), !s.isTouched)) {
		s.startMoving && s.isScrolling && n.emit('touchMoveOpposite', l)
		return
	}
	const d = s.evCache.findIndex(A => A.pointerId === l.pointerId)
	d >= 0 && (s.evCache[d] = l)
	const c = s.evCache.length > 1 ? s.evCache[0] : l,
		u = c.pageX,
		p = c.pageY
	if (l.preventedByNestedSwiper) {
		;(a.startX = u), (a.startY = p)
		return
	}
	if (!n.allowTouchMove) {
		l.target.matches(s.focusableElements) || (n.allowClick = !1), s.isTouched && (Object.assign(a, {startX: u, startY: p, prevX: n.touches.currentX, prevY: n.touches.currentY, currentX: u, currentY: p}), (s.touchStartTime = W()))
		return
	}
	if (i.touchReleaseOnEdges && !i.loop) {
		if (n.isVertical()) {
			if ((p < a.startY && n.translate <= n.maxTranslate()) || (p > a.startY && n.translate >= n.minTranslate())) {
				;(s.isTouched = !1), (s.isMoved = !1)
				return
			}
		} else if ((u < a.startX && n.translate <= n.maxTranslate()) || (u > a.startX && n.translate >= n.minTranslate())) return
	}
	if (t.activeElement && l.target === t.activeElement && l.target.matches(s.focusableElements)) {
		;(s.isMoved = !0), (n.allowClick = !1)
		return
	}
	if ((s.allowTouchCallbacks && n.emit('touchMove', l), l.targetTouches && l.targetTouches.length > 1)) return
	;(a.currentX = u), (a.currentY = p)
	const g = a.currentX - a.startX,
		m = a.currentY - a.startY
	if (n.params.threshold && Math.sqrt(g ** 2 + m ** 2) < n.params.threshold) return
	if (typeof s.isScrolling > 'u') {
		let A
		;(n.isHorizontal() && a.currentY === a.startY) || (n.isVertical() && a.currentX === a.startX) ? (s.isScrolling = !1) : g * g + m * m >= 25 && ((A = (Math.atan2(Math.abs(m), Math.abs(g)) * 180) / Math.PI), (s.isScrolling = n.isHorizontal() ? A > i.touchAngle : 90 - A > i.touchAngle))
	}
	if ((s.isScrolling && n.emit('touchMoveOpposite', l), typeof s.startMoving > 'u' && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling || (n.zoom && n.params.zoom && n.params.zoom.enabled && s.evCache.length > 1))) {
		s.isTouched = !1
		return
	}
	if (!s.startMoving) return
	;(n.allowClick = !1), !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation()
	let h = n.isHorizontal() ? g : m,
		b = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
	i.oneWayMovement && ((h = Math.abs(h) * (r ? 1 : -1)), (b = Math.abs(b) * (r ? 1 : -1))), (a.diff = h), (h *= i.touchRatio), r && ((h = -h), (b = -b))
	const f = n.touchesDirection
	;(n.swipeDirection = h > 0 ? 'prev' : 'next'), (n.touchesDirection = b > 0 ? 'prev' : 'next')
	const v = n.params.loop && !i.cssMode
	if (!s.isMoved) {
		if ((v && n.loopFix({direction: n.swipeDirection}), (s.startTranslate = n.getTranslate()), n.setTransition(0), n.animating)) {
			const A = new window.CustomEvent('transitionend', {bubbles: !0, cancelable: !0})
			n.wrapperEl.dispatchEvent(A)
		}
		;(s.allowMomentumBounce = !1), i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit('sliderFirstMove', l)
	}
	let S
	s.isMoved && f !== n.touchesDirection && v && Math.abs(h) >= 1 && (n.loopFix({direction: n.swipeDirection, setTranslate: !0}), (S = !0)), n.emit('sliderMove', l), (s.isMoved = !0), (s.currentTranslate = h + s.startTranslate)
	let x = !0,
		P = i.resistanceRatio
	if (
		(i.touchReleaseOnEdges && (P = 0),
		h > 0 ? (v && !S && s.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) && n.loopFix({direction: 'prev', setTranslate: !0, activeSlideIndex: 0}), s.currentTranslate > n.minTranslate() && ((x = !1), i.resistance && (s.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + h) ** P))) : h < 0 && (v && !S && s.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) && n.loopFix({direction: 'next', setTranslate: !0, activeSlideIndex: n.slides.length - (i.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))}), s.currentTranslate < n.maxTranslate() && ((x = !1), i.resistance && (s.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - h) ** P))),
		x && (l.preventedByNestedSwiper = !0),
		!n.allowSlideNext && n.swipeDirection === 'next' && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
		!n.allowSlidePrev && n.swipeDirection === 'prev' && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
		!n.allowSlidePrev && !n.allowSlideNext && (s.currentTranslate = s.startTranslate),
		i.threshold > 0)
	)
		if (Math.abs(h) > i.threshold || s.allowThresholdMove) {
			if (!s.allowThresholdMove) {
				;(s.allowThresholdMove = !0), (a.startX = a.currentX), (a.startY = a.currentY), (s.currentTranslate = s.startTranslate), (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
				return
			}
		} else {
			s.currentTranslate = s.startTranslate
			return
		}
	!i.followFinger || i.cssMode || (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(s.currentTranslate), n.setTranslate(s.currentTranslate))
}
function Ha(e) {
	const t = this,
		n = t.touchEventsData,
		s = n.evCache.findIndex(S => S.pointerId === e.pointerId)
	if ((s >= 0 && n.evCache.splice(s, 1), ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type) && !(e.type === 'pointercancel' && (t.browser.isSafari || t.browser.isWebView)))) return
	const {params: i, touches: a, rtlTranslate: r, slidesGrid: o, enabled: l} = t
	if (!l || (!i.simulateTouch && e.pointerType === 'mouse')) return
	let d = e
	if ((d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit('touchEnd', d), (n.allowTouchCallbacks = !1), !n.isTouched)) {
		n.isMoved && i.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1)
		return
	}
	i.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1)
	const c = W(),
		u = c - n.touchStartTime
	if (t.allowClick) {
		const S = d.path || (d.composedPath && d.composedPath())
		t.updateClickedSlide((S && S[0]) || d.target), t.emit('tap click', d), u < 300 && c - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', d)
	}
	if (
		((n.lastClickTime = W()),
		ce(() => {
			t.destroyed || (t.allowClick = !0)
		}),
		!n.isTouched || !n.isMoved || !t.swipeDirection || a.diff === 0 || n.currentTranslate === n.startTranslate)
	) {
		;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
		return
	}
	;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
	let p
	if ((i.followFinger ? (p = r ? t.translate : -t.translate) : (p = -n.currentTranslate), i.cssMode)) return
	if (t.params.freeMode && i.freeMode.enabled) {
		t.freeMode.onTouchEnd({currentPos: p})
		return
	}
	let g = 0,
		m = t.slidesSizesGrid[0]
	for (let S = 0; S < o.length; S += S < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
		const x = S < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
		typeof o[S + x] < 'u' ? p >= o[S] && p < o[S + x] && ((g = S), (m = o[S + x] - o[S])) : p >= o[S] && ((g = S), (m = o[o.length - 1] - o[o.length - 2]))
	}
	let h = null,
		b = null
	i.rewind && (t.isBeginning ? (b = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (h = 0))
	const f = (p - o[g]) / m,
		v = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
	if (u > i.longSwipesMs) {
		if (!i.longSwipes) {
			t.slideTo(t.activeIndex)
			return
		}
		t.swipeDirection === 'next' && (f >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? h : g + v) : t.slideTo(g)), t.swipeDirection === 'prev' && (f > 1 - i.longSwipesRatio ? t.slideTo(g + v) : b !== null && f < 0 && Math.abs(f) > i.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
	} else {
		if (!i.shortSwipes) {
			t.slideTo(t.activeIndex)
			return
		}
		t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? (d.target === t.navigation.nextEl ? t.slideTo(g + v) : t.slideTo(g)) : (t.swipeDirection === 'next' && t.slideTo(h !== null ? h : g + v), t.swipeDirection === 'prev' && t.slideTo(b !== null ? b : g))
	}
}
function Ft() {
	const e = this,
		{params: t, el: n} = e
	if (n && n.offsetWidth === 0) return
	t.breakpoints && e.setBreakpoint()
	const {allowSlideNext: s, allowSlidePrev: i, snapGrid: a} = e,
		r = e.virtual && e.params.virtual.enabled
	;(e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses()
	const o = r && t.loop
	;(t.slidesPerView === 'auto' || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !o ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !r ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
		e.autoplay &&
			e.autoplay.running &&
			e.autoplay.paused &&
			(clearTimeout(e.autoplay.resizeTimeout),
			(e.autoplay.resizeTimeout = setTimeout(() => {
				e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
			}, 500))),
		(e.allowSlidePrev = i),
		(e.allowSlideNext = s),
		e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
}
function Fa(e) {
	const t = this
	t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}
function Ga() {
	const e = this,
		{wrapperEl: t, rtlTranslate: n, enabled: s} = e
	if (!s) return
	;(e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses()
	let i
	const a = e.maxTranslate() - e.minTranslate()
	a === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / a), i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit('setTranslate', e.translate, !1)
}
function Xa(e) {
	const t = this
	Re(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) && t.update()
}
let Gt = !1
function qa() {}
const gn = (e, t) => {
	const n = q(),
		{params: s, el: i, wrapperEl: a, device: r} = e,
		o = !!s.nested,
		l = t === 'on' ? 'addEventListener' : 'removeEventListener',
		d = t
	i[l]('pointerdown', e.onTouchStart, {passive: !1}), n[l]('pointermove', e.onTouchMove, {passive: !1, capture: o}), n[l]('pointerup', e.onTouchEnd, {passive: !0}), n[l]('pointercancel', e.onTouchEnd, {passive: !0}), n[l]('pointerout', e.onTouchEnd, {passive: !0}), n[l]('pointerleave', e.onTouchEnd, {passive: !0}), (s.preventClicks || s.preventClicksPropagation) && i[l]('click', e.onClick, !0), s.cssMode && a[l]('scroll', e.onScroll), s.updateOnWindowResize ? e[d](r.ios || r.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Ft, !0) : e[d]('observerUpdate', Ft, !0), i[l]('load', e.onLoad, {capture: !0})
}
function Va() {
	const e = this,
		t = q(),
		{params: n} = e
	;(e.onTouchStart = wa.bind(e)), (e.onTouchMove = Na.bind(e)), (e.onTouchEnd = Ha.bind(e)), n.cssMode && (e.onScroll = Ga.bind(e)), (e.onClick = Fa.bind(e)), (e.onLoad = Xa.bind(e)), Gt || (t.addEventListener('touchstart', qa), (Gt = !0)), gn(e, 'on')
}
function Ya() {
	gn(this, 'off')
}
const ja = {attachEvents: Va, detachEvents: Ya},
	Xt = (e, t) => e.grid && t.grid && t.grid.rows > 1
function Wa() {
	const e = this,
		{realIndex: t, initialized: n, params: s, el: i} = e,
		a = s.breakpoints
	if (!a || (a && Object.keys(a).length === 0)) return
	const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
	if (!r || e.currentBreakpoint === r) return
	const l = (r in a ? a[r] : void 0) || e.originalParams,
		d = Xt(e, s),
		c = Xt(e, l),
		u = s.enabled
	d && !c ? (i.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (i.classList.add(`${s.containerModifierClass}grid`), ((l.grid.fill && l.grid.fill === 'column') || (!l.grid.fill && s.grid.fill === 'column')) && i.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()),
		['navigation', 'pagination', 'scrollbar'].forEach(h => {
			const b = s[h] && s[h].enabled,
				f = l[h] && l[h].enabled
			b && !f && e[h].disable(), !b && f && e[h].enable()
		})
	const p = l.direction && l.direction !== s.direction,
		g = s.loop && (l.slidesPerView !== s.slidesPerView || p)
	p && n && e.changeDirection(), j(e.params, l)
	const m = e.params.enabled
	Object.assign(e, {allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev}), u && !m ? e.disable() : !u && m && e.enable(), (e.currentBreakpoint = r), e.emit('_beforeBreakpoint', l), g && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit('breakpoint', l)
}
function Ua(e, t = 'window', n) {
	if (!e || (t === 'container' && !n)) return
	let s = !1
	const i = F(),
		a = t === 'window' ? i.innerHeight : n.clientHeight,
		r = Object.keys(e).map(o => {
			if (typeof o == 'string' && o.indexOf('@') === 0) {
				const l = parseFloat(o.substr(1))
				return {value: a * l, point: o}
			}
			return {value: o, point: o}
		})
	r.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10))
	for (let o = 0; o < r.length; o += 1) {
		const {point: l, value: d} = r[o]
		t === 'window' ? i.matchMedia(`(min-width: ${d}px)`).matches && (s = l) : d <= n.clientWidth && (s = l)
	}
	return s || 'max'
}
const Ka = {setBreakpoint: Wa, getBreakpoint: Ua}
function Ja(e, t) {
	const n = []
	return (
		e.forEach(s => {
			typeof s == 'object'
				? Object.keys(s).forEach(i => {
						s[i] && n.push(t + i)
				  })
				: typeof s == 'string' && n.push(t + s)
		}),
		n
	)
}
function Za() {
	const e = this,
		{classNames: t, params: n, rtl: s, el: i, device: a} = e,
		r = Ja(['initialized', n.direction, {'free-mode': e.params.freeMode && n.freeMode.enabled}, {autoheight: n.autoHeight}, {rtl: s}, {grid: n.grid && n.grid.rows > 1}, {'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column'}, {android: a.android}, {ios: a.ios}, {'css-mode': n.cssMode}, {centered: n.cssMode && n.centeredSlides}, {'watch-progress': n.watchSlidesProgress}], n.containerModifierClass)
	t.push(...r), i.classList.add(...t), e.emitContainerClasses()
}
function Qa() {
	const e = this,
		{el: t, classNames: n} = e
	t.classList.remove(...n), e.emitContainerClasses()
}
const ei = {addClasses: Za, removeClasses: Qa}
function ti() {
	const e = this,
		{isLocked: t, params: n} = e,
		{slidesOffsetBefore: s} = n
	if (s) {
		const i = e.slides.length - 1,
			a = e.slidesGrid[i] + e.slidesSizesGrid[i] + s * 2
		e.isLocked = e.size > a
	} else e.isLocked = e.snapGrid.length === 1
	n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
const ni = {checkOverflow: ti},
	qt = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopedSlides: null,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	}
function si(e, t) {
	return function (s = {}) {
		const i = Object.keys(s)[0],
			a = s[i]
		if (typeof a != 'object' || a === null) {
			j(t, s)
			return
		}
		if ((['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 && e[i] === !0 && (e[i] = {auto: !0}), !(i in e && 'enabled' in a))) {
			j(t, s)
			return
		}
		e[i] === !0 && (e[i] = {enabled: !0}), typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), j(t, s)
	}
}
const rt = {eventsEmitter: ea, update: ua, translate: va, transition: Ea, slide: Oa, loop: ka, grabCursor: Ba, events: ja, breakpoints: Ka, checkOverflow: ni, classes: ei},
	ot = {}
class Y {
	constructor(...t) {
		let n, s
		t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === 'Object' ? (s = t[0]) : ([n, s] = t), s || (s = {}), (s = j({}, s)), n && !s.el && (s.el = n)
		const i = q()
		if (s.el && typeof s.el == 'string' && i.querySelectorAll(s.el).length > 1) {
			const l = []
			return (
				i.querySelectorAll(s.el).forEach(d => {
					const c = j({}, s, {el: d})
					l.push(new Y(c))
				}),
				l
			)
		}
		const a = this
		;(a.__swiper__ = !0), (a.support = pn()), (a.device = Us({userAgent: s.userAgent})), (a.browser = Js()), (a.eventsListeners = {}), (a.eventsAnyListeners = []), (a.modules = [...a.__modules__]), s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules)
		const r = {}
		a.modules.forEach(l => {
			l({params: s, swiper: a, extendParams: si(s, r), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a)})
		})
		const o = j({}, qt, r)
		return (
			(a.params = j({}, o, ot, s)),
			(a.originalParams = j({}, a.params)),
			(a.passedParams = j({}, s)),
			a.params &&
				a.params.on &&
				Object.keys(a.params.on).forEach(l => {
					a.on(l, a.params.on[l])
				}),
			a.params && a.params.onAny && a.onAny(a.params.onAny),
			Object.assign(a, {
				enabled: a.params.enabled,
				el: n,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return a.params.direction === 'horizontal'
				},
				isVertical() {
					return a.params.direction === 'vertical'
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: a.params.allowSlideNext,
				allowSlidePrev: a.params.allowSlidePrev,
				touchEventsData: {isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: a.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, evCache: []},
				allowClick: !0,
				allowTouchMove: a.params.allowTouchMove,
				touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			a.emit('_swiper'),
			a.params.init && a.init(),
			a
		)
	}
	getSlideIndex(t) {
		const {slidesEl: n, params: s} = this,
			i = X(n, `.${s.slideClass}, swiper-slide`),
			a = Ce(i[0])
		return Ce(t) - a
	}
	getSlideIndexByData(t) {
		return this.getSlideIndex(this.slides.filter(n => n.getAttribute('data-swiper-slide-index') * 1 === t)[0])
	}
	recalcSlides() {
		const t = this,
			{slidesEl: n, params: s} = t
		t.slides = X(n, `.${s.slideClass}, swiper-slide`)
	}
	enable() {
		const t = this
		t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'))
	}
	disable() {
		const t = this
		t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'))
	}
	setProgress(t, n) {
		const s = this
		t = Math.min(Math.max(t, 0), 1)
		const i = s.minTranslate(),
			r = (s.maxTranslate() - i) * t + i
		s.translateTo(r, typeof n > 'u' ? 0 : n), s.updateActiveIndex(), s.updateSlidesClasses()
	}
	emitContainerClasses() {
		const t = this
		if (!t.params._emitClasses || !t.el) return
		const n = t.el.className.split(' ').filter(s => s.indexOf('swiper') === 0 || s.indexOf(t.params.containerModifierClass) === 0)
		t.emit('_containerClasses', n.join(' '))
	}
	getSlideClasses(t) {
		const n = this
		return n.destroyed
			? ''
			: t.className
					.split(' ')
					.filter(s => s.indexOf('swiper-slide') === 0 || s.indexOf(n.params.slideClass) === 0)
					.join(' ')
	}
	emitSlidesClasses() {
		const t = this
		if (!t.params._emitClasses || !t.el) return
		const n = []
		t.slides.forEach(s => {
			const i = t.getSlideClasses(s)
			n.push({slideEl: s, classNames: i}), t.emit('_slideClass', s, i)
		}),
			t.emit('_slideClasses', n)
	}
	slidesPerViewDynamic(t = 'current', n = !1) {
		const s = this,
			{params: i, slides: a, slidesGrid: r, slidesSizesGrid: o, size: l, activeIndex: d} = s
		let c = 1
		if (i.centeredSlides) {
			let u = a[d].swiperSlideSize,
				p
			for (let g = d + 1; g < a.length; g += 1) a[g] && !p && ((u += a[g].swiperSlideSize), (c += 1), u > l && (p = !0))
			for (let g = d - 1; g >= 0; g -= 1) a[g] && !p && ((u += a[g].swiperSlideSize), (c += 1), u > l && (p = !0))
		} else if (t === 'current') for (let u = d + 1; u < a.length; u += 1) (n ? r[u] + o[u] - r[d] < l : r[u] - r[d] < l) && (c += 1)
		else for (let u = d - 1; u >= 0; u -= 1) r[d] - r[u] < l && (c += 1)
		return c
	}
	update() {
		const t = this
		if (!t || t.destroyed) return
		const {snapGrid: n, params: s} = t
		s.breakpoints && t.setBreakpoint(),
			[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r => {
				r.complete && Re(t, r)
			}),
			t.updateSize(),
			t.updateSlides(),
			t.updateProgress(),
			t.updateSlidesClasses()
		function i() {
			const r = t.rtlTranslate ? t.translate * -1 : t.translate,
				o = Math.min(Math.max(r, t.maxTranslate()), t.minTranslate())
			t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses()
		}
		let a
		if (t.params.freeMode && t.params.freeMode.enabled) i(), t.params.autoHeight && t.updateAutoHeight()
		else {
			if ((t.params.slidesPerView === 'auto' || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides) {
				const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides : t.slides
				a = t.slideTo(r.length - 1, 0, !1, !0)
			} else a = t.slideTo(t.activeIndex, 0, !1, !0)
			a || i()
		}
		s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update')
	}
	changeDirection(t, n = !0) {
		const s = this,
			i = s.params.direction
		return (
			t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
			t === i ||
				(t !== 'horizontal' && t !== 'vertical') ||
				(s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
				s.el.classList.add(`${s.params.containerModifierClass}${t}`),
				s.emitContainerClasses(),
				(s.params.direction = t),
				s.slides.forEach(a => {
					t === 'vertical' ? (a.style.width = '') : (a.style.height = '')
				}),
				s.emit('changeDirection'),
				n && s.update()),
			s
		)
	}
	changeLanguageDirection(t) {
		const n = this
		;(n.rtl && t === 'rtl') || (!n.rtl && t === 'ltr') || ((n.rtl = t === 'rtl'), (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl), n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'rtl')) : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'ltr')), n.update())
	}
	mount(t) {
		const n = this
		if (n.mounted) return !0
		let s = t || n.params.el
		if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1
		;(s.swiper = n), s.shadowEl && (n.isElement = !0)
		const i = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
		let r = (() => (s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : X(s, i())[0]))()
		return (
			!r &&
				n.params.createElements &&
				((r = K('div', n.params.wrapperClass)),
				s.append(r),
				X(s, `.${n.params.slideClass}`).forEach(o => {
					r.append(o)
				})),
			Object.assign(n, {el: s, wrapperEl: r, slidesEl: n.isElement ? s : r, mounted: !0, rtl: s.dir.toLowerCase() === 'rtl' || ae(s, 'direction') === 'rtl', rtlTranslate: n.params.direction === 'horizontal' && (s.dir.toLowerCase() === 'rtl' || ae(s, 'direction') === 'rtl'), wrongRTL: ae(r, 'display') === '-webkit-box'}),
			!0
		)
	}
	init(t) {
		const n = this
		return (
			n.initialized ||
				n.mount(t) === !1 ||
				(n.emit('beforeInit'),
				n.params.breakpoints && n.setBreakpoint(),
				n.addClasses(),
				n.updateSize(),
				n.updateSlides(),
				n.params.watchOverflow && n.checkOverflow(),
				n.params.grabCursor && n.enabled && n.setGrabCursor(),
				n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
				n.params.loop && n.loopCreate(),
				n.attachEvents(),
				[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i => {
					i.complete
						? Re(n, i)
						: i.addEventListener('load', a => {
								Re(n, a.target)
						  })
				}),
				gt(n),
				(n.initialized = !0),
				gt(n),
				n.emit('init'),
				n.emit('afterInit')),
			n
		)
	}
	destroy(t = !0, n = !0) {
		const s = this,
			{params: i, el: a, wrapperEl: r, slides: o} = s
		return (
			typeof s.params > 'u' ||
				s.destroyed ||
				(s.emit('beforeDestroy'),
				(s.initialized = !1),
				s.detachEvents(),
				i.loop && s.loopDestroy(),
				n &&
					(s.removeClasses(),
					a.removeAttribute('style'),
					r.removeAttribute('style'),
					o &&
						o.length &&
						o.forEach(l => {
							l.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), l.removeAttribute('style'), l.removeAttribute('data-swiper-slide-index')
						})),
				s.emit('destroy'),
				Object.keys(s.eventsListeners).forEach(l => {
					s.off(l)
				}),
				t !== !1 && ((s.el.swiper = null), Gs(s)),
				(s.destroyed = !0)),
			null
		)
	}
	static extendDefaults(t) {
		j(ot, t)
	}
	static get extendedDefaults() {
		return ot
	}
	static get defaults() {
		return qt
	}
	static installModule(t) {
		Y.prototype.__modules__ || (Y.prototype.__modules__ = [])
		const n = Y.prototype.__modules__
		typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
	}
	static use(t) {
		return Array.isArray(t) ? (t.forEach(n => Y.installModule(n)), Y) : (Y.installModule(t), Y)
	}
}
Object.keys(rt).forEach(e => {
	Object.keys(rt[e]).forEach(t => {
		Y.prototype[t] = rt[e][t]
	})
})
Y.use([Zs, Qs])
function ai({swiper: e, extendParams: t, on: n, emit: s}) {
	t({virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0}})
	let i
	const a = q()
	e.virtual = {cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: []}
	const r = a.createElement('div')
	function o(g, m) {
		const h = e.params.virtual
		if (h.cache && e.virtual.cache[m]) return e.virtual.cache[m]
		let b
		return h.renderSlide ? ((b = h.renderSlide.call(e, g, m)), typeof b == 'string' && ((r.innerHTML = b), (b = r.children[0]))) : e.isElement ? (b = K('swiper-slide')) : (b = K('div', e.params.slideClass)), b.setAttribute('data-swiper-slide-index', m), h.renderSlide || (b.innerHTML = g), h.cache && (e.virtual.cache[m] = b), b
	}
	function l(g) {
		const {slidesPerView: m, slidesPerGroup: h, centeredSlides: b, loop: f} = e.params,
			{addSlidesBefore: v, addSlidesAfter: S} = e.params.virtual,
			{from: x, to: P, slides: A, slidesGrid: k, offset: I} = e.virtual
		e.params.cssMode || e.updateActiveIndex()
		const $ = e.activeIndex || 0
		let R
		e.rtlTranslate ? (R = 'right') : (R = e.isHorizontal() ? 'left' : 'top')
		let M, E
		b ? ((M = Math.floor(m / 2) + h + S), (E = Math.floor(m / 2) + h + v)) : ((M = m + (h - 1) + S), (E = (f ? m : h) + v))
		let y = $ - E,
			T = $ + M
		f || ((y = Math.max(y, 0)), (T = Math.min(T, A.length - 1)))
		let D = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0)
		f && $ >= E ? ((y -= E), b || (D += e.slidesGrid[0])) : f && $ < E && ((y = -E), b && (D += e.slidesGrid[0])), Object.assign(e.virtual, {from: y, to: T, offset: D, slidesGrid: e.slidesGrid, slidesBefore: E, slidesAfter: M})
		function C() {
			e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s('virtualUpdate')
		}
		if (x === y && P === T && !g) {
			e.slidesGrid !== k &&
				D !== I &&
				e.slides.forEach(B => {
					B.style[R] = `${D - Math.abs(e.cssOverflowAdjustment())}px`
				}),
				e.updateProgress(),
				s('virtualUpdate')
			return
		}
		if (e.params.virtual.renderExternal) {
			e.params.virtual.renderExternal.call(e, {
				offset: D,
				from: y,
				to: T,
				slides: (function () {
					const N = []
					for (let J = y; J <= T; J += 1) N.push(A[J])
					return N
				})(),
			}),
				e.params.virtual.renderExternalUpdate ? C() : s('virtualUpdate')
			return
		}
		const z = [],
			O = [],
			_ = B => {
				let N = B
				return B < 0 ? (N = A.length + B) : N >= A.length && (N = N - A.length), N
			}
		if (g)
			e.slidesEl.querySelectorAll(`.${e.params.slideClass}, swiper-slide`).forEach(B => {
				B.remove()
			})
		else
			for (let B = x; B <= P; B += 1)
				if (B < y || B > T) {
					const N = _(B)
					e.slidesEl.querySelectorAll(`.${e.params.slideClass}[data-swiper-slide-index="${N}"], swiper-slide[data-swiper-slide-index="${N}"]`).forEach(J => {
						J.remove()
					})
				}
		const H = f ? -A.length : 0,
			V = f ? A.length * 2 : A.length
		for (let B = H; B < V; B += 1)
			if (B >= y && B <= T) {
				const N = _(B)
				typeof P > 'u' || g ? O.push(N) : (B > P && O.push(N), B < x && z.push(N))
			}
		if (
			(O.forEach(B => {
				e.slidesEl.append(o(A[B], B))
			}),
			f)
		)
			for (let B = z.length - 1; B >= 0; B -= 1) {
				const N = z[B]
				e.slidesEl.prepend(o(A[N], N))
			}
		else
			z.sort((B, N) => N - B),
				z.forEach(B => {
					e.slidesEl.prepend(o(A[B], B))
				})
		X(e.slidesEl, '.swiper-slide, swiper-slide').forEach(B => {
			B.style[R] = `${D - Math.abs(e.cssOverflowAdjustment())}px`
		}),
			C()
	}
	function d(g) {
		if (typeof g == 'object' && 'length' in g) for (let m = 0; m < g.length; m += 1) g[m] && e.virtual.slides.push(g[m])
		else e.virtual.slides.push(g)
		l(!0)
	}
	function c(g) {
		const m = e.activeIndex
		let h = m + 1,
			b = 1
		if (Array.isArray(g)) {
			for (let f = 0; f < g.length; f += 1) g[f] && e.virtual.slides.unshift(g[f])
			;(h = m + g.length), (b = g.length)
		} else e.virtual.slides.unshift(g)
		if (e.params.virtual.cache) {
			const f = e.virtual.cache,
				v = {}
			Object.keys(f).forEach(S => {
				const x = f[S],
					P = x.getAttribute('data-swiper-slide-index')
				P && x.setAttribute('data-swiper-slide-index', parseInt(P, 10) + b), (v[parseInt(S, 10) + b] = x)
			}),
				(e.virtual.cache = v)
		}
		l(!0), e.slideTo(h, 0)
	}
	function u(g) {
		if (typeof g > 'u' || g === null) return
		let m = e.activeIndex
		if (Array.isArray(g)) for (let h = g.length - 1; h >= 0; h -= 1) e.virtual.slides.splice(g[h], 1), e.params.virtual.cache && delete e.virtual.cache[g[h]], g[h] < m && (m -= 1), (m = Math.max(m, 0))
		else e.virtual.slides.splice(g, 1), e.params.virtual.cache && delete e.virtual.cache[g], g < m && (m -= 1), (m = Math.max(m, 0))
		l(!0), e.slideTo(m, 0)
	}
	function p() {
		;(e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), l(!0), e.slideTo(0, 0)
	}
	n('beforeInit', () => {
		if (!e.params.virtual.enabled) return
		let g
		if (typeof e.passedParams.virtual.slides > 'u') {
			const m = [...e.slidesEl.children].filter(h => h.matches(`.${e.params.slideClass}, swiper-slide`))
			m &&
				m.length &&
				((e.virtual.slides = [...m]),
				(g = !0),
				m.forEach((h, b) => {
					h.setAttribute('data-swiper-slide-index', b), (e.virtual.cache[b] = h), h.remove()
				}))
		}
		g || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0), e.params.initialSlide || l()
	}),
		n('setTranslate', () => {
			e.params.virtual.enabled &&
				(e.params.cssMode && !e._immediateVirtual
					? (clearTimeout(i),
					  (i = setTimeout(() => {
							l()
					  }, 100)))
					: l())
		}),
		n('init update resize', () => {
			e.params.virtual.enabled && e.params.cssMode && Se(e.wrapperEl, '--swiper-virtual-size', `${e.virtualSize}px`)
		}),
		Object.assign(e.virtual, {appendSlide: d, prependSlide: c, removeSlide: u, removeAllSlides: p, update: l})
}
function ii({swiper: e, extendParams: t, on: n, emit: s}) {
	const i = q(),
		a = F()
	;(e.keyboard = {enabled: !1}), t({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}})
	function r(d) {
		if (!e.enabled) return
		const {rtlTranslate: c} = e
		let u = d
		u.originalEvent && (u = u.originalEvent)
		const p = u.keyCode || u.charCode,
			g = e.params.keyboard.pageUpDown,
			m = g && p === 33,
			h = g && p === 34,
			b = p === 37,
			f = p === 39,
			v = p === 38,
			S = p === 40
		if ((!e.allowSlideNext && ((e.isHorizontal() && f) || (e.isVertical() && S) || h)) || (!e.allowSlidePrev && ((e.isHorizontal() && b) || (e.isVertical() && v) || m))) return !1
		if (!(u.shiftKey || u.altKey || u.ctrlKey || u.metaKey) && !(i.activeElement && i.activeElement.nodeName && (i.activeElement.nodeName.toLowerCase() === 'input' || i.activeElement.nodeName.toLowerCase() === 'textarea'))) {
			if (e.params.keyboard.onlyInViewport && (m || h || b || f || v || S)) {
				let x = !1
				if (le(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && le(e.el, `.${e.params.slideActiveClass}`).length === 0) return
				const P = e.el,
					A = P.clientWidth,
					k = P.clientHeight,
					I = a.innerWidth,
					$ = a.innerHeight,
					R = _e(P)
				c && (R.left -= P.scrollLeft)
				const M = [
					[R.left, R.top],
					[R.left + A, R.top],
					[R.left, R.top + k],
					[R.left + A, R.top + k],
				]
				for (let E = 0; E < M.length; E += 1) {
					const y = M[E]
					if (y[0] >= 0 && y[0] <= I && y[1] >= 0 && y[1] <= $) {
						if (y[0] === 0 && y[1] === 0) continue
						x = !0
					}
				}
				if (!x) return
			}
			e.isHorizontal() ? ((m || h || b || f) && (u.preventDefault ? u.preventDefault() : (u.returnValue = !1)), (((h || f) && !c) || ((m || b) && c)) && e.slideNext(), (((m || b) && !c) || ((h || f) && c)) && e.slidePrev()) : ((m || h || v || S) && (u.preventDefault ? u.preventDefault() : (u.returnValue = !1)), (h || S) && e.slideNext(), (m || v) && e.slidePrev()), s('keyPress', p)
		}
	}
	function o() {
		e.keyboard.enabled || (i.addEventListener('keydown', r), (e.keyboard.enabled = !0))
	}
	function l() {
		e.keyboard.enabled && (i.removeEventListener('keydown', r), (e.keyboard.enabled = !1))
	}
	n('init', () => {
		e.params.keyboard.enabled && o()
	}),
		n('destroy', () => {
			e.keyboard.enabled && l()
		}),
		Object.assign(e.keyboard, {enable: o, disable: l})
}
function ri({swiper: e, extendParams: t, on: n, emit: s}) {
	const i = F()
	t({mousewheel: {enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: 'container', thresholdDelta: null, thresholdTime: null, noMousewheelClass: 'swiper-no-mousewheel'}}), (e.mousewheel = {enabled: !1})
	let a,
		r = W(),
		o
	const l = []
	function d(v) {
		let A = 0,
			k = 0,
			I = 0,
			$ = 0
		return 'detail' in v && (k = v.detail), 'wheelDelta' in v && (k = -v.wheelDelta / 120), 'wheelDeltaY' in v && (k = -v.wheelDeltaY / 120), 'wheelDeltaX' in v && (A = -v.wheelDeltaX / 120), 'axis' in v && v.axis === v.HORIZONTAL_AXIS && ((A = k), (k = 0)), (I = A * 10), ($ = k * 10), 'deltaY' in v && ($ = v.deltaY), 'deltaX' in v && (I = v.deltaX), v.shiftKey && !I && ((I = $), ($ = 0)), (I || $) && v.deltaMode && (v.deltaMode === 1 ? ((I *= 40), ($ *= 40)) : ((I *= 800), ($ *= 800))), I && !A && (A = I < 1 ? -1 : 1), $ && !k && (k = $ < 1 ? -1 : 1), {spinX: A, spinY: k, pixelX: I, pixelY: $}
	}
	function c() {
		e.enabled && (e.mouseEntered = !0)
	}
	function u() {
		e.enabled && (e.mouseEntered = !1)
	}
	function p(v) {
		return (e.params.mousewheel.thresholdDelta && v.delta < e.params.mousewheel.thresholdDelta) || (e.params.mousewheel.thresholdTime && W() - r < e.params.mousewheel.thresholdTime) ? !1 : v.delta >= 6 && W() - r < 60 ? !0 : (v.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), s('scroll', v.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), s('scroll', v.raw)), (r = new i.Date().getTime()), !1)
	}
	function g(v) {
		const S = e.params.mousewheel
		if (v.direction < 0) {
			if (e.isEnd && !e.params.loop && S.releaseOnEdges) return !0
		} else if (e.isBeginning && !e.params.loop && S.releaseOnEdges) return !0
		return !1
	}
	function m(v) {
		let S = v,
			x = !0
		if (!e.enabled || v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return
		const P = e.params.mousewheel
		e.params.cssMode && S.preventDefault()
		let A = e.el
		e.params.mousewheel.eventsTarget !== 'container' && (A = document.querySelector(e.params.mousewheel.eventsTarget))
		const k = A && A.contains(S.target)
		if (!e.mouseEntered && !k && !P.releaseOnEdges) return !0
		S.originalEvent && (S = S.originalEvent)
		let I = 0
		const $ = e.rtlTranslate ? -1 : 1,
			R = d(S)
		if (P.forceToAxis)
			if (e.isHorizontal())
				if (Math.abs(R.pixelX) > Math.abs(R.pixelY)) I = -R.pixelX * $
				else return !0
			else if (Math.abs(R.pixelY) > Math.abs(R.pixelX)) I = -R.pixelY
			else return !0
		else I = Math.abs(R.pixelX) > Math.abs(R.pixelY) ? -R.pixelX * $ : -R.pixelY
		if (I === 0) return !0
		P.invert && (I = -I)
		let M = e.getTranslate() + I * P.sensitivity
		if ((M >= e.minTranslate() && (M = e.minTranslate()), M <= e.maxTranslate() && (M = e.maxTranslate()), (x = e.params.loop ? !0 : !(M === e.minTranslate() || M === e.maxTranslate())), x && e.params.nested && S.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled)) {
			const E = {time: W(), delta: Math.abs(I), direction: Math.sign(I), raw: v}
			l.length >= 2 && l.shift()
			const y = l.length ? l[l.length - 1] : void 0
			if ((l.push(E), y ? (E.direction !== y.direction || E.delta > y.delta || E.time > y.time + 150) && p(E) : p(E), g(E))) return !0
		} else {
			const E = {time: W(), delta: Math.abs(I), direction: Math.sign(I)},
				y = o && E.time < o.time + 500 && E.delta <= o.delta && E.direction === o.direction
			if (!y) {
				o = void 0
				let T = e.getTranslate() + I * P.sensitivity
				const D = e.isBeginning,
					C = e.isEnd
				if ((T >= e.minTranslate() && (T = e.minTranslate()), T <= e.maxTranslate() && (T = e.maxTranslate()), e.setTransition(0), e.setTranslate(T), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), ((!D && e.isBeginning) || (!C && e.isEnd)) && e.updateSlidesClasses(), e.params.loop && e.loopFix({direction: E.direction < 0 ? 'next' : 'prev', byMousewheel: !0}), e.params.freeMode.sticky)) {
					clearTimeout(a), (a = void 0), l.length >= 15 && l.shift()
					const z = l.length ? l[l.length - 1] : void 0,
						O = l[0]
					if ((l.push(E), z && (E.delta > z.delta || E.direction !== z.direction))) l.splice(0)
					else if (l.length >= 15 && E.time - O.time < 500 && O.delta - E.delta >= 1 && E.delta <= 6) {
						const _ = I > 0 ? 0.8 : 0.2
						;(o = E),
							l.splice(0),
							(a = ce(() => {
								e.slideToClosest(e.params.speed, !0, void 0, _)
							}, 0))
					}
					a ||
						(a = ce(() => {
							;(o = E), l.splice(0), e.slideToClosest(e.params.speed, !0, void 0, 0.5)
						}, 500))
				}
				if ((y || s('scroll', S), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), T === e.minTranslate() || T === e.maxTranslate())) return !0
			}
		}
		return S.preventDefault ? S.preventDefault() : (S.returnValue = !1), !1
	}
	function h(v) {
		let S = e.el
		e.params.mousewheel.eventsTarget !== 'container' && (S = document.querySelector(e.params.mousewheel.eventsTarget)), S[v]('mouseenter', c), S[v]('mouseleave', u), S[v]('wheel', m)
	}
	function b() {
		return e.params.cssMode ? (e.wrapperEl.removeEventListener('wheel', m), !0) : e.mousewheel.enabled ? !1 : (h('addEventListener'), (e.mousewheel.enabled = !0), !0)
	}
	function f() {
		return e.params.cssMode ? (e.wrapperEl.addEventListener(event, m), !0) : e.mousewheel.enabled ? (h('removeEventListener'), (e.mousewheel.enabled = !1), !0) : !1
	}
	n('init', () => {
		!e.params.mousewheel.enabled && e.params.cssMode && f(), e.params.mousewheel.enabled && b()
	}),
		n('destroy', () => {
			e.params.cssMode && b(), e.mousewheel.enabled && f()
		}),
		Object.assign(e.mousewheel, {enable: b, disable: f})
}
function xt(e, t, n, s) {
	return (
		e.params.createElements &&
			Object.keys(s).forEach(i => {
				if (!n[i] && n.auto === !0) {
					let a = X(e.el, `.${s[i]}`)[0]
					a || ((a = K('div', s[i])), (a.className = s[i]), e.el.append(a)), (n[i] = a), (t[i] = a)
				}
			}),
		n
	)
}
function oi({swiper: e, extendParams: t, on: n, emit: s}) {
	t({navigation: {nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: 'swiper-button-disabled', hiddenClass: 'swiper-button-hidden', lockClass: 'swiper-button-lock', navigationDisabledClass: 'swiper-navigation-disabled'}}), (e.navigation = {nextEl: null, prevEl: null})
	const i = m => (Array.isArray(m) || (m = [m].filter(h => !!h)), m)
	function a(m) {
		let h
		return m && typeof m == 'string' && e.isElement && ((h = e.el.shadowRoot.querySelector(m)), h) ? h : (m && (typeof m == 'string' && (h = [...document.querySelectorAll(m)]), e.params.uniqueNavElements && typeof m == 'string' && h.length > 1 && e.el.querySelectorAll(m).length === 1 && (h = e.el.querySelector(m))), m && !h ? m : h)
	}
	function r(m, h) {
		const b = e.params.navigation
		;(m = i(m)),
			m.forEach(f => {
				f && (f.classList[h ? 'add' : 'remove'](...b.disabledClass.split(' ')), f.tagName === 'BUTTON' && (f.disabled = h), e.params.watchOverflow && e.enabled && f.classList[e.isLocked ? 'add' : 'remove'](b.lockClass))
			})
	}
	function o() {
		const {nextEl: m, prevEl: h} = e.navigation
		if (e.params.loop) {
			r(h, !1), r(m, !1)
			return
		}
		r(h, e.isBeginning && !e.params.rewind), r(m, e.isEnd && !e.params.rewind)
	}
	function l(m) {
		m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), s('navigationPrev'))
	}
	function d(m) {
		m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), s('navigationNext'))
	}
	function c() {
		const m = e.params.navigation
		if (((e.params.navigation = xt(e, e.originalParams.navigation, e.params.navigation, {nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev'})), !(m.nextEl || m.prevEl))) return
		let h = a(m.nextEl),
			b = a(m.prevEl)
		Object.assign(e.navigation, {nextEl: h, prevEl: b}), (h = i(h)), (b = i(b))
		const f = (v, S) => {
			v && v.addEventListener('click', S === 'next' ? d : l), !e.enabled && v && v.classList.add(...m.lockClass.split(' '))
		}
		h.forEach(v => f(v, 'next')), b.forEach(v => f(v, 'prev'))
	}
	function u() {
		let {nextEl: m, prevEl: h} = e.navigation
		;(m = i(m)), (h = i(h))
		const b = (f, v) => {
			f.removeEventListener('click', v === 'next' ? d : l), f.classList.remove(...e.params.navigation.disabledClass.split(' '))
		}
		m.forEach(f => b(f, 'next')), h.forEach(f => b(f, 'prev'))
	}
	n('init', () => {
		e.params.navigation.enabled === !1 ? g() : (c(), o())
	}),
		n('toEdge fromEdge lock unlock', () => {
			o()
		}),
		n('destroy', () => {
			u()
		}),
		n('enable disable', () => {
			let {nextEl: m, prevEl: h} = e.navigation
			;(m = i(m)), (h = i(h)), [...m, ...h].filter(b => !!b).forEach(b => b.classList[e.enabled ? 'remove' : 'add'](e.params.navigation.lockClass))
		}),
		n('click', (m, h) => {
			let {nextEl: b, prevEl: f} = e.navigation
			;(b = i(b)), (f = i(f))
			const v = h.target
			if (e.params.navigation.hideOnClick && !f.includes(v) && !b.includes(v)) {
				if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === v || e.pagination.el.contains(v))) return
				let S
				b.length ? (S = b[0].classList.contains(e.params.navigation.hiddenClass)) : f.length && (S = f[0].classList.contains(e.params.navigation.hiddenClass)), s(S === !0 ? 'navigationShow' : 'navigationHide'), [...b, ...f].filter(x => !!x).forEach(x => x.classList.toggle(e.params.navigation.hiddenClass))
			}
		})
	const p = () => {
			e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), c(), o()
		},
		g = () => {
			e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), u()
		}
	Object.assign(e.navigation, {enable: p, disable: g, update: o, init: c, destroy: u})
}
function se(e = '') {
	return `.${e
		.trim()
		.replace(/([\.:!+\/])/g, '\\$1')
		.replace(/ /g, '.')}`
}
function li({swiper: e, extendParams: t, on: n, emit: s}) {
	const i = 'swiper-pagination'
	t({pagination: {el: null, bulletElement: 'span', clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: 'bullets', dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: f => f, formatFractionTotal: f => f, bulletClass: `${i}-bullet`, bulletActiveClass: `${i}-bullet-active`, modifierClass: `${i}-`, currentClass: `${i}-current`, totalClass: `${i}-total`, hiddenClass: `${i}-hidden`, progressbarFillClass: `${i}-progressbar-fill`, progressbarOppositeClass: `${i}-progressbar-opposite`, clickableClass: `${i}-clickable`, lockClass: `${i}-lock`, horizontalClass: `${i}-horizontal`, verticalClass: `${i}-vertical`, paginationDisabledClass: `${i}-disabled`}}), (e.pagination = {el: null, bullets: []})
	let a,
		r = 0
	const o = f => (Array.isArray(f) || (f = [f].filter(v => !!v)), f)
	function l() {
		return !e.params.pagination.el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
	}
	function d(f, v) {
		const {bulletActiveClass: S} = e.params.pagination
		f && ((f = f[`${v === 'prev' ? 'previous' : 'next'}ElementSibling`]), f && (f.classList.add(`${S}-${v}`), (f = f[`${v === 'prev' ? 'previous' : 'next'}ElementSibling`]), f && f.classList.add(`${S}-${v}-${v}`)))
	}
	function c(f) {
		const v = f.target.closest(se(e.params.pagination.bulletClass))
		if (!v) return
		f.preventDefault()
		const S = Ce(v) * e.params.slidesPerGroup
		if (e.params.loop) {
			if (e.realIndex === S) return
			const x = e.getSlideIndexByData(S),
				P = e.getSlideIndexByData(e.realIndex)
			x > e.slides.length - e.loopedSlides && e.loopFix({direction: x > P ? 'next' : 'prev', activeSlideIndex: x, slideTo: !1}), e.slideToLoop(S)
		} else e.slideTo(S)
	}
	function u() {
		const f = e.rtl,
			v = e.params.pagination
		if (l()) return
		let S = e.pagination.el
		S = o(S)
		let x, P
		const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
			k = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length
		if ((e.params.loop ? ((P = e.previousRealIndex || 0), (x = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex)) : typeof e.snapIndex < 'u' ? ((x = e.snapIndex), (P = e.previousSnapIndex)) : ((P = e.previousIndex || 0), (x = e.activeIndex || 0)), v.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)) {
			const I = e.pagination.bullets
			let $, R, M
			if (
				(v.dynamicBullets &&
					((a = ht(I[0], e.isHorizontal() ? 'width' : 'height', !0)),
					S.forEach(E => {
						E.style[e.isHorizontal() ? 'width' : 'height'] = `${a * (v.dynamicMainBullets + 4)}px`
					}),
					v.dynamicMainBullets > 1 && P !== void 0 && ((r += x - (P || 0)), r > v.dynamicMainBullets - 1 ? (r = v.dynamicMainBullets - 1) : r < 0 && (r = 0)),
					($ = Math.max(x - r, 0)),
					(R = $ + (Math.min(I.length, v.dynamicMainBullets) - 1)),
					(M = (R + $) / 2)),
				I.forEach(E => {
					const y = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(T => `${v.bulletActiveClass}${T}`)].map(T => (typeof T == 'string' && T.includes(' ') ? T.split(' ') : T)).flat()
					E.classList.remove(...y)
				}),
				S.length > 1)
			)
				I.forEach(E => {
					const y = Ce(E)
					y === x && E.classList.add(...v.bulletActiveClass.split(' ')), v.dynamicBullets && (y >= $ && y <= R && E.classList.add(...`${v.bulletActiveClass}-main`.split(' ')), y === $ && d(E, 'prev'), y === R && d(E, 'next'))
				})
			else {
				const E = I[x]
				if ((E && E.classList.add(...v.bulletActiveClass.split(' ')), v.dynamicBullets)) {
					const y = I[$],
						T = I[R]
					for (let D = $; D <= R; D += 1) I[D] && I[D].classList.add(...`${v.bulletActiveClass}-main`.split(' '))
					d(y, 'prev'), d(T, 'next')
				}
			}
			if (v.dynamicBullets) {
				const E = Math.min(I.length, v.dynamicMainBullets + 4),
					y = (a * E - a) / 2 - M * a,
					T = f ? 'right' : 'left'
				I.forEach(D => {
					D.style[e.isHorizontal() ? T : 'top'] = `${y}px`
				})
			}
		}
		S.forEach((I, $) => {
			if (
				(v.type === 'fraction' &&
					(I.querySelectorAll(se(v.currentClass)).forEach(R => {
						R.textContent = v.formatFractionCurrent(x + 1)
					}),
					I.querySelectorAll(se(v.totalClass)).forEach(R => {
						R.textContent = v.formatFractionTotal(k)
					})),
				v.type === 'progressbar')
			) {
				let R
				v.progressbarOpposite ? (R = e.isHorizontal() ? 'vertical' : 'horizontal') : (R = e.isHorizontal() ? 'horizontal' : 'vertical')
				const M = (x + 1) / k
				let E = 1,
					y = 1
				R === 'horizontal' ? (E = M) : (y = M),
					I.querySelectorAll(se(v.progressbarFillClass)).forEach(T => {
						;(T.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${y})`), (T.style.transitionDuration = `${e.params.speed}ms`)
					})
			}
			v.type === 'custom' && v.renderCustom ? ((I.innerHTML = v.renderCustom(e, x + 1, k)), $ === 0 && s('paginationRender', I)) : ($ === 0 && s('paginationRender', I), s('paginationUpdate', I)), e.params.watchOverflow && e.enabled && I.classList[e.isLocked ? 'add' : 'remove'](v.lockClass)
		})
	}
	function p() {
		const f = e.params.pagination
		if (l()) return
		const v = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
		let S = e.pagination.el
		S = o(S)
		let x = ''
		if (f.type === 'bullets') {
			let P = e.params.loop ? Math.ceil(v / e.params.slidesPerGroup) : e.snapGrid.length
			e.params.freeMode && e.params.freeMode.enabled && P > v && (P = v)
			for (let A = 0; A < P; A += 1) f.renderBullet ? (x += f.renderBullet.call(e, A, f.bulletClass)) : (x += `<${f.bulletElement} class="${f.bulletClass}"></${f.bulletElement}>`)
		}
		f.type === 'fraction' && (f.renderFraction ? (x = f.renderFraction.call(e, f.currentClass, f.totalClass)) : (x = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`)),
			f.type === 'progressbar' && (f.renderProgressbar ? (x = f.renderProgressbar.call(e, f.progressbarFillClass)) : (x = `<span class="${f.progressbarFillClass}"></span>`)),
			(e.pagination.bullets = []),
			S.forEach(P => {
				f.type !== 'custom' && (P.innerHTML = x || ''), f.type === 'bullets' && e.pagination.bullets.push(...P.querySelectorAll(se(f.bulletClass)))
			}),
			f.type !== 'custom' && s('paginationRender', S[0])
	}
	function g() {
		e.params.pagination = xt(e, e.originalParams.pagination, e.params.pagination, {el: 'swiper-pagination'})
		const f = e.params.pagination
		if (!f.el) return
		let v
		typeof f.el == 'string' && e.isElement && (v = e.el.shadowRoot.querySelector(f.el)),
			!v && typeof f.el == 'string' && (v = [...document.querySelectorAll(f.el)]),
			v || (v = f.el),
			!(!v || v.length === 0) &&
				(e.params.uniqueNavElements && typeof f.el == 'string' && Array.isArray(v) && v.length > 1 && ((v = [...e.el.querySelectorAll(f.el)]), v.length > 1 && (v = v.filter(S => le(S, '.swiper')[0] === e.el)[0])),
				Array.isArray(v) && v.length === 1 && (v = v[0]),
				Object.assign(e.pagination, {el: v}),
				(v = o(v)),
				v.forEach(S => {
					f.type === 'bullets' && f.clickable && S.classList.add(f.clickableClass), S.classList.add(f.modifierClass + f.type), S.classList.add(e.isHorizontal() ? f.horizontalClass : f.verticalClass), f.type === 'bullets' && f.dynamicBullets && (S.classList.add(`${f.modifierClass}${f.type}-dynamic`), (r = 0), f.dynamicMainBullets < 1 && (f.dynamicMainBullets = 1)), f.type === 'progressbar' && f.progressbarOpposite && S.classList.add(f.progressbarOppositeClass), f.clickable && S.addEventListener('click', c), e.enabled || S.classList.add(f.lockClass)
				}))
	}
	function m() {
		const f = e.params.pagination
		if (l()) return
		let v = e.pagination.el
		v &&
			((v = o(v)),
			v.forEach(S => {
				S.classList.remove(f.hiddenClass), S.classList.remove(f.modifierClass + f.type), S.classList.remove(e.isHorizontal() ? f.horizontalClass : f.verticalClass), f.clickable && S.removeEventListener('click', c)
			})),
			e.pagination.bullets && e.pagination.bullets.forEach(S => S.classList.remove(...f.bulletActiveClass.split(' ')))
	}
	n('changeDirection', () => {
		if (!e.pagination || !e.pagination.el) return
		const f = e.params.pagination
		let {el: v} = e.pagination
		;(v = o(v)),
			v.forEach(S => {
				S.classList.remove(f.horizontalClass, f.verticalClass), S.classList.add(e.isHorizontal() ? f.horizontalClass : f.verticalClass)
			})
	}),
		n('init', () => {
			e.params.pagination.enabled === !1 ? b() : (g(), p(), u())
		}),
		n('activeIndexChange', () => {
			typeof e.snapIndex > 'u' && u()
		}),
		n('snapIndexChange', () => {
			u()
		}),
		n('snapGridLengthChange', () => {
			p(), u()
		}),
		n('destroy', () => {
			m()
		}),
		n('enable disable', () => {
			let {el: f} = e.pagination
			f && ((f = o(f)), f.forEach(v => v.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)))
		}),
		n('lock unlock', () => {
			u()
		}),
		n('click', (f, v) => {
			const S = v.target
			let {el: x} = e.pagination
			if ((Array.isArray(x) || (x = [x].filter(P => !!P)), e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0 && !S.classList.contains(e.params.pagination.bulletClass))) {
				if (e.navigation && ((e.navigation.nextEl && S === e.navigation.nextEl) || (e.navigation.prevEl && S === e.navigation.prevEl))) return
				const P = x[0].classList.contains(e.params.pagination.hiddenClass)
				s(P === !0 ? 'paginationShow' : 'paginationHide'), x.forEach(A => A.classList.toggle(e.params.pagination.hiddenClass))
			}
		})
	const h = () => {
			e.el.classList.remove(e.params.pagination.paginationDisabledClass)
			let {el: f} = e.pagination
			f && ((f = o(f)), f.forEach(v => v.classList.remove(e.params.pagination.paginationDisabledClass))), g(), p(), u()
		},
		b = () => {
			e.el.classList.add(e.params.pagination.paginationDisabledClass)
			let {el: f} = e.pagination
			f && ((f = o(f)), f.forEach(v => v.classList.add(e.params.pagination.paginationDisabledClass))), m()
		}
	Object.assign(e.pagination, {enable: h, disable: b, render: p, update: u, init: g, destroy: m})
}
function di({swiper: e, extendParams: t, on: n, emit: s}) {
	const i = q()
	let a = !1,
		r = null,
		o = null,
		l,
		d,
		c,
		u
	t({scrollbar: {el: null, dragSize: 'auto', hide: !1, draggable: !1, snapOnRelease: !0, lockClass: 'swiper-scrollbar-lock', dragClass: 'swiper-scrollbar-drag', scrollbarDisabledClass: 'swiper-scrollbar-disabled', horizontalClass: 'swiper-scrollbar-horizontal', verticalClass: 'swiper-scrollbar-vertical'}}), (e.scrollbar = {el: null, dragEl: null})
	function p() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return
		const {scrollbar: M, rtlTranslate: E} = e,
			{dragEl: y, el: T} = M,
			D = e.params.scrollbar,
			C = e.params.loop ? e.progressLoop : e.progress
		let z = d,
			O = (c - d) * C
		E ? ((O = -O), O > 0 ? ((z = d - O), (O = 0)) : -O + d > c && (z = c + O)) : O < 0 ? ((z = d + O), (O = 0)) : O + d > c && (z = c - O),
			e.isHorizontal() ? ((y.style.transform = `translate3d(${O}px, 0, 0)`), (y.style.width = `${z}px`)) : ((y.style.transform = `translate3d(0px, ${O}px, 0)`), (y.style.height = `${z}px`)),
			D.hide &&
				(clearTimeout(r),
				(T.style.opacity = 1),
				(r = setTimeout(() => {
					;(T.style.opacity = 0), (T.style.transitionDuration = '400ms')
				}, 1e3)))
	}
	function g(M) {
		!e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${M}ms`)
	}
	function m() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return
		const {scrollbar: M} = e,
			{dragEl: E, el: y} = M
		;(E.style.width = ''), (E.style.height = ''), (c = e.isHorizontal() ? y.offsetWidth : y.offsetHeight), (u = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0))), e.params.scrollbar.dragSize === 'auto' ? (d = c * u) : (d = parseInt(e.params.scrollbar.dragSize, 10)), e.isHorizontal() ? (E.style.width = `${d}px`) : (E.style.height = `${d}px`), u >= 1 ? (y.style.display = 'none') : (y.style.display = ''), e.params.scrollbar.hide && (y.style.opacity = 0), e.params.watchOverflow && e.enabled && M.el.classList[e.isLocked ? 'add' : 'remove'](e.params.scrollbar.lockClass)
	}
	function h(M) {
		return e.isHorizontal() ? M.clientX : M.clientY
	}
	function b(M) {
		const {scrollbar: E, rtlTranslate: y} = e,
			{el: T} = E
		let D
		;(D = (h(M) - _e(T)[e.isHorizontal() ? 'left' : 'top'] - (l !== null ? l : d / 2)) / (c - d)), (D = Math.max(Math.min(D, 1), 0)), y && (D = 1 - D)
		const C = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * D
		e.updateProgress(C), e.setTranslate(C), e.updateActiveIndex(), e.updateSlidesClasses()
	}
	function f(M) {
		const E = e.params.scrollbar,
			{scrollbar: y, wrapperEl: T} = e,
			{el: D, dragEl: C} = y
		;(a = !0), (l = M.target === C ? h(M) - M.target.getBoundingClientRect()[e.isHorizontal() ? 'left' : 'top'] : null), M.preventDefault(), M.stopPropagation(), (T.style.transitionDuration = '100ms'), (C.style.transitionDuration = '100ms'), b(M), clearTimeout(o), (D.style.transitionDuration = '0ms'), E.hide && (D.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style['scroll-snap-type'] = 'none'), s('scrollbarDragStart', M)
	}
	function v(M) {
		const {scrollbar: E, wrapperEl: y} = e,
			{el: T, dragEl: D} = E
		a && (M.preventDefault ? M.preventDefault() : (M.returnValue = !1), b(M), (y.style.transitionDuration = '0ms'), (T.style.transitionDuration = '0ms'), (D.style.transitionDuration = '0ms'), s('scrollbarDragMove', M))
	}
	function S(M) {
		const E = e.params.scrollbar,
			{scrollbar: y, wrapperEl: T} = e,
			{el: D} = y
		a &&
			((a = !1),
			e.params.cssMode && ((e.wrapperEl.style['scroll-snap-type'] = ''), (T.style.transitionDuration = '')),
			E.hide &&
				(clearTimeout(o),
				(o = ce(() => {
					;(D.style.opacity = 0), (D.style.transitionDuration = '400ms')
				}, 1e3))),
			s('scrollbarDragEnd', M),
			E.snapOnRelease && e.slideToClosest())
	}
	function x(M) {
		const {scrollbar: E, params: y} = e,
			T = E.el
		if (!T) return
		const D = T,
			C = y.passiveListeners ? {passive: !1, capture: !1} : !1,
			z = y.passiveListeners ? {passive: !0, capture: !1} : !1
		if (!D) return
		const O = M === 'on' ? 'addEventListener' : 'removeEventListener'
		D[O]('pointerdown', f, C), i[O]('pointermove', v, C), i[O]('pointerup', S, z)
	}
	function P() {
		!e.params.scrollbar.el || !e.scrollbar.el || x('on')
	}
	function A() {
		!e.params.scrollbar.el || !e.scrollbar.el || x('off')
	}
	function k() {
		const {scrollbar: M, el: E} = e
		e.params.scrollbar = xt(e, e.originalParams.scrollbar, e.params.scrollbar, {el: 'swiper-scrollbar'})
		const y = e.params.scrollbar
		if (!y.el) return
		let T
		typeof y.el == 'string' && e.isElement && (T = e.el.shadowRoot.querySelector(y.el)), !T && typeof y.el == 'string' ? (T = i.querySelectorAll(y.el)) : T || (T = y.el), e.params.uniqueNavElements && typeof y.el == 'string' && T.length > 1 && E.querySelectorAll(y.el).length === 1 && (T = E.querySelector(y.el)), T.length > 0 && (T = T[0]), T.classList.add(e.isHorizontal() ? y.horizontalClass : y.verticalClass)
		let D
		T && ((D = T.querySelector(`.${e.params.scrollbar.dragClass}`)), D || ((D = K('div', e.params.scrollbar.dragClass)), T.append(D))), Object.assign(M, {el: T, dragEl: D}), y.draggable && P(), T && T.classList[e.enabled ? 'remove' : 'add'](e.params.scrollbar.lockClass)
	}
	function I() {
		const M = e.params.scrollbar,
			E = e.scrollbar.el
		E && E.classList.remove(e.isHorizontal() ? M.horizontalClass : M.verticalClass), A()
	}
	n('init', () => {
		e.params.scrollbar.enabled === !1 ? R() : (k(), m(), p())
	}),
		n('update resize observerUpdate lock unlock', () => {
			m()
		}),
		n('setTranslate', () => {
			p()
		}),
		n('setTransition', (M, E) => {
			g(E)
		}),
		n('enable disable', () => {
			const {el: M} = e.scrollbar
			M && M.classList[e.enabled ? 'remove' : 'add'](e.params.scrollbar.lockClass)
		}),
		n('destroy', () => {
			I()
		})
	const $ = () => {
			e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.el && e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass), k(), m(), p()
		},
		R = () => {
			e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.el && e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass), I()
		}
	Object.assign(e.scrollbar, {enable: $, disable: R, updateSize: m, setTranslate: p, init: k, destroy: I})
}
function ci({swiper: e, extendParams: t, on: n}) {
	t({parallax: {enabled: !1}})
	const s = (r, o) => {
			const {rtl: l} = e,
				d = l ? -1 : 1,
				c = r.getAttribute('data-swiper-parallax') || '0'
			let u = r.getAttribute('data-swiper-parallax-x'),
				p = r.getAttribute('data-swiper-parallax-y')
			const g = r.getAttribute('data-swiper-parallax-scale'),
				m = r.getAttribute('data-swiper-parallax-opacity'),
				h = r.getAttribute('data-swiper-parallax-rotate')
			if ((u || p ? ((u = u || '0'), (p = p || '0')) : e.isHorizontal() ? ((u = c), (p = '0')) : ((p = c), (u = '0')), u.indexOf('%') >= 0 ? (u = `${parseInt(u, 10) * o * d}%`) : (u = `${u * o * d}px`), p.indexOf('%') >= 0 ? (p = `${parseInt(p, 10) * o}%`) : (p = `${p * o}px`), typeof m < 'u' && m !== null)) {
				const f = m - (m - 1) * (1 - Math.abs(o))
				r.style.opacity = f
			}
			let b = `translate3d(${u}, ${p}, 0px)`
			if (typeof g < 'u' && g !== null) {
				const f = g - (g - 1) * (1 - Math.abs(o))
				b += ` scale(${f})`
			}
			if (h && typeof h < 'u' && h !== null) {
				const f = h * o * -1
				b += ` rotate(${f}deg)`
			}
			r.style.transform = b
		},
		i = () => {
			const {el: r, slides: o, progress: l, snapGrid: d} = e
			X(r, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(c => {
				s(c, l)
			}),
				o.forEach((c, u) => {
					let p = c.progress
					e.params.slidesPerGroup > 1 && e.params.slidesPerView !== 'auto' && (p += Math.ceil(u / 2) - l * (d.length - 1)),
						(p = Math.min(Math.max(p, -1), 1)),
						c.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]').forEach(g => {
							s(g, p)
						})
				})
		},
		a = (r = e.params.speed) => {
			const {el: o} = e
			o.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(l => {
				let d = parseInt(l.getAttribute('data-swiper-parallax-duration'), 10) || r
				r === 0 && (d = 0), (l.style.transitionDuration = `${d}ms`)
			})
		}
	n('beforeInit', () => {
		e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0))
	}),
		n('init', () => {
			e.params.parallax.enabled && i()
		}),
		n('setTranslate', () => {
			e.params.parallax.enabled && i()
		}),
		n('setTransition', (r, o) => {
			e.params.parallax.enabled && a(o)
		})
}
function ui({swiper: e, extendParams: t, on: n, emit: s}) {
	const i = F()
	t({zoom: {enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: 'swiper-zoom-container', zoomedSlideClass: 'swiper-slide-zoomed'}}), (e.zoom = {enabled: !1})
	let a = 1,
		r = !1,
		o,
		l
	const d = [],
		c = {originX: 0, originY: 0, slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3},
		u = {isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {}},
		p = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
	let g = 1
	Object.defineProperty(e.zoom, 'scale', {
		get() {
			return g
		},
		set(C) {
			if (g !== C) {
				const z = c.imageEl,
					O = c.slideEl
				s('zoomChange', C, z, O)
			}
			g = C
		},
	})
	function m() {
		if (d.length < 2) return 1
		const C = d[0].pageX,
			z = d[0].pageY,
			O = d[1].pageX,
			_ = d[1].pageY
		return Math.sqrt((O - C) ** 2 + (_ - z) ** 2)
	}
	function h() {
		if (d.length < 2) return {x: null, y: null}
		const C = c.imageEl.getBoundingClientRect()
		return [(d[0].pageX + (d[1].pageX - d[0].pageX) / 2 - C.x) / a, (d[0].pageY + (d[1].pageY - d[0].pageY) / 2 - C.y) / a]
	}
	function b() {
		return e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`
	}
	function f(C) {
		const z = b()
		return !!(C.target.matches(z) || e.slides.filter(O => O.contains(C.target)).length > 0)
	}
	function v(C) {
		const z = `.${e.params.zoom.containerClass}`
		return !!(C.target.matches(z) || [...e.el.querySelectorAll(z)].filter(O => O.contains(C.target)).length > 0)
	}
	function S(C) {
		if ((C.pointerType === 'mouse' && d.splice(0, d.length), !f(C))) return
		const z = e.params.zoom
		if (((o = !1), (l = !1), d.push(C), !(d.length < 2))) {
			if (((o = !0), (c.scaleStart = m()), !c.slideEl)) {
				;(c.slideEl = C.target.closest(`.${e.params.slideClass}, swiper-slide`)), c.slideEl || (c.slideEl = e.slides[e.activeIndex])
				let O = c.slideEl.querySelector(`.${z.containerClass}`)
				if ((O && (O = O.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]), (c.imageEl = O), O ? (c.imageWrapEl = le(c.imageEl, `.${z.containerClass}`)[0]) : (c.imageWrapEl = void 0), !c.imageWrapEl)) {
					c.imageEl = void 0
					return
				}
				c.maxRatio = c.imageWrapEl.getAttribute('data-swiper-zoom') || z.maxRatio
			}
			if (c.imageEl) {
				const [O, _] = h()
				;(c.originX = O), (c.originY = _), (c.imageEl.style.transitionDuration = '0ms')
			}
			r = !0
		}
	}
	function x(C) {
		if (!f(C)) return
		const z = e.params.zoom,
			O = e.zoom,
			_ = d.findIndex(H => H.pointerId === C.pointerId)
		_ >= 0 && (d[_] = C), !(d.length < 2) && ((l = !0), (c.scaleMove = m()), c.imageEl && ((O.scale = (c.scaleMove / c.scaleStart) * a), O.scale > c.maxRatio && (O.scale = c.maxRatio - 1 + (O.scale - c.maxRatio + 1) ** 0.5), O.scale < z.minRatio && (O.scale = z.minRatio + 1 - (z.minRatio - O.scale + 1) ** 0.5), (c.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`)))
	}
	function P(C) {
		if (!f(C) || (C.pointerType === 'mouse' && C.type === 'pointerout')) return
		const z = e.params.zoom,
			O = e.zoom,
			_ = d.findIndex(H => H.pointerId === C.pointerId)
		_ >= 0 && d.splice(_, 1), !(!o || !l) && ((o = !1), (l = !1), c.imageEl && ((O.scale = Math.max(Math.min(O.scale, c.maxRatio), z.minRatio)), (c.imageEl.style.transitionDuration = `${e.params.speed}ms`), (c.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`), (a = O.scale), (r = !1), O.scale > 1 && c.slideEl ? c.slideEl.classList.add(`${z.zoomedSlideClass}`) : O.scale <= 1 && c.slideEl && c.slideEl.classList.remove(`${z.zoomedSlideClass}`), O.scale === 1 && ((c.originX = 0), (c.originY = 0), (c.slideEl = void 0))))
	}
	function A(C) {
		const z = e.device
		if (!c.imageEl || u.isTouched) return
		z.android && C.cancelable && C.preventDefault(), (u.isTouched = !0)
		const O = d.length > 0 ? d[0] : C
		;(u.touchesStart.x = O.pageX), (u.touchesStart.y = O.pageY)
	}
	function k(C) {
		if (!f(C) || !v(C)) return
		const z = e.zoom
		if (!c.imageEl || !u.isTouched || !c.slideEl) return
		u.isMoved || ((u.width = c.imageEl.offsetWidth), (u.height = c.imageEl.offsetHeight), (u.startX = pt(c.imageWrapEl, 'x') || 0), (u.startY = pt(c.imageWrapEl, 'y') || 0), (c.slideWidth = c.slideEl.offsetWidth), (c.slideHeight = c.slideEl.offsetHeight), (c.imageWrapEl.style.transitionDuration = '0ms'))
		const O = u.width * z.scale,
			_ = u.height * z.scale
		if (O < c.slideWidth && _ < c.slideHeight) return
		if (((u.minX = Math.min(c.slideWidth / 2 - O / 2, 0)), (u.maxX = -u.minX), (u.minY = Math.min(c.slideHeight / 2 - _ / 2, 0)), (u.maxY = -u.minY), (u.touchesCurrent.x = d.length > 0 ? d[0].pageX : C.pageX), (u.touchesCurrent.y = d.length > 0 ? d[0].pageY : C.pageY), Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (e.allowClick = !1), !u.isMoved && !r)) {
			if (e.isHorizontal() && ((Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x) || (Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x))) {
				u.isTouched = !1
				return
			}
			if (!e.isHorizontal() && ((Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y) || (Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y))) {
				u.isTouched = !1
				return
			}
		}
		C.cancelable && C.preventDefault(), C.stopPropagation(), (u.isMoved = !0)
		const V = (z.scale - a) / (c.maxRatio - e.params.zoom.minRatio),
			{originX: B, originY: N} = c
		;(u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + V * (u.width - B * 2)),
			(u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + V * (u.height - N * 2)),
			u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** 0.8),
			u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** 0.8),
			u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** 0.8),
			u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** 0.8),
			p.prevPositionX || (p.prevPositionX = u.touchesCurrent.x),
			p.prevPositionY || (p.prevPositionY = u.touchesCurrent.y),
			p.prevTime || (p.prevTime = Date.now()),
			(p.x = (u.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2),
			(p.y = (u.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2),
			Math.abs(u.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0),
			Math.abs(u.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0),
			(p.prevPositionX = u.touchesCurrent.x),
			(p.prevPositionY = u.touchesCurrent.y),
			(p.prevTime = Date.now()),
			(c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`)
	}
	function I() {
		const C = e.zoom
		if (!c.imageEl) return
		if (!u.isTouched || !u.isMoved) {
			;(u.isTouched = !1), (u.isMoved = !1)
			return
		}
		;(u.isTouched = !1), (u.isMoved = !1)
		let z = 300,
			O = 300
		const _ = p.x * z,
			H = u.currentX + _,
			V = p.y * O,
			B = u.currentY + V
		p.x !== 0 && (z = Math.abs((H - u.currentX) / p.x)), p.y !== 0 && (O = Math.abs((B - u.currentY) / p.y))
		const N = Math.max(z, O)
		;(u.currentX = H), (u.currentY = B)
		const J = u.width * C.scale,
			ee = u.height * C.scale
		;(u.minX = Math.min(c.slideWidth / 2 - J / 2, 0)), (u.maxX = -u.minX), (u.minY = Math.min(c.slideHeight / 2 - ee / 2, 0)), (u.maxY = -u.minY), (u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX)), (u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY)), (c.imageWrapEl.style.transitionDuration = `${N}ms`), (c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`)
	}
	function $() {
		const C = e.zoom
		c.slideEl && e.activeIndex !== e.slides.indexOf(c.slideEl) && (c.imageEl && (c.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'), c.imageWrapEl && (c.imageWrapEl.style.transform = 'translate3d(0,0,0)'), c.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), (C.scale = 1), (a = 1), (c.slideEl = void 0), (c.imageEl = void 0), (c.imageWrapEl = void 0), (c.originX = 0), (c.originY = 0))
	}
	function R(C) {
		const z = e.zoom,
			O = e.params.zoom
		if (!c.slideEl) {
			C && C.target && (c.slideEl = C.target.closest(`.${e.params.slideClass}, swiper-slide`)), c.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? (c.slideEl = X(e.slidesEl, `.${e.params.slideActiveClass}`)[0]) : (c.slideEl = e.slides[e.activeIndex]))
			let ve = c.slideEl.querySelector(`.${O.containerClass}`)
			ve && (ve = ve.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]), (c.imageEl = ve), ve ? (c.imageWrapEl = le(c.imageEl, `.${O.containerClass}`)[0]) : (c.imageWrapEl = void 0)
		}
		if (!c.imageEl || !c.imageWrapEl) return
		e.params.cssMode && ((e.wrapperEl.style.overflow = 'hidden'), (e.wrapperEl.style.touchAction = 'none')), c.slideEl.classList.add(`${O.zoomedSlideClass}`)
		let _, H, V, B, N, J, ee, ie, Ct, Pt, At, Lt, Oe, Ie, Ue, Ke, Je, Ze
		typeof u.touchesStart.x > 'u' && C ? ((_ = C.pageX), (H = C.pageY)) : ((_ = u.touchesStart.x), (H = u.touchesStart.y))
		const ge = typeof C == 'number' ? C : null
		a === 1 && ge && ((_ = void 0), (H = void 0)),
			(z.scale = ge || c.imageWrapEl.getAttribute('data-swiper-zoom') || O.maxRatio),
			(a = ge || c.imageWrapEl.getAttribute('data-swiper-zoom') || O.maxRatio),
			C && !(a === 1 && ge) ? ((Je = c.slideEl.offsetWidth), (Ze = c.slideEl.offsetHeight), (V = _e(c.slideEl).left + i.scrollX), (B = _e(c.slideEl).top + i.scrollY), (N = V + Je / 2 - _), (J = B + Ze / 2 - H), (Ct = c.imageEl.offsetWidth), (Pt = c.imageEl.offsetHeight), (At = Ct * z.scale), (Lt = Pt * z.scale), (Oe = Math.min(Je / 2 - At / 2, 0)), (Ie = Math.min(Ze / 2 - Lt / 2, 0)), (Ue = -Oe), (Ke = -Ie), (ee = N * z.scale), (ie = J * z.scale), ee < Oe && (ee = Oe), ee > Ue && (ee = Ue), ie < Ie && (ie = Ie), ie > Ke && (ie = Ke)) : ((ee = 0), (ie = 0)),
			ge && z.scale === 1 && ((c.originX = 0), (c.originY = 0)),
			(c.imageWrapEl.style.transitionDuration = '300ms'),
			(c.imageWrapEl.style.transform = `translate3d(${ee}px, ${ie}px,0)`),
			(c.imageEl.style.transitionDuration = '300ms'),
			(c.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`)
	}
	function M() {
		const C = e.zoom,
			z = e.params.zoom
		if (!c.slideEl) {
			e.params.virtual && e.params.virtual.enabled && e.virtual ? (c.slideEl = X(e.slidesEl, `.${e.params.slideActiveClass}`)[0]) : (c.slideEl = e.slides[e.activeIndex])
			let O = c.slideEl.querySelector(`.${z.containerClass}`)
			O && (O = O.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]), (c.imageEl = O), O ? (c.imageWrapEl = le(c.imageEl, `.${z.containerClass}`)[0]) : (c.imageWrapEl = void 0)
		}
		!c.imageEl || !c.imageWrapEl || (e.params.cssMode && ((e.wrapperEl.style.overflow = ''), (e.wrapperEl.style.touchAction = '')), (C.scale = 1), (a = 1), (c.imageWrapEl.style.transitionDuration = '300ms'), (c.imageWrapEl.style.transform = 'translate3d(0,0,0)'), (c.imageEl.style.transitionDuration = '300ms'), (c.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'), c.slideEl.classList.remove(`${z.zoomedSlideClass}`), (c.slideEl = void 0), (c.originX = 0), (c.originY = 0))
	}
	function E(C) {
		const z = e.zoom
		z.scale && z.scale !== 1 ? M() : R(C)
	}
	function y() {
		const C = e.params.passiveListeners ? {passive: !0, capture: !1} : !1,
			z = e.params.passiveListeners ? {passive: !1, capture: !0} : !0
		return {passiveListener: C, activeListenerWithCapture: z}
	}
	function T() {
		const C = e.zoom
		if (C.enabled) return
		C.enabled = !0
		const {passiveListener: z, activeListenerWithCapture: O} = y()
		e.wrapperEl.addEventListener('pointerdown', S, z),
			e.wrapperEl.addEventListener('pointermove', x, O),
			['pointerup', 'pointercancel', 'pointerout'].forEach(_ => {
				e.wrapperEl.addEventListener(_, P, z)
			}),
			e.wrapperEl.addEventListener('pointermove', k, O)
	}
	function D() {
		const C = e.zoom
		if (!C.enabled) return
		C.enabled = !1
		const {passiveListener: z, activeListenerWithCapture: O} = y()
		e.wrapperEl.removeEventListener('pointerdown', S, z),
			e.wrapperEl.removeEventListener('pointermove', x, O),
			['pointerup', 'pointercancel', 'pointerout'].forEach(_ => {
				e.wrapperEl.removeEventListener(_, P, z)
			}),
			e.wrapperEl.removeEventListener('pointermove', k, O)
	}
	n('init', () => {
		e.params.zoom.enabled && T()
	}),
		n('destroy', () => {
			D()
		}),
		n('touchStart', (C, z) => {
			e.zoom.enabled && A(z)
		}),
		n('touchEnd', (C, z) => {
			e.zoom.enabled && I()
		}),
		n('doubleTap', (C, z) => {
			!e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && E(z)
		}),
		n('transitionEnd', () => {
			e.zoom.enabled && e.params.zoom.enabled && $()
		}),
		n('slideChange', () => {
			e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && $()
		}),
		Object.assign(e.zoom, {enable: T, disable: D, in: R, out: M, toggle: E})
}
function fi({swiper: e, extendParams: t, on: n}) {
	t({controller: {control: void 0, inverse: !1, by: 'slide'}}), (e.controller = {control: void 0})
	function s(l, d) {
		const c = (function () {
			let m, h, b
			return (f, v) => {
				for (h = -1, m = f.length; m - h > 1; ) (b = (m + h) >> 1), f[b] <= v ? (h = b) : (m = b)
				return m
			}
		})()
		;(this.x = l), (this.y = d), (this.lastIndex = l.length - 1)
		let u, p
		return (
			(this.interpolate = function (m) {
				return m ? ((p = c(this.x, m)), (u = p - 1), ((m - this.x[u]) * (this.y[p] - this.y[u])) / (this.x[p] - this.x[u]) + this.y[u]) : 0
			}),
			this
		)
	}
	function i(l) {
		e.controller.spline = e.params.loop ? new s(e.slidesGrid, l.slidesGrid) : new s(e.snapGrid, l.snapGrid)
	}
	function a(l, d) {
		const c = e.controller.control
		let u, p
		const g = e.constructor
		function m(h) {
			if (h.destroyed) return
			const b = e.rtlTranslate ? -e.translate : e.translate
			e.params.controller.by === 'slide' && (i(h), (p = -e.controller.spline.interpolate(-b))), (!p || e.params.controller.by === 'container') && ((u = (h.maxTranslate() - h.minTranslate()) / (e.maxTranslate() - e.minTranslate())), (Number.isNaN(u) || !Number.isFinite(u)) && (u = 1), (p = (b - e.minTranslate()) * u + h.minTranslate())), e.params.controller.inverse && (p = h.maxTranslate() - p), h.updateProgress(p), h.setTranslate(p, e), h.updateActiveIndex(), h.updateSlidesClasses()
		}
		if (Array.isArray(c)) for (let h = 0; h < c.length; h += 1) c[h] !== d && c[h] instanceof g && m(c[h])
		else c instanceof g && d !== c && m(c)
	}
	function r(l, d) {
		const c = e.constructor,
			u = e.controller.control
		let p
		function g(m) {
			m.destroyed ||
				(m.setTransition(l, e),
				l !== 0 &&
					(m.transitionStart(),
					m.params.autoHeight &&
						ce(() => {
							m.updateAutoHeight()
						}),
					Ee(m.wrapperEl, () => {
						u && m.transitionEnd()
					})))
		}
		if (Array.isArray(u)) for (p = 0; p < u.length; p += 1) u[p] !== d && u[p] instanceof c && g(u[p])
		else u instanceof c && d !== u && g(u)
	}
	function o() {
		e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline)
	}
	n('beforeInit', () => {
		if (typeof window < 'u' && (typeof e.params.controller.control == 'string' || e.params.controller.control instanceof HTMLElement)) {
			const l = document.querySelector(e.params.controller.control)
			if (l && l.swiper) e.controller.control = l.swiper
			else if (l) {
				const d = c => {
					;(e.controller.control = c.detail[0]), e.update(), l.removeEventListener('init', d)
				}
				l.addEventListener('init', d)
			}
			return
		}
		e.controller.control = e.params.controller.control
	}),
		n('update', () => {
			o()
		}),
		n('resize', () => {
			o()
		}),
		n('observerUpdate', () => {
			o()
		}),
		n('setTranslate', (l, d, c) => {
			!e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(d, c)
		}),
		n('setTransition', (l, d, c) => {
			!e.controller.control || e.controller.control.destroyed || e.controller.setTransition(d, c)
		}),
		Object.assign(e.controller, {setTranslate: a, setTransition: r})
}
function mi({swiper: e, extendParams: t, on: n}) {
	t({a11y: {enabled: !0, notificationClass: 'swiper-notification', prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide', firstSlideMessage: 'This is the first slide', lastSlideMessage: 'This is the last slide', paginationBulletMessage: 'Go to slide {{index}}', slideLabelMessage: '{{index}} / {{slidesLength}}', containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: 'group', id: null}}), (e.a11y = {clicked: !1})
	let s = null
	function i(y) {
		const T = s
		T.length !== 0 && ((T.innerHTML = ''), (T.innerHTML = y))
	}
	const a = y => (Array.isArray(y) || (y = [y].filter(T => !!T)), y)
	function r(y = 16) {
		const T = () => Math.round(16 * Math.random()).toString(16)
		return 'x'.repeat(y).replace(/x/g, T)
	}
	function o(y) {
		;(y = a(y)),
			y.forEach(T => {
				T.setAttribute('tabIndex', '0')
			})
	}
	function l(y) {
		;(y = a(y)),
			y.forEach(T => {
				T.setAttribute('tabIndex', '-1')
			})
	}
	function d(y, T) {
		;(y = a(y)),
			y.forEach(D => {
				D.setAttribute('role', T)
			})
	}
	function c(y, T) {
		;(y = a(y)),
			y.forEach(D => {
				D.setAttribute('aria-roledescription', T)
			})
	}
	function u(y, T) {
		;(y = a(y)),
			y.forEach(D => {
				D.setAttribute('aria-controls', T)
			})
	}
	function p(y, T) {
		;(y = a(y)),
			y.forEach(D => {
				D.setAttribute('aria-label', T)
			})
	}
	function g(y, T) {
		;(y = a(y)),
			y.forEach(D => {
				D.setAttribute('id', T)
			})
	}
	function m(y, T) {
		;(y = a(y)),
			y.forEach(D => {
				D.setAttribute('aria-live', T)
			})
	}
	function h(y) {
		;(y = a(y)),
			y.forEach(T => {
				T.setAttribute('aria-disabled', !0)
			})
	}
	function b(y) {
		;(y = a(y)),
			y.forEach(T => {
				T.setAttribute('aria-disabled', !1)
			})
	}
	function f(y) {
		if (y.keyCode !== 13 && y.keyCode !== 32) return
		const T = e.params.a11y,
			D = y.target
		;(e.pagination && e.pagination.el && (D === e.pagination.el || e.pagination.el.contains(y.target)) && !y.target.matches(se(e.params.pagination.bulletClass))) || (e.navigation && e.navigation.nextEl && D === e.navigation.nextEl && ((e.isEnd && !e.params.loop) || e.slideNext(), e.isEnd ? i(T.lastSlideMessage) : i(T.nextSlideMessage)), e.navigation && e.navigation.prevEl && D === e.navigation.prevEl && ((e.isBeginning && !e.params.loop) || e.slidePrev(), e.isBeginning ? i(T.firstSlideMessage) : i(T.prevSlideMessage)), e.pagination && D.matches(se(e.params.pagination.bulletClass)) && D.click())
	}
	function v() {
		if (e.params.loop || e.params.rewind || !e.navigation) return
		const {nextEl: y, prevEl: T} = e.navigation
		T && (e.isBeginning ? (h(T), l(T)) : (b(T), o(T))), y && (e.isEnd ? (h(y), l(y)) : (b(y), o(y)))
	}
	function S() {
		return e.pagination && e.pagination.bullets && e.pagination.bullets.length
	}
	function x() {
		return S() && e.params.pagination.clickable
	}
	function P() {
		const y = e.params.a11y
		S() &&
			e.pagination.bullets.forEach(T => {
				e.params.pagination.clickable && (o(T), e.params.pagination.renderBullet || (d(T, 'button'), p(T, y.paginationBulletMessage.replace(/\{\{index\}\}/, Ce(T) + 1)))), T.matches(se(e.params.pagination.bulletActiveClass)) ? T.setAttribute('aria-current', 'true') : T.removeAttribute('aria-current')
			})
	}
	const A = (y, T, D) => {
			o(y), y.tagName !== 'BUTTON' && (d(y, 'button'), y.addEventListener('keydown', f)), p(y, D), u(y, T)
		},
		k = () => {
			e.a11y.clicked = !0
		},
		I = () => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					e.destroyed || (e.a11y.clicked = !1)
				})
			})
		},
		$ = y => {
			if (e.a11y.clicked) return
			const T = y.target.closest(`.${e.params.slideClass}, swiper-slide`)
			if (!T || !e.slides.includes(T)) return
			const D = e.slides.indexOf(T) === e.activeIndex,
				C = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(T)
			D || C || (y.sourceCapabilities && y.sourceCapabilities.firesTouchEvents) || (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0), e.slideTo(e.slides.indexOf(T), 0))
		},
		R = () => {
			const y = e.params.a11y
			y.itemRoleDescriptionMessage && c(e.slides, y.itemRoleDescriptionMessage), y.slideRole && d(e.slides, y.slideRole)
			const T = e.slides.length
			y.slideLabelMessage &&
				e.slides.forEach((D, C) => {
					const z = e.params.loop ? parseInt(D.getAttribute('data-swiper-slide-index'), 10) : C,
						O = y.slideLabelMessage.replace(/\{\{index\}\}/, z + 1).replace(/\{\{slidesLength\}\}/, T)
					p(D, O)
				})
		},
		M = () => {
			const y = e.params.a11y
			e.isElement ? e.el.shadowEl.append(s) : e.el.append(s)
			const T = e.el
			y.containerRoleDescriptionMessage && c(T, y.containerRoleDescriptionMessage), y.containerMessage && p(T, y.containerMessage)
			const D = e.wrapperEl,
				C = y.id || D.getAttribute('id') || `swiper-wrapper-${r(16)}`,
				z = e.params.autoplay && e.params.autoplay.enabled ? 'off' : 'polite'
			g(D, C), m(D, z), R()
			let {nextEl: O, prevEl: _} = e.navigation ? e.navigation : {}
			;(O = a(O)),
				(_ = a(_)),
				O && O.forEach(H => A(H, C, y.nextSlideMessage)),
				_ && _.forEach(H => A(H, C, y.prevSlideMessage)),
				x() &&
					(Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach(V => {
						V.addEventListener('keydown', f)
					}),
				e.el.addEventListener('focus', $, !0),
				e.el.addEventListener('pointerdown', k, !0),
				e.el.addEventListener('pointerup', I, !0)
		}
	function E() {
		s && s.remove()
		let {nextEl: y, prevEl: T} = e.navigation ? e.navigation : {}
		;(y = a(y)),
			(T = a(T)),
			y && y.forEach(D => D.removeEventListener('keydown', f)),
			T && T.forEach(D => D.removeEventListener('keydown', f)),
			x() &&
				(Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach(C => {
					C.removeEventListener('keydown', f)
				}),
			e.el.removeEventListener('focus', $, !0),
			e.el.removeEventListener('pointerdown', k, !0),
			e.el.removeEventListener('pointerup', I, !0)
	}
	n('beforeInit', () => {
		;(s = K('span', e.params.a11y.notificationClass)), s.setAttribute('aria-live', 'assertive'), s.setAttribute('aria-atomic', 'true')
	}),
		n('afterInit', () => {
			e.params.a11y.enabled && M()
		}),
		n('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
			e.params.a11y.enabled && R()
		}),
		n('fromEdge toEdge afterInit lock unlock', () => {
			e.params.a11y.enabled && v()
		}),
		n('paginationUpdate', () => {
			e.params.a11y.enabled && P()
		}),
		n('destroy', () => {
			e.params.a11y.enabled && E()
		})
}
function pi({swiper: e, extendParams: t, on: n}) {
	t({history: {enabled: !1, root: '', replaceState: !1, key: 'slides', keepQuery: !1}})
	let s = !1,
		i = {}
	const a = p =>
			p
				.toString()
				.replace(/\s+/g, '-')
				.replace(/[^\w-]+/g, '')
				.replace(/--+/g, '-')
				.replace(/^-+/, '')
				.replace(/-+$/, ''),
		r = p => {
			const g = F()
			let m
			p ? (m = new URL(p)) : (m = g.location)
			const h = m.pathname
					.slice(1)
					.split('/')
					.filter(S => S !== ''),
				b = h.length,
				f = h[b - 2],
				v = h[b - 1]
			return {key: f, value: v}
		},
		o = (p, g) => {
			const m = F()
			if (!s || !e.params.history.enabled) return
			let h
			e.params.url ? (h = new URL(e.params.url)) : (h = m.location)
			const b = e.slides[g]
			let f = a(b.getAttribute('data-history'))
			if (e.params.history.root.length > 0) {
				let S = e.params.history.root
				S[S.length - 1] === '/' && (S = S.slice(0, S.length - 1)), (f = `${S}/${p ? `${p}/` : ''}${f}`)
			} else h.pathname.includes(p) || (f = `${p ? `${p}/` : ''}${f}`)
			e.params.history.keepQuery && (f += h.search)
			const v = m.history.state
			;(v && v.value === f) || (e.params.history.replaceState ? m.history.replaceState({value: f}, null, f) : m.history.pushState({value: f}, null, f))
		},
		l = (p, g, m) => {
			if (g)
				for (let h = 0, b = e.slides.length; h < b; h += 1) {
					const f = e.slides[h]
					if (a(f.getAttribute('data-history')) === g) {
						const S = e.getSlideIndex(f)
						e.slideTo(S, p, m)
					}
				}
			else e.slideTo(0, p, m)
		},
		d = () => {
			;(i = r(e.params.url)), l(e.params.speed, i.value, !1)
		},
		c = () => {
			const p = F()
			if (e.params.history) {
				if (!p.history || !p.history.pushState) {
					;(e.params.history.enabled = !1), (e.params.hashNavigation.enabled = !0)
					return
				}
				if (((s = !0), (i = r(e.params.url)), !i.key && !i.value)) {
					e.params.history.replaceState || p.addEventListener('popstate', d)
					return
				}
				l(0, i.value, e.params.runCallbacksOnInit), e.params.history.replaceState || p.addEventListener('popstate', d)
			}
		},
		u = () => {
			const p = F()
			e.params.history.replaceState || p.removeEventListener('popstate', d)
		}
	n('init', () => {
		e.params.history.enabled && c()
	}),
		n('destroy', () => {
			e.params.history.enabled && u()
		}),
		n('transitionEnd _freeModeNoMomentumRelease', () => {
			s && o(e.params.history.key, e.activeIndex)
		}),
		n('slideChange', () => {
			s && e.params.cssMode && o(e.params.history.key, e.activeIndex)
		})
}
function hi({swiper: e, extendParams: t, emit: n, on: s}) {
	let i = !1
	const a = q(),
		r = F()
	t({
		hashNavigation: {
			enabled: !1,
			replaceState: !1,
			watchState: !1,
			getSlideIndex(u, p) {
				if (e.virtual && e.params.virtual.enabled) {
					const g = e.slides.filter(h => h.getAttribute('data-hash') === p)[0]
					return g ? parseInt(g.getAttribute('data-swiper-slide-index'), 10) : 0
				}
				return e.getSlideIndex(X(e.slidesEl, `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`)[0])
			},
		},
	})
	const o = () => {
			n('hashChange')
			const u = a.location.hash.replace('#', ''),
				p = e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`),
				g = p ? p.getAttribute('data-hash') : ''
			if (u !== g) {
				const m = e.params.hashNavigation.getSlideIndex(e, u)
				if (typeof m > 'u' || Number.isNaN(m)) return
				e.slideTo(m)
			}
		},
		l = () => {
			if (!i || !e.params.hashNavigation.enabled) return
			const u = e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`),
				p = u ? u.getAttribute('data-hash') || u.getAttribute('data-history') : ''
			e.params.hashNavigation.replaceState && r.history && r.history.replaceState ? (r.history.replaceState(null, null, `#${p}` || ''), n('hashSet')) : ((a.location.hash = p || ''), n('hashSet'))
		},
		d = () => {
			if (!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled)) return
			i = !0
			const u = a.location.hash.replace('#', '')
			if (u) {
				const g = e.params.hashNavigation.getSlideIndex(e, u)
				e.slideTo(g || 0, 0, e.params.runCallbacksOnInit, !0)
			}
			e.params.hashNavigation.watchState && r.addEventListener('hashchange', o)
		},
		c = () => {
			e.params.hashNavigation.watchState && r.removeEventListener('hashchange', o)
		}
	s('init', () => {
		e.params.hashNavigation.enabled && d()
	}),
		s('destroy', () => {
			e.params.hashNavigation.enabled && c()
		}),
		s('transitionEnd _freeModeNoMomentumRelease', () => {
			i && l()
		}),
		s('slideChange', () => {
			i && e.params.cssMode && l()
		})
}
function gi({swiper: e, extendParams: t, on: n, emit: s, params: i}) {
	;(e.autoplay = {running: !1, paused: !1, timeLeft: 0}), t({autoplay: {enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1}})
	let a,
		r,
		o = i && i.autoplay ? i.autoplay.delay : 3e3,
		l = i && i.autoplay ? i.autoplay.delay : 3e3,
		d,
		c = new Date().getTime,
		u,
		p,
		g,
		m,
		h,
		b
	function f(C) {
		!e || e.destroyed || !e.wrapperEl || (C.target === e.wrapperEl && (e.wrapperEl.removeEventListener('transitionend', f), I()))
	}
	const v = () => {
			if (e.destroyed || !e.autoplay.running) return
			e.autoplay.paused ? (u = !0) : u && ((l = d), (u = !1))
			const C = e.autoplay.paused ? d : c + l - new Date().getTime()
			;(e.autoplay.timeLeft = C),
				s('autoplayTimeLeft', C, C / o),
				(r = requestAnimationFrame(() => {
					v()
				}))
		},
		S = () => {
			let C
			return e.virtual && e.params.virtual.enabled ? (C = e.slides.filter(O => O.classList.contains('swiper-slide-active'))[0]) : (C = e.slides[e.activeIndex]), C ? parseInt(C.getAttribute('data-swiper-autoplay'), 10) : void 0
		},
		x = C => {
			if (e.destroyed || !e.autoplay.running) return
			cancelAnimationFrame(r), v()
			let z = typeof C > 'u' ? e.params.autoplay.delay : C
			;(o = e.params.autoplay.delay), (l = e.params.autoplay.delay)
			const O = S()
			!Number.isNaN(O) && O > 0 && typeof C > 'u' && ((z = O), (o = O), (l = O)), (d = z)
			const _ = e.params.speed,
				H = () => {
					!e ||
						e.destroyed ||
						(e.params.autoplay.reverseDirection ? (!e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(_, !0, !0), s('autoplay')) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, _, !0, !0), s('autoplay'))) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(_, !0, !0), s('autoplay')) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, _, !0, !0), s('autoplay')),
						e.params.cssMode &&
							((c = new Date().getTime()),
							requestAnimationFrame(() => {
								x()
							})))
				}
			return (
				z > 0
					? (clearTimeout(a),
					  (a = setTimeout(() => {
							H()
					  }, z)))
					: requestAnimationFrame(() => {
							H()
					  }),
				z
			)
		},
		P = () => {
			;(e.autoplay.running = !0), x(), s('autoplayStart')
		},
		A = () => {
			;(e.autoplay.running = !1), clearTimeout(a), cancelAnimationFrame(r), s('autoplayStop')
		},
		k = (C, z) => {
			if (e.destroyed || !e.autoplay.running) return
			clearTimeout(a), C || (b = !0)
			const O = () => {
				s('autoplayPause'), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener('transitionend', f) : I()
			}
			if (((e.autoplay.paused = !0), z)) {
				h && (d = e.params.autoplay.delay), (h = !1), O()
				return
			}
			;(d = (d || e.params.autoplay.delay) - (new Date().getTime() - c)), !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), O())
		},
		I = () => {
			;(e.isEnd && d < 0 && !e.params.loop) || e.destroyed || !e.autoplay.running || ((c = new Date().getTime()), b ? ((b = !1), x(d)) : x(), (e.autoplay.paused = !1), s('autoplayResume'))
		},
		$ = () => {
			if (e.destroyed || !e.autoplay.running) return
			const C = q()
			C.visibilityState === 'hidden' && ((b = !0), k(!0)), C.visibilityState === 'visible' && I()
		},
		R = C => {
			C.pointerType === 'mouse' && ((b = !0), k(!0))
		},
		M = C => {
			C.pointerType === 'mouse' && e.autoplay.paused && I()
		},
		E = () => {
			e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener('pointerenter', R), e.el.addEventListener('pointerleave', M))
		},
		y = () => {
			e.el.removeEventListener('pointerenter', R), e.el.removeEventListener('pointerleave', M)
		},
		T = () => {
			q().addEventListener('visibilitychange', $)
		},
		D = () => {
			q().removeEventListener('visibilitychange', $)
		}
	n('init', () => {
		e.params.autoplay.enabled && (E(), T(), (c = new Date().getTime()), P())
	}),
		n('destroy', () => {
			y(), D(), e.autoplay.running && A()
		}),
		n('beforeTransitionStart', (C, z, O) => {
			e.destroyed || !e.autoplay.running || (O || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : A())
		}),
		n('sliderFirstMove', () => {
			if (!(e.destroyed || !e.autoplay.running)) {
				if (e.params.autoplay.disableOnInteraction) {
					A()
					return
				}
				;(p = !0),
					(g = !1),
					(b = !1),
					(m = setTimeout(() => {
						;(b = !0), (g = !0), k(!0)
					}, 200))
			}
		}),
		n('touchEnd', () => {
			if (!(e.destroyed || !e.autoplay.running || !p)) {
				if ((clearTimeout(m), clearTimeout(a), e.params.autoplay.disableOnInteraction)) {
					;(g = !1), (p = !1)
					return
				}
				g && e.params.cssMode && I(), (g = !1), (p = !1)
			}
		}),
		n('slideChange', () => {
			e.destroyed || !e.autoplay.running || (h = !0)
		}),
		Object.assign(e.autoplay, {start: P, stop: A, pause: k, resume: I})
}
function vi({swiper: e, extendParams: t, on: n}) {
	t({thumbs: {swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: 'swiper-slide-thumb-active', thumbsContainerClass: 'swiper-thumbs'}})
	let s = !1,
		i = !1
	e.thumbs = {swiper: null}
	function a() {
		const l = e.thumbs.swiper
		if (!l || l.destroyed) return
		const d = l.clickedIndex,
			c = l.clickedSlide
		if ((c && c.classList.contains(e.params.thumbs.slideThumbActiveClass)) || typeof d > 'u' || d === null) return
		let u
		l.params.loop ? (u = parseInt(l.clickedSlide.getAttribute('data-swiper-slide-index'), 10)) : (u = d), e.params.loop ? e.slideToLoop(u) : e.slideTo(u)
	}
	function r() {
		const {thumbs: l} = e.params
		if (s) return !1
		s = !0
		const d = e.constructor
		if (l.swiper instanceof d) (e.thumbs.swiper = l.swiper), Object.assign(e.thumbs.swiper.originalParams, {watchSlidesProgress: !0, slideToClickedSlide: !1}), Object.assign(e.thumbs.swiper.params, {watchSlidesProgress: !0, slideToClickedSlide: !1}), e.thumbs.swiper.update()
		else if (be(l.swiper)) {
			const c = Object.assign({}, l.swiper)
			Object.assign(c, {watchSlidesProgress: !0, slideToClickedSlide: !1}), (e.thumbs.swiper = new d(c)), (i = !0)
		}
		return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on('tap', a), !0
	}
	function o(l) {
		const d = e.thumbs.swiper
		if (!d || d.destroyed) return
		const c = d.params.slidesPerView === 'auto' ? d.slidesPerViewDynamic() : d.params.slidesPerView
		let u = 1
		const p = e.params.thumbs.slideThumbActiveClass
		if ((e.params.slidesPerView > 1 && !e.params.centeredSlides && (u = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (u = 1), (u = Math.floor(u)), d.slides.forEach(h => h.classList.remove(p)), d.params.loop || (d.params.virtual && d.params.virtual.enabled)))
			for (let h = 0; h < u; h += 1)
				X(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + h}"]`).forEach(b => {
					b.classList.add(p)
				})
		else for (let h = 0; h < u; h += 1) d.slides[e.realIndex + h] && d.slides[e.realIndex + h].classList.add(p)
		const g = e.params.thumbs.autoScrollOffset,
			m = g && !d.params.loop
		if (e.realIndex !== d.realIndex || m) {
			const h = d.activeIndex
			let b, f
			if (d.params.loop) {
				const v = d.slides.filter(S => S.getAttribute('data-swiper-slide-index') === `${e.realIndex}`)[0]
				;(b = d.slides.indexOf(v)), (f = e.activeIndex > e.previousIndex ? 'next' : 'prev')
			} else (b = e.realIndex), (f = b > e.previousIndex ? 'next' : 'prev')
			m && (b += f === 'next' ? g : -1 * g), d.visibleSlidesIndexes && d.visibleSlidesIndexes.indexOf(b) < 0 && (d.params.centeredSlides ? (b > h ? (b = b - Math.floor(c / 2) + 1) : (b = b + Math.floor(c / 2) - 1)) : b > h && d.params.slidesPerGroup, d.slideTo(b, l ? 0 : void 0))
		}
	}
	n('beforeInit', () => {
		const {thumbs: l} = e.params
		if (!(!l || !l.swiper))
			if (typeof l.swiper == 'string' || l.swiper instanceof HTMLElement) {
				const d = q(),
					c = () => {
						const p = typeof l.swiper == 'string' ? d.querySelector(l.swiper) : l.swiper
						if (p && p.swiper) (l.swiper = p.swiper), r(), o(!0)
						else if (p) {
							const g = m => {
								;(l.swiper = m.detail[0]), p.removeEventListener('init', g), r(), o(!0), l.swiper.update(), e.update()
							}
							p.addEventListener('init', g)
						}
						return p
					},
					u = () => {
						if (e.destroyed) return
						c() || requestAnimationFrame(u)
					}
				requestAnimationFrame(u)
			} else r(), o(!0)
	}),
		n('slideChange update resize observerUpdate', () => {
			o()
		}),
		n('setTransition', (l, d) => {
			const c = e.thumbs.swiper
			!c || c.destroyed || c.setTransition(d)
		}),
		n('beforeDestroy', () => {
			const l = e.thumbs.swiper
			!l || l.destroyed || (i && l.destroy())
		}),
		Object.assign(e.thumbs, {init: r, update: o})
}
function yi({swiper: e, extendParams: t, emit: n, once: s}) {
	t({freeMode: {enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02}})
	function i() {
		const o = e.getTranslate()
		e.setTranslate(o), e.setTransition(0), (e.touchEventsData.velocities.length = 0), e.freeMode.onTouchEnd({currentPos: e.rtl ? e.translate : -e.translate})
	}
	function a() {
		const {touchEventsData: o, touches: l} = e
		o.velocities.length === 0 && o.velocities.push({position: l[e.isHorizontal() ? 'startX' : 'startY'], time: o.touchStartTime}), o.velocities.push({position: l[e.isHorizontal() ? 'currentX' : 'currentY'], time: W()})
	}
	function r({currentPos: o}) {
		const {params: l, wrapperEl: d, rtlTranslate: c, snapGrid: u, touchEventsData: p} = e,
			m = W() - p.touchStartTime
		if (o < -e.minTranslate()) {
			e.slideTo(e.activeIndex)
			return
		}
		if (o > -e.maxTranslate()) {
			e.slides.length < u.length ? e.slideTo(u.length - 1) : e.slideTo(e.slides.length - 1)
			return
		}
		if (l.freeMode.momentum) {
			if (p.velocities.length > 1) {
				const A = p.velocities.pop(),
					k = p.velocities.pop(),
					I = A.position - k.position,
					$ = A.time - k.time
				;(e.velocity = I / $), (e.velocity /= 2), Math.abs(e.velocity) < l.freeMode.minimumVelocity && (e.velocity = 0), ($ > 150 || W() - A.time > 300) && (e.velocity = 0)
			} else e.velocity = 0
			;(e.velocity *= l.freeMode.momentumVelocityRatio), (p.velocities.length = 0)
			let h = 1e3 * l.freeMode.momentumRatio
			const b = e.velocity * h
			let f = e.translate + b
			c && (f = -f)
			let v = !1,
				S
			const x = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio
			let P
			if (f < e.maxTranslate()) l.freeMode.momentumBounce ? (f + e.maxTranslate() < -x && (f = e.maxTranslate() - x), (S = e.maxTranslate()), (v = !0), (p.allowMomentumBounce = !0)) : (f = e.maxTranslate()), l.loop && l.centeredSlides && (P = !0)
			else if (f > e.minTranslate()) l.freeMode.momentumBounce ? (f - e.minTranslate() > x && (f = e.minTranslate() + x), (S = e.minTranslate()), (v = !0), (p.allowMomentumBounce = !0)) : (f = e.minTranslate()), l.loop && l.centeredSlides && (P = !0)
			else if (l.freeMode.sticky) {
				let A
				for (let k = 0; k < u.length; k += 1)
					if (u[k] > -f) {
						A = k
						break
					}
				Math.abs(u[A] - f) < Math.abs(u[A - 1] - f) || e.swipeDirection === 'next' ? (f = u[A]) : (f = u[A - 1]), (f = -f)
			}
			if (
				(P &&
					s('transitionEnd', () => {
						e.loopFix()
					}),
				e.velocity !== 0)
			) {
				if ((c ? (h = Math.abs((-f - e.translate) / e.velocity)) : (h = Math.abs((f - e.translate) / e.velocity)), l.freeMode.sticky)) {
					const A = Math.abs((c ? -f : f) - e.translate),
						k = e.slidesSizesGrid[e.activeIndex]
					A < k ? (h = l.speed) : A < 2 * k ? (h = l.speed * 1.5) : (h = l.speed * 2.5)
				}
			} else if (l.freeMode.sticky) {
				e.slideToClosest()
				return
			}
			l.freeMode.momentumBounce && v
				? (e.updateProgress(S),
				  e.setTransition(h),
				  e.setTranslate(f),
				  e.transitionStart(!0, e.swipeDirection),
				  (e.animating = !0),
				  Ee(d, () => {
						!e ||
							e.destroyed ||
							!p.allowMomentumBounce ||
							(n('momentumBounce'),
							e.setTransition(l.speed),
							setTimeout(() => {
								e.setTranslate(S),
									Ee(d, () => {
										!e || e.destroyed || e.transitionEnd()
									})
							}, 0))
				  }))
				: e.velocity
				? (n('_freeModeNoMomentumRelease'),
				  e.updateProgress(f),
				  e.setTransition(h),
				  e.setTranslate(f),
				  e.transitionStart(!0, e.swipeDirection),
				  e.animating ||
						((e.animating = !0),
						Ee(d, () => {
							!e || e.destroyed || e.transitionEnd()
						})))
				: e.updateProgress(f),
				e.updateActiveIndex(),
				e.updateSlidesClasses()
		} else if (l.freeMode.sticky) {
			e.slideToClosest()
			return
		} else l.freeMode && n('_freeModeNoMomentumRelease')
		;(!l.freeMode.momentum || m >= l.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
	}
	Object.assign(e, {freeMode: {onTouchStart: i, onTouchMove: a, onTouchEnd: r}})
}
function bi({swiper: e, extendParams: t}) {
	t({grid: {rows: 1, fill: 'column'}})
	let n, s, i
	const a = () => {
			let d = e.params.spaceBetween
			return typeof d == 'string' && d.indexOf('%') >= 0 ? (d = (parseFloat(d.replace('%', '')) / 100) * e.size) : typeof d == 'string' && (d = parseFloat(d)), d
		},
		r = d => {
			const {slidesPerView: c} = e.params,
				{rows: u, fill: p} = e.params.grid
			;(s = n / u), (i = Math.floor(d / u)), Math.floor(d / u) === d / u ? (n = d) : (n = Math.ceil(d / u) * u), c !== 'auto' && p === 'row' && (n = Math.max(n, c * u))
		},
		o = (d, c, u, p) => {
			const {slidesPerGroup: g} = e.params,
				m = a(),
				{rows: h, fill: b} = e.params.grid
			let f, v, S
			if (b === 'row' && g > 1) {
				const x = Math.floor(d / (g * h)),
					P = d - h * g * x,
					A = x === 0 ? g : Math.min(Math.ceil((u - x * h * g) / h), g)
				;(S = Math.floor(P / A)), (v = P - S * A + x * g), (f = v + (S * n) / h), (c.style.order = f)
			} else b === 'column' ? ((v = Math.floor(d / h)), (S = d - v * h), (v > i || (v === i && S === h - 1)) && ((S += 1), S >= h && ((S = 0), (v += 1)))) : ((S = Math.floor(d / s)), (v = d - S * s))
			c.style[p('margin-top')] = S !== 0 ? m && `${m}px` : ''
		},
		l = (d, c, u) => {
			const {centeredSlides: p, roundLengths: g} = e.params,
				m = a(),
				{rows: h} = e.params.grid
			if (((e.virtualSize = (d + m) * n), (e.virtualSize = Math.ceil(e.virtualSize / h) - m), (e.wrapperEl.style[u('width')] = `${e.virtualSize + m}px`), p)) {
				const b = []
				for (let f = 0; f < c.length; f += 1) {
					let v = c[f]
					g && (v = Math.floor(v)), c[f] < e.virtualSize + c[0] && b.push(v)
				}
				c.splice(0, c.length), c.push(...b)
			}
		}
	e.grid = {initSlides: r, updateSlide: o, updateWrapperSize: l}
}
function Si(e) {
	const t = this,
		{params: n, slidesEl: s} = t
	n.loop && t.loopDestroy()
	const i = a => {
		if (typeof a == 'string') {
			const r = document.createElement('div')
			;(r.innerHTML = a), s.append(r.children[0]), (r.innerHTML = '')
		} else s.append(a)
	}
	if (typeof e == 'object' && 'length' in e) for (let a = 0; a < e.length; a += 1) e[a] && i(e[a])
	else i(e)
	t.recalcSlides(), n.loop && t.loopCreate(), (!n.observer || t.isElement) && t.update()
}
function Ei(e) {
	const t = this,
		{params: n, activeIndex: s, slidesEl: i} = t
	n.loop && t.loopDestroy()
	let a = s + 1
	const r = o => {
		if (typeof o == 'string') {
			const l = document.createElement('div')
			;(l.innerHTML = o), i.prepend(l.children[0]), (l.innerHTML = '')
		} else i.prepend(o)
	}
	if (typeof e == 'object' && 'length' in e) {
		for (let o = 0; o < e.length; o += 1) e[o] && r(e[o])
		a = s + e.length
	} else r(e)
	t.recalcSlides(), n.loop && t.loopCreate(), (!n.observer || t.isElement) && t.update(), t.slideTo(a, 0, !1)
}
function Ti(e, t) {
	const n = this,
		{params: s, activeIndex: i, slidesEl: a} = n
	let r = i
	s.loop && ((r -= n.loopedSlides), n.loopDestroy(), n.recalcSlides())
	const o = n.slides.length
	if (e <= 0) {
		n.prependSlide(t)
		return
	}
	if (e >= o) {
		n.appendSlide(t)
		return
	}
	let l = r > e ? r + 1 : r
	const d = []
	for (let c = o - 1; c >= e; c -= 1) {
		const u = n.slides[c]
		u.remove(), d.unshift(u)
	}
	if (typeof t == 'object' && 'length' in t) {
		for (let c = 0; c < t.length; c += 1) t[c] && a.append(t[c])
		l = r > e ? r + t.length : r
	} else a.append(t)
	for (let c = 0; c < d.length; c += 1) a.append(d[c])
	n.recalcSlides(), s.loop && n.loopCreate(), (!s.observer || n.isElement) && n.update(), s.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
}
function xi(e) {
	const t = this,
		{params: n, activeIndex: s} = t
	let i = s
	n.loop && ((i -= t.loopedSlides), t.loopDestroy())
	let a = i,
		r
	if (typeof e == 'object' && 'length' in e) {
		for (let o = 0; o < e.length; o += 1) (r = e[o]), t.slides[r] && t.slides[r].remove(), r < a && (a -= 1)
		a = Math.max(a, 0)
	} else (r = e), t.slides[r] && t.slides[r].remove(), r < a && (a -= 1), (a = Math.max(a, 0))
	t.recalcSlides(), n.loop && t.loopCreate(), (!n.observer || t.isElement) && t.update(), n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
}
function Mi() {
	const e = this,
		t = []
	for (let n = 0; n < e.slides.length; n += 1) t.push(n)
	e.removeSlide(t)
}
function Ci({swiper: e}) {
	Object.assign(e, {appendSlide: Si.bind(e), prependSlide: Ei.bind(e), addSlide: Ti.bind(e), removeSlide: xi.bind(e), removeAllSlides: Mi.bind(e)})
}
function he(e) {
	const {effect: t, swiper: n, on: s, setTranslate: i, setTransition: a, overwriteParams: r, perspective: o, recreateShadows: l, getEffectParams: d} = e
	s('beforeInit', () => {
		if (n.params.effect !== t) return
		n.classNames.push(`${n.params.containerModifierClass}${t}`), o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`)
		const u = r ? r() : {}
		Object.assign(n.params, u), Object.assign(n.originalParams, u)
	}),
		s('setTranslate', () => {
			n.params.effect === t && i()
		}),
		s('setTransition', (u, p) => {
			n.params.effect === t && a(p)
		}),
		s('transitionEnd', () => {
			if (n.params.effect === t && l) {
				if (!d || !d().slideShadows) return
				n.slides.forEach(u => {
					u.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(p => p.remove())
				}),
					l()
			}
		})
	let c
	s('virtualUpdate', () => {
		n.params.effect === t &&
			(n.slides.length || (c = !0),
			requestAnimationFrame(() => {
				c && n.slides && n.slides.length && (i(), (c = !1))
			}))
	})
}
function Le(e, t) {
	const n = ue(t)
	return n !== t && ((n.style.backfaceVisibility = 'hidden'), (n.style['-webkit-backface-visibility'] = 'hidden')), n
}
function We({swiper: e, duration: t, transformElements: n, allSlides: s}) {
	const {activeIndex: i} = e,
		a = r => (r.parentElement ? r.parentElement : e.slides.filter(l => l.shadowEl && l.shadowEl === r.parentNode)[0])
	if (e.params.virtualTranslate && t !== 0) {
		let r = !1,
			o
		s
			? (o = n)
			: (o = n.filter(l => {
					const d = l.classList.contains('swiper-slide-transform') ? a(l) : l
					return e.getSlideIndex(d) === i
			  })),
			o.forEach(l => {
				Ee(l, () => {
					if (r || !e || e.destroyed) return
					;(r = !0), (e.animating = !1)
					const d = new window.CustomEvent('transitionend', {bubbles: !0, cancelable: !0})
					e.wrapperEl.dispatchEvent(d)
				})
			})
	}
}
function Pi({swiper: e, extendParams: t, on: n}) {
	t({fadeEffect: {crossFade: !1}}),
		he({
			effect: 'fade',
			swiper: e,
			on: n,
			setTranslate: () => {
				const {slides: a} = e,
					r = e.params.fadeEffect
				for (let o = 0; o < a.length; o += 1) {
					const l = e.slides[o]
					let c = -l.swiperSlideOffset
					e.params.virtualTranslate || (c -= e.translate)
					let u = 0
					e.isHorizontal() || ((u = c), (c = 0))
					const p = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(l.progress), 0) : 1 + Math.min(Math.max(l.progress, -1), 0),
						g = Le(r, l)
					;(g.style.opacity = p), (g.style.transform = `translate3d(${c}px, ${u}px, 0px)`)
				}
			},
			setTransition: a => {
				const r = e.slides.map(o => ue(o))
				r.forEach(o => {
					o.style.transitionDuration = `${a}ms`
				}),
					We({swiper: e, duration: a, transformElements: r, allSlides: !0})
			},
			overwriteParams: () => ({slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode}),
		})
}
function Ai({swiper: e, extendParams: t, on: n}) {
	t({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94}})
	const s = (o, l, d) => {
		let c = d ? o.querySelector('.swiper-slide-shadow-left') : o.querySelector('.swiper-slide-shadow-top'),
			u = d ? o.querySelector('.swiper-slide-shadow-right') : o.querySelector('.swiper-slide-shadow-bottom')
		c || ((c = K('div', `swiper-slide-shadow-${d ? 'left' : 'top'}`)), o.append(c)), u || ((u = K('div', `swiper-slide-shadow-${d ? 'right' : 'bottom'}`)), o.append(u)), c && (c.style.opacity = Math.max(-l, 0)), u && (u.style.opacity = Math.max(l, 0))
	}
	he({
		effect: 'cube',
		swiper: e,
		on: n,
		setTranslate: () => {
			const {el: o, wrapperEl: l, slides: d, width: c, height: u, rtlTranslate: p, size: g, browser: m} = e,
				h = e.params.cubeEffect,
				b = e.isHorizontal(),
				f = e.virtual && e.params.virtual.enabled
			let v = 0,
				S
			h.shadow && (b ? ((S = e.slidesEl.querySelector('.swiper-cube-shadow')), S || ((S = K('div', 'swiper-cube-shadow')), e.slidesEl.append(S)), (S.style.height = `${c}px`)) : ((S = o.querySelector('.swiper-cube-shadow')), S || ((S = K('div', 'swiper-cube-shadow')), o.append(S))))
			for (let P = 0; P < d.length; P += 1) {
				const A = d[P]
				let k = P
				f && (k = parseInt(A.getAttribute('data-swiper-slide-index'), 10))
				let I = k * 90,
					$ = Math.floor(I / 360)
				p && ((I = -I), ($ = Math.floor(-I / 360)))
				const R = Math.max(Math.min(A.progress, 1), -1)
				let M = 0,
					E = 0,
					y = 0
				k % 4 === 0 ? ((M = -$ * 4 * g), (y = 0)) : (k - 1) % 4 === 0 ? ((M = 0), (y = -$ * 4 * g)) : (k - 2) % 4 === 0 ? ((M = g + $ * 4 * g), (y = g)) : (k - 3) % 4 === 0 && ((M = -g), (y = 3 * g + g * 4 * $)), p && (M = -M), b || ((E = M), (M = 0))
				const T = `rotateX(${b ? 0 : -I}deg) rotateY(${b ? I : 0}deg) translate3d(${M}px, ${E}px, ${y}px)`
				R <= 1 && R > -1 && ((v = k * 90 + R * 90), p && (v = -k * 90 - R * 90)), (A.style.transform = T), h.slideShadows && s(A, R, b)
			}
			if (((l.style.transformOrigin = `50% 50% -${g / 2}px`), (l.style['-webkit-transform-origin'] = `50% 50% -${g / 2}px`), h.shadow))
				if (b) S.style.transform = `translate3d(0px, ${c / 2 + h.shadowOffset}px, ${-c / 2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`
				else {
					const P = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
						A = 1.5 - (Math.sin((P * 2 * Math.PI) / 360) / 2 + Math.cos((P * 2 * Math.PI) / 360) / 2),
						k = h.shadowScale,
						I = h.shadowScale / A,
						$ = h.shadowOffset
					S.style.transform = `scale3d(${k}, 1, ${I}) translate3d(0px, ${u / 2 + $}px, ${-u / 2 / I}px) rotateX(-90deg)`
				}
			const x = (m.isSafari || m.isWebView) && m.needPerspectiveFix ? -g / 2 : 0
			;(l.style.transform = `translate3d(0px,0,${x}px) rotateX(${e.isHorizontal() ? 0 : v}deg) rotateY(${e.isHorizontal() ? -v : 0}deg)`), l.style.setProperty('--swiper-cube-translate-z', `${x}px`)
		},
		setTransition: o => {
			const {el: l, slides: d} = e
			if (
				(d.forEach(c => {
					;(c.style.transitionDuration = `${o}ms`),
						c.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(u => {
							u.style.transitionDuration = `${o}ms`
						})
				}),
				e.params.cubeEffect.shadow && !e.isHorizontal())
			) {
				const c = l.querySelector('.swiper-cube-shadow')
				c && (c.style.transitionDuration = `${o}ms`)
			}
		},
		recreateShadows: () => {
			const o = e.isHorizontal()
			e.slides.forEach(l => {
				const d = Math.max(Math.min(l.progress, 1), -1)
				s(l, d, o)
			})
		},
		getEffectParams: () => e.params.cubeEffect,
		perspective: () => !0,
		overwriteParams: () => ({slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0}),
	})
}
function me(e, t, n) {
	const s = `swiper-slide-shadow${n ? `-${n}` : ''}`,
		i = ue(t)
	let a = i.querySelector(`.${s}`)
	return a || ((a = K('div', `swiper-slide-shadow${n ? `-${n}` : ''}`)), i.append(a)), a
}
function Li({swiper: e, extendParams: t, on: n}) {
	t({flipEffect: {slideShadows: !0, limitRotation: !0}})
	const s = (o, l, d) => {
		let c = e.isHorizontal() ? o.querySelector('.swiper-slide-shadow-left') : o.querySelector('.swiper-slide-shadow-top'),
			u = e.isHorizontal() ? o.querySelector('.swiper-slide-shadow-right') : o.querySelector('.swiper-slide-shadow-bottom')
		c || (c = me(d, o, e.isHorizontal() ? 'left' : 'top')), u || (u = me(d, o, e.isHorizontal() ? 'right' : 'bottom')), c && (c.style.opacity = Math.max(-l, 0)), u && (u.style.opacity = Math.max(l, 0))
	}
	he({
		effect: 'flip',
		swiper: e,
		on: n,
		setTranslate: () => {
			const {slides: o, rtlTranslate: l} = e,
				d = e.params.flipEffect
			for (let c = 0; c < o.length; c += 1) {
				const u = o[c]
				let p = u.progress
				e.params.flipEffect.limitRotation && (p = Math.max(Math.min(u.progress, 1), -1))
				const g = u.swiperSlideOffset
				let h = -180 * p,
					b = 0,
					f = e.params.cssMode ? -g - e.translate : -g,
					v = 0
				e.isHorizontal() ? l && (h = -h) : ((v = f), (f = 0), (b = -h), (h = 0)), (u.style.zIndex = -Math.abs(Math.round(p)) + o.length), d.slideShadows && s(u, p, d)
				const S = `translate3d(${f}px, ${v}px, 0px) rotateX(${b}deg) rotateY(${h}deg)`,
					x = Le(d, u)
				x.style.transform = S
			}
		},
		setTransition: o => {
			const l = e.slides.map(d => ue(d))
			l.forEach(d => {
				;(d.style.transitionDuration = `${o}ms`),
					d.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(c => {
						c.style.transitionDuration = `${o}ms`
					})
			}),
				We({swiper: e, duration: o, transformElements: l})
		},
		recreateShadows: () => {
			const o = e.params.flipEffect
			e.slides.forEach(l => {
				let d = l.progress
				e.params.flipEffect.limitRotation && (d = Math.max(Math.min(l.progress, 1), -1)), s(l, d, o)
			})
		},
		getEffectParams: () => e.params.flipEffect,
		perspective: () => !0,
		overwriteParams: () => ({slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode}),
	})
}
function Oi({swiper: e, extendParams: t, on: n}) {
	t({coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}}),
		he({
			effect: 'coverflow',
			swiper: e,
			on: n,
			setTranslate: () => {
				const {width: a, height: r, slides: o, slidesSizesGrid: l} = e,
					d = e.params.coverflowEffect,
					c = e.isHorizontal(),
					u = e.translate,
					p = c ? -u + a / 2 : -u + r / 2,
					g = c ? d.rotate : -d.rotate,
					m = d.depth
				for (let h = 0, b = o.length; h < b; h += 1) {
					const f = o[h],
						v = l[h],
						S = f.swiperSlideOffset,
						x = (p - S - v / 2) / v,
						P = typeof d.modifier == 'function' ? d.modifier(x) : x * d.modifier
					let A = c ? g * P : 0,
						k = c ? 0 : g * P,
						I = -m * Math.abs(P),
						$ = d.stretch
					typeof $ == 'string' && $.indexOf('%') !== -1 && ($ = (parseFloat(d.stretch) / 100) * v)
					let R = c ? 0 : $ * P,
						M = c ? $ * P : 0,
						E = 1 - (1 - d.scale) * Math.abs(P)
					Math.abs(M) < 0.001 && (M = 0), Math.abs(R) < 0.001 && (R = 0), Math.abs(I) < 0.001 && (I = 0), Math.abs(A) < 0.001 && (A = 0), Math.abs(k) < 0.001 && (k = 0), Math.abs(E) < 0.001 && (E = 0)
					const y = `translate3d(${M}px,${R}px,${I}px)  rotateX(${k}deg) rotateY(${A}deg) scale(${E})`,
						T = Le(d, f)
					if (((T.style.transform = y), (f.style.zIndex = -Math.abs(Math.round(P)) + 1), d.slideShadows)) {
						let D = c ? f.querySelector('.swiper-slide-shadow-left') : f.querySelector('.swiper-slide-shadow-top'),
							C = c ? f.querySelector('.swiper-slide-shadow-right') : f.querySelector('.swiper-slide-shadow-bottom')
						D || (D = me(d, f, c ? 'left' : 'top')), C || (C = me(d, f, c ? 'right' : 'bottom')), D && (D.style.opacity = P > 0 ? P : 0), C && (C.style.opacity = -P > 0 ? -P : 0)
					}
				}
			},
			setTransition: a => {
				e.slides
					.map(o => ue(o))
					.forEach(o => {
						;(o.style.transitionDuration = `${a}ms`),
							o.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(l => {
								l.style.transitionDuration = `${a}ms`
							})
					})
			},
			perspective: () => !0,
			overwriteParams: () => ({watchSlidesProgress: !0}),
		})
}
function Ii({swiper: e, extendParams: t, on: n}) {
	t({creativeEffect: {limitProgress: 1, shadowPerProgress: !1, progressMultiplier: 1, perspective: !0, prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}, next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}}})
	const s = r => (typeof r == 'string' ? r : `${r}px`)
	he({
		effect: 'creative',
		swiper: e,
		on: n,
		setTranslate: () => {
			const {slides: r, wrapperEl: o, slidesSizesGrid: l} = e,
				d = e.params.creativeEffect,
				{progressMultiplier: c} = d,
				u = e.params.centeredSlides
			if (u) {
				const p = l[0] / 2 - e.params.slidesOffsetBefore || 0
				o.style.transform = `translateX(calc(50% - ${p}px))`
			}
			for (let p = 0; p < r.length; p += 1) {
				const g = r[p],
					m = g.progress,
					h = Math.min(Math.max(g.progress, -d.limitProgress), d.limitProgress)
				let b = h
				u || (b = Math.min(Math.max(g.originalProgress, -d.limitProgress), d.limitProgress))
				const f = g.swiperSlideOffset,
					v = [e.params.cssMode ? -f - e.translate : -f, 0, 0],
					S = [0, 0, 0]
				let x = !1
				e.isHorizontal() || ((v[1] = v[0]), (v[0] = 0))
				let P = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1}
				h < 0 ? ((P = d.next), (x = !0)) : h > 0 && ((P = d.prev), (x = !0)),
					v.forEach((E, y) => {
						v[y] = `calc(${E}px + (${s(P.translate[y])} * ${Math.abs(h * c)}))`
					}),
					S.forEach((E, y) => {
						S[y] = P.rotate[y] * Math.abs(h * c)
					}),
					(g.style.zIndex = -Math.abs(Math.round(m)) + r.length)
				const A = v.join(', '),
					k = `rotateX(${S[0]}deg) rotateY(${S[1]}deg) rotateZ(${S[2]}deg)`,
					I = b < 0 ? `scale(${1 + (1 - P.scale) * b * c})` : `scale(${1 - (1 - P.scale) * b * c})`,
					$ = b < 0 ? 1 + (1 - P.opacity) * b * c : 1 - (1 - P.opacity) * b * c,
					R = `translate3d(${A}) ${k} ${I}`
				if ((x && P.shadow) || !x) {
					let E = g.querySelector('.swiper-slide-shadow')
					if ((!E && P.shadow && (E = me(d, g)), E)) {
						const y = d.shadowPerProgress ? h * (1 / d.limitProgress) : h
						E.style.opacity = Math.min(Math.max(Math.abs(y), 0), 1)
					}
				}
				const M = Le(d, g)
				;(M.style.transform = R), (M.style.opacity = $), P.origin && (M.style.transformOrigin = P.origin)
			}
		},
		setTransition: r => {
			const o = e.slides.map(l => ue(l))
			o.forEach(l => {
				;(l.style.transitionDuration = `${r}ms`),
					l.querySelectorAll('.swiper-slide-shadow').forEach(d => {
						d.style.transitionDuration = `${r}ms`
					})
			}),
				We({swiper: e, duration: r, transformElements: o, allSlides: !0})
		},
		perspective: () => e.params.creativeEffect.perspective,
		overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode}),
	})
}
function zi({swiper: e, extendParams: t, on: n}) {
	t({cardsEffect: {slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}),
		he({
			effect: 'cards',
			swiper: e,
			on: n,
			setTranslate: () => {
				const {slides: a, activeIndex: r} = e,
					o = e.params.cardsEffect,
					{startTranslate: l, isTouched: d} = e.touchEventsData,
					c = e.translate
				for (let u = 0; u < a.length; u += 1) {
					const p = a[u],
						g = p.progress,
						m = Math.min(Math.max(g, -4), 4)
					let h = p.swiperSlideOffset
					e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (h -= a[0].swiperSlideOffset)
					let b = e.params.cssMode ? -h - e.translate : -h,
						f = 0
					const v = -100 * Math.abs(m)
					let S = 1,
						x = -o.perSlideRotate * m,
						P = o.perSlideOffset - Math.abs(m) * 0.75
					const A = e.virtual && e.params.virtual.enabled ? e.virtual.from + u : u,
						k = (A === r || A === r - 1) && m > 0 && m < 1 && (d || e.params.cssMode) && c < l,
						I = (A === r || A === r + 1) && m < 0 && m > -1 && (d || e.params.cssMode) && c > l
					if (k || I) {
						const E = (1 - Math.abs((Math.abs(m) - 0.5) / 0.5)) ** 0.5
						;(x += -28 * m * E), (S += -0.5 * E), (P += 96 * E), (f = `${-25 * E * Math.abs(m)}%`)
					}
					if ((m < 0 ? (b = `calc(${b}px + (${P * Math.abs(m)}%))`) : m > 0 ? (b = `calc(${b}px + (-${P * Math.abs(m)}%))`) : (b = `${b}px`), !e.isHorizontal())) {
						const E = f
						;(f = b), (b = E)
					}
					const $ = m < 0 ? `${1 + (1 - S) * m}` : `${1 - (1 - S) * m}`,
						R = `
        translate3d(${b}, ${f}, ${v}px)
        rotateZ(${o.rotate ? x : 0}deg)
        scale(${$})
      `
					if (o.slideShadows) {
						let E = p.querySelector('.swiper-slide-shadow')
						E || (E = me(o, p)), E && (E.style.opacity = Math.min(Math.max((Math.abs(m) - 0.5) / 0.5, 0), 1))
					}
					p.style.zIndex = -Math.abs(Math.round(g)) + a.length
					const M = Le(o, p)
					M.style.transform = R
				}
			},
			setTransition: a => {
				const r = e.slides.map(o => ue(o))
				r.forEach(o => {
					;(o.style.transitionDuration = `${a}ms`),
						o.querySelectorAll('.swiper-slide-shadow').forEach(l => {
							l.style.transitionDuration = `${a}ms`
						})
				}),
					We({swiper: e, duration: a, transformElements: r})
			},
			perspective: () => !0,
			overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode}),
		})
}
const Di = [ai, ii, ri, oi, li, di, ci, ui, fi, mi, pi, hi, gi, vi, yi, bi, Ci, Pi, Ai, Li, Oi, Ii, zi]
Y.use(Di)
const lt = new Y('.mySwiper', {slidesPerView: vn(), spaceBetween: 10, navigation: {nextEl: '.employees__swiper-button-next', prevEl: '.employees__swiper-button-prev'}, grid: {rows: 2}}),
	dt = new Y('.mySwiper2', {slidesPerView: yn(), spaceBetween: 30, navigation: {nextEl: '.sponsors__swiper-button-next', prevEl: '.sponsors__swiper-button-prev'}})
function vn() {
	return window.innerWidth <= 1450 && window.innerWidth > 1024 ? 3 : window.innerWidth <= 1024 && window.innerWidth > 768 ? 2 : window.innerWidth <= 768 ? 1 : 4
}
function yn() {
	return window.innerWidth <= 1100 && window.innerWidth > 920 ? 3 : window.innerWidth <= 920 && window.innerWidth > 576 ? 2 : window.innerWidth <= 576 ? 1 : 4
}
window.addEventListener('resize', () => {
	try {
		lt && ((lt.params.slidesPerView = vn()), lt.update())
	} catch {}
	try {
		dt && ((dt.params.slidesPerView = yn()), dt.update())
	} catch {}
})
function ki(e) {
	if (Array.isArray(e)) {
		for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
		return n
	} else return Array.from(e)
}
var Mt = !1
if (typeof window < 'u') {
	var Vt = {
		get passive() {
			Mt = !0
		},
	}
	window.addEventListener('testPassive', null, Vt), window.removeEventListener('testPassive', null, Vt)
}
var we = typeof window < 'u' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)),
	de = [],
	Ne = !1,
	bn = -1,
	Te = void 0,
	re = void 0,
	xe = void 0,
	Sn = function (t) {
		return de.some(function (n) {
			return !!(n.options.allowTouchMove && n.options.allowTouchMove(t))
		})
	},
	He = function (t) {
		var n = t || window.event
		return Sn(n.target) || n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(), !1)
	},
	$i = function (t) {
		if (xe === void 0) {
			var n = !!t && t.reserveScrollBarGap === !0,
				s = window.innerWidth - document.documentElement.clientWidth
			if (n && s > 0) {
				var i = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10)
				;(xe = document.body.style.paddingRight), (document.body.style.paddingRight = i + s + 'px')
			}
		}
		Te === void 0 && ((Te = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
	},
	Ri = function () {
		xe !== void 0 && ((document.body.style.paddingRight = xe), (xe = void 0)), Te !== void 0 && ((document.body.style.overflow = Te), (Te = void 0))
	},
	Bi = function () {
		return window.requestAnimationFrame(function () {
			if (re === void 0) {
				re = {position: document.body.style.position, top: document.body.style.top, left: document.body.style.left}
				var t = window,
					n = t.scrollY,
					s = t.scrollX,
					i = t.innerHeight
				;(document.body.style.position = 'fixed'),
					(document.body.style.top = -n),
					(document.body.style.left = -s),
					setTimeout(function () {
						return window.requestAnimationFrame(function () {
							var a = i - window.innerHeight
							a && n >= i && (document.body.style.top = -(n + a))
						})
					}, 300)
			}
		})
	},
	_i = function () {
		if (re !== void 0) {
			var t = -parseInt(document.body.style.top, 10),
				n = -parseInt(document.body.style.left, 10)
			;(document.body.style.position = re.position), (document.body.style.top = re.top), (document.body.style.left = re.left), window.scrollTo(n, t), (re = void 0)
		}
	},
	wi = function (t) {
		return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1
	},
	Ni = function (t, n) {
		var s = t.targetTouches[0].clientY - bn
		return Sn(t.target) ? !1 : (n && n.scrollTop === 0 && s > 0) || (wi(n) && s < 0) ? He(t) : (t.stopPropagation(), !0)
	},
	Hi = function (t, n) {
		if (!t) {
			console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.')
			return
		}
		if (
			!de.some(function (i) {
				return i.targetElement === t
			})
		) {
			var s = {targetElement: t, options: n || {}}
			;(de = [].concat(ki(de), [s])),
				we ? Bi() : $i(n),
				we &&
					((t.ontouchstart = function (i) {
						i.targetTouches.length === 1 && (bn = i.targetTouches[0].clientY)
					}),
					(t.ontouchmove = function (i) {
						i.targetTouches.length === 1 && Ni(i, t)
					}),
					Ne || (document.addEventListener('touchmove', He, Mt ? {passive: !1} : void 0), (Ne = !0)))
		}
	},
	En = function (t) {
		if (!t) {
			console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.')
			return
		}
		;(de = de.filter(function (n) {
			return n.targetElement !== t
		})),
			we && ((t.ontouchstart = null), (t.ontouchmove = null), Ne && de.length === 0 && (document.removeEventListener('touchmove', He, Mt ? {passive: !1} : void 0), (Ne = !1))),
			we ? _i() : Ri()
	}
const oe = document.querySelector('[data-menu]'),
	Fe = document.querySelector('[data-menu-open]'),
	Fi = document.querySelector('[data-menu-close]'),
	Gi = document.querySelectorAll('.navigation__link')
Gi.forEach(e => {
	e.addEventListener('click', () => {
		;(oe.dataset.menu = 'close'),
			En(oe),
			(Fe.innerHTML = `
		<svg class="navigation__image-icon">
			<use xlink:href="./assets/sprite.svg#menu" />
		</svg>`)
	})
})
function Tn() {
	oe.getAttribute('data-menu') === 'open'
		? ((oe.dataset.menu = 'close'),
		  En(oe),
		  (Fe.innerHTML = `
		<svg class="navigation__image-icon">
			<use xlink:href="./assets/sprite.svg#menu" />
		</svg>`))
		: ((oe.dataset.menu = 'open'),
		  Hi(oe),
		  (Fe.innerHTML = `
		<svg class="navigation__image-icon">
			<use xlink:href="./assets/sprite.svg#close" />
		</svg>`))
}
Fe.addEventListener('click', Tn)
Fi.addEventListener('click', Tn)
const Xi = document.querySelectorAll('[data-src]'),
	qi = {threshold: 0, rootMargin: '300px 0px 300px 0px'}
function Vi(e) {
	const t = e.getAttribute('data-src')
	t && (e.tagName === 'IMG' ? (e.src = t) : (e.srcset = t))
}
const Yi = new IntersectionObserver((e, t) => {
	e.forEach(n => {
		if (n.isIntersecting) Vi(n.target), t.unobserve(n.target)
		else return
	})
}, qi)
Xi.forEach(e => {
	Yi.observe(e)
})
