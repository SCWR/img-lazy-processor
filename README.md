# img-lazy-processor

[README-en.md](./README-en.md)

> 通过Mutation Observer和Intersection Observer的现代浏览器Observer API，懒加载img标签，同时对空地址或加载失败情况进行友好提示
> 由于使用了Mutation Observer和Intersection Observer的现代浏览器Observer API，因此需要注意兼容性，Intersection Observer兼容性问题可以使用[intersection-observer](https://www.npmjs.com/package/intersection-observer).
>或者添加本项目中修改过的polyfill [polyfill/intersection-observer.js](./polyfill/intersection-observer.js)

## 使用

```bash
yarn add img-lazy-processor
```

> 直接在HTML中通过\<script> 引用:

```html
  <!-- 下载  dist/img-lazy-processor.min.js -->
  <script src="${path}/img-lazy-processor.min.js"></script>
```

> 使用模块加载

```js
import ImgLazyProcessor from 'img-lazy-processor'
```

```js

/*  html
  ...
  <img id="target" origin-src="src" />
  ...
*/

// js

let elem = document.getElementById('target')

let imgLazyProcessor = new ImgLazyProcessor({
    //全局设置

    // 是否记录状态在dataset上
    dataset: true,

    // emptyImg: '', 提示空地址的图像
    // errorImg: '', 提示错误地址的图像
    // loadImg: '', 加载图片时候的图像

    // bgColor 默认值 transparent
    bgColor: '#aec2d3', // 取值参考 background-color

    // 提示图像(emptyImg, errorImg, loadImg)的大小 默认值 50%
    bgSize: '40%', // 取值参考 background-size

    // 提示图像(emptyImg, errorImg, loadImg)的位置 默认值 center
    bgPosition: 'center', // 取值参考 background-position

    // 提示图像(emptyImg, errorImg, loadImg)的是否重复 (emptyImg, errorImg, loadImg) 默认值 no-repeat
    bgRepeat: 'no-repeat' // 取值参考 background-repeat

    // 是否延迟图片加载, 当快速刷新列表时，不希望浪费资源来加载刷过去的图像时候使用
    delay: false,

    // 延迟时间
    delayTime: 300,

    // 图片错误时候或无图像时是否禁用img上的所有事件, 原理是在元素上添加'pointer-events: none;'
    disable: false
  })

  // 观察img元素
  imgLazyProcessor.observe(elem, {
    //局部设置, 具体参考全局设置
  })

  // 重新设置img元素局部设置
  imgLazyProcessor.setElemOption(elem, option)

  // 取消观察img元素
  imgLazyProcessor.unobserve(elem)

  // 销毁实例
  imgLazyProcessor.destroy()

```

## Author

img-lazy-processor &copy; SCWR, Released under the MIT License.

> GitHub [@SCWR](https://github.com/SCWR)
