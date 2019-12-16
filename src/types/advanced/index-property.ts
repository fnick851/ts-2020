// if do not know property name of number of properties

interface ErrorContainer {
  //   name: number // invalid since index prop
  id: string
  [prop: string]: string
}
const errorContainer: ErrorContainer = {
  id: 's',
  1: 'not'
  // hey: 1 // invalid
}
