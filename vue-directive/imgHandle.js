/*
 * disable 错误时将阻止img所有事件
 * delay 延时300ms加载图片
 *
 * <img origin-src v-img-handle.disable.delay="{'emptyImg':'', errorImg:'', delayImg: '', backgroundColor:'', backgroundSize:'', 'backgroundPosition': '', backgroundRepeat: ''}"/>
 *
 * render函数
 * return h('img', {originSrc
 *  attrs: { 'origin-src': params.row.eventimage ? params.row.eventimage + '?imageView2/2/w/42/h/42/interlace/1' : '' },
 *  style: {
 *    width: '42px', height: '42px', verticalAlign: 'middle', cursor: 'pointer'
 *  },
 *  //这里添加
 *  directives: [
 *    {name: 'img-handle', value: {'backgroundColor': '#aec2d3'}, modifiers: {'disable': true, 'delay': true}}
 *  ],
 *  on: {
 *    click: () => {
 *      this.cameramodal = true
 *      this.photolist = [params.row.eventimage]
 *    }
 *  }
 *}, '')
 *
 */
import ImgLazyProcessor from '../dist/img-lazy-processor.esm.js'

const imgLazyProcessor = new ImgLazyProcessor({ dataset: true })

export const imgHandle = {

  /**
   * binding：一个对象，包含以下属性：
   *  name：指令名，不包括 v- 前缀。
   *  value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
   *  oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
   *  expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
   *  arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
   *  modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
   */
  bind (el, { value, modifiers }, vnode) {
    // window.console.log('bind')
    if (el.tagName !== 'IMG') {
      return
    }
    let option = Object.assign({}, value, modifiers)
    imgLazyProcessor.observe(el, option)
  },
  inserted (el, binding, vnode) {
    // window.console.log('inserted')
    // if (el.tagName !== 'IMG') {
    //   return
    // }
  },
  update (el, { value, oldValue }, vnode, oldVnode) {
    // window.console.log('update')
    // if (el.tagName !== 'IMG') {
    //   return
    // }
  },
  componentUpdated (el, { value = {}, oldValue = {}, modifiers }, vnode, oldVnode) {
    // window.console.log('componentUpdated')
    if (el.tagName !== 'IMG') {
      return
    }
    let isSame = true
    for (let key of Object.keys(value)) {
      if (value[key] !== oldValue[key]) {
        isSame = false
        break
      }
    }
    if (isSame) {
      return
    }
    let option = Object.assign({}, value, modifiers)
    imgLazyProcessor.setElemOption(el, option)
  },
  unbind (el, binding, vnode) {
    // window.console.log('unbind')
    if (el.tagName !== 'IMG') {
      return
    }
    imgLazyProcessor.unobserve(el)
  },
}

export default function imgHandleInit (Vue) {
  Vue.directive('img-handle', imgHandle)
}
