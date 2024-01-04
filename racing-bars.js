var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/shared/index.ts
var defaultProps = {
  ...defaultOptions,
  data: void 0,
  dataUrl: void 0,
  dataType: void 0,
  elementId: void 0,
  className: void 0,
  style: void 0,
  callback: void 0
};

// src/lib/options/index.ts
var options_exports = {};
__export(options_exports, {
  actionTypes: () => actionTypes,
  changeOptions: () => changeOptions,
  defaultOptions: () => defaultOptions,
  loadOptions: () => loadOptions,
  optionsReducer: () => optionsReducer
});

// src/lib/options/options.actions.ts
var actionTypes = {
  loadOptions: "options/load",
  changeOptions: "options/change"
};
var loadOptions = (options) => ({
  type: actionTypes.loadOptions,
  payload: options
});
var changeOptions = (options) => ({
  type: actionTypes.changeOptions,
  payload: options
});

// src/lib/container/index.ts
var container_exports = {};
__export(container_exports, {
  actionTypes: () => actionTypes2,
  containerReducer: () => containerReducer,
  setContainer: () => setContainer
});

// src/lib/container/container.actions.ts
var actionTypes2 = {
  setContainer: "container/set"
};
var setContainer = (containerState) => ({
  type: actionTypes2.setContainer,
  payload: containerState.element
});

// src/lib/container/container.reducer.ts
var initialState = {
  element: document.body
};
var containerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes2.setContainer: {
      return {
        ...state,
        element: action.payload
      };
    }
    default:
      return state;
  }
};

// src/lib/data/index.ts
var data_exports = {};
__export(data_exports, {
  actionTypes: () => actionTypes3,
  addDateSlice: () => addDateSlice,
  addFilter: () => addFilter,
  addSelection: () => addSelection,
  allExceptFilter: () => allExceptFilter,
  clearDateSlices: () => clearDateSlices,
  dataLoaded: () => dataLoaded,
  dataReducer: () => dataReducer,
  removeFilter: () => removeFilter,
  removeSelection: () => removeSelection,
  resetFilters: () => resetFilters,
  resetSelections: () => resetSelections,
  toggleFilter: () => toggleFilter,
  toggleSelection: () => toggleSelection
});

// src/lib/data/data.actions.ts
var actionTypes3 = {
  dataLoaded: "data/loaded",
  addFilter: "data/addFilter",
  removeFilter: "data/removeFilter",
  toggleFilter: "data/toggleFilter",
  resetFilters: "data/resetFilters",
  allExceptFilter: "data/allExceptFilter",
  addSelection: "data/addSelection",
  removeSelection: "data/removeSelection",
  toggleSelection: "data/toggleSelection",
  resetSelections: "data/resetSelections",
  addDateSlice: "data/addDateSlice",
  clearDateSlices: "data/clearDateSlices"
};
var dataLoaded = (dataCollections) => ({
  type: actionTypes3.dataLoaded,
  payload: dataCollections
});
var addFilter = (group) => ({
  type: actionTypes3.addFilter,
  payload: group
});
var removeFilter = (group) => ({
  type: actionTypes3.removeFilter,
  payload: group
});
var toggleFilter = (group) => ({
  type: actionTypes3.toggleFilter,
  payload: group
});
var resetFilters = () => ({
  type: actionTypes3.resetFilters
});
var allExceptFilter = (group) => ({
  type: actionTypes3.allExceptFilter,
  payload: group
});
var addSelection = (selection2) => ({
  type: actionTypes3.addSelection,
  payload: selection2
});
var removeSelection = (selection2) => ({
  type: actionTypes3.removeSelection,
  payload: selection2
});
var toggleSelection = (selection2) => ({
  type: actionTypes3.toggleSelection,
  payload: selection2
});
var resetSelections = () => ({
  type: actionTypes3.resetSelections
});
var addDateSlice = (date, dateSlice) => {
  const payload = {};
  payload[date] = dateSlice;
  return {
    type: actionTypes3.addDateSlice,
    payload,
    triggerRender: false
  };
};
var clearDateSlices = () => ({
  type: actionTypes3.clearDateSlices
});

// src/lib/data/data.reducer.ts
var initialState2 = {
  names: [],
  groups: [],
  datesCache: [],
  groupFilter: [],
  selected: [],
  dateSlices: {}
};
var dataReducer = (state = initialState2, action) => {
  switch (action.type) {
    case actionTypes3.dataLoaded:
      return {
        ...state,
        names: [...action.payload.names],
        groups: [...action.payload.groups],
        datesCache: [...action.payload.datesCache]
      };
    case actionTypes3.addFilter:
      return {
        ...state,
        groupFilter: addToArray(state.groupFilter, action.payload)
      };
    case actionTypes3.removeFilter:
      return {
        ...state,
        groupFilter: removeFromArray(state.groupFilter, action.payload)
      };
    case actionTypes3.toggleFilter:
      return {
        ...state,
        groupFilter: toggleItem(state.groupFilter, action.payload)
      };
    case actionTypes3.resetFilters:
      return {
        ...state,
        groupFilter: []
      };
    case actionTypes3.allExceptFilter:
      return {
        ...state,
        groupFilter: removeFromArray(state.groups, action.payload)
      };
    case actionTypes3.addSelection:
      return {
        ...state,
        selected: addToArray(state.selected, action.payload)
      };
    case actionTypes3.removeSelection:
      return {
        ...state,
        selected: removeFromArray(state.selected, action.payload)
      };
    case actionTypes3.toggleSelection:
      return {
        ...state,
        selected: toggleItem(state.selected, action.payload)
      };
    case actionTypes3.resetSelections:
      return {
        ...state,
        selected: []
      };
    case actionTypes3.addDateSlice:
      return {
        ...state,
        dateSlices: {
          ...state.dateSlices,
          ...action.payload
        }
      };
    case actionTypes3.clearDateSlices:
      return {
        ...state,
        dateSlices: {}
      };
    default:
      return state;
  }
};
function addToArray(array2, item) {
  const arr = [...array2];
  if (!arr.includes(item)) {
    arr.push(item);
  }
  return arr;
}
function removeFromArray(array2, item) {
  return array2.filter((x) => x !== item);
}
function toggleItem(array2, item) {
  return array2.includes(item) ? removeFromArray(array2, item) : addToArray(array2, item);
}

// src/lib/ticker/index.ts
var ticker_exports = {};
__export(ticker_exports, {
  actionTypes: () => actionTypes4,
  changeDates: () => changeDates,
  createTicker: () => createTicker,
  dec: () => dec,
  inc: () => inc,
  initialize: () => initialize,
  setFirst: () => setFirst,
  setLast: () => setLast,
  setRunning: () => setRunning,
  tickerReducer: () => tickerReducer,
  updateDate: () => updateDate
});

// src/lib/ticker/ticker.actions.ts
var actionTypes4 = {
  initialize: "ticker/initialize",
  changeDates: "ticker/changeDates",
  updateDate: "ticker/updateDate",
  setRunning: "ticker/setRunning",
  setFirst: "ticker/setFirst",
  setLast: "ticker/setLast",
  inc: "ticker/inc",
  dec: "ticker/dec"
};
var initialize = (dates) => ({
  type: actionTypes4.initialize,
  payload: dates
});
var changeDates = (dates) => ({
  type: actionTypes4.changeDates,
  payload: dates
});
var updateDate = (currentDate) => ({
  type: actionTypes4.updateDate,
  payload: currentDate
});
var setRunning = (running) => ({
  type: actionTypes4.setRunning,
  payload: running
});
var setFirst = () => ({
  type: actionTypes4.setFirst
});
var setLast = () => ({
  type: actionTypes4.setLast
});
var inc = (value = 1) => ({
  type: actionTypes4.inc,
  payload: value
});
var dec = (value = 1) => ({
  type: actionTypes4.dec,
  payload: value
});

// src/lib/ticker/ticker.reducer.ts
var initialState3 = {
  isRunning: false,
  currentDate: "",
  isFirstDate: true,
  isLastDate: false,
  dates: []
};
var tickerReducer = (state = initialState3, action) => {
  switch (action.type) {
    case actionTypes4.initialize: {
      const dates = action.payload;
      return {
        ...state,
        isRunning: false,
        currentDate: dates[0],
        isFirstDate: true,
        isLastDate: false,
        dates
      };
    }
    case actionTypes4.changeDates: {
      const dates = action.payload;
      const currentDate = dates.indexOf(state.currentDate) !== -1 ? state.currentDate : state.currentDate < dates[0] ? dates[0] : state.currentDate > dates[dates.length - 1] ? dates[dates.length - 1] : dates[[...dates, state.currentDate].sort().indexOf(state.currentDate)];
      return {
        ...state,
        currentDate,
        isFirstDate: currentDate === dates[0],
        isLastDate: currentDate === dates[dates.length - 1],
        dates
      };
    }
    case actionTypes4.updateDate: {
      const currentDate = action.payload;
      if (state.dates.indexOf(currentDate) === -1) {
        return { ...state };
      }
      return {
        ...state,
        currentDate,
        isFirstDate: currentDate === state.dates[0],
        isLastDate: currentDate === state.dates[state.dates.length - 1]
      };
    }
    case actionTypes4.setRunning: {
      return {
        ...state,
        isRunning: action.payload
      };
    }
    case actionTypes4.setFirst: {
      return {
        ...state,
        currentDate: state.dates[0],
        isFirstDate: true,
        isLastDate: false
      };
    }
    case actionTypes4.setLast: {
      return {
        ...state,
        currentDate: state.dates[state.dates.length - 1],
        isFirstDate: false,
        isLastDate: true
      };
    }
    case actionTypes4.inc: {
      const currentIndex = state.dates.indexOf(state.currentDate);
      const lastIndex = state.dates.length - 1;
      const incValue = action.payload;
      const newDate = currentIndex + incValue > lastIndex ? state.dates[lastIndex] : state.dates[currentIndex + incValue];
      return {
        ...state,
        currentDate: newDate,
        isFirstDate: newDate === state.dates[0],
        isLastDate: newDate === state.dates[lastIndex]
      };
    }
    case actionTypes4.dec: {
      const currentIndex = state.dates.indexOf(state.currentDate);
      const decValue = action.payload;
      const newDate = currentIndex - decValue < 0 ? state.dates[0] : state.dates[currentIndex - decValue];
      return {
        ...state,
        currentDate: newDate,
        isFirstDate: newDate === state.dates[0],
        isLastDate: newDate === state.dates[state.dates.length - 1]
      };
    }
    default:
      return state;
  }
};

// node_modules/d3-array/src/ascending.js
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a, x, lo = 0, hi = a.length) {
    const i = left2(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x) {
  return x === null ? NaN : +x;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop, count) {
  const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc2;
  if (power < 0) {
    inc2 = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc2);
    i2 = Math.round(stop * inc2);
    if (i1 / inc2 < start2)
      ++i1;
    if (i2 / inc2 > stop)
      --i2;
    inc2 = -inc2;
  } else {
    inc2 = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc2);
    i2 = Math.round(stop / inc2);
    if (i1 * inc2 < start2)
      ++i1;
    if (i2 * inc2 > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2)
    return tickSpec(start2, stop, count * 2);
  return [i1, i2, inc2];
}
function ticks(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  if (!(count > 0))
    return [];
  if (start2 === stop)
    return [start2];
  const reverse = stop < start2, [i1, i2, inc2] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc2 < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc2;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc2;
  } else {
    if (inc2 < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc2;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc2;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  return tickSpec(start2, stop, count)[2];
}
function tickStep(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  const reverse = stop < start2, inc2 = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
  return (reverse ? -1 : 1) * (inc2 < 0 ? 1 / -inc2 : inc2);
}

// node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max3;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  }
  return max3;
}

// node_modules/d3-axis/src/identity.js
function identity_default(x) {
  return x;
}

// node_modules/d3-axis/src/axis.js
var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
function translateX(x) {
  return "translate(" + x + ",0)";
}
function translateY(y) {
  return "translate(0," + y + ")";
}
function number2(scale) {
  return (d) => +scale(d);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return (d) => +scale(d) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number2)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position(d)) ? transform2(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2((p && isFinite(p = p(d)) ? p : position(d)) + offset);
      });
    }
    tickExit.remove();
    path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position(d) + offset);
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisTop(scale) {
  return axis(top, scale);
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _ = this._;
    for (var t in _)
      copy2[t] = _[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name) {
      return c.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name, value: callback });
  return type2;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending2;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending2(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s = max3 - min2, l = (max3 + min2) / 2;
  if (s) {
    if (r === max3)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max3)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max3 + min2 : 2 - max3 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default2 = (x) => () => x;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x[i](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d)
    c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-timer/src/interval.js
function interval_default(callback, delay, time) {
  var t = new Timer(), total = delay;
  if (delay == null)
    return t.restart(callback, delay, time), t;
  t._restart = t.restart;
  t.restart = function(callback2, delay2, time2) {
    delay2 = +delay2, time2 = time2 == null ? now() : +time2;
    t._restart(function tick(elapsed) {
      elapsed += total;
      t._restart(tick, total += delay2, time2);
      callback2(elapsed);
    }, delay2, time2);
  };
  t.restart(callback, delay, time);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/linear.js
var linear2 = (t) => +t;

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-brush/src/brush.js
var { abs, max: max2, min } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number22(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) {
    return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) {
    return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number22(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// node_modules/d3-dsv/src/dsv.js
var EOL = {};
var EOF = {};
var QUOTE = 34;
var NEWLINE = 10;
var RETURN = 13;
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}
function inferColumns(rows) {
  var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}
function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}
function formatDate(date) {
  var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds = date.getUTCSeconds(), milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}
function dsv_default(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert)
        return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f) {
    var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
    if (text.charCodeAt(N - 1) === NEWLINE)
      --N;
    if (text.charCodeAt(N - 1) === RETURN)
      --N;
    function token() {
      if (eof)
        return EOF;
      if (eol)
        return eol = false, EOL;
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE)
          ;
        if ((i = I) >= N)
          eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE)
          eol = true;
        else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE)
            ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, '"');
      }
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE)
          eol = true;
        else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE)
            ++I;
        } else if (c !== DELIMITER)
          continue;
        return text.slice(j, i);
      }
      return eof = true, text.slice(j, N);
    }
    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF)
        row.push(t), t = token();
      if (f && (row = f(row, n++)) == null)
        continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}

// node_modules/d3-dsv/src/csv.js
var csv = dsv_default(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

// node_modules/d3-dsv/src/tsv.js
var tsv = dsv_default("	");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

// node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default3(input, init2) {
  return fetch(input, init2).then(responseText);
}

// node_modules/d3-fetch/src/dsv.js
function dsvParse(parse) {
  return function(input, init2, row) {
    if (arguments.length === 2 && typeof init2 === "function")
      row = init2, init2 = void 0;
    return text_default3(input, init2).then(function(response) {
      return parse(response, row);
    });
  };
}
var csv2 = dsvParse(csvParse);
var tsv2 = dsvParse(tsvParse);

// node_modules/d3-fetch/src/json.js
function responseJson(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205)
    return;
  return response.json();
}
function json_default(input, init2) {
  return fetch(input, init2).then(responseJson);
}

// node_modules/d3-fetch/src/xml.js
function parser(type2) {
  return (input, init2) => text_default3(input, init2).then((text) => new DOMParser().parseFromString(text, type2));
}
var xml_default = parser("application/xml");
var html = parser("text/html");
var svg = parser("image/svg+xml");

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d)
    return x + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d)
    return x + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal_default,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded_default(x * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default2(x) {
  return x;
}

// node_modules/d3-format/src/locale.js
var map = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity_default2 : formatGroup_default(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity_default2 : formatNumerals_default(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes_default[type2])
      precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero3 || fill === "0" && align === "=")
      zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-scale/src/number.js
function number3(x) {
  return +x;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity2(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect_default(domain, x, 1, j) - 1;
    return r[i2](d[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity2, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity2)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform2), range, interpolate)))(transform2(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform2), number_default)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number3), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity2, rescale()) : clamp !== identity2;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform2 = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity2, identity2);
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop, count, specifier) {
  var step = tickStep(start2, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count);
      if (step === prestep) {
        d[i0] = start2;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear3() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear3());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity3 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity3;
  return node.__zoom;
}

// src/lib/ticker/ticker.ts
function createTicker(store) {
  let ticker;
  function start2() {
    let justStarted = true;
    ticker = interval_default(showRace, store.getState().options.tickDuration);
    store.dispatch(actions.ticker.setRunning(true));
    function showRace(_) {
      if (!store.getState().ticker.isLastDate) {
        store.dispatch(actions.ticker.inc());
      } else {
        if (store.getState().options.loop || justStarted) {
          loop();
        } else {
          stop();
        }
      }
      justStarted = false;
    }
  }
  function stop() {
    if (ticker) {
      ticker.stop();
    }
    store.dispatch(actions.ticker.setRunning(false));
  }
  function skipBack() {
    stop();
    store.dispatch(actions.ticker.setFirst());
  }
  function loop() {
    store.dispatch(actions.ticker.setFirst());
  }
  function skipForward() {
    stop();
    store.dispatch(actions.ticker.setLast());
    store.dispatch(actions.ticker.setLast());
  }
  function toggle() {
    if (store.getState().ticker.isLastDate) {
      skipBack();
      start2();
    } else if (store.getState().ticker.isRunning) {
      stop();
    } else {
      start2();
    }
  }
  function goToDate(date) {
    store.dispatch(actions.ticker.updateDate(date));
  }
  return {
    start: start2,
    stop,
    skipBack,
    loop,
    skipForward,
    toggle,
    goToDate
  };
}

// src/lib/store/actions.ts
var actions = {
  container: container_exports,
  data: data_exports,
  options: options_exports,
  ticker: ticker_exports
};

// src/lib/store/reducer.ts
var rootReducer = (state, action) => ({
  container: containerReducer(state.container, action),
  data: dataReducer(state.data, action),
  options: optionsReducer(state.options, action),
  ticker: tickerReducer(state.ticker, action),
  triggerRender: action.triggerRender ?? true
});

// src/lib/store/store.ts
function createStore(reducer = rootReducer, preloadedState) {
  let state = {};
  if (preloadedState) {
    state = preloadedState;
  }
  function dispatch2(action) {
    state = reducer(state, action);
    notifySubscribers();
    return action;
  }
  function getState() {
    return state;
  }
  const subscribers = [];
  function subscribe(fn) {
    subscribers.push(fn);
    return {
      unsubscribe: () => {
        subscribers.splice(subscribers.indexOf(fn), 1);
      }
    };
  }
  function notifySubscribers() {
    subscribers.forEach((fn) => {
      fn();
    });
  }
  function unsubscribeAll() {
    subscribers.length = 0;
  }
  return {
    getState,
    dispatch: dispatch2,
    subscribe,
    unsubscribeAll
  };
}

// src/lib/load-data.ts
function loadData(URL2, type2 = "json") {
  switch (type2) {
    case "json":
      return json_default(URL2);
    case "csv":
      return csv2(URL2);
    case "tsv":
      return tsv2(URL2);
    case "xml":
      return xml_default(URL2);
    default:
      throw new Error(`Unsupported data type: ${type2}`);
  }
}

