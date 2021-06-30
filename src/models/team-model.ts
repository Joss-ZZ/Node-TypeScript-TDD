import { ITeam, ISoccerPlay } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlay {
  position (name: string, tShirt: number, skills: any[]) {
    return [
      name, tShirt, skills
    ]
  }

  attacker (name: string) {
    name = 'attacker'
    return name
  }
}
