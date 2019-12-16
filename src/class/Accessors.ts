class Accessors {
  constructor(
    public name: string,
    private age: number,
    protected salary: number
  ) {}

  getAge() {
    console.log(this.age)
  }

  getSalary() {
    console.log(this.salary)
  }

  get theSalary() {
    return this.salary
  }

  set theSalary(_salary: number) {
    this.salary = _salary
  }

  static yell() {
    console.log(`I am not rich!`)
  }
}
