import Link from "next/link"
import { Newspaper } from "lucide-react"
import ArticleCard from "@/components/article/article-card"
import FeaturedArticle from "@/components/article/featured-article"

export default function FeaturedArticlesSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          <h2 className="font-bold">Featured Articles</h2>
        </div>
        <Link href="/news" className="text-blue-600 text-sm">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <FeaturedArticle
            image="/placeholder.svg?height=400&width=600"
            title="CSK vs RCB: Rusty Virat Kohli Plays The Slowest Knock Of IPL 2025"
            slug="csk-vs-rcb-rusty-virat-kohli"
          />
        </div>

        <div className="md:col-span-1 space-y-4">
          <ArticleCard
            image="/placeholder.svg?height=100&width=150"
            title="CSK vs RCB: Another Game, Another MS Dhoni Lightning-Fast Stumping"
            source="cricket.com"
            date="28 Mar 2025"
            slug="csk-vs-rcb-ms-dhoni-stumping"
          />

          <ArticleCard
            image="/placeholder.svg?height=100&width=150"
            title="Ruturaj Gaikwad Does A Ponting, Declares Padikkal Out After Controversial Catch"
            source="cricket.com"
            date="28 Mar 2025"
            slug="ruturaj-gaikwad-padikkal-catch"
          />

          <ArticleCard
            image="/placeholder.svg?height=100&width=150"
            title="Virat Kohli Sets All-Time IPL Record At Chepauk, Becomes Official CSK Nemesis"
            source="cricket.com"
            date="28 Mar 2025"
            slug="virat-kohli-ipl-record-chepauk"
          />
        </div>
      </div>
    </div>
  )
}

