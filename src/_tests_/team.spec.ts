import { Team } from '../models/team-model'
describe('Team Class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'portero',
      tShirt: 1,
      skills: ['Patear Fuerte', 'Ser alto', 'Correr Rápido']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['Patear Fuerte', 1, ['Patear Fuerte', 'Ser alto', 'Correr Rápido']])
  })
})
