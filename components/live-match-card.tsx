import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface LiveMatchCardProps {
  team1: string
  team2: string
  team1Score: string
  team2Score: string
  matchStatus: string
  matchType: string
}

export function LiveMatchCard({ team1, team2, team1Score, team2Score, matchStatus, matchType }: LiveMatchCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs text-gray-500">{matchType}</div>
          <div className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="font-semibold">{team1}</div>
            <div className="font-bold">{team1Score}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold">{team2}</div>
            <div className="font-bold">{team2Score}</div>
          </div>
          <div className="text-xs text-gray-600">{matchStatus}</div>
        </div>
        <div className="mt-3 pt-2 border-t border-gray-100">
          <Link
            href={`/matches/live/${team1.toLowerCase()}-vs-${team2.toLowerCase()}`}
            className="text-blue-600 text-xs font-medium"
          >
            View Match Details
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

