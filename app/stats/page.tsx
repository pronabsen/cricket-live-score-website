import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export default function StatsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cricket Statistics</h1>

      <Tabs defaultValue="batting" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="batting">Batting</TabsTrigger>
          <TabsTrigger value="bowling">Bowling</TabsTrigger>
          <TabsTrigger value="all-rounders">All-Rounders</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>

        <TabsContent value="batting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> Test Batting Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Joe Root</td>
                      <td className="py-3 px-2">England</td>
                      <td className="text-center py-3 px-2">897</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Marnus Labuschagne</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">885</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Steve Smith</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">881</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Kane Williamson</td>
                      <td className="py-3 px-2">New Zealand</td>
                      <td className="text-center py-3 px-2">879</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Virat Kohli</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">862</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> ODI Batting Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Babar Azam</td>
                      <td className="py-3 px-2">Pakistan</td>
                      <td className="text-center py-3 px-2">892</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Virat Kohli</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">886</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Rohit Sharma</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">871</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Quinton de Kock</td>
                      <td className="py-3 px-2">South Africa</td>
                      <td className="text-center py-3 px-2">865</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Shubman Gill</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">854</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> T20I Batting Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Suryakumar Yadav</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">887</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Mohammad Rizwan</td>
                      <td className="py-3 px-2">Pakistan</td>
                      <td className="text-center py-3 px-2">873</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Babar Azam</td>
                      <td className="py-3 px-2">Pakistan</td>
                      <td className="text-center py-3 px-2">865</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Aiden Markram</td>
                      <td className="py-3 px-2">South Africa</td>
                      <td className="text-center py-3 px-2">851</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Jos Buttler</td>
                      <td className="py-3 px-2">England</td>
                      <td className="text-center py-3 px-2">842</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bowling" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> Test Bowling Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Jasprit Bumrah</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">885</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Kagiso Rabada</td>
                      <td className="py-3 px-2">South Africa</td>
                      <td className="text-center py-3 px-2">875</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Pat Cummins</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">871</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Ravichandran Ashwin</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">862</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Josh Hazlewood</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">854</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> ODI Bowling Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Mohammed Siraj</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">746</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Josh Hazlewood</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">741</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Trent Boult</td>
                      <td className="py-3 px-2">New Zealand</td>
                      <td className="text-center py-3 px-2">737</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Mitchell Starc</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">718</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Kuldeep Yadav</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">712</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> T20I Bowling Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Rashid Khan</td>
                      <td className="py-3 px-2">Afghanistan</td>
                      <td className="text-center py-3 px-2">710</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Wanindu Hasaranga</td>
                      <td className="py-3 px-2">Sri Lanka</td>
                      <td className="text-center py-3 px-2">702</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Adil Rashid</td>
                      <td className="py-3 px-2">England</td>
                      <td className="text-center py-3 px-2">692</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Josh Hazlewood</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">690</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Tabraiz Shamsi</td>
                      <td className="py-3 px-2">South Africa</td>
                      <td className="text-center py-3 px-2">681</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all-rounders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> Test All-Rounders Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Ravindra Jadeja</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">450</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Ravichandran Ashwin</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">442</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Shakib Al Hasan</td>
                      <td className="py-3 px-2">Bangladesh</td>
                      <td className="text-center py-3 px-2">397</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Ben Stokes</td>
                      <td className="py-3 px-2">England</td>
                      <td className="text-center py-3 px-2">295</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Jason Holder</td>
                      <td className="py-3 px-2">West Indies</td>
                      <td className="text-center py-3 px-2">280</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> ODI All-Rounders Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Shakib Al Hasan</td>
                      <td className="py-3 px-2">Bangladesh</td>
                      <td className="text-center py-3 px-2">398</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Mohammad Nabi</td>
                      <td className="py-3 px-2">Afghanistan</td>
                      <td className="text-center py-3 px-2">342</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Hardik Pandya</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">335</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Mitchell Santner</td>
                      <td className="py-3 px-2">New Zealand</td>
                      <td className="text-center py-3 px-2">329</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Rashid Khan</td>
                      <td className="py-3 px-2">Afghanistan</td>
                      <td className="text-center py-3 px-2">318</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> T20I All-Rounders Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Player</th>
                      <th className="text-left py-3 px-2">Country</th>
                      <th className="text-center py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Shakib Al Hasan</td>
                      <td className="py-3 px-2">Bangladesh</td>
                      <td className="text-center py-3 px-2">295</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Hardik Pandya</td>
                      <td className="py-3 px-2">India</td>
                      <td className="text-center py-3 px-2">280</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Mohammad Nabi</td>
                      <td className="py-3 px-2">Afghanistan</td>
                      <td className="text-center py-3 px-2">275</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">Marcus Stoinis</td>
                      <td className="py-3 px-2">Australia</td>
                      <td className="text-center py-3 px-2">268</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Wanindu Hasaranga</td>
                      <td className="py-3 px-2">Sri Lanka</td>
                      <td className="text-center py-3 px-2">262</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> Test Team Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Team</th>
                      <th className="text-center py-3 px-2">Rating</th>
                      <th className="text-center py-3 px-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">India</td>
                      <td className="text-center py-3 px-2">121</td>
                      <td className="text-center py-3 px-2">5,028</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">Australia</td>
                      <td className="text-center py-3 px-2">118</td>
                      <td className="text-center py-3 px-2">4,898</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">England</td>
                      <td className="text-center py-3 px-2">112</td>
                      <td className="text-center py-3 px-2">4,622</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">South Africa</td>
                      <td className="text-center py-3 px-2">104</td>
                      <td className="text-center py-3 px-2">4,206</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">New Zealand</td>
                      <td className="text-center py-3 px-2">102</td>
                      <td className="text-center py-3 px-2">4,042</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> ODI Team Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Team</th>
                      <th className="text-center py-3 px-2">Rating</th>
                      <th className="text-center py-3 px-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">Australia</td>
                      <td className="text-center py-3 px-2">121</td>
                      <td className="text-center py-3 px-2">4,818</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">India</td>
                      <td className="text-center py-3 px-2">117</td>
                      <td className="text-center py-3 px-2">4,642</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">South Africa</td>
                      <td className="text-center py-3 px-2">112</td>
                      <td className="text-center py-3 px-2">4,406</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">England</td>
                      <td className="text-center py-3 px-2">110</td>
                      <td className="text-center py-3 px-2">4,312</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">New Zealand</td>
                      <td className="text-center py-3 px-2">107</td>
                      <td className="text-center py-3 px-2">4,208</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> T20I Team Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Team</th>
                      <th className="text-center py-3 px-2">Rating</th>
                      <th className="text-center py-3 px-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">1</td>
                      <td className="py-3 px-2 font-medium">India</td>
                      <td className="text-center py-3 px-2">267</td>
                      <td className="text-center py-3 px-2">11,380</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">2</td>
                      <td className="py-3 px-2 font-medium">England</td>
                      <td className="text-center py-3 px-2">261</td>
                      <td className="text-center py-3 px-2">10,958</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">3</td>
                      <td className="py-3 px-2 font-medium">Pakistan</td>
                      <td className="text-center py-3 px-2">255</td>
                      <td className="text-center py-3 px-2">10,730</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">4</td>
                      <td className="py-3 px-2 font-medium">South Africa</td>
                      <td className="text-center py-3 px-2">252</td>
                      <td className="text-center py-3 px-2">10,584</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">5</td>
                      <td className="py-3 px-2 font-medium">Australia</td>
                      <td className="text-center py-3 px-2">251</td>
                      <td className="text-center py-3 px-2">10,542</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

