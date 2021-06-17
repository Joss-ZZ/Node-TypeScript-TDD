import { URL } from 'url'
import { InvalidadArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): URL {
    if (!url) {
      throw new InvalidadArgument(url)
    }
    return new URL(url)
  }
}

export class UrlUser {
  public static parseUrl (url: string): URL {
    return new URL(url)
  }
}
