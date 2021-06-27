export class Pen {
  constructor (private readonly message: string) { }

  public write (): string {
    return this.message
  }
}
