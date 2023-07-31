---
title: Vue3 动态表格 基于Element Plus
description: Vue3 基于Element Plus的动态表格组件，数据定义表格
tags:
  - vue3
  - 组件封装
  - Element Plus
  - 动态表格
head:
  - - meta
    - name: keywords
      content: vue3,组件,Element Plus,动态表格
---

# Vue3 Echarts 通用组件

Vue3 基于 Element Plus 的动态表格组件，数据定义表格

## 代码

```vue [vue3 setup javascript]
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  /**
   * 表格配置
   * - 属性
   *   - prop 必填且唯一
   *   - 其他属性参考 ELement Plus-Table 属性
   * - 注意
   *   - 序号列：配置：`{ type: 'index', ··· }`
   *   - 插槽使用：使用对应列以prop为名称的具名插槽`<template #whichColumnWhichProp="···">`
   */
  config: {
    type: Array,
    default: () => [],
  },
  /**
   * 表格数据
   * 显示属性名称与表格配置中每一项prop对应的数据
   */
  list: {
    type: Array,
    default: () => [],
  },
})
// 获取节点的key 基于prop
const getKey = (item) => {
  if (item.type) {
    return `index`
  } else {
    return `${item.prop}`
  }
}
// 获取节点的
const notIndexColumn = (item) => {
  if (item.type && item.type === 'index') {
    return false
  } else {
    return true
  }
}
</script>

<template>
  <el-table :data="props.list" style="width: 100%">
    <el-table-column v-for="item in props.config" :key="getKey(item)" v-bind="item">
      <template v-if="notIndexColumn(item)" #default="scope">
        <slot :name="item.prop" v-bind="scope">{{ scope.row[scope.column.property] }}</slot>
      </template>
    </el-table-column>
  </el-table>
</template>
```

## 注意事项

1. props 之 config 即表格配置，中的 prop 属性必填且唯一
2. 定义序号列，即配置：`{ type: 'index', ··· }`后，可以不写 prop（如果不用该列插槽）

## 说明

1.  序号列：配置：`{ type: 'index', ··· }`
2.  列数据插槽：使用对应列以 prop 为名称的具名插槽，即`<template #whichColumnWhichProp="···">`
