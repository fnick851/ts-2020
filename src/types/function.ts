let func = (input: string): void => {
  console.log(input)
}

let func1: Function

func1 = func

let func2: (input: string) => void

func2 = func

const funcWithCallback = (
  a: number,
  b: number,
  callback: (c: number, d: number) => void // TS won't check for callback return type
): void => {
  callback(a, b)
}

const cb = (arg: number, arg1: number): number => arg + arg1

funcWithCallback(1, 2, cb)
