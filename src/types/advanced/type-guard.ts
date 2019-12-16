type Combinable = string | number

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type Admin = {
  name: string
  salary: number
  admin: boolean
}
class Employee {
  constructor(public name: string, public skill: string) {}
}
type PromotedEmployee = Admin | Employee

const printEmployeeInfo = (empl: PromotedEmployee) => {
  if ('admin' in empl) {
    console.log(empl.admin)
  }
  if (empl instanceof Employee) {
    console.log(empl.skill)
  }
}
