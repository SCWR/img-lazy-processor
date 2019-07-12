/*!
 * img-lazy-processor.js v0.1.1
 * (c) 2019-2019 [object Object]
 * https://github.com/SCWR/img-lazy-processor.git
 * Released under the MIT License.
 */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

(function () {

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object') {
    return;
  }

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && 'isIntersecting' in window.IntersectionObserverEntry.prototype) {
    return;
  }

  console.warn && console.warn('The browser does not support the IntersectionObserver API. You can add polyfill(https://github.com/w3c/IntersectionObserver) or [npm install intersection-observer] to solve this problem' + 'or add (polyfill/intersection-observer.js) in this project ');
})();

var PLACEHOLD_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1RDk3QjBCQTUyQzExRThCQ0U4OEMxMDBGQTgwMkNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1RDk3QjBDQTUyQzExRThCQ0U4OEMxMDBGQTgwMkNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVEOTdCMDlBNTJDMTFFOEJDRTg4QzEwMEZBODAyQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDVEOTdCMEFBNTJDMTFFOEJDRTg4QzEwMEZBODAyQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vHKjlAAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg==';
var LOAD_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik02MC4wNDksMzYuMDQ5IEw1Mi4wNDksMzYuMDQ5IEM0OS44NDAsMzYuMDQ5IDQ4LjA0OSwzNC4yNTkgNDguMDQ5LDMyLjA0OSBDNDguMDQ5LDI5Ljg0MCA0OS44NDAsMjguMDQ5IDUyLjA0OSwyOC4wNDkgTDYwLjA0OSwyOC4wNDkgQzYyLjI1OSwyOC4wNDkgNjQuMDQ5LDI5Ljg0MCA2NC4wNDksMzIuMDQ5IEM2NC4wNDksMzQuMjU5IDYyLjI1OSwzNi4wNDkgNjAuMDQ5LDM2LjA0OSBaTTQ5LjAwNiwyMC43MDEgQzQ3LjQ0MywyMi4yNjMgNDQuOTExLDIyLjI2MyA0My4zNDksMjAuNzAxIEM0MS43ODcsMTkuMTM5IDQxLjc4NywxNi42MDYgNDMuMzQ5LDE1LjA0NCBMNDkuMDA2LDkuMzg3IEM1MC41NjgsNy44MjUgNTMuMTAwLDcuODI1IDU0LjY2Miw5LjM4NyBDNTYuMjI0LDEwLjk0OSA1Ni4yMjQsMTMuNDgyIDU0LjY2MiwxNS4wNDQgTDQ5LjAwNiwyMC43MDEgWk0zMi4wMDAsNjQuMDk5IEMyOS43OTEsNjQuMDk5IDI4LjAwMCw2Mi4zMDggMjguMDAwLDYwLjA5OSBMMjguMDAwLDUyLjA5OSBDMjguMDAwLDQ5Ljg5MCAyOS43OTEsNDguMDk5IDMyLjAwMCw0OC4wOTkgQzM0LjIwOSw0OC4wOTkgMzYuMDAwLDQ5Ljg5MCAzNi4wMDAsNTIuMDk5IEwzNi4wMDAsNjAuMDk5IEMzNi4wMDAsNjIuMzA4IDM0LjIwOSw2NC4wOTkgMzIuMDAwLDY0LjA5OSBaTTMyLjAwMCwxNi4wMDAgQzI5Ljc5MSwxNi4wMDAgMjguMDAwLDE0LjIwOSAyOC4wMDAsMTIuMDAwIEwyOC4wMDAsNC4wMDAgQzI4LjAwMCwxLjc5MSAyOS43OTEsLTAuMDAwIDMyLjAwMCwtMC4wMDAgQzM0LjIwOSwtMC4wMDAgMzYuMDAwLDEuNzkxIDM2LjAwMCw0LjAwMCBMMzYuMDAwLDEyLjAwMCBDMzYuMDAwLDE0LjIwOSAzNC4yMDksMTYuMDAwIDMyLjAwMCwxNi4wMDAgWk0xNC45OTQsNTQuNzEyIEMxMy40MzIsNTYuMjc0IDEwLjkwMCw1Ni4yNzQgOS4zMzgsNTQuNzEyIEM3Ljc3Niw1My4xNTAgNy43NzYsNTAuNjE3IDkuMzM4LDQ5LjA1NSBMMTQuOTk0LDQzLjM5OCBDMTYuNTU3LDQxLjgzNiAxOS4wODksNDEuODM2IDIwLjY1MSw0My4zOTggQzIyLjIxMyw0NC45NjAgMjIuMjEzLDQ3LjQ5MyAyMC42NTEsNDkuMDU1IEwxNC45OTQsNTQuNzEyIFpNMTQuOTk0LDIwLjcwMSBMOS4zMzgsMTUuMDQ0IEM3Ljc3NiwxMy40ODIgNy43NzYsMTAuOTQ5IDkuMzM4LDkuMzg3IEMxMC45MDAsNy44MjUgMTMuNDMyLDcuODI1IDE0Ljk5NCw5LjM4NyBMMjAuNjUxLDE1LjA0NCBDMjIuMjEzLDE2LjYwNiAyMi4yMTMsMTkuMTM5IDIwLjY1MSwyMC43MDEgQzE5LjA4OSwyMi4yNjMgMTYuNTU3LDIyLjI2MyAxNC45OTQsMjAuNzAxIFpNMTUuOTUxLDMyLjA0OSBDMTUuOTUxLDM0LjI1OSAxNC4xNjAsMzYuMDQ5IDExLjk1MSwzNi4wNDkgTDMuOTUxLDM2LjA0OSBDMS43NDEsMzYuMDQ5IC0wLjA0OSwzNC4yNTkgLTAuMDQ5LDMyLjA0OSBDLTAuMDQ5LDI5Ljg0MCAxLjc0MSwyOC4wNDkgMy45NTEsMjguMDQ5IEwxMS45NTEsMjguMDQ5IEMxNC4xNjAsMjguMDQ5IDE1Ljk1MSwyOS44NDAgMTUuOTUxLDMyLjA0OSBaTTQ5LjAwNiw0My4zOTggTDU0LjY2Miw0OS4wNTUgQzU2LjIyNCw1MC42MTcgNTYuMjI0LDUzLjE1MCA1NC42NjIsNTQuNzEyIEM1My4xMDAsNTYuMjc0IDUwLjU2OCw1Ni4yNzQgNDkuMDA2LDU0LjcxMiBMNDMuMzQ5LDQ5LjA1NSBDNDEuNzg3LDQ3LjQ5MyA0MS43ODcsNDQuOTYwIDQzLjM0OSw0My4zOTggQzQ0LjkxMSw0MS44MzYgNDcuNDQzLDQxLjgzNiA0OS4wMDYsNDMuMzk4IFoiIGNsYXNzPSJjbHMtMSI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGJlZ2luPSIwcyIgZHVyPSIxcyIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDMyIDMyIiB0bz0iMzYwIDMyIDMyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPgo=';
var EMPTY_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBkPSJNNjAuMzcxLDYwLjAwMCBMMy42MzAsNjAuMDAwIEMxLjYyNSw2MC4wMDAgMC4wMDAsNTguMzg5IDAuMDAwLDU2LjQwMiBMMC4wMDAsOC41OTkgQzAuMDAwLDYuNjEyIDEuNjI1LDUuMDAwIDMuNjMwLDUuMDAwIEw2MC4zNzEsNS4wMDAgQzYyLjM3NSw1LjAwMCA2NC4wMDAsNi42MTIgNjQuMDAwLDguNTk5IEw2NC4wMDAsNTYuNDAyIEM2NC4wMDAsNTguMzg5IDYyLjM3NSw2MC4wMDAgNjAuMzcxLDYwLjAwMCBaTTU4LjY2NywxMi45NDkgQzU4LjY2NywxMS40ODEgNTcuNDY3LDEwLjI5MSA1NS45ODYsMTAuMjkxIEw4LjAxNCwxMC4yOTEgQzYuNTMzLDEwLjI5MSA1LjMzMywxMS40ODEgNS4zMzMsMTIuOTQ5IEw1LjMzMywzMy43NTcgQzEwLjQ4NSwzOC44OTYgMjIuNTg3LDQwLjU1MiAzMS4wMDgsMzIuNTAwIEMzOS44MzAsMjQuMDY2IDUzLjgyNiwyMy45MzAgNTguNjY3LDIzLjM2NSBMNTguNjY3LDEyLjk0OSBaTTE1LjYwNywyNC43MDQgQzEyLjQyOSwyNC43MDQgOS44NTIsMjIuMTUwIDkuODUyLDE4Ljk5OCBDOS44NTIsMTUuODQ3IDEyLjQyOSwxMy4yOTIgMTUuNjA3LDEzLjI5MiBDMTguNzg2LDEzLjI5MiAyMS4zNjMsMTUuODQ3IDIxLjM2MywxOC45OTggQzIxLjM2MywyMi4xNTAgMTguNzg2LDI0LjcwNCAxNS42MDcsMjQuNzA0IFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K';
var ERROR_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBkPSJNNjAuMzc0LDYwLjAwMCBMMzQuNjM5LDYwLjAwMCBMNDEuMDg4LDQyLjY4MyBMMzQuNTU5LDI5LjcyNSBDNDMuMTUxLDIzLjk0NSA1NC4yNTQsMjMuODc4IDU4LjY0MiwyMy4zNjUgTDU4LjY0MiwxMi45NDkgQzU4LjY0MiwxMS40ODEgNTcuNDQzLDEwLjI5MSA1NS45NjQsMTAuMjkxIEwzNS4wNDIsMTAuMjkxIEwzNy4xNDcsNS4wMDAgTDYwLjM3NCw1LjAwMCBDNjIuMzc3LDUuMDAwIDY0LjAwMSw2LjYxMiA2NC4wMDEsOC41OTkgTDY0LjAwMSw1Ni40MDIgQzY0LjAwMSw1OC4zODkgNjIuMzc3LDYwLjAwMCA2MC4zNzQsNjAuMDAwIFpNOS44NzIsMTguOTk4IEM5Ljg3MiwxNS44NDcgMTIuNDQ2LDEzLjI5MiAxNS42MjIsMTMuMjkyIEMxOC43OTgsMTMuMjkyIDIxLjM3MywxNS44NDcgMjEuMzczLDE4Ljk5OCBDMjEuMzczLDIyLjE1MCAxOC43OTgsMjQuNzA0IDE1LjYyMiwyNC43MDQgQzEyLjQ0NiwyNC43MDQgOS44NzIsMjIuMTUwIDkuODcyLDE4Ljk5OCBaTTMuNjI1LDYwLjAwMCBDMS42MjMsNjAuMDAwIC0wLjAwMSw1OC4zODkgLTAuMDAxLDU2LjQwMiBMLTAuMDAxLDguNTk5IEMtMC4wMDEsNi42MTIgMS42MjMsNS4wMDAgMy42MjUsNS4wMDAgTDI4LjUzMyw1LjAwMCBMMjYuNDI4LDEwLjI5MSBMOC4wMzUsMTAuMjkxIEM2LjU1NiwxMC4yOTEgNS4zNTcsMTEuNDgxIDUuMzU3LDEyLjk0OSBMNS4zNTcsMzMuNzU3IEM3Ljg3MSwzNi4yNjcgMTEuOTE2LDM3LjkwMCAxNi41NTQsMzcuOTAwIEMyMC4zOTUsMzcuOTAwIDI0LjY0MywzNi43NzkgMjguNzYwLDM0LjEwNiBMMzMuMDA2LDQyLjA2NiBMMjYuNjAxLDYwLjAwMCBMMy42MjUsNjAuMDAwIFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K';

