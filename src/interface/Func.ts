interface FnInterface {
  (arg: number): string
}

const Func: FnInterface = (input: number) => {
  return `${input}`
}
