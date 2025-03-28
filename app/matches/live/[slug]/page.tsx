import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Clock, MapPin } from "lucide-react"

export default function LiveMatchDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch match data based on the slug
  // For this example, we'll use hardcoded data for India vs Australia
  const match = {
    team1: "India",
    team2: "Australia",
    team1Score: "245/6 (45 ov)",
    team2Score: "Yet to bat",
    matchStatus: "India won the toss and elected to bat",
    matchType: "3rd ODI",
    venue: "Sydney Cricket Ground",
    date: "Mar 27, 2025",
    time: "09:30 AM",
    series: "India tour of Australia, 2025",
    seriesStatus: "3-match series level 1-1",
    commentary: [
      {
        over: "45.6",
        description: "Fuller delivery outside off, driven to cover for a single.",
        bowler: "Starc",
        batsman: "Jadeja",
        runs: 1,
      },
      {
        over: "45.5",
        description: "Short of length, pulled to deep midwicket for two runs.",
        bowler: "Starc",
        batsman: "Jadeja",
        runs: 2,
      },
      {
        over: "45.4",
        description: "Yorker on middle stump, dug out to mid-on.",
        bowler: "Starc",
        batsman: "Jadeja",
        runs: 0,
      },
      {
        over: "45.3",
        description: "Full toss, driven straight back past the bowler for FOUR!",
        bowler: "Starc",
        batsman: "Jadeja",
        runs: 4,
      },
      { over: "45.2", description: "Bouncer, ducked under it.", bowler: "Starc", batsman: "Jadeja", runs: 0 },
      {
        over: "45.1",
        description: "Good length on off stump, defended back to the bowler.",
        bowler: "Starc",
        batsman: "Jadeja",
        runs: 0,
      },
      {
        over: "44.6",
        description: "Slower ball, pushed to cover for a quick single.",
        bowler: "Cummins",
        batsman: "Pant",
        runs: 1,
      },
      {
        over: "44.5",
        description: "Short ball, pulled to deep square leg for a couple.",
        bowler: "Cummins",
        batsman: "Pant",
        runs: 2,
      },
      {
        over: "44.4",
        description: "Full and wide, slashed through point for FOUR!",
        bowler: "Cummins",
        batsman: "Pant",
        runs: 4,
      },
      { over: "44.3", description: "Good length, defended solidly.", bowler: "Cummins", batsman: "Pant", runs: 0 },
    ],
    scorecard: {
      batting: [
        {
          name: "Rohit Sharma",
          status: "c Smith b Hazlewood",
          runs: 45,
          balls: 52,
          fours: 5,
          sixes: 2,
          strikeRate: 86.54,
        },
        { name: "Shubman Gill", status: "b Cummins", runs: 32, balls: 41, fours: 4, sixes: 0, strikeRate: 78.05 },
        { name: "Virat Kohli", status: "c Carey b Starc", runs: 85, balls: 96, fours: 8, sixes: 1, strikeRate: 88.54 },
        { name: "Shreyas Iyer", status: "lbw b Zampa", runs: 12, balls: 18, fours: 1, sixes: 0, strikeRate: 66.67 },
        { name: "KL Rahul", status: "run out (Maxwell)", runs: 28, balls: 35, fours: 2, sixes: 1, strikeRate: 80.0 },
        { name: "Rishabh Pant", status: "not out", runs: 24, balls: 20, fours: 3, sixes: 0, strikeRate: 120.0 },
        { name: "Ravindra Jadeja", status: "not out", runs: 15, balls: 10, fours: 1, sixes: 1, strikeRate: 150.0 },
      ],
      bowling: [
        { name: "Mitchell Starc", overs: "9", maidens: "0", runs: "52", wickets: "1", economy: "5.78" },
        { name: "Josh Hazlewood", overs: "10", maidens: "1", runs: "48", wickets: "1", economy: "4.80" },
        { name: "Pat Cummins", overs: "10", maidens: "0", runs: "55", wickets: "1", economy: "5.50" },
        { name: "Adam Zampa", overs: "10", maidens: "0", runs: "58", wickets: "1", economy: "5.80" },
        { name: "Glenn Maxwell", overs: "6", maidens: "0", runs: "32", wickets: "0", economy: "5.33" },
      ],
    },
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-2">{match.series}</div>
        <h1 className="text-3xl font-bold mb-2">
          {match.team1} vs {match.team2}
        </h1>
        <div className="text-sm text-muted-foreground mb-4">{match.seriesStatus}</div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-1 text-sm">
            <Activity className="h-4 w-4 text-red-500" />
            <span>Live</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4" />
            <span>
              {match.date}, {match.time}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{match.venue}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4" />
            <span>{match.matchType}</span>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-xl font-semibold">{match.team1}</div>
                <div className="text-3xl font-bold">{match.team1Score}</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold">{match.team2}</div>
                <div className="text-3xl font-bold">{match.team2Score}</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="text-sm">{match.matchStatus}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="commentary" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="commentary">Commentary</TabsTrigger>
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="info">Match Info</TabsTrigger>
        </TabsList>

        <TabsContent value="commentary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Commentary</CardTitle>
              <CardDescription>Latest updates from the match</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {match.commentary.map((item, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <div className="flex justify-between mb-1">
                      <div className="font-semibold">Over {item.over}</div>
                      <div className={`font-bold ${item.runs === 4 || item.runs === 6 ? "text-green-600" : ""}`}>
                        {item.runs === 0
                          ? "No run"
                          : item.runs === 4
                            ? "FOUR!"
                            : item.runs === 6
                              ? "SIX!"
                              : `${item.runs} run${item.runs > 1 ? "s" : ""}`}
                      </div>
                    </div>
                    <div className="text-sm">{item.description}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.bowler} to {item.batsman}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorecard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{match.team1} Innings</CardTitle>
              <CardDescription>{match.team1Score}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Batter</th>
                      <th className="text-left py-3 px-2"></th>
                      <th className="text-center py-3 px-2">R</th>
                      <th className="text-center py-3 px-2">B</th>
                      <th className="text-center py-3 px-2">4s</th>
                      <th className="text-center py-3 px-2">6s</th>
                      <th className="text-center py-3 px-2">SR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {match.scorecard.batting.map((batter, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-2 font-medium">{batter.name}</td>
                        <td className="py-3 px-2 text-sm text-muted-foreground">{batter.status}</td>
                        <td className="text-center py-3 px-2 font-bold">{batter.runs}</td>
                        <td className="text-center py-3 px-2">{batter.balls}</td>
                        <td className="text-center py-3 px-2">{batter.fours}</td>
                        <td className="text-center py-3 px-2">{batter.sixes}</td>
                        <td className="text-center py-3 px-2">{batter.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 overflow-x-auto">
                <h3 className="font-semibold mb-4">Bowling</h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Bowler</th>
                      <th className="text-center py-3 px-2">O</th>
                      <th className="text-center py-3 px-2">M</th>
                      <th className="text-center py-3 px-2">R</th>
                      <th className="text-center py-3 px-2">W</th>
                      <th className="text-center py-3 px-2">Econ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {match.scorecard.bowling.map((bowler, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-2 font-medium">{bowler.name}</td>
                        <td className="text-center py-3 px-2">{bowler.overs}</td>
                        <td className="text-center py-3 px-2">{bowler.maidens}</td>
                        <td className="text-center py-3 px-2">{bowler.runs}</td>
                        <td className="text-center py-3 px-2 font-bold">{bowler.wickets}</td>
                        <td className="text-center py-3 px-2">{bowler.economy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Match Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Match Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Series</span>
                        <span>{match.series}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Match</span>
                        <span>{match.matchType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date & Time</span>
                        <span>
                          {match.date}, {match.time}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Venue</span>
                        <span>{match.venue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toss</span>
                        <span>India, elected to bat</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Playing XIs</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">{match.team1}</h4>
                        <p className="text-sm">
                          Rohit Sharma (c), Shubman Gill, Virat Kohli, Shreyas Iyer, KL Rahul, Rishabh Pant (wk),
                          Ravindra Jadeja, Washington Sundar, Kuldeep Yadav, Mohammed Siraj, Jasprit Bumrah
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">{match.team2}</h4>
                        <p className="text-sm">
                          David Warner, Travis Head, Steven Smith, Marnus Labuschagne, Glenn Maxwell, Mitchell Marsh,
                          Alex Carey (wk), Pat Cummins (c), Mitchell Starc, Adam Zampa, Josh Hazlewood
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Match Officials</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">On-field Umpires</span>
                      <span>Richard Kettleborough, Michael Gough</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Third Umpire</span>
                      <span>Joel Wilson</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Match Referee</span>
                      <span>Ranjan Madugalle</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

