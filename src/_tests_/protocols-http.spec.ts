import { InvalidadArgument } from '../errors/invalid-arg'
import { UrlLogin, UrlUser } from '../protocols/protocols-http'

describe('Protocols Http and Querys', () => {
  test('Url login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:8080/login')

    expect(parseUrl.href).toEqual('http://localhost:8080/login')
    expect(parseUrl.port).toBe('8080')
  })

  test('Response Query', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:8080/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }

    expect(parseUrl.searchParams.get('user')).toEqual(expectAuth.user)
    expect(parseUrl.searchParams.get('password')).toEqual(expectAuth.password)
  })

  test('Url User', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:8080/login')

    expect(parseUrl.href).toEqual('http://localhost:8080/login')
    expect(parseUrl.port).toBe('8080')
  })

  test('Response Query', () => {
    const parseUrl = UrlUser.parseUrl('http://localhost:8080/login?user=user&password=password&name=name&lastname=lastname')
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }

    expect(parseUrl.searchParams.get('user')).toEqual(expectAuth.user)
    expect(parseUrl.searchParams.get('password')).toEqual(expectAuth.password)
    expect(parseUrl.searchParams.get('name')).toEqual(expectAuth.name)
    expect(parseUrl.searchParams.get('lastname')).toEqual(expectAuth.lastname)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidadArgument(''))
  })
})
