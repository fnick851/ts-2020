// interface VS type

// interface is used to define an object
// type can be used to define NOT ONLY object

// interface can be implemented by a class
// type cannot

interface Greetable {
  name: string
  fart?: Function
  greet(phrase: string): string
}

interface Smilable {
  readonly age: number
  smile(): void
}

class Person implements Greetable, Smilable {
  age = 1
  fart?: Function

  constructor(public name: string) {
    if (name) {
      this.fart = () => {
        console.log('farting')
      }
    }
  }

  greet(phrase: string) {
    return phrase
  }

  smile() {
    console.log(`smiling...`)
  }
}

const person = new Person('joe')

// interface VS abstract class: abstract class can have some concrete implementations built in
