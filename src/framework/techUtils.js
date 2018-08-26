export function isClass(v) {
  return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}

export function isFunc(val) {
    return typeof(val) === 'function';
}

export function isObject(val) {
    return typeof(val) === 'object';
}

export function isString(val) {
    return typeof(val) === 'string';
}