import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Info, Home, ChevronRight } from "lucide-react"

export default function MatchDetailsPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch match data based on the slug
  // For this example, we'll use hardcoded data
  const match = {
    id: "ipl-2025-8",
    seriesName: "Indian Premier League, 2025",
    matchNumber: 8,
    venue: "Chennai",
    date: "28th Mar 2025",
    time: "7:30 PM",
    team1: {
      name: "Royal Challengers Bengaluru",
      shortName: "RCB",
      color: "#D1171C",
      score: "196/7 (20.0)",
      logo: "/placeholder.svg?height=32&width=32",
    },
    team2: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      color: "#F9CD05",
      score: "28/3 (5.3)",
      logo: "/placeholder.svg?height=32&width=32",
    },
    status: "live",
    statusText: "CSK need 169 runs in 87 balls",
    tossResult: "Chennai Super Kings won the toss and elected to field",
    predictions: {
      team1: 96,
      team2: 4,
    },
    headToHead: {
      total: 5,
      team1Wins: 2,
      team2Wins: 3,
      ties: 0,
    },
    batsmen: [
      {
        name: "Rachin Ravindra",
        runs: 34,
        balls: 24,
        strikeRate: "141.66",
        fours: 4,
        sixes: 0,
      },
    ],
    bowlers: [
      {
        name: "Liam Livingstone",
        overs: "1.5",
        runs: 17,
        wickets: 1,
        maidens: 0,
        economy: "9.27",
      },
    ],
    lastOvers: [
      { over: 20, runs: [0, 0, 6, 6, 6, "wd", 0] },
      { over: 19, runs: ["w", 0, 0, "wd", "w", 0, 0] },
    ],
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-[#0a1929] text-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block text-2xl font-bold">
                Cri<span className="text-red-500">c</span>ketScore360
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-6">
              <Link href="/schedule" className="flex items-center gap-1 text-sm font-medium">
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </Link>
              <Link href="/series" className="flex items-center gap-1 text-sm font-medium">
                <Info className="h-4 w-4" />
                <span>Series</span>
              </Link>
              <Link href="/criclytics" className="flex items-center gap-1 text-sm font-medium">
                <span>Criclytics</span>
              </Link>
              <Link href="/fantasy" className="flex items-center gap-1 text-sm font-medium">
                <span>Fantasy Research</span>
              </Link>
              <Link href="/news" className="flex items-center gap-1 text-sm font-medium">
                <span>News</span>
              </Link>
              <Link href="/ipl" className="flex items-center gap-1 text-sm font-medium">
                <span>IPL 2025</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-[#0a1929] text-white py-2">
        <div className="container">
          <div className="flex items-center text-sm text-gray-300">
            <Link href="/" className="hover:text-white">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/schedule" className="hover:text-white">
              Schedule
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>
              {match.team2.shortName} vs {match.team1.shortName}
            </span>
          </div>
        </div>
      </div>

      {/* Match Title */}
      <div className="bg-[#0a1929] text-white py-4">
        <div className="container">
          <h1 className="text-2xl font-bold">
            {match.team1.name} vs {match.team2.name}
          </h1>
          <div className="text-sm text-gray-300 mt-1">{match.seriesName}</div>
        </div>
      </div>

      {/* Match Navigation */}
      <div className="bg-white border-b">
        <div className="container">
          <Tabs defaultValue="match-info" className="w-full">
            <TabsList className="flex h-12 items-center justify-start space-x-4 border-b bg-white p-0 overflow-x-auto">
              <TabsTrigger
                value="match-info"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Match Info
              </TabsTrigger>
              <TabsTrigger
                value="squad"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Squad
              </TabsTrigger>
              <TabsTrigger
                value="commentary"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Commentary
              </TabsTrigger>
              <TabsTrigger
                value="scorecard"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Scorecard
              </TabsTrigger>
              <TabsTrigger
                value="criclytics"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Criclytics
              </TabsTrigger>
              <TabsTrigger
                value="overs"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Overs
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="h-12 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                News
              </TabsTrigger>
            </TabsList>

            <div className="container py-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TabsContent value="match-info" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">{match.seriesName}</div>
                            <div className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-sm font-medium">
                              LIVE
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Match {match.matchNumber} • {match.venue}
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                                  style={{ backgroundColor: match.team1.color }}
                                >
                                  <span className="text-white text-xs font-bold">{match.team1.shortName}</span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{match.team1.name}</div>
                                  <div className="text-lg font-bold">{match.team1.score}</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                                  style={{ backgroundColor: match.team2.color }}
                                >
                                  <span className="text-white text-xs font-bold">{match.team2.shortName}</span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{match.team2.name}</div>
                                  <div className="text-lg font-bold">{match.team2.score}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t">
                            <div className="text-sm text-gray-700">{match.statusText}</div>
                          </div>

                          <div className="mt-4 pt-4 border-t">
                            <div className="text-xs text-gray-500 mb-2">Win Probability</div>
                            <div className="flex w-full h-1.5 rounded-full overflow-hidden bg-gray-200">
                              <div className="bg-red-500 h-full" style={{ width: `${match.predictions.team1}%` }}></div>
                              <div
                                className="bg-yellow-500 h-full"
                                style={{ width: `${match.predictions.team2}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between mt-1">
                              <div className="text-xs">
                                {match.team1.shortName} ({match.predictions.team1}%)
                              </div>
                              <div className="text-xs">
                                {match.team2.shortName} ({match.predictions.team2}%)
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <span>Commentary</span>
                        <Link href="#" className="text-blue-600 text-xs ml-auto">
                          View Full Commentary
                        </Link>
                      </h3>

                      <div className="bg-white rounded-md shadow-sm p-4">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 px-2">Batter</th>
                                <th className="text-center py-2 px-2">R</th>
                                <th className="text-center py-2 px-2">B</th>
                                <th className="text-center py-2 px-2">S/R</th>
                                <th className="text-center py-2 px-2">4s</th>
                                <th className="text-center py-2 px-2">6s</th>
                              </tr>
                            </thead>
                            <tbody>
                              {match.batsmen.map((batter, index) => (
                                <tr key={index} className="border-b">
                                  <td className="py-3 px-2">
                                    <Link href="#" className="text-blue-600 hover:underline">
                                      {batter.name}
                                    </Link>
                                  </td>
                                  <td className="text-center py-3 px-2">{batter.runs}</td>
                                  <td className="text-center py-3 px-2">{batter.balls}</td>
                                  <td className="text-center py-3 px-2">{batter.strikeRate}</td>
                                  <td className="text-center py-3 px-2">{batter.fours}</td>
                                  <td className="text-center py-3 px-2">{batter.sixes}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6">
                          <div className="text-xs text-gray-500 mb-2">
                            P'ship: 26(25)&nbsp;&nbsp;&nbsp;CRR: 5.89&nbsp;&nbsp;&nbsp;RRR: 12.99
                          </div>
                          <div className="text-xs text-gray-500">Reviews Rem: CSK 2, RCB 2</div>
                        </div>

                        <div className="mt-6 overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 px-2">Bowler</th>
                                <th className="text-center py-2 px-2">O</th>
                                <th className="text-center py-2 px-2">R</th>
                                <th className="text-center py-2 px-2">W</th>
                                <th className="text-center py-2 px-2">M</th>
                                <th className="text-center py-2 px-2">ER</th>
                              </tr>
                            </thead>
                            <tbody>
                              {match.bowlers.map((bowler, index) => (
                                <tr key={index} className="border-b">
                                  <td className="py-3 px-2">
                                    <Link href="#" className="text-blue-600 hover:underline">
                                      {bowler.name}
                                    </Link>
                                  </td>
                                  <td className="text-center py-3 px-2">{bowler.overs}</td>
                                  <td className="text-center py-3 px-2">{bowler.runs}</td>
                                  <td className="text-center py-3 px-2">{bowler.wickets}</td>
                                  <td className="text-center py-3 px-2">{bowler.maidens}</td>
                                  <td className="text-center py-3 px-2">{bowler.economy}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="commentary" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold">Detailed Commentary</h3>
                        <div className="flex gap-2">
                          <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-sm">All</button>
                          <button className="text-xs px-3 py-1 rounded-sm">Wickets</button>
                          <button className="text-xs px-3 py-1 rounded-sm">4s</button>
                          <button className="text-xs px-3 py-1 rounded-sm">6s</button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="border-b pb-3">
                          <div className="flex justify-between mb-1">
                            <div className="font-semibold text-sm">Over 20.6</div>
                            <div className="font-bold text-sm">1 run</div>
                          </div>
                          <div className="text-sm">Fuller delivery outside off, driven to cover for a single.</div>
                          <div className="text-xs text-gray-500 mt-1">Starc to Jadeja</div>
                        </div>

                        <div className="border-b pb-3">
                          <div className="flex justify-between mb-1">
                            <div className="font-semibold text-sm">Over 20.5</div>
                            <div className="font-bold text-sm text-green-600">SIX!</div>
                          </div>
                          <div className="text-sm">Short of length, pulled over deep midwicket for a maximum!</div>
                          <div className="text-xs text-gray-500 mt-1">Starc to Jadeja</div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="scorecard" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm p-6">
                      <h3 className="text-sm font-semibold mb-4">Scorecard</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: match.team1.color }}
                            >
                              <span className="text-white text-xs font-bold">{match.team1.shortName}</span>
                            </div>
                            <h4 className="text-sm font-medium">{match.team1.name}</h4>
                            <span className="text-sm font-bold ml-2">{match.team1.score}</span>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-2 px-2">Batter</th>
                                  <th className="text-left py-2 px-2"></th>
                                  <th className="text-center py-2 px-2">R</th>
                                  <th className="text-center py-2 px-2">B</th>
                                  <th className="text-center py-2 px-2">4s</th>
                                  <th className="text-center py-2 px-2">6s</th>
                                  <th className="text-center py-2 px-2">SR</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="py-2 px-2 font-medium">Virat Kohli</td>
                                  <td className="py-2 px-2 text-xs text-gray-500">c Dhoni b Jadeja</td>
                                  <td className="text-center py-2 px-2 font-bold">65</td>
                                  <td className="text-center py-2 px-2">42</td>
                                  <td className="text-center py-2 px-2">6</td>
                                  <td className="text-center py-2 px-2">3</td>
                                  <td className="text-center py-2 px-2">154.76</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="py-2 px-2 font-medium">Faf du Plessis</td>
                                  <td className="py-2 px-2 text-xs text-gray-500">b Chahar</td>
                                  <td className="text-center py-2 px-2 font-bold">38</td>
                                  <td className="text-center py-2 px-2">24</td>
                                  <td className="text-center py-2 px-2">4</td>
                                  <td className="text-center py-2 px-2">2</td>
                                  <td className="text-center py-2 px-2">158.33</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: match.team2.color }}
                            >
                              <span className="text-white text-xs font-bold">{match.team2.shortName}</span>
                            </div>
                            <h4 className="text-sm font-medium">{match.team2.name}</h4>
                            <span className="text-sm font-bold ml-2">{match.team2.score}</span>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-2 px-2">Batter</th>
                                  <th className="text-left py-2 px-2"></th>
                                  <th className="text-center py-2 px-2">R</th>
                                  <th className="text-center py-2 px-2">B</th>
                                  <th className="text-center py-2 px-2">4s</th>
                                  <th className="text-center py-2 px-2">6s</th>
                                  <th className="text-center py-2 px-2">SR</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="py-2 px-2 font-medium">Rachin Ravindra</td>
                                  <td className="py-2 px-2 text-xs text-gray-500">not out</td>
                                  <td className="text-center py-2 px-2 font-bold">34</td>
                                  <td className="text-center py-2 px-2">24</td>
                                  <td className="text-center py-2 px-2">4</td>
                                  <td className="text-center py-2 px-2">0</td>
                                  <td className="text-center py-2 px-2">141.66</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="squad" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm p-6">
                      <h3 className="text-sm font-semibold mb-4">Squad</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: match.team1.color }}
                            >
                              <span className="text-white text-xs font-bold">{match.team1.shortName}</span>
                            </div>
                            <h4 className="text-sm font-medium">{match.team1.name}</h4>
                          </div>
                          <ul className="space-y-2">
                            <li className="text-sm">Faf du Plessis (c)</li>
                            <li className="text-sm">Virat Kohli</li>
                            <li className="text-sm">Glenn Maxwell</li>
                            <li className="text-sm">Rajat Patidar</li>
                            <li className="text-sm">Dinesh Karthik (wk)</li>
                            <li className="text-sm">Cameron Green</li>
                            <li className="text-sm">Mahipal Lomror</li>
                            <li className="text-sm">Karn Sharma</li>
                            <li className="text-sm">Mohammed Siraj</li>
                            <li className="text-sm">Akash Deep</li>
                            <li className="text-sm">Yash Dayal</li>
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: match.team2.color }}
                            >
                              <span className="text-white text-xs font-bold">{match.team2.shortName}</span>
                            </div>
                            <h4 className="text-sm font-medium">{match.team2.name}</h4>
                          </div>
                          <ul className="space-y-2">
                            <li className="text-sm">Ruturaj Gaikwad</li>
                            <li className="text-sm">Rachin Ravindra</li>
                            <li className="text-sm">Ajinkya Rahane</li>
                            <li className="text-sm">Daryl Mitchell</li>
                            <li className="text-sm">Ravindra Jadeja</li>
                            <li className="text-sm">MS Dhoni (wk)</li>
                            <li className="text-sm">Shivam Dube</li>
                            <li className="text-sm">Deepak Chahar</li>
                            <li className="text-sm">Tushar Deshpande</li>
                            <li className="text-sm">Maheesh Theekshana</li>
                            <li className="text-sm">Matheesha Pathirana</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="criclytics" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm p-6">
                      <h3 className="text-sm font-semibold mb-4">Criclytics</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Match Prediction</h4>
                          <div className="flex w-full h-2 rounded-full overflow-hidden bg-gray-200 mb-2">
                            <div className="bg-red-500 h-full" style={{ width: `${match.predictions.team1}%` }}></div>
                            <div
                              className="bg-yellow-500 h-full"
                              style={{ width: `${match.predictions.team2}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <div>
                              {match.team1.shortName}: {match.predictions.team1}%
                            </div>
                            <div>
                              {match.team2.shortName}: {match.predictions.team2}%
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Key Match-Ups</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="text-sm">Virat Kohli vs Deepak Chahar</div>
                              <div className="text-xs text-gray-500">Kohli: 45 runs (32 balls)</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm">MS Dhoni vs Mohammed Siraj</div>
                              <div className="text-xs text-gray-500">Dhoni: 2 dismissals</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="overs" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm p-6">
                      <h3 className="text-sm font-semibold mb-4">Last Overs</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-sm font-medium">Over 20</div>
                            <div className="text-sm">Runs: 19</div>
                          </div>
                          <div className="flex gap-2">
                            {match.lastOvers[0].runs.map((run, index) => (
                              <div
                                key={index}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                                  run === 4
                                    ? "bg-blue-100 text-blue-600"
                                    : run === 6
                                      ? "bg-green-100 text-green-600"
                                      : run === "w"
                                        ? "bg-red-100 text-red-600"
                                        : run === "wd"
                                          ? "bg-yellow-100 text-yellow-600"
                                          : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {run}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-sm font-medium">Over 19</div>
                            <div className="text-sm">Runs: 1</div>
                          </div>
                          <div className="flex gap-2">
                            {match.lastOvers[1].runs.map((run, index) => (
                              <div
                                key={index}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                                  run === 4
                                    ? "bg-blue-100 text-blue-600"
                                    : run === 6
                                      ? "bg-green-100 text-green-600"
                                      : run === "w"
                                        ? "bg-red-100 text-red-600"
                                        : run === "wd"
                                          ? "bg-yellow-100 text-yellow-600"
                                          : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {run}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="news" className="mt-0">
                    <Card className="bg-white rounded-md shadow-sm p-6">
                      <h3 className="text-sm font-semibold mb-4">Match News</h3>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <h4 className="text-sm font-medium mb-1">
                            CSK vs RCB: Another Game, Another MS Dhoni Lightning-Fast Stumping
                          </h4>
                          <div className="text-xs text-gray-500 mb-2">28 Mar 2025</div>
                          <p className="text-sm">
                            MS Dhoni once again showed his lightning-fast reflexes behind the stumps, completing a
                            stunning stumping to dismiss Glenn Maxwell.
                          </p>
                        </div>

                        <div className="border-b pb-4">
                          <h4 className="text-sm font-medium mb-1">Virat Kohli Sets All-Time IPL Record At Chepauk</h4>
                          <div className="text-xs text-gray-500 mb-2">28 Mar 2025</div>
                          <p className="text-sm">
                            Virat Kohli became the highest run-scorer at Chepauk Stadium in IPL history, surpassing
                            Suresh Raina's long-standing record.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                </div>

                <div className="lg:col-span-1">
                  <Card className="bg-white rounded-md shadow-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 border-b bg-gray-50">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Match Details
                        </h3>
                      </div>

                      <div className="p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Date & Time:</span>
                            <span className="font-medium">
                              {match.date}, {match.time}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Match Number:</span>
                            <span className="font-medium">{match.matchNumber}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Toss Result:</span>
                            <span className="font-medium text-green-600">{match.tossResult}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Venue:</span>
                            <span className="font-medium">{match.venue}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-md shadow-sm mt-6 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 border-b bg-gray-50">
                        <h3 className="text-sm font-semibold flex items-center gap-2">Head to Head</h3>
                      </div>

                      <div className="p-4">
                        <div className="text-xs text-gray-600 mb-4">
                          Just the right stats to help you determine which team statistically has the upper hand
                        </div>

                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: match.team1.color }}
                            >
                              <span className="text-white text-[10px] font-bold">{match.team1.shortName}</span>
                            </div>
                            <span className="text-sm">vs</span>
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: match.team2.color }}
                            >
                              <span className="text-white text-[10px] font-bold">{match.team2.shortName}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">*Last 3 years</span>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">No. of Matches</span>
                            <span className="font-medium">{match.headToHead.total}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{match.team1.shortName} won</span>
                            <span className="font-medium">{match.headToHead.team1Wins}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{match.team2.shortName} won</span>
                            <span className="font-medium">{match.headToHead.team2Wins}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Tie</span>
                            <span className="font-medium">{match.headToHead.ties}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-md shadow-sm mt-6 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 border-b bg-gray-50">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                          Last Overs
                          <Link href="#" className="text-blue-600 text-xs ml-auto">
                            View All Overs
                          </Link>
                        </h3>
                      </div>

                      <div className="p-4">
                        <div className="space-y-4">
                          <div>
                            <div className="text-xs text-gray-500 mb-2">Over 20</div>
                            <div className="flex gap-1">
                              {match.lastOvers[0].runs.map((run, index) => (
                                <div
                                  key={index}
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                    run === 4
                                      ? "bg-blue-100 text-blue-600"
                                      : run === 6
                                        ? "bg-green-100 text-green-600"
                                        : run === "w"
                                          ? "bg-red-100 text-red-600"
                                          : run === "wd"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {run}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-gray-500 mb-2">Over 19</div>
                            <div className="flex gap-1">
                              {match.lastOvers[1].runs.map((run, index) => (
                                <div
                                  key={index}
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                    run === 4
                                      ? "bg-blue-100 text-blue-600"
                                      : run === 6
                                        ? "bg-green-100 text-green-600"
                                        : run === "w"
                                          ? "bg-red-100 text-red-600"
                                          : run === "wd"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {run}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

