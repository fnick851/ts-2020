let unknown: unknown // usually a better choice than 'any' since it requires extra check
let anyT: any
let _string: string

unknown = 'string'
unknown = 7
// _string = unknown // error
_string = anyT

if (typeof unknown === 'string') {
  _string = unknown
}
