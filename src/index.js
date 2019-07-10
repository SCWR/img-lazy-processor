
import './check.js'
const PLACEHOLD_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1RDk3QjBCQTUyQzExRThCQ0U4OEMxMDBGQTgwMkNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1RDk3QjBDQTUyQzExRThCQ0U4OEMxMDBGQTgwMkNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVEOTdCMDlBNTJDMTFFOEJDRTg4QzEwMEZBODAyQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDVEOTdCMEFBNTJDMTFFOEJDRTg4QzEwMEZBODAyQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vHKjlAAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg=='
const LOAD_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik02MC4wNDksMzYuMDQ5IEw1Mi4wNDksMzYuMDQ5IEM0OS44NDAsMzYuMDQ5IDQ4LjA0OSwzNC4yNTkgNDguMDQ5LDMyLjA0OSBDNDguMDQ5LDI5Ljg0MCA0OS44NDAsMjguMDQ5IDUyLjA0OSwyOC4wNDkgTDYwLjA0OSwyOC4wNDkgQzYyLjI1OSwyOC4wNDkgNjQuMDQ5LDI5Ljg0MCA2NC4wNDksMzIuMDQ5IEM2NC4wNDksMzQuMjU5IDYyLjI1OSwzNi4wNDkgNjAuMDQ5LDM2LjA0OSBaTTQ5LjAwNiwyMC43MDEgQzQ3LjQ0MywyMi4yNjMgNDQuOTExLDIyLjI2MyA0My4zNDksMjAuNzAxIEM0MS43ODcsMTkuMTM5IDQxLjc4NywxNi42MDYgNDMuMzQ5LDE1LjA0NCBMNDkuMDA2LDkuMzg3IEM1MC41NjgsNy44MjUgNTMuMTAwLDcuODI1IDU0LjY2Miw5LjM4NyBDNTYuMjI0LDEwLjk0OSA1Ni4yMjQsMTMuNDgyIDU0LjY2MiwxNS4wNDQgTDQ5LjAwNiwyMC43MDEgWk0zMi4wMDAsNjQuMDk5IEMyOS43OTEsNjQuMDk5IDI4LjAwMCw2Mi4zMDggMjguMDAwLDYwLjA5OSBMMjguMDAwLDUyLjA5OSBDMjguMDAwLDQ5Ljg5MCAyOS43OTEsNDguMDk5IDMyLjAwMCw0OC4wOTkgQzM0LjIwOSw0OC4wOTkgMzYuMDAwLDQ5Ljg5MCAzNi4wMDAsNTIuMDk5IEwzNi4wMDAsNjAuMDk5IEMzNi4wMDAsNjIuMzA4IDM0LjIwOSw2NC4wOTkgMzIuMDAwLDY0LjA5OSBaTTMyLjAwMCwxNi4wMDAgQzI5Ljc5MSwxNi4wMDAgMjguMDAwLDE0LjIwOSAyOC4wMDAsMTIuMDAwIEwyOC4wMDAsNC4wMDAgQzI4LjAwMCwxLjc5MSAyOS43OTEsLTAuMDAwIDMyLjAwMCwtMC4wMDAgQzM0LjIwOSwtMC4wMDAgMzYuMDAwLDEuNzkxIDM2LjAwMCw0LjAwMCBMMzYuMDAwLDEyLjAwMCBDMzYuMDAwLDE0LjIwOSAzNC4yMDksMTYuMDAwIDMyLjAwMCwxNi4wMDAgWk0xNC45OTQsNTQuNzEyIEMxMy40MzIsNTYuMjc0IDEwLjkwMCw1Ni4yNzQgOS4zMzgsNTQuNzEyIEM3Ljc3Niw1My4xNTAgNy43NzYsNTAuNjE3IDkuMzM4LDQ5LjA1NSBMMTQuOTk0LDQzLjM5OCBDMTYuNTU3LDQxLjgzNiAxOS4wODksNDEuODM2IDIwLjY1MSw0My4zOTggQzIyLjIxMyw0NC45NjAgMjIuMjEzLDQ3LjQ5MyAyMC42NTEsNDkuMDU1IEwxNC45OTQsNTQuNzEyIFpNMTQuOTk0LDIwLjcwMSBMOS4zMzgsMTUuMDQ0IEM3Ljc3NiwxMy40ODIgNy43NzYsMTAuOTQ5IDkuMzM4LDkuMzg3IEMxMC45MDAsNy44MjUgMTMuNDMyLDcuODI1IDE0Ljk5NCw5LjM4NyBMMjAuNjUxLDE1LjA0NCBDMjIuMjEzLDE2LjYwNiAyMi4yMTMsMTkuMTM5IDIwLjY1MSwyMC43MDEgQzE5LjA4OSwyMi4yNjMgMTYuNTU3LDIyLjI2MyAxNC45OTQsMjAuNzAxIFpNMTUuOTUxLDMyLjA0OSBDMTUuOTUxLDM0LjI1OSAxNC4xNjAsMzYuMDQ5IDExLjk1MSwzNi4wNDkgTDMuOTUxLDM2LjA0OSBDMS43NDEsMzYuMDQ5IC0wLjA0OSwzNC4yNTkgLTAuMDQ5LDMyLjA0OSBDLTAuMDQ5LDI5Ljg0MCAxLjc0MSwyOC4wNDkgMy45NTEsMjguMDQ5IEwxMS45NTEsMjguMDQ5IEMxNC4xNjAsMjguMDQ5IDE1Ljk1MSwyOS44NDAgMTUuOTUxLDMyLjA0OSBaTTQ5LjAwNiw0My4zOTggTDU0LjY2Miw0OS4wNTUgQzU2LjIyNCw1MC42MTcgNTYuMjI0LDUzLjE1MCA1NC42NjIsNTQuNzEyIEM1My4xMDAsNTYuMjc0IDUwLjU2OCw1Ni4yNzQgNDkuMDA2LDU0LjcxMiBMNDMuMzQ5LDQ5LjA1NSBDNDEuNzg3LDQ3LjQ5MyA0MS43ODcsNDQuOTYwIDQzLjM0OSw0My4zOTggQzQ0LjkxMSw0MS44MzYgNDcuNDQzLDQxLjgzNiA0OS4wMDYsNDMuMzk4IFoiIGNsYXNzPSJjbHMtMSI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGJlZ2luPSIwcyIgZHVyPSIxcyIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDMyIDMyIiB0bz0iMzYwIDMyIDMyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPgo='
const EMPTY_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBkPSJNNjAuMzcxLDYwLjAwMCBMMy42MzAsNjAuMDAwIEMxLjYyNSw2MC4wMDAgMC4wMDAsNTguMzg5IDAuMDAwLDU2LjQwMiBMMC4wMDAsOC41OTkgQzAuMDAwLDYuNjEyIDEuNjI1LDUuMDAwIDMuNjMwLDUuMDAwIEw2MC4zNzEsNS4wMDAgQzYyLjM3NSw1LjAwMCA2NC4wMDAsNi42MTIgNjQuMDAwLDguNTk5IEw2NC4wMDAsNTYuNDAyIEM2NC4wMDAsNTguMzg5IDYyLjM3NSw2MC4wMDAgNjAuMzcxLDYwLjAwMCBaTTU4LjY2NywxMi45NDkgQzU4LjY2NywxMS40ODEgNTcuNDY3LDEwLjI5MSA1NS45ODYsMTAuMjkxIEw4LjAxNCwxMC4yOTEgQzYuNTMzLDEwLjI5MSA1LjMzMywxMS40ODEgNS4zMzMsMTIuOTQ5IEw1LjMzMywzMy43NTcgQzEwLjQ4NSwzOC44OTYgMjIuNTg3LDQwLjU1MiAzMS4wMDgsMzIuNTAwIEMzOS44MzAsMjQuMDY2IDUzLjgyNiwyMy45MzAgNTguNjY3LDIzLjM2NSBMNTguNjY3LDEyLjk0OSBaTTE1LjYwNywyNC43MDQgQzEyLjQyOSwyNC43MDQgOS44NTIsMjIuMTUwIDkuODUyLDE4Ljk5OCBDOS44NTIsMTUuODQ3IDEyLjQyOSwxMy4yOTIgMTUuNjA3LDEzLjI5MiBDMTguNzg2LDEzLjI5MiAyMS4zNjMsMTUuODQ3IDIxLjM2MywxOC45OTggQzIxLjM2MywyMi4xNTAgMTguNzg2LDI0LjcwNCAxNS42MDcsMjQuNzA0IFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K'
const ERROR_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBkPSJNNjAuMzc0LDYwLjAwMCBMMzQuNjM5LDYwLjAwMCBMNDEuMDg4LDQyLjY4MyBMMzQuNTU5LDI5LjcyNSBDNDMuMTUxLDIzLjk0NSA1NC4yNTQsMjMuODc4IDU4LjY0MiwyMy4zNjUgTDU4LjY0MiwxMi45NDkgQzU4LjY0MiwxMS40ODEgNTcuNDQzLDEwLjI5MSA1NS45NjQsMTAuMjkxIEwzNS4wNDIsMTAuMjkxIEwzNy4xNDcsNS4wMDAgTDYwLjM3NCw1LjAwMCBDNjIuMzc3LDUuMDAwIDY0LjAwMSw2LjYxMiA2NC4wMDEsOC41OTkgTDY0LjAwMSw1Ni40MDIgQzY0LjAwMSw1OC4zODkgNjIuMzc3LDYwLjAwMCA2MC4zNzQsNjAuMDAwIFpNOS44NzIsMTguOTk4IEM5Ljg3MiwxNS44NDcgMTIuNDQ2LDEzLjI5MiAxNS42MjIsMTMuMjkyIEMxOC43OTgsMTMuMjkyIDIxLjM3MywxNS44NDcgMjEuMzczLDE4Ljk5OCBDMjEuMzczLDIyLjE1MCAxOC43OTgsMjQuNzA0IDE1LjYyMiwyNC43MDQgQzEyLjQ0NiwyNC43MDQgOS44NzIsMjIuMTUwIDkuODcyLDE4Ljk5OCBaTTMuNjI1LDYwLjAwMCBDMS42MjMsNjAuMDAwIC0wLjAwMSw1OC4zODkgLTAuMDAxLDU2LjQwMiBMLTAuMDAxLDguNTk5IEMtMC4wMDEsNi42MTIgMS42MjMsNS4wMDAgMy42MjUsNS4wMDAgTDI4LjUzMyw1LjAwMCBMMjYuNDI4LDEwLjI5MSBMOC4wMzUsMTAuMjkxIEM2LjU1NiwxMC4yOTEgNS4zNTcsMTEuNDgxIDUuMzU3LDEyLjk0OSBMNS4zNTcsMzMuNzU3IEM3Ljg3MSwzNi4yNjcgMTEuOTE2LDM3LjkwMCAxNi41NTQsMzcuOTAwIEMyMC4zOTUsMzcuOTAwIDI0LjY0MywzNi43NzkgMjguNzYwLDM0LjEwNiBMMzMuMDA2LDQyLjA2NiBMMjYuNjAxLDYwLjAwMCBMMy42MjUsNjAuMDAwIFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K'

