import Image from "next/image"

interface TeamScoreProps {
  team: {
    name: string
    color: string
    score?: string
    logo?: string
  }
}

export default function TeamScore({ team }: TeamScoreProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-sm flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: team.color }}
        >
          {team.logo ? (
            <Image
              src={team.logo || "/placeholder.svg"}
              alt={team.name}
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-white text-[10px] font-bold">
              {team.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </span>
          )}
        </div>
        <span className="font-medium text-[13px] line-clamp-1">{team.name}</span>
      </div>
      <div className="font-bold text-[13px]">{team.score || ""}</div>
    </div>
  )
}

