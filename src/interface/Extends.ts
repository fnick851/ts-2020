interface Named {
  name: string
}

interface HasLeg {
  legs: number
}

interface Animal extends Named, HasLeg {
  howl(): string
}