function getType (src, isLoad) {
  return isLoad ? 'loadImg' : src ? 'errorImg' : 'emptyImg'
}
// 配置项
const VALUE_KEYS = {
  bgImage: {
    keys: ['emptyImg', 'errorImg', 'loadImg'],
    porperty: 'background-image',
    handle (value) {
      return `url(${value})`
    },
  },
  bgColor: {
    porperty: 'background-color',
    handle (value, def = 'transparent') {
      return value || def
    },
  },
  bgSize: {
    porperty: 'background-size',
    handle (value, def = '50%') {
      return value || def
    },
  },
  bgPosition: {
    porperty: 'background-position',
    handle (value, def = 'center') {
      return value || def
    },
  },
  bgRepeat: {
    porperty: 'background-repeat',
    handle (value, def = 'no-repeat') {
      return value || def
    },
  },
}

class ImgLazyProcessor {
  _commonOption
  _elemOptions
  _mutationObserver
  _mutationOptions
  _intersectionObserver
  _mObserverCb = (records, observer) => {
    records.map((record) => {
      let imgEl = record.target
      if (imgEl._unobserve) {
        return
      }
      let option = this._elemOptions.get(imgEl)
      switch (record.attributeName) {
        case 'src':
          break
        case 'try-reload':
          if (!record.oldValue || record.oldValue === 'true') {
            imgEl.setAttribute('try-reload', 'false')
          } else {
            break
          }
          // eslint-disable-next-line no-fallthrough
        case 'origin-src':
          if (imgEl._isVisible) {
            this._loadImg(imgEl, option)
          } else {
            imgEl._init = false
          }
          break
        case 'style':
          if (imgEl._inside > 0) {
            imgEl._inside -= 1
            break
          }
          // eslint-disable-next-line no-fallthrough
        case 'class':
        default:
          if (imgEl._isVisible) {
            if (imgEl._tips) {
              ImgLazyProcessor.checkElemWH(imgEl)
            }
          } else {
            imgEl._reset = true
          }
          break
      }
    })
  }
  _iObserverCb = (records, observer) => {
    records.map((record) => {
      let imgEl = record.target
      imgEl._isVisible = record.isIntersecting
      let option = this._elemOptions.get(imgEl)
      if (!imgEl._isVisible) {
        return
      }
      if (imgEl._reset) {
        if (imgEl._tips) {
          ImgLazyProcessor.checkElemWH(imgEl)
        }
        imgEl._reset = false
      }
      if (!imgEl._init) {
        this._loadImg(imgEl, option)
        imgEl._init = true
      }
    })
  }

