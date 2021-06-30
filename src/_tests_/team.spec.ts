import { Team } from '../models/team-model'

describe('Team Class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'portero',
      tShirt: 1,
      skills: ['Patear Fuerte', 'Ser alto', 'Correr Rápido']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['portero', 1, ['Patear Fuerte', 'Ser alto', 'Correr Rápido']])
  })

  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'Defensa',
      tShirt: 2,
      skills: ['Patear Fuerte', 'Ser alto']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['Defensa', 2, ['Patear Fuerte', 'Ser alto']])
  })

  it('Soccer Play', () => {
    const soccerPlay = new Team()

    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
