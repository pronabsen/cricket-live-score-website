import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LiveMatchCard } from "@/components/live-match-card"
import { UpcomingMatchCard } from "@/components/upcoming-match-card"
import { RecentMatchCard } from "@/components/recent-match-card"

export default function MatchesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cricket Matches</h1>

      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LiveMatchCard
              team1="India"
              team2="Australia"
              team1Score="245/6"
              team2Score="Yet to bat"
              matchStatus="India won the toss and elected to bat"
              matchType="3rd ODI"
              venue="Sydney Cricket Ground"
            />
            <LiveMatchCard
              team1="England"
              team2="South Africa"
              team1Score="189/4"
              team2Score="Yet to bat"
              matchStatus="England won the toss and elected to bat"
              matchType="2nd T20I"
              venue="Lord's Cricket Ground"
            />
            <LiveMatchCard
              team1="Pakistan"
              team2="New Zealand"
              team1Score="156/8"
              team2Score="102/3 (15.2 ov)"
              matchStatus="New Zealand need 55 runs in 28 balls"
              matchType="1st T20I"
              venue="Gaddafi Stadium"
            />
            <LiveMatchCard
              team1="Sri Lanka"
              team2="Bangladesh"
              team1Score="278/10"
              team2Score="156/4 (32.3 ov)"
              matchStatus="Bangladesh need 123 runs"
              matchType="2nd ODI"
              venue="R. Premadasa Stadium"
            />
            <LiveMatchCard
              team1="West Indies"
              team2="Zimbabwe"
              team1Score="302/7"
              team2Score="Yet to bat"
              matchStatus="West Indies won the toss and elected to bat"
              matchType="1st ODI"
              venue="Sabina Park"
            />
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UpcomingMatchCard
              team1="India"
              team2="Sri Lanka"
              matchType="1st Test"
              venue="M. Chinnaswamy Stadium, Bangalore"
              date="Mar 30, 2025"
              time="09:30 AM"
            />
            <UpcomingMatchCard
              team1="Australia"
              team2="West Indies"
              matchType="2nd ODI"
              venue="Melbourne Cricket Ground"
              date="Apr 2, 2025"
              time="02:30 PM"
            />
            <UpcomingMatchCard
              team1="England"
              team2="Pakistan"
              matchType="1st Test"
              venue="Edgbaston, Birmingham"
              date="Apr 5, 2025"
              time="11:00 AM"
            />
            <UpcomingMatchCard
              team1="South Africa"
              team2="New Zealand"
              matchType="3rd T20I"
              venue="Wanderers Stadium, Johannesburg"
              date="Apr 7, 2025"
              time="06:00 PM"
            />
            <UpcomingMatchCard
              team1="Bangladesh"
              team2="Afghanistan"
              matchType="1st ODI"
              venue="Shere Bangla Stadium, Dhaka"
              date="Apr 10, 2025"
              time="01:30 PM"
            />
            <UpcomingMatchCard
              team1="Zimbabwe"
              team2="Ireland"
              matchType="2nd T20I"
              venue="Harare Sports Club"
              date="Apr 12, 2025"
              time="04:00 PM"
            />
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecentMatchCard
              team1="Australia"
              team2="India"
              team1Score="352/8"
              team2Score="347/9"
              result="Australia won by 5 runs"
              matchType="2nd ODI"
              venue="Adelaide Oval"
              date="Mar 25, 2025"
            />
            <RecentMatchCard
              team1="South Africa"
              team2="England"
              team1Score="189/6"
              team2Score="190/4"
              result="England won by 6 wickets"
              matchType="1st T20I"
              venue="Newlands, Cape Town"
              date="Mar 23, 2025"
            />
            <RecentMatchCard
              team1="New Zealand"
              team2="Pakistan"
              team1Score="276/10"
              team2Score="230/10"
              result="New Zealand won by 46 runs"
              matchType="3rd ODI"
              venue="Basin Reserve, Wellington"
              date="Mar 21, 2025"
            />
            <RecentMatchCard
              team1="Sri Lanka"
              team2="Bangladesh"
              team1Score="302/8"
              team2Score="256/10"
              result="Sri Lanka won by 46 runs"
              matchType="1st ODI"
              venue="Pallekele International Stadium"
              date="Mar 19, 2025"
            />
            <RecentMatchCard
              team1="West Indies"
              team2="Afghanistan"
              team1Score="245/9"
              team2Score="248/6"
              result="Afghanistan won by 4 wickets"
              matchType="2nd T20I"
              venue="Kensington Oval, Barbados"
              date="Mar 17, 2025"
            />
            <RecentMatchCard
              team1="Ireland"
              team2="Scotland"
              team1Score="187/8"
              team2Score="183/9"
              result="Ireland won by 4 runs"
              matchType="3rd T20I"
              venue="Malahide, Dublin"
              date="Mar 15, 2025"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

