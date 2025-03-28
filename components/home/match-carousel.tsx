"use client"

import MatchCard from "@/components/match/match-card"
import { Slider } from "@/components/ui/slider"
import type { Match } from "@/types/match"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface MatchCarouselProps {
  matches: Match[]
  title?: string
}

export default function MatchCarousel({ matches, title = "Live Matches" }: MatchCarouselProps) {
  return (
    <div className="container py-4">
      <div className="flex justify-between items-center mb-3 px-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link href="/matches" className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline">
          View All
          <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      <Slider
        itemsPerView={3}
        showIndicators={true}
        autoPlay={true}
        interval={6000}
        className="px-2"
        itemClassName="h-full"
      >
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            id={match.id}
            seriesName={match.seriesName}
            matchNumber={match.matchNumber}
            venue={match.venue}
            team1={match.team1}
            team2={match.team2}
            status={match.status}
            statusText={match.statusText}
            predictions={match.predictions}
            playerOfMatch={match.playerOfMatch}
          />
        ))}
      </Slider>
    </div>
  )
}