  _loadImg (imgEl, option) {
    let originSrc = (imgEl.getAttribute('origin-src') || '').trim()
    if (!originSrc && imgEl._type === 'emptyImg') {
      return
    }
    this._addTips(imgEl, true)
    if (option.delay) {
      this._setDelayTimer(imgEl, originSrc)
    } else {
      imgEl.setAttribute('src', originSrc)
    }
  }
  // 延时加载图片
  _setDelayTimer = (imgEl, originSrc) => {
    this._clearDelayTimer(imgEl)
    imgEl._timer = setTimeout((imgEl, originSrc) => {
      imgEl.setAttribute('src', originSrc)
    }, this._commonOption.delayTime, imgEl, originSrc)
  }

  _clearDelayTimer = (imgEl) => {
    if (imgEl._timer) {
      clearTimeout(imgEl._timer)
      delete imgEl._timer
    }
  }

  // 图片加载成功触发
  _imgLoad = (e) => {
    let imgEl = e.target
    let src = imgEl.getAttribute('src')
    if (src === PLACEHOLD_IMG) {
      ImgLazyProcessor.checkElemWH(imgEl, this._commonOption.sizeLimit)
    } else {
      this._removeTips(imgEl)
    }
  }
  // 图片加载失败触发
  _imgError = (e) => {
    let imgEl = e.target
    this._addTips(imgEl)
  }

