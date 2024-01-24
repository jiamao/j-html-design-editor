/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

// 支持的样式属性列表
var JElementStyleMap = /** @class */ (function (_super) {
    __extends(JElementStyleMap, _super);
    function JElementStyleMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JElementStyleMap;
}(EventEmitter));
// 样式属性集合
var JElementStyleProperty = /** @class */ (function (_super) {
    __extends(JElementStyleProperty, _super);
    function JElementStyleProperty() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.accentColor = '';
        _this.alignContent = '';
        _this.alignItems = '';
        _this.alignSelf = '';
        _this.alignmentBaseline = '';
        _this.all = '';
        _this.animation = '';
        _this.animationComposition = '';
        _this.animationDelay = '';
        _this.animationDirection = '';
        _this.animationDuration = '';
        _this.animationFillMode = '';
        _this.animationIterationCount = '';
        _this.animationName = '';
        _this.animationPlayState = '';
        _this.animationTimingFunction = '';
        _this.appearance = '';
        _this.aspectRatio = '';
        _this.backdropFilter = '';
        _this.backfaceVisibility = '';
        _this.background = '';
        _this.backgroundAttachment = '';
        _this.backgroundBlendMode = '';
        _this.backgroundClip = '';
        _this.backgroundColor = '';
        _this.backgroundImage = '';
        _this.backgroundOrigin = '';
        _this.backgroundPosition = '';
        _this.backgroundPositionX = '';
        _this.backgroundPositionY = '';
        _this.backgroundRepeat = '';
        _this.backgroundSize = '';
        _this.baselineShift = '';
        _this.blockSize = '';
        _this.border = '';
        _this.borderBlock = '';
        _this.borderBlockColor = '';
        _this.borderBlockEnd = '';
        _this.borderBlockEndColor = '';
        _this.borderBlockEndStyle = '';
        _this.borderBlockEndWidth = '';
        _this.borderBlockStart = '';
        _this.borderBlockStartColor = '';
        _this.borderBlockStartStyle = '';
        _this.borderBlockStartWidth = '';
        _this.borderBlockStyle = '';
        _this.borderBlockWidth = '';
        _this.borderBottom = '';
        _this.borderBottomColor = '';
        _this.borderBottomLeftRadius = '';
        _this.borderBottomRightRadius = '';
        _this.borderBottomStyle = '';
        _this.borderBottomWidth = '';
        _this.borderCollapse = '';
        _this.borderColor = '';
        _this.borderEndEndRadius = '';
        _this.borderEndStartRadius = '';
        _this.borderImage = '';
        _this.borderImageOutset = '';
        _this.borderImageRepeat = '';
        _this.borderImageSlice = '';
        _this.borderImageSource = '';
        _this.borderImageWidth = '';
        _this.borderInline = '';
        _this.borderInlineColor = '';
        _this.borderInlineEnd = '';
        _this.borderInlineEndColor = '';
        _this.borderInlineEndStyle = '';
        _this.borderInlineEndWidth = '';
        _this.borderInlineStart = '';
        _this.borderInlineStartColor = '';
        _this.borderInlineStartStyle = '';
        _this.borderInlineStartWidth = '';
        _this.borderInlineStyle = '';
        _this.borderInlineWidth = '';
        _this.borderLeft = '';
        _this.borderLeftColor = '';
        _this.borderLeftStyle = '';
        _this.borderLeftWidth = '';
        _this.borderRadius = '';
        _this.borderRight = '';
        _this.borderRightColor = '';
        _this.borderRightStyle = '';
        _this.borderRightWidth = '';
        _this.borderSpacing = '';
        _this.borderStartEndRadius = '';
        _this.borderStartStartRadius = '';
        _this.borderStyle = '';
        _this.borderTop = '';
        _this.borderTopColor = '';
        _this.borderTopLeftRadius = '';
        _this.borderTopRightRadius = '';
        _this.borderTopStyle = '';
        _this.borderTopWidth = '';
        _this.borderWidth = '';
        _this.bottom = '';
        _this.boxShadow = '';
        _this.boxSizing = '';
        _this.breakAfter = '';
        _this.breakBefore = '';
        _this.breakInside = '';
        _this.captionSide = '';
        _this.caretColor = '';
        _this.clear = '';
        _this.clip = '';
        _this.clipPath = '';
        _this.clipRule = '';
        _this.color = '';
        _this.colorInterpolation = '';
        _this.colorInterpolationFilters = '';
        _this.colorScheme = '';
        _this.columnCount = '';
        _this.columnFill = '';
        _this.columnGap = '';
        _this.columnRule = '';
        _this.columnRuleColor = '';
        _this.columnRuleStyle = '';
        _this.columnRuleWidth = '';
        _this.columnSpan = '';
        _this.columnWidth = '';
        _this.columns = '';
        _this.contain = '';
        _this.containIntrinsicBlockSize = '';
        _this.containIntrinsicHeight = '';
        _this.containIntrinsicInlineSize = '';
        _this.containIntrinsicSize = '';
        _this.containIntrinsicWidth = '';
        _this.container = '';
        _this.containerName = '';
        _this.containerType = '';
        _this.content = '';
        _this.counterIncrement = '';
        _this.counterReset = '';
        _this.counterSet = '';
        _this.cssFloat = '';
        _this.cssText = '';
        _this.cursor = '';
        _this.direction = '';
        _this.display = '';
        _this.dominantBaseline = '';
        _this.emptyCells = '';
        _this.fill = '';
        _this.fillOpacity = '';
        _this.fillRule = '';
        _this.filter = '';
        _this.flex = '';
        _this.flexBasis = '';
        _this.flexDirection = '';
        _this.flexFlow = '';
        _this.flexGrow = '';
        _this.flexShrink = '';
        _this.flexWrap = '';
        _this.float = '';
        _this.floodColor = '';
        _this.floodOpacity = '';
        _this.font = '';
        _this.fontFamily = '';
        _this.fontFeatureSettings = '';
        _this.fontKerning = '';
        _this.fontOpticalSizing = '';
        _this.fontPalette = '';
        _this.fontSize = '';
        _this.fontSizeAdjust = '';
        _this.fontStretch = '';
        _this.fontStyle = '';
        _this.fontSynthesis = '';
        _this.fontSynthesisSmallCaps = '';
        _this.fontSynthesisStyle = '';
        _this.fontSynthesisWeight = '';
        _this.fontVariant = '';
        _this.fontVariantAlternates = '';
        _this.fontVariantCaps = '';
        _this.fontVariantEastAsian = '';
        _this.fontVariantLigatures = '';
        _this.fontVariantNumeric = '';
        _this.fontVariantPosition = '';
        _this.fontVariationSettings = '';
        _this.fontWeight = '';
        _this.forcedColorAdjust = '';
        _this.gap = '';
        _this.grid = '';
        _this.gridArea = '';
        _this.gridAutoColumns = '';
        _this.gridAutoFlow = '';
        _this.gridAutoRows = '';
        _this.gridColumn = '';
        _this.gridColumnEnd = '';
        _this.gridColumnGap = '';
        _this.gridColumnStart = '';
        _this.gridGap = '';
        _this.gridRow = '';
        _this.gridRowEnd = '';
        _this.gridRowGap = '';
        _this.gridRowStart = '';
        _this.gridTemplate = '';
        _this.gridTemplateAreas = '';
        _this.gridTemplateColumns = '';
        _this.gridTemplateRows = '';
        _this.height = '';
        _this.hyphenateCharacter = '';
        _this.hyphens = '';
        _this.imageOrientation = '';
        _this.imageRendering = '';
        _this.inlineSize = '';
        _this.inset = '';
        _this.insetBlock = '';
        _this.insetBlockEnd = '';
        _this.insetBlockStart = '';
        _this.insetInline = '';
        _this.insetInlineEnd = '';
        _this.insetInlineStart = '';
        _this.isolation = '';
        _this.justifyContent = '';
        _this.justifyItems = '';
        _this.justifySelf = '';
        _this.left = '';
        _this.letterSpacing = '';
        _this.lightingColor = '';
        _this.lineBreak = '';
        _this.lineHeight = '';
        _this.listStyle = '';
        _this.listStyleImage = '';
        _this.listStylePosition = '';
        _this.listStyleType = '';
        _this.margin = '';
        _this.marginBlock = '';
        _this.marginBlockEnd = '';
        _this.marginBlockStart = '';
        _this.marginBottom = '';
        _this.marginInline = '';
        _this.marginInlineEnd = '';
        _this.marginInlineStart = '';
        _this.marginLeft = '';
        _this.marginRight = '';
        _this.marginTop = '';
        _this.marker = '';
        _this.markerEnd = '';
        _this.markerMid = '';
        _this.markerStart = '';
        _this.mask = '';
        _this.maskClip = '';
        _this.maskComposite = '';
        _this.maskImage = '';
        _this.maskMode = '';
        _this.maskOrigin = '';
        _this.maskPosition = '';
        _this.maskRepeat = '';
        _this.maskSize = '';
        _this.maskType = '';
        _this.mathStyle = '';
        _this.maxBlockSize = '';
        _this.maxHeight = '';
        _this.maxInlineSize = '';
        _this.maxWidth = '';
        _this.minBlockSize = '';
        _this.minHeight = '';
        _this.minInlineSize = '';
        _this.minWidth = '';
        _this.mixBlendMode = '';
        _this.objectFit = '';
        _this.objectPosition = '';
        _this.offset = '';
        _this.offsetDistance = '';
        _this.offsetPath = '';
        _this.offsetRotate = '';
        _this.opacity = '';
        _this.order = '';
        _this.orphans = '';
        _this.outline = '';
        _this.outlineColor = '';
        _this.outlineOffset = '';
        _this.outlineStyle = '';
        _this.outlineWidth = '';
        _this.overflow = '';
        _this.overflowAnchor = '';
        _this.overflowClipMargin = '';
        _this.overflowWrap = '';
        _this.overflowX = '';
        _this.overflowY = '';
        _this.overscrollBehavior = '';
        _this.overscrollBehaviorBlock = '';
        _this.overscrollBehaviorInline = '';
        _this.overscrollBehaviorX = '';
        _this.overscrollBehaviorY = '';
        _this.padding = '';
        _this.paddingBlock = '';
        _this.paddingBlockEnd = '';
        _this.paddingBlockStart = '';
        _this.paddingBottom = '';
        _this.paddingInline = '';
        _this.paddingInlineEnd = '';
        _this.paddingInlineStart = '';
        _this.paddingLeft = '';
        _this.paddingRight = '';
        _this.paddingTop = '';
        _this.page = '';
        _this.pageBreakAfter = '';
        _this.pageBreakBefore = '';
        _this.pageBreakInside = '';
        _this.paintOrder = '';
        _this.perspective = '';
        _this.perspectiveOrigin = '';
        _this.placeContent = '';
        _this.placeItems = '';
        _this.placeSelf = '';
        _this.pointerEvents = '';
        _this.position = '';
        _this.printColorAdjust = '';
        _this.quotes = '';
        _this.resize = '';
        _this.right = '';
        _this.rotate = '';
        _this.rowGap = '';
        _this.rubyPosition = '';
        _this.scale = '';
        _this.scrollBehavior = '';
        _this.scrollMargin = '';
        _this.scrollMarginBlock = '';
        _this.scrollMarginBlockEnd = '';
        _this.scrollMarginBlockStart = '';
        _this.scrollMarginBottom = '';
        _this.scrollMarginInline = '';
        _this.scrollMarginInlineEnd = '';
        _this.scrollMarginInlineStart = '';
        _this.scrollMarginLeft = '';
        _this.scrollMarginRight = '';
        _this.scrollMarginTop = '';
        _this.scrollPadding = '';
        _this.scrollPaddingBlock = '';
        _this.scrollPaddingBlockEnd = '';
        _this.scrollPaddingBlockStart = '';
        _this.scrollPaddingBottom = '';
        _this.scrollPaddingInline = '';
        _this.scrollPaddingInlineEnd = '';
        _this.scrollPaddingInlineStart = '';
        _this.scrollPaddingLeft = '';
        _this.scrollPaddingRight = '';
        _this.scrollPaddingTop = '';
        _this.scrollSnapAlign = '';
        _this.scrollSnapStop = '';
        _this.scrollSnapType = '';
        _this.scrollbarGutter = '';
        _this.shapeImageThreshold = '';
        _this.shapeMargin = '';
        _this.shapeOutside = '';
        _this.shapeRendering = '';
        _this.stopColor = '';
        _this.stopOpacity = '';
        _this.stroke = '';
        _this.strokeDasharray = '';
        _this.strokeDashoffset = '';
        _this.strokeLinecap = '';
        _this.strokeLinejoin = '';
        _this.strokeMiterlimit = '';
        _this.strokeOpacity = '';
        _this.strokeWidth = '';
        _this.tabSize = '';
        _this.tableLayout = '';
        _this.textAlign = '';
        _this.textAlignLast = '';
        _this.textAnchor = '';
        _this.textCombineUpright = '';
        _this.textDecoration = '';
        _this.textDecorationColor = '';
        _this.textDecorationLine = '';
        _this.textDecorationSkipInk = '';
        _this.textDecorationStyle = '';
        _this.textDecorationThickness = '';
        _this.textEmphasis = '';
        _this.textEmphasisColor = '';
        _this.textEmphasisPosition = '';
        _this.textEmphasisStyle = '';
        _this.textIndent = '';
        _this.textOrientation = '';
        _this.textOverflow = '';
        _this.textRendering = '';
        _this.textShadow = '';
        _this.textTransform = '';
        _this.textUnderlineOffset = '';
        _this.textUnderlinePosition = '';
        _this.top = '';
        _this.touchAction = '';
        _this.transform = '';
        _this.transformBox = '';
        _this.transformOrigin = '';
        _this.transformStyle = '';
        _this.transition = '';
        _this.transitionDelay = '';
        _this.transitionDuration = '';
        _this.transitionProperty = '';
        _this.transitionTimingFunction = '';
        _this.translate = '';
        _this.unicodeBidi = '';
        _this.userSelect = '';
        _this.verticalAlign = '';
        _this.visibility = '';
        _this.webkitAlignContent = '';
        _this.webkitAlignItems = '';
        _this.webkitAlignSelf = '';
        _this.webkitAnimation = '';
        _this.webkitAnimationDelay = '';
        _this.webkitAnimationDirection = '';
        _this.webkitAnimationDuration = '';
        _this.webkitAnimationFillMode = '';
        _this.webkitAnimationIterationCount = '';
        _this.webkitAnimationName = '';
        _this.webkitAnimationPlayState = '';
        _this.webkitAnimationTimingFunction = '';
        _this.webkitAppearance = '';
        _this.webkitBackfaceVisibility = '';
        _this.webkitBackgroundClip = '';
        _this.webkitBackgroundOrigin = '';
        _this.webkitBackgroundSize = '';
        _this.webkitBorderBottomLeftRadius = '';
        _this.webkitBorderBottomRightRadius = '';
        _this.webkitBorderRadius = '';
        _this.webkitBorderTopLeftRadius = '';
        _this.webkitBorderTopRightRadius = '';
        _this.webkitBoxAlign = '';
        _this.webkitBoxFlex = '';
        _this.webkitBoxOrdinalGroup = '';
        _this.webkitBoxOrient = '';
        _this.webkitBoxPack = '';
        _this.webkitBoxShadow = '';
        _this.webkitBoxSizing = '';
        _this.webkitFilter = '';
        _this.webkitFlex = '';
        _this.webkitFlexBasis = '';
        _this.webkitFlexDirection = '';
        _this.webkitFlexFlow = '';
        _this.webkitFlexGrow = '';
        _this.webkitFlexShrink = '';
        _this.webkitFlexWrap = '';
        _this.webkitJustifyContent = '';
        _this.webkitLineClamp = '';
        _this.webkitMask = '';
        _this.webkitMaskBoxImage = '';
        _this.webkitMaskBoxImageOutset = '';
        _this.webkitMaskBoxImageRepeat = '';
        _this.webkitMaskBoxImageSlice = '';
        _this.webkitMaskBoxImageSource = '';
        _this.webkitMaskBoxImageWidth = '';
        _this.webkitMaskClip = '';
        _this.webkitMaskComposite = '';
        _this.webkitMaskImage = '';
        _this.webkitMaskOrigin = '';
        _this.webkitMaskPosition = '';
        _this.webkitMaskRepeat = '';
        _this.webkitMaskSize = '';
        _this.webkitOrder = '';
        _this.webkitPerspective = '';
        _this.webkitPerspectiveOrigin = '';
        _this.webkitTextFillColor = '';
        _this.webkitTextSizeAdjust = '';
        _this.webkitTextStroke = '';
        _this.webkitTextStrokeColor = '';
        _this.webkitTextStrokeWidth = '';
        _this.webkitTransform = '';
        _this.webkitTransformOrigin = '';
        _this.webkitTransformStyle = '';
        _this.webkitTransition = '';
        _this.webkitTransitionDelay = '';
        _this.webkitTransitionDuration = '';
        _this.webkitTransitionProperty = '';
        _this.webkitTransitionTimingFunction = '';
        _this.webkitUserSelect = '';
        _this.whiteSpace = '';
        _this.widows = '';
        _this.width = '';
        _this.willChange = '';
        _this.wordBreak = '';
        _this.wordSpacing = '';
        _this.wordWrap = '';
        _this.writingMode = '';
        _this.zIndex = '';
        return _this;
    }
    return JElementStyleProperty;
}(JElementStyleMap));
// 最外层容器默认样式
var ContainerDefaultStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    margin: '0'
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

