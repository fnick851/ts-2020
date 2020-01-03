function Logger(logString: string) {
  return function(_: Function) {
    // _ signals the dev is aware of the parameter but will not use it
    // decorator factory
    console.log(logString)
  }
}

@Logger('custom string')
class PersonD {
  name = 'Noah'

  constructor() {
    console.log('creating Person object...')
  }
}

const per = new PersonD()
console.log(per)
