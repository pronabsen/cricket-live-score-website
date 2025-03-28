import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Flag, Calendar, Trophy, TrendingUp, BarChart3 } from "lucide-react"

export default function PlayerProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch player data based on the slug
  // For this example, we'll use hardcoded data for Virat Kohli
  const player = {
    name: "Virat Kohli",
    country: "India",
    role: "Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    dateOfBirth: "November 5, 1988",
    age: "36 years",
    debut: {
      test: "June 20, 2011 vs West Indies",
      odi: "August 18, 2008 vs Sri Lanka",
      t20i: "June 12, 2010 vs Zimbabwe",
    },
    stats: {
      test: {
        matches: 111,
        innings: 187,
        runs: 8676,
        average: 49.29,
        hundreds: 29,
        fifties: 29,
        highestScore: "254*",
      },
      odi: {
        matches: 284,
        innings: 275,
        runs: 13848,
        average: 58.68,
        hundreds: 46,
        fifties: 65,
        highestScore: "183",
      },
      t20i: {
        matches: 115,
        innings: 107,
        runs: 4008,
        average: 52.73,
        hundreds: 1,
        fifties: 37,
        highestScore: "122*",
      },
    },
    recentForm: [
      { match: "India vs Australia, 3rd ODI", score: "85", date: "Mar 27, 2025" },
      { match: "India vs Australia, 2nd ODI", score: "104", date: "Mar 25, 2025" },
      { match: "India vs Australia, 1st ODI", score: "63", date: "Mar 22, 2025" },
      { match: "India vs South Africa, 2nd Test", score: "42", date: "Mar 15, 2025" },
      { match: "India vs South Africa, 1st Test", score: "76", date: "Mar 7, 2025" },
    ],
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-muted rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <User className="h-16 w-16" />
              </div>
              <CardTitle className="text-2xl">{player.name}</CardTitle>
              <CardDescription className="flex items-center justify-center gap-2">
                <Flag className="h-4 w-4" /> {player.country}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Role</div>
                  <div className="text-sm text-right">{player.role}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Batting</div>
                  <div className="text-sm text-right">{player.battingStyle}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Bowling</div>
                  <div className="text-sm text-right">{player.bowlingStyle}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Date of Birth</div>
                  <div className="text-sm text-right">{player.dateOfBirth}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Age</div>
                  <div className="text-sm text-right">{player.age}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Debut
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Test</div>
                  <div className="text-sm text-right">{player.debut.test}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">ODI</div>
                  <div className="text-sm text-right">{player.debut.odi}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">T20I</div>
                  <div className="text-sm text-right">{player.debut.t20i}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" /> Recent Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {player.recentForm.map((match, index) => (
                  <div key={index} className="grid grid-cols-[1fr_auto] gap-2">
                    <div>
                      <div className="text-sm font-medium">{match.match}</div>
                      <div className="text-xs text-muted-foreground">{match.date}</div>
                    </div>
                    <div className="text-sm font-bold">{match.score}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">{player.name}</h1>

          <Tabs defaultValue="stats" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="stats">Statistics</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="records">Records</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" /> Batting Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Format</th>
                          <th className="text-center py-3 px-2">M</th>
                          <th className="text-center py-3 px-2">Inn</th>
                          <th className="text-center py-3 px-2">Runs</th>
                          <th className="text-center py-3 px-2">Avg</th>
                          <th className="text-center py-3 px-2">100s</th>
                          <th className="text-center py-3 px-2">50s</th>
                          <th className="text-center py-3 px-2">HS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-2 font-medium">Test</td>
                          <td className="text-center py-3 px-2">{player.stats.test.matches}</td>
                          <td className="text-center py-3 px-2">{player.stats.test.innings}</td>
                          <td className="text-center py-3 px-2">{player.stats.test.runs}</td>
                          <td className="text-center py-3 px-2">{player.stats.test.average}</td>
                          <td className="text-center py-3 px-2">{player.stats.test.hundreds}</td>
                          <td className="text-center py-3 px-2">{player.stats.test.fifties}</td>
                          <td className="text-center py-3 px-2">{player.stats.test.highestScore}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-2 font-medium">ODI</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.matches}</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.innings}</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.runs}</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.average}</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.hundreds}</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.fifties}</td>
                          <td className="text-center py-3 px-2">{player.stats.odi.highestScore}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 font-medium">T20I</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.matches}</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.innings}</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.runs}</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.average}</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.hundreds}</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.fifties}</td>
                          <td className="text-center py-3 px-2">{player.stats.t20i.highestScore}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5" /> Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ICC ODI Player of the Year (2012, 2017, 2018)</li>
                    <li>ICC Test Player of the Year (2018)</li>
                    <li>ICC Cricketer of the Year (2017, 2018)</li>
                    <li>Wisden Leading Cricketer in the World (2016, 2017, 2018)</li>
                    <li>Padma Shri (2017)</li>
                    <li>Rajiv Gandhi Khel Ratna (2018)</li>
                    <li>Most centuries in ODI run chases</li>
                    <li>Fastest to reach 10,000 runs in ODIs</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="career" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Virat Kohli is widely regarded as one of the greatest batsmen in the history of cricket. His
                    aggressive batting style, combined with his fitness and mental strength, has made him a modern-day
                    legend.
                  </p>
                  <p className="mb-4">
                    Kohli made his ODI debut in 2008 against Sri Lanka at the age of 19. His Test debut came in 2011
                    against the West Indies. He quickly established himself as a key player in the Indian cricket team
                    across all formats.
                  </p>
                  <p className="mb-4">
                    In 2013, Kohli was appointed the vice-captain of the ODI team, and in 2014, he became the Test
                    captain after MS Dhoni's retirement from the format. In 2017, he took over as the captain in all
                    formats when Dhoni stepped down from limited-overs captaincy.
                  </p>
                  <p>
                    Under his captaincy, India reached the top of the ICC Test rankings and remained there for a
                    considerable period. He has led India to numerous series victories both at home and abroad,
                    including a historic Test series win in Australia in 2018-19.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">2008</h3>
                      <p>Made ODI debut against Sri Lanka</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2010</h3>
                      <p>Made T20I debut against Zimbabwe</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2011</h3>
                      <p>Made Test debut against West Indies</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2013</h3>
                      <p>Appointed vice-captain of the ODI team</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2014</h3>
                      <p>Became Test captain after MS Dhoni's retirement from the format</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2017</h3>
                      <p>Took over as captain in all formats</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2018</h3>
                      <p>Won ICC Cricketer of the Year, Test Player of the Year, and ODI Player of the Year</p>
                    </div>
                    <div>
                      <h3 className="font-bold">2019</h3>
                      <p>Led India to first-ever Test series win in Australia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="records" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Batting Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Fastest to reach 8,000, 9,000, 10,000, 11,000, and 12,000 runs in ODIs</li>
                    <li>Most double centuries as a captain in Test cricket</li>
                    <li>Most centuries in ODI run chases</li>
                    <li>Most centuries in successful ODI run chases</li>
                    <li>Most centuries (46) in ODIs as a non-opener</li>
                    <li>Most centuries in a calendar year across all formats (11 in 2017)</li>
                    <li>Most runs in a single T20 World Cup (319 in 2014)</li>
                    <li>Most runs in IPL history</li>
                    <li>Most fifties in T20Is</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Captaincy Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Most Test wins as Indian captain</li>
                    <li>Most consecutive Test series wins as captain (9)</li>
                    <li>First Indian captain to win a Test series in Australia</li>
                    <li>Most centuries as captain in ODIs</li>
                    <li>Most double centuries as captain in Test cricket</li>
                    <li>Most Test matches as captain for India</li>
                    <li>Most ODI matches as captain for India</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

