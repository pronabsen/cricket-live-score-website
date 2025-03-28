import type { MatchStatus } from "@/types/match"

interface MatchInfoProps {
  status: MatchStatus
  statusText: string
}

export default function MatchInfo({ status, statusText }: MatchInfoProps) {
  return (
    <div className="mt-3 pt-2 border-t border-gray-100">
      <div className="text-[11px] text-gray-600 line-clamp-2">{statusText}</div>
    </div>
  )
}