// src/lib/utils/utils.ts
function getColor(d, store) {
  const { names, groups } = store.getState().data;
  const { showGroups, colorSeed, colorMap } = store.getState().options;
  if (d.color) {
    return d.color;
  }
  const useGroup = Boolean(d.group) && showGroups && groups.length > 0;
  let values = useGroup ? groups : names;
  if (colorSeed) {
    values = shuffle(values, toNumber(colorSeed));
  }
  const currentValue = useGroup ? d.group : d.name;
  let index = values.indexOf(currentValue);
  if (colorMap) {
    if (Array.isArray(colorMap)) {
      while (index > colorMap.length - 1) {
        index = index - colorMap.length;
      }
      return colorMap[index];
    } else {
      if (colorMap[currentValue]) {
        return colorMap[currentValue];
      }
    }
  }
  const negativeIfOdd = index % 2 === 0 ? 1 : -1;
  const lumVariation = random(currentValue) / 10 * negativeIfOdd;
  const HueSpacing = 360 / (values.length + 1);
  const hue = (values.indexOf(currentValue) + 1) * HueSpacing;
  return hsl(hue, 0.75, 0.75 + lumVariation);
}
function getIconID(d) {
  return "icon-" + safeName(d.name);
}
function zeroPad(n, w) {
  while (n.toString().length < w) {
    n = "0" + n;
  }
  return n;
}
function toNumber(s) {
  s = String(s);
  let nums = "";
  for (let i = 0; i < s.length; i++) {
    nums += zeroPad(String(s.charCodeAt(i)), 3);
  }
  return +nums;
}
function random(InputSeed) {
  const seed = toNumber(InputSeed);
  const x = Math.sin(seed) * 1e4;
  return x - Math.floor(x);
}
function shuffle(arr, seed) {
  const array2 = [...arr];
  let m = array2.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(random(seed) * m--);
    t = array2[m];
    array2[m] = array2[i];
    array2[i] = t;
    ++seed;
  }
  return array2;
}
function generateId(prefix = "racingbars", n = 8) {
  const rnd = Array(3).fill(null).map(() => Math.random().toString(36).substr(2)).join("");
  return prefix + rnd.slice(-n);
}
function getHeight(element, minHeight, height) {
  let newHeight;
  if (!height) {
    newHeight = element.getBoundingClientRect().height;
  } else if (String(height).startsWith("window")) {
    const scale = +height.split("*")[1] || 1;
    newHeight = window.innerHeight * scale;
  } else {
    newHeight = +height;
  }
  return newHeight > minHeight ? newHeight : minHeight;
}
function getWidth(element, minWidth, width) {
  let newWidth;
  if (!width) {
    newWidth = element.getBoundingClientRect().width;
  } else if (String(width).startsWith("window")) {
    const scale = +width.split("*")[1] || 1;
    newWidth = window.innerWidth * scale;
  } else {
    newWidth = +width;
  }
  return newWidth > minWidth ? newWidth : minWidth;
}
function getElement(root2, className) {
  if (!root2)
    return void 0;
  return className ? root2.querySelector("." + className) : root2;
}
function showElement(root2, className, useVisibility = false) {
  const element = getElement(root2, className);
  if (element) {
    if (useVisibility) {
      element.style.visibility = "unset";
    } else {
      element.style.display = "flex";
    }
  }
}
function hideElement(root2, className, useVisibility = false) {
  const element = getElement(root2, className);
  if (element) {
    if (useVisibility) {
      element.style.visibility = "hidden";
    } else {
      element.style.display = "none";
    }
  }
}
function getText(param, currentDate, dateSlice, dates, isDate = false) {
  if (typeof param === "function") {
    return param(currentDate, dateSlice, dates);
  }
  if (isDate) {
    return formatDate2(currentDate, param);
  }
  return param;
}
function safeName(name) {
  return name.replace(/[\W]+/g, "_");
}
function toggleClass(root2, selector, className) {
  select_default2(root2).select(selector).classed(className, function() {
    return !select_default2(this).classed(className);
  });
}
function debounce(func, wait, immediate = false) {
  let timeout2;
  return function(_clicks, _Fn) {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout2 = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout2;
    clearTimeout(timeout2);
    timeout2 = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
var getClicks = debounce(function(event, Fn) {
  Fn(event);
}, 250);
var toDataUrl = (content, type2 = "text/javascript") => `data:${type2};charset=UTF-8;base64,` + btoa(content);
var createWorkerFromContent = (content) => {
  try {
    return new Worker(toDataUrl(content));
  } catch (e) {
    return new Worker(URL.createObjectURL(new Blob([content], { type: "application/javascript" })));
  }
};

// src/lib/utils/dates.ts
var getDates = (data) => Array.from(new Set(data.map((d) => d.date))).sort();
function getDateString(inputDate) {
  const date = new Date(inputDate);
  if (isNaN(+date)) {
    throw new Error(`"${inputDate}" is not a valid date`);
  }
  const year = date.getFullYear().toString();
  const month = zeroPad((1 + date.getMonth()).toString(), 2);
  const day = zeroPad(date.getDate().toString(), 2);
  return `${year}-${month}-${day}`;
}
function formatDate2(dateStr, format2 = "YYYY-MM-DD") {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(5, 7);
  const day = dateStr.slice(8, 10);
  const date = new Date(dateStr);
  const weekDayIndex = String(date.getDay());
  const monthNames = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  };
  const weekDays = {
    "0": "Sun",
    "1": "Mon",
    "2": "Tue",
    "3": "Wed",
    "4": "Thu",
    "5": "Fri",
    "6": "Sat"
  };
  return format2.replace("MMM", monthNames[month]).replace("DDD", weekDays[weekDayIndex]).replace("YYYY", year).replace("MM", month).replace("DD", day);
}
function getNextDate(dates, currentDate) {
  const currentIndex = dates.indexOf(currentDate);
  if (currentIndex === -1)
    return dates[0];
  const lastIndex = dates.length - 1;
  return currentIndex === lastIndex ? dates[0] : dates[currentIndex + 1];
}

// tmp/racing-bars.worker.js
var racing_bars_worker_default = '"use strict";\n(() => {\n  // node_modules/d3-dispatch/src/dispatch.js\n  var noop = { value: () => {\n  } };\n  function dispatch() {\n    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {\n      if (!(t = arguments[i] + "") || t in _ || /[\\s.]/.test(t))\n        throw new Error("illegal type: " + t);\n      _[t] = [];\n    }\n    return new Dispatch(_);\n  }\n  function Dispatch(_) {\n    this._ = _;\n  }\n  function parseTypenames(typenames, types) {\n    return typenames.trim().split(/^|\\s+/).map(function(t) {\n      var name = "", i = t.indexOf(".");\n      if (i >= 0)\n        name = t.slice(i + 1), t = t.slice(0, i);\n      if (t && !types.hasOwnProperty(t))\n        throw new Error("unknown type: " + t);\n      return { type: t, name };\n    });\n  }\n  Dispatch.prototype = dispatch.prototype = {\n    constructor: Dispatch,\n    on: function(typename, callback) {\n      var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;\n      if (arguments.length < 2) {\n        while (++i < n)\n          if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))\n            return t;\n        return;\n      }\n      if (callback != null && typeof callback !== "function")\n        throw new Error("invalid callback: " + callback);\n      while (++i < n) {\n        if (t = (typename = T[i]).type)\n          _[t] = set(_[t], typename.name, callback);\n        else if (callback == null)\n          for (t in _)\n            _[t] = set(_[t], typename.name, null);\n      }\n      return this;\n    },\n    copy: function() {\n      var copy = {}, _ = this._;\n      for (var t in _)\n        copy[t] = _[t].slice();\n      return new Dispatch(copy);\n    },\n    call: function(type2, that) {\n      if ((n = arguments.length - 2) > 0)\n        for (var args = new Array(n), i = 0, n, t; i < n; ++i)\n          args[i] = arguments[i + 2];\n      if (!this._.hasOwnProperty(type2))\n        throw new Error("unknown type: " + type2);\n      for (t = this._[type2], i = 0, n = t.length; i < n; ++i)\n        t[i].value.apply(that, args);\n    },\n    apply: function(type2, that, args) {\n      if (!this._.hasOwnProperty(type2))\n        throw new Error("unknown type: " + type2);\n      for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)\n        t[i].value.apply(that, args);\n    }\n  };\n  function get(type2, name) {\n    for (var i = 0, n = type2.length, c; i < n; ++i) {\n      if ((c = type2[i]).name === name) {\n        return c.value;\n      }\n    }\n  }\n  function set(type2, name, callback) {\n    for (var i = 0, n = type2.length; i < n; ++i) {\n      if (type2[i].name === name) {\n        type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));\n        break;\n      }\n    }\n    if (callback != null)\n      type2.push({ name, value: callback });\n    return type2;\n  }\n  var dispatch_default = dispatch;\n\n  // node_modules/d3-selection/src/namespaces.js\n  var xhtml = "http://www.w3.org/1999/xhtml";\n  var namespaces_default = {\n    svg: "http://www.w3.org/2000/svg",\n    xhtml,\n    xlink: "http://www.w3.org/1999/xlink",\n    xml: "http://www.w3.org/XML/1998/namespace",\n    xmlns: "http://www.w3.org/2000/xmlns/"\n  };\n\n  // node_modules/d3-selection/src/namespace.js\n  function namespace_default(name) {\n    var prefix = name += "", i = prefix.indexOf(":");\n    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")\n      name = name.slice(i + 1);\n    return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;\n  }\n\n  // node_modules/d3-selection/src/creator.js\n  function creatorInherit(name) {\n    return function() {\n      var document2 = this.ownerDocument, uri = this.namespaceURI;\n      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);\n    };\n  }\n  function creatorFixed(fullname) {\n    return function() {\n      return this.ownerDocument.createElementNS(fullname.space, fullname.local);\n    };\n  }\n  function creator_default(name) {\n    var fullname = namespace_default(name);\n    return (fullname.local ? creatorFixed : creatorInherit)(fullname);\n  }\n\n  // node_modules/d3-selection/src/selector.js\n  function none() {\n  }\n  function selector_default(selector) {\n    return selector == null ? none : function() {\n      return this.querySelector(selector);\n    };\n  }\n\n  // node_modules/d3-selection/src/selection/select.js\n  function select_default(select) {\n    if (typeof select !== "function")\n      select = selector_default(select);\n    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {\n        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {\n          if ("__data__" in node)\n            subnode.__data__ = node.__data__;\n          subgroup[i] = subnode;\n        }\n      }\n    }\n    return new Selection(subgroups, this._parents);\n  }\n\n  // node_modules/d3-selection/src/array.js\n  function array(x) {\n    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);\n  }\n\n  // node_modules/d3-selection/src/selectorAll.js\n  function empty() {\n    return [];\n  }\n  function selectorAll_default(selector) {\n    return selector == null ? empty : function() {\n      return this.querySelectorAll(selector);\n    };\n  }\n\n  // node_modules/d3-selection/src/selection/selectAll.js\n  function arrayAll(select) {\n    return function() {\n      return array(select.apply(this, arguments));\n    };\n  }\n  function selectAll_default(select) {\n    if (typeof select === "function")\n      select = arrayAll(select);\n    else\n      select = selectorAll_default(select);\n    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n        if (node = group[i]) {\n          subgroups.push(select.call(node, node.__data__, i, group));\n          parents.push(node);\n        }\n      }\n    }\n    return new Selection(subgroups, parents);\n  }\n\n  // node_modules/d3-selection/src/matcher.js\n  function matcher_default(selector) {\n    return function() {\n      return this.matches(selector);\n    };\n  }\n  function childMatcher(selector) {\n    return function(node) {\n      return node.matches(selector);\n    };\n  }\n\n  // node_modules/d3-selection/src/selection/selectChild.js\n  var find = Array.prototype.find;\n  function childFind(match) {\n    return function() {\n      return find.call(this.children, match);\n    };\n  }\n  function childFirst() {\n    return this.firstElementChild;\n  }\n  function selectChild_default(match) {\n    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));\n  }\n\n  // node_modules/d3-selection/src/selection/selectChildren.js\n  var filter = Array.prototype.filter;\n  function children() {\n    return Array.from(this.children);\n  }\n  function childrenFilter(match) {\n    return function() {\n      return filter.call(this.children, match);\n    };\n  }\n  function selectChildren_default(match) {\n    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));\n  }\n\n  // node_modules/d3-selection/src/selection/filter.js\n  function filter_default(match) {\n    if (typeof match !== "function")\n      match = matcher_default(match);\n    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {\n        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {\n          subgroup.push(node);\n        }\n      }\n    }\n    return new Selection(subgroups, this._parents);\n  }\n\n  // node_modules/d3-selection/src/selection/sparse.js\n  function sparse_default(update) {\n    return new Array(update.length);\n  }\n\n  // node_modules/d3-selection/src/selection/enter.js\n  function enter_default() {\n    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);\n  }\n  function EnterNode(parent, datum2) {\n    this.ownerDocument = parent.ownerDocument;\n    this.namespaceURI = parent.namespaceURI;\n    this._next = null;\n    this._parent = parent;\n    this.__data__ = datum2;\n  }\n  EnterNode.prototype = {\n    constructor: EnterNode,\n    appendChild: function(child) {\n      return this._parent.insertBefore(child, this._next);\n    },\n    insertBefore: function(child, next) {\n      return this._parent.insertBefore(child, next);\n    },\n    querySelector: function(selector) {\n      return this._parent.querySelector(selector);\n    },\n    querySelectorAll: function(selector) {\n      return this._parent.querySelectorAll(selector);\n    }\n  };\n\n  // node_modules/d3-selection/src/constant.js\n  function constant_default(x) {\n    return function() {\n      return x;\n    };\n  }\n\n  // node_modules/d3-selection/src/selection/data.js\n  function bindIndex(parent, group, enter, update, exit, data) {\n    var i = 0, node, groupLength = group.length, dataLength = data.length;\n    for (; i < dataLength; ++i) {\n      if (node = group[i]) {\n        node.__data__ = data[i];\n        update[i] = node;\n      } else {\n        enter[i] = new EnterNode(parent, data[i]);\n      }\n    }\n    for (; i < groupLength; ++i) {\n      if (node = group[i]) {\n        exit[i] = node;\n      }\n    }\n  }\n  function bindKey(parent, group, enter, update, exit, data, key) {\n    var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;\n    for (i = 0; i < groupLength; ++i) {\n      if (node = group[i]) {\n        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";\n        if (nodeByKeyValue.has(keyValue)) {\n          exit[i] = node;\n        } else {\n          nodeByKeyValue.set(keyValue, node);\n        }\n      }\n    }\n    for (i = 0; i < dataLength; ++i) {\n      keyValue = key.call(parent, data[i], i, data) + "";\n      if (node = nodeByKeyValue.get(keyValue)) {\n        update[i] = node;\n        node.__data__ = data[i];\n        nodeByKeyValue.delete(keyValue);\n      } else {\n        enter[i] = new EnterNode(parent, data[i]);\n      }\n    }\n    for (i = 0; i < groupLength; ++i) {\n      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {\n        exit[i] = node;\n      }\n    }\n  }\n  function datum(node) {\n    return node.__data__;\n  }\n  function data_default(value, key) {\n    if (!arguments.length)\n      return Array.from(this, datum);\n    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;\n    if (typeof value !== "function")\n      value = constant_default(value);\n    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {\n      var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);\n      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);\n      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {\n        if (previous = enterGroup[i0]) {\n          if (i0 >= i1)\n            i1 = i0 + 1;\n          while (!(next = updateGroup[i1]) && ++i1 < dataLength)\n            ;\n          previous._next = next || null;\n        }\n      }\n    }\n    update = new Selection(update, parents);\n    update._enter = enter;\n    update._exit = exit;\n    return update;\n  }\n  function arraylike(data) {\n    return typeof data === "object" && "length" in data ? data : Array.from(data);\n  }\n\n  // node_modules/d3-selection/src/selection/exit.js\n  function exit_default() {\n    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);\n  }\n\n  // node_modules/d3-selection/src/selection/join.js\n  function join_default(onenter, onupdate, onexit) {\n    var enter = this.enter(), update = this, exit = this.exit();\n    if (typeof onenter === "function") {\n      enter = onenter(enter);\n      if (enter)\n        enter = enter.selection();\n    } else {\n      enter = enter.append(onenter + "");\n    }\n    if (onupdate != null) {\n      update = onupdate(update);\n      if (update)\n        update = update.selection();\n    }\n    if (onexit == null)\n      exit.remove();\n    else\n      onexit(exit);\n    return enter && update ? enter.merge(update).order() : update;\n  }\n\n  // node_modules/d3-selection/src/selection/merge.js\n  function merge_default(context) {\n    var selection2 = context.selection ? context.selection() : context;\n    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {\n      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {\n        if (node = group0[i] || group1[i]) {\n          merge[i] = node;\n        }\n      }\n    }\n    for (; j < m0; ++j) {\n      merges[j] = groups0[j];\n    }\n    return new Selection(merges, this._parents);\n  }\n\n  // node_modules/d3-selection/src/selection/order.js\n  function order_default() {\n    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {\n      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {\n        if (node = group[i]) {\n          if (next && node.compareDocumentPosition(next) ^ 4)\n            next.parentNode.insertBefore(node, next);\n          next = node;\n        }\n      }\n    }\n    return this;\n  }\n\n  // node_modules/d3-selection/src/selection/sort.js\n  function sort_default(compare) {\n    if (!compare)\n      compare = ascending;\n    function compareNode(a, b) {\n      return a && b ? compare(a.__data__, b.__data__) : !a - !b;\n    }\n    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {\n        if (node = group[i]) {\n          sortgroup[i] = node;\n        }\n      }\n      sortgroup.sort(compareNode);\n    }\n    return new Selection(sortgroups, this._parents).order();\n  }\n  function ascending(a, b) {\n    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n  }\n\n  // node_modules/d3-selection/src/selection/call.js\n  function call_default() {\n    var callback = arguments[0];\n    arguments[0] = this;\n    callback.apply(null, arguments);\n    return this;\n  }\n\n  // node_modules/d3-selection/src/selection/nodes.js\n  function nodes_default() {\n    return Array.from(this);\n  }\n\n  // node_modules/d3-selection/src/selection/node.js\n  function node_default() {\n    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {\n        var node = group[i];\n        if (node)\n          return node;\n      }\n    }\n    return null;\n  }\n\n  // node_modules/d3-selection/src/selection/size.js\n  function size_default() {\n    let size = 0;\n    for (const node of this)\n      ++size;\n    return size;\n  }\n\n  // node_modules/d3-selection/src/selection/empty.js\n  function empty_default() {\n    return !this.node();\n  }\n\n  // node_modules/d3-selection/src/selection/each.js\n  function each_default(callback) {\n    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {\n        if (node = group[i])\n          callback.call(node, node.__data__, i, group);\n      }\n    }\n    return this;\n  }\n\n  // node_modules/d3-selection/src/selection/attr.js\n  function attrRemove(name) {\n    return function() {\n      this.removeAttribute(name);\n    };\n  }\n  function attrRemoveNS(fullname) {\n    return function() {\n      this.removeAttributeNS(fullname.space, fullname.local);\n    };\n  }\n  function attrConstant(name, value) {\n    return function() {\n      this.setAttribute(name, value);\n    };\n  }\n  function attrConstantNS(fullname, value) {\n    return function() {\n      this.setAttributeNS(fullname.space, fullname.local, value);\n    };\n  }\n  function attrFunction(name, value) {\n    return function() {\n      var v = value.apply(this, arguments);\n      if (v == null)\n        this.removeAttribute(name);\n      else\n        this.setAttribute(name, v);\n    };\n  }\n  function attrFunctionNS(fullname, value) {\n    return function() {\n      var v = value.apply(this, arguments);\n      if (v == null)\n        this.removeAttributeNS(fullname.space, fullname.local);\n      else\n        this.setAttributeNS(fullname.space, fullname.local, v);\n    };\n  }\n  function attr_default(name, value) {\n    var fullname = namespace_default(name);\n    if (arguments.length < 2) {\n      var node = this.node();\n      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);\n    }\n    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));\n  }\n\n  // node_modules/d3-selection/src/window.js\n  function window_default(node) {\n    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;\n  }\n\n  // node_modules/d3-selection/src/selection/style.js\n  function styleRemove(name) {\n    return function() {\n      this.style.removeProperty(name);\n    };\n  }\n  function styleConstant(name, value, priority) {\n    return function() {\n      this.style.setProperty(name, value, priority);\n    };\n  }\n  function styleFunction(name, value, priority) {\n    return function() {\n      var v = value.apply(this, arguments);\n      if (v == null)\n        this.style.removeProperty(name);\n      else\n        this.style.setProperty(name, v, priority);\n    };\n  }\n  function style_default(name, value, priority) {\n    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);\n  }\n  function styleValue(node, name) {\n    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);\n  }\n\n  // node_modules/d3-selection/src/selection/property.js\n  function propertyRemove(name) {\n    return function() {\n      delete this[name];\n    };\n  }\n  function propertyConstant(name, value) {\n    return function() {\n      this[name] = value;\n    };\n  }\n  function propertyFunction(name, value) {\n    return function() {\n      var v = value.apply(this, arguments);\n      if (v == null)\n        delete this[name];\n      else\n        this[name] = v;\n    };\n  }\n  function property_default(name, value) {\n    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];\n  }\n\n  // node_modules/d3-selection/src/selection/classed.js\n  function classArray(string) {\n    return string.trim().split(/^|\\s+/);\n  }\n  function classList(node) {\n    return node.classList || new ClassList(node);\n  }\n  function ClassList(node) {\n    this._node = node;\n    this._names = classArray(node.getAttribute("class") || "");\n  }\n  ClassList.prototype = {\n    add: function(name) {\n      var i = this._names.indexOf(name);\n      if (i < 0) {\n        this._names.push(name);\n        this._node.setAttribute("class", this._names.join(" "));\n      }\n    },\n    remove: function(name) {\n      var i = this._names.indexOf(name);\n      if (i >= 0) {\n        this._names.splice(i, 1);\n        this._node.setAttribute("class", this._names.join(" "));\n      }\n    },\n    contains: function(name) {\n      return this._names.indexOf(name) >= 0;\n    }\n  };\n  function classedAdd(node, names) {\n    var list = classList(node), i = -1, n = names.length;\n    while (++i < n)\n      list.add(names[i]);\n  }\n  function classedRemove(node, names) {\n    var list = classList(node), i = -1, n = names.length;\n    while (++i < n)\n      list.remove(names[i]);\n  }\n  function classedTrue(names) {\n    return function() {\n      classedAdd(this, names);\n    };\n  }\n  function classedFalse(names) {\n    return function() {\n      classedRemove(this, names);\n    };\n  }\n  function classedFunction(names, value) {\n    return function() {\n      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);\n    };\n  }\n  function classed_default(name, value) {\n    var names = classArray(name + "");\n    if (arguments.length < 2) {\n      var list = classList(this.node()), i = -1, n = names.length;\n      while (++i < n)\n        if (!list.contains(names[i]))\n          return false;\n      return true;\n    }\n    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));\n  }\n\n  // node_modules/d3-selection/src/selection/text.js\n  function textRemove() {\n    this.textContent = "";\n  }\n  function textConstant(value) {\n    return function() {\n      this.textContent = value;\n    };\n  }\n  function textFunction(value) {\n    return function() {\n      var v = value.apply(this, arguments);\n      this.textContent = v == null ? "" : v;\n    };\n  }\n  function text_default(value) {\n    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;\n  }\n\n  // node_modules/d3-selection/src/selection/html.js\n  function htmlRemove() {\n    this.innerHTML = "";\n  }\n  function htmlConstant(value) {\n    return function() {\n      this.innerHTML = value;\n    };\n  }\n  function htmlFunction(value) {\n    return function() {\n      var v = value.apply(this, arguments);\n      this.innerHTML = v == null ? "" : v;\n    };\n  }\n  function html_default(value) {\n    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;\n  }\n\n  // node_modules/d3-selection/src/selection/raise.js\n  function raise() {\n    if (this.nextSibling)\n      this.parentNode.appendChild(this);\n  }\n  function raise_default() {\n    return this.each(raise);\n  }\n\n  // node_modules/d3-selection/src/selection/lower.js\n  function lower() {\n    if (this.previousSibling)\n      this.parentNode.insertBefore(this, this.parentNode.firstChild);\n  }\n  function lower_default() {\n    return this.each(lower);\n  }\n\n  // node_modules/d3-selection/src/selection/append.js\n  function append_default(name) {\n    var create2 = typeof name === "function" ? name : creator_default(name);\n    return this.select(function() {\n      return this.appendChild(create2.apply(this, arguments));\n    });\n  }\n\n  // node_modules/d3-selection/src/selection/insert.js\n  function constantNull() {\n    return null;\n  }\n  function insert_default(name, before) {\n    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);\n    return this.select(function() {\n      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);\n    });\n  }\n\n  // node_modules/d3-selection/src/selection/remove.js\n  function remove() {\n    var parent = this.parentNode;\n    if (parent)\n      parent.removeChild(this);\n  }\n  function remove_default() {\n    return this.each(remove);\n  }\n\n  // node_modules/d3-selection/src/selection/clone.js\n  function selection_cloneShallow() {\n    var clone = this.cloneNode(false), parent = this.parentNode;\n    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;\n  }\n  function selection_cloneDeep() {\n    var clone = this.cloneNode(true), parent = this.parentNode;\n    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;\n  }\n  function clone_default(deep) {\n    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);\n  }\n\n  // node_modules/d3-selection/src/selection/datum.js\n  function datum_default(value) {\n    return arguments.length ? this.property("__data__", value) : this.node().__data__;\n  }\n\n  // node_modules/d3-selection/src/selection/on.js\n  function contextListener(listener) {\n    return function(event) {\n      listener.call(this, event, this.__data__);\n    };\n  }\n  function parseTypenames2(typenames) {\n    return typenames.trim().split(/^|\\s+/).map(function(t) {\n      var name = "", i = t.indexOf(".");\n      if (i >= 0)\n        name = t.slice(i + 1), t = t.slice(0, i);\n      return { type: t, name };\n    });\n  }\n  function onRemove(typename) {\n    return function() {\n      var on = this.__on;\n      if (!on)\n        return;\n      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {\n        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {\n          this.removeEventListener(o.type, o.listener, o.options);\n        } else {\n          on[++i] = o;\n        }\n      }\n      if (++i)\n        on.length = i;\n      else\n        delete this.__on;\n    };\n  }\n  function onAdd(typename, value, options) {\n    return function() {\n      var on = this.__on, o, listener = contextListener(value);\n      if (on)\n        for (var j = 0, m = on.length; j < m; ++j) {\n          if ((o = on[j]).type === typename.type && o.name === typename.name) {\n            this.removeEventListener(o.type, o.listener, o.options);\n            this.addEventListener(o.type, o.listener = listener, o.options = options);\n            o.value = value;\n            return;\n          }\n        }\n      this.addEventListener(typename.type, listener, options);\n      o = { type: typename.type, name: typename.name, value, listener, options };\n      if (!on)\n        this.__on = [o];\n      else\n        on.push(o);\n    };\n  }\n  function on_default(typename, value, options) {\n    var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;\n    if (arguments.length < 2) {\n      var on = this.node().__on;\n      if (on)\n        for (var j = 0, m = on.length, o; j < m; ++j) {\n          for (i = 0, o = on[j]; i < n; ++i) {\n            if ((t = typenames[i]).type === o.type && t.name === o.name) {\n              return o.value;\n            }\n          }\n        }\n      return;\n    }\n    on = value ? onAdd : onRemove;\n    for (i = 0; i < n; ++i)\n      this.each(on(typenames[i], value, options));\n    return this;\n  }\n\n  // node_modules/d3-selection/src/selection/dispatch.js\n  function dispatchEvent(node, type2, params) {\n    var window2 = window_default(node), event = window2.CustomEvent;\n    if (typeof event === "function") {\n      event = new event(type2, params);\n    } else {\n      event = window2.document.createEvent("Event");\n      if (params)\n        event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;\n      else\n        event.initEvent(type2, false, false);\n    }\n    node.dispatchEvent(event);\n  }\n  function dispatchConstant(type2, params) {\n    return function() {\n      return dispatchEvent(this, type2, params);\n    };\n  }\n  function dispatchFunction(type2, params) {\n    return function() {\n      return dispatchEvent(this, type2, params.apply(this, arguments));\n    };\n  }\n  function dispatch_default2(type2, params) {\n    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));\n  }\n\n  // node_modules/d3-selection/src/selection/iterator.js\n  function* iterator_default() {\n    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {\n        if (node = group[i])\n          yield node;\n      }\n    }\n  }\n\n  // node_modules/d3-selection/src/selection/index.js\n  var root = [null];\n  function Selection(groups, parents) {\n    this._groups = groups;\n    this._parents = parents;\n  }\n  function selection() {\n    return new Selection([[document.documentElement]], root);\n  }\n  function selection_selection() {\n    return this;\n  }\n  Selection.prototype = selection.prototype = {\n    constructor: Selection,\n    select: select_default,\n    selectAll: selectAll_default,\n    selectChild: selectChild_default,\n    selectChildren: selectChildren_default,\n    filter: filter_default,\n    data: data_default,\n    enter: enter_default,\n    exit: exit_default,\n    join: join_default,\n    merge: merge_default,\n    selection: selection_selection,\n    order: order_default,\n    sort: sort_default,\n    call: call_default,\n    nodes: nodes_default,\n    node: node_default,\n    size: size_default,\n    empty: empty_default,\n    each: each_default,\n    attr: attr_default,\n    style: style_default,\n    property: property_default,\n    classed: classed_default,\n    text: text_default,\n    html: html_default,\n    raise: raise_default,\n    lower: lower_default,\n    append: append_default,\n    insert: insert_default,\n    remove: remove_default,\n    clone: clone_default,\n    datum: datum_default,\n    on: on_default,\n    dispatch: dispatch_default2,\n    [Symbol.iterator]: iterator_default\n  };\n  var selection_default = selection;\n\n  // node_modules/d3-color/src/define.js\n  function define_default(constructor, factory, prototype) {\n    constructor.prototype = factory.prototype = prototype;\n    prototype.constructor = constructor;\n  }\n  function extend(parent, definition) {\n    var prototype = Object.create(parent.prototype);\n    for (var key in definition)\n      prototype[key] = definition[key];\n    return prototype;\n  }\n\n  // node_modules/d3-color/src/color.js\n  function Color() {\n  }\n  var darker = 0.7;\n  var brighter = 1 / darker;\n  var reI = "\\\\s*([+-]?\\\\d+)\\\\s*";\n  var reN = "\\\\s*([+-]?(?:\\\\d*\\\\.)?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*";\n  var reP = "\\\\s*([+-]?(?:\\\\d*\\\\.)?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*";\n  var reHex = /^#([0-9a-f]{3,8})$/;\n  var reRgbInteger = new RegExp(`^rgb\\\\(${reI},${reI},${reI}\\\\)$`);\n  var reRgbPercent = new RegExp(`^rgb\\\\(${reP},${reP},${reP}\\\\)$`);\n  var reRgbaInteger = new RegExp(`^rgba\\\\(${reI},${reI},${reI},${reN}\\\\)$`);\n  var reRgbaPercent = new RegExp(`^rgba\\\\(${reP},${reP},${reP},${reN}\\\\)$`);\n  var reHslPercent = new RegExp(`^hsl\\\\(${reN},${reP},${reP}\\\\)$`);\n  var reHslaPercent = new RegExp(`^hsla\\\\(${reN},${reP},${reP},${reN}\\\\)$`);\n  var named = {\n    aliceblue: 15792383,\n    antiquewhite: 16444375,\n    aqua: 65535,\n    aquamarine: 8388564,\n    azure: 15794175,\n    beige: 16119260,\n    bisque: 16770244,\n    black: 0,\n    blanchedalmond: 16772045,\n    blue: 255,\n    blueviolet: 9055202,\n    brown: 10824234,\n    burlywood: 14596231,\n    cadetblue: 6266528,\n    chartreuse: 8388352,\n    chocolate: 13789470,\n    coral: 16744272,\n    cornflowerblue: 6591981,\n    cornsilk: 16775388,\n    crimson: 14423100,\n    cyan: 65535,\n    darkblue: 139,\n    darkcyan: 35723,\n    darkgoldenrod: 12092939,\n    darkgray: 11119017,\n    darkgreen: 25600,\n    darkgrey: 11119017,\n    darkkhaki: 12433259,\n    darkmagenta: 9109643,\n    darkolivegreen: 5597999,\n    darkorange: 16747520,\n    darkorchid: 10040012,\n    darkred: 9109504,\n    darksalmon: 15308410,\n    darkseagreen: 9419919,\n    darkslateblue: 4734347,\n    darkslategray: 3100495,\n    darkslategrey: 3100495,\n    darkturquoise: 52945,\n    darkviolet: 9699539,\n    deeppink: 16716947,\n    deepskyblue: 49151,\n    dimgray: 6908265,\n    dimgrey: 6908265,\n    dodgerblue: 2003199,\n    firebrick: 11674146,\n    floralwhite: 16775920,\n    forestgreen: 2263842,\n    fuchsia: 16711935,\n    gainsboro: 14474460,\n    ghostwhite: 16316671,\n    gold: 16766720,\n    goldenrod: 14329120,\n    gray: 8421504,\n    green: 32768,\n    greenyellow: 11403055,\n    grey: 8421504,\n    honeydew: 15794160,\n    hotpink: 16738740,\n    indianred: 13458524,\n    indigo: 4915330,\n    ivory: 16777200,\n    khaki: 15787660,\n    lavender: 15132410,\n    lavenderblush: 16773365,\n    lawngreen: 8190976,\n    lemonchiffon: 16775885,\n    lightblue: 11393254,\n    lightcoral: 15761536,\n    lightcyan: 14745599,\n    lightgoldenrodyellow: 16448210,\n    lightgray: 13882323,\n    lightgreen: 9498256,\n    lightgrey: 13882323,\n    lightpink: 16758465,\n    lightsalmon: 16752762,\n    lightseagreen: 2142890,\n    lightskyblue: 8900346,\n    lightslategray: 7833753,\n    lightslategrey: 7833753,\n    lightsteelblue: 11584734,\n    lightyellow: 16777184,\n    lime: 65280,\n    limegreen: 3329330,\n    linen: 16445670,\n    magenta: 16711935,\n    maroon: 8388608,\n    mediumaquamarine: 6737322,\n    mediumblue: 205,\n    mediumorchid: 12211667,\n    mediumpurple: 9662683,\n    mediumseagreen: 3978097,\n    mediumslateblue: 8087790,\n    mediumspringgreen: 64154,\n    mediumturquoise: 4772300,\n    mediumvioletred: 13047173,\n    midnightblue: 1644912,\n    mintcream: 16121850,\n    mistyrose: 16770273,\n    moccasin: 16770229,\n    navajowhite: 16768685,\n    navy: 128,\n    oldlace: 16643558,\n    olive: 8421376,\n    olivedrab: 7048739,\n    orange: 16753920,\n    orangered: 16729344,\n    orchid: 14315734,\n    palegoldenrod: 15657130,\n    palegreen: 10025880,\n    paleturquoise: 11529966,\n    palevioletred: 14381203,\n    papayawhip: 16773077,\n    peachpuff: 16767673,\n    peru: 13468991,\n    pink: 16761035,\n    plum: 14524637,\n    powderblue: 11591910,\n    purple: 8388736,\n    rebeccapurple: 6697881,\n    red: 16711680,\n    rosybrown: 12357519,\n    royalblue: 4286945,\n    saddlebrown: 9127187,\n    salmon: 16416882,\n    sandybrown: 16032864,\n    seagreen: 3050327,\n    seashell: 16774638,\n    sienna: 10506797,\n    silver: 12632256,\n    skyblue: 8900331,\n    slateblue: 6970061,\n    slategray: 7372944,\n    slategrey: 7372944,\n    snow: 16775930,\n    springgreen: 65407,\n    steelblue: 4620980,\n    tan: 13808780,\n    teal: 32896,\n    thistle: 14204888,\n    tomato: 16737095,\n    turquoise: 4251856,\n    violet: 15631086,\n    wheat: 16113331,\n    white: 16777215,\n    whitesmoke: 16119285,\n    yellow: 16776960,\n    yellowgreen: 10145074\n  };\n  define_default(Color, color, {\n    copy(channels) {\n      return Object.assign(new this.constructor(), this, channels);\n    },\n    displayable() {\n      return this.rgb().displayable();\n    },\n    hex: color_formatHex,\n    // Deprecated! Use color.formatHex.\n    formatHex: color_formatHex,\n    formatHex8: color_formatHex8,\n    formatHsl: color_formatHsl,\n    formatRgb: color_formatRgb,\n    toString: color_formatRgb\n  });\n  function color_formatHex() {\n    return this.rgb().formatHex();\n  }\n  function color_formatHex8() {\n    return this.rgb().formatHex8();\n  }\n  function color_formatHsl() {\n    return hslConvert(this).formatHsl();\n  }\n  function color_formatRgb() {\n    return this.rgb().formatRgb();\n  }\n  function color(format2) {\n    var m, l;\n    format2 = (format2 + "").trim().toLowerCase();\n    return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;\n  }\n  function rgbn(n) {\n    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);\n  }\n  function rgba(r, g, b, a) {\n    if (a <= 0)\n      r = g = b = NaN;\n    return new Rgb(r, g, b, a);\n  }\n  function rgbConvert(o) {\n    if (!(o instanceof Color))\n      o = color(o);\n    if (!o)\n      return new Rgb();\n    o = o.rgb();\n    return new Rgb(o.r, o.g, o.b, o.opacity);\n  }\n  function rgb(r, g, b, opacity) {\n    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);\n  }\n  function Rgb(r, g, b, opacity) {\n    this.r = +r;\n    this.g = +g;\n    this.b = +b;\n    this.opacity = +opacity;\n  }\n  define_default(Rgb, rgb, extend(Color, {\n    brighter(k) {\n      k = k == null ? brighter : Math.pow(brighter, k);\n      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n    },\n    darker(k) {\n      k = k == null ? darker : Math.pow(darker, k);\n      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n    },\n    rgb() {\n      return this;\n    },\n    clamp() {\n      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));\n    },\n    displayable() {\n      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);\n    },\n    hex: rgb_formatHex,\n    // Deprecated! Use color.formatHex.\n    formatHex: rgb_formatHex,\n    formatHex8: rgb_formatHex8,\n    formatRgb: rgb_formatRgb,\n    toString: rgb_formatRgb\n  }));\n  function rgb_formatHex() {\n    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;\n  }\n  function rgb_formatHex8() {\n    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;\n  }\n  function rgb_formatRgb() {\n    const a = clampa(this.opacity);\n    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;\n  }\n  function clampa(opacity) {\n    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));\n  }\n  function clampi(value) {\n    return Math.max(0, Math.min(255, Math.round(value) || 0));\n  }\n  function hex(value) {\n    value = clampi(value);\n    return (value < 16 ? "0" : "") + value.toString(16);\n  }\n  function hsla(h, s, l, a) {\n    if (a <= 0)\n      h = s = l = NaN;\n    else if (l <= 0 || l >= 1)\n      h = s = NaN;\n    else if (s <= 0)\n      h = NaN;\n    return new Hsl(h, s, l, a);\n  }\n  function hslConvert(o) {\n    if (o instanceof Hsl)\n      return new Hsl(o.h, o.s, o.l, o.opacity);\n    if (!(o instanceof Color))\n      o = color(o);\n    if (!o)\n      return new Hsl();\n    if (o instanceof Hsl)\n      return o;\n    o = o.rgb();\n    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s = max3 - min2, l = (max3 + min2) / 2;\n    if (s) {\n      if (r === max3)\n        h = (g - b) / s + (g < b) * 6;\n      else if (g === max3)\n        h = (b - r) / s + 2;\n      else\n        h = (r - g) / s + 4;\n      s /= l < 0.5 ? max3 + min2 : 2 - max3 - min2;\n      h *= 60;\n    } else {\n      s = l > 0 && l < 1 ? 0 : h;\n    }\n    return new Hsl(h, s, l, o.opacity);\n  }\n  function hsl(h, s, l, opacity) {\n    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);\n  }\n  function Hsl(h, s, l, opacity) {\n    this.h = +h;\n    this.s = +s;\n    this.l = +l;\n    this.opacity = +opacity;\n  }\n  define_default(Hsl, hsl, extend(Color, {\n    brighter(k) {\n      k = k == null ? brighter : Math.pow(brighter, k);\n      return new Hsl(this.h, this.s, this.l * k, this.opacity);\n    },\n    darker(k) {\n      k = k == null ? darker : Math.pow(darker, k);\n      return new Hsl(this.h, this.s, this.l * k, this.opacity);\n    },\n    rgb() {\n      var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;\n      return new Rgb(\n        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),\n        hsl2rgb(h, m1, m2),\n        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),\n        this.opacity\n      );\n    },\n    clamp() {\n      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));\n    },\n    displayable() {\n      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);\n    },\n    formatHsl() {\n      const a = clampa(this.opacity);\n      return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;\n    }\n  }));\n  function clamph(value) {\n    value = (value || 0) % 360;\n    return value < 0 ? value + 360 : value;\n  }\n  function clampt(value) {\n    return Math.max(0, Math.min(1, value || 0));\n  }\n  function hsl2rgb(h, m1, m2) {\n    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;\n  }\n\n  // node_modules/d3-interpolate/src/basis.js\n  function basis(t12, v0, v1, v2, v3) {\n    var t2 = t12 * t12, t3 = t2 * t12;\n    return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;\n  }\n  function basis_default(values) {\n    var n = values.length - 1;\n    return function(t) {\n      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;\n      return basis((t - i / n) * n, v0, v1, v2, v3);\n    };\n  }\n\n  // node_modules/d3-interpolate/src/basisClosed.js\n  function basisClosed_default(values) {\n    var n = values.length;\n    return function(t) {\n      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];\n      return basis((t - i / n) * n, v0, v1, v2, v3);\n    };\n  }\n\n  // node_modules/d3-interpolate/src/constant.js\n  var constant_default2 = (x) => () => x;\n\n  // node_modules/d3-interpolate/src/color.js\n  function linear(a, d) {\n    return function(t) {\n      return a + t * d;\n    };\n  }\n  function exponential(a, b, y) {\n    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {\n      return Math.pow(a + t * b, y);\n    };\n  }\n  function gamma(y) {\n    return (y = +y) === 1 ? nogamma : function(a, b) {\n      return b - a ? exponential(a, b, y) : constant_default2(isNaN(a) ? b : a);\n    };\n  }\n  function nogamma(a, b) {\n    var d = b - a;\n    return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);\n  }\n\n  // node_modules/d3-interpolate/src/rgb.js\n  var rgb_default = function rgbGamma(y) {\n    var color2 = gamma(y);\n    function rgb2(start2, end) {\n      var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);\n      return function(t) {\n        start2.r = r(t);\n        start2.g = g(t);\n        start2.b = b(t);\n        start2.opacity = opacity(t);\n        return start2 + "";\n      };\n    }\n    rgb2.gamma = rgbGamma;\n    return rgb2;\n  }(1);\n  function rgbSpline(spline) {\n    return function(colors) {\n      var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;\n      for (i = 0; i < n; ++i) {\n        color2 = rgb(colors[i]);\n        r[i] = color2.r || 0;\n        g[i] = color2.g || 0;\n        b[i] = color2.b || 0;\n      }\n      r = spline(r);\n      g = spline(g);\n      b = spline(b);\n      color2.opacity = 1;\n      return function(t) {\n        color2.r = r(t);\n        color2.g = g(t);\n        color2.b = b(t);\n        return color2 + "";\n      };\n    };\n  }\n  var rgbBasis = rgbSpline(basis_default);\n  var rgbBasisClosed = rgbSpline(basisClosed_default);\n\n  // node_modules/d3-interpolate/src/numberArray.js\n  function numberArray_default(a, b) {\n    if (!b)\n      b = [];\n    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;\n    return function(t) {\n      for (i = 0; i < n; ++i)\n        c[i] = a[i] * (1 - t) + b[i] * t;\n      return c;\n    };\n  }\n  function isNumberArray(x) {\n    return ArrayBuffer.isView(x) && !(x instanceof DataView);\n  }\n\n  // node_modules/d3-interpolate/src/array.js\n  function genericArray(a, b) {\n    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;\n    for (i = 0; i < na; ++i)\n      x[i] = value_default(a[i], b[i]);\n    for (; i < nb; ++i)\n      c[i] = b[i];\n    return function(t) {\n      for (i = 0; i < na; ++i)\n        c[i] = x[i](t);\n      return c;\n    };\n  }\n\n  // node_modules/d3-interpolate/src/date.js\n  function date_default(a, b) {\n    var d = /* @__PURE__ */ new Date();\n    return a = +a, b = +b, function(t) {\n      return d.setTime(a * (1 - t) + b * t), d;\n    };\n  }\n\n  // node_modules/d3-interpolate/src/number.js\n  function number_default(a, b) {\n    return a = +a, b = +b, function(t) {\n      return a * (1 - t) + b * t;\n    };\n  }\n\n  // node_modules/d3-interpolate/src/object.js\n  function object_default(a, b) {\n    var i = {}, c = {}, k;\n    if (a === null || typeof a !== "object")\n      a = {};\n    if (b === null || typeof b !== "object")\n      b = {};\n    for (k in b) {\n      if (k in a) {\n        i[k] = value_default(a[k], b[k]);\n      } else {\n        c[k] = b[k];\n      }\n    }\n    return function(t) {\n      for (k in i)\n        c[k] = i[k](t);\n      return c;\n    };\n  }\n\n  // node_modules/d3-interpolate/src/string.js\n  var reA = /[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g;\n  var reB = new RegExp(reA.source, "g");\n  function zero(b) {\n    return function() {\n      return b;\n    };\n  }\n  function one(b) {\n    return function(t) {\n      return b(t) + "";\n    };\n  }\n  function string_default(a, b) {\n    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];\n    a = a + "", b = b + "";\n    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {\n      if ((bs = bm.index) > bi) {\n        bs = b.slice(bi, bs);\n        if (s[i])\n          s[i] += bs;\n        else\n          s[++i] = bs;\n      }\n      if ((am = am[0]) === (bm = bm[0])) {\n        if (s[i])\n          s[i] += bm;\n        else\n          s[++i] = bm;\n      } else {\n        s[++i] = null;\n        q.push({ i, x: number_default(am, bm) });\n      }\n      bi = reB.lastIndex;\n    }\n    if (bi < b.length) {\n      bs = b.slice(bi);\n      if (s[i])\n        s[i] += bs;\n      else\n        s[++i] = bs;\n    }\n    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {\n      for (var i2 = 0, o; i2 < b; ++i2)\n        s[(o = q[i2]).i] = o.x(t);\n      return s.join("");\n    });\n  }\n\n  // node_modules/d3-interpolate/src/value.js\n  function value_default(a, b) {\n    var t = typeof b, c;\n    return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);\n  }\n\n  // node_modules/d3-interpolate/src/transform/decompose.js\n  var degrees = 180 / Math.PI;\n  var identity = {\n    translateX: 0,\n    translateY: 0,\n    rotate: 0,\n    skewX: 0,\n    scaleX: 1,\n    scaleY: 1\n  };\n  function decompose_default(a, b, c, d, e, f) {\n    var scaleX, scaleY, skewX;\n    if (scaleX = Math.sqrt(a * a + b * b))\n      a /= scaleX, b /= scaleX;\n    if (skewX = a * c + b * d)\n      c -= a * skewX, d -= b * skewX;\n    if (scaleY = Math.sqrt(c * c + d * d))\n      c /= scaleY, d /= scaleY, skewX /= scaleY;\n    if (a * d < b * c)\n      a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;\n    return {\n      translateX: e,\n      translateY: f,\n      rotate: Math.atan2(b, a) * degrees,\n      skewX: Math.atan(skewX) * degrees,\n      scaleX,\n      scaleY\n    };\n  }\n\n  // node_modules/d3-interpolate/src/transform/parse.js\n  var svgNode;\n  function parseCss(value) {\n    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");\n    return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);\n  }\n  function parseSvg(value) {\n    if (value == null)\n      return identity;\n    if (!svgNode)\n      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");\n    svgNode.setAttribute("transform", value);\n    if (!(value = svgNode.transform.baseVal.consolidate()))\n      return identity;\n    value = value.matrix;\n    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);\n  }\n\n  // node_modules/d3-interpolate/src/transform/index.js\n  function interpolateTransform(parse, pxComma, pxParen, degParen) {\n    function pop(s) {\n      return s.length ? s.pop() + " " : "";\n    }\n    function translate(xa, ya, xb, yb, s, q) {\n      if (xa !== xb || ya !== yb) {\n        var i = s.push("translate(", null, pxComma, null, pxParen);\n        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });\n      } else if (xb || yb) {\n        s.push("translate(" + xb + pxComma + yb + pxParen);\n      }\n    }\n    function rotate(a, b, s, q) {\n      if (a !== b) {\n        if (a - b > 180)\n          b += 360;\n        else if (b - a > 180)\n          a += 360;\n        q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });\n      } else if (b) {\n        s.push(pop(s) + "rotate(" + b + degParen);\n      }\n    }\n    function skewX(a, b, s, q) {\n      if (a !== b) {\n        q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });\n      } else if (b) {\n        s.push(pop(s) + "skewX(" + b + degParen);\n      }\n    }\n    function scale(xa, ya, xb, yb, s, q) {\n      if (xa !== xb || ya !== yb) {\n        var i = s.push(pop(s) + "scale(", null, ",", null, ")");\n        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });\n      } else if (xb !== 1 || yb !== 1) {\n        s.push(pop(s) + "scale(" + xb + "," + yb + ")");\n      }\n    }\n    return function(a, b) {\n      var s = [], q = [];\n      a = parse(a), b = parse(b);\n      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);\n      rotate(a.rotate, b.rotate, s, q);\n      skewX(a.skewX, b.skewX, s, q);\n      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);\n      a = b = null;\n      return function(t) {\n        var i = -1, n = q.length, o;\n        while (++i < n)\n          s[(o = q[i]).i] = o.x(t);\n        return s.join("");\n      };\n    };\n  }\n  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");\n  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");\n\n  // node_modules/d3-timer/src/timer.js\n  var frame = 0;\n  var timeout = 0;\n  var interval = 0;\n  var pokeDelay = 1e3;\n  var taskHead;\n  var taskTail;\n  var clockLast = 0;\n  var clockNow = 0;\n  var clockSkew = 0;\n  var clock = typeof performance === "object" && performance.now ? performance : Date;\n  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {\n    setTimeout(f, 17);\n  };\n  function now() {\n    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);\n  }\n  function clearNow() {\n    clockNow = 0;\n  }\n  function Timer() {\n    this._call = this._time = this._next = null;\n  }\n  Timer.prototype = timer.prototype = {\n    constructor: Timer,\n    restart: function(callback, delay, time) {\n      if (typeof callback !== "function")\n        throw new TypeError("callback is not a function");\n      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);\n      if (!this._next && taskTail !== this) {\n        if (taskTail)\n          taskTail._next = this;\n        else\n          taskHead = this;\n        taskTail = this;\n      }\n      this._call = callback;\n      this._time = time;\n      sleep();\n    },\n    stop: function() {\n      if (this._call) {\n        this._call = null;\n        this._time = Infinity;\n        sleep();\n      }\n    }\n  };\n  function timer(callback, delay, time) {\n    var t = new Timer();\n    t.restart(callback, delay, time);\n    return t;\n  }\n  function timerFlush() {\n    now();\n    ++frame;\n    var t = taskHead, e;\n    while (t) {\n      if ((e = clockNow - t._time) >= 0)\n        t._call.call(void 0, e);\n      t = t._next;\n    }\n    --frame;\n  }\n  function wake() {\n    clockNow = (clockLast = clock.now()) + clockSkew;\n    frame = timeout = 0;\n    try {\n      timerFlush();\n    } finally {\n      frame = 0;\n      nap();\n      clockNow = 0;\n    }\n  }\n  function poke() {\n    var now2 = clock.now(), delay = now2 - clockLast;\n    if (delay > pokeDelay)\n      clockSkew -= delay, clockLast = now2;\n  }\n  function nap() {\n    var t02, t12 = taskHead, t2, time = Infinity;\n    while (t12) {\n      if (t12._call) {\n        if (time > t12._time)\n          time = t12._time;\n        t02 = t12, t12 = t12._next;\n      } else {\n        t2 = t12._next, t12._next = null;\n        t12 = t02 ? t02._next = t2 : taskHead = t2;\n      }\n    }\n    taskTail = t02;\n    sleep(time);\n  }\n  function sleep(time) {\n    if (frame)\n      return;\n    if (timeout)\n      timeout = clearTimeout(timeout);\n    var delay = time - clockNow;\n    if (delay > 24) {\n      if (time < Infinity)\n        timeout = setTimeout(wake, time - clock.now() - clockSkew);\n      if (interval)\n        interval = clearInterval(interval);\n    } else {\n      if (!interval)\n        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);\n      frame = 1, setFrame(wake);\n    }\n  }\n\n  // node_modules/d3-timer/src/timeout.js\n  function timeout_default(callback, delay, time) {\n    var t = new Timer();\n    delay = delay == null ? 0 : +delay;\n    t.restart((elapsed) => {\n      t.stop();\n      callback(elapsed + delay);\n    }, delay, time);\n    return t;\n  }\n\n  // node_modules/d3-transition/src/transition/schedule.js\n  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");\n  var emptyTween = [];\n  var CREATED = 0;\n  var SCHEDULED = 1;\n  var STARTING = 2;\n  var STARTED = 3;\n  var RUNNING = 4;\n  var ENDING = 5;\n  var ENDED = 6;\n  function schedule_default(node, name, id2, index, group, timing) {\n    var schedules = node.__transition;\n    if (!schedules)\n      node.__transition = {};\n    else if (id2 in schedules)\n      return;\n    create(node, id2, {\n      name,\n      index,\n      // For context during callback.\n      group,\n      // For context during callback.\n      on: emptyOn,\n      tween: emptyTween,\n      time: timing.time,\n      delay: timing.delay,\n      duration: timing.duration,\n      ease: timing.ease,\n      timer: null,\n      state: CREATED\n    });\n  }\n  function init(node, id2) {\n    var schedule = get2(node, id2);\n    if (schedule.state > CREATED)\n      throw new Error("too late; already scheduled");\n    return schedule;\n  }\n  function set2(node, id2) {\n    var schedule = get2(node, id2);\n    if (schedule.state > STARTED)\n      throw new Error("too late; already running");\n    return schedule;\n  }\n  function get2(node, id2) {\n    var schedule = node.__transition;\n    if (!schedule || !(schedule = schedule[id2]))\n      throw new Error("transition not found");\n    return schedule;\n  }\n  function create(node, id2, self2) {\n    var schedules = node.__transition, tween;\n    schedules[id2] = self2;\n    self2.timer = timer(schedule, 0, self2.time);\n    function schedule(elapsed) {\n      self2.state = SCHEDULED;\n      self2.timer.restart(start2, self2.delay, self2.time);\n      if (self2.delay <= elapsed)\n        start2(elapsed - self2.delay);\n    }\n    function start2(elapsed) {\n      var i, j, n, o;\n      if (self2.state !== SCHEDULED)\n        return stop();\n      for (i in schedules) {\n        o = schedules[i];\n        if (o.name !== self2.name)\n          continue;\n        if (o.state === STARTED)\n          return timeout_default(start2);\n        if (o.state === RUNNING) {\n          o.state = ENDED;\n          o.timer.stop();\n          o.on.call("interrupt", node, node.__data__, o.index, o.group);\n          delete schedules[i];\n        } else if (+i < id2) {\n          o.state = ENDED;\n          o.timer.stop();\n          o.on.call("cancel", node, node.__data__, o.index, o.group);\n          delete schedules[i];\n        }\n      }\n      timeout_default(function() {\n        if (self2.state === STARTED) {\n          self2.state = RUNNING;\n          self2.timer.restart(tick, self2.delay, self2.time);\n          tick(elapsed);\n        }\n      });\n      self2.state = STARTING;\n      self2.on.call("start", node, node.__data__, self2.index, self2.group);\n      if (self2.state !== STARTING)\n        return;\n      self2.state = STARTED;\n      tween = new Array(n = self2.tween.length);\n      for (i = 0, j = -1; i < n; ++i) {\n        if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {\n          tween[++j] = o;\n        }\n      }\n      tween.length = j + 1;\n    }\n    function tick(elapsed) {\n      var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;\n      while (++i < n) {\n        tween[i].call(node, t);\n      }\n      if (self2.state === ENDING) {\n        self2.on.call("end", node, node.__data__, self2.index, self2.group);\n        stop();\n      }\n    }\n    function stop() {\n      self2.state = ENDED;\n      self2.timer.stop();\n      delete schedules[id2];\n      for (var i in schedules)\n        return;\n      delete node.__transition;\n    }\n  }\n\n  // node_modules/d3-transition/src/interrupt.js\n  function interrupt_default(node, name) {\n    var schedules = node.__transition, schedule, active, empty2 = true, i;\n    if (!schedules)\n      return;\n    name = name == null ? null : name + "";\n    for (i in schedules) {\n      if ((schedule = schedules[i]).name !== name) {\n        empty2 = false;\n        continue;\n      }\n      active = schedule.state > STARTING && schedule.state < ENDING;\n      schedule.state = ENDED;\n      schedule.timer.stop();\n      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);\n      delete schedules[i];\n    }\n    if (empty2)\n      delete node.__transition;\n  }\n\n  // node_modules/d3-transition/src/selection/interrupt.js\n  function interrupt_default2(name) {\n    return this.each(function() {\n      interrupt_default(this, name);\n    });\n  }\n\n  // node_modules/d3-transition/src/transition/tween.js\n  function tweenRemove(id2, name) {\n    var tween0, tween1;\n    return function() {\n      var schedule = set2(this, id2), tween = schedule.tween;\n      if (tween !== tween0) {\n        tween1 = tween0 = tween;\n        for (var i = 0, n = tween1.length; i < n; ++i) {\n          if (tween1[i].name === name) {\n            tween1 = tween1.slice();\n            tween1.splice(i, 1);\n            break;\n          }\n        }\n      }\n      schedule.tween = tween1;\n    };\n  }\n  function tweenFunction(id2, name, value) {\n    var tween0, tween1;\n    if (typeof value !== "function")\n      throw new Error();\n    return function() {\n      var schedule = set2(this, id2), tween = schedule.tween;\n      if (tween !== tween0) {\n        tween1 = (tween0 = tween).slice();\n        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {\n          if (tween1[i].name === name) {\n            tween1[i] = t;\n            break;\n          }\n        }\n        if (i === n)\n          tween1.push(t);\n      }\n      schedule.tween = tween1;\n    };\n  }\n  function tween_default(name, value) {\n    var id2 = this._id;\n    name += "";\n    if (arguments.length < 2) {\n      var tween = get2(this.node(), id2).tween;\n      for (var i = 0, n = tween.length, t; i < n; ++i) {\n        if ((t = tween[i]).name === name) {\n          return t.value;\n        }\n      }\n      return null;\n    }\n    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));\n  }\n  function tweenValue(transition2, name, value) {\n    var id2 = transition2._id;\n    transition2.each(function() {\n      var schedule = set2(this, id2);\n      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);\n    });\n    return function(node) {\n      return get2(node, id2).value[name];\n    };\n  }\n\n  // node_modules/d3-transition/src/transition/interpolate.js\n  function interpolate_default(a, b) {\n    var c;\n    return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);\n  }\n\n  // node_modules/d3-transition/src/transition/attr.js\n  function attrRemove2(name) {\n    return function() {\n      this.removeAttribute(name);\n    };\n  }\n  function attrRemoveNS2(fullname) {\n    return function() {\n      this.removeAttributeNS(fullname.space, fullname.local);\n    };\n  }\n  function attrConstant2(name, interpolate, value1) {\n    var string00, string1 = value1 + "", interpolate0;\n    return function() {\n      var string0 = this.getAttribute(name);\n      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);\n    };\n  }\n  function attrConstantNS2(fullname, interpolate, value1) {\n    var string00, string1 = value1 + "", interpolate0;\n    return function() {\n      var string0 = this.getAttributeNS(fullname.space, fullname.local);\n      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);\n    };\n  }\n  function attrFunction2(name, interpolate, value) {\n    var string00, string10, interpolate0;\n    return function() {\n      var string0, value1 = value(this), string1;\n      if (value1 == null)\n        return void this.removeAttribute(name);\n      string0 = this.getAttribute(name);\n      string1 = value1 + "";\n      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));\n    };\n  }\n  function attrFunctionNS2(fullname, interpolate, value) {\n    var string00, string10, interpolate0;\n    return function() {\n      var string0, value1 = value(this), string1;\n      if (value1 == null)\n        return void this.removeAttributeNS(fullname.space, fullname.local);\n      string0 = this.getAttributeNS(fullname.space, fullname.local);\n      string1 = value1 + "";\n      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));\n    };\n  }\n  function attr_default2(name, value) {\n    var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;\n    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));\n  }\n\n  // node_modules/d3-transition/src/transition/attrTween.js\n  function attrInterpolate(name, i) {\n    return function(t) {\n      this.setAttribute(name, i.call(this, t));\n    };\n  }\n  function attrInterpolateNS(fullname, i) {\n    return function(t) {\n      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));\n    };\n  }\n  function attrTweenNS(fullname, value) {\n    var t02, i0;\n    function tween() {\n      var i = value.apply(this, arguments);\n      if (i !== i0)\n        t02 = (i0 = i) && attrInterpolateNS(fullname, i);\n      return t02;\n    }\n    tween._value = value;\n    return tween;\n  }\n  function attrTween(name, value) {\n    var t02, i0;\n    function tween() {\n      var i = value.apply(this, arguments);\n      if (i !== i0)\n        t02 = (i0 = i) && attrInterpolate(name, i);\n      return t02;\n    }\n    tween._value = value;\n    return tween;\n  }\n  function attrTween_default(name, value) {\n    var key = "attr." + name;\n    if (arguments.length < 2)\n      return (key = this.tween(key)) && key._value;\n    if (value == null)\n      return this.tween(key, null);\n    if (typeof value !== "function")\n      throw new Error();\n    var fullname = namespace_default(name);\n    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));\n  }\n\n  // node_modules/d3-transition/src/transition/delay.js\n  function delayFunction(id2, value) {\n    return function() {\n      init(this, id2).delay = +value.apply(this, arguments);\n    };\n  }\n  function delayConstant(id2, value) {\n    return value = +value, function() {\n      init(this, id2).delay = value;\n    };\n  }\n  function delay_default(value) {\n    var id2 = this._id;\n    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;\n  }\n\n  // node_modules/d3-transition/src/transition/duration.js\n  function durationFunction(id2, value) {\n    return function() {\n      set2(this, id2).duration = +value.apply(this, arguments);\n    };\n  }\n  function durationConstant(id2, value) {\n    return value = +value, function() {\n      set2(this, id2).duration = value;\n    };\n  }\n  function duration_default(value) {\n    var id2 = this._id;\n    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;\n  }\n\n  // node_modules/d3-transition/src/transition/ease.js\n  function easeConstant(id2, value) {\n    if (typeof value !== "function")\n      throw new Error();\n    return function() {\n      set2(this, id2).ease = value;\n    };\n  }\n  function ease_default(value) {\n    var id2 = this._id;\n    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;\n  }\n\n  // node_modules/d3-transition/src/transition/easeVarying.js\n  function easeVarying(id2, value) {\n    return function() {\n      var v = value.apply(this, arguments);\n      if (typeof v !== "function")\n        throw new Error();\n      set2(this, id2).ease = v;\n    };\n  }\n  function easeVarying_default(value) {\n    if (typeof value !== "function")\n      throw new Error();\n    return this.each(easeVarying(this._id, value));\n  }\n\n  // node_modules/d3-transition/src/transition/filter.js\n  function filter_default2(match) {\n    if (typeof match !== "function")\n      match = matcher_default(match);\n    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {\n        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {\n          subgroup.push(node);\n        }\n      }\n    }\n    return new Transition(subgroups, this._parents, this._name, this._id);\n  }\n\n  // node_modules/d3-transition/src/transition/merge.js\n  function merge_default2(transition2) {\n    if (transition2._id !== this._id)\n      throw new Error();\n    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {\n      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {\n        if (node = group0[i] || group1[i]) {\n          merge[i] = node;\n        }\n      }\n    }\n    for (; j < m0; ++j) {\n      merges[j] = groups0[j];\n    }\n    return new Transition(merges, this._parents, this._name, this._id);\n  }\n\n  // node_modules/d3-transition/src/transition/on.js\n  function start(name) {\n    return (name + "").trim().split(/^|\\s+/).every(function(t) {\n      var i = t.indexOf(".");\n      if (i >= 0)\n        t = t.slice(0, i);\n      return !t || t === "start";\n    });\n  }\n  function onFunction(id2, name, listener) {\n    var on0, on1, sit = start(name) ? init : set2;\n    return function() {\n      var schedule = sit(this, id2), on = schedule.on;\n      if (on !== on0)\n        (on1 = (on0 = on).copy()).on(name, listener);\n      schedule.on = on1;\n    };\n  }\n  function on_default2(name, listener) {\n    var id2 = this._id;\n    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));\n  }\n\n  // node_modules/d3-transition/src/transition/remove.js\n  function removeFunction(id2) {\n    return function() {\n      var parent = this.parentNode;\n      for (var i in this.__transition)\n        if (+i !== id2)\n          return;\n      if (parent)\n        parent.removeChild(this);\n    };\n  }\n  function remove_default2() {\n    return this.on("end.remove", removeFunction(this._id));\n  }\n\n  // node_modules/d3-transition/src/transition/select.js\n  function select_default2(select) {\n    var name = this._name, id2 = this._id;\n    if (typeof select !== "function")\n      select = selector_default(select);\n    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {\n        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {\n          if ("__data__" in node)\n            subnode.__data__ = node.__data__;\n          subgroup[i] = subnode;\n          schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));\n        }\n      }\n    }\n    return new Transition(subgroups, this._parents, name, id2);\n  }\n\n  // node_modules/d3-transition/src/transition/selectAll.js\n  function selectAll_default2(select) {\n    var name = this._name, id2 = this._id;\n    if (typeof select !== "function")\n      select = selectorAll_default(select);\n    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n        if (node = group[i]) {\n          for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {\n            if (child = children2[k]) {\n              schedule_default(child, name, id2, k, children2, inherit2);\n            }\n          }\n          subgroups.push(children2);\n          parents.push(node);\n        }\n      }\n    }\n    return new Transition(subgroups, parents, name, id2);\n  }\n\n  // node_modules/d3-transition/src/transition/selection.js\n  var Selection2 = selection_default.prototype.constructor;\n  function selection_default2() {\n    return new Selection2(this._groups, this._parents);\n  }\n\n  // node_modules/d3-transition/src/transition/style.js\n  function styleNull(name, interpolate) {\n    var string00, string10, interpolate0;\n    return function() {\n      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));\n      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);\n    };\n  }\n  function styleRemove2(name) {\n    return function() {\n      this.style.removeProperty(name);\n    };\n  }\n  function styleConstant2(name, interpolate, value1) {\n    var string00, string1 = value1 + "", interpolate0;\n    return function() {\n      var string0 = styleValue(this, name);\n      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);\n    };\n  }\n  function styleFunction2(name, interpolate, value) {\n    var string00, string10, interpolate0;\n    return function() {\n      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";\n      if (value1 == null)\n        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));\n      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));\n    };\n  }\n  function styleMaybeRemove(id2, name) {\n    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;\n    return function() {\n      var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;\n      if (on !== on0 || listener0 !== listener)\n        (on1 = (on0 = on).copy()).on(event, listener0 = listener);\n      schedule.on = on1;\n    };\n  }\n  function style_default2(name, value, priority) {\n    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;\n    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);\n  }\n\n  // node_modules/d3-transition/src/transition/styleTween.js\n  function styleInterpolate(name, i, priority) {\n    return function(t) {\n      this.style.setProperty(name, i.call(this, t), priority);\n    };\n  }\n  function styleTween(name, value, priority) {\n    var t, i0;\n    function tween() {\n      var i = value.apply(this, arguments);\n      if (i !== i0)\n        t = (i0 = i) && styleInterpolate(name, i, priority);\n      return t;\n    }\n    tween._value = value;\n    return tween;\n  }\n  function styleTween_default(name, value, priority) {\n    var key = "style." + (name += "");\n    if (arguments.length < 2)\n      return (key = this.tween(key)) && key._value;\n    if (value == null)\n      return this.tween(key, null);\n    if (typeof value !== "function")\n      throw new Error();\n    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));\n  }\n\n  // node_modules/d3-transition/src/transition/text.js\n  function textConstant2(value) {\n    return function() {\n      this.textContent = value;\n    };\n  }\n  function textFunction2(value) {\n    return function() {\n      var value1 = value(this);\n      this.textContent = value1 == null ? "" : value1;\n    };\n  }\n  function text_default2(value) {\n    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));\n  }\n\n  // node_modules/d3-transition/src/transition/textTween.js\n  function textInterpolate(i) {\n    return function(t) {\n      this.textContent = i.call(this, t);\n    };\n  }\n  function textTween(value) {\n    var t02, i0;\n    function tween() {\n      var i = value.apply(this, arguments);\n      if (i !== i0)\n        t02 = (i0 = i) && textInterpolate(i);\n      return t02;\n    }\n    tween._value = value;\n    return tween;\n  }\n  function textTween_default(value) {\n    var key = "text";\n    if (arguments.length < 1)\n      return (key = this.tween(key)) && key._value;\n    if (value == null)\n      return this.tween(key, null);\n    if (typeof value !== "function")\n      throw new Error();\n    return this.tween(key, textTween(value));\n  }\n\n  // node_modules/d3-transition/src/transition/transition.js\n  function transition_default() {\n    var name = this._name, id0 = this._id, id1 = newId();\n    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n        if (node = group[i]) {\n          var inherit2 = get2(node, id0);\n          schedule_default(node, name, id1, i, group, {\n            time: inherit2.time + inherit2.delay + inherit2.duration,\n            delay: 0,\n            duration: inherit2.duration,\n            ease: inherit2.ease\n          });\n        }\n      }\n    }\n    return new Transition(groups, this._parents, name, id1);\n  }\n\n  // node_modules/d3-transition/src/transition/end.js\n  function end_default() {\n    var on0, on1, that = this, id2 = that._id, size = that.size();\n    return new Promise(function(resolve, reject) {\n      var cancel = { value: reject }, end = { value: function() {\n        if (--size === 0)\n          resolve();\n      } };\n      that.each(function() {\n        var schedule = set2(this, id2), on = schedule.on;\n        if (on !== on0) {\n          on1 = (on0 = on).copy();\n          on1._.cancel.push(cancel);\n          on1._.interrupt.push(cancel);\n          on1._.end.push(end);\n        }\n        schedule.on = on1;\n      });\n      if (size === 0)\n        resolve();\n    });\n  }\n\n  // node_modules/d3-transition/src/transition/index.js\n  var id = 0;\n  function Transition(groups, parents, name, id2) {\n    this._groups = groups;\n    this._parents = parents;\n    this._name = name;\n    this._id = id2;\n  }\n  function transition(name) {\n    return selection_default().transition(name);\n  }\n  function newId() {\n    return ++id;\n  }\n  var selection_prototype = selection_default.prototype;\n  Transition.prototype = transition.prototype = {\n    constructor: Transition,\n    select: select_default2,\n    selectAll: selectAll_default2,\n    selectChild: selection_prototype.selectChild,\n    selectChildren: selection_prototype.selectChildren,\n    filter: filter_default2,\n    merge: merge_default2,\n    selection: selection_default2,\n    transition: transition_default,\n    call: selection_prototype.call,\n    nodes: selection_prototype.nodes,\n    node: selection_prototype.node,\n    size: selection_prototype.size,\n    empty: selection_prototype.empty,\n    each: selection_prototype.each,\n    on: on_default2,\n    attr: attr_default2,\n    attrTween: attrTween_default,\n    style: style_default2,\n    styleTween: styleTween_default,\n    text: text_default2,\n    textTween: textTween_default,\n    remove: remove_default2,\n    tween: tween_default,\n    delay: delay_default,\n    duration: duration_default,\n    ease: ease_default,\n    easeVarying: easeVarying_default,\n    end: end_default,\n    [Symbol.iterator]: selection_prototype[Symbol.iterator]\n  };\n\n  // node_modules/d3-ease/src/cubic.js\n  function cubicInOut(t) {\n    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;\n  }\n\n  // node_modules/d3-transition/src/selection/transition.js\n  var defaultTiming = {\n    time: null,\n    // Set on use.\n    delay: 0,\n    duration: 250,\n    ease: cubicInOut\n  };\n  function inherit(node, id2) {\n    var timing;\n    while (!(timing = node.__transition) || !(timing = timing[id2])) {\n      if (!(node = node.parentNode)) {\n        throw new Error(`transition ${id2} not found`);\n      }\n    }\n    return timing;\n  }\n  function transition_default2(name) {\n    var id2, timing;\n    if (name instanceof Transition) {\n      id2 = name._id, name = name._name;\n    } else {\n      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";\n    }\n    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {\n      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n        if (node = group[i]) {\n          schedule_default(node, name, id2, i, group, timing || inherit(node, id2));\n        }\n      }\n    }\n    return new Transition(groups, this._parents, name, id2);\n  }\n\n  // node_modules/d3-transition/src/selection/index.js\n  selection_default.prototype.interrupt = interrupt_default2;\n  selection_default.prototype.transition = transition_default2;\n\n  // node_modules/d3-brush/src/brush.js\n  var { abs, max, min } = Math;\n  function number1(e) {\n    return [+e[0], +e[1]];\n  }\n  function number2(e) {\n    return [number1(e[0]), number1(e[1])];\n  }\n  var X = {\n    name: "x",\n    handles: ["w", "e"].map(type),\n    input: function(x, e) {\n      return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];\n    },\n    output: function(xy) {\n      return xy && [xy[0][0], xy[1][0]];\n    }\n  };\n  var Y = {\n    name: "y",\n    handles: ["n", "s"].map(type),\n    input: function(y, e) {\n      return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];\n    },\n    output: function(xy) {\n      return xy && [xy[0][1], xy[1][1]];\n    }\n  };\n  var XY = {\n    name: "xy",\n    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),\n    input: function(xy) {\n      return xy == null ? null : number2(xy);\n    },\n    output: function(xy) {\n      return xy;\n    }\n  };\n  function type(t) {\n    return { type: t };\n  }\n\n  // node_modules/d3-dsv/src/dsv.js\n  var EOL = {};\n  var EOF = {};\n  var QUOTE = 34;\n  var NEWLINE = 10;\n  var RETURN = 13;\n  function objectConverter(columns) {\n    return new Function("d", "return {" + columns.map(function(name, i) {\n      return JSON.stringify(name) + ": d[" + i + \'] || ""\';\n    }).join(",") + "}");\n  }\n  function customConverter(columns, f) {\n    var object = objectConverter(columns);\n    return function(row, i) {\n      return f(object(row), i, columns);\n    };\n  }\n  function inferColumns(rows) {\n    var columnSet = /* @__PURE__ */ Object.create(null), columns = [];\n    rows.forEach(function(row) {\n      for (var column in row) {\n        if (!(column in columnSet)) {\n          columns.push(columnSet[column] = column);\n        }\n      }\n    });\n    return columns;\n  }\n  function pad(value, width) {\n    var s = value + "", length = s.length;\n    return length < width ? new Array(width - length + 1).join(0) + s : s;\n  }\n  function formatYear(year) {\n    return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);\n  }\n  function formatDate(date) {\n    var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds = date.getUTCSeconds(), milliseconds = date.getUTCMilliseconds();\n    return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");\n  }\n  function dsv_default(delimiter) {\n    var reFormat = new RegExp(\'["\' + delimiter + "\\n\\r]"), DELIMITER = delimiter.charCodeAt(0);\n    function parse(text, f) {\n      var convert, columns, rows = parseRows(text, function(row, i) {\n        if (convert)\n          return convert(row, i - 1);\n        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);\n      });\n      rows.columns = columns || [];\n      return rows;\n    }\n    function parseRows(text, f) {\n      var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;\n      if (text.charCodeAt(N - 1) === NEWLINE)\n        --N;\n      if (text.charCodeAt(N - 1) === RETURN)\n        --N;\n      function token() {\n        if (eof)\n          return EOF;\n        if (eol)\n          return eol = false, EOL;\n        var i, j = I, c;\n        if (text.charCodeAt(j) === QUOTE) {\n          while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE)\n            ;\n          if ((i = I) >= N)\n            eof = true;\n          else if ((c = text.charCodeAt(I++)) === NEWLINE)\n            eol = true;\n          else if (c === RETURN) {\n            eol = true;\n            if (text.charCodeAt(I) === NEWLINE)\n              ++I;\n          }\n          return text.slice(j + 1, i - 1).replace(/""/g, \'"\');\n        }\n        while (I < N) {\n          if ((c = text.charCodeAt(i = I++)) === NEWLINE)\n            eol = true;\n          else if (c === RETURN) {\n            eol = true;\n            if (text.charCodeAt(I) === NEWLINE)\n              ++I;\n          } else if (c !== DELIMITER)\n            continue;\n          return text.slice(j, i);\n        }\n        return eof = true, text.slice(j, N);\n      }\n      while ((t = token()) !== EOF) {\n        var row = [];\n        while (t !== EOL && t !== EOF)\n          row.push(t), t = token();\n        if (f && (row = f(row, n++)) == null)\n          continue;\n        rows.push(row);\n      }\n      return rows;\n    }\n    function preformatBody(rows, columns) {\n      return rows.map(function(row) {\n        return columns.map(function(column) {\n          return formatValue(row[column]);\n        }).join(delimiter);\n      });\n    }\n    function format2(rows, columns) {\n      if (columns == null)\n        columns = inferColumns(rows);\n      return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\\n");\n    }\n    function formatBody(rows, columns) {\n      if (columns == null)\n        columns = inferColumns(rows);\n      return preformatBody(rows, columns).join("\\n");\n    }\n    function formatRows(rows) {\n      return rows.map(formatRow).join("\\n");\n    }\n    function formatRow(row) {\n      return row.map(formatValue).join(delimiter);\n    }\n    function formatValue(value) {\n      return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? \'"\' + value.replace(/"/g, \'""\') + \'"\' : value;\n    }\n    return {\n      parse,\n      parseRows,\n      format: format2,\n      formatBody,\n      formatRows,\n      formatRow,\n      formatValue\n    };\n  }\n\n  // node_modules/d3-dsv/src/csv.js\n  var csv = dsv_default(",");\n  var csvParse = csv.parse;\n  var csvParseRows = csv.parseRows;\n  var csvFormat = csv.format;\n  var csvFormatBody = csv.formatBody;\n  var csvFormatRows = csv.formatRows;\n  var csvFormatRow = csv.formatRow;\n  var csvFormatValue = csv.formatValue;\n\n  // node_modules/d3-dsv/src/tsv.js\n  var tsv = dsv_default("	");\n  var tsvParse = tsv.parse;\n  var tsvParseRows = tsv.parseRows;\n  var tsvFormat = tsv.format;\n  var tsvFormatBody = tsv.formatBody;\n  var tsvFormatRows = tsv.formatRows;\n  var tsvFormatRow = tsv.formatRow;\n  var tsvFormatValue = tsv.formatValue;\n\n  // node_modules/d3-fetch/src/text.js\n  function responseText(response) {\n    if (!response.ok)\n      throw new Error(response.status + " " + response.statusText);\n    return response.text();\n  }\n  function text_default3(input, init2) {\n    return fetch(input, init2).then(responseText);\n  }\n\n  // node_modules/d3-fetch/src/dsv.js\n  function dsvParse(parse) {\n    return function(input, init2, row) {\n      if (arguments.length === 2 && typeof init2 === "function")\n        row = init2, init2 = void 0;\n      return text_default3(input, init2).then(function(response) {\n        return parse(response, row);\n      });\n    };\n  }\n  var csv2 = dsvParse(csvParse);\n  var tsv2 = dsvParse(tsvParse);\n\n  // node_modules/d3-fetch/src/json.js\n  function responseJson(response) {\n    if (!response.ok)\n      throw new Error(response.status + " " + response.statusText);\n    if (response.status === 204 || response.status === 205)\n      return;\n    return response.json();\n  }\n  function json_default(input, init2) {\n    return fetch(input, init2).then(responseJson);\n  }\n\n  // node_modules/d3-fetch/src/xml.js\n  function parser(type2) {\n    return (input, init2) => text_default3(input, init2).then((text) => new DOMParser().parseFromString(text, type2));\n  }\n  var xml_default = parser("application/xml");\n  var html = parser("text/html");\n  var svg = parser("image/svg+xml");\n\n  // node_modules/d3-time/src/interval.js\n  var t0 = /* @__PURE__ */ new Date();\n  var t1 = /* @__PURE__ */ new Date();\n  function timeInterval(floori, offseti, count, field) {\n    function interval2(date) {\n      return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;\n    }\n    interval2.floor = (date) => {\n      return floori(date = /* @__PURE__ */ new Date(+date)), date;\n    };\n    interval2.ceil = (date) => {\n      return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;\n    };\n    interval2.round = (date) => {\n      const d0 = interval2(date), d1 = interval2.ceil(date);\n      return date - d0 < d1 - date ? d0 : d1;\n    };\n    interval2.offset = (date, step) => {\n      return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;\n    };\n    interval2.range = (start2, stop, step) => {\n      const range = [];\n      start2 = interval2.ceil(start2);\n      step = step == null ? 1 : Math.floor(step);\n      if (!(start2 < stop) || !(step > 0))\n        return range;\n      let previous;\n      do\n        range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);\n      while (previous < start2 && start2 < stop);\n      return range;\n    };\n    interval2.filter = (test) => {\n      return timeInterval((date) => {\n        if (date >= date)\n          while (floori(date), !test(date))\n            date.setTime(date - 1);\n      }, (date, step) => {\n        if (date >= date) {\n          if (step < 0)\n            while (++step <= 0) {\n              while (offseti(date, -1), !test(date)) {\n              }\n            }\n          else\n            while (--step >= 0) {\n              while (offseti(date, 1), !test(date)) {\n              }\n            }\n        }\n      });\n    };\n    if (count) {\n      interval2.count = (start2, end) => {\n        t0.setTime(+start2), t1.setTime(+end);\n        floori(t0), floori(t1);\n        return Math.floor(count(t0, t1));\n      };\n      interval2.every = (step) => {\n        step = Math.floor(step);\n        return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? (d) => field(d) % step === 0 : (d) => interval2.count(0, d) % step === 0);\n      };\n    }\n    return interval2;\n  }\n\n  // node_modules/d3-time/src/duration.js\n  var durationSecond = 1e3;\n  var durationMinute = durationSecond * 60;\n  var durationHour = durationMinute * 60;\n  var durationDay = durationHour * 24;\n  var durationWeek = durationDay * 7;\n  var durationMonth = durationDay * 30;\n  var durationYear = durationDay * 365;\n\n  // node_modules/d3-time/src/day.js\n  var timeDay = timeInterval(\n    (date) => date.setHours(0, 0, 0, 0),\n    (date, step) => date.setDate(date.getDate() + step),\n    (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,\n    (date) => date.getDate() - 1\n  );\n  var timeDays = timeDay.range;\n  var utcDay = timeInterval((date) => {\n    date.setUTCHours(0, 0, 0, 0);\n  }, (date, step) => {\n    date.setUTCDate(date.getUTCDate() + step);\n  }, (start2, end) => {\n    return (end - start2) / durationDay;\n  }, (date) => {\n    return date.getUTCDate() - 1;\n  });\n  var utcDays = utcDay.range;\n  var unixDay = timeInterval((date) => {\n    date.setUTCHours(0, 0, 0, 0);\n  }, (date, step) => {\n    date.setUTCDate(date.getUTCDate() + step);\n  }, (start2, end) => {\n    return (end - start2) / durationDay;\n  }, (date) => {\n    return Math.floor(date / durationDay);\n  });\n  var unixDays = unixDay.range;\n\n  // node_modules/d3-time/src/month.js\n  var timeMonth = timeInterval((date) => {\n    date.setDate(1);\n    date.setHours(0, 0, 0, 0);\n  }, (date, step) => {\n    date.setMonth(date.getMonth() + step);\n  }, (start2, end) => {\n    return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;\n  }, (date) => {\n    return date.getMonth();\n  });\n  var timeMonths = timeMonth.range;\n  var utcMonth = timeInterval((date) => {\n    date.setUTCDate(1);\n    date.setUTCHours(0, 0, 0, 0);\n  }, (date, step) => {\n    date.setUTCMonth(date.getUTCMonth() + step);\n  }, (start2, end) => {\n    return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;\n  }, (date) => {\n    return date.getUTCMonth();\n  });\n  var utcMonths = utcMonth.range;\n\n  // node_modules/d3-time/src/year.js\n  var timeYear = timeInterval((date) => {\n    date.setMonth(0, 1);\n    date.setHours(0, 0, 0, 0);\n  }, (date, step) => {\n    date.setFullYear(date.getFullYear() + step);\n  }, (start2, end) => {\n    return end.getFullYear() - start2.getFullYear();\n  }, (date) => {\n    return date.getFullYear();\n  });\n  timeYear.every = (k) => {\n    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {\n      date.setFullYear(Math.floor(date.getFullYear() / k) * k);\n      date.setMonth(0, 1);\n      date.setHours(0, 0, 0, 0);\n    }, (date, step) => {\n      date.setFullYear(date.getFullYear() + step * k);\n    });\n  };\n  var timeYears = timeYear.range;\n  var utcYear = timeInterval((date) => {\n    date.setUTCMonth(0, 1);\n    date.setUTCHours(0, 0, 0, 0);\n  }, (date, step) => {\n    date.setUTCFullYear(date.getUTCFullYear() + step);\n  }, (start2, end) => {\n    return end.getUTCFullYear() - start2.getUTCFullYear();\n  }, (date) => {\n    return date.getUTCFullYear();\n  });\n  utcYear.every = (k) => {\n    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {\n      date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);\n      date.setUTCMonth(0, 1);\n      date.setUTCHours(0, 0, 0, 0);\n    }, (date, step) => {\n      date.setUTCFullYear(date.getUTCFullYear() + step * k);\n    });\n  };\n  var utcYears = utcYear.range;\n\n  // node_modules/d3-zoom/src/transform.js\n  function Transform(k, x, y) {\n    this.k = k;\n    this.x = x;\n    this.y = y;\n  }\n  Transform.prototype = {\n    constructor: Transform,\n    scale: function(k) {\n      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);\n    },\n    translate: function(x, y) {\n      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);\n    },\n    apply: function(point) {\n      return [point[0] * this.k + this.x, point[1] * this.k + this.y];\n    },\n    applyX: function(x) {\n      return x * this.k + this.x;\n    },\n    applyY: function(y) {\n      return y * this.k + this.y;\n    },\n    invert: function(location) {\n      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];\n    },\n    invertX: function(x) {\n      return (x - this.x) / this.k;\n    },\n    invertY: function(y) {\n      return (y - this.y) / this.k;\n    },\n    rescaleX: function(x) {\n      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));\n    },\n    rescaleY: function(y) {\n      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));\n    },\n    toString: function() {\n      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";\n    }\n  };\n  var identity2 = new Transform(1, 0, 0);\n  transform.prototype = Transform.prototype;\n  function transform(node) {\n    while (!node.__zoom)\n      if (!(node = node.parentNode))\n        return identity2;\n    return node.__zoom;\n  }\n\n  // src/lib/load-data.ts\n  function loadData(URL2, type2 = "json") {\n    switch (type2) {\n      case "json":\n        return json_default(URL2);\n      case "csv":\n        return csv2(URL2);\n      case "tsv":\n        return tsv2(URL2);\n      case "xml":\n        return xml_default(URL2);\n      default:\n        throw new Error(`Unsupported data type: ${type2}`);\n    }\n  }\n\n  // src/lib/utils/utils.ts\n  function zeroPad(n, w) {\n    while (n.toString().length < w) {\n      n = "0" + n;\n    }\n    return n;\n  }\n  function debounce(func, wait, immediate = false) {\n    let timeout2;\n    return function(_clicks, _Fn) {\n      const context = this;\n      const args = arguments;\n      const later = function() {\n        timeout2 = null;\n        if (!immediate) {\n          func.apply(context, args);\n        }\n      };\n      const callNow = immediate && !timeout2;\n      clearTimeout(timeout2);\n      timeout2 = setTimeout(later, wait);\n      if (callNow) {\n        func.apply(context, args);\n      }\n    };\n  }\n  var getClicks = debounce(function(event, Fn) {\n    Fn(event);\n  }, 250);\n\n  // src/lib/utils/dates.ts\n  function getDateString(inputDate) {\n    const date = new Date(inputDate);\n    if (isNaN(+date)) {\n      throw new Error(`"${inputDate}" is not a valid date`);\n    }\n    const year = date.getFullYear().toString();\n    const month = zeroPad((1 + date.getMonth()).toString(), 2);\n    const day = zeroPad(date.getDate().toString(), 2);\n    return `${year}-${month}-${day}`;\n  }\n  function getDateRange(date1, date2, interval2) {\n    const range = [date1, ...timeDay.range(date1, date2)];\n    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\n    const sameDay = date1.getDate() === date2.getDate();\n    const sameMonth = date1.getMonth() === date2.getMonth();\n    const numberOfMonths = timeMonth.count(date1, date2);\n    const numberOfYears = timeYear.count(date1, date2);\n    let outputRange = [];\n    if (interval2 === "year") {\n      if (sameMonth && sameDay) {\n        outputRange = range.filter((date) => {\n          if (date.getMonth() === date1.getMonth()) {\n            if (date.getDate() === date1.getDate())\n              return true;\n            if (date1.getDate() > daysInMonth(date)) {\n              return date.getDate() === daysInMonth(date);\n            }\n          }\n          return false;\n        });\n      } else {\n        outputRange = range.filter(\n          (date) => range.indexOf(date) % Math.round(range.length / numberOfYears) === 0\n        );\n      }\n    } else if (interval2 === "month") {\n      if (sameDay) {\n        outputRange = range.filter((date) => {\n          if (date.getDate() === date1.getDate())\n            return true;\n          if (date1.getDate() > daysInMonth(date)) {\n            return date.getDate() === daysInMonth(date);\n          }\n          return false;\n        });\n      } else {\n        outputRange = range.filter(\n          (date) => range.indexOf(date) % Math.round(range.length / numberOfMonths) === 0\n        );\n      }\n    } else if (interval2 === "day") {\n      outputRange = range;\n    }\n    if (outputRange.length === 0) {\n      outputRange = [date1, date2];\n    }\n    if (getDateString(date1) !== getDateString(outputRange[0])) {\n      outputRange = [date1, ...outputRange];\n    }\n    if (getDateString(date2) !== getDateString(outputRange[outputRange.length - 1])) {\n      outputRange = [...outputRange, date2];\n    }\n    return outputRange;\n  }\n\n  // src/lib/worker/prepare-data.ts\n  function prepareData(data, options) {\n    return fetchData(data, options.dataType).then(filterByDate(options.startDate, options.endDate)).then(wideDataToLong(options.dataShape)).then(processFixedOrder(options.fixedOrder)).then(validateAndSort).then(fillDateGaps(options.fillDateGapsInterval, options.fillDateGapsValue, options.topN)).then(calculateLastValues);\n  }\n  function fetchData(data, dataType) {\n    if (typeof data === "string") {\n      return loadData(data, dataType);\n    }\n    return Promise.resolve(data);\n  }\n  function filterByDate(startDate, endDate) {\n    return function(data) {\n      return data.map((d) => ({ ...d, date: getDateString(d.date) })).filter((d) => startDate ? d.date >= startDate : true).filter((d) => endDate ? d.date <= endDate : true);\n    };\n  }\n  function processFixedOrder(fixedOrder) {\n    return function(data) {\n      return fixedOrder.length === 0 ? data : data.filter((d) => fixedOrder.includes(d.name)).map((d) => ({ ...d, rank: fixedOrder.indexOf(d.name) }));\n    };\n  }\n  function validateAndSort(data) {\n    return data.map((d) => {\n      const name = d.name ? d.name : "";\n      const value = isNaN(+d.value) ? 0 : +d.value;\n      return { ...d, name, value };\n    }).sort((a, b) => a.date.localeCompare(b.date) || a.name.localeCompare(b.name));\n  }\n  function fillDateGaps(fillDateGapsInterval, fillDateGapsValue, topN) {\n    return function(data) {\n      return fillDateGapsInterval ? fillGaps(data, fillDateGapsInterval, fillDateGapsValue, topN) : data;\n    };\n  }\n  function calculateLastValues(data, makeCumulative = true) {\n    return data.sort((a, b) => a.name.localeCompare(b.name) || a.date.localeCompare(b.date)).reduce((acc, curr) => {\n      if (acc.length === 0) {\n        curr.lastValue = curr.value;\n      } else {\n        const last = acc[acc.length - 1];\n        if (curr.name === last.name) {\n          curr.lastValue = last.value;\n          if (makeCumulative) {\n            curr.value = last.value + curr.value;\n          }\n        } else {\n          curr.lastValue = curr.value;\n        }\n      }\n      return [...acc, curr];\n    }, []);\n  }\n  function wideDataToLong(dataShape, nested = false) {\n    return function(data) {\n      if (dataShape === "long")\n        return data;\n      const long = [];\n      data.forEach((row) => {\n        for (const [key, value] of Object.entries(row)) {\n          if (key === "date") {\n            continue;\n          }\n          let item = {\n            date: row.date,\n            name: key\n          };\n          if (nested) {\n            item = {\n              ...item,\n              ...value\n            };\n          } else {\n            item = {\n              ...item,\n              value\n            };\n          }\n          long.push(item);\n        }\n      });\n      return long;\n    };\n  }\n  function longDataToWide(long) {\n    const wide = [];\n    long.forEach((item) => {\n      const dateRow = wide.filter((r) => r.date === item.date);\n      const row = dateRow.length > 0 ? dateRow[0] : {};\n      const { date, ...details } = item;\n      row[item.name] = details;\n      if (dateRow.length === 0) {\n        row.date = item.date;\n        wide.push(row);\n      }\n    });\n    return wide;\n  }\n  function fillGaps(data, interval2, fillValue, topN) {\n    if (!interval2) {\n      return data;\n    }\n    const wideData = longDataToWide(data).map((d) => ({ ...d, date: new Date(d.date) }));\n    const allData = wideData.reduce(\n      (acc, row, i) => {\n        const lastDate = acc[acc.length - 1].date;\n        const range = getDateRange(lastDate, row.date, interval2).slice(1);\n        const rangeStep = 1 / range.length;\n        if (i < wideData.length) {\n          const iData = interpolateTopN(wideData[i - 1], wideData[i], topN);\n          const newData = [];\n          range.forEach((_, j) => {\n            const values = fillValue === "last" ? iData(0) : iData((j + 1) * rangeStep);\n            const newRow = { date: range[j] };\n            for (const [key, value] of Object.entries(values)) {\n              if (key !== "date") {\n                newRow[key] = { ...value };\n              }\n            }\n            newData.push(getDateString(row.date) === getDateString(newRow.date) ? row : newRow);\n          });\n          return [...acc, ...newData];\n        } else {\n          return [...acc];\n        }\n      },\n      [wideData[0]]\n    ).map((d) => ({ ...d, date: getDateString(d.date) }));\n    return wideDataToLong("wide", true)(allData);\n  }\n  function interpolateTopN(data1 = {}, data2 = {}, topN) {\n    const topData1 = getTopN(data1, topN);\n    const topData2 = getTopN(data2, topN);\n    const topNames = Array.from(/* @__PURE__ */ new Set([...topData1, ...topData2]));\n    const filteredData1 = topNames.reduce(\n      (acc, curr) => ({ ...acc, [curr]: data1[curr] }),\n      {}\n    );\n    const filteredData2 = topNames.reduce(\n      (acc, curr) => ({ ...acc, [curr]: data2[curr] }),\n      {}\n    );\n    return value_default(filteredData1, filteredData2);\n    function getTopN(data = {}, topN2) {\n      return Object.keys(data).filter((key) => key !== "date").map((key) => data[key]).sort(function(a, b) {\n        return b.value - a.value;\n      }).slice(0, topN2).map((d) => d.name);\n    }\n  }\n\n  // src/lib/worker/index.ts\n  var worker = self;\n  worker.addEventListener("message", async (event) => {\n    const { type: type2, data, options } = event.data;\n    if (type2 === "prepare-data") {\n      const result = await prepareData(data, options);\n      worker.postMessage({ type: "data-prepared", data: result });\n    }\n  });\n})();\n';

// src/lib/utils/data.ts
var worker = createWorkerFromContent(racing_bars_worker_default);
async function prepareData(data, store, changingOptions = false) {
  const { dataTransform, dataType } = store.getState().options;
  if (typeof dataTransform === "function") {
    if (typeof data === "string") {
      data = await loadData(data, dataType);
    }
    data = dataTransform(await data);
  }
  worker.postMessage({
    type: "prepare-data",
    data,
    options: removeFnOptions(store.getState().options)
  });
  const preparedData = await new Promise((resolve) => {
    worker.addEventListener(
      "message",
      (event) => {
        if (event.data.type === "data-prepared") {
          resolve(event.data.data);
        }
      },
      { once: true }
    );
  });
  storeDataCollections(preparedData, store, changingOptions);
  return preparedData;
}
function removeFnOptions(options) {
  return Object.keys(options).reduce((acc, key) => {
    if (typeof options[key] !== "function") {
      acc[key] = options[key];
    }
    return acc;
  }, {});
}
function storeDataCollections(data, store, changingOptions) {
  const names = Array.from(new Set(data.map((d) => String(d.name)))).sort();
  const groups = Array.from(new Set(data.map((d) => String(d.group)))).filter(Boolean).sort();
  const dates = getDates(data);
  store.dispatch(actions.data.dataLoaded({ names, groups, datesCache: dates }));
  if (!changingOptions) {
    store.dispatch(actions.ticker.initialize(dates));
  } else {
    store.dispatch(actions.ticker.changeDates(dates));
  }
}
function getDateSlice(date, data, store) {
  let dateSlice;
  if (store.getState().data.dateSlices[date]) {
    dateSlice = store.getState().data.dateSlices[date];
  } else {
    const slice = data.filter((d) => d.date === date && !isNaN(d.value)).sort((a, b) => b.value - a.value).map((d, i) => ({ ...d, rank: getRank(d, i, store) }));
    const emptyData = [{ name: "", value: 0, lastValue: 0, date, rank: 1 }];
    dateSlice = slice.length > 0 ? slice : emptyData;
    store.dispatch(actions.data.addDateSlice(date, dateSlice));
  }
  const groupFilter = store.getState().data.groupFilter;
  return groupFilter.length > 0 ? filterGroups(dateSlice, store) : dateSlice;
}
function filterGroups(data, store) {
  const groupFilter = store.getState().data.groupFilter;
  return data.filter((d) => !!d.group ? !groupFilter.includes(d.group) : true).map((d, i) => ({ ...d, rank: getRank(d, i, store) }));
}
function computeNextDateSubscriber(data, store) {
  return function() {
    if (store.getState().ticker.isRunning) {
      const nextDate = getNextDate(
        store.getState().ticker.dates,
        store.getState().ticker.currentDate
      );
      getDateSlice(nextDate, data, store);
    }
  };
}
function getRank(d, i, store) {
  const fixedOrder = store.getState().options.fixedOrder;
  return fixedOrder.length > 0 ? d.rank : i;
}

// src/lib/options/options.reducer.ts
var defaultOptions = {
  dataShape: "long",
  dataType: "json",
  dataTransform: null,
  fillDateGapsInterval: null,
  fillDateGapsValue: "interpolate",
  startDate: "",
  endDate: "",
  colorSeed: "",
  showGroups: false,
  tickDuration: 500,
  topN: 10,
  mouseControls: false,
  keyboardControls: false,
  autorun: true,
  loop: false,
  injectStyles: true,
  title: "",
  subTitle: "",
  caption: "",
  dateCounter: "MM/YYYY",
  labelsPosition: "inside",
  labelsWidth: 150,
  showIcons: false,
  controlButtons: "all",
  overlays: "none",
  inputHeight: "",
  inputWidth: "",
  minHeight: 300,
  minWidth: 500,
  height: "",
  width: "",
  marginTop: 0,
  marginRight: 20,
  marginBottom: 5,
  marginLeft: 0,
  theme: "light",
  colorMap: {},
  fixedScale: false,
  fixedOrder: [],
  highlightBars: false,
  selectBars: false
};
var optionsReducer = (state = defaultOptions, action) => {
  switch (action.type) {
    case actionTypes.loadOptions:
    case actionTypes.changeOptions: {
      const excludedKeys = ["inputHeight", "inputWidth", "minHeight", "minWidth"];
      const options = {};
      Object.keys(action.payload).forEach((key) => {
        if (!excludedKeys.includes(key)) {
          options[key] = action.payload[key] ?? state[key];
        }
      });
      const startDate = options.startDate ? getDateString(options.startDate) : state.startDate;
      const endDate = options.endDate ? getDateString(options.endDate) : state.startDate;
      const inputHeight = options.height || state.inputHeight;
      const inputWidth = options.width || state.inputWidth;
      const fixedOrder = Array.isArray(options.fixedOrder) ? [...options.fixedOrder] : state.fixedOrder;
      const colorMap = Array.isArray(options.colorMap) ? [...options.colorMap].map(String) : typeof options.colorMap === "object" ? { ...options.colorMap } : state.colorMap;
      const topN = fixedOrder.length || Number(options.topN) || state.topN;
      const tickDuration = Number(options.tickDuration) || state.tickDuration;
      const labelsWidth = Number(options.labelsWidth) || state.labelsWidth;
      const marginTop = Number(options.marginTop) || state.marginTop;
      const marginRight = Number(options.marginRight) || state.marginRight;
      const marginBottom = Number(options.marginBottom) || state.marginBottom;
      const marginLeft = Number(options.marginLeft) || state.marginLeft;
      return {
        ...state,
        ...options,
        startDate,
        endDate,
        inputHeight,
        inputWidth,
        fixedOrder,
        colorMap,
        topN,
        tickDuration,
        labelsWidth,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft
      };
    }
    default:
      return state;
  }
};

// src/lib/renderer/calculate-dimensions.ts
function calculateDimensions(store, renderOptions) {
  const {
    minHeight,
    inputHeight,
    minWidth,
    inputWidth,
    title,
    subTitle,
    showGroups,
    controlButtons,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    labelsPosition,
    labelsWidth,
    showIcons,
    fixedOrder
  } = store.getState().options;
  const { root: root2, maxValue } = renderOptions;
  const topN = fixedOrder.length > 0 ? fixedOrder.length : store.getState().options.topN;
  const height = renderOptions.height = getHeight(root2, minHeight, inputHeight);
  const width = renderOptions.width = getWidth(root2, minWidth, inputWidth);
  const titlePadding = 5;
  const titleHeight = title ? 55 : 0;
  const subTitleHeight = !subTitle ? 0 : title ? 20 : 40;
  const groupsHeight = !showGroups ? 0 : titleHeight || subTitleHeight ? 20 : 30;
  const controlsHeight = controlButtons !== "none" ? 50 : 0;
  const headerHeight = Math.max(
    titleHeight + subTitleHeight + groupsHeight,
    controlsHeight + groupsHeight,
    10
  );
  const labelsArea = labelsPosition === "inside" ? 0 : labelsWidth;
  const topAxisPadding = 15;
  const margin = {
    top: marginTop + headerHeight + topAxisPadding,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft + labelsArea
  };
  const x = renderOptions.x = linear3().domain([0, maxValue]).range([margin.left, width - margin.right - 65]);
  const y = renderOptions.y = linear3().domain([topN, 0]).range([height - margin.bottom, margin.top]);
  const barPadding = renderOptions.barPadding = (height - (margin.bottom + margin.top)) / (topN * 5);
  const labelPadding = renderOptions.labelPadding = 8;
  renderOptions.barWidth = (d) => Math.abs(x(d.value) - x(0) - 1);
  const barHeight = renderOptions.barHeight = y(1) - y(0) - barPadding;
  renderOptions.barHalfHeight = (y(1) - y(0)) / 2 + 1;
  renderOptions.barY = (d) => y(d.rank) + 5;
  const iconSize = renderOptions.iconSize = showIcons ? barHeight * 0.9 : 0;
  const iconSpace = renderOptions.iconSpace = showIcons ? iconSize + labelPadding : 0;
  renderOptions.labelX = labelsPosition === "inside" ? (d) => x(d.value) - labelPadding - iconSpace : margin.left - labelPadding;
  renderOptions.titlePadding = titlePadding;
  renderOptions.titleHeight = titleHeight;
  renderOptions.margin = margin;
}

// src/lib/renderer/helpers.ts
function halo(text, renderOptions) {
  renderOptions.svg.selectAll(".halo").remove();
  text.select(function() {
    return this.parentNode.insertBefore(this.cloneNode(true), this);
  }).classed("halo", true);
}
function legendClick(ev, d, store) {
  getClicks(ev, function(event) {
    const clicks = event.detail;
    if (clicks === 3) {
      store.dispatch(actions.data.resetFilters());
    } else if (clicks === 2) {
      store.dispatch(actions.data.allExceptFilter(d));
    } else {
      store.dispatch(actions.data.toggleFilter(d));
    }
  });
}
function highlightFn(d, store, renderOptions) {
  if (store.getState().options.highlightBars) {
    toggleClass(renderOptions.root, "rect." + safeName(d.name), "highlight");
  }
}
function selectFn(d, store, renderOptions) {
  if (store.getState().options.selectBars) {
    toggleClass(renderOptions.root, "rect." + safeName(d.name), "selected");
    store.dispatch(actions.data.toggleSelection(d.name));
  }
}

// src/lib/renderer/render-header.ts
function renderHeader(store, renderOptions, CompleteDateSlice) {
  const groups = store.getState().data.groups;
  const dates = store.getState().ticker.dates;
  const currentDate = store.getState().ticker.currentDate;
  const { title, subTitle, marginTop, marginLeft, showGroups } = store.getState().options;
  const { svg: svg2, margin, width, titlePadding, titleHeight } = renderOptions;
  renderOptions.titleText = svg2.append("text").attr("class", "title").attr("x", marginLeft + titlePadding).attr("y", marginTop + 24).html(getText(title, currentDate, CompleteDateSlice, dates));
  renderOptions.subTitleText = svg2.append("text").attr("class", "subTitle").attr("x", marginLeft + titlePadding).attr("y", marginTop + (titleHeight || 24)).html(getText(subTitle, currentDate, CompleteDateSlice, dates));
  if (showGroups) {
    const legendsWrapper = svg2.append("g");
    const legends = legendsWrapper.selectAll(".legend-wrapper").data(groups).enter().append("g").attr("class", "legend legend-wrapper").style("cursor", "pointer").style("opacity", (d) => store.getState().data.groupFilter.includes(d) ? 0.3 : 1).on("click", (ev, d) => legendClick(ev, d, store));
    legends.append("rect").attr("class", "legend legend-color").attr("width", 10).attr("height", 10).attr("y", margin.top - 35).style("fill", (d) => getColor({ group: d }, store));
    legends.append("text").attr("class", "legend legend-text").attr("x", 20).attr("y", margin.top - 25).html((d) => d);
    let legendX = margin.left + titlePadding;
    let legendY = 0;
    legends.each(function() {
      const wrapper = select_default2(this);
      const text = wrapper.select("text");
      const bbox = text.node().getBBox();
      if (legendX + bbox.width > width) {
        legendX = margin.left + titlePadding;
        legendY += 30;
      }
      wrapper.attr("transform", "translate(" + legendX + ", " + legendY + ")");
      legendX += bbox.width + 40;
    });
    margin.top += legendY;
  }
}

// src/lib/renderer/elements.ts
var elements = {
  controls: "controls",
  skipBack: "skipBack",
  play: "play",
  pause: "pause",
  skipForward: "skipForward",
  overlay: "overlay",
  overlayPlay: "overlayPlay",
  overlayRepeat: "overlayRepeat"
};

// src/lib/renderer/buttons.ts
var buttons = {
  skipBack: `<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M28.46,4a3,3,0,0,0-3,.07l-15.2,9.41A3,3,0,0,0,9,15V5A3,3,0,0,0,6,2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3H6a3,3,0,0,0,3-3V17a3,3,0,0,0,1.22,1.53L25.42,28a3,3,0,0,0,1.58.46,3,3,0,0,0,3-3V6.59A3,3,0,0,0,28.46,4Z"/></g></svg>`,
  play: `<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M26.78,13.45,11.58,4A3,3,0,0,0,7,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,11.58,28l15.2-9.41a3,3,0,0,0,0-5.1Z"/></g></svg>`,
  pause: `<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns:svg="http://www.w3.org/2000/svg"><g transform="translate(-17)"><path d="m 27,2 h -1 c -1.656854,0 -3,1.3431458 -3,3 v 12 c -0.04755,3.269656 0,6.666667 0,10 0,1.656854 1.343146,3 3,3 h 1 c 1.656854,0 3,-1.343146 3,-3 V 5 C 30,3.3431458 28.656854,2 27,2 Z" /></g><g transform="translate(-4)"><path d="m 27,2 h -1 c -1.656854,0 -3,1.3431458 -3,3 v 12 c -0.04755,3.269656 0,6.666667 0,10 0,1.656854 1.343146,3 3,3 h 1 c 1.656854,0 3,-1.343146 3,-3 V 5 C 30,3.3431458 28.656854,2 27,2 Z" /></g></svg>`,
  skipForward: `<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M27,2H26a3,3,0,0,0-3,3V15a3,3,0,0,0-1.22-1.53L6.58,4A3,3,0,0,0,2,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,6.58,28l15.2-9.41A3,3,0,0,0,23,17V27a3,3,0,0,0,3,3h1a3,3,0,0,0,3-3V5A3,3,0,0,0,27,2Z"/></g></svg>`,
  overlayPlay: `<svg viewBox="0 0 32 32" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M26.78,13.45,11.58,4A3,3,0,0,0,7,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,11.58,28l15.2-9.41a3,3,0,0,0,0-5.1Z"/></g></svg>`,
  overlayRepeat: `<svg viewBox="0 0 32 32" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M18,4A12,12,0,0,0,6.05,15H3a1,1,0,0,0-.88.53,1,1,0,0,0,0,1l4,6a1,1,0,0,0,1.66,0l4-6a1,1,0,0,0,.05-1A1,1,0,0,0,11,15H8.05A10,10,0,1,1,18,26a1,1,0,0,0,0,2A12,12,0,0,0,18,4Z"/></g></svg>`
};

// src/lib/renderer/controls.ts
function renderControls(store, renderOptions) {
  const { marginTop, controlButtons } = store.getState().options;
  const { root: root2, width, margin, barPadding } = renderOptions;
  const elementWidth = root2.getBoundingClientRect().width;
  const controlButtonIcons = [
    { skipBack: buttons.skipBack },
    { play: buttons.play },
    { pause: buttons.pause },
    { skipForward: buttons.skipForward }
  ];
  select_default2(root2).append("div").classed("controls", true).style("position", "absolute").style("top", marginTop + "px").style("right", elementWidth - width + margin.right + barPadding + "px").selectAll("div").data(controlButtonIcons).enter().append("div").html((d) => Object.values(d)[0]).attr("class", (d) => Object.keys(d)[0]);
  if (controlButtons === "play") {
    hideElement(root2, elements.skipBack);
    hideElement(root2, elements.skipForward);
  }
  if (controlButtons === "none") {
    hideElement(root2, elements.controls);
  }
}
function updateControls(store, renderOptions) {
  const { overlays, loop } = store.getState().options;
  const { root: root2 } = renderOptions;
  if (store.getState().ticker.isRunning) {
    showElement(root2, elements.pause);
    hideElement(root2, elements.play);
  } else {
    showElement(root2, elements.play);
    hideElement(root2, elements.pause);
  }
  if (store.getState().ticker.isFirstDate && (overlays === "all" || overlays === "play") && !store.getState().ticker.isRunning) {
    hideElement(root2, elements.controls, true);
    showElement(root2, elements.overlay);
    showElement(root2, elements.overlayPlay);
    hideElement(root2, elements.overlayRepeat);
  } else if (store.getState().ticker.isLastDate && (overlays === "all" || overlays === "repeat") && !(loop && store.getState().ticker.isRunning)) {
    hideElement(root2, elements.controls, true);
    showElement(root2, elements.overlay);
    showElement(root2, elements.overlayRepeat);
    hideElement(root2, elements.overlayPlay);
  } else {
    showElement(root2, elements.controls, true);
    hideElement(root2, elements.overlay);
  }
}
function renderOverlays(store, renderOptions) {
  const { minHeight, minWidth } = store.getState().options;
  const { root: root2 } = renderOptions;
  const overlayButtonIcons = [
    { overlayPlay: buttons.overlayPlay },
    { overlayRepeat: buttons.overlayRepeat }
  ];
  select_default2(root2).append("div").classed("overlay", true).style("minHeight", minHeight + "px").style("minWidth", minWidth + "px").selectAll("div").data(overlayButtonIcons).enter().append("div").html((d) => Object.values(d)[0]).attr("class", (d) => Object.keys(d)[0]);
}

// src/lib/renderer/render-initial-view.ts
function renderInitalView(data, store, renderOptions) {
  const { caption, dateCounter, labelsPosition, showIcons, fixedScale, fixedOrder } = store.getState().options;
  const dates = store.getState().ticker.dates;
  const root2 = renderOptions.root;
  const topN = fixedOrder.length > 0 ? fixedOrder.length : store.getState().options.topN;
  const currentDate = store.getState().ticker.currentDate;
  const CompleteDateSlice = getDateSlice(currentDate, data, store);
  const dateSlice = CompleteDateSlice.slice(0, topN);
  const lastDateIndex = dates.indexOf(currentDate) > 0 ? dates.indexOf(currentDate) - 1 : 0;
  renderOptions.lastDate = dates[lastDateIndex];
  if (!root2 || dateSlice.length === 0)
    return;
  root2.innerHTML = "";
  renderInitialFrame();
  renderControls(store, renderOptions);
  renderOverlays(store, renderOptions);
  updateControls(store, renderOptions);
  function renderInitialFrame() {
    renderOptions.maxValue = fixedScale ? data.map((d) => d.value).reduce((max3, val) => max3 > val ? max3 : val, 0) : max(dateSlice, (d) => d.value);
    calculateDimensions(store, renderOptions);
    const {
      margin,
      width,
      height,
      x,
      y,
      barWidth,
      barHeight,
      barY,
      barHalfHeight,
      labelX,
      iconSize,
      labelPadding
    } = renderOptions;
    const svg2 = renderOptions.svg = select_default2(root2).append("svg").attr("width", width).attr("height", height);
    renderHeader(store, renderOptions, CompleteDateSlice);
    const xAxis = renderOptions.xAxis = axisTop(x).ticks(width > 500 ? 5 : 2).tickSize(-(height - (margin.top + margin.bottom))).tickFormat((n) => format(",")(n));
    svg2.append("g").attr("class", "axis xAxis").attr("transform", `translate(0, ${margin.top})`).call(xAxis).selectAll(".tick line").classed("origin", (d) => d === 0);
    svg2.selectAll("rect.bar").data(dateSlice, (d) => d.name).enter().append("rect").attr("class", (d) => "bar " + safeName(d.name)).classed("selected", (d) => store.getState().data.selected.includes(d.name)).attr("x", x(0) + 1).attr("width", barWidth).attr("y", barY).attr("height", barHeight).style("fill", (d) => getColor(d, store)).on("click", (_ev, d) => selectFn(d, store, renderOptions)).on("mouseover", (_ev, d) => highlightFn(d, store, renderOptions)).on("mouseout", (_ev, d) => highlightFn(d, store, renderOptions));
    svg2.selectAll("text.label").data(dateSlice, (d) => d.name).enter().append("text").attr("class", "label").classed("outside-bars", labelsPosition !== "inside").attr("x", labelX).attr("y", (d) => barY(d) + barHalfHeight).style("text-anchor", "end").html((d) => d.name).on("click", (_ev, d) => selectFn(d, store, renderOptions)).on("mouseover", (_ev, d) => highlightFn(d, store, renderOptions)).on("mouseout", (_ev, d) => highlightFn(d, store, renderOptions));
    svg2.selectAll("text.valueLabel").data(dateSlice, (d) => d.name).enter().append("text").attr("class", "valueLabel").attr("x", (d) => x(d.value) + 5).attr("y", (d) => barY(d) + barHalfHeight).text((d) => format(",.0f")(d.lastValue));
    if (showIcons) {
      const defs = renderOptions.defs = svg2.append("svg:defs");
      defs.selectAll("svg").data(dateSlice, (d) => d.name).enter().append("svg:pattern").attr("class", "svgpattern").attr("id", getIconID).attr("width", iconSize).attr("height", iconSize).append("svg:image").attr("xlink:href", (d) => d.icon).attr("width", iconSize).attr("height", iconSize).attr("x", 0).attr("y", 0);
      svg2.selectAll("circle").data(dateSlice, (d) => d.name).enter().append("circle").attr("cx", (d) => x(d.value) - iconSize / 2 - labelPadding).attr("cy", (d) => y(d.rank) + barHalfHeight).attr("r", iconSize / 2).style("fill", "transparent").style("fill", (d) => `url(#${getIconID(d)})`);
    }
    const endY = height - margin.bottom;
    const endX = width - margin.right;
    const dateCounterTextY = caption ? endY - 30 : endY - 5;
    renderOptions.dateCounterText = svg2.append("text").attr("class", "dateCounterText").attr("x", endX).attr("y", dateCounterTextY).style("text-anchor", "end").html(getText(dateCounter, currentDate, CompleteDateSlice, dates, true)).call((text) => halo(text, renderOptions));
    renderOptions.captionText = svg2.append("text").attr("class", "caption").attr("x", endX - 10).attr("y", endY - 5).style("text-anchor", "end").html(getText(caption, currentDate, CompleteDateSlice, dates));
  }
}

// src/lib/renderer/render-frame.ts
function renderFrame(data, store, renderOptions) {
  const {
    svg: svg2,
    titleText,
    subTitleText,
    dateCounterText,
    captionText,
    x,
    y,
    xAxis,
    labelPadding,
    barWidth,
    barHeight,
    barHalfHeight,
    barY,
    iconSize,
    labelX,
    defs,
    lastDate
  } = renderOptions;
  const dates = store.getState().ticker.dates;
  const { showGroups } = store.getState().options;
  if (!x) {
    return;
  }
  const {
    tickDuration,
    title,
    subTitle,
    caption,
    dateCounter,
    marginBottom,
    fixedScale,
    fixedOrder,
    labelsPosition
  } = store.getState().options;
  const topN = fixedOrder.length > 0 ? fixedOrder.length : store.getState().options.topN;
  const currentDate = store.getState().ticker.currentDate;
  const CompleteDateSlice = getDateSlice(currentDate, data, store);
  const dateSlice = CompleteDateSlice.slice(0, topN);
  if (showGroups) {
    svg2.selectAll(".legend-wrapper").style("opacity", (d) => store.getState().data.groupFilter.includes(d) ? 0.3 : 1);
  }
  if (!fixedScale) {
    x.domain([0, max(dateSlice, (d) => d.value) || 0]);
    svg2.select(".xAxis").transition().duration(tickDuration).ease(linear2).call(xAxis);
  }
  const bars = svg2.selectAll(".bar").data(dateSlice, (d) => d.name);
  bars.enter().append("rect").attr("class", (d) => "bar " + safeName(d.name)).classed("selected", (d) => store.getState().data.selected.includes(d.name)).attr("x", x(0) + 1).attr("width", barWidth).attr("y", () => y(topN + 1) + marginBottom + 5).attr("height", barHeight).style("fill", (d) => getColor(d, store)).on("click", (_ev, d) => selectFn(d, store, renderOptions)).on("mouseover", (_ev, d) => highlightFn(d, store, renderOptions)).on("mouseout", (_ev, d) => highlightFn(d, store, renderOptions)).transition().duration(tickDuration).ease(linear2).attr("y", barY);
  bars.transition().duration(tickDuration).ease(linear2).attr("width", (d) => Math.abs(x(d.value) - x(0) - 1)).attr("y", barY);
  bars.exit().transition().duration(tickDuration).ease(linear2).attr("width", (d) => Math.abs(x(d.value) - x(0) - 1)).attr("y", () => y(topN + 1) + marginBottom + 5).remove();
  const labels = svg2.selectAll(".label").data(dateSlice, (d) => d.name);
  labels.enter().append("text").attr("class", "label").classed("outside-bars", labelsPosition !== "inside").attr("x", labelX).attr("y", () => y(topN + 1) + marginBottom + 5 + barHalfHeight).style("text-anchor", "end").html((d) => d.name).on("click", (_ev, d) => selectFn(d, store, renderOptions)).on("mouseover", (_ev, d) => highlightFn(d, store, renderOptions)).on("mouseout", (_ev, d) => highlightFn(d, store, renderOptions)).transition().duration(tickDuration).ease(linear2).attr("y", (d) => barY(d) + barHalfHeight);
  labels.transition().duration(tickDuration).ease(linear2).attr("x", labelX).attr("y", (d) => barY(d) + barHalfHeight);
  labels.exit().transition().duration(tickDuration).ease(linear2).attr("x", labelX).attr("y", () => y(topN + 1) + marginBottom + 5).remove();
  const valueLabels = svg2.selectAll(".valueLabel").data(dateSlice, (d) => d.name);
  valueLabels.enter().append("text").attr("class", "valueLabel").attr("x", (d) => x(d.value) + 5).attr("y", () => y(topN + 1) + marginBottom + 5).text((d) => format(",.0f")(d.lastValue)).transition().duration(tickDuration).ease(linear2).attr("y", (d) => barY(d) + barHalfHeight);
  const sameDate = lastDate === currentDate;
  valueLabels.transition().duration(tickDuration).ease(linear2).attr("x", (d) => x(d.value) + 5).attr("y", (d) => barY(d) + barHalfHeight).tween("text", function(d) {
    const lastValue = sameDate ? d.value : d.lastValue;
    const i = round_default(lastValue, d.value);
    return function(t) {
      this.textContent = format(",")(i(t));
    };
  });
  valueLabels.exit().transition().duration(tickDuration).ease(linear2).attr("x", (d) => x(d.value) + 5).attr("y", () => y(topN + 1) + marginBottom + 5).remove();
  if (store.getState().options.showIcons) {
    const iconPatterns = defs.selectAll(".svgpattern").data(dateSlice, (d) => d.name);
    iconPatterns.enter().append("svg:pattern").attr("class", "svgpattern").attr("id", getIconID).attr("width", iconSize).attr("height", iconSize).append("svg:image").attr("xlink:href", (d) => d.icon).attr("width", iconSize).attr("height", iconSize).style("z-index", "99").attr("x", 0).attr("y", 0);
    iconPatterns.exit().transition().duration(tickDuration).ease(linear2).remove();
    const icons = svg2.selectAll("circle").data(dateSlice, (d) => d.name);
    icons.enter().append("circle").attr("cx", (d) => x(d.value) - iconSize / 2 - labelPadding).attr("cy", () => y(topN + 1) + iconSize + barHalfHeight).attr("r", iconSize / 2).style("z-index", "99").style("fill", "transparent").style("fill", (d) => `url(#${getIconID(d)})`).transition().duration(tickDuration).ease(linear2).attr("cy", (d) => y(d.rank) + barHalfHeight);
    icons.transition().duration(tickDuration).ease(linear2).attr("cx", (d) => x(d.value) - iconSize / 2 - labelPadding).attr("cy", (d) => y(d.rank) + barHalfHeight);
    icons.exit().transition().duration(tickDuration).ease(linear2).attr("cx", (d) => x(d.value) - iconSize / 2 - labelPadding).attr("cy", () => y(topN + 1) + iconSize + barHalfHeight).remove();
  }
  titleText.html(getText(title, currentDate, CompleteDateSlice, dates));
  subTitleText.html(getText(subTitle, currentDate, CompleteDateSlice, dates));
  captionText.html(getText(caption, currentDate, CompleteDateSlice, dates));
  dateCounterText.html(getText(dateCounter, currentDate, CompleteDateSlice, dates, true)).call((text) => halo(text, renderOptions));
  updateControls(store, renderOptions);
  renderOptions.lastDate = currentDate;
}

// src/lib/renderer/resize.ts
function resize(data, store, renderOptions) {
  const { inputHeight, inputWidth, minHeight, minWidth } = store.getState().options;
  const { root: root2 } = renderOptions;
  if (!root2)
    return;
  if (!inputHeight && !inputWidth || String(inputHeight).startsWith("window") || String(inputWidth).startsWith("window")) {
    renderOptions.height = getHeight(root2, minHeight, inputHeight);
    renderOptions.width = getWidth(root2, minWidth, inputWidth);
    const currentPosition = root2.style.position;
    renderInitalView(data, store, renderOptions);
    renderFrame(data, store, renderOptions);
    renderFrame(data, store, renderOptions);
    updateControls(store, renderOptions);
    root2.style.position = currentPosition;
  }
}

// src/lib/renderer/create-renderer.ts
function createRenderer(data, store, root2) {
  const renderOptions = { root: root2 };
  return {
    renderInitalView: () => renderInitalView(data, store, renderOptions),
    renderFrame: () => renderFrame(data, store, renderOptions),
    resize: () => resize(data, store, renderOptions)
  };
}

// src/lib/renderer/renderer-subscriber.ts
function rendererSubscriber(store, renderer) {
  return function() {
    if (store.getState().triggerRender) {
      renderer.renderFrame();
    }
  };
}

// tmp/styles.css?raw
var styles_default = "__selector__ text {\r\n  font-size: 16px;\r\n  font-family: Open Sans, sans-serif;\r\n}\r\n\r\n__selector__ text.title {\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n}\r\n\r\n__selector__ text.subTitle {\r\n  font-weight: 500;\r\n}\r\n\r\n__selector__ text.caption {\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n}\r\n__selector__ text.legend-text {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n__selector__ text.label {\r\n  font-weight: 600;\r\n}\r\n\r\n__selector__ text.valueLabel {\r\n  font-weight: 300;\r\n}\r\n\r\n__selector__ text.dateCounterText {\r\n  font-size: 64px;\r\n  font-weight: 700;\r\n}\r\n\r\n__selector__ .xAxis .tick:nth-child(2) text {\r\n  text-anchor: start;\r\n}\r\n\r\n__selector__ .tick line {\r\n  shape-rendering: CrispEdges;\r\n}\r\n\r\n__selector__ path.domain {\r\n  display: none;\r\n}\r\n\r\n__selector__ {\r\n  position: relative;\r\n}\r\n\r\n__selector__ .controls {\r\n  /*  position is set dynamically in renderer.ts */\r\n  display: flex;\r\n}\r\n\r\n__selector__ .controls div,\r\n__selector__ .overlay div {\r\n  cursor: pointer;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  width: 38px;\r\n  height: 38px;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  text-align: center;\r\n}\r\n\r\n__selector__ .controls svg {\r\n  margin: 5px auto;\r\n  width: 28px;\r\n  height: 28px;\r\n}\r\n\r\n__selector__ .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n__selector__ .overlay div {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  -moz-border-radius: 100px;\r\n  -webkit-border-radius: 100px;\r\n  border-radius: 100px;\r\n}\r\n__selector__ .overlay svg {\r\n  height: 50%;\r\n  width: 50%;\r\n}\r\n";

// tmp/light.theme.css?raw
var light_theme_default = "/* __selector__ {\r\n  background-color: #ffffff;\r\n}\r\n\r\n__selector__ text.title {\r\n  fill: #fafafa;\r\n} */\r\n\r\n__selector__ text.subTitle {\r\n  fill: #777777;\r\n}\r\n\r\n__selector__ text.dateCounterText {\r\n  fill: #bbbbbb;\r\n  opacity: 1;\r\n}\r\n\r\n__selector__ text.caption {\r\n  fill: #777777;\r\n}\r\n\r\n__selector__ .halo {\r\n  fill: #ffffff;\r\n  stroke: #ffffff;\r\n  stroke-width: 10;\r\n  stroke-linejoin: round;\r\n  opacity: 1;\r\n}\r\n\r\n__selector__ text.legend-text {\r\n  fill: #000000;\r\n}\r\n\r\n__selector__ text.label {\r\n  fill: #000000;\r\n}\r\n\r\n__selector__ text.label.outside-bars {\r\n  fill: #000000;\r\n}\r\n\r\n__selector__ text.valueLabel {\r\n  fill: #000000;\r\n}\r\n\r\n__selector__ .tick text {\r\n  fill: #777777;\r\n}\r\n\r\n__selector__ .tick line {\r\n  shape-rendering: CrispEdges;\r\n  stroke: #dddddd;\r\n}\r\n\r\n__selector__ .tick line.origin {\r\n  stroke: #aaaaaa;\r\n}\r\n\r\n__selector__ .controls div,\r\n__selector__ .overlay div {\r\n  color: #ffffff;\r\n  background: #777777;\r\n  border: 1px solid black;\r\n  opacity: 0.5;\r\n}\r\n\r\n__selector__ .controls div:hover,\r\n__selector__ .overlay div:hover {\r\n  background: #aaaaaa;\r\n  color: black;\r\n}\r\n\r\n__selector__ .overlay {\r\n  background-color: black;\r\n  opacity: 0.7;\r\n}\r\n\r\n__selector__ .highlight {\r\n  fill: #ff2727 !important;\r\n}\r\n\r\n__selector__ .selected {\r\n  fill: #d12020 !important;\r\n  stroke: #777777 !important;\r\n  stroke-width: 1 !important;\r\n}\r\n";

// tmp/dark.theme.css?raw
var dark_theme_default = "__selector__ {\r\n  background-color: #313639;\r\n}\r\n\r\n__selector__ text.title {\r\n  fill: #fafafa;\r\n}\r\n\r\n__selector__ text.subTitle {\r\n  fill: #cccccc;\r\n}\r\n\r\n__selector__ text.dateCounterText {\r\n  fill: #cccccc;\r\n  opacity: 1;\r\n}\r\n\r\n__selector__ text.caption {\r\n  fill: #cccccc;\r\n}\r\n\r\n__selector__ .halo {\r\n  fill: #313639;\r\n  stroke: #313639;\r\n  stroke-width: 10;\r\n  stroke-linejoin: round;\r\n  opacity: 1;\r\n}\r\n\r\n__selector__ text.legend-text {\r\n  fill: #fafafa;\r\n}\r\n\r\n__selector__ text.label {\r\n  fill: #313639;\r\n}\r\n\r\n__selector__ text.label.outside-bars {\r\n  fill: #fafafa;\r\n}\r\n\r\n__selector__ text.valueLabel {\r\n  fill: #fafafa;\r\n}\r\n\r\n__selector__ .tick text {\r\n  fill: #cccccc;\r\n}\r\n\r\n__selector__ .tick line {\r\n  shape-rendering: CrispEdges;\r\n  stroke: #dddddd;\r\n}\r\n\r\n__selector__ .tick line.origin {\r\n  stroke: #aaaaaa;\r\n}\r\n\r\n__selector__ .controls div,\r\n__selector__ .overlay div {\r\n  color: #ffffff;\r\n  background: #777777;\r\n  border: 1px solid black;\r\n  opacity: 0.5;\r\n}\r\n\r\n__selector__ .controls div:hover,\r\n__selector__ .overlay div:hover {\r\n  background: #aaaaaa;\r\n  color: black;\r\n}\r\n\r\n__selector__ .overlay {\r\n  background-color: black;\r\n  opacity: 0.7;\r\n}\r\n\r\n__selector__ .highlight {\r\n  fill: #ff2727 !important;\r\n}\r\n\r\n__selector__ .selected {\r\n  fill: #d12020 !important;\r\n  stroke: #777777 !important;\r\n  stroke-width: 1 !important;\r\n}\r\n";

// src/lib/styles/style-inject.ts
var _themes = {
  light: light_theme_default,
  dark: dark_theme_default
};
function styleInject(container, theme, insertAt = "top", styles = styles_default, themes = _themes) {
  let css = styles + themes[theme];
  if (!css || !container || typeof document === "undefined") {
    return "";
  }
  container.id = container.id || generateId();
  css = css.replace(/__selector__/g, "#" + container.id);
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.id = generateId("styles");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return style.id;
}

// src/lib/events/events.ts
function registerEvents(store, ticker) {
  const root2 = store.getState().container.element;
  const events = [];
  register();
  return { reregister, unregister, addApiEventHandler };
  function register() {
    registerControlButtonEvents();
    registerOverlayEvents();
    registerClickEvents();
    registerKeyboardEvents();
  }
  function reregister() {
    unregister(false);
    register();
  }
  function registerControlButtonEvents() {
    addEventHandler(root2, elements.skipBack, "click", () => ticker.skipBack());
    addEventHandler(root2, elements.play, "click", () => ticker.start());
    addEventHandler(root2, elements.pause, "click", () => ticker.stop());
    addEventHandler(root2, elements.skipForward, "click", () => ticker.skipForward());
  }
  function registerOverlayEvents() {
    addEventHandler(root2, elements.overlayPlay, "click", () => {
      hideElement(root2, elements.overlay);
      ticker.start();
    });
    addEventHandler(root2, elements.overlayRepeat, "click", () => {
      hideElement(root2, elements.overlay);
      ticker.skipBack();
      ticker.start();
    });
  }
  function registerClickEvents() {
    if (store.getState().options.mouseControls) {
      const svg2 = root2.querySelector("svg");
      svg2.addEventListener("click", (clickEvent) => {
        const target = clickEvent.target;
        if (!target || target.classList.contains("legend"))
          return;
        getClicks(clickEvent, function(event) {
          const clicks = event.detail;
          if (clicks === 3) {
            ticker.skipBack();
          } else if (clicks === 2) {
            ticker.skipForward();
          } else {
            ticker.toggle();
          }
        });
      });
    }
  }
  function registerKeyboardEvents() {
    if (store.getState().options.keyboardControls) {
      addEventHandler(document, "", "keyup", handleKeyboardEvents);
    }
  }
  function handleKeyboardEvents(e) {
    const target = document.activeElement;
    if (target && ["input", "textarea"].includes(target.tagName.toLowerCase()))
      return;
    const keys = {
      spacebar: " ",
      A: "a",
      S: "s",
      D: "d"
    };
    switch (e.key) {
      case keys.spacebar:
        ticker.toggle();
        e.preventDefault();
        break;
      case keys.A:
        ticker.skipBack();
        break;
      case keys.S:
        ticker.toggle();
        break;
      case keys.D:
        ticker.skipForward();
        break;
    }
  }
  function unregister(removeUserDefined = true) {
    events.filter((event) => removeUserDefined ? true : !event.userDefined).forEach((event) => {
      event.element.removeEventListener(event.eventType, event.handler);
      events.splice(events.indexOf(event), 1);
    });
  }
  function addEventHandler(root3, className, eventType, handler) {
    const element = getElement(root3, className);
    if (element) {
      element.addEventListener(eventType, handler);
      events.push({
        element,
        userDefined: false,
        eventType,
        handler
      });
    }
  }
  function addApiEventHandler(eventType, handler) {
    root2.addEventListener(eventType, handler);
    events.push({
      element: root2,
      userDefined: true,
      eventType,
      handler
    });
    return {
      remove: () => {
        root2.removeEventListener(eventType, handler);
      }
    };
  }
}
function getTickDetails(store) {
  const { ticker, data } = store.getState();
  return {
    date: ticker.currentDate,
    isFirstDate: ticker.isFirstDate,
    isLastDate: ticker.isLastDate,
    isRunning: ticker.isRunning,
    allDates: data.datesCache
  };
}
function dispatchDOMEvent(store, eventType) {
  const element = store.getState().container.element;
  if (!element)
    return;
  element.dispatchEvent(
    new CustomEvent(eventType, {
      bubbles: true,
      detail: getTickDetails(store)
    })
  );
}
function DOMEventSubscriber(store) {
  let lastDate = "";
  let wasRunning;
  return function() {
    const currentDate = store.getState().ticker.currentDate;
    const isRunning = store.getState().ticker.isRunning;
    if (currentDate !== lastDate) {
      dispatchDOMEvent(store, "dateChange");
      if (store.getState().ticker.isFirstDate) {
        dispatchDOMEvent(store, "firstDate");
      }
      if (store.getState().ticker.isLastDate) {
        dispatchDOMEvent(store, "lastDate");
      }
      lastDate = currentDate;
    }
    if (!wasRunning && isRunning) {
      dispatchDOMEvent(store, "play");
    }
    if (wasRunning && !isRunning) {
      dispatchDOMEvent(store, "pause");
    }
    wasRunning = isRunning;
  };
}

// src/lib/race.ts
async function race(data, container = "body", options = {}) {
  if (typeof container === "object" && !(container instanceof HTMLElement) && (!options || Object.keys(options).length === 0)) {
    options = container;
    container = options.selector || "body";
  }
  const root2 = typeof container === "string" ? document.querySelector(container) : container;
  if (!root2)
    throw new Error("Container element is not found.");
  const store = createStore(rootReducer);
  store.dispatch(actions.container.setContainer({ element: root2 }));
  store.dispatch(actions.options.loadOptions(options));
  const ticker = createTicker(store);
  let preparedData = await prepareData(data, store);
  let renderer = createRenderer(preparedData, store, root2);
  const { injectStyles, theme, autorun } = store.getState().options;
  const apiSubscriptions = [];
  subscribeToStore(store, renderer, preparedData);
  let stylesId;
  if (injectStyles) {
    stylesId = styleInject(root2, theme);
  }
  renderer.renderInitalView();
  ticker.start();
  if (!autorun) {
    ticker.stop();
  }
  const events = registerEvents(store, ticker);
  window.addEventListener("resize", resize2);
  function subscribeToStore(store2, renderer2, data2) {
    const subscriptions = [
      rendererSubscriber(store2, renderer2),
      computeNextDateSubscriber(data2, store2),
      DOMEventSubscriber(store2)
    ];
    [...subscriptions, ...apiSubscriptions].forEach((subcsription) => {
      store2.subscribe(subcsription);
    });
  }
  function addApiSubscription(fn) {
    apiSubscriptions.push(fn);
    return store.subscribe(fn);
  }
  function resize2() {
    renderer.resize();
    events.reregister();
  }
  function destroyed() {
    throw new Error("Cannot perform this operation after calling destroy()");
  }
  const API = {
    // TODO: validate user input
    play() {
      if (!store.getState().ticker.isRunning) {
        ticker.start();
      }
    },
    pause() {
      ticker.stop();
    },
    toggle() {
      ticker.toggle();
    },
    skipBack() {
      ticker.skipBack();
    },
    skipForward() {
      ticker.skipForward();
    },
    inc(value = 1) {
      store.dispatch(actions.ticker.inc(+value));
    },
    dec(value = 1) {
      store.dispatch(actions.ticker.dec(+value));
    },
    setDate(inputDate) {
      store.dispatch(actions.ticker.updateDate(getDateString(inputDate)));
    },
    getDate() {
      return store.getState().ticker.currentDate;
    },
    getAllDates() {
      return [...store.getState().ticker.dates];
    },
    isRunning() {
      return store.getState().ticker.isRunning;
    },
    select(name) {
      select_default2(root2).select("rect." + safeName(name)).classed("selected", true);
      store.dispatch(actions.data.addSelection(name));
    },
    unselect(name) {
      select_default2(root2).select("rect." + safeName(name)).classed("selected", false);
      store.dispatch(actions.data.removeSelection(name));
    },
    unselectAll() {
      select_default2(root2).selectAll("rect").classed("selected", false);
      store.dispatch(actions.data.resetSelections());
    },
    hideGroup(group) {
      store.dispatch(actions.data.addFilter(String(group)));
    },
    showGroup(group) {
      store.dispatch(actions.data.removeFilter(String(group)));
    },
    showOnlyGroup(group) {
      store.dispatch(actions.data.allExceptFilter(String(group)));
    },
    showAllGroups() {
      store.dispatch(actions.data.resetFilters());
    },
    async changeOptions(newOptions) {
      const unAllowedOptions = ["dataShape", "dataType"];
      unAllowedOptions.forEach((key) => {
        if (newOptions[key] && newOptions[key] !== store.getState().options[key]) {
          throw new Error(`The option "${key}" cannot be changed.`);
        }
      });
      const dataOptions = [
        "dataTransform",
        "fillDateGapsInterval",
        "fillDateGapsValue",
        "startDate",
        "endDate",
        "fixedOrder"
      ];
      let dataOptionsChanged = false;
      dataOptions.forEach((key) => {
        if (newOptions[key] && newOptions[key] !== store.getState().options[key]) {
          dataOptionsChanged = true;
        }
      });
      store.dispatch(actions.options.changeOptions(newOptions));
      const { injectStyles: injectStyles2, theme: theme2, autorun: autorun2 } = store.getState().options;
      if (dataOptionsChanged) {
        store.unsubscribeAll();
        store.dispatch(actions.data.clearDateSlices());
        preparedData = await prepareData(data, store, true);
        renderer = createRenderer(preparedData, store, root2);
        subscribeToStore(store, renderer, preparedData);
      }
      if ("injectStyles" in newOptions || "theme" in newOptions) {
        document.getElementById(stylesId)?.remove();
        if (injectStyles2) {
          stylesId = styleInject(root2, theme2);
        }
      }
      renderer.renderInitalView();
      events.reregister();
      if (autorun2) {
        const { isFirstDate, isRunning } = store.getState().ticker;
        if (isFirstDate && !isRunning) {
          ticker.start();
        }
      }
    },
    onDate(date, fn) {
      const dateString = getDateString(date);
      let lastDate = "";
      const watcher = addApiSubscription(() => {
        if (store.getState().ticker.currentDate === dateString && dateString !== lastDate) {
          lastDate = store.getState().ticker.currentDate;
          fn.call(API, getTickDetails(store));
        }
        lastDate = store.getState().ticker.currentDate;
      });
      return {
        remove() {
          watcher.unsubscribe();
        }
      };
    },
    on(event, fn) {
      const watcher = events.addApiEventHandler(event, () => {
        fn.call(API, getTickDetails(store));
      });
      return {
        remove() {
          watcher.remove();
        }
      };
    },
    destroy() {
      ticker.stop();
      store.unsubscribeAll();
      events.unregister();
      window.removeEventListener("resize", resize2);
      root2.innerHTML = "";
      document.getElementById(stylesId)?.remove();
      for (const method of Object.keys(this)) {
        this[method] = destroyed;
      }
    }
  };
  return API;
}
export {
  defaultOptions,
  generateId,
  loadData,
  race
};
