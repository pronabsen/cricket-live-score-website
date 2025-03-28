export type MatchStatus = "live" | "upcoming" | "completed"

export interface Match {
  id: string
  seriesName: string
  matchNumber: number
  venue: string
  team1: {
    name: string
    shortName: string
    color: string
    score?: string
    logo?: string
  }
  team2: {
    name: string
    shortName: string
    color: string
    score?: string
    logo?: string
  }
  status: MatchStatus
  statusText: string
  predictions?: {
    team1: number
    team2: number
    tie?: number
  }
  playerOfMatch?: {
    name: string
    team: string
    image?: string
  }
}

