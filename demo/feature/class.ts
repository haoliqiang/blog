class Animal {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}
