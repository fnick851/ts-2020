const neverReturn2 = (message: string, code: number) => {
  throw { message, code }
} // return 'never' type by default since it crashes the script

const neverReturn = (message: string, code: number): void => {
  throw { message, code }
} // works too

const neverReturn1 = (message: string, code: number): never => {
  throw { message, code }
}

const neverReturn3 = () => {
  while (true) {}
} // also return 'never' since it breaks the program
