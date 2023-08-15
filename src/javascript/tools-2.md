---
title: javascript 工具库——类型判断
description: Javascript编写的工具库，集成常见方法，类型判断等
tags:
  - Javascript
  - 工具
head:
  - - meta
    - name: keywords
      content: Javascript, 工具, 工具库, 类型判断
---

# javascript 工具库——类型判断

Javascript 编写的工具库，集成常见方法，类型判断等

## 类型判断 `TypeJudgement`

::: code-group

```javascript
const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1)

/**
 * 判断obj是否为对象
 * @param { * } obj 测试目标
 * @returns obj 是 Object，返回 true
 */
export function isObject(obj) {
  return getType(obj) === 'Object'
}
/**
 * 判断obj是否为数组
 * @param { * } obj 测试目标
 * @returns obj 是 Array，返回 true
 */
export function isArray(obj) {
  return getType(obj) === 'Array'
}
/**
 * 判断obj是否为字符串
 * @param { * } obj 测试目标
 * @returns obj 是 String，返回 true
 */
export function isString(obj) {
  return getType(obj) === 'String'
}
/**
 * 判断obj是否为数字
 * @param { * } obj 测试目标
 * @returns obj 是 Number，返回 true
 */
export function isNumber(obj) {
  return getType(obj) === 'Number' && obj === obj
}
/**
 * 判断obj是否为符号
 * @param { * } obj 测试目标
 * @returns obj 是 Symbol，返回 true
 */
export function isSymbol(obj) {
  return getType(obj) === 'Symbol'
}
/**
 * 判断obj是否为正则表达式
 * @param { * } obj 测试目标
 * @returns obj 是 RegExp，返回 true
 */
export function isRegExp(obj) {
  return getType(obj) === 'RegExp'
}
/**
 * 判断obj是否为文件对象
 * @param { * } obj 测试目标
 * @returns obj 是 File，返回 true
 */
export function isFile(obj) {
  return getType(obj) === 'File'
}
/**
 * 判断obj是否为二进制对象
 * @param { * } obj 测试目标
 * @returns obj 是 Blob，返回 true
 */
export function isBlob(obj) {
  return getType(obj) === 'Blob'
}
/**
 * 判断obj是否为未定义
 * @param { * } obj 测试目标
 * @returns obj 是 undefined，返回 true
 */
export function isUndefined(obj) {
  return obj === undefined
}
/**
 * 判断obj是否为函数
 * @param { * } obj 测试目标
 * @returns obj 是 function，返回 true
 */
export function isFunction(obj) {
  return typeof obj === 'function'
}
/**
 * 判断obj是否为空对象
 * @param { * } obj 测试目标
 * @returns obj 是 Object 且 obj不含任何key，返回 true
 */
export function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0
}
```

```typescript
const getType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1)

/**
 * 判断obj是否为对象
 */
export function isObject(obj: any): obj is { [key: string]: any } {
  return getType(obj) === 'Object'
}
/**
 * 判断obj是否为数组
 */
export function isArray(obj: any): obj is any[] {
  return getType(obj) === 'Array'
}
/**
 * 判断obj是否为字符串
 */
export function isString(obj: any): obj is string {
  return getType(obj) === 'String'
}
/**
 * 判断obj是否为数字
 */
export function isNumber(obj: any): obj is number {
  return getType(obj) === 'Number' && obj === obj
}
/**
 * 判断obj是否为符号
 */
export function isSymbol(obj: any): obj is symbol {
  return getType(obj) === 'Symbol'
}
/**
 * 判断obj是否为正则表达式
 */
export function isRegExp(obj: any) {
  return getType(obj) === 'RegExp'
}
/**
 * 判断obj是否为文件对象
 */
export function isFile(obj: any): obj is File {
  return getType(obj) === 'File'
}
/**
 * 判断obj是否为二进制对象
 */
export function isBlob(obj: any): obj is Blob {
  return getType(obj) === 'Blob'
}
/**
 * 判断obj是否为未定义
 */
export function isUndefined(obj: any): obj is undefined {
  return obj === undefined
}
/**
 * 判断obj是否为函数
 */
export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function'
}
/**
 * 判断obj是否为空对象
 */
export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}
```

:::
