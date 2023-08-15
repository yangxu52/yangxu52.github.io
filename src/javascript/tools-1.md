---
title: javascript 工具库——防抖、节流、事件
description: Javascript编写的工具库，集成常见方法，节流，防抖，事件等
tags:
  - Javascript
  - 工具
head:
  - - meta
    - name: keywords
      content: Javascript, 工具, 工具库, 防抖, 节流, 事件
---

# javascript 工具库——防抖、节流、事件

Javascript 编写的工具库，集成常见方法，节流，防抖，事件，格式化等

## 防抖 `debounce`

```javascript
/**
 * 防抖函数：多次触发事件，事件处理函数只执行一次，并且在触发操作后执行。
 * 原理：利用闭包原理，就是函数需要在刚完成时需要被使用，赋值给一个变量，由这个变量去使用。
 * @param {Function} callback 回调函数
 * @param {number} wait 延迟时间，默认500ms
 * @param {boolean} immediate 第一次是否立即执行，默认否
 */
export const debounce = (callback, wait = 500, immediate = false) => {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        callback.apply(this, arguments)
      }, wait)
      if (callNow) {
        callback.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        callback.apply(this, arguments)
      }, wait)
    }
  }
}
```

## 节流 `throttle`

```javascript
/**
 * 节流函数：触发操作后，在间隔连续时间内只执行一次，过了规定间隔时间后，才进行下一次调用
 * 原理：对函数进行间隔操作，在规定间隔时间内，如有重复操作，则清除掉本次操作
 * @param {Function} callback
 * @param {number} wait 间隔时间，默认500ms
 * @param {{ leading: boolean, trailing: boolean }} options 配置选项
 *        - leading: false 禁用第一次执行，
 *        - trailing: false 禁用停止触发的回调
 */
export const throttle = (callback, wait = 500, options = {}) => {
  let time, context, args
  let previous = 0
  let later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    time = null
    callback.apply(context, args)
    if (!time) context = args = null
  }
  return function () {
    let now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (time) {
        clearTimeout(time)
        time = null
      }
      previous = now
      callback.apply(context, args)
      if (!time) context = args = null
    } else if (!time && options.trailing !== false) {
      time = setTimeout(later, remaining)
    }
  }
}
```

## 事件注册 `on`

```javascript
/**
 * 事件注册函数：为事件目标注册事件，并且使用防抖函数优化事件触发函数
 * @param {EventTarget} target 事件目标，windows、document、element及其子项是常见的事件目标
 * @param {Event} event 事件 事件类型
 * @param {Function} callback
 */
export const on = (target, event, callback) => {
  if (target instanceof EventTarget) {
    target.addEventListener(event, debounce(callback, 100, true))
  }
}
```

## 事件删除 `off`

```javascript
/**
 * 事件删除函数：为事件目标删除事件，并且使用防抖函数优化事件触发函数
 * @param {EventTarget} target 事件目标，windows、document、element及其子项是常见的事件目标
 * @param {Event} event 事件 事件类型
 * @param {Function} callback
 */
export const off = (target, event, callback) => {
  if (target instanceof EventTarget) {
    target.removeEventListener(event, debounce(callback, 100, true))
  }
}
```