var util = {
    // 是否是数字
    isNumber: function (v) {
        return typeof v === 'number' || /^\s*[\d\.]+\s*$/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber: function (v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    // 是否是带角度单位的字符串
    isDegNumber: function (v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    // 是否是带弧度单位的字符串
    isRadNumber: function (v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    // 转为像素字符串格式 
    toPX: function (v) {
        if (this.isNumber(v))
            return v + 'px';
        return v;
    },
    // 弧度转角度
    radToDeg: function (v) {
        return v * (180 / Math.PI);
    },
    // 角度转弧度
    degToRad: function (v) {
        return v * (Math.PI / 180);
    },
    // 转为角度格式
    toDeg: function (v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v;
    },
    // 转为弧度格式
    toRad: function (v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
        return v;
    }
};

var Transform = /** @class */ (function () {
    function Transform(option, el) {
        // x偏移量
        this.translateX = 0;
        // y偏移量
        this.translateY = 0;
        // z偏移量
        this.translateZ = 0;
        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateZ = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.scaleZ = 1;
        this.skewX = 0;
        this.skewY = 0;
        if (option)
            Object.assign(this, option);
        if (el)
            this.bind(el);
    }
    Transform.prototype.from = function (data) {
        if (data)
            Object.assign(this, data);
    };
    // 生效
    Transform.prototype.apply = function (el) {
        if (el === void 0) { el = this.target; }
        if (el && el.css)
            el.css('transform', this.toString());
        else if (el)
            el.style.transform = this.toString();
    };
    // 绑定并刷新到目标上
    Transform.prototype.bind = function (target) {
        this.target = target;
        this.apply();
    };
    // 生成transform代理
    Transform.createProxy = function (obj, el) {
        if (obj === void 0) { obj = {}; }
        var transform = new Transform(obj, el);
        // 代理处理
        var proxy = new Proxy(transform, {
            get: function (target, p, receiver) {
                var v = target[p];
                return v;
            },
            set: function (target, p, value, receiver) {
                target[p] = value;
                target.apply(); // 生效
                return true;
            }
        });
        return proxy;
    };
    Transform.prototype.toString = function () {
        var translate = "translateX(".concat(util.toPX(this.translateX), ") translateY(").concat(util.toPX(this.translateY), ") translateZ(").concat(util.toPX(this.translateZ), ")");
        var rotate = "rotateX(".concat(util.toDeg(this.rotateX), ") rotateY(").concat(util.toDeg(this.rotateY), ") rotateZ(").concat(util.toDeg(this.rotateZ), ")");
        var scale = "scaleX(".concat(this.scaleX, ") scaleY(").concat(this.scaleY, ") scaleZ(").concat(this.scaleZ, ")");
        var skew = "skewX(".concat(util.toDeg(this.skewX), ") skewY(").concat(util.toDeg(this.skewY), ")");
        return "".concat(translate, " ").concat(rotate, " ").concat(scale, " ").concat(skew);
    };
    Transform.prototype.toJSON = function () {
        return {
            translateX: this.translateX,
            translateY: this.translateY,
            translateZ: this.translateZ,
            rotateX: this.rotateX,
            rotateY: this.rotateY,
            rotateZ: this.rotateZ,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            scaleZ: this.scaleZ,
            skewX: this.skewX,
            skewY: this.skewY,
        };
    };
    return Transform;
}());

var StyleNamesMap = [];
var NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
var JElementStyle = /** @class */ (function (_super) {
    __extends(JElementStyle, _super);
    function JElementStyle(option) {
        var _this = _super.call(this) || this;
        if (option) {
            _this.apply(option);
        }
        return _this;
    }
    Object.defineProperty(JElementStyle.prototype, "names", {
        // 所有样式名称
        get: function () {
            var e_1, _a;
            if (!StyleNamesMap.length) {
                var map = new JElementStyleProperty();
                var keys = Object.getOwnPropertyNames(map);
                try {
                    for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                        var k = keys_1_1.value;
                        if (typeof map[k] === 'string')
                            StyleNamesMap.push(k);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return StyleNamesMap;
        },
        enumerable: false,
        configurable: true
    });
    // 把样式应用到元素或当前对象
    JElementStyle.prototype.apply = function (data, target) {
        var e_2, _a;
        if (target === void 0) { target = this; }
        try {
            for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                if (typeof name_1 !== 'string')
                    continue;
                if (typeof data[name_1] === 'string') {
                    if (target instanceof JElementStyle) {
                        target.setStyle(name_1, data[name_1]);
                    }
                    else {
                        target[name_1] = data[name_1];
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return target;
    };
    // 样式对应的元素
    JElementStyle.prototype.applyTo = function (element) {
        this.apply(this, element.style);
    };
    // 设置样式
    JElementStyle.prototype.setStyle = function (name, value) {
        this[name] = value;
        this.emit('change', {
            name: name,
            value: value
        });
    };
    // 触发所有更新到dom
    JElementStyle.prototype.refresh = function () {
        this.apply(this);
    };
    // 转为json
    JElementStyle.prototype.toJSON = function () {
        var e_3, _a;
        var obj = {};
        try {
            for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_2 = _c.value;
                if (typeof this[name_2] === 'undefined')
                    continue;
                obj[name_2] = this[name_2];
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return obj;
    };
    // 生成样式代理
    JElementStyle.createProxy = function (style) {
        if (style === void 0) { style = {}; }
        var jstyle = new JElementStyle(style);
        // 样式代理处理
        var proxy = new Proxy(jstyle, {
            get: function (target, p, receiver) {
                var v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && NumberStyleMap.includes(p)) {
                    if (v === '0')
                        return 0;
                    if (util.isPXNumber(v))
                        return parseFloat(v);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !target.names.includes(p)) {
                    target[p] = value;
                    return true;
                }
                // 数字样式，处理px问题
                if (NumberStyleMap.includes(p)) {
                    value = typeof value === 'number' || util.isNumber(value) ? "".concat(value, "px") : value;
                }
                target.setStyle(p, value); // 应用到元素和类
                return true;
            }
        });
        return proxy;
    };
    return JElementStyle;
}(JElementStyleMap));

var SupportEventNames = [
    'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop'
];
var JEvent = /** @class */ (function () {
    function JEvent(target) {
        this.target = target;
    }
    // 初始化所有支持的事件
    JEvent.prototype.init = function (handler) {
        this.bindEvent(SupportEventNames, handler);
    };
    /**
     * 绑定事件到html对象
     *
     * @method bindEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     * @returns {name, fun, target} 返回当前绑定
     */
    JEvent.prototype.bindEvent = function (name, fun, opt, target) {
        var e_1, _a;
        if (opt === void 0) { opt = false; }
        if (target === void 0) { target = this.target; }
        if (Array.isArray(name)) {
            try {
                for (var name_1 = __values(name), name_1_1 = name_1.next(); !name_1_1.done; name_1_1 = name_1.next()) {
                    var n = name_1_1.value;
                    this.bindEvent(n, fun, opt, target);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (name_1_1 && !name_1_1.done && (_a = name_1.return)) _a.call(name_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this;
        }
        if (name && name.indexOf && name.indexOf(' ') != -1) {
            var ns = name.split(' ');
            return this.bindEvent(ns, fun, opt, target);
        }
        /*// @ts-ignore
        if(target.attachEvent) {
            // @ts-ignore
            target.attachEvent("on"+name, fun, opt);
        } */
        if (target.addEventListener) {
            target.addEventListener(name, fun, opt);
        }
        return this;
    };
    /**
     * 从对象中移除事件到
     *
     * @method removeEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     */
    JEvent.prototype.removeEvent = function (name, fun, opt, target) {
        if (opt === void 0) { opt = false; }
        if (target === void 0) { target = this.target; }
        if (target.removeEventListener) {
            target.removeEventListener(name, fun, opt);
        }
        // @ts-ignore  
        else if (target.detachEvent) {
            // @ts-ignore
            target.detachEvent('on' + name, fun, opt);
        }
        else {
            target['on' + name] = null;
        }
        return this;
    };
    return JEvent;
}());

var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        var _this = _super.call(this) || this;
        _this.id = '';
        // 类型名称
        _this.type = '';
        // 子元素
        _this._children = [];
        // 复制属性
        for (var k in option) {
            var v = option[k];
            if (typeof k !== 'string' || (typeof v !== 'string' || typeof v !== 'number'))
                continue;
            _this[k] = v;
        }
        _this.id = _this.id || option.id || v4().replace(/-/g, '');
        _this.type = _this.type || option.type || '';
        var nodeType = option.nodeType || 'div';
        _this.dom = document.createElement(nodeType);
        // 事件托管
        _this.event = new JEvent(_this.dom);
        _this.event.init(function (e) {
            return _this.emit(e.type, e);
        });
        // 样式代理处理
        _this.style = JElementStyle.createProxy();
        _this.style.on('change', function (s) {
            _this.setDomStyle(s.name, s.value);
        });
        if (option.style)
            _this.style.apply(option.style);
        // 变换控制的是核心元素
        _this.transform = Transform.createProxy(option.transform);
        _this.initOption(option);
        return _this;
    }
    // 初始化一些基础属性
    JElement.prototype.initOption = function (option) {
        this.x = option.x || option.left || this.x || 0;
        this.y = option.y || option.top || this.y || 0;
        this.width = option.width || option.width || this.width || 1;
        this.height = option.height || option.height || this.height || 1;
        if (typeof option.rotation !== 'undefined')
            this.rotation = option.rotation;
        if (typeof option.angle !== 'undefined')
            this.angle = option.angle;
        if (typeof option.zIndex !== 'undefined')
            this.zIndex = option.zIndex;
        if (typeof option.visible !== 'undefined')
            this.visible = !!option.visible;
    };
    Object.defineProperty(JElement.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "x", {
        // 坐标X
        get: function () {
            var v = this.style.left || 0;
            return v;
        },
        set: function (v) {
            this.style.left = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "y", {
        // 坐标Y
        get: function () {
            var v = this.style.top || 0;
            return v;
        },
        set: function (v) {
            this.style.top = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "top", {
        get: function () {
            return this.y;
        },
        set: function (v) {
            this.y = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "left", {
        get: function () {
            return this.x;
        },
        set: function (v) {
            this.x = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "right", {
        // 坐标right
        get: function () {
            var v = this.style.right || 0;
            return v;
        },
        set: function (v) {
            this.style.right = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "bottom", {
        // 坐标bottom
        get: function () {
            var v = this.style.bottom || 0;
            return v;
        },
        set: function (v) {
            this.style.bottom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "width", {
        get: function () {
            return this.style.width || 0;
        },
        set: function (v) {
            this.style.width = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "height", {
        get: function () {
            return this.style.height || 0;
        },
        set: function (v) {
            this.style.height = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "rotation", {
        get: function () {
            var v = this.transform.rotateZ;
            return util.degToRad(v);
        },
        // 旋转弧度
        set: function (v) {
            this.transform.rotateZ = util.radToDeg(v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "angle", {
        get: function () {
            return this.transform.rotateZ;
        },
        // 旋转角度
        set: function (v) {
            this.transform.rotateZ = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "visible", {
        get: function () {
            return this.style.display !== 'none';
        },
        set: function (v) {
            this.style.display = v ? 'block' : 'none';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "zIndex", {
        get: function () {
            return Number(this.style.zIndex || '0');
        },
        set: function (v) {
            this.style.zIndex = v + '';
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JElement.prototype.setDomStyle = function (name, value) {
        if (name === 'backgroundImage') {
            if (!/^\s*url\(/.test(value))
                value = "url(".concat(value, ")");
        }
        this.dom.style[name] = value;
    };
    // 设置样式
    JElement.prototype.css = function (name, value) {
        var e_1, _a;
        if (!name)
            return;
        if (typeof name === 'object') {
            try {
                for (var _b = __values(Object.getOwnPropertyNames(name)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var n = _c.value;
                    this.css(n, name[n]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.style[name] = value;
        }
        return this;
    };
    // dom属性
    JElement.prototype.attr = function (name, value) {
        if (typeof value !== 'undefined') {
            this.dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return this.dom.getAttribute(name);
        }
    };
    /*
    // 被选中
    get selected() {
        return this._selected;
    }
    set selected(v) {
        if(v) this.editor.controlElement.bind(this);
        else {
            this.editor.controlElement.unbind(this);
        }
        this.propertyChange('selected', v, this._selected);
        this._selected = v;
    }*/
    JElement.prototype.bindEvent = function () {
        /*
        
        this.container.on('pointerdown', function(event) {
            this.emit('pointerdown', event);
        }, this);
        this.container.on('pointerup', function(event) {
            this.emit('pointerup', event);
        }, this);
        this.container.on('pointerenter', function(event) {
            this.emit('pointerenter', event);
        }, this);
        this.container.on('pointerleave', function(event) {
            this.emit('pointerleave', event);
        }, this);
        this.container.on('pointerout', function(event) {
            this.emit('pointerout', event);
        }, this);*/
    };
    // 移位
    JElement.prototype.move = function (dx, dy) {
        this.left += dx;
        this.top += dy;
    };
    // 重置大小
    JElement.prototype.resize = function (w, h) {
        if (typeof w === 'number') {
            this.width = w;
        }
        if (typeof h === 'number') {
            this.height = h;
        }
    };
    // 新增子元素
    JElement.prototype.addChild = function (child, parent) {
        var e_2, _a;
        if (parent === void 0) { parent = this; }
        if (Array.isArray(child)) {
            try {
                for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                    var c = child_1_1.value;
                    parent.addChild(c);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return parent;
        }
        if (child instanceof JElement) {
            child.parent = parent;
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
        }
        else {
            parent.dom.appendChild(child);
        }
    };
    // 移除自已
    JElement.prototype.remove = function () {
        if (this.parent)
            this.parent.removeChild(this);
    };
    // 移除子元素
    JElement.prototype.removeChild = function (el) {
        // @ts-ignore
        this.dom.removeChild(el.dom || el);
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    };
    JElement.prototype.toJSON = function () {
        var e_3, _a;
        var fields = ['x', 'y', 'width', 'height', 'url', 'text', 'rotation', 'type', 'style', 'id', 'skew', 'points', 'isClosed'];
        var obj = {};
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var k = fields_1_1.value;
                if (typeof this[k] !== 'undefined') {
                    obj[k] = this[k];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return obj;
    };
    JElement.prototype.toString = function () {
        var obj = this.toJSON();
        return JSON.stringify(obj);
    };
    return JElement;
}(EventEmitter));

var JBaseComponent = /** @class */ (function (_super) {
    __extends(JBaseComponent, _super);
    function JBaseComponent(option) {
        var _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'div', style: __assign({}, ContainerDefaultStyle) })) || this;
        // 选中
        _this._selected = false;
        option.target = option.target || {};
        // 生成当前控制的元素
        _this.target = new JElement(__assign(__assign({}, option), { style: {
                width: '100%',
                height: '100%',
                display: 'block',
            } }));
        _this.addChild(_this.target);
        // 选中元素
        _this.target.on('click', function () {
            _this.selected = true;
        });
        // 变换改为控制主元素
        _this.transform.bind(_this.target);
        // 刷新样式
        if (option.style)
            _this.style.apply(option.style);
        if (option.text)
            _this.text = option.text;
        if (option.html)
            _this.html = option.html;
        return _this;
    }
    Object.defineProperty(JBaseComponent.prototype, "text", {
        get: function () {
            return this.target.dom.innerText;
        },
        set: function (v) {
            this.target.dom.innerText = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JBaseComponent.prototype, "html", {
        get: function () {
            return this.target.dom.innerHTML;
        },
        set: function (v) {
            this.target.dom.innerHTML = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JBaseComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (v) {
            this._selected = v;
            this.emit('select', v);
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JBaseComponent.prototype.setDomStyle = function (name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle) {
            _super.prototype.setDomStyle.call(this, name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    };
    return JBaseComponent;
}(JElement));

var JText = /** @class */ (function (_super) {
    __extends(JText, _super);
    function JText(option) {
        return _super.call(this, __assign(__assign({}, option), { nodeType: 'div' })) || this;
    }
    return JText;
}(JBaseComponent));

var JImage = /** @class */ (function (_super) {
    __extends(JImage, _super);
    function JImage(option) {
        var _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'img' })) || this;
        _this.dom.onload = function (e) {
            _this.emit('load', e);
        };
        _this.dom.onerror = function (e) {
            _this.emit('error', e);
        };
        _this.src = option.url || option.src || '';
        return _this;
    }
    Object.defineProperty(JImage.prototype, "src", {
        get: function () {
            return this.target.dom.src;
        },
        set: function (v) {
            this.target.dom.src = v;
        },
        enumerable: false,
        configurable: true
    });
    return JImage;
}(JBaseComponent));

// 鼠标指针
var GCursors = {
    'l': 'w-resize',
    'lt': 'nw-resize',
    't': 'n-resize',
    'tr': 'ne-resize',
    'r': 'e-resize',
    'rb': 'se-resize',
    'b': 's-resize',
    'lb': 'sw-resize',
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};
var JControllerItem = /** @class */ (function (_super) {
    __extends(JControllerItem, _super);
    function JControllerItem(option) {
        var _this = this;
        option.style = option.style || {};
        option.style.backgroundColor = option.style.backgroundColor || '#fff';
        option.style.border = option.style.border || '1px solid rgba(6,155,181,1)';
        option.style.position = 'absolute';
        _this = _super.call(this, option) || this;
        _this.dir = '';
        _this.size = 8;
        _this.dir = option.dir || '';
        _this.size = option.size || 8;
        _this.style.cursor = _this.style.cursor || GCursors[_this.dir];
        _this.width = _this.height = _this.size;
        _this.editor = option.editor;
        _this.transform.bind(_this);
        return _this;
    }
    return JControllerItem;
}(JElement));
// 元素大小位置控制器
var JControllerComponent = /** @class */ (function (_super) {
    __extends(JControllerComponent, _super);
    function JControllerComponent(option) {
        var _this = this;
        option.zIndex = 100000;
        option.style = option.style || {};
        option.style.cursor = option.style.cursor || 'move';
        option.style.backgroundColor = option.style.backgroundColor || 'rgba(0,0,0,0.01)';
        _this = _super.call(this, option) || this;
        _this.items = [];
        // 拖放位置
        _this.dragStartPosition = {
            x: 0,
            y: 0,
        };
        _this.init(option);
        return _this;
    }
    JControllerComponent.prototype.init = function (option) {
        this.createItem('l', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: 0, top: '50%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: 0, top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '50%', top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '100%', top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '100%', top: '50%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '100%', top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '50%', top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: 0, top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            shape: 'circle',
            size: 24,
            style: __assign(__assign({ left: '50%', top: '-40px', 
                //backgroundColor: 'transparent',
                border: 'none', boxShadow: '0 0 2px 2px #ccc', borderRadius: '50%', cursor: "pointer" }, option.itemStyle), { 'backgroundSize': '100%', backgroundImage: GCursors.rotate }),
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            shape: 'circle',
            size: 24,
            style: __assign(__assign({ left: '50%', top: '50%', border: 'none', boxShadow: '0 0 2px 2px #ccc', borderRadius: '50%', cursor: "pointer" }, option.itemStyle), { 'backgroundSize': '100%', backgroundImage: GCursors.skew }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        }); // 旋转块 
        this.hoverItem = this.createItem('hover', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { borderStyle: 'dotted', backgroundColor: 'transparent' })
        });
        this.hoverItem.visible = false;
    };
    // 生成控制点
    JControllerComponent.prototype.createItem = function (id, option) {
        var item = new JControllerItem(__assign({ dir: id }, option));
        this.addChild(item);
        this.items.push(item);
        /*
                const self = this;
                item.on('mousedown', function(event) {
                    if(event.button === 2) {
                        return;
                    }
                    self.onDragStart(event, this);
                });
        
                item.on('change', ({x, y, width, height, rotation, skew} = event) => {
                    const w = this.width + width;
                    const h = this.height + height;
        
                    // 大小最少要有1
                    if(w < 1) {
                        x = 0;
                    }
                    else if(width !== 0) {
                        this.width = w;
                    }
                    if(h < 1) {
                        y = 0;
                    }
                    else if(height !== 0) {
                        this.height = h;
                    }
                    
                    if(x !== 0 || y !== 0 || width !== 0 || height !== 0) {
                        this.move(x, y);
                        //this.initShapes();
                    }
                    
                    if(rotation) {
                        this.rotation += rotation;
                    }
        
                    if(skew && (skew.x !== 0 || skew.y !== 0)) {
                        //this.skew.x += skew.x;
                        //this.skew.y += skew.y;
                    }
                });*/
        return item;
    };
    // 绑定到操作的对象
    JControllerComponent.prototype.bind = function (target) {
        this.left = Number(target.left) + Number(this.editor.left);
        this.top = Number(target.top) + Number(this.editor.top);
        this.width = target.width;
        this.height = target.height;
        this.transform.from({
            rotateX: target.transform.rotateX,
            rotateY: target.transform.rotateY,
            rotateZ: target.transform.rotateZ,
            scaleX: target.transform.scaleX,
            scaleY: target.transform.scaleY,
            scaleZ: target.transform.scaleZ,
        });
    };
    return JControllerComponent;
}(JControllerItem));

var JEditor = /** @class */ (function (_super) {
    __extends(JEditor, _super);
    function JEditor(container, option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this, option) || this;
        // 所有支持的类型
        _this.shapes = {
            'image': JImage,
            'text': JText
        };
        if (typeof container === 'string')
            container = document.getElementById(container);
        container.appendChild(_this.dom);
        container.style.position = 'relative';
        _this.init(option);
        return _this;
    }
    // 初始化整个编辑器
    JEditor.prototype.init = function (option) {
        this.dom.style.width = '100%';
        this.dom.style.height = '100%';
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        this.target.css({
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
            'overflow': 'hidden'
        });
        // 生成控制器
        this.ElementController = new JControllerComponent({
            editor: this
        });
        this.dom.appendChild(this.ElementController.dom); // 加到外层
        if (option.width && option.height) {
            this.resize(option.width, option.height);
        }
    };
    Object.defineProperty(JEditor.prototype, "width", {
        get: function () {
            return this.target.width;
        },
        set: function (v) {
            this.target && this.resize(v, this.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "height", {
        get: function () {
            return this.target.height;
        },
        set: function (v) {
            this.target && this.resize(this.width, v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "left", {
        get: function () {
            return this.target.left;
        },
        set: function (v) {
            this.target && (this.target.left = v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "top", {
        get: function () {
            return this.target.top;
        },
        set: function (v) {
            this.target && (this.target.top = v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "children", {
        // 重写子集为target
        get: function () {
            return this.target.children;
        },
        enumerable: false,
        configurable: true
    });
    JEditor.prototype.resize = function (width, height) {
        var _this = this;
        if (width === void 0) { width = this.width; }
        if (height === void 0) { height = this.height; }
        this.target.attr('data-size', "".concat(width, "*").concat(height));
        this.target.width = width;
        this.target.height = height;
        this.left = this.dom.clientWidth / 2 - parseFloat(width + '') / 2;
        this.top = this.dom.clientHeight / 2 - parseFloat(height + '') / 2;
        setTimeout(function () {
            _this.emit('resize', {
                width: width,
                height: height
            });
        }, 10);
    };
    // 添加元素到画布
    JEditor.prototype.addChild = function (child) {
        if (child === this.target) {
            return _super.prototype.addChild.call(this, child);
        }
        var self = this;
        child.on('select', function (v) {
            if (v) {
                self.ElementController.bind(this);
            }
            else {
                self.ElementController.visible = false;
            }
        });
        return this.target.addChild(child);
    };
    // 移除
    // @ts-ignore
    JEditor.prototype.removeChild = function (el) {
        if (el === this.target) {
            return _super.prototype.addChild.call(this, el);
        }
        return this.target.removeChild(el);
    };
    JEditor.prototype.clear = function () {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        for (var i = this.children.length - 1; i >= 0; i--) {
            var el = this.children[i];
            this.removeChild(el);
        }
    };
    // 缩放
    JEditor.prototype.scale = function (x, y) {
        if (y === void 0) { y = x; }
        if (x < 0.1 || y < 0.1)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    };
    JEditor.prototype.regShape = function (name, shape) {
        if (this.shapes[name])
            throw Error("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
        this.shapes[name] = shape;
    };
    // 创建元素
    JEditor.prototype.createShape = function (type, option) {
        if (option === void 0) { option = {}; }
        var shape = typeof type === 'string' ? this.shapes[type] : type;
        if (!shape) {
            throw Error("".concat(type, "\u4E0D\u5B58\u5728\u7684\u5143\u7D20\u7C7B\u578B"));
        }
        var el = new shape(__assign(__assign({}, option), { type: type }));
        return el;
    };
    // 创建图片元素
    JEditor.prototype.createImage = function (url, option) {
        if (option === void 0) { option = {}; }
        var img = this.createShape('image', __assign(__assign({}, option), { url: url }));
        return img;
    };
    // 转为图片数据
    JEditor.prototype.toImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    JEditor.prototype.toJSON = function () {
        var e_1, _a;
        var data = {
            width: this.width,
            height: this.height,
            children: []
        };
        try {
            for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!c.type)
                    continue;
                if (c.toJSON) {
                    data.children.push(c.toJSON());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return data;
    };
    JEditor.prototype.toString = function () {
        var data = this.toJSON();
        return JSON.stringify(data);
    };
    JEditor.prototype.fromJSON = function (data) {
        var e_2, _a;
        this.clear();
        if (typeof data === 'string')
            data = JSON.parse(data);
        if (data.style) {
            this.style.apply(data.style); // 应用样式
        }
        this.resize(data.width, data.height);
        try {
            for (var _b = __values(data.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!c.type)
                    continue;
                var item = this.createShape(c.type, c);
                this.addChild(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return JEditor;
}(JBaseComponent));

export { JBaseComponent, JEditor, JElement, JImage, JText, JEditor as default };