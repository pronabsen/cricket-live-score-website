import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TopPlayersCard } from "@/components/top-players-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayersPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cricket Players</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input placeholder="Search players..." className="max-w-md" />
        <Button>Search</Button>
      </div>

      <Tabs defaultValue="batsmen" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="batsmen">Batsmen</TabsTrigger>
          <TabsTrigger value="bowlers">Bowlers</TabsTrigger>
          <TabsTrigger value="all-rounders">All-Rounders</TabsTrigger>
          <TabsTrigger value="wicket-keepers">Wicket-Keepers</TabsTrigger>
        </TabsList>

        <TabsContent value="batsmen" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TopPlayersCard name="Virat Kohli" country="India" role="Batsman" ranking="1" recentForm="Excellent" />
            <TopPlayersCard name="Kane Williamson" country="New Zealand" role="Batsman" ranking="2" recentForm="Good" />
            <TopPlayersCard name="Joe Root" country="England" role="Batsman" ranking="3" recentForm="Excellent" />
            <TopPlayersCard name="Steve Smith" country="Australia" role="Batsman" ranking="4" recentForm="Good" />
            <TopPlayersCard name="Babar Azam" country="Pakistan" role="Batsman" ranking="5" recentForm="Average" />
            <TopPlayersCard name="David Warner" country="Australia" role="Batsman" ranking="6" recentForm="Good" />
            <TopPlayersCard name="Rohit Sharma" country="India" role="Batsman" ranking="7" recentForm="Good" />
            <TopPlayersCard
              name="Marnus Labuschagne"
              country="Australia"
              role="Batsman"
              ranking="8"
              recentForm="Average"
            />
          </div>
        </TabsContent>

        <TabsContent value="bowlers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TopPlayersCard name="Jasprit Bumrah" country="India" role="Bowler" ranking="1" recentForm="Excellent" />
            <TopPlayersCard name="Rashid Khan" country="Afghanistan" role="Bowler" ranking="2" recentForm="Excellent" />
            <TopPlayersCard name="Pat Cummins" country="Australia" role="Bowler" ranking="3" recentForm="Good" />
            <TopPlayersCard name="Kagiso Rabada" country="South Africa" role="Bowler" ranking="4" recentForm="Good" />
            <TopPlayersCard name="Trent Boult" country="New Zealand" role="Bowler" ranking="5" recentForm="Average" />
            <TopPlayersCard name="Josh Hazlewood" country="Australia" role="Bowler" ranking="6" recentForm="Good" />
            <TopPlayersCard name="Mohammed Shami" country="India" role="Bowler" ranking="7" recentForm="Good" />
            <TopPlayersCard name="Mitchell Starc" country="Australia" role="Bowler" ranking="8" recentForm="Average" />
          </div>
        </TabsContent>

        <TabsContent value="all-rounders" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TopPlayersCard name="Ben Stokes" country="England" role="All-Rounder" ranking="1" recentForm="Excellent" />
            <TopPlayersCard
              name="Shakib Al Hasan"
              country="Bangladesh"
              role="All-Rounder"
              ranking="2"
              recentForm="Good"
            />
            <TopPlayersCard name="Ravindra Jadeja" country="India" role="All-Rounder" ranking="3" recentForm="Good" />
            <TopPlayersCard
              name="Jason Holder"
              country="West Indies"
              role="All-Rounder"
              ranking="4"
              recentForm="Average"
            />
            <TopPlayersCard
              name="Mitchell Marsh"
              country="Australia"
              role="All-Rounder"
              ranking="5"
              recentForm="Good"
            />
            <TopPlayersCard name="Hardik Pandya" country="India" role="All-Rounder" ranking="6" recentForm="Average" />
            <TopPlayersCard name="Chris Woakes" country="England" role="All-Rounder" ranking="7" recentForm="Good" />
            <TopPlayersCard
              name="Wanindu Hasaranga"
              country="Sri Lanka"
              role="All-Rounder"
              ranking="8"
              recentForm="Good"
            />
          </div>
        </TabsContent>

        <TabsContent value="wicket-keepers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TopPlayersCard
              name="Jos Buttler"
              country="England"
              role="Wicket-Keeper"
              ranking="1"
              recentForm="Excellent"
            />
            <TopPlayersCard name="Rishabh Pant" country="India" role="Wicket-Keeper" ranking="2" recentForm="Good" />
            <TopPlayersCard
              name="Quinton de Kock"
              country="South Africa"
              role="Wicket-Keeper"
              ranking="3"
              recentForm="Good"
            />
            <TopPlayersCard
              name="Mohammad Rizwan"
              country="Pakistan"
              role="Wicket-Keeper"
              ranking="4"
              recentForm="Good"
            />
            <TopPlayersCard
              name="Alex Carey"
              country="Australia"
              role="Wicket-Keeper"
              ranking="5"
              recentForm="Average"
            />
            <TopPlayersCard
              name="Tom Latham"
              country="New Zealand"
              role="Wicket-Keeper"
              ranking="6"
              recentForm="Good"
            />
            <TopPlayersCard
              name="Nicholas Pooran"
              country="West Indies"
              role="Wicket-Keeper"
              ranking="7"
              recentForm="Average"
            />
            <TopPlayersCard name="KL Rahul" country="India" role="Wicket-Keeper" ranking="8" recentForm="Average" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

