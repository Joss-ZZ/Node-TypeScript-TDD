import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public ibird: IBird) {
    Object.assign(this, ibird)
  }

  fly () {
    return this.ibird.name
  }
}

export class Eagle extends Bird {
  fly () {
    return this.ibird.name
  }
}

export class Penguin extends Bird {
  fly (): any {
    return new Error('No puede volar')
  }

  walk () {
    return 'Puedo caminar'
  }

  swim () {
    return 'Puedo nadar'
  }
}
