export class InvalidadArgument extends Error {
  constructor (public arg: string) {
    super(`Invalid Argument: ${arg}`)
  }
}
