function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

function extract<T extends Object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`
}