function getType(src, isLoad) {
  return isLoad ? 'loadImg' : src ? 'errorImg' : 'emptyImg';
} // 配置项


var VALUE_KEYS = {
  bgImage: {
    keys: ['emptyImg', 'errorImg', 'loadImg'],
    porperty: 'background-image',
    handle: function handle(value) {
      return "url(".concat(value, ")");
    }
  },
  bgColor: {
    porperty: 'background-color',
    handle: function handle(value) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'transparent';
      return value || def;
    }
  },
  bgSize: {
    porperty: 'background-size',
    handle: function handle(value) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '50%';
      return value || def;
    }
  },
  bgPosition: {
    porperty: 'background-position',
    handle: function handle(value) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';
      return value || def;
    }
  },
  bgRepeat: {
    porperty: 'background-repeat',
    handle: function handle(value) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no-repeat';
      return value || def;
    }
  }
};

var ImgLazyProcessor =
/*#__PURE__*/
function () {
  _createClass(ImgLazyProcessor, [{
    key: "_loadImg",
    value: function _loadImg(imgEl, option) {
      var originSrc = (imgEl.getAttribute('origin-src') || '').trim();

      if (!originSrc && imgEl._type === 'emptyImg') {
        return;
      }

      this._addTips(imgEl, true);

      if (option.delay) {
        this._setDelayTimer(imgEl, originSrc);
      } else {
        imgEl.setAttribute('src', originSrc);
      }
    } // 延时加载图片

  }]);

  function ImgLazyProcessor() {
    var _this = this;

    var commonOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var exFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, ImgLazyProcessor);

    _defineProperty(this, "_commonOption", void 0);

    _defineProperty(this, "_elemOptions", void 0);

    _defineProperty(this, "_mutationObserver", void 0);

    _defineProperty(this, "_mutationOptions", void 0);

    _defineProperty(this, "_intersectionObserver", void 0);

    _defineProperty(this, "_mObserverCb", function (records, observer) {
      records.map(function (record) {
        var imgEl = record.target;

        if (imgEl._unobserve) {
          return;
        }

        var option = _this._elemOptions.get(imgEl);

        switch (record.attributeName) {
          case 'src':
            break;

          case 'try-reload':
            if (!record.oldValue || record.oldValue === 'true') {
              imgEl.setAttribute('try-reload', 'false');
            } else {
              break;
            }

          // eslint-disable-next-line no-fallthrough

          case 'origin-src':
            if (imgEl._isVisible) {
              _this._loadImg(imgEl, option);
            } else {
              imgEl._init = false;
            }

            break;

          case 'style':
            if (imgEl._inside > 0) {
              imgEl._inside -= 1;
              break;
            }

          // eslint-disable-next-line no-fallthrough

          case 'class':
          default:
            if (imgEl._isVisible) {
              if (imgEl._tips) {
                ImgLazyProcessor.checkElemWH(imgEl);
              }
            } else {
              imgEl._reset = true;
            }

            break;
        }
      });
    });

    _defineProperty(this, "_iObserverCb", function (records, observer) {
      records.map(function (record) {
        var imgEl = record.target;
        imgEl._isVisible = record.isIntersecting;

        var option = _this._elemOptions.get(imgEl);

        if (!imgEl._isVisible) {
          return;
        }

        if (imgEl._reset) {
          if (imgEl._tips) {
            ImgLazyProcessor.checkElemWH(imgEl);
          }

          imgEl._reset = false;
        }

        if (!imgEl._init) {
          _this._loadImg(imgEl, option);

          imgEl._init = true;
        }
      });
    });

    _defineProperty(this, "_setDelayTimer", function (imgEl, originSrc) {
      _this._clearDelayTimer(imgEl);

      imgEl._timer = setTimeout(function (imgEl, originSrc) {
        imgEl.setAttribute('src', originSrc);
      }, _this._commonOption.delayTime, imgEl, originSrc);
    });

    _defineProperty(this, "_clearDelayTimer", function (imgEl) {
      if (imgEl._timer) {
        clearTimeout(imgEl._timer);
        delete imgEl._timer;
      }
    });

    _defineProperty(this, "_imgLoad", function (e) {
      var imgEl = e.target;
      var src = imgEl.getAttribute('src');

      if (src === PLACEHOLD_IMG) {
        ImgLazyProcessor.checkElemWH(imgEl, _this._commonOption.sizeLimit);
      } else {
        _this._removeTips(imgEl);
      }
    });

    _defineProperty(this, "_imgError", function (e) {
      var imgEl = e.target;

      _this._addTips(imgEl);
    });

    _defineProperty(this, "_removeTips", function (imgEl) {
      var option = _this._elemOptions.get(imgEl);

      if (imgEl._tips) {
        imgEl._tips = false;
        imgEl._type = '';
        var tempElem = ImgLazyProcessor.getTempElem(imgEl);

        for (var key in VALUE_KEYS) {
          tempElem.style.removeProperty(VALUE_KEYS[key].porperty);
        }

        if (imgEl._delWidth) {
          tempElem.style.removeProperty('width');
          imgEl._delWidth = false;
        }

        if (imgEl._delHeight) {
          tempElem.style.removeProperty('height');
          imgEl._delHeight = false;
        }

        if (option.disable) {
          tempElem.style.removeProperty('pointer-events');
        }

        ImgLazyProcessor.checkInside(imgEl, tempElem);
        tempElem = null;
      }
    });

    _defineProperty(this, "_addTips", function (imgEl, isLoad) {
      var option = _this._elemOptions.get(imgEl);

      var originSrc = (imgEl.getAttribute('origin-src') || '').trim();
      var imgHandleType = getType(originSrc, isLoad);

      if (!imgEl._tips) {
        imgEl._tips = true;
        imgEl._type = imgHandleType;
        var tempElem = ImgLazyProcessor.getTempElem(imgEl);

        for (var key in VALUE_KEYS) {
          var item = VALUE_KEYS[key];

          if (item.keys) {
            tempElem.style.setProperty(item.porperty, item.handle(option[imgHandleType] || _this._commonOption[imgHandleType]));
          } else {
            tempElem.style.setProperty(item.porperty, item.handle(option[key], _this._commonOption[key]));
          }
        }

        if (option.disable) {
          tempElem.style.setProperty('pointer-events', 'none');
        }

        ImgLazyProcessor.checkInside(imgEl, tempElem);
        tempElem = null;
      } else {
        if (imgEl._type !== imgHandleType) {
          var _tempElem = ImgLazyProcessor.getTempElem(imgEl);

          imgEl._type = imgHandleType;
          var _item = VALUE_KEYS.bgImage;

          _tempElem.style.setProperty(_item.porperty, _item.handle(option[imgHandleType] || _this._commonOption[imgHandleType]));

          ImgLazyProcessor.checkInside(imgEl, _tempElem);
          _tempElem = null;
        }
      }

      imgEl.setAttribute('src', PLACEHOLD_IMG);
    });

    this._elemOptions = new WeakMap();
    this._commonOption = _objectSpread({
      loadImg: LOAD_IMG,
      emptyImg: EMPTY_IMG,
      errorImg: ERROR_IMG,
      dataset: false,
      bgColor: 'transparent',
      // '#aec2d3'
      bgSize: '50%',
      bgPosition: 'center',
      bgRepeat: 'no-repeat',
      sizeLimit: 2,
      delay: false,
      delayTime: 300,
      disable: false
    }, commonOption);
    this._mutationOptions = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['origin-src', 'try-reload', 'class', 'style'].concat(_toConsumableArray(exFilter))
    };
    this._mutationObserver = new MutationObserver(this._mObserverCb);
    this._intersectionObserver = new IntersectionObserver(this._iObserverCb);
  }

  _createClass(ImgLazyProcessor, [{
    key: "observe",
    // {disable: false, delay: false, 'emptyImg':'', errorImg:'', loadImg: '', bgColor:'', bgSize:'', 'bgPosition': '', bgRepeat: ''}
    value: function observe(imgEl, option) {
      var elemOption = this._elemOptions.get(imgEl);

      if (!(imgEl instanceof HTMLElement) || imgEl.tagName !== 'IMG' || elemOption) {
        return;
      }

      if (!imgEl.src) {
        imgEl.setAttribute('src', PLACEHOLD_IMG);
      }

      imgEl._init = false;
      imgEl._reset = true;
      imgEl._inside = 0;
      imgEl.addEventListener('load', this._imgLoad);
      imgEl.addEventListener('error', this._imgError);

      if (imgEl._unobserve) {
        imgEl._unobserve = false;
      } else {
        this._mutationObserver.observe(imgEl, this._mutationOptions);
      }

      this._intersectionObserver.observe(imgEl);

      this.setElemOption(imgEl, option);
    }
  }, {
    key: "unobserve",
    value: function unobserve(imgEl) {
      var option = this._elemOptions.get(imgEl);

      if (!(imgEl instanceof HTMLElement) || imgEl.tagName !== 'IMG' || !option) {
        return;
      }

      this._clearDelayTimer(imgEl);

      imgEl.removeEventListener('load', this._imgLoad);
      imgEl.removeEventListener('error', this._imgError);
      imgEl._unobserve = true;

      this._intersectionObserver.unobserve(imgEl);

      if (this._commonOption.dataset) {
        ImgLazyProcessor.delDataset(imgEl, option);
      }

      this._removeTips(imgEl);

      this._elemOptions.delete(imgEl);
    }
  }, {
    key: "setElemOption",
    value: function setElemOption(imgEl) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var mixOption = Object.assign(this._elemOptions.get(imgEl) || {}, option);

      this._elemOptions.set(imgEl, mixOption);

      if (this._commonOption.dataset) {
        ImgLazyProcessor.updDataset(imgEl, mixOption);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._mutationObserver.disconnect();

      this._intersectionObserver.disconnect();
    }
  }], [{
    key: "updDataset",
    value: function updDataset(imgEl, option) {
      for (var _i = 0, _Object$entries = Object.entries(option); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        imgEl.dataset[key] = value;
      }
    }
  }, {
    key: "delDataset",
    value: function delDataset(imgEl, option) {
      for (var _i2 = 0, _Object$keys = Object.keys(option); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        delete imgEl.dataset[key];
      }
    }
  }, {
    key: "getTempElem",
    value: function getTempElem(imgEl) {
      var tempElem = document.createElement('img');
      tempElem.setAttribute('style', imgEl.getAttribute('style'));
      return tempElem;
    }
  }, {
    key: "checkInside",
    value: function checkInside(imgEl, tempElem) {
      var style = imgEl.getAttribute('style');
      var tempStyle = tempElem.getAttribute('style');

      if (style !== tempStyle) {
        imgEl._inside += 1;
        imgEl.setAttribute('style', tempElem.getAttribute('style'));
      }
    }
  }, {
    key: "checkElemWH",
    value: function checkElemWH(imgEl, sizeLimit) {
      var tempElem = ImgLazyProcessor.getTempElem(imgEl);

      if (imgEl._delWidth) {
        tempElem.style.removeProperty('width');
        imgEl._delWidth = false;
      }

      if (imgEl._delHeight) {
        tempElem.style.removeProperty('height');
        imgEl._delHeight = false;
      }

      ImgLazyProcessor.checkInside(imgEl, tempElem);
      var computedStyle = getComputedStyle(imgEl, '');
      var compWidth = computedStyle.width && computedStyle.width.toLocaleLowerCase();
      var compHeight = computedStyle.height && computedStyle.height.toLocaleLowerCase();

      if (ImgLazyProcessor.checkWHLimit(compWidth, sizeLimit)) {
        tempElem.style.setProperty('width', '100%');
        imgEl._delWidth = true;
      }

      if (ImgLazyProcessor.checkWHLimit(compHeight, sizeLimit)) {
        tempElem.style.setProperty('height', '100%');
        imgEl._delHeight = true;
      }

      ImgLazyProcessor.checkInside(imgEl, tempElem);
      tempElem = null;
    }
  }, {
    key: "checkWHLimit",
    value: function checkWHLimit(size, sizeLimit) {
      var mSize = (size || '-').replace('px', '');
      return isNaN(mSize) || Number(mSize) <= sizeLimit;
    }
  }]);

  return ImgLazyProcessor;
}();

export default ImgLazyProcessor;
