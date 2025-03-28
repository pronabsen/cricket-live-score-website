import Link from "next/link"
import type { MatchStatus } from "@/types/match"
import LiveBadge from "@/components/ui/live-badge"
import TeamScore from "@/components/match/team-score"
import MatchInfo from "@/components/match/match-info"
import MatchPrediction from "@/components/match/match-prediction"
import MatchLinks from "@/components/match/match-links"
import PlayerOfMatch from "@/components/match/player-of-match"
import { cn } from "@/lib/utils"

interface MatchCardProps {
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
  className?: string
}

export default function MatchCard({
  id,
  seriesName,
  matchNumber,
  venue,
  team1,
  team2,
  status,
  statusText,
  predictions,
  playerOfMatch,
  className,
}: MatchCardProps) {
  const matchSlug = `${team1.name.toLowerCase().replace(/\s+/g, "-")}-vs-${team2.name.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <Link href={`/matches/${matchSlug}`}>
      <div
        className={cn(
          "bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 h-[280px] flex flex-col",
          className,
        )}
      >
        <div className="p-3 sm:p-4 flex flex-col flex-1">
          <div className="flex justify-between items-center mb-2">
            <div className="text-[11px] text-gray-600 font-medium">
              <span className="line-clamp-1">{seriesName}</span>
              <div className="flex items-center gap-1 text-[11px] mt-0.5">
                <span>Match {matchNumber}</span>
                <span>•</span>
                <span className="line-clamp-1">{venue}</span>
              </div>
            </div>
            {status === "live" && <LiveBadge />}
          </div>

          <div className="space-y-3 mt-3">
            <TeamScore team={team1} />
            <TeamScore team={team2} />
          </div>

          <MatchInfo status={status} statusText={statusText} />

          {playerOfMatch && status === "completed" && <PlayerOfMatch player={playerOfMatch} />}

          {predictions && (
            <MatchPrediction
              team1={{ name: team1.shortName, percentage: predictions.team1 }}
              team2={{ name: team2.shortName, percentage: predictions.team2 }}
              tie={predictions.tie}
            />
          )}

          <div className="mt-auto">
            <MatchLinks matchId={id} team1={team1.name} team2={team2.name} showFantasy={status !== "completed"} />
          </div>
        </div>
      </div>
    </Link>
  )
}

