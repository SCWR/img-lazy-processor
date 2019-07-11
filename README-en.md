# img-lazy-processor

> Through the modern browser Observer API of Mutation Observer and Intersection Observer, lazy loading of img tags and friendly prompts for empty addresses or loading failures
> Because the Mutation Observer and Intersection Observer requires compatibility, the Mutation Observer can reference the [intersection-observer](https://www.npmjs.com/package/intersection-observer).

## Usage

```bash
yarn add img-lazy-processor
```

> Using \<script> tags in the HTML:

```html
  <!-- download  dist/img-lazy-processor.min.js -->
  <script src="${path}/img-lazy-processor.min.js"></script>
```

> Using a module loader

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
import ImgLazyProcessor from 'img-lazy-processor'
let elem = document.getElementById('target')

let imgLazyProcessor = new ImgLazyProcessor({
    //global setting

    // whether to record the status in the dataset
    dataset: true,

    // emptyImg: '', prompt image when no path
    // errorImg: '', prompt image when error
    // loadImg: '', prompt image when load

    // bgColor default transparent
    bgColor: '#aec2d3', // value like background-color

    // bgSize the size of the prompt image (emptyImg, errorImg, loadImg) default 50%
    bgSize: '40%', // value like background-size

    // the position of the prompt image (emptyImg, errorImg, loadImg) default center
    bgPosition: 'center', // value like background-position

    // whether prompt image is repeated (emptyImg, errorImg, loadImg) default no-repeat
    bgRepeat: 'no-repeat'  // value like background-repeat

    // Whether the image is delayed to trigger loading, when you refresh the list quickly, you don't want to waste resources to load the image that was brushed past.
    delay: false,

    // delay time
    delayTime: 300,

    // Image error or no image disables all events, the principle is to add 'pointer-events: none;' to the element
    disable: false
  })

  // observe img element
  imgLazyProcessor.observe(elem, {
    //local setting, specific reference to global settings
  })

  // unobserve img element
  imgLazyProcessor.unobserve(elem)

  // destroy instance
  imgLazyProcessor.destroy()

```

## Author

img-lazy-processor &copy; SCWR, Released under the MIT License.

> GitHub [@SCWR](https://github.com/SCWR)
