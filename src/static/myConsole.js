/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */

window.onerror = function (error) {
  console.error(error)
}

// define a new console
var console = (function (oldCons) {
  return {
    log (text) {
      oldCons.log(text)
      for (var t = [], r = 0, i = arguments.length; r < i; r++) {
        const o = e.formatOutput(arguments[r])
        t.push(o)
      }
      const a = t.join(' ')
      e.writeOutput(a)
    },
    info (text) {
      oldCons.info(text)
      // Your code
    },
    warn (text) {
      oldCons.warn(text)
      // Your code
    },
    error (text) {
      oldCons.error(text)
      e.writeOutput(text)
    }
  }
})(window.console)

// Then redefine the old console
window.console = console

const e = {
  formatArray (t) {
    'use strict'
    for (var e = '', n = 0, r = t.length; n < r; n++) {
      typeof t[n] === 'string'
        ? (e += '"' + t[n] + '"')
        : Array.isArray(t[n])
          ? ((e += 'Array ['), (e += this.formatArray(t[n])), (e += ']'))
          : (e += this.formatOutput(t[n])),
      n < t.length - 1 && (e += ', ')
    }
    return e
  },
  formatObject (t) {
    'use strict'
    const e = t.constructor.name
    if (e === 'String') { return `String { "${t.valueOf()}" }` }
    if (t === JSON) { return 'JSON {}' }
    if (e.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/)) { return e + ' {}' }
    if (
      e.match(
        /^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array|BigInt64Array|BigUint64Array)$/
      )
    ) { return t.length > 0 ? e + ' [' + this.formatArray(t) + ']' : e + ' []' }
    if (e === 'Symbol' && void 0 !== t) { return t.toString() }
    if (e === 'Object') {
      let n = ''
      let r = !0
      for (const i in t) {
        t.hasOwnProperty(i) &&
          (r ? (r = !1) : (n += ', '),
          (n = n + i + ': ' + this.formatOutput(t[i])))
      }
      return e + ' { ' + n + ' }'
    }
    return t
  },
  writeOutput (t) {
    'use strict'
    const e = document.querySelector('#console code')
    const n = e.textContent
    const r = '> ' + t + '\n'
    e.textContent = n + r
  },
  formatOutput (t) {
    return void 0 === t || t === null || typeof t === 'boolean'
      ? String(t)
      : typeof t === 'number'
        ? Object.is(t, -0)
          ? '-0'
          : String(t)
        : typeof t === 'bigint'
          ? String(t) + 'n'
          : typeof t === 'string'
            ? t.includes('"')
              ? "'" + t + "'"
              : '"' + t + '"'
            : Array.isArray(t)
              ? 'Array [' + this.formatArray(t) + ']'
              : this.formatObject(t)
  }
}
