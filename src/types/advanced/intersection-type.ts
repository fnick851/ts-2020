type TA = {
  name: string
  propA: number
}

type TB = {
  name: string
  propB: string
}

type TC = TA & TB

const cVar: TC = {
  name: 'name',
  propA: 0,
  propB: 'string'
}

interface IA {
  name: string
  propA: string
}

interface IB {
  name: string
  propB: number
}

const iVar0: IA & IB = {
  name: 'name',
  propA: 'string',
  propB: 0
}

interface IC extends IA, IB {}

const iVar1: IC = {
  name: 'name',
  propA: 'string',
  propB: 1
}
