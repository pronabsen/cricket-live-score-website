import Image from "next/image"

interface PlayerOfMatchProps {
  player: {
    name: string
    team: string
    image?: string
  }
}

export default function PlayerOfMatch({ player }: PlayerOfMatchProps) {
  return (
    <div className="mt-3 pt-2 border-t border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded-full overflow-hidden">
          <Image
            src={player.image || "/placeholder.svg?height=50&width=50"}
            alt={player.name}
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-[10px] text-gray-500">Player of the match</div>
          <div className="text-[11px] font-medium">
            {player.name} - {player.team}
          </div>
        </div>
      </div>
    </div>
  )
}

