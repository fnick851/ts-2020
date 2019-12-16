class Constructor {
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

// equivalent to
class Constructor1 {
  constructor(public name: string) {}
}

new Constructor('myName')

// singleton pattern implemented with static method and static private property
class Singleton {
  private static instance: Singleton

  private constructor() {}

  static Instantiate() {
    if (this.instance) {
      return this.instance
    }

    this.instance = new Singleton()
    return this.instance
  }

  logging() {
    console.log(`singleton is logging...`)
  }
}

// same instance
const singleton0 = Singleton.Instantiate()
const singleton1 = Singleton.Instantiate()
