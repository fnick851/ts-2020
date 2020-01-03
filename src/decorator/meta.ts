// won't run with Node

function WithTemplate<T extends { new (...args: any[]): { name: string } }>(
  template: string,
  hookId: string
) {
  // meta programming example
  return function(constructor: T) {
    const hookEl = document.querySelector(hookId)
    const per = new constructor()
    if (hookEl) hookEl.innerHTML = template
    hookEl!.querySelector('h1')!.textContent = per.name
  }
}

@WithTemplate(`<h1>My Person Object</h1>`, '#app')
class PersonM {
  name = 'noah'
}
