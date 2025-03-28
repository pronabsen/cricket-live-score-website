import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar } from "lucide-react"

export default function IPLPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar - Same as home page */}
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
                <Trophy className="h-4 w-4" />
                <span>Series</span>
              </Link>
              {/* Other nav items */}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">IPL 2025</h1>

          <Tabs defaultValue="points" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="points">Points Table</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>

            <TabsContent value="points">
              <Card>
                <CardHeader>
                  <CardTitle>IPL 2025 Points Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Team</th>
                          <th className="text-center py-3 px-2">M</th>
                          <th className="text-center py-3 px-2">W</th>
                          <th className="text-center py-3 px-2">L</th>
                          <th className="text-center py-3 px-2">NR</th>
                          <th className="text-center py-3 px-2">PT</th>
                          <th className="text-center py-3 px-2">NRR</th>
                        </tr>
                      </thead>
                      <tbody>{/* Table rows similar to home page */}</tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tab contents */}
          </Tabs>
        </div>
      </main>

      <footer className="border-t py-6 bg-[#0a1929] text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose md:text-left">© 2025 CricketScore360. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

