import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

interface TopPlayersCardProps {
  name: string
  country: string
  role: string
  ranking: string
  recentForm: "Excellent" | "Good" | "Average" | "Poor"
}

export function TopPlayersCard({ name, country, role, ranking, recentForm }: TopPlayersCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2 text-center">
        <div className="mx-auto bg-muted rounded-full w-16 h-16 flex items-center justify-center mb-2">
          <User className="h-8 w-8" />
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{country}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-sm">Role</div>
            <div className="font-medium">{role}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">Ranking</div>
            <div className="font-medium">#{ranking}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">Form</div>
            <Badge
              variant={
                recentForm === "Excellent"
                  ? "default"
                  : recentForm === "Good"
                    ? "secondary"
                    : recentForm === "Average"
                      ? "outline"
                      : "destructive"
              }
            >
              {recentForm}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/players/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

