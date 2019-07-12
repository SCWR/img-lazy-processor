(function () {
  'use strict'
  // Judgment method from https://github.com/w3c/IntersectionObserver
  if (typeof window !== 'object') {
    return
  }
  if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype) {
    return
  }
  console.warn && console.warn('The browser does not support the IntersectionObserver API. You can add polyfill(https://github.com/w3c/IntersectionObserver) or [npm install intersection-observer] to solve this problem' +
  'or add (polyfill/intersection-observer.js) in this project ')
})()