  // 图片去除提示
  _removeTips = (imgEl) => {
    let option = this._elemOptions.get(imgEl)
    if (imgEl._tips) {
      imgEl._tips = false
      imgEl._type = ''
      let tempElem = ImgLazyProcessor.getTempElem(imgEl)
      for (let key in VALUE_KEYS) {
        tempElem.style.removeProperty(VALUE_KEYS[key].porperty)
      }
      if (imgEl._delWidth) {
        tempElem.style.removeProperty('width')
        imgEl._delWidth = false
      }
      if (imgEl._delHeight) {
        tempElem.style.removeProperty('height')
        imgEl._delHeight = false
      }
      if (option.disable) {
        tempElem.style.removeProperty('pointer-events')
      }
      ImgLazyProcessor.checkInside(imgEl, tempElem)
      tempElem = null
    }
  }

  // 图片增加提示
  _addTips = (imgEl, isLoad) => {
    let option = this._elemOptions.get(imgEl)
    let originSrc = (imgEl.getAttribute('origin-src') || '').trim()
    let imgHandleType = getType(originSrc, isLoad)
    if (!imgEl._tips) {
      imgEl._tips = true
      imgEl._type = imgHandleType
      let tempElem = ImgLazyProcessor.getTempElem(imgEl)
      for (let key in VALUE_KEYS) {
        let item = VALUE_KEYS[key]
        if (item.keys) {
          tempElem.style.setProperty(item.porperty, item.handle(option[imgHandleType] || this._commonOption[imgHandleType]))
        } else {
          tempElem.style.setProperty(item.porperty, item.handle(option[key], this._commonOption[key]))
        }
      }
      if (option.disable) {
        tempElem.style.setProperty('pointer-events', 'none')
      }
      ImgLazyProcessor.checkInside(imgEl, tempElem)
      tempElem = null
    } else {
      if (imgEl._type !== imgHandleType) {
        let tempElem = ImgLazyProcessor.getTempElem(imgEl)
        imgEl._type = imgHandleType
        let item = VALUE_KEYS.bgImage
        tempElem.style.setProperty(item.porperty, item.handle(option[imgHandleType] || this._commonOption[imgHandleType]))
        ImgLazyProcessor.checkInside(imgEl, tempElem)
        tempElem = null
      }
    }
    imgEl.setAttribute('src', PLACEHOLD_IMG)
  }

