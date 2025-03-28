import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface UpcomingMatchCardProps {
  team1: string
  team2: string
  matchType: string
  venue: string
  date: string
  time: string
}

export function UpcomingMatchCard({ team1, team2, matchType, venue, date, time }: UpcomingMatchCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardDescription>{matchType}</CardDescription>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Upcoming
          </Badge>
        </div>
        <CardTitle className="text-lg">
          {team1} vs {team2}
        </CardTitle>
        <CardDescription>{venue}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Date</div>
            <div>{date}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold">Time</div>
            <div>{time}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/matches/upcoming/${team1.toLowerCase()}-vs-${team2.toLowerCase()}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

