---
title: Vue3 Echarts 通用组件
description: 基于Vue3封装的echarts通用组件，支持自适应父容器大小，响应式数据
tags:
  - vue3
  - 组件封装
  - echarts
head:
  - - meta
    - name: keywords
      content: vue3, 组件, echarts, 自适应, 响应式
---

# Vue3 Echarts 通用组件

基于 Vue3 封装的 echarts 通用组件，支持自适应父容器大小，响应式数据

## 代码

::: code-group

```html [template]
<template>
  <div ref="chartDom" style="width: 100%; height: 100%"></div>
</template>
```

```javascript [script]
import { onMounted, onBeforeUnmount, defineProps, watch, ref, shallowRef } from 'vue'
import * as echarts from 'echarts'
// echarts Dom
const chartDom = ref(null)
// echarts 对象
const chart = shallowRef(null)
// echarts 配置props
const props = defineProps({
  option: {
    type: Object,
    require: true
  }
})
// 防抖函数
const debounce = (method, delay) => {
  var timer = null
  return function () {
    var context = this,
      args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      method.apply(context, args)
    }, delay)
  }
}
// resize处理器
const resizeHandler = () => {
  chart.value.resize()
}
// 使用节流函数处理resize事件
const handleResize = debounce(resizeHandler, 500)
// echarts初始化处理器
const handleInit = () => {
  chart.value = echarts.init(chartDom.value)
  chart.value.setOption(props.option, true)
  window.addEventListener('resize', handleResize)
}
const handleDestroy = () => {
  window.removeEventListener('resize', handleResize)
  chart.value.dispose()
}
// 组件加载初始化
onMounted(() => {
  handleInit()
})
// 组件卸载销毁
onBeforeUnmount(() => {
  handleDestroy()
})
watch(
  () => props.option,
  (value) => {
    chart.value.clear()
    chart.value.setOption(value)
  }
)
```

```css [style]
(empty)
```

:::

## 注意事项

1.  使用 Vue 的 `shallowRef` 对象，而不是 `ref`/`reactive` 对象，用于指向初始化后的 echarts 对象。避免了 Vue 对该对象进行响应式处理。
    - 参考链接 [https://vuejs.org/api/reactivity-advanced.html](https://vuejs.org/api/reactivity-advanced.html)

## 说明

1.  防抖函数可以导入具体项目中 `tools.js` 中的。还可以进一步编写 `on`/`off` 函数，封装 添加/移除事件 与 防抖。
2.  在 echarts 空间较小的情况下，图表四周留白较多十分不美观。可以在传递的 `option` 中修改 `grid` 属性值，来控制留白的大小。

    ```js
    ...
    grid: {
        top: '8%', // 上方留白，默认10%
        left: '3%', // 左侧留白，默认10%
        right: '4%', // 右侧留白，默认10%
        bottom: '8%', // 下方留白，默认10%
        containLabel: true //是否包含题注，默认是
    }
    ...
    ```