  constructor (commonOption = {}, exFilter = []) {
    this._elemOptions = new WeakMap()
    this._commonOption = {
      loadImg: LOAD_IMG,
      emptyImg: EMPTY_IMG,
      errorImg: ERROR_IMG,
      dataset: false,
      bgColor: 'transparent', // '#aec2d3'
      bgSize: '50%',
      bgPosition: 'center',
      bgRepeat: 'no-repeat',
      delayTime: 300,
      sizeLimit: 2,
      ...commonOption,
    }
    this._mutationOptions = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['origin-src', 'try-reload', 'class', 'style', ...exFilter],
    }
    this._mutationObserver = new MutationObserver(this._mObserverCb)
    this._intersectionObserver = new IntersectionObserver(this._iObserverCb)
  }

  static updDataset (imgEl, option) {
    for (let [key, value] of Object.entries(option)) {
      imgEl.dataset[key] = value
    }
  }

  static delDataset (imgEl, option) {
    for (let key of Object.keys(option)) {
      delete imgEl.dataset[key]
    }
  }

  static getTempElem (imgEl) {
    let tempElem = document.createElement('img')
    tempElem.setAttribute('style', imgEl.getAttribute('style'))
    return tempElem
  }
  static checkInside (imgEl, tempElem) {
    let style = imgEl.getAttribute('style')
    let tempStyle = tempElem.getAttribute('style')
    if (style !== tempStyle) {
      imgEl._inside += 1
      imgEl.setAttribute('style', tempElem.getAttribute('style'))
    }
  }

  static checkElemWH (imgEl, sizeLimit) {
    let tempElem = ImgLazyProcessor.getTempElem(imgEl)
    if (imgEl._delWidth) {
      tempElem.style.removeProperty('width')
      imgEl._delWidth = false
    }
    if (imgEl._delHeight) {
      tempElem.style.removeProperty('height')
      imgEl._delHeight = false
    }
    ImgLazyProcessor.checkInside(imgEl, tempElem)
    let computedStyle = getComputedStyle(imgEl, '')
    let compWidth = computedStyle.width && computedStyle.width.toLocaleLowerCase()
    let compHeight = computedStyle.height && computedStyle.height.toLocaleLowerCase()
    if (ImgLazyProcessor.checkWHLimit(compWidth, sizeLimit)) {
      tempElem.style.setProperty('width', '100%')
      imgEl._delWidth = true
    }
    if (ImgLazyProcessor.checkWHLimit(compHeight, sizeLimit)) {
      tempElem.style.setProperty('height', '100%')
      imgEl._delHeight = true
    }
    ImgLazyProcessor.checkInside(imgEl, tempElem)
    tempElem = null
  }

  static checkWHLimit (size, sizeLimit) {
    let mSize = (size || '-').replace('px', '')
    return isNaN(mSize) || Number(mSize) <= sizeLimit
  }

  // {disable: false, delay: false, 'emptyImg':'', errorImg:'', loadImg: '', bgColor:'', bgSize:'', 'bgPosition': '', bgRepeat: ''}
  observe (imgEl, option) {
    let elemOption = this._elemOptions.get(imgEl)
    if (!(imgEl instanceof HTMLElement) || imgEl.tagName !== 'IMG' || elemOption) {
      return
    }
    imgEl._init = false
    imgEl._reset = true
    imgEl._inside = 0
    imgEl.addEventListener('load', this._imgLoad)
    imgEl.addEventListener('error', this._imgError)
    if (imgEl._unobserve) {
      imgEl._unobserve = false
    } else {
      this._mutationObserver.observe(imgEl, this._mutationOptions)
    }
    this._intersectionObserver.observe(imgEl)
    this.setElemOption(imgEl, option)
  }

  unobserve (imgEl) {
    let option = this._elemOptions.get(imgEl)
    if (!(imgEl instanceof HTMLElement) || imgEl.tagName !== 'IMG' || !option) {
      return
    }
    this._clearDelayTimer(imgEl)
    imgEl.removeEventListener('load', this._imgLoad)
    imgEl.removeEventListener('error', this._imgError)
    imgEl._unobserve = true
    this._intersectionObserver.unobserve(imgEl)
    if (this._commonOption.dataset) {
      ImgLazyProcessor.delDataset(imgEl, option)
    }
    this._removeTips(imgEl)
    this._elemOptions.delete(imgEl)
  }

  setElemOption (imgEl, option = {}) {
    let mixOption = Object.assign(this._elemOptions.get(imgEl) || {}, option)
    this._elemOptions.set(imgEl, mixOption)
    if (this._commonOption.dataset) {
      ImgLazyProcessor.updDataset(imgEl, mixOption)
    }
  }

  destroy () {
    this._mutationObserver.disconnect()
    this._intersectionObserver.disconnect()
  }
}

export default ImgLazyProcessor
