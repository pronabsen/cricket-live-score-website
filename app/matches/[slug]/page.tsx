import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { liveMatches } from "@/data/matches"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Info } from "lucide-react"

export default function MatchDetailsPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch match data based on the slug
  // For this example, we'll find a match from our sample data
  const match = liveMatches.find((m) => {
    const matchSlug = `${m.team1.name.toLowerCase().replace(/\s+/g, "-")}-vs-${m.team2.name.toLowerCase().replace(/\s+/g, "-")}`
    return matchSlug === params.slug
  })

  if (!match) {
    notFound()
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
              {/* Other nav items */}
            </nav>
          </div>
        </div>
      </header>

      {/* Match Title */}
      <div className="bg-[#0a1929] text-white py-4">
        <div className="container">
          <Link href="/matches" className="inline-flex items-center text-[11px] text-gray-300 mb-2 hover:text-white">
            <ArrowLeft className="h-3 w-3 mr-1" />
            Back to matches
          </Link>
          <h1 className="text-lg font-medium">
            {match.team1.name} vs {match.team2.name}
          </h1>
          <div className="flex items-center gap-2 text-[11px] text-gray-300 mt-1">
            <span>{match.seriesName}</span>
            <span>•</span>
            <span>Match {match.matchNumber}</span>
            <span>•</span>
            <span>{match.venue}</span>
          </div>
        </div>
      </div>

      {/* Match Navigation */}
      <div className="bg-white border-b">
        <div className="container">
          <Tabs defaultValue="match-info" className="w-full">
            <TabsList className="flex h-10 items-center justify-start space-x-4 border-b bg-white p-0">
              <TabsTrigger
                value="match-info"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Match Info
              </TabsTrigger>
              <TabsTrigger
                value="squad"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Squad
              </TabsTrigger>
              <TabsTrigger
                value="commentary"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Commentary
              </TabsTrigger>
              <TabsTrigger
                value="scorecard"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Scorecard
              </TabsTrigger>
              <TabsTrigger
                value="criclytics"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Criclytics
              </TabsTrigger>
              <TabsTrigger
                value="overs"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                Overs
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="h-10 rounded-none border-b-2 border-transparent px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black data-[state=active]:border-blue-600 data-[state=active]:text-black"
              >
                News
              </TabsTrigger>
            </TabsList>

            <div className="container py-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TabsContent value="match-info" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <h3 className="text-[13px] font-semibold mb-4">Match Summary</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                                  style={{ backgroundColor: match.team1.color }}
                                >
                                  {match.team1.logo ? (
                                    <Image
                                      src={match.team1.logo || "/placeholder.svg"}
                                      alt={match.team1.name}
                                      width={32}
                                      height={32}
                                      className="w-8 h-8 object-contain"
                                    />
                                  ) : (
                                    <span className="text-white text-xs font-bold">{match.team1.shortName}</span>
                                  )}
                                </div>
                                <div>
                                  <div className="text-[13px] font-medium">{match.team1.name}</div>
                                  <div className="text-[15px] font-bold">{match.team1.score || "-"}</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                                  style={{ backgroundColor: match.team2.color }}
                                >
                                  {match.team2.logo ? (
                                    <Image
                                      src={match.team2.logo || "/placeholder.svg"}
                                      alt={match.team2.name}
                                      width={32}
                                      height={32}
                                      className="w-8 h-8 object-contain"
                                    />
                                  ) : (
                                    <span className="text-white text-xs font-bold">{match.team2.shortName}</span>
                                  )}
                                </div>
                                <div>
                                  <div className="text-[13px] font-medium">{match.team2.name}</div>
                                  <div className="text-[15px] font-bold">{match.team2.score || "-"}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t">
                            <div className="text-[13px] text-gray-700">{match.statusText}</div>
                          </div>

                          {match.predictions && (
                            <div className="mt-4 pt-4 border-t">
                              <div className="text-[11px] text-gray-500 mb-2">Win Probability</div>
                              <div className="flex w-full h-1.5 rounded-full overflow-hidden bg-gray-200">
                                <div
                                  className="bg-red-500 h-full"
                                  style={{ width: `${match.predictions.team1}%` }}
                                ></div>
                                {match.predictions.tie !== undefined && match.predictions.tie > 0 && (
                                  <div
                                    className="bg-blue-500 h-full"
                                    style={{ width: `${match.predictions.tie}%` }}
                                  ></div>
                                )}
                                <div
                                  className="bg-green-500 h-full"
                                  style={{ width: `${match.predictions.team2}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between mt-1">
                                <div className="text-[11px]">
                                  {match.team1.shortName} ({match.predictions.team1}%)
                                </div>
                                {match.predictions.tie !== undefined && match.predictions.tie > 0 && (
                                  <div className="text-[11px]">TIE ({match.predictions.tie}%)</div>
                                )}
                                <div className="text-[11px]">
                                  {match.team2.shortName} ({match.predictions.team2}%)
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="md:w-64 flex-shrink-0">
                          <h3 className="text-[13px] font-semibold mb-4">Key Stats</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between text-[13px]">
                              <span className="text-gray-600">Run Rate</span>
                              <span className="font-medium">9.80</span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                              <span className="text-gray-600">Boundaries</span>
                              <span className="font-medium">24 (18x4, 6x6)</span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                              <span className="text-gray-600">Dot Balls</span>
                              <span className="font-medium">38 (31.7%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="commentary" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-[13px] font-semibold">Detailed Commentary</h3>
                        <div className="flex gap-2">
                          <button className="bg-blue-600 text-white text-[11px] px-3 py-1 rounded-sm">All</button>
                          <button className="text-[11px] px-3 py-1 rounded-sm">Wickets</button>
                          <button className="text-[11px] px-3 py-1 rounded-sm">4s</button>
                          <button className="text-[11px] px-3 py-1 rounded-sm">6s</button>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-32 h-32 mb-4">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="No data"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[13px] text-gray-600">Data not available</div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="scorecard" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <h3 className="text-[13px] font-semibold mb-4">Scorecard</h3>
                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-32 h-32 mb-4">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="No data"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[13px] text-gray-600">Scorecard not available</div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="squad" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <h3 className="text-[13px] font-semibold mb-4">Squad</h3>
                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-32 h-32 mb-4">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="No data"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[13px] text-gray-600">Squad information not available</div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="criclytics" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <h3 className="text-[13px] font-semibold mb-4">Criclytics</h3>
                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-32 h-32 mb-4">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="No data"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[13px] text-gray-600">Criclytics data not available</div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="overs" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <h3 className="text-[13px] font-semibold mb-4">Over by Over</h3>
                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-32 h-32 mb-4">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="No data"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[13px] text-gray-600">Over data not available</div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="news" className="mt-0">
                    <Card className="p-6 bg-white rounded-md shadow-sm">
                      <h3 className="text-[13px] font-semibold mb-4">Match News</h3>
                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-32 h-32 mb-4">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="No data"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[13px] text-gray-600">No news articles available</div>
                      </div>
                    </Card>
                  </TabsContent>
                </div>

                <div className="lg:col-span-1">
                  <Card className="p-6 bg-white rounded-md shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="h-4 w-4" />
                      <h3 className="text-[13px] font-semibold">Match Details</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">Mar 28, 2025, 7:30 PM</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Match Number:</span>
                        <span className="font-medium">{match.matchNumber}</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Toss Result:</span>
                        <span className="font-medium">-</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Venue:</span>
                        <span className="font-medium">{match.venue}</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Umpires:</span>
                        <span className="font-medium">-</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Match Referee:</span>
                        <span className="font-medium">-</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white rounded-md shadow-sm mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="h-4 w-4" />
                      <h3 className="text-[13px] font-semibold">Head to Head</h3>
                    </div>

                    <div className="text-[11px] text-gray-600 mb-4">
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
                        <span className="text-[13px]">vs</span>
                        <div
                          className="w-6 h-6 rounded-sm flex items-center justify-center"
                          style={{ backgroundColor: match.team2.color }}
                        >
                          <span className="text-white text-[10px] font-bold">{match.team2.shortName}</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-gray-500">*Last 3 years</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">No. of Matches</span>
                        <span className="font-medium">6</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">{match.team1.shortName} won</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">{match.team2.shortName} won</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-gray-600">Tie</span>
                        <span className="font-medium">0</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white rounded-md shadow-sm mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-4 w-4" />
                      <h3 className="text-[13px] font-semibold">Venue/Pitch Details</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-100 p-3 rounded-sm flex flex-col items-center justify-center">
                        <span className="text-[11px] text-gray-500">Not Available</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-sm flex flex-col items-center justify-center">
                        <span className="text-[11px] text-gray-500">Not Available</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-sm flex flex-col items-center justify-center">
                        <span className="text-[11px] text-gray-500">Not Available</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-[11px] text-gray-500">1st Batting Average</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[11px] text-gray-500">Highest Score Chased</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[11px] text-gray-500">No. of Matches</div>
                      </div>
                    </div>
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

