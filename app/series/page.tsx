import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedSeriesCard } from "@/components/featured-series-card"

export default function SeriesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cricket Series</h1>

      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedSeriesCard
              title="India vs Australia"
              subtitle="ODI Series"
              status="Live"
              matchesPlayed="2"
              totalMatches="5"
              currentStanding="India 1-1 Australia"
            />
            <FeaturedSeriesCard
              title="England vs South Africa"
              subtitle="T20I Series"
              status="Live"
              matchesPlayed="1"
              totalMatches="3"
              currentStanding="England 1-0 South Africa"
            />
            <FeaturedSeriesCard
              title="Pakistan vs New Zealand"
              subtitle="T20I Series"
              status="Live"
              matchesPlayed="0"
              totalMatches="3"
              currentStanding="1st T20I in progress"
            />
            <FeaturedSeriesCard
              title="Sri Lanka vs Bangladesh"
              subtitle="ODI Series"
              status="Live"
              matchesPlayed="1"
              totalMatches="3"
              currentStanding="Sri Lanka 1-0 Bangladesh"
            />
            <FeaturedSeriesCard
              title="West Indies vs Zimbabwe"
              subtitle="ODI Series"
              status="Live"
              matchesPlayed="0"
              totalMatches="3"
              currentStanding="1st ODI in progress"
            />
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedSeriesCard
              title="ICC T20 World Cup 2025"
              subtitle="T20 Tournament"
              status="Upcoming"
              matchesPlayed="0"
              totalMatches="45"
              currentStanding="Starts Jun 4, 2025"
            />
            <FeaturedSeriesCard
              title="The Ashes 2024-25"
              subtitle="Test Series"
              status="Upcoming"
              matchesPlayed="0"
              totalMatches="5"
              currentStanding="Starts Nov 22, 2025"
            />
            <FeaturedSeriesCard
              title="India vs Sri Lanka"
              subtitle="Test Series"
              status="Upcoming"
              matchesPlayed="0"
              totalMatches="3"
              currentStanding="Starts Mar 30, 2025"
            />
            <FeaturedSeriesCard
              title="Australia vs West Indies"
              subtitle="ODI Series"
              status="Upcoming"
              matchesPlayed="0"
              totalMatches="5"
              currentStanding="Starts Apr 2, 2025"
            />
            <FeaturedSeriesCard
              title="England vs Pakistan"
              subtitle="Test Series"
              status="Upcoming"
              matchesPlayed="0"
              totalMatches="3"
              currentStanding="Starts Apr 5, 2025"
            />
            <FeaturedSeriesCard
              title="IPL 2025"
              subtitle="T20 League"
              status="Upcoming"
              matchesPlayed="0"
              totalMatches="74"
              currentStanding="Starts Apr 15, 2025"
            />
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedSeriesCard
              title="New Zealand vs Pakistan"
              subtitle="ODI Series"
              status="Completed"
              matchesPlayed="3"
              totalMatches="3"
              currentStanding="New Zealand 2-1 Pakistan"
            />
            <FeaturedSeriesCard
              title="West Indies vs Afghanistan"
              subtitle="T20I Series"
              status="Completed"
              matchesPlayed="3"
              totalMatches="3"
              currentStanding="Afghanistan 2-1 West Indies"
            />
            <FeaturedSeriesCard
              title="Ireland vs Scotland"
              subtitle="T20I Series"
              status="Completed"
              matchesPlayed="3"
              totalMatches="3"
              currentStanding="Ireland 2-1 Scotland"
            />
            <FeaturedSeriesCard
              title="South Africa vs India"
              subtitle="Test Series"
              status="Completed"
              matchesPlayed="2"
              totalMatches="2"
              currentStanding="Series drawn 1-1"
            />
            <FeaturedSeriesCard
              title="Bangladesh vs Afghanistan"
              subtitle="T20I Series"
              status="Completed"
              matchesPlayed="3"
              totalMatches="3"
              currentStanding="Bangladesh 2-1 Afghanistan"
            />
            <FeaturedSeriesCard
              title="Australia vs England"
              subtitle="ODI Series"
              status="Completed"
              matchesPlayed="5"
              totalMatches="5"
              currentStanding="Australia 3-2 England"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

