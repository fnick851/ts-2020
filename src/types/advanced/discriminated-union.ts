type Bird = {
  type: 'bird'
  flySpeed: number
}

type Horse = {
  type: 'horse'
  runSpeed: number
}

type Creature = Bird | Horse

const logCreature = (animal: Creature) => {

  switch (animal.type) {
    case 'bird':
        console.log(animal.flySpeed)
        break;
    case 'horse':
        console.log(animal.runSpeed)
        break;
  }
}
