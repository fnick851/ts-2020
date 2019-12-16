const input0 = document.querySelector('#an-id')
const input1 = document.querySelector('#an-id')!
const input2 = document.querySelector('#an-id') as HTMLInputElement
const input3 = <HTMLInputElement>document.querySelector('#an-id')

input2.value = 'hi0'
input3.value = 'hi1'
