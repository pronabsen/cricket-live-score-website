import MainLayout from "@/components/layout/main-layout"
import MatchCarousel from "@/components/home/match-carousel"
import TrendingSection from "@/components/home/trending-section"
import FeaturedArticlesSection from "@/components/home/featured-articles"
import IPLCornerSection from "@/components/home/ipl-corner"
import PointsTable from "@/components/home/points-table"
import { liveMatches } from "@/data/matches"
import { iplStandings } from "@/data/standings"

export default function Home() {
  return (
    <MainLayout>
      {/* Live Matches Carousel */}
      <MatchCarousel matches={liveMatches} />

      {/* Trending Section */}
      <TrendingSection />

      {/* Main Content */}
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <FeaturedArticlesSection />
            <IPLCornerSection />
          </div>

          {/* Points Table */}
          <div className="lg:col-span-1">
            <PointsTable standings={iplStandings} seriesName="Indian Premier League, 2025" />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

