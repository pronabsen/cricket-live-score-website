import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface RecentMatchCardProps {
  team1: string
  team2: string
  team1Score: string
  team2Score: string
  result: string
  matchType: string
  venue: string
  date: string
}

export function RecentMatchCard({
  team1,
  team2,
  team1Score,
  team2Score,
  result,
  matchType,
  venue,
  date,
}: RecentMatchCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardDescription>{matchType}</CardDescription>
          <Badge variant="secondary" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        </div>
        <CardTitle className="text-lg">
          {team1} vs {team2}
        </CardTitle>
        <CardDescription>
          {venue} • {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="font-semibold">{team1}</div>
            <div>{team1Score}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold">{team2}</div>
            <div>{team2Score}</div>
          </div>
          <div className="text-sm font-medium">{result}</div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/matches/recent/${team1.toLowerCase()}-vs-${team2.toLowerCase()}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

