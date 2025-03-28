import Link from "next/link"

interface MatchLinksProps {
  matchId: string
  team1: string
  team2: string
  showFantasy?: boolean
}

export default function MatchLinks({ matchId, team1, team2, showFantasy = true }: MatchLinksProps) {
  const slug = `${team1.toLowerCase().replace(/\s+/g, "-")}-vs-${team2.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between">
      {showFantasy && (
        <Link href={`/fantasy/${matchId}`} className="text-blue-600 text-[11px] font-medium">
          Fantasy
        </Link>
      )}
      <Link href={`/schedule/${matchId}`} className="text-blue-600 text-[11px] font-medium">
        Schedule
      </Link>
      <Link href="/points-table" className="text-blue-600 text-[11px] font-medium">
        Points Table
      </Link>
    </div>
  )
}

