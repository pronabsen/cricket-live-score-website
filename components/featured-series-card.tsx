import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, Calendar, CheckCircle } from "lucide-react"

interface FeaturedSeriesCardProps {
  title: string
  subtitle: string
  status: "Live" | "Upcoming" | "Completed"
  matchesPlayed: string
  totalMatches: string
  currentStanding: string
}

export function FeaturedSeriesCard({
  title,
  subtitle,
  status,
  matchesPlayed,
  totalMatches,
  currentStanding,
}: FeaturedSeriesCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardDescription>{subtitle}</CardDescription>
          <Badge
            variant={status === "Live" ? "destructive" : status === "Upcoming" ? "outline" : "secondary"}
            className="flex items-center gap-1"
          >
            {status === "Live" && <Activity className="h-3 w-3" />}
            {status === "Upcoming" && <Calendar className="h-3 w-3" />}
            {status === "Completed" && <CheckCircle className="h-3 w-3" />}
            {status}
          </Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Matches</div>
            <div>
              {matchesPlayed} of {totalMatches}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold">Status</div>
            <div>{currentStanding}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/series/${title.toLowerCase().replace(/\s+/g, "-")}`}>View Series</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

