class GClass<T> {
  constructor(public prop: T) {}

  set setProp(val: T) {
    this.prop = val
  }
}
