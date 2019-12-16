type NumStr = number | string

function func3(a: number): number
function func3(a: string): string
function func3(a: NumStr) {
  return a
}

const result = func3('str')
result.split(' ')
