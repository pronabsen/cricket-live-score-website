import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendingSection() {
  return (
    <div className="container py-4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center mb-2">
          <h2 className="text-red-600 font-bold">Trending</h2>
        </div>
        <Tabs defaultValue="points" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="points">IPL 2025 Points Table</TabsTrigger>
            <TabsTrigger value="orange">IPL 2025 Orange Cap</TabsTrigger>
            <TabsTrigger value="purple">IPL 2025 Purple Cap</TabsTrigger>
            <TabsTrigger value="schedule">IPL 2025 Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="points">
            <div className="text-sm text-muted-foreground">
              View the latest IPL 2025 points table with team standings, matches played, and net run rate.
            </div>
          </TabsContent>

          <TabsContent value="orange">
            <div className="text-sm text-muted-foreground">
              Check out the leading run-scorers in IPL 2025 competing for the Orange Cap.
            </div>
          </TabsContent>

          <TabsContent value="purple">
            <div className="text-sm text-muted-foreground">
              See the top wicket-takers in IPL 2025 competing for the Purple Cap.
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="text-sm text-muted-foreground">
              View the complete schedule of IPL 2025 matches with dates, times, and venues.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

