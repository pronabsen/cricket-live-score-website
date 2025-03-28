interface MatchPredictionProps {
  team1: {
    name: string
    percentage: number
  }
  team2: {
    name: string
    percentage: number
  }
  tie?: number
}

export default function MatchPrediction({ team1, team2, tie }: MatchPredictionProps) {
  return (
    <div className="mt-3 pt-2 border-t border-gray-100">
      <div className="text-[10px] text-gray-500 mb-1">Win Probability</div>
      <div className="flex w-full h-1.5 rounded-full overflow-hidden bg-gray-200">
        <div className="bg-red-500 h-full" style={{ width: `${team1.percentage}%` }}></div>
        {tie !== undefined && tie > 0 && <div className="bg-blue-500 h-full" style={{ width: `${tie}%` }}></div>}
        <div className="bg-green-500 h-full" style={{ width: `${team2.percentage}%` }}></div>
      </div>
      <div className="flex justify-between mt-1">
        <div className="text-[10px]">
          {team1.name} ({team1.percentage}%)
        </div>
        {tie !== undefined && tie > 0 && <div className="text-[10px]">TIE ({tie}%)</div>}
        <div className="text-[10px]">
          {team2.name} ({team2.percentage}%)
        </div>
      </div>
    </div>
  )
}

