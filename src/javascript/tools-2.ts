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
